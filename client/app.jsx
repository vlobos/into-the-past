import React from "react";
import SearchBar from "./searchBar.jsx";
import SearchResults from "./searchResults.jsx";
import Footer from './footer.jsx';
import axios from 'axios';
import "./style.css"

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
    if(keyword.length===0){
      this.setState({
        keyword: null
      })
    } else {
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
    //handle no keyword
    if(this.state.keyword=== null){
      return ( 
        <main className="app__container__search">
          <div className="input__error">Ooops....please enter a valid search word!</div>
          <SearchBar handleSearch={this.handleSearch}/>
        </main>
      )
    }
    //handle no results
    if(this.state.pages === 0){
      return ( 
        <main className="app__container__search">
          <div className="input__error">Sorry! Nothing found!</div>
          <SearchBar handleSearch={this.handleSearch}/>
        </main>
      )
    }

    if(this.state.view === 'search'){
      return ( 
        <main className="app__container__search">
          <SearchBar handleSearch={this.handleSearch}/>
        </main>
      )
    } else {
      return(
        <React.Fragment>
          <SearchBar handleSearch={this.handleSearch}/>
          <SearchResults data={this.state.data}/>
          <Footer pages={this.state.pages} handlePageClick={this.handlePageClick}/>
        </React.Fragment>
      ) 
    }
  }
}

export default App;