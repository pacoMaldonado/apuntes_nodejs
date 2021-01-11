const asyncCallbakc = function (cb) {
  setTimeout(() => {
    // para que esto sea asigcrono
    if (Math.random() < 0.5) {
      return cb(null, "hello world");
    } else {
      cb(new Error("hello Error"));
    }
  }, 2000);
};

asyncCallbakc((err, msg) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("message: ", msg);
  }
});


