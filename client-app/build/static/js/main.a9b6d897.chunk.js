(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);n(0);var a,c,i=n(25),o=n.n(i),r=(n(79),n.p+"static/media/logo.c2ac8c82.png"),d=n(40),u=n(41),p=u.a.div(a||(a=Object(d.a)(["\n  text-align: center;\n  color: white;\n"]))),l=u.a.img(c||(c=Object(d.a)(["\n  height: 30vmin;\n  padding: 15px;\n"]))),s=n(58),j=n.n(s),O=n(30),b="UPLOAD_AUDIO",h="CLEAR_AUDIO",f=n(110),g=n(73),m=n(12),v=function(){var e=Object(O.c)((function(e){return e.audioReducer})).audio,t=Object(O.b)();return Object(m.jsxs)("div",{children:[Object(m.jsx)(f.a,{type:"file",onChange:function(e){t(function(e){return{type:b,payload:e}}(e.target.files[0]))}}),Object(m.jsx)(g.a,{type:"primary",onClick:function(){var t=new FormData;t.append(e.name,e),function(e){return j()({url:"http://127.0.0.1:5000/api/audio",method:"POST",data:e,headers:{"Content-Type":"application/json"},mode:"cors"})}(t).then((function(e){return console.log(e)}))},children:"Upload!"})]})},x=function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)(l,{src:r,alt:"logo"}),Object(m.jsx)(v,{})]})},y=n(21),w=n(70),A=n.n(w),C=n(31),D={audio:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case h:return Object(C.a)(Object(C.a)({},e),{},{audio:t.payload});default:return e}},k=Object(y.c)({audioReducer:U}),I=n(71),R=[A.a,I.a],E=Object(y.d)(k,y.a.apply(void 0,R));o.a.render(Object(m.jsx)(O.a,{store:E,children:Object(m.jsx)(x,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.a9b6d897.chunk.js.map