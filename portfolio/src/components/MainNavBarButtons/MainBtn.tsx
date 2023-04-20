import { StringBtnProp } from "../../modules/interfaces";

let mainBtnClass = " rounded-full mx-[-5em] w-[20em] h-[20em] hover:scale-110 active:scale-90 transition transform ease-in-out duration-300 cursor-pointer active:scale-80 bg-OctogoneFrame bg-no-repeat bg-contain bg-clip-content bg-center border-hidden p-0 z-[100] order-3"

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

	return(
			// <button key="MainBtn" type='button' id="MainBtn" className="MainBtn MainBtnBackground" 
	        //         onClick={BtnSelectHandler}><div className="MainBtnMask"></div></button>
	<button key="MainBtn" type='button' id="MainBtn" className={className} 
                onClick={BtnSelectHandler}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
	  <defs>
	    <mask id="MASK" maskUnits="userSpaceOnUse"
	              maskContentUnits="userSpaceOnUse">
	      <image 
	        xlinkHref="../../../public/Frame22.svg"
	        height="100%"
	        width="100%"/>
	    </mask>      
	  </defs>
	  <g mask="url(#MASK)">
	    <image x="0" y="0%" className="space" href="../../../public/catfile.webp" 
	        height="98%" width="98%"/>
	  </g>
	</svg>
	</button>
		)
}

export default MainBtn