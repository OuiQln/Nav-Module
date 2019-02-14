import React from 'react';
import sl from './selection.css';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      query: '',
      list: []
    }
    this.handleInput=this.handleInput.bind(this);
    this.fetchList=this.fetchList.bind(this); 
  }

  handleInput (e) {
    this.setState({
      query: e.target.value
    })
    console.log(this.state.query);
  }
  fetchList () {
    //get
    event.preventDefault();
    const type=this.state.query;
    axios
      .get(`/api/search/${type}`)
      .then(({ data }) => {
        this.setState({ list: data });
        console.log(this.state.list);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render(){
    return(
      <div className={sl.searchContainer}>
        <div className={sl.searchbar}>
          <form onSubmit={this.fetchList}>
            <input class={sl.searchBox} type="search" name='pants' placeholder="Search" 
              onChange={this.handleInput}
              />
          </form>  
            <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo" width="25" height="25" /></div>
        </div>
        
        <div className={sl.dropdowns}>
          <ul>
            {this.state.list.map(item => {
              return <div className={sl.itemlist}>
                <img src={item.product_image} alt='img' width="120px" height="120px"/> 
                <p> {item.product_description}</p>
                <li>{item.product_price}</li>
              </div>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Search;