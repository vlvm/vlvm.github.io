"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[147],{2147:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quesContent",class:{active:t.selectId===t.data.id&&t.isNoChecking,important:1===t.data.important&&2!==t.data.type},on:{"!click":function(e){return t.questionClick.apply(null,arguments)}}},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.selectId===t.data.id&&t.isNoChecking,expression:"selectId === data.id && isNoChecking"}]},[2===t.data.type?[t.data.relation.length>0?a("li",{on:{click:function(e){return t.menuClick(-1)}}},[t._v("取消关联")]):t._e(),t.relationData.length>1&&0===t.data.relation.length?a("li",{on:{click:function(e){return e.stopPropagation(),t.menuClick("0")}}},[t._v(" 多题关联 ")]):t._e(),a("li",{on:{click:function(e){return t.menuClick("1")}}},[t._v("连续编号")]),a("li",{on:{click:function(e){return t.menuClick("2")}}},[t._v("连续设分")])]:t._e(),a("li",{on:{click:function(e){return t.menuClick("7")}}},[t._v("编辑")])],2),a("div",{staticClass:"item"},["0"===t.editorType&&t.relationData.includes(t.data.id)&&0===t.data.relation.length?a("a-checkbox",{attrs:{lable:"",value:t.data.id,checked:t.contentCheckedArr.includes(t.data.id)},on:{change:function(e){return t.relationChange(e,t.data.id)}}}):t._e(),2!==t.data.type||"1"!==t.editorType&&"2"!==t.editorType?t._e():a("a-checkbox",{attrs:{lable:"",value:t.data.id,checked:t.contentCheckedArr.includes(t.data.id)},on:{change:function(e){return t.numberChange()}}}),"3"===t.editorType?a("a-checkbox",{attrs:{lable:"",value:t.data.id,checked:t.contentCheckedArr.includes(t.data.id)},on:{change:function(e){return t.checkContent(e)}}}):t._e(),0===t.data.type?[a("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.data.ques)}})]:t._e(),1===t.data.type?[a("div",{staticClass:"file"},[a("a-icon",{style:{fontSize:"32px",marginRight:"10px"},attrs:{type:"file-text"}}),t._v(" "+t._s(t.data.ques)+" ")],1)]:t._e(),2===t.data.type?[a("div",{staticClass:"itemContent"},[a("a-tag",[t._v("题号："+t._s(t.data.quesNum))]),a("a-tag",[t._v("分数："+t._s(t.data.point))]),1===t.data.important?a("a-tag",{attrs:{color:"#FF9933"}},[t._v("必做")]):t._e(),1===t.data.isReview?a("a-tag",{attrs:{color:"#FF9933"}},[t._v("自阅")]):t._e(),t.data.relation.length>0?a("a-tag",{attrs:{color:"#FF9933"}},[a("span",{staticClass:"iconfont lx-guanlian",staticStyle:{color:"#fff"}})]):t._e(),a("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.data.ques)}}),a("a-collapse",{attrs:{bordered:!1},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[a("a-collapse-panel",{key:"1"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 已提交6人，未提交4人"),a("a-progress",{attrs:{percent:30}})],1),a("a-card",{attrs:{title:"作答详情",size:"small",bordered:!1}},[0===t.data.questionType?t._l(6,(function(e){return a("div",{key:e,staticClass:"ask"},[a("div",{staticClass:"iconBox"},[t._v("A")]),a("div",[t._v("学生"+t._s(e))])])})):t._e(),1===t.data.questionType?t._l(t.answerData,(function(e){return a("div",{key:e.id,staticClass:"ask"},[a("div",{staticClass:"iconBox",class:{wrong:0===e.state,partially:1===e.state,right:2===e.state}},[0===e.state?a("i",{staticClass:"iconfont lx-wrong"}):t._e(),1===e.state?a("i",{staticClass:"iconfont lx-partially"}):t._e(),2===e.state?a("i",{staticClass:"iconfont lx-right"}):t._e()]),a("div",[t._v(t._s(e.name))])])})):t._e()],2),1===t.data.questionType?a("a-card",{attrs:{title:"作答分享",size:"small",bordered:!1}},t._l(t.shareAnswerData,(function(e){return a("div",{key:e.id,staticClass:"ask"},[a("div",{staticClass:"iconBox",class:{wrong:0===e.state,partially:1===e.state,right:2===e.state}},[0===e.state?a("i",{staticClass:"iconfont lx-wrong"}):t._e(),1===e.state?a("i",{staticClass:"iconfont lx-partially"}):t._e(),2===e.state?a("i",{staticClass:"iconfont lx-right"}):t._e()]),a("div",[t._v(t._s(e.name))])])})),0):t._e()],1)],1)],1)]:t._e()],2),t.data.askData.stuAsk.length>0?a("a-card",{staticStyle:{margin:"10px 0"},attrs:{title:"题问区",size:"small"}},t._l(t.data.askData.stuAsk,(function(e){return a("div",{key:e.id,staticClass:"ask"},[a("div",{staticClass:"iconBox",class:{wrong:0===e.isReply}},[a("a-icon",{attrs:{type:"question"}})],1),a("div",[t._v(t._s(e.name))])])})),0):t._e(),t.data.askData.shareAsk.length>0?a("a-card",{attrs:{title:"题问分享",size:"small"}},t._l(t.data.askData.shareAsk,(function(e){return a("div",{key:e.id,staticClass:"ask"},[a("div",{staticClass:"iconBox",class:{wrong:0===e.isReply}},[a("a-icon",{attrs:{type:"question"}})],1),a("div",[t._v(t._s(e.name))])])})),0):t._e(),1===t.data.discussionArea?a("a-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",icon:"question-circle",size:"small"}},[t._v(" 讨论区 ")]):t._e()],1)},n=[],s=a(34665),c={name:"ContentQuestion",props:{data:{type:Object,required:!0}},data(){return{activeKey:["2"],answerData:[{id:0,name:"学生a",state:0},{id:1,name:"学生b",state:1},{id:2,name:"学生c",state:2},{id:3,name:"学生d",state:0},{id:4,name:"学生e",state:1},{id:5,name:"学生f",state:2}],shareAnswerData:[{id:0,name:"学生a",state:0},{id:1,name:"学生b",state:1},{id:2,name:"学生c",state:2}]}},watch:{activeKey(t){console.log(t)}},computed:{isNoChecking(){return!["0","1","2","3"].includes(this.editorType)},index(){return this.contentData.findIndex((t=>t.id===this.data.id))},...(0,s.rn)({contentData:t=>t.p.contentData,editorType:t=>t.p.selectItem.editorType,selectId:t=>t.p.selectItem.selectId,selectItemData:t=>t.p.selectItem.selectItemData,relationData:t=>t.p.selectItem.relationData,contentCheckedArr:t=>t.p.contentCheckedArr})},methods:{...(0,s.nv)("p",["changeEditorType","changeSelectId","getSelectItemData","replaceContent","changeContentCheckedArr","changeRelationData"]),checkRelation(){let t=this.contentData.slice(this.index).findIndex((t=>2!==t.type));this.changeRelationData(this.contentData.slice(this.index).slice(0,t).map((t=>t.id)))},questionClick(){if(this.selectId===this.data.id||!this.isNoChecking)return this.changeSelectId(""),void this.getSelectItemData({});this.checkRelation(),this.changeSelectId(this.data.id),this.getSelectItemData(this.data)},menuClick(t){let e,{id:a,relation:i,quesNum:n}=this.contentData[this.index];switch(e=i&&i.length>0?this.contentData.map((t=>{if(i.includes(t.id))return t.quesNum})).filter((t=>t)).toString():n,t){case-1:this.changeEditorType(""),this.contentData.forEach((t=>{2===t.type&&t.relation.includes(a)&&(t.relation=[])}));break;case"0":this.changeEditorType(t);break;case"1":this.changeEditorType(t);break;case"2":this.changeEditorType(t);break;case"7":this.changeEditorType(t);break}},relationChange(t,e){let a=this.relationData.findIndex((t=>t===e));this.changeContentCheckedArr(this.relationData.slice(0,a+1))},numberChange(){let t=this.contentData.map(((t,e)=>{if(2===t.type&&e<=this.index)return t.id})).filter((t=>t));this.changeContentCheckedArr(t)},checkContent(t){if(t.target.checked)this.changeContentCheckedArr([...this.contentCheckedArr,this.data.id]);else{let t=this.contentCheckedArr.findIndex((t=>t===this.data.id));this.changeContentCheckedArr(this.contentCheckedArr.splice(t,1))}}}},r=c,l=a(43736),o=(0,l.Z)(r,i,n,!1,null,"a18f4760",null),d=o.exports}}]);