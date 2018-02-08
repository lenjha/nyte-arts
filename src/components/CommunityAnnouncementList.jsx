import React from 'react';
import CommunityAnnouncement from './CommunityAnnouncement';
import nightmanImg from '../assets/img/nightman.jpg';

const masterAnnouncementList = [
  {
    title:'お金を借りるためにしっておきたい7つの項目',
    author:'河上 彦斎',
    date:'2018年2月6日',
    content:'年利」に気をつけるという事です。 何を当然の事をとお思いになるかもしれませんが、 この重要性を意外にわかってない方が多いです。 Ａの会社から借りると年利が16パーセント、 Ｂの会社から借りると年利が14パーセント、 この条件は天と地ほどに違うのですが、 「どっちも大して変わりが無い」 こう判断される方が意外に多いのです。'
  },
  {
    title:'Someone innocent and naive!!!',
    author:'Nightman',
    date:'2018-6-2',
    content:'Charlie Kelly\'s first serious music endeavor involved a character known as the The Nightman. It was his belief that his life as someone innocent and naive required the Nightman. The song is about the Nightman coming into him to endow him with much needed manliness and power.',
    image: nightmanImg
  }
];

function CommunityAnnouncementList(){
  return(
    <div>
      {masterAnnouncementList.map((announcement, index) =>
        <CommunityAnnouncement title={announcement.title}
          author={announcement.author}
          date={announcement.date}
          content={announcement.content}
          image={announcement.image}
          key={index}/>
      )}
    </div>
  );
}

export default CommunityAnnouncementList;
