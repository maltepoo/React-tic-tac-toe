import React, { useState } from 'react';
import '../css/channel.css';

function Channel() {
    return (
        <div className='main_sns'>
            <div className='inner'>
                <div className='channel_left'>
                    <img src='https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns.jpg'/>
                </div>
                <div className='channel_right'>
                    <div className='txt_box'>
                        <div className='sns_title'></div>
                        <p className='txt02'>롯데백화점의 쇼핑 소식을<br/>가장 빠르게 만나보세요!</p>
                    </div>
                    <div className='btn_list_wrap'>
                        <ul className='btn_list'><SnsLists /></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
function SnsLists() {
    const [hover, setHover] = useState(false);
    const snss = [
        {
            name: '인스타그램',
            href: 'https://www.instagram.com/lotteshopping/',
            src: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_01.jpg',
            // srcOn: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_01_on.jpg',
        },
        {
            name: '유튜브',
            href: '',
            src: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_02.jpg',
            srcOn: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_02_on.jpg',
        },
        {
            name: '페이스북',
            href: '',
            src: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_03.jpg',
            srcOn: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_03_on.jpg',
        },
        {
            name: '블로그',
            href: '',
            src: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_04.jpg',
            srcOn: 'https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/main_sns_04_on.jpg',
        },
    ]
    const onMouseEnter = (e) => {
        // setHover(!hover)
    }
    return (
        <>
            {snss.map((sns, idx) => {
                return (
                    <li key={idx} /*onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}*/>
                        <a>
                            <img src={sns.src} alt={sns.name}/>
                        </a>
                    </li>
                );
            })}
        </>
    );
}

export default Channel;