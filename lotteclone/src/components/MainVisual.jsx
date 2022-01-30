import React from 'react';
import './css/visual.css';

function MainVisual() {
    return (
        <div className='main'>
            <div className='main_visual'>
                <div className='visual'></div>
                <div className='inner'>
                    <button><a>휴점일 안내 <i className='arr'></i></a></button>
                </div>
            </div>
        </div>
    );
}

export default MainVisual;