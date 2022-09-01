import React from 'react'
import "./AltServices.css"
import alt from '../assets/alt-services.jpg'

export default function AltServices() {
  return (
   <>
   <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">

          <div class="row justify-content-around gy-4">
            <div class="col-lg-6 img-bg" style={{ backgroundImage: `url(${alt})` }} data-aos="zoom-in"
              data-aos-delay="100"></div>

            <div class="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Title goes here</h3>
              <p>Job description</p>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Service 1</a></h4>
                  <p>Service Description</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Service 2</a></h4>
                  <p>Service description</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Service 3</a></h4>
                  <p>Service description</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" class="stretched-link">Service 4</a></h4>
                  <p>Service description</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
   </>
  )
}
