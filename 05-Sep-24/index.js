let operation = (cbfunc, x, y) => {
  console.log("operation is called");

  console.log(cbfunc, x, y);

  cbfunc(33, 44);
};

let add = (a, b) => {
  console.log("add called");
  console.log(a + b);
};

let sub = (a, b) => {
  console.log("sub called");
  console.log(a - b);
};

let mul = (a, b) => {
  console.log("mul called");
  console.log(a * b);
};

let div = (a, b) => {
  console.log("div called");
  console.log(a / b);
};

operation(add);

operation(sub, 20, 10);

operation(mul);

operation(div, 200, 10);
