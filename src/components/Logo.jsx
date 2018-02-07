import React from 'react';

function Logo(){
  return(
    <div>
      <style jsx>{`
        background: black;
        text-align: center;
        color: white;
        font-family: sans-serif;
        h1 {
          font-family: 'Bungee Hairline', cursive;
          font-size: 7em;
          margin-bottom: 0;
        }
        p {
          margin: 0 auto 50px;
          width: 70%;
        }
      `}</style>
      <h1>
        NYTE ARTS
      </h1>
      <p>Nyte Arts is the showcase platform for games, film, media & entertainment artists emphasizing on the realm of night. It enables artists to showcase their portfolios in a slick way, discover & stay inspired, and connect with new opportunities.</p>
    </div>
  );
}

export default Logo;
