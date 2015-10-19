addTask = function() {
  ul = document.querySelector("#list");
  li = document.createElement("li");
  check = document.createElement("input");
  check.type = "checkbox";
  text = document.querySelector("#new");
  item = document.createTextNode(text).value;
  
  li.className = 
  
  li.appendChild(check);
  li.appendChild(item);
  ul.appendChild(li);
}
