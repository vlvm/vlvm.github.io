(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3d530fc5"],{"162e":function(t,e,n){"use strict";n.r(e);n("75b5"),n("f132"),n("8133");var r=n("f3e4"),o=n("4302"),a={name:"Layout",components:{SideBar:function(){return n.e("chunk-47843b33").then(n.bind(null,"d618"))}},data:function(){return{standby:"",gradeId:JSON.parse(localStorage.getItem("stuGradeId"))||null,gradeList:[],spaceTitle:"",logoutUrl:"",isShowWork:!1,isShowSearch:!1,userAvatar:"",tenantId:"",version:"",backTopBottom:50,isShowNews:!1,clientId:"demo",swichRoleUrl:"",accessToken:Object(r.a)()}},computed:{key:function(){return this.$route.path},keepAlive:function(){return this.$route.meta.keepAlive},showCheckGrade:function(){return null==this.gradeId}},created:function(){var t=this;Object(o.c)().then((function(e){t.gradeList=e.grade})),this.spaceTitle="寰烁科技",this.version="formal",this.swichRoleUrl="http://127.0.0.1:5500/transfer?isLogOut=3",this.logoutUrl="http://127.0.0.1:5500/transfer?isLogOut=1",this.tenantId=localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")).tenantId:""},mounted:function(){var t=this;this.userAvatar=localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")).head_url:"https://wisdomsaas-img.oss-cn-beijing.aliyuncs.com/BFAA0FECDD194B7A974C60B7E1B27C18?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2017-12-29T08%3A33%3A39Z%2F-1%2F%2F0f06024af14dad05694f25b8c85572567591c72bbd0129d3175b4cdbd6e62208";var e=document.body.offsetHeight,n=this.$refs.footer.$el.offsetHeight,r=this.$refs.wrapper.offsetHeight-e-n;window.addEventListener("scroll",(function(){var e=document.body.scrollTop||document.documentElement.scrollTop;t.backTopBottom=e>=r?e-r+50:50}),!0)},methods:{logout:function(){localStorage.clear(),sessionStorage.clear(),removeToken(),sessionStorage.setItem("backUrl",this.$route.fullPath)},checkedGradeId:function(t){this.standby=t},gradeNext:function(){""===this.standby?this.$message.warning("请先选择年级！"):(this.gradeId=this.standby,localStorage.setItem("stuGradeId",this.gradeId))}}},s=(n("6731"),n("cba8")),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"app-wrapper"},[n("jsheader",{attrs:{spaceTitle:t.spaceTitle,logoutUrl:t.logoutUrl,isShowWork:t.isShowWork,isShowSearch:t.isShowSearch,isShowNews:t.isShowNews,userAvatar:t.userAvatar,version:t.version,clientId:t.clientId,swichRoleUrl:t.swichRoleUrl,accessToken:t.accessToken},on:{logout:t.logout}}),n("section",{staticClass:"app-main"},[n("div",{staticClass:"m_left"},[n("a-affix",{attrs:{"offset-top":10}},[n("SideBar")],1)],1),n("div",{staticClass:"m_right"},[t.gradeId?[n("keep-alive",[t.keepAlive?n("router-view",{key:t.key}):t._e()],1),t.keepAlive?t._e():n("router-view",{key:t.key})]:t._e()],2)]),n("jsfooter",{ref:"footer",staticClass:"footer",attrs:{tenantId:t.tenantId,version:t.version}}),n("a-back-top",{style:{bottom:t.backTopBottom+"px"},attrs:{"visibility-height":1e3}}),n("a-modal",{attrs:{title:"请选择新生得年级",closable:!1,maskClosable:!1,width:"40%"},model:{value:t.showCheckGrade,callback:function(e){t.showCheckGrade=e},expression:"showCheckGrade"}},[n("div",{staticClass:"checkedGradeBox"},t._l(t.gradeList,(function(e){return n("div",{key:e.gradeId,staticClass:"gradeItem",class:e.gradeId===t.standby&&"gradeActive",on:{click:function(n){return t.checkedGradeId(e.gradeId)}}},[t._v(" "+t._s(e.gradeName)+t._s(t.gradeId)+" ")])})),0),n("template",{slot:"footer"},[n("a-button",{attrs:{type:"primary"},on:{click:t.gradeNext}},[t._v(" 下一步 ")])],1)],2)],1)}),[],!1,null,"1271532f",null);e.default=c.exports},4302:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"k",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return b})),n.d(e,"i",(function(){return I})),n.d(e,"e",(function(){return v})),n.d(e,"l",(function(){return k})),n.d(e,"n",(function(){return w})),n.d(e,"m",(function(){return S}));n("3b32");var r=n("b775"),o={tenantId:"002",orgId:"567",garde:JSON.parse(localStorage.getItem("stuGradeId"))},a=o.tenantId,s=o.orgId,c=o.garde,i="".concat(a,"/").concat(s,"/").concat(c);function u(){return Object(r.a)({url:"/third/getAllOrgInfo?tenantId=".concat(a,"&orgid=").concat(s),method:"get"})}function d(t){return Object(r.a)({url:"/studentInfo/getSynchronizationStudentInfo/".concat(i),method:"get",params:t})}function l(t){return Object(r.a)({url:"/third/getEnrollmentList",method:"get",params:t})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/studentInfo/getClassGroup/".concat(i),method:"get",params:t})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/studentInfo/getDownloadTemplate/".concat(c),method:"get",params:t})}function m(t){return Object(r.a)({url:"studentInfo/improtExcel/".concat(i),method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/studentInfo/list/".concat(i),method:"get",params:t})}function p(t){return Object(r.a)({url:"/studentInfo/deleteStudentInfo/".concat(t),method:"delete"})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/studentInfo/deleteStudentInfoList",method:"delete",params:t})}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({url:"/studentInfo/getStudetInfoById/".concat(t.id),method:"get",params:t})}function v(t){return Object(r.a)({url:"/studentInfo/getDictCommon",method:"get",params:t})}function k(t){return Object(r.a)({url:"/studentInfo/insertStudentInfo/".concat(i),method:"post",data:t})}function w(t){return Object(r.a)({url:"/oss/upload",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function S(t){return Object(r.a)({url:"/studentInfo/updateStudentInfo",method:"post",data:t})}},6731:function(t,e,n){"use strict";n("a131")},a131:function(t,e,n){},b775:function(t,e,n){"use strict";n("75b5"),n("9188"),n("6236"),n("9c7e");var r=n("cebe"),o=n.n(r),a=n("f3e4"),s=o.a.create({baseURL:"https://test01.bysnt.com/welcome-report-api",withCredentials:!0,timeout:3e4});o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.interceptors.request.use((function(t){t.method;var e=Object(a.a)();return e&&(t.headers.token=e,t.headers["Cache-Control"]="no-cache",t.headers.Pragma="no-cache"),sessionStorage.getItem("user_info")&&(t.headers.tenantId=JSON.parse(sessionStorage.getItem("user_info")).tenantId),t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){var e=Number(t.data.code);if(0===e||200===e||500===e)return t.data;switch(e){case 401:localStorage.clear(),sessionStorage.clear(),Object(a.b)(),sessionStorage.setItem("backUrl",location.pathname+location.search),location.href="https://passportss2.hseduyun.net/passport/oauth/authorize?client_id=E0D55D80AAC660E8&response_type=code&redirect_uri=http://127.0.0.1:5500/management/index";break;default:return Promise.reject(t.message||"error")}}),(function(t){return Promise.reject(t)})),e.a=s},f3e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a}));n("6236"),n("4e2c"),n("3ad4");function r(){return c("template_token")}function o(t){return s("template_token",t)}function a(){var t,e;(e=c(t="template_token"))&&s(t,e,-1)}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o="";if(n){var a=new Date;a.setTime(a.getTime()+1e3*n),o="; expires="+a.toGMTString()}document.cookie=t+"="+e+o+(r?"; path="+r:"")}function c(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var o=n[r].trim();if(0===o.indexOf(e))return o.substring(e.length,o.length)}return""}}}]);