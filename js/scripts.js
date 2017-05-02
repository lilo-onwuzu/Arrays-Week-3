// Before the document is ready or before we submit the user input, we can define variables both for the business logic and user interface logic
// After ready or submit function. Execution is in order.
// When defining an array variable, we need to somehow let JS know it is an array type variable. If we do not do this, it will assume the variable is the number of elements in the array. We can define an array variable by starting with an empty array like: var blanks = [] and then push elements into it or we can an array variable into another array variable like: blanks = subBlanks. Then you can start pushing items or manipulating it however we want.//
// The default operation of event is to run the function at every clock cycle causing the result to be refreshed continuosly. The above javascript method ".preventDefault()" prevents the named function from its default operation. Here, event is the parameter that can be used as a placeholder and called in the method. If we did not need to cal it again, we can just leave it empty like the ready method above.//
// blanks.forEach(function(blank){
//   var userInput = $("input#" + blank).val(); 
//   $("." + blank).text(userInput);
// });

//var blanks = ["first", "second", "third", "fourth", "fifth"];

$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault(); 
    var subBlanks = ["fourth", "fifth"];
    subBlanks.forEach(function(subBlank){
          var userInput = $("input#" + subBlank).val();
          $("." + subBlank).text(userInput);
    });   
  });
});
