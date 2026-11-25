var CONTACTS_SHEET_NAME = "Contactos";
var CONTACTS_HEADERS = ["Fecha", "Nombre", "Correo electrónico", "Motivo", "Mensaje"];
var CONTACT_TOPICS = {
  consulta: true,
  prensa: true,
  actividades: true,
  colaboracion: true,
};

function doGet() {
  return HtmlService.createHtmlOutput("Servicio de contacto disponible.");
}

function doPost(e) {
  var parameters = e && e.parameter ? e.parameter : {};
  var requestId = String(parameters.requestId || "");

  if (!/^[a-zA-Z0-9-]{16,80}$/.test(requestId)) {
    return responsePage_("", false, "Solicitud no válida.");
  }

  if (String(parameters.website || "").trim()) {
    return responsePage_(requestId, false, "No se pudo procesar la consulta.");
  }

  var contact = {
    name: cleanSingleLine_(parameters.name),
    email: cleanSingleLine_(parameters.email).toLowerCase(),
    topic: cleanSingleLine_(parameters.topic),
    message: cleanMessage_(parameters.message),
  };
  var validationMessage = validateContact_(contact);

  if (validationMessage) {
    return responsePage_(requestId, false, validationMessage);
  }

  var lock = LockService.getScriptLock();

  if (!lock.tryLock(5000)) {
    return responsePage_(requestId, false, "No fue posible procesar la consulta. Inténtalo nuevamente.");
  }

  try {
    var cache = CacheService.getScriptCache();
    var emailKey = "contact:email:" + hash_(contact.email);
    var minuteKey = "contact:minute:" + Math.floor(Date.now() / 60000);

    if (cache.get(emailKey)) {
      return responsePage_(requestId, false, "Ya recibimos una consulta desde este correo hace poco.");
    }

    var submissionsThisMinute = Number(cache.get(minuteKey) || 0);

    if (submissionsThisMinute >= 20) {
      return responsePage_(requestId, false, "Se alcanzó el límite temporal de consultas. Inténtalo más tarde.");
    }

    var spreadsheetId = PropertiesService.getScriptProperties().getProperty("CONTACT_SPREADSHEET_ID");

    if (!spreadsheetId) {
      throw new Error("Falta la propiedad CONTACT_SPREADSHEET_ID.");
    }

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName(CONTACTS_SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(CONTACTS_SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, CONTACTS_HEADERS.length).setValues([CONTACTS_HEADERS]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      safeCell_(contact.name),
      safeCell_(contact.email),
      safeCell_(contact.topic),
      safeCell_(contact.message),
    ]);

    cache.put(emailKey, "1", 60);
    cache.put(minuteKey, String(submissionsThisMinute + 1), 65);

    return responsePage_(requestId, true, "Recibimos tu consulta. Gracias.");
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return responsePage_(requestId, false, "No se pudo guardar la consulta. Inténtalo más tarde o escríbenos por Instagram.");
  } finally {
    lock.releaseLock();
  }
}

function validateContact_(contact) {
  if (!contact.name || contact.name.length > 120) {
    return "Escribe un nombre de hasta 120 caracteres.";
  }

  if (
    contact.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
  ) {
    return "Revisa el correo electrónico ingresado.";
  }

  if (!CONTACT_TOPICS[contact.topic]) {
    return "Selecciona un motivo de contacto válido.";
  }

  if (!contact.message || contact.message.length > 3000) {
    return "Escribe un mensaje de hasta 3000 caracteres.";
  }

  return "";
}

function cleanSingleLine_(value) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
}

function cleanMessage_(value) {
  return String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
}

function safeCell_(value) {
  var text = String(value);
  return /^[\s]*[=+\-@]/.test(text) ? "'" + text : text;
}

function hash_(value) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value);
  return Utilities.base64EncodeWebSafe(digest).replace(/=+$/g, "");
}

function responsePage_(requestId, ok, message) {
  var payload = JSON.stringify({
    type: "contenido-publico-contact-response",
    requestId: requestId,
    ok: ok,
    message: message,
  }).replace(/</g, "\\u003c");
  var html = "<!doctype html><html><head><meta charset=\"utf-8\"></head><body><script>" +
    "window.parent.postMessage(" + payload + ", \"*\");" +
    "</script></body></html>";

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
