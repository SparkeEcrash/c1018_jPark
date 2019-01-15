import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
  return (
		<section className="skills py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 col-lg-4 d-flex my-3">
						<div className="skill-icon mr-3">
              <FontAwesomeIcon icon="truck"></FontAwesomeIcon>
						</div>
						<div className="skill-text">
							<h3 className="text-uppercase text-white">free shipping</h3>
							<p className="text-muted text-capitalize">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad.
							</p>
						</div>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4 d-flex my-3">
						<div className="skill-icon mr-3">
              <FontAwesomeIcon icon="comment-dollar"></FontAwesomeIcon>
						</div>
						<div className="skill-text">
							<h3 className="text-uppercase text-white">price promise</h3>
							<p className="text-muted text-capitalize">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad.
							</p>
						</div>
					</div>
					<div className="col-10 mx-auto col-md-6 col-lg-4 d-flex my-3">
						<div className="skill-icon mr-3">
              <FontAwesomeIcon icon="award"></FontAwesomeIcon>
						</div>
						<div className="skill-text">
							<h3 className="text-uppercase text-white">lifetime warranty</h3>
							<p className="text-muted text-capitalize">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Skills;