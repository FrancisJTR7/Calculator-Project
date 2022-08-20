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
const per = document.getElementById('.');
const div = document.getElementById('/');
const mul = document.getElementById('*');
const sub = document.getElementById('-');
const add = document.getElementById('+');
const clr = document.getElementById('clr');
const del = document.getElementById('del');
const equ = document.getElementById('equ');

const data = [];
let act = 0;
let sum = 0;

one.onclick = () => {
  data[0] = data[0] + '1';
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

console.log(data);
//if ((div, mul, sub, add, clr, del == false))
