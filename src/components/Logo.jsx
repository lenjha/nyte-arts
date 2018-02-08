import React from 'react';
import {Link} from 'react-router-dom';

function Logo(){
  const link={
    textDecoration:'none',
    color:'white'
  };
  return(
    <div>
      <style jsx>{`
        background: black;
        text-align: center;
        color: white;
        font-family: sans-serif;
        h1 {
          font-size: 9em;
          margin-bottom: 0;
          font-family: 'Bungee Hairline', cursive;
        }
        a{
          font-family: 'Bungee Hairline', cursive;
        }
        a:hover {
          color:gray;
        }
        p {
          margin: 0 auto 50px;
          width: 70%;
        }
      `}</style>
      <h1>
        <Link style={link} to ='/'><a>NYTE Artwork</a></Link>
      </h1>
      <p>Nyte Artwork is the showcase platform for games, film, media & entertainment artists emphasizing on the realm of night. It enables artists to showcase their portfolios in a slick way, discover & stay inspired, and connect with new opportunities.</p>
    </div>
  );
}

export default Logo;
