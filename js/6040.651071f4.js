"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[6040],{6040:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("TagBox",{attrs:{name:"创建个性化课程"}},[s("div",{staticClass:"pubCourse"},[0===e.module?s("a-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showModal1=!0}}},[e._v(" 错题重做 ")]):e._e(),1===e.module?s("a-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showModal2=!0}}},[e._v("分层课程 ")]):e._e(),2===e.module?s("a-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showModal3=!0}}},[e._v("分类课程 ")]):e._e()],1)]),s("a-modal",{attrs:{width:1360,closable:!1,centered:""},model:{value:e.showModal1,callback:function(t){e.showModal1=t},expression:"showModal1"}},[s("div",{staticClass:"wrongBox"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[e._v("错题重做 2022年01月20日15：30")]),s("a-table",{attrs:{columns:e.quesColumns,"data-source":e.quesData,"row-selection":e.rowSelection,bordered:"",pagination:!1},scopedSlots:e._u([{key:"scoreRate",fn:function(t){return s("span",{},[e._v(e._s(t)+"%")])}}])})],1),s("div",{staticClass:"right"},[s("div",{staticClass:"title"},[e._v("选择结果")]),s("div",{staticClass:"selectStu"},[s("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.onChange},model:{value:e.stuCheckedList,callback:function(t){e.stuCheckedList=t},expression:"stuCheckedList"}},e._l(e.selectedRows,(function(t){return s("dl",{key:t.key},[s("dt",[e._v("题号："+e._s(t.num))]),s("dd",[s("a-row",e._l(t.stu,(function(t){return s("a-col",{key:t.id,attrs:{span:8}},[s("a-checkbox",{attrs:{value:t.id,defaultChecked:!0}},[e._v(" "+e._s(t.name))])],1)})),1)],1)])})),0)],1)])])]),s("a-modal",{attrs:{width:1360,closable:!1,centered:""},model:{value:e.showModal2,callback:function(t){e.showModal2=t},expression:"showModal2"}},[s("div",{staticClass:"wrongBox"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[e._v("分层课程 2022年01月20日15：30")]),s("a-table",{attrs:{columns:e.personColumns,"data-source":e.personData,"row-selection":e.rowSelection,bordered:"",pagination:!1},scopedSlots:e._u([{key:"scoreRate",fn:function(t){return s("span",{},[e._v(e._s(t)+"%")])}}])})],1),s("div",{staticClass:"right"},[s("div",{staticClass:"title"},[e._v("选择结果")]),e.selectedRows.length>0?s("div",{staticClass:"selectStu"},[s("a-checkbox-group",{staticStyle:{width:"100%"},attrs:{disabled:""},on:{change:e.onChange},model:{value:e.selectedRowKeys,callback:function(t){e.selectedRowKeys=t},expression:"selectedRowKeys"}},[s("dl",[s("dt",[e._v("学生：")]),s("dd",[s("a-row",e._l(e.selectedRows,(function(t){return s("a-col",{key:t.id,attrs:{span:8}},[s("a-checkbox",{attrs:{value:t.id}},[e._v(" "+e._s(t.stu))])],1)})),1)],1)])]),s("dl",[s("dt",[e._v("共同错题：")]),s("dd",[s("a-checkbox",{attrs:{value:"1"}},[e._v("1")]),s("a-checkbox",{attrs:{value:"2"}},[e._v("2")]),s("a-checkbox",{attrs:{value:"3"}},[e._v("3")])],1)])],1):e._e()])])]),s("a-modal",{attrs:{width:1360,closable:!1,centered:""},model:{value:e.showModal3,callback:function(t){e.showModal3=t},expression:"showModal3"}},[s("div",{staticClass:"wrongBox"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[e._v("分类课程 2022年01月20日15：30")]),s("a-table",{attrs:{columns:e.knowledgeColumns,"data-source":e.knowledgeData,"row-selection":e.rowSelection,bordered:"",pagination:!1},scopedSlots:e._u([{key:"scoreRate",fn:function(t){return s("span",{},[e._v(e._s(t)+"%")])}}])})],1),s("div",{staticClass:"right"},[s("div",{staticClass:"title"},[e._v("选择结果")]),e.selectedRows.length>0?s("div",{staticClass:"selectStu"},[e.selectedRows.length>0?s("dl",[s("dt",[e._v("知识模块：")]),e._l(e.selectedRows,(function(t){return s("dd",{key:t.id},[e._v(" "+e._s(t.module)+" ")])}))],2):e._e(),s("a-checkbox-group",{staticStyle:{width:"100%"},attrs:{defaultValue:["0","1","2"]},on:{change:e.onChange}},[s("dl",[s("dt",[e._v("学生"),s("span",{staticStyle:{color:"red"}},[e._v("(低于得分率3人)")]),e._v("：")]),s("dd",e._l(e.selectedRows,(function(t){return s("a-row",{key:t.key},e._l(t.stu,(function(t){return s("a-col",{key:t.id,attrs:{span:8}},[s("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.name))])],1)})),1)})),1)])]),s("dl",[s("dt",[e._v("共同错题：")]),s("dd",[s("a-checkbox",{attrs:{value:"1"}},[e._v("1")])],1)])],1):e._e()])])])],1)},o=[],l=s(34665),n=s(29245);const i=[{title:"学生",dataIndex:"stu"},{title:"得分率",dataIndex:"scoreRate",sorter:(e,t)=>e.scoreRate-t.scoreRate,scopedSlots:{customRender:"scoreRate"}},{title:"知识点1",dataIndex:"rate1"},{title:"知识点2",dataIndex:"rate2"},{title:"知识点3",dataIndex:"rate3"},{title:"知识点4",dataIndex:"rate4"},{title:"素养1",dataIndex:"rate5"},{title:"素养2",dataIndex:"rate6"},{title:"素养3",dataIndex:"rate7"}],c=[{title:"知识模块",dataIndex:"module",key:"module"},{title:"得分率",dataIndex:"scoreRate",key:"scoreRate",sorter:(e,t)=>e.scoreRate-t.scoreRate,scopedSlots:{customRender:"scoreRate"}},{title:"0分",dataIndex:"noScore",key:"noScore",scopedSlots:{customRender:"noScore"}},{title:"低于得分率",dataIndex:"lowerScoreRate",key:"lowerScoreRate",scopedSlots:{customRender:"lowerScoreRate"}},{title:"高于得分率",dataIndex:"higherScoreRate",key:"higherScoreRate",scopedSlots:{customRender:"higherScoreRate"}},{title:"满分",dataIndex:"fullScore",key:"fullScore",scopedSlots:{customRender:"fullScore"}},{title:"涉及题目",dataIndex:"questionInvolved",key:"questionInvolved",scopedSlots:{customRender:"questionInvolved"}}];var d={name:"RedoQuestion",data(){const e=this;return{showModal1:!1,showModal2:!1,showModal3:!1,quesColumns:[{title:"题号",dataIndex:"num",key:"num"},{title:"题型",dataIndex:"type",key:"type",filters:[{text:"单选",value:"单选"},{text:"不定项",value:"不定项"},{text:"填空",value:"填空"},{text:"简答",value:"简答"}],filterMultiple:!0,onFilter:(e,t)=>t.type===e,onFilterDropdownVisibleChange:t=>{t&&(e.selectedRowKeys=[],e.selectedRows=[])}},{title:"得分率",dataIndex:"scoreRate",key:"scoreRate",sorter:(e,t)=>e.scoreRate-t.scoreRate,scopedSlots:{customRender:"scoreRate"}},{title:"难度系数",dataIndex:"coefficient",key:"coefficient"},{title:"区分度",dataIndex:"distinguish",key:"distinguish"},{title:"素养",dataIndex:"accomplishment",key:"accomplishment"},{title:"能力",dataIndex:"ability",key:"ability"},{title:"知识点",dataIndex:"points",key:"points"}],quesData:n.qk,personColumns:i,personData:n.Gn,knowledgeColumns:c,knowledgeData:n.cc,selectedRowKeys:[],selectedRows:[],stuCheckedList:["0","1","2","3","4","5","6","7","8"]}},computed:{rowSelection(){return{selectedRowKeys:this.selectedRowKeys,onChange:(e,t)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",t),this.selectedRowKeys=e,this.selectedRows=t}}},...(0,l.rn)({module:e=>e.r.module})},watch:{module(){this.showModal1=!1,this.showModal2=!1,this.showModal3=!1,this.selectedRows=[],this.selectedRowKeys=[]},quesData:{handler:function(){this.selectedRows=[],this.selectedRowKeys=[]},deep:!0}},methods:{onChange(e){console.log("checked = ",e)}}},u=d,r=s(43736),p=(0,r.Z)(u,a,o,!1,null,"09b2708e",null),b=p.exports},29245:function(e,t,s){s.d(t,{qk:function(){return a},Gn:function(){return o},cc:function(){return l}});let a=[{key:1,num:"1",type:"选择题",scoreRate:80,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:2,num:"2",type:"选择题",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"2",name:"王五",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:3,num:"3",type:"选择题",scoreRate:40,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"3",name:"赵六",score:0},{id:"4",name:"钱七",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:4,num:"4",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"5",name:"孙八",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:5,num:"5",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"6",name:"周九",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:6,num:"6",type:"单选",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"7",name:"吴十",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:7,num:"7",type:"简答",scoreRate:60,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"8",name:"吴1",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"}],o=[{key:1,id:1,stu:"学生b",scoreRate:60,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]},{key:2,id:2,stu:"学生c",scoreRate:30,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]}],l=[{key:1,module:"某某素养",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0},{id:"2",name:"王五",score:0}],scoreRate:80,noScoreCount:1,noScore:"5",lowerScoreRateCount:3,lowerScoreRate:"6.5",higherScoreRateCount:10,higherScoreRate:"10",fullScoreCount:2,fullScore:"1",questionInvolved:"5",question:{}}]}}]);