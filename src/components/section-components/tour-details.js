import React, { Component } from 'react';

import IncluyeFicha from './incluyeFicha';
import NoIncluyeFicha from './noIncluyeFicha';

import Itinerario from './itinerario';

import TripPlans from './tripPlans';
import GalleryTour from './gallery-tour';

import ButtonWA from '../blog-components/buttonWA';

import Carousel from 'react-elastic-carousel';


const Tour_details = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'
  let url = props.servicio.linkYT
  let urlMaps = props.servicio.linkMaps

  let count = 0


  // console.log('props details: ', props)
  // console.log('props INCLUYE: ', props.servicio.incluye)
  // console.log('Dias restantes: ', daysLeft)
  // console.log('INCLUYE----->', props.servicio.incluye)

  console.log("LAs services: ", props.servicio)

  //Calculamos los dias totales del tour
  var day1 = new Date(props.servicio.date1);
  var day2 = new Date(props.servicio.date2);

  var difference = Math.abs(day2 - day1);
  var daysLeft = difference / (1000 * 3600 * 24)



  // const [dataIn, setDataIn] = React.useState();
  // setDataIn(props.servicio.incluye)



  return (

    <div className="tour-details-area mg-top--130">
      <div className="tour-details-gallery">
        <div className="container-bg bg-dark-blue">
          <div className="container">



            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="details">
                  <p className="location mb-0"><i className="fa fa-map-marker" />{props.servicio.servicio}</p>
                  <h4 className="title">{props.servicio.proovedor}</h4>
                  <p className="content">{props.servicio.intinerario}</p>
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />

                    <span>5</span>
                  </div>
                  {/* <div className="all-tags">
                    <a href="#">Eco-Turismo</a>
                    <a href="#">Sierra</a>
                    <a href="#">Naturaleza</a>
                    <a href="#">Recreativo</a>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="book-list-warp">
                  <p className="book-list-content">¡Aparta en linea! Y obten tu kit viajero.</p>
                  <p> {props.servicio.descripcion} </p>
                  {/* <div className="tp-price-meta">
                    <p>desde</p>
                    <h2>  <small>$</small></h2>
                  </div> */}
                </div>
                <ul className="tp-list-meta border-tp-solid">
                  <li className="ml-0"><i className="fa fa-calendar-o" />{props.servicio.date1} - {props.servicio.date2} </li>
                  <li><i className="fa fa-clock-o" /> {daysLeft} dias /  {daysLeft - 1} noches </li>
                  <li><i className="fa fa-users" />viaje grupal</li>
                  {/* <li><i className="fa fa-star" /> 4.7</li> */}
                </ul>
              </div>
            </div>

            <GalleryTour servicio={props.servicio} />




          </div>

        </div>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tour-details-wrap">



              <div className="package-included-area">
                <h4 className="single-page-small-title"> ✅ Tu Viaje Incluye:</h4>
                <div className="row">
                  {/* Mapeamos todos los servicios en un contenedor */}
                  {
                    props.servicio.incluye?.map((item, index) => {
                      return (
                        <IncluyeFicha key={index} item={item} />
                      )
                    })
                  }
                </div>
              </div>

              <div className="package-included-area">
                <h4 className="single-page-small-title"> ❌ Tu viaje NO incluye:</h4>
                <div className="row">
                  {/* Mapeamos todos los serviciosNO incluidos */}

                  {
                    props.servicio.noIncluye?.map((item, index) => {
                      return (
                        <NoIncluyeFicha key={index} item={item} />
                      )
                    })
                  }
                </div>
              </div>


              {/* Mapeamos los dias de itinerario */}
              <div className="package-included-location">
                <h4 className="single-page-small-title">🗺️ Itineario</h4>
                <div className="row">

                  <Carousel>
                    {
                      props.servicio.itinerario?.sort((a, b) => a.date > b.date ? 1 : -1).map((item, index) => {
                        count = count + 1
                        return (
                          <Itinerario key={index} item={item} count={count} />
                        )
                      })
                    }
                  </Carousel>

                </div>
              </div>

              {/* Proveedor area */}
              <div className="host-area">
                <div className="single-host-wrap text-center">
                  <div className="thumb">
                    <img src={props.servicio.imgurlProveedor} alt="img" />
                  </div>
                  <h4> {props.servicio.proovedor} </h4>
                  <p> {props.servicio.descProveedor} </p>
                  <ButtonWA />
                </div>
              </div>

              {/* Google maps route */}
              <div className="service-location-map">
                <h4 className="single-page-small-title">🚌 Nuestra Ruta de Viaje</h4>
                <div className="service-location-map">
                  <iframe src={urlMaps} ></iframe>
                </div>
              </div>


              {/* REVIEWS clientes */}

              <div className="comments-area tour-details-review-area">
                <h4 className="comments-title">💭 Lo que nuestros viajeros dice...</h4>
                <ul className="comment-list mb-0">
                  <Carousel>

                    <li>
                      <div className="single-comment-wrap">
                        <div className="thumb">
                          <img src="assets/img/client/2.png" alt="img" />
                        </div>
                        <div className="content">
                          <h4 className="title">Karen Rojas</h4>
                          <span className="date">28 JUN 2022</span>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                          </div>
                          <p>Me la pasé super bien, muy buen servicio. Son bien buena onda los chavos de la agencia. ☺️👌</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="single-comment-wrap">
                        <div className="thumb">
                          <img src="assets/img/client/3.png" alt="img" />
                        </div>
                        <div className="content">
                          <h4 className="title">Martin Quezada</h4>
                          <span className="date">30 MAR 2022</span>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                          </div>
                          <p>Muy chido el viaje, excelente ambiente y todos muy amables, pasamos un muy buen rato lo volveré a repetir 🤘🏾</p>
                        </div>
                      </div>
                    </li>

                  </Carousel>

                </ul>
                <div className="btn-wrapper text-right mt-3">
                  <a className="btn-read-more" href="https://www.facebook.com/Wanderlust.Viaja/reviews/" target="_blank"><span>Mas Opiniones...<i className="la la-arrow-right" /></span></a>
                </div>
              </div>

              {/* Pricelist */}
              {/* trip-plan start */}
              <div className="trip-plan-area">

                <h4 className="single-page-small-title">🎫Precios x viajero</h4>
                <div className="row justify-content-center">
                  {
                    props.servicio.variantes?.sort((a, b) => a.key > b.key ? 1 : -1).map((item, index) => {
                      return (
                        <TripPlans key={index} item={item} />
                      )
                    })
                  }
                </div>

              </div>
              {/* trip-plan end */}

            </div>
          </div>

        </div>
      </div>

    </div>

  )
};

export default Tour_details;