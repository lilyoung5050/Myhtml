const todoList = [];

function todoEnterArr() {
  let DisplayDEMO = "";
  todoList.forEach(function (outDisplay, index) {
    const outnme = outDisplay.nme;
    const outDate = outDisplay.todoDate;
    let html = `<div> ${outnme} </div>
    <div>${outDate}</div>
    <button class="deleteArray"> delete </button>`;
    DisplayDEMO += html;
  });
  document.getElementById("demo").innerHTML = DisplayDEMO;
  let btndel = document.querySelectorAll('.deleteArray');
// for (let i = 0; i <= btndel.length - 1; i++) {
//   let killer = btndel[i];
//   killer.addEventListener('click', () => {
//     todoList.splice(killer, 1);
//     todoEnterArr();
//   });
// }
btndel.forEach((value,index)=> {
  value.addEventListener('click', () => {
    todoList.splice(index, 1);
     todoEnterArr();
})
});
}

function todoEnter() {
  const inputElement = document.getElementById("js_todo");
  const dateElement = document.getElementById("js_todo_date");
  inputTodo = inputElement.value;
  dateTodo = dateElement.value;
  todoList.push({ nme: inputTodo, todoDate: dateTodo });
  todoEnterArr();
  dateElement.value = "";
  inputElement.value = "";
}
