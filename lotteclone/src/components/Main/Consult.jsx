import React from 'react';
import '../css/consult.css'

function Consult() {
    return (
        <div className='main_consult'>
            <div className='inner'>
                <div className='aos_wrap'>
                    <p className='txt02'>롯데백화점 상담실안내</p>
                    <p className='txt03'>온라인상담실 운영시간은 10:30 ~ 18:30입니다</p>
                </div>
                <div className='consult_img'>
                    <a className='btn btn01'>바로가기</a>
                    <a className='btn btn02'>바로가기</a>
                    <a className='btn btn03'>바로가기</a>
                </div>
            </div>
        </div>
    );
}

export default Consult;