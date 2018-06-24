import React, { Component } from 'react';
import Header from './../structural/Header';
import Sidebar from './../structural/Sidebar';
import Footer from './../structural/Footer';
import {connect} from 'react-redux';
import Post from './../modules/Post';
import Comment from './../modules/Comment';
import FormComment from './../forms/FormComment';

import {fetchPosts, fetchComments} from './../../actions';

class PostDetails extends Component {

    state = {
        commentForm:'hidden'
    };

    componentWillMount(){
        this.props.fetchPosts("vote");
        this.props.fetchComments(this.props.match.params.id);
    }

    toggleCommentForm = (event) => {
        if(this.state.commentForm === 'hidden'){
            this.setState({commentForm: 'visible'});
        }else{
            this.setState({commentForm: 'hidden'});
        }
    };

    render() {
        const {posts, comments} = this.props;
        const id = this.props.match.params.id;
        let nothing = false;
        let post;


        if(posts){
            post = posts.filter(element => element.id === id);

            if(post.length === 0)
                this.props.history.push('/not-found');
        }

        let listComments = comments.filter( (element) => element.parentId === id);

        if(listComments.length <=0)
            nothing = true;


        return (
            <div>
                <Header />
                <Sidebar history={this.props.history} />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="post-details">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            {post && post.map((post) => (
                                                <Post key={post.id} post={post}/>
                                            ))}

                                            <h2>Comments:</h2>

                                            {listComments && listComments.map((comment) => (
                                                <Comment key={comment.id} comment={comment} />
                                            ))}

                                            {nothing && (
                                                <p>There is no comments for this post.</p>
                                            )}

                                            {post && post.map((post) => (
                                                <div key={post.id}>
                                                    <a style={{border:'none',background:'#e6b800'}}  className="btn btn-primary white btn-block btn-addon m-b-10"
                                                       onClick={(event) => this.toggleCommentForm(event)}>
                                                        <i className="ti-plus"></i>Add comment
                                                    </a>
                                                </div>
                                            ))}

                                            <div className={"col-lg-12 " + this.state.commentForm}>
                                                <div className="card card-outline-primary">
                                                    <div className="card-header" style={{border:'none',background:'#e6b800'}} >
                                                        <h4 className="capitalize m-b-0 text-white">Add Comment</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <FormComment id={id} action="Add" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    if(state.posts.order === "vote"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.voteScore-a.voteScore),
            comments: state.comments
        }
    }else if(state.posts.order === "date"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.timestamp-a.timestamp),
            comments: state.comments
        }
    }else{
        return {
            posts: state.posts.dados,
            comments: state.comments
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: (order) => dispatch(fetchPosts(order)),
        fetchComments: (id) => dispatch(fetchComments(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

