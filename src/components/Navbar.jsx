import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
            <div class="container">
                <Link to="/" class="navbar-brand navbar_brand" href="#">Name</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav navbar_icon  ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-2">
                            <Link  to="/"  class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link  to="/aboutUs"  class="nav-link">About us</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link  to="/products" class="nav-link">Products</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link  to="/contractUS" class="nav-link">Contract US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar