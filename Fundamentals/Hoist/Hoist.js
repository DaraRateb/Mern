// var example = "I'm the example!";
// console.log(example);
// AFTER HOISTING BY THE INTERPRETER
// let example = "I'm the example!"; 
// console.log(example); 

// 1 
// console.log(hello);                                   
// var hello = 'world';
//interpreter code
// var hello;
// console.log(hello);
// hello='world';

//2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
//interpreter Code
// var needle;
// needle='haystack';
// test()
// function test(){
//     var needle;
//     needle='magnet';
//     console.log(needle);
// }
//3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// interpreter Code
// var brendan;
// brendan='super cool';
// function print(){
//     brendan='only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
//interpreter code
// var food;
// food='chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food;
//     food= 'gone';
// }
// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// //interpreter Code
// mean();
// console.log(food);
// var mean;
// mean=function(){
//     food="Chicken";
//     console.log(food);
//     var food;
//     food="fish";
//     console.log(food);
// }
// console.log(food);
//5
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//interpreter Code
// console.log(genre);
// var genre;
// genre="disco";
// rewind();
// function rewind(){
//     genre="rock";
//     console.log(genre);
//     var genre;
//     genre="r&b";
//     console.log(genre);
// }
// console.log(genre);
//7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// // interpreter Code
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo;
//     dojo= "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// 8

// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
//interpreter Code
