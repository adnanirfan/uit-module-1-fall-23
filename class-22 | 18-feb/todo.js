function addTodo() {
  var todoField = document.getElementById("todo-field");

  const li = document.createElement("li");

  li.innerText = todoField.value;

  const ul = document.getElementsByTagName("ul");
  console.log(ul);
  ul[0].appendChild(li);

  todoField.value = "";
}
