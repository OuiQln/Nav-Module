import React from 'react';
import sl from './selection.css';
import axios from 'axios';
const INPUT_TIMEOUT = 400;

class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      query: '',
      list: [],
      predictions: []
    }
    this.handleInput=this.handleInput.bind(this);
    this.fetchList=this.fetchList.bind(this); 
  }
  getPredictions(value) {
    // let's say that it's an API call
    return [
      'PANTS',
      'SWEATER',
      'SHIRTS',
    ].filter(item => item.toUpperCase().indexOf(value.toUpperCase()) !== -1);
  }

  handleInput (e) {
    clearTimeout(this.timeout);// clear timeout when input changes value
    const query=e.target.value;
    this.setState({
      query
    })
    // console.log(this.state.query);
    if (query.length > 0) {
      // make delayed api call
      this.timeout = setTimeout(() => {
        const predictions = this.getPredictions(query);
        this.setState({
          predictions
        });
      }, INPUT_TIMEOUT);
    } else {
      this.setState({
        predictions: []
      });
    }
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

    const listArr = this.state.list;

    return(
      <div className={sl.searchContainer}>
        <div className={sl.searchbar}>
          <form onSubmit={this.fetchList}>
            <input class={sl.searchBox} type="search" value={this.state.query} placeholder="Search" 
              onChange={this.handleInput}
              />
          </form>  
            <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo" width="25" height="25" /></div>
        </div>

        <div className={sl.predict}>
          {
            this.state.predictions.map((item, index) => (
              <div key={index + item}> DO YOU MEAN ? <br /> <br /> {item} <br /> <br /> 
                CATEGORIES <br /> <br />
                MEN > UNIQLO U > {item} <br /> 
                BOYS > {item} AND SHORTS > {item} <br /> 
                BABY > {item} AND LEGGINGS > {item} <br /> 
                MEN > FLEECE > BLOCKTECH FLEECE > <br /> 
                {item}<br /> 
                MEN > {item} <br /> 
                WOMEN > {item} <br /> 
                GIRLS > ONLINE EXCLISIVES > {item} <br /> 
                MEN > THE 365 SHOP > {item} 
              </div>
            ))
          }
        </div> 
 
        {listArr.length>0 && 
          <div className={sl.dropdowns}>
            {listArr.map(item => {
              return <div className={sl.itemlist}>
                <img src={item.product_image} alt='img' width="120px" height="120px"/> 
                <p> {item.product_description}</p>
                {item.product_price}
              </div>
            })}
          </div>
        }  
      </div>
    );
  }
}
export default Search;