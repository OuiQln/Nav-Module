import React from 'react';
import sl from './selection.css';
import axios from 'axios';
const INPUT_TIMEOUT = 400;
const colors = ['#FF8042'];

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
    axios
      .get('/api/search', { params: { product_type: this.state.query } })
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

        {this.state.query.length>2 && this.state.list!==0 &&
          <div className={sl.results}>

            <div className={sl.predict}>
              {
                this.state.predictions.map((item, index) => (
                  <div key={index + item}> DO YOU MEAN ? <br /> <br /> {item} <br /> <br /> 
                    CATEGORIES <br /> <br />
                    <a href="" className={sl.links}>MEN > UNIQLO U > {item} <br /><br /></a>
                    <a href="" className={sl.links}>BOYS > {item} AND SHORTS > {item} <br /><br /></a>
                    <a href="" className={sl.links}>BABY > {item} AND LEGGINGS > {item} <br /><br /></a>
                    <a href="" className={sl.links}>MEN > FLEECE > BLOCKTECH FLEECE > <br /> {item}<br /><br />  </a>
                    <a href="" className={sl.links}>MEN > {item} <br /><br />  </a>
                    <a href="" className={sl.links}>WOMEN > {item} <br /><br />  </a>
                    <a href="" className={sl.links}>GIRLS > ONLINE EXCLISIVES > {item} <br /><br /></a>
                    <a href="" className={sl.links}>MEN > THE 365 SHOP > {item} </a>
                  </div>
                ))
              }
            </div> 
    
            {listArr.length!==0 ?
              <div className={sl.dropdowns}>
                <div className={sl.search_pro}>
                  <strong>
                   TOP RESULTS FOR {this.state.query}
                  </strong>
                  <button className={sl.samplebutton}>VIEW ALL</button>
                </div>

                <div className={sl.pictures}>
                  {listArr.map(item => {
                    return <div className={sl.itemlist}>
                      <img src={item.product_image} alt='img' width="140px" height="140px"/>
                      {item.product_description}
                      {item.product_price} <br /><br />
                    </div>
                  })}
                </div>
              </div> : <div className={sl.notshow}></div>
            }  
          </div>
        }
      </div>
    );
  }
}
export default Search;