import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
     }


  }
  render() { 

    let fbContent;
    if (this.state.isLoggedIn) {

    } else {
      fbContent = ( <FacebookLogin
        appId="422613248526719"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />);
    }

    return (
      <div>
        <h2>Ups and down</h2>
      </div>
      );
  }
}
 
export default Facebook;