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

  responseFacebook = response => {
     this.setState({
       isLoggedIn = true,
       userID: response.userID,
       name: response.name,
       email: response.email,
       picture: response.picture.data.url
    
     })
  }

  componentClicked = () => console.log('clicked');

  render() { 

    let fbContent;
    if (this.state.isLoggedIn) {
         fbContent = null;
    } else {
      fbContent = ( <FacebookLogin
        appId="422613248526719"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />);
    }

    return (
      <div>
        <h2>Ups and down</h2>
         {fbContent}
      </div>
      );
  }
}
 
export default Facebook;