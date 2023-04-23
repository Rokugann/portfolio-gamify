import gallery from "../assets/images/imgRegistry";
import { StringBtnProp } from "../modules/interfaces";

function MeView()
{
    return(
        <>
            <div className="relative w-[90%] h-[90%] self-center mx-auto z-40 bg-zinc-900/80 text-white rounded-xl p-16">
                <div className="overflow-y-scroll h-full w-full">
                    <h1>À Propos de moi</h1>
                    <p>
                    Développeur web, web mobile et de jeux vidéo. 
                    Mon intérêt pour la programmation a commencé lors d'un projet de développement 
                    de jeux de shoot'em up en C#.
                    </p>
                    <p>
                    Depuis, j'ai poursuivi cette passion en apprenant de nombreux langages de 
                    programmation et en cherchant constamment à améliorer mes compétences.
                    </p>
                    <p>
                    Toujours en quête de nouvelles opportunités pour développer mes capacités
                    professionnelles et personnelles, j'ai également participé à divers projets entrepreneuriaux.
                    </p>
                    <p>
                    En dehors du travail, j'aime beaucoup les jeux vidéo et je parle 
                    couramment l'anglais, bien que je cherche toujours à améliorer mon accent tout 
                    en gardant cette empreinte française qui a tout son charme.
                    </p>
                    <h1>Contactez moi</h1>
                    <h2>06 40 23 92 05</h2>
                    <h2>samuel.perier.uter@gmail.com</h2>
                    <span className="ContactViewRow">
                        <p>Mon github</p>
                        <a href="https://github.com/Rokugann"><img className="icon" src={gallery.githubImg} alt="Github Icon"/></a>
                        <img className="qrCode" src={gallery.githubQRCode} alt="QR code github"/>
                    </span>
                    <span className="ContactViewRow">
                        <p>Mon github</p>
                        <a href="https://www.linkedin.com/in/codingsamsam/"><img className="icon" src={gallery.linkedinImg} alt="Linkedin Icon"/></a>
                        <img className="qrCode" src={gallery.linkedinQRCode} alt="QR code Linkedin"/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default MeView