// Data to be sent in the POST request (in JSON format)
// const postData = {
//   title: "Movie title",
//   image: "../images/block_image.png",
// };

// fetch(
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&api_key=04c35731a5ee918f014970082a0088b1"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     data.results.forEach((movie) => {
//       console.log(movie.title);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const posterImg = document.createElement("img");
// posterImg.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path;

//////////////////////////////////////////// Timer ////////////////////////////////////////////

// Set the date we're counting down to
var countDownDate = new Date("Apr 19, 2024 22:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("release").innerHTML = "Released";
    document.getElementById("timer").display = "none";
  }
}, 1000);
