document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
  function summertime(){
    return "It's summertime baby!";
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function summertime() returns: ", summertime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 
  function addFive(Number){
    return (Number+5);
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function addFive(6) returns: ", addFive(6));
  
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
  function double (Number){
    return (Number*2);
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function double(6) returns: ", double(6));
  
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
  function greetMe (Name){
    return ("Hello, " + Name + "!");
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function greetMe('Carl') returns: ", greetMe("Carl"));
  
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.
  function isItLessThanTen (Number){
    if(Number<10){
      return "Your number is less than 10";
    }else{
      return "Your number is not less than 10";
    }
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function isItLessThanTen(3) returns: ", isItLessThanTen(3));
  console.log("The function isItLessThanTen(20) returns: ", isItLessThanTen(20));
  
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.
  function inHighSchool (age){
    if(age>15){
      return "High Schooler";
    }
    else{
      return "Nope";
    }
  }




  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function inHighSchool(17) returns: ", inHighSchool(17));
  console.log("The function inHighSchool(5) returns: ", inHighSchool(5));
  
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.
  function areTheySpeeding (speed){
    if(speed<75){
      return "Thanks for driving safely!";
    }else{
      return "Slow down!";
    }
  }



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log("The function areTheySpeeding(60) returns: ", areTheySpeeding(60));
  console.log("The function areTheySpeeding(90) returns: ", areTheySpeeding(90));
  
//////////////////////////////////////////////////////////////////////////
  // Write `sum` below.
  function sum (num1, num2){
    return num1+num2;
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function sum(3, 4) returns: ", sum(3, 4));
  
//////////////////////////////////////////////////////////////////////////
  // Write `product` below.
  function product (num1, num2){
    return num1*num2;
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log("The function product(8, 10) returns: ", product(8, 10));
//////////////////////////////////////////////////////////////////////////
});
