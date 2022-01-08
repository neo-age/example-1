import './Contacts.css'
import { Chat, Phone } from '@material-ui/icons';

export default function Contacts() {
    return (
        <div className="contact">
            <div className="conatact_wrapper">
                <h2 className="contact_header">Contacts</h2>
                <div className="contacts_container">
                    <div className="contact_info">
                        <div className="contact_img_status">
                            <img src="https://images.unsplash.com/photo-1638861269151-b38eac100885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80" alt="" className="contact_img" />
                            <div className="contact_status unactive"></div>
                        </div>
                        <h3 className="contact_title">Amanda Ella</h3>
                        <div className="contact_call_talk">
                            <Chat className="contact_talk" />
                            <Phone className="contact_call" />
                        </div>
                    </div>
                    <div className="contact_info">
                        <div className="contact_img_status">
                            <img src="https://images.unsplash.com/photo-1638984498411-345388047a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="contact_img" />
                            <div className="contact_status active"></div>
                        </div>
                        <h3 className="contact_title">Liam Ella</h3>
                        <div className="contact_call_talk">
                            <Chat className="contact_talk" />
                            <Phone className="contact_call" />
                        </div>
                    </div>
                    <div className="contact_info">
                        <div className="contact_img_status">
                            <img src="https://images.unsplash.com/photo-1638963436960-6de003ff7339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="contact_img" />
                            <div className="contact_status active"></div>
                        </div>
                        <h3 className="contact_title">William Baum</h3>
                        <div className="contact_call_talk">
                            <Chat className="contact_talk" />
                            <Phone className="contact_call" />
                        </div>
                    </div>
                    <div className="contact_info">
                        <div className="contact_img_status">
                            <img src="https://images.unsplash.com/photo-1611996878175-297ea49725da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="contact_img" />
                            <div className="contact_status unactive"></div>
                        </div>
                        <h3 className="contact_title">Lucas Bismarck</h3>
                        <div className="contact_call_talk">
                            <Chat className="contact_talk" />
                            <Phone className="contact_call" />
                        </div>
                    </div>
                    <div className="contact_info">
                        <div className="contact_img_status">
                            <img src="https://images.unsplash.com/photo-1620053508057-67807dd6b250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="contact_img" />
                            <div className="contact_status  active"></div>
                        </div>
                        <h3 className="contact_title">Noah Von</h3>
                        <div className="contact_call_talk">
                            <Chat className="contact_talk" />
                            <Phone className="contact_call" />
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
