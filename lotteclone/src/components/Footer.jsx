import React from 'react';
import './css/footer.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }
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
                    <div className='btn_top' onClick={scrollToTop}><a>TOP<i className='arr'></i></a></div>
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
                <div className='box_wrap02'>
                    <div className='link_box'>
                        <LinkLists />
                    </div>
                </div>
                <div className='box_wrap04'>
                    <ul className='award_list'>
                        <AwdLists />
                    </ul>
                </div>
            </div>
            <div className='box_wrap01'>
                <div class="txt_box">
                    <p class="name"><b>대표이사 강성현</b></p>
                    <ul class="txt_list">
                        <li>서울특별시 중구 남대문로 81 (소공동 1)</li>
                        <li>대표전화 1577-0001</li>
                        <li>L.POINT 콜센터 1899-8900</li>
                    </ul>
                    <ul class="txt_list">
                        
                    </ul>
                    <p class="copyright">Copyright ⓒ 2022 Lotte Shopping Co.,Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}
// function Family() {
//     const familys = ['롯데그룹', '윤리경영', '롯데백화점 법인영업팀', '상품본부', '인터넷 구매시스템', '롯데쇼핑IR']
//     return
// }
function LinkLists() {
    const footerLinks = ['회사소개', '영상정보처리기기 운영/관리방침', '회원약관', '개인정보처리방침', '인재채용', '윤리 HOT LINE', '사이트맵']
    return (
        <ul className='link_list'>
            {footerLinks.map((link, idx) => {
                return <li key={idx}><a>{link}</a></li>
            })}
        </ul>
    );
}
function AwdLists() {
    return (
        <>
        <li>
            <a>
                <img src='https://minfo.lotteshopping.com/mobweb/resources/layout/images/common/footer_award_ncsi.jpg' alt="NCSI"/>
                <p>국가고객만족도 백화점 부문<br/>&nbsp;2003년~2021년</p>
            </a>
        </li>
        <li>
            <a>
                <img src='https://minfo.lotteshopping.com/mobweb/resources/layout/images/common/footer_award_ccm.png' alt="CCM"/>
                <p>소비자중심경영<br/>인증기업</p>
            </a>
        </li>
        <li>
            <a>
                <img src="https://minfo.lotteshopping.com/mobweb/resources/layout/images/common/footer_award_nbci.jpg" alt="NBCI"/>
                <p>국가브랜드경쟁력지수 백화점 업종<br/>&nbsp;2004년~2021년</p>
            </a>
        </li>
        </>
    );
}

export default Footer;