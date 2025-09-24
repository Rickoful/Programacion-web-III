function Usuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: "Ana" });
    }, 1000);
  });
}
function Pedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["pedido1", "pedido2"]);
    }, 1000);
  });
}
async function main() {
  let usuario = await Usuario();   
  console.log("Usuario encontrado:", usuario);
  let pedidos = await Pedido();
  console.log("Pedidos encontrados:", pedidos);
}
main();
