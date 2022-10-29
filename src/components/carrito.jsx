import React from 'react'
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/carritoContext'
import { useUserContext } from '../context/userContext';
import ButtonWA from './blog-components/buttonWA';
import product from './section-components/productItem';
import { Modal } from 'antd';
import { useState } from 'react';



const Carrito = () => {

    const { carrito } = useCarritoContext();
    const { user } = useUserContext();

    const [isModalOpen, setIsModalOpen] = useState(false)



    // console.log(carrito)

    function isAuthenticated() {
        if (user) {
            //correr funcion comprar
        }
        if (!user) {
            //abrir modal login
            showModal()
        }

    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <br />
            <br />
            <hr />

            Tu Carrito:
            {carrito?.map((producto) => (
                <p>{producto.id} </p>
            ))}
            <div>
                <button onClick={() => isAuthenticated()} className="btn btn-yellow" type="button">Comprar</button>
                <Link to="/" > Go back</Link>
            </div>
            
                <Modal title="Basic Modal" open={isModalOpen} onOk={() => handleOk} onCancel={() => handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
             
        </div>
    )
}

export default Carrito