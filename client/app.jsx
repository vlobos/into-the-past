import React from "react";
import SearchBar from "./searchBar.jsx";
import SearchResults from "./searchResults.jsx";
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      data:[],
      view: "search",
      keyword: ""
    }
  }

  componentDidMount(){
    console.log("Component Did Mount")
  }

  //handle initial search query, get 1st page (set of results)
  handleSearch = () => {
    let keyword = document.getElementById("search__input").value;
    axios.get(`http://localhost:3000/events?q=${keyword}&_page=1`)
      .then((results) => {
        let totalCount = results.headers['x-total-count'];
        let pages = Math.ceil(totalCount/10)
        this.setState({
          data: results.data,
          view: "results",
          keyword: keyword,
          pages: pages
        })
      })
  }

  //handle changing pages, same keyword for query
  handlePageClick = (data) => {
    let pageNum = data.selected + 1
    axios.get(`http://localhost:3000/events?q=${this.state.keyword}&_page=${pageNum}`)
      .then((results) => {
        this.setState({
          data: results.data,
          view: "results"
        })
      })
  }

  render (){
    if(this.state.view === 'search'){
      return ( 
        <div className="app__container__search">
        <SearchBar handleSearch={this.handleSearch}/>
      </div>
      )
    } else {
      return(
        <div className="app__container__results">
          <SearchBar handleSearch={this.handleSearch}/>
          <SearchResults data={this.state.data} handlePageClick={this.handlePageClick} pages={this.state.pages}/>
        </div>
      ) 
    }
  }
}

export default App;