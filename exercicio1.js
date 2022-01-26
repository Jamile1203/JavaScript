//function meuEscopo(){
  //  var form = document.querySelector('.form');

/* form.onsubmit = function(evento){
    evento.preventDefault();
        alert(1)
      console.log('Foi enviado')
    };
*/
// segunda forma de fazer:
function meuEscopo(){
      const form = document.querySelector('.form');
      const resultado = document.querySelector('.resultado')

      const pessoas = [];

function recebeEventoForm(evento){
   evento.preventDefault();

    var nome = form.querySelector('.nome');
    var sobrenome = form.querySelector('.sobrenome');
    var peso = form.querySelector('.peso');
    var altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value   
       });
       
     console.log(pessoas);

       resultado.innerhtml += `<p> ${nome.value},${sobrenome.value},${peso.value},${altura.value}</p>`;
}
form.addEventListener('submit', recebeEventoForm);

}  
    

    meuEscopo();
