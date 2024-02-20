function promesa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ok Promesa 1"), 4000;
    });
  });
}

function promesa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ok Promesa 2"), 2000;
    });
  });
}

function promesa3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ok Promesa 3"), 6000;
    });
  });
}

Promise.all([promesa1(), promesa2(), promesa3()])
  .then((result) => console.log(result))
  .catch((Error) => console.log(Error));

Promise.allSettled([promesa1(), promesa2(), promesa3()])
  .then((result) => console.log(result))
  .catch((Error) => console.log(Error));

Promise.any([promesa1(), promesa2(), promesa3()])
  .then((result) => console.log(result))
  .catch((Error) => console.log(Error));

Promise.race([promesa1(), promesa2(), promesa3()])
  .then((result) => console.log(result))
  .catch((Error) => console.log(Error));
