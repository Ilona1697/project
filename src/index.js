import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Import components
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <Header />
          <Sidebar />
          <ContactList />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

