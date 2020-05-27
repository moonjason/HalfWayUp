import React, { useState } from 'react';

import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { withFirebase } from '../Firebase/';
import SignInGoogleBase from '../SignInGoogleBase/SignInGoogleBase';


const Login = ( { firebase, history } ) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null);

    const onChange = (e) => 
        setLoginInfo({  
            ...loginInfo, 
            [e.target.type] : e.target.value
        })

    const onSubmit = e => {
        firebase.doSignInwithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then(socialAuthUser => {
            setLoginInfo({email: '', password: ''});
            history.push('/dashboard');
          })
          .catch(error => {
            setError({ error });
          });
        e.preventDefault();
    }

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
                            <form className="signup-form-inner" onSubmit={e => onSubmit(e)}>
                                <p className="signup-email">Email:</p>
                                <input onChange={e => onChange(e)}type="email" placeholder="john@example.com"/>
                                <p className="signup-pass1">Password:</p>
                                <input onChange={e => onChange(e)} type="password" placeholder="Password"/>
                                <SignInGoogleBase />
                                {error && <p className="google-error">{error.message}</p>}
                                <div className="signup-btns-container">
                                    <button className="signup-back"><Link to="/signup" style={{"text-decoration": "none", "color": "whitesmoke"}}>Sign Up</Link></button>
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

export default withFirebase(Login);