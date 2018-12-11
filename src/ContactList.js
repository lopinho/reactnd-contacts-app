import React, {Component} from "react";
import PropTypes from "prop-types";

const contactList = (props) => {
    return (
        <ol className="contact-list">
            {props.contacts.map(contact => (
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
                    <button
                     className="contact-remove"
                     onClick={_ => props.onDelete(contact)}
                     >Remove</button>                    
                </li>
            ))}
        </ol>
    )
 }

 contactList.propTypes = {
     onDelete: PropTypes.func.isRequired,
     contacts: PropTypes.array.isRequired
 }


export default contactList;