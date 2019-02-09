//stateless
import React from 'react';
import sl from './selection.css';
const Directions=()=> {
  return(
    <div className={sl.container}> 
      <a href="" className={sl.logoLink}>
        <img src="https://s3-us-west-1.amazonaws.com/uniqloassets/logo.png" alt="logo" width="80px" height="40px" />
      </a>
    </div>
  )
}
export default Directions;