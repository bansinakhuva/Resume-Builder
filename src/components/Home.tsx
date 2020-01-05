import React from 'react'
import HomeImg from '../../src/resources/images/home_bkgrnd.png'
import  { Link } from 'react-router-dom'

class Home extends React.Component {

    render() {
        return(
            <div style={{cursor:'pointer'}}>
                <Link to='/ResumeBuilder' >
                    <img src={HomeImg} alt="" />
                </Link>
            </div>
        );
    }
}
export default Home;