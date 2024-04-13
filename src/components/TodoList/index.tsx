import './styles.css'
import todoList from "../../assets/todolist.svg"
import dots from "../../assets/dots.svg";

export default function TodoList() {
    return (
        <div className='todolist-container'>
            <div className='side-content'>
                <img src={todoList} />
                <p>Sem Título</p>
            </div>
            <img src={dots} />
        </div>
    )
}