import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const GalleryTour = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'

  console.log("Gallery:", props)

  return (

    // <div className="main-gallery-area pd-top-90">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="single-gallery-area bg-gray">
    //           <div className="gallery-title">
    //             <p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="img" />Maldives</p>
    //             <h4><Link to="/gallery-details">Beautiful Beach of Greece</Link></h4>
    //           </div>

    <div className="gallery-slider pd-top-70">

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria1} key={props.servicio.id} alt="image2" />
      </div>

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria2} key={props.servicio.id} alt="image3" />
      </div>

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria3} key={props.servicio.id} alt="image4" />
      </div>

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria4} key={props.servicio.id} alt="image5" />
      </div>

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria5} key={props.servicio.id} alt="image6" />
      </div>

      <div className="thumb">
        <img src={props.servicio.imgurlGaleria6} key={props.servicio.id} alt="image7" />
      </div>







    </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //  </div>


  )
}

export default GalleryTour