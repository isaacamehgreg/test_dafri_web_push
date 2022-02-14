import { combineReducers } from 'redux';
import spot from './spot/reducers';
// import margin from './margin/reducers';
import calculate from './calculate/reducer';
// import futures from './futures/reducers';
// import tradeVolumes from './tradeVolumes/reducers';

export default combineReducers({
  spot,
  // margin,
  calculate,
  // futures,
  // tradeVolumes,
});
