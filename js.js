// **************************
// *** MICHAEL'S SOLUTION ***
// **************************


// declaring variable
let total = 0;
let average_change = 0;


// creating loop to count total sum of average income placed in second position of array,
// then reverse it so I can use sort algoritm by number not by dates.

for (let i = 0; i < finances.length; i++) {
    total += finances[i][1];
}




// solting algoritm
finances.sort(function (a, b) {
    return a[1] - b[1];
});





// displaying results, I didnt use /n as I think in that way code is more clear but not dry
console.log("Financial Analysis\n------------------------");
console.log("Total Months: ", finances.length);
console.log(`Total: \$${total}`);
console.log(`Average Change: $ ${Math.round(total / finances.length)}`);
console.log(`Greatest Increase in Profits: ${finances[finances.length - 1][0]} ($ ${finances[finances.length - 1][1]})`);
console.log(`Greatest Decrease in Profits: ${finances[0][0]} ($ ${finances[0][1]})`);

