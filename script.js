var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function inputValue() {
  return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      var deleteBtn = document.createElement("button");
      deleteBtn.appendChild(document.createTextNode("Delete"));
      li.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", function() {
        li.remove();
      })
      input.value = "";
}

function clickEvent() {
  if(inputValue() > 0) {
    createListElement();
  }
}

function keypressEvent(event) {
  if(inputValue() > 0 && event.which === 13) {
    createListElement();
  }
}

button.addEventListener("click", clickEvent);


input.addEventListener("keypress", keypressEvent);