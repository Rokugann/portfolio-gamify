import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import VerticalCarousel from "../VerticalCarousel";

let thisBtnClass = " justify-end self-center max-xl:w-[80%] max-xl:h-16 xl:w-48 xl:h-24 hover:w-64 hover:cursor-pointer transition-hoverScale ease-in-out duration-300 xl:mr-[-2em] rounded-md border-hidden order-6 z-20 bg-Idle hover:bg-GameBtn "

function GameBtn({state, setState, previousState, isDesktop}:StringBtnProp)
{
	let className = thisBtnClass
	
	switch(state)
	{
		case "MainBtn":
		className = thisBtnClass
		break;
		case "TechBtn":
		className = "hidden" + thisBtnClass
		break;
		case "MeBtn":
		className = "hidden" + thisBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + thisBtnClass
		break;
		case "BackBtn":
		className = "hidden" + thisBtnClass
		break;
		case "GameBtn":
		className = "hidden" + thisBtnClass
		break;
		case "Project":
		className = "hidden" + thisBtnClass
		break;
		case "":
		className = "hidden" + thisBtnClass
		break;
		default:
		className = "hidden" + thisBtnClass
		console.log("invalid state value or unimplemented stateValue")
		break;
	}

    let BtnSelectHandler =  () => {
        setState("GameBtn");
    }

	if(state != "GameBtn")
	{
		return(<button key="GameBtn" type='button' id="GameBtn" className={className}
                onClick={BtnSelectHandler}>Jeux</button>)
	}
	else
	{
		return null
	}
}

export default GameBtn