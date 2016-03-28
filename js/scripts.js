// Before the document is ready or before we submit the user input, we can define variables both for the business logic and user interface logic
// After ready or submit function. Execution is in order.

var blanks = ["first", "second", "third", "fourth", "fifth"];

// When defining an array variable, we need to somehow let JS know it is an array type variable. If we do not do this, it will assume the variable is the number of elements in the array. We can define an array variable by starting with an empty array like: var blanks = [] and then push elements into it or we can an array variable into another array variable like: blanks = subBlanks. Then you can start pushing items or manipulating it however we want.//

$(document).ready(function(){
  // when the document is ready or finishes loading, execute the unnamed function in the quiggly brackets//

  $("#quiz").submit(function(event){

  // When the  quiz form (id=quiz), implement the "event" function in squiggly braces//
    event.preventDefault();
    // The default operation of event is to run the function at every clock cycle causing the result to be refreshed continuosly. The above javascript method ".preventDefault()" prevents the named function from its default operation. Here, event is the parameter that can be used as a placeholder and called in the method. If we did not need to cal it again, we can just leave it empty like the ready method above.//

    // The input are now imported but they are undefined. We need to define them as variables that could be used from here on out. We will do it in a loop style format for each element in the blank array, perform the function named blank on it. The blank function is defined in between the squiggly braces. Blank also serves as a placeholder for the elements in the blank array in the function that follows//
    // We will define a universal variable "userInput" that will loop all the inputs and replace them as text in the output. So first will be replaced in the class (.first) element etc.//

    // blanks.forEach(function(blank){
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    // Build a new array using blanks
    var subBlanks = [blanks[1], blanks[0]];
        subBlanks.push(blanks[2]);
 // line 26 changes the array subBlanks. If we had done subBlanks=subBlanks.push.., JS would create a new "number" variable called subBlanks and it would equal 3 as there are 3 elements now in the new subBlank array.//
    subBlanks.forEach(function(subBlank){
          var userInput = $("input#" + subBlank).val();
          $("." + subBlank).text(userInput);
        });
  });
});
