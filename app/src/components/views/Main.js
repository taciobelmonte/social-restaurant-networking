import React, { Component } from 'react';
import Footer from './../structural/Footer';
import Header from './../structural/Header';
import Sidebar from './../structural/Sidebar';
import Post from './../modules/Post';
import Order from './../modules/Order';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import {fetchPosts} from './../../actions';

class Main extends Component {

    componentWillMount(){
        this.props.fetchPosts("vote");
    }

    render() {
        const {posts} = this.props;
        let nothing = false;

        // if(posts.length <=0)
        //   nothing = true;

        return (
            <Fade>
                <div>
                    <Header/>
                    <Sidebar history={this.props.history}  />
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="row">

                                <Order />

                                <br />
                                <br />

                                <div className="col-lg-12">
                                    <Link exact="true" to="post/add/" className="btn btn-primary btn-info btn-block btn-addon m-b-10">
                                        <i className="ti-plus"></i>Add post
                                    </Link>
                                </div>

                                {posts && posts.map((post) => (
                                    <Post key={post.id} post={post}/>
                                ))}

                                {nothing && (
                                    <div className="col-lg-12">
                                        <br />
                                        <p>No posts! </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fade>
        );
    }
}

function mapStateToProps(state){
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
            posts: state.posts.dados
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: (order) => dispatch(fetchPosts(order)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);