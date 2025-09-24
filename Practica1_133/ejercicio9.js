const miPromesa=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("exito");
    },3000);
    
});
miPromesa.then((razon)=>{
    console.log(razon);
}).finally(()=>{
    console.log('pasaron 3 segundos');
});