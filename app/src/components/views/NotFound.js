import React, { Component } from 'react';
import Header from './../structural/Header';
import Sidebar from './../structural/Sidebar';
import Footer from './../structural/Footer';

class NotFound extends Component {
    render() {
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
                                            <h1>Not Found!</h1>
                                            <p>Try other page...</p>
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

export default NotFound;
