import{M as E,r as y,O as ct,Q as ht}from"./_@antv_g-lite@2.0.5@@antv-O0rSGUp-.js";import{_ as lt,a as K,b}from"./_tslib@2.6.3@tslib-Ck5hgXZz.js";import{g as P,p as B,d as dt}from"./_@antv_util@3.3.7@@antv-rk1Gsl7O.js";var Q=function(t){lt(i,t);function i(e,n,r,s){var a=t.call(this,e)||this;return a.currentTime=r,a.timelineTime=s,a.target=n,a.type="finish",a.bubbles=!1,a.currentTarget=n,a.defaultPrevented=!1,a.eventPhase=a.AT_TARGET,a.timeStamp=Date.now(),a.currentTime=r,a.timelineTime=s,a}return i}(ct),pt=0,vt=function(){function t(i,e){var n;this.currentTimePending=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._playbackRate=1,this._inTimeline=!0,this.effect=i,i.animation=this,this.timeline=e,this.id="".concat(pt++),this._inEffect=!!this.effect.update(0),this._totalDuration=Number((n=this.effect)===null||n===void 0?void 0:n.getComputedTiming().endTime),this._holdTime=0,this._paused=!1,this.oldPlayState="idle",this.updatePromises()}return Object.defineProperty(t.prototype,"pending",{get:function(){return this._startTime===null&&!this._paused&&this.playbackRate!==0||this.currentTimePending},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"playState",{get:function(){return this._idle?"idle":this._isFinished?"finished":this._paused?"paused":"running"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){var i=this;return this.readyPromise||(this.timeline.animationsWithPromises.indexOf(this)===-1&&this.timeline.animationsWithPromises.push(this),this.readyPromise=new Promise(function(e,n){i.resolveReadyPromise=function(){e(i)},i.rejectReadyPromise=function(){n(new Error)}}),this.pending||this.resolveReadyPromise()),this.readyPromise},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"finished",{get:function(){var i=this;return this.finishedPromise||(this.timeline.animationsWithPromises.indexOf(this)===-1&&this.timeline.animationsWithPromises.push(this),this.finishedPromise=new Promise(function(e,n){i.resolveFinishedPromise=function(){e(i)},i.rejectFinishedPromise=function(){n(new Error)}}),this.playState==="finished"&&this.resolveFinishedPromise()),this.finishedPromise},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentTime",{get:function(){return this.updatePromises(),this._idle||this.currentTimePending?null:this._currentTime},set:function(i){var e;i=Number(i),!isNaN(i)&&(this.timeline.restart(),!this._paused&&this._startTime!==null&&(this._startTime=Number((e=this.timeline)===null||e===void 0?void 0:e.currentTime)-i/this.playbackRate),this.currentTimePending=!1,this._currentTime!==i&&(this._idle&&(this._idle=!1,this._paused=!0),this.tickCurrentTime(i,!0),this.timeline.applyDirtiedAnimation(this)))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"startTime",{get:function(){return this._startTime},set:function(i){if(i!==null){if(this.updatePromises(),i=Number(i),isNaN(i)||this._paused||this._idle)return;this._startTime=i,this.tickCurrentTime((Number(this.timeline.currentTime)-this._startTime)*this.playbackRate),this.timeline.applyDirtiedAnimation(this),this.updatePromises()}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(i){if(i!==this._playbackRate){this.updatePromises();var e=this.currentTime;this._playbackRate=i,this.startTime=null,this.playState!=="paused"&&this.playState!=="idle"&&(this._finishedFlag=!1,this._idle=!1,this.ensureAlive(),this.timeline.applyDirtiedAnimation(this)),e!==null&&(this.currentTime=e),this.updatePromises()}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_isFinished",{get:function(){return!this._idle&&(this._playbackRate>0&&Number(this._currentTime)>=this._totalDuration||this._playbackRate<0&&Number(this._currentTime)<=0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"totalDuration",{get:function(){return this._totalDuration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_needsTick",{get:function(){return this.pending||this.playState==="running"||!this._finishedFlag},enumerable:!1,configurable:!0}),t.prototype.updatePromises=function(){var i=this.oldPlayState,e=this.pending?"pending":this.playState;return this.readyPromise&&e!==i&&(e==="idle"?(this.rejectReadyPromise(),this.readyPromise=void 0):i==="pending"?this.resolveReadyPromise():e==="pending"&&(this.readyPromise=void 0)),this.finishedPromise&&e!==i&&(e==="idle"?(this.rejectFinishedPromise(),this.finishedPromise=void 0):e==="finished"?this.resolveFinishedPromise():i==="finished"&&(this.finishedPromise=void 0)),this.oldPlayState=e,this.readyPromise||this.finishedPromise},t.prototype.play=function(){this.updatePromises(),this._paused=!1,(this._isFinished||this._idle)&&(this.rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this.ensureAlive(),this.timeline.applyDirtiedAnimation(this),this.timeline.animations.indexOf(this)===-1&&this.timeline.animations.push(this),this.updatePromises()},t.prototype.pause=function(){this.updatePromises(),this.currentTime&&(this._holdTime=this.currentTime),!this._isFinished&&!this._paused&&!this._idle?this.currentTimePending=!0:this._idle&&(this.rewind(),this._idle=!1),this._startTime=null,this._paused=!0,this.updatePromises()},t.prototype.finish=function(){this.updatePromises(),!this._idle&&(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this.currentTimePending=!1,this.timeline.applyDirtiedAnimation(this),this.updatePromises())},t.prototype.cancel=function(){var i=this;if(this.updatePromises(),!!this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this.effect.update(null),this.timeline.applyDirtiedAnimation(this),this.updatePromises(),this.oncancel)){var e=new Q(null,this,this.currentTime,null);setTimeout(function(){i.oncancel(e)})}},t.prototype.reverse=function(){this.updatePromises();var i=this.currentTime;this.playbackRate*=-1,this.play(),i!==null&&(this.currentTime=i),this.updatePromises()},t.prototype.updatePlaybackRate=function(i){this.playbackRate=i},t.prototype.targetAnimations=function(){var i,e=(i=this.effect)===null||i===void 0?void 0:i.target;return e.getAnimations()},t.prototype.markTarget=function(){var i=this.targetAnimations();i.indexOf(this)===-1&&i.push(this)},t.prototype.unmarkTarget=function(){var i=this.targetAnimations(),e=i.indexOf(this);e!==-1&&i.splice(e,1)},t.prototype.tick=function(i,e){!this._idle&&!this._paused&&(this._startTime===null?e&&(this.startTime=i-this._currentTime/this.playbackRate):this._isFinished||this.tickCurrentTime((i-this._startTime)*this.playbackRate)),e&&(this.currentTimePending=!1,this.fireEvents(i))},t.prototype.rewind=function(){if(this.playbackRate>=0)this.currentTime=0;else if(this._totalDuration<1/0)this.currentTime=this._totalDuration;else throw new Error("Unable to rewind negative playback rate animation with infinite duration")},t.prototype.persist=function(){throw new Error(E)},t.prototype.addEventListener=function(i,e,n){throw new Error(E)},t.prototype.removeEventListener=function(i,e,n){throw new Error(E)},t.prototype.dispatchEvent=function(i){throw new Error(E)},t.prototype.commitStyles=function(){throw new Error(E)},t.prototype.ensureAlive=function(){var i,e;this.playbackRate<0&&this.currentTime===0?this._inEffect=!!(!((i=this.effect)===null||i===void 0)&&i.update(-1)):this._inEffect=!!(!((e=this.effect)===null||e===void 0)&&e.update(this.currentTime)),!this._inTimeline&&(this._inEffect||!this._finishedFlag)&&(this._inTimeline=!0,this.timeline.animations.push(this))},t.prototype.tickCurrentTime=function(i,e){i!==this._currentTime&&(this._currentTime=i,this._isFinished&&!e&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this.ensureAlive())},t.prototype.fireEvents=function(i){var e=this;if(this._isFinished){if(!this._finishedFlag){if(this.onfinish){var n=new Q(null,this,this.currentTime,i);setTimeout(function(){e.onfinish&&e.onfinish(n)})}this._finishedFlag=!0}}else{if(this.onframe&&this.playState==="running"){var r=new Q(null,this,this.currentTime,i);this.onframe(r)}this._finishedFlag=!1}},t}(),mt=4,yt=.001,_t=1e-7,bt=10,w=11,O=1/(w-1),gt=typeof Float32Array=="function",et=function(t,i){return 1-3*i+3*t},nt=function(t,i){return 3*i-6*t},rt=function(t){return 3*t},W=function(t,i,e){return((et(i,e)*t+nt(i,e))*t+rt(i))*t},st=function(t,i,e){return 3*et(i,e)*t*t+2*nt(i,e)*t+rt(i)},Tt=function(t,i,e,n,r){var s,a,o=0;do a=i+(e-i)/2,s=W(a,n,r)-t,s>0?e=a:i=a;while(Math.abs(s)>_t&&++o<bt);return a},Pt=function(t,i,e,n){for(var r=0;r<mt;++r){var s=st(i,e,n);if(s===0)return i;var a=W(i,e,n)-t;i-=a/s}return i},G=function(t,i,e,n){if(!(0<=t&&t<=1&&0<=e&&e<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===i&&e===n)return function(o){return o};for(var r=gt?new Float32Array(w):new Array(w),s=0;s<w;++s)r[s]=W(s*O,t,e);var a=function(o){for(var f=0,c=1,h=w-1;c!==h&&r[c]<=o;++c)f+=O;--c;var u=(o-r[c])/(r[c+1]-r[c]),d=f+u*O,l=st(d,t,e);return l>=yt?Pt(o,d,t,e):l===0?d:Tt(o,f,f+O,t,e)};return function(o){return o===0||o===1?o:W(a(o),i,n)}},Et=function(t){return t=t.replace(/([A-Z])/g,function(i){return"-".concat(i.toLowerCase())}),t.charAt(0)==="-"?t.substring(1):t},k=function(t){return Math.pow(t,2)},S=function(t){return Math.pow(t,3)},F=function(t){return Math.pow(t,4)},N=function(t){return Math.pow(t,5)},R=function(t){return Math.pow(t,6)},M=function(t){return 1-Math.cos(t*Math.PI/2)},D=function(t){return 1-Math.sqrt(1-t*t)},x=function(t){return t*t*(3*t-2)},C=function(t){for(var i,e=4;t<((i=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((i*3-2)/22-t,2)},q=function(t,i){i===void 0&&(i=[]);var e=b(i,2),n=e[0],r=n===void 0?1:n,s=e[1],a=s===void 0?.5:s,o=P(Number(r),1,10),f=P(Number(a),.1,2);return t===0||t===1?t:-o*Math.pow(2,10*(t-1))*Math.sin((t-1-f/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/f)},A=function(t,i,e){i===void 0&&(i=[]);var n=b(i,4),r=n[0],s=r===void 0?1:r,a=n[1],o=a===void 0?100:a,f=n[2],c=f===void 0?10:f,h=n[3],u=h===void 0?0:h;s=P(s,.1,1e3),o=P(o,.1,1e3),c=P(c,.1,1e3),u=P(u,.1,1e3);var d=Math.sqrt(o/s),l=c/(2*Math.sqrt(o*s)),g=l<1?d*Math.sqrt(1-l*l):0,T=1,Z=l<1?(l*d+-u)/g:-u+d,_=e?e*t/1e3:t;return l<1?_=Math.exp(-_*l*d)*(T*Math.cos(g*_)+Z*Math.sin(g*_)):_=(T+Z*_)*Math.exp(-_*d),t===0||t===1?t:1-_},U=function(t,i){i===void 0&&(i=[]);var e=b(i,2),n=e[0],r=n===void 0?10:n,s=e[1],a=s=="start"?Math.ceil:Math.floor;return a(P(t,0,1)*r)/r},H=function(t,i){i===void 0&&(i=[]);var e=b(i,4),n=e[0],r=e[1],s=e[2],a=e[3];return G(n,r,s,a)(t)},j=G(.42,0,1,1),p=function(t){return function(i,e,n){return e===void 0&&(e=[]),1-t(1-i,e,n)}},v=function(t){return function(i,e,n){return e===void 0&&(e=[]),i<.5?t(i*2,e,n)/2:1-t(i*-2+2,e,n)/2}},m=function(t){return function(i,e,n){return e===void 0&&(e=[]),i<.5?(1-t(1-i*2,e,n))/2:(t(i*2-1,e,n)+1)/2}},J={steps:U,"step-start":function(t){return U(t,[1,"start"])},"step-end":function(t){return U(t,[1,"end"])},linear:function(t){return t},"cubic-bezier":H,ease:function(t){return H(t,[.25,.1,.25,1])},in:j,out:p(j),"in-out":v(j),"out-in":m(j),"in-quad":k,"out-quad":p(k),"in-out-quad":v(k),"out-in-quad":m(k),"in-cubic":S,"out-cubic":p(S),"in-out-cubic":v(S),"out-in-cubic":m(S),"in-quart":F,"out-quart":p(F),"in-out-quart":v(F),"out-in-quart":m(F),"in-quint":N,"out-quint":p(N),"in-out-quint":v(N),"out-in-quint":m(N),"in-expo":R,"out-expo":p(R),"in-out-expo":v(R),"out-in-expo":m(R),"in-sine":M,"out-sine":p(M),"in-out-sine":v(M),"out-in-sine":m(M),"in-circ":D,"out-circ":p(D),"in-out-circ":v(D),"out-in-circ":m(D),"in-back":x,"out-back":p(x),"in-out-back":v(x),"out-in-back":m(x),"in-bounce":C,"out-bounce":p(C),"in-out-bounce":v(C),"out-in-bounce":m(C),"in-elastic":q,"out-elastic":p(q),"in-out-elastic":v(q),"out-in-elastic":m(q),spring:A,"spring-in":A,"spring-out":p(A),"spring-in-out":v(A),"spring-out-in":m(A)},At=function(t){return Et(t).replace(/^ease-/,"").replace(/(\(|\s).+/,"").toLowerCase().trim()},wt=function(t){return J[At(t)]||J.linear},Ot=function(t){return t},kt=1,St=.5,Y=0;function $(t,i){return function(e){if(e>=1)return 1;var n=1/t;return e+=i*n,e-e%n}}var z="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",Ft=new RegExp("cubic-bezier\\("+z+","+z+","+z+","+z+"\\)"),Nt=/steps\(\s*(\d+)\s*\)/,Rt=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/;function L(t){var i=Ft.exec(t);if(i)return G.apply(void 0,K([],b(i.slice(1).map(Number)),!1));var e=Nt.exec(t);if(e)return $(Number(e[1]),Y);var n=Rt.exec(t);return n?$(Number(n[1]),{start:kt,middle:St,end:Y}[n[2]]):wt(t)}function Mt(t){return Math.abs(Dt(t)/(t.playbackRate||1))}function Dt(t){var i;return t.duration===0||t.iterations===0?0:(t.duration==="auto"?0:Number(t.duration))*((i=t.iterations)!==null&&i!==void 0?i:1)}var at=0,V=1,I=2,ot=3;function xt(t,i,e){if(i===null)return at;var n=e.endTime;return i<Math.min(e.delay,n)?V:i>=Math.min(e.delay+t+e.endDelay,n)?I:ot}function Ct(t,i,e,n,r){switch(n){case V:return i==="backwards"||i==="both"?0:null;case ot:return e-r;case I:return i==="forwards"||i==="both"?t:null;case at:return null}}function qt(t,i,e,n,r){var s=r;return t===0?i!==V&&(s+=e):s+=n/t,s}function jt(t,i,e,n,r,s){var a=t===1/0?i%1:t%1;return a===0&&e===I&&n!==0&&(r!==0||s===0)&&(a=1),a}function zt(t,i,e,n){return t===I&&i===1/0?1/0:e===1?Math.floor(n)-1:Math.floor(n)}function Kt(t,i,e){var n=t;if(t!=="normal"&&t!=="reverse"){var r=i;t==="alternate-reverse"&&(r+=1),n="normal",r!==1/0&&r%2!==0&&(n="reverse")}return n==="normal"?e:1-e}function Wt(t,i,e){var n=xt(t,i,e),r=Ct(t,e.fill,i,n,e.delay);if(r===null)return null;var s=e.duration==="auto"?0:e.duration,a=qt(s,n,e.iterations,r,e.iterationStart),o=jt(a,e.iterationStart,n,e.iterations,r,s),f=zt(n,e.iterations,o,a),c=Kt(e.direction,f,o);return e.currentIteration=f,e.progress=c,e.easingFunction(c)}function It(t,i,e){var n=Bt(t,i),r=Qt(n,e);return function(s,a){if(a!==null)r.filter(function(f){return a>=f.applyFrom&&a<f.applyTo}).forEach(function(f){var c=a-f.startOffset,h=f.endOffset-f.startOffset,u=h===0?0:c/h;s.setAttribute(f.property,f.interpolation(u),!1,!1)});else for(var o in n)ut(o)&&s.setAttribute(o,null)}}function ut(t){return t!=="offset"&&t!=="easing"&&t!=="composite"&&t!=="computedOffset"}function Bt(t,i){for(var e={},n=0;n<t.length;n++)for(var r in t[n])if(ut(r)){var s={offset:t[n].offset,computedOffset:t[n].computedOffset,easing:t[n].easing,easingFunction:L(t[n].easing)||i.easingFunction,value:t[n][r]};e[r]=e[r]||[],e[r].push(s)}return e}function Qt(t,i){var e=[];for(var n in t)for(var r=t[n],s=0;s<r.length-1;s++){var a=s,o=s+1,f=r[a].computedOffset,c=r[o].computedOffset,h=f,u=c;s===0&&(h=-1/0,c===0&&(o=a)),s===r.length-2&&(u=1/0,f===1&&(a=o)),e.push({applyFrom:h,applyTo:u,startOffset:r[a].computedOffset,endOffset:r[o].computedOffset,easingFunction:r[a].easingFunction,property:n,interpolation:Ut(n,r[a].value,r[o].value,i)})}return e.sort(function(d,l){return d.startOffset-l.startOffset}),e}var X=function(t,i,e){return function(n){var r=ft(t,i,n);return!y.enableCSSParsing&&dt(r)?r:e(r)}};function Ut(t,i,e,n){var r=ht[t];if(r&&r.syntax&&r.int){var s=y.styleValueRegistry.getPropertySyntax(r.syntax);if(s){var a=void 0,o=void 0;if(y.enableCSSParsing){var f=y.styleValueRegistry.parseProperty(t,i,n,!1),c=y.styleValueRegistry.parseProperty(t,e,n,!1);a=y.styleValueRegistry.computeProperty(t,f,n,!1),o=y.styleValueRegistry.computeProperty(t,c,n,!1)}else{var h=s.parserWithCSSDisabled;a=h?h(i,n):i,o=h?h(e,n):e}var u=s.mixer(a,o,n);if(u){var d=X.apply(void 0,K([],b(u),!1));return function(l){return l===0?i:l===1?e:d(l)}}}}return X(!1,!0,function(l){return l?e:i})}function ft(t,i,e){if(typeof t=="number"&&typeof i=="number")return t*(1-e)+i*e;if(typeof t=="boolean"&&typeof i=="boolean"||typeof t=="string"&&typeof i=="string")return e<.5?t:i;if(Array.isArray(t)&&Array.isArray(i)){for(var n=t.length,r=i.length,s=Math.max(n,r),a=[],o=0;o<s;o++)a.push(ft(t[o<n?o:n-1],i[o<r?o:r-1],e));return a}throw new Error("Mismatched interpolation arguments "+t+":"+i)}var Gt=function(){function t(){this.delay=0,this.direction="normal",this.duration="auto",this._easing="linear",this.easingFunction=Ot,this.endDelay=0,this.fill="auto",this.iterationStart=0,this.iterations=1,this.currentIteration=null,this.progress=null}return Object.defineProperty(t.prototype,"easing",{get:function(){return this._easing},set:function(i){this.easingFunction=L(i),this._easing=i},enumerable:!1,configurable:!0}),t}();function Lt(t){var i=[];for(var e in t)if(!(e in["easing","offset","composite"])){var n=t[e];Array.isArray(n)||(n=[n]);for(var r=n.length,s=0;s<r;s++){if(!i[s]){var a={};"offset"in t&&(a.offset=Number(t.offset)),"easing"in t&&(a.easing=t.easing),"composite"in t&&(a.composite=t.composite),i[s]=a}n[s]!==void 0&&n[s]!==null&&(i[s][e]=n[s])}}return i.sort(function(o,f){return(o.computedOffset||0)-(f.computedOffset||0)}),i}function tt(t,i){if(t===null)return[];Array.isArray(t)||(t=Lt(t));for(var e=t.map(function(f){var c={};i!=null&&i.composite&&(c.composite="auto");for(var h in f){var u=f[h];if(h==="offset"){if(u!==null){if(u=Number(u),!isFinite(u))throw new Error("Keyframe offsets must be numbers.");if(u<0||u>1)throw new Error("Keyframe offsets must be between 0 and 1.");c.computedOffset=u}}else if(h==="composite"&&["replace","add","accumulate","auto"].indexOf(u)===-1)throw new Error("".concat(u," compositing is not supported"));c[h]=u}return c.offset===void 0&&(c.offset=null),c.easing===void 0&&(c.easing=(i==null?void 0:i.easing)||"linear"),c.composite===void 0&&(c.composite="auto"),c}),n=!0,r=-1/0,s=0;s<e.length;s++){var a=e[s].offset;if(B(a))n=!1;else{if(a<r)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");r=a}}e=e.filter(function(f){return Number(f.offset)>=0&&Number(f.offset)<=1});function o(){var f,c,h=e.length;e[h-1].computedOffset=Number((f=e[h-1].offset)!==null&&f!==void 0?f:1),h>1&&(e[0].computedOffset=Number((c=e[0].offset)!==null&&c!==void 0?c:0));for(var u=0,d=Number(e[0].computedOffset),l=1;l<h;l++){var g=e[l].computedOffset;if(!B(g)&&!B(d)){for(var T=1;T<l-u;T++)e[u+T].computedOffset=d+(Number(g)-d)*T/(l-u);u=l,d=Number(g)}}}return n||o(),e}var Vt="backwards|forwards|both|none".split("|"),Zt="reverse|alternate|alternate-reverse".split("|");function Ht(t,i){var e=new Gt;return typeof t=="number"&&!isNaN(t)?e.duration=t:t!==void 0&&Object.keys(t).forEach(function(n){if(t[n]!==void 0&&t[n]!==null&&t[n]!=="auto"){if((typeof e[n]=="number"||n==="duration")&&(typeof t[n]!="number"||isNaN(t[n]))||n==="fill"&&Vt.indexOf(t[n])===-1||n==="direction"&&Zt.indexOf(t[n])===-1)return;e[n]=t[n]}}),e}function Jt(t,i){return t=Yt(t??{duration:"auto"}),Ht(t)}function Yt(t){return typeof t=="number"&&(isNaN(t)?t={duration:"auto"}:t={duration:t}),t}var $t=function(){function t(i,e,n){var r=this;this.composite="replace",this.iterationComposite="replace",this.target=i,this.timing=Jt(n),this.timing.effect=this,this.timing.activeDuration=Mt(this.timing),this.timing.endTime=Math.max(0,this.timing.delay+this.timing.activeDuration+this.timing.endDelay),this.normalizedKeyframes=tt(e,this.timing),this.interpolations=It(this.normalizedKeyframes,this.timing,this.target);var s=y.globalThis.Proxy;this.computedTiming=s?new s(this.timing,{get:function(a,o){return o==="duration"?a.duration==="auto"?0:a.duration:o==="fill"?a.fill==="auto"?"none":a.fill:o==="localTime"?r.animation&&r.animation.currentTime||null:o==="currentIteration"?!r.animation||r.animation.playState!=="running"?null:a.currentIteration||0:o==="progress"?!r.animation||r.animation.playState!=="running"?null:a.progress||0:a[o]},set:function(){return!0}}):this.timing}return t.prototype.applyInterpolations=function(){this.interpolations(this.target,Number(this.timeFraction))},t.prototype.update=function(i){return i===null?!1:(this.timeFraction=Wt(this.timing.activeDuration,i,this.timing),this.timeFraction!==null)},t.prototype.getKeyframes=function(){return this.normalizedKeyframes},t.prototype.setKeyframes=function(i){this.normalizedKeyframes=tt(i)},t.prototype.getComputedTiming=function(){return this.computedTiming},t.prototype.getTiming=function(){return this.timing},t.prototype.updateTiming=function(i){var e=this;Object.keys(i||{}).forEach(function(n){e.timing[n]=i[n]})},t}();function it(t,i){return Number(t.id)-Number(i.id)}var Xt=function(){function t(i){var e=this;this.document=i,this.animations=[],this.ticking=!1,this.timelineTicking=!1,this.hasRestartedThisFrame=!1,this.animationsWithPromises=[],this.inTick=!1,this.pendingEffects=[],this.currentTime=null,this.rafId=0,this.rafCallbacks=[],this.webAnimationsNextTick=function(n){e.currentTime=n,e.discardAnimations(),e.animations.length===0?e.timelineTicking=!1:e.requestAnimationFrame(e.webAnimationsNextTick)},this.processRafCallbacks=function(n){var r=e.rafCallbacks;e.rafCallbacks=[],n<Number(e.currentTime)&&(n=Number(e.currentTime)),e.animations.sort(it),e.animations=e.tick(n,!0,e.animations)[0],r.forEach(function(s){s[1](n)}),e.applyPendingEffects()}}return t.prototype.getAnimations=function(){return this.discardAnimations(),this.animations.slice()},t.prototype.isTicking=function(){return this.inTick},t.prototype.play=function(i,e,n){var r=new $t(i,e,n),s=new vt(r,this);return this.animations.push(s),this.restartWebAnimationsNextTick(),s.updatePromises(),s.play(),s.updatePromises(),s},t.prototype.applyDirtiedAnimation=function(i){var e=this;if(!this.inTick){i.markTarget();var n=i.targetAnimations();n.sort(it);var r=this.tick(Number(this.currentTime),!1,n.slice())[1];r.forEach(function(s){var a=e.animations.indexOf(s);a!==-1&&e.animations.splice(a,1)}),this.applyPendingEffects()}},t.prototype.restart=function(){return this.ticking||(this.ticking=!0,this.requestAnimationFrame(function(){}),this.hasRestartedThisFrame=!0),this.hasRestartedThisFrame},t.prototype.destroy=function(){this.document.defaultView.cancelAnimationFrame(this.frameId)},t.prototype.applyPendingEffects=function(){this.pendingEffects.forEach(function(i){i==null||i.applyInterpolations()}),this.pendingEffects=[]},t.prototype.updateAnimationsPromises=function(){this.animationsWithPromises=this.animationsWithPromises.filter(function(i){return i.updatePromises()})},t.prototype.discardAnimations=function(){this.updateAnimationsPromises(),this.animations=this.animations.filter(function(i){return i.playState!=="finished"&&i.playState!=="idle"})},t.prototype.restartWebAnimationsNextTick=function(){this.timelineTicking||(this.timelineTicking=!0,this.requestAnimationFrame(this.webAnimationsNextTick))},t.prototype.rAF=function(i){var e=this.rafId++;return this.rafCallbacks.length===0&&(this.frameId=this.document.defaultView.requestAnimationFrame(this.processRafCallbacks)),this.rafCallbacks.push([e,i]),e},t.prototype.requestAnimationFrame=function(i){var e=this;return this.rAF(function(n){e.updateAnimationsPromises(),i(n),e.updateAnimationsPromises()})},t.prototype.tick=function(i,e,n){var r,s,a=this;this.inTick=!0,this.hasRestartedThisFrame=!1,this.currentTime=i,this.ticking=!1;var o=[],f=[],c=[],h=[];return n.forEach(function(u){u.tick(i,e),u._inEffect?(f.push(u.effect),u.markTarget()):(o.push(u.effect),u.unmarkTarget()),u._needsTick&&(a.ticking=!0);var d=u._inEffect||u._needsTick;u._inTimeline=d,d?c.push(u):h.push(u)}),(r=this.pendingEffects).push.apply(r,K([],b(o),!1)),(s=this.pendingEffects).push.apply(s,K([],b(f),!1)),this.ticking&&this.requestAnimationFrame(function(){}),this.inTick=!1,[c,h]},t}();y.EasingFunction=L;y.AnimationTimeline=Xt;
