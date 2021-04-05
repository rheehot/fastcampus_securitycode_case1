// Import stylesheets
import "./style.css";

// Write Javascript code here!
const items = document.querySelectorAll("details");
document.body.addEventListener("click", function (e) {
  //   console.log(e.target.nodeName);
  if (e.target.nodeName !== "P" && e.target.nodeName !== "SUMMARY") {
    items.forEach(function (item) {
      item.removeAttribute("open");
    });
    return;
  }
  items.forEach(function (item) {
    if (item !== e.target.parentElement) {
      item.removeAttribute("open");
    }
  });
});
