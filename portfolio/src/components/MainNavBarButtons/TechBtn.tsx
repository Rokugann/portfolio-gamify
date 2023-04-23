import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import Contact from "../Contact";

let TechBtnClass = " desktopLeft z-30 order-1 w-48 h-24 hover:w-64 -ml-2 hover:cursor-pointer transition-hoverScale ease-in-out duration-300  self-center bg-Idle hover:bg-TechBtn border-hidden rounded-md "

function TechBtn({state, setState, previousState}:StringBtnProp)
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
		className = "invisible" + TechBtnClass
		break;
		case "MeBtn":
		className = "invisible" + TechBtnClass
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
		className = "invisible" + TechBtnClass
		break;
		default:
		className = "invisible" + TechBtnClass
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