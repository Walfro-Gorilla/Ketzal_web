import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const HolidayFun = (props) => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/8.png)' }}>
			<div className="container">

				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-9">
						<div className="section-title text-center">
							<h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Encuentra donde dormir AHORA</h2>
							<p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">
								¿Vas de viaje?...asegura tu estancia con tiempo y disfruta de los beneficios y planes que Ketzal App tiene para ti.
								Recuerda que puedes encontrar desde habitaciones compartidas hasta suites precidenciales.
							</p>
						</div>
					</div>
				</div>

				<div className="row">

					{
						props.servicios.map((servicio) => {
							return (
								<div className="col-lg-3 col-sm-6" key={servicio.id}>
									<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
										<div className="thumb">
											<img src={servicio.imgurl} alt="list" />
										</div>
										<div className="details">
											<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Maldives</p>
											<h4 className="title">{servicio.servicio}</h4>
											<p className="content">7 Days Tour on 2 person</p>
											<div className="tp-price-meta">
												<h2>{620} <small>$</small></h2>
											</div>
										</div>
									</div>
								</div>
							)
						})}





				</div>
			</div>
		</div>
	)
}

export default HolidayFun



