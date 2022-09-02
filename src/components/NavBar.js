const NavBar = () => {
    
    return (
        <header>
            <img src="marca3.png" alt="logo-enio" className="logo-enio" />
            <nav className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/modelos.html">Modelos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/shop.html">SHOP</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/sEspera.html">Sala de Espera</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/contacto.html">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;
