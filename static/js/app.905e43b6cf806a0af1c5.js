webpackJsonp([3],{"7J0M":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),a=n("eKM9"),s=Object(a.a)({name:"header",data:function(){return{}}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{class:this.b("")},[e("div",{class:this.b("letter")}),this._v(" "),e("div",{class:this.b("logo")},[e("a",{attrs:{href:"javascript:;"}}),this._v(" "),e("i")]),this._v(" "),e("div",{class:this.b("search")})])},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(t){n("nA9H")},"data-v-a7709424",null).exports,c=n("mvHQ"),l=n.n(c),u=Object(a.a)({name:"navbar",data:function(){return{active:this.getLoc("active")||0,titles:[{title:"推荐",tag:"recommend"},{title:"军事",tag:"military"},{title:"娱乐",tag:"entertainment"},{title:"视频",tag:"video"},{title:"影视",tag:"media"},{title:"热点",tag:"hot"},{title:"科技",tag:"technology"},{title:"汽车",tag:"car"},{title:"房产",tag:"house"},{title:"体育",tag:"sports"}],trans:{transform:""}}},created:function(){this.prevOffset=0},mounted:function(){this.animate(this.active)},methods:{getLoc:function(t){return JSON.parse(window.sessionStorage.getItem(t))},setLoc:function(t){return window.sessionStorage.setItem("active",l()(t))},hanlderNav:function(t,e){this.animate(e),this.active!==e&&(this.active=e,this.setLoc(e),this.$router.push({path:""+t.tag}))},animate:function(t){var e=this.$refs["title"+t][0],n=e.offsetWidth,i=e.getBoundingClientRect().left,a=(window.innerWidth-n)/2,s=this.$refs.wrap.offsetWidth-window.innerWidth,r=Math.abs(i-a);i>a&&(r+=this.prevOffset,r=Math.min(r,s),this.trans.transform="translateX("+-r+"px)",this.prevOffset=r),i<a&&(r=this.prevOffset-r,r=Math.min(-r,0),this.trans.transform="translateX("+r+"px)",this.prevOffset=Math.abs(r))}}}),f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.b("")},[n("div",{ref:"wrap",class:t.b("wrapper"),style:t.trans},t._l(t.titles,function(e,i){return n("a",{key:e.tag,ref:"title"+i,refInFor:!0,class:{active:t.active===i},on:{click:function(n){return t.hanlderNav(e,i)}}},[t._v(t._s(e.title))])}),0),t._v(" "),n("a",{class:t.b("btn")},[n("span")])])},staticRenderFns:[]};var v=n("VU/8")(u,f,!1,function(t){n("RafQ")},null,null).exports,h=Object(a.a)({name:"footer"}),d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{class:this.b("")},[e("a",[e("aside",{class:this.b("left")},[e("div",{class:this.b("logo")}),this._v(" "),e("span",[this._v("今日头条")])]),this._v(" "),e("button",[this._v("打开")])])])},staticRenderFns:[]};var m={name:"App",components:{Footer:n("VU/8")(h,d,!1,function(t){n("exGb")},"data-v-79b04a46",null).exports,NavBar:v,Header:o},methods:{}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("main",[e("Header"),this._v(" "),e("nav-bar"),this._v(" "),e("Footer"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)])},staticRenderFns:[]};var _=n("VU/8")(m,p,!1,function(t){n("i+xF")},null,null).exports,b=n("/ocq"),g=n("vV7r"),y=Object(a.a)({name:"top",props:{lists:{type:Array,default:function(){return[]}}}}),x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.lists,function(e){return n("div",{key:e.comment,staticClass:"tt-hairline--bottom",class:t.b("")},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("div",{class:t.b("dots")},[n("span",[t._v("置顶")]),t._v(" "),n("span",[t._v(t._s(e.origin))]),t._v(" "),n("span",[t._v(t._s(e.comment))]),t._v(" "),n("span",[t._v(t._s(e.time))])])])}),0)},staticRenderFns:[]};var w=n("VU/8")(y,x,!1,function(t){n("7J0M")},"data-v-0b2c1679",null).exports,O=n("hpZS"),F=Object(a.a)({name:"recommend",data:function(){return{data:[{title:"",id:"edcrfv"},{title:"",id:"tgbyhn"},{title:"",id:"ujmi"}],lists:[{type:"top",title:"家国清明，凝聚坚定前行的力量",origin:"央视新闻网",comment:"1232",time:"1小时前"},{type:"top",title:"往来皆静默 定格三分钟",origin:"湖北新闻网",comment:"132",time:"1小时前"},{type:"top",title:"家国清明，凝聚坚定前行的力量",origin:"央视新闻网",comment:"12932",time:"1小时前"}]}},components:{PageList:g.a,Top:w,MainList:O.a}}),$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-list",{scopedSlots:t._u([{key:"list",fn:function(){return[n("Top",{attrs:{lists:t.lists}}),t._v(" "),n("MainList",{attrs:{data:t.data}})]},proxy:!0}])})},staticRenderFns:[]};var E=n("VU/8")(F,$,!1,function(t){n("s62y")},"data-v-5493a351",null).exports;i.a.use(b.a);var M=new b.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:E},{path:"/military",name:" military",component:function(){return n.e(0).then(n.bind(null,"g6p0"))}},{path:"/hot",name:" hot",component:function(){return n.e(1).then(n.bind(null,"0Ury"))}}]});n("y5uh"),n("zO3H");i.a.config.productionTip=!1,new i.a({el:"#app",router:M,render:function(t){return t(_)}})},RafQ:function(t,e){},Yyi2:function(t,e){},eKM9:function(t,e,n){"use strict";var i=n("woOf"),a=n.n(i),s=n("fZjL"),r=n.n(s),o=function(t,e,n){return e?t+n+e:t},c={methods:{b:function(t,e){var n=this.$options.name;return t&&"string"!=typeof t&&(e=t,t=""),t=o(n,t,"__"),e?[t,function t(e,n){if("string"==typeof n)return o(e,n,"--");if(Array.isArray(n))return n.map(function(n){return t(e,n)});var i={};return r()(n).forEach(function(t){i[e+"--"+t]=n[t]}),i}(t,e)]:t}}},l=function(t){t.component(this.name,this)};e.a=function(t){return t.components=a()(t.components||{},{}),t.name="tt-"+t.name,t.install=t.install||l,t.mixins=t.mixins||[],t.mixins.push(c),t}},exGb:function(t,e){},hpZS:function(t,e,n){"use strict";var i=n("eKM9"),a=Object(i.a)({name:"mainlist",props:{data:{type:Array,default:function(){return[{title:"",id:"色布"}]}}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._l(t.data,function(e,i){return[i>1?n("a",{key:e.id,staticClass:"tt-hairline--bottom",class:t.b("")},[n("aside",{class:t.b("left")},[n("h3",[t._v("莴笋不要只会炒着吃了，川菜师傅教你这样秘制，下饭爽口特别好吃")]),t._v(" "),n("div",{class:t.b("left__dots")},[n("span",[t._v("环球时报")]),t._v(" "),n("span",[t._v("评论12312")])])]),t._v(" "),n("aside",{class:t.b("right")})]):n("a",{key:e.id,staticClass:"tt-hairline--bottom",class:t.b("",["noflex"])},[n("h3",[t._v("明朝皇帝吃土拨鼠，清朝皇帝吃不到牛肉，皇帝们吃得可比你差多了")]),t._v(" "),n("div",{class:t.b("someimg")},[t._m(0,!0)]),t._v(" "),n("div",{class:t.b("dots")},[n("span",[t._v("热")]),t._v(" "),n("span",[t._v("华商热线")]),t._v(" "),n("span",[t._v("评论4343")]),t._v(" "),n("span",[t._v("12分钟前")])])])]})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li"),this._v(" "),e("li"),this._v(" "),e("li")])}]};var r=n("VU/8")(a,s,!1,function(t){n("Yyi2")},"data-v-ba8e0a38",null);e.a=r.exports},"i+xF":function(t,e){},nA9H:function(t,e){},pWLx:function(t,e){},s62y:function(t,e){},vV7r:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"tt-pagelist"},[this._t("list")],2)},staticRenderFns:[]};var a=n("VU/8")({name:"pagelist"},i,!1,function(t){n("pWLx")},"data-v-0cc1ea14",null);e.a=a.exports},y5uh:function(t,e){!function(){var t=document.documentElement;function e(){var e=t.clientWidth/10;t.style.fontSize=e+"px"}e(),window.addEventListener("resize",e)}()},zO3H:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.905e43b6cf806a0af1c5.js.map