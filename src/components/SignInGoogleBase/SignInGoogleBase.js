import React, {Component} from 'react';

import { withFirebase } from '../Firebase';


class SignInGoogleBase extends Component {
    state = {  error : null };

    onSubmit = event => {
          this.props.firebase.doSignInWithGoogle()
          .then(socialAuthUser => {
            this.setState({ error: null });
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
    };
    render() {
        const { error } = this.state;
        
        return (
            <form onSubmit={this.onSubmit}>
            <button type="submit">Sign In with Google</button>
        
            {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(SignInGoogleBase);