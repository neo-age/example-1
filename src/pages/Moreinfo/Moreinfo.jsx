import './Moreinfo.css'
import salahLogo from '../Moreinfo/zdlogo-white.svg';
import element_img_1 from '../Moreinfo/example_parts/Group 2.png';
import element_img_2 from '../Moreinfo/example_parts/Group 37.png';
import element_img_3 from '../Moreinfo/example_parts/Group 24.png';
import element_img_4 from '../Moreinfo/example_parts/Group 39.png';
import element_img_5 from '../Moreinfo/example_parts/Group 28.png';
import element_img_6 from '../Moreinfo/example_parts/Group 25.png';
import element_img_7 from '../Moreinfo/example_parts/Group 40.png';

import 'animate.css';

function Moreinfo() {
    return (
        <div className='moreinfo animate__animated animate__fadeIn'>
            <div className="moreinfo_wrapper">
                <div className="moreinfo_leftside">
                    <div className="moreinfo_leftside_content">
                        <img src={salahLogo} alt="" className="moreinfo_leftside_img" />
                        <div className='projectinfohp'>
                        <h5>Introdaction</h5>
                        <p className="moreinfo_leftside_paragraph">hi! there, all the button will get you to this page, to go back to the home page click the home link in the navigation bar or by clicking the projects logo.</p>
                            <h5>More Info about the project</h5>
                        <p className="moreinfo_leftside_paragraph">For this project, I used the react.js framework, and the main trio, Hypertext mark-up language for the structure of the page, Cascading style sheet for positioning the sections with flexbox and javascript to handle all the required functions in order for react to work smoothly, along with functions to handle events such as the slideshow you can see on the home page, the elements section and the device detection</p>

                        </div>
                    </div>
                </div>
                <div className="moreinfo_rightside">
                    <ul className="moreinfo_rightside_ul">
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                                <img src={element_img_1} alt="" className="moreinfo_ul_img" />
                            </div>
                            <div className="rightside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">the elements section, was built with javascript to interrupt the mouse scroll so the custom function does everything when someone scrolls.</p>
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                                <p className="moreinfo_leftside_li_paragraph">the contact section, is a set of information about a certain user, only after starting development that i realized the lack of communication ways like e.g message and facetime</p>
                            </div>
                            <div className="rightside_ul_li">
                                <img src={element_img_2} alt="" className="moreinfo_ul_img" />
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                                <img src={element_img_3} alt="" className="moreinfo_ul_img" />
                            </div>
                            <div className="rightside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">slideshow section, was one of the hardest parts, it took me a week and a half with not a single package or extension in it, everything was self coded</p>
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">the social media section is not something special, most of the positioning was done by flex box</p>
                            </div>
                            <div className="rightside_ul_li">
                            <img src={element_img_4} alt="" className="moreinfo_ul_img" />
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                            <img src={element_img_5} alt="" className="moreinfo_ul_img" />
                            </div>
                            <div className="rightside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">the navigation bar is the same as the social media, the positioning was done with the help of the flex box with the exemption of the use of unordered list and list items for the links</p>
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">the search bar is not anything special, just a form element specifically input</p>
                            </div>
                            <div className="rightside_ul_li">
                            <img src={element_img_6} alt="" className="moreinfo_ul_img" />
                            </div>
                        </li>
                        <li className="moreinfo_rightside_ul_li">
                            <div className="leftside_ul_li">
                            <img src={element_img_7} alt="" className="moreinfo_ul_img" />
                            </div>
                            <div className="rightside_ul_li">
                            <p className="moreinfo_leftside_li_paragraph">the copyright/privacy policy section is the same as the search bar, but with an icon instead of the input</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Moreinfo
