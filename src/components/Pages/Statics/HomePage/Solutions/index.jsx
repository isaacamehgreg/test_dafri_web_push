import React from 'react';
import L from 'i18n-react';

import solution1 from '../../../../../styles/img/solution1.svg';
import solution2 from '../../../../../styles/img/solution2.svg';
import solution3 from '../../../../../styles/img/solution3.svg';
import solution4 from '../../../../../styles/img/solution4.svg';
import solution5 from '../../../../../styles/img/solution5.svg';
import solution6 from '../../../../../styles/img/solution6.svg';
import solution7 from '../../../../../styles/img/solution7.svg';
import solution8 from '../../../../../styles/img/solution8.svg';

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="custom-container">
        <div className="solution-box">
          <div className="solution-box__title">
            <p className="section-smaller-title">
              The instant{' '}
              <span className="d-inline d-xl-block">
                {L.translate('Pages.Statics.HomePage.Solutions.item1')}{' '}
              </span>
              {L.translate('Pages.Statics.HomePage.Solutions.item2')}
            </p>
          </div>

          <div className="solution-box__list">
            <div className="solution-row">
              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution1} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item3')}{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item4')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution2} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item5')}
                      &amp;{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item6')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution3} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item7')}{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item8')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution4} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item9')}{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item10')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution5} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item11')}{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item12')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution6} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item13')}{' '}
                      &amp;{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item14')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution7} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item15')}{' '}
                      <span className="d-inline d-xl-block">
                        {L.translate('Pages.Statics.HomePage.Solutions.item16')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="solution-col">
                <div className="solution">
                  <div className="d-flex solution__icon">
                    <img src={solution8} alt="" />
                  </div>
                  <div className="solution__text">
                    <p>
                      {L.translate('Pages.Statics.HomePage.Solutions.item17')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
