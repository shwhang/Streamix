import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class Home extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    //TODO: Add a different view if user is loggedin
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default Home;
