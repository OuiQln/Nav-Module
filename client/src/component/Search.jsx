import React from 'react';
import sl from './selection.css';
import axios from 'axios';
const INPUT_TIMEOUT = 100;

class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      query: '',
      list: [],
      predictions: [],
      color:'',
      result:false
    }
    this.handleInput = this.handleInput.bind(this);
    this.fetchList = this.fetchList.bind(this); 
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  getPredictions(value) {
    return [
      'PANTS',
      'SWEATER',
      'SHIRTS',
      'DRESS',
    ].filter(item => item.toUpperCase().indexOf(value.toUpperCase()) !== -1);
  }
  // componentWillMount() {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown',this.handleClick, false);
  // }
  handleClick() {
    // if (this.node.contains(e.target)) {
    //   return;
    // }
    // this.handleClickOutside();
    if (!this.state.result) {
      document.addEventListener('click', this.handleClickOutside, false);
    } else {
      document.removeEventListener('click',this.handleClickOutside, false)
    }

    this.setState(prevState => ({
      result: !prevState.result,
    }));
  }

  handleClickOutside(e) {
    //ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
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
      .get('/api/search', { params: { product_type: this.state.predictions } })
      .then(({ data }) => {
        this.setState({ list: data });
        console.log(this.state.list);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render(){
    const letterstyle = {
      color: "red"
    };
    const pricestyle = {
      fontSize:"16px"
    }

    
    const listArr = this.state.list;
    return(
      <div className={sl.searchContainer}>
        <div className={sl.searchbar}>
          <form onChange={this.fetchList}>
            <input class={sl.searchBox} type="text" value={this.state.query} placeholder="Search" 
              onChange={(e) => {this.handleInput(e)}} onClick={this.handleClick}
              />
          </form>  
            <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo" width="25" height="25" /></div>
        </div>

        {this.state.query.length>2 && this.state.result &&
          <div className={sl.results}>
            <div className={sl.predict}>
              { 
                this.state.predictions.map((item, index) => (                 
                  <div key={index + item}> DO YOU MEAN ? <br /> <br /> <letter style={letterstyle}>{item} </letter> <br /> <br /> 
                    CATEGORIES <br /> <br />
                    <a href="" className={sl.links}>MEN > UNIQLO U > <letter style={letterstyle}>{item}</letter> <br /><br /></a>
                    <a href="" className={sl.links}>BOYS > <letter style={letterstyle}>{item}</letter> AND SHORTS > <letter style={letterstyle}>{item}</letter> <br /><br /></a>
                    <a href="" className={sl.links}>BABY > <letter style={letterstyle}>{item}</letter> AND LEGGINGS > <letter style={letterstyle}>{item}</letter> <br /><br /></a>
                    <a href="" className={sl.links}>MEN > FLEECE > BLOCKTECH FLEECE > <br /> <letter style={letterstyle}>{item}</letter><br /><br />  </a>
                    <a href="" className={sl.links}>MEN > <letter style={letterstyle}>{item}</letter> <br /><br />  </a>
                    <a href="" className={sl.links}>WOMEN > <letter style={letterstyle}>{item}</letter> <br /><br />  </a>
                    <a href="" className={sl.links}>GIRLS > ONLINE EXCLISIVES > <letter style={letterstyle}>{item}</letter> <br /><br /></a>
                    <a href="" className={sl.links}>MEN > THE 365 SHOP > <letter style={letterstyle}>{item}</letter> </a>
                  </div>
                ))
              }
            </div> 
    
            {listArr.length!==0 ?
            <div ref={node => this.node = node} className={sl.dropdowns}>
                <div className={sl.search_pro}>
                  <strong>
                   TOP RESULTS FOR {this.state.query}
                  </strong>
                  <button className={sl.samplebutton}>VIEW ALL</button>
                </div>

                <div className={sl.pictures}>
                  {listArr.map(item => {
                    return <div className={sl.itemlist}>
                      <img src={item.product_image} alt='img' width="157px" height="157px"/>
                      {item.product_description} <br /><br />
                      <letter style={pricestyle}>{item.product_price}</letter> <br /><br />
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