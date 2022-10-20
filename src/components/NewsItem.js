import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="container p-0 shadow-lg">
        
        <div className="card bg-light p-2">
        <span className="position-absolute top-0 translate-middle badge bg-danger rounded-pill" style={{left:"85%", zIndex:"1"}}>{source}</span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif"
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">
              {title
                ? title.length > 40
                  ? title.slice(0, 40) + ". . ."
                  : title
                : ""}
            </h5>
            <p className="card-text">
              {description
                ? description.length > 80
                  ? description.slice(0, 80) + ". . ."
                  : description
                : ""}
            </p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "an unknown source"} on {" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-dark shadow-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
