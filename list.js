const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-todo');
const input = document.querySelector('#to-do');
const todoList = document.querySelector('#to-do-list');

for (let btn of removeButtons) {
    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'x'
    newTodo.innerText = input.value;
    newTodo.appendChild(removeBtn);
    input.value = '';
    todoList.appendChild(newTodo);
});

    todoList.addEventListener("click", function(event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
     }  else if (targetTagToLowerCase === "button") {
         event.target.parentNode.remove();
        }
    });