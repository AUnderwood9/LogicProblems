let orders1 = ["Double Cheese Burger", "Filet-O-Fish", "Big Mac", "Big Buford", "Quarter Pounder"];
let orders2 = ["Double Cheese Burger", "French Fries", "Big Mac", "Big Buford", "Quarter Pounder"];
let orders3 = ["Double Cheese Burger", "Filet-O-Fish", "French Fries", "Big Buford", "French Fries"];

let areThereFries = (orders) =>  {
    return orders === "French Fries";
};

let numberOfFriesOrdered = [];

numberOfFriesOrdered.push(((orders1.filter(areThereFries).length > 0) ? "yes": "no"));
numberOfFriesOrdered.push(((orders2.filter(areThereFries).length > 0) ? "yes": "no"));
numberOfFriesOrdered.push(((orders3.filter(areThereFries).length > 0) ? "yes": "no"));

console.log(numberOfFriesOrdered);