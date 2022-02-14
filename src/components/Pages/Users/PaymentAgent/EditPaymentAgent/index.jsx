import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaymentAgentForm from './PaymentAgentForm';
import Loader from '../../../../Base/Loader';
import { userSelector } from '../../../../../redux/auth/selectors';
import { paymentAgentSelector } from '../../../../../redux/paymentAgent/selectors';
import types from '../../../../../redux/types';

const EditPaymentAgent = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const paymentAgent = useSelector(paymentAgentSelector);

  useEffect(() => {
    if (!paymentAgent.countries)
      dispatch({ type: types.GET_COUNTRIES_DATA_START });

    if (user?.id)
      dispatch({
        type: types.GET_SINGLE_PAYMENT_AGENT_START,
        payload: { id: user?.id },
      });
  }, []);

  return paymentAgent.isLoading ? (
    <Loader />
  ) : (
    <PaymentAgentForm
      data={paymentAgent.singlePaymentAgent}
      countries={paymentAgent.countries}
    />
  );
};

export default EditPaymentAgent;
