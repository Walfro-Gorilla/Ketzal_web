import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Search from './section-components/search';
import Intro from './section-components/intro';
import Offer from './section-components/offer';
import Video from './section-components/video';
import HolidayPlan from './section-components/holiday-plan';
import Review from './section-components/review';
import BlogSection from './blog-components/blog-section';
import Ads from './section-components/ads';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

import Product from './section-components/productItem';


//Importamos firebase
import { firebase } from '../firebase'

const Home_V1 = () => {

    //inicialzacion de STATES
    const [servicios, setServicios] = React.useState([]) //Servicios
    const [productos, setProductos] = React.useState([]) //Productos
    const [productPrice, setProductPrice] = React.useState([])// Precios

    //conectamos a la BD y obtenemos datos al cargar el componente
    React.useEffect(() => {

        const db = firebase.firestore()



        //---------OBTENER SERVICIOS---------//

        // const obtenerDatos = async () => {
        //     try {
        //         db.collection('clcServicios')
        //             .where('habilitado', '==', true)
        //             .onSnapshot((queryProducts) => {
        //                 const docsProducts = [];
        //                 queryProducts.forEach((doc) => {
        //                     docsProducts.push({ ...doc.data(), id: doc.id });
        //                 });
        //                 setServicios(docsProducts)
        //             })
        //         //const arrayData = docsProducts.map(doc => ({ id: doc.id, ...doc.data() }))
        //         //console.log(arrayData)
        //         //
        //     } catch (error) {
        //         console.log('FALLO en:', error)
        //     }
        // }
        // obtenerDatos()



        //---------OBTENER PRODUCTOS---------//

        const obtenerProductos = async () => {
            try {
                db?.collection('products')   //Accedemos a la colleccion PRODUCTS de la BD
                    .where('active', '==', true) //donde sean ACTIVE=TRUE
                    .onSnapshot((queryProducts) => {
                        const docsProducts = []; //Inicializamos objeto de Products                        
                        queryProducts.forEach((docProduct) => { //Recorremos el query de productos     


                            // db?.collection(`products/${docProduct.id}/prices`) //Accedems a la colleccion de PRICES segun .ref de PRODUCTO
                            // .onSnapshot((queryPrices) => {
                            //     const docsPrices = []; // inicializamos objeto de PRICES
                            //     queryPrices.forEach((docPrice) => { //recorremos cada precio
                            //         docsPrices.push({ ...docPrice.data(), id: docPrice.id }) // empujamos data de cada precio al objeto d eprecios
                            //     })
                            //     setProductPrice( {...docsPrices} ) // seteamos al state productPrices el array docsPrices
                            //     //         //console.log("docsPrices", docProduct.id, docsPrices)
                            //     //         //console.log(`precio ${doc.id}:`, prices[0].unit_amount)
                            // })


                            docsProducts.push({ ...docProduct.data(), id: docProduct.id }); //empujamos la data de cada producto + id + PRICES
                            //console.log("PRecios FInal: ", precios)
                        });

                        //console.log("docsProducts", docsProducts)
                        setProductos(docsProducts) //seteamos al state productos el array docsProducts

                    })
                //const arrayData = docsProducts.map(doc => ({ id: doc.id, ...doc.data() }))
            } catch (error) {
                console.log('FALLO en:', error)
            }

        }
        obtenerProductos()

    }, [])
    //console.log("productPrice", productPrice)
    //console.log('PRODUCTS: ', productos)

    return <div>
        <Banner />
        <Search />
        {/* <Intro /> */}
        <React.StrictMode>
            <Offer servicios={servicios} />
        </React.StrictMode>

        {/* Mapeamos todos los servicios en un contenedor */}
        <div className="destinations-list-slider">
            {
                productos.map((producto) => {
                    return (
                        <Product producto={producto} key={producto.id} />
                    )
                })
            }
        </div>



        <ul>
            {productos ? productos.map((p) => <li key={p.id}>
                {p.name}</li>) : null}
        </ul>

        <Video />
        <HolidayPlan servicios={servicios} />
        <Review />
        {/* <BlogSection /> */}
        {/* <Ads /> */}
        <Subscribe />
        <Footer />
    </div>
}

export default Home_V1

