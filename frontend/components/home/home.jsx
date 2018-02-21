import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from './footer';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.login({user: {email: 'saehee@gmail.com', password: 'shibchill'}});
  }

  render(){
    if(this.props.currentUser){
      return <Redirect to="/profiles" />;
    }

    return (
      <div>
        <NavBarContainer path={this.props.path}/>

        <div className="splash-page-section">
          <div className="dark-gradient">
            <article className="splash-page-actions-wrapper">
              <h1 className="splash-page-header">
                See what's next.
              </h1>
              <h1 className="splash-page-blurb">
                Watch anywhere. Cancel Anytime.
              </h1>

              <div className="splash-page-buttons">
                <Link to="/signup" className="signup-btn">Sign Up for Free</Link>
                <button onClick={this.handleClick} className="demo-login-btn">Demo Login</button>
              </div>
            </article>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;
