//stateless
import React from 'react';
import sl from './selection.css';
const Directions=()=> {
  return(
    <div className={sl.container}>
      <div className="direction">
        <a href="" className={sl.logoLink}>
          <img src="https://s3-us-west-1.amazonaws.com/uniqloassets/logo.png" alt="logo" width="90px" height="45px" />
        </a>
      </div>

      <div className={sl.tags}>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>WOMEN</strong></a>
        </div>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>MEN</strong></a> 
        </div>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>GIRLS</strong></a>
        </div>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>BOYS</strong></a>
        </div>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>BABY</strong></a>
        </div>
        <div>
          <a href="" className={sl.a}><strong className={sl.choices}>NEW</strong></a>
        </div>
        <div className={sl.sale}>
          <a href="" className={sl.a}><strong >SALE</strong></a>
        </div>

      </div>
    </div>
  )
}
export default Directions;