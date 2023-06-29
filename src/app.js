let trashIcons = document.querySelectorAll("i.fa-trash");
trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener("click", function(event) {
    event.target.parentElement.parentElement.remove();
  });
});

let input = document.querySelector("#addToDo");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let icon = document.createElement("i");

    icon.classList.add("fa", "fa-trash");
    span.appendChild(icon);

    let text = document.createTextNode(input.value);
    li.appendChild(span);
    li.appendChild(text);

    icon.addEventListener("click", function(event) {
      event.target.parentElement.parentElement.remove();
    });

    input.value = "";

    ul.appendChild(li);
  }
});
