document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  
  // Optional: Add dummy form handling for login and signup
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login Successful!');
  });
  
  document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup Successful! Welcome to Omniplex.');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
      loop: true, // Enables continuous loop mode
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay even after user interaction
      },
      slidesPerView: 1, // Number of slides visible at once
      spaceBetween: 30, // Space between slides (in px)
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allows pagination dots to be clickable
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  $('input').on('change', function() {
    $('body').toggleClass('blue');
  });







// ###########################################

const renderMovies = (movieList) => {
  movieResults.innerHTML = '';
  if (!movieList || movieList.length === 0) {
      movieResults.innerHTML = '<p>No movies found.</p>';
      return;
  }
  movieList.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
          <img src="${movie.Poster !== 'N/A' ? movie.Poster : './images/placeholder.jpg'}" alt="${movie.Title}">
          <div class="movie-details">
              <h3>${movie.Title}</h3>
              <p>${movie.Type} | ${movie.Year}</p>
              <button class="btn-primary book-now" data-id="${movie.imdbID}">Book Now</button>
          </div>
      `;
      movieResults.appendChild(movieCard);
  });

  // Add click event for "Book Now" buttons
  const bookNowButtons = document.querySelectorAll('.book-now');
  bookNowButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const movieId = event.target.dataset.id;
          window.location.href = `movie-introduction.html?id=${movieId}`;
      });
  });
};
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'fbc4868';
    const API_URL = 'https://www.omdbapi.com/';
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    const fetchMovieDetails = async (id) => {
        try {
            const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
            const data = await response.json();
            if (data.Response === 'True') {
                document.getElementById('movie-poster').src = data.Poster !== 'N/A' ? data.Poster : './images/placeholder.jpg';
                document.getElementById('movie-title').textContent = data.Title;
                document.getElementById('movie-plot').textContent = data.Plot;
                document.getElementById('movie-year').textContent = data.Year;
                document.getElementById('movie-genre').textContent = data.Genre;
                document.getElementById('movie-rating').textContent = data.imdbRating;
            } else {
                document.getElementById('movie-intro').innerHTML = `<p>${data.Error}</p>`;
            }
        } catch (error) {
            document.getElementById('movie-intro').innerHTML = `<p>Failed to fetch movie details. Please try again later.</p>`;
        }
    };

    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        document.getElementById('movie-intro').innerHTML = `<p>Invalid Movie ID.</p>`;
    }
});





  