import React from 'react';

export default function NavBar() {
  return(
    <nav className="topnav navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="//crosscompute.com">
          <img alt="CrossCompute" src="//storage.googleapis.com/crosscompute-website-20170828/brand-20170422-354x85.png" />
        </a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars" /></button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto d-flex align-items-center" />
          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li className="nav-item"><a className="nav-link" href="/team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="//forum.crosscompute.com">Community</a></li>
            <li className="nav-item"><span className="nav-link"><a className="btn btn-primary" href="/learn">Learn More</a></span></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}