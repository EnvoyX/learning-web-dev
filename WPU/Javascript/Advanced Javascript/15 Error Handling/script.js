// 12 Fetch (.then() & .catch())

// const searchButton = document.querySelector(`.search-button`);
// searchButton.addEventListener(`click`, function () {
//   const inputKeyword = document.querySelector(`.input-keyword`);
//   fetch(`http://www.omdbapi.com/?apikey=7242ca90&s=` + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);

//       const movies = response.Search;
//       console.log(movies);

//       let cards = ``;
//       movies.forEach((movie) => (cards += showCards(movie)));
//       const movieSearchContainer = document.querySelector(`.movie-container`);
//       movieSearchContainer.innerHTML = cards;

//       // If "Details" button is clicked
//       const movieModalDetails =
//         document.querySelectorAll(`.modal-detail-button`);

//       movieModalDetails.forEach((btn) => {
//         btn.addEventListener(`click`, function () {
//           console.log(this);
//           const imdbid = this.dataset.imdbid;
//           console.log(imdbid);
//           console.log("http://www.omdbapi.com/?apikey=7242ca90&i=" + imdbid);
//           fetch("http://www.omdbapi.com/?apikey=7242ca90&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetails = showMovieDetails(m);
//               const movieModalBody = document.querySelector(`.modal-body`);
//               movieModalBody.innerHTML = movieDetails;
//             });
//         });
//       });
//     });
// });

// 13 Fetch Refactoring (with async and await)
// 15 Error Handling

const searchButton = document.querySelector(`.search-button`);
searchButton.addEventListener(`click`, async function () {
  try {
    const inputKeyword = document.querySelector(`.input-keyword`);
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);
    updateUI(movies);
  } catch (error) {
    console.log(error);
    alert(error);
  }
});

// if "details" button clicked
// with event binding
document.addEventListener(`click`, async function (event) {
  if (event.target.classList.contains("modal-detail-button")) {
    try {
      const imdbID = event.target.dataset.imdbid;
      const moviesDetail = await getMoviesDetail(imdbID);
      updateDetailUI(moviesDetail);
    } catch (error) {
      alert(error);
    }
  }
});

// function declarations

// Return value if Promise is resolved or throw new Error(errorMessage) to be catch by Async Funtion
function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=7242ca90&s=` + keyword)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = ``;
  movies.forEach((movie) => (cards += showCards(movie)));
  const movieSearchContainer = document.querySelector(`.movie-container`);
  movieSearchContainer.innerHTML = cards;
}

function getMoviesDetail(imbdIDKey) {
  return fetch(`http://www.omdbapi.com/?apikey=7242ca90&i=` + imbdIDKey)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log(response);
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      console.log(response);
      return response;
    });
}

function updateDetailUI(movie) {
  const movieDetailInfo = showMovieDetails(movie);
  const modalMovieDetail = document.querySelector(`.modal-body`);
  modalMovieDetail.innerHTML = movieDetailInfo;
}

function showCards(movie) {
  return `<div class="col-md-4 my-5">
          <div class="card" style="width: 18rem">
            <img src="${movie.Poster}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                ${movie.Year}
              </h6>
              <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal"
      data-bs-target="#movieDetailModal" data-bs-imdbid ="${movie.imdbID}" data-imdbid ="${movie.imdbID}">Show Details</a>
            </div>
          </div>
        </div>`;
}
function showMovieDetails(movie) {
  return `<div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <img src="${movie.Poster}" class="img-fluid" alt="" />
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                    <li class="list-group-item">
                      <strong>Relased : </strong> ${movie.Released}
                    </li>
                    <li class="list-group-item">
                      <strong>Runtime : </strong> ${movie.Runtime}
                    </li>
                    <li class="list-group-item">
                      <strong>Rated : </strong> ${movie.Rated}
                    </li>
                    <li class="list-group-item">
                      <strong>BoxOffice : </strong> ${movie.BoxOffice}
                    </li>
                    <li class="list-group-item">
                      <strong>Awards : </strong> ${movie.Awards}
                    </li>
                    <li class="list-group-item">
                      <strong>Genre : </strong> ${movie.Genre}
                    </li>
                    <li class="list-group-item">
                      <strong>Language : </strong> ${movie.Language}
                    </li>
                    <li class="list-group-item">
                      <strong>Country : </strong> ${movie.Country}
                    </li>
                    <li class="list-group-item">
                      <strong>Director : </strong> ${movie.Director}
                    </li>
                    <li class="list-group-item">
                      <strong>Actors: </strong>${movie.Actors}
                    </li>
                    <li class="list-group-item">
                      <strong>Writer : </strong> ${movie.Writer}
                    </li>
                    <li class="list-group-item">
                      <strong>Plot : </strong><br />${movie.Plot}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
}