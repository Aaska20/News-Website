import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}</span>
          <img src={!imageUrl?"https://static.seekingalpha.com/cdn/s3/uploads/getty_images/2214651343/image_2214651343.jpg?io=getty-c-w630":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="text-body"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>   
      </div>
    )
  }
}

export default NewsItems