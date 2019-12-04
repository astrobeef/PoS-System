var $toCook = $(".toCook");
var $cooking = $(".cooking")

$toCook.on("dblclick", function () {

  console.log("changed status to: working");
  var id = $(this).data("id");
  console.log(id);
  var status = $(this).data("status")

  var working = "working"
  // Send the PUT request.
  $.ajax("/api/items/" + id, {
    type: "PUT",
    data: {
      status: working
    }
  }).then(
    function () {
      console.log("changed status to: working");
      // Reload the page to get the updated list
      window.location.reload();
    }
  );
});


$cooking.on("dblclick", function () {

  var id = $(this).data("id");
  var finished = "finished"
  console.log(id);
  // var status = $(this).data("status")
  var finished = "finished"
  // Send the PUT request.
  $.ajax("/api/items/" + id, {
    type: "PUT",
    data: {
      status: finished
    }
  }).then(
    function () {
      console.log("changed status to: finished");
      // Reload the page to get the updated list
      window.location.reload();
    }
  );

});




// $recallOrder.on("click", function () {
//   console.log("worked")

//   $.ajax({
//     url: "/api/items/",
//     type: "GET"
//   }).then(
//     function () {
//       console.log('worked too')
//     }
//   )

// })


$recallOrder.on("click", function () {
  $.ajax({
    url: "/station/:id/recall",
    type: "GET"
  }).then(
    function () {
      console.log('worked too')
    })
}
)
