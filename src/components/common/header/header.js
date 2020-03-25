import React from 'react';
import './header.css';
import { withRouter, Link } from 'react-router-dom';

function Header(props) {
    const navBar = !props.isLoggedIn
        ? <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
             <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fas fa-align-left"></i>
                    <span></span>
                </button>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        : <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fas fa-align-left"></i>
                    <span></span>
                </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Profile</Link>
                        </li> <li className="nav-item">
                            <div className="nav-link" onClick={() => { localStorage.clear(); props.history.push('/login') }}>Logout</div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    return (
        <>
            {navBar}
        </>
    )
}

export default withRouter(Header);  