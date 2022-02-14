import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import routes from '../../../../../../routes';
import modalStatus from '../../../../../../styles/img/modal-status1.svg';
import types from '../../../../../../redux/types';

const BuyFormStep3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const goToDBAAsset = () => history.push(routes.Profile.LockedToken.path);

  useEffect(() => {
    dispatch({ type: types.BUY_DBA_CLEAR });
    dispatch({ type: types.CHECK_DBA_FAILURE });
  }, []);

  return (
    <section className="order-section">
      <div className="custom-container">
        <div className="dba-order ">
          <div className="dba-status">
            <p className="block-title">
              {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep3.item1')}
            </p>

            <div className="status-icon">
              <img src={modalStatus} alt="" />
            </div>

            <div className="dba-status__text">
              <p>
                {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep3.item2')}
              </p>
            </div>
          </div>

          <div className="form-submit">
            <button
              className="button button--type4 button--big button--big--round button--wide"
              type="button"
              onClick={goToDBAAsset}
            >
              {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep3.item3')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyFormStep3;
