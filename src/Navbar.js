import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg  ${props.controls} ` }  style={props.kanganstar}>
      <div className="container-fluid">
        <a className={`navbar-brand ${props.controls}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-a active ${props.controls}`} aria-current="page" href="#">{props.action1}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-a ${props.controls}`} href="#">{props.a}</a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-a dropdown-toggle ${props.controls}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" style={props.changestyle}>
                <li><a className={`dropdown-item `} href="#" style={props.changestyle}>{props.action2}</a></li>
                <li><a className={`dropdown-item `} href="#" style={props.changestyle}>{props.action3}</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className={`dropdown-item `} href="#" style={props.changestyle}>{props.action4}</a></li>
              </ul>
            </li>
          </ul>
          <button className="btn m-2 bg-green" type="submit" onClick={props.modeactive1} style={props.changestyle.border==='green'?{backgroundColor:'white',color:'black'}:{backgroundColor:'green',color:'white'}}>{props.controls==="bg-success text-white"?"Light":"Green"}</button>
          <button className="btn m-2" type="submit" onClick={props.modeactive2} style={props.changestyle.border==='blue'?{backgroundColor:'white',color:'black'}:{backgroundColor:'blue',color:'white'}}>{props.changestyle.border==='blue'?"Light":"Blue"}</button>
          <button className="btn m-2" type="submit" onClick={props.modeactive3} style={props.changestyle.border==='red'?{backgroundColor:'white',color:'black'}:{backgroundColor:'red',color:'white'}}>{props.changestyle.border==='red'?"Light":"Red"}</button>
          <button className="btn m-2" type="submit" onClick={props.modeactive4} style={props.changestyle.border==='yellow'?{backgroundColor:'white',color:'black'}:{backgroundColor:'#D4AF37',color:'white'}}>{props.changestyle.border==='yellow'?"Light":"Yellow"}</button>
            <button className="btn" type="submit" onClick={props.modeactivate} style={props.controls==="navbar-dark bg-dark"?{backgroundColor:'white', color:'black'}:{backgroundColor:'black', color:'white'}}>{props.controls==="navbar-dark bg-dark"?"Light Mode":"Dark Mode"}</button>
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.defaultProps={
    title: "Add title here",
    action1:"Action1",
    action2:"Action2",
    action3:"Action3",
    action4:"Action4"
}

Navbar.propTypes={
    title: PropTypes.string,
    action1: PropTypes.string,
    action2: PropTypes.string,
    action3: PropTypes.string,
    action4: PropTypes.string

}