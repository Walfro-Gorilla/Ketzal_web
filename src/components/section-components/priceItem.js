import React from 'react'

import { useCarritoContext } from '../../context/carritoContext'
import { useUserContext } from '../../context/userContext'


const PriceItem = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    const { carrito, setCarrito } = useCarritoContext();
    const { user } = useUserContext();


    function addToCart() {
        setCarrito([...carrito, props.precio])
       // console.log(carrito)
    }

    function isAuthenticated() {
        if(user){
            //correr funcion de compra            
        }
        if(!user){
            //redirigir login modal
        }
    }

    return (
        <div className="col-lg-4 col-md-6">

            <div className="single-trip-plan">
                <div className="thumb single-trip-plan-left">
                    <img src={publicUrl + "assets/img/others/6.png"} alt="blog" />
                </div>
                <div className="single-trip-plan-right">
                    <ul className="tp-list-meta border-bt-dot">
                        <li>
                            <button onClick={addToCart}  className="btn btn-yellow" type="button">+ carrito</button>
                        </li>
                        <li>
                            <button onClick={isAuthenticated} className="btn btn-yellow" type="button">Comprar</button>
                        </li>


                    </ul>
                    <div className="tp-price-meta tp-price-meta-cl">
                        <p>Precio:</p>
                        <h2>{props.precio.unit_amount / 100} <small>$</small></h2>
                        <del>620<span>$</span></del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceItem