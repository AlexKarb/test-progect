"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6574,9,5939,7981,7965,5832,4401,1168,269,6302,8167,852],{85939:function(n,e,t){t.r(e),t.d(e,{Container:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  padding: 0px 4px;\n"])))},33500:function(n,e,t){t.r(e),t.d(e,{useGetPublication:function(){return c}});var r=t(15861),i=t(70885),o=t(87757),a=t.n(o),l=t(72791),u=t(84554),c=function(n){var e=(0,l.useState)(""),t=(0,i.Z)(e,2),o=t[0],c=t[1],f=(0,l.useState)(),d=(0,i.Z)(f,2),s=d[0],x=d[1];return(0,l.useEffect)((function(){(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=3;break}return e.next=3,(0,u.editPublication)(null===o||void 0===o?void 0:o.id,null===o||void 0===o?void 0:o.data);case 3:if(!n){e.next=6;break}return e.next=6,(0,u.getSortedPublications)(n).then(x);case 6:case"end":return e.stop()}}),e)})))()}),[o,n]),[s,c]}},70009:function(n,e,t){t.r(e),t.d(e,{ApplicationList:function(){return p}});var r=t(70885),i=t(72791),o=t(71168),a=t(96302),l=t(54478),u=t(24780),c=t(85939),f=t(59436),d=t(33500),s=t(99222),x=t(80184),p=function(n){var e=n.type,t=(0,i.useState)(),p=(0,r.Z)(t,2),h=p[0],v=p[1],g=(0,d.useGetPublication)(e),m=(0,r.Z)(g,2),j=m[0],b=m[1],C=(0,a.useToggleFilter)(),Z=(0,r.Z)(C,2),k=Z[0],y=Z[1];return(0,i.useEffect)((function(){var n=(0,o.filteringItems)(j,k);v(n||j)}),[j,k]),(0,x.jsxs)(c.Container,{children:[(0,x.jsx)(f.Filter,{filter:k,toggleFilter:y}),!h&&(0,x.jsx)(s.MainSpiner,{}),h&&h.map((function(n){return(0,x.jsx)(l.Card,{data:n,onChange:b,type:e},n.id)})),0===(null===h||void 0===h?void 0:h.length)&&(0,x.jsx)(u.NoFound,{})]})}},90377:function(n,e,t){t.r(e),t.d(e,{ChildrenType:function(){return u}});var r=t(55705),i=t(27478),o=t(95832),a=t(7981),l=t(80184),u=function(n){var e=n.toggleFilter,t=n.filter,u=function(n){return e(n.target.value)};return(0,l.jsx)(r.J9,{initialValues:{filter:t},children:(0,l.jsxs)(a.Wrapp,{children:[(0,l.jsx)(o.BabyIcon,{}),(0,l.jsx)(i.CheckBox,{value:"clothes_child",label:"\u043e\u0434\u044f\u0433",name:"filter",onClick:u}),(0,l.jsx)(i.CheckBox,{value:"children_food",label:"\u0457\u0436\u0430",name:"filter",onClick:u}),(0,l.jsx)(i.CheckBox,{value:"diapers",label:"\u043f\u0456\u0434\u0433\u0443\u0437\u043a\u0438",name:"filter",onClick:u})]})})}},7981:function(n,e,t){t.r(e),t.d(e,{Wrapp:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid;\n  padding: 8px;\n  border-radius: 5px;\n"])))},87965:function(n,e,t){t.r(e),t.d(e,{Container:function(){return o}});var r,i=t(30168),o=t(15751).ZP.div(r||(r=(0,i.Z)(["\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  color: white;\n  font-size: 16px;\n  margin-bottom: 20px;\n  border-radius: 8px;\n\n  @media screen and (min-width: 540px) {\n    flex-direction: row;\n    justify-content: flex-start;\n    height: 90px;\n    width: 504px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 100%;\n    height: 44px;\n  }\n"])))},95832:function(n,e,t){t.r(e),t.d(e,{BabyIcon:function(){return l}});var r,i=t(30168),o=t(15751),a=t(56355),l=(0,o.ZP)(a.JeS)(r||(r=(0,i.Z)(["\n  color: white;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  margin: 0 4px;\n"])))},28134:function(n,e,t){t.r(e),t.d(e,{FilterIcon:function(){return l}});var r,i=t(30168),o=t(15751),a=t(7692),l=(0,o.ZP)(a.Ol$).attrs((function(n){return{color:"true"===n.isopen?"var(--unactive-color-bg)":"white"}}))(r||(r=(0,i.Z)(["\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 24px;\n  top: 12px;\n  color: white;\n"])))},16850:function(n,e,t){t.r(e),t.d(e,{MainType:function(){return l}});var r=t(90269),i=t(27478),o=t(84401),a=t(80184),l=function(n){var e=n.toggleFilter,t=function(n){return e(n.target.value)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.ContainerBox,{children:[(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{value:"clothes_adult",label:"\u043e\u0434\u044f\u0433",name:"filter",onClick:t})}),(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{value:"food",label:"\u0457\u0436\u0430",name:"filter",onClick:t})}),(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{value:"hygiene",label:"\u0433\u0456\u0433\u0456\u0454\u043d\u0430",name:"filter",onClick:t})})]}),(0,a.jsxs)(o.ContainerBox,{children:[(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{label:"\u0434\u043b\u044f \u0434\u0456\u0442\u0435\u0439",name:"showChild",onClick:function(n){n.target.checked||(0,r.removeChildItems)(e)}})}),(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{value:"delivery",label:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",name:"filter",onClick:t})}),(0,a.jsx)(o.Wrapper,{children:(0,a.jsx)(i.CheckBox,{value:"otherHelp",label:"\u0456\u043d\u0448\u0435",name:"filter",onClick:t})})]})]})}},84401:function(n,e,t){t.r(e),t.d(e,{Wrapper:function(){return l},ContainerBox:function(){return u}});var r,i,o=t(30168),a=t(15751),l=a.ZP.div(r||(r=(0,o.Z)(["\n  margin-bottom: 10px;\n"]))),u=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  &:first-child {\n    margin-bottom: 4px;\n  }\n"])))},71168:function(n,e,t){t.r(e),t.d(e,{filteringItems:function(){return r}});var r=function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){var t=n.typeHelp,r=n.delivery;return e.every((function(n){var e="delivery"===n&&!0===r;return t.includes(n)||e}))}))}},90269:function(n,e,t){t.r(e),t.d(e,{removeChildItems:function(){return a}});var r=t(15861),i=t(87757),o=t.n(i),a=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e("clothes_child",{deleting:!0});case 2:return n.next=4,e("children_food",{deleting:!0});case 4:return n.next=6,e("diapers",{deleting:!0});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},96302:function(n,e,t){t.r(e),t.d(e,{useToggleFilter:function(){return u}});var r=t(30907);var i=t(40181);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=t(70885),l=t(72791),u=function(){var n=(0,l.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1];return[t,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{deleting:!1},i=t.find((function(e){return e===n}));e.deleting||i?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return[].concat(o(e),[n])}))}]}},59436:function(n,e,t){t.r(e),t.d(e,{Filter:function(){return d}});var r=t(70885),i=t(55705),o=t(87965),a=t(90377),l=t(72791),u=t(16850),c=t(28134),f=t(80184),d=function(n){var e=n.filter,t=n.toggleFilter,d=(0,l.useState)(!1),s=(0,r.Z)(d,2),x=s[0],p=s[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.FilterIcon,{isopen:x.toString(),onClick:function(){return p((function(n){return!n}))}}),x&&(0,f.jsx)(i.J9,{initialValues:{filter:e,showChild:!1},children:function(n){var r=n.values.showChild;return(0,f.jsxs)(o.Container,{children:[(0,f.jsx)(u.MainType,{toggleFilter:t}),r&&(0,f.jsx)(a.ChildrenType,{toggleFilter:t,filter:e})]})}})]})}},43990:function(n,e,t){t.r(e),t.d(e,{GoBackButton:function(){return o}});var r=t(43943),i=t(80184),o=function(n){var e=n.path;return(0,i.jsx)(r.StyledLink,{to:e||"/","aria-label":"\u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434",children:(0,i.jsx)(r.Icon,{})})}},43943:function(n,e,t){t.r(e),t.d(e,{Icon:function(){return c},StyledLink:function(){return f}});var r,i,o=t(30168),a=t(15751),l=t(39126),u=t(43504),c=(0,a.ZP)(l.And)(r||(r=(0,o.Z)(["\n  height: 25px;\n  width: 25px;\n  color: white;\n\n  &:hover {\n    color: #afafaf;\n  }\n"]))),f=(0,a.ZP)(u.rU)(i||(i=(0,o.Z)(["\n  position: absolute;\n  top: 15px;\n  left: 30px;\n  z-index: 1;\n  color: white;\n  border: none;\n  background-color: transparent;\n\n  &:hover {\n    color: #afafaf;\n  }\n"])))},38167:function(n,e,t){t.r(e),t.d(e,{MainContainer:function(){return o}});var r,i=t(30168),o=t(15751).ZP.main(r||(r=(0,i.Z)(["\n  font-size: 20px;\n  position: relative;\n"])))},24780:function(n,e,t){t.r(e),t.d(e,{NoFound:function(){return o}});var r=t(64398),i=t(80184),o=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ExclamationPoint,{}),(0,i.jsx)(r.Text,{children:"\u0437\u0430\u044f\u0432\u043e\u043a \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},64398:function(n,e,t){t.r(e),t.d(e,{Text:function(){return u},ExclamationPoint:function(){return c}});var r,i,o=t(30168),a=t(15751),l=t(39126),u=a.ZP.p(r||(r=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n  padding: 16px;\n  color: #ffffff54;\n"]))),c=(0,a.ZP)(l.SgR)(i||(i=(0,o.Z)(["\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  color: #ffffff54;\n  display: block;\n  margin-top: 50px;\n"])))},20852:function(n,e,t){t.r(e),t.d(e,{TitleStyle:function(){return u},Text:function(){return c},Title:function(){return f}});var r,i,o=t(30168),a=t(15751),l=t(80184),u=a.ZP.div(r||(r=(0,o.Z)(["\n  padding: 16px;\n  color: white;\n  position: relative;\n"]))),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),f=function(n){var e=n.text,t=n.children;return(0,l.jsxs)(u,{children:[t,e&&(0,l.jsx)(c,{children:e})]})}},46574:function(n,e,t){t.r(e);var r=t(38167),i=t(20852),o=t(16871),a=t(70009),l=t(43990),u=t(80184);e.default=function(){var n,e=(0,o.TH)();return(0,u.jsxs)(r.MainContainer,{children:[(0,u.jsx)(l.GoBackButton,{path:null===e||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from}),(0,u.jsx)(i.Title,{text:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0437\u0430\u044f\u0432\u043a\u0438 "}),(0,u.jsx)(a.ApplicationList,{type:"completed"})]})}}}]);
//# sourceMappingURL=6574.a3db435d.chunk.js.map