(this["webpackJsonpdafri-frontend"]=this["webpackJsonpdafri-frontend"]||[]).push([[32],{211:function(e,t,n){"use strict";n.r(t);var s=n(4),a=n(39),l=n(6),i=n(12),r=n.n(i),o=n(18),c=n(13),d=n(35),h=n(253),m=n(2),p=function(e){var t=e.name,n=e.country,s=e.commission_rate,a=e.id,l=e.phone,i=e.onClick,o=e.selectedId;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"tr ".concat(o===a?"selected":""),onClick:function(){return i(a)},children:[Object(m.jsxs)("div",{className:"td",children:[Object(m.jsx)("div",{className:"td-hidden-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item1")}),Object(m.jsx)("p",{className:"table-value",children:t})]}),Object(m.jsxs)("div",{className:"td selected",children:[Object(m.jsx)("div",{className:"td-hidden-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item2")}),Object(m.jsx)("p",{children:n})]}),Object(m.jsxs)("div",{className:"td",children:[Object(m.jsx)("div",{className:"td-hidden-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item3")}),Object(m.jsxs)("p",{className:"table-value",children:[s,"%"]})]}),Object(m.jsxs)("div",{className:"td",children:[Object(m.jsx)("div",{className:"td-hidden-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.TableItem.item4")}),Object(m.jsx)("p",{children:l})]})]})})},u=n(236),j=n(0),b=function(e){var t,n=e.agentsList,i=e.onSelectAgent,c=e.selectedId,b=e.tableRef,g=Object(o.b)(),v=Object(l.useState)(1),f=Object(a.a)(v,2),x=f[0],O=f[1],y=Object(l.useState)(!0),N=Object(a.a)(y,2),_=N[0],A=N[1],P=null===n||void 0===n?void 0:n.last_page;Object(l.useEffect)((function(){g({type:j.a.GET_PUBLIC_PAYMENT_AGENTS_LIST_START,payload:{params:{current_page:x,per_page:10}}})}),[x]);var w=function(e){var t;i.apply(void 0,Object(d.a)(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.filter((function(t){return t.id===e}))))};return Object(m.jsxs)("div",{className:"table table--mob-scroll table--agent-list table--auto-td-height",children:[Object(m.jsx)("div",{className:"table-header",children:Object(m.jsxs)("div",{className:"tr",children:[Object(m.jsx)("div",{className:"td",children:Object(m.jsx)("div",{className:"td-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item1")})}),Object(m.jsx)("div",{className:"td",children:Object(m.jsx)("div",{className:"td-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item2")})}),Object(m.jsx)("div",{className:"td",children:Object(m.jsx)("div",{className:"td-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item3")})}),Object(m.jsx)("div",{className:"td",children:Object(m.jsx)("div",{className:"td-name",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item4")})})]})}),Object(m.jsx)("div",{className:"table-body",children:Object(m.jsx)(h.a,{data:(null===n||void 0===n?void 0:n.data)||[],handleNext:function(){if(P){if(x===P)return void A(!1);O(x+1)}},hasMore:_,parentRef:b,children:(null===n||void 0===n?void 0:n.data)&&(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.length)?null===n||void 0===n?void 0:n.data.map((function(e){return Object(m.jsx)(p,Object(s.a)({onClick:w,selectedId:c},e),e.id)})):Object(m.jsx)(u.a,{text:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentsTable.item5")})})})]})},g=n(19),v=n(355),f=n(280),x=function(e){var t=e.photo_path,n=e.name,a=e.surname,l=e.id,i=e.commission_rate,o=e.address,c=e.phone;return Object(m.jsx)("div",{className:"public-agents__card",children:Object(m.jsxs)("div",{className:"agent",children:[t?Object(m.jsx)("div",{className:"agent-avatar",children:Object(m.jsx)("img",{src:t,alt:""})}):Object(m.jsx)(f.a,{width:"120px",height:"120px"}),Object(m.jsxs)("p",{className:"item-title agent__name",children:[n||"Agent"," ",a||l]}),Object(m.jsxs)("p",{className:"agent__rate",children:[r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentCard.item1"),": ",i,"%"]}),Object(m.jsxs)("div",{className:"agent-address",children:[Object(m.jsx)("span",{className:"d-flex agent-address__icon",children:Object(m.jsx)("svg",{className:"fill",width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M5.99967 0C2.80452 0 0.205078 2.59944 0.205078 5.79456C0.205078 9.75981 5.39067 15.581 5.61145 15.8269C5.81883 16.0579 6.18089 16.0575 6.38789 15.8269C6.60867 15.581 11.7943 9.75981 11.7943 5.79456C11.7942 2.59944 9.1948 0 5.99967 0ZM5.99967 8.70997C4.39211 8.70997 3.0843 7.40213 3.0843 5.79456C3.0843 4.187 4.39214 2.87919 5.99967 2.87919C7.6072 2.87919 8.91502 4.18703 8.91502 5.79459C8.91502 7.40216 7.6072 8.70997 5.99967 8.70997Z",fill:"#292929"})})}),Object(m.jsx)("p",{className:"agent-address__value",children:o})]}),Object(m.jsx)("a",{href:"tel:".concat(c),className:"agent-phone",children:Object(m.jsx)("p",{className:"phone",children:Object(m.jsx)("span",{children:c})})}),Object(m.jsxs)("button",{className:"agent-more",type:"button",onClick:function(){return Object(g.c)((function(){return Object(m.jsx)(v.a,Object(s.a)({},e))}))},children:[r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.AgentCard.item2"),Object(m.jsx)("span",{className:"d-flex agent-more__icon",children:Object(m.jsx)("svg",{className:"fill",width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M1 4.35C0.641015 4.35 0.35 4.64102 0.35 5C0.35 5.35899 0.641015 5.65 1 5.65L1 4.35ZM13.4596 5.45962C13.7135 5.20578 13.7135 4.79422 13.4596 4.54038L9.32304 0.403805C9.0692 0.149964 8.65765 0.149964 8.40381 0.403805C8.14996 0.657646 8.14996 1.0692 8.40381 1.32304L12.0808 5L8.40381 8.67695C8.14997 8.9308 8.14997 9.34235 8.40381 9.59619C8.65765 9.85003 9.0692 9.85003 9.32305 9.59619L13.4596 5.45962ZM1 5.65L13 5.65L13 4.35L1 4.35L1 5.65Z",fill:"#292929"})})})]})]})})},O=n(37),y=n(267),N=n(5),_=n.p+"static/media/agennt-line.ce5d985b.svg";t.default=function(){var e=Object(o.b)(),t=Object(o.c)(O.f),n=Object(o.c)(O.a),i=Object(o.c)(y.f),d="payment-table",h=Object(l.useState)(null),p=Object(a.a)(h,2),u=p[0],g=p[1];return Object(l.useEffect)((function(){g(null===i||void 0===i?void 0:i.data[0])}),[i]),Object(l.useEffect)((function(){return function(){e({type:j.a.CLEAR_ALL_PUBLIC_PAYMENT_AGENTS_LIST})}}),[]),Object(m.jsxs)("section",{className:"public-agent-section",children:[Object(m.jsx)("div",{className:"section-circle"}),Object(m.jsxs)("div",{className:"custom-container",children:[Object(m.jsx)("p",{className:"section-title ",children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.item1")}),Object(m.jsx)("div",{className:"section-content",children:Object(m.jsxs)("div",{className:"public-agents",children:[Object(m.jsxs)("div",{className:"public-agents__list",children:[Object(m.jsx)("div",{className:"table-box",id:d,children:Object(m.jsx)(b,{agentsList:i,onSelectAgent:g,selectedId:null===u||void 0===u?void 0:u.id,tableRef:d})}),t&&!(null===n||void 0===n?void 0:n.payment_agent)&&Object(m.jsxs)("div",{className:"form-extra",children:[Object(m.jsx)("div",{className:"form-line",children:Object(m.jsx)("img",{src:_,alt:""})}),Object(m.jsxs)("div",{className:"form-hint",children:[Object(m.jsx)("span",{className:"d-flex  form-hint__icon",children:Object(m.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{className:"path-stroke",d:"M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z",stroke:"#9195A4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{className:"path-stroke",d:"M11.125 11.125H12V17.25H12.875",stroke:"#9195A4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{className:"path-fill",d:"M12 8.5C12.7249 8.5 13.3125 7.91237 13.3125 7.1875C13.3125 6.46263 12.7249 5.875 12 5.875C11.2751 5.875 10.6875 6.46263 10.6875 7.1875C10.6875 7.91237 11.2751 8.5 12 8.5Z",fill:"#9195A4"})]})}),r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.item2")," ","-"," ",Object(m.jsx)(c.b,{to:N.a.Profile.PaymentAgentForm.path,children:r.a.translate("Pages.Users.PaymentAgent.PublicPaymentAgents.item3")}),"."]})]})]}),Object(m.jsx)(x,Object(s.a)({},u))]})})]})]})}},236:function(e,t,n){"use strict";n(6);var s=n(2);t.a=function(e){var t=e.text;return Object(s.jsx)("p",{style:{textAlign:"center",padding:"15px 0"},children:t})}},253:function(e,t,n){"use strict";n(6);var s=n(259),a=n(2);t.a=function(e){var t=e.data,n=e.handleNext,l=e.hasMore,i=e.parentRef,r=e.children;return Object(a.jsx)(s.a,{dataLength:null===t||void 0===t?void 0:t.length,next:n,hasMore:l,scrollableTarget:i,children:r})}},258:function(e,t,n){"use strict";t.a=n.p+"static/media/closeIcon.07a86e17.svg"},259:function(e,t,n){"use strict";var s=n(6),a=n.n(s),l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},l(e,t)};var i=function(){return i=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var r="Pixel",o="Percent",c={unit:o,value:.8};function d(e){return"number"===typeof e?{unit:o,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:r,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:o,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),c):(console.warn("scrollThreshold should be string or number"),c)}var h=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,s){var a,l=!1,i=0;function r(){a&&clearTimeout(a)}function o(){var o=this,c=Date.now()-i,d=arguments;function h(){i=Date.now(),n.apply(o,d)}function m(){a=void 0}l||(s&&!a&&h(),r(),void 0===s&&c>e?h():!0!==t&&(a=setTimeout(s?m:h,void 0===s?e-c:e)))}return"boolean"!==typeof t&&(s=n,n=t,t=void 0),o.cancel=function(){r(),l=!0},o}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?i(i({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,s=d(t);return s.unit===r?e.scrollTop<=s.value+n-e.scrollHeight+1:e.scrollTop<=s.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,s=d(t);return s.unit===r?e.scrollTop+n>=e.scrollHeight-s.value:e.scrollTop+n>=s.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return a.a.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},a.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&a.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},a.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(s.Component);t.a=h},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o}));var s=function(e){return e.paymentAgent.paymentAgent},a=function(e){return e.paymentAgent.paymentAgent.paymentAgentCommission},l=function(e){return e.paymentAgent.paymentAgent.singlePaymentAgent},i=function(e){return e.paymentAgent.paymentAgentWithdrawal.withdrawalList},r=function(e){return e.paymentAgent.paymentAgentTransfer.transferList},o=function(e){return e.paymentAgent.paymentAgent.publicAgentsList}},280:function(e,t,n){"use strict";n(6);var s=n(2);t.a=function(e){var t=e.width,n=void 0===t?"100%":t,a=e.height,l=void 0===a?"100%":a,i=e.position,r=void 0===i?"center":i,o=e.radius,c=void 0===o?40:o,d=(e.imageText,e.textSize),h=void 0===d?16:d;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:r,width:"100%"},children:Object(s.jsx)("p",{style:{background:"rgb(214, 214, 214)",width:n,height:l,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"".concat(c,"px")},children:Object(s.jsx)("span",{style:{fontSize:"".concat(h,"px")},children:"No image"})})})}},355:function(e,t,n){"use strict";n(6);var s=n(12),a=n.n(s),l=n(19),i=n(10),r=n(258),o=n(280),c=n(2);t.a=function(e){var t=e.photo_path,n=e.name,s=e.surname,d=e.commission_rate,h=e.country,m=e.min_deposit_withdrawal,p=e.address,u=e.payment_methods,j=e.email,b=e.phone,g=e.id,v=e.description;return Object(c.jsxs)("div",{className:"modal modal--bigger",children:[Object(c.jsx)("button",{className:"close-modal",onClick:l.b,children:Object(c.jsx)("img",{src:r.a,alt:"Close"})}),Object(c.jsxs)("div",{className:"agent-header",children:[Object(c.jsx)("div",{className:"agent-avatar",children:t?Object(c.jsx)("img",{src:t,alt:""}):Object(c.jsx)(o.a,{width:"110px",height:"110px",radius:30})}),Object(c.jsxs)("div",{className:"agent-header__info",children:[Object(c.jsxs)("p",{className:"item-title agent-header__info-name",children:[Object(i.j)(n)||"Agent"," ",Object(i.j)(s)||g]}),Object(c.jsxs)("p",{className:"agent-rate",children:[a.a.translate("Base.Modals.Users.PaymentAgentModal.item1")," ",d,"%"]})]})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsx)("div",{className:"modal-agent-info",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item2")}),Object(c.jsx)("p",{className:"modal-detail__value",children:Object(i.j)(h)})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item3")}),Object(c.jsx)("p",{className:"modal-detail__value",children:m})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item4")}),Object(c.jsx)("p",{className:"modal-detail__value",children:p})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item5")}),Object(c.jsx)("p",{className:"modal-detail__value",children:u})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item6")}),Object(c.jsx)("a",{href:"mailto:".concat(j),style:{color:"#000"},className:"modal-detail__value",children:j})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item7")}),Object(c.jsx)("a",{href:"tel:".concat(b),style:{color:"#000"},className:"phone modal-detail__value",children:b})]})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"modal-detail modal-detail--type2",children:[Object(c.jsx)("p",{className:"modal-detail__name",children:a.a.translate("Base.Modals.Users.PaymentAgentModal.item8")}),Object(c.jsx)("p",{className:"modal-detail__value",children:v})]})})]})})})]})}}}]);
//# sourceMappingURL=PaymentAgent.ac918203.chunk.js.map