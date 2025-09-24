function miFuncion(texto) {
  let x="";
  for (let i=texto.length-1;i>=0;i--) {
    x+=texto[i];
  }
  if (texto.toLowerCase()===x.toLowerCase()) {
    return("si es palindromo");
  } else {
    return("no es palindromo");
  }
}

let band = miFuncion("oruro")
console.log(band) 
let obj = miFuncion("hola")
console.log(obj) 
