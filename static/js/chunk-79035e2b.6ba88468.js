(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-79035e2b"],{8525:function(e,t,a){"use strict";a.r(t);var s=a("0344"),n=(a("75b5"),a("f132"),a("8133"),a("c30f"),a("4f4e"),a("3e08"),a("0c54"),a("fd63"),a("3b32"),a("dcb2"),a("0224"),a("3335")),i=a.n(n),l=a("caaf"),r=a.n(l),o=a("644f"),c={name:"customReports",components:{TitleName:function(){return a.e("chunk-e7b52ff2").then(a.bind(null,"89dd"))},draggable:i.a},data:function(){return{index:"0",isSaved:!1,isRelease:!1,releaseModal:!1,releaseForm:{date:[],processName:""},imgUrl:{1:a("e4f8"),2:a("3b98"),3:a("89db"),4:a("7c98"),5:a("75d6"),6:a("9fe5"),7:a("95f3")},onlineProcess:[],offlineProcess:[],finallyData:[]}},computed:{processData:{get:function(){return"0"===this.index?this.onlineProcess:this.offlineProcess},set:function(e){return e}}},mounted:function(){var e=this;Object(o.x)().then((function(t){t.data.length>0?(e.isSaved=!0,e.isRelease="1"===t.isRelease,e.finallyData=t.data,e.releaseForm.processName=t.title,e.releaseForm.date=[t.startDate,t.endDate]):Object(o.j)({processType:e.$route.query.processType}).then((function(t){e.onlineProcess=t.data.onlineProcess,e.offlineProcess=t.data.offlineProcess,e.finallyData=t.init}))}))},methods:{moment:r.a,range:function(e,t){for(var a=[],s=e;s<t;s++)a.push(s);return a},disabledDate:function(e){return e<r()().subtract(1,"day")},disabledRangeTime:function(e,t){var a=this;return"start"===t?{disabledHours:function(){return a.range(0,60).splice(4,20)},disabledMinutes:function(){return a.range(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return a.range(0,60).splice(20,4)},disabledMinutes:function(){return a.range(0,31)},disabledSeconds:function(){return[55,56]}}},log:function(e){var t=e.added?e.added.element:e.moved;"0"===this.index?this.onlineProcess=this.onlineProcess.filter((function(e){return e.elementId!==t.elementId})):7!==t.elementId&&(this.offlineProcess=this.offlineProcess.filter((function(e){return e.elementId!==t.elementId})))},cloneDog:function(e){if("0"===this.index&&4===e.elementId&&!this.finallyData.find((function(e){return 1===e.elementId})))return void this.$message.warning("请先选择信息采集！");return{elementName:e.elementName,elementId:e.elementId}},changeNav:function(e){this.index=e},deleteItem:function(e,t){var a=this,n=e.elementId,i=[1,2,3,4].includes(n),l=[5,6,7].includes(n),r=function(e){a[e]=[].concat(Object(s.a)(a[e]),Object(s.a)(a.finallyData.filter((function(e){return e.elementId===n})))).sort((function(e,t){return e.elementId>t.elementId?1:-1})),a.finallyData=a.finallyData.filter((function(e){return e.elementId!==n}))};if(i){var o=this.finallyData.find((function(e){return 4===e.elementId}));1===n&&o&&(this.onlineProcess=[].concat(Object(s.a)(this.onlineProcess),Object(s.a)(this.finallyData.filter((function(e){return 1===e.elementId||4===e.elementId})))).sort((function(e,t){return e.elementId>t.elementId?1:-1})),this.finallyData=this.finallyData.filter((function(e){return 1!==e.elementId&&4!==e.elementId}))),r("onlineProcess")}if(l){if(7===n)return void this.finallyData.splice(t,1);r("offlineProcess")}},prevBtn:function(){var e=this;0!==this.finallyData.length?Object(o.b)().then((function(t){e.isSaved=!1,e.onlineProcess=t.data.onlineProcess,e.offlineProcess=t.data.offlineProcess,e.finallyData=0===t.processData.length?t.init:t.processData})):this.$router.go(-1)},nextBtn:function(){var e=this;if(0===this.finallyData.length)this.$message.warning("请先添加采集项！ ");else{var t=this.finallyData.map((function(e){return{elementId:e.elementId,elementName:e.elementName}}));Object(o.s)({process:t}).then((function(t){200===t.code&&(e.isSaved=!0,e.finallyData=t.data)}))}},goEditPage:function(e){var t=this,a=e.elementId,s=e.processId,n=e.isConfigure;if(this.isSaved){var i="/process/collectInfo",l="/process/onlinePay",r="/process/admissionNotice",o="/process/schoolReport",c="/process/dormitory",d="/process/custom",f=function(e){return t.$router.push("".concat(e,"?processId=").concat(s))};switch(a){case 1:f(1===n?"/process/collectInfoFinish":i);break;case 2:f(l);break;case 3:f(r);break;case 5:f(o);break;case 6:f(c);break;case 7:f(d)}}},release:function(){var e=this;this.$refs.releaseForm.validate((function(t){if(!t)return!1;var a=e.finallyData.map((function(e){return e.id}));Object(o.t)({processIdList:a.length>0?"".concat(a.toString(),","):"",processName:e.releaseForm.processName,startTime:e.releaseForm.date[0],endTime:e.releaseForm.date[1]}).then((function(t){200===t.code?(e.releaseModal=!1,e.isRelease=!0):e.$message.warning(t.msg)}))}))}}},d=(a("b5ae"),a("cba8")),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TitleName",{attrs:{titleName:"报道流程"}}),a("div",{staticClass:"customReports"},[e.isRelease?e._e():a("p",{staticClass:"tips"},[e._v(" 点击下一步，然后点击每个环节，完成配置 ")]),e.isRelease?a("div",{staticClass:"releaseTitle"},[a("p",{staticClass:"title"},[e._v(e._s(e.releaseForm.processName))]),a("p",[e._v("报道时间："+e._s(e.releaseForm.date.join("至")))])]):e._e(),a("div",{staticClass:"contentBox"},[e.isSaved?e._e():a("div",{staticClass:"c_left"},[a("ul",[a("li",{class:"0"===e.index&&"navActive",on:{click:function(t){return e.changeNav("0")}}},[e._v(" 线上 ")]),a("li",{class:"1"===e.index&&"navActive",on:{click:function(t){return e.changeNav("1")}}},[e._v(" 线下 ")])]),a("div",{staticClass:"navContent"},[a("draggable",{staticStyle:{"min-height":"620px"},attrs:{animation:"100",dragClass:"dragClass",ghostClass:"ghostClass",chosenClass:"chosenClass",sort:!1,list:e.processData,group:{name:"process",pull:"clone",put:!1},clone:e.cloneDog},on:{change:e.log}},e._l(e.processData,(function(t){return a("div",{key:t.elementId,staticClass:"tab"},[a("img",{attrs:{src:e.imgUrl[t.elementId],alt:t.elementName}}),a("p",[e._v(e._s(t.elementName))])])})),0)],1)]),a("div",{staticClass:"c_right"},[a("draggable",{staticStyle:{"min-height":"620px"},attrs:{group:"process",animation:"100",dragClass:"dragClass",ghostClass:"ghostClass",chosenClass:"chosenClass",list:e.finallyData,disabled:e.isSaved},on:{change:e.log}},e._l(e.finallyData,(function(t,s){return a("div",{key:s,staticClass:"box",on:{click:function(a){return e.goEditPage(t)}}},[a("a-badge",{attrs:{offset:[10,5]}},[e.isSaved?e._e():a("a-icon",{style:{color:"#e14845"},attrs:{slot:"count",theme:"filled",type:"close-circle",title:"删除该项"},on:{click:function(a){return a.stopPropagation(),e.deleteItem(t,s)}},slot:"count"}),e.isSaved&&1===t.isConfigure?a("a-icon",{style:{color:"#50cf8a"},attrs:{slot:"count",theme:"filled",type:"check-circle"},slot:"count"}):e._e(),a("img",{attrs:{src:e.imgUrl[t.elementId]||e.imgUrl[t.id],alt:t.elementName}})],1),a("p",[e._v(e._s(t.elementName))]),s!==e.finallyData.length-1?a("a-icon",{staticStyle:{color:"#33478A"},attrs:{type:"arrow-down"}}):e._e()],1)})),0)],1)]),e.isRelease?e._e():a("div",{staticClass:"btn_group"},[a("div",{staticClass:"group"},[a("a-button",{staticClass:"base",attrs:{shape:"round"},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" 取消 ")]),a("a-button",{staticClass:"base",attrs:{shape:"round"},on:{click:e.prevBtn}},[e._v(" 上一步 ")]),e.isSaved?a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.releaseModal=!0}}},[e._v(" 发布 ")]):a("a-button",{attrs:{type:"primary"},on:{click:e.nextBtn}},[e._v(" 下一步 ")])],1)])]),a("a-modal",{attrs:{title:"发布",width:700},model:{value:e.releaseModal,callback:function(t){e.releaseModal=t},expression:"releaseModal"}},[a("a-form-model",{ref:"releaseForm",attrs:{"label-col":{span:6},"wrapper-col":{span:18},model:e.releaseForm}},[a("a-form-model-item",{attrs:{label:"设置报道时间",prop:"date",rules:{required:!0,message:"请选择时间",trigger:"blur"}}},[a("a-range-picker",{attrs:{"disabled-date":e.disabledDate,"disabled-time":e.disabledRangeTime,"show-time":{hideDisabledOptions:!0,defaultValue:[e.moment("00:00:00","HH:mm:ss"),e.moment("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.releaseForm.date,callback:function(t){e.$set(e.releaseForm,"date",t)},expression:"releaseForm.date"}})],1),a("a-form-model-item",{attrs:{label:"名称",prop:"processName",rules:{required:!0,message:"请选填写名称",trigger:"blur"}}},[a("a-input",{staticStyle:{width:"350px"},attrs:{placeholder:"请填写名称"},model:{value:e.releaseForm.processName,callback:function(t){e.$set(e.releaseForm,"processName",t)},expression:"releaseForm.processName"}})],1)],1),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:function(t){e.releaseModal=!1}}},[e._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:e.release}},[e._v(" 发布 ")])],1)],2)],1)}),[],!1,null,"e416c106",null);t.default=f.exports},"95f3":function(e,t){e.exports="data:image/png;base64,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"},b5ae:function(e,t,a){"use strict";a("b939")},b939:function(e,t,a){}}]);