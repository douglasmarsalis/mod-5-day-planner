
$(function () {

  var notesObj = {};
   
  $(".saveBtn").on("click", function(event){
    var noteText = ($(this).siblings()[1].value);
    console.log(noteText);

    var noteHour = ($(this).parent().attr("id"));
    console.log(noteHour);

    notesObj[noteHour] = noteText
    localStorage.setItem("storedNotes", JSON.stringify(notesObj));

  });

  var currentHour = dayjs().format("H");
  var timeBlocks = $(".time-block");

/* Short hand for a loop using JQuery. THIS usually points to an object, function, class, etc. 
ParseInt function parses (breaksdown) a string argument and returns an integer. 
SPLIT will cut off the dash in the array number.
*/
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
  
  var allNotes = JSON.parse(localStorage.getItem("storedNotes"));

  timeBlocks.each(function(){
    var thisHour = $(this).attr("id");
    console.log(thisHour);

    
    var thisNote = allNotes[thisHour];
    console.log(thisNote);

    if (!thisNote) {
      return;
    }

    $(this).children("textarea")[0].value = thisNote;
    console.log($(this).children("textarea"));
  });  
  

  //Displays the current date in the header of the page The month, day and year code was found on Day.js --> https://day.js.org/docs/en/display/format.
  var today = dayjs().format("MMMM DD, YYYY");
  console.log(today);

  $("#currentDay").text(today)
});

