console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
//
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
//

let basket = [];

function addItem (item){
  basket.push(item);
  return true;
}
addItem('orange');
addItem('cherries');
addItem('berries');

console.log('Items added to basket: ', basket);

// console.log("Testing what's in the basket?",basket); //Everything works but I
// need to figure out why when I add more items in the console.log for addItem
// that it wont push more items into the basket array. My guess is that it only
// knows to push the first item and nothing else. I did test creating another
//console.log(addItem('cherries')); and that did put cherries into the array. will
//have to look into seeing how I can push it in one console.log.


// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
//
//Attempt 1
// let sum = 0;
// function listItems (basket){
//   for (let list of basket) {
//     return list;
//   }
// }
// console.log(list);

//Attempt 2(Working) More flexible because we can any global array. We can change basket
//in the run function below into any global array and it would work.
function listItems (inBasket){
  for (let i = 0; i < inBasket.length; i++) {
    console.log('List items', inBasket[ i ]);
  }
}
listItems(basket);

//Attempt 3
// for (let property in basket) {
//   basket += property + ': ' + basket[property]+'; ';
// }
// console.log(basket); Runs weird.

//Attempt 4
// function listItems (){
//   for (let i = 0; i < basket.length; i++) {
//     if( i <= basket.length )
//     return basket[i];
//   }
//   return false;
// }
// console.log(listItems(basket));

//Attempt 5 (Peter's code)
// function listItems (inBasket){
//   for (let i = 0; i < inBasket.length; i++) {
//     console.log('List items', inBasket[ i ]);
//     //return inBasket[i]; // if you return here, you won't see any of the other items in the loop
//   }
// }

//Attempt 6 (Also working)
// function listItems (){
//   for (let i = 0; i < basket.length; i++) {
//     console.log('List items', basket[ i ]);
//   }
// }
// listItems();


// Create a function called `empty`. It should:
//  - reset the `basket` to an empty array
//Function for empty cart

// Friend helped with a shortcut of emptying a cart.
function empty (){
  basket = [];
}
empty();
console.log('Whats in the basket: ', basket);

//Slow Attempt
// function empty (){
//   while (basket.length > 0) {
//     basket.pop();
//   }
// }
//Did not empty.

  //Does not work.
  // basket.length = 0;//Doesn't seem to empty the original array.
  // // basket.splice(0, basket.length); //This method and previous one don't seem to work.




//Slack assignment. What real world thing we do in function form.
//So lets try coffee. Things mixed would be coffee, cream, sugar.
