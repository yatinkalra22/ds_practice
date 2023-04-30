function factorial (num) {
    if(!num) return 1;
    if(num === 1) return num;
    return num * factorial(num-1);
}

console.log(factorial(5)); //120
console.log(factorial(1)); //1
console.log(factorial(0)); //1
