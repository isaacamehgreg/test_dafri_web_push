import React, { useRef, useState } from 'react';
import L from 'i18n-react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Controller,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import step1 from '../../../../../../styles/img/step1.png';
import step2 from '../../../../../../styles/img/step2.png';
import step3 from '../../../../../../styles/img/step3.png';

SwiperCore.use([Navigation, Pagination, EffectFade, Controller]);

const slideTitles = [
  L.translate('Pages.Statics.HomePage.StepSection.StepSlider.item1'),
  L.translate('Pages.Statics.HomePage.StepSection.StepSlider.item2'),
  L.translate('Pages.Statics.HomePage.StepSection.StepSlider.item3'),
];

const StepSlider = () => {
  const [stepSwiper, setStepSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigationPrevBtnRef = useRef(null);
  const navigationNextBtnRef = useRef(null);
  const paginationRef = useRef(null);

  const navigation = {
    prevEl: navigationPrevBtnRef.current,
    nextEl: navigationNextBtnRef.current,
    disabledClass: 'disabled',
  };

  const step = L.translate(
    'Pages.Statics.HomePage.StepSection.StepSlider.item4',
  );

  const pagination = {
    el: paginationRef.current,
    clickable: true,
    bulletElement: 'div',
    bulletActiveClass: 'active',
    renderBullet: (index, className) => {
      return `
        <div class="home-step ${className}">
          <p class="home-step__text">${step} ${index + 1}</p>
          <button class="home-step__btn" />
        </div>
      `;
    },
  };

  const onInit = swiper => {
    swiper.params.navigation.prevEl = navigationPrevBtnRef.current;
    swiper.params.navigation.nextEl = navigationNextBtnRef.current;
    swiper.params.pagination.el = paginationRef.current;
    swiper.navigation.update();
  };

  return (
    <>
      <div className="step-left">
        <Swiper
          slidesPerView={1}
          speed={500}
          effect="fade"
          navigation={navigation}
          pagination={pagination}
          onSwiper={setStepSwiper}
          onInit={onInit}
          onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          controller={{ control: stepSwiper }}
        >
          <SwiperSlide>
            <div
              className="home-step-img"
              style={{ position: 'relative', marginTop: '0' }}
            >
              <img src={step1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="home-step-img"
              style={{ position: 'relative', marginTop: '0' }}
            >
              <img src={step2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="home-step-img"
              style={{ position: 'relative', marginTop: '0' }}
            >
              <img src={step3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="step-right">
        <div className="home-step-wrap">
          <h2 className="section-smaller-title section-smaller-title--type2">
            {slideTitles[activeIndex]}
          </h2>

          <div className="home-step-block">
            <button
              className="step-arrow step-arrow--prev"
              type="button"
              ref={navigationPrevBtnRef}
            >
              <svg
                width="46"
                height="28"
                viewBox="0 0 46 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.841 26.841C14.9623 27.7197 13.5377 27.7197 12.659 26.841L1.40901 15.591C0.530336 14.7123 0.530336 13.2877 1.40901 12.409L12.659 1.15901C13.5377 0.280324 14.9623 0.280324 15.841 1.15901C16.7197 2.03768 16.7197 3.46231 15.841 4.34099L8.43199 11.75L43 11.75C44.2426 11.75 45.25 12.7574 45.25 14C45.25 15.2426 44.2426 16.25 43 16.25L8.43198 16.25L15.841 23.659C16.7197 24.5377 16.7197 25.9623 15.841 26.841Z"
                  fill="#2DDD9D"
                />
              </svg>
            </button>

            <div className="home-steps" ref={paginationRef} />

            <button
              className="step-arrow step-arrow--next"
              type="button"
              ref={navigationNextBtnRef}
            >
              <svg
                width="46"
                height="28"
                viewBox="0 0 46 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.159 1.15901C31.0377 0.28033 32.4623 0.28033 33.341 1.15901L44.591 12.409C45.4697 13.2877 45.4697 14.7123 44.591 15.591L33.341 26.841C32.4623 27.7197 31.0377 27.7197 30.159 26.841C29.2803 25.9623 29.2803 24.5377 30.159 23.659L37.568 16.25H3C1.75736 16.25 0.75 15.2426 0.75 14C0.75 12.7574 1.75736 11.75 3 11.75H37.568L30.159 4.34099C29.2803 3.46231 29.2803 2.03769 30.159 1.15901Z"
                  fill="#2DDD9D"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSlider;
