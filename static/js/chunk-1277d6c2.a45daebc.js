(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1277d6c2"],{"0672":function(t,e,n){"use strict";n("4c16d")},4302:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"h",(function(){return m})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return v})),n.d(e,"i",(function(){return b})),n.d(e,"e",(function(){return I})),n.d(e,"l",(function(){return S})),n.d(e,"n",(function(){return k})),n.d(e,"m",(function(){return x}));n("3b32");var a=n("b775"),o={tenantId:sessionStorage.getItem("tenantId"),orgId:sessionStorage.getItem("orgId"),garde:JSON.parse(localStorage.getItem("stuGradeId"))},s=o.tenantId,i=o.orgId,r=o.garde,c="".concat(s,"/").concat(i,"/").concat(r);function u(t){return Object(a.a)({url:"/third/getAllOrgInfo?tenantId=".concat(s,"&orgid=").concat(i),method:"get",params:t})}function l(t){return Object(a.a)({url:"/studentInfo/getSynchronizationStudentInfo/".concat(c),method:"get",params:t})}function d(t){return Object(a.a)({url:"/third/getEnrollmentList",method:"get",params:t})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/studentInfo/getClassGroup/".concat(c),method:"get",params:t})}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/studentInfo/getDownloadTemplate/".concat(r),method:"get",params:t})}function h(t){return Object(a.a)({url:"studentInfo/improtExcel/".concat(c),method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/studentInfo/list/".concat(c),method:"get",params:t})}function g(t){return Object(a.a)({url:"/studentInfo/deleteStudentInfo/".concat(t),method:"delete"})}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/studentInfo/deleteStudentInfoList",method:"delete",params:t})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/studentInfo/getStudetInfoById/".concat(t.id),method:"get",params:t})}function I(t){return Object(a.a)({url:"/studentInfo/getDictCommon",method:"get",params:t})}function S(t){return Object(a.a)({url:"/studentInfo/insertStudentInfo/".concat(c),method:"post",data:t})}function k(t){return Object(a.a)({url:"/oss/upload",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function x(t){return Object(a.a)({url:"/studentInfo/updateStudentInfo",method:"post",data:t})}},"4c16d":function(t,e,n){},"76f1":function(t,e,n){"use strict";n.r(e);n("75b5"),n("f132"),n("8133");var a=n("4302"),o={name:"stuManagement",components:{TitleName:function(){return n.e("chunk-e7b52ff2").then(n.bind(null,"89dd"))},ManageTable:function(){return n.e("chunk-f7d22e54").then(n.bind(null,"3726"))}},data:function(){return{spinning:!1,visible:!1,downLoadModal:!1,templateData:[],importModal:!1,exportModal:!1,classId:"",classList:[],condition:"",stuData:{},pageNum:1,pageSize:10,totalPeop:"0"}},mounted:function(){this.getSyncInfo(),this.getClassList()},methods:{importExcelData:function(t,e){var n=this,o=new FormData;o.append("file",t.target.files[0]),o.append("fileType",e),Object(a.k)(o).then((function(e){200===e.code&&(t.target.value="",n.importModal=!1,n.$message.success("导入成功"),n.getStuInfoList())}))},getSyncInfo:function(){Object(a.j)().then((function(t){201===t.code&&alert(111)}))},syncData:function(){var t=this;Object(a.g)({id:"1"}).then((function(e){200===e.code?(t.getStuInfoList(),t.$message.success("导入成功"),t.visible=!1):(t.$message.warning(e.msg),t.visible=!1)})).catch((function(){t.$message.error("同步失败！"),t.visible=!1}))},handleOk:function(t){this.syncData()},getClassList:function(){var t=this;Object(a.d)().then((function(e){t.classId="",t.classList=e.data,t.getStuInfoList()}))},changeClass:function(t){this.classId=t,this.getStuInfoList()},onSearch:function(t){this.condition=t,this.getStuInfoList()},openDownLoadModal:function(){var t=this;Object(a.f)().then((function(e){t.downLoadModal=!0,t.templateData=e.data}))},exportStuList:function(){this.$message.warning("功能完善中！")},getStuInfoList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.spinning=!0,this.pageNum=e;var n={condition:this.condition,shiftResults:this.classId,pageNum:this.pageNum,pageSize:this.pageSize};Object(a.h)(n).then((function(e){t.stuData=e.data,t.totalPeop=e.totalPeop,t.spinning=!1})).catch((function(e){t.spinning=!1}))},changePageNum:function(t,e){"next"===t?this.getStuInfoList(this.pageNum+=1):"prev"===t?this.getStuInfoList(this.pageNum-=1):"goTo"===t&&this.getStuInfoList(e)},downloadTemplate:function(t){location.href=t}}},s=(n("0672"),n("cba8")),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TitleName",{attrs:{titleName:"新生管理"},scopedSlots:t._u([{key:"subText",fn:function(){return[t._v("共"+t._s(t.totalPeop)+"人")]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"filter"},[n("div",[t._v(" 班级: "),n("a-select",{staticStyle:{width:"105px"},on:{change:t.changeClass},model:{value:t.classId,callback:function(e){t.classId=e},expression:"classId"}},t._l(t.classList,(function(e){return n("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),n("a-input-search",{staticClass:"search",staticStyle:{width:"265px"},attrs:{placeholder:"姓名/身份证号/毕业学校","enter-button":"搜索"},on:{search:t.onSearch}},[n("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1),n("a-button",{staticClass:"base",attrs:{shape:"round"},on:{click:function(e){t.visible=!0}}},[t._v(" 手动同步 ")]),n("a-button",{attrs:{type:"primary",shape:"round"},on:{click:t.openDownLoadModal}},[t._v(" 下载导入模板 ")]),n("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(e){t.importModal=!0}}},[t._v(" 导入 ")]),n("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(e){t.exportModal=!0}}},[t._v(" 导出 ")])],1),n("ManageTable",{attrs:{spinning:t.spinning,data:t.stuData,pageSize:t.pageSize,pageNum:t.pageNum},on:{getStuList:t.getStuInfoList,changePageNum:t.changePageNum}})],1),n("a-modal",{attrs:{title:"手动同步提醒"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("当前学校年级已存在新生，确认要再次同步？")]),n("p",[t._v("已存在的学生将跳过")])]),n("a-modal",{attrs:{title:"下载模板",footer:null},model:{value:t.downLoadModal,callback:function(e){t.downLoadModal=e},expression:"downLoadModal"}},[n("div",{staticStyle:{"text-align":"center"}},t._l(t.templateData,(function(e){return n("div",{key:e.id,staticClass:"modelBtn"},[n("a-button",{attrs:{size:"large",shape:"round",block:""},on:{click:function(n){return t.downloadTemplate(e.template_url)}}},[t._v(" "+t._s(e.template_name)+" ")])],1)})),0)]),n("a-modal",{attrs:{title:"导入",footer:null},model:{value:t.importModal,callback:function(e){t.importModal=e},expression:"importModal"}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"modelBtn"},[n("a",{staticClass:"file",attrs:{href:"javascript:void(0);"}},[n("input",{attrs:{type:"file"},on:{change:function(e){return t.importExcelData(e,2)}}}),t._v("导入新生信息 ")])]),n("div",{staticClass:"modelBtn"},[n("a",{staticClass:"file",attrs:{href:"javascript:void(0);"}},[n("input",{attrs:{type:"file"},on:{change:function(e){return t.importExcelData(e,3)}}}),t._v("导入分班 ")])]),n("div",{staticClass:"modelBtn"},[n("a",{staticClass:"file",attrs:{href:"javascript:void(0);"}},[n("input",{attrs:{type:"file"},on:{change:function(e){return t.importExcelData(e,4)}}}),t._v("导入宿舍号 ")])]),n("div",{staticClass:"modelBtn"},[n("a",{staticClass:"file",attrs:{href:"javascript:void(0);"}},[n("input",{attrs:{type:"file"},on:{change:function(e){return t.importExcelData(e,5)}}}),t._v("导入分班+宿舍号 ")])])])]),n("a-modal",{attrs:{title:"导出",footer:null},model:{value:t.exportModal,callback:function(e){t.exportModal=e},expression:"exportModal"}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"modelBtn"},[n("a-button",{attrs:{size:"large",shape:"round",block:""},on:{click:t.exportStuList}},[t._v(" 导出学生信息（表格） ")])],1),n("div",{staticClass:"modelBtn"},[n("a-button",{attrs:{size:"large",shape:"round",block:""},on:{click:t.exportStuList}},[t._v(" 导出学生登记单（pdf） ")])],1),n("div",{staticClass:"modelBtn"},[n("a-button",{attrs:{size:"large",shape:"round",block:""},on:{click:t.exportStuList}},[t._v(" 导出一寸照（图片 ")])],1)])])],1)}),[],!1,null,"12821266",null);e.default=i.exports},b775:function(t,e,n){"use strict";n("75b5"),n("9188"),n("6236"),n("9c7e");var a=n("cebe"),o=n.n(a),s=n("f3e4"),i=o.a.create({baseURL:"https://test01.bysnt.com/welcome-report-api",withCredentials:!0,timeout:3e4});o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.interceptors.request.use((function(t){t.method;var e=Object(s.a)();return e&&(t.headers.token=e,t.headers["Cache-Control"]="no-cache",t.headers.Pragma="no-cache"),sessionStorage.getItem("user_info")&&(t.headers.tenantId=JSON.parse(sessionStorage.getItem("user_info")).tenantId),t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){var e=Number(t.data.code);if(0===e||200===e||500===e)return t.data;switch(e){case 401:localStorage.clear(),sessionStorage.clear(),Object(s.b)(),sessionStorage.setItem("backUrl",location.pathname+location.search),location.href="https://passportss2.hseduyun.net/passport/oauth/authorize?client_id=E0D55D80AAC660E8&response_type=code&redirect_uri=http://127.0.0.1:5500/management/index";break;default:return Promise.reject(t.message||"error")}}),(function(t){return Promise.reject(t)})),e.a=i}}]);