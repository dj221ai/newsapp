import React, { Component } from "react";


export class NewsItem extends Component {
    render(){
        let {title, description, newsUrl, imageUrl} = this.props;
        return(
            <>
                <div className="card">
                    <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
