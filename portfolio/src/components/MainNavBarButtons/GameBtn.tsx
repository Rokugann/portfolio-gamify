import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import VerticalCarousel from "../VerticalCarousel";

let thisBtnClass = " desktopRight justify-end self-center w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer mr-[-2em] rounded-md border-hidden order-6 z-20 bg-GameBtn "

function GameBtn({state, setState, previousState}:StringBtnProp)
{
	let className = thisBtnClass
	
	switch(state)
	{
		case "MainBtn":
		className = thisBtnClass
		break;
		case "ContactBtn":
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
		className = "invisible" + thisBtnClass
		break;
		default:
		className = "invisible" + thisBtnClass
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