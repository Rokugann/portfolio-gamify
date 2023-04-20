import { useEffect, useState } from "react"
import { StringBtnProp } from "../modules/interfaces"

let strokeColor = "#FAE100"
let backgroundColor = "#2F2B2C"
function CarouselFrame({state, setState}:StringBtnProp)
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
            <svg className="CarouselFrame" width="630" height="832" viewBox="0 0 630 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bd_217_451)">
                <path d="M613 429V-5H138L7 411L138 838H613L613 429Z" fill={strokeColor}/>
                </g>
                <g filter="url(#filter1_bd_217_451)">
                <path d="M629 434V0H154L23 416L154 843H629V434Z" fill={backgroundColor}/>
                </g>
                <defs>
                <filter id="filter0_bd_217_451" x="0" y="-12" width="620" height="857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_217_451"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend mode="normal" in2="effect1_backgroundBlur_217_451" result="effect2_dropShadow_217_451"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_217_451" result="shape"/>
                </filter>
                <filter id="filter1_bd_217_451" x="16" y="-7" width="620" height="857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_217_451"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend mode="normal" in2="effect1_backgroundBlur_217_451" result="effect2_dropShadow_217_451"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_217_451" result="shape"/>
                </filter>
                </defs>
            </svg>
        )
}

export default CarouselFrame
