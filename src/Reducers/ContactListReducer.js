
// Import uuid

import { v4 as uuidv4 } from 'uuid';

const initialState = {
    List: [
        {
            id: uuidv4(),
            name: 'Alexander Verdnam',
            status: 'friends',
            phone: '+1-800-600-9898',
            email: 'alexander@gmail.com',
            gender: 'men',
            favourite: false,
            avatar: '1'
        },
        {
            id: uuidv4(),
            name: 'Gerard Butler',
            status: 'work',
            phone: '+1-800-600-9898',
            email: 'gerard@gmail.com',
            gender: 'women',
            favourite: false,
            avatar: '1'
        }
    ],
    currentContact: null,
    search: null
};


const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CONTACT_LIST':
            return {
                ...state,
                List: action.payload,
            }
        case 'SET_CURRENT_CONTACT':
            return {
                ...state,
                currentContact: action.payload
            }
        case 'UPDATE_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
};

export default ContactListReducer;