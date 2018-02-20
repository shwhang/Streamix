import React from 'react';
import NavBar from '../nav_bar/nav_bar';

class SessionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
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
    return (
      <div>
        <NavBar />

        <form>
          <h3>Sign In</h3>

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

        <input type="submit" value="Sign In"/>

        </form>
      </div>
    )
  }
}

export default SessionForm;
