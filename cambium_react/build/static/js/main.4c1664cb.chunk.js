(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(261)},260:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),u=a(122),l=a(34),i=a(35),s=a(136),m={auth:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET":return e;case"LOGIN":if(t.payload){var a=t.payload,n=a.username,r=a.password;if(console.log(t.payload),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(n)&&""!==r)return console.log("authenticated"),Object(s.a)({},e,{auth:!0})}return e;case"SIGN_UP":default:return e}},h=Object(i.c)({authStore:p}),b=a(26),f=a(27),d=a(31),O=a(28),E=a(30),j=a(70),y=a(42),g=a(51),v=a(23),w=a(263),S=a(262),_=a(264),k=a(13),I=a(77),N=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(t,n){if(!t){console.log("Received values of form: ",n);var r={};r.username=e.target[0].value,r.password=e.target[1].value,a.props.authenticate(r)}})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){if(this.props.authStore.auth)return r.a.createElement(y.a,{to:"/home"});var e=this.props.form.getFieldDecorator;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{onSubmit:this.handleSubmit,className:"login-form"},"Sign in with email",r.a.createElement(S.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(_.a,{prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(S.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(_.a,{prefix:r.a.createElement(k.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(S.a.Item,null,r.a.createElement(I.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"))))}}]),t}(r.a.Component),C=S.a.create({name:"normal_login"})(N),P=Object(l.b)(function(e){return{authStore:e.authStore}},function(e){return{authenticate:function(t){return e(function(e){return function(t){t({type:"LOGIN",payload:e})}}(t))}}})(C),x=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{gutter:48},r.a.createElement(v.a,{span:12,offset:6},r.a.createElement(w.a,null,r.a.createElement(P,null)))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.authStore.auth?r.a.createElement("div",null,"Home"):r.a.createElement(y.a,{to:"/"})}}]),t}(n.Component),G=Object(l.b)(function(e){return{authStore:e.authStore}},null)(D),L=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"SignUp")}}]),t}(n.Component),T=Object(l.b)(function(e){return{authStore:e.authStore}},function(e){return{}})(L),U=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:x}),r.a.createElement(y.b,{path:"/home",component:G}),r.a.createElement(y.b,{path:"/signup",component:T})))}}]),t}(n.Component),F=(a(260),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,{});F=Object(i.e)(h,Object(i.a)(u.a)),c.a.render(r.a.createElement(l.a,{store:F},r.a.createElement(U,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.4c1664cb.chunk.js.map