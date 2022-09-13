import React from 'react';
import s from './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UpdateSearch } from '../../Actions/ContactListAction';
const Header = ({ UpdateSearch }) => {
    const onSortList = (value) => {
        UpdateSearch(value);
    }
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
                                <Link className="navbar-brand" to="/">Contact List</Link>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link to="/new-contact">Add new <span className="sr-only">(current)</span></Link>
                                    </li>
                                </ul>
                                <div className="navbar-form navbar-right">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            onKeyUp={(e) => onSortList(e.target.value)}
                                        />
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
const mapStateToProps = ({ ContactListReducer }) => {
    const { search } = ContactListReducer;
    return { search };
};
const mapDispatchToProps = {
    UpdateSearch
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);