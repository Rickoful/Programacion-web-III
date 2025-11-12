function miFuncion(texto){
    let resultado={a:0,e:0,i:0,o:0,u:0};
    for(let j=0;j<texto.length;j++){
        let c=texto[j];
        if(c==="a")resultado.a++;
        else if(c==="e")resultado.e++;
        else if(c==="i")resultado.i++;
        else if(c==="o")resultado.o++;
        else if(c==="u")resultado.u++;
    }
    return resultado;
}


let obj=miFuncion("euforia");
console.log(obj);