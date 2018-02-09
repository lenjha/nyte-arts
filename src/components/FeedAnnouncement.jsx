import React from 'react';
import PropTypes from 'prop-types';


function FeedAnnouncement(props){
  return(
    <div>
      <style jsx>{`
        .feed-announcement {
          padding: 10px;
          margin: 10px auto;
          color: white;
        }
        img{
          width: 20px;
          height: auto;
          filter: invert(100%);
        }
      `}</style>
      <div className='feed-announcement'>
        <img src={props.icon}/>
        <p>{props.comments}</p>
      </div>
      <hr />
    </div>
  );
}

FeedAnnouncement.propTypes = {
  icon: PropTypes.string,
  comments: PropTypes.string
};

export default FeedAnnouncement;
