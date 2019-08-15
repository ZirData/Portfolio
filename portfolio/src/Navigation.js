import React,{Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
  render(){
    const sections = ['Home','Projects','Resume','Contact']
    const navLinks = sections.map(section => {
      return(
        <li><a href={'#' + section}></a>{section}</li>
      )
    });
    return(
      <nav>
        <h2 className='logo'> Portfolio</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
   
    );
  }
}

export default Navigation;
