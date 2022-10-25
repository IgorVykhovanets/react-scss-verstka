import React from 'react';

import './left.modules.scss';


const Left = () => {
    return (
        <div className={'left-menu'}>
            <div className={'left-footer-container'}>
                <div>
                    <h2>Nomad List</h2>
                    <span className="material-symbols-outlined">
                    keyboard_double_arrow_down
                    </span>
                </div>
                <span className="material-symbols-outlined">
                    settings
                </span>
            </div>
            <div className={'all-trends-menu'}>
                <span className="material-symbols-outlined">
                    star
                </span>
                <h2>All Trends</h2>
            </div>
            <div className={'channels-container-menu'}>
                <div>
                    <h2>
                        CHANNELS
                    </h2>
                    <h2 className={'number-channels-container'}>
                        10
                    </h2>
                </div>
                <ul>
                    <li className={'tap-container-li'}># general</li>
                    <li># support</li>
                    <li># marketing</li>
                    <li># thailand</li>
                    <li># bali</li>
                    <li># poland</li>
                    <li># lviv</li>
                    <li># jobs</li>
                    <li># startup</li>
                    <li># italy</li>
                </ul>
            </div>
            <div className={'friends-top-container'}>
                <h2>FRIENDS</h2>
                <h3>15</h3>
            </div>
            <div className={'all-friends-container'}>
                <ul>
                    <li>
                        <img src="http://slukh.media/wp-content/uploads/2020/05/asap-rocky-01.jpg" alt="human"/>
                        <h3>Asap Rocky</h3>
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/564x/fe/4f/2f/fe4f2f23cb9ff5323772eff3dce34d68.jpg" alt="human"/>
                        <h3>Metro Boomin</h3>
                    </li>
                    <li>
                        <img src="data:image/jpeg;base64,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" alt="human"/>
                        <h3>21 Savage</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Left;