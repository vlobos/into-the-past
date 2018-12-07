import React from "react";

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }
  render () {

    let events = this.props.data.map(function(event,index){
      return (
        <div className="result__event" key={index}>
          <div className="event__date">
            {event.date}
          </div>
          <div className="event__desc">
            {event.description}
          </div>
        </div>
      )
    })
    return (
      <React.Fragment>
        <main className="search__results">
          <section>{events}</section>
        </main> 
      </React.Fragment>
    )
  }
}

export default SearchResults;

