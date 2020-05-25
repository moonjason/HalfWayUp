import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import { withFirebase } from '../Firebase/';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({
        email: '',
        password: '',
        password2: ''
    })

    const onChange = (e) => 
        setSignUpInfo({  
            ...signUpInfo, 
            [e.target.name] : e.target.value
        })

    const onSubmit = (e) => {
        e.preventDefault();

    }

    const validBtn = {
        "backgroundColor": "#FC4A1A",
        "border": "1px solid #FC4A1A"
    }
    const invalidBtn = {
        "backgroundColor" : "gray",
        "border": "1px solid gray"
    }

    const { email, password, password2 } = signUpInfo;

    const isInvalid =
        password !== password2 ||
        password === '' ||
        email === '';

    const btnColor = isInvalid ? invalidBtn : validBtn;
    return (
            <div>
                <div className="app-logo">
                    <h1>HalfwayUp</h1>
                </div>
                <div className="signup-container">
                    <Row noGutters={true}>
                        <Col md={4} className="d-md-block d-sm-none"></Col>
                        <Col className="center-column" md={4}>
                            <div className="signup-box">
                                <div className="signup-form">
                                    <h1 className="signup-title">Sign Up</h1>
                                    <form className="signup-form-inner">
                                        <p className="signup-email">Email:</p>
                                        <input type="email"name="email" onChange={e => onChange(e)} placeholder="john@example.com"/>
                                        <p className="signup-pass1">Create a password:</p>
                                        <input type="password" name="password" onChange={e => onChange(e)} placeholder="Password"/>
                                        <p className="signup-pass2">Confirm password:</p>
                                        <input type="password" name="password2" onChange={e => onChange(e)} placeholder="Confirm Password"/>
                                        <div className="signup-btns-container">
                                            <button className="signup-back"><Link to="/login" style={{"text-decoration": "none", "color": "whitesmoke"}}>Back</Link></button>
                                            <button className="signup-submit"style={btnColor} disabled={isInvalid} onSubmit={e => onSubmit(e)} type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-md-block d-sm-none"></Col>
                    </Row>
                </div>
            </div>
    );
}

export default withFirebase(SignUp);