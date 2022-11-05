import React from "react";

export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="intouch">
                        <h4>Get in Touch</h4>
                        <p>Aryatech Platforms Private Limited</p>
                        <p>
                            <span className="footer-label">Web : </span>
                            <a href="/">www.arya.ag</a>
                        </p>
                        <p>
                            <span className="footer-label">Email : </span>
                            <a href="/">contact@arya.ag</a>
                        </p>
                        <p>
                            <span className="footer-label">Phone : </span>
                            <a href="/">+91 90134 93939</a>
                        </p>
                        <div className="social-links">
                            <a href="/"><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="/"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="address">
                        <h4>Address</h4>
                        <p>Aryatech Platforms Private Limited </p>
                        <p>H 82, Sector 63
                            <br/>
                            Noida 201301 UP INDIA </p>
                        <p>
                            <span>Grievance Redressal Officer</span>
                            <p>Ms. Ankita Jain -0120-4859319</p>
                        </p>    
                    </div>
                    <div className="info">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">Media Coverage</a></li>
                            <li><a href="/">Who we Serve</a></li>
                            <li><a href="/">Who we Serve</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
