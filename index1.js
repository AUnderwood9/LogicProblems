let divisibleBy3 = [];
let divisibleBy5 = [];
let divisibleBy3And5 = [];
let dontWantThem = [];

for (let i = 0; i < 100; i++){
    if((i % 3 === 0) && (i % 5 === 0))
        divisibleBy3And5.push(i);
    else if(i % 5 === 0)
        divisibleBy5.push(i);
    else if(i % 3 === 0)
        divisibleBy3.push(i);
    else
        dontWantThem.push(i);
}

console.log(divisibleBy3And5);
console.log(divisibleBy5);
console.log(divisibleBy3);
console.log(dontWantThem);
console.log(divisibleBy3And5.length + divisibleBy3.length + divisibleBy5.length + dontWantThem.length);