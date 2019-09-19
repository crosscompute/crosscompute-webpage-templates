import React from 'react'

export default function PopularTools() {
  return(
    <section className="jumbotron bg-transparent">
      <div className="container">
        <div className="row">
          <h2 className="section_title">Most Popular Tools</h2>
        </div>
        <p>&nbsp;</p>
        <div className="card-group">
          <div className="card"><img className="card-img-top" src="images/Rural Electrification Cookbook.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Rural Electrification</h5>
              <p className="card-text">Engineering</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card"><img className="card-img-top" src="images/Hazard Mitigation Cookbook.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Hazard Mitigation</h5>
              <p className="card-text">Data Science</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card"><img className="card-img-top" src="images/Design Microgrid.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Design Microgrid</h5>
              <p className="card-text">Data visualization</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}