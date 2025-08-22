const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const qualityFilter = document.getElementById('qualityFilter');
const yearFilter = document.getElementById('yearFilter');
const sortBy = document.getElementById('sortBy');

// Render movies function
function renderMovies(movies) {
  movieGrid.innerHTML = '';
  
  if (movies.length === 0) {
    movieGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No movies found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  // Your code here
  
  
  movies.forEach((movie, index) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Single star + rating
    const ratingHtml = `<i class="fas fa-star"></i> <span>${movie.rating}</span>`;
    
    card.innerHTML = `
      <div class="poster-container">
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
      </div>
      <div class="movie-info">
        <div class="movie-meta-top">
          <div class="movie-rating">${ratingHtml}</div>
          <div class="movie-quality">${movie.quality}</div>
          <div class="movie-year">${movie.year}</div>
        </div>
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span class="movie-id">#${movie.id.toString().padStart(2, '0')}</span>
          <div class="movie-actions">
            <button class="action-btn"><i class="fas fa-heart"></i></button>
            <button class="action-btn"><i class="fas fa-bookmark"></i></button>
            <button class="action-btn"><i class="fas fa-info"></i></button>
          </div>
        </div>
      </div>
    `;
    
    movieGrid.appendChild(card);
  });
}

// Filter and sort movies
function filterAndSortMovies() {
  const searchTerm = searchInput.value.toLowerCase();
  const qualityValue = qualityFilter.value;
  const yearValue = yearFilter.value;
  const sortValue = sortBy.value;
  
  let filteredMovies = mockMovieData.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
    const matchesQuality = qualityValue === 'all' || movie.quality === qualityValue;
    const matchesYear = yearValue === 'all' || Math.floor(movie.year / 10) * 10 === parseInt(yearValue);
    
    return matchesSearch && matchesQuality && matchesYear;
  });
  
  // Sort movies
  if (sortValue === 'rating') {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === 'year') {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === 'title') {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  renderMovies(filteredMovies);
}

// Event listeners
searchInput.addEventListener('input', filterAndSortMovies);
qualityFilter.addEventListener('change', filterAndSortMovies);
yearFilter.addEventListener('change', filterAndSortMovies);
sortBy.addEventListener('change', filterAndSortMovies);

// Initial render
document.addEventListener('DOMContentLoaded', function() {
  renderMovies(mockMovieData);
});
