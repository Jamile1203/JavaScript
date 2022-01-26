var elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
  ];
   
  // O for vai iterar sobre os elementos do array
  for (var elemento of elementos) {
    // Cada elemento é um objeto do array
    console.log(elemento)
  }
   
  /*
  Saída:
  { tag: 'p', texto: 'Qualquer texto que você quiser.' }
  { tag: 'div', texto: 'Frase 2' }
  { tag: 'section', texto: 'Frase 3' }
  { tag: 'footer', texto: 'Frase 4' }
  */
  //Agora desestruturando:
  
var elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
  ];
   
  // O for vai iterar sobre os elementos do array
  for (var elemento of elementos) {
    // Se eu quero desestruturar o objeto
    // que, como descrevi, é "elemento"
    // eu uso:
    var {tag, texto} = elemento
   
    // Aqui tenho a chave tag
    console.log('TAG:', tag)
   
    // E aqui a chave texto
    console.log('TEXTO:', texto)
  }
   
  /*
  Saída:
  TAG: p
  TEXTO: Qualquer texto que você quiser.
  TAG: div
  TEXTO: Frase 2
  TAG: section
  TEXTO: Frase 3
  TAG: footer
  TEXTO: Frase 4
  */