let numberList = [100, 25, 88, 23454, 23098, 675];

let reverseNumber = (numberToReverse) => {
   let reverse = 0;
   let lastDigit = 0;

    while(numberToReverse > 0){
        lastDigit = numberToReverse % 10;
        reverse = (reverse * 10) + lastDigit;
        numberToReverse = Math.floor(numberToReverse / 10);
    }

    return(reverse);
};

numberList.forEach((item) => {
    console.log(reverseNumber(item));
});