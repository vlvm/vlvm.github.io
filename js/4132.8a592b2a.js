"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[4132],{64132:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right",style:{height:e.height-20+"px"}},["2"!==e.role?a("PublishCourses"):e._e(),a("div",{staticClass:"rightBox",style:{height:e.height-110+"px"}},["1"!==e.role||e.isOtherTeacher?e._e():a("ShareDetails"),"1"===e.role&&e.isOtherTeacher?a("DownloadDetails"):e._e(),a("CourseQuesTag"),""===e.selectId?[a("CreatedCourseContent"),a("CourseLearningNeeds"),a("CourseDiscussionArea")]:[0===e.selectItemData.type?a("TextTag"):e._e(),1===e.selectItemData.type?a("FileTag"):e._e(),2===e.selectItemData.type?a("QuestionTag"):e._e(),a("TagBox",{attrs:{name:"学习要求"}},[a("a-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:10}},[a("a-button",{attrs:{type:0===e.selectItemData.important?"primary":"danger",block:"",disabled:e.isOtherTeacher},on:{click:e.changeImport}},[e._v(" "+e._s(0===e.selectItemData.important?"添加为"+e.getImportantName(e.selectItemData.type):"取消"+e.getImportantName(e.selectItemData.type))+" ")]),2===e.selectItemData.type&&1===e.selectItemData.questionType?a("a-button",{attrs:{type:0===e.selectItemData.isReview?"primary":"danger",block:"",disabled:e.isOtherTeacher},on:{click:e.changeReview}},[e._v(" "+e._s(0===e.selectItemData.isReview?"添加为自阅":"取消自阅")+" ")]):e._e(),a("a-button",{attrs:{type:0===e.selectItemData.discussionArea?"primary":"danger",block:"",disabled:e.isOtherTeacher},on:{click:e.changeDiscussionArea}},[e._v(" "+e._s(0===e.selectItemData.discussionArea?"添加讨论区":"取消讨论区")+" ")])],1)],1)]],2)],1)},i=[],n=a(34665),c={name:"SideRight",components:{PublishCourses:()=>a.e(586).then(a.bind(a,10586)),DownloadDetails:()=>a.e(9191).then(a.bind(a,18317)),ShareDetails:()=>a.e(3027).then(a.bind(a,43027)),CourseQuesTag:()=>a.e(3018).then(a.bind(a,53018)),TextTag:()=>a.e(4391).then(a.bind(a,84391)),FileTag:()=>a.e(6496).then(a.bind(a,76496)),QuestionTag:()=>a.e(7045).then(a.bind(a,17045)),CreatedCourseContent:()=>a.e(4828).then(a.bind(a,44828)),CourseLearningNeeds:()=>a.e(2934).then(a.bind(a,62934)),CourseDiscussionArea:()=>a.e(3799).then(a.bind(a,33799))},data(){return{}},computed:{...(0,n.rn)({height:e=>e.height,role:e=>e.role,isOtherTeacher:e=>e.c.isOtherTeacher,selectId:e=>e.c.selectItem.selectId,selectItemData:e=>e.c.selectItemData,contentData:e=>e.c.contentData,showDiscussionArea:e=>e.c.showDiscussionArea})},methods:{...(0,n.nv)("c",["changeCourseDiscussionArea"]),getImportantName(e){return 0===e?"重点":1===e?"必办":2===e?"必做":void 0},changeImport(){let e=this.contentData.findIndex((e=>e.id===this.selectItemData.id));this.contentData[e].important=0===this.selectItemData.important?1:0},changeReview(){let e=this.contentData.findIndex((e=>e.id===this.selectItemData.id));this.contentData[e].isReview=0===this.selectItemData.isReview?1:0},changeDiscussionArea(){let e=this.contentData.findIndex((e=>e.id===this.selectItemData.id));this.contentData[e].discussionArea=0===this.selectItemData.discussionArea?1:0}}},r=c,o=a(43736),h=(0,o.Z)(r,s,i,!1,null,"68d17d50",null),l=h.exports}}]);