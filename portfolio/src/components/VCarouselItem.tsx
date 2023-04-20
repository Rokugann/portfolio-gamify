import {placeHolderCardDisplay} from "../assets/images/imgRegistry"
import { CarouselItemProp } from "../modules/interfaces"
import { useEffect, useState } from "react"

function VCarouselItem({state, setState, index, maxIndex, indexRef, carouselSize, project, currentProject, setCurrentProject, carouselDirection, setCarouselDirection, rerenderCount, setRerenderCount}:CarouselItemProp)
{
    const [myIndex, setMyIndex] = useState<number>(index)


    let carouselClickHandler = () => {
        if(myIndex == indexRef)
        {
            setCurrentProject(project.id)
            setState("Project")
        }
        else if (myIndex < indexRef)
        {

            setCarouselDirection(true)
            setRerenderCount(prevCount => prevCount + 1);
        }
        else
        {
            setCarouselDirection(false)
            setRerenderCount(prevCount => prevCount + 1);
        }
    }


    useEffect ( () => {
        if(carouselDirection != null && carouselDirection == true)
        {
            if((myIndex+1) > carouselSize-1)
            {
                setMyIndex(0)
            }
            else
            {
                setMyIndex(myIndex+1)
            }
        }
        else if (carouselDirection != null && carouselDirection == false)
        {
            if((myIndex-1) < 0)
            {
                setMyIndex(carouselSize-1)
            }
            else
            {
                setMyIndex((myIndex-1))
            }
        }
    }, [carouselDirection, rerenderCount])

    // if(myIndex == indexRef)
    // {
    //     return(
    //             <li className={"o" + myIndex + " projectSelect"} key={project.id}>
    //                         <label>{project.id}</label>
    //                         <img src={project.display ? project.display : placeHolderCardDisplay } 
    //                         onClick={carouselClickHandler}/>
    //                     </li>
    //                     )
    // }
    // else if(myIndex >= 0 && myIndex <= maxIndex)
    if(myIndex >= 0 && myIndex <= maxIndex)
    {
        return(
            <li className={"flex w-[40em] h-[10em] z-20 vcItem vcItem" + myIndex} key={project.id} onClick={carouselClickHandler}>
                <label className="absolute self-center left-[30%] pointer-event-none">
                    {project.id}
                </label>
                <img className="" src={project.display ? project.display : placeHolderCardDisplay}/>
            </li>
        )
    }
    else
    {
        return null;
    }
}

export default VCarouselItem