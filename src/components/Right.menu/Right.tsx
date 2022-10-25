import React from 'react';

import './right.modules.scss'

const Right = () => {
    return (
       <div className={'person-info-container'}>
           <div>
               <img src="https://jpimg.com.br/uploads/2017/11/archives/2015/12/11/2743739910-wiz-khalifa.jpg" alt="human"/>
           </div>
           <div className={'info-person'}>
               <h2>Wiz Khalifa</h2>
               <h3>I love weed</h3>
           </div>
           <div className={'btn-block-person'}>
               <button className={'msg-btn'}>MESSAGE</button>
               <button>
                   <span className="material-symbols-outlined">
                       expand_more
                   </span>
               </button>
           </div>
           <div>
               <div className={'info-albums-person'}>
                   <h3>Albums</h3>
                   <div>
                       <img
                       src="https://vinyla.com/files/products/wiz-khalifa-rolling-papers.1280x1280.jpg?f30d342596bd89f33171feeefcca154c"
                       alt="albums"/>
                       <h2>Rolling Papers</h2>
                   </div>
                   <div>
                       <img
                           src="https://upload.wikimedia.org/wikipedia/ru/4/42/Wiz_Khalifa_Black_and_Yellow.jpg"
                           alt="albums"/>
                       <h2>Black and Yellow</h2>
                   </div>

               </div>
           </div>
       </div>
    );
};

export default Right;