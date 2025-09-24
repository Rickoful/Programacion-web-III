const miPromesa=new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});
miPromesa.then((num) => {
    console.log("Paso 1:", num);
    return num + 3;
}).then((num) => {
    console.log("Paso 2:", num);
    return num * 4;
}).then((num) => {
    console.log("Resultado final:", num);
}).finally(() => {
    console.log("asi concluye el encadenamiento");
});
