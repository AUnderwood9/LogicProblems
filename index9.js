let originalBook = [];

for (let i = 1; i < 101; i++){
    originalBook.push(i);
}

let checkEven = (numberToCheck) => {
    return (numberToCheck % 2) !== 0;
}

let myBook = originalBook.filter(checkEven);

console.log(myBook);