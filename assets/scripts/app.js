const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const modalBackdrop = document.getElementById("backdrop");
const modalCancelButtonEl = addMovieModal.querySelector(".btn--passive");
const documentBody = document.getElementsByTagName("body");
const confirmAddMovieButton = modalCancelButtonEl.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const alertModal = document.getElementById("alert-modal");
console.log(userInputs);

//remove modal backdrop
const handleCancelModalBackdrop = () => {
  toggleMovieModal();
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

//handle add movie button in add movie modal
const handleconfirmAddMovieButton = () => {
  const title = userInputs[0].value.trim();
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  //validate input
  if (
    title.trim() === "" ||
    imageUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please fill out all values. Ratings are between 1-5.");
  }
};

//if click outside backdrop it will clear
modalBackdrop.addEventListener("click", toggleModalBackDrop);

//BUTTONS
modalCancelButtonEl.addEventListener("click", handleCancelModalBackdrop);

//start button to add movie
startAddMovieButton.addEventListener("click", toggleMovieModal);

//add movie button
confirmAddMovieButton.addEventListener("click", handleconfirmAddMovieButton);
