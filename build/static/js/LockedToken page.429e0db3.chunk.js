(this["webpackJsonpdafri-frontend"]=this["webpackJsonpdafri-frontend"]||[]).push([[28],{207:function(s,e,a){"use strict";a.r(e);var t=a(39),l=a(6),i=a(12),c=a.n(i),n=a(18),o=a(0),d=a(65),r=(a(4),a(225),a(10)),j=(a(304),a(2)),b=function(s){var e,a,i,c=s.onSelect,n=s.currentCurrencyCode,o=s.currencyFiat,d=Object(l.useState)(!1),r=Object(t.a)(d,2),b=r[0],v=r[1],u=Object(l.useState)({}),O=Object(t.a)(u,2),m=O[0],h=O[1],_=Object(l.useRef)(null),f=function(s){_.current&&!_.current.contains(s.target)&&v(!1)};return Object(l.useEffect)((function(){return document.body.addEventListener("click",(function(s){f(s)})),function(){document.body.removeEventListener("click",(function(s){f(s)}))}}),[]),Object(l.useEffect)((function(){n&&(null===o||void 0===o?void 0:o.length)&&h(null===o||void 0===o?void 0:o.find((function(s){var e;return(null===s||void 0===s||null===(e=s.asset)||void 0===e?void 0:e.code)===n})))}),[n]),Object(j.jsx)("div",{className:"transfer-block transfer-block--small-mt",children:Object(j.jsx)("div",{className:"transfer-form ",children:Object(j.jsxs)("div",{className:"method method--currency ".concat(b?"active":""),ref:_,children:[Object(j.jsxs)("div",{className:"method-item",onClick:function(){v(!b)},role:"presentation",children:[Object(j.jsx)("div",{className:"method-item__logo",children:Object(j.jsx)("img",{src:null===m||void 0===m||null===(e=m.asset)||void 0===e?void 0:e.img_path,alt:""})}),Object(j.jsxs)("button",{className:"method-btn",children:[null===m||void 0===m||null===(a=m.asset)||void 0===a||null===(i=a.code)||void 0===i?void 0:i.toUpperCase(),Object(j.jsx)("span",{className:"d-flex method-btn__arrow",children:Object(j.jsx)("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M1 1.5L6 6.5L11 1.5",stroke:"#2B2B2B",strokeWidth:"1.92",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),b&&Object(j.jsx)("div",{className:"method-drop",children:Object(j.jsx)("div",{className:"method-drop__inner",children:(null===o||void 0===o?void 0:o.length)&&o.map((function(s){var e,a,t,l;return Object(j.jsxs)("div",{className:"method-item",onClick:function(){return function(s){var e;c(null===s||void 0===s||null===(e=s.asset)||void 0===e?void 0:e.code),v(!1)}(s)},role:"presentation",children:[Object(j.jsx)("div",{className:"method-item__logo",children:Object(j.jsx)("img",{src:null===s||void 0===s||null===(a=s.asset)||void 0===a?void 0:a.img_path,alt:""})}),Object(j.jsx)("button",{className:"method-btn",children:null===s||void 0===s||null===(t=s.asset)||void 0===t||null===(l=t.code)||void 0===l?void 0:l.toUpperCase()})]},null===s||void 0===s||null===(e=s.asset)||void 0===e?void 0:e.id)}))})})]})})})},v=a(13),u=a(5),O=a(260),m=a(48),h=function(s){var e=s.selectedCurrency,a=Object(n.c)(d.f),t=a.dbaAnalysis,l=a.isLoading,i=Object(n.c)(O.a);return Object(j.jsxs)("div",{className:"portfolio-analysis",children:[Object(j.jsx)("p",{className:"item-title item-title--centered",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item1")}),l?Object(j.jsx)(m.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"analysis-wrap",children:[Object(j.jsxs)("div",{className:"analysis-block",children:[Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type1"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item2")}),Object(j.jsx)("p",{className:"analysis__info-value",children:Object(r.r)(null===t||void 0===t?void 0:t.ICO_date,"D MMMM YYYY")})]})]})}),Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type2"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item3")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[Object(r.n)(Object(r.p)(i)(null===t||void 0===t?void 0:t.ICO_growth)),"%"]})]})]})})]}),Object(j.jsxs)("div",{className:"analysis-block",children:[Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type2"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item4")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[null===t||void 0===t?void 0:t.ICO_price," ",Object(j.jsx)("span",{children:e.toUpperCase()})]})]})]})}),Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type1"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item5")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[Object(r.n)(Object(r.p)(i)(null===t||void 0===t?void 0:t.net_profit))," ",Object(j.jsx)("span",{children:e.toUpperCase()})]})]})]})})]}),Object(j.jsxs)("div",{className:"analysis-block",children:[Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type3"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item6")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[Object(r.n)(Object(r.p)(i)(null===t||void 0===t?void 0:t.capital))," ",Object(j.jsx)("span",{children:e.toUpperCase()})]})]})]})}),Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type3"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item7")}),Object(j.jsx)("p",{className:"analysis__info-value",children:Object(r.r)(null===t||void 0===t?void 0:t.harvest,"D MMMM YYYY")})]})]})})]}),Object(j.jsxs)("div",{className:"analysis-block",children:[Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type4"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item8")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[Object(r.n)(Object(r.p)(i)(null===t||void 0===t?void 0:t.total_acquired))," ",Object(j.jsx)("span",{children:"DBA"})]})]})]})}),Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type4"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item9")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[null===t||void 0===t?void 0:t.release_percent,"% /"," ",null===t||void 0===t?void 0:t.release_period," ",c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item10")]})]})]})})]}),Object(j.jsx)("div",{className:"analysis-block",children:Object(j.jsx)("div",{className:"analysis-block__col",children:Object(j.jsxs)("div",{className:"analysis",children:[Object(j.jsx)("div",{className:"analysis__dot analysis__dot--type1"}),Object(j.jsxs)("div",{className:"analysis__info",children:[Object(j.jsx)("p",{className:"analysis__info-title",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item12")}),Object(j.jsxs)("p",{className:"analysis__info-value",children:[Object(r.n)(Object(r.p)(i)(null===t||void 0===t?void 0:t.referral))," ",Object(j.jsx)("span",{children:"DBA"})]})]})]})})})]}),Object(j.jsx)("div",{className:"form-submit",children:Object(j.jsx)(v.b,{to:{pathname:u.a.Trade.SpotTrade.path,state:{currency:"dba"}},className:"button button--wide button--big button--big--round",children:c.a.translate("Pages.Users.LockedToken.PortfolioAnalysis.item13")})})]})]})},_=function(s){var e=s.currency,a=Object(n.c)(d.f).dbaAnalysis,t=Object(n.c)(O.a);return Object(j.jsxs)("div",{className:"portfolio-total",children:[Object(j.jsx)("p",{className:"page-title portfolio-total__title",children:c.a.translate("Pages.Users.LockedToken.PortfolioTotal.item1")}),Object(j.jsx)("p",{className:"portfolio-total__subtitle",children:c.a.translate("Pages.Users.LockedToken.PortfolioTotal.item2")}),Object(j.jsxs)("p",{className:"portfolio-total__value",children:[e.toUpperCase()," ",Object(r.n)(Object(r.p)(t)(null===a||void 0===a?void 0:a.portfolioProfit))," "]}),Object(j.jsxs)("p",{className:"portfolio-total__quantity",children:[Object(r.n)(Object(r.p)(t)((null===a||void 0===a?void 0:a.total_acquired)+(null===a||void 0===a?void 0:a.referral)))," ","DBA"]})]})};a(302),a(22),e.default=function(){var s=Object(n.b)(),e=Object(n.c)(d.f).walletsList.filter((function(s){return"fiat"===s.asset.type})),a=Object(l.useState)("zar"),i=Object(t.a)(a,2),r=i[0],v=i[1];return Object(l.useEffect)((function(){s({type:o.a.GET_DBA_ANALYSIS_START,payload:{params:{currency_code:r}}})}),[r]),Object(j.jsx)("section",{className:"transfer-section",children:Object(j.jsxs)("div",{className:"custom-container",children:[Object(j.jsx)("p",{className:"section-title section-title--center",children:c.a.translate("Pages.Users.LockedToken.item1")}),Object(j.jsx)("div",{className:"transfer-box",children:Object(j.jsxs)("div",{className:"transfer-box__content",children:[Object(j.jsx)(_,{currency:r}),(null===e||void 0===e?void 0:e.length)?Object(j.jsx)(b,{currencyFiat:e,currentCurrencyCode:r,onSelect:v}):null,Object(j.jsx)(h,{selectedCurrency:r})]})})]})})}},260:function(s,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return i}));var t=a(56),l=function(s){return s.decimals.pairs},i=Object(t.a)([function(s){return s.decimals},function(s){return s.currentPair.pair}],(function(s,e){if((null===s||void 0===s?void 0:s.pairs)&&e)return(null===s||void 0===s?void 0:s.pairs[e])||2}))},302:function(s,e,a){"use strict";var t=a(39),l=a(6),i=a(2);e.a=function(s){var e=s.sort,a=s.order,c=s.toggleSort,n=Object(l.useState)((null===e||void 0===e?void 0:e.sort)||"asc"),o=Object(t.a)(n,2),d=o[0],r=o[1];return Object(i.jsxs)("div",{className:"td-sort",onClick:function(s){var e,t;"search"!==(null===s||void 0===s||null===(e=s.target)||void 0===e||null===(t=e.dataset)||void 0===t?void 0:t.id)&&(r("asc"===d?"desc":"asc"),c({sort:"asc"===d?"desc":"asc",order:a}))},"data-order":a,"data-sort":d,children:[Object(i.jsx)("button",{type:"button",children:Object(i.jsx)("svg",{className:"fill",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M5 0.857422L0 6.21456H10L5 0.857422Z",fill:"#969696"})})}),Object(i.jsx)("button",{type:"button",children:Object(i.jsx)("svg",{className:"fill",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M5 6.14307L10 0.785924L2.37568e-06 0.785924L5 6.14307Z",fill:"#969696"})})})]})}},304:function(s,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c}));a(6);var t=a(2),l=function(s){var e=s.status;return Object(t.jsxs)("p",{className:"table-status table-status--success",children:[Object(t.jsx)("span",{className:"d-flex table-status__icon",children:Object(t.jsx)("svg",{className:"fill",width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.9479 1.07725C12.1042 1.23353 12.1921 1.44546 12.1921 1.66644C12.1921 1.88742 12.1042 2.09935 11.9479 2.25563L5.27523 8.92259C5.11881 9.07882 4.9067 9.16658 4.68553 9.16658C4.46437 9.16658 4.25225 9.07882 4.09584 8.92259L0.759526 5.58911C0.607592 5.43193 0.523522 5.22142 0.525422 5.00292C0.527323 4.78441 0.615042 4.57539 0.769687 4.42088C0.924331 4.26637 1.13353 4.17872 1.35222 4.17682C1.57091 4.17492 1.7816 4.25892 1.93891 4.41073L4.68553 7.15501L10.7685 1.07725C10.9249 0.921019 11.137 0.833252 11.3582 0.833252C11.5793 0.833252 11.7914 0.921019 11.9479 1.07725Z",fill:"#2DDD9D"})})}),e]})},i=function(s){var e=s.status;return Object(t.jsxs)("p",{className:"table-status table-status--inprogress",children:[Object(t.jsx)("span",{className:"d-flex table-status__icon",children:Object(t.jsx)("svg",{className:"fill",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.35938 15.5C10.3485 15.5 12.2562 14.7098 13.6627 13.3033C15.0692 11.8968 15.8594 9.98912 15.8594 8C15.8594 6.01088 15.0692 4.10322 13.6627 2.6967C12.2562 1.29018 10.3485 0.5 8.35938 0.5C6.37025 0.5 4.4626 1.29018 3.05607 2.6967C1.64955 4.10322 0.859375 6.01088 0.859375 8C0.859375 9.98912 1.64955 11.8968 3.05607 13.3033C4.4626 14.7098 6.37025 15.5 8.35938 15.5V15.5ZM9.29688 4.25C9.29688 4.00136 9.1981 3.7629 9.02229 3.58709C8.84647 3.41127 8.60802 3.3125 8.35938 3.3125C8.11073 3.3125 7.87228 3.41127 7.69646 3.58709C7.52065 3.7629 7.42188 4.00136 7.42188 4.25V8C7.42193 8.24862 7.52074 8.48704 7.69656 8.66281L10.3478 11.315C10.4349 11.4021 10.5383 11.4712 10.6521 11.5183C10.7659 11.5655 10.8879 11.5897 11.0111 11.5897C11.1343 11.5897 11.2563 11.5655 11.3701 11.5183C11.4839 11.4712 11.5873 11.4021 11.6744 11.315C11.7615 11.2279 11.8306 11.1245 11.8777 11.0107C11.9249 10.8969 11.9491 10.7749 11.9491 10.6517C11.9491 10.5285 11.9249 10.4066 11.8777 10.2928C11.8306 10.1789 11.7615 10.0755 11.6744 9.98844L9.29688 7.61188V4.25Z",fill:"#FFA825"})})}),e]})},c=function(s){var e=s.status;return Object(t.jsxs)("p",{className:"table-status table-status--locked",children:[Object(t.jsx)("span",{className:"d-flex table-status__icon",children:Object(t.jsx)("svg",{className:"fill",width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.83268 6.16683V4.50016C1.83268 3.39509 2.27167 2.33529 3.05307 1.55388C3.83447 0.772483 4.89428 0.333496 5.99935 0.333496C7.10442 0.333496 8.16423 0.772483 8.94563 1.55388C9.72703 2.33529 10.166 3.39509 10.166 4.50016V6.16683C10.608 6.16683 11.032 6.34242 11.3445 6.65498C11.6571 6.96755 11.8327 7.39147 11.8327 7.8335V12.0002C11.8327 12.4422 11.6571 12.8661 11.3445 13.1787C11.032 13.4912 10.608 13.6668 10.166 13.6668H1.83268C1.39065 13.6668 0.966732 13.4912 0.654171 13.1787C0.34161 12.8661 0.166016 12.4422 0.166016 12.0002V7.8335C0.166016 7.39147 0.34161 6.96755 0.654171 6.65498C0.966732 6.34242 1.39065 6.16683 1.83268 6.16683V6.16683ZM8.49935 4.50016V6.16683H3.49935V4.50016C3.49935 3.83712 3.76274 3.20124 4.23158 2.7324C4.70042 2.26355 5.33631 2.00016 5.99935 2.00016C6.66239 2.00016 7.29828 2.26355 7.76712 2.7324C8.23596 3.20124 8.49935 3.83712 8.49935 4.50016V4.50016Z",fill:"#969696"})})}),e]})}}}]);
//# sourceMappingURL=LockedToken page.429e0db3.chunk.js.map