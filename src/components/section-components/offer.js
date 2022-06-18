import React from 'react';


//import SERVICE commponent
import Service from './service.js'

const Offer = (props) => {




	return (
		<div className="offer-area pd-top-70">

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="section-title text-center">
							<h2 className="title">Precios especiales &amp; y Descuentos 🤑</h2>
							<p>Encuentra la fecha ideal para tu siguiente aventura y APARTA con tiempo para que tus pagos sean pequeños 😉</p>
						</div>
					</div>
				</div>
			</div>

			<div className="destinations-list-slider-bg">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
							<div className="destinations-list-slider">

								{/* Mapeamos todos los servicios en un contenedor */}
								{
									props.servicios.map( (servicio) => {
										return (
											<Service servicio={servicio} key={servicio.id} />
										)
									})
								}

							</div>
						</div>

						<div className="col-lg-2 align-self-center order-lg-11">
							<div className="container">
								<div className="destinations-slider-controls">
									<div className="slider-nav tp-control-nav" />
									{/*slider-nav*/}
									<div className="tp-slider-extra slider-extra">
										<div className="text">
											<span className="first">01 </span>
											<span className="last" />
										</div>
										{/*text*/}
										<div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
											<span className="slider__label sr-only" />
										</div>
									</div>
									{/*slider-extra*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* END SLIDER */}


		</div>
	)
}

export default Offer
