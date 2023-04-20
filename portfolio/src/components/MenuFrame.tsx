import { useEffect, useState } from "react"
import { StringBtnProp } from "../modules/interfaces"

let strokeColor = "#FAE100"
let backgroundColor = "#2F2B2C"

function MenuFrame({state, setState, previousState}:StringBtnProp)
{
    const [strokeColor, setStrokeColor] = useState<string>("#FAE100")
    const [backgroundColor, setBackgroundColor] = useState<string>("#2F2B2C")

    useEffect(() => {
        switch(state)
        {
            case "FrontBtn":
            setStrokeColor("#ED3354")
            break;
            case "BackBtn":
            setStrokeColor("#FAE100")
            break;
            case "GameBtn":
            setStrokeColor("#6AF000")
            break;
            default:
            break;
        }
    },[state])

    
    return(
        <svg className="FinalMenu Frame" width="936" height="832" viewBox="0 0 936 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_84_1937)">
                <path d="M116 -24H1021V881H116L6 420L116 -24Z" fill={strokeColor}/>
            </g>
            <g filter="url(#filter1_d_84_1937)">
                <path d="M172.015 -154H1217V896H172.015L45 361.138L172.015 -154Z" fill={backgroundColor}/>
            </g>
            <defs>
                <filter id="filter0_d_84_1937" x="0" y="-30" width="1027" height="917" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_1937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_1937" result="shape"/>
                </filter>
                <filter id="filter1_d_84_1937" x="39" y="-160" width="1184" height="1062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_1937"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_1937" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default MenuFrame
