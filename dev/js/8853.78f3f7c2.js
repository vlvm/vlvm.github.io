"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[8853],{48853:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"catalogueTree"},[a("ul",{staticClass:"sidebar-item__anchors"},e._l(e.list,(function(t){return a("li",{key:t.id,staticClass:"sidebar-item__anchor",staticStyle:{width:"100%"},attrs:{title:t.libName}},[a("a-checkbox",{attrs:{value:t.id,checked:e.checkArr.includes(t.id)},on:{change:function(a){return e.onChange(a,t)}}},[a("span",[a("a-icon",{staticStyle:{"padding-top":"4px"},attrs:{type:"folder-open"}}),e._v(" "+e._s(t.libName)+" ")],1)]),t.childList?a("ul",{staticClass:"sidebar-item__anchors"},e._l(t.childList,(function(t){return a("li",{key:t.id,staticClass:"sidebar-item__anchor",attrs:{title:t.libName}},[a("a-checkbox",{attrs:{value:t.id,checked:e.checkArr.includes(t.id)},on:{change:function(a){return e.onChange(a,t)}}},[a("span",[a("a-icon",{staticStyle:{"padding-top":"4px"},attrs:{type:"folder-open"}}),e._v(" "+e._s(t.libName)+" ")],1)]),a("CatalogueTree",e._g({attrs:{list:t.childList}},e.$listeners))],1)})),0):e._e()],1)})),0)])},i=[],s=a(26490),r={name:"CatalogueTree",props:{list:{type:Array,default:()=>[]}},data(){return{checkArr:[],checkedData:[]}},computed:{...(0,s.rn)({courseId:e=>e.c.courseId})},methods:{onChange(e,t){if(console.log(t),e.target.checked)this.checkArr.push(e.target.value),this.checkedData.push({courseId:this.courseId,libId:t.id,libType:t.libType}),this.$emit("getCheckData",this.checkedData);else{let a=this.checkArr.indexOf(e.target.value);this.checkArr=this.checkArr.filter(((e,t,c)=>e!==c[a])),this.checkedData=this.checkedData.filter((e=>e.libId!==t.id)),this.$emit("getCheckData",this.checkedData)}}}},l=r,n=a(35471),h=(0,n.Z)(l,c,i,!1,null,"3d6f86ce",null),d=h.exports}}]);