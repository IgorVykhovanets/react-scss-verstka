import React from 'react';

import './center.modules.scss'

const Center = () => {
    return (
        <div className={'center-container'}>
            <div className={'footer-center-container'}>
                <div className={'left-footer-container'}>
                    <h2>#general</h2>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                </div>
                <div className={'right-footer-container'}>
                    <div className={'humans-container'}>
                        <span className="material-symbols-outlined">
                        sentiment_satisfied
                        </span>
                        <h3>
                            1093
                        </h3>
                    </div>
                    <form>
                        <input type="text" placeholder={'Search...'}/>
                        <button>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </form>
                    <span className="material-symbols-outlined">
                        notifications_active
                    </span>
                    <span className="material-symbols-outlined">
                        apps
                    </span>
                </div>
            </div>
            <div className={'all-post-container'}>
                <div className={'post-container'}>
                    <div className={'img-post-container'}>
                        <img
                            src="https://media.pitchfork.com/photos/618a8cc8c5f185b018cfa331/4:3/w_2664,h_1998,c_limit/Travis-Scott.jpeg"
                            alt="human"/>
                    </div>
                    <div className={'info-post-container'}>
                        <div className={'human-info-container'}>
                            <h2>Travis Scott</h2>
                            <h3>6:38 PM</h3>
                        </div>
                        <div className={'item-post-container'}>
                            <p>WTFFFFFF....</p>
                        </div>
                    </div>
                </div>
                <div className={'post-container'}>
                    <div className={'img-post-container'}>
                        <img
                            src="http://slukh.media/wp-content/uploads/2020/05/asap-rocky-01.jpg"
                            alt="human"/>
                    </div>
                    <div className={'info-post-container'}>
                        <div className={'human-info-container'}>
                            <h2>Asap Rocky</h2>
                            <h3>7:00 PM</h3>
                        </div>
                        <div className={'item-post-container'}>
                            <p>@TravisScott додік страшний</p>
                        </div>
                    </div>
                </div>
                <div className={'post-container'}>
                    <div className={'img-post-container'}>
                        <img
                            src="https://i.pinimg.com/originals/75/ca/92/75ca92f1de9eb2572495f0e73a654cbb.jpg"
                            alt="human"/>
                    </div>
                    <div className={'info-post-container'}>
                        <div className={'human-info-container'}>
                            <h2>Snoop Dogg</h2>
                            <h3>7:30 PM</h3>
                        </div>
                        <div className={'item-post-container'}>
                            <p>Знов накурилоооо страшнооооо.... який газ годний знайшов...</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3VmS-uVAEHoUBYXu85ezD2oNP9Uoksz7bw&usqp=CAU"
                                alt="weed"/>
                        </div>
                    </div>
                </div>
                <div className={'post-container'}>
                    <div className={'img-post-container'}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt7lgLwuQMcaMpUP_T1l8pWrUFyekAASAXQ&usqp=CAU"
                            alt="human"/>
                    </div>
                    <div className={'info-post-container'}>
                        <div className={'human-info-container'}>
                            <h2>Петро Моставчук</h2>
                            <h3>7:35 PM</h3>
                        </div>
                        <div className={'item-post-container'}>
                            <p>Я живий !</p>
                        </div>
                    </div>
                </div>
                <div className={'post-container'}>
                    <div className={'img-post-container'}>
                        <img
                            src="https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg"
                            alt="human"/>
                    </div>
                    <div className={'info-post-container'}>
                        <div className={'human-info-container'}>
                            <h2>Adolf Hitler</h2>
                            <h3>7:55 PM</h3>
                        </div>
                        <div className={'item-post-container'}>
                            <p>@ПетроМоставчук я тоже...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'msg-footer-container'}>
                <div className={'msg-left-container'}>
                    <span className="material-symbols-outlined">
                        add_a_photo
                    </span>
                    <span className="material-symbols-outlined">
                        mic
                    </span>
                    <h3>
                        Message in #general
                    </h3>
                </div>
                <div className={'msg-right-container'}>
                    <span className="material-symbols-outlined">
                        sentiment_satisfied
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Center;