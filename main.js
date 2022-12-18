problem: "Harry mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.";
Input: "Harry’s mom gave him 1000";
Input: "cost of 1 kg of oranges and 1 kg of apples 700";
Output: "300";

let momGive = 1000;
let oranges = 300;
let apples = 400;

function result() {
    const buyItems = oranges + apples;
    return (momGive -= buyItems);
}
console.log(result());

Problem: "Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.";
Input:"75.25, 65, 80, 35.45, 99.50 of the input is the marks of the five subjects mentioned above, respectively."
Output:"71.04"

function average(){
    const mathematics= 75.25;
    const biology = 65;
    const chemistry = 80;
    const physics = 35.45;
    const bangla = 99.50;
    let total = mathematics + biology + bangla + chemistry + physics;
    let above = total / 5;
    return parseFloat(above.toFixed(2))
}
console.log(average());