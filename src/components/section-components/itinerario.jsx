import React from 'react'

const itinerario = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'

  console.log('estos son los props: ',props)


    return (
        <div className="col-lg-3 col-md-3 col-6">
            <div className="single-blog">
                <div className="p-list">
                    <div className="list">{ props.count } </div>
                    <p>Dia { props.count } </p>
                </div>
                <div className="thumb">
                    <img src={ props.item.img } alt="blog" />
                </div>
                <div className="single-blog-details">
                    <h4 className="title"> { props.item.titulo } </h4>
                    <p className="content">  { props.item.fecha }-{ props.item.desc } </p>
                    {/* <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a> */}
                </div>
            </div>
        </div>
    )
}

export default itinerario