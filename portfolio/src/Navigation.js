import React,{Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
  render(){
    return(
      <nav>
        <h2 className='logo'> Portfolio</h2>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
   
    );
  }
}

export default Navigation;
