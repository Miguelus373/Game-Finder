(this["webpackJsonpgame-finder"]=this["webpackJsonpgame-finder"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"Session_container__3Nli1",title:"Session_title__4byFt",message:"Session_message__2BKPa",error:"Session_error__21mg5",input:"Session_input__2wh_g",button:"Session_button__2fJ8E",redirect:"Session_redirect__2N74_"}},14:function(e,t,n){e.exports={container:"GameDetails_container__3RBNR",image:"GameDetails_image__AJqTq",wrapper:"GameDetails_wrapper__1q7IW",about:"GameDetails_about__1Ha4w",description:"GameDetails_description__1vF6Z",genre:"GameDetails_genre__r4LnG",button:"GameDetails_button__Tbg_L"}},19:function(e,t,n){e.exports={container:"Main_container__1NzWo",title:"Main_title__3odRI",wrapper:"Main_wrapper__2J0Gc",button:"Main_button__2vyds"}},20:function(e,t,n){e.exports={card:"GameCard_card__11PMs",link:"GameCard_link__29MJh",image:"GameCard_image__3CBTx",info:"GameCard_info__2Mhsy",title:"GameCard_title__3eLDi"}},21:function(e,t,n){e.exports={navbar:"Navbar_navbar__2N3xP",back:"Navbar_back__30orB",backArrow:"Navbar_backArrow__31ouM",title:"Navbar_title__2MeND",menu:"Navbar_menu__3dIJ0"}},32:function(e,t,n){e.exports={button:"FavouriteButton_button__2Fbxv",fav:"FavouriteButton_fav__32rnj",noFav:"FavouriteButton_noFav__2fuRw"}},36:function(e,t,n){e.exports={container:"GameIndex_container__3jX0n"}},43:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),s=n(25),i=n.n(s),o=(n(43),n(4)),u=n(7),l=n(16),b=(n(50),n(3)),j=n(5),p=n.n(j),m=n(12),d=n(24),f=n(17),h="https://gamefinderapi.herokuapp.com/",_=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/games"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"POST",mode:"cors"},e.next=4,fetch("".concat(h).concat(n,"?username=").concat(t),a);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"GET",mode:"cors",headers:{Authorization:"Basic ".concat(n)}},e.next=4,fetch("".concat(h,"/users/").concat(t),a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"POST",mode:"cors",headers:{Authorization:"Basic ".concat(a)}},fetch("".concat(h,"/favourites?user_id=").concat(t,"&game_id=").concat(n),r),e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"DELETE",mode:"cors",headers:{Authorization:"Basic ".concat(n)}},fetch("".concat(h,"/favourites/").concat(t),a),e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),N=new f.a,w=function(){return N.get("currentUserID")},k=function(){return N.get("userToken")},y=function(){return!!w()},C=n(13),E=n.n(C),G=n(1),S=function(){var e,t,n,a,r,s,i=new f.a,u=Object(b.f)();if(y())return u.push("/menu"),!1;var l,j,h,_,O,g=Object(b.g)().pathname,x=Object(c.useState)(""),N=Object(d.a)(x,2),w=N[0],k=N[1],C=Object(c.useState)(""),S=Object(d.a)(C,2),M=S[0],I=S[1],A=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(w,g);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,t.ok?(i.set("currentUserID",n.user_id,{path:"/"}),i.set("userToken",n.token,{path:"/"}),u.push("/menu")):I("Username ".concat(n.username));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return"/signup"===g&&(l="Sign Up",j="Create Account",h="/login",_="Already",O="Log In"),Object(G.jsxs)("div",{className:E.a.container,children:[Object(G.jsx)("h1",{className:E.a.title,children:null!==(e=l)&&void 0!==e?e:"Log In"}),Object(G.jsxs)("p",{className:E.a.message,children:["Welcome!"," ",null!==(t=l)&&void 0!==t?t:"Log In"," ","and start managing your games"]}),Object(G.jsx)("p",{className:E.a.error,children:M}),Object(G.jsxs)("form",{children:[Object(G.jsx)("input",{type:"text",name:"username",value:w,onChange:function(e){return k(e.target.value)},placeholder:"Enter your Username",className:E.a.input}),Object(G.jsx)("br",{}),Object(G.jsx)("button",{type:"button",onClick:A,className:E.a.button,children:null!==(n=j)&&void 0!==n?n:"Login"})]}),Object(G.jsxs)("p",{className:E.a.redirect,children:[Object(G.jsxs)("span",{children:[null!==(a=_)&&void 0!==a?a:"Don't"," ","have an account?"]})," ",Object(G.jsx)(o.b,{to:null!==(r=h)&&void 0!==r?r:"/signup",children:null!==(s=O)&&void 0!==s?s:"Sign Up"})]})]})},M=n(19),I=n.n(M),A=function(){var e=Object(b.f)();return y()&&e.push("/menu"),Object(G.jsxs)("div",{className:I.a.container,children:[Object(G.jsx)("h1",{className:I.a.title,children:"GAME FINDER"}),Object(G.jsxs)("div",{className:I.a.wrapper,children:[Object(G.jsx)(o.b,{to:"/signup",className:I.a.button,children:"Create an Account"}),Object(G.jsx)(o.b,{to:"/login",className:I.a.button,children:"Log In"})]})]})},D=function(e){return{type:"SET_USER",payload:e}},T=n(32),F=n.n(T);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function P(e,t){var n=e.title,s=e.titleId,i=B(e,["title","titleId"]);return c.createElement("svg",L({xmlnsSvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 650 480",width:40,height:40,id:"svg2",ref:t,"aria-labelledby":s},i),n?c.createElement("title",{id:s},n):null,a||(a=c.createElement("defs",{id:"defs4"})),r||(r=c.createElement("g",{id:"layer1"},c.createElement("path",{d:"M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z",id:"path2417"}),c.createElement("g",{transform:"translate(129.28571,-64.285714)",id:"g2221"}))))}var R=c.forwardRef(P),U=(n.p,function(e){var t=e.gameID,n=Object(u.b)(),a=Object(u.c)((function(e){return e.user.favs})).find((function(e){return e.game_id===t})),r=Object(c.useState)(a?"fav":"noFav"),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(G.jsx)("button",{type:"button",onClick:function(){var e=[w(),k()],r=e[0],c=e[1];a?(x(a.id,c),o("noFav")):(g(r,t,c),o("fav")),O(r,c).then((function(e){return n(D(e))}))},className:F.a.button,children:Object(G.jsx)(R,{className:F.a[i]})})}),J=n(20),z=n.n(J),q=function(e){var t=e.game,n=t.id,a=t.title,r=t.image,c=t.genre;return Object(G.jsxs)("div",{className:z.a.card,children:[Object(G.jsx)(o.b,{to:"/game/".concat(n),className:z.a.link,children:Object(G.jsx)("img",{src:r,alt:a,className:z.a.image})}),Object(G.jsxs)("div",{className:z.a.info,children:[Object(G.jsx)("h3",{className:z.a.title,children:a}),Object(G.jsx)("p",{children:c}),Object(G.jsx)(U,{gameID:n})]})]})},H=n(21),W=n.n(H),K=n.p+"static/media/arrow.2087ad8b.svg",X=n.p+"static/media/menu.35169075.svg",Z=function(e){var t=e.title,n=e.backArrow,a=Object(b.f)();return Object(G.jsxs)("nav",{className:W.a.navbar,children:[n&&Object(G.jsx)("button",{type:"button",onClick:a.goBack,className:W.a.back,children:Object(G.jsx)("img",{src:K,alt:"Go back",className:W.a.backArrow})}),Object(G.jsx)("h4",{className:W.a.title,children:t}),y()&&Object(G.jsx)(o.b,{to:"/menu",className:W.a.menu,children:Object(G.jsx)("img",{src:X,alt:"Menu"})}),!y()&&Object(G.jsx)(o.b,{to:"/",children:"Login"})]})};Z.defaultProps={backArrow:!1};var $=Z,Q=n(36),V=n.n(Q),Y=function(){var e,t,n,a,r=Object(b.g)().pathname,s=Object(b.f)(),i=Object(u.c)((function(e){return e.games}));if(!y())return s.push("/"),!1;if("/favourites"===r){n="Favourites",a="No Games in favourites";var o=Object(u.c)((function(e){return e.user.favs})).map((function(e){return e.game_id}));i=i.filter((function(e){return o.includes(e.id)}))}var l=Object(u.b)();return Object(c.useEffect)((function(){_().then((function(e){l(function(e){return{type:"SET_GAMES",payload:e}}(e))}))}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)($,{title:null!==(e=n)&&void 0!==e?e:"Games"}),Object(G.jsxs)("div",{className:V.a.container,children:[0===i.length&&Object(G.jsx)("p",{children:null!==(t=a)&&void 0!==t?t:"Loading"}),i.map((function(e){return Object(G.jsx)(q,{game:e},e.id)}))]})]})},ee=n(8),te=n.n(ee),ne=n.p+"static/media/profile_icon.b04388c7.png",ae=function(){var e=new f.a,t=Object(b.f)(),n=Object(u.b)();if(!y())return t.push("/"),!1;Object(c.useEffect)((function(){var e=[w(),k()];O(e[0],e[1]).then((function(e){n(D(e))}))}),[]);var a=Object(u.c)((function(e){return e.user}));if(a.info){var r=a.info.username,s=a.favs;return Object(G.jsxs)("div",{className:te.a.menu,children:[Object(G.jsx)("img",{src:ne,alt:"Profile Icon",className:te.a.icon}),Object(G.jsxs)("h3",{className:te.a.username,children:["@",r]}),Object(G.jsx)(o.b,{to:"/games",className:te.a.link,children:"Games"}),Object(G.jsxs)(o.b,{to:"/favourites",className:te.a.link,children:["Favourites"," ",Object(G.jsx)("span",{className:te.a.counter,children:s.length})]}),Object(G.jsxs)("p",{className:te.a.link,children:["Messages",Object(G.jsx)("span",{className:te.a.counter,children:"2"})]}),Object(G.jsx)("p",{className:te.a.link,children:"Friends"}),Object(G.jsx)("hr",{className:te.a.line}),Object(G.jsx)("p",{className:te.a.link,children:"Help"}),Object(G.jsx)("button",{type:"button",onClick:function(){e.remove("currentUserID"),e.remove("userToken"),t.push("/")},className:te.a.logout,children:"Logout"})]})}return Object(G.jsx)("div",{className:te.a.loading,children:Object(G.jsx)("h2",{children:"Logging In..."})})},re=n(14),ce=n.n(re),se=function(){var e=Object(b.f)(),t=Object(b.g)().pathname,n=parseInt(t.split("/")[2],10),a=Object(u.c)((function(e){return e.games.find((function(e){return e.id===n}))}));if(!y()||!a)return e.push("/"),!1;var r=a.title,c=a.image,s=a.description,i=a.genre;return Object(G.jsxs)("div",{className:ce.a.container,children:[Object(G.jsx)($,{title:r,backArrow:!0}),Object(G.jsx)("img",{src:c,alt:r,className:ce.a.image}),Object(G.jsxs)("div",{className:ce.a.wrapper,children:[Object(G.jsx)("p",{className:ce.a.about,children:"About this Game:"}),Object(G.jsx)("br",{}),Object(G.jsx)("p",{className:ce.a.description,children:s})]}),Object(G.jsx)("p",{className:ce.a.genre,children:i}),Object(G.jsx)("p",{className:ce.a.button,children:"Buy for $ 19.99"})]})};var ie=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(b.c,{children:[Object(G.jsx)(b.a,{path:["/signup","/login"],component:S}),Object(G.jsx)(b.a,{path:"/menu",component:ae}),Object(G.jsx)(b.a,{path:"/game/",component:se}),Object(G.jsx)(b.a,{path:["/games","/favourites"],component:Y}),Object(G.jsx)(b.a,{exact:!0,path:"/",component:A})]})})},oe=n(37),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAMES":return Object(oe.a)(t.payload);default:return e}},le=n(38),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(le.a)({},t.payload);default:return e}},je=Object(l.b)({games:ue,user:be}),pe=Object(l.c)(je);i.a.render(Object(G.jsx)(o.a,{children:Object(G.jsx)(u.a,{store:pe,children:Object(G.jsx)(ie,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={menu:"Menu_menu__2sGxA",loading:"Menu_loading__3TwRn",icon:"Menu_icon__3h7fj",username:"Menu_username__2DIP4",link:"Menu_link__8kob-",counter:"Menu_counter__1AR7v",line:"Menu_line__HGTfu",logout:"Menu_logout__2JkPj"}}},[[56,1,2]]]);
//# sourceMappingURL=main.e932ec27.chunk.js.map