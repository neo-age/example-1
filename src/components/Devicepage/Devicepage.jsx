import './Devicepage.css'
import salahLogo from '../Devicepage/zdlogo-black.svg';

function Devicepage() {
    return (
        <div className='devicepage'>
            <div className="devicepage_wrapper">
                <img src={salahLogo} alt="" className="page_logo" />
                <p className="page_paragraph">i'm afraid this project only works on desktop/computers for the time being, i appreciate you taking the time to come by, you can go back to the portfolio with the button in the bottom.</p>
                <button className="page_button"><a href="https://www.salaheddinesabir.com/">Home</a></button>
            </div>            
        </div>
    )
}

export default Devicepage
