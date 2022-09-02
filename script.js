//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
var currentTime = moment();
var beforeTime = moment().startOf('day').add(9, "hours");
var time1 = beforeTime.add(0, 'h');
var time2 = beforeTime.add(1, "h");
var time3 = beforeTime.add(1, 'h');
var time4 = beforeTime.add(1, 'h');
var time5 = beforeTime.add(1, 'h');
var time6 = beforeTime.add(1, 'h');
var time7 = beforeTime.add(1, 'h');
var time8 = beforeTime.add(1, 'h');
var time9 = beforeTime.add(1, 'h');
// THEN the current day is displayed at the top of the calendar
Moment(date);
$('#Day').text(momnet().format('dddd, MMMM Do'));
   currentTime = currentTime.startOf('hour');

time1 = time1.format('hh:mm A');
time2 = time2.format("hh:mm A");
time3 = time3.format('hh:mm A');
time4 = time4.format('hh:mm A');
time5 = time5.format('hh:mm A');
time6 = time6.format('hh:mm A');
time7 = time7.format('hh:mm A');
time8 = time8.format('hh:mm A');
time9 = time9.format('hh:mm A');

$('.block1').text(time1);
$('.block2').text(time2);
$('.block3').text(time3);
$('.block4').text(time4);
$('.block5').text(time5);
$('.block6').text(time6);
$('.block7').text(time7);
$('.block8').text(time8);
$('.block9').text(time9);

// WHEN I scroll down

// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
function Time(){
    
}