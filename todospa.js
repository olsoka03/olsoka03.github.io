addTask = function() {
  ul = document.querySelector("#list");
  li = document.createElement("li");
  check = document.createElement("input");
  check.type = "checkbox";
  text = document.querySelector("#new");
  item = document.createTextNode(text.value);
  drop = document.querySelector("#priority");
  li.className = drop.value;
  check.onclick = doneTask;
  
  li.appendChild(check);
  li.appendChild(item);
  ul.appendChild(li);
  
  localsave("list");
}
doneTask = function() {
  alert = "hello";
  if(this.checked) {
    this.parentNode.classList.add("done");
} else {
  this.parentNode.classList.remove("done");
}
localsave("list");
}
