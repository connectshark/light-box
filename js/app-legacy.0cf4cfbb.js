(function(e){function t(t){for(var o,r,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-0180ada2":"73cedc62","chunk-35d17be8":"66c37088","chunk-5fd634d8":"ec4a2b9d"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0180ada2":1,"chunk-35d17be8":1,"chunk-5fd634d8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0180ada2":"a1be90da","chunk-35d17be8":"047f2abb","chunk-5fd634d8":"e3dfadc4"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=(n("4ee2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/picList"}},[e._v("picture list")])],1),n("router-view"),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.lightBox,expression:"this.$route.meta.lightBox"}],staticClass:"light-box"},[n("div",{staticClass:"btn",on:{click:e.backHandler}},[n("span",{staticClass:"material-icons icon"},[e._v("close")])]),n("div",{staticClass:"content"},[n("router-view",{attrs:{name:"lightBox"}})],1)])],1)}),a=[],i={methods:{backHandler:function(){var e=-1*this.$store.state.backCount;this.$router.go(e),this.$store.commit("resetCount")}},created:function(){this.$store.dispatch("init")}},c=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,r,a,!1,null,null,null),l=s.exports,d=n("bc3a"),p=n.n(d),f=n("2f62");o["a"].use(f["a"]);var h=new f["a"].Store({state:{images:[],backCount:0},mutations:{setImages:function(e,t){e.images=t},resetCount:function(e){e.backCount=0},increaseCount:function(e){e.backCount+=1}},actions:{init:function(e){p.a.get("https://picsum.photos/v2/list?limit=10").then((function(t){e.commit("setImages",t.data)}))}},getters:{imageLength:function(e){return e.images.length}},modules:{}}),m=(n("d3b7"),n("8c4f"));o["a"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-0180ada2").then(n.bind(null,"bb51"))}},{path:"/picList",name:"picList",component:function(){return n.e("chunk-35d17be8").then(n.bind(null,"c9f5"))},meta:{type:"container"}},{path:"/pic/:pic",name:"picture",component:function(){return n.e("chunk-5fd634d8").then(n.bind(null,"a393"))},meta:{type:"content",lightBox:!1}},{path:"*",redirect:{name:"Home"}}],v=new m["a"]({mode:"history",routes:g}),b=v;v.beforeEach((function(e,t,n){if(t.matched.length){var o=t.matched[0],r=e.matched[0],a=null;"container"===o.meta.type&&"content"===e.meta.type?a=o.components.default:o.components.lightBox&&(a=o.components.default,o.components.default=o.components.lightBox,o.components.lightBox=null,o.meta.lightBox=!1),a&&"content"===e.meta.type&&(r.components.lightBox=r.components.default,r.components.default=a,e.meta.lightBox=!0)}n()})),o["a"].config.productionTip=!1,new o["a"]({store:h,router:b,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app-legacy.0cf4cfbb.js.map