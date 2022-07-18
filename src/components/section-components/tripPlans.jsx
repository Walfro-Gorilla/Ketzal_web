import React from 'react'

const tripPlans = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <>
            {/* trip-plan start */}
                             
                    

                    <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                            <div className="thumb single-trip-plan-left">
                                <img src={publicUrl + "assets/img/others/6.png"} alt="blog" />
                            </div>
                            <div className="single-trip-plan-right">
                                <ul className="tp-list-meta border-bt-dot">
                                    <li><i className="fa fa-calendar-o" /> 8oct</li>
                                    <li><i className="fa fa-clock-o" /> 4 days</li>
                                    <li><i className="fa fa-star" /> 4.3</li>
                                </ul>
                                <div className="tp-price-meta tp-price-meta-cl">
                                    <p>Precio:</p>
                                    <h2> { props.item.contado } <small>$</small></h2>
                                    <del> { props.item.costo } <span>$</span></del>
                                </div>
                            </div>
                        </div>
                    </div>

                
            {/* trip-plan End */}

        </>
    )
}

export default tripPlans