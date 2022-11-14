// **************************
// *** MICHAEL'S SOLUTION ***
// **************************


// declaring variable
let total = 0;
let average_change = 0;
var avr_cha = 0;
var gre = 0;
var gre_date = 0;
var decrease = 0;
var decrease_date = 0;
var j = 1;

// creating loop to count total sum of average income placed in second position of array,
// then reverse it so I can use sort algoritm by number not by dates.

for (let i = 0; i < finances.length; i++) {
    total += finances[i][1];
    j = i + 1;

    if (j < finances.length) {

        if (((finances[j][1]) - (finances[i][1])) > gre) {
            gre = ((finances[j][1]) - (finances[i][1]));
            gre_date = finances[j][0];
        }

        else if (((finances[j][1]) - (finances[i][1])) < decrease) {
            decrease = ((finances[j][1]) - (finances[i][1]));
            decrease_date = finances[j][0];
        }
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
console.log(`Greatest Increase in Profits: ${gre_date} ($ ${gre})`);
console.log(`Greatest Decrease in Profits: ${decrease_date} ($ ${decrease})`);

