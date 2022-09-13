export const UpdateContactList = (newList) => {
    return {
        type: "UPDATE_CONTACT_LIST",
        payload: newList,
    };
};
export const UpdateSearch = (search) => {
    return {
        type: "UPDATE_SEARCH",
        payload: search,
    };
};
export const SetCurrentContact = (currentContact) => {
    return {
        type: 'SET_CURRENT_CONTACT',
        payload: currentContact
    }
}