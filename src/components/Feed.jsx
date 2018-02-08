import React from 'react';
import facebookIcon from '../assets/img/facebook-logo.png';
import twitterIcon from '../assets/img/twitter-logo-button.png';
import instagramIcon from '../assets/img/instagram.png';

function Feed(){
  return(
    <div>
      <style jsx>{`
        height: 70%;
        h3{
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
        }
        img{
          width: 20px;
          height: auto;

        }
      `}</style>
      <h3>
        Feed
      </h3>
      <img src={facebookIcon} />
      <img src={twitterIcon} />
      <img src={instagramIcon} />
    </div>
  );
}

export default Feed;
