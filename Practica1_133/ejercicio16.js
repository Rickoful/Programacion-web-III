function miPromesa() {
  return new Promise(res => res(10));
}

async function main() {
  let n = await miPromesa();
  console.log("Número:", n);
}

main();
