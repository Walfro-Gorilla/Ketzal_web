import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

//Importamos firebase
import { firebase } from '../../firebase'
import PriceItem from './priceItem';



const ProductPrices = (props) => {

  const [precios, setPrecios] = React.useState([])

  


  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'

  const docsPrices = []; //Inicializamos objeto de precios                        


  //console.log("props PRODUCTO: ", props.producto)


  //conectamos a la BD y obtenemos datos al cargar el componente
  // React.useEffect(() => {

  //   const obtenerPrecios = async () => {

  //     try {


  //       const db = firebase.firestore()

  //       const reff = db?.collection(`products/${props.producto.id}/prices`)   //Accedemos a la colleccion PRECIOS dentro de PRODUCTOS de la BD
  //       reff.onSnapshot((queryPrices) => {
  //         queryPrices.forEach((docPrice) => { //Recorremos el query de precios     

  //           docsPrices?.push({ ...docPrice.data(), id: docPrice.id }); //empujamos la data de cada producto + id + PRICES
  //           //console.log("PRecios FInal: ", precios)

  //         });

  //         //console.log("docsPrices", docsPrices)
  //         setPrecios(docsPrices) //seteamos al state productos el array docsPrices

  //       })


  //       //const arrayData = doc.data()
  //       //

  //       // db.collection(`products/${props.producto.id}/prices`).get().then((subCollectionSnapshot) => {
  //       //   subCollectionSnapshot.forEach((subDoc) => {
  //       //     console.log(subDoc.data());
  //       //   });
  //       // });

  //       // setPrecios(arrayData)

  //       //console.log('PRECIOS: ', props.producto.id, arrayData);

  //     } catch (error) {
  //       console.log('FALLO en:', error)
  //     }
  //   }
  //   obtenerPrecios()
  // }, [])

  

  //console.log('Precios: ', precios)

  //console.log(props.precios)


  return (

    <div>

      <div className="destinations-details-page mg-top--70">
        <div className="container">

          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img src={props.producto.images} alt="img" />
                  </div>
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">05</span>
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

          {/* destinations-details-main-slider End */}
          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{props.producto.name}</h3>
              <p>Continen</p>
            </div>
            <div className="col-lg-6">
              <p>{props.producto.description}</p>
            </div>
            {/* <div className="col-lg-6">
              <p>It accounts for about 16% of the world's human population. The continent is surrounded by the Mediterranean Sea to the Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands.</p>
            </div> */}
          </div>

          <div className="trip-plan-area"> {/* trip-plan start */}
            <h4 className="single-page-small-title">Plan a trip</h4>
            <div className="row justify-content-center">
              {
                props.precios.map((precio) => {
                  return (
                    <PriceItem precio={precio} key={precio.id}  />
                  )
                })
              }
            </div>
          </div> {/* trip-plan End */}

        </div>
      </div>

    </div>
  )
}

export default ProductPrices