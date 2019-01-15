import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeFeatures = () => {
  return (
		<section className="services py-5 text-center">
			<div className="container">
			  <div className="row">
					<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
				  	<span className="service-icon">
							<FontAwesomeIcon icon="parachute-box" />
						</span>
						<h5 className="font-weight-bold text-uppercase">free shipping</h5>
						<p className="text-muted text-capitalize">free shipping on all order over 100.00</p>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
						<span className="service-icon">
              <FontAwesomeIcon icon="phone-volume" />
						</span>
						<h5 className="font-weight-bold text-uppercase">online support 24/7</h5>
						<p className="text-muted text-capitalize">we will assist you with your inquiries</p>
				  	</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
						<span className="service-icon">
              <FontAwesomeIcon icon="dollar-sign" />
						</span>
						<h5 className="font-weight-bold text-uppercase">money back guarantee</h5>
						<p className="text-muted text-capitalize">free 100% refund for 30 days</p>
				  	</div>
				</div>
			</div>
		</section>
  )
}

export default HomeFeatures;