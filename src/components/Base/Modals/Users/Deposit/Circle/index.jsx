import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  tokenSelector,
  userSelector,
} from '../../../../../../redux/auth/selectors';
import routes from '../../../../../../routes';
import Circle from './CircleComponent';

const CircleModal = ({ amount, assetID }) => {
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);

  if (!user && !token) return <Redirect to={routes.Auth.Login.path} />;

  return <Circle amount={amount} assetID={assetID} />;
};

export default CircleModal;
