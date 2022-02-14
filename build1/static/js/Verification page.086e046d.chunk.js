(this["webpackJsonpdafri-frontend"]=this["webpackJsonpdafri-frontend"]||[]).push([[50],{212:function(e,t,i){"use strict";i.r(t);var n=i(39),s=i(6),o=i(12),a=i.n(o),r=i(66),c=i.n(r),l=i(47),d=i.n(l),h=i(22),u=i(13),f=i(18),p=i(37),m=function(e){return e.kyc},v=function(e){var t,i,n;return null===(t=e.kyc)||void 0===t||null===(i=t.token)||void 0===i||null===(n=i.accessToken)||void 0===n?void 0:n.token},b=function(e){var t,i;return null===(t=e.kyc)||void 0===t||null===(i=t.token)||void 0===i?void 0:i.apiUrl},j=i(10),g=i(19),k=i(0),x=function(){return(x=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},O=function(){function e(e,t,i,n){var s=this;this.iframe=null,this.iframeId=null,this.sessionId="",this.$container=null,this.onMessage=function(e){s.onSdkMessage(e)},this.baseUrl=e,this.config=t,this.callbacks=i,this.options=n}return e.prototype.launch=function(e){this.options.addViewportTag&&this.addViewportTag(),this.iframe=this.createIframe(e),this.sessionId="",this.iframeId="id_"+Math.floor(1e8*Math.random()),this.iframe&&this.config?(this.registerEventListener(),this.iframe.src=this.getIframeSrc()):console.error("Idensic was not initialized since either provided element was not found in the DOM or invalid config")},e.prototype.addViewportTag=function(){var e=document.getElementsByName("viewport");if(!e||0===e.length){var t=document.createElement("meta");t.setAttribute("name","viewport"),t.setAttribute("content","width=device-width,user-scalable=yes"),document.head.appendChild(t)}},e.prototype.createIframe=function(e){var t="string"==typeof e?document.querySelector(e):e;if(!t)return console.error("Provide a valid selector for the iframe container"),null;this.$container=t;var i=document.createElement("iframe");for(i.width="100%",i.scrolling="no",i.allow="camera; microphone",i.setAttribute("frameborder","0");t.firstChild;)t.removeChild(t.firstChild);return t.appendChild(i),i},e.prototype.getIframeSrc=function(){var e=this.baseUrl.indexOf("localhost")>-1?"":"/idensic";return this.baseUrl+e+"/websdk.html?_="+this.iframeId},e.prototype.registerEventListener=function(){window.addEventListener("message",this.onMessage)},e.prototype.onSdkMessage=function(e){var t;if(this.baseUrl===e.origin){var i=e.data;if(i.method&&~i.method.indexOf("idCheck")&&(!this.sessionId||this.sessionId===i.sessionId)&&(null===(t=this.iframe)||void 0===t?void 0:t.contentWindow)){"idCheck.onReady"==i.method&&i.frameId===this.iframeId&&(this.sessionId=i.sessionId,this.iframe.contentWindow.postMessage(x({method:"idCheck.init"},this.config),"*")),"idCheck.onResize"==i.method&&this.options.adaptIframeHeight&&(this.iframe.style.height=i.height+"px");var n=i.method;delete i.method,delete i.frameId,delete i.sessionId,"idCheck.onError"===n&&"invalid-token"===i.code?this.callExpirationHandler():"idCheck.onError"===n&&"function"==typeof this.callbacks.onError?this.callbacks.onError(i):"function"==typeof this.callbacks.onMessage&&this.callbacks.onMessage(n,i)}}},e.prototype.callExpirationHandler=function(){var e=this,t=this.callbacks.expirationHandler;t.legacy?t.handler((function(t){return e.updateAccessToken(t)})):t.handler().then((function(t){return e.updateAccessToken(t)}),(function(t){null!=t||(t="Failed to update access token"),t.message&&(t=t.message),"string"!=typeof t&&(t=String(t)),e.updateAccessToken(null,t)}))},e.prototype.updateAccessToken=function(e,t){var i,n;null===(n=null===(i=this.iframe)||void 0===i?void 0:i.contentWindow)||void 0===n||n.postMessage({method:"idCheck.updateAccessToken",accessToken:e,error:t},"*")},e.prototype.destroy=function(){for(window.removeEventListener("message",this.onMessage);this.$container&&this.$container.firstChild;)this.$container.removeChild(this.$container.firstChild);this.$container=null},e}(),w=function(){function e(e,t){if(this.baseUrl="https://api.sumsub.com",this.config=null,this.eventHandlers={},this.anyEventHandler=null,this.options={adaptIframeHeight:!0,addViewportTag:!0},"string"!=typeof e)throw new Error("Access token must be a string");if("function"!=typeof t)throw new Error("updateAccessToken callback is required");this.accessToken=e,this.updateAccessToken=t}return e.prototype.onTestEnv=function(){return this.baseUrl="https://test-api.sumsub.com",this},e.prototype.withBaseUrl=function(e){return this.baseUrl=e,this},e.prototype.withConf=function(e){return this.config=e,this},e.prototype.withOptions=function(e){return e.hasOwnProperty("adaptIframeHeight")&&(this.options.adaptIframeHeight=e.adaptIframeHeight),e.hasOwnProperty("addViewportTag")&&(this.options.addViewportTag=e.addViewportTag),this},e.prototype.on=function(e,t){return this.eventHandlers[e]=t,this},e.prototype.onMessage=function(e){return this.anyEventHandler=e,this},e.prototype.build=function(){var e,t,i,n,s,o,a,r=this;return new O(this.baseUrl,{accessToken:this.accessToken,lang:null===(e=this.config)||void 0===e?void 0:e.lang,email:null===(t=this.config)||void 0===t?void 0:t.email,phone:null===(i=this.config)||void 0===i?void 0:i.phone,country:null===(n=this.config)||void 0===n?void 0:n.country,uiConf:null===(s=this.config)||void 0===s?void 0:s.uiConf,i18n:null===(o=this.config)||void 0===o?void 0:o.i18n,documentsByCountries:null===(a=this.config)||void 0===a?void 0:a.documentsByCountries},{expirationHandler:{legacy:!1,handler:this.updateAccessToken},onMessage:function(e,t){var i;r.eventHandlers[e]?r.eventHandlers[e](t):null===(i=r.anyEventHandler)||void 0===i||i.call(r,e,t)}},this.options)},e}(),y=(function(){function e(e,t){this.debugEnabled=!1,this.options={adaptIframeHeight:!0,addViewportTag:!0},this.config=null,this.accessToken=null,this.expirationHandler=null,this.baseUrl=e,this.flowName=t}e.prototype.withAccessToken=function(e,t){if(this.accessToken=e,!t||"function"!=typeof t)throw new Error('Invalid parameter, "expirationHandler" must be a function');return this.expirationHandler=t,this},e.prototype.debug=function(e){return this.debugEnabled=e,this},e.prototype.withOptions=function(e){return e.hasOwnProperty("adaptIframeHeight")&&(this.options.adaptIframeHeight=e.adaptIframeHeight),e.hasOwnProperty("addViewportTag")&&(this.options.addViewportTag=e.addViewportTag),this},e.prototype.withConf=function(e){return this.config=e,this},e.prototype.build=function(){var e,t,i,n,s,o,a,r,c;if(!this.accessToken||!this.expirationHandler)throw new Error("Configure access token end the expiration handler before");return new O(this.baseUrl,{accessToken:this.accessToken,flowName:this.flowName,lang:null===(e=this.config)||void 0===e?void 0:e.lang,email:null===(t=this.config)||void 0===t?void 0:t.email,phone:null===(i=this.config)||void 0===i?void 0:i.phone,country:null===(n=this.config)||void 0===n?void 0:n.country,uiConf:null===(s=this.config)||void 0===s?void 0:s.uiConf,i18n:null===(o=this.config)||void 0===o?void 0:o.i18n,documentsByCountries:null===(a=this.config)||void 0===a?void 0:a.documentsByCountries},{expirationHandler:{legacy:!0,handler:this.expirationHandler},onMessage:null===(r=this.config)||void 0===r?void 0:r.onMessage,onError:null===(c=this.config)||void 0===c?void 0:c.onError},{adaptIframeHeight:this.options.adaptIframeHeight,addViewportTag:this.options.addViewportTag,debug:this.debugEnabled})}}(),function(e,t){return new w(e,t)}),C=i(258),N=i(48),T=i(2),_=function(e){var t=e.accessToken,i=(e.url,e.name,e.email),n=e.phone,o=e.messages,r=Object(f.c)(m).loading;return Object(s.useEffect)((function(){r||y(t,(function(){return Promise.resolve(t)})).withConf({lang:"en",email:i,phone:n,i18n:o,onMessage:function(e,t){},onError:function(e){console.error("WebSDK onError",e)}}).build().launch("#kyc-sumsub-verify")}),[r]),Object(T.jsxs)("div",{className:"modal modal--medium",children:[Object(T.jsx)("button",{className:"close-modal",onClick:g.b,children:Object(T.jsx)("img",{src:C.a,alt:"Close"})}),Object(T.jsx)("div",{className:"modal-header",children:Object(T.jsx)("p",{className:"modal-title",children:a.a.translate("Pages.Users.Verification.ModalIframe.item1")})}),Object(T.jsx)("div",{className:"modal-body",children:r?Object(T.jsx)(N.a,{}):Object(T.jsx)("div",{id:"kyc-sumsub-verify"})})]})},E=i(5);t.default=function(){var e,t,i,o,r,l=Object(f.b)(),m=Object(f.c)(p.b),x=Object(f.c)(v),O=Object(f.c)(b),w=Object(s.useState)(""),y=Object(n.a)(w,2),C=y[0],N=y[1],I=Object(s.useState)(null),H=Object(n.a)(I,2),M=H[0],V=H[1],U=null===m||void 0===m?void 0:m.sumsub,L=/Mobi/.test(navigator.userAgent);Object(s.useEffect)((function(){l({type:k.a.GET_SUMSUB_TOKEN_START})}),[]),Object(s.useEffect)((function(){x&&N(x)}),[x]),Object(s.useEffect)((function(){!function(e){switch(null===e||void 0===e?void 0:e.status){default:V("Unverified");break;case 0:V("Rejected");break;case 1:V("Verified")}}(U)}),[l,m]);var P=Object(h.h)().search;if(!m.isMobile&&!(null===m||void 0===m?void 0:m.token)&&L)return Object(T.jsx)(h.a,{to:E.a.Auth.Login.path});var A=c()(new Date(1e3*(null===m||void 0===m?void 0:m.last_login))).format("yyyy-MM-DD HH:mm:ss"),D=(null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.first_name)?null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.first_name.slice(0,1):"USER",S=(null===m||void 0===m||null===(i=m.data)||void 0===i?void 0:i.last_name)?null===m||void 0===m||null===(o=m.data)||void 0===o?void 0:o.last_name.slice(0,1):"",B=d()("acc-status",{"acc-status--unverified":1!==(null===U||void 0===U?void 0:U.status),"acc-status--verified":1===(null===U||void 0===U?void 0:U.status)}),W=Object(j.l)(null===m||void 0===m?void 0:m.email,3);return Object(T.jsx)("section",{className:"account-section",children:Object(T.jsxs)("div",{className:"custom-container",children:[Object(T.jsx)("p",{className:"block-main-title",children:a.a.translate("Pages.Users.Verification.item1")}),Object(T.jsxs)("div",{className:"account-wrap",children:[Object(T.jsxs)("div",{className:"account-box",children:[Object(T.jsxs)("div",{className:"account-top-panel",children:[Object(T.jsxs)("div",{className:"protect-personal",children:[Object(T.jsx)("p",{className:"block-title",children:a.a.translate("Pages.Users.Verification.item2")}),Object(T.jsxs)(u.b,{to:{pathname:E.a.Static.PrivacyAndTerms.path,search:P},className:"protect-personal-btn",children:[Object(T.jsx)("span",{className:"d-flex protect-personal-btn__icon",children:Object(T.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(T.jsx)("path",{d:"M16 7.81429V8.50429C15.9991 10.1216 15.4754 11.6953 14.507 12.9907C13.5386 14.286 12.1775 15.2336 10.6265 15.6922C9.07557 16.1508 7.41794 16.0957 5.90085 15.5352C4.38376 14.9747 3.08849 13.9389 2.20822 12.5821C1.32795 11.2253 0.909843 9.62034 1.01626 8.00653C1.12267 6.39271 1.7479 4.85654 2.79871 3.6271C3.84951 2.39766 5.26959 1.54083 6.84714 1.1844C8.42469 0.827975 10.0752 0.991046 11.5525 1.64929",stroke:"black",strokeWidth:"1.38",strokeLinecap:"round",strokeLinejoin:"round"}),Object(T.jsx)("path",{d:"M16 2.50439L8.5 10.0119L6.25 7.76189",stroke:"#00D496",strokeWidth:"1.38",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.a.translate("Pages.Users.Verification.item3"),Object(T.jsx)("span",{className:"d-flex protect-personal-btn__arrow",children:Object(T.jsx)("svg",{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsx)("path",{d:"M1 11L6 6L1 1",stroke:"#080A0D",strokeWidth:"1.67107",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),Object(T.jsx)("div",{className:B,children:M})]}),Object(T.jsxs)("div",{className:"account-user",children:[Object(T.jsx)("div",{className:"account-user__name",children:Object(T.jsxs)("p",{children:[D,S]})}),Object(T.jsxs)("div",{className:"account-user__info",children:[Object(T.jsx)("div",{className:"acc-details",children:Object(T.jsx)("p",{className:"acc-details__email",children:W})}),Object(T.jsxs)("div",{className:"acc-extra",children:[Object(T.jsxs)("p",{children:[a.a.translate("Pages.Users.Verification.item4")," ",A]}),Object(T.jsxs)("p",{children:["IP: ",null===m||void 0===m||null===(r=m.data)||void 0===r?void 0:r.last_login_ip]})]})]})]})]}),Object(T.jsxs)("div",{className:"account-box account-box--type2",children:[Object(T.jsx)("div",{className:"account-box__title",children:Object(T.jsx)("p",{className:"block-title",children:a.a.translate("Pages.Users.Verification.item5")})}),Object(T.jsxs)("div",{className:"account-item",children:[Object(T.jsx)("div",{className:"account-item__main",children:Object(T.jsxs)("div",{className:"account-info",children:[Object(T.jsxs)("div",{className:"personal-info",children:[Object(T.jsx)("div",{className:"d-flex personal-info__icon",children:Object(T.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(T.jsx)("circle",{cx:"14",cy:"14",r:"13",stroke:"#121214",strokeWidth:"2"}),Object(T.jsx)("path",{d:"M13.9998 13.2222C15.718 13.2222 17.1109 11.8293 17.1109 10.1111C17.1109 8.39289 15.718 7 13.9998 7C12.2816 7 10.8887 8.39289 10.8887 10.1111C10.8887 11.8293 12.2816 13.2222 13.9998 13.2222Z",stroke:"#2DDD9D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(T.jsx)("path",{d:"M20.2223 20.2214V18.6658C20.2223 17.8407 19.8945 17.0494 19.3111 16.4659C18.7276 15.8825 17.9363 15.5547 17.1112 15.5547H10.8889C10.0638 15.5547 9.2725 15.8825 8.68906 16.4659C8.10561 17.0494 7.77783 17.8407 7.77783 18.6658V20.2214",stroke:"#2DDD9D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Object(T.jsx)("p",{className:"personal-info__title",children:a.a.translate("Pages.Users.Verification.item6")})]}),!U&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("p",{className:"account-info__title",children:a.a.translate("Pages.Users.Verification.item7")}),Object(T.jsxs)("div",{className:"account-info__text",children:["\u2022 ",a.a.translate("Pages.Users.Verification.item8")]})]})]})}),Object(T.jsx)("div",{className:"account-item__action",children:Object(T.jsx)("button",{className:"button button--full",type:"button",onClick:function(){Object(g.c)((function(){var e,t;return Object(T.jsx)(_,{accessToken:C,url:O||"",name:"basic-kyc",email:null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.email,phone:(null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.phone)||"",messages:""})}))},children:a.a.translate("Pages.Users.Verification.item9")})})]})]})]})]})})}},258:function(e,t,i){"use strict";t.a=i.p+"static/media/closeIcon.07a86e17.svg"}}]);
//# sourceMappingURL=Verification page.086e046d.chunk.js.map