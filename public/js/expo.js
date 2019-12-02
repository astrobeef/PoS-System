// Get references to page elements
var $deleteOrder = $("#deleteOrder");
var $recallOrder = $("recall")
var $completeOrder = $("#complete")



// The API object contains methods for each kind of request we'll make
var API = {

  getOrders: function () {
    return $.ajax({
      url: "api/items/",
      type: "GET"
    });
  },
  deleteOrder: function (id) {
    return $.ajax({
      url: "api/items/" + id,
      type: "DELETE"
    });
  }
};



// handleDeleteBtnClick is called when an order  delete button is clicked
// Remove the order from the db
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteOrder(idToDelete).then(function () {
    console.log("Order deleted")
  });
};

// Add event listeners to the delete button

$deleteOrder.on("click", function () {

  console.log("working")

})

