let listOfSentences = ["I would like a trial by combat.", "So you do have a plan! Yay Mr. White! Yay science!", 
"More pigeon pie, please.", "There ain't that many Smurfs in the world."];

listOfSentences.forEach((item) => {
    let newItem = item.toUpperCase();
    listOfSentences[listOfSentences.indexOf(item)] = newItem;
});

console.log(listOfSentences);