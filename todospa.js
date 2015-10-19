addTask = function() {
  ul = document.querySelector("#list");
  li = document.createElement("li");
  check = document.createElement("checkbox");
  document.querySelector("#new");
  item = document.createTextNode("#new").value;
  
  li.appendChild(check);
  li.appendChild(item);
  ul.appendChild(li);
}
