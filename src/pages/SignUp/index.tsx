import { Link } from 'react-router-dom';
import './styles.css';
import taskLogo from "../../assets/task-bgwhite.svg";
import workpsace from "../../assets/workspace.svg";
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { FormEvent } from 'react';

export default function SignUp() {
    async function handleRegister(event: FormEvent) {
        event.preventDefault();
    }

    return(
        <div className='signup-page-container'>
        <aside>
            <div className="asideHeader">
            <Link to={"/"}>
                <img className="task-logoimg" src={taskLogo} alt="Logomarca do serviço Task" />
            </Link>
            <h1>Cadastrar uma conta</h1>
            </div>
            <form onSubmit={handleRegister}>
                <Input 
                    inputLabel='Nome Completo'
                    placeholder='Insira o seu nome completo'
                    type='text'
                    />
                <Input 
                    inputLabel='Gênero'
                    placeholder='Digite o seu sexo'
                    type='text'
                    />
                <Input 
                    inputLabel='Idade'
                    placeholder='Insira a sua idade'
                    type='number'
                    />
                <Input 
                    inputLabel='Email'
                    placeholder='Insira o seu email'
                    type='email'
                    />
                <Input 
                    inputLabel='Senha'
                    placeholder='Digite a sua senha'
                    type='password'
                    />
                <Input 
                    inputLabel='Confirmar'
                    placeholder='Confirme a sua senha'
                    type='password'
                    />
                <SubmitButton
                innerText='Registrar'
                />
                <div className='signin-divtext'>
                    <p className='signin-text'>Já Possui uma conta Task? <Link className='text-link' to={"/signin"}>Iniciar Sessão.</Link></p>
                </div>
            </form>
        </aside>
        <main className='signup-main'>
            <div className='workspaceimg-container'>
            <img src={workpsace} alt="Espaço de trabalho" className='workspaceImg' />
            </div>
        </main>
        </div>
    )
}