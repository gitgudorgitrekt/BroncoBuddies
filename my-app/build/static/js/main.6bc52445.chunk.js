(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(19),r=a.n(c),i=a(35),s=a(69),l=a(131),o=a(22),d="CREATE",j="UPDATE",b="DELETE",u="FETCH_ALL",x="LIKE",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;case x:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case d:return[].concat(Object(o.a)(e),[t.payload]);case j:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case b:return e.filter((function(e){return e._id!==t.payload}));default:return e}},h=Object(s.b)({posts:p}),O=a(257),m=a(44),f=a(16),g=a(247),v=a(249),y=a(250),w=(a(276),a(270)),C=a(243),k=a(246),N=Object(C.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},yellow:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500]}}})),I=a.p+"static/media/group-android-chrome-512x512.96c5614f.png",B=a(2),W=function(){var e=N();return Object(B.jsxs)(g.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(B.jsxs)("div",{className:e.brandContainer,children:[Object(B.jsx)(v.a,{component:m.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Bronco Buddies"}),Object(B.jsx)("img",{className:e.image,src:I,alt:"icon",height:"50"})]}),Object(B.jsx)(y.a,{className:e.toolbar,children:Object(B.jsx)(w.a,{component:m.b,to:"/login",variant:"contained",color:"primary",children:"Sign In"})})]})},S=Object(C.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},yellow:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500]}}})),A=function(){var e=S();return Object(B.jsx)(g.a,{className:e.appBar,position:"static",color:"inherit",children:Object(B.jsxs)(y.a,{className:e.toolbar,children:[Object(B.jsx)(w.a,{component:m.b,to:"/buddyfilter",variant:"contained",color:"primary",children:"Buddy Filter"}),Object(B.jsx)(w.a,{component:m.b,to:"/register",variant:"contained",color:"primary",children:"Register"}),Object(B.jsx)(w.a,{component:m.b,to:"/about",variant:"contained",color:"primary",children:"About Us"})]})})},L=a(15),E=a(37),T=a.n(E),D=a(70),F=a(71),R=a.n(F),_="https://broncobuddies.herokuapp.com/posts",z=function(e,t){return R.a.patch("".concat(_,"/").concat(e),t)},P=function(e){return R.a.patch("".concat(_,"/").concat(e,"/likePost"))},M=function(e){return R.a.delete("".concat(_,"/").concat(e))},H=a(277),U=a(256),G=a(255),J=a(251),V=a(252),q=a(253),K=a(254),Q=a(126),X=a.n(Q),Y=a(127),Z=a.n(Y),$=a(125),ee=a.n($),te=a(124),ae=a.n(te),ne=Object(C.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ce=function(e){var t=e.post,a=e.setCurrentId,n=ne(),c=Object(i.b)();return Object(B.jsxs)(J.a,{className:n.card,children:[Object(B.jsx)(V.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(B.jsxs)("div",{className:n.overlay,children:[Object(B.jsx)(v.a,{variant:"h6",children:t.creator}),Object(B.jsx)(v.a,{variant:"body2",children:ae()(t.createdAt).fromNow()})]}),Object(B.jsx)("div",{className:n.overlay2,children:Object(B.jsx)(w.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(B.jsx)(ee.a,{fontSize:"medium"})})}),Object(B.jsx)("div",{className:n.details,children:Object(B.jsx)(v.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e)}))})}),Object(B.jsx)(v.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(B.jsx)(q.a,{children:Object(B.jsx)(v.a,{className:n.message,variant:"body2",color:"textSecondary",gutterBottom:!0,children:t.message})}),Object(B.jsxs)(K.a,{className:n.cardActions,children:[Object(B.jsxs)(w.a,{size:"small",color:"primary",onClick:function(){var e;c((e=t._id,function(){var t=Object(D.a)(T.a.mark((function t(a){var n,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:n=t.sent,c=n.data,a({type:x,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(B.jsx)(X.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(B.jsxs)(w.a,{size:"small",color:"primary",onClick:function(){var e;c((e=t._id,function(){var t=Object(D.a)(T.a.mark((function t(a){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:a({type:b,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(B.jsx)(Z.a,{fontSize:"small"}),"Delete"]})]})]})},re=Object(C.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ie=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=re();return console.log(a),a.length?Object(B.jsx)(U.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(B.jsx)(U.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(ce,{post:e,setCurrentId:t})},e.id)}))}):Object(B.jsx)(G.a,{})},se=a(38),le=a(134),oe=a(266),de=a(128),je=a.n(de),be=Object(C.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ue=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),r=Object(L.a)(c,2),s=r[0],l=r[1],o=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),b=be(),u=Object(i.b)();Object(n.useEffect)((function(){o&&l(o)}),[o]);var x=function(){a(null),l({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(B.jsx)(le.a,{className:b.paper,children:Object(B.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(b.root," ").concat(b.form),onSubmit:function(e){e.preventDefault(),u(t?function(e,t){return function(){var a=Object(D.a)(T.a.mark((function a(n){var c,r;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z(e,t);case 3:c=a.sent,r=c.data,n({type:j,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(D.a)(T.a.mark((function t(a){var n,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r=e,R.a.post(_,r);case 3:n=t.sent,c=n.data,a({type:d,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),x()},children:[Object(B.jsxs)(v.a,{variant:"h6",children:[t?"Editing":"Creating"," a HangOut"]}),Object(B.jsx)(oe.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return l(Object(se.a)(Object(se.a)({},s),{},{creator:e.target.value}))}}),Object(B.jsx)(oe.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return l(Object(se.a)(Object(se.a)({},s),{},{title:e.target.value}))}}),Object(B.jsx)(oe.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return l(Object(se.a)(Object(se.a)({},s),{},{message:e.target.value}))}}),Object(B.jsx)(oe.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return l(Object(se.a)(Object(se.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(B.jsx)("div",{className:b.fileInput,children:Object(B.jsx)(je.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(se.a)(Object(se.a)({},s),{},{selectedFile:t}))}})}),Object(B.jsx)(w.a,{className:b.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(B.jsx)(w.a,{variant:"contained",color:"secondary",size:"small",onClick:x,fullWidth:!0,children:"Clear"})]})})},xe=function(){var e=Object(n.useState)(null),t=Object(L.a)(e,2),a=t[0],c=t[1],r=Object(i.b)();return Object(n.useEffect)((function(){r(function(){var e=Object(D.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get(_);case 3:a=e.sent,n=a.data,t({type:u,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,r]),Object(B.jsx)(H.a,{in:!0,children:Object(B.jsx)(O.a,{children:Object(B.jsxs)(U.a,{container:!0,alignItems:"stretch",spacing:2,justify:"space-between",children:[Object(B.jsx)(U.a,{item:!0,xs:12,sm:7,children:Object(B.jsx)(ie,{setCurrentId:c})}),Object(B.jsx)(U.a,{item:!0,xs:12,sm:4,children:Object(B.jsx)(ue,{currentId:a,setCurrentId:c})})]})})})},pe=a.p+"static/media/dutchman.ea214e9a.gif",he=a(265),Oe=a(278),me=a(271),fe=a(274),ge=Object(C.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),ve=function(){var e=ge();return Object(B.jsxs)("div",{children:[Object(B.jsx)("center",{children:Object(B.jsx)("h1",{children:"Welcome Back!"})}),Object(B.jsxs)("div",{children:[Object(B.jsxs)(Oe.a,{sx:{background:"white"},className:e.LoginBox,children:[Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Username",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Password",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(fe.a,{variant:"contained",children:"Sign In"})})]}),Object(B.jsx)("center",{children:Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:pe,alt:"Welcome Back",height:"200"})})})]})]})},ye=a.p+"static/media/spongebob-welcome.0b5e1fd6.gif",we=Object(C.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),Ce=function(){var e=we();return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Create An Account Here"}),Object(B.jsxs)("div",{children:[Object(B.jsxs)(Oe.a,{sx:{background:"white"},className:e.LoginBox,children:[Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"First name",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Last name",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Email",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Username",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(he.a,{id:"standard-basic",label:"Password",variant:"standard"})}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(fe.a,{variant:"contained",onClick:function(){console.log("sending user to tags page"),window.location.href="/tags"},children:"Register Account"})})]}),Object(B.jsx)("center",{children:Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:ye,alt:"Welcome to the Club Squidward",height:"600"})})})]})]})},ke=function(){return Object(B.jsx)("div",{children:"AUTH"})},Ne=a(268),Ie=a(275),Be=a(272),We=a(279),Se=a(262),Ae=a(269),Le=Object(C.a)((function(e){return{LoginBox:{borderRadius:15,margin:"30px 0",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"}}})),Ee=function(){var e=Le();return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Create An Account Here"}),Object(B.jsx)("div",{children:Object(B.jsxs)(Oe.a,{sx:{background:"white"},className:e.LoginBox,children:[Object(B.jsxs)(me.a,{component:"fieldset",children:[Object(B.jsx)(Se.a,{component:"legend",children:"Gender"}),Object(B.jsxs)(Ie.a,{"aria-label":"gender",defaultValue:"female",name:"radio-buttons-group",children:[Object(B.jsx)(Be.a,{value:"female",control:Object(B.jsx)(Ne.a,{}),label:"Female"}),Object(B.jsx)(Be.a,{value:"male",control:Object(B.jsx)(Ne.a,{}),label:"Male"}),Object(B.jsx)(Be.a,{value:"other",control:Object(B.jsx)(Ne.a,{}),label:"Other"})]})]}),Object(B.jsx)(me.a,{fullWidth:!0,sx:{m:1},children:Object(B.jsx)(fe.a,{variant:"contained",children:"Complete Profile"})}),Object(B.jsx)(me.a,{children:Object(B.jsxs)(We.a,{children:[Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Partying"}),Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Studying"}),Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Gaming"}),Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Movies and Shows"}),Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Relationship"}),Object(B.jsx)(Be.a,{control:Object(B.jsx)(Ae.a,{}),label:"Food"})]})})]})})]})},Te=Object(C.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"}}})),De=function(){var e=Te();return Object(B.jsxs)(le.a,{className:e.paper,elevation:2,children:[Object(B.jsx)(v.a,{className:e.heading,variant:"h6",align:"left",children:"About us"}),Object(B.jsx)(v.a,{variant:"body1",children:" This site was designed to help students attending Cal Poly Pomona meet other students on campus and set up meet ups on campus."})]})},Fe=function(){return Object(B.jsx)(m.a,{children:Object(B.jsxs)(O.a,{maxwidth:"lg",children:[Object(B.jsx)(W,{}),Object(B.jsx)(A,{}),Object(B.jsxs)(f.c,{children:[Object(B.jsx)(f.a,{path:"/",exact:!0,element:Object(B.jsx)(xe,{})}),Object(B.jsx)(f.a,{path:"/buddyfilter",exact:!0,element:Object(B.jsx)(ke,{})}),Object(B.jsx)(f.a,{path:"/login",exact:!0,element:Object(B.jsx)(ve,{})}),Object(B.jsx)(f.a,{path:"/register",exact:!0,element:Object(B.jsx)(Ce,{})}),Object(B.jsx)(f.a,{path:"/tags",exact:!0,element:Object(B.jsx)(Ee,{})}),Object(B.jsx)(f.a,{path:"/about",exact:!0,element:Object(B.jsx)(De,{})})]})]})})},Re=(a(184),Object(s.d)(h,Object(s.c)(Object(s.a)(l.a))));r.a.render(Object(B.jsx)(i.a,{store:Re,children:Object(B.jsx)(Fe,{})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.6bc52445.chunk.js.map