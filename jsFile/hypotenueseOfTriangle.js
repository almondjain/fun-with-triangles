const inputSides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#hypotenuese-button");
const output = document.querySelector(".output");

function calculateSumOfSquares(x,y){
    return (Number(x*x)+Number(y*y));
}

function calculateHypotenuese(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value),Number(inputSides[1].value));
    const hypotenuese = Math.sqrt(sumOfSquares);
    output.innerText = "Calculated Length of Hypotenuese is "+hypotenuese;
}

calculateBtn.addEventListener("click",calculateHypotenuese);