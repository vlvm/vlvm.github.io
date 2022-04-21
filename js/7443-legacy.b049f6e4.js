"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[7443],{7443:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"quesContent"},[s("a-table",{attrs:{columns:e.columns,"data-source":e.quesData,bordered:"",size:"small",expandIconAsCell:!1,expandIconColumnIndex:-1,"expanded-row-keys":e.expandedRowKeys,pagination:!1,customRow:e.rowClick},on:{"update:expandedRowKeys":function(t){e.expandedRowKeys=t},"update:expanded-row-keys":function(t){e.expandedRowKeys=t},expand:e.onExpand},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return s("div",{staticStyle:{margin:"0"}},[s("div",{staticStyle:{margin:"0"},attrs:{slot:"expandedRowRender"},domProps:{innerHTML:e._s(t.question)},slot:"expandedRowRender"})])}},{key:"scoreRate",fn:function(t){return s("span",{},[e._v(e._s(t)+"%")])}}])})],1)},a=[],u=s(4367),i=(s(40561),s(34665)),o=s(29245),l=[{title:"题号",dataIndex:"num",key:"num"},{title:"题型",dataIndex:"type",key:"type",filters:[{text:"单选",value:"单选"},{text:"不定项",value:"不定项"},{text:"填空",value:"填空"},{text:"简答",value:"简答"}],filterMultiple:!0,onFilter:function(e,t){return t.type===e}},{title:"得分率",dataIndex:"scoreRate",key:"scoreRate",sorter:function(e,t){return e.scoreRate-t.scoreRate},scopedSlots:{customRender:"scoreRate"}},{title:"素养",dataIndex:"accomplishment",key:"accomplishment"},{title:"能力",dataIndex:"ability",key:"ability"},{title:"知识点",dataIndex:"points",key:"points"}],p={name:"ContentQuestion",data:function(){return{leftAlignId:"",expandedRowKeys:[],quesData:o.qk,columns:l}},computed:{},watch:{expandedRowKeys:function(e){this.changeSelectRow(e)}},mounted:function(){this.changeSelectRow(this.expandedRowKeys)},methods:(0,u.Z)((0,u.Z)({},(0,i.nv)("r",["changeSelectRow"])),{},{onExpand:function(){alert("展开行触发事件！")},rowClick:function(e,t){var s=this;return{style:{color:e.key===this.leftAlignId?"#fff":"","background-color":e.key===this.leftAlignId?"#6C7AF0":""},on:{click:function(){if(s.leftAlignId===e.key)s.leftAlignId="",s.expandedRowKeys=[];else if(s.leftAlignId=e.key,s.expandedRowKeys.length>0){var n=s.expandedRowKeys.indexOf(e.key);n>-1?s.expandedRowKeys.splice(n,1):(s.expandedRowKeys.splice(0,s.expandedRowKeys.length),s.expandedRowKeys.push(e.key))}else s.expandedRowKeys.push(e.key);console.log(e,t)}}}}})},c=p,r=s(43736),d=(0,r.Z)(c,n,a,!1,null,"28ab532c",null),b=d.exports},29245:function(e,t,s){s.d(t,{qk:function(){return n},Gn:function(){return a},cc:function(){return u}});var n=[{key:1,num:"1",type:"选择题",scoreRate:80,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:2,num:"2",type:"选择题",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"2",name:"王五",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:3,num:"3",type:"选择题",scoreRate:40,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"3",name:"赵六",score:0},{id:"4",name:"钱七",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:4,num:"4",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"5",name:"孙八",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:5,num:"5",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"6",name:"周九",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:6,num:"6",type:"单选",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"7",name:"吴十",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:7,num:"7",type:"简答",scoreRate:60,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"8",name:"吴1",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"}],a=[{key:1,id:1,stu:"学生b",scoreRate:60,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]},{key:2,id:2,stu:"学生c",scoreRate:30,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]}],u=[{key:1,module:"某某素养",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0},{id:"2",name:"王五",score:0}],scoreRate:80,noScoreCount:1,noScore:"5",lowerScoreRateCount:3,lowerScoreRate:"6.5",higherScoreRateCount:10,higherScoreRate:"10",fullScoreCount:2,fullScore:"1",questionInvolved:"5",question:{}}]}}]);