import React from 'react';

export default props => (
    <div className="main-content">
    <div className="container-fluid content-top-gap">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb my-breadcrumb">
          <li className="breadcrumb-item"><a href="#/index">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Elements</a></li>
          <li className="breadcrumb-item active" aria-current="page">Cards</li>
        </ol>
      </nav>
      <section className="template-cards">
        <div className="card card_border mb-5">
          <div className="cards__heading">
            <h3>Card Columns</h3>
          </div>
          <div className="card-body">
            <div className="card-columns">
              <div className="card">
                <img src="images/cart.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title that wraps to a new line</h5>
                  <p className="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                </div>
              </div>
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <img src="images/template2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card bg-primary text-white text-center p-3">
                <blockquote className="blockquote mb-0">
                  <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat.
                  </p>
                  <footer className="blockquote-footer text-white">
                    <small>
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img src="images/dashboard.jpg" className="card-img-top" alt="..."/>
              </div>
              <div className="card p-3 text-right">
                <blockquote className="blockquote mb-0">
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text  mb-4">This is another card with title and supporting text below. This card has
                    some
                    additional content to make it slightly taller overall.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card_border mb-5">
          <div className="cards__heading">
            <h3>Grid Columns</h3>
          </div>
          <div className="card-body">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mb-4">
                <div className="card">
                  <img src="images/template2.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                      additional
                      content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="images/desk.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                      additional
                      content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="images/cart.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                      additional
                      content.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="images/dashboard.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                      additional
                      content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  </div>
)