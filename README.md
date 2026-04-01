# Bite Club

A simple React + TypeScript app that searches restaurant data by postcode and displays the first 10 results taken from the API: https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}.

Developed by Janilee Svaerdstaal

## GitHub

Repository: https://github.com/PiX3L-NoMAD/bite-club.git 

## What this project does

- Sends a UK postcode to a simple backend server
- Calls the Just Eat API from the backend and receives restaurant data based on the given postcode
- Filters and transforms the response data into clean `Restaurant` (Typescript) Types
- Displays the first 10 restaurant cards with:
  - name
  - cuisines
  - rating as a number
  - address

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Express (backend proxy)

## How to run it

1. Install the frontend dependencies:

```bash
npm install
```

2. Start the backend proxy server in a second terminal:

```bash
cd server
npm install
node index.js
```

3. Start the frontend app in the other terminal window:

```bash
cd ..
npm run dev
```

4. Open the browser at the local Vite URL mentioned in the terminal output.

## What each file does

- `src/api/axios.ts` for fetching and transforming restaurant data
- `src/components/SearchPage.tsx` for postcode input
- `src/components/SearchBar.tsx` as a reusable input Search Bar component
- `src/components/ResultsPage.tsx` and `RestaurantCard.tsx` (also a reusable component) for rendering the results
- `server/index.js` as a simple Express proxy to avoid CORS issues
- `./wireframe/Bite-Club-wireframe` provides a JPG of my planning and visual idea for the app

## Assumptions

- The API returns restaurant objects with the requested fields
- The postcode is a valid UK postcode string
- Only the first 10 restaurants are shown, as requested
- CORS is managed by the local Express server rather than calling the API directly from the browser

## Improvements I would make

- Add loading and error states with clearer UI feedback
- Add real postcode validation before calling the API
- Add tests for data transformation and components
- Cross-check name and address with another API (Google Maps or Royal Mail) so that all Restaurant data appears with uniform styling across all restaurant cards
- Improve the responsive layout and card spacing
- Add Pagination and a Sort-function for user to see which restaurants are closest to them
- Further separation of concerns in the code

## Branch / dev notes

The project history is kept inside the branches in the GitHub history to show development progress:

1. `feature/data-transformation`
   - handled API response and shaped restaurant objects
   - limited results to the first 10 items
2. `feature/render-list`
   - rendered the restaurant list on screen
3. `feature/restaurant-card`
   - added a reusable card component
   - corrected address data clean-up for more consistent display
4. `feature/search-input`
   - added postcode input and dynamic fetch support
   - added the Tailwind styling for a clean layout to the whole App

## Final Notes

This project has been requested as part of an assessment.
