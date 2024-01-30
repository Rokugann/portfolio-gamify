import gallery from "../assets/images/imgRegistry"
import { StringBtnProp } from "../modules/interfaces"
import MeView from "./MeView";
import TechView from "./TechView";

let LeftSectionFrameClass = "h-full w-[65%] -left-[20%] absolute -skew-x-veryBig bg-MainColor border-8 border-solid border-t-0 border-b-0 "
let LeftSectionClass = "flex h-full w-full xl:w-[70%] xl:left-0 z-20 xl:-mr-96 ";

function LeftSection({state, setState, previousState}:StringBtnProp)
{

    let frameClass = LeftSectionFrameClass + "border-MainColor";
    let sectionClass = LeftSectionClass

    switch(state)
    {
        case "TechBtn":
        frameClass = LeftSectionFrameClass + "border-TechBtn"
        sectionClass = LeftSectionClass
        break;
        case "MeBtn":
        frameClass = LeftSectionFrameClass + "border-MeBtn"
        sectionClass = LeftSectionClass
        break;
        default:
        frameClass = LeftSectionFrameClass + "border-MainColor"
        sectionClass = LeftSectionClass + "hidden"
        break;
    }

    if(state == "TechBtn")
    {
        return(
            <>
            <section className={sectionClass}>
                <TechView/>
                <div className={frameClass}></div>
            </section>
            </>
        )
    }
    else if(state == "MeBtn")
    {
        return(
            <>
            <section className={sectionClass}>
                <MeView/>
                <div className={frameClass}></div>
            </section>
            </>
        )
    }
    else
        return null
}

export default LeftSection