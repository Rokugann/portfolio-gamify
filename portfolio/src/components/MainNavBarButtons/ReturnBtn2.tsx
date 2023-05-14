import { useEffect } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import MainBtn from "./MainBtn";

let returnBtnClass = " z-20 o-1 max-xl:w-[80%] max-xl:h-16 xl:w-48 xl:h-24 hover:cursor-pointer transition-hoverScale ease-in-out duration-300 self-center border-hidden rounded-md "

function ReturnBtn2({state, setState, previousState, isDesktop}:StringBtnProp)
{
	let className = returnBtnClass
	if(state == "MainBtn")
	{
		className = returnBtnClass
	}
	else
	{
		className = "hidden" + returnBtnClass
	}

	switch(state)
	{
		case "MainBtn":
		className = "hidden" + returnBtnClass
		break;
		case "TechBtn":
		className = "hidden" + returnBtnClass
		break;
		case "MeBtn":
		className = "hidden" + returnBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + returnBtnClass
		break;
		case "BackBtn":
		className = "hidden" + returnBtnClass
		break;
		case "GameBtn":
		className = "hidden" + returnBtnClass
		break;
		case "Project":
		className = returnBtnClass + "bg-" + previousState
		break;
		case "":
		className = "hidden" + returnBtnClass
		break;
		default:
		className = "hidden" + returnBtnClass
		break;
	}

	

    let BtnSelectHandler =  () => {
        setState(previousState);
    }

	return(
			<button key="ReturnBtn2" type='button' id="ReturnBtn2" className={className}
                    onClick={BtnSelectHandler}>Retour</button>
	)
}

export default ReturnBtn2