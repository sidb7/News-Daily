import React, { Component } from 'react'

export default class NewsItem extends Component {
  
    render() {
        let {title,description,imageUrl,newsUrl,mode,date,author}  = this.props;
        return (
            <div className='justify-content-center align-content-center d-grid my-4 ' >
               <div className={` card  bg-${mode}`} >
                    <img src={imageUrl} className="card-img-top  " style={{height: "220px"}}   alt="..." />
                    <div className="card-body ">
                    
                        <h5 className="card-title">{title}</h5>
                        <p style={{fontSize:'15px',color:"gray"}}>By {author} - {new Date(date).toGMTString()}</p>
                        <p className="card-text">{description}...</p>
                       
                        <div className='m-5'>
                            
                        <a href={newsUrl} rel="noreferrer" target ="_blank" className="m-2 btn btn-sm btn-dark border border-2 rounded-3 position-absolute bottom-0 end-0">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
