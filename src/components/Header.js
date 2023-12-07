import React from 'react';
import {Link} from 'react-router-dom';



export const Header = () => {
    return(
        <header>
            <nav className='nav'>
               <div className='logo'> 
                    <Link to='/'><h1>Baddidas</h1></Link>
                </div>
            <div>
            
            </div>
                <ul className='nav-items'>
                    <li className='dropdown'><Link to="/men" > Men </Link></li>
                    <li><Link to="/women" > Women </Link></li>
                    <li><Link to='kids'> Kids</Link></li>
                    
                    <li><Link to="/" > Home </Link></li>
                </ul>
            
                <form id="form" role="search" style={{ display: 'flex', alignItems: 'center' }}>
  <input className='nav-input'
    type="search"
    id="query"
    name="q"
    placeholder="Search..."
    aria-label="Search through site content"    
  />
  <button className='nav-button'> Search </button>
</form>
            </nav>
        </header>
        
        
    )
}

export default Header;



