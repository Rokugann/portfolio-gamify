import gallery from "../assets/images/imgRegistry";
import { StringBtnProp } from "../modules/interfaces";

function TechView()
{
    return(
        <>
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
        </>
    )
}

export default TechView