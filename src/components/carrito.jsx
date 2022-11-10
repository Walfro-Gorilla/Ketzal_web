import React from 'react'
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/carritoContext'
import { useUserContext } from '../context/userContext';
import ButtonWA from './blog-components/buttonWA';
import product from './section-components/productItem';
import { Modal, Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import loginEmail from '../functions/loginEmail';


import createCheckoutSession from '../functions/createCheckoutSession';


const Carrito = () => {

    const { carrito } = useCarritoContext();
    const { user } = useUserContext();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log("Carrito: ", carrito)

    // console.log(carrito)

    function isAuthenticated() {
        if (user) {
            //correr funcion comprar
            console.log("LOGEADO")
            createCheckoutSession(user.uid, carrito )
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

    //Funciones del form

    const onFinish = () => {
        loginEmail(email, password)
        console.log('Success:');
        setIsModalOpen(false)
        createCheckoutSession(user.uid, carrito)
    };

    const onFinishFailed = () => {
        console.log('Failed:');
    };

    const setUsuario = (e) => {
        setEmail(e.target.value)
        console.log("Email: ", email)
    }
    const setPass = (e) => {
        setPassword(e.target.value)
        console.log("Pass: ", password)
    }

    console.log("USer desde carrito: ", user)

    return (
        <div>
            <br />
            <br />
            <hr />

            Tu Carrito:
            {carrito?.map((producto) => (
                <p key={producto.id}>{producto.id} | {producto.unit_amount}</p>
            ))}
            <div>
                <button onClick={isAuthenticated} className="btn btn-yellow" type="button">Comprar</button>
                <Link to="/" > Go back</Link>
            </div>

            <Modal title="Inicia sesion o registrate:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Usuario"
                        name="username"
                        rules={[{ required: true, message: 'Ingresa tu usuario' }]}
                    >
                        <Input onChange={e => setUsuario(e)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Ingresa tu password' }]}
                    >
                        <Input.Password onChange={e => setPass(e)} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Recuerdame</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}

export default Carrito