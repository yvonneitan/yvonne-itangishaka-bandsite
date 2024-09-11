


const arrDates = [
  {
    date: 'Mon Sept 09 2024',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 17 2024',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Oct 12 2024',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 16 2024',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  }
];



function displayShows(arr) {
  const shows = document.querySelector(".shows")

  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  shows.appendChild(showsTitle);

  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container")
  shows.appendChild(showsContainer);

  const titleEl = document.createElement("div");
  titleEl.classList.add("shows__top");
  showsContainer.appendChild(titleEl);

  const datesEl = document.createElement("h3");
  datesEl.classList.add("shows__top-date");
  datesEl.innerText = "DATES";
  titleEl.appendChild(datesEl);

  const venueEl = document.createElement("h3");
  venueEl.classList.add("shows__top-venue");
  venueEl.innerText = "VENUE";
  titleEl.appendChild(venueEl);

  const locationsEl = document.createElement("h3");
  locationsEl.classList.add("shows__top-location");
  locationsEl.innerText = "LOCATION";
  titleEl.appendChild(locationsEl);

  const hiddenEl = document.createElement("span");
  hiddenEl.classList.add("shows__hidden")
  hiddenEl.innerText = ".";
  titleEl.appendChild(hiddenEl);


  for(let key in arrDates) {

      //container div
      const showsParent = document.createElement("div");
      showsParent.classList.add("shows__new");
      showsContainer.appendChild(showsParent);


      //Date
      const dateTitle = document.createElement("h4");
      dateTitle.classList.add("shows__date");
      dateTitle.innerText = "DATE";
      showsParent.appendChild(dateTitle);

      //Actual Date
      const dateShow = document.createElement("h3");
      dateShow.classList.add("shows__date-actual");
      dateShow.innerText = arrDates[key]["date"];
      showsParent.appendChild(dateShow);

      //Venue
      const venueTitle = document.createElement("h4");
      venueTitle.classList.add("shows__venue");
      venueTitle.innerText = "VENUE";
      showsParent.appendChild(venueTitle);

      //Actual Venue
      const venueShow = document.createElement("h3");
      venueShow.classList.add("shows__venue-actual");
      venueShow.innerText = arrDates[key]["venue"];
      showsParent.appendChild(venueShow);

      //Location
      const locationTitle = document.createElement("h4");
      locationTitle.classList.add("shows__location");
      locationTitle.innerText = "LOCATION";
      showsParent.appendChild(locationTitle);

      //Actual Location
      const locationShow = document.createElement("h3");
      locationShow.classList.add("shows__location-actual");
      locationShow.innerText = arrDates[key]["location"];
      showsParent.appendChild(locationShow);

      //Button
      const buyTickets = document.createElement("button");
      buyTickets.classList.add("shows__button");
      buyTickets.innerText = "BUY TICKETS";
      showsParent.appendChild(buyTickets);
  }
}

displayShows(arrDates);

