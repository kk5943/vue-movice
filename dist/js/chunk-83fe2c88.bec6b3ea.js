(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83fe2c88"],{"2fcb":function(t,e,n){},"948e":function(t,e,n){"use strict";n.r(e);var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("van-nav-bar",{attrs:{title:"喵眼电影",fixed:"","z-index":2}}),n("div",{staticClass:"movie-tab"},[n("van-tabs",{attrs:{animated:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{to:"/movie/city",name:"a"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.$store.state.city.nm)+" "),n("van-icon",{attrs:{"class-prefix":"iconfont icon-lower-triangle",name:"extra"}})]},proxy:!0}])}),n("van-tab",{attrs:{title:"正在热映",to:"/movie/nowPlaying",name:"b"}}),n("van-tab",{attrs:{title:"即将上映",to:"/movie/comingSoon",name:"c"}}),n("van-tab",{attrs:{to:"/movie/search",name:"d"},scopedSlots:t._u([{key:"title",fn:function(){return[n("i",{staticClass:"iconfont icon-sousuo"})]},proxy:!0}])})],1)],1),n("router-link",{staticClass:"search_entry",attrs:{tag:"div",to:"/movie/search"}}),n("keep-alive",[n("router-view")],1)],1)},a=[],c=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb"),n("c31d")),s=n("2b0e"),l=n("d282"),r=n("ea8e"),u=n("b1d2"),d=n("6605"),f=n("b650"),m=Object(l["a"])("dialog"),h=m[0],v=m[1],g=m[2],b=h({mixins:[Object(d["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[u["e"],v("footer",{buttons:o})]},[this.showCancelButton&&n(f["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||g("cancel")},class:v("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(f["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||g("confirm")},class:[v("confirm"),(t={},t[u["c"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,o=this.messageAlign,i=this.slots(),a=this.slots("title")||this.title,c=a&&e("div",{class:v("header",{isolated:!n&&!i})},[a]),s=(i||n)&&e("div",{class:v("content")},[i||e("div",{domProps:{innerHTML:n},class:v("message",(t={"has-title":a},t[o]=o,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[v(),this.className],style:{width:Object(r["a"])(this.width)}},[c,s,this.genButtons()])])}}}),p=n("a142");function w(t){return document.body.contains(t)}function C(){o&&o.$destroy(),o=new(s["a"].extend(b))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function y(t){return p["f"]?Promise.resolve():new Promise((function(e,n){o&&w(o.$el)||C(),Object(c["a"])(o,y.currentOptions,t,{resolve:e,reject:n})}))}y.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},y.alert=y,y.confirm=function(t){return y(Object(c["a"])({showCancelButton:!0},t))},y.close=function(){o&&(o.value=!1)},y.setDefaultOptions=function(t){Object(c["a"])(y.currentOptions,t)},y.resetDefaultOptions=function(){y.currentOptions=Object(c["a"])({},y.defaultOptions)},y.resetDefaultOptions(),y.install=function(){s["a"].use(b)},y.Component=b,s["a"].prototype.$dialog=y;var B=y,O=(n("96cf"),n("1da1")),x=n("b775"),k={name:"",data:function(){return{active:"b",oldActive:0}},props:{},components:{},computed:{},watch:{},created:function(){console.log("create")},mounted:function(){this.getLocation()},activated:function(){console.log("movie-activated"),this.active="b"},deactivated:function(){this.oldActive=this.active},methods:{getLocation:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["a"])({url:"/api/getLocation"});case 2:if(n=e.sent,"ok"!==n.msg){e.next=10;break}if(o=n.data.nm,i=n.data.id,console.log(i),t.$store.state.city.id!=i){e.next=9;break}return e.abrupt("return");case 9:B.confirm({title:"定位",message:o,confirmButtonText:"切换定位"}).then((function(t){console.log(t),"confirm"===t&&(window.localStorage.setItem("nowNm",o),window.localStorage.setItem("nowId",i),window.location.reload())})).catch((function(t){console.log(t)}));case 10:case"end":return e.stop()}}),e)})))()}}},S=k,j=(n("dcfb"),n("2877")),$=Object(j["a"])(S,i,a,!1,null,"651501e2",null);e["default"]=$.exports},"95de":function(t,e,n){},dcfb:function(t,e,n){"use strict";var o=n("95de"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-83fe2c88.bec6b3ea.js.map