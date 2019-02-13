import React from 'react';
import sl from './selection.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      query: ''
    } 
  }

  render(){
    return(
      <div className={sl.searchbar}>
        {/* <div className={sl.searchtext}>
            <strong>search</strong>
        </div>
        <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo"  width="25" height="25" /></div>
        <div>
          
        </div> */}

        <input class={sl.searchBox} type="search" name="search" placeholder="Search" />
        <div className={sl.searchmarker}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/questionmark.png" alt="logo" width="25" height="25" /></div>

        {/* <input type="submit" value="Search" class="searchButton" /> */}
      </div>
    );
  }
}
export default Search;