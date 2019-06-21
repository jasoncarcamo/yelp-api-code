
import React from 'react';
import './App.css';
import BusinessList from './components/BussinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './Yelp';






class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: [],
      error: 'Input where the business is located'
    }
  }

  searchYelp = (term, location, sortBy)=>{
    
    Yelp.search(term,location,sortBy).then(businesses=>{
      this.setState({
        businesses
      })
    })
  }


  render() {
    

    return (
      <div className="App">
  <h1>Yelp</h1>
  <h2>{process.env.API_KEY}</h2>
  <SearchBar searchYelp={this.searchYelp}/>
  <BusinessList business={this.state.businesses}/>
</div>
    );
  }
}

export default App;
