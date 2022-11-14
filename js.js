// ******************************
// *** MICHAEL'S SOLUTION V5.4***
// ******************************


// declaring variable
let total = 0;
let average_change = 0;
var avr_cha_sum = 0;
var avr_round = 0;
var gre = 0;
var gre_date = 0;
var decrease = 0;
var decrease_date = 0;
var j = 1;



for (let i = 0; i < finances.length; i++) {
    // total = total + finances[0...86 elements][second array value]
    total += finances[i][1];
    // added second counter to compare two different results
    j = i + 1;


    // restrict j to dont go over array length
    if (j < finances.length) {

        // iterate each month by 1 start from 0 and 1 and susbtract second from first
        average_change += finances[j][1] - finances[i][1];

        // same aas above but true only for bigger number than stored in last calculation
        if (((finances[j][1]) - (finances[i][1])) > gre) {
            //biggest number stored from months income substraction
            gre = ((finances[j][1]) - (finances[i][1]));
            //catching date 
            gre_date = finances[j][0];
        }
        //same as above but this time storing numbers less than previous results
        else if (((finances[j][1]) - (finances[i][1])) < decrease) {
            decrease = ((finances[j][1]) - (finances[i][1]));
            decrease_date = finances[j][0];
        }

    }
}


// average change sum divided by total entry minus 1
avr_cha_sum = average_change / (finances.length - 1);

// round number to 2 places after decimal
avr_round = avr_cha_sum.toFixed(2);





// displaying results
console.log(`Financial Analysis\n------------------------`);
console.log(`Total Months: ${finances.length}`);
console.log(`Total: $${total}`);
console.log(`Average Change: $ ${avr_round}`);
console.log(`Greatest Increase in Profits: ${gre_date} ($ ${gre})`);
console.log(`Greatest Decrease in Profits: ${decrease_date} ($ ${decrease})`);

