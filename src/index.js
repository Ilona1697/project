import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import react-router-dom

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import redux
import { Provider } from 'react-redux/es/exports';


// import store

import store from './store';
// Import components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';
import NewContact from './Components/NewContact/NewContact';
import NotFound from './Components/NotFound/NotFound';
import EditContact from './Components/EditContact/EditContact';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/edit-contact" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >
);



