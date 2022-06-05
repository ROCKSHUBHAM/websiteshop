import React from 'react'

const ProductsView = () => {
    return (
        <section id="portfolio-details" class="portfolio-details min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-8">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="assets/img/portfolio/portfolio-1.jpg" class="d-block w-100" alt="..."/>
                                        
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/img/portfolio/portfolio-3.jpg" class="d-block w-100" alt="..."/>
                                       
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/img/portfolio/portfolio-2.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="portfolio-description">
                            <h2>This is an example of portfolio detail</h2>
                            <p>
                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default ProductsView