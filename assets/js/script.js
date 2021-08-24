$(document).ready(function() {

    // Adding date to header
var currentTime = moment().format("dddd MMMM Do, YYYY");
$("#currentDay")
.text("Today is " + currentTime);

// save button clicks and saving to local storage
$(".saveBtn").on("click", function() {
    //get values of text entry and time it is in
    var taskText = $(this).siblings(".event-entry").val();
    var taskTime = $(this).parent().attr("id");
    //save items to local storage
    localStorage.setItem(taskTime, taskText);
});
// loop through each time slot to compare 
function compareTimes() {
    //compare current hour to hour of task
var updatedHour = moment().hours();
    $(".timeblock").each(function() {
        var rowTime = $(this).attr("id");
        var rowNum = parseInt(rowTime);
        if(rowNum < updatedHour) {
            $(this).addClass("pastHour");
        }
        else if (rowNum === updatedHour) {
            $(this).removeClass("pastHour")
            .addClass("currentHour");
        }
        else if (rowNum > updatedHour) {
            $(this).removeClass("pastHour")
            .removeClass("currentHour")
            .addClass("futureHour");
        }
    });
}
compareTimes();

//set interval to check times every 30 min
var timeCheck = setInterval(compareTimes, (1000 * 60) * 30);

//loading local storage items
$("#9 .event-entry").val(localStorage.getItem("9"));
$("#10 .event-entry").val(localStorage.getItem("10"));
$("#11 .event-entry").val(localStorage.getItem("11"));
$("#12 .event-entry").val(localStorage.getItem("12"));
$("#13 .event-entry").val(localStorage.getItem("13"));
$("#14 .event-entry").val(localStorage.getItem("14"));
$("#15 .event-entry").val(localStorage.getItem("15"));
$("#16 .event-entry").val(localStorage.getItem("16"));
$("#17 .event-entry").val(localStorage.getItem("17"));

});