import React, { Component } from 'react'
import CategoriesList from './../categories/CategoriesList'
import {DebounceInput} from 'react-debounce-input'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {searchPost} from './../../actions';

class Sidebar extends Component {
    state = {
        query: '',
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.props.searchPost(query);
        this.props.history.push('/search')
    };

    render() {
        const {query} = this.state;

        return (
            <div className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-devider"></li>
                            <li className="nav-label">Categories</li>
                            <li>
                                <CategoriesList />
                            </li>
                        </ul>
                    </nav>
                    <br />
                    <form className="app-search">
                        <DebounceInput
                            minLength={3}
                            debounceTimeout={1000}
                            value={query}
                            className="search-control form-control"
                            placeholder="Search here..."
                            onChange={(event)=> this.updateQuery(event.target.value)} />
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        search: state.search
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchPost: (query) => dispatch(searchPost(query)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));