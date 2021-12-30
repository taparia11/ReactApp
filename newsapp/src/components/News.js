import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Button from '@mui/material/Button';

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2><center>Khebar Aapki - Top Headlines</center></h2>
                <div className="row">
                <div className="col-md-4">
                <NewsItem title='mytitle' description='mydescription' imageUrl='https://cdn.slashgear.com/wp-content/uploads/2021/12/PS5_console.jpg'/>
                </div>
                <div className="col-md-4">
                <NewsItem title='mytitle' description='mydescription' imageUrl='https://cdn.slashgear.com/wp-content/uploads/2021/12/PS5_console.jpg'/>
                </div>
                <div className="col-md-4">
                <NewsItem title='mytitle' description='mydescription' imageUrl='https://cdn.slashgear.com/wp-content/uploads/2021/12/PS5_console.jpg'/>
                </div>
                <Button variant="contained">Success</Button>
                </div>
            </div>
        )
    }
}
