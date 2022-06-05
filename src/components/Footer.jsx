import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer " class="footer">
            <div class="footer-top mt-5">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 footer-info">
                            <h1>Company name</h1>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <Link to="/" className='text-decoration-none text-black' href="#">Home</Link></li>
                                <li><i class="bi bi-chevron-right"></i> <Link to="/aboutUs" className='text-decoration-none text-black' href="#">About us</Link></li>
                                <li><i class="bi bi-chevron-right"></i> <Link to="/products" className='text-decoration-none text-black' href="#">products</Link></li>
                                <li><i class="bi bi-chevron-right"></i> <Link to="/contractUS" className='text-decoration-none text-black' href="#">Contract US</Link></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-6 footer-links">
                            <h4>Products</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a className='text-decoration-none text-black' href="#">Products1</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a className='text-decoration-none text-black' href="#">Products2</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a className='text-decoration-none text-black' href="#">Products3</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a className='text-decoration-none text-black' href="#">Products4</a></li>
                              
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer