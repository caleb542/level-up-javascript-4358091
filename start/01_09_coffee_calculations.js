const array = [3.00,1.25,67,12];

function coffeeDate(){
  let totalOrders = array.reduce( 
    (acc, cur) => acc + cur, initialValue); 
  // let total = totalOrders * price
  return `The total bill for the coffees was $${totalOrders}`
}
const initialValue = 0;
const price = 1.25;



console.log(coffeeDate(array))

