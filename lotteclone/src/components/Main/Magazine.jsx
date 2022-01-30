import React from 'react';
import '../css/magazine.css';

function Magazine() {
    return (
        <div className='magazine'>
            <div className='inner'>
                <div className='aos_wrap'>
                    <div className='maga_title'></div>
                    <p className='txt02'>일상을 빛낼 트렌드 가이드</p>
                    <p className='txt03'>패션, 문화, 라이프 스타일의 최신 트렌드를 쉽고 빠르게 확인해 보세요</p>
                </div>
                <div className='list_wrap'>
                    <MagaList />
                </div>
            </div>
        </div>
    );
}
function MagaList() {
    const covers = [
        {
            cover: 'https://minfo.lotteshopping.com/content/mazin/20220105/MAM00000000000001769/20220105154024194_7.jpeg',
            title: '흑호랑이 기운가득! 임인년 한정판 뷰티 컬렉션',
        },
        {
            cover: 'https://minfo.lotteshopping.com/content/mazin/20211228/MAM00000000000001768/20211228093217517_0.jpeg',
            title: '현실과 몽환 사이, 그 경계의 풍경을 그리는 작가!',
        },
        {
            cover: 'https://minfo.lotteshopping.com/content/mazin/20211223/MAM00000000000001749/20211223150243740_0.jpeg',
            title: '요린이도 칭찬받는 연말 홈파티 메뉴',
        }
    ]
    return (
        <ul>
            {covers.map(cover => {
                return (
                    <li key={cover.cover}>
                        <img src={cover.cover} alt={cover.title}/>
                        <p className='maga_subtitle'>{cover.title}</p>
                        <a className='btn'>매거진 보기</a>
                    </li>
                );
            })}
        </ul>
    );
}

export default Magazine;