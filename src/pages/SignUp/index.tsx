import { Link, Navigate,  } from 'react-router-dom';
import './styles.css';
import taskLogo from "../../assets/task-bgwhite.svg";
import workpsace from "../../assets/workspace.svg";
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { FormEvent, useState } from 'react';
import { axiosInstance as api } from "../../service/apiService";
import { isAxiosError } from 'axios';

export default function SignUp() {
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (password !== confPassword) {
            alert("As senhas não combinam");
            return;
        }

        const nGender = gender.trim()[0].toUpperCase();
        const nAge = Number(age);

        const data = ({
            fullName,
            gender: nGender,
            age: nAge,
            email,
            password
        });

        try {
            const response = await api.post('/user', data);
            if (response.status === 201) {
                const data = ({
                    email,
                    password
                });
                const loginResponse = await api.post('/user/login', data);
                if (loginResponse.status === 200) {
                    localStorage.setItem('userToken', loginResponse.data.token);
                    setRegistered(true);
                }
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
            {registered && (<Navigate to="/" replace={true} />)}
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
                        value={fullName}
                        changeHandler={(value: string) => setFullName(value)}
                        />
                    <Input 
                        inputLabel='Gênero'
                        placeholder='Digite o seu sexo'
                        type='text'
                        value={gender}
                        changeHandler={(value: string) => setGender(value)}
                        />
                    <Input 
                        inputLabel='Idade'
                        placeholder='Insira a sua idade'
                        type='number'
                        value={age}
                        changeHandler={(value: string) => setAge(value)}
                        />
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
                    <Input 
                        inputLabel='Confirmar'
                        placeholder='Confirme a sua senha'
                        type='password'
                        value={confPassword}
                        changeHandler={(value: string) => setConfPassword(value)}
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