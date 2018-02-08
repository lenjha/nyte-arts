import React from 'react';
import ArtworksList from './ArtworksList';

function Gallery(){
  return(
    <div>
      <style jsx>{`
        background: black;
      `}</style>
      <div className='gallery'>
        <ArtworksList />
      </div>
    </div>
  );
}

export default Gallery;
