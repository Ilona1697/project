
// Import Navigate for redirect
import { Navigate } from "react-router-dom";

import React, { useState } from "react";
import "./EditContact.css";

//import redux
import { connect } from 'react-redux';
import { UpdateContactList } from '../../Actions/ContactListAction';

const EditContact = ({ List, currentContact, UpdateContactList }) => {
    const [isRedirect, setRedirect] = useState(false);

    const [name, setName] = useState(currentContact.name);
    const [status, setStatus] = useState(currentContact.status);
    const [email, setEmail] = useState(currentContact.email);
    const [phone, setPhone] = useState(currentContact.phone);
    const [avatar, setAvatar] = useState(currentContact.avatar);
    const [gender, setGender] = useState(currentContact.gender);
    const [favourite, setFavourite] = useState(currentContact.favourite);

    const onSaveContact = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;
        const avatar = e.target[3].value;
        const gender = e.target[4].value;
        const status = e.target[5].value;
        const favourite = e.target[6].value == 'false' ? false : true;

        const UpdatedContact = {
            id: currentContact.id,
            name,
            phone,
            email,
            avatar,
            gender,
            status,
            favourite,
        };

        const index = List.findIndex(i => i.id === UpdatedContact.id);
        const tmpList = List.slice();
        tmpList.splice(index, 1, UpdatedContact);
        UpdateContactList(tmpList);
        setRedirect(true);
    };
    return (
        <>
            {isRedirect ? (
                <Navigate to="/" />
            ) : (
                <div
                    id="loginModal"
                    className="modal show"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="text-center">Edit contact</h1>
                            </div>
                            <div className="modal-body">
                                <form
                                    onSubmit={onSaveContact}
                                    className="form col-md-12 center-block"
                                >
                                    <div className="form-group">
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            className="form-control input-lg"
                                            placeholder="Name"
                                            defaultValue={name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            className="form-control input-lg"
                                            placeholder="Phone"
                                            defaultValue={phone}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            className="form-control input-lg"
                                            placeholder="Email"
                                            defaultValue={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            required
                                            name="avatar"
                                            type="number"
                                            min={0}
                                            max={99}
                                            className="form-control input-lg"
                                            placeholder="Avatar"
                                            defaultValue={avatar}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            required
                                            className="form-select form-control"
                                            aria-label="Default select example"
                                            defaultValue={gender}
                                        >
                                            <option >Choose gender</option>
                                            <option value="men">Men</option>
                                            <option value="women">Women</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            required
                                            className="form-select form-control"
                                            aria-label="Default select example"
                                            defaultValue={status}
                                        >
                                            <option >Choose status</option>
                                            <option value="work">Work</option>
                                            <option value="family">Family</option>
                                            <option value="private">Private</option>
                                            <option value="friends">Friends</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            required
                                            className="form-select form-control"
                                            aria-label="Default select example"
                                            defaultValue={favourite}
                                        >
                                            <option >Favorite</option>
                                            <option value="true" >Yes</option>
                                            <option value="false" >No</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-warning btn-lg btn-block">
                                            edit
                                        </button>

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

};
const mapStateToProps = ({ ContactListReducer }) => {
    const { List, currentContact } = ContactListReducer;
    return { List, currentContact };
};
const mapDispatchToProps = {
    UpdateContactList
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);