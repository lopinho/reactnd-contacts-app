import React, {Component} from "react";

class ContactList extends Component {
    render() {
        const {contacts} = this.props;
        return (
            <ol className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        )
    }
}

export default ContactList;