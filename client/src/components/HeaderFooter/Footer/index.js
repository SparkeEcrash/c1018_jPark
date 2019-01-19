import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
		<footer className="py-5 footer">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center">
						<h1 className="text-uppercase font-weight-bold text-yellow footer-title text-center d-inline-block">
							contact us
						</h1>
						<div className="footer-icons my-5 d-flex justify-content-center">
							{/* <a href="#" className="footer-icon mx-2"> */}
                <FontAwesomeIcon icon={['fab', 'facebook']} />
							{/* </a> */}
							{/* <a href="#" className="footer-icon mx-2"> */}
                <FontAwesomeIcon icon={['fab', 'twitter']} />
							{/* </a> */}
							{/* <a href="#" className="footer-icon mx-2"> */}
                <FontAwesomeIcon icon={['fab', 'google-plus']} />
							{/* </a> */}
							{/* <a href="#" className="footer-icon mx-2"> */}
                <FontAwesomeIcon icon={['fab', 'instagram']} />
							{/* </a> */}
							{/* <a href="#" className="footer-icon mx-2"> */}
                <FontAwesomeIcon icon={['fab', 'youtube']} />
							{/* </a> */}
						</div>
						<p className="text-muted text-capitalize w-75 mx-auto text-center">
							© 2019 Gityo Amiibo
						</p>
						{/* <div className="footer-contact mt-5 d-flex justify-content-around flex-wrap">
							<div className="text-capitalize">
								<span className="footer-icon mr-2">
									<FontAwesomeIcon icon="map"></FontAwesomeIcon>
								</span>
								123 main street, los angeles
							</div>
							<div className="text-capitalize">
								<span className="footer-icon mr-2">
									<FontAwesomeIcon icon="phone"></FontAwesomeIcon>
								</span>
								phone : + (310) 111 2222
							</div>
							<div className="text-capitalize">
								<span className="footer-icon mr-2">
									<FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
								</span>
								email : email@email.com
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer;