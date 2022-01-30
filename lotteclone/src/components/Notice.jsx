import React, { useState } from 'react';
import './css/notice.css'

function AdList() {
  const [ads, setAds] = useState(['img/20220128163037166_3.png']);
  let adNum = 0;
  return (
    <>
    {ads.map(ad => {
      adNum += 1;
      return <li className='li_ad' key={adNum}><img src={ad} alt={adNum}/></li>
    })}
    </>
  );
}

function Notice() {
  return (
    <div className='notice'>
      <ul>
        <AdList />
      </ul>
    </div>
  );
}

export default Notice;