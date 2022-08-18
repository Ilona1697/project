import React from 'react';
import s from './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Contact List</a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Add new <span className="sr-only">(current)</span></a></li>
                                </ul>
                                <div className="navbar-form navbar-right">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Header;