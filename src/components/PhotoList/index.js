import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Cuba',
      category: 'photos',
      description: 'I have been able to travel to very unique parts of the world. With that travel, I have been greatly influenced. https://www.facebook.com/Anderson.Videographer/videos/1565266767112883/',
    },
    {
      name: 'Wedding',
      category: 'photos',
      description: 'I love working with cameras in both photos and video. https://www.facebook.com/Anderson.Videographer/videos/1482097942096433/',
    },
    {
      name: 'Wedding 2',
      category: 'videos',
      description: 'Because of that love, I have been able to create videos for both private indivduals...  https://www.facebook.com/Anderson.Videographer/videos/1565634297076130/',
    },
    {
      name: 'Welding',
      category: 'videos',
      description: '... along with industries.  https://www.facebook.com/Anderson.Videographer/videos/1570910973215129/',
    },
    {
      name: '12 Wishes',
      category: 'web design',
      description: 'Im excited to use to experiences to create new, online realities. https://twelve-wishes.herokuapp.com/',
    },
    {
      name: 'Crypto Calc',
      category: 'web design',
      description: 'To make the world a more accessible place. https://chriswein12.github.io/crypto-calc/',
    },
      ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
