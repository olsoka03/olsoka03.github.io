addTask = function() {
  alert("hello");
  ul = document.querySelector("#list");
  li = document.createElement("li");
  check = document.createElement("input");
  check.type = "checkbox";
  text = document.querySelector("#new");
  item = document.createTextNode(text.value);
  drop = document.querySelector("priority");
  li.className = drop.value;
  
  li.appendChild(check);
  li.appendChild(item);
  ul.appendChild(li);
}
