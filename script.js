document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
  function summertime(){
    return "it's summertime baby";
  }
  
  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function summertime() returns: ", summertime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 
function addFive(number){
  return number + 5;
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function addFive(6) returns: ", addFive(10));
  
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
function double(number){
  return number * 2; 
}

  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function double(6) returns: ", double(6));
  
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
function greetMe(name){
  return "Hello " + name + "!";
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function greetMe('Carl') returns: ", greetMe("Carl"));
  
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.
  function isItLessThanTen(number){
    if (number <= 10){
      return "Your number is less than 10";
    } else{
      return "Your number is not less than 10";
    }
  }

  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function isItLessThanTen(3) returns: ", isItLessThanTen(3));
  console.log("The function isItLessThanTen(20) returns: ", isItLessThanTen(20));
  
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.
  function inHighSchool(age){
    if(age >= 15){
      return "High Schooler";
    } else{
      return "NOPEEEE";
    }
  }




  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function inHighSchool(17) returns: ", inHighSchool(17));
  console.log("The function inHighSchool(5) returns: ", inHighSchool(5));
  
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.




  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log("The function areTheySpeeding(60) returns: ", areTheySpeeding(60));
  // console.log("The function areTheySpeeding(90) returns: ", areTheySpeeding(90));
  
//////////////////////////////////////////////////////////////////////////
  // Write `sum` below.
function sum(number1,number2){
  return number1 + number2;
}



  // Uncomment the lines below, and look in the console to see if your function worked!
console.log("The function sum(3, 4) returns: ", sum(3, 4));
  
//////////////////////////////////////////////////////////////////////////
  // Write `product` below.
function product(number1,number2){
  return number1 * number2;
}



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function product(8, 10) returns: ", product(8, 10));
//////////////////////////////////////////////////////////////////////////
});
