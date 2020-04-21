//html elements
const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const modalBackdrop = document.getElementById("backdrop");
const modalCancelButtonEl = addMovieModal.querySelector(".btn--passive");
const documentBody = document.getElementsByTagName("body");
const confirmAddMovieButton = modalCancelButtonEl.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
//logic variables
const movies = [];

//**** HANDLERS */

//remove movie option from ui
const handleDeleteMovie = (movieId) => {};

//remove modal backdrop
const handleCancelMovieButton = () => {
  toggleMovieModal();
  clearMovieInputs();
};

//handle add movie button in add movie modal
const handleconfirmAddMovieButton = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  //validate input
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please fill out all values. Ratings are between 1-5.");
  }

  const newMovie = {
    id: titleValue,
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInputs();
  renderMovieEl(newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

//clears movie inputs in modal
const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

/*******RENDER TO UI ****/

//renders movie element to movie list section
const renderMovieEl = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  const listRoot = document.getElementById("movie-list");

  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div className="movie-element__image">
    <img src="${imageUrl} alt="${title}">  
  </div>
  <div className="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}</p>
  </div>`;

  newMovieElement.addEventListener("click", deleteMovieElement);
  listRoot.append(newMovieElement);
};

//add movie elements to update ui
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

//adds modal backdrop
const toggleModalBackDrop = () => {
  modalBackdrop.classList.toggle("visible");
};

//renders movie modal
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleModalBackDrop();
};

//if click outside backdrop it will clear
modalBackdrop.addEventListener("click", toggleModalBackDrop);

//BUTTONS
modalCancelButtonEl.addEventListener("click", handleCancelMovieButton);

//start button to add movie
startAddMovieButton.addEventListener("click", toggleMovieModal);

//add movie button
confirmAddMovieButton.addEventListener("click", handleconfirmAddMovieButton);
