(this["webpackJsonprouting-react"]=this["webpackJsonprouting-react"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),l=(n(25),n(26),n(6));var u=function(){var e={color:"#fff"};return r.a.createElement("nav",null,r.a.createElement("h3",null," ",r.a.createElement("span",null,r.a.createElement("small",null,"just another")),"Logo"),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(l.b,{style:e,to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(l.b,{style:e,to:"/shop"},r.a.createElement("li",null,"Simpsons"))))},s=n(8),i=n.n(s),m=n(10),p=n(11),f=n(34);var h=function(){Object(a.useEffect)((function(){o()}),[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("h1",{key:Object(f.a)()},r.a.createElement(l.b,{to:"/shop/".concat(Object(f.a)())},e.character)," ")})))};var E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,'Heard you are Simpsons fan? Learnt React ..fetched API..And here you are with your favourite quotes of each Simpson.. should\'ve named this page "About you".Enjoy it!'))},v=n(1);var b=function(e){var t=e.match;Object(a.useEffect)((function(){u(),console.log(t)}),[]);var n=Object(a.useState)([]),c=Object(p.a)(n,2),o=c[0],l=c[1],u=function(){var e=Object(m.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thesimpsonsquoteapi.glitch.me/quotes?ids=".concat(t.params.id,"?count=5"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,l(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,o.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{key:Object(f.a)()},e.quote),r.a.createElement("img",{src:e.image,alt:""}))})))};function d(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Home"))}var j=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:d}),r.a.createElement(v.a,{path:"/about",component:E}),r.a.createElement(v.a,{path:"/shop",exact:!0,component:h}),r.a.createElement(v.a,{path:"/shop/:ids",component:b}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.15673db4.chunk.js.map