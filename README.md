# Embed SDK Demo

## Installation

From root project folder:

- `cd client && npm install`
- `cd api && npm install`

To run backend server:

- In the api folder, make a copy of `.env.example` called `.env`, filling out values for empty environment variables in `.env`
- Run `node index.js`
- Server should be running on http://localhost:3001

To build front end:

- In the client folder, in `src/demo.js`, update `dashboardId` with a value corresponding to the dashboard you want to embed.
- Run `npm run start` to build .js output
- Open `index.html` in browser. Embedded dashboard should be displayed properly.

## Troubleshooting

- View the network tab when index.html is opened in your browser. Ensure that the http://localhost:3001/signed-url endpoint is returning proper JSON (server must be running).
- Ensure that the dashboardId you provided in `demo.js` is a valid dashboard id.
- Ensure that after you ran `npm run start`, a `dist/demo.js` file was created in `client`
