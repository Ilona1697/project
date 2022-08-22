import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import uuid

import { v4 as uuidv4 } from 'uuid';

// Import components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends React.Component {
  state = {
    ContactListArr: [
      {
        id: uuidv4(),
        name: 'Alexander Verdnam',
        status: 'Friends',
        phone: '+1-800-600-9898',
        email: 'alexander@gmail.com',
        gender: 'men',
        favourite: false,
        avatar: '1'
      },
      {
        id: uuidv4(),
        name: 'Gerard Butler',
        status: 'Work',
        phone: '+1-800-600-9898',
        email: 'gerard@gmail.com',
        gender: 'women',
        favourite: false,
        avatar: '1'
      }
    ]
  };

  onChangeStatus = (id) => {
    const index = this.state.ContactListArr.findIndex(i => i.id === id);
    let tmpListArr = this.state.ContactListArr.slice();
    switch (tmpListArr[index].status) {
      case "Friends":
        tmpListArr[index].status = 'Work';
        break;
      case "Work":
        tmpListArr[index].status = 'Family';
        break;
      case "Family":
        tmpListArr[index].status = 'Private';
        break;
      case "Private":
        tmpListArr[index].status = 'Friends';
        break;
      default:
        break;
    }
    this.setState({
      ContactListArr: tmpListArr,
    });
  };
  addFavourites = (id) => {
    const index = this.state.ContactListArr.findIndex(i => i.id === id);
    const tmpListArr = this.state.ContactListArr.slice();
    tmpListArr[index].favourite = !tmpListArr[index].favourite;
    this.setState({
      ContactListArr: tmpListArr,
    });
  }
  render() {
    const { ContactListArr } = this.state;
    return (
      <>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <Header />
            <Sidebar list={ContactListArr} />
            <ContactList list={ContactListArr} onChangeStatus={this.onChangeStatus} addFavourites={this.addFavourites} />
          </div>
        </div>
      </>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

