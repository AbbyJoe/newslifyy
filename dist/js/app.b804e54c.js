(function(t){function e(e){for(var s,o,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"07a2":function(t,e,a){},"127c":function(t,e,a){"use strict";var s=a("3ccc"),n=a.n(s);n.a},"3ccc":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=(a("034f"),a("2877")),c={},i=Object(o["a"])(c,n,r,!1,null,null,null),l=i.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Navbar"),a("div",{staticClass:"search-field",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",name:"search",placeholder:"Search worldwide news..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("button",{staticClass:"btn btn-primary ml-4",attrs:{type:"button"},on:{click:t.searchNews}},[t._v("Search")])]),a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row"},t._l(t.articles,(function(e,s){return a("div",{key:s,staticClass:"col-lg-4 mt-4"},[a("div",{staticClass:"results"},[e.urlToImage?a("img",{staticClass:"img-fluid",attrs:{src:e.urlToImage,alt:e.ttitle}}):a("img",{staticClass:"img-fluid",attrs:{src:"https://www.signagekings.ng/wp-content/uploads/2016/04/dummy-post-horisontal.jpg",alt:e.ttitle}}),a("div",{staticClass:"card__body p-4"},[a("h5",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("div",[t._v(t._s(e.content)+" "),a("a",{attrs:{href:e.url}},[t._v("Read more...")])]),a("p",[t._v("Author: "+t._s(e.author))]),a("p",[t._v(t._s(t._f("moment")(e.publishedAt)))])])])])})),0),a("div",{ref:"infinteScrollTrigger"},[t.loading?a("div",{staticClass:"text-center mt-5"},[a("div",{attrs:{id:"loading"}})]):a("div",{staticClass:"text-center"},[t._v("No more top news for now...")])])])],1)},f=[],b=(a("99af"),a("4160"),a("ac1f"),a("841c"),a("159b"),a("2909")),p=a("bc3a"),m=a.n(p),j=a("c1df"),v=a.n(j),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Newslify")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)]),a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.logOut}},[t._v("Logout")])])])])],1)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],y={methods:{logOut:function(){localStorage.removeItem("token"),this.$router.push("/Login")}}},w=y,_=(a("8381"),Object(o["a"])(w,g,h,!1,null,"e3176eb0",null)),k=_.exports,C={name:"Home",data:function(){return{articles:[],search:"",country:"us",loading:!1,currentPage:1,maxPerPage:6,totalResults:100}},components:{Navbar:k},computed:{pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)}},methods:{moment:function(){return v()()},resetData:function(){this.articles=[]},getTopNews:function(){var t=this;this.loading=!0;var e="886f03f701624f8a983ec136ff054946";m.a.get("http://newsapi.org/v2/top-headlines?country=".concat(this.country,"&pageSize=").concat(this.maxPerPage,"&apiKey=").concat(e,"&page=").concat(this.currentPage)).then((function(e){var a;t.loading=!1,(a=t.articles).push.apply(a,Object(b["a"])(e.data.articles))})).catch((function(t){console.log(t)}))},searchNews:function(){var t=this;if(""!==this.search){this.loading=!0;var e="886f03f701624f8a983ec136ff054946";m.a.get("https://newsapi.org/v2/everything?q=".concat(this.search,"&apiKey=").concat(e,"&page=").concat(this.currentPage)).then((function(e){var a;t.loading=!1,t.search="",(a=t.articles).push.apply(a,Object(b["a"])(e.data.articles))})).catch((function(t){alert(t)})),this.resetData()}},scrollTrigger:function(){var t=this,e=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&t.currentPage<t.pageCount&&(t.loading=!0,t.currentPage+=1,t.search?t.searchNews():t.getTopNews())}))}));e.observe(this.$refs.infinteScrollTrigger)}},mounted:function(){null===localStorage.getItem("token")?(localStorage.removeItem("token"),this.$router.push("/Login")):(this.getTopNews(),this.scrollTrigger())},filters:{moment:function(t){return v()(t).format("MMMM Do YYYY, h:mm:ss a")}}},x=C,z=(a("127c"),Object(o["a"])(x,d,f,!1,null,"505b5d57",null)),O=z.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"global-container"},[a("div",{staticClass:"card login-form"},[a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title text-center"},[t._v("Login to Newslify")]),a("div",{staticClass:"card-text"},[t.error?a("div",{staticClass:"bg-danger p-2"},[t._v(t._s(t.error))]):t._e(),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputUsername1"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-sm",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-sm",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",disabled:!0===t.loading},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t.loading?a("div",[a("div",{attrs:{id:"loading"}})]):a("div",[t._v("Login")])]),t._m(0)])])])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-up"},[t._v(" Don't have an account? "),a("a",{attrs:{href:"#"}},[t._v("Create One")])])}],N={name:"Home",components:{},data:function(){return{email:"",password:"",loading:!1,error:""}},methods:{login:function(){var t=this;this.loading=!0,m.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY",{email:this.email,password:this.password}).then((function(e){t.loading=!1,localStorage.setItem("token",e.data.idToken),t.$router.push("/")})).catch((function(e){t.loading=!1,t.error=e.response.data.error.message,setTimeout((function(){t.error=""}),3e3)}))}}},T=N,E=(a("91e1"),Object(o["a"])(T,P,S,!1,null,"70a48dfc",null)),I=E.exports;s["a"].use(u["a"]);var $=[{path:"/",name:"Home",component:O},{path:"/Login",name:"Login",component:I}],M=new u["a"]({mode:"history",base:"/",routes:$}),L=M;a("4989"),a("ab8b"),a("9537"),a("3e48");s["a"].config.productionTip=!1,new s["a"]({router:L,render:function(t){return t(l)}}).$mount("#app")},8381:function(t,e,a){"use strict";var s=a("07a2"),n=a.n(s);n.a},"85ec":function(t,e,a){},"91e1":function(t,e,a){"use strict";var s=a("fe67"),n=a.n(s);n.a},fe67:function(t,e,a){}});
//# sourceMappingURL=app.b804e54c.js.map