import { useEffect, useState } from "react";
import MainBtn from "./MainNavBarButtons/MainBtn";
import TechBtn from "./MainNavBarButtons/TechBtn";
import MeBtn from "./MainNavBarButtons/MeBtn";
import BackBtn from "./MainNavBarButtons/BackBtn";
import FrontBtn from "./MainNavBarButtons/FrontBtn";
import GameBtn from "./MainNavBarButtons/GameBtn";
import ReturnBtn1 from "./MainNavBarButtons/ReturnBtn1";
import ReturnBtn2 from "./MainNavBarButtons/ReturnBtn2";
import { MainNavBarProp } from "../modules/interfaces";
import ReturnBtn3 from "./MainNavBarButtons/ReturnBtn3";






let NavSectionDesktopSpanClass = "flex relative w-[100%] "
let NavSectionMobileSpanClass = ""
let NavSectionDesktopClass = "flex relative self-center w-full justify-center text-MainColor"
let NavSectionMobileClass = 'flex flex-col absolute self-center w-full h-full justify-center bg-blue-600 text-MainColor gap-6'

function MainNavBarV2({state, setState, previousState, isDesktop}:MainNavBarProp)
{


    let spanClass = NavSectionDesktopSpanClass
    let sectionClass = NavSectionDesktopClass

    switch(state)
    {
        case "MainBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-center"
        break;
        case "TechBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-end pr-12"
        break;
        case "MeBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-end pr-12"
        break;
        case "FrontBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-start pl-[5em]"
        break;
        case "BackBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-start pl-[5em]"
        break;
        case "GameBtn":
            spanClass = NavSectionDesktopSpanClass + "justify-start pl-[5em]"
        break;
        case "Project":
            spanClass = NavSectionDesktopSpanClass + "justify-start pl-[3em]"
        break;
        case "":
            spanClass = NavSectionDesktopSpanClass + "justify-center"
        break;
        default:
            spanClass = NavSectionDesktopSpanClass + "justify-center"
            console.log("invalid state value or unimplemented stateValue")
        break;
    }

    if(state != "" && !isDesktop)
    {
        sectionClass = NavSectionMobileClass
        spanClass = NavSectionMobileClass
    }

    return(
        <>
            <section id="Main MainNavBar" className={sectionClass}>
                <span className={spanClass}>
                    <MeBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <TechBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <MainBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <BackBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <FrontBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <GameBtn state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <ReturnBtn1 state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <ReturnBtn2 state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                    <ReturnBtn3 state={state} setState={setState} previousState={previousState} isDesktop={isDesktop}/>
                </span>
            </section>
        </>
    )

}

export default MainNavBarV2;