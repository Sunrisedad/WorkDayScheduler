// VARIABLES

var hour8AM = $("#8");
var hour9AM = $("#9");
var hour10AM = $("#10");
var hour11AM = $("#11");
var hour12PM = $("#12");
var hour1PM = $("#13");
var hour2PM = $("#14");
var hour3PM = $("#15");
var hour4PM = $("#16");
var time = moment();
var saveBtn = $(".saveBtn");

// SAVE EVENT TO LOCAL STORAGE

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

// COLOR CODE EVENTS BASED ON PAST/PRESENT/FUTURE

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }


        else if (thisHour === hour) {
            $(this).addClass("present");
        }


        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();

// ENTER/SAVE/RETRIEVE ENTERED TEXT FROM LOCAL STORAGE

function usePlanner() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

usePlanner();

// CURRENT TIME

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));