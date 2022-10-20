import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  // handleNextClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&apiKey=${this.props.apiKey}&pageSize=${
  //     this.props.pageSize
  //   }&page=${this.state.page + 1}&category=${this.props.category}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   //console.log(parsedData.articles.length);
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page + 1,
  //     loading: false
  //   });
  // };
  // handlePrevClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&apiKey=${this.props.apiKey}&pageSize=${
  //     this.props.pageSize
  //   }&page=${this.state.page - 1}&category=${this.props.category}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   //console.log(parsedData.articles.length);
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading: false
  //   });
  // };
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData.articles.length);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      loading:false
    });
  };
  render() {
    return (
      <>
        <h3 className="text-center">
          <strong>News Feed - Top {this.props.titleEdit} Head Lines</strong>
        </h3>

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map(element => {
                return (
                  <div className="col-sm-4 p-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : "Title"}
                      description={
                        element.description
                          ? element.description
                          : "description"
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
