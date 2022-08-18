import React from 'react';
import s from './ContactList.css';

//Import components
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
                <div className="ac-custom ac-checkbox ac-checkmark">
                    <div className="unit head">
                        <div className="field name">
                            <div className="check">
                                <input id="cb1" name="cb1" type="checkbox" />
                                <label htmlFor="cb1"></label>
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                            Name
                        </div>
                        <div className="field phone">
                            Phone
                        </div>
                        <div className="field email icons">
                            Email

                        </div>
                    </div>
                    <ContactItem />
                </div>
            </div>
        </div>
    );
}

export default ContactList;