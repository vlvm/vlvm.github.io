"use strict";(self["webpackChunkteacher_project"]=self["webpackChunkteacher_project"]||[]).push([[6302],{86302:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"center"},[s("Tab",{attrs:{tabIndex:e.tabIndex,"tab-data":e.tabData},on:{changeIndex:e.changeIndex}}),s("div",{staticClass:"tabs"},[s("div",{staticClass:"swiper_box"},[e.courseList.length>4?s("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"left"},on:{click:e.slidePrev}}):e._e(),s("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:e.swiperOption}},e._l(e.courseList,(function(t,n){return s("swiper-slide",{key:t.id,class:{sideActive:e.sideIndex===t.id}},[s("div",{staticClass:"courseName"},[s("a-tooltip",{attrs:{placement:"bottomLeft",title:""+t.name+n}},[e._v(" "+e._s(t.name)+e._s(n)+" ")])],1),s("div",[s("a-dropdown",{attrs:{trigger:["click"]}},[s("a-icon",{attrs:{type:"more"},on:{click:function(e){return e.stopPropagation()}}}),s("a-menu",{attrs:{slot:"overlay"},on:{click:e.dropdownClick},slot:"overlay"},[s("a-menu-item",{key:"0"},[s("a-icon",{attrs:{type:"menu-fold"}}),e._v(" 左移 ")],1),s("a-menu-item",{key:"1"},[s("a-icon",{attrs:{type:"menu-unfold"}}),e._v(" 右移 ")],1),s("a-menu-item",{key:"2",staticStyle:{color:"red"}},[s("a-icon",{attrs:{type:"delete"}}),e._v(" 删除 ")],1)],1)],1)],1)])})),1),e.courseList.length>4?s("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"right"},on:{click:e.slideNext}}):e._e()],1)]),s("div",{staticClass:"center_content"},[s("div",{staticClass:"c_top"},[s("div",{staticClass:"btn_group_l"},[s("a-select",{staticStyle:{width:"100px"},attrs:{"default-value":"",size:"small"},on:{change:e.changeStudent}},[s("a-select-option",{attrs:{value:""}},[e._v(" 全部学生")]),e._l(10,(function(t){return s("a-select-option",{key:t,attrs:{value:t}},[t<=5?s("a-icon",{style:{color:"#52c41a"},attrs:{type:"solution"}}):e._e(),t>5?s("a-icon",{style:{color:"#ff0000"},attrs:{type:"solution"}}):e._e(),e._v(" 学生"+e._s(t)+" ")],1)}))],2),s("a-select",{staticStyle:{width:"100px"},attrs:{"default-value":e.screenCourse,size:"small"},model:{value:e.screenCourse,callback:function(t){e.screenCourse=t},expression:"screenCourse"}},[s("a-select-option",{attrs:{value:"0"}},[e._v(" 课程详情")]),s("a-select-option",{attrs:{value:"1"}},[e._v(" 课程题目")])],1),s("a-button",{attrs:{size:"small"}},[e._v("待批阅")]),s("a-button",{attrs:{size:"small"}},[e._v("待回复")])],1)]),s("ContentBox",{ref:"contentBox"})],1)],1)},i=[],a=s(7204),o=(s(21206),s(68428),s(58742),s(97613),s(13034)),r=s(26490),c={name:"SideCenter",components:{Tab:function(){return s.e(760).then(s.bind(s,60760))},swiper:o.swiper,swiperSlide:o.swiperSlide,ContentBox:function(){return Promise.all([s.e(2535),s.e(8862)]).then(s.bind(s,48862))}},data:function(){var e=this;return{modal:{visible:!1},tabIndex:"1",drag:!1,tabData:[{id:"0",name:"创建课程"},{id:"1",name:"处理课程"},{id:"2",name:"课程结果"}],swiperOption:{allowTouchMove:!1,slidesPerView:4,spaceBetween:5,on:{tap:function(){e.sideIndex=e.courseList[e.swiper.clickedIndex].id,console.log(e.sideIndex)}}},sideIndex:0,courseList:[{id:0,name:"课程"},{id:1,name:"课程"},{id:2,name:"课程"},{id:3,name:"课程课程课程课程课程课程课程课程课程课程"},{id:4,name:"课程"}]}},computed:(0,a.Z)({swiper:function(){return this.$refs.mySwiper.swiper},courseName:function(){return this.courseList[this.sideIndex].name+this.sideIndex},screenCourse:{get:function(){return this.$store.state.p.screenCourse},set:function(e){this.changeScreenCourse(e)}}},(0,r.rn)({selectId:function(e){return e.p.selectItem.selectId}})),methods:(0,a.Z)((0,a.Z)((0,a.Z)({},(0,r.nv)("p",["replaceContent"])),(0,r.OI)({changeScreenCourse:"p/changeScreenCourse"})),{},{changeStudent:function(e){console.log(e)},handleOk:function(){this.modal.visible=!1},changeIndex:function(e){this.$store.dispatch("p/changeSelectId",""),this.tabIndex=e,"0"===e?this.$router.push({path:"/course/created",query:{catalogId:this.$route.query.catalogId}}):"1"===e?this.$router.push({path:"/course/processing",query:{catalogId:this.$route.query.catalogId}}):"2"===e&&this.$router.push({path:"/course/result",query:{catalogId:this.$route.query.catalogId}})},dropdownClick:function(e){var t=e.key;switch(t){case"0":break;case"1":break;case"2":this.$confirm({title:"是否确定要删除这个课程?",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}});break}},slidePrev:function(){this.swiper.isBeginning?this.$message.warning("已经是第一个课程了！"):this.swiper.slidePrev()},slideNext:function(){this.swiper.isEnd?this.$message.warning("已经是最后一个课程了！"):this.swiper.slideNext()}})},l=c,u=s(35471),d=(0,u.Z)(l,n,i,!1,null,"0c0a8bb6",null),p=d.exports}}]);