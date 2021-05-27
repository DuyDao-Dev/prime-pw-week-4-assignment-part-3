console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item){
  item = basket.push(item);
  if (basket.length > 0) {
    console.log(`Basket has: ${basket}`);
  return true;
  }
  return false;
}
console.log(addItem('orange'));
// console.log("Testing what's in the basket?",basket); //Everything works but I
// need to figure out why when I add more items in the console.log for addItem
// that it wont push more items into the basket array. My guess is that it only
// knows to push the first item and nothing else. I did test creating another
//console.log(addItem('cherries')); and that did put cherries into the array. will
//have to look into seeing how I can push it in one console.log.

function listItems (){
  for (let shopping of basket) {
    return shopping;
  }
}


function empty (){
  if (basket.length > 0) {
    basket.pop();
  }//Does not work.
  // basket.length = 0;//Doesn't seem to empty the original array.
  // // basket.splice(0, basket.length); //This method and previous one don't seem to work.
  console.log(`Basket should be empty ${basket}`);
}



//Slack assignment. What real world thing we do in function form.
//So lets try coffee. Things mixed would be coffee, cream, sugar.
let goodMorning = [];
function morningDrink (ingredients) {
  ingredients = goodMorning.push(ingredients);
  if (goodMorning > 0) {
    console.log(`A good morning consists of: ${goodMorning}`);
  }
}
console.log(morningDrink('coffee'));
console.log(morningDrink('cream'));
console.log(morningDrink('sugar'));
