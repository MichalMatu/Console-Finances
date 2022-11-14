// **************************
// *** MICHAEL'S SOLUTION ***
// **************************


// declaring variable
let total = 0;
let average_change = 0;
var avr_cha = 0;

// creating loop to count total sum of average income placed in second position of array,
// then reverse it so I can use sort algoritm by number not by dates.

for (let i = 0; i < finances.length; i++) {
    total += finances[i][1];

    for (let j = 1; j < finances.length; j++) {

        // ***average*** change ver 2 new different formula
        // How do I calculate Month-over-Month growth?
        // Percent increase (or decrease) = (Month 2 - Month 1) / Month 1 * 100
        // Or like this if you prefer a more minimalist approach:
        // x = (y - z) / z * 100

        avr_cha += (finances[j][1] - finances[i][1]) / (finances[i][1] * 100);

    }

}

// rounded to 2 places after decimal
var avr_cha_rounded = parseFloat(avr_cha).toFixed(2);

// solting algoritm
finances.sort(function (a, b) {
    return a[1] - b[1];
});

// displaying results, I didnt use /n as I think in that way code is more clear but not dry
console.log(`Financial Analysis\n------------------------`);
console.log(`Total Months: ${finances.length}`);
console.log(`Total: $${total}`);
console.log(`Average Change: $ ${Math.round(total / finances.length)}`);
console.log(`Average Change New Formula: ${avr_cha_rounded}%`);
console.log(`Greatest Increase in Profits: ${finances[finances.length - 1][0]} ($ ${finances[finances.length - 1][1]})`);
console.log(`Greatest Decrease in Profits: ${finances[0][0]} ($ ${finances[0][1]})`);

