"use strict";(self["webpackChunkstu_project"]=self["webpackChunkstu_project"]||[]).push([[571],{97073:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mySetting"},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{ref:"name",attrs:{label:"姓名：",prop:"name"}},[r("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写姓名"},on:{blur:function(){e.$refs.name.onFieldBlur()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("a-form-model-item",{attrs:{label:"性别：",prop:"sex"}},[r("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[r("a-select-option",{attrs:{value:"1"}},[e._v(" 男")]),r("a-select-option",{attrs:{value:"2"}},[e._v(" 女")])],1)],1),r("a-form-model-item",{ref:"stuNumber",attrs:{label:"学号",prop:"stuNumber"}},[r("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写学号"},model:{value:e.form.stuNumber,callback:function(t){e.$set(e.form,"stuNumber",t)},expression:"form.stuNumber"}})],1),r("a-form-model-item",{attrs:{label:"学校：",prop:"school"}},[r("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择学校"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}},[r("a-select-option",{attrs:{value:"1"}},[e._v(" 学校1")]),r("a-select-option",{attrs:{value:"2"}},[e._v(" 学校2")])],1)],1),r("a-form-model-item",{ref:"IdNumber",attrs:{label:"身份证号",prop:"IdNumber"}},[r("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写身份证号"},model:{value:e.form.IdNumber,callback:function(t){e.$set(e.form,"IdNumber",t)},expression:"form.IdNumber"}})],1),r("a-form-model-item",{attrs:{label:"入学时间：",prop:"startTime"}},[r("a-month-picker",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择入学时间"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),r("a-form-model-item",{attrs:{label:"毕业时间：",prop:"startTime"}},[r("a-month-picker",{staticStyle:{width:"220px"},attrs:{placeholder:"请选毕业时间"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),r("a-form-model-item",{ref:"phone",attrs:{label:"手机号：",prop:"phone"}},[r("a-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写电话",type:"tel"},on:{blur:function(){e.$refs.phone.onFieldBlur()}},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("更换手机号")])],1),r("a-form-model-item",{attrs:{label:"账号有效期:"}},[r("span",{staticStyle:{color:"#6b79f0"}},[e._v("2022-10-22")])]),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:3}}},[r("a-space",{staticStyle:{width:"220px"},attrs:{direction:"vertical",size:12}},[r("a-button",{attrs:{type:"primary",block:""},on:{click:e.onSubmit}},[e._v(" 保存设置 ")]),r("a-button",{attrs:{type:"primary",block:""}},[e._v(" 修改密码 ")]),r("a-button",{attrs:{type:"danger",block:""}},[e._v(" 退出登录 ")])],1)],1)],1)],1)},o=[],s={name:"MySetting",data:function(){return{labelCol:{span:4},wrapperCol:{span:20},other:"",form:{name:"",sex:"1",stuNumber:"",school:"1",IdNumber:"",startTime:"",endTime:"",phone:""},rules:{name:[{required:!0,message:"请输入姓名！",trigger:"blur"}],sex:{required:!0,message:"请选择性别！",trigger:"change"},school:{required:!0,message:"请选择学校！",trigger:"change"},stuNumber:{required:!0,message:"请输入学号！",trigger:"blur"},IdNumber:{required:!0,message:"请输入身份证号！",trigger:"blur"},startTime:{required:!0,message:"请选择入学时间！",trigger:"change"},endTime:{required:!0,message:"请选择毕业时间！",trigger:"change"},phone:{required:!0,message:"请输入写电话！",trigger:"blur"}}}},methods:{onSubmit:function(){this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},n=s,l=r(35471),i=(0,l.Z)(n,a,o,!1,null,"23032950",null),c=i.exports},22537:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"myTeachers"},[r("div",{staticClass:"topBox"},[e._v(" 添加老师： "),r("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入手机号","enter-button":"添加"},on:{search:e.onSearch}})],1),r("a-table",{attrs:{columns:e.columns,"data-source":e.data,customRow:e.customRow,size:"small",pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t){return r("span",{},["0"===t.action?r("span",{staticStyle:{color:"#f45548"}},[e._v(" 待验证 ")]):e._e(),"1"===t.action?r("span",{staticStyle:{color:"#007cf1"}},[e._v(" 已通过 ")]):e._e()])}}])})],1)},o=[],s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",dataIndex:"sex",key:"sex"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"学校",key:"school",dataIndex:"school"},{title:"学科",key:"subject",dataIndex:"subject"},{title:"操作",key:"action",align:"center",scopedSlots:{customRender:"action"}}],n=[{key:"1",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",subject:"数学",action:"0"},{key:"2",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",subject:"数学",action:"0"},{key:"3",name:"John Brown",sex:32,phone:"13141232153",school:"北大附中",subject:"数学",action:"1"}],l={name:"MyTeachers",data:function(){return{data:n,columns:s,selectedRowKeys:[],selectedRows:[]}},methods:{onSearch:function(e){console.log(e)},customRow:function(e,t){return{style:{color:e.remarkDesc?e.remarkDesc.fontColor:"#1E3779","background-color":t%2===0?"#F7FBFE":"#D7ECFD"}}}}},i=l,c=r(35471),m=(0,c.Z)(i,a,o,!1,null,"24578fa4",null),u=m.exports},74215:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"nav"},[r("div",{staticClass:"put",on:{click:function(t){e.showNav=!e.showNav}}},[r("a-icon",{attrs:{type:e.showNav?"left":"right"}})],1),r("Navigation",{staticStyle:{"margin-right":"10px"}}),e.showNav?r("div",{staticClass:"treeBox"},[r("div",{staticClass:"folder"},[r("div",{staticClass:"folderName",class:{active:"/settings/mySetting"===e.$route.path},on:{click:function(t){return e.$router.push("/settings/mySetting")}}},[e._v(" 个人设置 ")]),r("div",{staticClass:"folderName",class:{active:"/settings/myTeachers"===e.$route.path},on:{click:function(t){return e.$router.push("/settings/myTeachers")}}},[e._v(" 我的老师 ")])])]):e._e()],1),r("div",{staticClass:"router-view",class:{flex:!e.showNav}},[r("router-view")],1)])},o=[],s=(r(21206),r(68428),r(58742),{name:"Settings",components:{Navigation:function(){return r.e(858).then(r.bind(r,65571))}},data:function(){return{showNav:!0}},mounted:function(){}}),n=s,l=r(35471),i=(0,l.Z)(n,a,o,!1,null,"63abea5d",null),c=i.exports}}]);