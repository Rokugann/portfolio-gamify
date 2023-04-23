import { StringBtnProp } from "../../modules/interfaces";

// let mainBtnClass = " rounded-full mx-[-5em] w-[20em] h-[20em] hover:scale-110 active:scale-90 transition transform ease-in-out duration-300 cursor-pointer active:scale-80 bg-no-repeat bg-contain bg-clip-content bg-center border-hidden p-0 z-[100] order-3"
let mainBtnClass = "shadow-mainBtn rounded-full -mx-8 w-52 h-52 hover:w-60 hover:h-60 transition-all ease-in-out duration-300 cursor-pointer active:w-44 active:h-44 bg-MainBtn border-8 z-[100] order-3 overflow-hidden border-"

function MainBtn({state, setState, previousState}:StringBtnProp)
{
    let className = mainBtnClass
	// if(state == "MainBtn")
	// {
	// 	className = "MainBtn MainBtnBackground"
	// }
	// else
	// {
	// 	className = "hidden desktopLeftBtn"
	// }


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
		className = mainBtnClass + "Idle"
		break;
		case "TechBtn":
		className = mainBtnClass + state
		break;
		case "MeBtn":
		className = mainBtnClass + state
		break;
		case "FrontBtn":
		className = mainBtnClass + state
		break;
		case "BackBtn":
		className = mainBtnClass + state
		break;
		case "GameBtn":
		className = mainBtnClass + state
		break;
		case "Project":
		className = mainBtnClass + previousState
		break;
		case "":
		className = mainBtnClass + "CenterBand"
		break;
		default:
		className = mainBtnClass + "Idle"
		console.log("invalid state value or unimplemented stateValue")
		break;
	}

	return(
			// <button key="MainBtn" type='button' id="MainBtn" className="MainBtn MainBtnBackground" 
	        //         onClick={BtnSelectHandler}><div className="MainBtnMask"></div></button>
		<button key="MainBtn" type='button' id="MainBtn" className={className} onClick={BtnSelectHandler}>
			<div className="w-full h-full rounded-full "></div>
		</button>
		)
}

export default MainBtn