import React,{Component} from 'react';
import logo from './Images/log2.png';
import home from './Images/homeb.png';
import fav from './Images/favb.png';
import user from './Images/userc.png';
import dash from './Images/dash7.png';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render()
    {
        return (

            <div className="row" style={{backgroundColor: '#92817a', height: '70px'}}>
              <div className="col-sm-4 ">
                <img src={logo}   style={{height: '100px'}} />
                </div>
    
              <div className="col-sm-8" >
                <div className="d-flex flex-row-reverse" >
                  <nav className="navbar navbar-expand-lg navbar"  >
                   <div className= 'container-fluid' style={{backgroundColor: '#92817a'}} >
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDarkDropdown' aria-controls='navbarNavDarkDropdown' aria-expanded='true' aria-label='Toggle navigation'>
                      <span className='navbar-toggler-icon' />
                    </button>
                      <div className='collapse navbar-collapse' id='navbarNavDarkDropdown'>
                      <ul className='navbar-nav'>
                        <li className='nav-item dropdown'>
                          
                            <img src={dash} className="icon" className='nav-link dropdown-toggle' href='#' id='navbarDarkDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='true'/>	
                          
                          <ul className='dropdown-menu dropdown-menu-dark'>
                          <li ><Link to="/MaintainNotes" style={{color: 'white'}} className='dropdown-item'>MaintainNotes</Link></li>
                            <li><Link to="/PostQueries" style={{color: 'white'}} className='dropdown-item'>PostQueries</Link></li>
                            <li><Link to="/Feedback" style={{color: 'white'}} className='dropdown-item'> Feedback</Link></li>
                            <li><a className='dropdown-item' href='#'>Change Password</a></li>
                            <li><a className='dropdown-item' href='#'>Log Out</a></li>	
                          </ul>
                        </li>
                      </ul>
                      </div>
                    
                    <Link to="/" style={{color: 'white'}} className='navbar-brand'> Home <img src={home} className="icon" /></Link>
                    <Link to="/Fav" style={{color: 'white'}} className='navbar-brand'>Favourites <img src={fav} className="icon" /></Link>
                    <Link to="/UserActivity" style={{color: 'white'}} className='navbar-brand'>UserActivities<img src={user} className="icon" /></Link>
                          
                    </div>
                  
      
                  </nav>
                </div>
              </div>
          </div>
          
                  
             
          );
        }
      }
      export default Header;