"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[1931],{51931:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},["0"===e.role?n("Tab",{staticStyle:{"margin-bottom":"10px"},attrs:{tabIndex:e.tabIndex,"tab-data":e.tabData},on:{changeIndex:e.changeIndex}}):e._e(),n("div",{staticClass:"tabs"},[n("div",{staticClass:"swiper_box",style:{width:e.isOtherTeacher?"100%":"770px"}},[e.courseList.length>4?n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"left"},on:{click:e.slidePrev}}):e._e(),n("swiper",{ref:"mySwiper",staticClass:"swiper",style:{width:e.isOtherTeacher?"800px":"700px"},attrs:{options:e.swiperOption}},e._l(e.courseList,(function(t,i){return n("swiper-slide",{key:t.id,class:{sideActive:e.sideIndex===t.id}},[n("div",{staticClass:"courseName"},[n("a-tooltip",{attrs:{placement:"bottomLeft",title:""+t.name+i}},[e._v(" "+e._s(t.name)+e._s(i)+" ")])],1),e.isOtherTeacher?e._e():n("div",[n("a-dropdown",{attrs:{trigger:["click"]}},[n("a-icon",{attrs:{type:"more"},on:{click:function(e){return e.stopPropagation()}}}),n("a-menu",{attrs:{slot:"overlay"},on:{click:e.dropdownClick},slot:"overlay"},[n("a-menu-item",{key:"0"},[n("a-icon",{attrs:{type:"edit"}}),e._v(" 重命名 ")],1),n("a-menu-item",{key:"1"},[n("a-icon",{attrs:{type:"menu-fold"}}),e._v(" 左移 ")],1),n("a-menu-item",{key:"1"},[n("a-icon",{attrs:{type:"menu-unfold"}}),e._v(" 右移 ")],1),n("a-menu-item",{key:"2"},[n("a-icon",{attrs:{type:"scissor"}}),e._v(" 复制到 ")],1),n("a-menu-item",{key:"3"},[n("a-icon",{attrs:{type:"copy"}}),e._v(" 创建副本 ")],1),n("a-menu-item",{key:"4",staticStyle:{color:"red"}},[n("a-icon",{attrs:{type:"delete"}}),e._v(" 删除 ")],1)],1)],1)],1)])})),1),e.courseList.length>4?n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"right"},on:{click:e.slideNext}}):e._e()],1),e.isOtherTeacher?e._e():n("a-button",{on:{click:function(t){e.modal.createCourseModal=!0}}},[e._v(" 创建课程 ")])],1),n("div",{staticClass:"center_content"},[n("div",{staticClass:"c_top"},[n("div",{staticClass:"btn_group_l"},[n("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){e.modal.addText=!0}}},[e._v("文字")]),n("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:e.uploadFile}},[e._v("文件")]),n("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){e.$refs.RecordQuestions.showModal=!0}}},[e._v("题")]),n("input",{ref:"fileUpload",staticStyle:{display:"none"},attrs:{type:"file",accept:".docx,.doc,.dotx,.pptx,.ppt,.potx,.pdf,.mp4,.mp3"},on:{change:function(t){return e.upload(t)}}})],1),n("div",{staticClass:"btn_group_r"},[0===e.showAnswerArea?n("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){return e.changeAnswerArea(0)}}},[e._v(" 显示作答区域 ")]):e._e(),1===e.showAnswerArea?n("a-button",{attrs:{size:"small"},on:{click:function(t){return e.changeAnswerArea(1)}}},[e._v(" 隐藏作答区 ")]):e._e(),n("a-button",{attrs:{size:"small"},on:{click:function(t){e.$refs.CourseFilterModal.showModal=!0}}},[e._v(" 筛选 ")])],1)]),n("ContentBox",{ref:"contentBox"})],1),n("a-modal",{attrs:{title:"新建课程"},on:{ok:e.handleOk},model:{value:e.modal.createCourseModal,callback:function(t){e.$set(e.modal,"createCourseModal",t)},expression:"modal.createCourseModal"}},[n("a-input",{attrs:{placeholder:"请输入课程名称"}})],1),n("a-modal",{attrs:{title:"重命名课程"},on:{ok:e.handleOk},model:{value:e.modal.visible,callback:function(t){e.$set(e.modal,"visible",t)},expression:"modal.visible"}},[n("a-input",{attrs:{placeholder:"请输入课程名称",value:e.courseName}})],1),n("a-modal",{attrs:{width:870,title:"添加文字"},on:{ok:e.addText},model:{value:e.modal.addText,callback:function(t){e.$set(e.modal,"addText",t)},expression:"modal.addText"}},[n("Editor",{ref:"editor"})],1),n("RecordQuestions",{ref:"RecordQuestions"}),n("CourseFilterModal",{ref:"CourseFilterModal",on:{contentFilter:e.contentFilter}})],1)},r=[],a=n(68932),o=n(4367),s=(n(41539),n(78783),n(33948),n(68309),n(92222),n(34553),n(40561),n(70614));function c(e){var t=e.lastIndexOf("/"),n=e.lastIndexOf("\\"),i=Math.max(t,n);return i<0?e:e.substring(i+1)}var l=n(34665),d={name:"SideCenter",components:{Tab:function(){return n.e(4369).then(n.bind(n,64369))},swiper:s.swiper,swiperSlide:s.swiperSlide,Editor:function(){return n.e(819).then(n.bind(n,10819))},ContentBox:function(){return Promise.all([n.e(6390),n.e(8143)]).then(n.bind(n,88143))},CourseFilterModal:function(){return n.e(158).then(n.bind(n,50158))},RecordQuestions:function(){return n.e(1981).then(n.bind(n,61981))}},data:function(){var e=this;return{modal:{createCourseModal:!1,visible:!1,addText:!1},tabIndex:"0",drag:!1,tabData:[{id:"0",name:"创建课程"},{id:"1",name:"处理课程"},{id:"2",name:"课程结果"}],swiperOption:{allowTouchMove:!1,slidesPerView:4,spaceBetween:5,on:{tap:function(){e.sideIndex=e.courseList[e.swiper.clickedIndex].id,console.log(e.sideIndex)}}},sideIndex:0,courseList:[{id:0,name:"课程"},{id:1,name:"课程"},{id:2,name:"课程"},{id:3,name:"课程课程课程课程课程课程课程课程课程课程"},{id:4,name:"课程"}]}},computed:(0,o.Z)({swiper:function(){return this.$refs.mySwiper.swiper},courseName:function(){return this.courseList[this.sideIndex].name+this.sideIndex}},(0,l.rn)({role:function(e){return e.role},isOtherTeacher:function(e){return e.c.isOtherTeacher},showAnswerArea:function(e){return e.c.showAnswerArea},contentData:function(e){return e.c.contentData},selectId:function(e){return e.c.selectItem.selectId}})),methods:(0,o.Z)((0,o.Z)({},(0,l.nv)("c",["replaceContent","changeAnswerArea","changeSelectId"])),{},{handleOk:function(){this.modal.visible=!1},changeIndex:function(e){this.changeSelectId(""),this.tabIndex=e,"0"===e?this.$router.push("/course/created"):"1"===e?this.$router.push("/course/processing"):"2"===e&&this.$router.push("/course/result")},dropdownClick:function(e){var t=e.key;switch(t){case"0":this.modal.visible=!0;break;case"1":break;case"2":break;case"3":break;case"4":this.$confirm({title:"是否确定要删除这个课程?",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}});break}},slidePrev:function(){this.swiper.isBeginning?this.$message.warning("已经是第一个课程了！"):this.swiper.slidePrev()},slideNext:function(){this.swiper.isEnd?this.$message.warning("已经是最后一个课程了！"):this.swiper.slideNext()},addText:function(){var e=this;if(""!==this.$refs.editor.editor.txt.text()){var t={id:(new Date).getTime(),type:0,important:0,ques:this.$refs.editor.editorHtml};if(""===this.selectId)this.replaceContent([].concat((0,a.Z)(this.contentData),[t])),this.modal.addText=!1,this.$nextTick((function(){e.$refs.contentBox.scrollTop=e.$refs.contentBox.clientHeight}));else{var n=this.contentData.findIndex((function(t){return t.id===e.selectId})),i=this.contentData.concat();i.splice(n+1,0,t),this.replaceContent(i),this.modal.addText=!1}}else this.$message.warning("请输入文字内容！")},uploadFile:function(){this.$refs.fileUpload.click()},upload:function(e){var t=this;console.log(c(e.target.value));var n={id:(new Date).getTime(),type:1,important:0,ques:c(e.target.value)};if(""===this.selectId)this.replaceContent([].concat((0,a.Z)(this.contentData),[n])),this.$nextTick((function(){t.$refs.contentBox.scrollTop=t.$refs.contentBox.clientHeight}));else{var i=this.contentData.findIndex((function(e){return e.id===t.selectId})),r=this.contentData.concat();r.splice(i+1,0,n),this.replaceContent(r)}},contentFilter:function(){}})},u=d,h=n(43736),p=(0,h.Z)(u,i,r,!1,null,"01d2ef42",null),f=p.exports},23748:function(e,t,n){function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,{Z:function(){return i}})},68932:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(23748);function r(e){if(Array.isArray(e))return(0,i.Z)(e)}n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(91038);function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=n(48936);n(21703);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return r(e)||a(e)||(0,o.Z)(e)||s()}},48936:function(e,t,n){n.d(t,{Z:function(){return r}});n(47042),n(41539),n(68309),n(91038),n(78783),n(74916),n(77601);var i=n(23748);function r(e,t){if(e){if("string"===typeof e)return(0,i.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.Z)(e,t):void 0}}}}]);