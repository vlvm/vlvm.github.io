(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2e5745a2"],{"0344":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return o}));r("ef16"),r("7a02"),r("75b5"),r("8483"),r("f132"),r("8133"),r("89a6");r("e904"),r("e54e");function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"06c4":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("59cd"),r("ef16"),r("4f4e"),r("1945"),r("2f07"),r("64de");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},2013:function(e,t,r){"use strict";r.r(t);var n=r("0344"),o=(r("75b5"),r("f132"),r("8133"),r("dcb2"),r("9188"),r("4f4e"),r("0c54"),r("b8bc"),r("6236"),r("b205"),r("4e2c"),r("c30f"),r("2f07"),r("0224"),r("caaf")),a=r.n(o),i=r("644f"),c=[{title:"序号",align:"center",width:65,customRender:function(e,t,r){return"".concat(r+1)}},{title:"物品名称",dataIndex:"ItemName",scopedSlots:{customRender:"ItemName"}},{title:"单位",dataIndex:"company",scopedSlots:{customRender:"company"}},{title:"数量",dataIndex:"num",scopedSlots:{customRender:"num"}},{title:"金额(元)",dataIndex:"amount",scopedSlots:{customRender:"amount"}},{title:"编辑",dataIndex:"operation",width:"15%",scopedSlots:{customRender:"operation"}}],s={name:"dormitory",components:{TitleName:function(){return r.e("chunk-e7b52ff2").then(r.bind(null,"89dd"))},EditorTemplate:function(){return Promise.all([r.e("chunk-2d2088b7"),r.e("chunk-70fa5c10")]).then(r.bind(null,"763e"))}},data:function(){return{isFilled:!1,form:{addr:"",date:[],event:"",receiverType:1,isCost:!0,receiver1:[],receiver2:[]},rules:{addr:[{required:!0,message:"请输入地点",trigger:"blur"}],event:[{required:!0,message:"请输入事件",trigger:"blur"}],date:[{required:!0,message:"请输入日期",trigger:"change"}],receiverType:[{required:!0,message:"请选择受理人",trigger:"change"}],receiver1:{required:!0,message:"请选择受理人",trigger:"change"},receiver2:{required:!0,message:"请选择受理人",trigger:"change"}},positionData:[],peopleDate:[],data:[{key:Date.now(),ItemName:"",company:"",num:1,amount:0}],columns:c}},computed:{price:function(){return this.data.map((function(e){return Number(e.num)*Number(e.amount)})).reduce((function(e,t){return e+t}))},positionName:function(){var e=this;return this.positionData.filter((function(t){return e.form.receiver1.includes(t.dutyId)})).map((function(e){return e.dutyName}))},peopleName:function(){var e=this;return this.peopleDate.filter((function(t){return e.form.receiver2.includes(t.userId)})).map((function(e){return e.userName}))}},mounted:function(){var e=this;Object(i.f)({processId:this.$route.query.processId}).then((function(t){var r=t.data;r.itemDetails=JSON.parse(r.itemDetails.replace(/\\/g,"")),e.form.addr=t.data.addr,e.form.date=[t.data.startTime,t.data.endTime],e.form.event=t.data.event,e.form.receiverType=t.data.receiverType,e.form.isCost=1===t.data.isCost,1===t.data.receiverType?e.form.receiver1=t.data.receiver.split(",").map(Number):e.form.receiver2=t.data.receiver.split(",").map(Number),e.data=r.itemDetails,e.isFilled=!0})),Object(i.v)().then((function(t){e.positionData=t.data})),Object(i.w)().then((function(t){e.peopleDate=t.data}))},methods:{moment:a.a,range:function(e,t){for(var r=[],n=e;n<t;n++)r.push(n);return r},disabledDate:function(e){return e<a()().subtract(1,"day")},disabledRangeTime:function(e,t){var r=this;return"start"===t?{disabledHours:function(){return r.range(0,60).splice(4,20)},disabledMinutes:function(){return r.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return r.range(0,60).splice(20,4)},disabledMinutes:function(){return r.range(0,31)},disabledSeconds:function(){return[55,56]}}},filterOption:function(e,t){return t.componentOptions.children[0].text.indexOf(e)>=0},handleChange:function(e,t,r){var o=Object(n.a)(this.data),a=o.filter((function(e){return t===e.key}))[0];a&&(a[r]=e,this.data=o)},addPrice:function(){this.data.push({key:Date.now(),ItemName:"",company:"",num:1,amount:0})},onChange:function(e){this.form.isCost=e,this.columns=e?c:c.filter((function(e){return"price"!==e.dataIndex}))},copy:function(e,t){var r=e.ItemName,n=e.company,o=e.num,a=e.amount;this.data.splice(t+1,0,{key:Date.now(),ItemName:r,company:n,num:o,amount:a})},onSubmit:function(){var e=this,t=this.form,r=t.addr,n=t.event,o=t.date,a=t.receiverType,c=t.isCost,s=t.receiver1,u=t.receiver2;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var d=!1;e.data.forEach((function(t,r){var n=t.ItemName,o=t.company,a=t.num,i=t.amount;""===n?(e.$message.warning("请检序号为".concat(r+1,"的物品名称是否填写！")),d=!1):""===o?(e.$message.warning("请检序号为".concat(r+1,"的单位是否填写！")),d=!1):""===a?(e.$message.warning("请检序号为".concat(r+1,"的数量是否填写！")),d=!1):""===i?(e.$message.warning("请检序号为".concat(r+1,"的金额是否填写！")),d=!1):d=!0})),d&&Object(i.o)({processId:e.$route.query.processId,addr:r,startTime:o[0],endTime:o[1],event:n,receiverType:a,receiver:1===a?s.toString():u.toString(),isCost:c?1:2,itemDetails:e.data,totalAmount:e.price}).then((function(){e.isFilled=!0}))}))}}},u=(r("bcb6"),r("cba8")),d=Object(u.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TitleName",{attrs:{titleName:"宿舍入住","show-back-btn":""},scopedSlots:e._u([{key:"edit",fn:function(){return[e.isFilled?r("a-button",{staticClass:"base",attrs:{size:"small",shape:"round"},on:{click:function(t){e.isFilled=!1}}},[e._v(" 编辑 ")]):e._e()]},proxy:!0}])}),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFilled,expression:"!isFilled"}],staticClass:"content"},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":{span:3},"wrapper-col":{span:20}}},[r("a-form-model-item",{attrs:{label:"时间",required:"",prop:"date"}},[r("a-range-picker",{attrs:{"disabled-date":e.disabledDate,"disabled-time":e.disabledRangeTime,"show-time":{hideDisabledOptions:!0,defaultValue:[e.moment("00:00:00","HH:mm:ss"),e.moment("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),r("a-form-model-item",{ref:"name",attrs:{label:"地点",prop:"addr"}},[r("a-input",{attrs:{placeholder:"输入地点"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1),r("a-form-model-item",{ref:"event",attrs:{label:"事件",prop:"event"}},[r("a-input",{attrs:{placeholder:"输入事件"},model:{value:e.form.event,callback:function(t){e.$set(e.form,"event",t)},expression:"form.event"}})],1),r("a-form-model-item",{attrs:{label:"添加受理人"}},[r("a-form-model-item",{ref:"receiverType",staticStyle:{"margin-bottom":"0"},attrs:{prop:"receiverType"}},[r("a-radio-group",{model:{value:e.form.receiverType,callback:function(t){e.$set(e.form,"receiverType",t)},expression:"form.receiverType"}},[r("a-radio",{attrs:{value:1}},[e._v(" 按职务 ")]),r("a-radio",{attrs:{value:2}},[e._v(" 指定人员 ")])],1)],1),1===e.form.receiverType?r("a-form-model-item",{ref:"receiver1",attrs:{prop:"receiver1"}},[r("a-select",{attrs:{mode:"multiple",placeholder:"按职务选择人员","filter-option":e.filterOption},model:{value:e.form.receiver1,callback:function(t){e.$set(e.form,"receiver1",t)},expression:"form.receiver1"}},e._l(e.positionData,(function(t){return r("a-select-option",{key:t.dutyId,attrs:{value:t.dutyId,label:t.dutyName}},[e._v(" "+e._s(t.dutyName)+" ")])})),1)],1):e._e(),2===e.form.receiverType?r("a-form-model-item",{ref:"receiver2",attrs:{prop:"receiver2"}},[r("a-select",{attrs:{mode:"multiple",placeholder:"选择指定人员","filter-option":e.filterOption},model:{value:e.form.receiver2,callback:function(t){e.$set(e.form,"receiver2",t)},expression:"form.receiver2"}},e._l(e.peopleDate,(function(t){return r("a-select-option",{key:t.userId,attrs:{value:t.userId,label:t.userName}},[e._v(" "+e._s(t.userName)+"("+e._s(t.userId)+") ")])})),1)],1):e._e()],1),r("div",[r("a-row",[r("a-col",{attrs:{span:3,align:"right"}},[e._v(" 物品明细： ")]),r("a-col",{attrs:{span:20}},[r("span",[e._v("是否含有费用")]),r("a-switch",{staticStyle:{margin:"0  0 5px 15px"},attrs:{"checked-children":"含费用","un-checked-children":"不含费用","default-checked":e.form.isCost},on:{change:e.onChange}}),r("a-table",{staticClass:"table",attrs:{columns:e.data.length>1?e.columns:e.columns.filter((function(e){return"编辑"!==e.title})),"data-source":e.data,bordered:"",pagination:!1},scopedSlots:e._u([e._l(["ItemName","company","num","amount"],(function(t){return{key:t,fn:function(n,o,a){return[r("div",{key:t},[r("a-input","num"===t||"amount"===t?{staticStyle:{margin:"-5px 0"},attrs:{value:o[t]},on:{change:function(r){return e.handleChange(r.target.value,o.key,t)}}}:{staticStyle:{margin:"-5px 0"},attrs:{placeholder:"请输入",value:o[t]},on:{change:function(r){return e.handleChange(r.target.value,o.key,t)}}})],1)]}}})),{key:"operation",fn:function(t,n,o){return[r("div",{staticClass:"editable-row-operations"},[r("span",[r("a-popconfirm",{attrs:{title:"是否删除当前行数据？"},on:{confirm:function(){return e.deleteConfirm(o)}}},[r("a",{staticStyle:{color:"#eb5556"},attrs:{href:"javascript:void(0);"}},[e._v(" 删除 ")])]),r("a",{staticStyle:{color:"#33478a"},attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.copy(n,o)}}},[e._v(" 复制 ")])],1)])]}}],null,!0)}),r("a-button",{staticClass:"addBtn",attrs:{size:"small",shape:"round"},on:{click:e.addPrice}},[r("a-icon",{attrs:{type:"plus"}}),e._v(" 增加物品种类 ")],1)],1)],1)],1),e.form.isCost?r("div",[r("a-row",{attrs:{type:"flex",align:"middle"}},[r("a-col",{attrs:{span:3,align:"right"}},[e._v(" 总金额： ")]),r("a-col",{attrs:{span:8}},[r("a-input",{attrs:{placeholder:"0",disabled:"",value:e.price}})],1)],1)],1):e._e()],1),r("div",{staticClass:"save"},[r("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isFilled,expression:"isFilled"}],staticClass:"content"},[r("table",[r("tr",[r("td",[e._v("开学报到时间:")]),r("td",[e._v(e._s(e.form.date.join("至")))])]),r("tr",[r("td",[e._v("报到地点:")]),r("td",[e._v(e._s(e.form.addr))])]),r("tr",[r("td",[e._v("事件:")]),r("td",[e._v(e._s(e.form.event)+" ")])]),r("tr",[r("td",[e._v("受理人:")]),1===e.form.receiverType?r("td",[e._v(e._s(e.positionName.toString()))]):e._e(),2===e.form.receiverType?r("td",[e._v(e._s(e.peopleName.toString()))]):e._e()]),r("tr",[r("td",[e._v("物品明细:")]),r("td",{staticStyle:{width:"600px"}},[r("a-table",{attrs:{columns:e.columns.filter((function(e){return"编辑"!==e.title})),"data-source":e.data,bordered:"",pagination:!1,size:"small"}})],1)]),r("tr",[r("td",[e._v("总金额:")]),r("td",[e._v(e._s(e.price)+"元")])])])])],1)}),[],!1,null,"0b08d768",null);t.default=d.exports},"644f":function(e,t,r){"use strict";r.d(t,"v",(function(){return d})),r.d(t,"j",(function(){return l})),r.d(t,"w",(function(){return m})),r.d(t,"t",(function(){return p})),r.d(t,"x",(function(){return f})),r.d(t,"b",(function(){return v})),r.d(t,"s",(function(){return b})),r.d(t,"a",(function(){return h})),r.d(t,"k",(function(){return g})),r.d(t,"u",(function(){return y})),r.d(t,"r",(function(){return O})),r.d(t,"i",(function(){return I})),r.d(t,"y",(function(){return j})),r.d(t,"z",(function(){return _})),r.d(t,"g",(function(){return w})),r.d(t,"p",(function(){return k})),r.d(t,"c",(function(){return S})),r.d(t,"l",(function(){return C})),r.d(t,"m",(function(){return D})),r.d(t,"d",(function(){return T})),r.d(t,"q",(function(){return N})),r.d(t,"h",(function(){return x})),r.d(t,"f",(function(){return P})),r.d(t,"o",(function(){return R})),r.d(t,"e",(function(){return A})),r.d(t,"n",(function(){return $}));var n=r("06c4"),o=(r("3b32"),r("b775")),a={tenantId:"002",orgId:"567",garde:JSON.parse(localStorage.getItem("stuGradeId"))},i=a.tenantId,c=a.orgId,s=a.garde,u="".concat(i,"/").concat(c,"/").concat(s);function d(e){return Object(o.a)({url:"/reportCustom/queryDutyInfoByOrgId?tenantId=".concat(i,"&orgId=").concat(c),method:"get",params:e})}function l(e){return Object(o.a)({url:"/dictProcesselement/initProcesselementList",method:"get",params:e})}function m(e){return Object(o.a)({url:"/reportCustom/queryPostUserInfoByEs",method:"get",params:{tenantId:i,orgId:c}})}function p(e){return Object(o.a)({url:"/reportProcessRelease/insertReportProcessRelease",method:"post",data:Object(n.a)({tenantId:i,orgId:c,grade:s},e)})}function f(){return Object(o.a)({url:"/reportProcess/reportProcessList",method:"get",params:{tenantId:i,orgId:c,grade:s}})}function v(e){return Object(o.a)({url:"/dictProcesselement/dictProcesselementList",method:"get",params:Object(n.a)({tenantId:i,orgId:c,grade:s},e)})}function b(e){return Object(o.a)({url:"/reportProcess/insertReportProcess",method:"post",data:Object(n.a)({tenantId:i,orgId:c,grade:s},e)})}function h(){return Object(o.a)({url:"/dictCollection/dictCollectionList",method:"get",params:{tenantId:i,orgId:c,grade:s}})}function g(e){return Object(o.a)({url:"/dictCollection/insertDictCollection",method:"post",data:Object(n.a)({tenantId:i,orgId:c,grade:s},e)})}function y(e){return Object(o.a)({url:"/reportInfocollection/reportInfoCollectionPreview",method:"get",params:e})}function O(e){return Object(o.a)({url:"/reportInfocollection/insertReportInfocollection",method:"post",data:e})}function I(e){return Object(o.a)({url:"/reportInfocollection/infocollectionList/".concat(u),method:"get",params:e})}function j(e){return Object(o.a)({url:"/reportInfocollection/updateTime",method:"put",params:e})}function _(e){return Object(o.a)({url:"/reportInfocollection/withdraw",method:"put",params:e})}function w(e){return Object(o.a)({url:"/reportLinepay/getReportLinepay",method:"get",params:e})}function k(e){return Object(o.a)({url:"/reportLinepay/insertOrUpdateReportLinepay",method:"post",data:e})}function S(e){return Object(o.a)({url:"/reportAdmissionletter/getDictTemplateList",method:"get",params:e})}function C(e){return Object(o.a)({url:"/reportAdmissionletter/insertDictTemplate",method:"post",data:e})}function D(e){return Object(o.a)({url:"/reportAdmissionletter/insertOrUpdateReportAdmissionletter",method:"post",data:e})}function T(e){return Object(o.a)({url:"/reportAdmissionletter/getReportAdmissionletterInfo",method:"get",params:e})}function N(e){return Object(o.a)({url:"/reportSchoolopen/insertOrUpdateReportSchoolopen",method:"post",data:e})}function x(e){return Object(o.a)({url:"/reportSchoolopen/getReportSchoolopenInfo",method:"get",params:e})}function P(e){return Object(o.a)({url:"/reportDormitorymove/getReportDormitorymoveInfo",method:"get",params:e})}function R(e){return Object(o.a)({url:"/reportDormitorymove/insertOrUpdateReportDormitorymove",method:"post",data:e})}function A(e){return Object(o.a)({url:"/reportCustom/getReportCustomInfo",method:"get",params:e})}function $(e){return Object(o.a)({url:"/reportCustom/insertOrUpdateReportCustom",method:"post",data:e})}},"73f3":function(e,t,r){},b775:function(e,t,r){"use strict";r("75b5"),r("9188"),r("6236"),r("9c7e");var n=r("cebe"),o=r.n(n),a=r("f3e4"),i=o.a.create({baseURL:"https://test01.bysnt.com/welcome-report-api",withCredentials:!0,timeout:3e4});o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.interceptors.request.use((function(e){e.method;var t=Object(a.a)();return t&&(e.headers.token=t,e.headers["Cache-Control"]="no-cache",e.headers.Pragma="no-cache"),sessionStorage.getItem("user_info")&&(e.headers.tenantId=JSON.parse(sessionStorage.getItem("user_info")).tenantId),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){var t=Number(e.data.code);if(0===t||200===t||500===t)return e.data;switch(t){case 401:localStorage.clear(),sessionStorage.clear(),Object(a.b)(),sessionStorage.setItem("backUrl",location.pathname+location.search),location.href="https://passportss2.hseduyun.net/passport/oauth/authorize?client_id=E0D55D80AAC660E8&response_type=code&redirect_uri=http://127.0.0.1:5500/management/index";break;default:return Promise.reject(e.message||"error")}}),(function(e){return Promise.reject(e)})),t.a=i},bcb6:function(e,t,r){"use strict";r("73f3")},f3e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return a}));r("6236"),r("4e2c"),r("3ad4");function n(){return c("template_token")}function o(e){return i("template_token",e)}function a(){var e,t;(t=c(e="template_token"))&&i(e,t,-1)}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o="";if(r){var a=new Date;a.setTime(a.getTime()+1e3*r),o="; expires="+a.toGMTString()}document.cookie=e+"="+t+o+(n?"; path="+n:"")}function c(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""}}}]);