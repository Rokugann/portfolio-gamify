import { useEffect } from "react";
import { StringBtnProp } from "../../modules/interfaces";
import MainBtn from "./MainBtn";

let returnBtnClass = " desktopLeft  z-20 o-1 w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer self-center border-hidden rounded-md "

function ReturnBtn2({state, setState, previousState}:StringBtnProp)
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
		case "ContactBtn":
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