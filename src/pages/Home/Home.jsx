import Contacts from '../../components/Contacts/Contacts';
import Slideshow from '../../components/Slideshow/Slideshow';
import Elements from '../../components/Elements/Elements';
import Searchbar from '../../components/Searchbar/Searchbar';
import './Home.css';
import 'animate.css';

export default function home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <div className="left_side">
                <Searchbar />
                <Elements />
                <Contacts />
            </div>
            <div className="right_side">
                <Slideshow />
            </div>
            
        </div>
    )
}
