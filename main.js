problem:"Harry mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return."
Input:"Harry’s mom gave him 1000"
Input:"cost of 1 kg of oranges and 1 kg of apples 700"
Output:"300"

let momGive=1000;
let oranges=300;
let apples=400;
function result(){
    const buyItems = oranges + apples;
    return momGive -=buyItems;
}
console.log(result());