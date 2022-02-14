import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../../../redux/types';
import { buyDBASelector } from '../../../../redux/users/buyDBA/selectors';
import PerMonthInfo from './PerMonthInfo';
import STOOverviewTable from './STOOverviewTable';
import Timer from './Timer';

const MobileBuyDBA = () => {
  const dispatch = useDispatch();
  const buyDBA = useSelector(buyDBASelector);

  const { loading, information } = buyDBA;

  useEffect(() => {
    dispatch({
      type: types.GET_DBA_INFORMATION_START,
    });
  }, [dispatch]);

  return (
    <div className="mob-page">
      <section className="mob-info-section">
        <div className="custom-container">
          <div className="section-block">
            <p className="section-title">
              {L.translate('Pages.Users.MobileBuyDBA.item1')}
            </p>
            <div className="section-block__text">
              <p>{L.translate('Pages.Users.MobileBuyDBA.item2')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="dba-section dba-section--mob">
        <div className="custom-container">
          <div className="inner-content">
            <div className="dba-block">
              <h2 className="page-title">
                {L.translate('Pages.Users.MobileBuyDBA.item3')}
              </h2>
              <div className="dba-block__content">
                {information?.date_next_period && (
                  <Timer nextPeriodDate={information.date_next_period} />
                )}
              </div>
            </div>
            <div className="dba-block">
              <h2 className="page-title">
                {L.translate('Pages.Users.MobileBuyDBA.item4')}
              </h2>
              <div className="dba-block__content">
                <div className="sto-table">
                  <div className="table-box">
                    <div className="table table--sto-overview">
                      <div className="table-header">
                        <div className="tr">
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Users.MobileBuyDBA.item5')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Users.MobileBuyDBA.item6')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Users.MobileBuyDBA.item7')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Users.MobileBuyDBA.item8')}
                            </div>
                          </div>
                          <div className="td ">
                            <div className="td-name">
                              {L.translate('Pages.Users.MobileBuyDBA.item9')}
                            </div>
                          </div>
                        </div>
                      </div>
                      <STOOverviewTable
                        stoList={information?.dba_info}
                        loading={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-content-wrapper">
            <div className="text-content-block">
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item10')}</h3>
              <p>{L.translate('Pages.Users.MobileBuyDBA.item11')}</p>
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item12')}</h3>
              <p>{L.translate('Pages.Users.MobileBuyDBA.item13')}</p>
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item14')}</h3>
              <ul>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item15')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item16')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item17')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item18')}</li>
              </ul>
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item19')}</h3>
              <ul>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item20')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item21')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item22')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item23')}</li>
              </ul>
            </div>
            <PerMonthInfo stoList={information?.dba_info} />
            <div className="text-content-block  text-content-block--mt">
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item24')}</h3>
              <ul>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item25')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item26')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item27')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item28')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item29')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item30')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item31')}</li>
              </ul>
            </div>

            <div className="text-content-block text-content-block--mt">
              <h3>{L.translate('Pages.Users.MobileBuyDBA.item32')}</h3>
              <p>{L.translate('Pages.Users.MobileBuyDBA.item33')}</p>
              <ul>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item34')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item35')}</li>
                <li>{L.translate('Pages.Users.MobileBuyDBA.item36')}</li>
              </ul>
              <p>
                {L.translate('Pages.Users.MobileBuyDBA.item37')}
                <br />
                {L.translate('Pages.Users.MobileBuyDBA.item38')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileBuyDBA;
