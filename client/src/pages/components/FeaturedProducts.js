import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../../images/img-products/product-1.png';
import image2 from '../../images/img-products/product-2.png';
import image3 from '../../images/img-products/product-3.png';
import image4 from '../../images/img-products/product-4.png';
import image5 from '../../images/img-products/product-5.png';
import image6 from '../../images/img-products/product-6.png';

const FeaturedProducts = () => {
  return (
		<section className="featured py-5">
			<div className="container">
				<div className="row my-3">
					<div className="col-10 mx-auto text-center">
						<h1 className="text-uppercase">featured products</h1>
						<p className="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Nihil, corrupti!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image1}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image2}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image3}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image4}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image5}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4">
						<div className="featured-container p-5">
							<img
								src={image6}
								className="img-fluid"
								alt="product"
							/>
							<span
								className="featured-search-icon"
								data-toggle="modal"
								data-target="#productModal"
								><FontAwesomeIcon icon="search" /></span>
							<a
								href="#"
								className="featured-store-link text-capitalize"
								>add to cart</a
							>
						</div>
						<h6 className="text-capitalize text-center my-2">
							special product
						</h6>
						<h6 className="text-center">
							<span className="text-muted old-price mx-2">$200</span>
							<span>$100</span>
						</h6>
					</div>
				</div>
			</div>
		</section>
  )
}

export default FeaturedProducts;