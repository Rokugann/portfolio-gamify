import gallery from "../assets/images/imgRegistry"
import { StringBtnProp } from "../modules/interfaces"

let LeftSectionFrameClass = "absolute z-0 h-full w-full -skew-x-veryBig bg-MainColor border-8 border-solid border-t-0 border-b-0 "

function LeftSection({state, setState, previousState}:StringBtnProp)
{

    let frameClass = LeftSectionFrameClass + "border-MainColor";
    let LeftSectionClass = "leftSideView ContactBtn";

    switch(state)
    {
        case "ContactBtn":
        frameClass = LeftSectionFrameClass + "border-ContactBtn"
        LeftSectionClass = "leftSideView ContactBtn"
        break;
        case "MeBtn":
        frameClass = LeftSectionFrameClass + "border-MeBtn"
        LeftSectionClass = "leftSideView ContactBtn"
        break;
        default:
        frameClass = LeftSectionFrameClass + "border-MainColor"
        LeftSectionClass = "leftSideView ContactBtn hidden"
        break;
    }

    if(state == "ContactBtn")
    {
        return(
            <>
            <section className={LeftSectionClass}>
                <div className="leftSideViewContent">
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
                <div className={frameClass}></div>
            </section>
            </>
        )
    }
    else if(state == "MeBtn")
    {
        return(
            <>
            <section className={LeftSectionClass}>
                <div className="leftSideViewContent">
                    <h1>Mes Techs ! Mes outils ! Mes fidèles amis !</h1>
                    <ul className="toolSection">
                        <li><a href="https://html.spec.whatwg.org/"><img className="smallIcon" src={gallery.html5Img} alt="HTML5 Icon"/></a></li>
                        <li><a href="https://www.w3.org/Style/CSS/specs.en.html"><img className="smallIcon" src={gallery.css3Img} alt="CSS3 Icon"/></a></li>
                        <li><a href="https://www.typescriptlang.org/"><img className="smallIcon" src={gallery.typescriptImg} alt="TypeScript Icon"/></a></li>
                        <li><a href="https://www.javascript.com/"><img className="smallIcon" src={gallery.javascriptImg} alt="JavaScript Icon"/></a></li>
                        <li><a href="https://reactjs.org/"><img className="smallIcon" src={gallery.reactImg} alt="React Icon"/></a></li>
                        <li><a href="https://symfony.com/"><img className="smallIcon" src={gallery.symfonyImg} alt="Symfony Icon"/></a></li>
                        <li><a href="https://unity.com/"><img className="smallIcon" src={gallery.unityImg} alt="Unity Icon"/></a></li>
                        <li><a href="https://elixir-lang.org/"> <img className="smallIcon" src={gallery.elixirImg} alt="Erlang Icon"/></a></li>
                        <li><a href="https://www.phoenixframework.org/"><img className="smallIcon" src={gallery.phoenixFImg} alt="Phoenix Framework Icon"/></a></li>
                        <li><a href="https://docs.microsoft.com/en-us/dotnet/csharp/"><img className="smallIcon" src={gallery.csharpImg} alt="C# Icon"/></a></li>
                        <li><a href="https://www.python.org/"><img className="smallIcon" src={gallery.pythonImg} alt="Python Icon"/></a></li>
                        <li><a href="https://tailwindcss.com/"><img className="smallIcon" src={gallery.tailwindImg} alt="Tailwind CSS Icon"/></a></li>
                    </ul>
                </div>
                <div className="bioSection leftSideViewContent">
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
                </div>
                <div className={frameClass}></div>
            </section>
            </>
        )
    }
    else
        return null
}

export default LeftSection