var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

const inputValue = () => input.value.length;

const createListElement = () => {
	    let li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      let deleteBtn = document.createElement("button");
      deleteBtn.appendChild(document.createTextNode("Delete"));
      li.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
        li.remove();
      })
      input.value = "";
}

const clickEvent = () => {
  if(inputValue() > 0) {
    createListElement();
  }
}

const keypressEvent = (event) => {
  if(inputValue() > 0 && event.which === 13) {
    createListElement();
  }
}

button.addEventListener("click", clickEvent);


input.addEventListener("keypress", keypressEvent);