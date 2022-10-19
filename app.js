const newTodo = document.querySelector('.newTodo');
const newTodos = document.querySelector('.newTodos');
const ul = document.querySelector('.todoLists');


//Event Listerners
newTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const x = newTodos.value;
    const html = `
    <div class="flexContent">
    <li>${x}</li>
    <span class="material-icons">
        clear
        </span>
    </div>
    `;
    ul.innerHTML += html;
    newTodos.value = '';
});
   
    



ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('material-icons')){
        e.target.parentElement.remove();
    }
})


