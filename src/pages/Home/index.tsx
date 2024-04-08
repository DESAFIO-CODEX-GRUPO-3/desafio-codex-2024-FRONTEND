import workersImg from "../../assets/workers.svg";
import taskLogo from "../../assets/task.svg";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <div className="homepage-container">
        <header>
            <Link to={"/"}>
            <img className="task-logoimg" src={taskLogo} alt="Logomarca do serviço Task" />
            </Link>
            <div className="signin-signout">
                <Link to={"/signin"}>
                <button
                className="login">Fazer Login</button>
                </Link>
                <Link to={'/signup'}>
                <button className="signup-button">Comece a usar o Task agora</button>
                </Link>
            </div>
        </header>
        <main>
            <h1>Organize as suas idéias.</h1>
            <h2>Escreva listas de tarefas, gerencie atividades em equipes em um único espaço de trabalho.</h2>
            <Link to={'/signup'}>
                <button className="signup-button">Comece a usar o Task agora</button>
            </Link>
            <img
                className="workers-svg"
                src={workersImg}
                alt="Ilustração simbolizando um time de desenvolvimento"
            />
        </main>
        </div>
    )
}