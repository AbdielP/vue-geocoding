(function(e){function t(t){for(var r,s,a=t[0],i=t[1],l=t[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,a=1;a<o.length;a++){var i=o[a];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},c=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-geocoding/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0750":function(e,t,o){"use strict";o("769f")},"3c20":function(e,t,o){"use strict";o("9439")},5272:function(e,t,o){},5433:function(e,t,o){e.exports=o.p+"img/map-marker-red.e14c5c2c.svg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("ab8b"),o("4989"),o("cd74"),o("6cc5");var r=o("7a23");function n(e,t){var o=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(o)}var c=o("6b0d"),s=o.n(c);const a={},i=s()(a,[["render",n]]);var l=i,u=o("6c02"),d=function(e){return Object(r["u"])("data-v-4f285b78"),e=e(),Object(r["s"])(),e},f={class:"main__container"},b=d((function(){return Object(r["g"])("div",{id:"map",class:"map"},null,-1)}));function p(e,t,o,n,c,s){var a=Object(r["y"])("Navbar"),i=Object(r["y"])("MapFeatures");return Object(r["r"])(),Object(r["f"])("div",f,[Object(r["h"])(a),Object(r["h"])(i,{onPlotResult:s.plotResult,onGetGeoLocation:s.getGeoLocation,onRemoveResult:s.removeResult,onToggleSearchResults:s.toggleSearchResults,coords:c.coords,searchResults:c.searchResults,fetchCoords:c.fetchCoords},null,8,["onPlotResult","onGetGeoLocation","onRemoveResult","onToggleSearchResults","coords","searchResults","fetchCoords"]),b])}o("d81d"),o("e9c4"),o("ac1f"),o("841c");var h=o("9ac7"),g=o.n(h),m=o("8fea"),v=o.n(m),O=function(e){return Object(r["u"])("data-v-e68a870c"),e=e(),Object(r["s"])(),e},j={class:"main col-9 col-md-4 col-xl-3 d-flex flex-column mx-4 mt-2"},y={class:"d-flex justify-content-between"},R={class:"input-group input-group-sm div--width"},w=O((function(){return Object(r["g"])("img",{class:"img__position",src:g.a,alt:"My location"},null,-1)})),x=[w],k={key:0,class:"overflow-scroll div__container mt-2"},S={class:"card d-flex justify-content-center p-2"},_=["onClick"],L=O((function(){return Object(r["g"])("img",{class:"img__marker",src:v.a,alt:"Location"},null,-1)})),M={class:"small"},C={key:1,class:"mt-2"},G={class:"card d-flex justify-content-center p-2"},P={class:"d-flex flex-column p-1"},T=O((function(){return Object(r["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16"},[Object(r["g"])("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})],-1)})),I=[T],z={class:"lead"},A={class:"small"},D={class:"small"};function U(e,t,o,n,c,s){var a=Object(r["y"])("LoadingSpinner");return Object(r["r"])(),Object(r["f"])("div",j,[Object(r["g"])("div",y,[Object(r["g"])("div",R,[Object(r["E"])(Object(r["g"])("input",{onFocus:t[0]||(t[0]=function(t){return e.$emit("toggleSearchResults")}),onInput:t[1]||(t[1]=function(){return s.search&&s.search.apply(s,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.searchQuery=e}),type:"text",class:"form-control",placeholder:"Search","aria-label":"Search","aria-describedby":"Search"},null,544),[[r["C"],c.searchQuery]])]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(t){return e.$emit("getGeoLocation")}),type:"button",class:Object(r["n"])(["btn btn-sm",{"btn-dark":o.coords,"btn-secondary":!o.coords}])},x,2)]),c.searchQuery&&o.searchResults?(Object(r["r"])(),Object(r["f"])("div",k,[Object(r["g"])("div",S,[c.searchData?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["d"])(a,{key:0})),(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.searchData,(function(e,t){return Object(r["r"])(),Object(r["f"])("div",{onClick:function(t){return s.selectResult(e)},class:"d-flex align-items-center p-1 div__results",key:t},[L,Object(r["g"])("p",M,Object(r["A"])(e.place_name_en)+".",1)],8,_)})),128))])])):Object(r["e"])("",!0),c.selectedResult?(Object(r["r"])(),Object(r["f"])("div",C,[Object(r["g"])("div",G,[Object(r["g"])("div",P,[Object(r["g"])("button",{onClick:t[4]||(t[4]=function(){return s.removeResult&&s.removeResult.apply(s,arguments)}),type:"button","aria-label":"close",class:"btn__close align-self-end p-0"},I),Object(r["g"])("h1",z,Object(r["A"])(c.selectedResult.text)+".",1),Object(r["g"])("p",A,Object(r["A"])(c.selectedResult.properties.address)+", "+Object(r["A"])(c.selectedResult.city)+", "+Object(r["A"])(c.selectedResult.state)+".",1),Object(r["g"])("p",D,Object(r["A"])(c.selectedResult.properties.category)+".",1)])])])):Object(r["e"])("",!0)])}var Q=o("1da1"),N=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("9861"),o("99af"),{class:"d-flex justify-content-center"}),F=Object(r["g"])("div",{class:"spinner-border",role:"status"},[Object(r["g"])("span",{class:"visually-hidden"},"Loading...")],-1),J=[F];function V(e,t,o,n,c,s){return Object(r["r"])(),Object(r["f"])("div",N,J)}var $={name:"Spinner"};const q=s()($,[["render",V]]);var E=q,H=o("bc3a"),B=o.n(H),Z={name:"MapFeatures",props:["coords","fetchCoords","searchResults"],components:{LoadingSpinner:E},data:function(){return{searchData:null,searchQuery:null,queryTimeOut:null,selectedResult:null}},methods:{search:function(){var e=this;clearTimeout(this.queryTimeOut),this.searchData=null,this.queryTimeOut=setTimeout(Object(Q["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.searchQuery){t.next=6;break}return o=new URLSearchParams({fuzzyMatch:!0,language:"en",limit:10,proximity:e.coords?"".concat(e.coords.lng,", ").concat(e.coords.lat):"0,0"}),t.next=4,B.a.get("https://backend-node-server.herokuapp.com/api/geocoding/search/".concat(e.searchQuery,"?").concat(o));case 4:r=t.sent,e.searchData=r.data.features;case 6:case"end":return t.stop()}}),t)}))),800)},selectResult:function(e){this.selectedResult=e,this.$emit("plotResult",e.geometry)},removeResult:function(){this.selectedResult=null,this.$emit("removeResult")}}};o("6bea");const K=s()(Z,[["render",U],["__scopeId","data-v-e68a870c"]]);var W=K,X=function(e){return Object(r["u"])("data-v-1c0a4d5f"),e=e(),Object(r["s"])(),e},Y={class:"navbar navbar-light bg-light"},ee=X((function(){return Object(r["g"])("div",{class:"container-fluid"},[Object(r["g"])("a",{class:"navbar-brand test",href:"#"}," Geocoding Map ")],-1)})),te=[ee];function oe(e,t,o,n,c,s){return Object(r["r"])(),Object(r["f"])("nav",Y,te)}var re={name:"Navbar"};o("3c20");const ne=s()(re,[["render",oe],["__scopeId","data-v-1c0a4d5f"]]);var ce=ne,se=o("e11e"),ae=o.n(se),ie=null,le={name:"Home",components:{MapFeatures:W,Navbar:ce},data:function(){return{coords:null,geoMarker:null,fetchCoords:null,resultMarker:null,searchResults:null}},methods:{initMap:function(){var e=this;ie=ae.a.map("map",{zoomControl:!0,zoom:1,zoomAnimation:!1,fadeAnimation:!0,markerZoomAnimation:!0}).setView([51.505,-.09],15),ie.zoomControl.setPosition("bottomleft"),ae.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(ie),ie.on("moveend",(function(){e.closeSearchResults()})),this.getGeoLocation()},getGeoLocation:function(){return this.coords?(this.coords=null,sessionStorage.removeItem("coords"),ie.removeLayer(this.geoMarker)):sessionStorage.getItem("coords")?(this.coords=JSON.parse(sessionStorage.getItem("coords")),void this.plotGeoLocation(this.coords)):(this.fetchCoords=!0,void navigator.geolocation.getCurrentPosition(this.setCoords,this.getLocError))},setCoords:function(e){this.fetchCoords=null;var t={lat:e.coords.latitude,lng:e.coords.longitude};sessionStorage.setItem("coords",JSON.stringify(t)),this.coords=t,this.plotGeoLocation(this.coords)},getLocError:function(e){this.fetchCoords=null,console.log(e)},plotGeoLocation:function(e){var t=ae.a.icon({iconUrl:o("5433"),iconSize:[35,35]});this.geoMarker=ae.a.marker([e.lat,e.lng],{icon:t}).addTo(ie),ie.setView([e.lat,e.lng],15)},plotResult:function(e){this.resultMarker&&ie.removeLayer(this.resultMarker),this.resultMarker=ae.a.marker([e.coordinates[1],e.coordinates[0]]).addTo(ie),ie.setView([e.coordinates[1],e.coordinates[0]],16),this.closeSearchResults()},toggleSearchResults:function(){this.searchResults=!this.searchResults},closeSearchResults:function(){this.searchResults=null},removeResult:function(){ie.removeLayer(this.resultMarker)}},mounted:function(){this.initMap()}};o("0750");const ue=s()(le,[["render",p],["__scopeId","data-v-4f285b78"]]);var de=ue,fe=[{path:"/",name:"Home",component:de}],be=Object(u["a"])({history:Object(u["b"])("/vue-geocoding/"),routes:fe}),pe=be;delete ae.a.Icon.Default.prototype._getIconUrl,ae.a.Icon.Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")}),Object(r["c"])(l).use(pe).mount("#app")},"6bea":function(e,t,o){"use strict";o("5272")},"769f":function(e,t,o){},"8fea":function(e,t,o){e.exports=o.p+"img/location-dot-solid.b74535fa.svg"},9439:function(e,t,o){},"9ac7":function(e,t,o){e.exports=o.p+"img/location-crosshairs-solid.af6973b7.svg"}});
//# sourceMappingURL=app.6eccb526.js.map