import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    titleCapitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }

        document.title  = `${this.titleCapitalize(this.props.category)} --- NewsApp`
    }

    newsData = async() => {
        this.props.setProgress(10);
        let newsApiEndpoint = `${process.env.REACT_APP_API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // console.log("url>> ", newsApiEndpoint)
        let data = await fetch(newsApiEndpoint)
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(60);
        // return parsedData
        console.log("parsed Data > ", parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }

 async componentDidMount() {
        this.newsData()
    }

    

    // prevBtnClickHandler = async () => {
    //     console.log("prev btn clicked !!!")
    //     await this.setState({page:this.state.page-1})
    //     this.newsData()

    // }
    // nextBtnClickHandler = async () => {
    //     console.log("nxt btn clicked !!!", this.state.page)
    //     await this.setState({page:this.state.page+1})
    //     this.newsData()
    // }

    fetchMoreData = async () => {
        this.setState({page:this.state.page + 1})
        let newsApiEndpoint = `${process.env.REACT_APP_API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // console.log("url>> ", newsApiEndpoint)
        let data = await fetch(newsApiEndpoint)
        let parsedData = await data.json()
        // return parsedData
        console.log("parsed Data > ", parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })

        // this.setState((prevState) => ({
        //     page: prevState.page+1,
        //     articles: prevState.articles.concat(this.state.articles)
        // }))

        // this.newsData()
      };

  render() {
    // console.log("this.state.articles >>>>> ", this.state.articles)
    return (
      <>
        <div className="container my-3">
                    <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4>Loading...</h4>}
                    key={this.state.articles.length}
                    >
            <div className="row">
                            {
                                this.state.articles?.map((ele) => {
                                    return <div className="col-md-3 my-3" key={ele.url}>
                                                <NewsItem title={ele.title?ele.title.slice(0,30):""} description={ele.description?ele.description.slice(0,50):""} newsUrl={ele.url || ""} imageUrl={ele.urlToImage || ""}/>
                                            </div>
                                })
                            }
            </div>
                </InfiniteScroll>
            
        </div>
      </>
    )
  }
}

export default News;