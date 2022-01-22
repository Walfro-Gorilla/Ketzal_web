import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/Page_header'
import TourDetails from './section-components/tour-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { useParams } from 'react-router-dom';

//Importamos firebase
import {firebase} from '../firebase'


const TourDetailsPage = () => {

    //Obtenemos el ID del url
    const {id} = useParams();

          
    
   //conectamos a la BD y obtenemos datos al cargar el componente
   React.useEffect(() => {

    const obtenerDatos = async () => {

        try {

            const db = firebase.firestore()
            const doc = await db.collection('clcServicios').doc(id).get()
            const servicioData = doc.data() 
            console.log('aaraydta: ',servicioData)
            //
            

            console.log('Servicio: ',id,servicioData.servicio);
            
        } catch (error) {
            console.log('FALLO en:',error)                
        }

    }

    obtenerDatos()
}, [])

    

    return <div>
        <Navbar />
        <PageHeader data= {servicioData}/>
        <TourDetails />
        <Subscribe />
        <Footer />
    </div>
}

export default TourDetailsPage

