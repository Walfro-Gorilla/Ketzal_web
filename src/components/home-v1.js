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

//Importamos firebase
import { firebase } from '../firebase'

const Home_V1 = () => {

    //STATE de servicios activos
    const [servicios, setServicios] = React.useState([])

    //conectamos a la BD y obtenemos datos al cargar el componente
    React.useEffect(() => {

        const obtenerDatos = async () => {

            try {

                const db = firebase.firestore()
                db.collection('clcServicios')
                    .where('habilitado', '==', true)
                    .onSnapshot((querySnapshot) => {
                        const docs = [];
                        querySnapshot.forEach((doc) => {
                            docs.push({ ...doc.data(), id: doc.id });
                        });
                        setServicios(docs)
                    })
                //const arrayData = docs.map(doc => ({ id: doc.id, ...doc.data() }))
                //console.log(arrayData)
                //

            } catch (error) {
                console.log('FALLO en:', error)
            }

        }

        obtenerDatos()
    }, [])

    return <div>
        <Banner />
        <Search />
        {/* <Intro /> */}
        <React.StrictMode>
            <Offer servicios={servicios} />

        </React.StrictMode>
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

