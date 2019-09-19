import React from 'react'

export default function Main() {
  return(
    <div>
      <div className="container my-5">
        <h2 className="text-center">CrossCompute for Creators</h2>
        <div className="steps my-5">
          <div className="row steps-row">
            <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle">1</button>
              <p>Create, Preview, Deploy your Ready to Go Tool</p>
            </div>
            <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle">2</button>
              <p>Protect Your Intellectual Property by Selling Subscription Access to Your Tools Not Your Code</p>
            </div>
            <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle" disabled>3</button>
              <p>Get Paid when Customers Run Your Algorithms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-md-6 text-center mx-auto">
            <h3 className="text-center">Ready to become a creator ?</h3>
            <p className="m-0">It is Free to Get Paid</p><br /><a className="btn btn-primary btn-lg" href="#">Sign Up Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}