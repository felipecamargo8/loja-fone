const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
let index = 0;

$heart.addEventListener("click", handleClickHeart);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleStar);
});

function handleStar() {
  this.classList.toggle("-active");
}

function handleClickHeart() {
  $heart.classList.toggle("-active");
}
