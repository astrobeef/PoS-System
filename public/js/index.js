const $menuItems = $(".menu-items");
const $mods = $(".mods");
const $sendToItemDB = $(".send-to-db");

let newItem = {};

let modsToSend = [];

const API = {

  getMenuItem: function (id) {
    return $.ajax({
      url: "api/menu/" + id,
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

$menuItems.click(function (event) {
  console.log($(event.target).attr("id"));

  API.getMenuItem(1).then(function (menuItem, err) {

    console.log(menuItem[0]);

    generateModifications(menuItem[0].mods);

  });

});

function generateModifications(mods) {

  const modsArray = mods.split(",");

  for (let i = 0; i < modsArray.length; i++) {

    let $div = $("<div>").addClass("form-check");

    let $input = $("<input>").addClass("form-check-input");
    $input.attr("type", "checkbox");
    $input.attr("id", `mod-${i}`);

    let $label = $("<label>").addClass("form-check-label");
    $label.attr("for", `mod-${i}`);
    $label.text(modsArray[i]);

    $div.append($input);
    $div.append($label);

    $mods.append($div);
  }



}

$mods.click(function (event) {

  const $target = $(event.target);

  let modID = $target.attr("id");
  modID = modID.split("-");
  modID = parseInt(modID[1]);

  const active = event.currentTarget.childNodes[modID + 1].childNodes[0].checked;

  if (active) {
    addModIfNull(event.currentTarget.childNodes[modID + 1].childNodes[1].textContent);
  }
  else {
    removeModIfExists(event.currentTarget.childNodes[modID + 1].childNodes[1].textContent);
  }

})



function addModIfNull(mod) {

  modsToSend.push(mod);

  console.log(modsToSend);

}

function removeModIfExists(mod) {

  const index = modsToSend.indexOf(mod);

  modsToSend.splice(index, 1);

  console.log(modsToSend);

}

$sendToItemDB.click(function (event) {

  /** Need to add code to:
  * - compress the mods array into a single string.
  * - prepare the entire object to be sent to DB.
  * - run an AJAX call to the API to send the item into the DB.
  * - (optional) update the pages of expo and station-- not necessary because the user cannot currently be on all screens at once.
  */

});