import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
  }

  render(){
    if(this.props.currentUser){
      return <Redirect to="/profiles" />;
    }

    return (
      <div>
        <NavBarContainer path={this.props.path}/>

        <div className="splash-page-section">
          <h1>See what's Next.</h1>
          <div className="splash-page-buttons">
            <Link to="/signup">Sign Up for Free</Link>
            <button onClick={this.handleClick}>Demo Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
