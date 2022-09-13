import React from 'react';
import s from './ContactList.css';

//Import components
import ContactItem from '../ContactItem/ContactItem';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';

const ContactList = ({ List, search }) => {

    let filteredList;

    if (search) {
        const sortedList = List.filter((elem) => {
            let value = search.trim();
            let newReg = new RegExp(`^${value}`, "i");
            if (newReg.test(elem.name)) {
                return elem;
            }
            return;
        });
        filteredList = sortedList.slice();
    } else {
        filteredList = List.slice();
    }


    let listItem = filteredList.map(contact => {
        return (
            <ContactItem
                {...contact}
                key={contact.id}
            />
        );
    });

    return (
        <div div className="container bootstrap snippets bootdeys bootdey" >
            <div className="row decor-default">
                <Sidebar />
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
                            {listItem}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = ({ ContactListReducer }) => {
    const { List, search } = ContactListReducer;
    return { List, search };
};

export default connect(mapStateToProps)(ContactList);