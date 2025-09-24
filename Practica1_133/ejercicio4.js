function miFuncion(arreglo){
    let may=arreglo[0];
    let men=arreglo[0];
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i]<men){
            men=arreglo[i];
        }else if(arreglo[i]>may){
            may=arreglo[i];
        }
    }
    return ("mayor: "+may+" "+"menor: "+men)
}


let obj = miFuncion([3,1,5,4,2])
console.log(obj)