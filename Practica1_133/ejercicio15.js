function sumaCallback(a, b, callback) {
    callback(a + b);
}

const miPromesa = new Promise((resolve) => {
    sumaCallback(3, 4, (resultado) => {
        resolve(resultado);
    });
});

miPromesa.then((res) => {
    console.log(res);
})
.finally(() => {
    console.log("resultado del callback convertido en promesa");
});
