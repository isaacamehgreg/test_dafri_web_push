import React, { useState } from 'react';
import L from 'i18n-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import routes from '../../../../routes';
import arrow from '../../../../styles/img/faq-arrow.svg';

const FAQ = () => {
  const getFaqClasses = value => {
    return classNames('faq', { active: value });
  };

  const [faq1, setFaq1] = useState(false);
  const faq1Handler = () => setFaq1(!faq1);
  const faq1Class = getFaqClasses(faq1);

  const [faq2, setFaq2] = useState(false);
  const faq2Handler = () => setFaq2(!faq2);
  const faq2Class = getFaqClasses(faq2);

  const [faq3, setFaq3] = useState(false);
  const faq3Handler = () => setFaq3(!faq3);
  const faq3Class = getFaqClasses(faq3);

  const [faq4, setFaq4] = useState(false);
  const faq4Handler = () => setFaq4(!faq4);
  const faq4Class = getFaqClasses(faq4);

  const [faq5, setFaq5] = useState(false);
  const faq5Handler = () => setFaq5(!faq5);
  const faq5Class = getFaqClasses(faq5);

  const [faq6, setFaq6] = useState(false);
  const faq6Handler = () => setFaq6(!faq6);
  const faq6Class = getFaqClasses(faq6);

  const [faq7, setFaq7] = useState(false);
  const faq7Handler = () => setFaq7(!faq7);
  const faq7Class = getFaqClasses(faq7);

  const [faq8, setFaq8] = useState(false);
  const faq8Handler = () => setFaq8(!faq8);
  const faq8Class = getFaqClasses(faq8);

  const [faq9, setFaq9] = useState(false);
  const faq9Handler = () => setFaq9(!faq9);
  const faq9Class = getFaqClasses(faq9);

  const [faq10, setFaq10] = useState(false);
  const faq10Handler = () => setFaq10(!faq10);
  const faq10Class = getFaqClasses(faq10);

  const [faq11, setFaq11] = useState(false);
  const faq11Handler = () => setFaq11(!faq11);
  const faq11Class = getFaqClasses(faq11);

  const [faq12, setFaq12] = useState(false);
  const faq12Handler = () => setFaq12(!faq12);
  const faq12Class = getFaqClasses(faq12);

  const [faq13, setFaq13] = useState(false);
  const faq13Handler = () => setFaq13(!faq13);
  const faq13Class = getFaqClasses(faq13);

  const [faq14, setFaq14] = useState(false);
  const faq14Handler = () => setFaq14(!faq14);
  const faq14Class = getFaqClasses(faq14);

  const [faq15, setFaq15] = useState(false);
  const faq15Handler = () => setFaq15(!faq15);
  const faq15Class = getFaqClasses(faq15);

  const [faq16, setFaq16] = useState(false);
  const faq16Handler = () => setFaq16(!faq16);
  const faq16Class = getFaqClasses(faq16);

  const [faq17, setFaq17] = useState(false);
  const faq17Handler = () => setFaq17(!faq17);
  const faq17Class = getFaqClasses(faq17);

  const [faq18, setFaq18] = useState(false);
  const faq18Handler = () => setFaq18(!faq18);
  const faq18Class = getFaqClasses(faq18);

  const [faq19, setFaq19] = useState(false);
  const faq19Handler = () => setFaq19(!faq19);
  const faq19Class = getFaqClasses(faq19);

  return (
    <section className="content-section">
      <div className="custom-container">
        <h2 className="section-title section-title--center">
          {L.translate('Pages.Statics.FAQ.item1')}
        </h2>
        <div className="faq-block">
          <div className="faq-block__list">
            <div className={faq1Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq1Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item2')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <p>{L.translate('Pages.Statics.FAQ.item3')}</p>
                  <ul>
                    <li>{L.translate('Pages.Statics.FAQ.item4')}</li>
                    <li>{L.translate('Pages.Statics.FAQ.item5')}</li>
                    <li>{L.translate('Pages.Statics.FAQ.item6')}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={faq2Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq2Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item7')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <p>{L.translate('Pages.Statics.FAQ.item8')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item9')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item10')}</p>
                </div>
              </div>
            </div>
            <div className={faq3Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq3Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item11')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <p>{L.translate('Pages.Statics.FAQ.item12')}</p>
                  <ul>
                    <li>{L.translate('Pages.Statics.FAQ.item13')}</li>
                    <li>{L.translate('Pages.Statics.FAQ.item14')}</li>
                    <li>{L.translate('Pages.Statics.FAQ.item15')}</li>
                    <li>{L.translate('Pages.Statics.FAQ.item16')}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={faq4Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq4Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item17')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <p>{L.translate('Pages.Statics.FAQ.item18')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item19')}</p>
                </div>
              </div>
            </div>
            <div className={faq5Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq5Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item20')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <p>{L.translate('Pages.Statics.FAQ.item21')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item22')}</p>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item23')}</p>
            </div>
            <div className={faq6Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq6Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item24')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item25')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item26')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item27')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item28')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item29')} </p>
                    <b>{L.translate('Pages.Statics.FAQ.item30')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item31')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item32')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item33')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item34')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item35')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item36')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item37')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item38')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item39')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item40')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item41')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item42')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item43')} </p>
                    <b>{L.translate('Pages.Statics.FAQ.item44')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item45')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item46')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item47')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item48')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item49')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item50')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item51')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item52')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item53')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item54')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item55')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item56')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item57')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item58')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item59')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item60')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item61')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item62')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item63')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item64')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item65')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item66')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item67')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item68')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item69')} </p>
                    <p>
                      {L.translate('Pages.Statics.FAQ.item70')}
                      <Link to={routes.Auth.Signup.path} className="web-link">
                        https://www.dafriexchange.com/account/signup
                      </Link>
                      {L.translate('Pages.Statics.FAQ.item71')}
                    </p>
                    <p>{L.translate('Pages.Statics.FAQ.item72')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item73')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item74')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item75')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item76')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item77')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item78')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item79')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item80')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item81')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item82')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item83')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item84')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item85')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item86')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item87')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item88')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item89')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item90')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item91')} </b>
                    <ul>
                      <li>{L.translate('Pages.Statics.FAQ.item92')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item93')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item94')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item95')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item96')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item97')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item98')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={faq7Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq7Handler}
              >
                <p className="d-felx faq-header__title">Profile</p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item99')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item100')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item101')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item102')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item103')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item104')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item105')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item106')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item107')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item108')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item109')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item110')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item111')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item112')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item113')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item114')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item115')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item116')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item117')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item118')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item119')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item120')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item121')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item122')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item123')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item124')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item125')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item126')}</p>
                    <p>
                      {L.translate('Pages.Statics.FAQ.item127')}
                      <Link to={routes.Auth.Login.path} className="web-link">
                        www.DafriExchange.com
                      </Link>
                      {L.translate('Pages.Statics.FAQ.item128')}
                    </p>
                    <p>{L.translate('Pages.Statics.FAQ.item129')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item130')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item131')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item132')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item133')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item134')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item135')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item136')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item137')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item138')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item139')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item140')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item141')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item142')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item143')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item144')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item145')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item146')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item147')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item148')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item149')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item150')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item151')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item152')}</p>
            </div>
            <div className={faq8Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq8Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item153')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item154')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item155')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item156')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item157')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item158')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item159')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item160')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item161')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item162')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item163')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item164')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item165')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item166')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item167')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item168')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item169')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item170')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item171')}</b>
                    <ul>
                      <li>{L.translate('Pages.Statics.FAQ.item172')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item173')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item174')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item175')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item176')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item177')}</li>
                      <li>{L.translate('Pages.Statics.FAQ.item178')}</li>
                    </ul>
                    <b>{L.translate('Pages.Statics.FAQ.item179')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item180')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item181')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item182')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item183')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item184')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item185')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item186')}</p>
            </div>
            <div className={faq9Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq9Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item187')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item188')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item189')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item190')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item191')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item192')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item193')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item194')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item195')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item196')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item197')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item198')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item199')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item200')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item201')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item202')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item203')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item204')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item205')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item206')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item207')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={faq10Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq10Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item208')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item209')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item210')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item211')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item212')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item213')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item214')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item215')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item216')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item217')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item218')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item219')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item220')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item221')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item222')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item223')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item224')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item225')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item226')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item227')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item228')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item229')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item230')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item231')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item232')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item233')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item234')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item235')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item236')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item237')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item238')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item239')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item240')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item241')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item242')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item243')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item244')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item245')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item246')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item247')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item248')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item249')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item250')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item251')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item252')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item253')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item254')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item255')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item256')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item257')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item258')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item259')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item260')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item261')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item262')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item263')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item264')}</p>
            </div>
            <div className={faq11Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq11Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item265')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item266')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item267')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item268')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item269')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item270')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item271')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item272')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item273')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item274')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item275')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item276')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item277')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item278')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item279')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item280')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item281')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item282')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item283')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item284')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item285')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item286')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item287')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item288')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item289')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item290')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item291')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item292')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item293')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item294')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item295')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item296')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item297')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item298')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item299')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={faq12Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq12Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item300')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item301')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item302')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item303')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item304')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item305')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item306')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item307')}</p>
                </div>
              </div>
            </div>
            <div className={faq13Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq13Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item308')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item309')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item310')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item311')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item312')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item313')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item314')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item315')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item316')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item317')}</p>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item318')}</p>
            </div>
            <div className={faq14Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq14Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item319')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item320')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item321')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item322')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item323')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item324')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item325')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item326')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item327')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item328')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item329')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item330')} </b>
                    <p>{L.translate('Pages.Statics.FAQ.item331')} </p>
                    <p>{L.translate('Pages.Statics.FAQ.item332')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item333')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item334')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item335')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item336')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item337')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item338')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item339')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item340')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={faq15Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq15Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item341')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item342')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item343')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item344')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item345')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item346')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item347')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item348')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item349')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item350')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item351')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item352')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item353')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item354')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item355')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item356')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item357')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item358')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item359')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item360')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item361')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item362')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item363')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item364')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item365')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item366')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item367')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item368')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item369')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item370')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item371')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item372')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item373')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item374')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item375')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item376')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item377')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item378')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item379')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item380')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item381')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item382')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item383')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item384')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item385')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item386')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item387')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item388')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item389')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item390')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item391')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item392')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item393')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item394')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item395')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item396')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item397')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item398')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item399')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item400')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item401')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item402')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item403')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item404')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item405')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item406')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item407')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item408')} </b>
                  <p>{L.translate('Pages.Statics.FAQ.item409')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item410')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item411')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item412')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item413')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item414')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item415')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item416')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item417')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item418')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item419')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item420')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item421')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item422')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item423')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item424')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item425')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item426')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item427')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item428')}</p>
                </div>
              </div>
            </div>
            <div className={faq16Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq16Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item429')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item430')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item431')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item432')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item433')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item434')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item435')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item436')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item437')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item438')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item439')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item440')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item441')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item442')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item443')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item444')} </p>
                  <p>{L.translate('Pages.Statics.FAQ.item445')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item446')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item447')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item448')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item449')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item450')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item451')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item452')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item453')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item454')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item455')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item456')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item457')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item458')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item459')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item460')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item461')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item462')}</p>
                  <p>
                    {L.translate('Pages.Statics.FAQ.item463')}
                    <a
                      href="https://etherscan.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://etherscan.io
                    </a>
                  </p>
                  <p>{L.translate('Pages.Statics.FAQ.item464')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item465')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item466')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item467')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item468')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item469')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item470')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item471')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item472')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item473')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item474')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item475')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item476')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item477')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item478')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item479')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item480')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item481')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item482')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item483')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item484')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item485')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item486')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item487')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item488')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item489')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item490')} </b>
                  <p>{L.translate('Pages.Statics.FAQ.item491')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item492')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item493')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item494')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item495')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item496')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item497')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item498')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item499')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item500')}</p>
                </div>
              </div>
            </div>
            <div className="faq-title">
              <p>{L.translate('Pages.Statics.FAQ.item501')}</p>
            </div>
            <div className={faq17Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq17Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item502')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <div className="desc">
                    <b>{L.translate('Pages.Statics.FAQ.item503')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item504')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item505')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item506')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item507')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item508')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item509')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item510')}</p>
                    <b>{L.translate('Pages.Statics.FAQ.item511')}</b>
                    <p>{L.translate('Pages.Statics.FAQ.item512')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item513')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item514')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item515')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item516')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item517')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item518')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item519')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item520')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item521')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item522')}</p>
                    <p>{L.translate('Pages.Statics.FAQ.item523')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={faq18Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq18Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item524')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item525')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item526')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item527')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item528')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item529')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item530')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item531')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item532')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item533')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item534')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item535')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item536')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item537')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item538')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item539')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item540')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item541')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item542')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item543')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item544')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item545')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item546')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item547')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item548')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item549')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item550')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item551')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item552')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item553')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item554')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item555')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item556')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item557')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item558')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item559')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item560')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item561')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item562')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item563')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item564')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item565')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item566')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item567')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item568')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item569')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item570')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item571')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item572')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item573')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item574')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item575')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item576')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item577')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item578')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item579')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item580')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item581')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item582')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item583')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item584')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item585')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item586')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item587')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item588')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item589')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item590')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item591')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item592')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item593')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item594')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item595')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item596')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item597')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item598')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item599')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item600')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item601')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item602')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item603')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item604')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item605')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item606')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item607')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item608')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item609')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item610')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item611')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item612')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item613')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item614')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item615')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item616')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item617')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item618')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item619')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item620')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item621')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item622')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item623')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item624')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item625')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item626')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item627')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item628')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item629')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item630')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item631')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item632')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item633')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item634')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item635')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item636')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item637')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item638')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item639')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item640')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item641')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item642')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item643')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item644')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item645')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item646')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item745')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item647')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item648')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item649')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item650')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item651')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item652')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item653')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item654')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item655')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item656')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item657')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item658')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item659')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item660')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item661')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item662')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item663')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item664')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item665')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item666')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item667')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item668')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item669')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item670')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item671')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item672')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item673')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item674')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item675')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item676')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item677')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item678')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item679')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item680')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item681')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item682')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item683')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item684')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item685')}.</p>
                  <p>{L.translate('Pages.Statics.FAQ.item686')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item687')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item688')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item689')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item690')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item691')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item692')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item693')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item694')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item695')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item696')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item697')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item698')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item699')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item700')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item701')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item702')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item703')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item704')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item705')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item706')}</p>
                </div>
              </div>
            </div>
            <div className={faq19Class}>
              <div
                className="faq-header"
                role="presentation"
                onClick={faq19Handler}
              >
                <p className="d-felx faq-header__title">
                  {L.translate('Pages.Statics.FAQ.item707')}
                </p>
                <button className="d-flex faq-header__arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <div className="faq-content">
                <div className="text-content-block">
                  <b>{L.translate('Pages.Statics.FAQ.item708')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item709')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item710')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item711')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item712')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item713')}</b>
                  <p>1. {L.translate('Pages.Statics.FAQ.item714')}</p>
                  <p>2. {L.translate('Pages.Statics.FAQ.item715')}</p>
                  <p>3. {L.translate('Pages.Statics.FAQ.item716')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item717')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item718')}</p>
                  <p>1. {L.translate('Pages.Statics.FAQ.item719')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item720')}</p>
                  <p>2. {L.translate('Pages.Statics.FAQ.item721')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item722')}</p>
                  <p>3. {L.translate('Pages.Statics.FAQ.item723')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item724')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item725')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item726')}</b>
                  <p>1. {L.translate('Pages.Statics.FAQ.item727')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item728')}</p>
                  <p>2. {L.translate('Pages.Statics.FAQ.item729')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item730')}</p>
                  <p>3. {L.translate('Pages.Statics.FAQ.item731')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item732')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item733')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item734')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item735')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item736')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item737')}</p>
                  <b>{L.translate('Pages.Statics.FAQ.item738')}</b>
                  <p>{L.translate('Pages.Statics.FAQ.item739')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item740')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item741')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item742')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item743')}</p>
                  <p>{L.translate('Pages.Statics.FAQ.item744')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
