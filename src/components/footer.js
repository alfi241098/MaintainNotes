import './css.css';
import React,{Component} from 'react';
class Footer1 extends React.Component{
    render()
    {
return (
    <div class="footer-dark" style={{backgroundColor:"#40394a",marginBottom:'0.02em'}}>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Why ExamBuddy</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>ExamBuddy</h3>
                <p>Learn With Rhythm</p>
              </div>
              
            </div>
            <p className="copyright">ExamBuddy © 2021</p>
          </div>
        </footer>
      </div>
      
    
  );
}
}
export default Footer1;
