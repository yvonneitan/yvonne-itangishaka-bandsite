const showsData = [
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

//   <section class="shows">
//             <h2 class="shows__title">Shows</h2>
//             <div class="shows__list">
//                 <div class="shows__item">
//                     <!-- <h2 class="shows__category">DATE</h2>
//                     <h3 class="shows__date">Mon Sept 09 2024</h3>

//                     <h2 class="shows__category">VENUE</h2>
//                     <p class="shows__venue">Ronald Lane </p>
//                     <h2 class="shows__category">LOCATION</h2>
//                     <p class="shows__location">San Francisco, CA</p>
//                     <button class="shows__button">BUY TICKETS</button> -->
//                 </div>
//             </div>
//         </section>
  

function generateShows(shows) {
  const showsList = document.querySelector('.shows__list');
  
  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    const showItem = document.createElement('div');
    showItem.classList.add('shows__item');

    const dateCategory = document.createElement('h2');
    dateCategory.classList.add('shows__category');
    dateCategory.innerText = 'DATE';
    const date = document.createElement('h3');
    date.classList.add('shows__date');
    date.innerText = show.date;

    const venueCategory = document.createElement('h2');
    venueCategory.classList.add('shows__category');
    venueCategory.innerText = 'VENUE';
    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerText = show.venue;

    const locationCategory = document.createElement('h2');
    locationCategory.classList.add('shows__category');
    locationCategory.innerText = 'LOCATION';
    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerText = show.location;

    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.innerText = 'BUY TICKETS';

    showItem.append(dateCategory, date, venueCategory, venue, locationCategory, location, button);

    showsList.appendChild(showItem);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateShows(showsData);
});
