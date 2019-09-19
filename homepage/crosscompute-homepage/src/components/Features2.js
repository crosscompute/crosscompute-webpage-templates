import React from 'react'

export default function Features2() {
  return(
    <section className="jumbotron bg-transparent" id="features">
      <div className="container">
        <div className="row row-eq-height mb-5">
          <div className="col-md-4">
            <div className="bg-light-blue p-4 h-100">
              <div className="mb-4"><i className="fa fa-server fa-3x text-primary" /></div>
              <h3 className="font-weight-bold ml-0 mx-n1">Subscribe to a Cookbook</h3>
              <p> cookbook is a collection
                of computational recipes
                united by a common theme.
                Industry-based cookbooks
                are common tasks that an
                analyst needs to perform in
                a particular industry.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light-blue p-4 h-100">
              <div className="mb-4"><i className="fa fa-server fa-3x text-primary" /></div>
              <h3 className="font-weight-bold">Run a Recipe</h3>
              <p>A recipe is a case study
                narrative and step-by-step
                walkthrough that shows how
                to combine algorithms to
                extract the information
                required for a report.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light-blue p-4 h-100">
              <div className="mb-4"><i className="fa fa-server fa-3x text-primary" /></div>
              <h3 className="font-weight-bold mx-n3">Request an Algorithm</h3>
              <p>A request is a set of specifications
                that detail the desired inputs
                and outputs of your custom algorithm.
                Engineers from around the world
                create tools according to
                your specifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}