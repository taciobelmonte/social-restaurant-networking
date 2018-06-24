import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Api from './../../utils/Api';

import { addComment, editComment, fetchComments } from '../../actions';

class FormComment extends Component {

    state = {
        parentId: '',
        id: '',
        author: '',
        body: '',
        isNotValid: false,
        success: false
    };

    componentDidMount(){
        this.props.fetchComments(this.props.id);

        //If edition page, get comment and populate infos in the form
        if(this.props.action === 'edit'){
            Api.getComment(this.props.id)
                .then(res =>  this.setState({
                    id:res.id,
                    parentId: res.parentId,
                    author: res.author,
                    body: res.body,
                    isNotValid: false,
                    success: false
                }));
        }
    }

    changeInput = (event, name) => {
        if(name === 'author')
            this.setState({author: event.target.value});

        if(name === 'body')
            this.setState({body: event.target.value});
    };

    submitForm = (event, parentId) => {
        const {id, author, body} = this.state;
        const {action} = this.props;

        if(author && body){

            if(action === 'edit'){
                this.props.editComment(id, author, body);
                alert("Comment edited with success!");

            }else{
                const comment = {
                    id: (parentId + '_' + Math.random().toString(15).substring(2, 15) + Math.random().toString(15).substring(2, 10)),
                    parentId:parentId,
                    timestamp : Date.now(),
                    body,
                    author
                };

                this.props.addComment(comment);

                alert("Comment added with success!");

                this.setState({
                    parentId: '',
                    author: '',
                    body: '',
                    isNotValid: false,
                    success: true
                });
            }
        }else{
            this.setState({isNotValid:true, success: false})
        }
    };

    render() {
        const {author, body} = this.state;
        const {id} = this.props;
        let errorAuthor, errorMessage;

        if(this.state.isNotValid === true){

            if(!author)
                errorAuthor = 'error';

            if(!body)
                errorMessage = 'error';
        }
        return (
            <div className="card-body">
                <form>
                    <div className="form-body">
                        <div className="row p-t-20">
                            <div className="col-md-12">
                                <div className="form-group has-danger">
                                    <label className="control-label">Author</label>
                                    <input type="text"
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
                        </div>
                    </div>
                    <div className="form-actions">
                        <input type="button" className="btn btn-success" onClick={(event) => this.submitForm(event, id)} value="Send"/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        categories: state.categories,
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        fetchComments: (id) => dispatch(fetchComments(id)),
        editComment: (id, author, body) => dispatch(editComment(id, author, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComment);