import React from 'react';
import ReactDOM from 'react-dom';
//import styles from "" will need to import the styles.css file
// import promobox from '../../dist/promo-box.png';
import fs from "./freeShipping.css";
import CssModules from 'react-css-modules';
const TopBar= (props)=> {
  return(
    <div className={fs.topbar}>
      <div className="freeShipping">
        <span className={fs.boximage}>
          <img src="https://s3-us-west-1.amazonaws.com/uniqloassets/promo-box.png" alt="logo" width="20" height="20" />
        </span>
          <strong className={fs.freeShipping}>Free 2-Day Shipping on Orders over $150!</strong> 
      </div>

      <div className={fs.baroption}>
        <div  >
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/get10-icon.png" alt='img' width="25" height="20" margin="10px" />GET $10</strong></a>
        </div>
        <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/gift-icon.png" alt='img' width="25" height="20" />Gift Card</strong></a>
        </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/bulk-icon.png" alt='img' width="25" height="20" />Bulk Order</strong></a>
          </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/location-icon.png" alt='img' width="18" height="20" /> Stores</strong></a>
          </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/hiring-icon.png" alt="img" width="25" height="20" />HIRING!</strong></a>
          </div>
          <div>

          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/help-icon.png" alt="img" width="25" height="20" />HELP</strong></a>
          </div>

      </div>
      <div className={fs.line}></div>
      <div className={fs.verticalLine}></div>
      <div className={fs.login}>
        <a href="" className={fs.a}>LOGIN / REGISTER</a>
      </div>
    </div>
  )

}
export default TopBar;
