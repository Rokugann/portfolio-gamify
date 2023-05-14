import gallery from "../assets/images/imgRegistry";
import { StringBtnProp } from "../modules/interfaces";

function TechView()
{
    return(
        <>
        <div className="relative w-[90%] h-[90%] self-center mx-auto z-40 bg-zinc-900/80 text-white rounded-xl p-16 text-MainColor">
                <div className="flex flex-col gap-12 overflow-y-scroll h-full w-full">
                <h1 className="self-center text-xl font-bold">Mes Techs ! Mes outils ! Mes fidèles amis !</h1>
                <ul className="w-full flex flex-col gap-12 divide-y-4 divide-slate-500/20">
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://html.spec.whatwg.org/">
                            <img src={gallery.html5Img} alt="HTML5 Icon"/>
                        </a>
                        <p>
                            le langage de base de toute page web, incontournable pour tout bon développeur front-end !
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://www.w3.org/Style/CSS/specs.en.html">
                          <img src={gallery.css3Img} alt="CSS3 Icon"/>
                        </a>
                        <p>
                            CSS3 : pour donner vie à vos pages web avec des styles et des animations, un must-have pour les développeurs front-end.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://www.typescriptlang.org/">
                          <img src={gallery.typescriptImg} alt="TypeScript Icon"/>
                        </a>
                        <p>
                            TypeScript : un langage de script basé sur javascript, puissant et sûr, il facilite le développement d'applications web complexes.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://www.javascript.com/">
                          <img src={gallery.javascriptImg} alt="JavaScript Icon"/>
                        </a>
                        <p>
                            JavaScript : le langage de script incontournable pour les développeurs front-end, qui permet de créer des interactions dynamiques et des applications réactives.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://reactjs.org/">
                          <img src={gallery.reactImg} alt="React Icon"/>
                        </a>
                        <p>
                            React : une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives et réactives. (c'est avec ce dernier que j'ai conçu le présent site !)
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://symfony.com/">
                          <img src={gallery.symfonyImg} alt="Symfony Icon"/>
                        </a>
                        <p>
                            Symfony : un framework PHP robuste et flexible, idéal pour le développement web de grande envergure.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://unity.com/">
                          <img src={gallery.unityImg} alt="Unity Icon"/>
                        </a>
                        <p>
                            Unity : un moteur de jeu populaire pour la création de jeux 2D et 3D, utilisé par des millions de développeurs dans le monde entier il permet de créer des application interactives de toute genre en C#.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://elixir-lang.org/">
                            <img src={gallery.elixirImg} alt="Erlang Icon"/>
                        </a>
                        <p>
                            Elixir : un langage de programmation fonctionnel puissant, qui facilite le développement de systèmes distribués et résilients. (sans aucun doute le futur !)
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://www.phoenixframework.org/">
                            <img src={gallery.phoenixFImg} alt="Phoenix Framework Icon"/>
                        </a>
                        <p>
                            Phoenix framework : un framework Web pour Elixir, qui permet de créer rapidement des applications web robustes et évolutives.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                            <img src={gallery.csharpImg} alt="C# Icon"/>
                        </a>
                        <p>
                            C# : un langage de programmation orienté objet, qui permet de créer des applications Windows, des jeux vidéox et concevoir  backend robuste.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://www.python.org/">
                            <img src={gallery.pythonImg} alt="Python Icon"/>
                        </a>
                        <p>
                            Python : un langage de programmation polyvalent et facile à apprendre, utilisé pour le développement web, l'analyse de données et l'automatisation de tâches.
                        </p>
                    </li>
                    <li className="flex flex-row items-center ">
                        <a className="w-54 mr-8" href="https://tailwindcss.com/">
                            <img src={gallery.tailwindImg} alt="Tailwind CSS Icon"/>
                        </a>
                        <p>
                            Tailwind CSS : une bibliothèque de styles CSS facile à utiliser, qui permet de créer des designs modernes, personnalisables, responsives, le tout rapidement et efficacement.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default TechView