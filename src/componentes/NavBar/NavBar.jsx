import "./NavBar.css";
import { useState } from "react";
export const NavBar = () => {
    var classe="nav-links";
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <header className="header">
            <nav className="nav__bar">
                <div className="nav__logo">
                    <h1>Elton</h1>
                </div>
                <label className="button" onClick={()=>{                   
                    if(isOpen)
                    {
                        setIsOpen(false);
                    }
                    else
                    {
                        setIsOpen(true);
                    }
                }}>&equiv;</label>
                <ul className={isOpen ? "nav-links show" : "nav-links"}>
                    <li className="nav-links__item" onClick={toggle}><a href="#home">Home</a></li>
                    <li className="nav-links__item"><a href="#sobre">Sobre</a></li>
                    <li className="nav-links__item"><a href="#skills">Skills</a></li>
                    <li className="nav-links__item"><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}


    
