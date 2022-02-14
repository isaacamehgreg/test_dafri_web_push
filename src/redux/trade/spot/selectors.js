export const recentTradesSpotSelector = state => state.trade.spot.recentTrades;
export const orderBookSpotSelector = state => state.trade.spot.orderBook;
export const historySpotSelector = state => state.trade.spot.tables.history;
export const ordersSpotSelector = state => state.trade.spot.tables.orders;
export const swapSpotSelector = state => state.trade.spot.tables.swapdata;
export const tradeHistoryDataSpotSelector = state =>
  state.trade.spot.tables.tradeHistory;
export const tradeHistorySpotSelector = state =>
  state.trade.spot.tables.tradeHistory;
export const loadingTableSelector = state => state.trade.spot.tables;
