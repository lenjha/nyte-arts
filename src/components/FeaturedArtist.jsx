import React from 'react';
import vervain from '../assets/img/vervain.jpg';

function FeaturedArtist(){
  return(
    <div>
      <style jsx>{`
        height: 22%;
        h3{
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
          height: auto;
        }
        img {
          width: 100%;
          height: auto;
        }
        p {
          height: auto;
          padding: 15px;
          margin: 0;
        }
      `}</style>
      <div>
        <h3>
          Featured Artist
        </h3>
        <img src={vervain} />
        <h3>
          Vitaly Bulgarov
        </h3>
        <p>
          Originally "Atom-Eater" was an idea for a "Radioactive Waste Cleaning Robot" that got its body/head shape inspired by an anteater animal that is capable of accessing "hard-to-reach" places using its elongated head and long tongue...
        </p>
      </div>
    </div>
  );
}

export default FeaturedArtist;
