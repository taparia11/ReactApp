import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
// import Button from '@mui/material/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News (props) {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${props.titleChange} - Khebar Aapki`;
    
    const updateNews = async ()=>{
    props.setProgress(0);
    // const url = `https://gnews.io/api/v4/search?q=${props.category}&token=${props.apiKey}&lang=hi`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(20);
    setLoading(true)
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json()
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
}

const fetchMoreData = async () => {
    
    // const url = `https://gnews.io/api/v4/search?q=${props.category}&token=${props.apiKey}&lang=hi`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    //  this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
};

useEffect(() => {
    document.title = `${props.titleChange} - Khebar Aapki`;
    updateNews();
    //eslint-disable-next-line
}, [])


// const handleNextClick = async ()=>{
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
            //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fad0c0d80714e99b458b2c602716dbb&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
            //         this.setState({loading:true});
            //         let data = await fetch(url);
            //         let parsedData = await data.json()
            //         console.log(parsedData);
            //         this.setState({
            //             page: this.state.page + 1,
            //             articles: parsedData.articles,
            //             loading:false
            //         })
            //     }
    // setPage(page+1)
    // updateNews();
    // }
    
    // const handlePreviousClick = async ()=>{
            //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7fad0c0d80714e99b458b2c602716dbb&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
            //     this.setState({loading:true});
            //     let data = await fetch(url);
            //     let parsedData = await data.json()
            //     console.log(parsedData);
            //     this.setState({
            //         page: this.state.page - 1,
            //         articles: parsedData.articles,
            //         loading:false
            //    }) 
    // setPage(page-1)
    // updateNews();
    // }


    return (
        <div className='container my-3'>
            <h2 style={{marginTop: '70px'}}><center>Khebar Aapki - Top {props.titleChange==='Top Headlines'?"":props.titleChange} Headlines</center></h2>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={page===1?"":<Spinner/>}
            >

                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author ? element.author : element.source.name} date={element.publishedAt.slice(0, 10)} source={element.source.name}
                                />
                            </div>
                        })}

                    </div>
            
            </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>
            <Button disabled={this.state.page<=1} onClick={this.handlePreviousClick} variant="contained" size='small'>&larr; Previous Page</Button>
            <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} onClick={this.handleNextClick} variant="contained" size='small'>Next Page &rarr;</Button>
            </div> */}
        </div>
    )

}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}