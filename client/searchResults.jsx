import React from "react";

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }
  render () {

    let events = this.props.data.map(function(event,index){
      return (
        <div className="results__event" key={index}>
          <div className="results__event__date">
            {event.date}
          </div>
          <div className="results__event__desc">
            {event.description}
          </div>
        </div>
      )
    })
    return (
      <React.Fragment>
        <main className="results">
          <section>{events}</section>
        </main> 
      </React.Fragment>
    )
  }
}

export default SearchResults;

