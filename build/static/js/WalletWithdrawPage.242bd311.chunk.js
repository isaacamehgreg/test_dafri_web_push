(this["webpackJsonpdafri-frontend"]=this["webpackJsonpdafri-frontend"]||[]).push([[51],{178:function(e,t,s){"use strict";s.r(t);var a=s(39),c=s(6),n=s(12),i=s.n(n),l=s(18),r=s(22),d=s(326),o=s(65),j=s(0),b=s(2);t.default=function(){var e=Object(l.b)(),t=Object(r.h)(),s=Object(l.c)(o.f),n=s.isLoading,u=s.walletsList,h=s.totalUSD,m=Object(c.useState)(0),v=Object(a.a)(m,2),O=v[0],x=v[1],f=function(e){return x(e)},p=Object(c.useState)(!0),w=Object(a.a)(p,2),g=w[0],N=w[1],S=Object(c.useState)([]),C=Object(a.a)(S,2),y=C[0],_=C[1],L=Object(c.useState)([]),k=Object(a.a)(L,2),Z=k[0],B=k[1],W=function(){N((function(e){return!e}))};return Object(c.useEffect)((function(){var e;(null===t||void 0===t?void 0:t.state)&&"fiat"!==(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.type)&&x(1)}),[null===t||void 0===t?void 0:t.state]),Object(c.useEffect)((function(){e({type:j.a.GET_PAYMENT_METHODS_START})}),[]),Object(c.useEffect)((function(){u&&u.length&&g?(B(u.filter((function(e){return"fiat"===e.asset.type}))),_(u.filter((function(e){return"fiat"!==e.asset.type})))):(B(u.filter((function(e){return"fiat"===e.asset.type&&e.total>0}))),_(u.filter((function(e){return"fiat"!==e.asset.type&&e.total>0}))))}),[s,g]),Object(b.jsx)("section",{className:"transfer-section",children:Object(b.jsxs)("div",{className:"custom-container",children:[Object(b.jsx)("p",{className:"section-title section-title--center",children:i.a.translate("Pages.Users.Withdraw.WalletWithdraw.item1")}),Object(b.jsx)("div",{className:"transfer-box",children:Object(b.jsxs)("div",{className:"transfer-box__content",children:[Object(b.jsx)("div",{className:"transfer-top",children:Object(b.jsxs)("div",{className:"my-balance",children:[Object(b.jsx)("p",{className:"item-title item-title--bigger my-balance__title",children:i.a.translate("Pages.Users.Withdraw.item2")}),Object(b.jsxs)("p",{className:"my-balance__value",children:["$",h]})]})}),Object(b.jsxs)("div",{className:"switcher",children:[Object(b.jsx)("button",{className:"switcher__item ".concat(O?"":"active"),onClick:function(){return f(0)},children:i.a.translate("Pages.Users.Withdraw.item3")}),Object(b.jsx)("button",{className:"switcher__item ".concat(O?"active":""),onClick:function(){return f(1)},children:i.a.translate("Pages.Users.Withdraw.item4")})]}),O?Object(b.jsx)(d.a,{isLoading:n,data:y,labels:["Coin","Total","Available","Locked"],onSelectItem:function(){},setFieldValue:function(){},isShowZeroBalances:g,setIsShowZeroBalances:W,showZeroBalances:!0}):Object(b.jsx)(d.a,{isLoading:n,data:Z,labels:["Fiat","Total","Available","Locked"],onSelectItem:function(){},setFieldValue:function(){},isShowZeroBalances:g,setIsShowZeroBalances:W,showZeroBalances:!0})]})})]})})}},236:function(e,t,s){"use strict";s(6);var a=s(2);t.a=function(e){var t=e.text;return Object(a.jsx)("p",{style:{textAlign:"center",padding:"15px 0"},children:t})}},302:function(e,t,s){"use strict";var a=s(39),c=s(6),n=s(2);t.a=function(e){var t=e.sort,s=e.order,i=e.toggleSort,l=Object(c.useState)((null===t||void 0===t?void 0:t.sort)||"asc"),r=Object(a.a)(l,2),d=r[0],o=r[1];return Object(n.jsxs)("div",{className:"td-sort",onClick:function(e){var t,a;"search"!==(null===e||void 0===e||null===(t=e.target)||void 0===t||null===(a=t.dataset)||void 0===a?void 0:a.id)&&(o("asc"===d?"desc":"asc"),i({sort:"asc"===d?"desc":"asc",order:s}))},"data-order":s,"data-sort":d,children:[Object(n.jsx)("button",{type:"button",children:Object(n.jsx)("svg",{className:"fill",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M5 0.857422L0 6.21456H10L5 0.857422Z",fill:"#969696"})})}),Object(n.jsx)("button",{type:"button",children:Object(n.jsx)("svg",{className:"fill",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M5 6.14307L10 0.785924L2.37568e-06 0.785924L5 6.14307Z",fill:"#969696"})})})]})}},326:function(e,t,s){"use strict";var a=s(4),c=s(39),n=s(6),i=s(12),l=s.n(i),r=s(2),d=function(e){var t=e.id,s=e.asset,a=e.balance,c=e.frozen_balance,n=e.total,i=e.selected,l=e.onSelectItem,d=e.setFieldValue,o=e.network,j=e.networks;return Object(r.jsxs)("div",{className:"tr ".concat(i?"selected":""),onClick:function(){l({id:t,assetID:s.id,type:s.type,name:s.name,code:s.code,network:o,networks:j,balance:a,publicAdress:null===s||void 0===s?void 0:s.public_address}),"fiat"!==s.type&&d("address","")},children:[Object(r.jsx)("div",{className:"td",children:Object(r.jsxs)("div",{className:"coin-card",children:[Object(r.jsx)("div",{className:"coin-card__img",children:Object(r.jsx)("img",{src:null===s||void 0===s?void 0:s.img_path,alt:""})}),Object(r.jsxs)("div",{className:"coin-card__info",children:[Object(r.jsx)("p",{className:"coin-card__info-name",style:{textTransform:"uppercase"},children:null===s||void 0===s?void 0:s.code}),Object(r.jsx)("p",{className:"coin-card__info-text",children:null===s||void 0===s?void 0:s.name})]})]})}),Object(r.jsx)("div",{className:"td",children:Object(r.jsx)("p",{className:"table-value",children:n})}),Object(r.jsx)("div",{className:"td",children:Object(r.jsx)("p",{className:"table-value",children:a})}),Object(r.jsx)("div",{className:"td",children:Object(r.jsx)("p",{className:"table-value",children:c})})]})},o=s(302),j=s(48),b=s(10),u=s(236);t.a=function(e){var t=e.isLoading,s=e.title,i=e.labels,h=e.data,m=e.activeEl,v=e.onSelectItem,O=e.setFieldValue,x=e.showZeroBalances,f=void 0!==x&&x,p=e.isShowZeroBalances,w=e.setIsShowZeroBalances,g=Object(n.useState)({sort:"desc",order:"name"}),N=Object(c.a)(g,2),S=N[0],C=N[1],y=Object(n.useState)(""),_=Object(c.a)(y,2),L=_[0],k=_[1],Z=Object(n.useState)([]),B=Object(c.a)(Z,2),W=(B[0],B[1]);if(Object(n.useMemo)((function(){return Object(b.o)({sort:S,data:h,setState:W})}),[S,h]),t)return Object(r.jsx)(j.a,{});if(!h||!h.length)return Object(r.jsx)("p",{children:l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item1")});var P=function(e){var t=e.order,s=e.sort;C({order:t,sort:s})},U=h.filter((function(e){var t,s,a,c;return""===L||((null===e||void 0===e||null===(t=e.asset)||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(null===L||void 0===L?void 0:L.toLowerCase()))||(null===e||void 0===e||null===(a=e.asset)||void 0===a||null===(c=a.code)||void 0===c?void 0:c.toLowerCase().includes(null===L||void 0===L?void 0:L.toLowerCase())))})).map((function(e){return Object(r.jsx)(d,Object(a.a)({onSelectItem:v,setFieldValue:O,selected:m===e.asset.id},e),e.asset.id)})),I=Object(c.a)(i,4),T=I[0],E=I[1],F=I[2],M=I[3];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"transfer-panel",children:[Object(r.jsx)("p",{className:"item-title item-title--bigger",children:s}),Object(r.jsx)("div",{className:"transfer-search",children:Object(r.jsxs)("div",{className:"field-wrap",children:[Object(r.jsx)("input",{type:"text",className:"input input--icon-right",placeholder:l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item2"),value:L,onChange:function(e){k(e.target.value.toLowerCase())}}),Object(r.jsx)("span",{className:"field-icon",children:Object(r.jsx)("svg",{className:"fill",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M8.04938 16.0928C9.83702 16.0928 11.5735 15.4963 12.9838 14.3977L18.3045 19.7191C18.7019 20.103 19.3353 20.092 19.7192 19.6945C20.0936 19.3067 20.0936 18.6919 19.7192 18.3042L14.3985 12.9828C17.1243 9.47344 16.4895 4.41858 12.9807 1.69241C9.47196 -1.03376 4.41791 -0.398932 1.69215 3.11039C-1.03361 6.61971 -0.398872 11.6746 3.10992 14.4007C4.52252 15.4983 6.26058 16.0937 8.04938 16.0928ZM3.77429 3.77179C6.13538 1.4103 9.96347 1.41025 12.3246 3.7717C14.6857 6.13315 14.6858 9.96181 12.3247 12.3233C9.9636 14.6848 6.13551 14.6848 3.77438 12.3234C3.77434 12.3234 3.77434 12.3234 3.77429 12.3233C1.4132 9.97906 1.39929 6.16436 3.74318 3.80291C3.75354 3.79251 3.76389 3.78215 3.77429 3.77179Z",fill:"#969696"})})})]})})]}),f&&Object(r.jsx)("div",{className:"transfer-panel transfer-panel--small-mt transfer-panel--end",children:Object(r.jsxs)("button",{className:"button button--link-type",onClick:w,children:[p?l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item4"):l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item5")," ",l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item6")]})}),Object(r.jsx)("div",{className:"coins-table-box",children:Object(r.jsxs)("div",{className:"coin-table",children:[Object(r.jsx)("div",{className:"table-header",children:Object(r.jsxs)("div",{className:"tr",children:[Object(r.jsxs)("div",{className:"td",children:[Object(r.jsx)("div",{className:"td-name td-name--type2",children:T}),Object(r.jsx)(o.a,{toggleSort:P,sort:S,order:"name"})]}),Object(r.jsx)("div",{className:"td",children:Object(r.jsxs)("div",{className:"td-name td-name--type2",children:[E,Object(r.jsx)(o.a,{toggleSort:P,sort:S,order:"id"})]})}),Object(r.jsx)("div",{className:"td",children:Object(r.jsxs)("div",{className:"td-name td-name--type2",children:[F,Object(r.jsx)(o.a,{toggleSort:P,sort:S,order:"balance"})]})}),Object(r.jsx)("div",{className:"td",children:Object(r.jsxs)("div",{className:"td-name td-name--type2",children:[M,Object(r.jsx)(o.a,{toggleSort:P,sort:S,order:"frozen_balance"})]})})]})}),Object(r.jsx)("div",{className:"table-body",children:U.length?U:Object(r.jsx)(u.a,{text:l.a.translate("Pages.Users.Withdraw.SupportedCurrency.item3")})})]})})]})}}}]);
//# sourceMappingURL=WalletWithdrawPage.242bd311.chunk.js.map