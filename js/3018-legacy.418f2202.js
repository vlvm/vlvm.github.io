"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[3018],{53018:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TagBox",{attrs:{name:"课程标签"}},[a("a-dropdown",{staticStyle:{width:"170px","margin-bottom":"3px"},attrs:{disabled:e.isOtherTeacher}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:function(t){return e.handleMenuClick(t,1)}},slot:"overlay"},e._l(e.dataOne,(function(t){return a("a-menu-item",{key:t.id},[e._v(" "+e._s(t.value)+" "),e.arrOne.includes(t.id)?a("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):e._e()],1)})),1),a("a-button",{attrs:{size:"small"}},[e._v(" 素养：")])],1),a("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){e.modalVisible=!0}}},[a("a-icon",{attrs:{type:"plus"}})],1),e.arrOne.length>0?a("ul",{staticClass:"box"},e._l(e.data1,(function(t){return a("li",{key:t.id},[a("a-icon",{attrs:{type:"close-circle"},on:{click:function(a){return e.deleteTarg(1,t.id)}}}),e._v(" "+e._s(t.value)+" ")],1)})),0):e._e(),a("a-dropdown",{staticStyle:{width:"170px",margin:"3px 0"},attrs:{disabled:e.isOtherTeacher}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:function(t){return e.handleMenuClick(t,2)}},slot:"overlay"},e._l(e.dataTwo,(function(t){return a("a-menu-item",{key:t.id},[e._v(" "+e._s(t.value)+" "),e.arrTwo.includes(t.id)?a("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):e._e()],1)})),1),a("a-button",{attrs:{size:"small"}},[e._v(" 能力：")])],1),a("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){e.modalVisible=!0}}},[a("a-icon",{attrs:{type:"plus"}})],1),e.arrTwo.length>0?a("ul",{staticClass:"box"},e._l(e.data2,(function(t){return a("li",{key:t.id},[a("a-icon",{attrs:{type:"close-circle"},on:{click:function(a){return e.deleteTarg(2,t.id)}}}),e._v(" "+e._s(t.value)+" ")],1)})),0):e._e(),a("a-dropdown",{staticStyle:{width:"170px","margin-top":"3px"},attrs:{disabled:e.isOtherTeacher}},[a("a-menu",{attrs:{slot:"overlay"},on:{click:function(t){return e.handleMenuClick(t,3)}},slot:"overlay"},e._l(e.dataThree,(function(t){return a("a-menu-item",{key:t.id},[e._v(" "+e._s(t.value)+" "),e.arrThree.includes(t.id)?a("a-icon",{staticStyle:{color:"green"},attrs:{type:"check"}}):e._e()],1)})),1),a("a-button",{attrs:{size:"small"}},[e._v(" 知识点：")])],1),a("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){e.modalVisible=!0}}},[a("a-icon",{attrs:{type:"plus"}})],1),e.arrThree.length>0?a("ul",{staticClass:"box"},e._l(e.data3,(function(t){return a("li",{key:t.id},[a("a-icon",{attrs:{type:"close-circle"},on:{click:function(a){return e.deleteTarg(3,t.id)}}}),e._v(" "+e._s(t.value)+" ")],1)})),0):e._e()],1),a("a-modal",{attrs:{title:"添加课程标签",width:960},on:{ok:e.handleOk},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("TreeComponent",{attrs:{showCheckBox:"",showRightMenu:!1}})],1)],1)},i=[],n=a(4367),l=(a(41539),a(78783),a(33948),a(57327),a(26699),a(32023),a(40561),a(34665)),s={name:"courseQuesTag",components:{TreeComponent:function(){return a.e(5797).then(a.bind(a,5797))}},data:function(){return{modalVisible:!1,arrOne:[1,2,3],arrTwo:[1,2,3],arrThree:[1,2,3],dataOne:[{id:1,value:"素养1素养1素养1"},{id:2,value:"素养2素养2素养2"},{id:3,value:"素养3素养3素养3"},{id:4,value:"素养4素养4素养4"}],dataTwo:[{id:1,value:"能力1"},{id:2,value:"能力2"},{id:3,value:"能力3"},{id:4,value:"能力4"}],dataThree:[{id:1,value:"知识点1"},{id:2,value:"知识点2"},{id:3,value:"知识点3"},{id:4,value:"知识点4"}]}},computed:(0,n.Z)((0,n.Z)({},(0,l.rn)({isOtherTeacher:function(e){return e.c.isOtherTeacher}})),{},{data1:function(){var e=this;return this.dataOne.filter((function(t){return e.arrOne.includes(t.id)}))},data2:function(){var e=this;return this.dataTwo.filter((function(t){return e.arrTwo.includes(t.id)}))},data3:function(){var e=this;return this.dataThree.filter((function(t){return e.arrThree.includes(t.id)}))}}),methods:{handleOk:function(){this.modalVisible=!1},handleMenuClick:function(e,t){var a=e.key;console.log(a,t),1===t?this.arrOne.includes(a)?this.arrOne.splice(this.arrOne.indexOf(a),1):this.arrOne.push(a):2===t?this.arrTwo.includes(a)?this.arrTwo.splice(this.arrTwo.indexOf(a),1):this.arrTwo.push(a):3===t&&(this.arrThree.includes(a)?this.arrThree.splice(this.arrThree.indexOf(a),1):this.arrThree.push(a))},deleteTarg:function(e,t){1===e?this.arrOne.splice(this.arrOne.indexOf(t),1):2===e?this.arrTwo.splice(this.arrTwo.indexOf(t),1):3===e&&this.arrThree.splice(this.arrThree.indexOf(t),1)}}},o=s,c=a(43736),u=(0,c.Z)(o,r,i,!1,null,"c5cadd98",null),d=u.exports}}]);