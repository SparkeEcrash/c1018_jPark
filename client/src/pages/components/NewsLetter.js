import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsLetter = () => {
  return (
		<section className="newsletter py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center">
						<h2 className="text-uppercase">newsletter</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla placeat, ullam itaque voluptas odio quam eveniet saepe vero quis!</p>
						<form>
							<div className="input-group mt-5 mb-4">
								<input type="text" className="form-control text-capitalize" placeholder="enter your email"></input>
								<div className="input-group-append">
									<div className="input-group-text form-icon">
                    <FontAwesomeIcon icon="envelope" />
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-yellow">subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</section>
  )
}

export default NewsLetter;