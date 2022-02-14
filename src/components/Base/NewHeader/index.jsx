import React, { useEffect, useRef, useState } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { languages } from '../../../languages';
import { firstLatterToUppercase } from '../../../services/helpers';
import routes from '../../../routes';

import logo from '../../../styles/img/white-logo.svg';
import uk from '../../../styles/img/flags/uk.png';
import kenya from '../../../styles/img/flags/kenya.png';
import usa from '../../../styles/img/flags/usa.png';
import germany from '../../../styles/img/flags/germany.png';
import nigeria from '../../../styles/img/flags/nigeria.png';
import southAfrica from '../../../styles/img/flags/south-africa.png';
import types from '../../../redux/types';
import { tokenSelector } from '../../../redux/auth/selectors';

// This is minified layout from styles/css/new-home.css
const css = `a.col-md-3{text-decoration:none;color:#fff}a.col-md-3:hover{text-decoration:none;color:#fff}.new-home{font-family:Inter,sans-serif;background:#f9f9f9;color:#212833;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-overflow-scrolling:touch}.section-heading{font-size:1.75rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.d-md-none{display:none}.btn-primary{color:#1e2026;background-color:#3dd598;border-color:#3dd598}.btn-primary:focus,.btn-primary:hover{color:#1e2026;background-color:#0fd297;border-color:#0fd297;box-shadow:none}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:none}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0fd297;border-color:#0fd297}.navbar{background:#171c23}.navbar .nav-link{color:#fff;font-weight:700}.navbar .nav-link:hover{color:#3dd598}.navbar-nav>li+li{margin-left:20px}.navbar .nav-link.btn-primary{color:#1e2026;padding:4px 12px!important;margin:3px 0}.navbar-brand img{height:38px}.navbar-nav .dropdown-menu{background:#fff;border-radius:16px;padding:16px 8px;box-shadow:0 18.2682px 18.2682px rgb(0 0 0 / 10%);border:none}.navbar-expand-lg .navbar-nav .dropdown-menu.dropdown-menu-end{right:0;left:auto}.banner{padding:60px 0;position:relative;background-color:#12161b}.banner .banner-text h1{font-weight:700;color:#fff;font-size:30px;margin:0}.banner .banner-text h1 span{color:#3dd598}.banner .banner-text p{margin:12px 0;font-size:16px;color:#aeb4bc}.banner .banner-text .btn{font-weight:700;padding:7px 20px}.slide-cards{padding:60px 0;position:relative}.slide-card{margin-bottom:30px;background:#12161b;border-radius:18px;min-height:170px;padding:24px 20px 24px 80px;overflow:hidden}.slide-card .slide-number{height:72px;width:72px;display:block;background:#3dd598;border-radius:50%;font-size:48px;font-weight:700;text-align:center;line-height:72px;position:absolute;bottom:-10px;right:-10px;color:#12161b}.slide-card .title{margin:0}.slide-card .title h3{color:#fff;font-size:15px;line-height:24px;margin:0}.slide-card .slide-icon{position:absolute;left:20px;top:15px;color:#3dd598;font-size:48px}.coins-cards-list{padding:60px 0}.coin-list{background:#fff;box-shadow:0 0 40px rgb(0 0 0 / 8%);border-radius:5px;border:none}.coin-list .list-group-item{border-left:none;border-radius:0;border-right:none;padding:10px 30px}.coin-list .list-group-item:first-child{border-top:none}.coin-list .list-group-item:last-child{border-bottom:none}.coin-list .list-group-item.head strong{line-height:18px;color:#848e9c;font-weight:400;font-size:14px}.coin-list .list-group-item .coin-title{display:block;position:relative;padding:4px 10px 4px 60px}.coin-list .list-group-item .coin-bedge{position:absolute;left:0;top:0}.coin-list .list-group-item .coin-bedge img{display:block;image-rendering:auto;max-width:48px}.coin-list .list-group-item .coin-title h3{margin:0;font-size:18px;font-weight:600;margin-bottom:3px}.coin-list .list-group-item .coin-title p{margin:0;font-size:12px;color:#848e9c}.coin-list .list-group-item p{margin:0}.curve-bottom-bg{background-color:#12161b;padding-top:60px;position:relative}.ready-text{text-align:center}.ready-text p{font-size:18px;line-height:34px;color:#969696;margin-bottom:48px}.ready-text a.btn{margin-top:10px;border-radius:10px;text-transform:uppercase;padding:22px 50px;font-weight:600;font-size:18px}.ready-text a.btn i{font-size:24px;margin-right:8px}.ready-img{position:absolute;right:0;top:-25%}footer{padding:60px 0;background-color:#12161b}.hr-line{background:#2a2a2e;border-radius:10px;width:100%;height:3px;margin-bottom:60px}footer .footer-logo .logo-img{display:block;margin-bottom:90px}footer .footer-logo .list-inline-item{padding:0 3px}footer .footer-logo .list-inline-item a{display:block}footer .footer-logo .list-inline-item a img{display:block}footer .footer-logo .list-inline-item:first-child{padding-left:0}.address-box{margin-bottom:36px;display:block}.address-box h4{font-weight:700;font-size:16px;line-height:26px;color:#969696}.address-box address{font-size:14px;font-weight:400;line-height:30px;color:#969696;margin-bottom:20px;display:block}.address-box a{color:#3dd598;font-weight:700;font-size:16px;line-height:30px;display:block;text-decoration:none}.address-box a:hover{color:#fff}.list-nav li a{font-size:14px;line-height:40px;font-weight:400;color:#969696;display:block;text-decoration:none}.list-nav li a:hover{color:#3dd598}.contact-box{text-align:right;margin-bottom:100px;background:0 0;display:block}.contact-box a{color:#969696;font-weight:400;font-size:14px;line-height:30px;margin-bottom:8px;display:block;text-decoration:none}.contact-box a span{color:#3dd598;font-weight:700}.list-social{text-align:right;margin-bottom:60px}.list-social li{padding:0 10px}.list-social li a{color:#fff;font-size:22px;display:block}.list-social li a:hover{color:#3dd598}.copy-right{color:#969696;font-size:12px;line-height:18px;text-align:right;font-weight:400;display:block}footer .footer-logo{display:block;width:auto}@media (min-width:750px){.ready-text a.btn:first-of-type{margin-right:5px}}@media (max-width:767px){.coins-cards-list{padding:15px 0 30px 0}}@media (max-width:576px){.section-heading{font-size:24px;line-height:36px;font-weight:700}.my-order-2{order:2!important}.text-sm-end{text-align:right}.d-sm-block{display:block}.d-sm-none{display:none}.navbar-brand img{height:42px}.banner{padding:120px 0}.navbar-toggler{border-color:#fff;color:#fff}.banner-text{padding:0 15px}.banner .banner-text h1{font-size:36px}.banner .banner-text p{margin-bottom:15px}.slide-cards{padding:30px 0 15px}.slide-card{margin-bottom:30px}.navbar-nav>li+li{margin:0}.navbar .nav-link{text-align:center;line-height:42px}.navbar .nav-link.btn-primary{max-width:160px;padding:10px 12px!important;margin:0 auto}.coin-list{box-shadow:none;background:0 0}.coin-list .list-group-item{padding:10px 15px;background:#fff;box-shadow:0 0 40px rgb(0 0 0 / 8%);border-radius:8px;border:none;margin-bottom:30px;position:relative;font-size:14px}.coin-list .list-group-item:before{content:'';background:#fff;height:6px;width:calc(100% - 20px);position:absolute;bottom:-5px;left:10px;border-radius:5px;border-top:1px solid #fbfbfb;z-index:1}.coin-list .list-group-item:after{content:'';background:#fff;height:6px;width:calc(100% - 40px);position:absolute;bottom:-10px;left:20px;border-radius:5px;border-top:1px solid #fbfbfb;z-index:2}.coin-list .list-group-item .row{margin:0 -5px}.coin-list .list-group-item .row>div{padding:0 5px}.coin-list .list-group-item .coin-title{padding-left:50px}.coin-list .list-group-item .coin-title h3{font-size:16px}.coin-list .list-group-item .coin-bedge{left:-5px}.ready-text{padding:0;text-align:center}.ready-text p{font-size:16px;margin-bottom:14px}.ready-text a.btn{border-radius:10px;text-transform:uppercase;padding:10px 25px;font-weight:600;font-size:14px}.ready-text a.btn i{font-size:20px;vertical-align:-1px;margin-right:8px}.ready-img{top:-40%}footer{padding-bottom:15px}footer .footer-logo .list-inline-item:first-child{padding-left:0;margin:0}footer .footer-logo .logo-img{height:40px;display:inline-block;margin-bottom:30px}footer .footer-logo .list-inline{float:right;margin:6px 0 0 0}footer .footer-logo .list-inline-item{padding:0 5px}footer .footer-logo .list-inline-item a img{height:26px}.address-box h4{font-size:12px;line-height:24px}.address-box address{font-size:12px;line-height:22px;margin-bottom:0}.address-box a{font-size:12px;line-height:24px}.address-box{margin-bottom:16px}.list-nav li a{font-size:12px;line-height:24px}.contact-box{text-align:left;margin-bottom:15px}.contact-box a{font-size:12px;line-height:24px}.list-social{text-align:left;margin-bottom:15px}.list-social li a{font-size:14px}.copy-right{font-size:11px;text-align:left;line-height:12px}.navbar .navbar-collapse{max-height:0;overflow:hidden;transition:.5s all ease-in-out}.navbar .navbar-collapse.show{height:auto;max-height:1000px;transition:.5s max-height ease-in-out}footer .footer-logo{width:100%;display:block}footer .footer-logo img{width:auto}footer .contact-box{margin-left:0}button.nav-link.dropdown-toggle{margin:auto}.slide-card .title h3{font-size:16px}}`;

