let screen = document.getElementById("result");
let data = "";
let number = "";
let bool = false;
let pointbool = true;
let opBool = true;

function numberClick(id) {
  let screen = document.getElementById("result"); //if number 0
  opBool = true;
  if (number === "0") {
    number = "";
  } else {
    bool = true;
  }
  number += id;
  screen.innerHTML = number;
}

function operatorClick(id) {
  if (opBool === true) {
    pointbool = true;
    data += number;
    data += id;
    number = "";
    bool = true;
    opBool = false;
  }
}
function multiFunctionClick(id) {
  let screen = document.getElementById("result");
  // i nedd to fix that 2 decimal  0
  if (id === "=") {
    data += number;
    number = eval(data).toFixed(2);
    numLength = number.length - 1;
    if (number[numLength] === "0") {
      number = eval(data).toFixed(1);
      if (number[numLength - 1] === "0") {
        number = eval(data).toFixed(0);
      }
    }
    data = "";
    screen.innerHTML = number;
  }

  if (id === "C") {
    opBool = true;
    pointbool = true;
    data = "";
    number = "";
    screen.innerHTML = "0";
    bool = false;
  }

  if (id === ".") {
    // . should be only one time
    if (pointbool === true) {
      // one time
      number += id;
      screen.innerHTML = number;
      pointbool = false;
    }
  }
  if (id === "+/-") {
    number *= -1;
    screen.innerHTML = number;
  }

  if (id === "%") {
    number = (number / 100).toFixed(4);
    if (number === "0.0000" && bool === true) {
      number = 0.0001;
    } else if (number === "0.0001") {
      number = 0.0001;
    } else if (number === "-0.0000") {
      number = -0.0001;
    }
    screen.innerHTML = number;
  }
}

//   ////////////////////

// let button1 = document.querySelectorAll('.circle .operator');
// let button2 = document.querySelectorAll('.circle ..number');

// button1.addEventListener('click', function() {
//   button1.classList.add('active');
// });

// button2.addEventListener('click', function() {
//   button1.classList.remove('active');
// });
