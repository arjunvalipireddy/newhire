(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},242:function(e,a,t){e.exports=t(425)},247:function(e,a,t){},34:function(e,a,t){},425:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(45),c=t.n(i),l=t(23),u=(t(247),t(11)),o=t(2),s=t(8),m=t.n(s),p=t(427),g=(t(34),t(66)),d=t.n(g);t(101);var h=m()(function(e){return{main:Object(u.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:6*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},paper2:{marginTop:2*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},avatar:{margin:20},bigAvatar:{margin:10,width:120,height:120},submit:{marginTop:3*e.spacing.unit}}})(function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"particles",params:{particles:{number:{value:300,density:{enable:!0,value_area:800}}}}}),r.a.createElement("main",{className:a.main},r.a.createElement(o.h,{className:a.paper2},r.a.createElement(o.i,{component:"default",variant:"default"},r.a.createElement("p",null," NewHire.in\ud83c\udf93"))),r.a.createElement(o.h,{className:a.paper},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/img/newhire.PNG",className:a.bigAvatar}),r.a.createElement(o.i,{component:"default",variant:"default"},"Welcome Student"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/register",className:a.submit},"Register"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/login",className:a.submit},"Login"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/dashboard",className:a.submit},"Dashboard")))," ",r.a.createElement("div",null,r.a.createElement(o.h,{className:a.paper},r.a.createElement("p",null,"Power of AI provides opportunity to every student with a passion to succeed in his career. Our goal is to connect every student with his deserving future employer. Your talent will be measured, scaled and then rewarded the best way possible. Register today.")),r.a.createElement(o.h,{className:a.paper},r.a.createElement("p",null,"Copyright \xa9 2020 NEWHIRE.IN| Website Designed by"," ",r.a.createElement("a",{href:"http://www.mindlink.in",target:"_parent"},r.a.createElement("em",null,"MINDLINK.IN"))))))}),f=t(16),b=t.n(f),E=t(31),v=t(430),w=t(144),y=t(145),N=t(70),x=t.n(N),k=(t(419),t(421),{apiKey:"AIzaSyDnoLNyrB4BKOkKHLomCEeQbtzMYxIAhAw",authDomain:"crwn-clothing-78d3c.firebaseapp.com",databaseURL:"https://crwn-clothing-78d3c.firebaseio.com",projectId:"crwn-clothing-78d3c",storageBucket:"crwn-clothing-78d3c.appspot.com",messagingSenderId:"918000947",appId:"1:918000947:web:7bf0a9b10714f805"}),O=new(function(){function e(){Object(w.a)(this,e),x.a.initializeApp(k),this.auth=x.a.auth(),this.db=x.a.firestore()}return Object(y.a)(e,[{key:"login",value:function(e,a){return this.auth.signInWithEmailAndPassword(e,a)}},{key:"logout",value:function(){return this.auth.signOut()}},{key:"register",value:function(){var e=Object(E.a)(b.a.mark(function e(a,t,n){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(t,n);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:a}));case 3:case"end":return e.stop()}},e,this)}));return function(a,t,n){return e.apply(this,arguments)}}()},{key:"addQuote",value:function(e){return this.auth.currentUser?this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).set({quote:e}):alert("Not authorized")}},{key:"isInitialized",value:function(){var e=this;return new Promise(function(a){e.auth.onAuthStateChanged(a)})}},{key:"getCurrentUsername",value:function(){return this.auth.currentUser&&this.auth.currentUser.displayName}},{key:"getCurrentUserQuote",value:function(){var e=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return a=e.sent,e.abrupt("return",a.get("quote"));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}());var j=Object(v.a)(m()(function(e){var a;return a={main:Object(u.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),avatar:{margin:20},bigAvatar:{margin:10,width:120,height:120},paper:{marginTop:6*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")}},Object(u.a)(a,"avatar",{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main}),Object(u.a)(a,"form",{width:"100%",marginTop:e.spacing.unit}),Object(u.a)(a,"paper2",{marginTop:2*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")}),Object(u.a)(a,"submit",{marginTop:3*e.spacing.unit}),a})(function(e){var a=e.classes,t=Object(n.useState)(""),i=Object(l.a)(t,2),c=i[0],u=i[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),g=m[0],d=m[1];return r.a.createElement("main",{className:a.main},r.a.createElement(o.h,{className:a.paper2},r.a.createElement(o.i,{component:"default",variant:"default"},r.a.createElement("p",null," NewHire.in\ud83c\udf93"))),r.a.createElement(o.h,{className:a.paper},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/img/newhire.PNG",className:a.bigAvatar}),r.a.createElement(o.i,{component:"default",variant:"default"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"email"},"Email Address"),r.a.createElement(o.f,{id:"email",name:"email",autoComplete:"off",autoFocus:!0,value:c,onChange:function(e){return u(e.target.value)}})),r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"password"},"Password"),r.a.createElement(o.f,{id:"password",name:"password",autoComplete:"off",autoFocus:!0,value:g,onChange:function(e){return d(e.target.value)}})),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:function(){return h.apply(this,arguments)},className:a.submit},"Sign in"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/register",className:a.submit},"Register"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/",className:a.submit},"Home"))),r.a.createElement(o.h,{className:a.paper},r.a.createElement("p",null,"Copyright \xa9 2020 NEWHIRE.IN| Website Designed by"," ",r.a.createElement("a",{href:"http://www.mindlink.in",target:"_parent"},r.a.createElement("em",null,"MINDLINK.IN")))));function h(){return(h=Object(E.a)(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.login(c,g);case 3:e.history.replace("/dashboard"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),alert(a.t0.message);case 9:case"end":return a.stop()}},a,null,[[0,6]])}))).apply(this,arguments)}}));var I=Object(v.a)(m()(function(e){var a;return a={main:Object(u.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper2:{marginTop:2*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},avatar:{margin:20},bigAvatar:{margin:10,width:120,height:120},paper:{marginTop:6*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")}},Object(u.a)(a,"avatar",{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main}),Object(u.a)(a,"form",{width:"100%",marginTop:e.spacing.unit}),Object(u.a)(a,"submit",{marginTop:3*e.spacing.unit}),a})(function(e){var a=e.classes,t=Object(n.useState)(""),i=Object(l.a)(t,2),c=i[0],u=i[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),g=m[0],d=m[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),v=f[0],w=f[1],y=Object(n.useState)(""),N=Object(l.a)(y,2),x=N[0],k=N[1];return r.a.createElement("main",{className:a.main},r.a.createElement(o.h,{className:a.paper2},r.a.createElement(o.i,{component:"default",variant:"default"},r.a.createElement("p",null," NewHire.in\ud83c\udf93"))),r.a.createElement(o.h,{className:a.paper},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/img/newhire.PNG",className:a.bigAvatar}),r.a.createElement(o.i,{component:"default",variant:"default"},"Register Account"),r.a.createElement("form",{className:a.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"name"},"Name"),r.a.createElement(o.f,{id:"name",name:"name",autoComplete:"off",autoFocus:!0,value:c,onChange:function(e){return u(e.target.value)}})),r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"email"},"Email Address"),r.a.createElement(o.f,{id:"email",name:"email",autoComplete:"off",value:g,onChange:function(e){return d(e.target.value)}})),r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"password"},"Password"),r.a.createElement(o.f,{id:"password",name:"password",autoComplete:"off",value:v,onChange:function(e){return w(e.target.value)}})),r.a.createElement(o.e,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(o.g,{htmlFor:"quote"},"Your College name"),r.a.createElement(o.f,{name:"quote",type:"text",id:"quote",autoComplete:"off",value:x,onChange:function(e){return k(e.target.value)}})),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:function(){return j.apply(this,arguments)},className:a.submit},"Register"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",component:p.a,to:"/",className:a.submit},"Go back to Home Page"))),r.a.createElement(o.h,{className:a.paper},r.a.createElement("p",null,"Copyright \xa9 2020 NEWHIRE.IN| Website Designed by"," ",r.a.createElement("a",{href:"http://www.mindlink.in",target:"_parent"},r.a.createElement("em",null,"MINDLINK.IN")))));function j(){return(j=Object(E.a)(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.register(c,g,v);case 3:return a.next=5,O.addQuote(x);case 5:e.history.replace("/dashboard"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert(a.t0.message);case 11:case"end":return a.stop()}},a,null,[[0,8]])}))).apply(this,arguments)}}));var C=Object(v.a)(m()(function(e){var a;return a={main:Object(u.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),avatar:{margin:10},bigAvatar:{margin:5,width:60,height:60},paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(89deg, rgb(209, 212, 30) 0%, rgb(47, 206, 47) 100%)",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")}},Object(u.a)(a,"avatar",{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main}),Object(u.a)(a,"submit",{marginTop:3*e.spacing.unit}),a})(function(e){var a=e.classes;if(!O.getCurrentUsername())return alert("Please login first"),e.history.replace("/login"),null;var t=Object(n.useState)(""),i=Object(l.a)(t,2),c=i[0],u=i[1];return Object(n.useEffect)(function(){O.getCurrentUserQuote().then(u)}),r.a.createElement("main",{className:a.main},r.a.createElement(d.a,{className:"particles"}),r.a.createElement(o.h,{className:a.paper},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/img/newhire.PNG",className:a.bigAvatar}),r.a.createElement(o.i,{component:"default",variant:"default"},"Hello:  ",O.getCurrentUsername()),r.a.createElement(o.i,{component:"default",variant:"default"},"Your College: ",c?'"'.concat(c,'"'):r.a.createElement(o.c,{size:20}))),r.a.createElement(o.h,{className:a.paper},"UPLOAD AREA",r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:s,className:a.submit},"Upload Marksheet"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:s,className:a.submit},"Upload Degree")),r.a.createElement(o.h,{className:a.paper},"PROFILE AREA",r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:s,className:a.submit},"VIEW & EDIT PROFILE"),r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:s,className:a.submit},"ADD SPECIALITY")),r.a.createElement(o.h,{className:a.paper},r.a.createElement(o.b,{type:"submit",fullWidth:!0,variant:"contained",color:"default",onClick:s,className:a.submit},"Logout")),r.a.createElement(o.h,{className:a.paper},r.a.createElement("p",null,"Copyright \xa9 2020 NEWHIRE.IN| Website Designed by"," ",r.a.createElement("a",{href:"http://www.mindlink.in",target:"_parent"},r.a.createElement("em",null,"MINDLINK.IN")))));function s(){return m.apply(this,arguments)}function m(){return(m=Object(E.a)(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.logout();case 2:e.history.push("/");case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}})),W=(t(423),t(22)),A=t(429),R=t(431),D=t(428),L=Object(W.createMuiTheme)();c.a.render(r.a.createElement(function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)(function(){O.isInitialized().then(function(e){i(e)})}),!1!==t?r.a.createElement(W.MuiThemeProvider,{theme:L},r.a.createElement(o.d,null),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(D.a,{exact:!0,path:"/",component:h}),r.a.createElement(D.a,{exact:!0,path:"/login",component:j}),r.a.createElement(D.a,{exact:!0,path:"/register",component:I}),r.a.createElement(D.a,{exact:!0,path:"/dashboard",component:C})))):r.a.createElement("div",{id:"loader"},r.a.createElement(o.c,null))},null),document.getElementById("root"))}},[[242,2,1]]]);
//# sourceMappingURL=main.ce3d1602.chunk.js.map