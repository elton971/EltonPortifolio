import "./Footer.css"
export function Footer(){
    return(
        <footer className="footer" id="contacto">
            <div className="footer_content">
            <a href=""><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
            <p>Desenvolvido por @EltonDev</p>
        </footer>
    )
}