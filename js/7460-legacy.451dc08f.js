"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[7460],{73027:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right",style:{height:t.height-20+"px"}},[n("div",[n("CourseChangeTag"),""===t.selectId?n("CourseTimeUse"):t._e(),n("CourseQuesTag"),""===t.selectId?n("CourseDiscussionArea"):[0===t.selectItemData.type?n("TextTag"):t._e(),1===t.selectItemData.type?n("FileTag"):t._e(),2===t.selectItemData.type?n("QuestionTag"):t._e(),n("TagBox",{attrs:{name:"学习要求"}},[n("a-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:10}},[n("a-button",{attrs:{type:0===t.selectItemData.important?"primary":"danger",block:""},on:{click:t.changeImport}},[t._v(" "+t._s(0===t.selectItemData.important?"添加为"+t.getImportantName(t.selectItemData.type):"取消"+t.getImportantName(t.selectItemData.type))+" ")]),2===t.selectItemData.type&&1===t.selectItemData.questionType?n("a-button",{attrs:{type:0===t.selectItemData.isReview?"primary":"danger",block:""},on:{click:t.changeReview}},[t._v(" "+t._s(0===t.selectItemData.isReview?"添加为自阅":"取消自阅")+" ")]):t._e(),n("a-button",{attrs:{type:0===t.selectItemData.discussionArea?"primary":"danger",block:""},on:{click:t.changeDiscussionArea}},[t._v(" "+t._s(0===t.selectItemData.discussionArea?"添加讨论区":"取消讨论区")+" ")])],1)],1)]],2)])},i=[],s=n(4367),c=(n(41539),n(78783),n(33948),n(34553),n(34665)),r={name:"SideRight",components:{CourseChangeTag:function(){return n.e(9595).then(n.bind(n,9595))},CourseTimeUse:function(){return n.e(8287).then(n.bind(n,8287))},TextTag:function(){return n.e(3461).then(n.bind(n,33461))},FileTag:function(){return n.e(9196).then(n.bind(n,9196))},QuestionTag:function(){return n.e(8216).then(n.bind(n,28216))},CourseQuesTag:function(){return n.e(7723).then(n.bind(n,47723))},CourseDiscussionArea:function(){return n.e(7951).then(n.bind(n,67951))}},data:function(){return{}},computed:(0,s.Z)({},(0,c.rn)({height:function(t){return t.height},selectId:function(t){return t.p.selectItem.selectId},selectItemData:function(t){return t.p.selectItemData},contentData:function(t){return t.p.contentData},showDiscussionArea:function(t){return t.p.showDiscussionArea}})),methods:(0,s.Z)((0,s.Z)({},(0,c.nv)("p",["changeCourseDiscussionArea"])),{},{getImportantName:function(t){return 0===t?"重点":1===t?"必办":2===t?"必做":void 0},changeImport:function(){var t=this,e=this.contentData.findIndex((function(e){return e.id===t.selectItemData.id}));this.contentData[e].important=0===this.selectItemData.important?1:0},changeReview:function(){var t=this,e=this.contentData.findIndex((function(e){return e.id===t.selectItemData.id}));this.contentData[e].isReview=0===this.selectItemData.isReview?1:0},changeDiscussionArea:function(){var t=this,e=this.contentData.findIndex((function(e){return e.id===t.selectItemData.id}));this.contentData[e].discussionArea=0===this.selectItemData.discussionArea?1:0}})},o=r,u=n(43736),h=(0,u.Z)(o,a,i,!1,null,"616fe34e",null),l=h.exports}}]);