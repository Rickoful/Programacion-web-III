async function main() {
  let x = await Promise.resolve(5);
  let y = await Promise.resolve(x + 2);
  let z = await Promise.resolve(y * 3);
  console.log(z);
}

main();
