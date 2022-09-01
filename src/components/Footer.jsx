import React from 'react'
import './Footer.scss'

export default function Footer() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    document.addEventListener('DOMContentLoaded', () => { 
 

    })
    
  
    return (
        <>
            <footer id="footer" class="footer">

                <div class="footer-content position-relative">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="footer-info">
                                    <h3>Company Name</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div class="social-links d-flex mt-3">
                                        <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-twitter"></i></a>
                                        <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-facebook"></i></a>
                                        <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-instagram"></i></a>
                                        <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End footer info column--> */}


                        </div>
                    </div>
                </div>

                <div class="footer-legal text-center position-relative">
                    {/* <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong><span>UpConstruction</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits"> */}
                            {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ --> */}
                            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                        {/* </div>
                    </div> */}
                </div>

            </footer>
            <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>
                
                
        </>
    )
}
