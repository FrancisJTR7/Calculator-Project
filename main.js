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
const mul = document.getElementById('mul');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const clr = document.getElementById('clr');
const del = document.getElementById('del');
const equ = document.getElementById('equ');

let data = [0];
let d = data.length - 1;
let sum = 0;
let act = 0;
let tact = 0;

function log() {
  var filt = data.filter(Number); // removes 0 values from data to filt
  let datan = filt.map((str) => {
    //turns strings into numbers from filt to datan
    return Number(str);
  });
  if (datan.length == 2 && tact === 1) {
    sum = datan[0] / datan[1];
    data = [0];
    datan = [0];
    filt = [0];
  } else if (datan.length == 2 && tact === 2) {
    sum = datan[0] * datan[1];
    data = [0];
    datan = [0];
    filt = [0];
  } else if (datan.length == 2 && tact === 3) {
    sum = datan[0] - datan[1];
    data = [0];
    datan = [0];
    filt = [0];
  } else if (datan.length == 2 && tact === 4) {
    sum = datan[0] + datan[1];
    data = [0];
    datan = [0];
    filt = [0];
  }
  console.log(act);
  console.log(data);
  console.log(filt);
  console.log(datan);
  console.log(sum);
}

div.onclick = () => {
  data.push(0);
  act = act + 1;
  let d = data.length - act;
  tact = 1;
};

mul.onclick = () => {
  data.push(0);
  act = act + 1;
  let d = data.length - act;
  tact = 2;
};

sub.onclick = () => {
  data.push(0);
  act = act + 1;
  let d = data.length - act;
  tact = 3;
};

add.onclick = () => {
  data.push(0);
  act = act + 1;
  let d = data.length - act;
  tact = 4;
};

equ.onclick = () => {
  log();
};

one.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '1';
};

two.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '2';
};

thr.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '3';
};

fou.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '4';
};

fiv.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '5';
};

six.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '6';
};

sev.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '7';
};

eig.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '8';
};

nin.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '9';
};

zer.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '0';
};

per.onclick = () => {
  let d = data.length - 1;
  data[d] = data[d] + '.';
};

//if ((div, mul, sub, add, clr, del == false))
