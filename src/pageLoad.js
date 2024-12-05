const divContent = document.querySelector("#content");

function pageLoad() {
  const divTitle = document.createElement("div");
  divTitle.className = "divTitle";
  divContent.appendChild(divTitle);
  const title = document.createElement("h1");
  title.className = "homeTitle";
  title.textContent =
    "Welcom to Zinuxien savor's where you'll come on your mouth";
  title.innerHTML = title.innerHTML.replace("savor's", "savor's <br>");
  title.innerHTML = title.innerHTML.replace("on", "on <br>");
  divTitle.appendChild(title);
}

export default pageLoad;
export { divContent };
