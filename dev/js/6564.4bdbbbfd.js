"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[6564],{96564:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"center"},[1===e.role?s("Tab",{staticStyle:{"margin-bottom":"10px"},attrs:{tabIndex:e.tabIndex,"tab-data":[{id:"0",name:"创建课程"},{id:"1",name:"处理课程"},{id:"2",name:"课程结果"}]},on:{changeIndex:e.changeIndex}}):e._e(),s("div",{staticClass:"tabs"},[s("div",{staticClass:"swiper_box",style:{width:e.isOtherTeacher?"100%":"770px"}},[e.courseList.length>4?s("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"left"},on:{click:e.slidePrev}}):e._e(),s("swiper",{ref:"mySwiper",staticClass:"swiper",style:{width:e.isOtherTeacher?"800px":"700px"},attrs:{options:e.swiperOption}},e._l(e.courseList,(function(t,o){return s("swiper-slide",{key:t.id,class:{sideActive:e.courseId===t.id}},[e.courseList.length>0?s("div",{staticClass:"courseName"},[s("a-tooltip",{attrs:{placement:"bottomLeft",title:""+t.courseName}},[e._v(" "+e._s(t.courseName)+" ")])],1):e._e(),e.isOtherTeacher?e._e():s("div",[s("a-dropdown",{attrs:{trigger:["click"]}},[s("a-icon",{attrs:{type:"more"},on:{click:function(e){return e.stopPropagation()}}}),s("a-menu",{attrs:{slot:"overlay"},on:{click:function(s){return e.dropdownClick(s,t)}},slot:"overlay"},[s("a-menu-item",{key:"0"},[s("a-icon",{attrs:{type:"edit"}}),e._v(" 重命名 ")],1),e.courseList.length>1?[0!==o?s("a-menu-item",{key:"1"},[s("a-icon",{attrs:{type:"menu-fold"}}),e._v(" 左移 ")],1):e._e(),o<e.courseList.length-1?s("a-menu-item",{key:"2"},[s("a-icon",{attrs:{type:"menu-unfold"}}),e._v(" 右移 ")],1):e._e()]:e._e(),s("a-menu-item",{key:"3"},[s("a-icon",{attrs:{type:"scissor"}}),e._v(" 复制到 ")],1),s("a-menu-item",{key:"4"},[s("a-icon",{attrs:{type:"copy"}}),e._v(" 创建副本 ")],1),s("a-menu-item",{key:"5",staticStyle:{color:"red"}},[s("a-icon",{attrs:{type:"delete"}}),e._v(" 删除 ")],1)],2)],1)],1)])})),1),e.courseList.length>4?s("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"right"},on:{click:e.slideNext}}):e._e()],1),e.isOtherTeacher?e._e():s("a-button",{on:{click:e.openCreateCourseModal}},[e._v(" 创建课程 ")])],1),s("div",{staticClass:"center_content"},[e.courseList.length>0?[s("div",{staticClass:"c_top"},[s("div",{staticClass:"btn_group_l"},[s("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher||!e.canAddCourseContent},on:{click:function(t){e.modal.addContentTextModal=!0}}},[e._v(" 文字 ")]),s("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher||!e.canAddCourseContent},on:{click:e.uploadFile}},[e._v(" 文件 ")]),s("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher||!e.canAddCourseContent},on:{click:function(t){e.$refs.RecordQuestions.showModal=!0}}},[e._v(" 题 ")]),s("input",{ref:"fileUpload",staticStyle:{display:"none"},attrs:{type:"file",accept:".docx,.doc,.dotx,.pptx,.ppt,.potx,.pdf,.mp4,.mp3"},on:{change:function(t){return e.upload(t)}}})],1),s("div",{staticClass:"btn_group_r"},[0===e.showAnswerArea?s("a-button",{attrs:{size:"small",disabled:e.isOtherTeacher},on:{click:function(t){return e.changeAnswerArea(0)}}},[e._v(" 显示作答区域 ")]):e._e(),1===e.showAnswerArea?s("a-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.changeAnswerArea(1)}}},[e._v(" 隐藏作答区 ")]):e._e(),s("a-button",{attrs:{size:"small",type:e.canAddCourseContent?"":"primary"},on:{click:function(t){e.$refs.courseFilterModal.showModal=!0}}},[e._v(" 筛选 ")])],1)]),s("ContentBox",{ref:"contentBox"})]:e._e()],2),s("a-modal",{attrs:{title:0===e.nameModalType?"新建课程":"重命名课程"},model:{value:e.modal.changeNameModal,callback:function(t){e.$set(e.modal,"changeNameModal",t)},expression:"modal.changeNameModal"}},[s("a-input",{attrs:{placeholder:"请输入课程名称"},model:{value:e.courseName,callback:function(t){e.courseName=t},expression:"courseName"}}),s("template",{slot:"footer"},[s("a-button",{on:{click:function(t){e.modal.changeNameModal=!1}}},[e._v(" 取消 ")]),0===e.nameModalType?s("a-button",{attrs:{type:"primary"},on:{click:e.createdCourse}},[e._v(" 确定 ")]):e._e(),1===e.nameModalType?s("a-button",{attrs:{type:"primary"},on:{click:e.renameCourse}},[e._v(" 确定 ")]):e._e()],1)],2),s("a-modal",{attrs:{width:870,title:"添加文字"},on:{ok:e.addContentText},model:{value:e.modal.addContentTextModal,callback:function(t){e.$set(e.modal,"addContentTextModal",t)},expression:"modal.addContentTextModal"}},[s("Editor",{ref:"editor"})],1),s("RecordQuestions",{ref:"RecordQuestions"}),s("CourseFilterModal",{ref:"courseFilterModal",on:{contentFilter:e.contentFilter}})],1)},n=[],a=s(13034);function i(e){let t=e.lastIndexOf("/"),s=e.lastIndexOf("\\"),o=Math.max(t,s);return o<0?e:e.substring(o+1)}var r=s(26490),c=s(35462),d={name:"SideCenter",components:{Tab:()=>s.e(760).then(s.bind(s,60760)),swiper:a.swiper,swiperSlide:a.swiperSlide,Editor:()=>s.e(7415).then(s.bind(s,17415)),ContentBox:()=>Promise.all([s.e(2535),s.e(6329)]).then(s.bind(s,16329)),CourseFilterModal:()=>s.e(8033).then(s.bind(s,78033)),RecordQuestions:()=>s.e(7930).then(s.bind(s,87930))},data(){return{modal:{changeNameModal:!1,addContentTextModal:!1},tabIndex:"0",drag:!1,swiperOption:{allowTouchMove:!1,slidesPerView:4,spaceBetween:5,on:{tap:()=>{this.setCourseId(this.courseList[this.swiper.clickedIndex].id),this.changeCourseContentId(""),this.getCourseContentById(this.courseId)}}},nameModalType:0,courseName:"",canAddCourseContent:!0}},computed:{swiper(){return this.$refs.mySwiper.swiper},...(0,r.rn)({role:e=>e.role,courseId:e=>e.c.courseId,courseList:e=>e.c.courseList,courseContentId:e=>e.c.courseContentId,isOtherTeacher:e=>e.c.isOtherTeacher,showAnswerArea:e=>e.c.showAnswerArea,contentData:e=>e.c.contentData})},mounted(){},methods:{...(0,r.OI)("c",["changeCourseContentId","setCourseId","setCourseList","replaceContent"]),...(0,r.nv)("c",["changeAnswerArea","getCourseListData","getCourseTagAttrData"]),getCourseList(e){this.getCourseListData(e).then((e=>{e.extra.length>0&&(this.setCourseId(e.extra[0].id),this.getCourseContentById(e.extra[0].id))}))},changeIndex(e){0!==this.courseList.length?(this.changeCourseContentId(""),this.tabIndex=e,"0"===e?this.$router.push({path:"/course/created",query:{catalogId:this.$route.query.catalogId}}):"1"===e?this.$router.push({path:"/course/processing",query:{catalogId:this.$route.query.catalogId}}):"2"===e&&this.$router.push({path:"/course/result",query:{catalogId:this.$route.query.catalogId}})):this.$warning({title:"请先创建课程！",content:"创建课程后才能查看"})},openCreateCourseModal(){this.$route.query.catalogId&&""!=this.$route.query.catalogId?(this.nameModalType=0,this.courseName="",this.modal.changeNameModal=!0):this.$message.warn("请先选择目录！")},createdCourse(){""!==this.courseName?(0,c.P6)({courseName:this.courseName,catalogId:this.$route.query.catalogId,courseTagId:parseInt(this.role)}).then((e=>{this.setCourseList([...this.courseList,e.extra]);const t=this.courseList.length-1;this.setCourseId(this.courseList[t].id),this.swiper.slideTo(t,10,!1),this.courseName="",this.modal.changeNameModal=!1,this.getCourseContentById(this.courseId)})):this.$message.warn("请输入课程名称！")},renameCourse(){(0,c.pk)({id:this.courseId,courseName:this.courseName}).then((e=>{if(e.extra){this.modal.changeNameModal=!1;const e=this.courseList.findIndex((e=>e.id===this.courseId));this.courseList[e].courseName=this.courseName,this.setCourseList(this.courseList)}}))},slidePrev(){this.swiper.isBeginning?this.$message.warning("已经是第一个课程了！"):this.swiper.slidePrev()},slideNext(){this.swiper.isEnd?this.$message.warning("已经是最后一个课程了！"):this.swiper.slideNext()},dropdownClick(e,t){const s=this,{key:o}=e;let n=this.courseList.findIndex((e=>e.id===this.courseId));function a(e,t){0!==t?e[t]=e.splice(t-1,1,e[t])[0]:e.push(e.shift())}switch(o){case"0":this.courseName=this.courseList[n].courseName,this.nameModalType=1,this.modal.changeNameModal=!0;break;case"1":a(this.courseList,n);break;case"2":break;case"3":break;case"4":(0,c.xm)({id:t.id}).then((e=>{let s=this.courseList.findIndex((e=>e.id===t.id));this.courseList.splice(s+1,0,e.extra),this.setCourseList(this.courseList),this.setCourseId(e.extra.id),this.swiper.slideTo(this.courseList.length-1,10,!1),this.getCourseContentById(this.courseId)}));break;case"5":this.$confirm({title:"是否确定要删除这个课程?",okText:"删除",okType:"danger",cancelText:"取消",onOk(){1===t.coursePublishTag?(0,c.A)(t.id).then((e=>{if(console.log(e),s.setCourseList(s.courseList.filter((e=>e.id!==t.id))),s.courseList.length>0){const e=s.courseList.length-1;s.setCourseId(s.courseList[e].id),s.getCourseContentById(s.courseId)}})):(0,c.GW)(t.id).then((e=>{if(console.log(e),s.setCourseList(s.courseList.filter((e=>e.id!==t.id))),s.courseList.length>0){const e=s.courseList.length-1;s.setCourseId(s.courseList[e].id),s.getCourseContentById(s.courseId)}}))},onCancel(){console.log("Cancel")}});break}},getCourseContentById(e){(0,c.vz)(e).then((t=>{this.replaceContent(t.extra),this.getCourseTagAttrData(e)}))},addContentText(){if(""===this.$refs.editor.editor.isEmpty())return void this.$message.warning("请输入文字内容！");let e={courseId:this.courseId,textContent:this.$refs.editor.html,textIndex:this.contentData.length};if(""===this.courseContentId)(0,c.Le)(e).then((e=>{this.modal.addContentTextModal=!1,this.replaceContent([...this.contentData,e.extra]),this.$refs.editor.clear()}));else{let t=this.contentData.findIndex((e=>e.content.id===this.courseContentId));if(2===this.contentData[t].contentType){let s=this.contentData[t].content.mappingIdList;if(s.length>0){let t=this.contentData.findIndex((e=>e.content.id===s[s.length-1]));e.textIndex=t+2,(0,c.Le)(e).then((e=>{this.contentData.splice(t+1,0,e.extra),this.replaceContent(this.contentData),this.$refs.editor.clear(),this.modal.addContentTextModal=!1}))}return}e.textIndex=t+2,(0,c.Le)(e).then((e=>{this.contentData.splice(t+1,0,e.extra),this.replaceContent(this.contentData),this.$refs.editor.clear(),this.modal.addContentTextModal=!1}))}},uploadFile(){this.$refs.fileUpload.click()},upload(e){let t=e.target.files[0];console.log(i(e.target.value)),(0,c.Ue)({uploadFile:t},this.courseId).then((t=>{if(""===this.courseContentId)this.replaceContent([...this.contentData,t.extra]);else{let s=this.contentData.findIndex((e=>e.content.id===this.courseContentId));if(2===this.contentData[s].contentType){let o=this.contentData[s].content.mappingIdList;if(o.length>0){let e=this.contentData.findIndex((e=>e.content.id===o[o.length-1]));this.contentData.splice(e+1,0,t.extra),this.replaceContent(this.contentData)}return void(e.target.value="")}this.contentData.splice(s+1,0,t.extra),this.replaceContent(this.contentData),e.target.value=""}}))},contentFilter(e){this.canAddCourseContent=!Object.values(e).some((e=>e)),(0,c.wV)({courseId:this.courseId,...e}).then((e=>{this.replaceContent(e.extra||[])}))}}},l=d,u=s(35471),h=(0,u.Z)(l,o,n,!1,null,"2625d13a",null),p=h.exports}}]);