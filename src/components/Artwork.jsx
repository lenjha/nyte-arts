import React from 'react';
import PropTypes from 'prop-types';


function Artwork(props){
  return(
    <div>
      <style jsx>{`
        margin: 0;

        .artworks {
          padding: 10px;
          margin: 10px auto;
        }
      `}</style>
      <div className='artworks'>
        <img src={props.image}/>
      </div>
    </div>
  );
}

Artwork.propTypes = {
  image: PropTypes.string,
};

export default Artwork;
