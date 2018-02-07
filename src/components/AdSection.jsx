import React from 'react';
import mayaAd from '../assets/img/maya-ad.png';

function AdSection(){
  return(
    <div>
      <style jsx>{`
        background: black;
        text-align: center;
        padding: 7px 0;
      `}</style>
      <img src={mayaAd}/>
    </div>
  );
}

export default AdSection;
