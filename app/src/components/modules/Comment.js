import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

import {voteComment, removeComment} from './../../actions'

class Comment extends Component {

    vote = (event, id, option) => {
        this.props.voteComment(id, option);
    };

    removeComment = (event, id) => {
        this.props.removeComment(id);
    };

    render() {
        const {comment} = this.props;
        let datePublished = new Date(comment.timestamp);

        return (
            <div className="col-lg-12" id={comment.id}>
                <div className="card">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel">
                            <div className="card-body">
                                <div className="profiletimeline">
                                    <div className="sl-item">
                                        <div className="align-right">
                                            <Link exact="true" to={"/comment/edit/" + comment.id} className="btn btn-info btn-flat white btn-addon btn-sm m-b-10 m-l-5">
                                                <i className="ti-settings"></i> Edit Comment
                                            </Link>
                                            <a onClick={(event) => this.removeComment(event, comment.id)}  className="btn white btn-danger btn-flat btn-sm m-b-10 m-l-5">
                                                <i className="ti-close"></i> Remove Comment
                                            </a>
                                        </div>
                                        <div className="sl-left">
                                            <a onClick={(event) => this.vote(event, comment.id, "upVote")}>
                                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                            </a>
                                            <br />
                                            <span>{comment.voteScore}</span>
                                            <br />
                                            <a onClick={(event) => this.vote(event, comment.id, "downVote")}>
                                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className="sl-right">
                                            <div>
                                                <h3>
                                                    <NavLink to={"/post-detail/" + comment.id} id={comment.id}>
                                                        {comment.title}
                                                    </NavLink>
                                                    <span className="sl-date">Published by {comment.author} in {datePublished.getDate() + "/" + (datePublished.getMonth()+1) + "/" + datePublished.getFullYear()}</span>
                                                </h3>
                                                <p>
                                                    {comment.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return {
        voteComment: (id, option) => dispatch(voteComment(id, option)),
        removeComment: (id) => dispatch(removeComment(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);