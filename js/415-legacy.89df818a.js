"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[415],{60415:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quesContent"},[s("a-table",{attrs:{columns:t.columns.filter((function(t,e){return e<=7})),"data-source":t.personData,rowKey:function(t,e){return e},bordered:"",size:"small",expandIconAsCell:!1,expandIconColumnIndex:-1,"expanded-row-keys":t.expandedRowKeys,pagination:!1,customRow:t.rowClick},on:{"update:expandedRowKeys":function(e){t.expandedRowKeys=e},"update:expanded-row-keys":function(e){t.expandedRowKeys=e}},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e){return s("div",{staticStyle:{margin:"0"}},[s("ul",{staticStyle:{margin:"0"}},t._l(e.data,(function(e){return s("li",{key:e.id},[s("span",{staticStyle:{color:"#6c7af0"}},[t._v(" "+t._s(e.name)+" ")]),t._v(" :"+t._s(e.text)+"    "+t._s(e.rate)+" ")])})),0)])}},{key:"scoreRate",fn:function(e){return s("span",{},[t._v(t._s(e)+"%")])}},t._l(t.customTitleList,(function(e,a){return{key:e.slot,fn:function(e){return s("span",{key:a},[t._v(t._s(e)+"%")])}}}))],null,!0)},t._l(t.customTitleList.filter((function(t,e){return e<=7})),(function(e,a){return s("span",{key:a,attrs:{slot:e.slot},slot:e.slot},[e.title.length<6?s("span",[t._v(t._s(e.title))]):s("a-tooltip",{attrs:{placement:"topLeft",title:e.title}},[s("span",[t._v(t._s(e.title.slice(0,6)+"..."))])])],1)})),0),s("a-table",{staticStyle:{"margin-top":"50px"},attrs:{columns:t.columns,"data-source":t.personDataElse,rowKey:function(t,e){return e},pagination:!1,bordered:"",size:"small",customRow:t.rowClick,scroll:{x:850,y:300}},scopedSlots:t._u([{key:"scoreRate",fn:function(e){return s("span",{},[t._v(t._s(e)+"%")])}},t._l(t.customTitleList,(function(e,a){return{key:e.slot,fn:function(e){return s("span",{key:a},[t._v(t._s(e)+"%")])}}}))],null,!0)},t._l(t.customTitleList,(function(e,a){return s("span",{key:a,attrs:{slot:e.slot},slot:e.slot},[e.title.length<6?s("span",[t._v(t._s(e.title))]):s("a-tooltip",{attrs:{placement:"topLeft",title:e.title}},[s("span",[t._v(t._s(e.title.slice(0,6)+"..."))])])],1)})),0)],1)},n=[],o=s(4367),l=(s(40561),s(34665)),r=s(29245),i=[{title:"学生",dataIndex:"stu",width:100},{title:"得分率",dataIndex:"scoreRate",sorter:function(t,e){return t.scoreRate-e.scoreRate},scopedSlots:{customRender:"scoreRate"},width:80},{dataIndex:"rate1",width:100,slots:{title:"rate1"},scopedSlots:{customRender:"rate1"}},{dataIndex:"rate2",width:100,slots:{title:"rate2"},scopedSlots:{customRender:"rate2"}},{dataIndex:"rate3",width:100,slots:{title:"rate3"},scopedSlots:{customRender:"rate3"}},{dataIndex:"rate4",width:100,slots:{title:"rate4"},scopedSlots:{customRender:"rate4"}},{dataIndex:"rate5",width:100,slots:{title:"rate5"},scopedSlots:{customRender:"rate5"}},{dataIndex:"rate6",width:100,slots:{title:"rate6"},scopedSlots:{customRender:"rate6"}},{dataIndex:"rate7",width:100,slots:{title:"rate7"},scopedSlots:{customRender:"rate7"}},{dataIndex:"rate8",width:100,slots:{title:"rate8"},scopedSlots:{customRender:"rate8"}},{dataIndex:"rate9",width:100,slots:{title:"rate9"},scopedSlots:{customRender:"rate9"}},{dataIndex:"rate10",width:100,slots:{title:"rate10"},scopedSlots:{customRender:"rate10"}},{dataIndex:"rate11",width:100,slots:{title:"rate11"},scopedSlots:{customRender:"rate11"}},{dataIndex:"rate12",width:100,slots:{title:"rate12"},scopedSlots:{customRender:"rate12"}}],u=[{slot:"rate1",title:"1.1.1知识点1"},{slot:"rate2",title:"1.1.2知识点2"},{slot:"rate3",title:"1.1.3知识点3"},{slot:"rate4",title:"1.1.4知识点4"},{slot:"rate5",title:"素养1"},{slot:"rate6",title:"1.2.2素养2"},{slot:"rate7",title:"1.2.3素养3"},{slot:"rate8",title:"1.2.4素养4"},{slot:"rate9",title:"1.3.1能力1"},{slot:"rate10",title:"1.3.2能力2"},{slot:"rate11",title:"1.3.3能力3"},{slot:"rate12",title:"1.3.4能力4"}],c={name:"ContentQuestion",data:function(){return{leftAlignId:"",expandedRowKeys:[],personData:r.Gn,personDataElse:r._r,columns:i,customTitleList:u}},computed:{},watch:{expandedRowKeys:function(t){this.changeSelectRow(t)}},mounted:function(){this.changeSelectRow(this.expandedRowKeys)},methods:(0,o.Z)((0,o.Z)({},(0,l.nv)("r",["changeSelectRow"])),{},{rowClick:function(t,e){var s=this;return{style:{color:e===this.leftAlignId?"#fff":"","background-color":e===this.leftAlignId?"#6C7AF0":""},on:{click:function(){if(s.leftAlignId===e)s.leftAlignId="",s.expandedRowKeys=[];else if(s.leftAlignId=e,s.expandedRowKeys.length>0){var a=s.expandedRowKeys.indexOf(e);a>-1?s.expandedRowKeys.splice(a,1):(s.expandedRowKeys.splice(0,s.expandedRowKeys.length),s.expandedRowKeys.push(e))}else s.expandedRowKeys.push(e);console.log(t,e)}}}}})},d=c,p=s(43736),b=(0,p.Z)(d,a,n,!1,null,"c1911db4",null),m=b.exports},29245:function(t,e,s){s.d(e,{qk:function(){return a},Gn:function(){return n},_r:function(){return o},cc:function(){return l}});var a=[{key:1,num:"1",type:"选择题",scoreRate:80,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:2,num:"2",type:"选择题",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"2",name:"王五",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:3,num:"3",type:"选择题",scoreRate:40,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"3",name:"赵六",score:0},{id:"4",name:"钱七",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:4,num:"4",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"5",name:"孙八",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:5,num:"5",type:"选择题",scoreRate:70,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"6",name:"周九",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:6,num:"6",type:"单选",scoreRate:50,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"7",name:"吴十",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"},{key:7,num:"7",type:"简答",scoreRate:60,coefficient:"0.8",distinguish:"6.5",accomplishment:"1",ability:"3",points:"5",stu:[{id:"8",name:"吴1",score:0}],question:"<p>3.下列与含氯化合物有关的说法正确的是</p><p>A. HClO是弱酸，所以NaClO是弱电解质</p><p>B. 向沸水中逐滴加入少量饱和FeCl<sub>3</sub>溶液，可制得Fe(OH)<sub>3</sub>胶体</p><p>C. HCl溶液和NaCl溶液均通过离子导电，所以HCl和NaCl均是离子化合物</p><p>D. 电解NaCl溶液得到22.4LH<sub>2</sub>(标准状况)，理论上需要转移N<sub>A</sub>个电子(N<sub>A</sub>表示阿伏加德罗常数)</p>"}],n=[{id:1,stu:"学生b",scoreRate:60,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]},{id:2,stu:"学生c",scoreRate:30,rate1:40,rate2:60,rate3:50,rate4:80,rate5:70,rate6:20,rate7:20,data:[{id:"0",name:"知识点知识点1",text:"某某知识点",rate:10},{id:"1",name:"知识点2",text:"某某知识点",rate:20},{id:"2",name:"知识点知识点3",text:"某某知识点",rate:50},{id:"3",name:"知识点4",text:"某某知识点",rate:30}]}],o=[{id:0,stu:"学生1",scoreRate:50,rate1:40,rate2:60,rate3:40,rate4:60,rate5:40,rate6:60,rate7:40,rate8:60,rate9:40,rate10:60,rate11:40,rate12:60},{id:1,stu:"学生2",scoreRate:90,rate1:40,rate2:60,rate3:40,rate4:60,rate5:40,rate6:60,rate7:40,rate8:60,rate9:40,rate10:60,rate11:40,rate12:60}],l=[{key:1,module:"某某素养",stu:[{id:"0",name:"张三",score:0},{id:"1",name:"李四",score:0},{id:"2",name:"王五",score:0}],scoreRate:80,noScoreCount:1,noScore:"5",lowerScoreRateCount:3,lowerScoreRate:"6.5",higherScoreRateCount:10,higherScoreRate:"10",fullScoreCount:2,fullScore:"1",questionInvolved:"5",question:{}}]}}]);