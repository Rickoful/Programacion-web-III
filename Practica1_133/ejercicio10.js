const miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Esto es una promesa");
    }, 2000);
});

miPromesa.then((razon) => {
    console.log(razon);
})
.finally(() => {
    console.log("terminado");
});
function miFuncion(callback){
    return callback;
}
console.log(miFuncion("esto es un callback"));