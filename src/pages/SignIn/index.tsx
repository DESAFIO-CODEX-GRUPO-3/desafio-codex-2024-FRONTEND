import { Link } from 'react-router-dom';
import './styles.css';
import taskLogo from "../../assets/task-bgwhite.svg";
import workpsace from "../../assets/workspace.svg";
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { FormEvent } from 'react';

export default function SignIn() {
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
            <h1>Fazer Login na sua conta</h1>
            </div>
            <form onSubmit={handleRegister}>
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
                <SubmitButton
                innerText='Iniciar Sessão'
                />
                <div className='signin-divtext'>
                    <p className='signin-text'>Não tem uma Conta ainda? <Link className='text-link' to={"/signup"}>Cadastre-se agora.</Link></p>
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