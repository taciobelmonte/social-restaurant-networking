import React, { Component } from 'react';

import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

import {votePost, removePost} from './../../actions'

class Post extends Component {

    vote = (event, id, option) => {
        this.props.votePost(id, option);
    };

    removePost = (event, id) => {
        this.props.removePost(id);
    };

    render() {
        const {post} = this.props;
        let datePublished = new Date(post.timestamp);

        return (
            <div className="col-lg-12 animated zoomInDown">
                <div className="card">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel">
                            <div className="card-body">
                                <div className="profiletimeline">
                                    <div className="sl-item">
                                        <div className="align-right">
                                            <Link exact="true" to={"/post/edit/" + post.id} className="btn btn-info btn-flat btn-addon btn-sm m-b-10 m-l-5">
                                                <i className="ti-settings"></i> Edit post
                                            </Link>
                                            <a onClick={(event) => this.removePost(event, post.id)}  className="btn btn-danger white btn-flat btn-sm m-b-10 m-l-5">
                                                <i className="ti-close"></i> Remove post
                                            </a>
                                        </div>
                                        <div className="sl-left">
                                            <a onClick={(event) => this.vote(event, post.id, "upVote")}>
                                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                            </a>
                                            <br />
                                            <span>{post.voteScore}</span>
                                            <br />
                                            <a onClick={(event) => this.vote(event, post.id, "downVote")}>
                                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className="sl-right">
                                            <div>
                                                <h3>
                                                    <NavLink to={"/" + post.category + "/" + post.id} id={post.id}>
                                                        {post.title}
                                                    </NavLink>
                                                    <span className="sl-date">&nbsp; Published by {post.author} in {datePublished.getDate() + "/" + (datePublished.getMonth()+1) + "/" + datePublished.getFullYear()}</span>
                                                </h3>
                                                <p>
                                                    {post.body}
                                                </p>
                                                <div className="like-comm">
                                                    Comments: {post.commentCount}
                                                </div>
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
        posts: state.posts.dados,
    }
}

function mapDispatchToProps(dispatch){
    return {
        votePost: (id, option) => dispatch(votePost(id, option)),
        removePost: (id) => dispatch(removePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);