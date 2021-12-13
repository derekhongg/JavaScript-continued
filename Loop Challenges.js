// Problem 1
for (let i = 1; i < 20; i+=2){
    console.log(i)
}

// Problem 2
for (let j = 100; j >= 0; j-=3) {
    if(j % 3 == 0){
        return j;
    }
    console.log(j)
}

// Problem 3
for (let k = 4; k >= -3.5; k-=1.5){
    console.log(k)
}

// Problem 4
let rsum = 0;
for (let r = 1; r <= 100; r++){
    rsum += r;
}
console.log(rsum);
// Problem 5

let product = 1;

for (let w = 1; w < 13; w++){
    product *= w;
}
console.log(product)