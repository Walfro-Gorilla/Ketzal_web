import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/Page_header'
import TourDetails from './section-components/tour-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { useParams } from 'react-router-dom';

import BannerVideo from './section-components/video-banner';

//Importamos firebase
import { firebase } from '../firebase'

import ButtonWA from './blog-components/buttonWA';
import ProductPrices from './section-components/product-prices';


const ProductDetailsPage = () => {

    //Obtenemos el ID del url
    const { id } = useParams();
    const [producto, setProducto] = React.useState([])
    const [precios, setPrecios] = React.useState([])



    //conectamos a la BD y obtenemos datos al cargar el componente
    React.useEffect(() => {

        const obtenerDatos = async () => {

            try {

                const db = firebase.firestore()
                const doc = await db.collection('products').doc(id).get()
                const arrayData = doc.data()
                arrayData.id = id
                //console.log('Arraydata: ', arrayData)
                //
                setProducto(arrayData)

                //console.log('producto: ', id, producto);

            } catch (error) {
                console.log('FALLO en:', error)
            }
        }
        obtenerDatos()

        const obtenerPrecios = async () => {

            try {

                const db = firebase.firestore()
                const docsPrices = []; //Inicializamos objeto de precios                        

                const reff = db?.collection(`products/${id}/prices`)   //Accedemos a la colleccion PRECIOS dentro de PRODUCTOS de la BD
                reff.onSnapshot((queryPrices) => {
                    queryPrices.forEach((docPrice) => { //Recorremos el query de precios     

                        docsPrices?.push({ ...docPrice.data(), id: docPrice.id }); //empujamos la data de cada producto + id + PRICES
                        //console.log("PRecios FInal: ", precios)

                    });

                    //console.log("docsPrices", docsPrices)
                    setPrecios(docsPrices) //seteamos al state productos el array docsPrices

                })


                //const arrayData = doc.data()
                //

                // db.collection(`products/${props.producto.id}/prices`).get().then((subCollectionSnapshot) => {
                //   subCollectionSnapshot.forEach((subDoc) => {
                //     console.log(subDoc.data());
                //   });
                // });

                // setPrecios(arrayData)

                //console.log('PRECIOS: ', props.producto.id, arrayData);

            } catch (error) {
                console.log('FALLO en:', error)
            }
        }
        obtenerPrecios()

        console.log(precios)

    }, [id])

    
    return <div>

        {/* <BannerVideo producto={producto} /> */}
        {/* <PageHeader producto={producto} /> */}

        <ProductPrices producto={producto} precios={precios} />

        {/* <TourDetails producto={producto} variants={producto.vaiantes} /> */}
        <Subscribe />
        <Footer />

    </div>
}

export default ProductDetailsPage

