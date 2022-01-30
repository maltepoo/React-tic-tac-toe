import React from 'react';
import '../css/mvg.css';

function MVG() {
    return (
        <div className='main_mvg'>
            <div className='inner'>
                <div className='mvg_title'></div>
                <p className='txt02'>진정한 가치가 있는 이름</p>
                <p className='txt03'>삶을 더욱 여유롭게 해줄 롯데백화점 VIP 서비스, 비교 불가능한 특별한 서비스를 누려보세요</p>
                <a className='btn'>우수고객 혜택</a>
                <div className='mvg_img'>
                    <img src='https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/mvg_large.jpg' alt="mvg소개"/>
                </div>
            </div>
        </div>
    );
}

export default MVG;