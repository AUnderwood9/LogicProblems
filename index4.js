for (let i = 1; i < 101; i++){
    if((i % 3 === 0) && (i % 5 === 0))
        console.log(`${i}: Covelence`);
    else if(i % 5 === 0)
        console.log(`${i}: lence`);
    else if(i % 3 === 0)
        console.log(`${i}: Cove`);
}