import React from 'react';
import Lab from './Main/Lab';
import Gallery from './Main/Gallery';
import Magazine from './Main/Magazine';
import OnlyLotte from './Main/OnlyLotte';
import Wedding from './Main/Wedding';
import MVG from './Main/MVG';
import Channel from './Main/Channel';
import Consult from './Main/Consult';

function Contents(props) {
    return (
        <div>
            <Lab />
            <Gallery />
            <Magazine />
            <OnlyLotte />
            <Wedding />
            <MVG />
            <Channel />
            <Consult />
        </div>
    );
}

export default Contents;