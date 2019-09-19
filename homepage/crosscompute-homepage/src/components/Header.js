import React from 'react'

export default function Header() {
  return(
    <section className="jumbotron jumbotron-features bg-transparent" id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6 col-xl-5">
            <h2>Request and Run Algorithms from Engineers Around the World</h2>
            <p className="lead mb-5">You Do Not Need to Understand Code!</p>
            <a className="btn btn-primary btn-lg" href="//v2.crosscompute.com/cookbooks">Check a Use Case</a>
          </div>
          <div className="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
            <img alt="image" className="img-fluid" src="images/website_setup.svg" /></div>
        </div>
      </div>
    </section>
  )
}