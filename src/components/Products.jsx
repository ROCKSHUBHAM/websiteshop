import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>

            <div id="portfolio" class="portfolio min-vh-100 pt-5">

                <div class="container mt-5" data-aos="fade-up">

                    <header className="section-header my-4">
                        <h1 className='border-bottom border-5 border-danger d-inline'>Portfolio</h1>
                        {/* <p>Check our latest work</p> */}
                    </header>
                    <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>
                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                        <Link to="/productview" class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4 className='fw-bolder'>Lorem ipsum dolor</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic praesentium eveniet similique non nemo exercitationem alias dolorum impedit dolor voluptas veritatis animi, suscipit iure magni deleniti nobis! Ducimus, quod ab.</p>

                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Products