function miFuncion(arreglo){
    let im=[];
    let par=[];
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i]%2===0){
            par[par.length]=arreglo[i];
        }else{
            im[im.length]=arreglo[i];
        }
    }
    return ("pares ["+par+"] "+"impares ["+im+"]")
}


let obj = miFuncion([1,2,3,4,5,6,7,8,9,0])
console.log(obj)