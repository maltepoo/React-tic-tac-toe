import React from 'react';
import '../css/lab.css';

function Lab() {
    return (
        <div className='lab'>
            <div className='inner_lab'>
                <div className='left_lab'>
                    <div className='txt_box'>
                        <div className='culture_title'></div>
                        <p className='txt01'>롯데백화점 문화센터</p>
                        <p className='txt02'>당신의 라이프스타일 연구소</p>
                        <p className='txt03'>다채롭고 수준 높은 클래스를 통한 고품격 고감성의<br/>복합 문화공간을 즐겨보세요</p>
                        <a className='btn'>문화센터 바로가기</a>
                    </div>
                </div>
                <div className='right_lab'>
                    <img src="/img/lab/culture.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Lab;