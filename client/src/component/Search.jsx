import React from 'react';
import sl from './selection.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state= {

    } 
  }

  render(){
    return(
      <div className={sl.searchbar}>
        <div className={sl.searchtext}><strong>search</strong></div>
        <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo"  width="25" height="25" /></div>
      </div>
    );
  }
}
export default Search;