import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer"> © {(new Date()).getFullYear()} All rights reserved. Tácio Belmonte</footer>
        );
    }
}

export default Footer;