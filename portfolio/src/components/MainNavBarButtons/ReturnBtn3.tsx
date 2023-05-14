import { useEffect } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import MainBtn from "./MainBtn";

let returnBtnClass = " z-20 order-4 skew-x-smallReverse max-xl:w-56 max-xl:h-16 xl:w-48 xl:h-24 max-xl:absolute max-xl:-bottom-2 max-xl:-left-6 hover:cursor-pointer transition-hoverScale ease-in-out duration-300 self-center border-hidden rounded-md "

function ReturnBtn3({state, setState, previousState, isDesktop}:StringBtnProp)
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
		className = returnBtnClass + "bg-TechBtn"
		break;
		case "MeBtn":
		className = returnBtnClass + "bg-MeBtn"
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
		className = "hidden" + returnBtnClass
		break;
		case "":
		className = "hidden" + returnBtnClass
		break;
		default:
		className = "hidden" + returnBtnClass
		console.log("invalid state value or unimplemented stateValue")
		break;
	}
	

    let BtnSelectHandler =  () => {
        setState("MainBtn");
    }

	return(
			<button key="ReturnBtn3" type='button' id="ReturnBtn3" className={className}
                    onClick={BtnSelectHandler}>Retour</button>
	)
}

export default ReturnBtn3