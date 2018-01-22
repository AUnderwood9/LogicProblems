let documentStack = [{
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
},];

let checkForAuthor = (authorName, documents) => {
    let foundMyDocument = false;
    while(documents.length > 0 && !(foundMyDocument)){
        let currentDocument = documents.pop();

        console.log(currentDocument);

        if(currentDocument.author === "John Doe")
        {
            console.log(`Entry #:${currentDocument.entryNum}, Author: ${currentDocument.author}`);
            foundMyDocument = true;
        }
    }
};

checkForAuthor("John Doe", documentStack)
