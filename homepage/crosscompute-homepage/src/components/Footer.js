import React from 'react'

export default function Footer() {
  return(
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark py-5" id="footer">
      <div className="container d-lg-block">
        <div className="row row-eq-height mb-5">
          <div className="col-md-3 text-left d-flex align-items-center">
            <div className="w-100 text-left"><a className="navbar-brand" href="#"><b>CrossCompute</b></a>
            </div>
          </div>
          <div className="col-md-3 text-left">
            <h6 className="mb-4 text-light">People</h6>
            <a className="d-block text-white" href="http://crosscompute.com/team">Team</a>
            <a className="d-block text-white" href="mailto:careers@crosscompute.com">Careers</a>
          </div>
          <div className="col-md-3 text-left">
            <h6 className="mb-4 text-light">Help</h6>
            <a className="d-block text-white" href="//forum.crosscompute.com/c/suggestions">Make a Suggestion</a>
            <a className="d-block text-white" href="//forum.crosscompute.com/c/questions">Ask a Question</a>
            <a className="d-block text-white" href="mailto:contact@crosscompute.com">Contact Us</a>
          </div>
          <div className="col-md-3 text-left">
            <h6 className="mb-4 text-light">Policies</h6>
            <a className="d-block text-white">Intellectual Property</a>
            <a className="d-block text-white">Revenue Share</a>
            <a className="d-block text-white" href="//crosscompute.com/policies/terms">Terms of Service</a>
            <a className="d-block text-white" href="//crosscompute.com/policies/privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="row w-100 justify-content-between text-white">
          <div className="col text-center">
            <p><small>© 2019 CrossCompute. All rights reserved.</small></p>
          </div>
        </div>
      </div>
    </footer>
  )
}