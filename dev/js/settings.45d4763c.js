"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[5571],{71781:function(e,t,a){a.d(t,{$x:function(){return m},Bd:function(){return s},KB:function(){return b},MK:function(){return h},Ui:function(){return u},W7:function(){return g},Wq:function(){return d},bT:function(){return l},gN:function(){return p},jD:function(){return f},k0:function(){return o},qO:function(){return r},td:function(){return i},zK:function(){return c}});var n=a(98646);function o(e){return(0,n.hi)(Object.assign((0,n.aP)("GET",e),{url:`${n.jz}/api/lib/tree`}))}function i(e){return(0,n.hi)(Object.assign((0,n.aP)("POST",e),{url:`${n.jz}/api/lib/entity`}))}function s(e){return(0,n.hi)(Object.assign((0,n.aP)("PUT",e),{url:`${n.jz}/api/lib/entity`}))}function r(e){return(0,n.hi)(Object.assign((0,n.aP)("DELETE",e),{url:`${n.jz}/api/lib/entity`}))}function l(e,t){return(0,n.hi)(Object.assign((0,n.aP)("GET"),{url:`${n.jz}/api/lib/entities/${e}/${t}`}))}function c(e){return(0,n.hi)(Object.assign((0,n.aP)("POST",e),{url:`${n.jz}/api/calm/course`}))}function u(e,t){return(0,n.hi)(Object.assign((0,n.aP)("DELETE"),{url:`${n.jz}/api/calm/course/${e}/${t}`}))}function d(e){return(0,n.hi)(Object.assign((0,n.aP)("POST",e),{url:`${n.jz}/api/ctlm/text`}))}function m(e){return(0,n.hi)(Object.assign((0,n.aP)("POST",e),{url:`${n.jz}/api/calm/atta`}))}function p(e){return(0,n.hi)(Object.assign((0,n.aP)("POST",e),{url:`${n.jz}/api/cql/question`}))}function h(e,t,a){return(0,n.hi)(Object.assign((0,n.aP)("POST"),{url:`${n.jz}/api/ctlm/text/${e}/${t}/${a}`}))}function f(e,t,a){return(0,n.hi)(Object.assign((0,n.aP)("DELETE"),{url:`${n.jz}/api/calm/atta/${e}/${t}/${a}`}))}function g(e,t,a){return(0,n.hi)(Object.assign((0,n.aP)("DELETE"),{url:`${n.jz}/api/cql/question/${e}/${t}/${a}`}))}function b(e){return(0,n.hi)(Object.assign((0,n.aP)("GET",e),{url:`${n.jz}/api/lib/entities/${e.courseId}/${e.sourceId}/${e.type}`}))}},97525:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("Navigation"),a("div",{staticClass:"view"},[a("div",{staticClass:"settingMenu",style:{height:e.screenHeight-20+"px"}},e._l(e.menuList,(function(t){return a("div",{key:t.id,staticClass:"menuItem",class:{active:t.pathName===e.$route.name},on:{click:function(a){return e.settingMenuClick(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0),a("router-view",{staticClass:"router-view"})],1)],1)},o=[],i={name:"Setting",components:{Navigation:()=>a.e(3661).then(a.bind(a,63661))},data(){return{menuList:[{id:"0",name:"个人信息",path:"/settings/userInfo",pathName:"userInfo"},{id:"1",name:"学生分组",path:"/settings/stuGroup",pathName:"stuGroup"},{id:"2",name:"学生花名册",path:"/settings/stuRoster",pathName:"stuRoster"},{id:"3",name:"老师名单",path:"/settings/teacherList",pathName:"teacherList"},{id:"4",name:"知识蓝图",path:"/settings/tagTree",pathName:"tagTree"}]}},computed:{screenHeight(){return this.$store.state.screenHeight}},methods:{settingMenuClick({path:e}){this.$router.push(e)}}},s=i,r=a(35471),l=(0,r.Z)(s,n,o,!1,null,"da8ca052",null),c=l.exports},80139:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stuGroup"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[e._v("我的分组")]),a("ul",[e._l(e.groupList,(function(t,n){return a("li",{key:t.id,class:{liActive:e.index===n},on:{click:function(t){e.index=n}}},[a("span",{staticClass:"groupName"},[e._v(e._s(t.name))]),a("span",[a("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"edit"}}),a("a-icon",{staticStyle:{"margin-left":"8px",color:"red","font-size":"16px"},attrs:{type:"delete"}})],1)])})),a("a-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"dashed",block:""}},[e._v(" +添加分组 ")])],2)]),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[e._v("分组学生")]),a("a-button",{staticStyle:{float:"right",margin:"15px 10px 15px 0"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"plus"}}),e._v("添加学生 ")],1),a("ul",e._l(e.stuList,(function(t){return a("li",{key:t.id},[a("span",[e._v(e._s(t.name))]),a("span",[e._v("移出该组")])])})),0)],1)])},o=[],i=a(98646);function s(e){return(0,i.hi)(Object.assign((0,i.aP)("GET",e),{url:`${i.jz}/api/student/group/entity`}))}var r={name:"StuGroup",data(){return{index:0,groupList:[{id:"0",name:"高三1班",stuList:[{id:"001",name:"张三"},{id:"002",name:"李四"},{id:"003",name:"王五"},{id:"004",name:"赵六"},{id:"005",name:"钱七"},{id:"006",name:"孙八"}]},{id:"1",name:"高三2班",stuList:[{id:"001",name:"张三"},{id:"002",name:"李四"},{id:"003",name:"王五"},{id:"004",name:"赵六"}]},{id:"2",name:"高三3班",stuList:[{id:"001",name:"张三"},{id:"002",name:"李四"},{id:"003",name:"王五"},{id:"004",name:"赵六"},{id:"005",name:"钱七"},{id:"006",name:"孙八"},{id:"007",name:"周九"},{id:"008",name:"吴十"}]}]}},computed:{stuList(){return this.groupList[this.index].stuList}},mounted(){s().then((e=>{console.log(e)}))}},l=r,c=a(35471),u=(0,c.Z)(l,n,o,!1,null,"53d5553f",null),d=u.exports},75504:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top"},[a("div"),a("div",[a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[a("a-menu-item",{key:"1"},[e._v("史地政小组1 ")]),a("a-menu-item",{key:"2"},[e._v("史地政小组2")]),a("a-menu-item",{key:"3"},[e._v("史地政小组3")])],1),a("a-button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加到分组 "),a("a-icon",{attrs:{type:"down"}})],1)],1),a("a-button",{attrs:{type:"danger"}},[e._v("删除")])],1)]),a("div",{staticClass:"table"},[a("a-table",{attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,customRow:e.customRow,size:"small",pagination:!1},scopedSlots:e._u([{key:"groupType",fn:function(t){return a("span",{},["0"===t.groupType?a("span",{staticStyle:{color:"#f45548"}},[e._v(" 待分组 ")]):e._e(),"1"===t.groupType?a("span",{staticStyle:{color:"#6c7af0"}},[e._v(" 已通过 ")]):e._e()])}}])})],1)])},o=[];const i=[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",dataIndex:"sex",key:"sex"},{title:"学号",dataIndex:"stuNumber",key:"stuNumber"},{title:"学校",key:"school",dataIndex:"school"},{title:"身份证号",dataIndex:"idCard",key:"idCard"},{title:"入学时间",key:"admissionTime",dataIndex:"admissionTime"},{title:"毕业时间",key:"graduationTime",dataIndex:"graduationTime"},{title:"申请时间",key:"applyTime",dataIndex:"applyTime"},{title:"组别",key:"groupType",align:"center",scopedSlots:{customRender:"groupType"}}],s=[{key:"1",name:"John Brown",sex:32,stuNumber:"1122334",school:"北大附中",idCard:"13141232153",admissionTime:"2020-09-01",graduationTime:"2022-09-01",applyTime:"2021-09-01",groupType:"0"},{key:"2",name:"John Brown",sex:32,stuNumber:"1122334",school:"北大附中",idCard:"13141232153",admissionTime:"2020-09-01",graduationTime:"2022-09-01",applyTime:"2021-09-01",groupType:"1"},{key:"3",name:"John Brown",sex:32,stuNumber:"1122334",school:"北大附中",idCard:"13141232153",admissionTime:"2020-09-01",graduationTime:"2022-09-01",applyTime:"2021-09-01",groupType:"0"}];var r={name:"StuRoster",data(){return{data:s,columns:i,selectedRowKeys:[],selectedRows:[]}},computed:{rowSelection(){return{selectedRowKeys:this.selectedRowKeys,onChange:(e,t)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",t),this.selectedRowKeys=e,this.selectedRows=t}}}},methods:{customRow(e,t){return{style:{color:e.remarkDesc?e.remarkDesc.fontColor:"#1E3779","background-color":t%2===0?"#F7FBFE":"#D7ECFD"}}}}},l=r,c=a(35471),u=(0,c.Z)(l,n,o,!1,null,"b5cf543e",null),d=u.exports},93415:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-collapse",{model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.treeData,(function(t,n){return a("a-collapse-panel",{key:n.toString(),attrs:{header:(0===t.libType?"素养":1===t.libType?"能力":"知识点")+"："+t.counts+"个"}},[a("a-button",{attrs:{slot:"extra",size:"small"},on:{click:function(a){return a.stopPropagation(),e.addLabel(t)}},slot:"extra"},[e._v(" 添加根节点 ")]),a("CheckBoxTree",{attrs:{list:t.libDTOList},on:{catalogClick:e.catalogClick,rightClick:e.rightClick}})],1)})),1),0!==e.position.x||0!==e.position.y?a("ul",{staticClass:"menu",style:{left:e.position.x+"px",top:e.position.y+"px"}},[a("li",{on:{click:e.addCatalogue}},[e._v("添加子节点")]),a("li",{on:{click:e.openChangeNameModal}},[e._v("重命名")]),a("li",{on:{click:e.delCatalogue}},[e._v("删除")])]):e._e(),a("a-modal",{attrs:{title:"重命名目录"},on:{ok:e.rename},model:{value:e.catalogueNameModal,callback:function(t){e.catalogueNameModal=t},expression:"catalogueNameModal"}},[a("a-input",{attrs:{placeholder:"请输入目录名称"},model:{value:e.catalogName,callback:function(t){e.catalogName=t},expression:"catalogName"}})],1)],1)},o=[],i=a(71781),s={name:"TagTree",props:{showRightMenu:{type:Boolean,default:!0},showCheckBox:{type:Boolean,default:!1}},components:{CheckBoxTree:()=>a.e(8659).then(a.bind(a,68659))},data(){return{activeKey:["0","1","2"],treeData:[],catalogueNameModal:!1,catalogName:"",position:{x:0,y:0},catalogueData:{}}},mounted(){document.addEventListener("click",this.bodyCloseMenus),(0,i.k0)().then((e=>{console.log(e),this.treeData=e.extra}))},beforeDestroy(){document.removeEventListener("click",this.bodyCloseMenus)},watch:{activeKey(e){console.log(e)}},methods:{loop(e,t,a){for(let n=0;n<e.length;n++){if(e[n].id===t)return a(e[n],n,e);e[n].childList&&this.loop(e[n].childList,t,a)}},bodyCloseMenus(){this.position={x:0,y:0}},openChangeNameModal(){this.catalogueNameModal=!0,this.catalogName=this.catalogueData.catalogName},delCatalogue(){const e=this,{id:t,libName:a}=this.catalogueData;this.$confirm({title:`确认删除【${a}】吗？`,onOk(){(0,i.qO)([t]).then((t=>{t.extra&&(e.$message.success("已删除"),(0,i.k0)().then((t=>{e.treeData=t.extra})))}))},onCancel(){console.log("Cancel")}})},addCatalogue(){const{id:e,libIndex:t,libLevel:a,libNumber:n,libType:o}=this.catalogueData;(0,i.td)({libName:"新建子标签",libParentId:e,libNumber:n,libType:o,libIndex:t+1,libLevel:a+1}).then((()=>{(0,i.k0)().then((e=>{this.treeData=e.extra,this.$message.success("已添加")}))}))},catalogClick(){},rightClick(e,t){this.position=e,this.catalogueData=t},rename(){if(0===this.catalogName.length)return this.$error({title:"目录名称不能为空！",content:"请检查目录并输入目录名称"}),!1;(0,i.Bd)([{id:this.catalogueData.id,libName:this.catalogName,libParentId:this.catalogueData.libParentId,libType:this.catalogueData.libType,libIndex:this.catalogueData.libType,libLevel:this.catalogueData.libLevel}]).then((()=>{(0,i.k0)().then((e=>{this.treeData=e.extra,this.catalogueNameModal=!1,this.$message.success("已修改")}))}))},addLabel(e){(0,i.td)({libName:"新建标签",libParentId:0,libNumber:1,libType:e.libType,libIndex:1,libLevel:1}).then((()=>{(0,i.k0)().then((e=>{this.treeData=e.extra}))}))}}},r=s,l=a(35471),c=(0,l.Z)(r,n,o,!1,null,"d8d6666a",null),u=c.exports},69868:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"topBox"},[e._v(" 添加老师： "),a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号","enter-button":"搜索"},on:{search:e.onSearch}})],1),a("a-button",{attrs:{type:"danger"}},[e._v("删除")])],1),a("div",{staticClass:"table"},[a("a-table",{attrs:{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection,customRow:e.customRow,size:"small",pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t){return a("span",{},["0"===t.action?a("a-button",{attrs:{type:"primary",size:"small"}},[e._v(" 接受 ")]):e._e(),"1"===t.action?a("span",{staticStyle:{color:"#f45548"}},[e._v(" 待验证 ")]):e._e(),"2"===t.action?a("span",{staticStyle:{color:"#007cf1"}},[e._v(" 已通过 ")]):e._e()],1)}}])})],1)])},o=[];const i=[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",dataIndex:"sex",key:"sex"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"学校",key:"school",dataIndex:"school"},{title:"邮箱",key:"email",dataIndex:"email"},{title:"学科",key:"subject",dataIndex:"subject"},{title:"操作",key:"action",align:"center",scopedSlots:{customRender:"action"}}],s=[{key:"1",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",email:"1234568@163.com",subject:"数学",action:"0"},{key:"2",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",email:"1234568@163.com",subject:"数学",action:"1"},{key:"3",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",email:"1234568@163.com",subject:"数学",action:"2"}];var r={name:"TeacherList",data(){return{data:s,columns:i,selectedRowKeys:[],selectedRows:[]}},computed:{rowSelection(){return{selectedRowKeys:this.selectedRowKeys,onChange:(e,t)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",t),this.selectedRowKeys=e,this.selectedRows=t}}}},methods:{onSearch(e){console.log(e)},customRow(e,t){return{style:{color:e.remarkDesc?e.remarkDesc.fontColor:"#1E3779","background-color":t%2===0?"#F7FBFE":"#D7ECFD"}}}}},l=r,c=a(35471),u=(0,c.Z)(l,n,o,!1,null,"67e34dba",null),d=u.exports},97343:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"title"},[e._v("个人信息")]),a("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{ref:"name",attrs:{label:"姓名：",prop:"name"}},[a("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写姓名"},on:{blur:function(){e.$refs.name.onFieldBlur()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("a-form-model-item",{attrs:{label:"性别：",prop:"sex"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 男")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 女")])],1)],1),a("a-form-model-item",{ref:"phone",attrs:{label:"电话：",prop:"phone"}},[a("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写电话"},on:{blur:function(){e.$refs.phone.onFieldBlur()}},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("更换手机号")])],1),a("a-form-model-item",{ref:"phone",attrs:{label:"邮箱",prop:"email"}},[a("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("a-form-model-item",{attrs:{label:"地域：",prop:"address"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择地域"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 地域1")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 地域2")])],1)],1),a("a-form-model-item",{attrs:{label:"学校：",prop:"school"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 学校1")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 学校2")])],1)],1),a("a-form-model-item",{attrs:{label:"学科：",prop:"subject"}},[a("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择学科"},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}},[a("a-select-option",{attrs:{value:"1"}},[e._v(" 学科1")]),a("a-select-option",{attrs:{value:"2"}},[e._v(" 学科2")])],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:2}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 保存设置")])],1)],1),a("div",{staticClass:"title",staticStyle:{"margin-top":"40px"}},[e._v("个人账号")]),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:2}}},[a("div",{staticStyle:{width:"220px","margin-bottom":"10px"}},[a("a-button",{attrs:{type:"primary",block:""}},[e._v(" 修改密码")])],1),a("div",{staticStyle:{width:"220px"}},[a("a-button",{attrs:{type:"danger",block:""}},[e._v(" 退出登录")])],1)])],1)},o=[],i={name:"UserInfo",data(){return{labelCol:{span:2},wrapperCol:{span:20},other:"",form:{name:"张三",sex:"1",phone:"13141232153",email:"123456@foxmail.com",address:"1",school:"1",subject:"1"},rules:{name:[{required:!0,message:"请输入姓名！",trigger:"blur"}],sex:{required:!0,message:"请选择性别！",trigger:"change"},phone:{required:!0,message:"请填写电话！",trigger:"blur"},school:{required:!0,message:"请选择学校！",trigger:"change"},subject:{required:!0,message:"请选择学科！",trigger:"change"}}}},methods:{onSubmit(){this.$refs.ruleForm.validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm(){this.$refs.ruleForm.resetFields()}}},s=i,r=a(35471),l=(0,r.Z)(s,n,o,!1,null,"22285ad1",null),c=l.exports}}]);