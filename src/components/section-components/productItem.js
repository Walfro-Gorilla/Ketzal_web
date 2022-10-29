import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
 
const product = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return (

        <div className="d-list-slider-item"  >
            <div className="single-destinations-list text-center">

                <div className="thumb">
                    <span className="d-list-tag">{props.producto.description}</span>
                    <img src={props.producto.images} key={props.producto.id} alt="list" />
                    <div className="d-list-btn-wrap">
                        <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to={`/product-details/${props.producto.id}`} >Mas info <i className="fa fa-paper-plane" /></Link>
                        </div>
                    </div>
                </div>

                <div className="details">
                    <h4 className="title">{props.producto.name}</h4>
                    <p className="content">{props.producto.description}</p>
                </div>

            </div>
        </div>
    )
}

export default product
