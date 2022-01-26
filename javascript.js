const numero = Number(prompt("Digite um numero:"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; // aqui a gente começa a manipular o html. colocamos o que quisemos la no navegador nesse elemento numero titulo
texto.innerHTML += `<p> Raiz quadrada é ${numero**5)}.</p>`;
texto.innerHTML += `<p> ${numero}é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Number.isNaN(numero).</p>`;
