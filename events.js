// Your code here
function redInputFunction(event) {
  if (document.getElementById("red-input").value === "red") {
    document.getElementById("red-input").style.backgroundColor = "red";
  }
};

function addItemsFunction(event) {
  const li = document.createElement("li");
  li.innerText = document.getElementById("list-add").value;
  document.getElementsByTagName("ul")[0].append(li);
};

function colorSelectFunction(event) {
  document.getElementById("section-3").style.backgroundColor = document.getElementById("color-select").value
};



window.addEventListener("DOMContentLoaded", event => {
  alert("DOM has loaded");

  // event listener for text input === "red"
  const redInput = document.getElementById("red-input");
  redInput.addEventListener("input", redInputFunction);

  // event liatener for add items click
  const addItem = document.getElementById("add-item");
  addItem.addEventListener("click", addItemsFunction);

  // event liatener for color select input
  const colorSelect = document.getElementById("color-select");
  colorSelect.addEventListener("input", colorSelectFunction);

  document.getElementById("remove-listeners")
    .addEventListener("click", event => {
      redInput.removeEventListener("input", redInputFunction);
      addItem.removeEventListener("click", addItemsFunction);
      colorSelect.removeEventListener("input", colorSelectFunction);
    });

  const restoreListeners = document.createElement("button");
  restoreListeners.id = "restore-listeners";
  restoreListeners.innerHTML = "Restore Listeners";


  document.getElementById("section-4").appendChild(restoreListeners)

  document.getElementById("restore-listeners")
    .addEventListener("click", event => {
      redInput.addEventListener("input", redInputFunction);
      addItem.addEventListener("click", addItemsFunction);
      colorSelect.addEventListener("input", colorSelectFunction);
    });

  const hoverDiv = document.createElement("div");
  hoverDiv.id = "hover-div";
  hoverDiv.innerHTML = "<h2>You Found me!</h2>";
  hoverDiv.style.color = "transparent"; 
  document.body.appendChild(hoverDiv);

  document.getElementById("hover-div").addEventListener("mouseover", event => {
    document.getElementById("hover-div").style.color = "black";
  });
});

window.onkeydown = event => {
  if (event.keyCode === 32) alert("The Space bar has been pressed");
}