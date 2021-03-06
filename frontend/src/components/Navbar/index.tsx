import { ReactComponent as GithubIcon } from 'assets/img/Vector.svg';
import './styles.css';
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/BrandonSalim" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/BrandonSalim</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;