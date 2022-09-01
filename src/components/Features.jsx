import React from 'react'
import "./Features.scss"
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import features1 from "../assets/features-1.jpg"
import features2 from "../assets/features-2.jpg"
import features3 from "../assets/features-3.jpg"
import features4 from "../assets/features-4.jpg"

export default function Features() {
  return (
    <>
      <section id="features" className="features section-bg">

        <div className="container aos-init aos-animate" data-aos="fade-up">

          <ul className="nav nav-tabs row g-2 d-flex" role="tablist">

            <li className="nav-item col-3">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                <h4>Topic 1</h4>
              </a>
            </li>

            <li className="nav-item col-3" >
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <h4>Topic 2</h4>
            </a>
            </li>

            <li className="nav-item col-3">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Topic 3</h4>
              </a>
            </li>

            <li className="nav-item col-3">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <h4>Topic 4</h4>
              </a>
            </li>

          </ul>

          <div className="tab-content">

            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                  data-aos="fade-up" data-aos-delay="100">
                  <h3>Topic 1</h3>
                  <p className="fst-italic">
                    Description goes here.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> What we do 1.</li>
                    <li><i className="bi bi-check2-all"></i> What we do 2.</li>
                    <li><i className="bi bi-check2-all"></i> What we do 3</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src={features1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Topic 2</h3>
                  <p className="fst-italic">
                    Description goes here
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> What we do 1.</li>
                    <li><i className="bi bi-check2-all"></i> What we do 2.</li>
                    <li><i className="bi bi-check2-all"></i> What we do 3.</li>
                    <li><i className="bi bi-check2-all"></i> What we do 4.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Topic 3</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> What we do 1</li>
                    <li><i className="bi bi-check2-all"></i> WHat we do 2</li>
                    <li><i className="bi bi-check2-all"></i> What we do 3 </li>
                  </ul>
                  <p className="fst-italic">
                    Description goes here
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Topic 4</h3>
                  <p className="fst-italic">
                    Description of thing
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> What we do 1</li>
                    <li><i className="bi bi-check2-all"></i> what we do 2</li>
                    <li><i className="bi bi-check2-all"></i> What we do 3.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>
    </>
  )
}
