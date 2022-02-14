import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import FirstBlock from './FirstBlock';
import BuyDBAForm from './BuyDBAForm';
import STOOverviewTable from '../../Users/MobileBuyDBA/STOOverviewTable';
import Timer from '../../Users/MobileBuyDBA/Timer';
import TextComponent from './TextComponent';
import { buyDBASelector } from '../../../../redux/users/buyDBA/selectors';
import types from '../../../../redux/types';

const BuyDBA = () => {
  const dispatch = useDispatch();
  const buyDBA = useSelector(buyDBASelector);

  const { loading, information } = buyDBA;

  useEffect(() => {
    dispatch({
      type: types.GET_DBA_INFORMATION_START,
    });
  }, [dispatch]);
  return (
    <>
      <FirstBlock />

      <section className="dba-section">
        <div className="custom-container">
          <BuyDBAForm />

          <div className="inner-content">
            <div className="dba-block">
              <h2 className="page-title">
                {L.translate('Pages.Statics.BuyDBA.item1')}
              </h2>
              <div className="dba-block__content">
                {information?.date_next_period && (
                  <Timer nextPeriodDate={information.date_next_period} />
                )}
              </div>
            </div>

            <div className="dba-block">
              <h2 className="page-title">
                {L.translate('Pages.Statics.BuyDBA.item7')}
              </h2>
              <div className="dba-block__content">
                <div className="sto-table">
                  <div className="table-box">
                    <div className="table table--sto-overview">
                      <div className="table-header">
                        <div className="tr">
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Statics.BuyDBA.item2')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Statics.BuyDBA.item3')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Statics.BuyDBA.item4')}
                            </div>
                          </div>
                          <div className="td">
                            <div className="td-name">
                              {L.translate('Pages.Statics.BuyDBA.item5')}
                            </div>
                          </div>
                          <div className="td ">
                            <div className="td-name">
                              {L.translate('Pages.Statics.BuyDBA.item6')}
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

          <TextComponent information={information} />
        </div>
      </section>
    </>
  );
};

export default BuyDBA;
