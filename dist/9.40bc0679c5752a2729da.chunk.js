webpackJsonp([9],{"qj+l":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),t=function(){},o=u("zI1e"),d=u("D0Vv"),s=u("sZkp"),c=u("WmqS"),i=u("f3MY"),a=u("7DMc"),r=u("7zrD"),p=u("bfOx"),g=u("NOoU"),m=u("/XCR"),b=u("H77D"),h=u("NsC6"),C=u("e7x4"),f=u.n(C),v=function(){function l(l,n,u){this.srvc_obj=l,this.https=n,this.Http=u,this.switch=!1,this.opt_In=!1}return l.prototype.ngOnInit=function(){var l=this;this.checkOpt_In();var n=localStorage.getItem("email");return(new g.d).append("Content-Type","application/json"),this.https.post(h.a.api+"/subscribed-user/",{email:n}).map(function(n){n.json(),console.log("SUBSCRIBED USER",n.json()),202==n.status?l.switch=!0:500==n.status&&(l.switch=!1)}).subscribe(function(l){})},l.prototype.checkOpt_In=function(){var l=this,n=localStorage.getItem("email");return this.Http.post(h.a.api+"/opt-in-user/",{email:n}).map(function(n){n.json(),console.log("OPT_IN  USER",n.json()),202==n.status?l.opt_In=!0:400==n.status&&(l.opt_In=!1)}).subscribe(function(l){})},l.prototype.Subscribe=function(){this.switch?this.srvc_obj.do_SubsCribe().subscribe(function(l){f()("Subscribe Successfull","","success")}):(this.switch=!0)&&this.srvc_obj.do_UnSubsCribe().subscribe(function(l){console.log("data is",l),f()("You are now Unubscribe","","success")})},l.prototype.OPT_IN=function(){this.opt_In?this.srvc_obj.opt_In_On().subscribe(function(l){f()("Added to Opt-In Successfully","","success")}):(this.opt_In=!0)&&this.srvc_obj.opt_In_Off().subscribe(function(l){f()("Removed from Opt-In Successfully","","success")})},l}(),_=e["\u0275crt"]({encapsulation:0,styles:[['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:55px;height:27px;margin:0;float:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#2196f3}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{-webkit-box-shadow:0 0 1px #2196f3;box-shadow:0 0 1px #2196f3}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}.card-header[_ngcontent-%COMP%]{padding:1.4rem!important;margin:-30px 10px 35px!important;background-color:#030303!important;border-bottom:0 solid rgba(0,0,0,.06)!important}input[_ngcontent-c4][_ngcontent-%COMP%]:checked + .slider[_ngcontent-c4][_ngcontent-%COMP%]{background-color:#000!important}.inner-container[_ngcontent-%COMP%]{width:70%;margin:30px auto;-webkit-box-shadow:1px 1px 19px 2px #ccc;box-shadow:1px 1px 19px 2px #ccc}']],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-loader",[],null,null,null,s.b,s.a)),e["\u0275did"](1,114688,null,0,c.a,[i.a],null,null),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](3,0,null,null,66,"div",[["class","inner-container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\n  "])),(l()(),e["\u0275eld"](5,0,null,null,63,"div",[["class","row info-box"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](7,0,null,null,60,"div",[["class","row pt-3 pb-2 mb-3 info-box"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](9,0,null,null,3,"div",[["class","card-header card-header-icon"],["data-background-color","rose"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](11,0,null,null,0,"img",[["src","../../assets/images/preferences_32.png"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](14,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](16,0,null,null,1,"h4",[["style","font-weight: 600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Preferences"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](19,0,null,null,16,"div",[["class","setting-bar"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](21,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add me in Opt-In influencer's searches "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](24,0,null,null,10,"label",[["class","switch"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](26,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,27).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,27).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.opt_In=u)&&t),"change"===n&&(t=!1!==o.OPT_IN()&&t),t},null,null)),e["\u0275did"](27,16384,null,0,a.CheckboxControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[a.CheckboxControlValueAccessor]),e["\u0275did"](29,671744,null,0,a.NgModel,[[8,null],[8,null],[8,null],[2,a.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.NgControl,null,[a.NgModel]),e["\u0275did"](31,16384,null,0,a.NgControlStatus,[a.NgControl],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](33,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  \n    "])),(l()(),e["\u0275eld"](37,0,null,null,11,"div",[["class","setting-bar"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](39,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Allow brands & agencies to contact me directly"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](42,0,null,null,5,"label",[["class","switch"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](44,0,null,null,0,"input",[["type","checkbox"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](46,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  \n  \n    "])),(l()(),e["\u0275eld"](50,0,null,null,16,"div",[["class","setting-bar"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](52,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Subscribe now to get InfluExpert.AI email updates"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](55,0,null,null,10,"label",[["class","switch"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](57,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,58).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,58).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.switch=u)&&t),"change"===n&&(t=!1!==o.Subscribe()&&t),t},null,null)),e["\u0275did"](58,16384,null,0,a.CheckboxControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[a.CheckboxControlValueAccessor]),e["\u0275did"](60,671744,null,0,a.NgModel,[[8,null],[8,null],[8,null],[2,a.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.NgControl,null,[a.NgModel]),e["\u0275did"](62,16384,null,0,a.NgControlStatus,[a.NgControl],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](64,0,null,null,0,"span",[["class","slider round"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n   \n      \n    \n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0),l(n,29,0,u.opt_In),l(n,60,0,u.switch)},function(l,n){l(n,26,0,e["\u0275nov"](n,31).ngClassUntouched,e["\u0275nov"](n,31).ngClassTouched,e["\u0275nov"](n,31).ngClassPristine,e["\u0275nov"](n,31).ngClassDirty,e["\u0275nov"](n,31).ngClassValid,e["\u0275nov"](n,31).ngClassInvalid,e["\u0275nov"](n,31).ngClassPending),l(n,57,0,e["\u0275nov"](n,62).ngClassUntouched,e["\u0275nov"](n,62).ngClassTouched,e["\u0275nov"](n,62).ngClassPristine,e["\u0275nov"](n,62).ngClassDirty,e["\u0275nov"](n,62).ngClassValid,e["\u0275nov"](n,62).ngClassInvalid,e["\u0275nov"](n,62).ngClassPending)})}var O=e["\u0275ccf"]("app-settings",v,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-settings",[],null,null,null,M,_)),e["\u0275prd"](512,null,r.a,r.a,[p.l,g.e,m.ToastsManager,b.a,e.PLATFORM_ID]),e["\u0275did"](2,114688,null,0,v,[r.a,g.e,b.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),x=u("Xjw4"),N=u("9Sd6"),k=u("XHgV"),w=u("6sdf"),I=u("U/+3"),S=u("8Mnk"),P=u("1T37"),y=u("+j5Y"),E=u("8tOD"),U=u("Uo70"),R=u("a9YB"),T=u("1GLL"),j=u("NwsS"),A=u("AP/s"),D=u("/I96"),L=u("gsbp"),F=u("bkcK"),V=u("TBIh"),Z=u("704W"),z=u("y/Fr");u.d(n,"SettingsModuleNgFactory",function(){return B});var B=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,d.a,O]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[e.LOCALE_ID,[2,x["\u0275a"]]]),e["\u0275mpd"](4608,a["\u0275i"],a["\u0275i"],[]),e["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),e["\u0275mpd"](6144,N.b,null,[x.DOCUMENT]),e["\u0275mpd"](4608,N.c,N.c,[[2,N.b]]),e["\u0275mpd"](4608,k.a,k.a,[]),e["\u0275mpd"](4608,w.b,w.b,[]),e["\u0275mpd"](4608,I.k,I.k,[k.a]),e["\u0275mpd"](4608,I.j,I.j,[I.k,e.NgZone,x.DOCUMENT]),e["\u0275mpd"](136192,I.d,I.b,[[3,I.d],x.DOCUMENT]),e["\u0275mpd"](5120,I.n,I.m,[[3,I.n],[2,I.l],x.DOCUMENT]),e["\u0275mpd"](5120,I.i,I.g,[[3,I.i],e.NgZone,k.a]),e["\u0275mpd"](4608,i.a,i.a,[]),e["\u0275mpd"](5120,b.a,S.b,[g.m,g.j,i.a]),e["\u0275mpd"](5120,P.c,P.a,[[3,P.c],e.NgZone,k.a]),e["\u0275mpd"](5120,P.f,P.e,[[3,P.f],k.a,e.NgZone]),e["\u0275mpd"](4608,y.i,y.i,[P.c,P.f,e.NgZone,x.DOCUMENT]),e["\u0275mpd"](5120,y.e,y.j,[[3,y.e],x.DOCUMENT]),e["\u0275mpd"](4608,y.h,y.h,[P.f,x.DOCUMENT]),e["\u0275mpd"](5120,y.f,y.m,[[3,y.f],x.DOCUMENT]),e["\u0275mpd"](4608,y.c,y.c,[y.i,y.e,e.ComponentFactoryResolver,y.h,y.f,e.ApplicationRef,e.Injector,e.NgZone,x.DOCUMENT]),e["\u0275mpd"](5120,y.k,y.l,[y.c]),e["\u0275mpd"](5120,E.c,E.d,[y.c]),e["\u0275mpd"](4608,E.e,E.e,[y.c,e.Injector,[2,x.Location],[2,E.b],E.c,[3,E.e],y.e]),e["\u0275mpd"](4608,U.d,U.d,[]),e["\u0275mpd"](5120,R.c,R.d,[[3,R.c]]),e["\u0275mpd"](4608,T.g,T.g,[]),e["\u0275mpd"](5120,T.a,T.b,[y.c]),e["\u0275mpd"](5120,j.a,j.b,[y.c]),e["\u0275mpd"](6144,U.h,null,[e.LOCALE_ID]),e["\u0275mpd"](4608,U.c,U.y,[[2,U.h]]),e["\u0275mpd"](512,x.CommonModule,x.CommonModule,[]),e["\u0275mpd"](512,a["\u0275ba"],a["\u0275ba"],[]),e["\u0275mpd"](512,a.FormsModule,a.FormsModule,[]),e["\u0275mpd"](512,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),e["\u0275mpd"](512,N.a,N.a,[]),e["\u0275mpd"](256,U.f,!0,[]),e["\u0275mpd"](512,U.n,U.n,[[2,U.f]]),e["\u0275mpd"](512,k.b,k.b,[]),e["\u0275mpd"](512,U.x,U.x,[]),e["\u0275mpd"](512,w.c,w.c,[]),e["\u0275mpd"](512,I.a,I.a,[]),e["\u0275mpd"](512,A.a,A.a,[]),e["\u0275mpd"](512,S.a,S.a,[]),e["\u0275mpd"](512,p.o,p.o,[[2,p.t],[2,p.l]]),e["\u0275mpd"](512,D.a,D.a,[]),e["\u0275mpd"](512,L.c,L.c,[]),e["\u0275mpd"](512,F.g,F.g,[]),e["\u0275mpd"](512,P.b,P.b,[]),e["\u0275mpd"](512,y.g,y.g,[]),e["\u0275mpd"](512,E.g,E.g,[]),e["\u0275mpd"](512,V.d,V.d,[]),e["\u0275mpd"](512,Z.b,Z.b,[]),e["\u0275mpd"](512,z.a,z.a,[]),e["\u0275mpd"](512,T.h,T.h,[]),e["\u0275mpd"](512,U.v,U.v,[]),e["\u0275mpd"](512,U.t,U.t,[]),e["\u0275mpd"](512,j.d,j.d,[]),e["\u0275mpd"](512,U.z,U.z,[]),e["\u0275mpd"](512,U.q,U.q,[]),e["\u0275mpd"](512,t,t,[]),e["\u0275mpd"](256,U.g,U.k,[]),e["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:v,data:{heading:"Settings"}}]]},[])])})}});