import React, {Component} from "react";
import PropTypes from "prop-types";

class ContactList extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        contacts: PropTypes.array.isRequired
    }
    state = {
        query: ""
    }
    updateQuery = (value) => {
        this.setState({query: value.trim()})
    }
    clearQuery = () => this.setState({query: ""});

    render () {
        const {contacts, onDelete} = this.props;
        const {query} = this.state;
        const showingContacts = query === ""
            ? contacts
            : contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        value={this.state.query}
                        onChange={event => this.updateQuery(event.target.value)}
                    />                
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={_=> this.clearQuery()}>Show all</button>
                    </div>
                )}
               <ol className="contact-list">
                    {showingContacts.map(contact => (
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
                                onClick={_ => onDelete(contact)}
                            >Remove</button>                    
                        </li>
                    ))}
                </ol> 
            </div>
        
        )
    }
 }


export default ContactList;