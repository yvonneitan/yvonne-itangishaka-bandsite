
import api from "./band-site-api.js";

function parseDate(timestamp) {
  if (!timestamp) {
    console.error("Invalid timestamp:", timestamp);
    return new Date();
  }

  return new Date(Number(timestamp));
}

function displayShows(arr) {
  
  const shows = document.querySelector(".shows");

  // Add the main title
  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  shows.appendChild(showsTitle);

  // Container for all shows
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");
  shows.appendChild(showsContainer);

  // Create the labels for Dates, Venue, Location
  const titleEl = document.createElement("div");
  titleEl.classList.add("shows__top");
  showsContainer.appendChild(titleEl);

  const datesEl = document.createElement("h3");
  datesEl.classList.add("shows__top--date");
  datesEl.innerText = "DATES";
  titleEl.appendChild(datesEl);

  const venueEl = document.createElement("h3");
  venueEl.classList.add("shows__top--venue");
  venueEl.innerText = "VENUE";
  titleEl.appendChild(venueEl);

  const locationsEl = document.createElement("h3");
  locationsEl.classList.add("shows__top--location");
  locationsEl.innerText = "LOCATION";
  titleEl.appendChild(locationsEl);

  const hiddenEl = document.createElement("span");
  hiddenEl.classList.add("shows__hidden");
  hiddenEl.innerText = ".";
  titleEl.appendChild(hiddenEl);

  // Loop through the array using a traditional for loop
  for (let i = 0; i < arr.length; i++) {
    const show = arr[i];
    // Create a container for each show
    const showsParent = document.createElement("div");
    showsParent.classList.add("shows__new");
    showsContainer.appendChild(showsParent);

    // Date Label
    const dateTitle = document.createElement("h4");
    dateTitle.classList.add("shows__date");
    dateTitle.innerText = "DATE";
    showsParent.appendChild(dateTitle);

    // Actual Date
    const dateShow = document.createElement("h3");
    dateShow.classList.add("shows__date--actual");
    dateShow.innerText = parseDate(show.date).toDateString();
    showsParent.appendChild(dateShow);

    // Venue Label
    const venueTitle = document.createElement("h4");
    venueTitle.classList.add("shows__venue");
    venueTitle.innerText = "VENUE";
    showsParent.appendChild(venueTitle);

    // Actual Venue
    const venueShow = document.createElement("h3");
    venueShow.classList.add("shows__venue--actual");
    venueShow.innerText = show.place;
    showsParent.appendChild(venueShow);

    // Location Label
    const locationTitle = document.createElement("h4");
    locationTitle.classList.add("shows__location");
    locationTitle.innerText = "LOCATION";
    showsParent.appendChild(locationTitle);

    // Actual Location
    const locationShow = document.createElement("h3");
    locationShow.classList.add("shows__location--actual");
    locationShow.innerText = show.location;
    showsParent.appendChild(locationShow);

    // Buy Tickets Button
    const buyTickets = document.createElement("button");
    buyTickets.classList.add("shows__button");
    buyTickets.innerText = "BUY TICKETS";
    showsParent.appendChild(buyTickets);
  }
}
// get shows and display shows
async function getShowsAndDisplayShows() {
  try {
    const showsData = await api.getShows(); 
    displayShows(showsData); 
  } catch (error) {
    console.error("Error getting and displaying shows:", error);
  }
}

getShowsAndDisplayShows();