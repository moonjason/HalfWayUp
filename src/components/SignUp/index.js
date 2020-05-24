import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUp = () => {
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
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-md-block d-sm-none"></Col>
                    </Row>
                </div>
            </div>
    );
}

export default SignUp;