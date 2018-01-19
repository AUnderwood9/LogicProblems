let numbersGiven = 0;
let totalGiven = undefined;
let currentAverage = undefined;
let previousMax = undefined;
let previousMin = undefined;
let myButton = document.getElementById("userInput");

let setMin = (newNumber) => {
    if(typeof previousMin === "undefined"){
        previousMin = newNumber;
    }

    else if(previousMin > newNumber){
        previousMin = newNumber;
    }
}

let setMax = (newNumber) => {
    if(typeof previousMax === "undefined"){
        previousMax = newNumber;
    }

    else if(previousMax < newNumber){
        previousMax = newNumber;
    }
}

let setAverage = (newNumber) => {
    if(typeof totalGiven === "undefined"){
        totalGiven = newNumber;
        currentAverage = newNumber;
    }

    else{
        totalGiven += newNumber;
        currentAverage = totalGiven / numbersGiven;
    }
}

document.addEventListener('DOMContentLoaded', () =>{

    myButton.addEventListener("click", () =>{
        let currentNumber = prompt("Enter a number");
        
        console.log(`The number you gave me is: ${currentNumber}`);
        numbersGiven++;

        setAverage(Number(currentNumber));
        setMin(currentNumber);
        setMax(currentNumber);

        console.log(`You have given me ${numbersGiven} numbers.`);
        console.log(`Your current average is ${currentAverage}`);
        console.log(`The max of all of the numbers you have given me is ${previousMax}`);
        console.log(`The min of all of the numbers you have given me is ${previousMin}`);
        console.log(`Your total is: ${totalGiven}`);
        

    });

});
