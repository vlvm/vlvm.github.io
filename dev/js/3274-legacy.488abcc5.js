"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[3274],{33274:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TagBox",{attrs:{name:"文字属性"}},[t._v(" 该段文字共有XX个字 ")]),n("TagBox",{attrs:{name:"设置标题"}},[n("a-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:10}},[n("a-button",{attrs:{type:1===t.titleLevel?"danger":"primary",disabled:t.isOtherTeacher,block:""},on:{click:function(e){return t.setTitle(1)}}},[t._v(" "+t._s(1===t.titleLevel?"取消":"")+"设为一级标题 ")]),n("a-button",{staticStyle:{width:"200px","margin-left":"20px"},attrs:{type:2===t.titleLevel?"danger":"primary",disabled:t.isOtherTeacher,block:""},on:{click:function(e){return t.setTitle(2)}}},[t._v(t._s(2===t.titleLevel?"取消":"")+"设为二级标题 ")]),n("a-button",{staticStyle:{width:"180px","margin-left":"40px"},attrs:{type:3===t.titleLevel?"danger":"primary",disabled:t.isOtherTeacher,block:""},on:{click:function(e){return t.setTitle(3)}}},[t._v(t._s(3===t.titleLevel?"取消":"")+"设为三级标题 ")])],1)],1)],1)},c=[],a=n(7204),i=(n(52892),n(26490)),l=n(35462),o={name:"TextTag",computed:(0,a.Z)((0,a.Z)((0,a.Z)({},(0,i.rn)({isOtherTeacher:function(t){return t.c.isOtherTeacher},courseContentId:function(t){return t.c.courseContentId},contentData:function(t){return t.c.contentData}})),(0,i.Se)("c",["courseSelectedItemData"])),{},{titleLevel:function(){return this.courseSelectedItemData.content.titleLevel}}),methods:(0,a.Z)((0,a.Z)({},(0,i.OI)("c",["replaceContent"])),{},{setTitle:function(t){var e=this;(0,l.et)({id:this.courseContentId,titleLevel:this.titleLevel===t?0:t}).then((function(){var n=e.contentData.findIndex((function(t){return t.content.id===e.courseContentId}));e.contentData[n].content.titleLevel=e.titleLevel===t?0:t,e.replaceContent(e.contentData)}))}})},s=o,u=n(35471),d=(0,u.Z)(s,r,c,!1,null,"5cea82a3",null),h=d.exports}}]);