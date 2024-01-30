import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";

let TechBtnClass = " z-30 order-1 max-xl:w-[80%] max-xl:h-16 xl:w-48 xl:h-24 hover:w-64 xl:-ml-2 hover:cursor-pointer transition-hoverScale ease-in-out duration-300  self-center bg-Idle hover:bg-TechBtn border-hidden rounded-md "

function TechBtn({state, setState, previousState, isDesktop}:StringBtnProp)
{
	let className = TechBtnClass

	if(state == "MainBtn")
	{
		className = TechBtnClass
	}
	else
	{
		className = "hidden" + TechBtnClass
	}

	switch(state)
	{
		case "MainBtn":
		className = TechBtnClass
		break;
		case "TechBtn":
		className = "hidden" + TechBtnClass
		break;
		case "MeBtn":
		className = "hidden" + TechBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + TechBtnClass
		break;
		case "BackBtn":
		className = "hidden" + TechBtnClass
		break;
		case "GameBtn":
		className = "hidden" + TechBtnClass
		break;
		case "Project":
		className = "hidden" + TechBtnClass
		break;
		case "":
		className = "hidden" + TechBtnClass
		break;
		default:
		className = "hidden" + TechBtnClass
		console.log("invalid state value or unimplemented stateValue")
		break;

	}

    let BtnSelectHandler =  () => {
        setState("TechBtn");
    }

	return(<button key="TechBtn" type='button' id="TechBtn" className={className}
            onClick={BtnSelectHandler}>Mes Techs</button>)
}

export default TechBtn