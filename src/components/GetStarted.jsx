import React from 'react'
import './GetStarted.css'
export default function GetStarted() {
    return (
        <>
            <section id="get-started" class="get-started section-bg">
                <div class="container">

                    <div class="row justify-content-between gy-4">

                        <div class="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                            <div class="content">
                                <h3>Job process</h3>
                                <p>Job description / how it works.</p>
                                <p>Job description.</p>
                            </div>
                        </div>

                        <div class="col-lg-5" data-aos="fade">
                            <form action="forms/quote.php" method="post" class="php-email-form">
                                <h3>Get a quote</h3>
                                <p>Quote description</p>
                                <div class="row gy-3">

                                    <div class="col-md-12">
                                        <input type="text" name="name" class="form-control" placeholder="Name" required />
                                    </div>

                                    <div class="col-md-12 ">
                                        <input type="email" class="form-control" name="email" placeholder="Email" required />
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="phone" placeholder="Phone" required />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

                                        <button type="submit">Get a quote</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
