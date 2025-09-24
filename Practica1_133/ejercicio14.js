function miFuncion(num) {
    return new Promise((resolve) => {
        resolve(num * 2);
    });
}

miFuncion(4).then((resultado) => {
    console.log("Callback simulado con promesa :", resultado);
})
.finally(() => {
    console.log("terminado");
});
