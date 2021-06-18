const addMovieModal = document.querySelector('.modal');
const addMovieBtn = document.querySelector('.movie-btn');
const cancelBtn = document.querySelector('.btn--passive');
const addMovieOnModal = document.querySelector('.btn--success');
let movieList = [];

function openModal (){
    document.getElementById("add-modal").style.display = "block";
}

function toggleBackdrop(){
    document.getElementById("backdrop").style.display = "block";
}

function closeModal(){
    document.getElementById("add-modal").style.display = "none";
}

function hideBackdrop(){
    document.getElementById("backdrop").style.display = "none";
}

function inputValues(){
   let movieTittle = document.getElementById("title").value;
   let image = document.getElementById("image-url").value;
   let rating = document.getElementById("rating").value;

   movieList.push(movieTittle);
   movieList.push(image)
   movieList.push(rating)
   console.log(movieList);
}
    
addMovieBtn.addEventListener('click', openModal);
addMovieBtn.addEventListener('click', toggleBackdrop);

cancelBtn.addEventListener('click', hideBackdrop);
cancelBtn.addEventListener('click', closeModal);

addMovieOnModal.addEventListener('click', inputValues);













