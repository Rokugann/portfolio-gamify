import { useState } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import Contact from "../Contact";

let contactBtnClass = " desktopLeft z-30 order-1 w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer self-center bg-ContactBtn border-hidden rounded-md "

function ContactBtn({state, setState, previousState, setPreviousState}:StringBtnProp)
{
	let className = contactBtnClass

	if(state == "MainBtn")
	{
		className = contactBtnClass
	}
	else
	{
		className = "hidden" + contactBtnClass
	}

	switch(state)
	{
		case "MainBtn":
		className = contactBtnClass
		break;
		case "ContactBtn":
		className = "invisible" + contactBtnClass
		break;
		case "MeBtn":
		className = "invisible" + contactBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + contactBtnClass
		break;
		case "BackBtn":
		className = "hidden" + contactBtnClass
		break;
		case "GameBtn":
		className = "hidden" + contactBtnClass
		break;
		case "Project":
		className = "hidden" + contactBtnClass
		break;
		case "":
		className = "invisible" + contactBtnClass
		break;
		default:
		className = "invisible" + contactBtnClass
		console.log("invalid state value or unimplemented stateValue")
		break;

	}

    let BtnSelectHandler =  () => {
        setState("ContactBtn");
    }

	if(state != "ContactBtn")
	{
		return(<button key="ContactBtn" type='button' id="ContactBtn" className={className}
                onClick={BtnSelectHandler}>Contactez moi</button>)
	}
	else
	{
		return(<Contact  state={state} setState={setState} previousState={previousState} setPreviousState={setPreviousState}/>)
	}
}

export default ContactBtn