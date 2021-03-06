"use strict";

const inputAdd = document.querySelector(".shopping-inputAdd");
const btnAdd = document.querySelector(".shopping-btnAdd");
const btnAddIcon = btnAdd.querySelector("i");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

btnAdd.addEventListener("click", () => {
  const check = inputAdd.classList.contains("clickAdd");
  if (check) {
    btnAddIcon.style.transform = "none";
    inputAdd.classList.remove("clickAdd");
  } else {
    btnAddIcon.style.transform = `rotate(45deg)`;
    inputAdd.classList.add("clickAdd");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = inputAdd.value;
  if (userInput === "") {
    return;
  }
  inputAdd.value = "";
  const li = document.createElement("li");
  li.setAttribute("class", "shipping-list");
  li.innerHTML = `
    <span>${userInput}</span>
    <div>
        <button class="list-check" onclick="handleClickCheck(this)"><i class="fas fa-check"></i></button>
        <button class="list-delete" onclick="handleClickDelete(this)"><i class="fas fa-trash"></i></button>
    </div>
  `;
  ul.appendChild(li);
  li.scrollIntoView({ block: "center" });
});

const handleClickCheck = (targetInfo) => {
  const targetInput = targetInfo.parentNode.parentNode.childNodes[1];
  const targetBtnIcon = targetInfo.childNodes[0];
  targetBtnIcon.style.color = "#eeeeee";
  targetInput.style.textDecoration = `line-through red`;
  targetInput.style.color = "#eeeeee";
};

const handleClickDelete = (targetInfo) => {
  const target = targetInfo.parentNode.parentNode;
  target.remove();
};
