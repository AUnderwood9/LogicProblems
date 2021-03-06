var documentStack = [{
    entryNum: "1",
    title: "The Shining",
    author: "Stephen King",
    numOfPages: "788"
},
{
    entryNum: "2",
    title: "A Storm of Swords",
    author: "George R. R. Martin",
    numOfPages: "1024"
},
{
    entryNum: "3",
    title: "The Lord of the Rings: The Two Towers",
    author: "J. R. R. Tolken",
    numOfPages: "726"
},
{
    entryNum: "4",
    title: "The Lion the Witch and the Wardrobe",
    author: "C. S. Lewis",
    numOfPages: "664"
},
{
    entryNum: "5",
    title: "Nothing???",
    author: "John Doe",
    numOfPages: "0"
},
{
    entryNum: "6",
    title: "Nothing???",
    author: "John Doe",
    numOfPages: "0"  
},
{
    entryNum: "7",
    title: "Nothing???",
    author: "Johnny Doe",
    numOfPages: "0"  
}];

let reverseDocumentStack = (documents) => {
    console.log(`The current array:`);
    console.log(documents);
    let temp = [];
    let temp2 = [];
    let documentLength = documents.length;

    for(i = 0; i < documentLength; i++)
        temp.push(JSON.parse(JSON.stringify(documents.pop())));
    
    console.log(temp);
    console.log(documents);

    for(i = 0; i < documentLength; i++)
        documents.push(JSON.parse(JSON.stringify(temp.shift())));
}

reverseDocumentStack(JSON.parse(JSON.stringify(documentStack)));