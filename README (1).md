<div align="center">

# CivicFlow
### Smart City Information Portal

City information, citizen services and civic request tracking in one place.

**[Open the live application](https://pratik0sharma.github.io/CivicFlow/)** · **[Explore the source](https://github.com/PRATIK0SHARMA/CivicFlow)**

**HTML5 · CSS3 · JavaScript · LocalStorage · GitHub Pages**

</div>

---

## About the project

CivicFlow is a Smart City Information Portal that brings everyday civic information and request management into a single web interface. Residents can explore city services, find public places, view transport schedules, discover events and follow local notices. They can also report an issue or raise a service enquiry and track its progress through a chronological timeline.

The project demonstrates how a citizen-facing portal and an operations workspace can support the same civic workflow. It uses the fictional city of **Navanagar** for sample information.

### Live application

**https://pratik0sharma.github.io/CivicFlow/**

Open the website directly in your browser. No installation is required.

## Features

| Module | What it offers |
|---|---|
| **City overview** | Global search, quick actions, city notices and counts calculated from local requests |
| **Citizen services** | Searchable service listings, ward/category filters, detailed guidance and service enquiries |
| **Explore the city** | Places, parks, cultural destinations and community facilities |
| **Transport** | Sample routes, stops and published timetables |
| **Events and notices** | Community activities and city announcements |
| **Issue reporting** | Validated forms, location details and generated request references |
| **My requests** | Status tracking, filters and chronological progress histories |
| **City operations** | Request review, department assignment, progress notes and status updates |
| **Content management** | Create, edit, archive and restore city directory entries |
| **Data management** | Filtered queue-page CSV export, JSON backup/restore and local activity history |

## Explore the two workspaces

### Citizen workspace

Use the main navigation to browse information, submit an issue or service enquiry, and open **My requests** to view progress. The profile button lets you create and switch between local demonstration profiles.

### Operations workspace

Select **City operations → Open demo operations**. The workspace contains:

- **Request queue** — review requests, assign departments and record progress.
- **City content** — manage the public directory and its visibility.
- **Settings** — change the local city name, manage the sample banner and back up data.
- **Activity** — review recent local operations.

Both workspaces are part of the same application. Their navigation does not depend on separate folders.

## Request lifecycle

| Current status | Available next steps |
|---|---|
| Received | Add a note, begin work, or reject with an explanation |
| In progress | Record progress, resolve, or reject |
| Resolved | Add a note or reopen to In progress |
| Rejected | Add a note or reopen to In progress |

A request begins as **Received**. Each operations update requires a note and adds an event to the timeline. Requests must move through **In progress** before they can be marked **Resolved**.

## Technology

| Layer | Implementation |
|---|---|
| Structure | Semantic HTML and native form controls |
| Presentation | Responsive CSS, card directories and table views |
| Application logic | Vanilla JavaScript with hash-based navigation |
| Persistence | Browser LocalStorage |
| Hosting | GitHub Pages |
| Assets | Local SVG icon and inline city illustration |

The deployed edition has no build step, third-party runtime packages, external font dependencies or API keys.

## Demonstration scope

This GitHub Pages edition stores records **in the current browser**. Requests and content edits survive normal page reloads, but they are not synchronized between visitors or devices. Export a JSON backup before clearing browser data.

Local profiles and the operations workspace are **demonstration controls, not authenticated accounts or secure administrator access**. Use fictional information only. Requests are not sent to a real municipality. Timetables and city listings are sample data; payments, emergency dispatch and live vehicle tracking are outside the scope.

The original backend-based design used server-side identity and database storage. This static edition adapts its main workflows for a self-contained public demonstration. A shared production service would require a backend with verified authentication, authorization and persistent database storage.

## Project structure

| File | Responsibility |
|---|---|
| `index.html` | Application entry point and page shell |
| `styles.css` | Layout, typography and responsive styling |
| `data.js` | Sample city directory |
| `app.js` | Navigation, validation, requests, operations and persistence |
| `assets/favicon.svg` | Application icon |
| `.nojekyll` | Static publishing configuration |
| `IMPLEMENTATION.md` | Architecture and implementation notes |
| `TESTING.md` | Verification record and remaining acceptance checks |
| `tests.cjs` | Dependency-free logic checks |

## Run locally

Open `index.html` in a modern browser, or serve the project folder with Python for consistent browser storage behavior:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. No package installation is required.

Optional logic checks, with Node.js installed:

```bash
node tests.cjs
```

See [Implementation notes](IMPLEMENTATION.md) and [Testing record](TESTING.md) for technical details. Earlier backend test results belong to the original version and do not describe this static edition.

## Academic project

**Pratik Sharma**  
Bachelor of Technology  
Department of Computer Science & Technology  
Coochbehar Government Engineering College, West Bengal

**Project guide:** Mr Sourav Chatterjee

---

<div align="center">

**[Visit CivicFlow](https://pratik0sharma.github.io/CivicFlow/)**

</div>
