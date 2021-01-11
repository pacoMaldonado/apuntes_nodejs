const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello Error"));
      }
    });
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log("msg:", msg);
  } catch (error) {
    console.error("error", error);
  }
}

asyncAwait();
