import{C as a}from"./_@antv_g2@5.2.0@@antv-DScV2yeO.js";import{r as p}from"./_@vue_reactivity@3.4.31@@vue-_cdX2NTa.js";import{k as m,J as n,K as l}from"./_@vue_runtime-core@3.4.31@@vue-C45AgzYG.js";import"./_@antv_util@3.3.7@@antv-rk1Gsl7O.js";import"./_tslib@2.6.3@tslib-Ck5hgXZz.js";import"./_d3-dsv@3.0.1@d3-dsv-BptE8-Pl.js";import"./_d3-array@3.2.4@d3-array-Co-Hp_u_.js";import"./_internmap@2.0.3@internmap-BkD7Hj8s.js";import"./_pdfast@0.2.0@pdfast-CcdYfsg5.js";import"./_color-name@1.1.4@color-name-CcmCnoP0.js";import"./_@antv_scale@0.4.16@@antv-D3eIfOil.js";import"./_fecha@4.2.3@fecha-DFkiGBGG.js";import"./_color-string@1.9.1@color-string-B3fHpME3.js";import"./_simple-swizzle@0.2.2@simple-swizzle-F5-gyE2C.js";import"./_is-arrayish@0.3.2@is-arrayish-ie3Qs_5r.js";import"./_@antv_g-camera-api@2.0.6@@antv-BvG1rvFb.js";import"./_@antv_g-lite@2.0.5@@antv-O0rSGUp-.js";import"./_eventemitter3@5.0.1@eventemitter3-BzHtO6iw.js";import"./_gl-matrix@3.4.3@gl-matrix-Cx0TVU2o.js";import"./_@antv_g-math@3.0.0@@antv-CUxi46E3.js";import"./_d3-color@3.1.0@d3-color-BBHDXmAz.js";import"./_@antv_g-web-animations-api@2.0.6@@antv-_DC3mz6N.js";import"./_d3-shape@3.2.0@d3-shape-CEsrIXAB.js";import"./_d3-path@3.1.0@d3-path-DKbKBQE1.js";import"./_@antv_component@2.0.1@@antv-BNr-0t_K.js";import"./_flru@1.0.2@flru-DUL4jbEG.js";import"./_d3-format@3.1.0@d3-format-bxs9DvuO.js";import"./_d3-hierarchy@3.1.2@d3-hierarchy-BPhq79KU.js";import"./_d3-geo@3.1.1@d3-geo-COQJtddl.js";import"./_d3-force@3.0.0@d3-force-DGzZD30h.js";import"./_d3-timer@3.0.1@d3-timer-N3g7Zl0V.js";import"./_d3-dispatch@3.0.1@d3-dispatch-kxCwF96_.js";import"./_d3-quadtree@3.0.1@d3-quadtree-CSANTnla.js";import"./_fmin@0.0.2@fmin-C0w-UDpa.js";import"./_@antv_g-canvas@2.0.7@@antv-BOQA1vbH.js";import"./_@antv_g-plugin-canvas-path-generator@2.0.5@@antv-DBQIeuxu.js";import"./_@antv_g-plugin-canvas-picker@2.0.6@@antv-BogTKf5c.js";import"./_@antv_g-plugin-canvas-renderer@2.0.6@@antv-CK8ezboO.js";import"./_@antv_g-plugin-dom-interaction@2.0.5@@antv-Cua4VLnP.js";import"./_@antv_g-plugin-html-renderer@2.0.6@@antv-DqhoQUA0.js";import"./_@antv_g-plugin-image-loader@2.0.5@@antv-B-_XT6Yx.js";import"./_@antv_g-plugin-dragndrop@2.0.5@@antv-BWuBaB6b.js";import"./_@antv_event-emitter@0.1.3@@antv-DTNngQpS.js";import"./_@antv_coord@0.4.7@@antv-B0_j16h3.js";import"./_@antv_util@2.0.17@@antv-lD_Cnoea.js";import"./_d3-scale-chromatic@3.1.0@d3-scale-chromatic-BTpcBJfM.js";import"./_d3-interpolate@3.0.1@d3-interpolate-DA4Lgw8s.js";import"./_@vue_shared@3.4.31@@vue-BEchggoN.js";const ar={__name:"LineAreaChart",setup(c){const t=p(),o=()=>{const e=[{year:"1月",value:15468},{year:"2月",value:16100},{year:"3月",value:15900},{year:"4月",value:17409},{year:"5月",value:17e3},{year:"6月",value:31056},{year:"7月",value:31982}],r=new a({container:t.value,autoFit:!0,padding:"auto"});r.data(e),r.area().encode("x",i=>i.year).encode("y","value").encode("shape","area").style("opacity",.2).axis("y",{labelFormatter:"~s",title:!1}),r.line().encode("x","year").encode("y","value").encode("shape","line"),r.render()};return m(()=>{o()}),(e,r)=>(n(),l("div",{ref_key:"lineAreaChart",ref:t,style:{height:"300px"}},null,512))}};export{ar as default};
