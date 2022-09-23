console.log("I am frist");

setTimeout(() => {
  const player = { name: "atikur", id: 720, job: "devolopar" };
  const jsonStringfied = JSON.stringify(player);
  const object = JSON.parse(jsonStringfied);
  console.log(object);
}, 3500);

const niceName = "john wick";
console.log(niceName);
