import { LookerEmbedSDK } from "@looker/embed-sdk";

LookerEmbedSDK.init(
  "https://dev.looker.com",
  "http://localhost:3001/signed-url"
);

const dashboardId = 13;
let dashboardRef;

LookerEmbedSDK.createDashboardWithId(dashboardId)
  // Append to the #dashboard element
  .appendTo("#dashboard")
  // Listen to embedded JS events (Full list of events: https://docs.looker.com/reference/embedding/embed-javascript-events)
  // .on('dashboard:filters:changed', () => {
  //   // Do something
  // })
  .withNext()
  // Set the initial filters
  //   .withFilters({ 'State / Region': 'California' })
  // Finalize the build
  .build()
  // Connect to Looker
  .connect()
  // Finish up setup
  .then((dashboard) => {
    dashboardRef = dashboard;
  })
  // Log if something went wrong
  .catch((error) => {
    console.error("Connection error", error);
  });
