const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello Error"));
      }
    });
  });
  
  promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("message: ", msg))
    .catch(err => console.error("error: ", err));