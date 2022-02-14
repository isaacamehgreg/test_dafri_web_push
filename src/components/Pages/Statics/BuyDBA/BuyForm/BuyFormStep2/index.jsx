import React, { useEffect } from 'react';
import L from 'i18n-react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import routes from '../../../../../../routes';
import { buyDBASelector } from '../../../../../../redux/users/buyDBA/selectors';
import types from '../../../../../../redux/types';
import { cropNumber } from '../../../../../../services/helpers';

const BuyFormStep2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { step1FormData, goToNextStepForm, buyDBAFormStatus } =
    useSelector(buyDBASelector);

  useEffect(() => {
    if (buyDBAFormStatus?.status === 'success') {
      history.push(routes.Static.BuyDBAFormStep3.path);
    }
  }, [buyDBAFormStatus]);

  if ((!step1FormData || !goToNextStepForm) && !buyDBAFormStatus) {
    return <Redirect to={routes.Static.BuyDBA.path} />;
  }

  const {
    participation_number,
    amount,
    asset_id,
    selectedCurrency: { code },
  } = step1FormData;

  const goBack = () => history.goBack();

  const goToStep3 = () => {
    dispatch({
      type: types.BUY_DBA_START,
      payload: {
        participation_number,
        amount,
        asset_id,
        type_form: 2,
      },
    });
  };

  return (
    <section className="order-section">
      <div className="custom-container">
        <div className="dba-order ">
          <div className="dba-total">
            <p className="block-title">
              {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item1')}
            </p>
            <div className="total-info-box">
              <div className="total-info">
                <p className="total-info__name">
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item2',
                  )}
                </p>

                <div className="total-info__value">
                  <p>{code.toUpperCase()}</p>
                </div>
              </div>

              <div className="total-info">
                <p className="total-info__name">
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item3',
                  )}
                </p>

                <div className="total-info__value">
                  <p>{amount}</p>
                </div>
              </div>

              <div className="total-info">
                <p className="total-info__name">
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item4',
                  )}
                </p>

                <div className="total-info__value">
                  <p>{participation_number}</p>
                </div>
              </div>

              <div className="total-info">
                <p className="total-info__name">
                  {L.translate(
                    'Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item5',
                  )}
                </p>
                <div className="total-info__value total-info__value--extra">
                  <p>{cropNumber(goToNextStepForm?.quantity_DBA, 8)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-submit form-submit--sb">
            <div className="form-submit__col">
              <button
                className="button button--type4 button--big button--big--round"
                type="button"
                onClick={goBack}
              >
                {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item6')}
              </button>
            </div>

            <div className="form-submit__col">
              <button
                className="button button--big button--big--round"
                type="button"
                onClick={goToStep3}
              >
                {L.translate('Pages.Statics.BuyDBA.BuyForm.BuyFormStep2.item7')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyFormStep2;
