(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-153800be"],{1868:function(n,t,e){n.exports=e.p+"static/img/house01.feae5ee8.jpeg"},2295:function(n,t,e){var o=e("f17b");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var A=e("499e").default;A("47bc2864",o,!0,{sourceMap:!0,shadowMode:!1})},"47e0":function(n,t,e){n.exports=e.p+"static/img/house04.aa02bd9b.jpeg"},"761a":function(n,t,e){n.exports=e.p+"static/img/logo01.9daf75de.png"},"7ac9":function(n,t,e){"use strict";var o=e("2295"),A=e.n(o);A.a},9835:function(n,t,e){n.exports=e.p+"static/img/house03.2c83f2de.jpeg"},b0c0:function(n,t,e){var o=e("83ab"),A=e("9bf2").f,i=Function.prototype,r=i.toString,s=/^\s*function ([^ (]*)/,a="name";!o||a in i||A(i,a,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(n){return""}}})},d045:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"lobby"},[e("el-carousel",{attrs:{height:"100vh",interval:7e3,arrow:"never"}},n._l(n.carousel,(function(n,t){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:n.pic,alt:""}})])})),1),e("div",{staticClass:"houseWrap"},[e("div",{staticClass:"leftItem"},[n._m(0),e("div",{staticClass:"HouseInfo"},[e("h2",[n._v(n._s(n.$t("好室旅店。HOUSE HOTEL")))]),e("p",[n._v(n._s(n.$t("花蓮縣花蓮市國聯路1號")))]),e("p",[n._v("03-3258202")]),e("p",[n._v("HOUSE@HOTEL.COM")])])]),e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:n.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0}}],staticClass:"rightItem"},[e("div",{staticClass:"smallRoom"},n._l(n.roomDetail.slice(0,3),(function(t,o){return e("div",{key:o,staticClass:"roomPic"},[e("img",{attrs:{src:t.pic,alt:"房間照片"}}),e("div",{staticClass:"mask",attrs:{href:""},on:{click:function(e){return n.goRoom(t.id)}}},[e("p",[n._v(n._s(t.name))])])])})),0),e("div",{staticClass:"smallRoom"},n._l(n.roomDetail.slice(3,6),(function(t,o){return e("div",{key:o,staticClass:"roomPic"},[e("img",{attrs:{src:t.pic,alt:"房間照片"}}),e("div",{staticClass:"mask",attrs:{href:""},on:{click:function(e){return n.goRoom(t.id)}}},[e("p",[n._v(n._s(t.name))])])])})),0)])])],1)},A=[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("h1",[o("img",{attrs:{src:e("761a"),alt:""}})])}],i=(e("a4d3"),e("4de4"),e("4160"),e("b0c0"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),r=e("2f62");function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(e,!0).forEach((function(t){Object(i["a"])(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var c={components:{},computed:a({},Object(r["c"])({})),mounted:function(){this.getRoom()},data:function(){return{fullscreenLoading:!0,carousel:[{pic:e("1868")},{pic:e("ec8b")},{pic:e("9835")},{pic:e("47e0")}],roomDetail:[]}},methods:a({},Object(r["b"])({}),{getRoom:function(){var n=this;this.$api.getRoom({}).then((function(t){!0===t.data.success&&(t.data.items.forEach((function(t){n.roomDetail.push({pic:t.imageUrl,name:t.name,id:t.id})})),n.fullscreenLoading=!1)}))},goRoom:function(n){window.localStorage.setItem("roomId",n),this.$router.push({path:"/roomDetail"}).catch((function(n){}))}})},l=c,m=(e("7ac9"),e("2877")),f=Object(m["a"])(l,o,A,!1,null,null,null);t["default"]=f.exports},ec8b:function(n,t,e){n.exports=e.p+"static/img/house02.0f8c3109.jpeg"},f17b:function(n,t,e){t=n.exports=e("24fb")(!0),t.push([n.i,".lobby{position:relative}.lobby .el-carousel__indicators--horizontal{bottom:41px;left:12vw;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.lobby .el-carousel__button{width:12px;height:12px;border-radius:100%}.lobby .el-carousel__item>img{width:100vw;height:100vh;-o-object-fit:cover;object-fit:cover;-webkit-filter:grayscale(90%);filter:grayscale(90%)}.lobby .houseWrap{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:85vw;height:85vh;z-index:4000}.lobby .houseWrap,.lobby .leftItem{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.lobby .leftItem{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lobby .leftItem h1,.lobby .leftItem h1>img{width:100%}.lobby .leftItem .HouseInfo{color:#fff;margin-bottom:10px;font-size:14px;padding:0 15px}.lobby .leftItem .HouseInfo h2,.lobby .leftItem .HouseInfo p{margin:15px 0}.lobby .rightItem .smallRoom{display:-webkit-box;display:-ms-flexbox;display:flex}.lobby .rightItem .mask,.lobby .rightItem .roomPic{width:41vh;height:41vh}.lobby .rightItem .roomPic{position:relative;cursor:pointer}.lobby .rightItem .roomPic>img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.lobby .rightItem .mask{position:absolute;background-color:rgba(56,71,11,.61);top:0;left:0;opacity:0;-webkit-transition:opacity .7s ease-in-out;transition:opacity .7s ease-in-out;text-decoration:none}.lobby .rightItem .mask>p{line-height:41vh;text-align:center;font-size:20px;color:#fff}.lobby .rightItem .roomPic:hover .mask{opacity:1}","",{version:3,sources:["C:/Users/admin/Desktop/project/reserveRoom/src/views/C:/Users/admin/Desktop/project/reserveRoom/src/views/C:/Users/admin/Desktop/project/reserveRoom/src/views/lobby.vue"],names:[],mappings:"AAoGA,OACE,iBAAA,CACA,4CACE,WAAA,CACA,SAAA,CACA,kCAAA,CAAA,0BAAA,CAEF,4BACE,UAAA,CACA,WAAA,CACA,kBAAA,CAEF,8BACE,WAAA,CACA,YAAA,CACA,mBAAA,CAAA,gBAAA,CACA,6BAAA,CAAA,qBAAA,CAEF,kBACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,sCAAA,CAAA,8BAAA,CACA,UAAA,CACA,WAAA,CACA,YAEA,CAEF,mCAHE,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,6BAMA,CAJF,iBAEE,2BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,qBAAA,CAEA,wBAAA,CAAA,qBAAA,CAAA,kBAAA,CACA,4CAEE,UAAA,CAEF,4BACE,UAAA,CACA,kBAAA,CACA,cAAA,CACA,cAAA,CACA,6DAEE,aAAA,CAKJ,6BACE,mBAAA,CAAA,mBAAA,CAAA,YAAA,CAEF,mDAEE,UAAA,CACA,WAAA,CAEF,2BACE,iBAAA,CACA,cAAA,CAEF,+BACE,UAAA,CACA,WAAA,CACA,mBAAA,CAAA,gBAAA,CAEF,wBACE,iBAAA,CACA,mCAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CACA,0CAAA,CAAA,kCAAA,CACA,oBAAA,CAEF,0BACE,gBAAA,CACA,iBAAA,CACA,cAAA,CACA,UAAA,CAEF,uCACE,SAAA",file:"lobby.vue?vue&type=style&index=0&lang=scss&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n* {\n  // outline: 2px solid red;\n}\n.lobby {\n  position: relative;\n  .el-carousel__indicators--horizontal {\n    bottom: 41px;\n    left: 12vw;\n    transform: translateX(-50%);\n  }\n  .el-carousel__button {\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n  }\n  .el-carousel__item > img {\n    width: 100vw;\n    height: 100vh;\n    object-fit: cover;\n    filter: grayscale(90%);\n  }\n  .houseWrap {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85vw;\n    height: 85vh;\n    z-index: 4000;\n    display: flex;\n    justify-content: space-between;\n  }\n  .leftItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    h1,\n    h1 > img {\n      width: 100%;\n    }\n    .HouseInfo {\n      color: #ffffff;\n      margin-bottom: 10px;\n      font-size: 14px;\n      padding: 0px 15px;\n      h2,\n      p {\n        margin: 15px 0;\n      }\n    }\n  }\n  .rightItem {\n    .smallRoom {\n      display: flex;\n    }\n    .roomPic,\n    .mask {\n      width: 41vh;\n      height: 41vh;\n    }\n    .roomPic {\n      position: relative;\n      cursor: pointer;\n    }\n    .roomPic > img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    .mask {\n      position: absolute;\n      background-color: #38470b9c;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      transition: opacity 0.7s ease-in-out;\n      text-decoration: none;\n    }\n    .mask > p {\n      line-height: 41vh;\n      text-align: center;\n      font-size: 20px;\n      color: #ffffff;\n    }\n    .roomPic:hover .mask {\n      opacity: 1;\n    }\n  }\n}\n// =========================== RWD =========================== //\n// 平板\n@media screen and (min-width: 768px) {\n}\n// 平板橫向\n@media screen and (min-width: 992px) {\n}\n// 桌機\n@media screen and (min-width: 1200px) {\n}\n"]}])}}]);