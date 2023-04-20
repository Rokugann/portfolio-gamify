import { useState } from "react";
import Contact from "./Contact";
import MeView from "./MeView";
import VerticalCarousel from "./VerticalCarousel";
import { BtnState, SectionState } from "../modules/enums";
import { button } from "../modules/interfaces";
import MainButtonImg from "../assets/ui/MainButton.svg"
import MainButtonBcg from "../assets/ui/JdHm.gif"







// interface btnArray {
//     "" : button
// }[]

let desktopTailwindBtn = "w-2xl hover:w-4xl mx-5";
let desktopMainBtn = " MainBtn";
let desktopRightSubBtn = " desktopRightSubBtn";
let desktopLeftSubBtn = " desktopLeftSubBtn";


let baseMap: Map<string, button> = new Map();
baseMap.set('MeBtnLeft', {
    id: 'MeBtnLeft',
    className: "hidden",
    btnState: BtnState.FHIDDEN,
})
baseMap.set('ContactBtnLeft', {
    id: 'ContactBtnLeft',
    className: "hidden",
    btnState: BtnState.FHIDDEN
})
baseMap.set('FrontBtnRight', {
    id: 'FrontBtnRight',
    className: "hidden",
    btnState: BtnState.FHIDDEN
})
baseMap.set('BackBtnRight', {
    id: 'BackBtnRight',
    className: "hidden",
    btnState: BtnState.FHIDDEN
})
baseMap.set('GameBtnRight', {
    id: 'GameBtnRight',
    className: "hidden",
    btnState: BtnState.FHIDDEN
})
baseMap.set('ReturnBtn1Left', {
    id: 'ReturnBtn1Left',
    className: "hidden",
    btnState: BtnState.UNACTIVE
})
baseMap.set('ReturnBtn2Left', {
    id: 'ReturnBtn2Left',
    className: "hidden",
    btnState: BtnState.FHIDDEN
})

