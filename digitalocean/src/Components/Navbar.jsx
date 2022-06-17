import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../images/logo.svg"
import hamburger from "../images/hamburger.svg"
import arrow from "../images/arrow.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className='nav-links'>
            <div className={show ? "show" : "hide"}>
            <ul>
              <li><a href="#"><div className="arrowdiv">Products <img src={arrow}/></div></a></li>
              <li><a href="#"><div className="arrowdiv">Solutions <img src={arrow}/></div></a></li>
              <li><a href="#"><div className="arrowdiv">Marketplace <img src={arrow}/></div></a></li>
              <li><a href="#"><div className="arrowdiv">Comunity <img src={arrow}/></div></a></li>
              <li><a href="#"><div className="arrowdiv">Pricing <img src={arrow}/></div></a></li>
            
            </ul>
          

          <div className="join">
            <a href="#" className='signup'>Sign Up</a>
            <a href="#" className='login'>Log In</a>
        </div>
          </div>
        </div>

       

        <div className="hamburger">
          <button onClick={() => setShow(!show)} >{show ?  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.70711 7.29289ZM23.2929 24.7071C23.6834 25.0976 24.3166 25.0976 24.7071 24.7071C25.0976 24.3166 25.0976 23.6834 24.7071 23.2929L23.2929 24.7071ZM7.29289 8.70711L23.2929 24.7071L24.7071 23.2929L8.70711 7.29289L7.29289 8.70711Z" fill="#24335A"/>
<path d="M23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L23.2929 7.29289ZM8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L8.70711 24.7071ZM24.7071 8.70711L8.70711 24.7071L7.29289 23.2929L23.2929 7.29289L24.7071 8.70711Z" fill="#24335A"/>
</svg>
   : <svg className='svgg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11H26" stroke="#24335A" stroke-width="2" stroke-linecap="round"/>
<path d="M6 21H26" stroke="#24335A" stroke-width="2" stroke-linecap="round"/>
</svg>}
</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar