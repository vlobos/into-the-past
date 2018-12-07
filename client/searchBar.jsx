import React from "react";

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  render (){
    return (
      <header className="search__bar">
        <input id="search__input" type="search" name="keyword__search" placeholder="Look into the past..."></input>
        <button className="search__btn" onClick={this.props.handleSearch}></button>
      </header>
    )
  }
}

export default SearchBar;