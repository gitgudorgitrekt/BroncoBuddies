(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,a,t){e.exports=t.p+"static/media/group-android-chrome-512x512.d22b2de6.png"},137:function(e,a,t){e.exports=t.p+"static/media/dutchman.a13acbb9.gif"},140:function(e,a,t){e.exports=t.p+"static/media/spongebob-welcome.121226af.gif"},160:function(e,a,t){e.exports=t(193)},192:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=t(38),i=t(43),s=t(88),u=t(19),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_ALL":return a.payload;case"LIKE":return e.map((function(e){return e._id===a.payload._id?a.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[a.payload]);case"UPDATE":return e.map((function(e){return e._id===a.payload._id?a.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==a.payload}));default:return e}},d=Object(i.b)({posts:m}),p=t(268),f=t(44),g=t(16),E=Object(i.d)(d,Object(i.c)(Object(i.a)(s.a))),b=t(258),h=t(260),v=t(261),w=t(288),x=t(282),y=t(254),j=t(257),O=Object(y.a)((function(e){return{appBar:{borderRadius:15,margin:"20px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},yellow:{color:e.palette.getContrastText(j.a[500]),backgroundColor:j.a[500]}}})),S=t(129),I=t.n(S),C=function(){var e=O();return console.log(E.getState()),r.a.createElement(b.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:e.brandContainer},r.a.createElement(h.a,{component:f.b,to:"/",className:e.heading,variant:"h2",align:"center"},"Bronco Buddies"),r.a.createElement("img",{className:e.image,src:I.a,alt:"icon",height:"50"})),r.a.createElement(v.a,{className:e.toolbar},"true"==window.localStorage.getItem("LOGGEDIN")?r.a.createElement("div",{className:e.profile},r.a.createElement(w.a,{className:e.yellow,src:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"},"BOB"),r.a.createElement(h.a,{className:e.userName,variant:"h6"},window.localStorage.getItem("username")),r.a.createElement(x.a,{variant:"contained",className:e.logout,color:"secondary",onClick:function(){window.localStorage.clear(),window.location.href="/"}},"Logout")):r.a.createElement(x.a,{component:f.b,to:"/login",variant:"contained",color:"primary"},"Sign In")))},k=Object(y.a)((function(e){return{appBar:{borderRadius:15,margin:"10px 0",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},brandContainer:{display:"flex",alignItems:"center"}}})),N=function(){var e=k();return r.a.createElement(b.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement(v.a,null,r.a.createElement(x.a,{component:f.b,to:"/buddyfilter",variant:"contained",color:"primary",style:{width:"200px","margin-right":"10px"}},"Buddy Filter"),r.a.createElement(x.a,{component:f.b,to:"/register",variant:"contained",color:"primary",style:{width:"200px","margin-right":"10px"}},"Register"),r.a.createElement(x.a,{component:f.b,to:"/about",variant:"contained",color:"primary",style:{width:"200px","margin-right":"10px"}},"About Us"),r.a.createElement(x.a,{component:f.b,to:"/profile",variant:"contained",color:"primary",style:{width:"200px","margin-right":"10px"}},"Profile")))},R=t(15),P=t(22),T=t.n(P),L=t(28),B=t(72),W=t.n(B),A="https://broncobuddies.herokuapp.com",D=A+"/posts",G=function(e,a){return W.a.patch("".concat(D,"/").concat(e),a)},F=function(e){return W.a.patch("".concat(D,"/").concat(e,"/likePost"))},_=function(e){return W.a.delete("".concat(D,"/").concat(e))},z=t(289),J=t(267),M=t(266),q=t(262),H=t(263),U=t(264),V=t(265),Y=t(134),K=t.n(Y),Q=t(135),X=t.n(Q),Z=t(133),$=t.n(Z),ee=t(132),ae=t.n(ee),te=Object(y.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ne=function(e){var a=e.post,t=e.setCurrentId,n=te(),l=Object(o.b)();return r.a.createElement(q.a,{className:n.card},r.a.createElement(H.a,{className:n.media,image:a.selectedFile,title:a.title}),r.a.createElement("div",{className:n.overlay},r.a.createElement(h.a,{variant:"h6"},a.creator),r.a.createElement(h.a,{variant:"body2"},ae()(a.createdAt).fromNow())),r.a.createElement("div",{className:n.overlay2},r.a.createElement(x.a,{style:{color:"white"},size:"small",onClick:function(){return"true"==window.localStorage.getItem("LOGGEDIN")&&window.localStorage.getItem("username")==a.creator?t(a._id):console.log("THIS IS NOT YOUR POST!")}},r.a.createElement($.a,{fontSize:"medium"}))),r.a.createElement("div",{className:n.details},r.a.createElement(h.a,{variant:"body2",color:"textSecondary"},a.tags.map((function(e){return"#".concat(e)})))),r.a.createElement(h.a,{className:n.title,variant:"h5",gutterBottom:!0},a.title),r.a.createElement(U.a,null,r.a.createElement(h.a,{className:n.message,variant:"body2",color:"textSecondary",gutterBottom:!0},a.message)),r.a.createElement(V.a,{className:n.cardActions},r.a.createElement(x.a,{size:"small",color:"primary",onClick:function(){var e;l((e=a._id,function(){var a=Object(L.a)(T.a.mark((function a(t){var n,r;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F(e);case 3:n=a.sent,r=n.data,t({type:"LIKE",payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()))}},r.a.createElement(K.a,{fontSize:"small"}),"\xa0 Like \xa0",a.likeCount),"true"==window.localStorage.getItem("LOGGEDIN")&&window.localStorage.getItem("username")==a.creator?r.a.createElement(x.a,{size:"small",color:"primary",onClick:function(){var e;l((e=a._id,function(){var a=Object(L.a)(T.a.mark((function a(t){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e);case 3:t({type:"DELETE",payload:e}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()))}},r.a.createElement(X.a,{fontSize:"small"}),"Delete"):r.a.createElement(x.a,{size:"small",color:"primary"})))},re=Object(y.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),le=function(e){var a=e.setCurrentId,t=Object(o.c)((function(e){return e.posts})),n=re();return console.log(t),t.length?r.a.createElement(J.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e){return r.a.createElement(J.a,{key:e.id,item:!0,xs:12,sm:6},r.a.createElement(ne,{post:e,setCurrentId:a}))}))):r.a.createElement(M.a,null)},ce=t(31),oe=t(143),ie=t(278),se=t(136),ue=t.n(se),me=Object(y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),de=function(e){var a=e.currentId,t=e.setCurrentId,l=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(R.a)(l,2),i=c[0],s=c[1],u=Object(o.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),m=me(),d=Object(o.b)();Object(n.useEffect)((function(){u&&s(u)}),[u]);var p=function(){t(null),s({creator:"",title:"",message:"",tags:"",selectedFile:""})};return r.a.createElement(oe.a,{className:m.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(m.root," ").concat(m.form),onSubmit:function(e){e.preventDefault(),i.creator=window.localStorage.getItem("username"),d(a?function(e,a){return function(){var t=Object(L.a)(T.a.mark((function t(n){var r,l;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e,a);case 3:r=t.sent,l=r.data,n({type:"UPDATE",payload:l}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a,i):function(e){return function(){var a=Object(L.a)(T.a.mark((function a(t){var n,r;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l=e,W.a.post(D,l);case 3:n=a.sent,r=n.data,t({type:"CREATE",payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}var l}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(i)),p()}},r.a.createElement(h.a,{variant:"h6"},a?"Editing":"Creating"," a HangOut"),r.a.createElement(ie.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:window.localStorage.getItem("username"),onChange:function(e){return s(Object(ce.a)(Object(ce.a)({},i),{},{creator:e.target.value}))}}),r.a.createElement(ie.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return s(Object(ce.a)(Object(ce.a)({},i),{},{title:e.target.value}))}}),r.a.createElement(ie.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:i.message,onChange:function(e){return s(Object(ce.a)(Object(ce.a)({},i),{},{message:e.target.value}))}}),r.a.createElement(ie.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:i.tags,onChange:function(e){return s(Object(ce.a)(Object(ce.a)({},i),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:m.fileInput},r.a.createElement(ue.a,{type:"file",multiple:!1,onDone:function(e){var a=e.base64;return s(Object(ce.a)(Object(ce.a)({},i),{},{selectedFile:a}))}})),r.a.createElement(x.a,{className:m.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(x.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0},"Clear")))},pe=function(){var e=Object(n.useState)(null),a=Object(R.a)(e,2),t=a[0],l=a[1],c=Object(o.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(L.a)(T.a.mark((function e(a){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get(D);case 3:t=e.sent,n=t.data,a({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}())}),[t,c]),r.a.createElement(z.a,{in:!0},r.a.createElement(p.a,null,r.a.createElement(J.a,{container:!0,alignItems:"stretch",spacing:2,justify:"space-between"},r.a.createElement(J.a,{item:!0,xs:12,sm:7},r.a.createElement(le,{setCurrentId:l})),r.a.createElement(J.a,{item:!0,xs:12,sm:4},"true"==window.localStorage.getItem("LOGGEDIN")?r.a.createElement(de,{currentId:t,setCurrentId:l}):null))))},fe=t(137),ge=t.n(fe),Ee=t(277),be=t(290),he=t(283),ve=t(286),we=Object(y.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),xe=function(){var e=r.a.createRef(),a=r.a.createRef(),t=function(){var t=Object(L.a)(T.a.mark((function t(){var n,r,l,c,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.current.value,r=a.current.value,l={username:n,password:r},t.prev=3,t.next=6,window.fetch(A+"/auth/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(l)});case 6:return c=t.sent,console.log(c),t.next=10,c.json();case 10:1==(o=t.sent).success?(window.localStorage.setItem("LOGGEDIN","true"),window.localStorage.setItem("firstname",o.firstname),window.localStorage.setItem("lastname",o.lastname),window.localStorage.setItem("username",o.username),window.location.href="/"):window.alert("Login failed!"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(){return t.apply(this,arguments)}}(),n=we();return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"Welcome Back!")),r.a.createElement("div",null,r.a.createElement(be.a,{sx:{background:"white"},className:n.LoginBox},r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Username",variant:"standard",inputRef:e})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Password",type:"password",variant:"standard",inputRef:a})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(ve.a,{variant:"contained",onClick:t},"Sign In"))),r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:ge.a,alt:"Welcome Back",height:"200"})))))},ye=t(140),je=t.n(ye),Oe=Object(y.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),Se=function(){var e=r.a.createRef(),a=r.a.createRef(),t=r.a.createRef(),n=r.a.createRef(),l=r.a.createRef(),c=function(){var r=Object(L.a)(T.a.mark((function r(){var c,o,i,s,u,m,d,p;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("sending user to tags page"),c=e.current.value,o=a.current.value,i=t.current.value,s=n.current.value,u=l.current.value,m={firstname:c,lastname:o,email:i,username:s,password:u},r.prev=7,r.next=10,window.fetch(A+"/auth/register",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(m)});case 10:return d=r.sent,console.log(d),r.next=14,d.json();case 14:"ok"==(p=r.sent).status?(window.localStorage.setItem("LOGGEDIN","true"),window.localStorage.setItem("firstname",p.firstname),window.localStorage.setItem("lastname",p.lastname),window.location.href="/tags"):window.alert("Account creation failed!"),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(7),console.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[7,18]])})));return function(){return r.apply(this,arguments)}}(),o=Oe();return r.a.createElement("div",null,r.a.createElement("h1",null,"Create An Account Here"),r.a.createElement("div",null,r.a.createElement(be.a,{sx:{background:"white"},className:o.LoginBox},r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"First name",variant:"standard",inputRef:e})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Last name",variant:"standard",inputRef:a})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Email",variant:"standard",inputRef:t})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Username",variant:"standard",inputRef:n})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Password",variant:"standard",inputRef:l})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(ve.a,{variant:"contained",onClick:c},"Register Account"))),r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:je.a,alt:"Welcome to the Club Squidward",height:"600"})))))},Ie=t(7),Ce=t(291),ke=t(287),Ne=function(){var e=Object(Ie.a)(Ce.a)((function(e){var a=e.theme;return Object(ce.a)(Object(ce.a)({},a.typography.body2),{},{padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary})}));return r.a.createElement(ke.a,{container:!0,spacing:.5},r.a.createElement(ke.a,{item:!0,xs:3},r.a.createElement(e,null,"Filter")),r.a.createElement(ke.a,{item:!0,xs:9},r.a.createElement(e,null,"Results")))},Re=t(280),Pe=t(292),Te=t(284),Le=t(293),Be=t(274),We=t(281),Ae=Object(y.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),De=function(){var e=r.a.createRef(),a=r.a.createRef(),t=r.a.createRef(),n=r.a.createRef(),l=function(){var r=Object(L.a)(T.a.mark((function r(){var l,c,o,i,s,u,m,d,p,f,g;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(console.log("sending user to home page"),l=e.current.querySelector("input[name=gender]:checked").value,c="yes"===(c=a.current.querySelector("input[name=transfer]:checked").value),"freshman"===(o=t.current.querySelector("input[name=year]:checked").value)&&(o=0),"sophomore"===o&&(o=1),o="junior"===o?2:3,i=n.current.querySelectorAll("input"),s=[],u=0;u<i.length;u++)m=i[u],d=m.checked,p=m.parentNode.parentNode.innerText,!0===d&&s.push(p);return console.log(s),f={gender:l,transfer:c,year:o,tags:s},console.log(f),r.prev=14,r.next=17,window.fetch(A+"/tags",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(f)});case 17:return g=r.sent,console.log(g),r.next=21,g.json();case 21:!0===r.sent.success?window.location.href="/":window.alert("Issue with adding information to profile!"),r.next=28;break;case 25:r.prev=25,r.t0=r.catch(14),console.log(r.t0);case 28:case"end":return r.stop()}}),r,null,[[14,25]])})));return function(){return r.apply(this,arguments)}}(),c=Ae();return r.a.createElement("div",null,r.a.createElement("h1",null,"Create An Account Here"),r.a.createElement("div",null,r.a.createElement(be.a,{sx:{background:"white"},className:c.LoginBox},r.a.createElement(he.a,{component:"fieldset"},r.a.createElement(Be.a,{component:"legend"},"Gender"),r.a.createElement(Pe.a,{"aria-label":"gender",name:"radio-buttons-group",ref:e},r.a.createElement(Te.a,{value:"female",control:r.a.createElement(Re.a,{name:"gender"}),label:"Female"}),r.a.createElement(Te.a,{value:"male",control:r.a.createElement(Re.a,{name:"gender"}),label:"Male"}),r.a.createElement(Te.a,{value:"other",control:r.a.createElement(Re.a,{name:"gender"}),label:"Other"}))),r.a.createElement(he.a,{component:"fieldset"},r.a.createElement(Be.a,{component:"legend"},"Are You A Transfer?"),r.a.createElement(Pe.a,{"aria-label":"transfer",name:"radio-buttons-group",ref:a},r.a.createElement(Te.a,{value:"yes",control:r.a.createElement(Re.a,{name:"transfer"}),label:"Yes"}),r.a.createElement(Te.a,{value:"no",control:r.a.createElement(Re.a,{name:"transfer"}),label:"No"}))),r.a.createElement(he.a,{component:"fieldset"},r.a.createElement(Be.a,{component:"legend"},"Year"),r.a.createElement(Pe.a,{"aria-label":"year",name:"radio-buttons-group",ref:t},r.a.createElement(Te.a,{value:"freshman",control:r.a.createElement(Re.a,{name:"year"}),label:"Freshman"}),r.a.createElement(Te.a,{value:"sophomore",control:r.a.createElement(Re.a,{name:"year"}),label:"Sophomore"}),r.a.createElement(Te.a,{value:"junior",control:r.a.createElement(Re.a,{name:"year"}),label:"Junior"}),r.a.createElement(Te.a,{value:"senior",control:r.a.createElement(Re.a,{name:"year"}),label:"Senior"}))),r.a.createElement(he.a,null,r.a.createElement(Le.a,{ref:n},r.a.createElement(Be.a,{component:"legend"},"Interest tags"),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Partying"}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Studying"}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Gaming"}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Movies and Shows"}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Relationship"}),r.a.createElement(Te.a,{control:r.a.createElement(We.a,null),label:"Food"}))),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(ve.a,{variant:"contained",onClick:l},"Complete Profile")))))},Ge=Object(y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"}}})),Fe=function(){var e=Ge();return r.a.createElement(oe.a,{className:e.paper,elevation:2},r.a.createElement(h.a,{className:e.heading,variant:"h6",align:"left"},"About us"),r.a.createElement(h.a,{variant:"body1"}," This site was designed to help students attending Cal Poly Pomona meet other students on campus and set up meet ups on campus."))},_e=Object(y.a)((function(e){return{ProfileBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),ze=function(){var e="",a="",t="",n="",l=!1,c=r.a.createRef(),o=r.a.createRef(),i=r.a.createRef(),s=r.a.createRef(),u=function(){var r=Object(L.a)(T.a.mark((function r(){var u,m;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Saving profile"),e=c.current.value,a=o.current.value,t=i.current.value,n=s.current.value,l=!0,r.prev=6,u={firstname:e,lastname:a,discord:t,aboutme:n,update:l},r.next=10,window.fetch(A+"/user/profile",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(u)});case 10:return m=r.sent,console.log(m),r.next=14,m.json();case 14:!0===r.sent.success?(window.localStorage.setItem("firstname",e),window.localStorage.setItem("lastname",a),window.localStorage.setItem("discordtag",t),window.localStorage.setItem("aboutme",n),window.alert("Profile update saved! :)")):window.alert("Profile update failed!"),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(6),console.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[6,18]])})));return function(){return r.apply(this,arguments)}}(),m=function(){var r=Object(L.a)(T.a.mark((function r(){var c,o,i;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=window.localStorage.getItem("firstname"),a=window.localStorage.getItem("lastname"),c={firstname:e,lastname:a,discord:t,aboutme:n,update:l=!1},r.prev=4,r.next=7,window.fetch(A+"/user/profile",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(c)});case 7:return o=r.sent,console.log(o),r.next=11,o.json();case 11:!0===(i=r.sent).success?(window.localStorage.setItem("discordtag",i.discord),window.localStorage.setItem("aboutme",i.aboutme),window.alert("Profile Loaded :)")):window.alert("Profile Load failed!"),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(4),console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[4,15]])})));return function(){return r.apply(this,arguments)}}();window.localStorage.getItem("LOGGEDIN")&&(console.log("LOGGED IN"),m(),t=window.localStorage.getItem("discordtag"),n=window.localStorage.getItem("aboutme"));var d=_e();return r.a.createElement("div",null,r.a.createElement("h1",null,"Your Profile"),r.a.createElement("div",null,r.a.createElement(be.a,{sx:{width:1e3,height:800,background:"white"},className:d.ProfileBox},r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"First name",variant:"standard",inputRef:c,defaultValue:e})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Last name",variant:"standard",inputRef:o,defaultValue:a})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"standard-basic",label:"Discord Tag",variant:"standard",inputRef:i,defaultValue:t})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(Ee.a,{id:"outlined-multiline-flexible",label:"About Me",multiline:!0,maxRows:4,inputRef:s,defaultValue:n})),r.a.createElement(he.a,{fullWidth:!0,sx:{m:1}},r.a.createElement(ve.a,{variant:"contained",onClick:u},"Save Profile")))))},Je=function(){return r.a.createElement(f.a,null,r.a.createElement(p.a,{maxwidth:"lg"},r.a.createElement(C,null),r.a.createElement(N,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,element:r.a.createElement(pe,null)}),r.a.createElement(g.a,{path:"/buddyfilter",exact:!0,element:r.a.createElement(Ne,null)}),r.a.createElement(g.a,{path:"/login",exact:!0,element:r.a.createElement(xe,null)}),r.a.createElement(g.a,{path:"/register",exact:!0,element:r.a.createElement(Se,null)}),r.a.createElement(g.a,{path:"/tags",exact:!0,element:r.a.createElement(De,null)}),r.a.createElement(g.a,{path:"/about",exact:!0,element:r.a.createElement(Fe,null)}),r.a.createElement(g.a,{path:"/profile",exact:!0,element:r.a.createElement(ze,null)}))))},Me=(t(192),Object(i.d)(d,Object(i.c)(Object(i.a)(s.a))));c.a.render(r.a.createElement(o.a,{store:Me},r.a.createElement(Je,null)),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.d08f5d7d.chunk.js.map