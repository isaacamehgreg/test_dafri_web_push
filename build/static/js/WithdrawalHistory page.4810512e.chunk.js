(this["webpackJsonpdafri-frontend"]=this["webpackJsonpdafri-frontend"]||[]).push([[54],{183:function(e,t,a){"use strict";a.r(t);var s=a(35),c=a(4),i=a(39),n=a(6),l=a(12),r=a.n(l),d=a(18),j=a(285),o=a(0),b=a(265),h=a(286),m=a(287),u=a(236),O=a(10),x=a(253),v=(a(303),a(2));t.default=function(){var e=Object(d.b)(),t=Object(d.c)(j.a).withdrawalHistory,a=null===t||void 0===t?void 0:t.last_page,l=Object(n.useState)(""),f=Object(i.a)(l,2),p=f[0],N=f[1],g=Object(n.useState)(null),C=Object(i.a)(g,2),w=C[0],H=C[1],y=Object(n.useState)(null),T=Object(i.a)(y,2),_=T[0],M=T[1],V=Object(n.useState)([]),D=Object(i.a)(V,2),k=D[0],U=D[1],P=Object(n.useState)(1),Z=Object(i.a)(P,2),L=Z[0],S=Z[1],A=Object(n.useState)(!0),I=Object(i.a)(A,2),R=I[0],W=I[1],F=Object(O.i)(k,p,["amount","asset_name","status","information"]).filter((function(e){return 1e3*e.created_at>=w&&(!_||1e3*e.created_at<=_+86399e3)})).map((function(e,t){return Object(v.jsx)(m.a,Object(c.a)({},e),e.created_at+t)}));Object(n.useEffect)((function(){return function(){e({type:o.a.CLEAR_ALL_HISTORY_START})}}),[]),Object(n.useEffect)((function(){e({type:o.a.GET_WITHDRAWAL_HISTORY_START,payload:{params:{currency_type:"all",current_page:L,per_page:15}}})}),[L]),Object(n.useEffect)((function(){var e;t&&(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.length)&&U((function(e){return[].concat(Object(s.a)(e),Object(s.a)(null===t||void 0===t?void 0:t.data))}))}),[t]);return Object(v.jsxs)("div",{className:"profile-box",children:[Object(v.jsxs)("div",{className:"table-panel",children:[Object(v.jsx)("p",{className:"item-title",children:r.a.translate("Pages.Users.History.WithdrawalHistory.item1")}),Object(v.jsxs)("div",{className:"panel-filters",children:[Object(v.jsxs)("div",{className:"filter-group",children:[Object(v.jsx)("div",{className:"filter",children:Object(v.jsxs)("div",{className:"field-wrap",children:[Object(v.jsx)(b.a,{selected:w,onChange:function(e){return H(Date.parse(e))},selectsStart:!0,startDate:w,endDate:_}),Object(v.jsx)("span",{className:"field-icon",children:Object(v.jsx)("svg",{className:"stroke",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M6 5V1V5ZM14 5V1V5ZM5 9H15H5ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z",stroke:"#9195A4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),Object(v.jsx)("div",{className:"filter-group__line",children:"-"}),Object(v.jsx)("div",{className:"filter",children:Object(v.jsxs)("div",{className:"field-wrap",children:[Object(v.jsx)(b.a,{selected:_,onChange:function(e){return M(Date.parse(e))},startDate:w,endDate:_,minDate:w}),Object(v.jsx)("span",{className:"field-icon",children:Object(v.jsx)("svg",{className:"stroke",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M6 5V1V5ZM14 5V1V5ZM5 9H15H5ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z",stroke:"#9195A4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})]}),Object(v.jsxs)("div",{className:"filter-search",children:[Object(v.jsx)("div",{className:"filter-search__reset",children:Object(v.jsx)("button",{className:"button button--small-width",type:"button",onClick:function(){H(null),M(null),N("")},children:r.a.translate("Pages.Users.History.WithdrawalHistory.item2")})}),Object(v.jsx)("div",{className:"filter-search__field",children:Object(v.jsxs)("div",{className:"field-wrap",children:[Object(v.jsx)("input",{type:"text",className:"input input--icon-right",placeholder:r.a.translate("Pages.Users.History.WithdrawalHistory.item4"),value:p,onChange:function(e){return N(e.target.value.trim())}}),Object(v.jsx)("span",{className:"field-icon",children:Object(v.jsx)("svg",{className:"fill",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M8.04938 16.0928C9.83702 16.0928 11.5735 15.4963 12.9838 14.3977L18.3045 19.7191C18.7019 20.103 19.3353 20.092 19.7192 19.6945C20.0936 19.3067 20.0936 18.6919 19.7192 18.3042L14.3985 12.9828C17.1243 9.47344 16.4895 4.41858 12.9807 1.69241C9.47196 -1.03376 4.41791 -0.398932 1.69215 3.11039C-1.03361 6.61971 -0.398872 11.6746 3.10992 14.4007C4.52252 15.4983 6.26058 16.0937 8.04938 16.0928ZM3.77429 3.77179C6.13538 1.4103 9.96347 1.41025 12.3246 3.7717C14.6857 6.13315 14.6858 9.96181 12.3247 12.3233C9.9636 14.6848 6.13551 14.6848 3.77438 12.3234C3.77434 12.3234 3.77434 12.3234 3.77429 12.3233C1.4132 9.97906 1.39929 6.16436 3.74318 3.80291C3.75354 3.79251 3.76389 3.78215 3.77429 3.77179Z",fill:"#969696"})})})]})})]})]})]}),Object(v.jsx)("div",{className:"profile-table",children:Object(v.jsx)("div",{className:"table-box table-box--trade-history",id:"withdrawal-history-component-table-box",children:Object(v.jsxs)("div",{className:"table table--auto-td-height table--history-deposit",children:[Object(v.jsx)(h.a,{}),Object(v.jsx)("div",{className:"table-body",children:Object(v.jsx)(x.a,{data:F,handleNext:function(){if(a){if(L===a)return void W(!1);S(L+1)}},hasMore:R,parentRef:"withdrawal-history-component-table-box",children:F&&(null===F||void 0===F?void 0:F.length)?F:Object(v.jsx)(u.a,{text:r.a.translate("Pages.Users.History.WithdrawalHistory.item3")})})})]})})})]})}},236:function(e,t,a){"use strict";a(6);var s=a(2);t.a=function(e){var t=e.text;return Object(s.jsx)("p",{style:{textAlign:"center",padding:"15px 0"},children:t})}},253:function(e,t,a){"use strict";a(6);var s=a(259),c=a(2);t.a=function(e){var t=e.data,a=e.handleNext,i=e.hasMore,n=e.parentRef,l=e.children;return Object(c.jsx)(s.a,{dataLength:null===t||void 0===t?void 0:t.length,next:a,hasMore:i,scrollableTarget:n,children:l})}},265:function(e,t,a){"use strict";var s=a(4),c=(a(6),a(293)),i=a.n(c),n=a(2);t.a=function(e){var t=e.selectedDate,a=e.onChange;return Object(n.jsx)(i.a,Object(s.a)({selected:t,startDate:t,onChange:a,wrapperClassName:"custom-datepicker"},e))}},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s=function(e){return e.history}},286:function(e,t,a){"use strict";a(6);var s=a(12),c=a.n(s),i=a(2);t.a=function(){return Object(i.jsx)("div",{className:"table-header",children:Object(i.jsxs)("div",{className:"tr",children:[Object(i.jsx)("div",{className:"td",children:Object(i.jsx)("div",{className:"td-name",children:c.a.translate("Pages.Users.History.Table.TableHead.item1")})}),Object(i.jsx)("div",{className:"td",children:Object(i.jsx)("div",{className:"td-name",children:c.a.translate("Pages.Users.History.Table.TableHead.item2")})}),Object(i.jsx)("div",{className:"td",children:Object(i.jsx)("div",{className:"td-name",children:c.a.translate("Pages.Users.History.Table.TableHead.item3")})}),Object(i.jsx)("div",{className:"td",children:Object(i.jsx)("div",{className:"td-name",children:c.a.translate("Pages.Users.History.Table.TableHead.item4")})}),Object(i.jsx)("div",{className:"td",children:Object(i.jsx)("div",{className:"td-name",children:c.a.translate("Pages.Users.History.Table.TableHead.item5")})})]})})}},287:function(e,t,a){"use strict";var s=a(39),c=(a(6),a(12)),i=a.n(c),n=a(66),l=a.n(n),r=a(47),d=a.n(r),j=a(11),o=a(2);t.a=function(e){var t=e.amount,a=e.asset_name,c=e.icon,n=e.information,r=e.status,b=e.created_at,h=l()(new Date(1e3*b)).isValid()?l()(new Date(1e3*b)).format("YYYY/MM/DD HH:mm:ss").split(" "):["",""],m=Object(s.a)(h,2),u=m[0],O=m[1],x=d()("table-status",{"table-status--active":"confirmed"===r,"table-status--inprogress":"unconfirmed"===r,"table-status--error":"canceled"===r||"error"===r});return Object(o.jsxs)("div",{className:"tr",children:[Object(o.jsxs)("div",{className:"td",children:[Object(o.jsx)("div",{className:"td-hidden-name",children:i.a.translate("Pages.Users.History.Table.TableItem.item1")}),Object(o.jsxs)("p",{children:[u,Object(o.jsx)("br",{}),O]})]}),Object(o.jsxs)("div",{className:"td",children:[Object(o.jsx)("div",{className:"td-hidden-name",children:i.a.translate("Pages.Users.History.Table.TableItem.item2")}),Object(o.jsx)("p",{className:x,children:r})]}),Object(o.jsxs)("div",{className:"td",children:[Object(o.jsx)("div",{className:"td-hidden-name",children:i.a.translate("Pages.Users.History.Table.TableItem.item3")}),Object(o.jsxs)("div",{className:"table-coin",children:[Object(o.jsx)("div",{className:"table-coin__icon",children:Object(o.jsx)("img",{src:c,alt:""})}),Object(o.jsx)("p",{className:"table-coin__name",children:a.toUpperCase()})]})]}),Object(o.jsxs)("div",{className:"td",children:[Object(o.jsx)("div",{className:"td-hidden-name",children:i.a.translate("Pages.Users.History.Table.TableItem.item4")}),Object(o.jsx)("p",{children:t})]}),Object(o.jsxs)("div",{className:"td",children:[Object(o.jsx)("div",{className:"td-hidden-name",children:i.a.translate("Pages.Users.History.Table.TableItem.item5")}),Object(o.jsxs)("div",{className:"table-info",children:[n&&Object(o.jsx)("button",{className:"copy",type:"button",onClick:function(){window.navigator.clipboard.writeText(n),Object(j.a)({type:"info",timeOut:2500,message:"Information has been copied"})},children:Object(o.jsx)("span",{className:"d-flex copy__icon",children:Object(o.jsxs)("svg",{className:"fill",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M11.4285 2.85693H1.71428C0.767509 2.85693 0 3.62444 0 4.57122V14.2855C0 15.2322 0.767509 15.9997 1.71428 15.9997H11.4285C12.3753 15.9997 13.1428 15.2322 13.1428 14.2855V4.57122C13.1428 3.62444 12.3753 2.85693 11.4285 2.85693Z",fill:"#D7CFFF"}),Object(o.jsx)("path",{d:"M14.2856 1.10692e-09H3.99992C3.05828 -3.3481e-05 2.29288 0.759507 2.28564 1.70112C2.28564 1.70571 2.28564 1.70969 2.28564 1.71428H11.4285C13.0056 1.71616 14.2837 2.99423 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 15.9999 12.9416 15.9999 12V1.71428C15.9999 0.767509 15.2324 1.10692e-09 14.2856 1.10692e-09Z",fill:"#D7CFFF"})]})})}),Object(o.jsx)("p",{children:n||"-"})]})]})]})}}}]);
//# sourceMappingURL=WithdrawalHistory page.4810512e.chunk.js.map