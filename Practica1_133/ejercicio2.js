function miFuncion(texto){
    let aux="";
    for(let i=texto.length-1;i>=0;i--){
        aux+=texto[i];
    }
    return aux;
}


let cad = miFuncion("abcd");
console.log(cad);