const item = document.querySelector("#item");
const todoList = document.querySelector("[todo-list]");


item.addEventListener('keyup',(event)=>{
    if(event.key==="Enter" && item.value!="")
    {
        maketodolist(item.value);
        item.value="";
    }
})

function maketodolist(value)
{
        const newlist = document.createElement('li');
        newlist.innerHTML = `${value} <button class="cross">&#10006;</button>`;
        todoList.appendChild(newlist);

        newlist.addEventListener('click',()=>{
            newlist.classList.toggle("done");
        })

        newlist.querySelector('.cross').addEventListener('click',()=>{
            todoList.removeChild(newlist);
        })
}