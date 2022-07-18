import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Review extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="client-review-area client-review-area-home pd-top-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
						<div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
							<div className="client-review-thumb">
								<img src={publicUrl + "assets/img/others/client-review.png"} alt="review" />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
							<p className="sub-title">Opiniones de Nuestros Viajeros</p>
							<h3 className="location-name">Cancún, México</h3>
							<div className="tp-review-meta">
								<i className="ic-yellow fa fa-star" />
								<i className="ic-yellow fa fa-star" />
								<i className="ic-yellow fa fa-star" />
								<i className="ic-yellow fa fa-star" />
								<i className="fa fa-star" />
								<span>5.0</span>
							</div>
							<p>
								Súper recomendado 😍
								⭐️⭐️⭐️⭐️⭐️
								Me encantó el trato y las facilidades de pago son lo mejor GRACIAS!!
								#Cancún 🌊 🏝💚💚💚
							</p>
							<div className="media">
								<div className="media-left">
									<img src={publicUrl + "assets/img/client/1.png"} alt="client" />
								</div>
								<div className="media-body">
									<h6>Claudia Bañuelos</h6>
									<p>Viajero Ketzal</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default Review