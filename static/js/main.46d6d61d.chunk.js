(this["webpackJsonpst32020group12_v1.2"]=this["webpackJsonpst32020group12_v1.2"]||[]).push([[0],{192:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n(0),c=n(35),r=n.n(c),o=(n(191),n(26)),i=n(181),l=n(27),j=n(34),d=n(63),b=(n(192),function(){return Object(a.jsx)("div",{className:"footer",children:"HaKienIT Tester-App-2020"})}),m=n(56),u=n.n(m),h=n(84),O=n(143);O.a.initializeApp({apiKey:"AIzaSyB7GMfk8vITupi9haEZLC2YpEpSOcXEKVI",authDomain:"st2020group12.firebaseapp.com",databaseURL:"https://st2020group12.firebaseio.com",projectId:"st2020group12",storageBucket:"st2020group12.appspot.com",messagingSenderId:"616943129389",appId:"1:616943129389:web:f5ade1ac28ef54e012b9a4",measurementId:"G-42V6Y397ED"}),O.a.analytics();var p=O.a,f=n(287),x=n(288),g=n(289),y=n(182),w=n(290),I=n(291),v=n(64),S=n(178),N=n(277),k=n(99),A=n(278),_=n(39),C=n(61),P=n(282),L=n(276),R=n(280),M=v.a.SubMenu,T=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(l.a)(r,2),j=i[0],b=i[1],m=Object(s.useState)(JSON.parse(localStorage.getItem("idOwner"))),O=Object(l.a)(m,2),T=O[0],B=(O[1],Object(s.useState)(!1)),z=Object(l.a)(B,2),V=z[0],q=z[1],F=Object(s.useState)(JSON.parse(localStorage.getItem("isAuth"))),U=Object(l.a)(F,2),D=U[0],Y=U[1],H=Object(s.useState)(JSON.parse(localStorage.getItem("owner"))),E=Object(l.a)(H,2),G=E[0],J=(E[1],Object(s.useState)([])),K=Object(l.a)(J,2),X=K[0],W=K[1],Q=Object(s.useState)(!1),Z=Object(l.a)(Q,2),$=Z[0],ee=Z[1],te=Object(s.useState)(!0),ne=Object(l.a)(te,2),ae=ne[0],se=ne[1],ce=Object(s.useState)(""),re=Object(l.a)(ce,2),oe=re[0],ie=re[1],le=Object(s.useState)(""),je=Object(l.a)(le,2),de=je[0],be=je[1],me=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},ue=function(){se(!1)};Object(s.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.firestore().collection("users").onSnapshot((function(e){W(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var he=function(e){var t=X.findIndex((function(t){return t.username===e.username}));-1===t?be("Username is not exist !"):e.password!==X[t].password?be("Error password !"):e.username===X[t].username&&e.password===X[t].password&&(localStorage.setItem("isAuth",!0),Y(!0),ee(!1),be(""),window.location.reload(),localStorage.setItem("owner",JSON.stringify(X[t].fullName)),localStorage.setItem("idOwner",JSON.stringify(X[t].id)))},Oe=function(e){var t=X.findIndex((function(t){return t.username===e.username}));if(e.password!==e.passwordConfirm)ie("Password not match");else if(-1!=t)ie("Username is exist !");else if(e.password.length<8)ie("Username and password should be 8 characters !");else if(e.username.length<6)ie("Username should be 6 characters !");else{ie(""),se(!0),p.firestore().collection("users").add({fullName:e.fullName,key:me()+"-"+me(),username:e.username,password:e.password})}},pe=function(e){var t=X.findIndex((function(e){return e.id===T}));if(e.oldpass!==X[t].password)b("Old password not correct !"),S.b.error("Old password not correct !",1);else if(e.newpass!==e.newpassConfirm)b("Password not match"),S.b.error("Password not match",1);else if(e.newpass.length<8)b("Password should be 8 characters !"),S.b.error("Password should be 8 characters !",1);else{b(""),p.firestore().collection("users").doc(T).set({fullName:X[t].fullName,key:X[t].key,username:X[t].username,password:e.newpass}).then((function(){S.b.success("Change password success !",2),q(!1)}))}},fe=function(){return Object(a.jsxs)(N.a,{name:"normal_login",className:"login-form",onFinish:he,children:[Object(a.jsx)(k.a,{style:{color:"red",marginBottom:20},children:de}),Object(a.jsx)(N.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(f.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(N.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsx)(N.a.Item,{style:{float:"right"},children:Object(a.jsx)(d.b,{to:"",className:"login-form-forgot",children:"Forgot password"})}),Object(a.jsxs)(N.a.Item,{children:[Object(a.jsx)(_.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{marginRight:10},children:"Log in"}),"Or ",Object(a.jsx)(d.b,{to:"",onClick:ue,children:"register now!"})]})]})},xe=function(){return Object(a.jsxs)(N.a,{name:"normal_login",className:"login-form",onFinish:Oe,children:[Object(a.jsx)(k.a,{style:{color:"red",marginBottom:20},children:oe}),Object(a.jsx)(N.a.Item,{name:"fullName",rules:[{required:!0,message:"Please input your Fullname!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(f.a,{className:"site-form-item-icon"}),placeholder:"Fullname"})}),Object(a.jsx)(N.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(f.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(N.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsx)(N.a.Item,{name:"passwordConfirm",rules:[{required:!0,message:"Please input your Password Confirm!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password Confirm"})}),Object(a.jsx)(N.a.Item,{style:{float:"right"},children:Object(a.jsx)(d.b,{to:"",className:"login-form-forgot",onClick:function(){se(!0)},children:"Already have an account?"})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(_.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{marginRight:10},children:"Register"})})]})},ge=function(){return Object(a.jsxs)(N.a,{name:"normal_login",className:"login-form",onFinish:pe,children:[Object(a.jsx)(k.a,{style:{color:"red",marginBottom:20},children:j}),Object(a.jsx)(N.a.Item,{name:"oldpass",rules:[{required:!0,message:"Please input new password!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Old password"})}),Object(a.jsx)(N.a.Item,{name:"newpass",rules:[{required:!0,message:"Please input new Password!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"New password"})}),Object(a.jsx)(N.a.Item,{name:"newpassConfirm",rules:[{required:!0,message:"Please input new Password!"}],children:Object(a.jsx)(A.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Confirm password"})}),Object(a.jsxs)(N.a.Item,{children:[Object(a.jsx)(_.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{marginRight:10},children:"Save"}),Object(a.jsx)(_.a,{style:{marginRight:10},children:"Cancel"})]})]})},ye=function(){return Object(a.jsxs)(k.a,{children:[Object(a.jsx)(C.a,{span:14,children:Object(a.jsxs)(P.b,{column:1,children:[Object(a.jsx)(P.b.Item,{label:"Company name",children:"Nong Lam University"}),Object(a.jsx)(P.b.Item,{label:"Developer",children:"Ha Ngoc Kien"}),Object(a.jsx)(P.b.Item,{label:"Version",children:"st01-2020 YataomeApp"}),Object(a.jsxs)(P.b.Item,{label:"Contact me ",children:[Object(a.jsxs)("a",{href:"https://www.facebook.com/hakien1402/",children:[Object(a.jsx)(g.a,{}),"FB: H\xc0 KI\xcaN "]})," ",Object(a.jsx)("br",{}),"Email : hangockien99@gmail.com"]})]})}),Object(a.jsx)(C.a,{span:6,className:"info",children:Object(a.jsx)(L.a,{width:220,src:"https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=O59O_uf-7V0AX_MG01r&_nc_ht=scontent.fvca1-1.fna&oh=b6d6d25efb2e3bf695154980216b05c1&oe=5FB78BBA"})})]})};return Object(a.jsxs)("div",{children:[Object(a.jsxs)(v.a,{mode:"horizontal",className:"menu-app",children:[Object(a.jsx)(v.a.Item,{style:{marginLeft:40},children:Object(a.jsxs)(d.b,{to:"/",children:[" ",Object(a.jsx)("strong",{children:"GROUP 12 ST-2020"})]})}),!0===D?Object(a.jsxs)(M,{icon:Object(a.jsx)(f.a,{}),title:"Welcome "+G,style:{float:"right",marginRight:50,fontSize:16,fontWeight:500},children:[Object(a.jsx)(v.a.Item,{icon:Object(a.jsx)(y.a,{}),onClick:function(){return c(!0)},children:"About us"}),Object(a.jsx)(v.a.Item,{icon:Object(a.jsx)(w.a,{}),onClick:function(){return q(!0)},children:"Change password"}),Object(a.jsx)(v.a.Item,{icon:Object(a.jsx)(I.a,{}),onClick:function(){Y(!1),localStorage.setItem("isAuth",!1),window.location.reload()},children:"Log Out"})]}):Object(a.jsx)(v.a.Item,{icon:Object(a.jsx)(f.a,{}),style:{float:"right",marginRight:50,fontSize:16,fontWeight:500},onClick:function(){ee(!0)},children:"Sign In"})]}),Object(a.jsx)(R.a,{title:!0===ae?"Sign In":"Sign Up",visible:$,width:"400px",footer:"",onCancel:function(){ee(!1)},children:!0===ae?Object(a.jsx)(fe,{}):Object(a.jsx)(xe,{})}),Object(a.jsx)(R.a,{title:"About",visible:n,footer:"",width:"700px",onOk:function(){return c(!1)},onCancel:function(){return c(!1)},children:Object(a.jsx)(ye,{})}),Object(a.jsx)(R.a,{title:"Change pass",visible:V,footer:"",width:"400px",onCancel:function(){return q(!1)},children:Object(a.jsx)(ge,{})})]})},B=n(167),z=n(272),V=n(169),q=n(168),F=n.n(q);function U(){var e=Object(B.a)(["\n  width: 100%;\n  text-align: center;\n  strong {\n    font-size: 1.25em;\n  }\n  div {\n    color: ",";\n\n    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);\n    font-weight: 100;\n    letter-spacing: 7px;\n\n    .main {\n      font-size: 50px;\n      padding: 10px 0px;\n    }\n\n    .sub {\n      font-size: 27px;\n      letter-spacing: 2px;\n      padding: 10px 0px;\n    }\n  }\n"]);return U=function(){return e},e}var D=V.a.h1(U(),(function(e){return e.theme.textColor})),Y=function(){return Object(a.jsx)(D,{children:Object(a.jsx)("div",{className:"titleMessage",children:Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsxs)("div",{className:"main text-center mb-3",children:["Hi, I am",Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:Object(a.jsx)("strong",{children:"Ha Ngoc Kien"})})]}),Object(a.jsx)("div",{className:"sub",children:Object(a.jsx)(F.a,{options:{strings:["Web Developer","MERN Stack Developer","Tester"],autoStart:!0,loop:!0,delay:100}})}),Object(a.jsx)("strong",{style:{color:"red",marginBottom:0,marginTop:10},children:"Motel room management"}),Object(a.jsxs)("p",{style:{color:"red",marginBottom:0,marginTop:10},children:["Sign In to use my app"," "]}),Object(a.jsxs)("p",{style:{color:"red",marginBottom:0,marginTop:10},children:[" ","Love you !"," "]})]})})})},H=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k.a,{children:Object(a.jsx)(Y,{})}),Object(a.jsx)(z.a,{style:{fontSize:22,fontWeight:"bold",padding:20,background:"lightgray"},children:"Group 12 - Noob Boy"}),Object(a.jsxs)(k.a,{className:"about",children:[Object(a.jsxs)(C.a,{children:[Object(a.jsx)(L.a,{width:200,src:"https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=O59O_uf-7V0AX_MG01r&_nc_ht=scontent.fvca1-1.fna&oh=b6d6d25efb2e3bf695154980216b05c1&oe=5FB78BBA"}),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/hakien1402",children:"H\xc0 KI\xcaN"})})]}),Object(a.jsxs)(C.a,{className:"info",children:[Object(a.jsx)(L.a,{width:200,src:"https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/97993543_1175031346162040_4962050621298442240_o.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=PnnxmhR6vkQAX-L6Lkk&_nc_ht=scontent.fvca1-1.fna&oh=a6180db9bcefb2867bcd4d403bdc54ee&oe=5FB99CD7"}),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100004886378381",children:"V\u0102N QUANG"})})]}),Object(a.jsxs)(C.a,{className:"info",children:[Object(a.jsx)(L.a,{width:200,src:"https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/40515567_2192832774325937_6613797440208240640_o.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=o_RkCjIMMY4AX9NrsdI&_nc_ht=scontent.fvca1-1.fna&oh=c45e8e2f494bc95e915e685093fab031&oe=5FB802BB"}),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100008440710917",children:"QUY\u1ebeT TH\u1eaeNG"})})]}),Object(a.jsxs)(C.a,{className:"info",children:[Object(a.jsx)(L.a,{width:200,src:"https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/43109625_464907613997803_2615802350765342720_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=Ho3J08SHGnQAX8aArRe&_nc_ht=scontent.fvca1-2.fna&oh=79a624a368231db95201288503908a22&oe=5FB9526F"}),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:Object(a.jsx)("a",{href:"https://www.facebook.com/ngmanhcuong17",children:"M\u1ea0NH C\u01af\u1edcNG"})})]})]})]})},E=n(292),G=n(293),J=n(294),K=n(136),X=n(295),W=n(296),Q=n(273),Z=n(107),$=n(284),ee=n(285),te=n(283),ne=n(279),ae=n(128),se=n(72),ce=n(275),re=n(281),oe=n(286),ie=n(274),le=n(172),je=n.n(le),de=Q.a.Content,be=A.a.Search,me=Z.a.Option,ue=function(){j.g;var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),d=(i[0],i[1],Object(s.useState)(!1)),b=Object(l.a)(d,2),m=b[0],O=b[1],f=Object(s.useState)([]),x=Object(l.a)(f,2),g=(x[0],x[1]),y=Object(s.useState)([]),w=Object(l.a)(y,2),I=w[0],L=w[1],M=Object(s.useState)([]),T=Object(l.a)(M,2),B=T[0],V=T[1],q=Object(s.useState)(""),F=Object(l.a)(q,2),U=F[0],D=F[1],Y=Object(s.useState)(!1),H=Object(l.a)(Y,2),le=H[0],ue=H[1],he=Object(s.useState)([]),Oe=Object(l.a)(he,2),pe=Oe[0],fe=Oe[1],xe=Object(s.useState)(!1),ge=Object(l.a)(xe,2),ye=ge[0],we=ge[1],Ie=Object(s.useState)(JSON.parse(localStorage.getItem("idOwner"))),ve=Object(l.a)(Ie,2),Se=ve[0],Ne=(ve[1],Object(s.useState)([])),ke=Object(l.a)(Ne,2),Ae=ke[0],_e=ke[1],Ce=Object(s.useState)([]),Pe=Object(l.a)(Ce,2),Le=Pe[0],Re=Pe[1],Me=Object(s.useState)(!1),Te=Object(l.a)(Me,2),Be=Te[0],ze=Te[1],Ve=Object(s.useState)([]),qe=Object(l.a)(Ve,2),Fe=qe[0],Ue=qe[1],De=Object(s.useState)(!1),Ye=Object(l.a)(De,2),He=Ye[0],Ee=Ye[1],Ge=Fe.filter((function(e){return e.key.toLowerCase().includes(U.toLowerCase())})),Je=function(){var e=Object(h.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.firestore().collection("users").doc(Se),"VIP"==t||"NORMAL"==t?n.collection("rooms").where("type","==",t).onSnapshot((function(e){Ee(!1),Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))})):"true"==t?n.collection("rooms").where("status","==",!0).onSnapshot((function(e){Ee(!1),Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))})):"false"==t?n.collection("rooms").where("status","==",!1).onSnapshot((function(e){Ee(!1),Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))})):n.collection("rooms").onSnapshot((function(e){Ee(!1),Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};Object(s.useEffect)((function(){localStorage.setItem("idOwner",JSON.stringify(Se))}),[Se]);var Xe=function(){return Ke()};Object(s.useEffect)((function(){0===Fe.length&&Ee(!0),function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.firestore(),e.next=3,t.collection("users").doc(Se).collection("rooms").onSnapshot((function(e){Ee(!1),Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var We=function(e){p.firestore().collection("users").doc(Se).collection("rooms").doc(e.id).set({nameLease:"",leaseAt:"",type:e.type,key:e.key,status:!1}).then((function(){c(!1)}))},Qe=Object(a.jsxs)(v.a,{children:[Object(a.jsx)(v.a.Item,{onClick:function(){var e=p.firestore();e.collection("users").doc(Se).collection("rooms").add({key:Xe(),nameLease:"",type:"VIP",status:!1,leaseAt:""}),e.collection("users").doc(Se).collection("rooms").onSnapshot((function(e){Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}))},children:"VIP"}),Object(a.jsx)(v.a.Item,{onClick:function(){var e=p.firestore();e.collection("users").doc(Se).collection("rooms").add({key:Ke(),nameLease:"",type:"NORMAL",status:!1,leaseAt:""}),e.collection("users").doc(Se).collection("rooms").onSnapshot((function(e){Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}))},children:"NORMAL"})]}),Ze={labelCol:{span:7},wrapperCol:{span:17}},$e={wrapperCol:{offset:7,span:16}},et=[{title:"Name",dataIndex:"memName",key:"memName"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Start Date",dataIndex:"startAt",key:"startAt"},{title:"Action",key:"action",width:100,render:function(e){return Object(a.jsx)($.b,{size:"middle",children:Object(a.jsx)(ee.a,{placement:"top",title:"Are you sure ?",onConfirm:function(){return at(e)},okText:"Yes",cancelText:"No",children:Object(a.jsxs)(_.a,{children:[" ",Object(a.jsx)(E.a,{})," Delete"]})})})}}],tt=function(){p.firestore().collection("users").doc(Se).collection("rooms").doc(pe.id).collection("members").add({key:Xe(),memName:"New member",startAt:"",gender:"",phone:""})},nt=function(e){p.firestore().collection("users").doc(Se).collection("rooms").doc(pe.id).collection("members").doc(Le.id).set({memName:e.memName,startAt:e.startAt,gender:e.gender,key:Le.key,phone:e.phone}).then((function(){return ze(!1)}))},at=function(){var e=Object(h.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.firestore(),e.next=3,n.collection("users").doc(Se).collection("rooms").doc(pe.id).collection("members").doc(t.id).delete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),st=function(e){return 1==Be?Object(a.jsxs)(N.a,{layout:"inline",size:"large",initialValues:{memName:e.memName,phone:e.phone,gender:e.gender,startAt:e.startAt},onFinish:nt,children:[Object(a.jsx)(N.a.Item,{name:"memName",rules:[{required:!0,message:"Please input user name!"}],children:Object(a.jsx)(A.a,{placeholder:"Name...",style:{width:170}})}),Object(a.jsx)(N.a.Item,{name:"phone",rules:[{required:!0,message:"Please input phone!"}],children:Object(a.jsx)(A.a,{placeholder:"Phone number...",style:{width:113}})}),Object(a.jsx)(N.a.Item,{name:"gender",rules:[{required:!0,message:"Please input gender!"}],children:Object(a.jsxs)(Z.a,{style:{width:110},children:[Object(a.jsx)(me,{value:"Male",children:"Male"}),Object(a.jsx)(me,{value:"Female",children:"Female"})]})}),Object(a.jsx)(N.a.Item,{name:"startAt",rules:[{required:!0,message:"Please input date!"}],children:Object(a.jsx)(A.a,{placeholder:"Start date ...",style:{width:130}})}),Object(a.jsx)(N.a.Item,{children:Object(a.jsx)(_.a,{type:"primary",htmlType:"submit",children:"Save"})})]}):Object(a.jsxs)(k.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsxs)(P.b,{title:"Info Member",size:"small",layout:"horizontal",column:1,bordered:!0,style:{width:500},children:[Object(a.jsx)(P.b.Item,{label:"Name",children:e.memName}),Object(a.jsx)(P.b.Item,{label:"Phone number",children:""!==e.phone?e.phone:"Please update phone!"}),Object(a.jsx)(P.b.Item,{label:"Gender",children:""!==e.gender?e.gender:"Please update gender!"}),Object(a.jsx)(P.b.Item,{label:"Start at",children:""!==e.startAt?e.startAt:"Please update start date!"})]}),Object(a.jsx)(_.a,{style:{marginRight:20},onClick:function(){return Re(e),void ze(!0)},children:"Edit"})]})};return Object(a.jsxs)(Q.a,{style:{padding:"0 24px 24px"},children:[Object(a.jsxs)(te.a,{style:{margin:"16px 0"},children:[Object(a.jsx)(te.a.Item,{children:"Home"}),Object(a.jsx)(te.a.Item,{children:"Room Management"})]}),1==He?Object(a.jsxs)(k.a,{children:[Object(a.jsx)(ne.a,{active:!0}),Object(a.jsx)(ne.a,{active:!0}),Object(a.jsx)(ne.a,{active:!0}),Object(a.jsx)(ne.a,{active:!0})]}):Object(a.jsxs)(de,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:450,overflow:"auto"},children:[Object(a.jsxs)(k.a,{style:{display:"flex",justifyContent:"space-between",marginBottom:20},children:[Object(a.jsx)(ae.a,{overlay:Qe,placement:"bottomCenter",children:Object(a.jsx)(_.a,{children:"Add room"})}),Object(a.jsxs)($.b,{children:[Object(a.jsxs)(Z.a,{style:{width:100},defaultValue:"All",onChange:Je,children:[Object(a.jsx)(me,{value:"",children:"All"}),Object(a.jsx)(me,{value:"NORMAL",children:"NORMAL"}),Object(a.jsx)(me,{value:"VIP",children:"VIP"}),Object(a.jsx)(me,{value:"true",children:"Paid"}),Object(a.jsx)(me,{value:"false",children:"Unpaid"})]}),Object(a.jsx)(be,{placeholder:"Search ...",onSearch:function(e){return D(e)},style:{width:300}})]})]}),Object(a.jsx)(k.a,{children:0==Ge.length?Object(a.jsx)(se.a,{style:{margin:"auto",width:200,height:200},description:Object(a.jsx)("strong",{children:"No rooms!"})}):Ge.map((function(e){return Object(a.jsx)(C.a,{style:{marginBottom:20,marginRight:10},children:Object(a.jsx)(ce.a,{size:"small",title:"Room "+e.key,actions:[Object(a.jsx)(G.a,{onClick:function(){return function(e){c(!0),L(Object(o.a)(Object(o.a)({},I),{},{leaseAt:je()(new Date).format("DD/MM/YYYY"),type:e.type,nameLease:e.nameLease,id:e.id,status:e.status,key:e.key}))}(e)}},"setting"),Object(a.jsx)(J.a,{onClick:function(){return function(e){""===e.nameLease?S.b.warning("The room has not been rented !!!",1):(ue(!0),c(!0),V(e))}(e)}},"edit"),Object(a.jsx)(K.a,{onClick:function(){return function(e){""==e.nameLease?(O(!1),S.b.warning("The room has not been rented !!!",1)):(O(!0),fe(e),function(){var t=Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.firestore(),t.next=3,n.collection("users").doc(Se).collection("rooms").doc(e.id).collection("members").onSnapshot((function(e){_e(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()())}(e)}}),Object(a.jsx)(ee.a,{placement:"top",title:"Are you sure ?",onConfirm:function(){return function(e){var t=p.firestore();t.collection("users").doc(Se).collection("rooms").doc(e.id).delete(),t.collection("users").doc(Se).collection("rooms").onSnapshot((function(e){Ue(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}))}(e)},okText:"Yes",cancelText:"No",children:Object(a.jsx)(E.a,{})})],extra:1==e.status?Object(a.jsx)(X.a,{twoToneColor:"#52c41a"}):Object(a.jsx)(W.a,{twoToneColor:"red"}),style:{width:250,maxHeight:250,minHeight:250},children:Object(a.jsxs)(P.b,{title:"Infomation Room",column:1,children:[Object(a.jsx)(P.b.Item,{label:"Renter Name",style:{width:150},children:e.nameLease}),Object(a.jsx)(P.b.Item,{label:"Start Date",style:{width:150},children:e.leaseAt}),Object(a.jsx)(P.b.Item,{label:"Type",style:{width:150},children:e.type})]})})},e.key)}))})]}),Object(a.jsxs)(R.a,{title:"Room ".concat(!0===le?B.key:I.key),visible:n,footer:" ",width:"450px",onCancel:function(){we(!1),ue(!1),c(!1)},afterClose:function(){return g([])},children:[!0===le?Object(a.jsxs)(N.a,Object(o.a)(Object(o.a)({},Ze),{},{size:"small",name:"basic",onFinish:function(e){p.firestore().collection("users").doc(Se).collection("rooms").doc(B.id).set({nameLease:e.nameLease,leaseAt:e.leaseAt,type:e.type,key:B.key,status:B.status}).then((function(){return c(!1)}))},initialValues:{nameLease:B.nameLease,leaseAt:B.leaseAt,type:B.type},children:[Object(a.jsx)(P.b,{title:"Infomation Room",column:1}),Object(a.jsx)(N.a.Item,{label:"Renter Name",name:"nameLease",rules:[{required:!0,message:"Please input name"}],children:Object(a.jsx)(A.a,{placeholder:"Renter Name"})}),Object(a.jsx)(N.a.Item,{label:"Start date",name:"leaseAt",rules:[{required:!0,message:"Please input date"}],children:Object(a.jsx)(A.a,{placeholder:"Start date (DD/MM/YYYY) "})}),Object(a.jsx)(N.a.Item,{label:"Type",name:"type",rules:[{required:!0,message:"Please input room types"}],children:Object(a.jsxs)(Z.a,{style:{width:200},children:[Object(a.jsx)(me,{value:"NORMAL",children:"NORMAL"}),Object(a.jsx)(me,{value:"VIP",children:"VIP"})]})}),Object(a.jsx)(N.a.Item,Object(o.a)(Object(o.a)({},$e),{},{children:Object(a.jsx)(_.a,{type:"primary",size:"middle",htmlType:"submit",children:"Update"})}))]})):!0===ye?Object(a.jsxs)(N.a,Object(o.a)(Object(o.a)({},Ze),{},{size:"small",name:"basic",onFinish:function(e){p.firestore().collection("users").doc(Se).collection("rooms").doc(I.id).set({nameLease:e.nameLease,leaseAt:e.leaseAt,type:e.type,key:I.key,status:I.status}).then((function(){c(!1),L([]),we(!1)}))},initialValues:{nameLease:I.nameLease,leaseAt:I.leaseAt,type:I.type},children:[Object(a.jsx)(P.b,{title:"Infomation Room",column:1}),Object(a.jsx)(N.a.Item,{label:"Renter Name",name:"nameLease",rules:[{required:!0,message:"Please input name"}],children:Object(a.jsx)(A.a,{placeholder:"Renter Name"})}),Object(a.jsx)(N.a.Item,{label:"Start date",name:"leaseAt",children:Object(a.jsx)(A.a,{placeholder:"Start date ... "})}),Object(a.jsx)(N.a.Item,{label:"Type",name:"type",rules:[{required:!0,message:"Please input room types"}],children:Object(a.jsxs)(Z.a,{style:{width:200},children:[Object(a.jsx)(me,{value:"NORMAL",children:"NORMAL"}),Object(a.jsx)(me,{value:"VIP",children:"VIP"})]})}),Object(a.jsx)(N.a.Item,Object(o.a)(Object(o.a)({},$e),{},{children:Object(a.jsx)(_.a,{type:"primary",size:"middle",htmlType:"submit",children:"Save"})}))]})):Object(a.jsxs)(P.b,{title:"Infomation Room",column:1,bordered:!0,children:[Object(a.jsx)(P.b.Item,{label:"Renter Name",children:I.nameLease}),Object(a.jsx)(P.b.Item,{label:"Start Date",children:I.leaseAt}),Object(a.jsx)(P.b.Item,{label:"Type",children:I.type})]}),""!==I.nameLease||!0===le||!0===ye?Object(a.jsx)(_.a,{style:{float:"right",margin:6},onClick:function(){return We(I)},children:"Refresh"}):Object(a.jsx)(_.a,{style:{float:"right",margin:6},onClick:function(){return we(!0)},children:"Lease"}),Object(a.jsx)(_.a,{style:{float:"right",margin:6},onClick:function(){return c(!1)},children:"Back"})]}),Object(a.jsxs)(re.a,{title:"Infomation Room "+pe.key,placement:"right",closable:!1,onClose:function(){return O(!1)},visible:m,width:750,children:[Object(a.jsx)(ce.a,{size:"small",title:"Room "+pe.key,extra:Object(a.jsx)(oe.a,{checked:1==pe.status,onChange:function(){return e=pe,fe(Object(o.a)(Object(o.a)({},pe),{},{status:1!=e.status})),void p.firestore().collection("users").doc(Se).collection("rooms").doc(e.id).set({nameLease:e.nameLease,leaseAt:e.leaseAt,type:e.type,key:e.key,status:!0!==e.status});var e},checkedChildren:"Paid",unCheckedChildren:"Unpaid"}),children:Object(a.jsxs)(P.b,{title:"Infomation Room",column:1,bordered:!0,style:{background:"white"},children:[Object(a.jsx)(P.b.Item,{label:"Renter Name",children:pe.nameLease}),Object(a.jsx)(P.b.Item,{label:"Start Date",children:pe.leaseAt}),Object(a.jsx)(P.b.Item,{label:"Type",children:pe.type}),Object(a.jsxs)(P.b.Item,{label:"Total members",children:[Ae.length+" "," members"]})]})}),Object(a.jsx)(z.a,{children:"List members"}),Object(a.jsx)(ie.a,{columns:et,dataSource:Ae,pagination:{pageSize:4},size:"small",title:function(){return Object(a.jsx)(_.a,{onClick:tt,children:"Add member"})},expandable:{expandedRowRender:function(e){return st(e)}}})]})]})};var he=function(){var e=Object(j.h)(),t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=(n[0],n[1],Object(s.useState)(JSON.parse(localStorage.getItem("isAuth")))),r=Object(l.a)(c,2),m=r[0],u=(r[1],function(e){var t=e.children,n=Object(i.a)(e,["children"]);return Object(a.jsx)(j.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return m?t:Object(a.jsx)(j.a,{to:{pathname:"/home",state:{from:n}}})}}))});return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j.a,{to:{pathname:"/room-management",state:{from:e}}}),Object(a.jsx)(T,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/home",exact:!0,children:Object(a.jsx)(H,{})}),Object(a.jsx)(u,{path:"/room-management",children:Object(a.jsx)(ue,{})})]}),Object(a.jsx)(b,{})]})})};r.a.render(Object(a.jsx)(d.a,{children:Object(a.jsx)(he,{})}),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.46d6d61d.chunk.js.map