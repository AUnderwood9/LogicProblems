let candidateNames = [
    "Marcela Mincks", "Millicent Mcgrady", "Shayne Sexson", "Wm Wages", "Brenna Blandford", "Tari Thao", 
    "Lannie Layfield", "Candelaria Crimmins", "Dacia Derrow", "Ivana Ippolito", "Annelle Archer", "Arlean Amico",
    "Merle Maskell", "Drusilla Damiano", "Georgette Gagner", "Lara Legrande", "Elwanda Ehrman", "Herman Husman", 
    "Stephan Spivey", "Thurman Thibert"
];

console.log(candidateNames);

let checkNameLength = (names) => {
    return names.length > "15";
};

let greaterThan15 = candidateNames.filter(checkNameLength);

candidateNames.forEach((item) => {
    console.log(`name: ${item} Length: ${item.length}`);
});

console.log(greaterThan15);