const NewHeader = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(tokenSelector);
  const { language } = useSelector(state => state.language);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleLanguage = () => {
    setIsOpenLanguage(!isOpenLanguage);

    if (isOpenLanguage) {
      setIsOpenLanguage(false);
    }
  };

  const handleCurrentLanguage = e => {
    const { id } = e.currentTarget;

    if (id) {
      dispatch({ type: types.SET_LANGUAGE_START, payload: id });
      setIsOpenLanguage(false);

      if (isOpenLanguage) {
        setIsOpenLanguage(false);
      }
    }
  };

  const createTag = (tag, id, url) => {
    const htmlTag = document.createElement(tag);
    htmlTag.setAttribute('id', id);

    if (tag === 'link') {
      htmlTag.setAttribute('href', url);
      htmlTag.setAttribute('rel', 'stylesheet');
    } else if (tag === 'script') {
      htmlTag.setAttribute('src', url);
    } else if (tag === 'style') {
      tag.cssText = url;
    }

    document.head.appendChild(htmlTag);
  };

  const node = useRef();

  const handleOutSideClick = e => {
    if (!node?.current?.contains(e.target)) {
      setIsOpenLanguage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => document.removeEventListener('mousedown', handleOutSideClick);
  }, []);

  useEffect(() => {
    createTag(
      'link',
      'bootstrapmin',
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    );

    createTag(
      'link',
      'font',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    );

    createTag(
      'link',
      'bootstrapicons',
      'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css',
    );

    return () => {
      const bootstrapmin = document.getElementById('bootstrapmin');
      const font = document.getElementById('font');
      const bootstrapicons = document.getElementById('bootstrapicons');

      bootstrapmin.remove();
      font.remove();
      bootstrapicons.remove();
    };
  }, []);

  return (
    <>
      <style>{css}</style>

      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to={routes.Root.path}>
          <img src={logo} alt="" />
        </Link>

        <button
          className={`navbar-toggler ${!isOpen ? 'collapsed' : ''} `}
          type="button"
          onClick={handleToggleNavbar}
        >
          <i className="bi bi-list" />
        </button>

        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={routes.Root.path}>
                {L.translate('Base.NewHeader.item8')}
              </NavLink>
            </li>

            {isLogin && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={routes.Profile.WalletWithdraw.path}
                  >
                    {L.translate('Base.NewHeader.item12')}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={routes.Profile.Deposit.path}
                  >
                    {L.translate('Base.NewHeader.item9')}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={routes.Profile.Withdraw.path}
                  >
                    {L.translate('Base.NewHeader.item10')}
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to={routes.Trade.SpotTrade.path}>
                {L.translate('Base.NewHeader.item1')}
              </NavLink>
            </li>

            {isLogin && (
              <li className="nav-item">
                <NavLink className="nav-link" to={routes.Profile.Transfer.path}>
                  {L.translate('Base.NewHeader.item2')}
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.Profile.Deposit.path,
                }}
              >
                {L.translate('Base.NewHeader.item4')}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: routes.Trade.SpotTrade.path,
                  state: { currency: 'dba' },
                }}
              >
                {L.translate('Base.NewHeader.item11')}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav d-flex ">
            {!isLogin && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to={routes.Auth.Login.path}>
                    {L.translate('Base.NewHeader.item6')}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link btn btn-primary"
                    to={routes.Auth.Signup.path}
                  >
                    {L.translate('Base.NewHeader.item7')}
                  </NavLink>
                </li>
              </>
            )}

            <li ref={node}>
              <button
                className="nav-link dropdown-toggle"
                onClick={handleToggleLanguage}
              >
                {firstLatterToUppercase(language.toLowerCase())}
              </button>

              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  isOpenLanguage ? 'show' : ''
                }`}
              >
                {languages
                  ? Object.keys(languages).map(key => {
                      let icon;
                      let country;

                      switch (key) {
                        case 'EN':
                        case 'GB':
                        case 'GBR':
                          icon = uk;
                          country = 'UK';
                          break;

                        case 'KE':
                        case 'KEN':
                          icon = kenya;
                          country = 'Kenya';
                          break;

                        case 'US':
                        case 'USA':
                          icon = usa;
                          country = 'USA';
                          break;

                        case 'DE':
                        case 'DEU':
                          icon = germany;
                          country = 'Germany';
                          break;

                        case 'NG':
                        case 'NGA':
                          icon = nigeria;
                          country = 'Nigeria';
                          break;

                        case 'ZA':
                        case 'ZAF':
                          icon = southAfrica;
                          country = 'South Africa';
                          break;

                        default:
                          icon = uk;
                      }

                      return (
                        <li key={key}>
                          <button
                            id={key}
                            type="button"
                            className="dropdown-item"
                            onClick={handleCurrentLanguage}
                          >
                            <img src={icon} alt="UK" /> {country}
                          </button>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NewHeader;
