import React, {Component} from 'react';
import { Link } from 'react-router';
import './nav.css';

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul className="navblock nav nav-pills pagenav">
                    <li className="active" key="1" ><Link activeClassName="active" to="/">Home</Link></li>
                    <li key="2"><Link activeClassName="active" to="addpet">Add Pet</Link></li>
                    <li key="3"><Link activeClassName="active" to="cart">Cart</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav