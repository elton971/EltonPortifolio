import "./NavBar.css";
import { useState } from "react";
export const NavBar = () => {
    var classe="nav-links";
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);//seta o estado de aberto ou fechado da navbar
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
                    <li className="nav-links__item" onClick={toggle} ><a href="#home">Home</a></li>
                    <li className="nav-links__item" onClick={toggle} ><a href="#sobre">Sobre</a></li>
                    <li className="nav-links__item" onClick={toggle} ><a href="#skills">Skills</a></li>
                    <li className="nav-links__item" onClick={toggle} ><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}


    
