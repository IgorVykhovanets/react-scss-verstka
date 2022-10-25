import React from 'react';

import './app.modules.scss'
import Left from "./components/Left.menu/Left";
import Center from "./components/Center.menu/Center";
import Right from "./components/Right.menu/Right";

const App = () => {
    return (
        <div className={'all-box-menu'}>
            <Left/>
            <Center/>
            <Right/>
        </div>
    );
};

export default App;