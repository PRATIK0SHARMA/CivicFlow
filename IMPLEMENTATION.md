# CivicFlow implementation

## Reconstruction basis

The shared project conversation names citizen services, city exploration, issue reporting, saved timelines, protected operations and content management. The current Smart City Information Portal report further describes ward/category filters, transport, events, notices, department assignment, status transitions, content archiving, settings and page-scoped CSV export.

The private live interface was not accessible without authentication. The visual design in this package is a fresh interpretation: an off-white desktop sidebar, forest-green overview, lime accents, locally drawn skyline, card directories, structured request tables and native dialogs. It is not an exact copy of the original UI.

## Static architecture

`index.html` loads `styles.css`, then `data.js` and `app.js` in order using deferred scripts. Hash navigation (`#home`, `#services`, etc.) works beneath GitHub repository subpaths and does not need server rewrites. Assets use relative paths.

The app has no runtime dependencies. Plain JavaScript avoids a package installation, framework build, service credentials and vendor-specific hosting adapter. The entire public UI can be served by GitHub Pages. There is no service worker; deployments are not hidden by an app-managed offline cache.

## Data model

A versioned JSON document is stored at localStorage key `civicflow.pages.v1`:

- `settings`: city name and sample banner visibility.
- `profiles`: local display profiles; `currentProfile` chooses a UI context.
- `catalog`: type, category, ward, description, details, schedule, visibility, version.
- `requests`: owner profile, reference, service snapshot, subject, location, description, current status, department, timestamps and history.
- `audit`: latest 200 operations, local actor label and timestamp.

Fresh installations seed only fictional directory entries. Request statistics are computed from saved requests; no invented operational counts are shown.

Before changing data, `commit` reloads the latest stored document, applies the mutation to a clone and writes it. In-memory state is updated only after storage succeeds. A failed save leaves the form available. Other tabs receive the browser storage event. Record versions detect sequential stale edits. localStorage has no multi-tab transaction/CAS guarantee, so simultaneous writes can still race. This is not equivalent to the original SQL transaction or production concurrency control.

A form receives one stable ID; a repeated submission of that form returns its existing request. Human-readable references use part of the request ID. These are demonstration identifiers, not an official municipal numbering system.

## Request workflow

| Current state | Allowed next states |
|---|---|
| Received | Received, In progress, Rejected |
| In progress | In progress, Resolved, Rejected |
| Resolved | Resolved, In progress |
| Rejected | Rejected, In progress |

Same-state updates allow progress notes and department changes. Each update requires a note. Reopening goes through In progress. Direct Received → Resolved is not allowed. Every update appends an event with status, note, actor, time and department.

## Content and exports

Archiving hides an entry from public browsing while keeping its record. Historic enquiries retain the service title even if the current entry changes. Restore republishes an archived entry.

CSV export includes only the current filtered queue page. Cells are quoted, quotes escaped and leading spreadsheet formula characters neutralized. JSON backup export contains the entire local document. Import checks structure, field lengths, IDs, expected types and enums before replacing anything. Backups larger than 5 MB are rejected. Request lists paginate at ten records.

## Security boundary

There is intentionally no simulated password gate. Client-side passwords or hardcoded administrator codes would create a misleading appearance of protection. Local profiles are a demonstration convenience, not access control. The entire local state can be inspected or changed by the browser owner. UI-level request filtering is not authorization.

Rendered data is HTML-escaped; user-supplied links and scripts are not accepted. The deployment does not require credentials, keys, cookies from the original site, or a backend connection. It uses no analytics or external image/font requests.

For real deployment: add a trusted backend; authenticate users using verified sessions; authorize every record read/write on the server; replace localStorage with a transactional database; validate server-side; add CSRF/origin protections as appropriate, rate limits, audit retention, backup/recovery and privacy controls. Do not expose the original gateway-dependent backend on another domain without replacing its identity trust mechanism.

## Accessibility and portability

Native controls, labels, a skip link, modal dialogs, status announcements, visible focus and responsive CSS support keyboard and small-screen use. Browser testing is recorded in TESTING.md; this is not a certified accessibility conformance statement.

Use a current Chrome, Edge, Firefox or Safari. Local file storage behavior varies, so HTTP preview or GitHub Pages is preferable. No network is needed after the app files have loaded, but reopening an uncached page still requires hosting access.

## Scope exclusions

Secure accounts, cross-device synchronization, a real staff inbox, live transport tracking, emergency dispatch, payment processing, permit approval, SMS/email notifications and file uploads are not implemented. These were either outside the original documented scope or depend on a backend removed for static hosting.
