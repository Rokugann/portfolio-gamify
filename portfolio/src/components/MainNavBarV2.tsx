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






let NavSectionClass = "flex relative w-[100%] "

function MainNavBarV2({state, setState, previousState}:MainNavBarProp)
{


    let className = NavSectionClass

    switch(state)
    {
        case "MainBtn":
            className = NavSectionClass + "justify-center"
        break;
        case "TechBtn":
            className = NavSectionClass + "justify-center"
        break;
        case "MeBtn":
            className = NavSectionClass + "justify-center"
        break;
        case "FrontBtn":
            className = NavSectionClass + "justify-start pl-[5em]"
        break;
        case "BackBtn":
            className = NavSectionClass + "justify-start pl-[5em]"
        break;
        case "GameBtn":
            className = NavSectionClass + "justify-start pl-[5em]"
        break;
        case "Project":
            className = NavSectionClass + "justify-start pl-[3em]"
        break;
        case "":
            className = NavSectionClass + "justify-center"
        break;
        default:
            className = NavSectionClass + "justify-center"
            console.log("invalid state value or unimplemented stateValue")
        break;
    }

    return(
        <>
            <section className="flex flex-grow relative my-auto left-0 right-0 justify-center text-MainColor">
                <div className="absolute z-0 w-[120%] h-24 bg-CenterBand overflow-x-hidden self-center drop-shadow-[4px_0_4px_rgba(0,0,0,1)]"></div>
                <span className={className}>
                    <MeBtn state={state} setState={setState} previousState={previousState}/>
                    <TechBtn state={state} setState={setState} previousState={previousState}/>
                    <MainBtn state={state} setState={setState} previousState={previousState}/>
                    <BackBtn state={state} setState={setState} previousState={previousState}/>
                    <FrontBtn state={state} setState={setState} previousState={previousState}/>
                    <GameBtn state={state} setState={setState} previousState={previousState}/>
                    <ReturnBtn1 state={state} setState={setState} previousState={previousState}/>
                    <ReturnBtn2 state={state} setState={setState} previousState={previousState}/>
                    <ReturnBtn3 state={state} setState={setState} previousState={previousState}/>
                </span>
            </section>
        </>
    )

}

export default MainNavBarV2;