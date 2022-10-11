// Variables

let initResult = 0;

// Cached elements

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const result = document.getElementById("result");
const input = document.getElementById("input");

// Event listeners

plusButton.addEventListener("click", addValue);
minusButton.addEventListener("click", substractValue);
input.addEventListener("oninput", showResult);

// Functions 

initialize()

function initialize(){
    result.innerHTML = initResult;
    input.value = 1;
}

function addValue (){

    let inputValue = parseInt(input.value)
    initResult = initResult + inputValue;
    result.innerHTML = initResult;

    if (initResult < 0){
        result.style.color = "red";
    }else{
        result.style.color = "black";
    }
}

function substractValue(){

    let inputValue = parseInt(input.value);
    initResult = initResult - inputValue;
    result.innerHTML = initResult;
    
    if (initResult < 0){
         result.style.color = "red";
    }else{
    result.style.color = "black";
    }
}

function showResult(){
    result.innerHTML = input.value;
}