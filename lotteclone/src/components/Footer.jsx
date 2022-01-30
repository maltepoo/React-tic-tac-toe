import React from 'react';
import './css/footer.css'

function Footer() {
    return (
        <div id="footer">
            <div className='servCenter_box'>
                <div className='inner'>
                    <div className='lottes'><span>롯데쇼핑(주)</span></div>
                    <ul className='servCenter_list'>
                        <li><a>자주하는 질문</a></li>
                        <li><a>온라인상담실</a></li>
                        <li><a>상담실안내</a></li>
                        <li><a>가상계좌</a></li>
                        <li><a>공지사항</a></li>
                    </ul>
                    <div className='btn_top'><a>TOP<i className='arr'></i></a></div>
                </div>
            </div>
            <div className='inner'>
                <div className='box_wrap03'>
                    <div className='family_wrap_v2'>
                        <dl>
                            <dt>
                                <button>LOTTE FAMILY</button>
                            </dt>
                            <dd>
                                <ul></ul>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className='box_wrap02'></div>
                <div className='box_wrap04'></div>
            </div>
            <div className='box_wrap01'></div>
        </div>
    );
}
function Family() {
    const familys = ['롯데그룹', '윤리경영', '롯데백화점 법인영업팀', '상품본부', '인터넷 구매시스템', '롯데쇼핑IR']
    return
}

export default Footer;