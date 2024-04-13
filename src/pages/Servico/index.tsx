import React, { useEffect, useState } from 'react';
import './styles.css';
import Task from '../../components/Task';
import TodoList from '../../components/TodoList';
import plusButton from "../../assets/plus-button.svg";
import plusButtonTDL from "../../assets/plus-button-tdl.svg";
import downArrow from "../../assets/down-arrow.svg";
import { JWTSECRET } from '../../constants/tokenSecret';
import jwt from "jsonwebtoken";


export default function Servico()  {
    const userToken = localStorage.getItem("userToken");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");

    // useEffect(() => {
    //     jwt.verify(String(userToken), JWTSECRET, (error, decoded) => {
    //         if (error) return;
    //         if (decoded && decoded instanceof jwt.decode && decoded.email) {
    //             setEmail(decoded.email);
    //         }

    //         if (decoded && decoded instanceof jwt.decode && decoded.fullName) {
    //             setFullName(decoded.fullName);
    //         }
    //     });
    // }, [userToken])

    return (
        <div className='service-container'>
            <aside>
                <div className="secao-titulo">
                    <div className='titulo-side-content'>
                        <h3 className='user-initial'>U</h3>
                        <h3 className="titulo">Task de Usuário</h3> 
                    </div>
                    <img src={downArrow} />
                </div>
                <button className='todo-list-button'>
                    <img src={plusButtonTDL} alt="" />
                    <h3>Nova Lista de Tarefas</h3>
                </button>
                <hr className="linha-horizontal" />
                <ul>
                    <TodoList />
                    <TodoList />
                    <TodoList />
                </ul>
            </aside>
            <main>
                <div className='main-header'>
                    <p className='p-title'>Sem Título</p>
                    <p className='p-updated'>Última vez atualizado há x dias</p>
                </div>
                <div className='main-content'>
                    <h1 className='todolist-title' >Sem Título</h1>
                    <div className='task-list'>
                        <Task />
                        <Task />
                        <Task />
                    </div>
                    <button className='new-task-button'>
                        <img src={plusButton} />
                        <p>Nova Tarefa</p>
                    </button>
                </div>
            </main>
        </div>
    );
}
