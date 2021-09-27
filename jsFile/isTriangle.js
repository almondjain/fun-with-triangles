const inputs = document.querySelectorAll(".angle-input");
console.log(inputs);

const isTriangle = document.querySelector("#is-Triangle-btn");
console.log(isTriangle);

const output = document.querySelector(".output");
console.log(output);

function sumOfAngles(angle1, angle2, angle3) {
    console.log(angle1 + angle2 + angle3);
    console.log(Number(angle1 + angle2 + angle3));
    return Number(angle1 + angle2 + angle3);
}

function checkTriangle() {
    console.log(inputs[0].value);
    console.log(Number(inputs[0].value));
    const sum = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    console.log(sum);

    if (sum === 180) {
        output.innerText = "You got it! Angles form the triangle";
    } else {
        output.innerText = "Nope! Angles are not forming Triangle";
    }
}


isTriangle.addEventListener("click", checkTriangle);