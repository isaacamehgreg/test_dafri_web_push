import React from 'react';

const EmptyImage = ({
  width = '100%',
  height = '100%',
  position = 'center',
  radius = 40,
  imageText = 'No image',
  textSize = 16,
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: position, width: '100%' }}>
      <p
        style={{
          background: 'rgb(214, 214, 214)',
          width,
          height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: `${radius}px`,
        }}
      >
        <span style={{ fontSize: `${textSize}px` }}>No image</span>
      </p>
    </div>
  );
};

export default EmptyImage;
