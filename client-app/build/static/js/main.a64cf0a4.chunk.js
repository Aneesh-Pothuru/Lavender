(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);n(0);var a,c,i=n(7),o=n.n(i),r=(n(36),n.p+"static/media/logo.c2ac8c82.png"),d=n(9),u=n(10),p=u.a.div(a||(a=Object(d.a)(["\n  text-align: center;\n"]))),s=u.a.img(c||(c=Object(d.a)(["\n  padding: 15px;\n"]))),j=n(27),l=n.n(j),b=n(5),O="UPLOAD_AUDIO",h="CLEAR_AUDIO",f=n(2),g=function(){var t=Object(b.c)((function(t){return t.audioReducer})).audio,e=Object(b.b)();return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"file",onChange:function(t){e(function(t){return{type:O,payload:t}}(t.target.files[0]))}}),Object(f.jsx)("button",{onClick:function(){var e=new FormData;e.append(t.name,t),function(t){l()({url:"http://127.0.0.1:5000/api/audio",method:"POST",data:t,headers:{"Content-Type":"application/json"},mode:"cors"})}(e)},children:"Upload!"})]})},x=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)(s,{src:r,alt:"logo"}),Object(f.jsx)(g,{})]})},v=n(3),m=n(30),y=n.n(m),w=n(6),A={audio:null},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:case h:return Object(w.a)(Object(w.a)({},t),{},{audio:e.payload});default:return t}},D=Object(v.c)({audioReducer:C}),U=n(31),k=[y.a,U.a],I=Object(v.d)(D,v.a.apply(void 0,k));o.a.render(Object(f.jsx)(b.a,{store:I,children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a64cf0a4.chunk.js.map