import './Searchbar.css'
import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
    return (
        <div className='searchbar'>
            <div className="searchbar_wrapper">
                <input type="text" className="search_input" placeholder='Search...'/>
                <FiSearch className='search_icon'/>
            </div>
        </div>
    );
}

export default Searchbar;
