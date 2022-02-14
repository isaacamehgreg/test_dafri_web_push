import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Lazy } from 'swiper/core';
import PrevBtn from './Navigations/Prev';
import NextBtn from './Navigations/Next';
import Slide from './Slide';
import { userAuthBool } from '../../../../../redux/auth/selectors';
import routes from '../../../../../routes';
// css
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
// img
import topIMG1 from '../../../../../styles/img/top-home-slides/home-slide1.png';
import topIMG2 from '../../../../../styles/img/top-home-slides/home-slide2.png';
import topIMG3 from '../../../../../styles/img/top-home-slides/home-slide3.png';
import topIMG4 from '../../../../../styles/img/top-home-slides/home-slide4.png';
import topIMG5 from '../../../../../styles/img/top-home-slides/home-slide5.png';
import topIMG6 from '../../../../../styles/img/top-home-slides/home-slide6.png';
import topIMG7 from '../../../../../styles/img/top-home-slides/home-slide7.png';
import topIMG8 from '../../../../../styles/img/top-home-slides/home-slide8.png';
import topIMG9 from '../../../../../styles/img/top-home-slides/home-slide9.png';
// Swiper core
SwiperCore.use([Navigation, Autoplay, Lazy]);

const TopSlider = () => {
  const isLogin = useSelector(userAuthBool);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const autoplay = {
    delay: 10000,
  };

  const navigation = {
    prevEl: navigationPrevRef,
    nextEl: navigationNextRef,
  };

  const onBeforeInit = swiper => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
  };

  const mainRoute = isLogin
    ? routes.Trade.SpotTrade.path
    : routes.Auth.Login.path;

  const depositRoute = isLogin
    ? routes.Profile.Deposit.path
    : routes.Auth.Login.path;

  const dbaRoute = isLogin ? routes.Static.BuyDBA.path : routes.Auth.Login.path;

  const sliderData = [
    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item1'),
        span: null,
        after: null,
      },
      text: L.translate('Pages.Statics.HomePage.TopSlider.item2'),
      img: topIMG1,
      btnRoute: mainRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item3'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item4'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item5'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item6'),
      },
      text: null,
      img: topIMG2,
      btnRoute: dbaRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item7'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item8'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item9'),
        after: null,
      },
      text: null,
      img: topIMG3,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item10'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item11'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item12'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item13'),
      },
      text: L.translate('Pages.Statics.HomePage.TopSlider.item14'),
      img: topIMG4,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item15'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item16'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item17'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item18'),
      },
      text: L.translate('Pages.Statics.HomePage.TopSlider.item19'),
      img: topIMG5,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item20'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item21'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item22'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item23'),
      },
      text: L.translate('Pages.Statics.HomePage.TopSlider.item24'),
      img: topIMG6,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item25'),
    },

    {
      title: {
        before: null,
        span: L.translate('Pages.Statics.HomePage.TopSlider.item26'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item27'),
      },
      text: L.translate('Pages.Statics.HomePage.TopSlider.item28'),
      img: topIMG7,
      btnRoute: dbaRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item29'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item30'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item31'),
        after: null,
      },
      text: null,
      img: topIMG8,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item32'),
    },

    {
      title: {
        before: L.translate('Pages.Statics.HomePage.TopSlider.item33'),
        span: L.translate('Pages.Statics.HomePage.TopSlider.item34'),
        after: L.translate('Pages.Statics.HomePage.TopSlider.item35'),
      },
      text: null,
      img: topIMG9,
      btnRoute: depositRoute,
      btnText: L.translate('Pages.Statics.HomePage.TopSlider.item36'),
    },
  ];

  return (
    <div className="home-slider-wrap">
      <div className="home-slider">
        <PrevBtn btnRef={navigationPrevRef} />
        <NextBtn btnRef={navigationNextRef} />

        <Swiper
          slidesPerView={1}
          autoplay={{ ...autoplay }}
          navigation={navigation}
          onBeforeInit={onBeforeInit}
          speed={700}
          lazy
          loop
        >
          {sliderData.map((slide, i) => (
            <SwiperSlide key={slide.text + i}>
              <Slide
                img={slide.img}
                title={slide.title}
                text={slide.text}
                btnText={slide.btnText}
                btnRoute={slide.btnRoute}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSlider;
