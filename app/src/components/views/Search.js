import React, { Component } from 'react';
import Header from './../structural/Header';
import Sidebar from './../structural/Sidebar';
import Footer from './../structural/Footer';
import Post from './../modules/Post';
import {connect} from 'react-redux';

import {fetchPosts} from './../../actions';

class Search extends Component {

    componentDidMount(){
        this.props.fetchPosts("vote");
    }

    render() {
        const {posts, search} = this.props;
        let hasSearch = true;
        let noItems = false;

        if(search.length <=0)
            hasSearch=false;

        if(posts && posts.length === 0)
            noItems = true;

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
                                            {hasSearch &&(
                                                <div>
                                                    <br />
                                                    <h2>&nbsp;&nbsp;&nbsp;Search results:</h2>
                                                </div>
                                            )}

                                            {!hasSearch && !noItems &&(
                                                <div>
                                                    <br />
                                                    <h2>&nbsp;&nbsp;&nbsp;No results for your search! Try to add a term in order to search a post.</h2>
                                                </div>
                                            )}


                                            {search && search.map((post) => (
                                                <Post key={post.id} post={post}/>
                                            ))}
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
    return {
        posts: state.posts.dados,
        search: state.search
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: (order) => dispatch(fetchPosts(order)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
