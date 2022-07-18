import React from 'react'

const incluyeFicha = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    console.log('Props incluye: ',props)
    return (

        <div className="col-xl-3 col-sm-3 col-6">
            <div className="single-package-included">
                <img src={publicUrl + "assets/img/icons/15.png"} alt="icons" />
                <h6> {props.item} </h6>
            </div>
        </div>

    )
}

export default incluyeFicha