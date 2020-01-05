import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() { 
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <Link className="whiteText" to="/Home">
                    <span className="navbar-brand">Home</span>
                </Link>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav mr-auto">
                        <Link className="whiteText" to="/ResumeBuilder">
                        <li className="nav-item nav-link">
                            Resume Builder
                        </li>
                        </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navigation;