$(".search-button").on(`click`, function () {
  $.ajax({
    url:
      `http://www.omdbapi.com/?apikey=7242ca90&s=` + $(".input-keyword").val(),
    success: (results) => {
      // const movies = results;
      const movies = results.Search;
      console.log(movies);
      let cards = ``;
      movies.forEach((movie) => (cards += showCards(movie)));
      $(".movie-container").html(cards);

      // If `Show Details` Clicked:
      $(".modal-detail-button").on(`click`, function () {
        console.log($(this).data("bs-imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=7242ca90&i=" +
            $(this).data("bs-imdbid"),
          success: (movie) => {
            const movieDetails = showMovieDetails(movie);
            $(".modal-body").html(movieDetails);
          },
        });
      });
    },
    error: (error) => {
      console.log(error.responseText);
    },
  });
});

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
      data-bs-target="#movieDetailModal" data-bs-imdbid ="${movie.imdbID}">Show Details</a>
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
