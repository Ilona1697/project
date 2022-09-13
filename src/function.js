//  Import uuid

// import { v4 as uuidv4 } from 'uuid';

// state = {
//     ContactListArr: [
//         {
//             id: uuidv4(),
//             name: 'Alexander Verdnam',
//             status: 'friends',
//             phone: '+1-800-600-9898',
//             email: 'alexander@gmail.com',
//             gender: 'men',
//             favourite: false,
//             avatar: '1'
//         },
//         {
//             id: uuidv4(),
//             name: 'Gerard Butler',
//             status: 'work',
//             phone: '+1-800-600-9898',
//             email: 'gerard@gmail.com',
//             gender: 'women',
//             favourite: false,
//             avatar: '1'
//         }
//     ],
//     Counter: [
//         { totalCount: 0 },
//         { workCount: 0 },
//         { familyCount: 0 },
//         { privateCount: 0 },
//         { friendsCount: 0 },
//     ],
//     editContact: null,
//     search: null,
// };

// onChangeStatus = (id) => {
//     const index = this.state.ContactListArr.findIndex(i => i.id === id);
//     let tmpListArr = this.state.ContactListArr.slice();
//     switch (tmpListArr[index].status) {
//         case "friends":
//             tmpListArr[index].status = 'work';
//             break;
//         case "work":
//             tmpListArr[index].status = 'family';
//             break;
//         case "family":
//             tmpListArr[index].status = 'private';
//             break;
//         case "private":
//             tmpListArr[index].status = 'friends';
//             break;
//         default:
//             break;
//     }
//     this.setState({
//         ContactListArr: tmpListArr,
//     });
//     this.UpdateCounter();
// };
// onFavourite = (id) => {
//     const index = this.state.ContactListArr.findIndex(i => i.id === id);
//     const tmpListArr = this.state.ContactListArr.slice();
//     tmpListArr[index].favourite = !tmpListArr[index].favourite;
//     this.setState({
//         ContactListArr: tmpListArr,
//     });
// }
// onCreate = (NewContact) => {
//     const tmpListArr = this.state.ContactListArr.slice();
//     tmpListArr.push(NewContact);
//     this.setState({
//         ContactListArr: tmpListArr,
//     });
//     this.UpdateCounter();
// }
// onUpdate = (NewContact) => {
//     const index = this.state.ContactListArr.findIndex(i => i.id === NewContact.id);
//     const tmpListArr = this.state.ContactListArr.slice();
//     tmpListArr.splice(index, 1, NewContact);
//     this.setState({
//         ContactListArr: tmpListArr
//     });
//     this.UpdateCounter();
// }
// onDelete = (id) => {
//     const index = this.state.ContactListArr.findIndex(i => i.id === id);
//     const tmpListArr = this.state.ContactListArr.slice();
//     tmpListArr.splice(tmpListArr[index], 1);
//     this.setState({
//         ContactListArr: tmpListArr,
//     });

//     this.UpdateCounter();
// }
// onSortList = (value) => {
//     this.setState({
//         search: value,
//     });
// }
// onEdit = (id) => {
//     const index = this.state.ContactListArr.findIndex(i => i.id === id);
//     const tmpListArr = this.state.ContactListArr.slice();
//     this.setState({
//         editContact: tmpListArr[index],
//     });
// }
// UpdateCounter = () => {
//     let totalCount = this.state.ContactListArr.length;
//     let tmpCounter = this.state.Counter.slice();

//     let familyCount = this.state.ContactListArr.reduce((accum, element) => {
//         if (element.status === "family") return ++accum;
//         else return accum;
//     }, 0);

//     let workCount = this.state.ContactListArr.reduce((accum, element) => {
//         if (element.status === "work") return ++accum;
//         else return accum;
//     }, 0);

//     let privateCount = this.state.ContactListArr.reduce((accum, element) => {
//         if (element.status === "private") return ++accum;
//         else return accum;
//     }, 0);

//     let friendsCount = this.state.ContactListArr.reduce((accum, element) => {
//         if (element.status === "friends") return ++accum;
//         else return accum;
//     }, 0);

//     tmpCounter[0].totalCount = totalCount;
//     tmpCounter[1].workCount = workCount;
//     tmpCounter[2].familyCount = familyCount;
//     tmpCounter[3].privateCount = privateCount;
//     tmpCounter[4].friendsCount = friendsCount;

//     this.setState({
//         Counter: tmpCounter,
//     });
// }
componentDidMount = () => {
    this.UpdateCounter();
};



// const { ContactListArr, Counter, editContact, search } = this.state;

// let filteredList;

// if (search) {
//     const sortedList = ContactListArr.filter((elem) => {
//         let value = search.trim();
//         let newReg = new RegExp(`^${value}`, "i");
//         if (newReg.test(elem.name)) {
//             return elem;
//         }
//         return;
//     });
//     filteredList = sortedList.slice();
// } else {
//     filteredList = ContactListArr.slice();
// }