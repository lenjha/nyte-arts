import React from 'react';
import ryoji from '../assets/img/ryoji.jpg';
import suehiro from '../assets/img/suehiro.jpg';
import tetsuo from '../assets/img/tetsuo.jpg';
import biomega from '../assets/img/biomega.jpg';

function Articles(){
  return(
    <div>
      <style jsx>{`
        width: 50%;

        .article-heading {
          text-align: center;
          color: red;
          width: 100%;
        }

        h3 {
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
        }
        .ryoji-div {
          width: 100%;
        }
        .ryoji-div img {
          width: 100%;
        }

        .ryoji-div h2, p {
          margin: 30px auto;
          text-align: center;
          width: 75%;
        }
        p {
          text-align: justify;
        }

        .double-div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        }

        .suehiro, .tetsuo {
          width: 100%;
          padding: 5px;
        }

        .suehiro img, .tetsuo img {
          width: 100%;
        }

        .nihei-div img{
          width: 100%;
          margin: 25px auto;
        }
        .nihei-div {
          width: 100%;
        }

      `}</style>
      <h3>
        Articles
      </h3>
      <h2 className="article-heading">Celebrating Japanese Artists Month</h2>
      <div className="ryoji-div">
        <img src={ryoji}/>
        <h2>Ryoji Ikeda sighted in North America</h2>
        <p>Japan’s leading electronic composer and visual artist Ryoji Ikeda focuses on the essential characteristics of sound itself and that of visuals as light by means of both mathematical precision and mathematical aesthetics...
        </p>
      </div>
      <hr />

      <div className='double-div'>
        <div className='tetsuo'>
          <img src={tetsuo}/>
          <h3>TETSUO: THE BULLET MAN</h3>
          <p>
            Shinya Tsukamoto is a Japanese film director and actor with a considerable cult following both domestically and abroad...
          </p>
        </div>
        <div className='suehiro'>
          <img src={suehiro}/>
          <h3>SUEHIRO MARUO</h3>
          <p>
            Many of Maruo's illustrations depict graphic sex and violence and are therefore referred to as contemporary muzan-e (a subset of Japanese ukiyo-e depicting violence or other atrocities.)
          </p>
        </div>
      </div>
      <hr />

      <div className='nihei-div'>
        <img src={biomega}/>
        <h3>TSUTOMU NIHEI</h3>
        <p>
          Tsutomu Nihei (弐瓶 勉 Nihei Tsutomu, born 1971) is a Japanese manga artist. His cyberpunk-influenced artwork has gained a strong cult following...
        </p>
      </div>
    </div>
  );
}

export default Articles;
