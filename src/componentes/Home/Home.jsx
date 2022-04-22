import my__img from "../img/logo.svg";
import "./Home.css";
export const Home = () => {
    return(
        <div className="home anima" id="home">
            <div className="center">
                <div className="home__content">
                    <p>Hi,<br/> I'am <span>Elton</span><br/> web Developer</p>
                    <a href=" https://wa.me/258856564712">Contact</a>
                </div>
                <div className="my__img">
                    <img src={my__img} alt="imagem do Elton" srcset="" />
                </div>
            </div>
        </div>
    )
}