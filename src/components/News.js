import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

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


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
    }

    newsData = async() => {
        let newsApiEndpoint = `${process.env.REACT_APP_API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // console.log("url>> ", newsApiEndpoint)
        let data = await fetch(newsApiEndpoint)
        let parsedData = await data.json()
        // return parsedData
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

 async componentDidMount() {
        this.newsData()
    }

    

    prevBtnClickHandler = async () => {
        console.log("prev btn clicked !!!")
        await this.setState({page:this.state.page-1})
        this.newsData()
        // this.setState({ page: this.state.page - 1 }, () => 
        // this.newsData())
        console.log("page prev >> ", this.state.page)

    }
    nextBtnClickHandler = async () => {
        console.log("nxt btn clicked !!!", this.state.page)
        await this.setState({page:this.state.page+1})
        this.newsData()

        // if (!(this.state.page > Math.ceil(this.props.pageSize))){
        //     this.newsData()
        // }
        // this.setState({ page: this.state.page + 1 }, () => 
        // this.newsData())

        console.log("page nxt >> ", this.state.page)

    }

  render() {
    // console.log("this.state.articles >>>>> ", this.state.articles)
    return (
      <>
        <div className="container my-3">
            <div className="row">
                {
                    this.state.articles?.map((ele) => {
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