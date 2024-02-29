// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationDetails} = this.props
    const searchResults = destinationDetails.filter(eachDestination =>
      eachDestination.name
        .toLowerCase()
        .includes(eachDestination.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image-icon"
            />
          </div>
          <ul>
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
