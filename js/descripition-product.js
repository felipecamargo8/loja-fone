const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;
/* Variavel devolve o tamanho do arrail o menos um, pois inicia em 0*/
$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", fistStar);
  }

  if (key == positionLast) {
    $star.addEventListener("click", lastStar);
  }

  if (key > 0 && key < positionLast) {
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
});
//esta função pega a key das estrelas  de qual foi clicada e preenche as anterior
function middleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}
// esta função Preenche todas as estrelas e/ou remove ate a primeira estrela
function fistStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}
// essa função preenche as estrelas todas clicando na estrela do fim
function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}

function handleClick() {
  this.classList.toggle("-active");
}
