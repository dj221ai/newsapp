import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
    }

 async componentDidMount() {
        let newsApiEndpoint = `${process.env.REACT_APP_API_URL}?country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        console.log("url>> ", newsApiEndpoint)
        let data = await fetch(newsApiEndpoint)
        let parsedData = await data.json()
        console.log("parsed Data >> ", parsedData.articles);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })

    }

    newsData = async(page, pageSize) => {
        let newsApiEndpoint = `${process.env.REACT_APP_API_URL}?country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${pageSize}`
        // console.log("url>> ", newsApiEndpoint)
        let data = await fetch(newsApiEndpoint)
        let parsedData = await data.json()
        // return parsedData
        this.setState({
            articles: parsedData.articles
        })

    }

    prevBtnClickHandler = () => {
        console.log("prev btn clicked !!!")
        this.setState({
            page:this.state.page-1
        })
        console.log("page prev >> ", this.state.page)

    }
    nextBtnClickHandler = () => {
        console.log("nxt btn clicked !!!", this.state.page)
        this.setState({
            page:this.state.page+1
        })

        // if (!(this.state.page > Math.ceil(this.props.pageSize))){
        //     this.newsData(this.state.page, this.props.pageSize)
        // }

        console.log("page nxt >> ", this.state.page)

    }

  render() {
    // console.log("this.state.articles >>>>> ", this.state.articles)
    return (
      <>
        <div className="container my-3">
            <div className="row">
                {
                    this.state.articles.map((ele) => {
                        return <div className="col-md-3 my-3" key={ele.url}>
                                    <NewsItem title={ele.title?ele.title.slice(0,30):""} description={ele.description?ele.description.slice(0,50):""} newsUrl={ele.url || ""} imageUrl={ele.urlToImage || ""}/>
                                </div>
                    })
                }
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevBtnClickHandler}>Previous</button>
                <button disabled={this.state.page > Math.ceil(this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextBtnClickHandler}>Next</button>
            </div>
        </div>
      </>
    )
  }
}

export default News;