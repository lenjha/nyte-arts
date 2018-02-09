import React from 'react';
import ArtworkPage from './ArtworkPage';

const masterArtworkList = [
  {
    image: '1.jpg'
  },
  {
    image: '2.jpg'
  },
  {
    image: '3.jpg'
  },
  {
    image: '4.jpg'
  },
  {
    image: '5.jpg'
  },
  {
    image: '6.jpg'
  },
  {
    image: '7.jpg'
  },
  {
    image: '8.jpg'
  },
  {
    image: '9.jpg'
  },
  {
    image: '10.jpg'
  },
  {
    image: '11.jpg'
  },
  {
    image: '12.jpg'
  },
  {
    image: '13.jpg'
  },
  {
    image: '14.jpg'
  },
  {
    image: '15.jpg'
  },
  {
    image: '16.jpg'
  },
  {
    image: '17.jpg'
  },
  {
    image: '18.jpg'
  },
  {
    image: '19.jpg'
  },
  {
    image: '20.jpg'
  }
];

function ArtworksList(){
  return(
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', width: '100%', marginTop: '30px'}}>
      {masterArtworkList.map((artwork, index) =>
        <ArtworkPage
          image={artwork.image}
          key={index}/>
      )}
    </div>
  );
}

export default ArtworksList;
