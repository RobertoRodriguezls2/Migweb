import React from 'react'
import "./Process.css"
import constructions1 from '../assets/constructions-1.jpg'
import constructions2 from '../assets/constructions-2.jpg'
import constructions3 from '../assets/constructions-3.jpg'
import constructions4 from '../assets/constructions-4.jpg'
export default function Process() {
  return (
    <>
        <section id="constructions" class="constructions">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Process</h2>
      <p>Process description</p>
    </div>

    <div class="row gy-4">

      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div class="card-item">
          <div class="row">
            <div class="col-xl-5">
              <div class="card-bg" style={{ backgroundImage: `url(${constructions1})` }}></div>
            </div>
            <div class="col-xl-7 d-flex align-items-center">
              <div class="card-body">
                <h4 class="card-title">Process 1</h4>
                <p>Description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div class="card-item">
          <div class="row">
            <div class="col-xl-5">
              <div class="card-bg" style={{ backgroundImage: `url(${constructions2})` }}></div>
            </div>
            <div class="col-xl-7 d-flex align-items-center">
              <div class="card-body">
                <h4 class="card-title">Process 2</h4>
                <p>Description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div class="card-item">
          <div class="row">
            <div class="col-xl-5">
              <div class="card-bg" style={{ backgroundImage: `url(${constructions3})` }}></div>
            </div>
            <div class="col-xl-7 d-flex align-items-center">
              <div class="card-body">
                <h4 class="card-title">Process 3</h4>
                <p>Description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div class="card-item">
          <div class="row">
            <div class="col-xl-5">
              <div class="card-bg" style={{ backgroundImage: `url(${constructions4})` }}></div>
            </div>
            <div class="col-xl-7 d-flex align-items-center">
              <div class="card-body">
                <h4 class="card-title">Process 4</h4>
                <p>Decription.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  )
}
