import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchPost} from './../../actions';

class Header extends Component {

    render() {
        return (
        <div className="header is_stuck">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <h2 style={{marginLeft:10}}>Social Restaurant Networking</h2>
                    </Link>
                </div>

                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link nav-toggler hidden-md-up text-muted ">
                                <i className="mdi mdi-menu"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        comments: state.comments,
        search: state.search
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchPost: (query) => dispatch(searchPost(query)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

