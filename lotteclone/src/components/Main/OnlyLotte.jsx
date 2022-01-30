import React from 'react';
import '../css/onlylotte.css'

function OnlyLotte() {
    return (
        <div className='onlylotte'>
            <div className='inner'>
                <div className='aos_wrap'>
                    <div className='only_title'></div>
                    <p className='txt02'>롯데에서만 만날 수 있는 브랜드</p>
                    <p className='txt03'>엘리든, 롯데탑스, 남파고택, 시시호시 등 롯데백화점에서만 만날 수 있는 특별한 브랜드를 소개합니다</p>
                    <a className='btn'>전체보기</a>
                </div>
                <div className='list_wrap'>
                    <Brands />
                </div>
            </div>
        </div>
    );
}
function Brands() {
    const brands = [
        {
            cover: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_01.jpg',
            name: '엘리든'
        },
        {
            cover: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_02.jpg',
            name: '롯데탑스'
        },
        {
            cover: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_03.jpg',
            name: '남파고택'
        },
        {
            cover: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_04.jpg',
            name: '시시호시'
        }
    ]
    return (
        <ul>
            {brands.map(brand => {
                return (
                    <li key={brand.cover}>
                        <img src={brand.cover} alt={brand.name}/>
                        <p className='brand_title'>{brand.name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default OnlyLotte;