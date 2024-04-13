import { Link, Navigate } from 'react-router-dom';
import './styles.css';
import taskLogo from "../../assets/task-bgwhite.svg";
import workpsace from "../../assets/workspace.svg";
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { FormEvent, useState } from 'react';
import { axiosInstance as api } from '../../service/apiService';
import { isAxiosError } from 'axios';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logged, setLogged] = useState(false);

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        const data = ({
            email,
            password
        });

        try {
            const response = await api.post('/user/login', data);
            if (response.status === 200) {
                localStorage.setItem('userToken', response.data.token);
                setLogged(true);
            }
        } catch (error) {
            if (!(error instanceof Error)) return;
            if (isAxiosError(error) && error.response) {
                alert(error.response.data.error)
                console.log(error);
            } else {
                alert("Ocorreu um erro durante sua solicitação.");
            }
        }
    }

    return(
        <div className='signup-page-container'>
            {logged && (<Navigate to="/servico" replace={true} />)}
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
                        value={email}
                        changeHandler={(value: string) => setEmail(value)}
                    />
                    <Input 
                        inputLabel='Senha'
                        placeholder='Digite a sua senha'
                        type='password'
                        value={password}
                        changeHandler={(value: string) => setPassword(value)}
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