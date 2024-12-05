import Loading, { divContent } from "./pageLoad";
import { Menu } from "./menu";
import { reservation } from "./reservation";
import { getAbout } from "./about";
const menuBtn = document.querySelector("#menu");
const homeBtn = document.querySelector("#home");
const reserveBtn = document.querySelector("#reservation");
const aboutBtn = document.querySelector("#about");

function resetDivContent() {
  divContent.innerHTML = "";
  divContent.style.display = "block";
}

console.log("i am working!!!!");
Loading();

homeBtn.addEventListener("click", function () {
  resetDivContent();
  return Loading();
});
menuBtn.addEventListener("click", function () {
  resetDivContent();
  Menu.getMenu();
  Menu.getCardMenu();
});

reserveBtn.addEventListener("click", function () {
  resetDivContent();
  reservation.getInput();
});

aboutBtn.addEventListener("click", function () {
  resetDivContent();
  getAbout();
});
