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
  console.log(`What is in the basket now? ${basket}`);
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
//in the run function below into any global array and it would work. Kong tested by adding
//another global array and it would output results of the new basket2 array and not basket array.
function listItems (inBasket){
  for (let i = 0; i < inBasket.length; i++) {
    console.log('List items', inBasket[ i ]);
  }
}
listItems(basket);
console.log(basket);

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


//Attempt 5 (Also working)
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

//Slow Attempt (was trying to work through an idea I had while I was sleeping.)
// function empty (){
//   while (basket.length > 0) {
//     basket.pop();
//   }
  // console.log(basket);
// }
//Did not empty.


// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
//
// __Using functions in other functions!__
//
// 1. Add a global `const` named `maxItems` and set it to 5.
//
const maxItems = 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(addingNum){
  if (addingNum.length == maxItems) {
    console.log(`Whats in here? ${maxItems}`);
    return true;
  }
  return false;
}
console.log(isFull(1, 2, 3, 4, 5));

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
//
// __Using Array built-in functions!__
//
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found
