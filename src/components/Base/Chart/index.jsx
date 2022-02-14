import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { widget, onready } from './charting_library/charting_library.min';
import Datafeed, { setChartDecimal } from './datafeed';
import './index.css';
import { getTimezone } from '../../../services/helpers';
import {
  toggleSelectResolution,
  setSelectResolution,
  newHeadInterval,
  newHeadIntervalPopups,
} from './helpers/interval';
import { period } from './datafeed/historyProvider';
import { currentPairSelector } from '../../../redux/currentPair/selectors';
// import { selectedContractSelector } from '../../../redux/temporary/selectors';
import { intervalLsSelector } from '../../../redux/interval/selectors';
import { languageSelector } from '../../../redux/lng/selectors';
import { storeCurentDecimal } from '../../../redux/decimals/selectors';

const Chart = () => {
  // const contract = useSelector(selectedContractSelector);
  const pair = useSelector(currentPairSelector);
  const intervalLs = useSelector(intervalLsSelector);
  const { language } = useSelector(languageSelector);

  const pathname = window?.location?.pathname;
  const getSymbol = pathname => {
    switch (true) {
      case pathname.includes('/spot'):
        return pair.replace('_', '/').toUpperCase();
      case pathname.includes('/chart'):
        return pair.replace('_', '/').toUpperCase();
      // case pathname.includes('/margin'):
      //   return pair.replace('_', '/').toUpperCase();
      // case pathname.includes('/futures'):
      //   return contract; // pushToMiddle(contract, '/'); // TEMP, need correct backend
      default:
        return 'BTC/USDT';
    }
  };

  const symbol = getSymbol(pathname);
  const symbolName = 'usd';
  const datafeed = Datafeed;

  const decimal = useSelector(storeCurentDecimal);
  if (decimal) {
    setChartDecimal(decimal);
  }

  const interval = intervalLs || '1'; // 1 minutes
  const container_id = 'Chart_Container';
  const library_path = '/charting_library/';
  const theme = 'Light';
  // const locale =
  //   language?.toLowerCase() === 'cn' ? 'zh' : language?.toLowerCase() || 'en';
  const locale = 'en';

  const charts_storage_api_version = '1.13';
  const client_id = 'nostafaratum';
  const disabled_features = ['use_localstorage_for_settings'];
  const fullscreen = false;
  const autosize = true;
  const studies_overrides = {};
  const loading_screen = { backgroundColor: '#fff' };
  const toolbar_bg = '#fff';
  const timezone = getTimezone();
  const overrides = {
    'mainSeriesProperties.showCountdown': true,
    'paneProperties.background': '#fff',
    'paneProperties.vertGridProperties.color': '#343a40',
    'paneProperties.horzGridProperties.color': '#343a40',
    'symbolWatermarkProperties.transparency': 90,
    'scalesProperties.textColor': '#AAA',
    // "mainSeriesProperties.visible":false,
    'mainSeriesProperties.candleStyle.wickUpColor': '#53B987',
    'mainSeriesProperties.candleStyle.wickDownColor': '#EB4D5C',
  };

  useEffect(() => {
    const widgetOptions = {
      symbol,
      symbolName,
      datafeed,
      interval,
      container_id,
      library_path,
      theme,
      locale,
      disabled_features,
      charts_storage_api_version,
      client_id,
      fullscreen,
      timezone,
      autosize,
      toolbar_bg,
      studies_overrides,
      overrides,
      loading_screen,
    };
    let tvWidget = new widget(widgetOptions);

    // tvWidget.onShortcut(shortcut, callback)(asd => console.log(asd));
    tvWidget.onChartReady(() => {
      const doc = tvWidget._innerWindow().document;
      const head = doc.getElementsByClassName('layout__area--top');
      const body = doc.getElementsByTagName('body');
      const headSearch = doc.getElementById('header-toolbar-symbol-search');
      const headInterval = doc.getElementById('header-toolbar-intervals');
      const headCompare = doc.getElementById('header-toolbar-compare');
      const headIndicators = doc.getElementById('header-toolbar-indicators');

      tvWidget.chart().removeAllStudies();
      tvWidget.chart().createStudy('Volume', false, true);
      tvWidget.chart().createStudy('Moving Average', false, false, 9);
      tvWidget.chart().createStudy('Moving Average', false, false, 25);
      tvWidget.chart().createStudy('Moving Average', false, false, 99);

      const firstSearch = true;

      if (firstSearch) {
        // headSearch.parentNode.innerHTML = `<b>${'Time'}</b>`;
        headSearch.parentNode.outerHTML = ``;
      } else {
        // rerender intervals
        headSearch.children[0].children[0].onblur = e => {
          const newInt = tvWidget
            ._innerWindow()
            .document.getElementsByClassName('wrap-3tiHesTk-');
          if (
            newInt?.length &&
            newInt[0]?.children[1]?.children[0]?.id ===
              'header-toolbar-intervals'
          ) {
            newInt[0].children[1].innerHTML = newHeadInterval(locale);
            newInt[0].children[1].addEventListener(
              'click',
              toggleSelectResolution,
            );
          }
        };
      }

      headInterval.innerHTML = newHeadInterval(locale);
      body[0].insertAdjacentHTML(
        'beforeEnd',
        `<div class="JS_BODY_MODALS">${newHeadIntervalPopups(locale)}</div>`,
      );
      head[0].style.display = 'block';

      headInterval.addEventListener('click', toggleSelectResolution);
      const modals = doc.getElementsByClassName('JS_BODY_MODALS');
      modals[0].addEventListener('click', setSelectResolution);

      headCompare.style.padding = '0 5px';
      headCompare.style.width = '38px';

      headIndicators.style.padding = '0 5px';
      headIndicators.style.width = '38px';

      const button = tvWidget
        .createButton()
        .attr('title', 'Click to show a notification popup')
        .addClass('apply-common-tooltip')
        .on('click', () =>
          tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'DafriXchange Pro API works correctly',
            callback: () => {
              console.log('Noticed!');
            },
          }),
        );
      button[0].innerHTML = 'API';
    });
    return () => {
      period.clearChart = false;
      if (tvWidget !== null) {
        if (document?.getElementById(container_id)?.contentWindow) {
          tvWidget.remove();
        }
        tvWidget = null;
      }
    };
  }, [symbol, locale, intervalLs]);

  return <div id={container_id} className="TVChartContainer" />;
};
export default React.memo(Chart);
