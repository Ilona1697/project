import React from 'react';
import s from './Sidebar.css';


const Sidebar = ({ list }) => {

    let countContacts = label => {
        let count = 0;
        console.dir(list);
        list.forEach(contact => {
            if (contact.status == label) {
                count++;
            }
        });
        return count;
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{list.length}</span></div>
                <div className="list">
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>{countContacts('Work')}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>{countContacts('Family')}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>{countContacts('Private')}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>{countContacts('Friends')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;