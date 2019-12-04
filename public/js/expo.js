// Get references to page elements
var $deleteOrder = $("#deleteOrder");
const $recallOrder = $(".recallOrder")
var $completeOrder = $("#complete")


$deleteOrder.on("click", function () {

  console.log("working")
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/items/" + id, {
    type: "DELETE"
  }).then(
    function () {

      // Reload the page to get the updated list 
      location.reload();
    })
})

$completeOrder.on("click", function () {

  console.log("working")
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/items/" + id, {
    type: "DELETE"
  }).then(
    function () {

      // Reload the page to get the updated list 
      location.reload();
    })
})


$recallOrder.on("click", function () {
  console.log("worked")

  $.ajax({
    url: "/api/items/",
    type: "GET"
  }).then(
    function () {
      console.log('worked too')
    }
  )

});

setInterval(function () {

  $times = $(".current-time");

  let element = 0;

  while($times[element])
  {
    const $time = $($times[element]);
    let timeID = $time.attr("id");
    timeID.split("-");
    timeID = parseInt(timeID[timeID.length - 1]);
    console.log(timeID);

    $time.text(incrementTime($time.text()));

   
    element++;

    sendNewTime(timeID, $time.text());

  };


}, 1000);

function sendNewTime(id, newTime)
{
  $.ajax({
    url : "/api/items/" + id,
    type : "PUT",
    data : {
      currentTime : newTime
    }
  }).then(function (res, err){
    console.log("Sent time");
  })
}

function incrementTime(currentTime)
{
  let newTime = currentTime;

  newTime = newTime.split(":");

  let minutes = parseInt(newTime[0]);
  let seconds = parseInt(newTime[1]);

  if(seconds < 59)
  {
    seconds++;
    if(seconds < 10)
    {
      seconds = "0" + seconds;
    }
  }
  else
  {
    minutes++;
    seconds = "00";
  }

  newTime = `${minutes}:${seconds}`;

  return newTime;

};