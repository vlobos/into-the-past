import React from "react";

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  render (){
    return (
      <section className="search__bar">
        <input id="search__input" type="search" name="keyword__search" placeholder="Type..."></input>

        <button onClick={this.props.handleSearch}>o</button>
      </section>
    )
  }
}

export default SearchBar;