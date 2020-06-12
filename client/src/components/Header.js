import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li className="nav-item"><a href="/auth/google" className="nav-link" >Login with Google</a></li>
            default:
                return <li className="nav-item"><a href="/api/logout" className="nav-link" >Logout</a></li>
        }
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">OrganiseMe</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return { auth }
};

export default connect(mapStateToProps)(Header);