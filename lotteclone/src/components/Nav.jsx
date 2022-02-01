import React from 'react';

function Nav(props) {
    let scrollActive = props.scrollActive
    return (
        <div className={scrollActive ? "depth2_wrap onTop" : "depth2_wrap"}>
        {/* <div className='depth2_wrap'> */}
            <div className='depth2_wrap_in'>
                <div className='link_depth2_logo'>
                    <a></a>
                </div>
                <ul className='depth2'>
                    <li><a className='link02'>혜택&이벤트</a></li>
                    <li><a className='link02'>매거진</a></li>
                    <li><a className='link02'>EAT 플레이스</a></li>
                    <li><a className='link02'>지점/매장안내</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;