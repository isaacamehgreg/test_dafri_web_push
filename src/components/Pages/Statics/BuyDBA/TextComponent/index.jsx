import React from 'react';
import L from 'i18n-react';
import PerMonthInfo from '../../../Users/MobileBuyDBA/PerMonthInfo';

const TextComponent = ({ information }) => {
  return (
    <div className="text-content-wrapper">
      <div className="text-content-block">
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item1')}</h3>
        <p>{L.translate('Pages.Statics.BuyDBA.TextComponent.item2')}</p>
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item3')}</h3>
        <p>{L.translate('Pages.Statics.BuyDBA.TextComponent.item4')}</p>
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item5')}</h3>
        <ul>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item6')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item7')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item8')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item9')}</li>
        </ul>
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item10')}</h3>
        <ul>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item11')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item12')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item13')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item14')}</li>
        </ul>
      </div>

      <PerMonthInfo stoList={information?.dba_info} />

      <div className="text-content-block  text-content-block--mt">
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item15')}</h3>
        <ul>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item16')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item17')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item18')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item19')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item20')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item21')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item22')}</li>
        </ul>
      </div>
      <div className="content-extra">
        <p>{L.translate('Pages.Statics.BuyDBA.TextComponent.item23')}</p>
        <a
          href="https://www.digitalbankofafrica.org/static/media/Dafribank-Limited-DBA-Whitepaper.b001294c.pdf"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="d-flex link__icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 18.75C20 19.4404 19.4404 20 18.75 20H1.25C0.559649 20 0 19.4404 0 18.75C0 18.0596 0.559649 17.5 1.25 17.5H18.75C19.4404 17.5 20 18.0596 20 18.75ZM9.11613 14.7902C9.36024 15.0343 9.68008 15.1563 10 15.1563C10.3198 15.1563 10.6398 15.0342 10.8839 14.7902L15.3127 10.3614C15.8009 9.8732 15.8009 9.08176 15.3127 8.59359C14.8245 8.10543 14.0331 8.10543 13.5449 8.59359L11.25 10.8885V1.25C11.25 0.559648 10.6904 0 10 0C9.30965 0 8.75 0.559648 8.75 1.25V10.8885L6.45508 8.59359C5.96692 8.10543 5.17547 8.10543 4.68731 8.59359C4.19914 9.08176 4.19914 9.8732 4.68731 10.3614L9.11613 14.7902Z"
                fill="#7F65FF"
              />
            </svg>
          </span>
          {L.translate('Pages.Statics.BuyDBA.TextComponent.item24')}
        </a>
      </div>
      <div className="text-content-block text-content-block--mt">
        <h3>{L.translate('Pages.Statics.BuyDBA.TextComponent.item25')}</h3>
        <p>{L.translate('Pages.Statics.BuyDBA.TextComponent.item26')}</p>
        <ul>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item27')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item28')}</li>
          <li>{L.translate('Pages.Statics.BuyDBA.TextComponent.item29')}</li>
        </ul>
        <p>
          {L.translate('Pages.Statics.BuyDBA.TextComponent.item30')}
          <br />
          {L.translate('Pages.Statics.BuyDBA.TextComponent.item31')}
        </p>
      </div>
    </div>
  );
};

export default TextComponent;
