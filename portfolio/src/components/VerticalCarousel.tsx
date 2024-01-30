import { Project, StringBtnProp } from "../modules/interfaces"
import projectRegistry from "../assets/projects/projectRegistry"
import { useEffect, useState } from "react"
import VCarouselItem from "./VCarouselItem"
import FinalMenu from "./FinalMenu"
import { debug } from "console"

const processedRegistry:Array<Project> = []
projectRegistry.forEach((element) => processedRegistry.push(element))

let carouselFrameClass = " shadow-revertNeonGlow absolute z-0 h-full w-full skew-x-veryBig bg-MainColor border-8 border-solid border-t-0 border-b-0 "

function VerticalCarousel({state, setState, previousState}:StringBtnProp)
{
    const [currentProject, setCurrentProject] = useState<string>("")
    const [carouselDirection, setCarouselDirection] = useState<boolean | null>(null)
    const [rerenderCount, setRerenderCount] = useState<number>(0)

    let frameClass = carouselFrameClass
    let carouselClass = "flex h-full w-full absolute left-[70%] hidden "

    let baseMaxIndex = 4;

    if(processedRegistry.length <= 4)
    {
        baseMaxIndex = processedRegistry.length
    }

    let indexRef = Math.ceil(baseMaxIndex/2)


    switch(state)
    {
        case "FrontBtn":
        frameClass = carouselFrameClass + "border-FrontBtn"
        carouselClass = "flex h-full w-full absolute left-[70%]"
        break;
        case "BackBtn":
        frameClass = carouselFrameClass + "border-BackBtn"
        carouselClass = "flex h-full w-full absolute left-[70%]"
        break;
        case "GameBtn":
        frameClass = carouselFrameClass + "border-GameBtn"
        carouselClass = "flex h-full w-full absolute left-[70%]"
        break;
        default:
        frameClass = carouselFrameClass + "border-MainColor"
        carouselClass = "flex h-full w-full absolute left-[70%] hidden "
        break;
    }

    let i: number;

    useEffect(() => {
        if(state != "Project")
        {
            setCurrentProject("")
        }
    },[state])
    
    if(currentProject.length <= 0)
    {
        i = 0;
        return(
            <>  
                <section className={carouselClass}>
                    <ul className={"absolute self-center grid justify-center items-center z-10 grid-rows-" + (baseMaxIndex+1)} >
                        {processedRegistry.map((element) => {
                        return (<VCarouselItem key={element.id} state={state} setState={setState} 
                        currentProject={currentProject} 
                        setCurrentProject ={setCurrentProject} 
                        project={element} index={i++} maxIndex={baseMaxIndex} indexRef={indexRef}
                        carouselSize={processedRegistry.length}
                        carouselDirection={carouselDirection} 
                        setCarouselDirection={setCarouselDirection}
                        rerenderCount={rerenderCount}
                        setRerenderCount={setRerenderCount}/>)}
                        )}
                    </ul>
                    <div className={frameClass}></div>
                </section>
            </>
        )
    }
    else
    {
        return(
            <>
                {processedRegistry.map((element) => {if(element.id == currentProject)
                {
                    return <FinalMenu project={element} state={state} setState={setState} previousState={previousState}/>
                }
                })}
            </>
        )
    }
}

export default VerticalCarousel
