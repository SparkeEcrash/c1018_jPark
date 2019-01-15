import React from 'react';
import './HomeFiller.css';

const HomeFiller = () => {
  return (
		<section>
			<div className="container-fluid">
				<div className="row home-filler align-items-end pb-5">
					<div className="col-10 mx-auto text-white text-center">
						<h4 className="text-uppercase font-weight-bold">
							smart furniture collection
						</h4>
						<p className="text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum.</p>
						<a href="product.html" className="text-weight-bold text-capitalize collection-link">view collection</a>
						<div className="collection-underline"></div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default HomeFiller;