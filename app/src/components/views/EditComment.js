import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Header from './../structural/Header';
import Sidebar from './../structural/Sidebar';
import Footer from './../structural/Footer';
import FormComment from './../forms/FormComment';
import {connect} from 'react-redux';

class EditComment extends Component {
    render() {
        let action = this.props.match.params.action;
        let id = this.props.match.params.id;
        return (
            <Fade top>
                <div>
                    <Header />
                    <Sidebar history={this.props.history} />
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <div className="add-comment-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col-lg-12">
                                                    <div className="card card-outline-primary">
                                                        <div className="card-header" style={{border:'none',background:'#e6b800'}} >
                                                            <h4 className="capitalize m-b-0 text-white">{action} Comment</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <FormComment id={id} action={action} />
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
            </Fade>
        );
    }
}

function mapStateToProps(state){
    return {
        post: state.post
    }
}

export default connect(mapStateToProps)(EditComment);