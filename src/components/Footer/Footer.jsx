import './Footer.css'
import {Copyright,Twitter,Facebook,Instagram,LinkedIn} from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="copyright_contaner">
                    <Copyright />
                </div>
                <div className="socialmedia_contaner">
                    <a href="https://twitter.com" className="media_link_icon"><Twitter /></a>
                    <a href="https://web.facebook.com/" className="media_link_icon"><Facebook /></a>
                    <a href="https://www.instagram.com/" className="media_link_icon"><Instagram /></a>
                    <a href="https://linkedin.com/" className="media_link_icon"><LinkedIn /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
