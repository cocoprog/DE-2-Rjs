

const NavBar = () => {
    return (
    <div className="nav-contenedor">        
       <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">INICIO</a>
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
    </div>
    )
};

export default NavBar;