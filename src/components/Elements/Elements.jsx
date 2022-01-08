import './Elements.css'
import { VscBook } from "react-icons/vsc";
import { FaRunning } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { MdGroups,MdConnectWithoutContact } from "react-icons/md";

const Elements = () => {
    
    const scroll_derection = (event)=>{
        var element_scroll = document.querySelector(".elements_wrapper");
        var scrolls = 10;
        if (event.nativeEvent.wheelDelta > 0) {
            //console.log('scroll up');
            element_scroll.scrollLeft -= scrolls
            //console.log(element_scroll.scrollLeft);
        } else {
            //console.log('scroll down');
            element_scroll.scrollLeft += scrolls
            //console.log(element_scroll.scrollLeft);
        }
        }
    return (
        <div className="elements">
            <div className="elements_wrapper" onWheel={(event) => scroll_derection(event)}>
                <ul className="elements_container">
                    <li className="element">
                        <VscBook className='element_icon'/>
                        <span className='element_header'>Read</span>
                    </li>
                    <li className="element">
                        <FaRunning className='element_icon'/>
                        <span className='element_header'>Delivery</span>
                    </li>
                    <li className="element">
                        <IoRocketSharp className='element_icon'/>
                        <span className='element_header'>launch</span>
                    </li>
                    <li className="element">
                        <MdGroups className='element_icon'/>
                        <span className='element_header'>team</span>
                    </li>
                    <li className="element">
                        <MdConnectWithoutContact className='element_icon'/>
                        <span className='element_header'>connect</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Elements;
