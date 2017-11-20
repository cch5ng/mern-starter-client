import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class Header extends Component {

  render() {
    return (
      <div className="header title">
        <div className="header-main">
          <h2><Link to="/" className="header-main">App Title</Link></h2>
        </div>
        <div className="header-contact">
          <p className="contact">
          </p>
        </div>


      </div>
    )
  }
}

//{/*<Link to="/">Posts</Link> <Link to="/newPost">Add Post</Link>*/}


export default Header