import React from 'react';
import Artwork from './Artwork';
import one from '../assets/img/artworks/1.jpg';

const masterArtworkList = [
  {
    image: one
  }
];

function ArtworksList(){
  return(
    <div>
      {masterArtworkList.map((artwork, index) =>
        <Artwork
          image={artwork.image}
          key={index}/>
      )}
    </div>
  );
}

export default ArtworksList;
