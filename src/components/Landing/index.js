import React from 'react';

import {Link} from 'react-router-dom';


const Landing = () => {
    return (
        <div className="landingpage">
            <h1>HalfwayUp</h1>
            <Link to="/login">Get Started</Link>            
        </div>
    )
}

export default Landing;