"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[8779],{71781:function(t,e,i){i.d(e,{$x:function(){return d},Bd:function(){return a},KB:function(){return y},MK:function(){return p},Ui:function(){return l},W7:function(){return m},Wq:function(){return h},bT:function(){return c},gN:function(){return b},jD:function(){return T},k0:function(){return n},qO:function(){return o},td:function(){return r},zK:function(){return u}});var s=i(98646);function n(t){return(0,s.hi)(Object.assign((0,s.aP)("GET",t),{url:`${s.jz}/api/lib/tree`}))}function r(t){return(0,s.hi)(Object.assign((0,s.aP)("POST",t),{url:`${s.jz}/api/lib/entity`}))}function a(t){return(0,s.hi)(Object.assign((0,s.aP)("PUT",t),{url:`${s.jz}/api/lib/entity`}))}function o(t){return(0,s.hi)(Object.assign((0,s.aP)("DELETE",t),{url:`${s.jz}/api/lib/entity`}))}function c(t,e){return(0,s.hi)(Object.assign((0,s.aP)("GET"),{url:`${s.jz}/api/lib/entities/${t}/${e}`}))}function u(t){return(0,s.hi)(Object.assign((0,s.aP)("POST",t),{url:`${s.jz}/api/calm/course`}))}function l(t,e){return(0,s.hi)(Object.assign((0,s.aP)("DELETE"),{url:`${s.jz}/api/calm/course/${t}/${e}`}))}function h(t){return(0,s.hi)(Object.assign((0,s.aP)("POST",t),{url:`${s.jz}/api/ctlm/text`}))}function d(t){return(0,s.hi)(Object.assign((0,s.aP)("POST",t),{url:`${s.jz}/api/calm/atta`}))}function b(t){return(0,s.hi)(Object.assign((0,s.aP)("POST",t),{url:`${s.jz}/api/cql/question`}))}function p(t,e,i){return(0,s.hi)(Object.assign((0,s.aP)("POST"),{url:`${s.jz}/api/ctlm/text/${t}/${e}/${i}`}))}function T(t,e,i){return(0,s.hi)(Object.assign((0,s.aP)("DELETE"),{url:`${s.jz}/api/calm/atta/${t}/${e}/${i}`}))}function m(t,e,i){return(0,s.hi)(Object.assign((0,s.aP)("DELETE"),{url:`${s.jz}/api/cql/question/${t}/${e}/${i}`}))}function y(t){return(0,s.hi)(Object.assign((0,s.aP)("GET",t),{url:`${s.jz}/api/lib/entities/${t.courseId}/${t.sourceId}/${t.type}`}))}},8779:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TagBox",{attrs:{name:"课程标签"}},[i("a-dropdown",{staticStyle:{width:"170px","margin-bottom":"3px"},attrs:{disabled:t.isOtherTeacher}},[i("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){return t.handleMenuClick(e,0)}},slot:"overlay"},[t._l(t.course0,(function(e,s){return i("a-menu-item",{key:s},[t._v(" "+t._s(e.libName)+" ")])})),0===t.course0.length?i("a-menu-item",[t._v("暂无数据")]):t._e()],2),i("a-button",{attrs:{size:"small"}},[t._v(" 素养：")])],1),i("a-button",{attrs:{size:"small",disabled:t.isOtherTeacher},on:{click:function(e){return t.openModal(0)}}},[i("a-icon",{attrs:{type:"plus"}})],1),t.literacy.length>0?i("ul",{staticClass:"box"},t._l(t.literacy,(function(e,s){return i("li",{key:s},[i("a-icon",{attrs:{type:"close-circle"},on:{click:function(i){return t.deleteTarg(0,e.id)}}}),t._v(" "+t._s(e.libName)+" ")],1)})),0):i("div",[t._v("暂无数据")]),i("a-dropdown",{staticStyle:{width:"170px",margin:"3px 0"},attrs:{disabled:t.isOtherTeacher}},[i("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){return t.handleMenuClick(e,1)}},slot:"overlay"},[t._l(t.course1,(function(e,s){return i("a-menu-item",{key:s},[t._v(" "+t._s(e.libName)+" ")])})),0===t.course1.length?i("a-menu-item",[t._v("暂无数据")]):t._e()],2),i("a-button",{attrs:{size:"small"}},[t._v(" 能力：")])],1),i("a-button",{attrs:{size:"small",disabled:t.isOtherTeacher},on:{click:function(e){return t.openModal(1)}}},[i("a-icon",{attrs:{type:"plus"}})],1),t.ability.length>0?i("ul",{staticClass:"box"},t._l(t.ability,(function(e,s){return i("li",{key:s},[i("a-icon",{attrs:{type:"close-circle"},on:{click:function(i){return t.deleteTarg(1,e.id)}}}),t._v(" "+t._s(e.libName)+" ")],1)})),0):i("div",[t._v("暂无数据")]),i("a-dropdown",{staticStyle:{width:"170px","margin-top":"3px"},attrs:{disabled:t.isOtherTeacher}},[i("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){return t.handleMenuClick(e,2)}},slot:"overlay"},[t._l(t.course2,(function(e,s){return i("a-menu-item",{key:s},[t._v(" "+t._s(e.libName)+" ")])})),0===t.course2.length?i("a-menu-item",[t._v("暂无数据")]):t._e()],2),i("a-button",{attrs:{size:"small"}},[t._v(" 知识点：")])],1),i("a-button",{attrs:{size:"small",disabled:t.isOtherTeacher},on:{click:function(e){return t.openModal(2)}}},[i("a-icon",{attrs:{type:"plus"}})],1),t.knowledge.length>0?i("ul",{staticClass:"box"},t._l(t.knowledge,(function(e,s){return i("li",{key:s},[i("a-icon",{attrs:{type:"close-circle"},on:{click:function(i){return t.deleteTarg(2,e.id)}}}),t._v(" "+t._s(e.libName)+" ")],1)})),0):i("div",[t._v("暂无数据")])],1),i("a-modal",{attrs:{title:"选择蓝图",width:960},on:{ok:t.handleOk},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[t.modalVisible?i("TreeComponent",{ref:"checkTag",attrs:{type:t.type}}):t._e()],1)],1)},n=[],r=i(26490),a=i(71781),o={name:"courseQuesTag",components:{TreeComponent:()=>i.e(250).then(i.bind(i,90250))},data(){return{modalVisible:!1,type:0,course0:[],course1:[],course2:[],literacyData:[],abilityData:[],knowledgeData:[]}},computed:{...(0,r.rn)({isOtherTeacher:t=>t.c.isOtherTeacher,courseId:t=>t.c.courseId,courseContentId:t=>t.c.courseContentId}),...(0,r.Se)("c",["courseSelectedItemData"]),literacy(){return""===this.courseContentId?this.course0:this.literacyData},ability(){return""===this.courseContentId?this.course1:this.abilityData},knowledge(){return""===this.courseContentId?this.course2:this.knowledgeData}},watch:{courseContentId(t){""===t?((0,a.bT)(this.courseId,0).then((t=>{this.course0=t.extra})),(0,a.bT)(this.courseId,1).then((t=>{this.course1=t.extra})),(0,a.bT)(this.courseId,2).then((t=>{this.course2=t.extra}))):this.getCourseTextLabelList()},courseId(t,e){console.log(t,e),""===this.courseContentId?((0,a.bT)(this.courseId,0).then((t=>{this.course0=t.extra})),(0,a.bT)(this.courseId,1).then((t=>{this.course1=t.extra})),(0,a.bT)(this.courseId,2).then((t=>{this.course2=t.extra}))):0===this.courseSelectedItemData.contentType?this.getCourseTextLabelList():(1===this.courseSelectedItemData.contentType||2===this.courseSelectedItemData.contentType)&&(this.literacyData=[],this.abilityData=[],this.knowledgeData=[])}},mounted(){(0,a.bT)(this.courseId,0).then((t=>{this.course0=t.extra})),(0,a.bT)(this.courseId,1).then((t=>{this.course1=t.extra})),(0,a.bT)(this.courseId,2).then((t=>{this.course2=t.extra}))},methods:{handleOk(){(0,a.zK)(this.$refs.checkTag.checkData).then((()=>{(0,a.bT)(this.courseId,this.type).then((t=>{0===this.type?this.course0=t.extra:1===this.type?this.course1=t.extra:2===this.type&&(this.course2=t.extra),this.modalVisible=!1}))}))},openModal(t){this.type=t,this.modalVisible=!0},handleMenuClick({key:t},e){if(""===this.courseContentId)return;const i=e=>{(0,a.Wq)([{courseId:this.courseId,courseTextId:this.courseContentId,libId:this[`course${e}`][t].id,courseTextLibType:e}]).then((()=>{this.getCourseTextLabelList()}))},s=e=>{(0,a.$x)([{courseId:this.courseId,attachmentId:this.courseContentId,libId:this[`course${e}`][t].id,libType:e}]).then((()=>{this.getCourseTextLabelList()}))},n=e=>{(0,a.gN)([{courseId:this.courseId,questionId:this.courseContentId,libId:this[`course${e}`][t].id,libType:e}]).then((()=>{this.getCourseTextLabelList()}))};0===this.courseSelectedItemData.contentType?i(e):1===this.courseSelectedItemData.contentType?s(e):2===this.courseSelectedItemData.contentType&&n(e)},deleteTarg(t,e){""===this.courseContentId?(0,a.Ui)(this.courseId,e).then((()=>{(0,a.bT)(this.courseId,t).then((e=>{this[`course${t}`]=e.extra}))})):0===this.courseSelectedItemData.contentType?(0,a.MK)(this.courseId,this.courseContentId,e).then((()=>{this.getCourseTextLabelList()})):1===this.courseSelectedItemData.contentType?(0,a.jD)(this.courseId,this.courseContentId,e).then((()=>{this.getCourseTextLabelList()})):2===this.courseSelectedItemData.contentType&&(0,a.W7)(this.courseId,this.courseContentId,e).then((()=>{this.getCourseTextLabelList()}))},getCourseTextLabelList(){for(let t=0;t<3;t++)(0,a.KB)({courseId:this.courseId,sourceId:this.courseContentId,sourceType:this.courseSelectedItemData.contentType,type:t}).then((e=>{0===t?this.literacyData=e.extra:1===t?this.abilityData=e.extra:2===t&&(this.knowledgeData=e.extra)}))},getTagData(t){return 0===t?""===this.courseContentId?this.course0:this.literacyData:1===t?""===this.courseContentId?this.course1:this.abilityData:2===t?""===this.courseContentId?this.course2:this.knowledgeData:void 0}}},c=o,u=i(35471),l=(0,u.Z)(c,s,n,!1,null,"7f69d12a",null),h=l.exports}}]);