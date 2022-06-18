import React, { Component }  from 'react'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const service = (props) => {

	let publicUrl = process.env.PUBLIC_URL + '/'
    console.log('Servicios Props service: ', props)
    console.log('Servicio solo: ', props.servicio.id)
    console.log('costo: ',props.servicio.variantes[0].costo)


    return (
            <div className="d-list-slider-item"  >
                <div className="single-destinations-list text-center">

                    <div className="thumb">
                        <span className="d-list-tag">{props.servicio.tipo}</span>
                        <img src={props.servicio.imgurl} key={props.servicio.id} alt="list" />
                        <div className="d-list-btn-wrap">
                            <div className="d-list-btn viaje-go-top">
                                <Link className="btn btn-yellow" to={`/tour-details/${props.servicio.id}`} >Aparta ¡YA! <i className="fa fa-paper-plane" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="details">
                        <h4 className="title">{props.servicio.servicio}</h4>
                        <p className="content">{props.servicio.descripcion}</p>
                        <ul className="tp-list-meta border-bt-dot">
                            <li><i className="fa fa-calendar-o" /> {props.servicio.fecha}</li>
                            <li><i className="fa fa-clock-o" /> 3 dias</li>
                            <li><i className="fa fa-star" /> 4.9</li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                            <p>PRECIO</p>
                            <h2>{props.servicio.variantes[1].costo} <small>$</small></h2>
                            <del>{props.servicio.variantes[0].costo}<span>mxn</span></del>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default service
