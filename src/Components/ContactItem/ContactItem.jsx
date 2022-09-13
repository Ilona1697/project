import React from 'react';
import s from './ContactItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UpdateContactList, SetCurrentContact } from '../../Actions/ContactListAction';
const ContactItem = ({
    id,
    name,
    status,
    phone,
    email,
    avatar,
    gender,
    favourite,
    UpdateContactList,
    SetCurrentContact,
    UpdateCounter,
    List,
    Counter
}) => {
    const IMG_AVATAR = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

    const onFavourite = (id) => {
        const index = List.findIndex(i => i.id === id);
        const tmpList = List.slice();
        tmpList[index].favourite = !tmpList[index].favourite;
        UpdateContactList(tmpList);
    }
    const onEdit = (id) => {
        const index = List.findIndex(i => i.id === id);
        const tmpList = List.slice();
        SetCurrentContact(tmpList[index]);
    }
    const onStatus = (id) => {
        const index = List.findIndex(i => i.id === id);
        let tmpList = List.slice();
        switch (tmpList[index].status) {
            case "friends":
                tmpList[index].status = 'work';
                break;
            case "work":
                tmpList[index].status = 'family';
                break;
            case "family":
                tmpList[index].status = 'private';
                break;
            case "private":
                tmpList[index].status = 'friends';
                break;
            default:
                break;
        }
        UpdateContactList(tmpList);
    };
    const onDelete = (id) => {
        const index = List.findIndex(i => i.id === id);
        const tmpList = List.slice();
        tmpList.splice(tmpList[index], 1);
        UpdateContactList(tmpList);
    }
    let styleStatus = "lab lab-warning";
    switch (status) {
        case 'work':
            styleStatus = 'lab lab-success';
            break;
        case 'family':
            styleStatus = 'lab lab-primary';
            break;
        case 'private':
            styleStatus = 'lab lab-danger';
            break;
        case 'friends':
            styleStatus = 'lab lab-warning';
            break;
        default:
            break;
    }
    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <FontAwesomeIcon icon={faStar} onClick={() => onFavourite(id)} className={favourite ? 'active' : ''} />
                <div>
                    <img src={IMG_AVATAR} alt="image" className="avatar" /> {name}
                </div>
                <div className={styleStatus} onClick={() => onStatus(id)}>{status}</div>
            </div>
            <div className="field phone">
                {phone}
            </div>
            <div className="field email">
                {email}

            </div>
            <div className="field delete-btn">
                <FontAwesomeIcon icon={faTrash} className="deleteBtn" onClick={() => onDelete(id)} />
                <Link to="/edit-contact"><FontAwesomeIcon icon={faPenSquare} className="editBtn" onClick={() => onEdit(id)} /></Link>
            </div>
        </div>
    );
}
const mapStateToProps = ({ ContactListReducer }) => {
    const { List } = ContactListReducer;
    return { List };
};
const mapDispatchToProps = {
    UpdateContactList,
    SetCurrentContact
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);