/* eslint-disable camelcase */
import { createSelector } from 'reselect';
import { transformData } from '../../services/helpers';

export const userSelector = state => state.user;
export const tokenSelector = state => state.user.token;
export const userAuthBool = createSelector(tokenSelector, token => !!token);
export const participationNumberSelector = state =>
  state.user.data?.participation_number;

export const dataUserSelector = state => state.user?.user_data;
export const kycUserSelector = state => state.user;
export const socketTokenSelector = state => state.user.socket_token;
export const memcodeSelector = state => state.user.mem_code;
export const emailSelector = state => state.user.email;
export const usernameSelector = state => state.user.username;
export const referenceNumberSelector = state =>
  state.user?.user_data?.data?.reference_number;
export const withdrawal24Selector = state =>
  state.user?.withdrawal_in_usd_24hours;

export const registerDataSelector = createSelector(
  state => state.user.created_at,
  created_at => transformData(created_at, 'YYYY-MM-DD'),
);
