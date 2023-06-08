let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let result = document.querySelector("#result");
let comment = document.querySelector("#comment");
let input1 = document.querySelector("#number1");
let input2 = document.querySelector("#number2");

console.log(input1.value);

add.addEventListener("click", addMe, false);
subtract.addEventListener("click", subtractMe, false);
multiply.addEventListener("click", multiplyMe, false);
divide.addEventListener("click", divideMe, false);

function addMe() {
    let addedthings = parseInt(input1.value) + parseInt(input2.value);
  
    console.log(typeof input1.value);
    result.innerHTML = addedthings;
  }
  function subtractMe() {
    let subtractthings = parseInt(input1.value) - parseInt(input2.value);
  
    console.log(typeof input1.value);
    result.innerHTML = subtractthings;
  }
  
  function divideMe() {
    if (input2.value == 0) {
      result.innerHTML = "this is not possible";
    } else {
      let dividethings = parseInt(input1.value) / parseInt(input2.value);
  
      console.log(typeof input1.value);
      result.innerHTML = dividethings;
    }
  }
  
  function multiplyMe() {
    let multiplythings = parseInt(input1.value) * parseInt(input2.value);
  
    console.log(typeof input1.value);
    result.innerHTML = multiplythings;
  }
  