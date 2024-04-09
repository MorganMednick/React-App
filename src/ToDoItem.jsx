// import style from './ToDoItem.module.css';
import './ToDoItem.css';

function TodoItem({text,id}) {
    return (
        <article className='todo-item'>
           {text} {id}
        </article>
    )
}

export default TodoItem;