import { StringBtnProp } from "../../modules/interfaces";
import VerticalCarousel from "../VerticalCarousel";

let thisBtnClass = " shadow-neonGlow desktopRight justify-end self-center w-48 h-24 hover:w-64 hover:cursor-pointer transition-hoverScale ease-in-out duration-300  mr-[-2em] rounded-md border-hidden order-4 z-30 bg-Idle hover:bg-BackBtn "

function BackBtn({state, setState, previousState}:StringBtnProp)
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
		case "BackBtn":
		className = "hidden" + thisBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + thisBtnClass
		break;
		case "GameBtn":
		className = "hidden" + thisBtnClass
		break;
		case "Project":
		className = "hidden " + thisBtnClass
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
        setState("BackBtn");
    }

	if(state != "BackBtn")
	{
		return(<button key="BackBtn" type='button' id="BackBtn" className={className}
                onClick={BtnSelectHandler}>Backend</button>)
	}
	else
	{
		return null
	}
}

export default BackBtn