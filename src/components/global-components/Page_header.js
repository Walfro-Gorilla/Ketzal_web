

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Page_header = (props) => {

	let HeaderTitle =  props.servicio.servicio
	let Subheader =  HeaderTitle

	console.log(props.servicio.imgUrlBanner);


	return (
		<div className="breadcrumb-area jarallax" style={{ backgroundImage: 'url('+ props.servicio.imgurlBanner +')' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb-inner">
							<h1 className="page-title">{HeaderTitle}</h1>
							<ul className="page-list">
								<li><Link to="/">Inicio </Link></li>
								<li>{Subheader}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page_header;



