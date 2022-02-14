import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransferTab from '../TransferTab';
import EmptyTable from '../../../../Base/EmptyTable';
import { secondExchangeAssetsSelector } from '../../../../../redux/exchange/selectors';
import types from '../../../../../redux/types';

const Swap = () => {
  const dispatch = useDispatch();
  const availableAssets = useSelector(secondExchangeAssetsSelector);
  let isEmpty;

  useEffect(() => {
    dispatch({
      type: types.GET_SECOND_ASSETS_START,
      payload: {
        type: 'for_user',
      },
    });
  }, []);

  if (!availableAssets) {
    isEmpty = true;
  } else isEmpty = !Object.keys(availableAssets)?.length;

  return isEmpty ? (
    <EmptyTable text="The list of exchange pairs is empty" />
  ) : (
    <TransferTab type="swap" />
  );
};

export default Swap;
