import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ img, title, text, btnRoute, btnText }) => {
  const { before, after, span } = title;

  return (
    <div className="home-slide">
      <div className="home-slide__img" style={{ position: 'relative' }}>
        <img alt="" data-src={img} className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>

      <div className="home-slide__info">
        <h2 className="home-slide__info-title">
          {before || ''} <span style={{ color: '#969696' }}>{span || ''}</span>{' '}
          {after || ''}
        </h2>

        {text && (
          <div className="home-slide__info-text">
            <p>{text}</p>
          </div>
        )}

        <div className="home-slide__info-btn">
          <Link className="button button--big" to={btnRoute}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
