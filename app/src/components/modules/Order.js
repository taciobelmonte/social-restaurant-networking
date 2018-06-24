import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './../../actions';

class Order extends Component {

    changeOrder = (order) =>{
        this.props.fetchPosts(order);
    };

    render() {

        return (
            <div className="col-lg-2">
                <div className="dropdown">
                    <br />
                    <br />
                    <label>Order Posts By:</label>
                    <select defaultValue="vote" className="form-control" onLoad={(event) => this.changeOrder(event.target.value)} onChange={(event) => this.changeOrder(event.target.value)}>
                        <option value="vote">Vote score</option>
                        <option value="date">Date</option>
                    </select>
                    <br />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    if(state.posts.order === "vote"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.voteScore-a.voteScore)
        }
    }else if(state.posts.order === "date"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.timestamp-a.timestamp)
        }
    }else{
        return {
            posts: []
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: (order) => dispatch(fetchPosts(order)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
