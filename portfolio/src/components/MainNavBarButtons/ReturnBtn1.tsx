import { StringBtnProp } from "../../modules/interfaces";

let returnBtnClass = " desktopLeft z-20 o-1 w-[200px] h-[100px] hover:w-[300px] hover:cursor-pointer transition-hoverScale ease-in-out duration-300 self-center border-hidden rounded-md "

function ReturnBtn1({state, setState, previousState}:StringBtnProp)
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
		className = returnBtnClass + "bg-FrontBtn"
		break;
		case "BackBtn":
		className = returnBtnClass + "bg-BackBtn"
		break;
		case "GameBtn":
		className = returnBtnClass + "bg-GameBtn"
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
			<button key="ReturnBtn1" type='button' id="ReturnBtn1" className={className}
                    onClick={BtnSelectHandler}>Retour</button>
	)
}

export default ReturnBtn1