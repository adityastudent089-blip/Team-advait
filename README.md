# CampusLoop — Campus Events Hub

A responsive, student-focused event discovery and organising frontend built with React, Vite, Tailwind CSS, and custom CSS.

## Run locally

1. Install Node.js LTS from https://nodejs.org if it is not already installed.
2. Extract this project and open the `eventhub` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Included

- Browse and search events across college fests, music, conferences, sports, arts & culture, and community events.
- Filter events by category.
- Event detail modal with demo registration interaction.
- Save/bookmark events locally during the current session.
- Example event-day schedule and venue details.
- Event idea submission form with client-side validation and confirmation state.
- Responsive navigation and layouts for phones, tablets, and desktop.
- Lazy-loaded event card images and reduced-motion support.

## Notes

This is a frontend demo. Event registration, saved events, and event submissions are kept in React state only; they are not sent to a backend or saved after refreshing. Event content and prices are illustrative. Photos are loaded from Unsplash and require an internet connection.
