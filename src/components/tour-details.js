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


const TourDetailsPage = () => {

    //Obtenemos el ID del url
    const { id } = useParams();
    const [servicio, setServicio] = React.useState([])

    //conectamos a la BD y obtenemos datos al cargar el componente
    React.useEffect(() => {

        const obtenerDatos = async () => {

            try {

                const db = firebase.firestore()
                const doc = await db.collection('clcServicios').doc(id).get()
                const arrayData = doc.data()
                //console.log('Arraydata: ', arrayData)
                //
                setServicio(arrayData)

                // console.log('Servicio: ', id, arrayData.servicio);

            } catch (error) {
                console.log('FALLO en:', error)
            }
        }
        obtenerDatos()
    }, [])

    return <div>

        <BannerVideo servicio={servicio} />
        {/* <PageHeader servicio={servicio} /> */}

        <TourDetails servicio={servicio} variants={servicio.vaiantes} />
        <Subscribe />
        <Footer />
        
    </div>
}

export default TourDetailsPage

