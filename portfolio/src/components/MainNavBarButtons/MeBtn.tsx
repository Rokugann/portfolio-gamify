import { StringBtnProp } from "../../modules/interfaces";
import MeView from "../MeView";

let meBtnClass = " desktopLeft z-20 order-0 w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer self-center bg-MeBtn border-hidden rounded-md "

function MeBtn({state, setState, previousState}:StringBtnProp)
{
	let className = meBtnClass

	switch(state)
	{
		case "MainBtn":
		className = meBtnClass
		break;
		case "ContactBtn":
		className = "invisible" + meBtnClass
		break;
		case "Mebtn":
		className = "invisible" + meBtnClass
		break;
		case "FrontBtn":
		className = "hidden" + meBtnClass
		break;
		case "BackBtn":
		className = "hidden" + meBtnClass
		break;
		case "GameBtn":
		className = "hidden" + meBtnClass
		break;
		case "Project":
		className = "hidden" + meBtnClass
		break;
		case "":
		className = "invisible" + meBtnClass
		break;
		default:
		className = "invisible" + meBtnClass
		console.log("invalid state value or unimplemented stateValue")
		break;
	}

    let BtnSelectHandler =  () => {
        setState("MeBtn");
    }

	if(state != "MeBtn")
	{
		return(<button key="MeBtn" type='button' id="MeBtn" className={className}
                onClick={BtnSelectHandler}>Moi</button>)
	}
	else
	{
		return(<MeView  state={state} setState={setState} previousState={previousState}/>)
	}
}

export default MeBtn