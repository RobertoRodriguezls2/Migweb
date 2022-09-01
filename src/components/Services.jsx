import React from 'react'
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainCity, faIndustry, faCompassDrafting,
   faTrowelBricks, faHelmetSafety, faArrowUpFromGroundWater, faEasel
   } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faMountainCity,faIndustry, faCompassDrafting, faTrowelBricks, faHelmetSafety, faArrowUpFromGroundWater)
export default function Services() {
  return (
    <>
    <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Services</h2>
            <p>Services offered description</p>
          </div>

          <div class="row gy-4">

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item  position-relative">
                <div class="icon">
                  <i class="fa-solid fa-mountain-city"><FontAwesomeIcon icon="fa-solid fa-mountain-city" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-arrow-up-from-ground-water"><FontAwesomeIcon icon="fa-solid fa-industry" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-compass-drafting"><FontAwesomeIcon icon="fa-solid fa-compass-drafting" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-trowel-bricks"><FontAwesomeIcon icon="fa-solid fa-trowel-bricks" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-helmet-safety"><FontAwesomeIcon icon="fa-solid fa-helmet-safety" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-arrow-up-from-ground-water"><FontAwesomeIcon icon="fa-solid fa-arrow-up-from-ground-water" /></i>
                </div>
                <h3>Service</h3>
                <p>Description.</p>
                <a href="service-details.html" class="readmore stretched-link">Learn more <i
                  class="bi bi-arrow-right"></i></a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
