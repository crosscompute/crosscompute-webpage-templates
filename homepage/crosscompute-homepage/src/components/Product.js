import React from 'react'

export default function Product() {
  return(
    <div id="product" className="container anchor">
      <div className="row justify-content-center pb-5">
        <div className="col-12 text-center">
          <h3>CrossCompute is a web platform where organizations can request and run algorithms for analyzing data from engineers around the world in a marketplace that protects engineers' rights and intellectual property.</h3>
        </div>
      </div>
      <h2 className="text-center">CrossCompute for Organizations</h2>
      <div className="steps my-5">
        <div className="row steps-row">
          <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle">1</button>
            <p>EXPLORE different algorithms and authors.</p>
            <a className="btn btn-outline-primary" href="http://v2.crosscompute.com/cookbooks">Explore Recipes</a>
          </div>
          <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle">2</button>
            <p>RUN your own datasets on existing algorithms to generate analyses and visualizations for your reports.</p>
            <a className="btn btn-outline-primary" href="//crosscompute.com/create">Run an Algorithm</a>
          </div>
          <div className="steps-step col-4"><button type="button" className="btn btn-primary btn-circle" disabled>3</button>
            <p>REQUEST an algorithm! Work with the best engineers around the world on your specific analysis or visualization.</p>
            <a className="btn btn-outline-primary" href="//forum.crosscompute.com/c/requests">Request an Algorithm</a>
          </div>
        </div>
      </div>
    </div>
  )
}