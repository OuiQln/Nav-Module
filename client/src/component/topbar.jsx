import React from 'react';
import fs from "./freeShipping.css";
const TopBar= (props)=> {
  return(
    <div className={fs.topbar}>
      <div className="freeShipping">
        <span className={fs.boximage}>
          <img src="https://s3-us-west-1.amazonaws.com/uniqloassets/promo-box.png" alt="logo" width="20" height="22" />
        </span>
          <strong className={fs.freeShipping}>Free Shipping on All Orders!</strong> 
      </div>

      <div className={fs.baroption}>
        <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/get10-icon.png" alt='img' width="25" height="20" hspace="5" />GET $10</strong></a>
        </div>
        <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/gift-icon.png" alt='img' width="21" height="16" hspace="5"/>Gift Card</strong></a>
        </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/bulk-icon.png" alt='img' width="22" height="20" hspace="3" />Bulk Order</strong></a>
          </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/location-icon.png" alt='img' width="14" height="20" hspace="3"/> Stores</strong></a>
          </div>
          <div>
          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/hiring-icon.png" alt="img" width="19" height="16" hspace="3" />HIRING!</strong></a>
          </div>
          <div>

          <a href="" className={fs.a}><strong className={fs.promobar}><img src="https://s3-us-west-1.amazonaws.com/uniqloassets/help-icon.png" alt="img" width="18" height="18" hspace="5" />HELP</strong></a>
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
