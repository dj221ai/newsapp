import React, { Component } from "react";


export class NewsItem extends Component {
    render(){
        let {title, description, newsUrl, imageUrl} = this.props;
        return(
            <>
                <div className="card mx-3" style={{width: "18rem"}}>
                    <img className="card-img-top mx-3" src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read full</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
