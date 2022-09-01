import React from 'react'
import './Hero.css'
import herocarousel from '../assets/hero-carousel/hero-carousel-1.jpg'
import herocarouse2 from '../assets/hero-carousel/hero-carousel-2.jpg'
import herocarouse3 from '../assets/hero-carousel/hero-carousel-3.jpg'
import herocarouse4 from '../assets/hero-carousel/hero-carousel-4.jpg'
import herocarouse5 from '../assets/hero-carousel/hero-carousel-5.jpg'

export default function Hero() {
  return (
   <>
   {/* Start of hero */}
  <section id="hero" class="hero">

<div class="info d-flex align-items-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <h2 data-aos="fade-down" >Welcome to <span>Company name</span></h2>
        <p data-aos="fade-up" >Welcome message.</p>
        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
      </div>
    </div>
  </div>
</div>

<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

  <div class="carousel-item active" style={{ backgroundImage: `url(${herocarousel})` }}>
  </div>
  <div class="carousel-item" style={{ backgroundImage: `url(${herocarouse2})` }}></div>
  <div class="carousel-item" style={{ backgroundImage: `url(${herocarouse3})` }}></div>
  <div class="carousel-item" style={{ backgroundImage: `url(${herocarouse4})` }}></div>
  <div class="carousel-item" style={{ backgroundImage: `url(${herocarouse5})` }}></div>

  <a class="carousel-control-prev" href="#herocarouse3" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
  </a>

  <a class="carousel-control-next" href="#herocarouse3" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
  </a>

</div>

</section>
{/* End of Hero */}
   </>
  )
}
