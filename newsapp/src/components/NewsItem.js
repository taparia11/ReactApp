import React from 'react'
// import Button from '@mui/material/Button';

 const NewsItem = (props) => {

   

   
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small>
                            </p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                            {/* <Button href="#text-buttons" variant="contained" size='small'>Read More</Button> */}

                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem