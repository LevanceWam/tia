// /*
// Levance Wamley
// Day 4 Prompts
// WPF 1411
// 11-3-14
//  */
// //alert ("Testing 1,2,3")
//
//
// //ask user for output
//
// //prompt() askes the user to type something in
// var yearBorn = prompt("Enter your Year of birth here");
// console.log(yearBorn);
//
// //Figure out how old we are
// var age = 2014 - yearBorn;
// console.log("You are "+age+" years old.");
//
//
// //Calculate the area of a rectangle.
// // area = length * width
//
// var length = prompt("We are going to calculate the area of a rectangle.|n Please enter the length of your rectangle");
//
// var width = prompt("Please enter the width of your Rectangle.");
//
// //calculate the area
// var area = length * width;
//
// // create a result variable and then console log that
// var results = ("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);
// console.log(results);
// alert(results)
//
// //console.log the area
// console.log("The area of your rectangle is "+ area+".");
// console.log("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);
//
//
// //alert the user the same info
// alert("The area of your rectangle with a width of "+ width +" and a length of "+ length +" is "+ area);


function givemecolor(thecolor,thetext)
    {
    return '<span style="color:'+thecolor+ '">'+thetext+'</span>';
    }
document.write(givemecolor('green','I\'m an apple'));
document.write(givemecolor('pink','and I\'m a banana'));

var user = new Object();
user.color1 = prompt('What is color 1');


document.write(givemecolor(user.color1,'BITCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'));





// //Description of item.
// alert("Thank you! For shopping with us please take the time to describe what you brought today for more chances of this item to show up in our store." +
// "");
//
// var e = prompt("What item did you buy");
// var f = prompt("What item did you buy");
// var g = prompt("What item did you buy");
// var h = prompt("What item did you buy");
//
// itemList = alert([e+", "+f+", "+g+", "+h]);
// console.log(itemList);
