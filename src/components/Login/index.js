import React from 'react';

import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div className="login">
            <div className="app-logo">
                <h1>HalfwayUp</h1>
            </div>
            <Row noGutters={true}>
                <Col md={4} className="d-md-block d-sm-none"></Col>
                <Col md={4} className="center-column">
                    <div className="signup-box">
                        <div className="signup-form">
                            <h1 className="signup-title">Login</h1>
                            <form className="signup-form-inner">
                                <p className="signup-email">Email:</p>
                                <input type="email" placeholder="john@example.com"/>
                                <p className="signup-pass1">Password:</p>
                                <input type="password" placeholder="Password"/>
                                {/* <SignInGoogle /> */}
                                <div className="signup-btns-container">
                                    <button className="signup-back"><Link to="/" style={{"text-decoration": "none", "color": "whitesmoke"}}>Back</Link></button>
                                    <button className="signup-submit" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="d-md-block d-sm-none"></Col>
            </Row>
        </div>
    )
}

export default Login;