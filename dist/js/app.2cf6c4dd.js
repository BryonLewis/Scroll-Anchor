(function(e){function t(t){for(var s,i,r=t[0],l=t[1],c=t[2],f=0,h=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],s=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var s={},n={app:0},a=[];function i(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=s,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1146:function(e,t,o){},3103:function(e,t,o){"use strict";var s=o("1146"),n=o.n(s);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-content",[o("scroll-component")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-card",[o("v-container",[o("v-row",[o("v-col",[o("v-row",[o("v-col",[o("v-select",{attrs:{items:e.modes,label:"Mode","persistent-hint":""},on:{change:e.initialize},model:{value:e.selectedMode,callback:function(t){e.selectedMode=t},expression:"selectedMode"}})],1)],1),o("v-row",[o("v-col",[o("v-switch",{attrs:{label:"Scroll Anchor"},model:{value:e.overflowAnchor,callback:function(t){e.overflowAnchor=t},expression:"overflowAnchor"}})],1)],1),"Single Page"!==e.selectedMode?o("v-row",["Static List"===e.selectedMode?o("v-col",[o("v-text-field",{attrs:{type:"number",label:"List Size","hide-details":""},model:{value:e.numNodes,callback:function(t){e.numNodes=t},expression:"numNodes"}})],1):e._e(),"Single Page"!==e.selectedMode?o("v-col",[o("v-text-field",{attrs:{type:"number",label:"Selected Node","hide-details":""},model:{value:e.selectedNode,callback:function(t){e.selectedNode=t},expression:"selectedNode"}})],1):e._e(),"Continuous List"===e.selectedMode?o("v-col",[o("v-text-field",{attrs:{type:"number",label:"Offset","hide-details":""},model:{value:e.selectedNodeOffset,callback:function(t){e.selectedNodeOffset=t},expression:"selectedNodeOffset"}})],1):e._e()],1):e._e()],1),o("v-col",[o("v-row",[o("v-col",[o("v-switch",{attrs:{label:"Insert Images"},on:{change:e.initialize},model:{value:e.ImageConfig.addImages,callback:function(t){e.$set(e.ImageConfig,"addImages",t)},expression:"ImageConfig.addImages"}})],1)],1),e.ImageConfig.addImages?o("v-row",[o("v-col",[o("v-switch",{attrs:{label:"Skeleton"},on:{change:e.initialize},model:{value:e.ImageConfig.insertImageSkeleton,callback:function(t){e.$set(e.ImageConfig,"insertImageSkeleton",t)},expression:"ImageConfig.insertImageSkeleton"}})],1),o("v-col",[o("v-switch",{attrs:{label:"Random Size"},on:{change:e.initialize},model:{value:e.ImageConfig.randomSize,callback:function(t){e.$set(e.ImageConfig,"randomSize",t)},expression:"ImageConfig.randomSize"}})],1)],1):e._e(),!e.ImageConfig.addImages||e.ImageConfig.insertImageSkeleton?o("v-row",[o("v-col",[o("v-btn",{on:{click:e.addImagesAfter}},[e._v(e._s(e.ImageConfig.insertImageSkeleton?"Set Images Src":"Add Images After")+" ")])],1)],1):e._e()],1),o("v-col",[o("v-row",[o("v-col",[o("v-btn",{on:{click:e.initialize}},[e._v("Reload")])],1)],1),o("v-row",[o("v-col",[o("v-switch",{attrs:{label:"Mutation Observer"},on:{change:e.initialize},model:{value:e.attachMutationObserver,callback:function(t){e.attachMutationObserver=t},expression:"attachMutationObserver"}})],1),e.attachMutationObserver&&e.overflowAnchor?o("v-col",[o("v-switch",{attrs:{label:"Filter Scrolls"},on:{change:e.initialize},model:{value:e.filterScrolls,callback:function(t){e.filterScrolls=t},expression:"filterScrolls"}})],1):e._e()],1),o("v-row",[o("v-col",[e._v(" Scroll Count: "+e._s(e.scrollCount)+" ")]),e.filterScrolls?o("v-col",[e._v(" Filter Count: "+e._s(e.filterCount)+" ")]):e._e()],1)],1)],1),o("v-divider")],1),o("div",{ref:"scrollArea",staticClass:"scrollArea",style:e.overflowAnchor?"overflow-anchor:auto":"overflow-anchor:none",attrs:{id:"scrollArea"}})],1)],1)},r=[],l=(o("99af"),o("4160"),o("c975"),o("a9e3"),o("d3b7"),o("ac1f"),o("3ca3"),o("5319"),o("841c"),o("1276"),o("159b"),o("ddb0"),o("2b3d"),o("7c22")),c={name:"ScrollComponent",data:function(){return{overflowAnchor:!0,modes:["Single Page","Continuous List","Static List"],selectedMode:"Single Page",selectedNodeOffset:5,ImageConfig:{addImages:!0,insertImageSkeleton:!1,randomSize:!1},itemsLoaded:!1,attachMutationObserver:!1,filterScrolls:!1,lastScrollEvent:"",imageLoaded:!1,interval:null,rootEl:null,messageList:[],imageList:[],numNodes:0,selectedNode:0,scrollCount:0,filterCount:0}},created:function(){console.log(window.location.href);for(var e=["overflowAnchor","selectedMode","selectedNodeOffset","attachMutationObserver","filterScrolls","numNodes","filterCount"],t=new URLSearchParams(window.location.href.substring(window.location.href.indexOf("?"),window.location.href.length)),o=0;o<e.length;o+=1){var s=t.has(e[o]);s&&(console.log("".concat(e[o],":").concat(this[e[o]])),this[e[o]]=this.convertBasedonType(t.get(e[o]),this[e[o]]),console.log("".concat(e[o],":").concat(this[e[o]])))}},mounted:function(){this.initialize()},methods:{initialize:function(){clearInterval(this.interval),this.messageList=[],this.imageList=[],this.lastScrollEvent="",this.imageLoaded=!1,this.$refs.scrollArea.innerHTML="",this.$refs.scrollArea.scrollTop=0,this.scrollCount=0,this.filterCount=0,this.observer&&(this.observer.disconnect(),this.observer=null),this.attachMutationObserver&&this.mutationObserver(),"Static List"===this.selectedMode&&0===this.numNodes&&(this.numNodes=10),"Single Page"===this.selectedMode?this.singlePage(this.$refs.scrollArea):(this.multipleElements(this.$refs.scrollArea),this.selectedNode),this.itemsLoaded=!0},convertBasedonType:function(e,t){return"boolean"===typeof t?"false"!==e.toLowerCase():"number"===typeof t?Number(e):null},getParams:function(e){var t={},o=document.createElement("a");o.href=e;for(var s=o.search.substring(1),n=s.split("&"),a=0;a<n.length;a+=1){var i=n[a].split("=");t[i[0]]=decodeURIComponent(i[1])}return t},singlePage:function(e){var t=this,o=document.createElement("div");if(o.className="centerDiv",this.ImageConfig.addImages){var s=document.createElement("img"),n=Math.floor(600+300*Math.random());s.onload=function(){t.imageLoaded=!0},this.imageList.push(s),this.ImageConfig.insertImageSkeleton?s.src="":s.src="https://picsum.photos/".concat(n),o.appendChild(s),e.appendChild(o)}var a=new l["LoremIpsum"]({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),i=document.createElement("div");i.innerText=a.generateParagraphs(25),e.appendChild(i)},multipleElements:function(e){var t=this,o=new l["LoremIpsum"]({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),s=10;"Static List"===this.selectedMode&&(s=this.numNodes);for(var n=0;n<s;n+=1){var a=this.addMessage(e,o);a.setAttribute("data-index",n),this.messageList.push(a),0!==this.selectedNode&&n===Number(this.selectedNode)+10&&this.selectNode(this.selectedNode)}"Continuous List"===this.selectedMode&&(this.interval=setInterval((function(){if(t.messageList.length>=50)clearInterval(t.interval);else{var s=t.addMessage(e,o);s.setAttribute("data-index",t.messageList.length-1),t.messageList.push(s);var n=t.messageList.length-1;0!==t.selectedNode&&n===Number(t.selectedNode)+Number(t.selectedNodeOffset)&&t.selectNode(t.selectedNode)}}),1e3))},addMessage:function(e,t){var o=document.createElement("div");if(o.innerText=t.generateParagraphs(1),o.className="message",o.addEventListener("click",(function(){-1!==o.className.indexOf("selected")&&o.className.replace("selected",""),o.className+=" selected"})),this.ImageConfig.addImages){var s=100;this.ImageConfig.randomSize&&(s=Math.floor(25+75*Math.random())),this.imageList.push(this.addImage(o,s))}return e.prepend(o),o},addImage:function(e,t){var o=this,s=document.createElement("img");return s.onload=function(){o.imageLoaded=!0},this.ImageConfig.insertImageSkeleton?s.src="":s.src="https://picsum.photos/".concat(t,"?random=").concat(this.imageList.length),e.prepend(s),s},addImagesAfter:function(){if("Single Page"===this.selectedMode)this.ImageConfig.insertImageSkeleton?this.imageList[0].src="https://picsum.photos/700?random=1":this.imageList.push(this.addImage(this.$refs.scrollArea,700));else if("Continuous List"===this.selectedMode&&clearInterval(this.interval),this.ImageConfig.insertImageSkeleton)for(var e=0;e<this.imageList.length;e+=1){var t=100;this.ImageConfig.randomSize&&(t=Math.floor(25+75*Math.random())),this.imageList[e].src="https://picsum.photos/".concat(t,"?random=").concat(e)}else for(var o=0;o<this.messageList.length;o+=1){var s=100;this.ImageConfig.randomSize&&(s=Math.floor(25+75*Math.random())),this.imageList.push(this.addImage(this.messageList[o],s))}},selectNode:function(e){if(e<this.messageList.length){var t=this.messageList[e].offsetTop,o=t-this.$refs.scrollArea.offsetHeight;t!==o&&(this.$refs.scrollArea.scrollTop=o,this.scrollCount+=1),-1===this.messageList[e].className.indexOf("selected")&&(this.messageList[e].className+=" selected")}},mutationObserver:function(){var e=this.$refs.scrollArea.offsetTop,t=this;function o(){0!==t.selectedNode&&(t.filterScrolls?t.$refs.scrollArea.scrollTop<this.offsetTop&&this.offsetTop<t.$refs.scrollArea.scrollTop+t.$refs.scrollArea.offsetHeight&&(console.log("offsetTop: ".concat(e," scollTop:").concat(t.$refs.scrollArea.scrollTop," clientHeight: ").concat(t.$refs.scrollArea.offsetHeight," imgEl: ").concat(this.offsetTop)),t.selectNode(t.selectedNode),t.filterCount+=1):t.selectNode(t.selectedNode))}this.observer=new MutationObserver((function(e){e.forEach((function(t){e.addedNodes||t.addedNodes.forEach((function(e){var t=e.getElementsByTagName("img");t.forEach((function(e){e.onload=o}))}))}))})),this.observer.observe(this.$refs.scrollArea,{childList:!0,subtree:!0})}}},d=c,f=(o("3103"),o("2877")),h=o("6544"),u=o.n(h),m=o("8336"),g=o("b0af"),v=o("62ad"),p=o("a523"),b=o("ce7e"),I=o("0fd9"),S=o("b974"),w=o("b73d"),C=o("8654"),N=Object(f["a"])(d,i,r,!1,null,null,null),L=N.exports;u()(N,{VBtn:m["a"],VCard:g["a"],VCol:v["a"],VContainer:p["a"],VDivider:b["a"],VRow:I["a"],VSelect:S["a"],VSwitch:w["a"],VTextField:C["a"]});var M={name:"App",components:{ScrollComponent:L},data:function(){return{}}},O=M,x=o("7496"),A=o("a75b"),k=Object(f["a"])(O,n,a,!1,null,null,null),y=k.exports;u()(k,{VApp:x["a"],VContent:A["a"]});var P=o("f309");s["a"].use(P["a"]);var _=new P["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:_,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.2cf6c4dd.js.map