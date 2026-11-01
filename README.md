# CivicFlow — GitHub Pages edition

A ready-to-upload Smart City Information Portal. No build, npm, API keys, credit card, database setup or paid hosting is required for this browser-local demonstration.

## Publish on GitHub in five steps

1. Extract **CivicFlow_GitHub_Pages.zip**. Open the extracted folder containing `index.html`, `app.js`, `data.js`, `styles.css`, and `assets`.
2. Sign in to GitHub. Create a **Public** repository named `civicflow`. Public repositories can use GitHub Pages on GitHub Free.
3. In that repository, select **Add file → Upload files**. Drag the extracted files **and the assets folder** into the upload area. Commit to `main`. Do not upload only the ZIP, and do not put everything inside another parent folder: `index.html` must be visible at the repository root.
4. Open **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, and **Folder: / (root)**. Click **Save**.
5. Allow up to ten minutes. Return to **Settings → Pages** and click **Visit site**.

Your address will follow this pattern:

`https://YOUR-GITHUB-USERNAME.github.io/civicflow/`

Replace the placeholder with your GitHub username. This is an address pattern, not a site already deployed for you. It contains no ChatGPT domain. You do not need to purchase a domain.

For a shorter root address, create a repository named exactly `YOUR-GITHUB-USERNAME.github.io`, then follow the same steps. Its address will be `https://YOUR-GITHUB-USERNAME.github.io/`.

There is **no build command**, **no environment variable** and **no deployment secret**. The included `.nojekyll` is optional for this plain static project; include it if your file picker shows it. No Actions YAML is needed.

Official documentation:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Try before publishing

Open `index.html` in a modern browser. For predictable local storage behavior, use a local HTTP server if Python is already installed:

```sh
python -m http.server 8000
```

On Windows, `py -m http.server 8000` may be the available command. Run it from the extracted project folder, then visit `http://localhost:8000`. This is optional; GitHub deployment requires no Python.

## Demonstrate the project

1. Open **Citizen services**. Search and filter by ward/category. Open a card and submit a service enquiry.
2. On **Overview**, select **Report an issue**. Enter fictional information and submit. Note the generated reference.
3. Open **My requests** and inspect the saved timeline.
4. Open **City operations → Open demo operations**. Open the request, assign a department, select **In progress** and add a note. Save.
5. Open it again, select **Resolved**, add a note and save. Return to **My requests** to see the complete timeline.
6. Open **City operations → City content** to add/edit entries, archive them or restore them.
7. Use **Settings** to change the local city name and sample banner, export a JSON backup, or restore a backup.
8. Use **Request queue → Export this page** to download filtered queue records as CSV.
9. Select the profile button to create/switch local demonstration profiles. Each profile has a separate request list in the UI.

## What is included

- Overview with global search, quick actions, notices and actual local request counts.
- Citizen services, city exploration, transport timetables, events and notices.
- Ward/category/search filters and detail dialogs.
- Issue and service-enquiry forms with validation and generated references.
- Persistent browser-local requests and chronological histories.
- Department assignment, required update notes and controlled status transitions.
- Content creation, editing, archiving/restoration and city settings.
- Queue filtering, pagination, CSV export and activity log.
- JSON backup/restore with structural validation.
- Local demonstration profiles, keyboard-accessible dialogs and responsive layout.
- All assets stored locally; no CDN, tracking or external font dependencies.

## What is different from the original hosted application

This is an independent reconstruction of the documented CivicFlow workflows, not the recovered original ZIP. The private original website required sign-in and could not be visually inspected, so exact visual parity is not claimed.

GitHub Pages hosts static files. This edition therefore uses localStorage instead of a server and D1 database. Each browser has independent data. Requests created by a visitor will **not** appear on your computer. Local profiles are **not** authenticated accounts. Anyone on the same browser can open the demonstration operations area. There are no passwords or secret activation codes because secrets in public JavaScript cannot secure an administrator role.

For actual shared citizen accounts and protected administration, a backend with verified identity, authorization and database storage is necessary. That is a separate integration, not included or represented as active here.

The original report describes React, server APIs, D1, gateway authentication and backend testing. Those architectural claims and earlier test results do **not** describe this static reconstruction. Use IMPLEMENTATION.md and TESTING.md when explaining this version in your viva.

## Keep your data

Local storage normally survives reloads, but clearing browser/site data, private browsing, a changed domain or a changed browser can remove or isolate it. Export a backup before changing the URL or clearing data. Never put a backup containing private data in a public repository.

Administration edits are local. To change the default content for **all visitors**, edit `data.js` in GitHub and commit it. Existing visitors retain their saved local data; use the reset option after exporting a backup if they need fresh defaults. Change the initial city name in `initial()` in `app.js` for a permanent default.

## Troubleshooting

- **404:** Check that `index.html` is at the root of `main`, and Pages is set to `main / (root)`. Wait for deployment to finish.
- **Unstyled or blank:** Make sure `styles.css`, `data.js`, `app.js`, and the `assets` folder were uploaded with their exact names. Try a hard refresh.
- **Requests missing on another device:** Expected: data is browser-local. Export/import a backup to transfer demonstration records.
- **Save fails:** Allow site storage or free browser storage. The form stays open when a save fails.
- **Old entries still appear after editing data.js:** Existing local data is retained intentionally. Export a backup and reset the local demonstration.
- **Cannot resolve a newly received request:** Move it to **In progress** first, then **Resolved**. Rejected/resolved requests can be reopened to **In progress**.

## File map

| File | Purpose |
|---|---|
| index.html | Application shell and entry point |
| styles.css | Responsive layout and visual styling |
| data.js | Fictional city directory seed |
| app.js | Navigation, forms, storage, workflows, export/import |
| assets/favicon.svg | Local brand icon |
| .nojekyll | Optional instruction to serve static files without Jekyll |
| README.md | This deployment and demonstration guide |
| IMPLEMENTATION.md | Architecture, decisions and limitations |
| TESTING.md | Verification record and manual test plan |
| tests.cjs | Dependency-free Node logic checks; optional for deployment |

No credentials, original private setup files or citizen records are included.
