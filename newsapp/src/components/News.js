import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Button from '@mui/material/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static default = {
        country: "in",
        pageSize: 6,
        category: "general"
    }
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

constructor(props){
    super(props);
    this.state = {
        articles: [],
        loading: false,
        page:1,
    }
    document.title = `${this.props.titleChange} - Khebar Aapki`;
}

async updateNews(){
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20);
    this.setState({loading:true});
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json()
    this.props.setProgress(80);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
    this.props.setProgress(100);
}

fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json()
     this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading:false})
  };

async componentDidMount(){
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fad0c0d80714e99b458b2c602716dbb&page=1&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true});
    //  let data = await fetch(url);
    //  let parsedData = await data.json()
    //  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
    this.updateNews();
}

handleNextClick = async ()=>{
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fad0c0d80714e99b458b2c602716dbb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }
    
    handlePreviousClick = async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fad0c0d80714e99b458b2c602716dbb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading:false
    //    }) 
    this.setState({page: this.state.page - 1})
    this.updateNews();
    }

render() {
    return (
        <div className='container my-3'>
            <h2><center>Khebar Aapki - Top {this.props.titleChange==='Top Headlines'?"":this.props.titleChange} Headlines</center></h2>
            {/* {this.state.loading && <Spinner/>} */}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={this.state.page===1?"":<Spinner/>}
            >

                <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {
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
            <Button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} variant="contained" size='small'>Next Page &rarr;</Button>
            </div> */}
        </div>
    )
}
}
