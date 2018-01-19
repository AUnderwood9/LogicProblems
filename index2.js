let stack1 = [];
let stack2 = [];
let stack3 = [];
let combinedStack = [];
let pageNumber = 1;

for(i = 0; i < 100; i++)
{
    stack1.push("a page from stack 1");
    stack2.push("a page from stack 2");
    stack3.push("a page from stack 3");
}

for(i = 0; i < 100; i++){
    //combinedStack.push(`${stack1.pop()}, ${stack2.pop()}, and ${stack3.pop()}`);
    combinedStack.push(stack1.pop());
    combinedStack.push(stack2.pop());
    combinedStack.push(stack3.pop());
}

combinedStack.forEach((item) => {
    console.log(`${pageNumber}. ${item}`);
    pageNumber++;
});