import React, {Component} from "react";

class ContactList extends Component {
    render() {
        const {contacts} = this.props;
        return (
            <ol className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove">Remove</button>
                        
                    </li>
                ))}
            </ol>
        )
    }
}

export default ContactList;