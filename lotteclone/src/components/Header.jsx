import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

function BoxUtil() {
  const [isHide, setIsHide] = useState(false);

  const utils = ['롯데갤러리', '롯데웨딩', '문화센터', '온라인상담실']
  const services = ['APP소개', '롯데상품권', 'L.POINT', '스마트픽', '서비스 제도', '배송조회', '법인/단체 구매']

  function displayService() {
    setIsHide(!isHide);
  }

  const visible = 'none'
  const some = {
    "--display": visible,
  }
  return (
    <div className='box_top'>
      <div className='util_wrap'>
      <ul className='link_list'>
        <li className='link_select' onClick={displayService}><a className='serviceA' style={isHide ? null : some}>서비스</a>
          <ul /*className='service'*/ className={isHide ? "service show" : "service hide"}>
            {services.map((svc, idx) => {
              return <li key={idx}><a>{svc}</a></li>
            })}
          </ul>
        </li>
        <li className='link_select'><a>우수고객라운지</a></li>
        {utils.map((util, idx) => {
          return (
            <li key={idx}><a>{util}</a></li>
          );
        })}
      </ul>
      <ul className='etc_list'>
        <li><a className='btn_login'></a></li>
        <li><a className='btn_search'></a></li>
      </ul>
      </div>
    </div>
  );
}
function Gnb() {
  const menus = ['에비뉴엘', '영플라자', '프리미엄아울렛', '아울렛', '롯데몰', '엘큐브']
  return (
    <ul>
      <li className='on'>롯데백화점</li>
      {menus.map((menu, idx) => {
        return <li key={idx} onClick={function(){
          console.log("menu clicked")
        }}>{menu}</li>
      })}
    </ul>
  );
}

function Header() {
    return (
      <div className='header'>
        <BoxUtil />
        <div className='gnb_wrapper'>
          <h1><Link to="/"></Link></h1>
          <Gnb />
          <a className='floor'><img src="img/gnb_location.png"/>지점/매장안내</a>
        </div>
      </div>
    );
}

export default Header;