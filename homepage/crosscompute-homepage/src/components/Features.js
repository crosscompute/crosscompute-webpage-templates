import React from 'react'

export default function Features() {
  return(
    <section className="jumbotron bg-transparent" id="features">
      <div className="container">
        <div className="row text-left align-items-center pt-5 pb-md-5">
          <div className="col-4 col-md-5 m-md-auto order-md-5"><img alt="image" className="img-fluid" src="images/web_devices.svg" /></div>
          <div className="col-12 col-md-5">
            <h2 className="pl-0 py-0"><strong className="py-0 px-0">Are You An Analyst Or Consultant?</strong></h2>
            <p className="lead">Find a complete solution or recipe for your problem</p>
            <p className="lead">Run a tool on your dataset</p>
            <p className="lead">Don't see a solution you need? Request an algorithm!</p><a className="btn btn-outline-primary">Learn More</a>
          </div>
        </div>
        <div className="row text-left align-items-center pt-3 pb-md-5">
          <div className="col-4 col-md-5"><img alt="image" className="img-fluid pl-0" src="images/setup_wizard.svg" /></div>
          <div className="col-12 col-md-5 m-md-auto px-0">
            <h2 className="px-0 p-0 pr-0 pl-0 py-0"><strong className="px-0 pr-0 p-0 py-0">Are You a Researcher or Engineer?</strong></h2>
            <p className="lead">Earn when your algorithm runs</p>
            <p className="lead">Find out what people want in Algorithm Request section</p>
            <p className="lead">Create preview deploy your tool in one stop</p>
            <p className="lead">Protect your intellectual property</p><a className="btn btn-outline-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}