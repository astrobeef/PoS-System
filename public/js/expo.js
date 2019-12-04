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




