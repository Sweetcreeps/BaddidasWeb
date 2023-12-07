import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer id="footer">

    

        <div className="footer-top">
            <div className='container' >
                <div className='row'>
                <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li> <Link to='/'>Home</Link></li>
              <li> <Link to='/men'>Men</Link></li>
              <li> <Link to='/women'>Women</Link></li>
              <li> <Link to='/kids'>Kids</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
             
              <strong>Phone:</strong> +44 1234 567 8901 <br/>
              <strong>Email:</strong> Baddidas@gmail.com
            </p>

            </div>
            <div id="footer-about" className="col-lg-6 col-md-6 footer-info">
            <h3>About Baddidas</h3>
            <p>Baddidas is a company that sells a variety of sport clothing item to guarantee the comfort of ou customers when performing demanding activities. </p>
            
          </div>


                </div>    
            </div> 
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Baddidas</span></strong>. All Rights Reserved
          </div>
          
        </div>
      </footer>
    )
}