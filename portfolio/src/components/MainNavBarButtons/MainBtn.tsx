import { StringBtnProp } from "../../modules/interfaces";

let mainBtnClass = "shadow-mainBtnNeonGlow rounded-full -mx-8 w-52 h-52 hover:w-60 hover:h-60 hover:transition-all ease-in-out duration-300 cursor-pointer active:w-44 active:h-44 bg-MainBtn border-8 z-[100] order-3 overflow-hidden border-"

function MainBtn({state, setState, previousState}:StringBtnProp)
{
    let className = mainBtnClass

    let BtnSelectHandler =  () => {
    	if(state != "MainBtn")
    	{
    		setState("MainBtn")
    	}
    	else
    	{
    		setState("");
    	}
    }

	switch(state)
	{
		case "MainBtn":
		className = mainBtnClass + "Idle" + " hover:border-FontColor"
		break;
		case "TechBtn":
		className = mainBtnClass + state + " hover:border-FontColor"
		break;
		case "MeBtn":
		className = mainBtnClass + state + " hover:border-FontColor"
		break;
		case "FrontBtn":
		className = mainBtnClass + state + " hover:border-FontColor"
		break;
		case "BackBtn":
		className = mainBtnClass + state + " hover:border-FontColor"
		break;
		case "GameBtn":
		className = mainBtnClass + state + " hover:border-FontColor"
		break;
		case "Project":
		className = mainBtnClass + previousState
		break;
		case "":
		className = mainBtnClass + "Idle" + " hover:border-FontColor"
		break;
		default:
		className = mainBtnClass + "Idle" + " hover:border-FontColor"
		console.log("invalid state value or unimplemented stateValue")
		break;
	}

	return(
		<button key="MainBtn" type='button' id="MainBtn" className={className} onClick={BtnSelectHandler}>
			<div className="flex w-full h-full rounded-full justify-center relative">
				<img src="public/logoSam_gradient_colorised.svg" alt="Tailwind CSS Icon" className="absolute inset-[25%]"/>
			</div>
		</button>
		)
}

export default MainBtn