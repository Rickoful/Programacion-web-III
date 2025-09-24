function miFuncion(callback) {
  setTimeout(callback, 2000);
}

miFuncion(() => console.log("Han pasado 2 segundos"));
