import React, { useState } from 'react';

const IMAGES = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // add more images as needed
];

function ImageSwitcher() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentImage + 1) % IMAGES.length;
    setCurrentImage(nextIndex);
  };

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <Image src={IMAGES[currentImage]} />
    </div>
  );
}

function Image({ src }) {
  return <img src={src} alt="" />;
}
