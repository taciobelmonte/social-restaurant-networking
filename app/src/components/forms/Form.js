import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import { editPost, fetchPosts, addPost} from '../../actions';
import * as Api from './../../utils/Api';

class FormEdit extends Component {

    state = {
        title: '',
        author: '',
        body: '',
        category:'',
        isNotValid: false,
        success: false
    };

    componentDidMount(){
        //Retrieve all posts from store
        this.props.fetchPosts();

        //Perform getPost if edition page
        if(this.props.action === 'edit'){
            Api.getPost(this.props.id)
                .then(res => this.setState({
                    id: res.id,
                    title: res.title,
                    author: res.author,
                    body: res.body,
                    category:res.category,
                }));
        }
    }

    //Function to updates state when changing input content
    changeInput = (event, name) => {
        if(name === 'title')
            this.setState({title: event.target.value});

        if(name === 'author')
            this.setState({author: event.target.value});

        if(name === 'body')
            this.setState({body: event.target.value});

        if(name === 'category')
            this.setState({category: event.target.value});
    };

    //Function to handle form submission
    submitForm = () => {
        const {title, author, body, category} = this.state;
        const {action} = this.props;

        if(title && author && body && category){
            if(action === 'edit'){
                this.props.editPost(this.state.id, title, category, author, body);

                alert("Post edited with success!");
                this.props.event.push('/');

            }else{

                this.props.addPost(
                    {
                        id: title.toLowerCase().split(' ').join('_'),
                        timestamp : Date.now(),
                        title,
                        category,
                        author,
                        body
                    });

                this.setState({
                    title: '',
                    author: '',
                    body: '',
                    category: '',
                    isNotValid: false,
                    success: true
                });

                alert("Post added with success!");
                this.props.event.push('/');
            }
        }else{
            this.setState({isNotValid:true, success: false})
        }
    };

    render() {
        const {categories} = this.props;
        const {title, author, body, category} = this.state;
        let errorTitle, errorAuthor, errorMessage, errorCategory;

        if(this.state.isNotValid === true){
            if(!title)
                errorTitle = 'error';

            if(!author)
                errorAuthor = 'error';

            if(!body)
                errorMessage = 'error';

            if(!category)
                errorCategory = 'error';
        }

        return (
            <Fade top>
                <div>
                    <form>
                        <div className="form-body">
                            <div className="row p-t-20">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="control-label">Title</label>
                                        <input type="text"
                                               id="title"
                                               value={this.state.title}
                                               onChange={(event) => this.changeInput(event, 'title')}
                                               name="title"
                                               className={errorTitle + " input-rounded form-control"}
                                               placeholder="Insert a name"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group has-danger">
                                        <label className="control-label">Author</label>
                                        <input
                                            type="text"
                                            id="author"
                                            value={this.state.author}
                                            onChange={(event) => this.changeInput(event, 'author')}
                                            name="author"
                                            className={errorAuthor + " input-rounded form-control form-control-danger"}
                                            placeholder="Insert an Author"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group has-danger">
                                        <label className="control-label">Message</label>
                                        <textarea id="body"
                                                  name="body"
                                                  value={this.state.body}
                                                  onChange={(event) => this.changeInput(event, 'body')}
                                                  className={errorMessage + " input-rounded form-control"}
                                                  placeholder="Insert a content"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group has-danger">
                                        <label className="control-label">Category</label>
                                        <select className={errorCategory + " form-control" }
                                                value={this.state.category}
                                                onChange={(event) => this.changeInput(event, 'category')}>
                                            <option value="none">Select a category</option>
                                            {categories && categories.map((cat) => (
                                                <option name="category"
                                                        key={cat.path}
                                                        value={cat.name}
                                                        className="capitalize">{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-actions">
                            <input type="button" className="btn btn-success" onClick={this.submitForm} value="Send"/>
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

function mapStateToProps(state){
    if(state.posts.order === "vote"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.voteScore-a.voteScore),
            categories: state.categories
        }
    }else if(state.posts.order === "date"){
        return {
            posts: state.posts.dados.sort( (a,b) => b.timestamp-a.timestamp),
            categories: state.categories
        }
    }else{
        return {
            posts: state.posts.dados,
            categories: state.categories
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        addPost: (newPost) => dispatch(addPost(newPost)),
        editPost: (id, title, category, author, body) => dispatch(editPost(id, title, category, author, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
