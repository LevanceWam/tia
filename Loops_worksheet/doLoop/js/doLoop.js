
 /*
Levance Wamley
Title
WPF 1411
11-10-2014
 */

 //alert("ello");

 //You are trying to help your child learn their multiplication table.
 //the way this is suppose to work is when you type in a number it should output the multiplication table for the number.
 //this table goes up to the selected number version of 75 because we do not want to overload your child
 //for example

 var num=prompt("choose a number you want to see the multiplication table for.");

 var i=Number(num);

 do{
  console.log("The number in the table is "+i);
  i+=Number(num);

  while (num==="" ||isNaN(num)){
   num=prompt("Please enter in a value");
    i=Number(num);
  }

 }while(i<=75);




