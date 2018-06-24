import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCategories} from './../../actions';

class CategoriesList extends Component {

    componentDidMount(){
        this.props.fetchCategories();
    }

    render() {
        const {categories} = this.props;

        return (
        <div className="categories-list">
            <ul>
                {categories.map((cat) => (
                    <li key={cat.path} className="capitalize">
                        <NavLink activeClassName='active' to={`/${cat.path}`}>{cat.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesList));
