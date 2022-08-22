import React from 'react';
import s from './ContactItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faStar} />

const ContactItem = ({ name, status, phone, email, avatar, gender, favourite, onChangeStatus, addFavourites }) => {
    const IMG_AVATAR = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`
    let styleStatus;
    switch (status) {
        case 'Work':
            styleStatus = 'lab lab-success';
            break;
        case 'Family':
            styleStatus = 'lab lab-primary';
            break;
        case 'Private':
            styleStatus = 'lab lab-danger';
            break;
        case 'Friends':
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
                <FontAwesomeIcon icon={faStar} onClick={addFavourites} className={favourite ? 'active' : ''} />
                <div>
                    <img src={IMG_AVATAR} alt="image" className="avatar" /> {name}
                </div>
                <div className={styleStatus} onClick={onChangeStatus}>{status}</div>
            </div>
            <div className="field phone">
                {phone}
            </div>
            <div className="field email">
                {email}
            </div>
        </div>
    );
}

export default ContactItem;