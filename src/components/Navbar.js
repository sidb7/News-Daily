import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  
    mode =()=>
    {
      if(this.props.mode==="light")
      {
      this.props.setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else{
      this.props.setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

 
 
  render() {
   
    return (
      <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark" style={{height:"60px"}}>
            <div className="container-fluid ">

            <Link className="navbar-brand mt-1" to="/"><h2><strong>NewsMonkey</strong></h2></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
                </li>
             
                </ul>
                <button onClick={this.mode} type="button" className="btn btn-dark"><i className={`mode1 ${(this.props.mode==='light')?"fa fa-moon-o":"fa fa-sun-o"}`} ></i></button>
           
            </div>
       
            </div>
            </nav>
      </div>
    )
  }
}
