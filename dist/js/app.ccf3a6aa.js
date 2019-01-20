(function(e){function t(t){for(var o,s,l=t[0],i=t[1],c=t[2],f=0,p=[];f<l.length;f++)s=l[f],a[s]&&p.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0441":function(e,t,n){},"06ca":function(e,t,n){},"06f1":function(e,t,n){"use strict";var o=n("dd1b"),a=n.n(o);a.a},"0eb7":function(e,t,n){},1713:function(e,t,n){"use strict";var o=n("aae3"),a=n.n(o);a.a},"1c8d":function(e,t,n){"use strict";var o=n("9c24"),a=n.n(o);a.a},"1fb2":function(e,t,n){},"218d":function(e,t,n){},"24af":function(e,t,n){},2743:function(e,t,n){"use strict";var o=n("defe"),a=n.n(o);a.a},"2a5a":function(e,t,n){},"2c28":function(e,t,n){"use strict";var o=n("1fb2"),a=n.n(o);a.a},"3c35":function(e,t,n){},"3e5e":function(e,t,n){},"3eb8":function(e,t,n){},"47d5":function(e,t,n){"use strict";var o=n("0eb7"),a=n.n(o);a.a},"4b40":function(e,t,n){"use strict";var o=n("bb4a"),a=n.n(o);a.a},"4e01":function(e,t,n){"use strict";var o=n("c78b"),a=n.n(o);a.a},5056:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Flexbox Utility Playground")])},s=[],l={data:function(){return{}},components:{}},i=l,c=(n("cccb"),n("2877")),u=Object(c["a"])(i,r,s,!1,null,null,null);u.options.__file="Home.vue";var f=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v("get started at github.com/Sharpie360/flexbox-util-v1")])},x=[],d={},m=d,v=(n("9f86"),Object(c["a"])(m,p,x,!1,null,null,null));v.options.__file="GettingStarted.vue";var h=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playground flexbox flexdir-col"},[n("pg--display"),n("pg--control-panel")],1)},g=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"display--wrapper"},[n("div",{staticClass:"display--content flexbox",class:[e.flexGroupDirection,e.currentFlexgap.class]},e._l(e.flexItemGroup,function(e,t){return n("disp--flex-item--basic",{key:t,attrs:{flexItem:e,parentIndex:t}})}),1)])},b=[],F=n("2f62"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.flexItem.isCustomWidth?n("custom-width-item",{attrs:{parentIndex:e.parentIndex}}):n("div",{staticClass:"flex-item--basic",style:{flex:e.flexItem.flex},attrs:{tabindex:"-1"},on:{click:e.activate_ColorPicker}},[n("div",{staticClass:"flex-item--basic--inner",class:{"flexbox-space-center":!e.flexItem.nested.hasNestedFlexbox},style:{"background-color":e.flexItem.customColor}},[e.flexItem.nested.hasNestedFlexbox?n("flex-item--nested",{attrs:{parentIndex:e.parentIndex}}):n("div",{directives:[{name:"show",rawName:"v-show",value:!e.flexItem.highlightActive,expression:"!flexItem.highlightActive"}]},[n("h3",[e._v("Flex: "+e._s(e.flexItem.flex))])]),n("input",{staticClass:"click-color-picker--parent",class:{active:this.colorPickerActive},attrs:{type:"color"},on:{input:function(t){e.setFlexParentColor(t)}}}),n("flex-item-highlight",{directives:[{name:"show",rawName:"v-show",value:e.flexItem.highlightActive,expression:"flexItem.highlightActive"}]},[e.flexItem.nested.hasNestedFlexbox?e._e():n("highlight--parent-flex-info",{attrs:{parentIndex:e.parentIndex,flexItem:e.flexItem}})],1)],1)])},A=[],O=n("be94"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-item--basic",style:{width:e.customWidthFull}},[n("div",{staticClass:"flex-item--basic--inner flexbox-space-center"},[e.customWidthValue>100&&"px"===e.customWidthUnits?n("h3",[e._v("\n      Width: "+e._s(e.customWidthFull)+"\n    ")]):e.customWidthValue>5&&"rem"===e.customWidthUnits?n("h3",[e._v("\n      Width: "+e._s(e.customWidthFull)+"\n    ")]):e._e()])])},G=[],T={props:["parentIndex"],computed:{customWidthValue:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth},customWidthUnits:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits},customWidthFull:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth+this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits}}},y=T,E=(n("2743"),Object(c["a"])(y,S,G,!1,null,"b683c578",null));E.options.__file="Display__Flextem_CustomWidth.vue";var N=E.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-item--nested--outer flexbox"},[n("div",{staticClass:"\n      flex-item--nested--inner \n      flex-1 flexbox border\n    ",class:e.nestedFlexDirection,attrs:{tabindex:"-1"},on:{click:e.activate_ColorPicker}},e._l(e.nestedFlexGroup,function(t,o){return n("div",{key:o,staticClass:"nested--flex-item flexbox-space-center",style:[{flex:t.flex,"background-color":t.customColor}]},[n("input",{staticClass:"click-color-picker--nested",class:{active:e.colorPickerActive},attrs:{type:"color"},on:{change:function(t){e.setNestedFlexColor(t,o)}}}),n("span",{staticClass:"nested--flex-item--text"},[e._v("Flex "+e._s(t.flex)+"\n      ")]),n("flex-item-highlight",{directives:[{name:"show",rawName:"v-show",value:t.highlightActive,expression:"nestedFlexItem.highlightActive"}]},[n("highlight--nested-flex-info",{attrs:{nestedIndex:o,nestedFlexItem:t,nestedFlexDirection:e.nestedFlexDirection}})],1)],1)}),0)])},P=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"highlight--outer"},[e._t("default")],2)},D=[],R={},U=R,$=(n("f203"),Object(c["a"])(U,j,D,!1,null,"6824ff28",null));$.options.__file="Display__FlexItem_Highlight.vue";var W=$.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"highlight--inner flexbox flexdir-col"},[n("h3",{staticClass:"flex-center center-self"},[e._v("Parent Flex Item Info")]),n("span",{staticClass:"flex-center center-self"},[e._v("\n    Flex Item: "+e._s(e.nestedIndex+1)+"\n  ")]),n("span",{staticClass:"flex-center center-self"},[e._v("\n    Flex Amount: "+e._s(e.nestedFlexItem.flex)+"\n  ")]),n("span",{staticClass:"flex-center center-self"},[e._v("Flex Direction: "+e._s(e.nestedFlexDirection))])])},M=[],V={props:["nestedFlexItem","nestedIndex","nestedFlexDirection"]},H=V,L=(n("d303"),Object(c["a"])(H,k,M,!1,null,null,null));L.options.__file="FlexItem_Highlight__NestedFlexInfo.vue";var B=L.exports,J={data:function(){return{colorPickerActive:!1}},props:["parentIndex"],components:{"flex-item-highlight":W,"highlight--nested-flex-info":B},computed:{flexItem:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex)},nestedFlexGroup:function(){return this.$store.getters.getNestedFlexGroup(this.parentIndex).nestedFlexGroup},nestedFlexDirection:function(){return this.$store.getters.getNestedFlexDirection(this.parentIndex)}},methods:Object(O["a"])({},Object(F["b"])(["setNestedFlexColor_STORE"]),{activate_ColorPicker:function(){var e=this;this.colorPickerActive=!0,setTimeout(function(){e.colorPickerActive=!1},3e3)},deactivate_ColorPicker:function(){this.colorPickerActive=!1},setNestedFlexColor:function(e,t){var n={parentIndex:this.parentIndex,nestedIndex:t,newValue:e.target.value};this.setNestedFlexColor_STORE(n)}})},q=J,z=(n("e538"),Object(c["a"])(q,w,P,!1,null,"255514a8",null));z.options.__file="Display__FlexItem_Nested.vue";var K=z.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"highlight--inner flexbox flexdir-col"},[n("h3",{staticClass:"flex-center center-self"},[e._v("Parent Flex Item Info")]),n("span",{staticClass:"flex-center center-self"},[e._v("\n    Flex Item: "+e._s(e.parentIndex+1)+"\n  ")]),n("span",{staticClass:"flex-center center-self"},[e._v("\n    Flex Amount: "+e._s(e.flexItem.flex)+"\n  ")]),n("span",{staticClass:"flex-center center-self"},[e._v("Flex Direction: "+e._s(e.flexDirection))])])},X=[],Y={props:["parentIndex","flexItem"],computed:{flexDirection:function(){return this.$store.getters.getFlexDirection}}},Z=Y,ee=(n("60d0"),Object(c["a"])(Z,Q,X,!1,null,"cb565602",null));ee.options.__file="FlexItem_Highlight__ParentFlexInfo.vue";var te=ee.exports,ne={data:function(){return{colorPickerActive:!1}},props:["parentIndex"],components:{"custom-width-item":N,"flex-item--nested":K,"flex-item-highlight":W,"highlight--parent-flex-info":te},computed:{flexItem:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex)}},methods:Object(O["a"])({},Object(F["b"])(["setFlexParentColor_STORE"]),{activate_ColorPicker:function(){var e=this;this.colorPickerActive=!0,setTimeout(function(){e.colorPickerActive=!1},3e3)},setFlexParentColor:function(e){var t={parentIndex:this.parentIndex,newValue:e.target.value};this.setFlexParentColor_STORE(t)}})},oe=ne,ae=(n("f1b6"),Object(c["a"])(oe,C,A,!1,null,"74ab0a66",null));ae.options.__file="Display__FlexItem_Basic.vue";var re=ae.exports,se={components:{"disp--flex-item--basic":re},computed:{flexItemGroup:function(){return this.$store.getters.getFlexGroup},flexGroupDirection:function(){return this.$store.getters.getFlexDirection},currentFlexgap:function(){return this.$store.getters.getFlexgap}}},le=se,ie=(n("4b40"),Object(c["a"])(le,I,b,!1,null,"07ac2210",null));ie.options.__file="Display.vue";var ce=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control-panel--outer flexbox"},[n("cp--action-panel"),n("cp--flex-input-panel")],1)},fe=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"action-buttons flex-1 flexbox"},[n("div",{staticClass:"flex-1"}),n("div",{staticClass:"flex-3-i flexbox-space-evenly flexdir-col"},[n("ap--direction-selection"),n("ap--add-remove-group"),n("ap--flexgap")],1),n("div",{staticClass:"flex-1"})])},xe=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-remove-btns--outer"},[n("div",{staticClass:"\n      add-remove-btns--label--group flexbox-space-between\n    "},[n("span",{staticClass:"add-remove-btns--label--label"},[e._v("Flex Items: \n    ")]),n("span",{staticClass:"add-remove-btns--label--value"},[e._v(e._s(e.flexItemGroupLength)+" of 5\n    ")])]),n("div",{staticClass:"add-remove-btns-inner flexbox"},[n("arg--remove"),n("arg--add")],1)])},me=[],ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"add-remove-btns--add flex-1",on:{click:e.addItemToGroup_STORE}},[e._v("Add\n")])},he=[],_e={methods:Object(O["a"])({},Object(F["b"])(["addItemToGroup_STORE"]))},ge=_e,Ie=(n("1713"),Object(c["a"])(ge,ve,he,!1,null,"fad53bf2",null));Ie.options.__file="ARG__Add.vue";var be=Ie.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"add-remove-btns--remove flex-1",on:{click:e.removeItemFromGroup_STORE}},[e._v("Remove\n")])},Ce=[],Ae={methods:Object(O["a"])({},Object(F["b"])(["removeItemFromGroup_STORE"]))},Oe=Ae,Se=(n("1c8d"),Object(c["a"])(Oe,Fe,Ce,!1,null,"5e044676",null));Se.options.__file="ARG__Remove.vue";var Ge=Se.exports,Te={components:{"arg--add":be,"arg--remove":Ge},computed:{flexItemGroupLength:function(){return this.$store.getters.getFlexGroup.length}}},ye=Te,Ee=(n("6fc5"),Object(c["a"])(ye,de,me,!1,null,"34a3d954",null));Ee.options.__file="AP__AddRemoveGroup.vue";var Ne=Ee.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"direction-selection--outer"},[n("span",{staticClass:"direction-selection--label"},[e._v("\n    Flex Direction:\n  ")]),n("select",{staticClass:"flex-direction-selection",attrs:{placeholder:e.currentDirection,name:"flexdir-select"},on:{change:function(t){e.setFlexDirection_STORE(t.target.value)}}},[n("option",{attrs:{value:"flexdir-row",selected:""}},[e._v("Row (Default)")]),n("option",{attrs:{value:"flexdir-col"}},[e._v("Column")]),n("option",{attrs:{value:"flexdir-rowrev"}},[e._v("Row Reverse")]),n("option",{attrs:{value:"flexdir-colrev"}},[e._v("Column Reverse")])])])},Pe=[],je={data:function(){return{newFlexDirection:this.currentDirection}},computed:{currentDirection:function(){return this.$store.getters.getFlexDirection}},methods:Object(O["a"])({},Object(F["b"])(["setFlexDirection_STORE"]))},De=je,Re=(n("ae62"),Object(c["a"])(De,we,Pe,!1,null,"598b731b",null));Re.options.__file="AP__DirectionSelection.vue";var Ue=Re.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexgap--outer"},[n("div",{staticClass:"flexgap--label--group flexbox"},[n("span",{staticClass:"flexgap--label--label"},[e._v("Flexgap:\n      ")]),n("transition",{attrs:{name:e.transitionDirection,type:"transition",mode:"out-in"}},[0===e.flexgapAmount?n("span",{key:"0",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("None\n        ")]):1===e.flexgapAmount?n("span",{key:"1",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-1\n        ")]):2===e.flexgapAmount?n("span",{key:"2",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-2\n        ")]):3===e.flexgapAmount?n("span",{key:"3",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-3\n        ")]):4===e.flexgapAmount?n("span",{key:"4",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-4\n        ")]):5===e.flexgapAmount?n("span",{key:"5",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-5\n        ")]):e._e()])],1),n("div",{staticClass:"flexgap--inner flexbox"},[n("button",{staticClass:"flexgap--decrease flex-1",on:{click:e.decreaseFlexgap}},[e._v("Decrease\n    ")]),n("button",{staticClass:"flexgap--increase flex-1",on:{click:e.increaseFlexgap}},[e._v("Increase\n    ")])])])},We=[],ke={data:function(){return{transitionDirection:"fade-left",flexgapAmount:0,flexgapClasses:[{name:"None",class:"flexgap-0"},{name:"Flexgap 1",class:"flexgap-1"},{name:"Flexgap 2",class:"flexgap-2"},{name:"Flexgap 3",class:"flexgap-3"},{name:"Flexgap 4",class:"flexgap-4"},{name:"Flexgap 5",class:"flexgap-5"}]}},computed:{currentFlexgap:function(){return this.$store.getters.getFlexgap}},methods:Object(O["a"])({},Object(F["b"])(["setFlexgap_STORE"]),{increaseFlexgap:function(){this.transitionDirection="fade-left",5!==this.flexgapAmount&&(this.flexgapAmount++,this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]))},decreaseFlexgap:function(){this.transitionDirection="fade-right",0!==this.flexgapAmount&&(this.flexgapAmount--,this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]))}})},Me=ke,Ve=(n("8eba"),Object(c["a"])(Me,$e,We,!1,null,"7014e8f8",null));Ve.options.__file="AP__Flexgap.vue";var He=Ve.exports,Le={components:{"ap--add-remove-group":Ne,"ap--direction-selection":Ue,"ap--flexgap":He}},Be=Le,Je=(n("81d6"),Object(c["a"])(Be,pe,xe,!1,null,"4567cd9e",null));Je.options.__file="CP__ActionPanel.vue";var qe=Je.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-input-panel flex-6 flexbox flex-wrap",class:{"flexgap-2":e.flexItemGroup.length>1}},e._l(e.flexItemGroup,function(t,o){return n("div",{key:o,staticClass:"flex-item-group flexbox"},[n("div",{staticClass:"fig--main-panel flex-2"},[n("fp--flex-amount-input",{attrs:{parentIndex:o}}),n("fp--custom-width-input",{attrs:{parentIndex:o}}),n("fp--nested-flex-panel",{attrs:{parentIndex:o}})],1),t.nested.hasNestedFlexbox?n("nfp--flex-amount-panel",{staticClass:"fig--nested-panel flex-1",attrs:{nestedFlexGroup:t.nested.nestedFlexGroup,parentIndex:o}}):e._e()],1)}),0)},Ke=[],Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-amount-input-group"},[n("label",{attrs:{for:"flex-amount"}},[e._v("Parent Flex Item "+e._s(e.parentIndex+1)+"\n  ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newFlexAmount,expression:"newFlexAmount"}],attrs:{type:"number",name:"flex-amount",min:"1",max:"20"},domProps:{value:e.newFlexAmount},on:{input:[function(t){t.target.composing||(e.newFlexAmount=t.target.value)},function(t){e.setFlexAmount(t)}],mouseenter:function(t){e.highlightParentItem(!0)},mouseleave:function(t){e.highlightParentItem(!1)}}})])},Xe=[],Ye={data:function(){return{newFlexAmount:1}},props:["parentIndex"],computed:{flexItem_FlexAmount:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).flex}},methods:Object(O["a"])({},Object(F["b"])(["setFlexAmount_STORE","highlightParentItem_STORE"]),{setFlexAmount:function(e){var t={parentIndex:this.parentIndex,value:e.target.value,isCustomWidth:!1};this.setFlexAmount_STORE(t)},highlightParentItem:function(e){var t={parentIndex:this.parentIndex,setActive:e};this.highlightParentItem_STORE(t)}})},Ze=Ye,et=(n("affe"),Object(c["a"])(Ze,Qe,Xe,!1,null,null,null));et.options.__file="FP__FlexAmountInput.vue";var tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-width-input-group"},[n("label",{attrs:{for:"custom-width-input"}},[e._v("Custom Width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.customWidth,expression:"customWidth"}],staticClass:"custom-width-amount",attrs:{type:"number",name:"custom-width-amount",placeholder:"400"},domProps:{value:e.customWidth},on:{input:function(t){t.target.composing||(e.customWidth=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.measurementUnits,expression:"measurementUnits"}],staticClass:"custom-width-unit-select",attrs:{name:"custom-width-unit-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.measurementUnits=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"px"}},[e._v("px")]),n("option",{attrs:{value:"rem"}},[e._v("rem")])])])},ot=[],at={props:["parentIndex"],computed:{customWidth:{get:function(){return this.$store.state.flexItemGroup[this.parentIndex].customWidth},set:function(e){var t={value:e,parentIndex:this.parentIndex,isCustomWidth:!0,measurementUnits:this.measurementUnits};this.$store.dispatch("setCustomWidth_STORE",t)}},measurementUnits:{get:function(){return this.$store.state.flexItemGroup[this.parentIndex].measurementUnits},set:function(e){var t={measurementUnits:e,parentIndex:this.parentIndex};this.$store.dispatch("setCustomWidthUnits_STORE",t)}}}},rt=at,st=(n("ee18"),Object(c["a"])(rt,nt,ot,!1,null,"3c929594",null));st.options.__file="FP__CustomWidthInput.vue";var lt=st.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nested-flex-panel--outer"},[n("nfp--add-remove-group",{attrs:{parentIndex:e.parentIndex}}),n("nfp--flexdir-select",{attrs:{parentIndex:e.parentIndex}})],1)},ct=[],ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--add-remove-group--outer flexbox flexdir-col"},[n("span",{staticClass:"nfp--add-remove-group--label"},[e._v("Nested Flex\n  ")]),n("div",{staticClass:"nfp--add-remove-group--inner flexbox"},[n("nfp--remove",{attrs:{parentIndex:e.parentIndex}}),n("nfp--add",{attrs:{parentIndex:e.parentIndex}})],1)])},ft=[],pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"nfp--add-remove-group--add flex-1",on:{click:function(t){e.addNestedItemtoFlexItem_STORE(e.parentIndex)}}},[e._v("Add\n")])},xt=[],dt={props:["parentIndex"],methods:Object(O["a"])({},Object(F["b"])(["addNestedItemtoFlexItem_STORE"]))},mt=dt,vt=(n("47d5"),Object(c["a"])(mt,pt,xt,!1,null,"d4a1a630",null));vt.options.__file="NFP__Add.vue";var ht=vt.exports,_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"nfp--add-remove-group--remove",on:{click:function(t){e.removeNestedItemfromFlexItem_STORE(e.parentIndex)}}},[e._v("Remove\n")])},gt=[],It={props:["parentIndex"],methods:Object(O["a"])({},Object(F["b"])(["removeNestedItemfromFlexItem_STORE"]))},bt=It,Ft=(n("2c28"),Object(c["a"])(bt,_t,gt,!1,null,"1ad8f7b1",null));Ft.options.__file="NFP__Remove.vue";var Ct=Ft.exports,At={props:["parentIndex"],components:{"nfp--add":ht,"nfp--remove":Ct}},Ot=At,St=(n("f971"),Object(c["a"])(Ot,ut,ft,!1,null,"723959b7",null));St.options.__file="NFP__AddRemoveGroup.vue";var Gt=St.exports,Tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--flexdir-select--outer"},[n("div",{staticClass:"nfp--flexdir-select--label"},[e._v("Flex Direction")]),n("div",{staticClass:"nfp--flexdir-select--inner flexbox"},[n("select",{staticClass:"nfp--flexdir-select--input flex-1",on:{input:function(t){e.setNestedFlexDirection(t)}}},[n("option",{attrs:{value:"flexdir-row"}},[e._v("Row (Default)\n        ")]),n("option",{attrs:{value:"flexdir-col"}},[e._v("Column\n        ")]),n("option",{attrs:{value:"flexdir-rowrev"}},[e._v("Row Reverse\n        ")]),n("option",{attrs:{value:"flexdir-colrev"}},[e._v("Column Reverse\n        ")])])])])},yt=[],Et={props:["parentIndex"],methods:Object(O["a"])({},Object(F["b"])(["setNestedFlexDirection_STORE"]),{setNestedFlexDirection:function(e){var t={parentIndex:this.parentIndex,newDirection:e.target.value};this.setNestedFlexDirection_STORE(t)}})},Nt=Et,wt=(n("d2c7"),Object(c["a"])(Nt,Tt,yt,!1,null,"69d8bf87",null));wt.options.__file="NFP__FlexdirSelect.vue";var Pt=wt.exports,jt={props:["parentIndex"],components:{"nfp--add-remove-group":Gt,"nfp--flexdir-select":Pt}},Dt=jt,Rt=(n("b96d"),Object(c["a"])(Dt,it,ct,!1,null,null,null));Rt.options.__file="FP__NestedFlexPanel.vue";var Ut=Rt.exports,$t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--flex-amount-panel--outer flexdir-col"},e._l(e.nestedFlexGroup,function(t,o){return n("div",{key:o,staticClass:"nfp--flex-amount-panel--input-wrapper"},[n("label",[e._v("Nested "+e._s(o+1))]),n("input",{attrs:{type:"number",value:"1",min:"1",max:"20"},on:{input:function(t){e.setNestedFlexAmount(o,t)},mouseenter:function(t){e.highlightNestedItem(o,!0)},mouseleave:function(t){e.highlightNestedItem(o,!1)}}})])}),0)},Wt=[],kt={props:["nestedFlexGroup","parentIndex"],methods:Object(O["a"])({},Object(F["b"])(["setNestedFlexAmount_STORE","highlightNestedItem_STORE"]),{setNestedFlexAmount:function(e,t){var n={parentIndex:this.parentIndex,nestedIndex:e,newFlexAmount:t.target.value};this.setNestedFlexAmount_STORE(n)},highlightNestedItem:function(e,t){var n={parentIndex:this.parentIndex,nestedIndex:e,setActive:t};this.highlightNestedItem_STORE(n)}})},Mt=kt,Vt=(n("c58d"),Object(c["a"])(Mt,$t,Wt,!1,null,"4e09db57",null));Vt.options.__file="NFP__FlexAmountPanel.vue";var Ht=Vt.exports,Lt={components:{"fp--flex-amount-input":tt,"fp--custom-width-input":lt,"fp--nested-flex-panel":Ut,"nfp--flex-amount-panel":Ht},computed:{flexItemGroup:function(){return this.$store.getters.getFlexGroup}}},Bt=Lt,Jt=(n("97cf"),Object(c["a"])(Bt,ze,Ke,!1,null,"f10e225c",null));Jt.options.__file="CP__FlexInputPanel.vue";var qt=Jt.exports,zt={components:{"cp--action-panel":qe,"cp--flex-input-panel":qt}},Kt=zt,Qt=(n("06f1"),Object(c["a"])(Kt,ue,fe,!1,null,"3f3358a2",null));Qt.options.__file="ControlPanel.vue";var Xt=Qt.exports,Yt={components:{"pg--display":ce,"pg--control-panel":Xt}},Zt=Yt,en=(n("cd63"),Object(c["a"])(Zt,_,g,!1,null,"a281d1f8",null));en.options.__file="Playground.vue";var tn=en.exports,nn=[{path:"/",name:"Home",component:f},{path:"/getting-started",name:"Getting Started",component:h},{path:"/playground",name:"Playground",component:tn}],on=nn,an={getFlexGroup:function(e,t,n){return n.flexItemGroup},getFlexGroupItem:function(e,t,n){return function(e){return n.flexItemGroup[e]}},getFlexDirection:function(e,t,n){return n.flexGroupDirection},getFlexgap:function(e,t,n){return n.flexgap}},rn={addItemToGroup_MUTA:function(e,t){console.log(t),t.flexItemGroup.length>4||t.flexItemGroup.push({flex:1,customColor:"",isCustomWidth:!1,customWidth:0,measurementUnits:"px",highlightActive:!1,nested:{hasNestedFlexbox:!1,nestedFlexGroup:[],nestedFlexDirection:"flexdir-row"}})},removeItemFromGroup_MUTA:function(e,t){0!==t.flexItemGroup.length?t.flexItemGroup.pop():console.log("no flex items in the group")},setFlexDirection_MUTA:function(e,t){var n=t.rootState,o=t.newDirection;n.flexGroupDirection=o},setFlexAmount_MUTA:function(e,t){var n=t.rootState,o=t.payload;n.flexItemGroup[o.parentIndex].isCustomWidth=o.isCustomWidth,n.flexItemGroup[o.parentIndex].flex=o.value},setFlexgap_MUTA:function(e,t){var n=t.rootState,o=t.payload;n.flexgap=o},hightlightParentItem_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.setActive;n.flexItemGroup[a].highlightActive=r}},sn={addItemToGroup_STORE:function(e){var t=e.commit,n=e.rootState;t("addItemToGroup_MUTA",n)},removeItemFromGroup_STORE:function(e){var t=e.commit,n=e.rootState;t("removeItemFromGroup_MUTA",n)},setFlexDirection_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexDirection_MUTA",{rootState:o,newDirection:t})},setFlexAmount_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexAmount_MUTA",{rootState:o,payload:t})},setFlexgap_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexgap_MUTA",{rootState:o,payload:t})},highlightParentItem_STORE:function(e,t){var n=e.commit,o=e.rootState;n("hightlightParentItem_MUTA",{rootState:o,payload:t})}},ln={getters:an,mutations:rn,actions:sn},cn={getNestedFlexGroup:function(e,t,n){return function(e){return n.flexItemGroup[e].nested}},getNestedFlexDirection:function(e,t,n){return function(e){return n.flexItemGroup[e].nested.nestedFlexDirection}}},un={addNestedItemtoFlexItem_MUTA:function(e,t){var n=t.rootState,o=t.parentIndex;n.flexItemGroup[o].isCustomWidth=!1,n.flexItemGroup[o].nested.nestedFlexGroup.length||(n.flexItemGroup[o].nested.hasNestedFlexbox=!0),n.flexItemGroup[o].nested.nestedFlexGroup.length>3?console.log("max nested flex items reached"):n.flexItemGroup[o].nested.nestedFlexGroup.push({flex:1,customColor:"",highlightActive:!1})},removeNestedItemfromFlexItem_MUTA:function(e,t){var n=t.rootState,o=t.parentIndex;n.flexItemGroup[o].isCustomWidth=!1,n.flexItemGroup[o].nested.nestedFlexGroup.length&&(n.flexItemGroup[o].nested.nestedFlexGroup.pop(),n.flexItemGroup[o].nested.nestedFlexGroup.length||(n.flexItemGroup[o].nested.hasNestedFlexbox=!1))},setNestedFlexDirection_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.newDirection;n.flexItemGroup[a].nested.nestedFlexDirection=r},setNestedFlexAmount_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.nestedIndex,s=o.newFlexAmount;n.flexItemGroup[a].nested.nestedFlexGroup[r].flex=s},highlightNestedItem_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.nestedIndex,s=o.setActive;n.flexItemGroup[a].nested.nestedFlexGroup[r].highlightActive=s}},fn={addNestedItemtoFlexItem_STORE:function(e,t){var n=e.commit,o=e.rootState,a=t;n("addNestedItemtoFlexItem_MUTA",{rootState:o,parentIndex:a})},removeNestedItemfromFlexItem_STORE:function(e,t){var n=e.commit,o=e.rootState,a=t;n("removeNestedItemfromFlexItem_MUTA",{rootState:o,parentIndex:a})},setNestedFlexDirection_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setNestedFlexDirection_MUTA",{rootState:o,payload:t})},setNestedFlexAmount_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setNestedFlexAmount_MUTA",{rootState:o,payload:t})},highlightNestedItem_STORE:function(e,t){var n=e.commit,o=e.rootState;n("highlightNestedItem_MUTA",{rootState:o,payload:t})}},pn={getters:cn,mutations:un,actions:fn},xn={setFlexItemToCustomWidth_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.isCustomWidth;n.flexItemGroup[a].isCustomWidth=r},setCustomWidthValue_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.value;n.flexItemGroup[a].customWidth=r},setCustomWidthUnits_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.measurementUnits;n.flexItemGroup[a].measurementUnits=r}},dn={setCustomWidth_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexItemToCustomWidth_MUTA",{rootState:o,payload:t}),n("setCustomWidthValue_MUTA",{rootState:o,payload:t}),n("setCustomWidthUnits_MUTA",{rootState:o,payload:t})},setCustomWidthUnits_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setCustomWidthUnits_MUTA",{rootState:o,payload:t})}},mn={mutations:xn,actions:dn},vn={setFlexParentColor_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.newValue;n.flexItemGroup[a].customColor=r},setNestedFlexColor_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.nestedIndex,s=o.newValue;n.flexItemGroup[a].nested.nestedFlexGroup[r].customColor=s}},hn={setFlexParentColor_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexParentColor_MUTA",{rootState:o,payload:t})},setNestedFlexColor_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setNestedFlexColor_MUTA",{rootState:o,payload:t})}},_n={mutations:vn,actions:hn};o["a"].use(F["a"]);var gn=new F["a"].Store({state:{flexItemGroup:[{flex:1,customColor:"",isCustomWidth:!1,customWidth:0,measurementUnits:"px",highlightActive:!1,nested:{hasNestedFlexbox:!1,nestedFlexGroup:[],nestedFlexDirection:"flexdir-row"}}],flexGroupDirection:"flexdir-row",flexgap:{name:"Flexgap 0",class:"flexgap-0"}},modules:{parentFlexGroupModule:ln,nestedFlexGroupModule:pn,customWidthModule:mn,customFlexColorModule:_n}}),In=gn,bn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexbox flexdir-col",attrs:{id:"app"}},[n("app--navbar"),n("app--container")],1)},Fn=[],Cn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar flexbox"},[n("navbar--nav-brand",{attrs:{text:"Flexbox Playground"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/",text:"Home"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/getting-started",text:"Getting Started"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/playground",text:"Playground"}})],1)},An=[],On=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-item--brand flex-1 flex-align-center align-self"},[n("span",{staticClass:"nav-item--brand-text"},[e._v(e._s(e.text))])])},Sn=[],Gn={props:["text"]},Tn=Gn,yn=(n("5f23"),Object(c["a"])(Tn,On,Sn,!1,null,"6cc69dfe",null));yn.options.__file="NavBrand.vue";var En=yn.exports,Nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-item flexbox flex-center",attrs:{to:e.routerLinkTo}},[n("span",{staticClass:"nav-item--text"},[e._v(e._s(e.text))])])},wn=[],Pn={props:["routerLinkTo","text"]},jn=Pn,Dn=(n("be95"),Object(c["a"])(jn,Nn,wn,!1,null,"2facdac4",null));Dn.options.__file="NavItem.vue";var Rn=Dn.exports,Un={components:{"navbar--nav-brand":En,"navbar--nav-item":Rn}},$n=Un,Wn=(n("832b"),Object(c["a"])($n,Cn,An,!1,null,"e35fb76c",null));Wn.options.__file="Navbar.vue";var kn=Wn.exports,Mn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container flex-1"},[n("router-view")],1)},Vn=[],Hn={},Ln=Hn,Bn=(n("4e01"),Object(c["a"])(Ln,Mn,Vn,!1,null,null,null));Bn.options.__file="Container.vue";var Jn=Bn.exports,qn={name:"app",components:{"app--navbar":kn,"app--container":Jn}},zn=qn,Kn=(n("034f"),Object(c["a"])(zn,bn,Fn,!1,null,null,null));Kn.options.__file="App.vue";var Qn=Kn.exports;o["a"].use(a["a"]);var Xn=new a["a"]({routes:on});o["a"].config.productionTip=!1,new o["a"]({router:Xn,store:In,render:function(e){return e(Qn)}}).$mount("#app")},5811:function(e,t,n){},"5f23":function(e,t,n){"use strict";var o=n("c282"),a=n.n(o);a.a},6018:function(e,t,n){},"60d0":function(e,t,n){"use strict";var o=n("5811"),a=n.n(o);a.a},"63a9":function(e,t,n){},"64a9":function(e,t,n){},"64e7":function(e,t,n){},"6fc5":function(e,t,n){"use strict";var o=n("63a9"),a=n.n(o);a.a},7975:function(e,t,n){},"81d6":function(e,t,n){"use strict";var o=n("e347"),a=n.n(o);a.a},"832b":function(e,t,n){"use strict";var o=n("f58c"),a=n.n(o);a.a},"8eba":function(e,t,n){"use strict";var o=n("5056"),a=n.n(o);a.a},"93a8":function(e,t,n){},"97cf":function(e,t,n){"use strict";var o=n("7975"),a=n.n(o);a.a},"9c24":function(e,t,n){},"9f86":function(e,t,n){"use strict";var o=n("64e7"),a=n.n(o);a.a},aae3:function(e,t,n){},ae62:function(e,t,n){"use strict";var o=n("3c35"),a=n.n(o);a.a},affe:function(e,t,n){"use strict";var o=n("c9ef"),a=n.n(o);a.a},b96d:function(e,t,n){"use strict";var o=n("93a8"),a=n.n(o);a.a},bb4a:function(e,t,n){},be95:function(e,t,n){"use strict";var o=n("24af"),a=n.n(o);a.a},c282:function(e,t,n){},c58d:function(e,t,n){"use strict";var o=n("06ca"),a=n.n(o);a.a},c78b:function(e,t,n){},c9ef:function(e,t,n){},cccb:function(e,t,n){"use strict";var o=n("d563"),a=n.n(o);a.a},cd63:function(e,t,n){"use strict";var o=n("218d"),a=n.n(o);a.a},d2c7:function(e,t,n){"use strict";var o=n("2a5a"),a=n.n(o);a.a},d303:function(e,t,n){"use strict";var o=n("3e5e"),a=n.n(o);a.a},d563:function(e,t,n){},d67c:function(e,t,n){},dd1b:function(e,t,n){},defe:function(e,t,n){},e347:function(e,t,n){},e538:function(e,t,n){"use strict";var o=n("6018"),a=n.n(o);a.a},ee18:function(e,t,n){"use strict";var o=n("3eb8"),a=n.n(o);a.a},f1b6:function(e,t,n){"use strict";var o=n("ffda"),a=n.n(o);a.a},f203:function(e,t,n){"use strict";var o=n("0441"),a=n.n(o);a.a},f58c:function(e,t,n){},f971:function(e,t,n){"use strict";var o=n("d67c"),a=n.n(o);a.a},ffda:function(e,t,n){}});
//# sourceMappingURL=app.ccf3a6aa.js.map