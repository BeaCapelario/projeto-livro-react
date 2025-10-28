import estilo from './NavBar.module.css';
import { Link } from 'react-router-dom';

export function NavBar () {
    return(
        <nav className={estilo.navbar}>
            <ul>
                <Link to= '/'><li>Meu livro</li></Link>
                <Link to= 'autor'><li>Autor</li></Link>
                <Link to= 'curiosidade'><li>Curiosidades</li></Link>
            </ul>
        </nav>
    )
}
