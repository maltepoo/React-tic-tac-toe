import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

function BoxUtil() {
  const utils = ['롯데갤러리', '롯데웨딩', '문화센터', '온라인상담실']
  const services = ['APP소개', '롯데상품권', 'L.POINT', '스마트픽', '서비스 제도', '배송조회', '법인/단체 구매']
  return (
    <div className='box_top'>
      <ul>
        <li>서비스
          <ul className='service'>
            {services.map((svc, idx) => {
              return <li key={idx}><a>{svc}</a></li>
            })}
          </ul>
        </li>
        <li>우수고객라운지</li>
        {utils.map((util, idx) => {
          return (
            <li key={idx}>{util}</li>
          );
        })}
      </ul>
      <ul className='etc_list'>
        <li><a className='btn_login'></a></li>
        <li><a className='btn_search'></a></li>
      </ul>
    </div>
  );
}
function Gnb() {
  const menus = ['롯데백화점', '에비뉴엘', '영플라자', '프리미엄아울렛', '롯데몰', '엘큐브']
  return (
    <ul>
      {menus.map((menu, idx) => {
        return <li key={idx}>{menu}</li>
      })}
    </ul>
  );
}

function Header() {
    return (
      <div className='header'>
        <BoxUtil />
        <div className='gnb_wrapper'>
          <h1><Link to="/"><img src='img/gnb_ci.png' alt="logo"/></Link></h1>
          <Gnb />
          <a className='floor'><img src="img/gnb_location.png"/>지점/매장안내</a>
        </div>
      </div>
    );
}

export default Header;