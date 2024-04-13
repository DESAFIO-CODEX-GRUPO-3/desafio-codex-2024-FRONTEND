import './styles.css';
import uncheckedBox from "../../assets/unchecked-box.svg";
import dots from "../../assets/dots.svg";


export default function Task() {
    return (
        <div className='task-container'>
            <div className='task-side-content'>
                <img src={uncheckedBox} />
                <p>Tarefa 1</p>
            </div>
            <img className='dots' src={dots}/>
        </div>
    )
}