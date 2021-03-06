let cardsArray = {
    myCards: [{
            cardName: "Hank Aaron",
            year: "2007"
        },{
            cardName: "Joe DiMaggio",
            year: "2001"
        },{
            cardName: "Frankie Frisch",
            year: "1995"
        },{
            cardName: "David Ortiz",
            year: "1993"
        },{
            cardName: "Jhonny Peralta",
            year: "1997"
        },{
            cardName: "Red Faber",
            year: "2008"
        },{
            cardName: "Omar Quintanilla",
            year: "2011"
        },{
            cardName: "CC Sabathia",
            year: "1997"
        }]
};

let cardsArray2 = {
    myCards: [{
            cardName: "Hank Aaron",
            year: "2007"
        },{
            cardName: "Joe DiMaggio",
            year: "2007"
        },{
            cardName: "Frankie Frisch",
            year: "2007"
        },{
            cardName: "David Ortiz",
            year: "2007"
        },{
            cardName: "Jhonny Peralta",
            year: "2007"
        },{
            cardName: "Red Faber",
            year: "2007"
        },{
            cardName: "Omar Quintanilla",
            year: "2007"
        },{
            cardName: "CC Sabathia",
            year: "2007"
        }]
};

/*
let yearMatchArray = cardsArray.myCards.filter((item) => {
    return item.year === "2007";
});

console.log(yearMatchArray);

let yearMisMatchArray = cardsArray.myCards.filter((item) => {
    return item.year !== "2007";
});*/

let filterYears = (arrayToFilter, yearToCheck) => {
    let yearMisMatchArray = arrayToFilter.myCards.filter((item) => {
        return item.year !== yearToCheck;
    });

    return ((yearMisMatchArray.length !== 0) ? true : false);
};

//console.log(yearMisMatchArray);


let checkYear = (arrayToCheck, yearToCheck) => {
    if (filterYears(arrayToCheck, yearToCheck)){
        console.log(`These cards aren't all from ${yearToCheck}`);
    }
    else{
        console.log(`These cards are all from ${yearToCheck}`);
    }
};

checkYear(cardsArray, "2007");
checkYear(cardsArray2, "2007");
