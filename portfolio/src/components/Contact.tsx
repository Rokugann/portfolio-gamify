import gallery from "../assets/images/imgRegistry"
import { StringBtnProp } from "../modules/interfaces"

function Contact({state, setState}:StringBtnProp)
{
    return(
        <>
        <section className="leftSideView ContactBtn">
            <div className="leftSideViewContent">
                <h1>Contactez moi</h1>
                <h2>06 40 23 92 05</h2>
                <h2>samuel.perier.uter@gmail.com</h2>
                <span className="ContactViewRow">
                    <p>Mon github</p>
                    <a href="https://github.com/Rokugann"><img className="icon" src={gallery.githubImg} alt="Github Icon"/></a>
                    <img className="qrCode" src={gallery.githubQRCode} alt="QR code github"/>
                </span>
                <span className="ContactViewRow">
                    <p>Mon github</p>
                    <a href="https://www.linkedin.com/in/codingsamsam/"><img className="icon" src={gallery.linkedinImg} alt="Linkedin Icon"/></a>
                    <img className="qrCode" src={gallery.linkedinQRCode} alt="QR code Linkedin"/>
                </span>
            </div>
            <div className="absolute z-0 h-full w-full -skew-x-veryBig bg-MainColor border-8 border-solid border-t-0 border-b-0 bg-ContactBtn"></div>
        </section>
        </>
    )
}

export default Contact