// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}

const data1 = [1,2, 3];
const data2 = [4, 5, 6];

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

const number3 = [1,2,3,9,10];


try {
  console.log(calculateTotal([1, "2", null, "fix me"])); 
  console.log(findMax([]));                          
  console.log(calculateTotal("Sorry- fix me here as well"));              
} catch (e) {
  console.error(e.message);
}
