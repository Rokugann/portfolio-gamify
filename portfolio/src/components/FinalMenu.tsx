import { useState } from "react"
import { FinalMenuProps } from "../modules/interfaces"

let className = " absolute z-0 h-full w-[50%] left-[70%] skew-x-veryBig bg-MainColor border-8 border-solid border-t-0 border-b-0 "

function FinalMenu({project, state, setState, previousState}:FinalMenuProps)
{
    const [isCodeView, setIsCodeView] = useState<boolean>(false)

    let bgClass = className + "border-MainBtn";

        switch(previousState)
        {
            case "FrontBtn":
            bgClass = className + "border-FrontBtn"
            break;
            case "BackBtn":
            bgClass = className + "border-BackBtn"
            break;
            case "GameBtn":
            bgClass = className + "border-GameBtn"
            break;
            default:
            bgClass = className + "border-MainBtn"
            break;
        }

    let codeViewBtnClass = isCodeView ? " order-1 h-full bg-" + previousState: " order-0 h-4/5 bg-Idle"
    let viewViewBtnClass = isCodeView ? " order-0 h-4/5 bg-Idle": " order-1 h-full bg-" + previousState
    let baseViewBtnClass = " text-black desktopLeft shadow-neonGlow hover:shadow-dualNeonGlow -mx-2 -my-2 flex-1 hover:scale-y-110 skew-x-smallReverse hover:cursor-pointer rounded-md border-hidden "
    return(
        <>  <section id="section_area" className=" flex absolute w-[70%] h-[100%] z-40 right-0">
                <div 
                id="btn_and_content_area" 
                className="relative w-[90%] h-[90%] self-center mx-auto z-40 bg-Idle text-FontColor rounded-xl p-16">
                    <div id="btnGrp" className="fixed bottom-0 -right-4 flex items-end w-[30%] h-[10%]">
                        <button id="showCode" 
                        className={baseViewBtnClass + " " + codeViewBtnClass}
                        onClick={() => setIsCodeView(true)}>Code</button>
                        <button id="showView" 
                        className={baseViewBtnClass + " " + viewViewBtnClass}
                        onClick={() => setIsCodeView(false)}>View</button>
                    </div>
                    <div id="display_area" className="overflow-y-scroll h-full w-full">
                        {isCodeView? <project.code /> : <project.view />}
                    </div>
                </div>
            </section>
            <div id="section_background" className={bgClass}></div>
        </>
    )
}

export default FinalMenu