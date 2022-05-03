import logo from '../../logo.svg';
import './App.css';
import React from 'react'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// var businesses = [business,business,business,business,business,business];

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses)=>{
      // console.log(businesses)
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    console.log(this.state.businesses)
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/> 
      </div>
    );
  }
}

export default App;
