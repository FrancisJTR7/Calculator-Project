const screen = document.querySelector('.screen');
const one = document.getElementById('1');
const two = document.getElementById('2');
const thr = document.getElementById('3');
const fou = document.getElementById('4');
const fiv = document.getElementById('5');
const six = document.getElementById('6');
const sev = document.getElementById('7');
const eig = document.getElementById('8');
const nin = document.getElementById('9');
const zer = document.getElementById('0');
const per = document.getElementById('per');
const div = document.getElementById('div');
const mul = document.getElementById('mult');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const clr = document.getElementById('clr');
const del = document.getElementById('del');
const equ = document.getElementById('equ');

const data = [0];
let d = data.length - 1;
let sum = 0;
let act = 0;

add.onclick = () => {
  data.push(0);
  console.log(data);
  act = act + 1;
  console.log(act);
  let d = data.length - act;
  console.log(d);
  console.log(data.length);
};

equ.onclick = () => {
  var fil = data.filter(Number);
  console.log(fil);
};

one.onclick = () => {
  let d = data.length - 1;
  console.log(d);
  data[d] = data[d] + '1';
};

two.onclick = () => {
  data[0] = data[0] + '2';
};

thr.onclick = () => {
  data[0] = data[0] + '3';
};

fou.onclick = () => {
  data[0] = data[0] + '4';
};

fiv.onclick = () => {
  data[0] = data[0] + '5';
};

six.onclick = () => {
  data[0] = data[0] + '6';
};

sev.onclick = () => {
  data[0] = data[0] + '7';
};

eig.onclick = () => {
  data[0] = data[0] + '8';
};

nin.onclick = () => {
  data[0] = data[0] + '9';
};

zer.onclick = () => {
  data[0] = data[0] + '0';
};

per.onclick = () => {
  data[0] = data[0] + '.';
};

//if ((div, mul, sub, add, clr, del == false))
