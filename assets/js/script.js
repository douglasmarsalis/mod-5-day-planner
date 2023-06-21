// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  /* This is Vanilla JS for LocalStorage
  var inputInformation = document.getElementById("hour-x");
  var buttonEl = document.getElementById("button");

  buttonEl.addEventListener("click", addAnswerToLocalStorage);

  function addAnswerToLocalStorage() {
    var value = inputInformation.value;
    localStorage.setItem("hour-x", value);
  }

EXAMPLE 2 VANILLA JS
let btnDsn = document.querySelector("#btn-design");
localStorage.setItem('Name','CLICKED');
let name = localStorage.getItem('Name');
  
(function (){
    btnDsn.onclick = function() {
        btnDsn.textContent = name;
    };
})();

EXAMPLE 3 VANILLA JS
let btnDsn = document.querySelector("#btn-design");
localStorage.setItem('Name','CLICKED');
let name = localStorage.getItem('Name');
  
(function (){
    btnDsn.onclick = function() {
        btnDsn.textContent = name;
    };
})();
localStorage.clear();
*/




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format("H");
  var timeBlocks = $(".time-block");

  // Short hand for a loop using JQuery
  timeBlocks.each(function(){
    var thisHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(thisHour);
  if (thisHour < currentHour) {
    $(this).addClass("past")
  } else if (thisHour == currentHour) {
    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  } 
  });
  // Normally a loop will be done like this for Vanilla JS, but I used the above JQuery instead!
  // for (var i = 0; i < timeBlocks.length; i++) {
  //   console.log(timeBlocks[i]);
  // }
  



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  //Displays the current date in the header of the page The month, day and year code was found on Day.js --> https://day.js.org/docs/en/display/format.
  var today = dayjs().format("MMMM DD, YYYY");
  console.log(today);

  $("#currentDay").text(today)
});

