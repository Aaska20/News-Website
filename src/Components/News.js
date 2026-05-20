import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    pageSize:PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
         articles: [],
         loading: false,
         page:1
    }
  }

  async componentDidMount(){
    let url;

      if (this.props.search) {

        url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=1&pageSize=9`;

      } else {

        url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=1&pageSize=9`;

      }
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false})
  }

  handlePrevClick = async ()=>{
    let url;

    if (this.props.search) {

      url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=${this.state.page - 1}&pageSize=9`;

    } else {

      url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=${this.state.page - 1}&pageSize=9`;

    }
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
          loading: false
      })
  }

  handleNextClick = async ()=>{
     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      
      let url;

      if (this.props.search) {

        url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=${this.state.page + 1}&pageSize=9`;

      } else {

        url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6f6c61de69c8479ab31d4bce8a1cd752&page=${this.state.page + 1}&pageSize=9`;

      }
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        })
  }
    }
  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          {this.props.search
            ? `Search Results for "${this.props.search}"`
            : "NewsNova - Top Headlines"}
        </h1>

        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
           return (
            <div className="col-md-4" key={element.url}>    
                <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>   
          )
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News