function MainNavBar()
{
    
    const [btnGroup, setBtnGroup] = useState<Map<string, button>>(baseMap);
    const [sectionState, setSectionState] = useState<
    SectionState>(SectionState.NOSECTION)
    const [MainBtn, setMainBtn] = useState<button>({
        id: 'MainBtn',
        className: "MainBtn",
        btnState: BtnState.UNACTIVE
    });
    const [lastSelectID, setLastSelectId] = useState<string>('')

    let BtnSelectHandler = (e: button) =>
    {
        let btnGroupCopy = btnGroup
        let newBtnGroup = new Map<string, button>();
        let targetBtn;
        switch(e.id)
        {
            case "MainBtn":
            targetBtn = MainBtn   
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                if(targetBtn)
                {
                    targetBtn.btnState = BtnState.UNACTIVE
                    setSectionState(SectionState.NOSECTION)
                    newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                        if(key.includes("Left"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopLeftSubBtn
                                }]

                            }
                            else if(key.includes("Right"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopRightSubBtn
                                }]
                            }
                            else
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: ""
                                }]
                            }
                    }))
                    break;
                }
                // btnGroupCopy.forEach(element => {
                //     element.btnState = BtnState.FHIDDEN
                //     element.className = "hidden"
                // })
                case BtnState.UNACTIVE:
                if(targetBtn)
                {
                    targetBtn.btnState = BtnState.ACTIVE
                    setLastSelectId(e.id)
                    newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                        if(key == "ReturnBtn1Left" || key == "ReturnBtn2Left")
                        {
                            return [key, {
                                ...value,
                                btnState: BtnState.FHIDDEN,
                                className: "hidden"+ desktopLeftSubBtn
                                }]
                            
                        }
                        else
                        {
                            if(key.includes("Left"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: desktopLeftSubBtn
                                }]

                            }
                            else if(key.includes("Right"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: desktopRightSubBtn
                                }]
                            }
                            else
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: ""
                                }]
                            }
                        }
                      }))
                }
                // btnGroupCopy.forEach(element => {
                //     element.btnState = BtnState.FHIDDEN
                //     element.className = ""
                // })
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setMainBtn(targetBtn);
            setBtnGroup(newBtnGroup);
            console.log("you have clicked main " + MainBtn.btnState)
            console.log(btnGroup)
            break;
            case "MeBtnLeft":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:           
                console.log("You cannot click on MeBtn when its active wtf")
                break;
                case BtnState.UNACTIVE:
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    setSectionState(SectionState.MESECTION)
                    if(key == "MeBtnLeft")
                    {
                        setLastSelectId(e.id)
                        return [key, {
                            ...value,
                            btnState: BtnState.FHIDDEN,
                            className: "hidden"+ desktopLeftSubBtn
                            }]
                    }
                    else if(key == "ContactBtnLeft")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                        return [key, value]
                    }

                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                    break;
                }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked MeBtn " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
            case "ContactBtnLeft":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                console.log("You cannot click on ContactBtn when its active wtf")           
                break;
                case BtnState.UNACTIVE:
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    setSectionState(SectionState.CONTACTSECTION)
                    if(key == "ContactBtnLeft")
                    {
                        setLastSelectId(e.id)
                        return [key, {
                            ...value,
                            btnState: BtnState.FHIDDEN,
                            className: "hidden"+ desktopLeftSubBtn
                            }]
                    }
                    else if(key == "MeBtnLeft")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                        return [key, value]
                    }
                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked MeBtn " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
            case "FrontBtnRight":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                console.log("You cannot click on FrontBtn when its active wtf")           
                break;
                case BtnState.UNACTIVE:
                setLastSelectId(e.id)
                setSectionState(SectionState.CAROUSELSECTION)
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    if(key == "ReturnBtn1Left")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                            if(key.includes("Left"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopLeftSubBtn
                                }]

                            }
                            else if(key.includes("Right"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopRightSubBtn
                                }]
                            }
                            else
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: ""
                                }]
                            }
                    }
                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked FrontBtn " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
            case "BackBtnRight":
                targetBtn = btnGroupCopy.get(e.id)
                switch(e.btnState)
                {         
                    case BtnState.ACTIVE:
                    console.log("You cannot click on BackBtn when its active wtf")           
                    break;
                    case BtnState.UNACTIVE:
                    setLastSelectId(e.id)
                    setSectionState(SectionState.CAROUSELSECTION)
                    newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                        if(key == "ReturnBtn1Left")
                        {
                            return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: desktopLeftSubBtn
                                }]
                        }
                        else
                        {
                            if(key.includes("Left"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopLeftSubBtn
                                }]

                            }
                            else if(key.includes("Right"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+ desktopRightSubBtn
                                }]
                            }
                            else
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: ""
                                }]
                            }
                        }
                    }))
                    break;
                    default:
                        console.log("button state implies you couldn't click on that button : " 
                        + e.id + " " + e.btnState)
                    break;
                }
                setBtnGroup(newBtnGroup);
                console.log("you have clicked BackBtn " + btnGroup.get(e.id)?.id)
                console.log(btnGroup)
            break;
            case "GameBtnRight":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                console.log("You cannot click on GameBtn when its active wtf")           
                break;
                case BtnState.UNACTIVE:
                setLastSelectId(e.id)
                setSectionState(SectionState.CAROUSELSECTION)
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    if(key == "ReturnBtn1Left")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                        if(key.includes("Left"))
                        {
                            return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: "hidden"+ desktopLeftSubBtn
                            }]

                        }
                        else if(key.includes("Right"))
                        {
                            return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: "hidden"+ desktopRightSubBtn
                            }]
                        }
                        else
                        {
                            return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: ""
                            }]
                        }
                    }
                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked GameBtn " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
            case "ReturnBtn1Left":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                console.log("You cannot click on ReturnBtn1Left when its active wtf")           
                break;
                case BtnState.UNACTIVE:
                setLastSelectId(e.id)
                setSectionState(SectionState.NOSECTION)
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    if(key == "ReturnBtn1Left" || key == "ReturnBtn2Left" )
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.FHIDDEN,
                            className: "hidden" + desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                        if(key.includes("Left"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+desktopLeftSubBtn
                                }]

                            }
                            else if(key.includes("Right"))
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: "hidden"+desktopRightSubBtn
                                }]
                            }
                            else
                            {
                                return [key, {
                                ...value,
                                btnState: BtnState.UNACTIVE,
                                className: ""
                                }]
                            }
                    }
                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked ReturnBtn1Left " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
            case "ReturnBtn2Left":
            targetBtn = btnGroupCopy.get(e.id)
            switch(e.btnState)
            {         
                case BtnState.ACTIVE:
                console.log("You cannot click on ReturnBtn2Left when its active wtf")           
                break;
                case BtnState.UNACTIVE:
                setLastSelectId(e.id)
                setSectionState(SectionState.CAROUSELSECTION)
                newBtnGroup = new Map<string, button>(Array.from(btnGroupCopy.entries()).map(([key, value]) => {
                    if(key == "ReturnBtn2Left")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.FHIDDEN,
                            className: "hidden"
                            }]
                    }
                    else if (key == "ReturnBtn1Left")
                    {
                        return [key, {
                            ...value,
                            btnState: BtnState.UNACTIVE,
                            className: "hidden"+desktopLeftSubBtn
                            }]
                    }
                    else
                    {
                        return [key, value]
                    }
                }))
                break;
                default:
                    console.log("button state implies you couldn't click on that button : " 
                    + e.id + " " + e.btnState)
                break;
            }
            setBtnGroup(newBtnGroup);
            console.log("you have clicked ReturnBtn2Left " + btnGroup.get(e.id)?.id)
            console.log(btnGroup)
            break;
        }
    }

    return(
        <>
            <section className="NavSection">
                <button key={MainBtn.id} type='button' id={MainBtn.id} className="MainBtn MainBtnBackground" 
                onClick={() => BtnSelectHandler(MainBtn)}><div className="MainBtnMask"></div></button>
                

                {Array.from(btnGroup.values()).map((element => (
                    <button key={element.id} type='button' id={element.id} className={element.className} 
                    onClick={() => BtnSelectHandler(element)}>{element.id}</button>
                )))}

                {(() =>  {switch(sectionState){
                    case SectionState.NOSECTION:
                        console.log(" no active section")
                        return;
                    case SectionState.MESECTION:
                        return <MeView sectionState={sectionState}/>
                    case SectionState.CONTACTSECTION:
                        return <Contact sectionState={sectionState} />
                    case SectionState.CAROUSELSECTION:
                        return <VerticalCarousel originId={lastSelectID} sectionState={sectionState}/>
                    default:
                        console.log("weird section")
                        return;
                }})()}
            </section>
        </>
    )

}

export default MainNavBar;