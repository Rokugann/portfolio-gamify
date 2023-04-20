import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import VerticalCarousel from "../VerticalCarousel";

let thisBtnClass = " desktopRight justify-end self-center w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer mr-[-2em] rounded-md border-hidden order-3 z-40 bg-FrontBtn "

function FrontBtn({state, setState, previousState}:StringBtnProp)
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
        setState("FrontBtn");
    }

	if(state != "FrontBtn" && previousState != "FrontBtn")
	{
		return(<button key="FrontBtn" type='button' id="FrontBtn" className={className}
                onClick={BtnSelectHandler}>Frontend</button>)
	}
	else
	{
		return  null;
	}
}

export default FrontBtn