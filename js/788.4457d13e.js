"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[788],{13788:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"courseContent",style:{height:t.height-("0"===t.role?141:105)+"px"}},[n("draggable",{attrs:{disabled:t.off,filter:".forbid"},on:{start:t.onStart,end:t.onEnd},model:{value:t.contentData,callback:function(e){t.contentData=e},expression:"contentData"}},[n("transition-group",t._l(t.contentData,(function(e){return n("div",{key:e.id,staticClass:"quesBox"},[n("ContentQuestion",{key:e.id,class:e.id===t.selectId?"":"forbid",attrs:{data:e}})],1)})),0)],1),1===t.showDiscussionArea?n("a-button",{attrs:{type:"primary",icon:"question-circle",block:""}},[t._v(" 讨论区 ")]):t._e(),["0","1","2","3"].includes(t.editorType)?n("div",{staticClass:"stateBox"},["0"===t.editorType?n("p",[t._v(" 多题关联后，首题题干将被共享，并统计关联后总分！ ")]):t._e(),"1"===t.editorType?n("p",[t._v(" 请按顺序选择试题，后续试题将按照首题题号，顺序排列 ")]):t._e(),"2"===t.editorType?n("p",[t._v("连续设分后，所选题目分数将和首体分数相同")]):t._e(),n("a-space",{attrs:{size:10}},[n("a-button",{on:{click:t.clearData}},[t._v("取消")]),["0","1","2"].includes(t.editorType)?n("a-button",{attrs:{type:"primary"},on:{click:t.relationTrue}},[t._v(" 确定 ")]):t._e(),"3"===t.editorType?[n("a-button",{attrs:{type:"primary"}},[t._v(" 拷贝 ")]),n("a-button",{attrs:{type:"danger"},on:{click:t.deleteContents}},[t._v(" 删除 ")])]:t._e()],2)],1):t._e()],1)},r=[],i=n(6390),s=n.n(i),o=n(34665),c={name:"ContentBox",components:{draggable:s(),ContentQuestion:()=>n.e(273).then(n.bind(n,72273))},data(){return{}},computed:{off(){return""===this.selectId||["0","1","2","3"].includes(this.editorType)},contentData:{get(){return this.$store.state.c.contentData},set(t){this.replaceContent(t)}},...(0,o.rn)({height:t=>t.height,role:t=>t.role,editorType:t=>t.c.selectItem.editorType,selectId:t=>t.c.selectItem.selectId,relation:t=>t.c.selectItem.relation,showAnswerArea:t=>t.c.showAnswerArea,showDiscussionArea:t=>t.c.showDiscussionArea,contentCheckedArr:t=>t.c.contentCheckedArr})},methods:{...(0,o.nv)("c",["changeEditorType","changeSelectId","replaceContent","changeContentCheckedArr"]),onStart(){this.drag=!0},onEnd(){this.drag=!1,this.changeSelectId("")},relationTrue(){let t=this.contentData.findIndex((t=>t.id===this.contentCheckedArr[0]));if("0"===this.editorType){let t=JSON.parse(JSON.stringify(this.contentData));t.forEach((t=>{-1!==this.contentCheckedArr.indexOf(t.id)&&(t.relation=this.contentCheckedArr)})),this.replaceContent(t),this.clearData()}else if("1"===this.editorType){let e=JSON.parse(JSON.stringify(this.contentData)),n=e[t].quesNum;e.forEach((t=>{this.contentCheckedArr.includes(t.id)&&(t.quesNum=n++)})),this.replaceContent(e),this.clearData()}else if("2"===this.editorType){let e=JSON.parse(JSON.stringify(this.contentData));e.forEach((e=>{this.contentCheckedArr.includes(e.id)&&(e.point=this.contentData[t].point)})),this.replaceContent(e),this.clearData()}},deleteContents(){this.$confirm({title:"是否确定要删除所选内容?",content:"内容删除后不可恢复，您是否确定删除内容？",okText:"删除",maskClosable:!0,okType:"danger",cancelText:"取消",onOk:()=>{this.replaceContent(this.contentData.filter((t=>!this.contentCheckedArr.includes(t.id)))),this.clearData()},onCancel:()=>{console.log("Cancel")}})},clearData(){this.changeEditorType(""),this.changeSelectId(""),this.changeContentCheckedArr([])}}},l=c,d=n(43736),h=(0,d.Z)(l,a,r,!1,null,"265f9dff",null),p=h.exports}}]);