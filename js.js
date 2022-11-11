console.log("Financial Analysis\n------------------------")

console.log("Total Months: ", finances.length);

let total = 0;
let average_change = 0;


for (let i = 0; i < finances.length; i++) {

    total += finances[i][1];

    


    }








console.log(`Total: \$${total}`);
console.log(`Average Change: $ ${Math.round(total / finances.length)}`)





