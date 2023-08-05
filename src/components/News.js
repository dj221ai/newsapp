import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
          "source": {
            "id": "nhl-news",
            "name": "NHL News"
          },
          "author": "Fantasy Hockey Staff",
          "title": "Boston Bruins fantasy projections for 2023-24",
          "description": "As part of NHL.com's 32 in 32 series, the fantasy hockey staff put together projections for relevant players on the Boston Bruins.",
          "url": "https://www.nhl.com/news/boston-bruins-fantasy-projections-for-2023-24/c-345496480",
          "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/345498440/1024x576/cut.jpg",
          "publishedAt": "2023-08-03T04:00:00Z",
          "content": "As part of NHL.com's 32 in 32 series, the fantasy hockey staff put together projections for relevant players on the Boston Bruins. Players are listed in order of fantasy rank for this season. For mor… [+2697 chars]"
        },
        {
          "source": {
            "id": "nhl-news",
            "name": "NHL News"
          },
          "author": "Adam Kimelman",
          "title": "Couturier, Atkinson expected to be ready for Flyers training camp",
          "description": "Sean Couturier and Cam Atkinson are expected to be on the ice for the Philadelphia Flyers when training camp begins next month, according to Flyers president of hockey operations Keith Jones.",
          "url": "https://www.nhl.com/news/philadelphia-flyers-sean-couturier-cam-atkinson-injury-status/c-345506964",
          "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/345507166/1024x576/cut.jpg",
          "publishedAt": "2023-08-02T21:20:00Z",
          "content": "PLYMOUTH, Mich. --Sean Couturier and Cam Atkinson are expected to be on the ice for the Philadelphia Flyers when training camp begins next month, according to president of hockey operations Keith Jon… [+3692 chars]"
        }
      ]
    constructor() {
        super();
        console.log("news constructor!!! ")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <>
        <div className="container my-3">
            <div className="row">
            {
                this.state.articles.map((ele) => {
                    return <div className="col-md-3 my-3" key={ele.url}>
                                <NewsItem title={ele.title.slice(0,30)} description={ele.description.slice(0,50)} newsUrl={ele.url} imageUrl={ele.urlToImage}/>
                            </div>
                })
            }
            </div>
        </div>
      </>
    )
  }
}

export default News;