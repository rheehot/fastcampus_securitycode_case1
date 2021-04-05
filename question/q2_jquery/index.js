// Import stylesheets
import "./style.css";
import $ from "jquery";

// Write JQuery code here!
const $items = $(".wrapper .item");
$("body").on("click", function (e) {
  const item = $(e.target);
  if (item.is(".item")) {
    item.toggleClass("open").siblings().removeClass("open");
  } else {
    $items.removeClass("open");
  }
});
