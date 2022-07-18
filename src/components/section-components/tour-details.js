import React, { Component } from 'react';

import IncluyeFicha from './incluyeFicha';
import NoIncluyeFicha from './noIncluyeFicha';

import Itinerario from './itinerario';

import TripPlans from './tripPlans';


const Tour_details = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'
  let url = props.servicio.linkYT
  let urlMaps = props.servicio.linkMaps

  let count = 0


  console.log('props details: ', props)
  console.log('props INCLUYE: ', props.servicio.incluye)

  //Calculamos los dias totales del tour
  var day1 = new Date(props.servicio.date1);
  var day2 = new Date(props.servicio.date2);

  var difference = Math.abs(day2 - day1);
  var daysLeft = difference / (1000 * 3600 * 24)

  console.log('Dias restantes: ', daysLeft)

  // const [dataIn, setDataIn] = React.useState();
  // setDataIn(props.servicio.incluye)


  console.log('INCLUYE----->', props.servicio.incluye)

  return (

    <div className="tour-details-area mg-top--70">
      <div className="tour-details-gallery">
        <div className="container-bg bg-dark-blue">
          <div className="container">
            <div className="gallery-filter-area row">
              <div className="gallery-sizer col-1" />

              {/* gallery-item */}
              <div className="tp-gallery-item col-md-5 col-sm-12 col-xs-12 mb-10">
                <div className="tp-gallery-item-img">
                  <div className="thumbnails">
                    <img src={props.servicio.imgurlGaleria6} key={props.servicio.id} alt="image" />
                    <div className="video-popup-btn">
                      <a href={url} className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* gallery-item */}
              <div className="tp-gallery-item col-md-3 col-sm-12 col-xs-12">
                <div className="tp-gallery-item-img">
                  <a href="#" data-effect="mfp-zoom-in">
                    <img src={props.servicio.imgurlGaleria5} key={props.servicio.id} alt="image" />
                  </a>
                </div>
              </div>

              {/* gallery-item */}
              <div className="tp-gallery-item col-lg-2 col-md-3 col-sm-6 col-6">
                <div className="tp-gallery-item-img">
                  <a href="#" data-effect="mfp-zoom-in">
                    <img src={props.servicio.imgurlGaleria4} key={props.servicio.id} alt="image" />
                  </a>
                </div>
              </div>

              {/* gallery-item */}
              <div className="tp-gallery-item col-lg-2 col-md-3 col-sm-6 col-6">
                <div className="tp-gallery-item-img">
                  <a href="#" data-effect="mfp-zoom-in">
                    <img src={props.servicio.imgurlGaleria3} key={props.servicio.id} alt="image" />
                  </a>
                </div>
              </div>

              {/* gallery-item */}
              <div className="tp-gallery-item col-lg-2 col-md-3 col-sm-6 col-6">
                <div className="tp-gallery-item-img">
                  <a href="#" data-effect="mfp-zoom-in">
                    <img src={props.servicio.imgurlGaleria2} key={props.servicio.id} alt="image" />
                  </a>
                </div>
              </div>

              {/* gallery-item */}
              <div className="tp-gallery-item col-lg-2 col-md-3 col-sm-6 col-6">
                <div className="tp-gallery-item-img">
                  <a href="#" data-effect="mfp-zoom-in">
                    <img src={props.servicio.imgurlGaleria1} key={props.servicio.id} alt="image" />
                  </a>
                </div>
              </div>

            </div>

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
                    <i className="fa fa-star" />
                    <span>4.6</span>
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
                  <div className="tp-price-meta">
                    <p>desde</p>
                    <h2>  <small>$</small></h2>
                  </div>
                </div>
                <ul className="tp-list-meta border-tp-solid">
                  <li className="ml-0"><i className="fa fa-calendar-o" />{props.servicio.date1} - {props.servicio.date2} </li>
                  <li><i className="fa fa-clock-o" /> {daysLeft} dias /  {daysLeft - 1} noches </li>
                  <li><i className="fa fa-users" />viaje grupal</li>
                  {/* <li><i className="fa fa-star" /> 4.7</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tour-details-wrap">

              <h4 className="single-page-small-title">{props.servicio.servicio}</h4>
              <p>{props.servicio.descripcion}</p>

              {/* trip-plan start */}
              <div className="trip-plan-area">

                <h4 className="single-page-small-title">Lista de Precios</h4>
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

              {/* Mapeamos los dias de itinerario */}
              <div className="package-included-location">
                <h4 className="single-page-small-title">🗺️ Itineario</h4>
                <div className="row">
                  {
                    props.servicio.itinerario?.sort((a, b) => a.date > b.date ? 1 : -1).map((item, index) => {
                      count = count + 1
                      return (
                        <Itinerario key={index} item={item} count={count} />
                      )
                    })
                  }

                  {/* <div className="col-lg-3 col-md-3 col-6">
                    <div className="single-blog single-blog-after-none">
                      <div className="p-list">
                        <div className="list">2</div>
                        <p>Dia 2</p>
                      </div>
                      <div className="thumb">
                        <img src={publicUrl + "assets/img/blog/9.png"} alt="blog" />
                      </div>
                      <div className="single-blog-details">
                        <h4 className="title">Farewell &amp; Departure</h4>
                        <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                        <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                      </div>
                    </div>
                  </div>                  */}

                </div>
              </div>

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





              <div className="host-area">
                <div className="single-host-wrap text-center">
                  <div className="thumb">
                    <img src={props.servicio.imgurlProveedor} alt="img" />
                  </div>
                  <h4> {props.servicio.proovedor} </h4>
                  <p> {props.servicio.descProveedor} </p>

                  {/* WhastApp */}
                  <a href="https://api.whatsapp.com/send?phone=526567487502&text=Hola Ketzal app, me gustaria mas informacion aceca de tus siguientes trips 🖖🏽" className="buttonWA">Whatsapp Chat</a>

                </div>
              </div>
              <div className="service-location-map">
                <h4 className="single-page-small-title">Nuestra Ruta de Viaje</h4>
                <div className="service-location-map">
                  <iframe src={urlMaps} ></iframe>
                </div>
              </div>


              {/* REVIEWS clientes */}


              <div className="comments-area tour-details-review-area">
                <h4 className="comments-title">Mira lo que opinan nuestros viajeros</h4>
                <ul className="comment-list mb-0">

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

                </ul>
                <div className="btn-wrapper text-right mt-3">
                  <a className="btn-read-more" href="https://www.facebook.com/Wanderlust.Viaja/reviews/" target="_blank"><span>Mas Opiniones...<i className="la la-arrow-right" /></span></a>
                </div>
              </div>

              {/* <div className="location-review-area">
                <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                  <div className="row">
                    <div className="col-lg-6"><h4 className="single-page-small-title">Escribe una opinion</h4></div>
                    <div className="col-lg-6">
                      <div className="tp-review-meta text-lg-right">
                        <span className="mr-3 ml-0">Calificacion</span>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Nombre</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Email</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Duda o Comentario</span>
                        <textarea defaultValue={""} />
                      </label>
                    </div>
                    <div className="col-12">
                      <a className="btn btn-yellow" href="#">Enviar</a>
                    </div>
                  </div>
                </form>
              </div> */}

            </div>
          </div>

          {/* <div className="col-lg-4">
            <div className="sidebar-area sidebar-area-4">
              <div className="widget tour-list-widget">
                <div className="widget-tour-list-meta">
                  <div className="single-widget-search-input-title"><i className="fa fa-user" /> Nombre</div>
                  <div className="single-widget-search-input">
                    <input type="text" placeholder="Nombre" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                  <div className="single-widget-search-input">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Celular</div>
                  <div className="single-widget-search-input">
                    <input type="text" placeholder="Celular" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Fecha</div>
                  <div className="single-widget-search-input">
                    <input type="text" className="departing-date custom-select" placeholder="Ida" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Fecha</div>
                  <div className="single-widget-search-input">
                    <input type="text" className="returning-date custom-select" placeholder="Vuelta" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Mensaje</div>
                  <div className="single-widget-search-input">
                    <textarea placeholder="Escribe tu mensaje..." defaultValue={""} />
                  </div>
                  <div className="text-lg-center text-left">
                    <a className="btn btn-yellow" href="#">Enviar <i className="fa fa-paper-plane" /></a>
                  </div>
                </div>
              </div>
              <div className="widget_ads">
                <a href="#">
                  <img src={props.servicio.imgurlFlyer} key={props.servicio.id} alt="image" />
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>

    </div>

  )
};

export default Tour_details;