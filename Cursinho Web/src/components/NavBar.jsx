import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <nav>
            <ul style={{display: 'flex'}}>
                <li><Link to="/Home">Página inicial</Link></li>
                <li> | </li>
                <li><Link to="/Disciplinas">Disciplinas oferecidas</Link></li>
            </ul>
        </nav>

    );
}