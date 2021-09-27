const inputSides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#area-button");
const output = document.querySelector(".output");

function areaFormula(b,h){
    return (Number((b*h)/2));
}

function calculateArea(){
    const areaOfTriangle = areaFormula(Number(inputSides[0].value),Number(inputSides[1].value));
    output.innerText = "Calculated Area of Triangle is "+areaOfTriangle;
}

calculateBtn.addEventListener("click",calculateArea);