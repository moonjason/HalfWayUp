import React, {Component} from 'react';

import { withFirebase } from '../Firebase';



class SignInGoogleBase extends Component {
    state = { 
       error : null,
       src:"/images/btn_google.png" 
    };

    onSubmit = event => {
          this.props.firebase.doSignInWithGoogle()
          .then(socialAuthUser => {
            this.setState({ error: null });
            this.props.history.push('/dashboard');
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
    };

    onMouseOver = () => {
      this.setState({src: '/images/btn_google_hover.png'})
    }
    onMouseOut = () => {
      this.setState({src: '/images/btn_google.png'})
    }

    render() {
        const { error } = this.state;
        
        return (
            <form className="google-signin" onSubmit={this.onSubmit}>
              <button type="submit"><img className="google-img" src={this.state.src} onMouseOver={() => this.onMouseOver()} onMouseOut={() => this.onMouseOut()}></img></button>
          
              {error && <p className="google-error">{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(SignInGoogleBase);