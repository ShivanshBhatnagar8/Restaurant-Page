import "./css/style.css";
import "./css/query.css";
import { homeLoad } from "./assets/home";
import { menuLoad } from "./assets/menu.js";
import { contactLoad } from "./assets/contact.js";
import { initialPage } from "./assets/initialPage";
const content = document.getElementById("content");

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", function () {
  if (content.lastElementChild.className !== "home-section") {
    content.removeChild(content.lastElementChild);
    homeLoad();
  }
});

const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  if (content.lastElementChild.className !== "header") {
    content.removeChild(content.lastElementChild);
    menuLoad();
    console.log(content.lastElementChild);
  }
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", function () {
  if (content.lastElementChild.className !== "header") {
    content.removeChild(content.lastElementChild);
    contactLoad();
  }
});
