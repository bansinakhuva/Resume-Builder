import * as React from 'react';
import { Component } from 'react';
import HeadingLogo from '../resources/images/plain-Backgrounds.jpg'
class Header extends Component {
    render() { 
        return (  
            <img src={HeadingLogo} alt="Heading" height="90px" width="100%"/>
        );
    }
}
 
export default Header;