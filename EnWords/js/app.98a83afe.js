(function(t){function e(e){for(var r,i,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)i=a[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"049a":function(t,e,n){"use strict";var r=n("fb4e"),o=n.n(r);o.a},"057d":function(t,e,n){},"05c2":function(t,e,n){"use strict";var r=n("6063"),o=n.n(r);o.a},"15b7":function(t,e,n){},"22e9":function(t,e,n){},"233d":function(t,e,n){},"2d45":function(t,e,n){"use strict";var r=n("22e9"),o=n.n(r);o.a},3141:function(t,e,n){"use strict";var r=n("15b7"),o=n.n(r);o.a},5183:function(t,e,n){"use strict";var r=n("057d"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("appheader"),n("v-content",[n("router-view")],1),n("appfooter")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.menuItems,function(e,r){return n("v-list-tile",{key:"navdrawer"+r,attrs:{to:e.route}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),1),n("v-toolbar",{staticClass:"teal",attrs:{app:"",dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("v-toolbar-title",{domProps:{textContent:t._s("EnWord")}})],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.menuItems,function(e,r){return n("v-btn",{key:"menuitem"+r,attrs:{flat:"",to:e.route}},[n("v-icon",{attrs:{left:""},domProps:{innerHTML:t._s(e.icon)}}),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t.isUserAuthenticated?n("v-btn",{attrs:{flat:""},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[n("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Выйти\n      ")],1):t._e()],2)],1)],1)},a=[],c={data:function(){return{drawer:!1,counter:null}},computed:{isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated},menuItems:function(){return this.isUserAuthenticated?[{icon:"reply",title:"Начать",route:"/start"},{icon:"trending_up",title:"Ваш рекорд",route:"/score"}]:[{icon:"reply",title:"Начать",route:"/start"},{icon:"trending_up",title:"Ваш рекорд",route:"/score"},{icon:"input",title:"Войти",route:"/signin"},{icon:"lock_open",title:"Зарегистрироваться",route:"/signup"}]}},methods:{signout:function(){var t=this;this.$confirm("Вы действительно хотите выйти?").then(function(e){e&&(t.$store.dispatch("SIGNOUT"),t.$router.push("/signin"))})}}},u=c,l=(n("2d45"),n("2877")),d=Object(l["a"])(u,i,a,!1,null,"ace5189e",null);d.options.__file="AppHeader.vue";var f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{fixed:!0,app:""}},[n("span",[t._v(" EnWord ©2018")])])},h=[],p={},m=p,g=(n("8953"),Object(l["a"])(m,v,h,!1,null,"7a79da54",null));g.options.__file="AppFooter.vue";var S=g.exports,x={components:{appheader:f,Appfooter:S}},E=x,w=(n("034f"),Object(l["a"])(E,o,s,!1,null,null,null));w.options.__file="App.vue";var O=w.exports,y=n("8c4f"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("section",[r("v-parallax",{attrs:{src:n("7ae3"),height:"600"}},[r("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[r("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("EnWord")]),r("v-btn",{staticClass:"teal lighten-2 mt-5",attrs:{dark:"",large:""},on:{click:t.getStart}},[t._v("\n                    Get Started\n                ")])],1)],1)],1),r("section",[r("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[r("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[r("div",{staticClass:"text-xs-center"},[r("v-container",[r("v-layout",{staticClass:"blue--text",staticStyle:{"font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[r("v-icon",{staticClass:"red--text text--lighten-2",attrs:{"x-large":""}},[t._v("insert_emoticon")]),t._v("  MAX SCORE AMONG ALL USERS : "+t._s(t.highScore)+"\n                        ")],1)],1)],1)]),r("v-flex",{attrs:{xs12:""}},[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-card",{staticClass:"elevation-0 transparent"},[r("v-card-text",{staticClass:"text-xs-center"},[r("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("check_circle")])],1),r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline text-xs-center"},[t._v("Поставьте рекорд переведенных слов")])]),r("v-card-text",[t._v("\n                                    В течение одной минуты, постарайтесь правильно перевести на русский язык большее количество слов. Таймер включается после начала ввода слова!\n                                ")])],1)],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-card",{staticClass:"elevation-0 transparent"},[r("v-card-text",{staticClass:"text-xs-center"},[r("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("info")])],1),r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline text-xs-center"},[t._v("Есть возможность посмотреть перевод")])]),r("v-card-text",[t._v("\n                                    Во время перевода слов, у вас будет неограниченное кол-во возможности посмотреть перевод слова. Нажав на иконку"),r("v-icon",{attrs:{size:"18"}},[t._v("help")])],1)],1)],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-card",{staticClass:"elevation-0 transparent"},[r("v-card-text",{staticClass:"text-xs-center"},[r("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("how_to_reg")])],1),r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline text-xs-center"},[t._v("Есть возможность добавления новых слов")])]),r("v-card-text",[t._v("\n                                    Зарегистрируйтесь, и у вас будет возможность фиксировать ваш максимальный счёт. А также появится возможность добавления новых слов!\n                                ")])],1)],1)],1)],1)],1)],1)],1)])},R=[],C={data:function(){return{title:"Your Logo"}},computed:{highScore:function(){return this.$store.getters.gethighScore}},methods:{getStart:function(){this.$router.push("/start")}},mounted:function(){var t=this;this.$store.dispatch("COMMON_MAX_SCORE_GET").then(function(e){t.$store.commit("SET_COMMON_SCORE",e)})}},b=C,I=(n("d42a"),Object(l["a"])(b,D,R,!1,null,"08283b72",null));I.options.__file="Home.vue";var A=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",[n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t._v("\n        YOUR CURRENT SCORE IS "+t._s(t.counterNow)+"\n      ")])],1),n("v-divider"),this.$store.getters.userId?n("v-container",[n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t._v("\n        YOUR MAX SCORE IS\n      ")]),n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t._v("\n        COUNTER: "+t._s(t.counterMax)+"\n      ")])],1):t._e()],1)],1)},W=[],N={data:function(){return{}},computed:{counterMax:function(){return this.$store.getters.getCounterMaxGame},counterNow:function(){return this.$store.getters.getCounter},getmaxCounter:function(){return this.$store.getters.getmaxCounter}},mounted:function(){var t=this;this.$store.getters.userId&&(this.$store.commit("setmaxCounter"),this.getmaxCounter<this.counterNow&&this.$store.dispatch("SET_USER_SCORE_DB",this.counterNow)),this.$store.dispatch("COMMON_MAX_SCORE_GET").then(function(e){e<t.counterNow&&t.$store.dispatch("COMMON_MAX_SCORE_SET",t.counterNow)})}},$=N,M=(n("05c2"),Object(l["a"])($,T,W,!1,null,"0413f865",null));M.options.__file="Score.vue";var j=M.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"teal"}},[n("v-toolbar-title",[t._v("Регистрация")]),n("v-spacer")],1),n("v-card-text",[n("v-alert",{attrs:{value:t.error,type:"warning"}},[t._v("\n            "+t._s(t.error)+"\n          ")]),n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"email",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",disabled:t.processing||!t.valid},on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v("Зарегистрироваться")])],1)],1)],1)],1)],1)},L=[],G={data:function(){return{email:null,password:null,valid:!1,emailRules:[function(t){return!!t||"Пожалуйста введите е-мейл"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Неправильный емейл"}],passwordRules:[function(t){return!!t||"Пожалуйста введите пароль"},function(t){return t&&t.length>=6||"Пароль слишком короткий-минимум 6 символов"}]}},computed:{error:function(){return this.$store.getters.getError},processing:function(){return this.$store.getters.getProcessing},isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated:function(t){!0===t&&this.$router.push("/")}},methods:{signup:function(){this.$store.dispatch("SIGNUP",{email:this.email,password:this.password})}}},P=G,k=(n("3141"),Object(l["a"])(P,U,L,!1,null,"785f8391",null));k.options.__file="Signup.vue";var H=k.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"teal"}},[n("v-toolbar-title",[t._v("Вход")]),n("v-spacer")],1),n("v-card-text",[n("v-alert",{attrs:{value:t.error,type:"warning"}},[t._v("\n                        "+t._s(t.error)+"\n                    ")]),n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"email",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"teal",disabled:t.processing||!t.valid},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("Войти")])],1)],1)],1)],1)],1)},B=[],X={data:function(){return{email:null,password:null,valid:!1,emailRules:[function(t){return!!t||"Пожалуйста введите е-мейл"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Неправильный емейл"}],passwordRules:[function(t){return!!t||"Пожалуйста введите пароль"},function(t){return t&&t.length>=6||"Пароль слишком короткий-минимум 6 символов"}]}},computed:{error:function(){return this.$store.getters.getError},processing:function(){return this.$store.getters.getProcessing},isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated:function(t){!0===t&&this.$router.push("/")}},methods:{signin:function(){this.$store.dispatch("SIGNIN",{email:this.email,password:this.password})}}},q=X,F=(n("049a"),Object(l["a"])(q,z,B,!1,null,"c799ffbc",null));F.options.__file="Signin.vue";var V=F.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",[n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-end":"",row:"","fill-height":""}},[t._v("TIME: "+t._s(this.seconds))]),n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-end":"",row:"","fill-height":""}},[t._v("COUNTER: "+t._s(t.counter))])],1),n("v-container",[t.words?n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t._v(t._s(t.words.eng))]):n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("v-icon",[t._v("hourglass_empty")])],1),n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rusInput,expression:"rusInput"}],staticStyle:{border:"solid 1px #009688"},attrs:{placeholder:"Введите перевод"},domProps:{value:t.rusInput},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submitans(e):null},input:[function(e){e.target.composing||(t.rusInput=e.target.value)},function(e){t.startTimer()}]}})])],1)],1),n("v-container",[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("v-icon",{attrs:{size:"18"},on:{click:function(e){e.preventDefault(),t.getHelp()}}},[t._v("help")]),this.showHelp?n("span",{staticClass:"success--text",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.words.rus))]):t._e()],1)],1),n("dialogWindow")],1)],1)},Y=[],J=(n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-end":""}},[n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"900"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.showIcon?n("v-btn",{attrs:{slot:"activator",fab:"",dark:"",color:"indigo"},slot:"activator"},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1):t._e(),n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                    Добавьте слово\n                ")]),n("v-content",[n("v-container",[n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:""}},[t._v("Поле для ввода английского слова")]),n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.eng,expression:"eng"}],staticStyle:{border:"solid 1px #009688"},domProps:{value:t.eng},on:{input:[function(e){e.target.composing||(t.eng=e.target.value)},t.sectionHide]}})])],1),n("v-container",[n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:""}},[t._v("Поле для ввода перевода")]),n("v-layout",{staticStyle:{color:"#009688","font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rus,expression:"rus"}],staticStyle:{border:"solid 1px #009688"},domProps:{value:t.rus},on:{input:[function(e){e.target.composing||(t.rus=e.target.value)},function(e){t.sectionHide()}]}})]),n("v-layout",{attrs:{"mt-4":"","align-center":"","justify-center":"",row:""}},[t.activeBtn?n("v-btn",{attrs:{color:"success"},on:{click:function(e){t.addwords()}}},[t._v("Добавить")]):t._e()],1),t.activeDone?n("v-layout",{staticClass:"blue--text",staticStyle:{"font-size":"20px"},attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t._v("\n                            Слово добавлено!\n                        ")]):t._e()],1),n("v-divider"),n("v-container",[t.hideWordsSection?n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-btn",{attrs:{color:"error"},on:{click:t.hideWords}},[t._v("Скрыть слова")]),n("v-btn",{attrs:{disabled:!t.existWordForDelete,color:"success"},on:{click:t.saveWordsDB}},[t._v("ОК")])],1):n("v-layout",{attrs:{"mt-4":"","align-center":"","justify-center":""}},[n("v-btn",{attrs:{color:"error"},on:{click:t.showDeleteWords}},[t._v("Показать слова")])],1)],1),n("v-container",{directives:[{name:"show",rawName:"v-show",value:t.hideWordsSection,expression:"hideWordsSection"}],attrs:{"grid-list-md":"","text-xs-center":""}},[t.existWordForDelete?n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.collection,function(e){return n("v-flex",{key:e.id,attrs:{xs4:""}},[t._v("\n                                "+t._s(e.eng)+"\n                                "),n("v-icon",{attrs:{size:"15"},on:{click:function(n){t.deleteItem(e)}}},[t._v("close")])],1)}),1):n("v-layout",{attrs:{row:"",wrap:""}},[n("v-card-text",{staticClass:"red--text",staticStyle:{"font-size":"20px"},attrs:{"align-center":"","justify-center":""}},[t._v("\n                                Нет добавленных слов!\n                            ")])],1)],1),n("v-container",{directives:[{name:"show",rawName:"v-show",value:t.wordsDeleted,expression:"wordsDeleted"}],attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-card-text",{staticClass:"red--text",staticStyle:{"font-size":"20px"},attrs:{"align-center":"","justify-center":""}},[t._v("\n                            Слова обновлены!\n                        ")])],1)],1)],1)],1)],1)])}),Q=[],Z={data:function(){return{dialog:!1,eng:void 0,rus:void 0,showingDone:!1,hideWordsSection:!1,deleted:[],wordsDeleted:!1}},methods:{addwords:function(){var t=this;this.$store.dispatch("LENGTH_DATA_WORDS").then(function(e){var n={eng:t.eng,rus:t.rus,length:e};t.$store.dispatch("ADD_NEW_WORDS",n).then(function(){t.rus="",t.eng="",0==t.showingDone&&(t.showingDone=!t.showingDone)})})},showDeleteWords:function(){var t=this;this.$store.dispatch("LENGTH_DATA_WORDS").then(function(e){t.$store.commit("SET_WORDS_DIALOG",t.$store.getters.getWords),t.hideWordsSection=!t.hideWordsSection})},hideWords:function(){this.hideWordsSection=!1},deleteItem:function(t){this.deleted=_.remove(this.$store.getters.getdeleteWords,function(e){return e.id===t.id})},saveWordsDB:function(){var t=this;this.$store.dispatch("LENGTH_DATA_WORDS").then(function(e){t.$store.dispatch("LOAD_WORDS_TO_DB",e).then(function(){t.wordsDeleted=!0,setTimeout(function(){t.wordsDeleted=!1},1e3),t.hideWordsSection=!1,t.deleted.length=0})})},sectionHide:function(){return this.hideWordsSection=!1}},computed:{activeBtn:function(){return!!this.eng&&!!this.rus},activeDone:function(){return!this.eng&&!this.rus&&this.showingDone},existWordForDelete:function(){return 0!=this.$store.getters.getdeleteWords.length},collection:function(){return this.deleted,this.$store.getters.getdeleteWords},showIcon:function(){return this.$store.getters.isUserAuthenticated}}},tt=Z,et=Object(l["a"])(tt,J,Q,!1,null,null,null);et.options.__file="dialogWindow.vue";var nt=et.exports,rt={components:{dialogWindow:nt},data:function(){return{minId:0,maxId:void 0,rusInput:null,id:0,seconds:59,setInt:!0,showHelp:!1,timeinterval:void 0,dialog:!1,eng:void 0,rus:void 0,showingDone:!1,hideWordsSection:!1}},methods:{submitans:function(){this.rusInput.toLowerCase().trim()===this.words.rus.toLowerCase()&&this.$store.commit("incrementCounter"),this.showHelp=!1,this.id=Math.floor(Math.random()*(this.$store.getters.getmaxId-this.minId))+this.minId,this.rusInput=""},counterNull:function(){this.$store.commit("counterSetNull")},startTimer:function(){var t=this;this.setInt&&(this.setInt=!1,this.timeinterval=setInterval(function(){var e=t.seconds;e-=1,t.seconds=e,e<=0&&(clearInterval(t.timeinterval),t.$router.push("/score"))},1e3))},getHelp:function(){return this.showHelp=!this.showHelp}},mounted:function(){this.counterNull(),this.maxId=this.$store.getters.getmaxId},destroyed:function(){clearInterval(this.timeinterval)},computed:{words:function(){var t=this;return this.$store.getters.getWords.find(function(e){return e.id==t.id})},counter:function(){return this.$store.getters.getCounter}}},ot=rt,st=(n("5183"),Object(l["a"])(ot,K,Y,!1,null,"56e1109e",null));st.options.__file="Start.vue";var it=st.exports,at=n("2f62"),ct=n("8aa5"),ut=n.n(ct),lt={state:{user:{isAuthenticated:!1,uid:null},unsubscribeAuth:null},mutations:{SET_USER:function(t,e){t.user.isAuthenticated=!0,t.user.uid=e},UNSET_USER:function(t){t.user={isAuthenticated:!1,uid:null}},SET_UNSUBSCRIBE_AUTH:function(t,e){t.unsubscribeAuth=e}},actions:{INIT_AUTH:function(t){return new Promise(function(e,n){t.unsubscribeAuth&&t.unsubscribeAuth();var r=ut.a.auth().onAuthStateChanged(function(n){t.dispatch("STATE_CHANGED",n),e(n)});t.commit("SET_UNSUBSCRIBE_AUTH",r)})},SIGNUP:function(t,e){var n=t.commit;n("SET_PROCESSING",!0),n("CLEAR_ERROR"),ut.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(){n("SET_PROCESSING",!1)}).catch(function(t){n("SET_PROCESSING",!1),n("SET_ERROR",t.message)})},SIGNIN:function(t,e){var n=t.commit;n("SET_PROCESSING",!0),n("CLEAR_ERROR"),ut.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){n("SET_PROCESSING",!1)}).catch(function(t){n("SET_PROCESSING",!1),n("SET_ERROR",t.message)})},STATE_CHANGED:function(t,e){return new Promise(function(n){e?(t.commit("SET_USER",e.uid),t.dispatch("LOAD_USER_SCORE",e.uid),t.dispatch("LENGTH_DATA_WORDS").then(function(e){0!=e?t.dispatch("LOAD_SAVE_WORDS"):t.dispatch("LOAD_WORDS")}),n()):(t.commit("UNSET_USER"),t.dispatch("LOAD_WORDS"))})},SIGNOUT:function(){ut.a.auth().signOut()}},getters:{userId:function(t){return t.user.uid},isUserAuthenticated:function(t){return t.user.isAuthenticated}}},dt={state:{processing:!1,error:null},mutations:{SET_PROCESSING:function(t,e){t.processing=e},SET_ERROR:function(t,e){t.error=e},CLEAR_ERROR:function(t){t.error=null}},getters:{getProcessing:function(t){return t.processing},getError:function(t){return t.error}}},ft=(n("ac6a"),{state:{words:[],deleteWords:[],maxId:0,isWordsAdd:!1,docId:void 0},mutations:{SET_WORDS:function(t,e){t.words=e},SET_WORDS_DIALOG:function(t,e){t.deleteWords=e},INCREMENT_MAXID:function(t,e){t.maxId+=e},isWordsAdd:function(t,e){t.isWordsAdd=e},DELETE_WORDS:function(t){t.words.length=0},DELETE_WORDS_DIALOG:function(t){t.deleteWords.length=0},maxID:function(t,e){t.maxId=e},MAXID_NULL:function(t){t.maxId=0}},actions:{ADD_NEW_WORDS:function(t,e){var n=this;return new Promise(function(o){t.commit("maxID",e.length),t.commit("SET_PROCESSING",!0),n.docId="word"+t.getters.getmaxId;var s=r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords").doc(n.docId),i={eng:e.eng,rus:e.rus,id:t.getters.getmaxId};s.set(i).then(function(){t.dispatch("LOAD_SAVE_WORDS").then(function(){t.commit("INCREMENT_MAXID",1),o()})}).catch(function(){t.commit("SET_PROCESSING",!1)})})},LOAD_WORDS_TO_DB:function(t,e){return new Promise(function(n){t.dispatch("DELETE_DATA_WORDS",e);for(var o=[],s=0;s<t.getters.getdeleteWords.length;s++){var i=t.getters.getdeleteWords[s];i.id=s,o.push(i);var a="word"+s,c=r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords").doc(a);c.set(i)}t.commit("SET_WORDS",o),t.commit("maxID",o.length),0==t.getters.getdeleteWords.length&&t.dispatch("LOAD_WORDS"),n()})},LOAD_WORDS:function(t){r["default"].$db.collection("words").get().then(function(e){var n=[];e.forEach(function(t){var e=t.data(),r={id:e.id,eng:e.eng,rus:e.rus};n.push(r)}),t.commit("SET_WORDS",n),t.commit("maxID",n.length)}).catch(function(t){return console.log(t)})},LOAD_SAVE_WORDS:function(t){return new Promise(function(e){t.commit("DELETE_WORDS"),r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords").get().then(function(n){var r=[];n.forEach(function(t){var e=t.data(),n={id:e.id,eng:e.eng,rus:e.rus};r.push(n)}),t.commit("SET_WORDS",r),t.commit("maxID",r.length),e()}).catch(function(t){return console.log(t)})})},LENGTH_DATA_WORDS:function(t){return new Promise(function(e){var n=r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords");n.get().then(function(t){return e(t.docs.length)})})},DELETE_DATA_WORDS:function(t,e){if(e<100){var n=function(t){var e=-1,n=function n(){e++,e>t.length||t.functionToLoop(n,e)};n()};n({length:e,functionToLoop:function(e,n){r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords").doc("word"+n).delete(),e()}})}},deleteWords:function(t){return new Promise(function(e){t.commit("DELETE_WORDS_DIALOG"),r["default"].$db.collection("userData").doc(t.getters.userId).collection("userWords").get().then(function(n){var r=[];return n.forEach(function(t){var e=t.data(),n={id:e.id,eng:e.eng,rus:e.rus};r.push(n)}),t.commit("SET_WORDS_DIALOG",r),e()}).catch(function(t){return console.log(t)})})}},getters:{getWords:function(t){return t.words},getmaxId:function(t){return t.maxId},getWordsAdd:function(t){return t.isWordsAdd},getdeleteWords:function(t){return t.deleteWords}}}),vt={scoreAndDate:{maxScore:0}},ht={state:{counter:0,maxCounter:0,maxCounterGameMax:0,highScore:0},mutations:{incrementCounter:function(t){t.counter++},counterSetNull:function(t){t.counter=0},setmaxCounter:function(t){t.maxCounterGameMax=Math.max(t.maxCounter,t.counter)},SET_USER_SCORE:function(t,e){t.maxCounter=e.maxScore},SET_USER_MAXSCORE:function(t,e){t.maxCounter=e},SET_COMMON_SCORE:function(t,e){t.highScore=e}},actions:{LOAD_USER_SCORE:function(t,e){var n=t.commit;n("SET_PROCESSING",!0);var o=r["default"].$db.collection("userData").doc(e);o.get().then(function(t){var e=t.exists?t.data():vt;e.scoreAndDate||(e.scoreAndDate={}),n("SET_USER_SCORE",e.scoreAndDate),n("SET_PROCESSING",!1)}).catch(function(t){n("SET_PROCESSING",!1),console.log("Error getting document:",t)})},SET_USER_SCORE_DB:function(t,e){var n=t.commit,o=t.getters;n("SET_PROCESSING",!0);var s=r["default"].$db.collection("userData").doc(o.userId),i={addedDate:new Date,maxScore:e};s.set({scoreAndDate:i}).then(function(){n("SET_USER_MAXSCORE",e),n("SET_PROCESSING",!1)}).catch(function(){n("SET_PROCESSING",!1)})},COMMON_MAX_SCORE_GET:function(t){return new Promise(function(t){var e=r["default"].$db.collection("maxScore").doc("topScore");e.get().then(function(e){var n=e.data();t(n.maxnumber)})})},COMMON_MAX_SCORE_SET:function(t,e){var n=r["default"].$db.collection("maxScore").doc("topScore"),o={maxnumber:e};n.set(o),t.commit("COMMON_SCORE",e)}},getters:{getCounter:function(t){return t.counter},getmaxCounter:function(t){return t.maxCounter},getCounterMaxGame:function(t){return t.maxCounterGameMax},gethighScore:function(t){return t.highScore}}};r["default"].use(at["a"]);var pt=new at["a"].Store({modules:{generalModule:dt,userModule:lt,wordsModule:ft,userDataModule:ht}});r["default"].use(y["a"]);var mt=new y["a"]({routes:[{path:"/",name:"home",component:A},{path:"/score",name:"score",component:j,props:!0},{path:"/signin",name:"signin",component:V},{path:"/signup",name:"signup",component:H},{path:"/start",name:"start",component:it}],mode:"history"});mt.beforeEach(function(t,e,n){pt.dispatch("INIT_AUTH").then(function(e){t.matched.some(function(t){return t.meta.authRequired})?e?n():n("/signin"):n()})});var gt=mt,_t=n("ce5b"),St=n.n(_t),xt=(n("bf40"),{apiKey:"AIzaSyATIjCFGjLDaN3NxrjNcVQLgqVKfMRjKQI",authDomain:"enwoord.firebaseapp.com",databaseURL:"https://enwoord.firebaseio.com",projectId:"enwoord",storageBucket:"enwoord.appspot.com",messagingSenderId:"1036844477275"}),Et=n("59ca"),wt=n.n(Et),Ot=(n("66ce"),n("2ef0")),yt=n.n(Ot),Dt=(n("e71f"),n("9eed")),Rt=n.n(Dt);r["default"].use(St.a),r["default"].use(yt.a),r["default"].config.productionTip=!1;var Ct=wt.a.initializeApp(xt),bt=Ct.firestore();bt.settings({timestampsInSnapshots:!0}),r["default"].$db=bt,r["default"].use(Rt.a,{buttonTrueText:"Да",buttonFalseText:"Нет",width:400}),new r["default"]({router:gt,store:pt,render:function(t){return t(O)},created:function(){}}).$mount("#app")},6063:function(t,e,n){},"64a9":function(t,e,n){},"7ae3":function(t,e,n){t.exports=n.p+"img/hero.3641ef45.jpeg"},8953:function(t,e,n){"use strict";var r=n("ac2c"),o=n.n(r);o.a},ac2c:function(t,e,n){},d42a:function(t,e,n){"use strict";var r=n("233d"),o=n.n(r);o.a},fb4e:function(t,e,n){}});
//# sourceMappingURL=app.98a83afe.js.map