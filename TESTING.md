# Verification record

Verified 1 November 2026. These checks apply only to this static reconstruction.

## Automated checks

Run from this folder with Node.js installed (not required for hosting):

```sh
node --check app.js
node --check data.js
node tests.cjs
```

Twelve dependency-free logic checks passed: seed structure and empty request counts, invalid backup schema, duplicate catalog IDs, invalid profile references, HTML escaping, CSV escaping/formula neutralization, prohibited direct resolution, reopening, successful persistence, failed-storage state preservation, reloading the latest stored state, and invalid catalog types.

These tests use a lightweight DOM stub and do not replace browser tests.

## Browser checks completed

| Check | Observed result |
|---|---|
| Desktop overview | Sidebar, skyline, search, actions, cards, notices and counts rendered |
| Issue form | Valid fictional issue submitted and acknowledged with a reference |
| Request list | Submitted issue visible with Received status |
| Operations gate | Explicit demonstration-access notice shown |
| Workflow options | Received allowed In progress/Rejected, not direct Resolved |
| Department update | Public Works assignment and In progress note saved |
| History | Received and In progress events displayed chronologically |
| Persistence | Updated request present after browser reload |
| Content creation | New exploration entry appeared in content table |
| Archive/restore | Visibility changed to Archived, then Published |
| CSV | Browser received queue-page CSV download event |
| JSON backup | Browser received JSON download event |
| Local profiles | New profile created; its request list initially empty |
| Service search | Searching water reduced the service directory to one result |
| Service detail/enquiry | Service detail opened; linked enquiry submitted with reference |

## Remaining acceptance checks

- Mobile device rendering and real touch navigation.
- Firefox, Safari and Edge compatibility.
- Full keyboard and screen-reader walkthrough; no WCAG certification claimed.
- Browser file upload/import round-trip, reset flow and operating-system print dialog.
- Simultaneous multi-tab stress tests; localStorage is not a transactional database.
- Large-volume pagination testing.
- Actual GitHub Pages deployment, which requires uploading to the user's repository.

Browser tests used a temporary local preview. Test records and profiles were browser data and are not shipped in the ZIP. The source starts with no requests and one Guest profile.
