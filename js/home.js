let valorInicial = 10; //variavel com let  quando preciso mudar o valor de uma variavel
const $second = window.document.querySelector(".-second");

$second.addEventListener("click", handClick);

function handClick() {
  const $carrinho = document.querySelector(".-last");
  // valorInicial++;
  // valorInicial = valorInicial + 1;
  // valorInicial += 1;
  // $carrinho.textContent = ++valorInicial;
  // se os sinais de ++ ficar a esquerda do valor da variavel e soma primeiro
  // depois atribue, se ficar a direita atribue depois soma
  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
