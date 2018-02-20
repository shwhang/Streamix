import React from 'react';
import NavBar from '../nav_bar/nav_bar';

class SessionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
    }

    this.formDetails = {
      formTitle: "",
      buttonText: "",
      pathName: "",
      linkBlurb: "",
      linkText: ""
    }

    this.updateFormDetails = this.updateFormDetails.bind(this);

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      // this.props.history.push("/");
    }

    if(this.props.formType !== nextProps.formType){

    }
  }

  updateFormDetails(){
    if (this.props.formType === "login") {
      this.formDetails = {
        formTitle: "Sign In",
        pathName: "/signup",
        linkBlurb: "New to Streamix?",
        linkText: "Sign up now."
      }
    } else {
      this.formDetails = {
        formTitle: "Sign Up",
        pathName: "/login",
        linkBlurb: "New to Streamix?",
        linkText: "Sign up now."
      }
    }
  }

  update(property){
    return e => this.setState(
      { [property]: e.target.value }
    )
  }

  handleChange(){

  }

  render(){
    this.updateFormDetails();

    return (
      <div>
        <NavBar />

        <form>
          <h3>{this.formDetails.formTitle}</h3>

          <label>Email</label>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="email-textbox"
          />

          <label>Password</label>
          <input type="text"
            value={this.state.password}
            onChange={this.update('password')}
            className="password-textbox"
          />

        <input type="submit" value={this.formDetails.formTitle}/>

        </form>
      </div>
    )
  }
}

export default SessionForm;
