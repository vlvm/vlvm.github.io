(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-35597898"],{"06c4":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("59cd"),r("ef16"),r("4f4e"),r("1945"),r("2f07"),r("64de");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"644f":function(e,t,r){"use strict";r.d(t,"v",(function(){return u})),r.d(t,"j",(function(){return d})),r.d(t,"w",(function(){return m})),r.d(t,"t",(function(){return f})),r.d(t,"x",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"s",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"k",(function(){return v})),r.d(t,"u",(function(){return I})),r.d(t,"r",(function(){return y})),r.d(t,"i",(function(){return O})),r.d(t,"y",(function(){return w})),r.d(t,"z",(function(){return L})),r.d(t,"g",(function(){return j})),r.d(t,"p",(function(){return k})),r.d(t,"c",(function(){return S})),r.d(t,"l",(function(){return F})),r.d(t,"m",(function(){return P})),r.d(t,"d",(function(){return D})),r.d(t,"q",(function(){return M})),r.d(t,"h",(function(){return x})),r.d(t,"f",(function(){return C})),r.d(t,"o",(function(){return _})),r.d(t,"e",(function(){return $})),r.d(t,"n",(function(){return R}));var n=r("06c4"),o=(r("3b32"),r("b775")),a={tenantId:"002",orgId:"567",garde:JSON.parse(localStorage.getItem("stuGradeId"))},i=a.tenantId,s=a.orgId,l=a.garde,c="".concat(i,"/").concat(s,"/").concat(l);function u(e){return Object(o.a)({url:"/reportCustom/queryDutyInfoByOrgId?tenantId=".concat(i,"&orgId=").concat(s),method:"get",params:e})}function d(e){return Object(o.a)({url:"/dictProcesselement/initProcesselementList",method:"get",params:e})}function m(e){return Object(o.a)({url:"/reportCustom/queryPostUserInfoByEs",method:"get",params:{tenantId:i,orgId:s}})}function f(e){return Object(o.a)({url:"/reportProcessRelease/insertReportProcessRelease",method:"post",data:Object(n.a)({tenantId:i,orgId:s,grade:l},e)})}function p(){return Object(o.a)({url:"/reportProcess/reportProcessList",method:"get",params:{tenantId:i,orgId:s,grade:l}})}function b(e){return Object(o.a)({url:"/dictProcesselement/dictProcesselementList",method:"get",params:Object(n.a)({tenantId:i,orgId:s,grade:l},e)})}function g(e){return Object(o.a)({url:"/reportProcess/insertReportProcess",method:"post",data:Object(n.a)({tenantId:i,orgId:s,grade:l},e)})}function h(){return Object(o.a)({url:"/dictCollection/dictCollectionList",method:"get",params:{tenantId:i,orgId:s,grade:l}})}function v(e){return Object(o.a)({url:"/dictCollection/insertDictCollection",method:"post",data:Object(n.a)({tenantId:i,orgId:s,grade:l},e)})}function I(e){return Object(o.a)({url:"/reportInfocollection/reportInfoCollectionPreview",method:"get",params:e})}function y(e){return Object(o.a)({url:"/reportInfocollection/insertReportInfocollection",method:"post",data:e})}function O(e){return Object(o.a)({url:"/reportInfocollection/infocollectionList/".concat(c),method:"get",params:e})}function w(e){return Object(o.a)({url:"/reportInfocollection/updateTime",method:"put",params:e})}function L(e){return Object(o.a)({url:"/reportInfocollection/withdraw",method:"put",params:e})}function j(e){return Object(o.a)({url:"/reportLinepay/getReportLinepay",method:"get",params:e})}function k(e){return Object(o.a)({url:"/reportLinepay/insertOrUpdateReportLinepay",method:"post",data:e})}function S(e){return Object(o.a)({url:"/reportAdmissionletter/getDictTemplateList",method:"get",params:e})}function F(e){return Object(o.a)({url:"/reportAdmissionletter/insertDictTemplate",method:"post",data:e})}function P(e){return Object(o.a)({url:"/reportAdmissionletter/insertOrUpdateReportAdmissionletter",method:"post",data:e})}function D(e){return Object(o.a)({url:"/reportAdmissionletter/getReportAdmissionletterInfo",method:"get",params:e})}function M(e){return Object(o.a)({url:"/reportSchoolopen/insertOrUpdateReportSchoolopen",method:"post",data:e})}function x(e){return Object(o.a)({url:"/reportSchoolopen/getReportSchoolopenInfo",method:"get",params:e})}function C(e){return Object(o.a)({url:"/reportDormitorymove/getReportDormitorymoveInfo",method:"get",params:e})}function _(e){return Object(o.a)({url:"/reportDormitorymove/insertOrUpdateReportDormitorymove",method:"post",data:e})}function $(e){return Object(o.a)({url:"/reportCustom/getReportCustomInfo",method:"get",params:e})}function R(e){return Object(o.a)({url:"/reportCustom/insertOrUpdateReportCustom",method:"post",data:e})}},b775:function(e,t,r){"use strict";r("75b5"),r("9188"),r("6236"),r("9c7e");var n=r("cebe"),o=r.n(n),a=r("f3e4"),i=o.a.create({baseURL:"https://test01.bysnt.com/welcome-report-api",withCredentials:!0,timeout:3e4});o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.interceptors.request.use((function(e){e.method;var t=Object(a.a)();return t&&(e.headers.token=t,e.headers["Cache-Control"]="no-cache",e.headers.Pragma="no-cache"),sessionStorage.getItem("user_info")&&(e.headers.tenantId=JSON.parse(sessionStorage.getItem("user_info")).tenantId),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){var t=Number(e.data.code);if(0===t||200===t||500===t)return e.data;switch(t){case 401:localStorage.clear(),sessionStorage.clear(),Object(a.b)(),sessionStorage.setItem("backUrl",location.pathname+location.search),location.href="https://passportss2.hseduyun.net/passport/oauth/authorize?client_id=E0D55D80AAC660E8&response_type=code&redirect_uri=http://127.0.0.1:5500/management/index";break;default:return Promise.reject(e.message||"error")}}),(function(e){return Promise.reject(e)})),t.a=i},bc85:function(e,t,r){"use strict";r.r(t);r("75b5"),r("f132"),r("8133"),r("c30f"),r("6236"),r("b205"),r("2f07"),r("dcb2"),r("4f4e"),r("0224");var n=r("caaf"),o=r.n(n),a=r("644f"),i={name:"collectInfo",components:{TitleName:function(){return r.e("chunk-e7b52ff2").then(r.bind(null,"89dd"))},Preview:function(){return r.e("chunk-6b194dee").then(r.bind(null,"3563"))}},data:function(){return{previewModal:!1,releaseModal:!1,releaseForm:{date:[],attendee:"1"},addModal:!1,addForm:{name:"",remrak:"",type:"2"},newStudentInfoList:[{label:"姓名",value:"1"},{label:"性别",value:"2"},{label:"身份证号",value:"3"}],baseInfoList:[{label:"一寸照",value:"1"},{label:"出生年月",value:"2"},{label:"毕业学校",value:"3"},{label:"政治面貌",value:"4"},{label:"民族",value:"5"},{label:"学生特长",value:"6"},{label:"身高",value:"7"},{label:"血型",value:"8"}],familyList:[{label:"户口所在地",value:"1"},{label:"家庭详细地址",value:"2"},{label:"家长信息",value:"3"}],studyList:[{label:"学习简历",value:"1"},{label:"在校所获荣誉",value:"2"},{label:"在校所担任职务",value:"3"}],form:{newStudentInfoList:[],baseInfoList:[],familyList:[],studyList:[]},previewData:{basicInfo:[],familyInfo:[],newIdentity:[],studyInfo:[]}}},mounted:function(){this.getItem()},methods:{moment:o.a,range:function(e,t){for(var r=[],n=e;n<t;n++)r.push(n);return r},disabledDate:function(e){return e<o()().subtract(1,"day")},disabledRangeTime:function(e,t){var r=this;return"start"===t?{disabledHours:function(){return r.range(0,60).splice(4,20)},disabledMinutes:function(){return r.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return r.range(0,60).splice(20,4)},disabledMinutes:function(){return r.range(0,31)},disabledSeconds:function(){return[55,56]}}},getItem:function(){var e=this;Object(a.a)().then((function(t){var r=JSON.parse(JSON.stringify(t.data).replace(/name/g,"label").replace(/id/g,"value")),n=r.newStudentInfoList,o=r.baseInfoList,a=r.familyList,i=r.studyList;e.newStudentInfoList=n,e.baseInfoList=o,e.familyList=a,a.forEach((function(e){"parentInfo"===e.keyName&&(e.disabled=!0)})),e.studyList=i,e.form.newStudentInfoList=n.map((function(e){return e.value})),e.form.familyList=e.familyList.filter((function(e){return"parentInfo"===e.keyName})).map((function(e){return e.value}))}))},addItem:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;Object(a.k)(e.addForm).then((function(t){e.addModal=!1,e.getItem()}))}))},preview:function(){var e=this,t=this.form,r=t.newStudentInfoList,n=t.baseInfoList,o=t.studyList,i=t.familyList;Object(a.u)({newStudentInfoList:r.length>0?"".concat(r.toString(),","):"",basicInfoList:n.length>0?"".concat(n.toString(),","):"",studyList:o.length>0?"".concat(o.toString(),","):"",familyList:i.length>0?"".concat(i.toString(),","):""}).then((function(t){e.previewModal=!0,e.previewData=t.data}))},release:function(){var e=this,t=this;this.$refs.releaseForm.validate((function(r){if(!r)return!1;e.$confirm({title:"发布提醒",content:"发布后不可更改信息采集项，请仔细确认信息采集项是否完整。确定发布？",onOk:function(){var e=t.form,r=e.newStudentInfoList,n=e.baseInfoList,o=e.studyList,i=e.familyList;Object(a.r)({processId:t.$route.query.processId,newIdentity:r.length>0?"".concat(r.toString(),","):"",basicInfo:n.length>0?"".concat(n.toString(),","):"",studyInfo:o.length>0?"".concat(o.toString(),","):"",familyInfo:i.length>0?"".concat(i.toString(),","):"",start_time:t.releaseForm.date[0],end_time:t.releaseForm.date[1]}).then((function(e){200===e.code&&(t.$message.success("发布成功"),t.releaseModal=!1,t.$router.push({path:"/process/collectInfoFinish",query:{processId:t.$route.query.processId}}))})).catch((function(){t.releaseModal=!1,t.$message.error("发布失败")}))},onCancel:function(){}})}))}}},s=(r("c2a8"),r("cba8")),l=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TitleName",{attrs:{titleName:"信息采集设置",showBackBtn:""}}),r("div",{staticClass:"content"},[r("div",{staticClass:"header"},[r("p",[e._v("新生信息采集项（请选择）")]),r("a-button",{staticClass:"base",attrs:{shape:"round"},on:{click:function(t){e.addModal=!0}}},[e._v(" 新增 ")])],1),r("div",{staticClass:"formBox"},[r("a-form-model",{attrs:{model:e.form,"label-col":{span:3},"wrapper-col":{span:21}}},[r("a-form-model-item",{attrs:{label:"新生身份"}},[r("a-checkbox-group",{attrs:{options:e.newStudentInfoList,disabled:""},model:{value:e.form.newStudentInfoList,callback:function(t){e.$set(e.form,"newStudentInfoList",t)},expression:"form.newStudentInfoList"}})],1),r("a-form-model-item",{attrs:{label:"基本信息"}},[r("a-checkbox-group",{attrs:{options:e.baseInfoList},model:{value:e.form.baseInfoList,callback:function(t){e.$set(e.form,"baseInfoList",t)},expression:"form.baseInfoList"}})],1),r("a-form-model-item",{attrs:{label:"家庭信息"}},[r("a-checkbox-group",{attrs:{options:e.familyList},model:{value:e.form.familyList,callback:function(t){e.$set(e.form,"familyList",t)},expression:"form.familyList"}})],1),r("a-form-model-item",{attrs:{label:"学习信息"}},[r("a-checkbox-group",{attrs:{options:e.studyList},model:{value:e.form.studyList,callback:function(t){e.$set(e.form,"studyList",t)},expression:"form.studyList"}})],1)],1)],1),r("div",{staticClass:"btn_group"},[r("div",{staticClass:"group"},[r("a-button",{staticClass:"base",attrs:{shape:"round"},on:{click:e.preview}},[e._v(" 预览 ")]),r("a-button",{attrs:{type:"primary"},on:{click:function(t){e.releaseModal=!0}}},[e._v("发布")])],1)])]),r("a-modal",{attrs:{title:"新增采集项"},on:{ok:e.addItem},model:{value:e.addModal,callback:function(t){e.addModal=t},expression:"addModal"}},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.addForm,"label-col":{span:6},"wrapper-col":{span:18}}},[r("a-form-model-item",{ref:"name",attrs:{label:"采集项目名称",prop:"name",rules:[{required:!0,message:"请填写采集名称！",trigger:"blur"},{min:1,max:6,message:"名称最多填写6个字！",trigger:"blur"}]}},[r("a-input",{attrs:{placeholder:"请输入采集项名称"},on:{blur:function(){e.$refs.name.onFieldBlur()}},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),r("a-form-model-item",{ref:"remrak",attrs:{prop:"remrak",label:"提示文字",rules:{required:!0,message:"请填写提示文字！",trigger:"blur"}}},[r("a-input",{attrs:{placeholder:"请输入提示文字"},on:{blur:function(){e.$refs.remrak.onFieldBlur()}},model:{value:e.addForm.remrak,callback:function(t){e.$set(e.addForm,"remrak",t)},expression:"addForm.remrak"}})],1),r("a-form-model-item",{attrs:{label:"分类",prop:"classification"}},[r("a-select",{attrs:{placeholder:"选择分类"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},[r("a-select-option",{attrs:{value:"2"}},[e._v("基本信息")]),r("a-select-option",{attrs:{value:"3"}},[e._v("家庭信息")]),r("a-select-option",{attrs:{value:"4"}},[e._v("学习信息")])],1)],1)],1)],1),r("a-modal",{attrs:{title:"发布",width:700},model:{value:e.releaseModal,callback:function(t){e.releaseModal=t},expression:"releaseModal"}},[r("a-form-model",{ref:"releaseForm",attrs:{"label-col":{span:6},"wrapper-col":{span:18},model:e.releaseForm}},[r("a-form-model-item",{attrs:{label:"设置信息采集时间",prop:"date",rules:{required:!0,message:"请选择时间",trigger:"blur"}}},[r("a-range-picker",{attrs:{"disabled-date":e.disabledDate,"disabled-time":e.disabledRangeTime,"show-time":{hideDisabledOptions:!0,defaultValue:[e.moment("00:00:00","HH:mm:ss"),e.moment("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.releaseForm.date,callback:function(t){e.$set(e.releaseForm,"date",t)},expression:"releaseForm.date"}}),r("br"),r("span",[e._v(" 信息采集是分班的前提，请合理安排学生信息采集的结束时间时间. ")])],1),r("a-form-model-item",{attrs:{label:"参与人员",prop:"attendee",rules:{required:!0,message:"请选择时间",trigger:"blur"}}},[r("a-radio-group",{model:{value:e.releaseForm.attendee,callback:function(t){e.$set(e.releaseForm,"attendee",t)},expression:"releaseForm.attendee"}},[r("a-radio",{attrs:{value:"1"}},[e._v(" 所有新生（1024） ")])],1)],1)],1),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:function(t){e.releaseModal=!1}}},[e._v(" 取消 ")]),r("a-button",{key:"submit",attrs:{type:"primary"},on:{click:e.release}},[e._v(" 提交 ")])],1)],2),r("a-modal",{attrs:{title:"新生采集表预览",width:865,footer:null},model:{value:e.previewModal,callback:function(t){e.previewModal=t},expression:"previewModal"}},[r("Preview",{attrs:{previewData:e.previewData}})],1)],1)}),[],!1,null,"2b760dd3",null);t.default=l.exports},c2a8:function(e,t,r){"use strict";r("c68d")},c68d:function(e,t,r){},f3e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a}));r("6236"),r("4e2c"),r("3ad4");function n(){return s("template_token")}function o(e){return i("template_token",e)}function a(){var e,t;(t=s(e="template_token"))&&i(e,t,-1)}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o="";if(r){var a=new Date;a.setTime(a.getTime()+1e3*r),o="; expires="+a.toGMTString()}document.cookie=e+"="+t+o+(n?"; path="+n:"")}function s(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""}}}]);