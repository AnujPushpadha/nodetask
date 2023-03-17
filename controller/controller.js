//controller

const get = (req, res) => {
  res.send("digikull");
};
let x = 100;

//calculator give 100
const cal = (req, res) => {
  res.send(`x=${x}`);
};
//add value to x from post man{ "value": 1}
const put = (req, res) => {
  x += req.body.value;
  res.send(`x=${x}`);
};
//reset x to 100
const reset = (req, res) => {
  x = 100;
  res.send(`x=${x}`);
};
//send array to user
let array = [0, 1, 2, 3, 4, 5];
const arr = (req, res) => {
  res.send(array);
};
// add input to array
const add = (req, res) => {
  array.push(req.body.value);
  res.send(array);
};
//delete from given index
const del = (req, res) => {
  console.log(req.body.index);
  array.splice(req.body.index, 1);
  res.send(array);
};

export { get, arr, add, del, cal, put, reset };
