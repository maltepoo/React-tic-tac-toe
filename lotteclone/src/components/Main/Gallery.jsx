import React from 'react';
import '../css/gallery.css';

function Gallery() {
    return (
        <div className='gallery'>
            <div className='inner_gallery'>
                <div className='left_gallery'>
                    <img src="https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/gallery.jpg" alt="우수고객 혜택 안내" />
                </div>
                <div className='right_gallery'>
                    <div className='txt_box'>
                        <div className='gallery_title'></div>
                        <p className='txt01'>롯데갤러리</p>
                        <p className='txt02'>백화점의 중심에서<br/>문화의 중심으로</p>
                        <p className='txt03'>가장 가까운 곳에서 최고 수준의 각 분야 전문가들과<br/>함께하는 고품격 라이프 스타일을 만들어 보세요</p>
                        <a className='btn'>롯데갤러리 바로가기</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;