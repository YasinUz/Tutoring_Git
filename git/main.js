// Selectors
const myHeader = document.querySelector(".kopf");
const myMain = document.querySelector("main");
const myFooter = document.querySelector("footer");
const myButton = document.querySelector(".knopf");
const myButton2 = document.querySelector(".ul-knopf");

// Eventlisteners
myButton.addEventListener("click", newElement);
myButton2.addEventListener("click", newUl);

// Functions
function newElement() {
  // ! Element wird erstellt
  const title = document.createElement("h1");
  //! title Klasse "heading-one" hinzufügt
  title.classList.add("heading-one");
  //! title Textwert hinzugefügt
  title.textContent = "Ich bin ein Titel";
  //! title einem Element zugeordnet
  myHeader.appendChild(title);
}

function newUl() {
  const list = document.createElement("ul");
  list.classList.add("footer-ul");
  myFooter.appendChild(list);

  const listElement = document.createElement("li");
  listElement.textContent = "Test";
  list.appendChild(listElement);
}
