# Google Sheets contact form

`Code.gs` receives the public site's contact form and appends submissions to a
dedicated `Contactos` tab. The web app is not deployed from GitHub Pages; it must
be deployed from the Google account that owns or can edit the destination sheet.

## Setup

1. Open the destination spreadsheet and choose **Extensions > Apps Script**.
2. Replace the editor's `Code.gs` with the contents of this folder's `Code.gs`.
3. In **Project Settings > Script properties**, add
   `CONTACT_SPREADSHEET_ID` with the ID from the spreadsheet URL.
4. Save, then choose **Deploy > New deployment > Web app**.
5. Set **Execute as** to your account and **Who has access** to **Anyone** so
   visitors can submit without signing in. Authorize the requested spreadsheet
   access and deploy.
6. Copy the deployed URL ending in `/exec` and provide it to the site maintainer.
   The site's form stays disabled until that URL is configured.

The script creates a `Contactos` tab if it does not exist and writes a header row
when the tab is empty. It does not expose spreadsheet contents. The endpoint is
public, so keep the form's honeypot, rate limits, and input validation in place;
never put Google credentials or tokens in the website.
