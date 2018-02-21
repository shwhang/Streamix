import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import { Link, withRouter } from 'react-router-dom';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  updateFormDetails(){
    if (this.props.formType === "login") {
      this.formDetails = {
        formTitle: "Sign In",
        pathName: "/signup",
        linkBlurb: "New to Streamix? ",
        linkText: "Sign up now."
      }
    } else {
      this.formDetails = {
        formTitle: "Sign Up",
        pathName: "/login",
        linkBlurb: "Have an Account? ",
        linkText: "Sign in now."
      }
    }
  }

  update(property){
    return e => this.setState(
      { [property]: e.target.value }
    )
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  // TODO: Render Errors for wrong credentials

  render(){
    this.updateFormDetails();

    return (
      <div className="session-form-container">
        <NavBarContainer path={this.props.processForm}/>

        <form onSubmit={this.handleSubmit} className="session-form">
          <h3 className="session-form-title">{this.formDetails.formTitle}</h3>

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

          <input type="submit"
            value={this.formDetails.formTitle}
            className="session-form-button"
            />

          <p className="session-option">
            {this.formDetails.linkBlurb}
            <span>
              <Link to={this.formDetails.pathName}>
                { this.formDetails.linkText }
              </Link>
            </span>
          </p>

        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
