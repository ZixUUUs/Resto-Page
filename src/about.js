import { divContent } from "./pageLoad";

function getAbout() {
  const info = document.createElement("div");
  info.className = "info";
  const aboutInfo = document.createElement("p");
  aboutInfo.textContent =
    "This is Zixuus project Restaurent-Page for The Odin Project 2024";
  info.appendChild(aboutInfo);
  divContent.appendChild(info);
}

export { getAbout };
