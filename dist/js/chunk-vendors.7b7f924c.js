(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},"0234":function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.pushParams=u,e.popParams=l,e.withParams=p,e._setTarget=e.target=void 0;var o=[],a=null;e.target=a;var c=function(t){e.target=a=t};function u(){null!==a&&o.push(a),e.target=a={}}function l(){var t=a,n=e.target=a=o.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function h(t){if("object"!==s(t)||Array.isArray(t))throw new Error("params must be an object");e.target=a=i({},a,t)}function d(t,e){return f((function(n){return function(){n(t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e.apply(this,r)}}))}function f(t){var e=t(h);return function(){u();try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.apply(this,n)}finally{l()}}}function p(t,e){return"object"===s(t)&&void 0!==e?d(t,e):f(t)}e._setTarget=c},"0366":function(t,e,n){var i=n("59ed");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},"0481":function(t,e,n){"use strict";var i=n("23e7"),r=n("a2bf"),s=n("7b0b"),o=n("07fa"),a=n("5926"),c=n("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),n=o(e),i=c(e,0);return i.length=r(i,e,e,n,0,void 0===t?1:a(t)),i}})},"04d1":function(t,e,n){var i=n("342f"),r=i.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"0538":function(t,e,n){"use strict";var i=n("59ed"),r=n("861d"),s=[].slice,o={},a=function(t,e,n){if(!(e in o)){for(var i=[],r=0;r<e;r++)i[r]="a["+r+"]";o[e]=Function("C,a","return new C("+i.join(",")+")")}return o[e](t,n)};t.exports=Function.bind||function(t){var e=i(this),n=s.call(arguments,1),o=function(){var i=n.concat(s.call(arguments));return this instanceof o?a(e,i.length,i):e.apply(t,i)};return r(e.prototype)&&(o.prototype=e.prototype),o}},"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?a(t):r(i(t))}},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var i=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"06cf":function(t,e,n){var i=n("83ab"),r=n("d1e7"),s=n("5c6c"),o=n("fc6a"),a=n("a04b"),c=n("1a2d"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=i?l:function(t,e){if(t=o(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return s(!r.f.call(t,e),t[e])}},"0789":function(t,e,n){"use strict";n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return g}));var i=n("2909"),r=(n("99af"),n("d9f7"));function s(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var o="transition".concat(n.props.group?"-group":""),a={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(a.on.leave=s(a.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),a.on.afterLeave=s(a.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,r=e.left,s=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=r||"",t.style.width=s||"",t.style.height=o||""}}))),n.props.hideOnLeave&&(a.on.leave=s(a.on.leave,(function(t){t._initialDisplay=[t.style.display,t.style.getPropertyPriority("display")],t.style.setProperty("display","none","important")})),a.on.afterLeave=s(a.on.afterLeave,(function(t){var e;t&&(t._initialDisplay?(e=t.style).setProperty.apply(e,["display"].concat(Object(i["a"])(t._initialDisplay))):t.style.removeProperty("display"))}))),e(o,Object(r["a"])(n.data,a),n.children)}}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(r["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var c=n("ade3"),u=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(u["E"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(c["a"])({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var s="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(c["a"])({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},h=(o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition")),d=o("tab-reverse-transition"),f=(o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("dialog-top-transition"),o("fade-transition")),p=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition")),m=(o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),a("expand-transition",l())),g=a("expand-x-transition",l("",!0))},"07ac":function(t,e,n){var i=n("23e7"),r=n("6f53").values;i({target:"Object",stat:!0},{values:function(t){return r(t)}})},"07fa":function(t,e,n){var i=n("50c4");t.exports=function(t){return i(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ju})),n.d(e,"b",(function(){return Tc})),n.d(e,"c",(function(){return dc})),n.d(e,"d",(function(){return ec})),n.d(e,"e",(function(){return ou})),n.d(e,"f",(function(){return Ec})),n.d(e,"g",(function(){return x})),n.d(e,"h",(function(){return Cc})),n.d(e,"i",(function(){return au})),n.d(e,"j",(function(){return cu})),n.d(e,"k",(function(){return $})),n.d(e,"l",(function(){return Pu})),n.d(e,"m",(function(){return Ua})),n.d(e,"n",(function(){return st})),n.d(e,"o",(function(){return H})),n.d(e,"p",(function(){return Qa})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return K})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return Wa})),n.d(e,"u",(function(){return Wu})),n.d(e,"v",(function(){return nl})),n.d(e,"w",(function(){return el})),n.d(e,"x",(function(){return bc})),n.d(e,"y",(function(){return rc})),n.d(e,"z",(function(){return sc})),n.d(e,"A",(function(){return tc})),n.d(e,"B",(function(){return Hu})),n.d(e,"C",(function(){return Zu})),n.d(e,"D",(function(){return Sc})),n.d(e,"E",(function(){return oc})),n.d(e,"F",(function(){return gc})),n.d(e,"G",(function(){return vc})),n.d(e,"H",(function(){return _c})),n.d(e,"I",(function(){return Eu})),n.d(e,"J",(function(){return Iu})),n.d(e,"K",(function(){return pc})),n.d(e,"L",(function(){return Yu})),n.d(e,"M",(function(){return Ru})),n.d(e,"N",(function(){return Mu})),n.d(e,"O",(function(){return Fu})),n.d(e,"P",(function(){return Bu})),n.d(e,"Q",(function(){return Vu})),n.d(e,"R",(function(){return zu})),n.d(e,"S",(function(){return il})),n.d(e,"T",(function(){return bu})),n.d(e,"U",(function(){return wu})),n.d(e,"V",(function(){return xc})),n.d(e,"W",(function(){return Oc})),n.d(e,"X",(function(){return Ku})),n.d(e,"Y",(function(){return Gu})),n.d(e,"Z",(function(){return vu})),n.d(e,"ab",(function(){return fu})),n.d(e,"bb",(function(){return cc})),n.d(e,"cb",(function(){return ac})),n.d(e,"db",(function(){return Xu})),n.d(e,"eb",(function(){return tl})),n.d(e,"fb",(function(){return Uu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return lu})),n.d(e,"ib",(function(){return xu})),n.d(e,"jb",(function(){return Su})),n.d(e,"kb",(function(){return qu})),n.d(e,"lb",(function(){return wc})),n.d(e,"mb",(function(){return mu}));var i=n("5606"),r=n("ffa6"),s=n("4fc1"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(v);h.debug(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(v);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(v);h.warn(`Firestore (${l}): ${t}`,...n)}}function v(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||y()}function w(t,e){t||y()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class T{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new O;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new O,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new O)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j.T=-1;class D{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=N(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function P(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}function R(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new $(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new $(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function B(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===z.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof z?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends z{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends z{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.fields=t,t.sort(H.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q(t){if(b(!!t),"string"==typeof t){let e=0;const n=Y.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function X(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(t){const e=t.mapValue.fields.__previous_value__;return Z(e)?tt(e):e}function et(t){const e=Q(t.mapValue.fields.__local_write_time__.timestampValue);return new $(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return null==t}function it(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!it(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(U.fromString(t))}static fromName(t){return new st(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z(t)?4:10:y()}function at(t,e){const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return et(t).isEqual(et(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Q(t.timestampValue),i=Q(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return X(t.bytesValue).isEqual(X(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return J(t.geoPointValue.latitude)===J(e.geoPointValue.latitude)&&J(t.geoPointValue.longitude)===J(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return J(t.integerValue)===J(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=J(t.doubleValue),i=J(e.doubleValue);return n===i?it(n)===it(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(F(n)!==F(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!at(n[r],i[r])))return!1;return!0}(t,e);default:return y()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){const n=ot(t),i=ot(e);if(n!==i)return P(n,i);switch(n){case 0:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=J(t.integerValue||t.doubleValue),i=J(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return lt(t.timestampValue,e.timestampValue);case 4:return lt(et(t),et(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(t,e){const n=X(t),i=X(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=P(n[r],i[r]);if(0!==t)return t}return P(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=P(J(t.latitude),J(e.latitude));return 0!==n?n:P(J(t.longitude),J(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ut(n[r],i[r]);if(t)return t}return P(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=P(i[o],s[o]);if(0!==t)return t;const e=ut(n[i[o]],r[s[o]]);if(0!==e)return e}return P(i.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return P(t,e);const n=Q(t),i=Q(e),r=P(n.seconds,i.seconds);return 0!==r?r:P(n.nanos,i.nanos)}function ht(t){return dt(t)}function dt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Q(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?X(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,st.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=dt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${dt(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function ft(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pt(t){return!!t&&"integerValue"in t}function mt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yt(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return B(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=bt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bt(e)}setAll(t){let e=H.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=bt(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];yt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){B(e,(e,n)=>t[e]=n);for(const i of n)delete t[i]}clone(){return new wt(bt(this.value))}}function _t(t){const e=[];return B(t.fields,(t,n)=>{const i=new H([t]);if(yt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)}),new W(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class St{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new St(t,0,M.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new St(t,1,e,n,0)}static newNoDocument(t,e){return new St(t,2,e,wt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new St(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.A=null}}function Ot(t,e=null,n=[],i=[],r=null,s=null,o=null){return new xt(t,e,n,i,r,s,o)}function It(t){const e=_(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>At(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),nt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bt(e.startAt)),e.endAt&&(t+="|ub:",t+=Bt(e.endAt)),e.A=t}return e.A}function Et(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),nt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bt(t.startAt)),t.endAt&&(e+=", endAt: "+Bt(t.endAt)),`Target(${e})`}function Tt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!zt(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!at(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qt(t.startAt,e.startAt)&&qt(t.endAt,e.endAt)}function kt(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ct extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new jt(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new Rt(t,n):"not-in"===e?new $t(t,n):"array-contains-any"===e?new Mt(t,n):new Ct(t,e,n)}static R(t,e,n){return"in"===e?new Nt(t,n):new Dt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(ut(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.P(ut(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function At(t){return t.field.canonicalString()+t.op.toString()+ht(t.value)}class jt extends Ct{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.P(e)}}class Nt extends Ct{constructor(t,e){super(t,"in",e),this.keys=Pt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dt extends Ct{constructor(t,e){super(t,"not-in",e),this.keys=Pt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>st.fromName(t.referenceValue))}class Lt extends Ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mt(e)&&ct(e.arrayValue,this.value)}}class Rt extends Ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class $t extends Ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Mt extends Ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ft{constructor(t,e){this.position=t,this.before=e}}function Bt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ht(t)).join(",")}`}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ut(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ut(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function qt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Wt(t,e,n,i,r,s,o,a){return new Ht(t,e,n,i,r,s,o,a)}function Kt(t){return new Ht(t)}function Gt(t){return!nt(t.limit)&&"F"===t.limitType}function Yt(t){return!nt(t.limit)&&"L"===t.limitType}function Qt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Xt(t){return null!==t.collectionGroup}function Zt(t){const e=_(t);if(null===e.V){e.V=[];const t=Jt(e),n=Qt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Vt(t)),e.V.push(new Vt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Vt(H.keyField(),t))}}}return e.V}function te(t){const e=_(t);if(!e.S)if("F"===e.limitType)e.S=Ot(e.path,e.collectionGroup,Zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Zt(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Vt(r.field,e))}const n=e.endAt?new Ft(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Ft(e.startAt.position,!e.startAt.before):null;e.S=Ot(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.S}function ee(t,e,n){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ne(t,e){return Tt(te(t),te(e))&&t.limitType===e.limitType}function ie(t){return`${It(te(t))}|lt:${t.limitType}`}function re(t){return`Query(target=${Et(te(t))}; limitType=${t.limitType})`}function se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ut(t.startAt,Zt(t),e))&&(!t.endAt||!Ut(t.endAt,Zt(t),e))}(t,e)}function oe(t){return(e,n)=>{let i=!1;for(const r of Zt(t)){const t=ae(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function ae(t,e,n){const i=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ut(i,r):y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:it(e)?"-0":e}}function ue(t){return{integerValue:""+t}}function le(t,e){return rt(e)?ue(e):ce(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this._=void 0}}function de(t,e,n){return t instanceof me?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ge?ve(t,e):t instanceof ye?be(t,e):function(t,e){const n=pe(t,e),i=_e(n)+_e(t.C);return pt(n)&&pt(t.C)?ue(i):ce(t.N,i)}(t,e)}function fe(t,e,n){return t instanceof ge?ve(t,e):t instanceof ye?be(t,e):n}function pe(t,e){return t instanceof we?pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class me extends he{}class ge extends he{constructor(t){super(),this.elements=t}}function ve(t,e){const n=Se(e);for(const i of t.elements)n.some(t=>at(t,i))||n.push(i);return{arrayValue:{values:n}}}class ye extends he{constructor(t){super(),this.elements=t}}function be(t,e){let n=Se(e);for(const i of t.elements)n=n.filter(t=>!at(t,i));return{arrayValue:{values:n}}}class we extends he{constructor(t,e){super(),this.N=t,this.C=e}}function _e(t){return J(t.integerValue||t.doubleValue)}function Se(t){return mt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e){this.field=t,this.transform=e}}function Oe(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ge&&e instanceof ge||t instanceof ye&&e instanceof ye?L(t.elements,e.elements,at):t instanceof we&&e instanceof we?at(t.C,e.C):t instanceof me&&e instanceof me}(t.transform,e.transform)}class Ie{constructor(t,e){this.version=t,this.transformResults=e}}class Ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ee}static exists(t){return new Ee(void 0,t)}static updateTime(t){return new Ee(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Te(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ke{}function Ce(t,e,n){t instanceof Pe?function(t,e,n){const i=t.value.clone(),r=$e(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Te(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=$e(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Re(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ae(t,e,n){t instanceof Pe?function(t,e,n){if(!Te(t.precondition,e))return;const i=t.value.clone(),r=Me(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(De(e),i).setHasLocalMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Te(t.precondition,e))return;const i=Me(t.fieldTransforms,n,e),r=e.data;r.setAll(Re(t)),r.setAll(i),e.convertToFoundDocument(De(e),r).setHasLocalMutations()}(t,e,n):function(t,e){Te(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function je(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=pe(i.transform,t||null);null!=r&&(null==n&&(n=wt.empty()),n.set(i.field,r))}return n||null}function Ne(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Oe(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function De(t){return t.isFoundDocument()?t.version:M.min()}class Pe extends ke{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Le extends ke{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Re(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function $e(t,e,n){const i=new Map;b(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,fe(o,a,n[r]))}return i}function Me(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,de(t,s,e))}return i}class Fe extends ke{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Be extends ke{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ue;function qe(t){switch(t){default:return y();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function He(t){if(void 0===t)return m("GRPC error has no .code"),S.UNKNOWN;switch(t){case ze.OK:return S.OK;case ze.CANCELLED:return S.CANCELLED;case ze.UNKNOWN:return S.UNKNOWN;case ze.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ze.INTERNAL:return S.INTERNAL;case ze.UNAVAILABLE:return S.UNAVAILABLE;case ze.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ze.NOT_FOUND:return S.NOT_FOUND;case ze.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ze.ABORTED:return S.ABORTED;case ze.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ze.DATA_LOSS:return S.DATA_LOSS;default:return y()}}(Ue=ze||(ze={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t,e){this.comparator=t,this.root=e||Ge.EMPTY}insert(t,e){return new We(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new We(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ke(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ke(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ke(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ke(this.root,t,this.comparator,!0)}}class Ke{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ge.RED,this.left=null!=i?i:Ge.EMPTY,this.right=null!=r?r:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Ge(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ge.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1,Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.comparator=t,this.data=new We(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qe(this.data.getIterator())}getIteratorFrom(t){return new Qe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ye))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ye(this.comparator);return e.data=t,e}}class Qe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new We(st.comparator);function Xe(){return Je}const Ze=new We(st.comparator);function tn(){return Ze}const en=new We(st.comparator);function nn(){return en}const rn=new Ye(st.comparator);function sn(...t){let e=rn;for(const n of t)e=e.add(n);return e}const on=new Ye(P);function an(){return on}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e)),new cn(M.min(),n,an(),Xe(),sn())}}class un{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new un(G.EMPTY_BYTE_STRING,e,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,i){this.k=t,this.removedTargetIds=e,this.key=n,this.$=i}}class hn{constructor(t,e){this.targetId=t,this.O=e}}class dn{constructor(t,e,n=G.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class fn{constructor(){this.F=0,this.M=gn(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=sn(),e=sn(),n=sn();return this.M.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:y()}}),new un(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=gn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(t){this.tt=t,this.et=new Map,this.nt=Xe(),this.st=mn(),this.it=new Ye(P)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,i=this.dt(e);if(i){const t=i.target;if(kt(t))if(0===n){const n=new st(t.path);this.at(e,n,St.newNoDocument(n,M.min()))}else b(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,i)=>{const r=this.dt(i);if(r){if(n.current&&kt(r.target)){const e=new st(r.target.path);null!==this.nt.get(e)||this.gt(i,e)||this.at(i,e,St.newNoDocument(e,t))}n.K&&(e.set(i,n.W()),n.G())}});let n=sn();this.st.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))});const i=new cn(t,e,this.it,this.nt,n);return this.nt=Xe(),this.st=mn(),this.it=new Ye(P),i}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const i=this.ut(t);this.gt(t,e)?i.H(e,1):i.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new fn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ye(P),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new fn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function mn(){return new We(st.comparator)}function gn(){return new We(st.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class bn{constructor(t,e){this.databaseId=t,this.D=e}}function wn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _n(t,e){return t.D?e.toBase64():e.toUint8Array()}function Sn(t,e){return wn(t,e.toTimestamp())}function xn(t){return b(!!t),M.fromTimestamp(function(t){const e=Q(t);return new $(e.seconds,e.nanos)}(t))}function On(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function In(t){const e=U.fromString(t);return b(Zn(e)),e}function En(t,e){return On(t.databaseId,e.path)}function Tn(t,e){const n=In(e);if(n.get(1)!==t.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(jn(n))}function kn(t,e){return On(t.databaseId,e)}function Cn(t){const e=In(t);return 4===e.length?U.emptyPath():jn(e)}function An(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Nn(t,e,n){return{name:En(t,e),fields:n.value.mapValue.fields}}function Dn(t,e,n){const i=Tn(t,e.name),r=xn(e.updateTime),s=new wt({mapValue:{fields:e.fields}}),o=St.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Pn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=Tn(t,e.found.name),i=xn(e.found.updateTime),r=new wt({mapValue:{fields:e.found.fields}});return St.newFoundDocument(n,i,r)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=Tn(t,e.missing),i=xn(e.readTime);return St.newNoDocument(n,i)}(t,e):y()}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.D?(b(void 0===e||"string"==typeof e),G.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),G.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?S.UNKNOWN:He(t.code);return new x(e,t.message||"")}(o);n=new dn(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Tn(t,i.document.name),s=xn(i.document.updateTime),o=new wt({mapValue:{fields:i.document.fields}}),a=St.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ln(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Tn(t,i.document),s=i.readTime?xn(i.readTime):M.min(),o=St.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Tn(t,i.document),s=i.removedTargetIds||[];n=new ln([],s,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Ve(i),s=t.targetId;n=new hn(s,r)}}return n}function Rn(t,e){let n;if(e instanceof Pe)n={update:Nn(t,e.key,e.value)};else if(e instanceof Fe)n={delete:En(t,e.key)};else if(e instanceof Le)n={update:Nn(t,e.key,e.data),updateMask:Xn(e.fieldMask)};else{if(!(e instanceof Be))return y();n={verify:En(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ye)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Sn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function $n(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ee.updateTime(xn(t.updateTime)):void 0!==t.exists?Ee.exists(t.exists):Ee.none()}(e.currentDocument):Ee.none(),i=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new me;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ge(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ye(t)}else"increment"in e?n=new we(t,e.increment):y();const i=H.fromServerFormat(e.fieldPath);return new xe(i,n)}(t,e)):[];if(e.update){e.update.name;const r=Tn(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new W(e.map(t=>H.fromServerFormat(t)))}(e.updateMask);return new Le(r,s,t,n,i)}return new Pe(r,s,n,i)}if(e.delete){const i=Tn(t,e.delete);return new Fe(i,n)}if(e.verify){const i=Tn(t,e.verify);return new Be(i,n)}return y()}function Mn(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?xn(t.updateTime):xn(e);return n.isEqual(M.min())&&(n=xn(e)),new Ie(n,t.transformResults||[])}(t,e))):[]}function Fn(t,e){return{documents:[kn(t,e.path)]}}function Bn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=kn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(vt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(t.field),op:Kn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Gn(t.field),direction:Wn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||nt(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=qn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=qn(e.endAt)),n}function Vn(t){let e=Cn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){b(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Un(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Vt(Yn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Hn(n.startAt));let u=null;return n.endAt&&(u=Hn(n.endAt)),Wt(e,r,o,s,a,"F",c,u)}function zn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Un(t){return t?void 0!==t.unaryFilter?[Jn(t)]:void 0!==t.fieldFilter?[Qn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Un(t)).reduce((t,e)=>t.concat(e)):y():[]}function qn(t){return{before:t.before,values:t.position}}function Hn(t){const e=!!t.before,n=t.values||[];return new Ft(n,e)}function Wn(t){return vn[t]}function Kn(t){return yn[t]}function Gn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return H.fromServerFormat(t.fieldPath)}function Qn(t){return Ct.create(Yn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Jn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yn(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(t.unaryFilter.field);return Ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yn(t.unaryFilter.field);return Ct.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Xn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ni(e)),e=ei(t.get(n),e);return ni(e)}function ei(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ni(t){return t+""}function ii(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),U.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&y(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=t.substring(s,e),r+="\0";break;case"":r+=t.substring(s,e+1);break;default:y()}s=e+2}return new U(i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class si{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}si.store="owner",si.key="owner";class oi{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}oi.store="mutationQueues",oi.keyPath="userId";class ai{constructor(t,e,n,i,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}ai.store="mutations",ai.keyPath="batchId",ai.userMutationsIndex="userMutationsIndex",ai.userMutationsKeyPath=["userId","batchId"];class ci{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,ti(e)]}static key(t,e,n){return[t,ti(e),n]}}ci.store="documentMutations",ci.PLACEHOLDER=new ci;class ui{constructor(t,e){this.path=t,this.readTime=e}}class li{constructor(t,e){this.path=t,this.version=e}}class hi{constructor(t,e,n,i,r,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}hi.store="remoteDocuments",hi.readTimeIndex="readTimeIndex",hi.readTimeIndexPath="readTime",hi.collectionReadTimeIndex="collectionReadTimeIndex",hi.collectionReadTimeIndexPath=["parentPath","readTime"];class di{constructor(t){this.byteSize=t}}di.store="remoteDocumentGlobal",di.key="remoteDocumentGlobalKey";class fi{constructor(t,e,n,i,r,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fi.store="targets",fi.keyPath="targetId",fi.queryTargetsIndexName="queryTargetsIndex",fi.queryTargetsKeyPath=["canonicalId","targetId"];class pi{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}pi.store="targetDocuments",pi.keyPath=["targetId","path"],pi.documentTargetsIndex="documentTargetsIndex",pi.documentTargetsKeyPath=["path","targetId"];class mi{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}mi.key="targetGlobalKey",mi.store="targetGlobal";class gi{constructor(t,e){this.collectionId=t,this.parent=e}}gi.store="collectionParents",gi.keyPath=["collectionId","parent"];class vi{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}vi.store="clientMetadata",vi.keyPath="clientId";class yi{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}yi.store="bundles",yi.keyPath="bundleId";class bi{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}bi.store="namedQueries",bi.keyPath="name";const wi=[oi.store,ai.store,ci.store,hi.store,fi.store,si.store,mi.store,pi.store,vi.store,di.store,gi.store,yi.store,bi.store],_i="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Si{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new xi((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof xi?e:xi.resolve(e)}catch(t){return xi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):xi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):xi.reject(e)}static resolve(t){return new xi((e,n)=>{e(t)})}static reject(t){return new xi((e,n)=>{n(t)})}static waitFor(t){return new xi((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=xi.resolve(!1);for(const n of t)e=e.next(t=>t?xi.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.Et=new O,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{e.error?this.Et.reject(new Ti(t,e.error)):this.Et.resolve()},this.transaction.onerror=e=>{const n=Ni(e.target.error);this.Et.reject(new Ti(t,n))}}static open(t,e,n,i){try{return new Oi(e,t.transaction(i,n))}catch(t){throw new Ti(e,t)}}get It(){return this.Et.promise}abort(t){t&&this.Et.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Ci(e)}}class Ii{constructor(t,e,n){this.name=t,this.version=e,this.At=n,12.2===Ii.Rt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Ai(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Ii.Pt())return!0;const t=Object(o["l"])(),e=Ii.Rt(t),n=0<e&&e<10,i=Ii.vt(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static Pt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===e?void 0:e.Vt)}static St(t,e){return t.store(e)}static Rt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{const n=t.target.result;e(n)},i.onblocked=()=>{n(new Ti(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=e=>{const i=e.target.error;"VersionError"===i.name?n(new x(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new x(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Ti(t,i))},i.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.At.Ct(e,i.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(t){this.Nt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const r="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Dt(t);const e=Oi.open(this.db,t,r?"readonly":"readwrite",n),s=i(e).catch(t=>(e.abort(t),xi.reject(t))).toPromise();return s.catch(()=>{}),await e.It,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ei{constructor(t){this.kt=t,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(t){this.kt=t}done(){this.$t=!0}Mt(t){this.Ot=t}delete(){return Ai(this.kt.delete())}}class Ti extends x{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ki(t){return"IndexedDbTransactionError"===t.name}class Ci{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ai(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Ai(this.store.add(t))}get(t){return Ai(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Ai(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Ai(this.store.count())}Lt(t,e){const n=this.cursor(this.options(t,e)),i=[];return this.Bt(n,(t,e)=>{i.push(e)}).next(()=>i)}Ut(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.qt=!1;const i=this.cursor(n);return this.Bt(i,(t,e,n)=>n.delete())}Kt(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.Bt(i,e)}jt(t){const e=this.cursor({});return new xi((n,i)=>{e.onerror=t=>{const e=Ni(t.target.error);i(e)},e.onsuccess=e=>{const i=e.target.result;i?t(i.primaryKey,i.value).next(t=>{t?i.continue():n()}):n()}})}Bt(t,e){const n=[];return new xi((i,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void i();const s=new Ei(r),o=e(r.primaryKey,r.value,s);if(o instanceof xi){const t=o.catch(t=>(s.done(),xi.reject(t)));n.push(t)}s.isDone?i():null===s.Ft?r.continue():r.continue(s.Ft)}}).next(()=>xi.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.qt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ai(t){return new xi((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Ni(t.target.error);n(e)}})}let ji=!1;function Ni(t){const e=Ii.Rt(Object(o["l"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ji||(ji=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Si{constructor(t,e){super(),this.Qt=t,this.currentSequenceNumber=e}}function Pi(t,e){const n=_(t);return Ii.St(n.Qt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Ce(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ae(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ae(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Ne(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Ne(t,e))}}class Ri{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){b(t.mutations.length===n.length);let i=nn();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Ri(t,e,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,n,i,r=M.min(),s=M.min(),o=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new $i(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.Wt=t}}function Fi(t,e){if(e.document)return Dn(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=st.fromSegments(e.noDocument.path),n=qi(e.noDocument.readTime),i=St.newNoDocument(t,n);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const t=st.fromSegments(e.unknownDocument.path),n=qi(e.unknownDocument.version);return St.newUnknownDocument(t,n)}return y()}function Bi(t,e,n){const i=Vi(n),r=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:En(t,e.key),fields:e.data.value.mapValue.fields,updateTime:wn(t,e.version.toTimestamp())}}(t.Wt,e),s=e.hasCommittedMutations;return new hi(null,null,n,s,i,r)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Ui(e.version),s=e.hasCommittedMutations;return new hi(null,new ui(t,n),null,s,i,r)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Ui(e.version);return new hi(new li(t,n),null,null,!0,i,r)}return y()}function Vi(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function zi(t){const e=new $(t[0],t[1]);return M.fromTimestamp(e)}function Ui(t){const e=t.toTimestamp();return new ri(e.seconds,e.nanoseconds)}function qi(t){const e=new $(t.seconds,t.nanoseconds);return M.fromTimestamp(e)}function Hi(t,e){const n=(e.baseMutations||[]).map(e=>$n(t.Wt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map(e=>$n(t.Wt,e)),r=$.fromMillis(e.localWriteTimeMs);return new Li(e.batchId,r,n,i)}function Wi(t){const e=qi(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?qi(t.lastLimboFreeSnapshotVersion):M.min();let i;var r;return void 0!==t.query.documents?(b(1===(r=t.query).documents.length),i=te(Kt(Cn(r.documents[0])))):i=function(t){return te(Vn(t))}(t.query),new $i(i,t.targetId,0,t.lastListenSequenceNumber,e,n,G.fromBase64String(t.resumeToken))}function Ki(t,e){const n=Ui(e.snapshotVersion),i=Ui(e.lastLimboFreeSnapshotVersion);let r;r=kt(e.target)?Fn(t.Wt,e.target):Bn(t.Wt,e.target);const s=e.resumeToken.toBase64();return new fi(e.targetId,It(e.target),n,s,e.sequenceNumber,i,r)}function Gi(t){const e=Vn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ee(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{getBundleMetadata(t,e){return Qi(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:qi(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Qi(t).put({bundleId:(n=e).id,createTime:Ui(xn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Ji(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Gi(e.bundledQuery),readTime:qi(e.readTime)};var e})}saveNamedQuery(t,e){return Ji(t).put(function(t){return{name:t.name,readTime:Ui(xn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Qi(t){return Pi(t,yi.store)}function Ji(t){return Pi(t,bi.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.Gt=new Zi}addToCollectionParentIndex(t,e){return this.Gt.add(e),xi.resolve()}getCollectionParents(t,e){return xi.resolve(this.Gt.getEntries(e))}}class Zi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ye(U.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ye(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.zt=new Zi}addToCollectionParentIndex(t,e){if(!this.zt.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.zt.add(e)});const r={collectionId:n,parent:ti(i)};return er(t).put(r)}return xi.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[R(e),""],!1,!0);return er(t).Lt(i).next(t=>{for(const i of t){if(i.collectionId!==e)break;n.push(ii(i.parent))}return n})}}function er(t){return Pi(t,gi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ir{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ir(t,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){const i=t.store(ai.store),r=t.store(ci.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Kt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const t=ci.key(e,l.key.path,n.batchId);s.push(r.delete(t)),u.push(l.key)}return xi.waitFor(s).next(()=>u)}function sr(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw y();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.DEFAULT_COLLECTION_PERCENTILE=10,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ir.DEFAULT=new ir(41943040,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ir.DISABLED=new ir(-1,0,0);class or{constructor(t,e,n,i){this.userId=t,this.N=e,this.Ht=n,this.referenceDelegate=i,this.Jt={}}static Yt(t,e,n,i){b(""!==t.uid);const r=t.isAuthenticated()?t.uid:"";return new or(r,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(t).Kt({index:ai.userMutationsIndex,range:n},(t,n,i)=>{e=!1,i.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const r=ur(t),s=cr(t);return s.add({}).next(o=>{b("number"==typeof o);const a=new Li(o,e,n,i),c=function(t,e,n){const i=n.baseMutations.map(e=>Rn(t.Wt,e)),r=n.mutations.map(e=>Rn(t.Wt,e));return new ai(e,n.batchId,n.localWriteTime.toMillis(),i,r)}(this.N,this.userId,a),u=[];let l=new Ye((t,e)=>P(t.canonicalString(),e.canonicalString()));for(const t of i){const e=ci.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(r.put(e,ci.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Ht.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),xi.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return cr(t).get(e).next(t=>t?(b(t.userId===this.userId),Hi(this.N,t)):null)}Xt(t,e){return this.Jt[e]?xi.resolve(this.Jt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Jt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return cr(t).Kt({index:ai.userMutationsIndex,range:i},(t,e,i)=>{e.userId===this.userId&&(b(e.batchId>=n),r=Hi(this.N,e)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return cr(t).Kt({index:ai.userMutationsIndex,range:e,reverse:!0},(t,e,i)=>{n=e.batchId,i.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(t).Lt(ai.userMutationsIndex,e).next(t=>t.map(t=>Hi(this.N,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ci.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(n),r=[];return ur(t).Kt({range:i},(n,i,s)=>{const[o,a,c]=n,u=ii(a);if(o===this.userId&&e.path.isEqual(u))return cr(t).get(c).next(t=>{if(!t)throw y();b(t.userId===this.userId),r.push(Hi(this.N,t))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(P);const i=[];return e.forEach(e=>{const r=ci.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(r),o=ur(t).Kt({range:s},(t,i,r)=>{const[s,o,a]=t,c=ii(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()});i.push(o)}),xi.waitFor(i).next(()=>this.Zt(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,r=ci.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Ye(P);return ur(t).Kt({range:s},(t,e,r)=>{const[s,a,c]=t,u=ii(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()}).next(()=>this.Zt(t,o))}Zt(t,e){const n=[],i=[];return e.forEach(e=>{i.push(cr(t).get(e).next(t=>{if(null===t)throw y();b(t.userId===this.userId),n.push(Hi(this.N,t))}))}),xi.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return rr(t.Qt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.te(e.batchId)}),xi.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}te(t){delete this.Jt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return xi.resolve();const n=IDBKeyRange.lowerBound(ci.prefixForUser(this.userId)),i=[];return ur(t).Kt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=ii(t[1]);i.push(e)}else n.done()}).next(()=>{b(0===i.length)})})}containsKey(t,e){return ar(t,this.userId,e)}ee(t){return lr(t).get(this.userId).next(t=>t||new oi(this.userId,-1,""))}}function ar(t,e,n){const i=ci.prefixForPath(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return ur(t).Kt({range:s,qt:!0},(t,n,i)=>{const[s,a,c]=t;s===e&&a===r&&(o=!0),i.done()}).next(()=>o)}function cr(t){return Pi(t,ai.store)}function ur(t){return Pi(t,ci.store)}function lr(t){return Pi(t,oi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new hr(0)}static ie(){return new hr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.referenceDelegate=t,this.N=e}allocateTargetId(t){return this.re(t).next(e=>{const n=new hr(e.highestTargetId);return e.highestTargetId=n.next(),this.oe(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.re(t).next(t=>M.fromTimestamp(new $(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.re(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.re(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.oe(t,i)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.re(t).next(n=>(n.targetCount+=1,this.ce(e,n),this.oe(t,n))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>fr(t).delete(e.targetId)).next(()=>this.re(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.oe(t,e)))}removeTargets(t,e,n){let i=0;const r=[];return fr(t).Kt((s,o)=>{const a=Wi(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(t,a)))}).next(()=>xi.waitFor(r)).next(()=>i)}forEachTarget(t,e){return fr(t).Kt((t,n)=>{const i=Wi(n);e(i)})}re(t){return pr(t).get(mi.key).next(t=>(b(null!==t),t))}oe(t,e){return pr(t).put(mi.key,e)}ae(t,e){return fr(t).put(Ki(this.N,e))}ce(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.re(t).next(t=>t.targetCount)}getTargetData(t,e){const n=It(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return fr(t).Kt({range:i,index:fi.queryTargetsIndexName},(t,n,i)=>{const s=Wi(n);Tt(e,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(t,e,n){const i=[],r=mr(t);return e.forEach(e=>{const s=ti(e.path);i.push(r.put(new pi(n,s))),i.push(this.referenceDelegate.addReference(t,n,e))}),xi.waitFor(i)}removeMatchingKeys(t,e,n){const i=mr(t);return xi.forEach(e,e=>{const r=ti(e.path);return xi.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=mr(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=mr(t);let r=sn();return i.Kt({range:n,qt:!0},(t,e,n)=>{const i=ii(t[1]),s=new st(i);r=r.add(s)}).next(()=>r)}containsKey(t,e){const n=ti(e.path),i=IDBKeyRange.bound([n],[R(n)],!1,!0);let r=0;return mr(t).Kt({index:pi.documentTargetsIndex,qt:!0,range:i},([t,e],n,i)=>{0!==t&&(r++,i.done())}).next(()=>r>0)}Tt(t,e){return fr(t).get(e).next(t=>t?Wi(t):null)}}function fr(t){return Pi(t,fi.store)}function pr(t){return Pi(t,mi.store)}function mr(t){return Pi(t,pi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==_i)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr([t,e],[n,i]){const r=P(t,n);return 0===r?P(e,i):r}class yr{constructor(t){this.ue=t,this.buffer=new Ye(vr),this.he=0}le(){return++this.he}fe(t){const e=[t,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();vr(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class br{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.de=!1,this.we=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(t)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(t){const e=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.we=null,this.de=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){ki(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gr(t)}await this._e(t)})}}class wr{constructor(t,e){this.me=t,this.params=e}calculateTargetCount(t,e){return this.me.ge(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return xi.resolve(j.T);const n=new yr(e);return this.me.forEachTarget(t,t=>n.fe(t.sequenceNumber)).next(()=>this.me.ye(t,t=>n.fe(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.me.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.me.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),xi.resolve(nr)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nr):this.pe(t,e))}getCacheSize(t){return this.me.getCacheSize(t)}pe(t,e){let n,i,r,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,o=Date.now(),this.nthSequenceNumber(t,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(r=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),xi.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new wr(t,e)}(this,e)}ge(t){const e=this.Te(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Te(t){let e=0;return this.ye(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}ye(t,e){return this.Ee(t,(t,n)=>e(n))}addReference(t,e,n){return Sr(t,n)}removeReference(t,e,n){return Sr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Sr(t,e)}Ie(t,e){return function(t,e){let n=!1;return lr(t).jt(i=>ar(t,i,e).next(t=>(t&&(n=!0),xi.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ee(t,(s,o)=>{if(o<=e){const e=this.Ie(t,s).next(e=>{if(!e)return r++,n.getEntry(t,s).next(()=>(n.removeEntry(s),mr(t).delete([0,ti(s.path)])))});i.push(e)}}).next(()=>xi.waitFor(i)).next(()=>n.apply(t)).next(()=>r)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Sr(t,e)}Ee(t,e){const n=mr(t);let i,r=j.T;return n.Kt({index:pi.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(r!==j.T&&e(new st(ii(i)),r),r=o,i=s):r=j.T}).next(()=>{r!==j.T&&e(new st(ii(i)),r)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Sr(t,e){return mr(t).put(function(t,e){return new pi(0,ti(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){B(this.inner,(e,n)=>{for(const[i,r]of n)t(i,r)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.changes=new xr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:St.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?xi.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.N=t,this.Ht=e}addEntry(t,e,n){return kr(t).put(Cr(e),n)}removeEntry(t,e){const n=kr(t),i=Cr(e);return n.delete(i)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Ae(t,n)))}getEntry(t,e){return kr(t).get(Cr(e)).next(t=>this.Re(e,t))}be(t,e){return kr(t).get(Cr(e)).next(t=>({document:this.Re(e,t),size:sr(t)}))}getEntries(t,e){let n=Xe();return this.Pe(t,e,(t,e)=>{const i=this.Re(t,e);n=n.insert(t,i)}).next(()=>n)}ve(t,e){let n=Xe(),i=new We(st.comparator);return this.Pe(t,e,(t,e)=>{const r=this.Re(t,e);n=n.insert(t,r),i=i.insert(t,sr(e))}).next(()=>({documents:n,Ve:i}))}Pe(t,e,n){if(e.isEmpty())return xi.resolve();const i=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),r=e.getIterator();let s=r.getNext();return kr(t).Kt({range:i},(t,e,i)=>{const o=st.fromSegments(t);for(;s&&st.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,e),s=r.hasNext()?r.getNext():null),s?i.Mt(s.path.toArray()):i.done()}).next(()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(t,e,n){let i=Xe();const r=e.path.length+1,s={};if(n.isEqual(M.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),i=Vi(n);s.range=IDBKeyRange.lowerBound([t,i],!0),s.index=hi.collectionReadTimeIndex}return kr(t).Kt(s,(t,n,s)=>{if(t.length!==r)return;const o=Fi(this.N,n);e.path.isPrefixOf(o.key.path)?se(e,o)&&(i=i.insert(o.key,o)):s.done()}).next(()=>i)}newChangeBuffer(t){return new Er(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Tr(t).get(di.key).next(t=>(b(!!t),t))}Ae(t,e){return Tr(t).put(di.key,e)}Re(t,e){if(e){const t=Fi(this.N,e);if(!t.isNoDocument()||!t.version.isEqual(M.min()))return t}return St.newInvalidDocument(t)}}class Er extends Or{constructor(t,e){super(),this.Se=t,this.trackRemovals=e,this.De=new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,i=new Ye((t,e)=>P(t.canonicalString(),e.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.De.get(r);if(s.document.isValidDocument()){const a=Bi(this.Se.N,s.document,this.getReadTime(r));i=i.add(r.path.popLast());const c=sr(a);n+=c-o,e.push(this.Se.addEntry(t,r,a))}else if(n-=o,this.trackRemovals){const n=Bi(this.Se.N,St.newNoDocument(r,M.min()),this.getReadTime(r));e.push(this.Se.addEntry(t,r,n))}else e.push(this.Se.removeEntry(t,r))}),i.forEach(n=>{e.push(this.Se.Ht.addToCollectionParentIndex(t,n))}),e.push(this.Se.updateMetadata(t,n)),xi.waitFor(e)}getFromCache(t,e){return this.Se.be(t,e).next(t=>(this.De.set(e,t.size),t.document))}getAllFromCache(t,e){return this.Se.ve(t,e).next(({documents:t,Ve:e})=>(e.forEach((t,e)=>{this.De.set(t,e)}),t))}}function Tr(t){return Pi(t,di.store)}function kr(t){return Pi(t,hi.store)}function Cr(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.N=t}Ct(t,e,n,i){b(n<i&&n>=0&&i<=11);const r=new Oi("createOrUpgrade",e);n<1&&i>=1&&(function(t){t.createObjectStore(si.store)}(t),function(t){t.createObjectStore(oi.store,{keyPath:oi.keyPath}),t.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0}),t.createObjectStore(ci.store)}(t),jr(t),function(t){t.createObjectStore(hi.store)}(t));let s=xi.resolve();return n<3&&i>=3&&(0!==n&&(function(t){t.deleteObjectStore(pi.store),t.deleteObjectStore(fi.store),t.deleteObjectStore(mi.store)}(t),jr(t)),s=s.next(()=>function(t){const e=t.store(mi.store),n=new mi(0,0,M.min().toTimestamp(),0);return e.put(mi.key,n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ai.store).Lt().next(n=>{t.deleteObjectStore(ai.store),t.createObjectStore(ai.store,{keyPath:ai.keyPath,autoIncrement:!0}).createIndex(ai.userMutationsIndex,ai.userMutationsKeyPath,{unique:!0});const i=e.store(ai.store),r=n.map(t=>i.put(t));return xi.waitFor(r)})}(t,r))),s=s.next(()=>{!function(t){t.createObjectStore(vi.store,{keyPath:vi.keyPath})}(t)})),n<5&&i>=5&&(s=s.next(()=>this.Ce(r))),n<6&&i>=6&&(s=s.next(()=>(function(t){t.createObjectStore(di.store)}(t),this.Ne(r)))),n<7&&i>=7&&(s=s.next(()=>this.xe(r))),n<8&&i>=8&&(s=s.next(()=>this.ke(t,r))),n<9&&i>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(hi.store);e.createIndex(hi.readTimeIndex,hi.readTimeIndexPath,{unique:!1}),e.createIndex(hi.collectionReadTimeIndex,hi.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&i>=10&&(s=s.next(()=>this.$e(r))),n<11&&i>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(yi.store,{keyPath:yi.keyPath})}(t),function(t){t.createObjectStore(bi.store,{keyPath:bi.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}Ne(t){let e=0;return t.store(hi.store).Kt((t,n)=>{e+=sr(n)}).next(()=>{const n=new di(e);return t.store(di.store).put(di.key,n)})}Ce(t){const e=t.store(oi.store),n=t.store(ai.store);return e.Lt().next(e=>xi.forEach(e,e=>{const i=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Lt(ai.userMutationsIndex,i).next(n=>xi.forEach(n,n=>{b(n.userId===e.userId);const i=Hi(this.N,n);return rr(t,e.userId,i).next(()=>{})}))}))}xe(t){const e=t.store(pi.store),n=t.store(hi.store);return t.store(mi.store).get(mi.key).next(t=>{const i=[];return n.Kt((n,r)=>{const s=new U(n),o=function(t){return[0,ti(t)]}(s);i.push(e.get(o).next(n=>n?xi.resolve():(n=>e.put(new pi(0,ti(n),t.highestListenSequenceNumber)))(s)))}).next(()=>xi.waitFor(i))})}ke(t,e){t.createObjectStore(gi.store,{keyPath:gi.keyPath});const n=e.store(gi.store),i=new Zi,r=t=>{if(i.add(t)){const e=t.lastSegment(),i=t.popLast();return n.put({collectionId:e,parent:ti(i)})}};return e.store(hi.store).Kt({qt:!0},(t,e)=>{const n=new U(t);return r(n.popLast())}).next(()=>e.store(ci.store).Kt({qt:!0},([t,e,n],i)=>{const s=ii(e);return r(s.popLast())}))}$e(t){const e=t.store(fi.store);return e.Kt((t,n)=>{const i=Wi(n),r=Ki(this.N,i);return e.put(r)})}}function jr(t){t.createObjectStore(pi.store,{keyPath:pi.keyPath}).createIndex(pi.documentTargetsIndex,pi.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(fi.store,{keyPath:fi.keyPath}).createIndex(fi.queryTargetsIndexName,fi.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(mi.store)}const Nr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Dr{constructor(t,e,n,i,r,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=r,this.window=s,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=t=>Promise.resolve(),!Dr.bt())throw new x(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _r(this,i),this.We=e+"main",this.N=new Mi(a),this.Ge=new Ii(this.We,11,new Ar(this.N)),this.ze=new dr(this.referenceDelegate,this.N),this.Ht=new tr,this.He=function(t,e){return new Ir(t,e)}(this.N,this.Ht),this.Je=new Yi,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,Nr);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ze.getHighestSequenceNumber(t))}).then(t=>{this.Le=new j(t,this.Fe)}).then(()=>{this.Be=!0}).catch(t=>(this.Ge&&this.Ge.close(),Promise.reject(t)))}nn(t){return this.Qe=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ge.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Lr(t).put(new vi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(t)).next(e=>this.isPrimary&&!e?this.on(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(ki(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.Qe(t)),this.isPrimary=t})}sn(t){return Pr(t).get(si.key).next(t=>xi.resolve(this.cn(t)))}un(t){return Lr(t).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Pi(t,vi.store);return e.Lt().next(t=>{const n=this.fn(t,18e5),i=t.filter(t=>-1===n.indexOf(t));return xi.forEach(i,t=>e.delete(t.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Ye)for(const e of t)this.Ye.removeItem(this.dn(e.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(t){return!!t&&t.ownerId===this.clientId}rn(t){return this.Me?xi.resolve(!0):Pr(t).get(si.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)){if(this.cn(e)&&this.networkEnabled)return!0;if(!this.cn(e)){if(!e.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,Nr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lr(t).Lt().next(t=>void 0===this.fn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,i=this.networkEnabled===t.networkEnabled;if(e||n&&i)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[si.store,vi.store],t=>{const e=new Di(t,j.T);return this.on(e).next(()=>this.un(e))}),this.Ge.close(),this.yn()}fn(t,e){return t.filter(t=>this.ln(t.updateTimeMs,e)&&!this.wn(t.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",t=>Lr(t).Lt().next(t=>this.fn(t,18e5).map(t=>t.clientId)))}get started(){return this.Be}getMutationQueue(t){return or.Yt(t,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const i="readonly"===e?"readonly":"readwrite";let r;return this.Ge.runTransaction(t,i,wi,i=>(r=new Di(i,this.Le?this.Le.next():j.T),"readwrite-primary"===e?this.sn(r).next(t=>!!t||this.rn(r)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new x(S.FAILED_PRECONDITION,_i);return n(r)}).next(t=>this.an(r).next(()=>t)):this.Tn(r).next(()=>n(r)))).then(t=>(r.raiseOnCommittedEvent(),t))}Tn(t){return Pr(t).get(si.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.cn(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new x(S.FAILED_PRECONDITION,Nr)})}an(t){const e=new si(this.clientId,this.allowTabSynchronization,Date.now());return Pr(t).put(si.key,e)}static bt(){return Ii.bt()}on(t){const e=Pr(t);return e.get(si.key).next(t=>this.cn(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(si.key)):xi.resolve())}ln(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["v"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(t){var e;try{const n=null!==(null===(e=this.Ye)||void 0===e?void 0:e.getItem(this.dn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(t){}}dn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Pr(t){return Pi(t,si.store)}function Lr(t){return Pi(t,vi.store)}function Rr(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $r{constructor(t,e){this.progress=t,this.En=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const i of e)i.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Xt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new st(e)).next(t=>{let e=tn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const i=e.collectionGroup;let r=tn();return this.Ht.getCollectionParents(t,i).next(s=>xi.forEach(s,s=>{const o=function(t,e){return new Ht(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Dn(t,e,n){let i,r;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Cn(t,r,i).next(t=>{i=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=St.newInvalidDocument(n),i=i.insert(n,r)),Ae(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((t,n)=>{se(e,n)||(i=i.remove(t))}),i))}Cn(t,e,n){let i=sn();for(const s of e)for(const t of s.mutations)t instanceof Le&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.He.getEntries(t,i).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=i}static kn(t,e){let n=sn(),i=sn();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fr(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Fn(t,e):this.On.Pn(t,i).next(r=>{const o=this.Mn(e,r);return(Gt(e)||Yt(e))&&this.Ln(e.limitType,o,i,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),re(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Ye(oe(t));return e.forEach((e,i)=>{se(t,i)&&(n=n.add(i))}),n}Ln(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",re(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,n,i){this.persistence=t,this.Bn=e,this.N=i,this.Un=new We(P),this.qn=new xr(t=>It(t),Tt),this.Kn=M.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Mr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function zr(t,e,n,i){return new Vr(t,e,n,i)}async function Ur(t,e){const n=_(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,i=n.persistence.getMutationQueue(e),r=new Mr(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t))).next(e=>{const n=[],i=[];let o=sn();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:i}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function qr(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const i=e.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=xi.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&i.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,i))})}function Hr(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Wr(t,e){const n=_(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=r.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,i).withSequenceNumber(t.currentSequenceNumber);r=r.insert(s,u),function(t,e,n){return b(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Xe();if(e.documentUpdates.forEach((i,r)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(Kr(t,s,e.documentUpdates,i,void 0).next(t=>{a=t})),!i.isEqual(M.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return xi.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=r,t))}function Kr(t,e,n,i,r){let s=sn();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Xe();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Gr(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Yr(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.ze.getTargetData(t,e).next(r=>r?(i=r,xi.resolve(i)):n.ze.allocateTargetId(t).next(r=>(i=new $i(e,r,0,t.currentSequenceNumber),n.ze.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.Un.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Qr(t,e,n){const i=_(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,t=>i.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!ki(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function Jr(t,e,n){const i=_(t);let r=M.min(),s=sn();return i.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const i=_(t),r=i.qn.get(n);return void 0!==r?xi.resolve(i.Un.get(r)):i.ze.getTargetData(e,n)}(i,t,te(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>i.Bn.getDocumentsMatchingQuery(t,e,n?r:M.min(),n?s:sn())).next(t=>({documents:t,Gn:s})))}function Xr(t,e){const n=_(t),i=_(n.ze),r=n.Un.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",t=>i.Tt(t,e).next(t=>t?t.target:null))}function Zr(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const i=_(t);let r=Xe(),s=Vi(n);const o=kr(e),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:hi.readTimeIndex,range:a},(t,e)=>{const n=Fi(i.N,e);r=r.insert(n.key,n),s=e.readTime}).next(()=>({En:r,readTime:zi(s)}))}(e.jn,t,e.Kn)).then(({En:t,readTime:n})=>(e.Kn=n,t))}async function ts(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=kr(t);let n=M.min();return e.Kt({index:hi.readTimeIndex,reverse:!0},(t,e,i)=>{e.readTime&&(n=zi(e.readTime)),i.done()}).next(()=>n)}(t)).then(t=>{e.Kn=t})}async function es(t,e,n,i){const r=_(t);let s=sn(),o=Xe(),a=nn();for(const l of n){const t=e.zn(l.metadata.name);l.document&&(s=s.add(t)),o=o.insert(t,e.Hn(l)),a=a.insert(t,e.Jn(l.metadata.readTime))}const c=r.jn.newChangeBuffer({trackRemovals:!0}),u=await Yr(r,function(t){return te(Kt(U.fromString("__bundle__/docs/"+t)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",t=>Kr(t,c,o,M.min(),a).next(e=>(c.apply(t),e)).next(e=>r.ze.removeMatchingKeysForTargetId(t,u.targetId).next(()=>r.ze.addMatchingKeys(t,s,u.targetId)).next(()=>r.Qn.vn(t,e)).next(()=>e)))}async function ns(t,e,n=sn()){const i=await Yr(t,te(Gi(e.bundledQuery))),r=_(t);return r.persistence.runTransaction("Save named query","readwrite",t=>{const s=xn(e.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Je.saveNamedQuery(t,e);const o=i.withResumeToken(G.EMPTY_BYTE_STRING,s);return r.Un=r.Un.insert(o.targetId,o),r.ze.updateTargetData(t,o).next(()=>r.ze.removeMatchingKeysForTargetId(t,i.targetId)).next(()=>r.ze.addMatchingKeys(t,n,i.targetId)).next(()=>r.Je.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return xi.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:xn(n.createTime)}),xi.resolve()}getNamedQuery(t,e){return xi.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Gi(t.bundledQuery),readTime:xn(t.readTime)}}(e)),xi.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Zn=new Ye(ss.ts),this.es=new Ye(ss.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ss(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new ss(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new st(new U([])),n=new ss(e,t),i=new ss(e,t+1),r=[];return this.es.forEachInRange([n,i],t=>{this.rs(t),r.push(t.key)}),r}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new st(new U([])),n=new ss(e,t),i=new ss(e,t+1);let r=sn();return this.es.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new ss(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ss{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return st.comparator(t.key,e.key)||P(t.ls,e.ls)}static ns(t,e){return P(t.ls,e.ls)||st.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ye(ss.ts)}checkEmpty(t){return xi.resolve(0===this.In.length)}addMutationBatch(t,e,n,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Li(r,e,n,i);this.In.push(s);for(const o of i)this.ds=this.ds.add(new ss(o.key,r)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return xi.resolve(s)}lookupMutationBatch(t,e){return xi.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this._s(n),r=i<0?0:i;return xi.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return xi.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return xi.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ss(e,0),i=new ss(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],t=>{const e=this.ws(t.ls);r.push(e)}),xi.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(P);return e.forEach(t=>{const e=new ss(t,0),i=new ss(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],t=>{n=n.add(t.ls)})}),xi.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;st.isDocumentKey(r)||(r=r.child(""));const s=new ss(new st(r),0);let o=new Ye(P);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)},s),xi.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return xi.forEach(e.mutations,i=>{const r=new ss(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new ss(e,0),i=this.ds.firstAfterOrEqual(n);return xi.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.In.length,xi.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new We(st.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return xi.resolve(n?n.document.clone():St.newInvalidDocument(e))}getEntries(t,e){let n=Xe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():St.newInvalidDocument(t))}),xi.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=Xe();const r=new st(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||se(e,r)&&(i=i.insert(r.key,r.clone()))}return xi.resolve(i)}Ts(t,e){return xi.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new cs(this)}getSize(t){return xi.resolve(this.size)}}class cs extends Or{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?e.push(this.Se.addEntry(t,i.document,this.getReadTime(n))):this.Se.removeEntry(n)}),xi.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.persistence=t,this.Es=new xr(t=>It(t),Tt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Is=0,this.As=new rs,this.targetCount=0,this.Rs=hr.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),xi.resolve()}getLastRemoteSnapshotVersion(t){return xi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return xi.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),xi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),xi.resolve()}ae(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new hr(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,xi.resolve()}updateTargetData(t,e){return this.ae(e),xi.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,xi.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),xi.waitFor(r).next(()=>i)}getTargetCount(t){return xi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return xi.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),xi.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),xi.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),xi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return xi.resolve(n)}containsKey(t,e){return xi.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.bs={},this.Le=new j(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new us(this),this.Ht=new Xi,this.He=function(t,e){return new as(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new Mi(e),this.Je=new is(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new os(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const i=new hs(this.Le.next());return this.referenceDelegate.vs(),n(i).next(t=>this.referenceDelegate.Vs(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ss(t,e){return xi.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class hs extends Si{constructor(t){super(),this.currentSequenceNumber=t}}class ds{constructor(t){this.persistence=t,this.Ds=new rs,this.Cs=null}static Ns(t){return new ds(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),xi.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),xi.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),xi.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xi.forEach(this.xs,n=>{const i=st.fromPath(n);return this.ks(t,i).next(t=>{t||e.removeEntry(i)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return xi.or([()=>xi.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e){return`firestore_clients_${t}_${e}`}function ps(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+="_"+e.uid),i}function ms(t,e){return`firestore_targets_${t}_${e}`}class gs{constructor(t,e,n,i){this.user=t,this.batchId=e,this.state=n,this.error=i}static $s(t,e,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new x(i.error.code,i.error.message))),s?new gs(t,e,i.state,r):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new x(n.error.code,n.error.message))),r?new vs(t,n.state,i):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ys{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=an();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=rt(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new ys(t,r):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class bs{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new bs(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class ws{constructor(){this.activeTargetIds=an()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _s{constructor(t,e,n,i,r){this.window=t,this.Oe=e,this.persistenceKey=n,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new We(P),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.js=fs(this.persistenceKey,this.Ls),this.Qs=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ws),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Js=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.pn();for(const n of t){if(n===this.Ls)continue;const t=this.getItem(fs(this.persistenceKey,n));if(t){const e=ys.$s(n,t);e&&(this.qs=this.qs.insert(e.clientId,e))}}this.Ys();const e=this.storage.getItem(this.Hs);if(e){const t=this.Xs(e);t&&this.Zs(t)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Qs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(t){let e=!1;return this.qs.forEach((n,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ei(t,"pending")}updateMutationState(t,e,n){this.ei(t,e,n),this.ni(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ms(this.persistenceKey,t));if(n){const i=vs.$s(t,n);i&&(e=i.state)}}return this.si.Fs(t),this.Ys(),e}removeLocalQueryTarget(t){this.si.Ms(t),this.Ys()}isLocalQueryTarget(t){return this.si.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ms(this.persistenceKey,t))}updateQueryState(t,e,n){this.ii(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.ni(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.ri(t)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Us(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Ws.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ci(t,null)}{const t=this.ui(e.key,e.newValue);if(t)return this.ci(t.clientId,t)}}else if(this.Gs.test(e.key)){if(null!==e.newValue){const t=this.hi(e.key,e.newValue);if(t)return this.li(t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.fi(e.key,e.newValue);if(t)return this.di(t)}}else if(e.key===this.Hs){if(null!==e.newValue){const t=this.Xs(e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.Qs){const t=function(t){let e=j.T;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==j.T&&this.sequenceNumberHandler(t)}else if(e.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(e)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(t,e,n){const i=new gs(this.currentUser,t,e,n),r=ps(this.persistenceKey,this.currentUser,t);this.setItem(r,i.Os())}ni(t){const e=ps(this.persistenceKey,this.currentUser,t);this.removeItem(e)}ri(t){const e={clientId:this.Ls,onlineState:t};this.storage.setItem(this.Hs,JSON.stringify(e))}ii(t,e,n){const i=ms(this.persistenceKey,t),r=new vs(t,e,n);this.setItem(i,r.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(t){const e=this.Ws.exec(t);return e?e[1]:null}ui(t,e){const n=this.ai(t);return ys.$s(n,e)}hi(t,e){const n=this.Gs.exec(t),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return gs.$s(new u(r),i,e)}fi(t,e){const n=this.zs.exec(t),i=Number(n[1]);return vs.$s(i,e)}Xs(t){return bs.$s(t)}async li(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine._i(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}di(t){return this.syncEngine.mi(t.targetId,t.state,t.error)}ci(t,e){const n=e?this.qs.insert(t,e):this.qs.remove(t),i=this.ti(this.qs),r=this.ti(n),s=[],o=[];return r.forEach(t=>{i.has(t)||s.push(t)}),i.forEach(t=>{r.has(t)||o.push(t)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(t){this.qs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ti(t){let e=an();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Ss{constructor(){this.yi=new ws,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ws,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,i){const r=this.Bi(t,e);p("RestConnection","Sending: ",r,n);const s={};return this.Ui(s,i),this.qi(t,r,s,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",n),e})}Ki(t,e,n,i){return this.Li(t,e,n,i)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Is[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(e)>=0?e:S.UNKNOWN}(t.status);s(new x(e,t.message))}else s(new x(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new x(S.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),r=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");p("Connection","Creating WebChannel: "+c,s);const u=i.createWebChannel(c,s);let l=!1,h=!1;const d=new Es({vi:t=>{h?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,a["f"].EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())}),f(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),d.$i(new x(S.UNAVAILABLE,"The operation could not be completed")))}),f(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];b(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){p("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=ze[t];if(void 0!==e)return He(e)}(t),n=r.message;void 0===e&&(e=S.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.$i(new x(e,n)),u.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}}),f(r,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return"undefined"!=typeof window?window:null}function Cs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return new bn(t,!0)}class js{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,e-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,i,r,s){this.Oe=t,this.er=n,this.nr=i,this.credentialsProvider=r,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new js(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===S.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new x(S.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Tr(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ds extends Ns{constructor(t,e,n,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,r),this.N=i}Tr(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Ln(this.N,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?xn(e.readTime):M.min()}(t);return this.listener.Er(e,n)}Ir(t){const e={};e.database=An(this.N),e.addTarget=function(t,e){let n;const i=e.target;return n=kt(i)?{documents:Fn(t,i)}:{query:Bn(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_n(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=wn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=zn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=An(this.N),e.removeTarget=t,this.wr(e)}}class Ps extends Ns{constructor(t,e,n,i,r){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,r),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(t){return this.nr.ji("Write",t)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=Mn(t.writeResults,t.commitTime),n=xn(t.commitTime);return this.listener.vr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=An(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Rn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(t,e,n,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===S.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new x(S.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(t,e,n,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===S.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new x(S.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class Rs{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(m(e),this.$r=!1):p("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ti(t=>{n.enqueueAndForget(async()=>{Ws(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Kr.add(4),await Fs(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Ms(e)}(this))})}),this.Wr=new Rs(n,i)}}async function Ms(t){if(Ws(t))for(const e of t.jr)await e(!0)}async function Fs(t){for(const e of t.jr)await e(!1)}function Bs(t,e){const n=_(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Hs(n)?qs(n):uo(n).cr()&&zs(n,e))}function Vs(t,e){const n=_(t),i=uo(n);n.qr.delete(e),i.cr()&&Us(n,e),0===n.qr.size&&(i.cr()?i.lr():Ws(n)&&n.Wr.set("Unknown"))}function zs(t,e){t.Gr.Y(e.targetId),uo(t).Ir(e)}function Us(t,e){t.Gr.Y(e),uo(t).Ar(e)}function qs(t){t.Gr=new pn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),uo(t).start(),t.Wr.Or()}function Hs(t){return Ws(t)&&!uo(t).ar()&&t.qr.size>0}function Ws(t){return 0===_(t).Kr.size}function Ks(t){t.Gr=void 0}async function Gs(t){t.qr.forEach((e,n)=>{zs(t,e)})}async function Ys(t,e){Ks(t),Hs(t)?(t.Wr.Lr(e),qs(t)):t.Wr.set("Unknown")}async function Qs(t,e,n){if(t.Wr.set("Online"),e instanceof dn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.qr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.qr.delete(i),t.Gr.removeTarget(i))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Js(t,n)}else if(e instanceof ln?t.Gr.rt(e):e instanceof hn?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(M.min()))try{const e=await Hr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.qr.get(i);r&&t.qr.set(i,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),Us(t,e);const i=new $i(n.target,e,1,n.sequenceNumber);zs(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Js(t,e)}}async function Js(t,e,n){if(!ki(e))throw e;t.Kr.add(1),await Fs(t),t.Wr.set("Offline"),n||(n=()=>Hr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Ms(t)})}function Xs(t,e){return e().catch(n=>Js(t,n,e))}async function Zs(t){const e=_(t),n=lo(e);let i=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;to(e);)try{const t=await Gr(e.localStore,i);if(null===t){0===e.Ur.length&&n.lr();break}i=t.batchId,eo(e,t)}catch(t){await Js(e,t)}no(e)&&io(e)}function to(t){return Ws(t)&&t.Ur.length<10}function eo(t,e){t.Ur.push(e);const n=lo(t);n.cr()&&n.br&&n.Pr(e.mutations)}function no(t){return Ws(t)&&!lo(t).ar()&&t.Ur.length>0}function io(t){lo(t).start()}async function ro(t){lo(t).Sr()}async function so(t){const e=lo(t);for(const n of t.Ur)e.Pr(n.mutations)}async function oo(t,e,n){const i=t.Ur.shift(),r=Ri.from(i,e,n);await Xs(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Zs(t)}async function ao(t,e){e&&lo(t).br&&await async function(t,e){if(n=e.code,qe(n)&&n!==S.ABORTED){const n=t.Ur.shift();lo(t).hr(),await Xs(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Zs(t)}var n}(t,e),no(t)&&io(t)}async function co(t,e){const n=_(t);e?(n.Kr.delete(2),await Ms(n)):e||(n.Kr.add(2),await Fs(n),n.Wr.set("Unknown"))}function uo(t){return t.zr||(t.zr=function(t,e,n){const i=_(t);return i.Cr(),new Ds(e,i.nr,i.credentials,i.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Gs.bind(null,t),Ci:Ys.bind(null,t),Er:Qs.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Hs(t)?qs(t):t.Wr.set("Unknown")):(await t.zr.stop(),Ks(t))})),t.zr}function lo(t){return t.Hr||(t.Hr=function(t,e,n){const i=_(t);return i.Cr(),new Ps(e,i.nr,i.credentials,i.N,n)}(t.datastore,t.asyncQueue,{Si:ro.bind(null,t),Ci:ao.bind(null,t),Vr:so.bind(null,t),vr:oo.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Zs(t)):(await t.Hr.stop(),t.Ur.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ho{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new ho(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(t,e){if(m("AsyncQueue",`${e}: ${t}`),ki(t))return new x(S.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=tn(),this.sortedSet=new We(this.comparator)}static emptySet(t){return new po(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof po))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new po;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Jr=new We(st.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):y():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class go{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new go(t,e,po.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ne(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Xr=void 0,this.listeners=[]}}class yo{constructor(){this.queries=new xr(t=>ie(t),ne),this.onlineState="Unknown",this.Zr=new Set}}async function bo(t,e){const n=_(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new vo),r)try{s.Xr=await n.onListen(i)}catch(t){const n=fo(t,`Initialization of query '${re(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&xo(n)}async function wo(t,e){const n=_(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function _o(t,e){const n=_(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(r)&&(i=!0);e.Xr=r}}i&&xo(n)}function So(t,e,n){const i=_(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function xo(t){t.Zr.forEach(t=>{t.next()})}class Oo{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new go(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.payload=t,this.byteLength=e}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this.N=t}zn(t){return Tn(this.N,t)}Hn(t){return t.metadata.exists?Dn(this.N,t.document,!1):St.newNoDocument(this.zn(t.metadata.name),this.Jn(t.metadata.readTime))}Jn(t){return xn(t)}}class To{constructor(t,e,n){this.lo=t,this.localStore=e,this.N=n,this.queries=[],this.documents=[],this.progress=ko(t)}fo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}wo(t){const e=new Map,n=new Eo(this.N);for(const i of t)if(i.metadata.queries){const t=n.zn(i.metadata.name);for(const n of i.metadata.queries){const i=(e.get(n)||sn()).add(t);e.set(n,i)}}return e}async complete(){const t=await es(this.localStore,new Eo(this.N),this.documents,this.lo.id),e=this.wo(this.documents);for(const n of this.queries)await ns(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new $r(Object.assign({},this.progress),t)}}function ko(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.key=t}}class Ao{constructor(t){this.key=t}}class jo{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=sn(),this.mutatedKeys=sn(),this.po=oe(t),this.To=new po(this.po)}get Eo(){return this._o}Io(t,e){const n=e?e.Ao:new mo,i=e?e.To:this.To;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Gt(this.query)&&i.size===this.query.limit?i.last():null,c=Yt(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const u=i.get(t),l=se(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))}),Gt(this.query)||Yt(this.query))for(;s.size>this.query.limit;){const t=Gt(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{To:s,Ao:n,Ln:o,mutatedKeys:r}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.To;this.To=t.To,this.mutatedKeys=t.mutatedKeys;const r=t.Ao.Yr();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==r.length||a?{snapshot:new go(this.query,t.To,i,r,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({To:this.To,Ao:new mo,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.To.has(t)&&!this.To.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=sn(),this.To.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Ao(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Co(n))}),e}So(t){this._o=t.Gn,this.yo=sn();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return go.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class No{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Do{constructor(t){this.key=t,this.Co=!1}}class Po{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new xr(t=>ie(t),ne),this.ko=new Map,this.$o=new Set,this.Oo=new We(st.comparator),this.Fo=new Map,this.Mo=new rs,this.Lo={},this.Bo=new Map,this.Uo=hr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Lo(t,e){const n=la(t);let i,r;const s=n.xo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Do();else{const t=await Yr(n.localStore,te(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Ro(n,e,i,"current"===s),n.isPrimaryClient&&Bs(n.remoteStore,t)}return r}async function Ro(t,e,n,i){t.Ko=(e,n,i)=>async function(t,e,n,i){let r=e.view.Io(n);r.Ln&&(r=await Jr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,r)));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Yo(t,e.targetId,o.vo),o.snapshot}(t,e,n,i);const r=await Jr(t.localStore,e,!0),s=new jo(e,r.Gn),o=s.Io(r.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Yo(t,n,c.vo);const u=new No(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function $o(t,e){const n=_(t),i=n.xo.get(e),r=n.ko.get(i.targetId);if(r.length>1)return n.ko.set(i.targetId,r.filter(t=>!ne(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Qr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Vs(n.remoteStore,i.targetId),Ko(n,i.targetId)}).catch(gr)):(Ko(n,i.targetId),await Qr(n.localStore,i.targetId,!0))}async function Mo(t,e,n){const i=ha(t);try{const t=await function(t,e){const n=_(t),i=$.now(),r=e.reduce((t,e)=>t.add(e.key),sn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,r).next(r=>{s=r;const o=[];for(const t of e){const e=je(t,s.get(t.key));null!=e&&o.push(new Le(t.key,e,_t(e.value.mapValue),Ee.exists(!0)))}return n.In.addMutationBatch(t,i,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Lo[t.currentUser.toKey()];i||(i=new We(P)),i=i.insert(e,n),t.Lo[t.currentUser.toKey()]=i}(i,t.batchId,n),await Xo(i,t.changes),await Zs(i.remoteStore)}catch(t){const e=fo(t,"Failed to persist write");n.reject(e)}}async function Fo(t,e){const n=_(t);try{const t=await Wr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.Fo.get(e);i&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Co=!0:t.modifiedDocuments.size>0?b(i.Co):t.removedDocuments.size>0&&(b(i.Co),i.Co=!1))}),await Xo(n,t,e)}catch(t){await gr(t)}}function Bo(t,e,n){const i=_(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.xo.forEach((n,i)=>{const r=i.view.eo(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.eo(e)&&(i=!0)}),i&&xo(n)}(i.eventManager,e),t.length&&i.No.Er(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Vo(t,e,n){const i=_(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Fo.get(e),s=r&&r.key;if(s){let t=new We(st.comparator);t=t.insert(s,St.newNoDocument(s,M.min()));const n=sn().add(s),r=new cn(M.min(),new Map,new Ye(P),t,n);await Fo(i,r),i.Oo=i.Oo.remove(s),i.Fo.delete(e),Jo(i)}else await Qr(i.localStore,e,!1).then(()=>Ko(i,e,n)).catch(gr)}async function zo(t,e){const n=_(t),i=e.batch.batchId;try{const t=await qr(n.localStore,e);Wo(n,i,null),Ho(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Xo(n,t)}catch(t){await gr(t)}}async function Uo(t,e,n){const i=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let i;return n.In.lookupMutationBatch(t,e).next(e=>(b(null!==e),i=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,i))})}(i.localStore,e);Wo(i,e,n),Ho(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Xo(i,t)}catch(n){await gr(n)}}async function qo(t,e){const n=_(t);Ws(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.In.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const i=n.Bo.get(t)||[];i.push(e),n.Bo.set(t,i)}catch(t){const n=fo(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ho(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function Wo(t,e,n){const i=_(t);let r=i.Lo[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Lo[i.currentUser.toKey()]=r}}function Ko(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ko.get(e))t.xo.delete(i),n&&t.No.jo(i,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||Go(t,e)})}function Go(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Vs(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Jo(t))}function Yo(t,e,n){for(const i of n)i instanceof Co?(t.Mo.addReference(i.key,e),Qo(t,i)):i instanceof Ao?(p("SyncEngine","Document no longer in limbo: "+i.key),t.Mo.removeReference(i.key,e),t.Mo.containsKey(i.key)||Go(t,i.key)):y()}function Qo(t,e){const n=e.key,i=n.path.canonicalString();t.Oo.get(n)||t.$o.has(i)||(p("SyncEngine","New document in limbo: "+n),t.$o.add(i),Jo(t))}function Jo(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new st(U.fromString(e)),i=t.Uo.next();t.Fo.set(i,new Do(n)),t.Oo=t.Oo.insert(n,i),Bs(t.remoteStore,new $i(te(Kt(n.path)),i,2,j.T))}}async function Xo(t,e,n){const i=_(t),r=[],s=[],o=[];i.xo.isEmpty()||(i.xo.forEach((t,a)=>{o.push(i.Ko(a,e,n).then(t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Fr.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.No.Er(r),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>xi.forEach(e,e=>xi.forEach(e.Nn,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>xi.forEach(e.xn,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!ki(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Un.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(t,r)}}}(i.localStore,s))}async function Zo(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Ur(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new x(S.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xo(n,t.Wn)}}function ta(t,e){const n=_(t),i=n.Fo.get(e);if(i&&i.Co)return sn().add(i.key);{let t=sn();const i=n.ko.get(e);if(!i)return t;for(const e of i){const i=n.xo.get(e);t=t.unionWith(i.view.Eo)}return t}}async function ea(t,e){const n=_(t),i=await Jr(n.localStore,e.query,!0),r=e.view.So(i);return n.isPrimaryClient&&Yo(n,e.targetId,r.vo),r}async function na(t){const e=_(t);return Zr(e.localStore).then(t=>Xo(e,t))}async function ia(t,e,n,i){const r=_(t),s=await function(t,e){const n=_(t),i=_(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>i.Xt(t,e).next(e=>e?n.Qn.Pn(t,e):xi.resolve(null)))}(r.localStore,e);null!==s?("pending"===n?await Zs(r.remoteStore):"acknowledged"===n||"rejected"===n?(Wo(r,e,i||null),Ho(r,e),function(t,e){_(_(t).In).te(e)}(r.localStore,e)):y(),await Xo(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ra(t,e){const n=_(t);if(la(n),ha(n),!0===e&&!0!==n.qo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await sa(n,t.toArray());n.qo=!0,await co(n.remoteStore,!0);for(const i of e)Bs(n.remoteStore,i)}else if(!1===e&&!1!==n.qo){const t=[];let e=Promise.resolve();n.ko.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?t.push(r):e=e.then(()=>(Ko(n,r),Qr(n.localStore,r,!0))),Vs(n.remoteStore,r)}),await e,await sa(n,t),function(t){const e=_(t);e.Fo.forEach((t,n)=>{Vs(e.remoteStore,n)}),e.Mo.us(),e.Fo=new Map,e.Oo=new We(st.comparator)}(n),n.qo=!1,await co(n.remoteStore,!1)}}async function sa(t,e,n){const i=_(t),r=[],s=[];for(const o of e){let t;const e=i.ko.get(o);if(e&&0!==e.length){t=await Yr(i.localStore,te(e[0]));for(const t of e){const e=i.xo.get(t),n=await ea(i,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await Xr(i.localStore,o);t=await Yr(i.localStore,e),await Ro(i,oa(e),o,!1)}r.push(t)}return i.No.Er(s),r}function oa(t){return Wt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function aa(t){const e=_(t);return _(_(e.localStore).persistence).pn()}async function ca(t,e,n,i){const r=_(t);if(r.qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(r.ko.has(e))switch(n){case"current":case"not-current":{const t=await Zr(r.localStore),i=cn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Xo(r,t,i);break}case"rejected":await Qr(r.localStore,e,!0),Ko(r,e,i);break;default:y()}}async function ua(t,e,n){const i=la(t);if(i.qo){for(const t of e){if(i.ko.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await Xr(i.localStore,t),n=await Yr(i.localStore,e);await Ro(i,oa(e),n.targetId,!1),Bs(i.remoteStore,n)}for(const t of n)i.ko.has(t)&&await Qr(i.localStore,t,!1).then(()=>{Vs(i.remoteStore,t),Ko(i,t)}).catch(gr)}}function la(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ta.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vo.bind(null,e),e.No.Er=_o.bind(null,e.eventManager),e.No.jo=So.bind(null,e.eventManager),e}function ha(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uo.bind(null,e),e}function da(t,e,n){const i=_(t);(async function(t,e,n){try{const i=await e.getMetadata();if(await function(t,e){const n=_(t),i=xn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Je.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(i)>=0)}(t.localStore,i))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(i));n._updateProgress(ko(i));const r=new To(i,t.localStore,e.N);let s=await e.Qo();for(;s;){const t=await r.fo(s);t&&n._updateProgress(t),s=await e.Qo()}const o=await r.complete();await Xo(t,o.En,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Je.saveBundleMetadata(t,e))}(t.localStore,i),n._completeWith(o.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,e,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class fa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=As(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return zr(this.persistence,new Br,t.initialUser,this.N)}Go(t){return new ls(ds.Ns,this.N)}Wo(t){return new Ss}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends fa{constructor(t,e,n){super(),this.Jo=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ts(this.localStore),await this.Jo.initialize(this,t),await ha(this.Jo.syncEngine),await Zs(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(t){return zr(this.persistence,new Br,t.initialUser,this.N)}zo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new br(e,t.asyncQueue)}Go(t){const e=Rr(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ir.withCacheSize(this.cacheSizeBytes):ir.DEFAULT;return new Dr(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,ks(),Cs(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(t){return new Ss}}class ma extends pa{constructor(t,e){super(t,e,!1),this.Jo=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Jo.syncEngine;this.sharedClientState instanceof _s&&(this.sharedClientState.syncEngine={_i:ia.bind(null,e),mi:ca.bind(null,e),gi:ua.bind(null,e),pn:aa.bind(null,e),wi:na.bind(null,e)},await this.sharedClientState.start()),await this.persistence.nn(async t=>{await ra(this.Jo.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Wo(t){const e=ks();if(!_s.bt(e))throw new x(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Rr(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new _s(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ga{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zo.bind(null,this.syncEngine),await co(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yo}createDatastore(t){const e=As(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Ts(i));var i;return function(t,e,n){return new Ls(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Bo(this.syncEngine,t,0),s=Os.bt()?new Os:new xs,new $s(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Po(t,e,n,i,r,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Fs(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this.Zo=t,this.N=e,this.metadata=new O,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(t=>{t&&t.ho()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const t=await this.na();if(null===t)return null;const e=this.ta.decode(t),n=Number(e);isNaN(n)&&this.sa(`length string (${e}) is not valid number`);const i=await this.ia(n);return new Io(JSON.parse(i),t.length+n)}ra(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async na(){for(;this.ra()<0;)if(await this.oa())break;if(0===this.buffer.length)return null;const t=this.ra();t<0&&this.sa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ia(t){for(;this.buffer.length<t;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const e=this.ta.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}sa(t){throw this.Zo.cancel(),new Error("Invalid bundle format: "+t)}async oa(){const t=await this.Zo.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),i=An(n.N)+"/documents",r={documents:e.map(t=>En(n.N,t))},s=await n.Ki("BatchGetDocuments",i,r),o=new Map;s.forEach(t=>{const e=Pn(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fe(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=st.fromPath(e);this.mutations.push(new Be(n,this.precondition(n)))}),await async function(t,e){const n=_(t),i=An(n.N)+"/documents",r={writes:e.map(t=>Rn(n.N,t))};await n.Li("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=M.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new x(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ee.updateTime(e):Ee.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(M.min()))throw new x(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ee.updateTime(e)}return Ee.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,i){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=i,this.aa=5,this.rr=new js(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const t=new wa(this.datastore),e=this.ua(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.ha(t)}))}).catch(t=>{this.ha(t)})})}ua(t){try{const e=this.updateFunction(t);return!nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(t){this.aa>0&&this.la(t)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(t)}la(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!qe(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=D.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{p("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=fo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function xa(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await Ur(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Oa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ia(t);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Ws(n);n.Kr.add(3),await Fs(n),i&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Ms(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Ia(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await xa(t,new fa)),t.offlineComponents}async function Ea(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Oa(t,new ga)),t.onlineComponents}function Ta(t){return Ia(t).then(t=>t.persistence)}function ka(t){return Ia(t).then(t=>t.localStore)}function Ca(t){return Ea(t).then(t=>t.remoteStore)}function Aa(t){return Ea(t).then(t=>t.syncEngine)}async function ja(t){const e=await Ea(t),n=e.eventManager;return n.onListen=Lo.bind(null,e.syncEngine),n.onUnlisten=$o.bind(null,e.syncEngine),n}function Na(t){return t.asyncQueue.enqueue(async()=>{const e=await Ta(t),n=await Ca(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Kr.delete(0),Ms(e)}(n)})}function Da(t){return t.asyncQueue.enqueue(async()=>{const e=await Ta(t),n=await Ca(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Kr.add(0),await Fs(e),e.Wr.set("Offline")}(n)})}function Pa(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Qn.An(t,e))}(t,e);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new x(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const i=fo(t,`Failed to get document '${e} from cache`);n.reject(i)}}(await ka(t),e,n)),n.promise}function La(t,e,n={}){const i=new O;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new ya({next:s=>{e.enqueueAndForget(()=>wo(t,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Oo(Kt(n.path),s,{includeMetadataChanges:!0,uo:!0});return bo(t,o)}(await ja(t),t.asyncQueue,e,n,i)),i.promise}function Ra(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await Jr(t,e,!0),r=new jo(e,i.Gn),s=r.Io(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const i=fo(t,`Failed to execute query '${e} against cache`);n.reject(i)}}(await ka(t),e,n)),n.promise}function $a(t,e,n={}){const i=new O;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new ya({next:n=>{e.enqueueAndForget(()=>wo(t,o)),n.fromCache&&"server"===i.source?r.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Oo(n,s,{includeMetadataChanges:!0,uo:!0});return bo(t,o)}(await ja(t),t.asyncQueue,e,n,i)),i.promise}function Ma(t,e){const n=new ya(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).Zr.add(e),e.next()}(await ja(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).Zr.delete(e)}(await ja(t),n))}}function Fa(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(t){return Ea(t).then(t=>t.datastore)}(t);new _a(t.asyncQueue,i,e,n).run()}),n.promise}function Ba(t,e,n,i){const r=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new ba(t,e)}(function(t,e){if(t instanceof Uint8Array)return va(t,e);if(t instanceof ArrayBuffer)return va(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,As(e));t.asyncQueue.enqueueAndForget(async()=>{da(await Aa(t),r,i)})}function Va(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Je.getNamedQuery(t,e))}(await ka(t),e))}class za{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ua{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ua&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){if(!n)throw new x(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wa(t,e,n,i){if(!0===e&&!0===i)throw new x(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ka(t){if(!st.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(st.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Qa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new x(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ja(t,e){if(e<=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wa("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xa({}),this._settingsFrozen=!1,t instanceof Ua?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(t.options.projectId)}(t))}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xa(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new E;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new x(S.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=qa.get(t);e&&(p("ComponentProvider","Removing Datastore"),qa.delete(t),e.terminate())}(this),Promise.resolve()}}function tc(t,e,n,i={}){var r;const s=(t=Qa(t,Za))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=u.MOCK_USER;else{e=Object(o["f"])(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._credentials=new T(new I(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ic(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ec(this.firestore,t,this._key)}}class nc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nc(this.firestore,t,this._query)}}class ic extends nc{constructor(t,e,n){super(t,e,Kt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ec(this.firestore,null,new st(t))}withConverter(t){return new ic(this.firestore,t,this._path)}}function rc(t,e,...n){if(t=Object(o["k"])(t),Ha("collection","path",e),t instanceof Za){const i=U.fromString(e,...n);return Ga(i),new ic(t,null,i)}{if(!(t instanceof ec||t instanceof ic))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return Ga(i),new ic(t.firestore,null,i)}}function sc(t,e){if(t=Qa(t,Za),Ha("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nc(t,null,function(t){return new Ht(U.emptyPath(),t)}(e))}function oc(t,e,...n){if(t=Object(o["k"])(t),1===arguments.length&&(e=D.I()),Ha("doc","path",e),t instanceof Za){const i=U.fromString(e,...n);return Ka(i),new ec(t,null,new st(i))}{if(!(t instanceof ec||t instanceof ic))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return Ka(i),new ec(t.firestore,t instanceof ic?t.converter:null,new st(i))}}function ac(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),(t instanceof ec||t instanceof ic)&&(e instanceof ec||e instanceof ic)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),t instanceof nc&&e instanceof nc&&t.firestore===e.firestore&&ne(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uc{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new js(this,"async_queue_retry"),this.Ta=()=>{const t=Cs();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Cs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ea(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Cs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ta)}}enqueue(t){if(this.Ea(),this.wa)return new Promise(()=>{});const e=new O;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!ki(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{this.ma=t,this.ga=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ea(),this.pa.indexOf(t)>-1&&(e=0);const i=ho.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(i),i}Ea(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function lc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class hc{constructor(){this._progressObserver={},this._taskCompletionResolver=new O,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=-1;class fc extends Za{constructor(t,e){super(t,e),this.type="firestore",this._queue=new uc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function pc(t){return t._firestoreClient||mc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new za(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Sa(t._credentials,t._queue,i)}function gc(t,e){Ic(t=Qa(t,fc));const n=pc(t),i=t._freezeSettings(),r=new ga;return yc(n,r,new pa(r,i.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function vc(t){Ic(t=Qa(t,fc));const e=pc(t),n=t._freezeSettings(),i=new ga;return yc(e,i,new ma(i,n.cacheSizeBytes))}function yc(t,e,n){const i=new O;return t.asyncQueue.enqueue(async()=>{try{await xa(t,n),await Oa(t,e),i.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}}).then(()=>i.promise)}function bc(t){if(t._initialized&&!t._terminated)throw new x(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new O;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ii.bt())return Promise.resolve();const e=t+"main";await Ii.delete(e)}(Rr(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wc(t){return function(t){const e=new O;return t.asyncQueue.enqueueAndForget(async()=>qo(await Aa(t),e)),e.promise}(pc(t=Qa(t,fc)))}function _c(t){return Na(pc(t=Qa(t,fc)))}function Sc(t){return Da(pc(t=Qa(t,fc)))}function xc(t,e){const n=pc(t=Qa(t,fc)),i=new hc;return Ba(n,t._databaseId,e,i),i}function Oc(t,e){return Va(pc(t=Qa(t,fc)),e).then(e=>e?new nc(t,null,e.query):null)}function Ic(t){if(t._initialized||t._terminated)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tc(G.fromBase64String(t))}catch(t){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Tc(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=/^__.*__$/;class jc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Dc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Pc{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Sa(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Pc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Ca({path:n,xa:!1});return i.ka(t),i}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Ca({path:n,xa:!1});return i.Sa(),i}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return tu(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Dc(this.Da)&&Ac.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||As(t)}Ba(t,e,n,i=!1){return new Pc({Da:t,methodName:e,La:n,path:H.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Rc(t){const e=t._freezeSettings(),n=As(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $c(t,e,n,i,r,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,r);Qc("Data must be an object, but it was:",o,i);const a=Gc(i,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Jc(e,i,n);if(!o.contains(r))throw new x(S.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);eu(t,r)||t.push(r)}c=new W(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new jc(new wt(a),c,u)}class Mc extends kc{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mc}}function Fc(t,e,n){return new Pc({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Bc extends kc{_toFieldTransform(t){return new xe(t.path,new me)}isEqual(t){return t instanceof Bc}}class Vc extends kc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=Fc(this,t,!0),n=this.Ua.map(t=>Kc(t,e)),i=new ge(n);return new xe(t.path,i)}isEqual(t){return this===t}}class zc extends kc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=Fc(this,t,!0),n=this.Ua.map(t=>Kc(t,e)),i=new ye(n);return new xe(t.path,i)}isEqual(t){return this===t}}class Uc extends kc{constructor(t,e){super(t),this.qa=e}_toFieldTransform(t){const e=new we(t.N,le(t.N,this.qa));return new xe(t.path,e)}isEqual(t){return this===t}}function qc(t,e,n,i){const r=t.Ba(1,e,n);Qc("Data must be an object, but it was:",r,i);const s=[],a=wt.empty();B(i,(t,i)=>{const c=Zc(e,t,n);i=Object(o["k"])(i);const u=r.$a(c);if(i instanceof Mc)s.push(c);else{const t=Kc(i,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new W(s);return new Nc(a,c,r.fieldTransforms)}function Hc(t,e,n,i,r,s){const a=t.Ba(1,e,n),c=[Jc(e,i,n)],u=[r];if(s.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Jc(e,s[o])),u.push(s[o+1]);const l=[],h=wt.empty();for(let f=c.length-1;f>=0;--f)if(!eu(l,c[f])){const t=c[f];let e=u[f];e=Object(o["k"])(e);const n=a.$a(t);if(e instanceof Mc)l.push(t);else{const i=Kc(e,n);null!=i&&(l.push(t),h.set(t,i))}}const d=new W(l);return new Nc(h,d,a.fieldTransforms)}function Wc(t,e,n,i=!1){return Kc(n,t.Ba(i?4:3,e))}function Kc(t,e){if(Yc(t=Object(o["k"])(t)))return Qc("Unsupported field value:",e,t),Gc(t,e);if(t instanceof kc)return function(t,e){if(!Dc(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Kc(r,e.Oa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return le(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=$.fromDate(t);return{timestampValue:wn(e.N,n)}}if(t instanceof $){const n=new $(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wn(e.N,n)}}if(t instanceof Cc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Tc)return{bytesValue:_n(e.N,t._byteString)};if(t instanceof ec){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:On(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Ya(t))}(t,e)}function Gc(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):B(t,(t,i)=>{const r=Kc(i,e.Na(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Yc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof $||t instanceof Cc||t instanceof Tc||t instanceof ec||t instanceof kc)}function Qc(t,e,n){if(!Yc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ya(n);throw"an object"===i?e.Fa(t+" a custom object"):e.Fa(t+" "+i)}}function Jc(t,e,n){if((e=Object(o["k"])(e))instanceof Ec)return e._internalPath;if("string"==typeof e)return Zc(t,e);throw tu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Xc=new RegExp("[~\\*/\\[\\]]");function Zc(t,e,n){if(e.search(Xc)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch(i){throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+i),o&&(c+=" in document "+r),c+=")"),new x(S.INVALID_ARGUMENT,a+t+c)}function eu(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new iu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class iu extends nu{data(){return super.data()}}function ru(t,e){return"string"==typeof e?Zc(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ou extends nu{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class au extends ou{data(t={}){return super.data(t)}}class cu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new su(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new au(this._firestore,this._userDataWriter,n.key,n,new su(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new au(t._firestore,t._userDataWriter,n.doc.key,n.doc,new su(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new au(t._firestore,t._userDataWriter,e.doc.key,e.doc,new su(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:uu(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function lu(t,e){return t instanceof ou&&e instanceof ou?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof cu&&e instanceof cu&&t._firestore===e._firestore&&cc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){if(Yt(t)&&0===t.explicitOrderBy.length)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}function fu(t,...e){for(const n of e)t=n._apply(t);return t}class pu extends du{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=Rc(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new x(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Cu(o,s);const e=[];for(const n of o)e.push(ku(i,t,n));a={arrayValue:{values:e}}}else a=ku(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Cu(o,s),a=Wc(n,e,o,"in"===s||"not-in"===s);const c=Ct.create(r,s,a);return function(t,e){if(e.v()){const n=Jt(t);if(null!==n&&!n.isEqual(e.field))throw new x(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Qt(t);null!==i&&Au(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new nc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function mu(t,e,n){const i=e,r=ru("where",t);return new pu(r,i,n)}class gu extends du{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Vt(e,n);return function(t,e){if(null===Qt(t)){const n=Jt(t);null!==n&&Au(t,n,e.field)}}(t,i),i}(t._query,this.Ka,this.Wa);return new nc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ht(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function vu(t,e="asc"){const n=e,i=ru("orderBy",t);return new gu(i,n)}class yu extends du{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new nc(t.firestore,t.converter,ee(t._query,this.Ga,this.za))}}function bu(t){return Ja("limit",t),new yu("limit",t,"F")}function wu(t){return Ja("limitToLast",t),new yu("limitToLast",t,"L")}class _u extends du{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Tu(t,this.type,this.Ha,this.Ja);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Su(...t){return new _u("startAt",t,!0)}function xu(...t){return new _u("startAfter",t,!1)}class Ou extends du{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Tu(t,this.type,this.Ha,this.Ja);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Iu(...t){return new Ou("endBefore",t,!0)}function Eu(...t){return new Ou("endAt",t,!1)}function Tu(t,e,n,i){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof nu)return function(t,e,n,i,r){if(!i)throw new x(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Zt(t))if(o.field.isKeyField())s.push(ft(e,i.key));else{const t=i.data.field(o.field);if(Z(t))throw new x(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new x(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Ft(s,r)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=Rc(t.firestore);return function(t,e,n,i,r,s){const o=t.explicitOrderBy;if(r.length>o.length)throw new x(S.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new x(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Xt(t)&&-1!==s.indexOf("/"))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(U.fromString(s));if(!st.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new st(n);a.push(ft(e,r))}else{const t=Wc(n,i,s);a.push(t)}}return new Ft(a,s)}(t._query,t.firestore._databaseId,r,e,n,i)}}function ku(t,e,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new x(S.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xt(e)&&-1!==n.indexOf("/"))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(U.fromString(n));if(!st.isDocumentKey(i))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ft(t,new st(i))}if(n instanceof ec)return ft(t,n._key);throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||0===t.length)throw new x(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(S.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Au(t,e,n){if(!n.isEqual(e))throw new x(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(X(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return B(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new Cc(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=tt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(et(t));default:return null}}convertTimestamp(t){const e=Q(t);return new $(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);b(Zn(n));const i=new Ua(n.get(1),n.get(3)),r=new st(n.popFirst(5));return i.isEqual(e)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Du extends ju{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Rc(t)}set(t,e,n){this._verifyNotCommitted();const i=Lu(t,this._firestore),r=Nu(i.converter,e,n),s=$c(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,Ee.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const r=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Ec?Hc(this._dataReader,"WriteBatch.update",r._key,e,n,i):qc(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(s.toMutation(r._key,Ee.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Lu(t,this._firestore);return this._mutations=this._mutations.concat(new Fe(e._key,Ee.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lu(t,e){if((t=Object(o["k"])(t)).firestore!==e)throw new x(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){t=Qa(t,ec);const e=Qa(t.firestore,fc);return La(pc(e),t._key).then(n=>Qu(e,t,n))}class $u extends ju{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}function Mu(t){t=Qa(t,ec);const e=Qa(t.firestore,fc),n=pc(e),i=new $u(e);return Pa(n,t._key).then(n=>new ou(e,i,t._key,n,new su(null!==n&&n.hasLocalMutations,!0),t.converter))}function Fu(t){t=Qa(t,ec);const e=Qa(t.firestore,fc);return La(pc(e),t._key,{source:"server"}).then(n=>Qu(e,t,n))}function Bu(t){t=Qa(t,nc);const e=Qa(t.firestore,fc),n=pc(e),i=new $u(e);return hu(t._query),$a(n,t._query).then(n=>new cu(e,i,t,n))}function Vu(t){t=Qa(t,nc);const e=Qa(t.firestore,fc),n=pc(e),i=new $u(e);return Ra(n,t._query).then(n=>new cu(e,i,t,n))}function zu(t){t=Qa(t,nc);const e=Qa(t.firestore,fc),n=pc(e),i=new $u(e);return $a(n,t._query,{source:"server"}).then(n=>new cu(e,i,t,n))}function Uu(t,e,n){t=Qa(t,ec);const i=Qa(t.firestore,fc),r=Nu(t.converter,e,n);return Yu(i,[$c(Rc(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Ee.none())])}function qu(t,e,n,...i){t=Qa(t,ec);const r=Qa(t.firestore,fc),s=Rc(r);let a;return a="string"==typeof(e=Object(o["k"])(e))||e instanceof Ec?Hc(s,"updateDoc",t._key,e,n,i):qc(s,"updateDoc",t._key,e),Yu(r,[a.toMutation(t._key,Ee.exists(!0))])}function Hu(t){return Yu(Qa(t.firestore,fc),[new Fe(t._key,Ee.none())])}function Wu(t,e){const n=Qa(t.firestore,fc),i=oc(t),r=Nu(t.converter,e);return Yu(n,[$c(Rc(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Ee.exists(!1))]).then(()=>i)}function Ku(t,...e){var n,i,r;t=Object(o["k"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||lc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(lc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[a+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,l,h;if(t instanceof ec)l=Qa(t.firestore,fc),h=Kt(t._key.path),u={next:n=>{e[a]&&e[a](Qu(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Qa(t,nc);l=Qa(n.firestore,fc),h=n._query;const i=new $u(l);u={next:t=>{e[a]&&e[a](new cu(l,i,n,t))},error:e[a+1],complete:e[a+2]},hu(t._query)}return function(t,e,n,i){const r=new ya(i),s=new Oo(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>bo(await ja(t),s)),()=>{r.Xo(),t.asyncQueue.enqueueAndForget(async()=>wo(await ja(t),s))}}(pc(l),h,c,u)}function Gu(t,e){return Ma(pc(t=Qa(t,fc)),lc(e)?e:{next:e})}function Yu(t,e){return function(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>Mo(await Aa(t),e,n)),n.promise}(pc(t),e)}function Qu(t,e,n){const i=n.docs.get(e._key),r=new $u(t);return new ou(t,r,e._key,i,new su(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Rc(t)}get(t){const e=Lu(t,this._firestore),n=new Du(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const i=t[0];if(i.isFoundDocument())return new nu(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new nu(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const i=Lu(t,this._firestore),r=Nu(i.converter,e,n),s=$c(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(t,e,n,...i){const r=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Ec?Hc(this._dataReader,"Transaction.update",r._key,e,n,i):qc(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,s),this}delete(t){const e=Lu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Lu(t,this._firestore),n=new $u(this._firestore);return super.get(t).then(t=>new ou(this._firestore,n,e._key,t._document,new su(!1,!1),e.converter))}}function Xu(t,e){return Fa(pc(t),n=>e(new Ju(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return new Mc("deleteField")}function tl(){return new Bc("serverTimestamp")}function el(...t){return new Vc("arrayUnion",t)}function nl(...t){return new zc("arrayRemove",t)}function il(t){return new Uc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rl;!function(t){l=t}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new fc(n,new k(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),i._setSettings(e),i},"PUBLIC")),Object(i["registerVersion"])(c,"3.1.1",rl),Object(i["registerVersion"])(c,"3.1.1","esm2017")}).call(this,n("4362"))},"0a06":function(t,e,n){"use strict";var i=n("c532"),r=n("30b5"),s=n("f6b4"),o=n("5270"),a=n("4a7b"),c=n("848b"),u=c.validators;function l(t){this.defaults=t,this.interceptors={request:new s,response:new s}}l.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var r,s=[];if(this.interceptors.response.forEach((function(t){s.push(t.fulfilled,t.rejected)})),!i){var l=[o,void 0];Array.prototype.unshift.apply(l,n),l=l.concat(s),r=Promise.resolve(t);while(l.length)r=r.then(l.shift(),l.shift());return r}var h=t;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{r=o(h)}catch(p){return Promise.reject(p)}while(s.length)r=r.then(s.shift(),s.shift());return r},l.prototype.getUri=function(t){return t=a(this.defaults,t),r(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),i.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,i){return this.request(a(i||{},{method:t,url:e,data:n}))}})),t.exports=l},"0b42":function(t,e,n){var i=n("e8b5"),r=n("68ee"),s=n("861d"),o=n("b622"),a=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,r(e)&&(e===Array||i(e.prototype))?e=void 0:s(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"0bc6":function(t,e,n){},"0cb2":function(t,e,n){var i=n("7b0b"),r=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var h=n+t.length,d=c.length,f=a;return void 0!==u&&(u=i(u),f=o),s.call(l,f,(function(i,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":o=u[s.slice(1,-1)];break;default:var a=+s;if(0===a)return i;if(a>d){var l=r(a/10);return 0===l?i:l<=d?void 0===c[l-1]?s.charAt(1):c[l-1]+s.charAt(1):i}o=c[a-1]}return void 0===o?"":o}))}},"0cfb":function(t,e,n){var i=n("83ab"),r=n("d039"),s=n("cc12");t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"0fd9":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),a=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,i){return n[t+Object(a["E"])(i)]=e(),n}),{})}var h=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=l("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:m}})),v={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var i=y[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var w=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var n=e.props,r=e.data,s=e.children,a="";for(var c in n)a+=String(n[c]);var u=w.get(a);return u||function(){var t,e;for(e in u=[],v)v[e].forEach((function(t){var i=n[t],r=b(e,t,i);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(a,u)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:u}),s)}})},"107c":function(t,e,n){var i=n("d039"),r=n("da84"),s=r.RegExp;t.exports=i((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"10d2":function(t,e,n){"use strict";var i=n("8dd9");e["a"]=i["a"]},1148:function(t,e,n){"use strict";var i=n("5926"),r=n("577e"),s=n("1d80");t.exports=function(t){var e=r(s(this)),n="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),s=n("825a"),o=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("577e"),h=n("dc4a"),d=n("14c3"),f=n("9263"),p=n("9f7f"),m=n("d039"),g=p.UNSUPPORTED_Y,v=[].push,y=Math.min,b=4294967295,w=!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=l(o(this)),s=void 0===n?b:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);var a,c,u,h=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,d+"g");while(a=f.call(m,i)){if(c=m.lastIndex,c>p&&(h.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&v.apply(h,a.slice(1)),u=a[0].length,p=c,h.length>=s))break;m.lastIndex===a.index&&m.lastIndex++}return p===i.length?!u&&m.test("")||h.push(""):h.push(i.slice(p)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),s=void 0==e?void 0:h(e,t);return s?s.call(e,r,n):i.call(l(r),e,n)},function(t,r){var o=s(this),h=l(t),f=n(i,o,h,r,i!==e);if(f.done)return f.value;var p=a(o,RegExp),m=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),w=new p(g?"^(?:"+o.source+")":o,v),_=void 0===r?b:r>>>0;if(0===_)return[];if(0===h.length)return null===d(w,h)?[h]:[];var S=0,x=0,O=[];while(x<h.length){w.lastIndex=g?0:x;var I,E=d(w,g?h.slice(x):h);if(null===E||(I=y(u(w.lastIndex+(g?x:0)),h.length))===S)x=c(h,x,m);else{if(O.push(h.slice(S,x)),O.length===_)return O;for(var T=1;T<=E.length-1;T++)if(O.push(E[T]),O.length===_)return O;x=S=I}}return O.push(h.slice(S)),O}]}),!w,g)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"132d":function(t,e,n){"use strict";var i,r=n("5530"),s=(n("c96a"),n("caad"),n("2532"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),o=n("a9ad"),a=n("af2b"),c=n("7560"),u=n("80d2"),l=n("2b0e"),h=n("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=Object(h["a"])(s["a"],o["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["B"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["y"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(u["h"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(r["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(r["a"])(Object(r["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(r["a"])(Object(r["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),d(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,r?[r]:i)}})},1331:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=(0,i.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=r},"14c3":function(t,e,n){var i=n("825a"),r=n("1626"),s=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if(r(n)){var a=n.call(t,e);return null!==a&&i(a),a}if("RegExp"===s(t))return o.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in r)r[u]&&c(i[u]&&i[u].prototype);c(s)},"15fd":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("b64b");function i(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}function r(t,e){if(null==t)return{};var n,r,s=i(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"166a":function(t,e,n){},"169a":function(t,e,n){"use strict";var i=n("5530"),r=n("2909"),s=n("ade3"),o=(n("a9e3"),n("498a"),n("caad"),n("2532"),n("7db0"),n("368e"),n("480e")),a=n("4ad4"),c=n("b848"),u=n("75eb"),l=(n("3c93"),n("a9ad")),h=n("7560"),d=n("f2e7"),f=n("58df"),p=Object(f["a"])(l["a"],h["a"],d["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),m=p,g=n("80d2"),v=n("2b0e"),y=v["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new m({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(g["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(g["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[g["x"].up,g["x"].pageup],n=[g["x"].down,g["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var n=0===t.scrollTop,i=t.scrollTop+t.clientHeight===t.scrollHeight,r=e<0,s=e>0;return!(n||!r)||(!(i||!s)||!(!n&&!i)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(g["g"])(t),n=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,r=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(r,i))||!this.shouldScroll(i,n)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,n)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(g["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),b=n("e4d3"),w=n("21be"),_=n("a293"),S=n("d9bd"),x=Object(f["a"])(a["a"],c["a"],u["a"],y,b["a"],w["a"],d["a"]);e["a"]=x.extend({name:"v-dialog",directives:{ClickOutside:_["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(S["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):y.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(r["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["h"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"17d4":function(t,e,n){},1800:function(t,e,n){"use strict";n("4de4");var i=n("2b0e");e["a"]=i["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var n=e.data,i=e.children,r=void 0===i?[]:i;n.staticClass=n.staticClass?"v-list-item__action ".concat(n.staticClass):"v-list-item__action";var s=r.filter((function(t){return!1===t.isComment&&" "!==t.text}));return s.length>1&&(n.staticClass+=" v-list-item__action--stack"),t("div",n,r)}})},1862:function(t,e,n){"use strict";var i=n("614a"),r=n("0829"),s=n("1fd5"),o=n("ffa6");const a="@firebase/firestore-compat",c="0.1.4";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new r["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new r["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(r["r"])())throw new r["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(r["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new d(r["b"].fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t){return p(t,["next","error","complete"])}function p(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(t,e){return Object(r["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(r["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(r["x"])(t._delegate)}}class g{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof r["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(r["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(r["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(r["H"])(this._delegate)}disableNetwork(){return Object(r["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(r["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(r["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(r["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new r["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new j(this,Object(r["y"])(this._delegate,t))}catch(e){throw x(e,"collection()","Firestore.collection()")}}doc(t){try{return new S(this,Object(r["E"])(this._delegate,t))}catch(e){throw x(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new k(this,Object(r["z"])(this._delegate,t))}catch(e){throw x(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(r["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(r["K"])(this._delegate),new w(new r["l"](this._delegate,t=>Object(r["L"])(this._delegate,t)))}loadBundle(t){return Object(r["V"])(this._delegate,t)}namedQuery(t){return Object(r["W"])(this._delegate,t).then(t=>t?new k(this,t):null)}}class v extends r["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new r["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return S.forKey(e,this.firestore,null)}}function y(t){Object(r["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new v(t)}get(t){const e=N(t);return this._delegate.get(e).then(t=>new E(this._firestore,new r["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const i=N(t);return n?(u("Transaction.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=N(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=N(t);return this._delegate.delete(e),this}}class w{constructor(t){this._delegate=t}set(t,e,n){const i=N(t);return n?(u("WriteBatch.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=N(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=N(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class _{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new r["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new T(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=_.INSTANCES;let i=n.get(t);i||(i=new WeakMap,n.set(t,i));let r=i.get(e);return r||(r=new _(t,new v(t),e),i.set(e,r)),r}}_.INSTANCES=new WeakMap;class S{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}static forPath(t,e,n){if(t.length%2!==0)throw new r["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new S(e,new r["d"](e._delegate,n,new r["n"](t)))}static forKey(t,e,n){return new S(e,new r["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new j(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new j(this.firestore,Object(r["y"])(this._delegate,t))}catch(e){throw x(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["k"])(t),t instanceof r["d"]&&Object(r["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(r["fb"])(this._delegate,t,e):Object(r["fb"])(this._delegate,t)}catch(n){throw x(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(r["kb"])(this._delegate,t):Object(r["kb"])(this._delegate,t,e,...n)}catch(i){throw x(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(r["B"])(this._delegate)}onSnapshot(...t){const e=O(t),n=I(t,t=>new E(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(r["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(r["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(r["O"])(this._delegate):Object(r["M"])(this._delegate),e.then(t=>new E(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new S(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function x(t,e,n){return t.message=t.message.replace(e,n),t}function O(t){for(const e of t)if("object"===typeof e&&!f(e))return e;return{}}function I(t,e){var n,i;let r;return r=f(t[0])?t[0]:f(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{r.next&&r.next(e(t))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class E{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new S(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(r["hb"])(this._delegate,t._delegate)}}class T extends E{data(t){const e=this._delegate.data(t);return Object(r["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class k{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}where(t,e,n){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["mb"])(t,e,n)))}catch(i){throw x(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["Z"])(t,e)))}catch(n){throw x(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["T"])(t)))}catch(e){throw x(e,"limit()","Query.limit()")}}limitToLast(t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["U"])(t)))}catch(e){throw x(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["jb"])(...t)))}catch(e){throw x(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["ib"])(...t)))}catch(e){throw x(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["J"])(...t)))}catch(e){throw x(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new k(this.firestore,Object(r["ab"])(this._delegate,Object(r["I"])(...t)))}catch(e){throw x(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(r["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(r["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(r["R"])(this._delegate):Object(r["P"])(this._delegate),e.then(t=>new A(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=O(t),n=I(t,t=>new A(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(r["X"])(this._delegate,e,n)}withConverter(t){return new k(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new T(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class A{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new k(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new T(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new T(this._firestore,n))})}isEqual(t){return Object(r["hb"])(this._delegate,t._delegate)}}class j extends k{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new S(this.firestore,t):null}doc(t){try{return new S(this.firestore,void 0===t?Object(r["E"])(this._delegate):Object(r["E"])(this._delegate,t))}catch(e){throw x(e,"doc()","CollectionReference.doc()")}}add(t){return Object(r["u"])(this._delegate,t).then(t=>new S(this.firestore,t))}isEqual(t){return Object(r["cb"])(this._delegate,t._delegate)}withConverter(t){return new j(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function N(t){return Object(r["p"])(t,r["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(...t){this._delegate=new r["f"](...t)}static documentId(){return new D(r["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["k"])(t),t instanceof r["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(r["eb"])();return t._methodName="FieldValue.serverTimestamp",new P(t)}static delete(){const t=Object(r["C"])();return t._methodName="FieldValue.delete",new P(t)}static arrayUnion(...t){const e=Object(r["w"])(...t);return e._methodName="FieldValue.arrayUnion",new P(e)}static arrayRemove(...t){const e=Object(r["v"])(...t);return e._methodName="FieldValue.arrayRemove",new P(e)}static increment(t){const e=Object(r["S"])(t);return e._methodName="FieldValue.increment",new P(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={Firestore:g,GeoPoint:r["h"],Timestamp:r["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:S,DocumentSnapshot:E,Query:k,QueryDocumentSnapshot:T,QuerySnapshot:A,CollectionReference:j,FieldPath:D,FieldValue:P,setLogLevel:y,CACHE_SIZE_UNLIMITED:r["c"]};function R(t,e){t.INTERNAL.registerComponent(new o["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},L)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){R(t,(t,e)=>new g(t,e,new m)),t.registerVersion(a,c)}$(i["a"])},"18a5":function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),s=n("af03");i({target:"String",proto:!0,forced:s("anchor")},{anchor:function(t){return r(this,"a","name",t)}})},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(t,e,n){var i=n("7b0b"),r={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return r.call(i(t),e)}},"1b2c":function(t,e,n){},"1be4":function(t,e,n){var i=n("d066");t.exports=i("document","documentElement")},"1c7e":function(t,e,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(c){}return n}},"1c87":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("9911"),n("498a"),n("99af"),n("ac1f"),n("5319"),n("2b0e")),o=n("5607"),a=n("80d2");e["a"]=s["a"].extend({name:"routable",directives:{Ripple:o["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,n=this.exact,s=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(i["a"])(t,this.to?"nativeOn":"on",Object(r["a"])(Object(r["a"])({},this.$listeners),{},{click:this.click})),Object(i["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:n,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:e,data:s}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),n="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(a["p"])(t.$refs.link,n)&&t.toggle()}))}},toggle:function(){}}})},"1cce":function(t,e,n){},"1cdc":function(t,e,n){var i=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(e,n)}}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");function i(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var o=t.apply(e,n);function a(t){i(o,r,s,a,c,"next",t)}function c(t){i(o,r,s,a,c,"throw",t)}a(void 0)}))}}},"1dce":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vuelidate=j,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return r.withParams}}),e.default=e.validationMixin=void 0;var i=n("fbf4"),r=n("0234");function s(t){return c(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){l(t,e,n[e])}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var d=function(){return null},f=function(t,e,n){return t.reduce((function(t,i){return t[n?n(i):i]=e(i),t}),{})};function p(t){return"function"===typeof t}function m(t){return null!==t&&("object"===h(t)||p(t))}function g(t){return m(t)&&p(t.then)}var v=function(t,e,n,i){if("function"===typeof n)return n.call(t,e,i);n=Array.isArray(n)?n:n.split(".");for(var r=0;r<n.length;r++){if(!e||"object"!==h(e))return i;e=e[n[r]]}return"undefined"===typeof e?i:e},y="__isVuelidateAsyncVm";function b(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n[y]=!0,n}var w={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return u({},f(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null})),f(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function _(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var S={$touch:function(){_.call(this,!0)},$reset:function(){_.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var i=t[n].$flattenParams(),r=0;r<i.length;r++)i[r].path.unshift(n);e=e.concat(i)}else e.push({path:[],name:n,params:this.$params[n]});return e}},x=Object.keys(w),O=Object.keys(S),I=null,E=function(t){if(I)return I;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,i.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,i.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,r.pushParams)();var i=this.rule.call(this.rootModel,n,e),s=g(i)?b(t,i):i,o=(0,r.popParams)(),a=o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null;return{output:s,params:a}}},computed:{run:function(){var t=this,e=this.lazyParentModel(),n=Array.isArray(e)&&e.__ob__;if(n){var i=e.__ob__.dep;i.depend();var r=i.constructor.target;if(!this._indirectWatcher){var s=r.constructor;this._indirectWatcher=new s(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),r.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[y]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[y]&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:u({},S,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!==typeof this.validations[t]}}),computed:u({},w,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=f(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=f(x,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),i=f(O,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),r=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},u({},e))}}:{};return Object.defineProperties({},u({},e,r,{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n,i))},children:function(){var t=this;return s(this.nestedKeys.map((function(e){return l(t,e)}))).concat(s(this.ruleKeys.map((function(e){return h(t,e)})))).filter(Boolean)}})}),a=o.extend({methods:{isNested:function(t){return"undefined"!==typeof this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),c=o.extend({computed:{keys:function(){var t=this.getModel();return m(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(v(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),r=u({},e);delete r["$trackBy"];var s={};return this.keys.map((function(e){var a=t.tracker(e);return s.hasOwnProperty(a)?null:(s[a]=!0,(0,i.h)(o,a,{validations:r,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),l=function(t,e){if("$each"===e)return(0,i.h)(c,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var r=t.rootModel,s=f(n,(function(t){return function(){return v(r,r.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,i.h)(a,e,{validations:s,lazyParentModel:d,prop:e,lazyModel:d,rootModel:r})}return(0,i.h)(o,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},h=function(t,e){return(0,i.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return I={VBase:e,Validation:o},I},T=null;function k(t){if(T)return T;var e=t.constructor;while(e.super)e=e.super;return T=e,e}var C=function(t,e){var n=k(t),r=E(n),s=r.Validation,o=r.VBase,a=new o({computed:{children:function(){var n="function"===typeof e?e.call(t):e;return[(0,i.h)(s,"$v",{validations:n,lazyParentModel:d,prop:"$v",model:t,rootModel:t})]}}});return a},A={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=C(this,t)),{}},beforeCreate:function(){var t=this.$options,e=t.validations;e&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function j(t){t.mixin(A)}e.validationMixin=A;var N=j;e.default=N},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f5a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return Mt})),n.d(e,"c",(function(){return ue})),n.d(e,"d",(function(){return fe})),n.d(e,"e",(function(){return me})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return Zt})),n.d(e,"h",(function(){return de})),n.d(e,"i",(function(){return Ai})),n.d(e,"j",(function(){return qr})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return Si})),n.d(e,"m",(function(){return ve})),n.d(e,"n",(function(){return ye})),n.d(e,"o",(function(){return S})),n.d(e,"p",(function(){return jt})),n.d(e,"q",(function(){return v})),n.d(e,"r",(function(){return Dn})),n.d(e,"s",(function(){return E})),n.d(e,"t",(function(){return ir})),n.d(e,"u",(function(){return ft})),n.d(e,"w",(function(){return Ve})),n.d(e,"x",(function(){return kn})),n.d(e,"y",(function(){return Vr})),n.d(e,"z",(function(){return An})),n.d(e,"A",(function(){return ze})),n.d(e,"B",(function(){return Be})),n.d(e,"C",(function(){return Dt})),n.d(e,"E",(function(){return qe})),n.d(e,"F",(function(){return d})),n.d(e,"G",(function(){return Qe})),n.d(e,"H",(function(){return dn})),n.d(e,"I",(function(){return mn})),n.d(e,"J",(function(){return nr})),n.d(e,"K",(function(){return dt})),n.d(e,"L",(function(){return ei})),n.d(e,"M",(function(){return Ke})),n.d(e,"N",(function(){return Ne})),n.d(e,"O",(function(){return Ei})),n.d(e,"P",(function(){return Bi})),n.d(e,"Q",(function(){return tr})),n.d(e,"R",(function(){return _n})),n.d(e,"S",(function(){return De})),n.d(e,"T",(function(){return Ti})),n.d(e,"U",(function(){return Fi})),n.d(e,"V",(function(){return Xi})),n.d(e,"W",(function(){return Je})),n.d(e,"X",(function(){return Fe})),n.d(e,"Y",(function(){return We})),n.d(e,"Z",(function(){return Se})),n.d(e,"ab",(function(){return je})),n.d(e,"bb",(function(){return Le})),n.d(e,"cb",(function(){return He})),n.d(e,"db",(function(){return Ge})),n.d(e,"eb",(function(){return Ii})),n.d(e,"fb",(function(){return Mi})),n.d(e,"gb",(function(){return Qi})),n.d(e,"hb",(function(){return Ee})),n.d(e,"ib",(function(){return en})),n.d(e,"jb",(function(){return nn})),n.d(e,"kb",(function(){return Ci})),n.d(e,"lb",(function(){return tn})),n.d(e,"mb",(function(){return Xe})),n.d(e,"nb",(function(){return Ue})),n.d(e,"v",(function(){return _s})),n.d(e,"D",(function(){return bs}));var i=n("1fd5"),r=n("5606");function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n("4fc1"),a=n("ffa6");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new i["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(t,...e){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${r["SDK_VERSION"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,...e){throw _(t,...e)}function y(t,...e){return _(t,...e)}function b(t,e,n){const r=Object.assign(Object.assign({},f()),{[e]:n}),s=new i["b"]("auth","Firebase",r);return s.create(e,{appName:t.name})}function w(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&v(t,"argument-error"),b(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return p.create(t,...e)}function S(t,e,...n){if(!t)throw _(e,...n)}function x(t){const e="INTERNAL ASSERTION FAILED: "+t;throw g(e),new Error(e)}function O(t,e){t||x(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function E(t){O(t instanceof Function,"Expected a class definition");let e=I.get(t);return e?(O(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function C(){return"http:"===A()||"https:"===A()}function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(i["n"])()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.shortDelay=t,this.longDelay=e,O(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return j()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){O(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},$=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function F(t,e,n,r,s={}){return B(t,s,()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=Object(i["x"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(L.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),L.fetch()(z(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function B(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),e);try{const e=new U(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(t,a,o);v(t,a)}}catch(s){if(s instanceof i["c"])throw s;v(t,"network-request-failed")}}async function V(t,e,n,i,r={}){const s=await F(t,e,n,i,r);return"mfaPendingCredential"in s&&v(t,"multi-factor-auth-required",{serverResponse:s}),s}function z(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?P(t.config,r):`${t.config.apiScheme}://${r}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(y(this.auth,"timeout")),$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return F(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return F(t,"POST","/v1/accounts:update",e)}async function K(t,e){return F(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e=!1){const n=Object(i["k"])(t),r=await n.getIdToken(e),s=J(r);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Q(s.auth_time)),issuedAtTime:G(Q(s.iat)),expirationTime:G(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(t){return 1e3*Number(t)}function J(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return g("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i["d"])(n);return t?JSON.parse(t):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(t){const e=J(t);return S(e,"internal-error"),S("undefined"!==typeof e.exp,"internal-error"),S("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i["c"]&&tt(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Z(t,K(n,{idToken:i}));S(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?ot(s.providerUserInfo):[],a=st(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function rt(t){const e=Object(i["k"])(t);await it(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ot(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){const n=await B(t,{},()=>{const n=Object(i["x"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=z(t,r,"/v1/token","key="+s);return L.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){S(t.idToken,"internal-error"),S("undefined"!==typeof t.idToken,"internal-error"),S("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):X(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return S(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ct;return n&&(S("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(S("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(S("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){S("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class lt{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new nt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Z(this,this.stsTokenManager.getToken(this.auth,t));return S(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Y(this,t)}reload(){return rt(this)}_assign(t){this!==t&&(S(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new lt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await it(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Z(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:x}=e;S(y&&x,t,"internal-error");const O=ct.fromJSON(this.name,x);S("string"===typeof y,t,"internal-error"),ut(l,t.name),ut(h,t.name),S("boolean"===typeof b,t,"internal-error"),S("boolean"===typeof w,t,"internal-error"),ut(d,t.name),ut(f,t.name),ut(p,t.name),ut(m,t.name),ut(g,t.name),ut(v,t.name);const I=new lt({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:O,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(I.providerData=_.map(t=>Object.assign({},t))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new ct;i.updateFromServerResponse(e);const r=new lt({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await it(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,r),this.fullPersistenceKey=ft("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(E(dt),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=i[0]||E(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=lt._fromJSON(t,e);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(s)}catch(c){}})),new pt(r,t,n)):new pt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(St(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=Object(i["l"])()){return/firefox\//i.test(t)}function vt(t=Object(i["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=Object(i["l"])()){return/crios\//i.test(t)}function bt(t=Object(i["l"])()){return/iemobile/i.test(t)}function wt(t=Object(i["l"])()){return/android/i.test(t)}function _t(t=Object(i["l"])()){return/blackberry/i.test(t)}function St(t=Object(i["l"])()){return/webos/i.test(t)}function xt(t=Object(i["l"])()){return/iphone|ipad|ipod/i.test(t)}function Ot(t=Object(i["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function It(t=Object(i["l"])()){var e;return xt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Et(){return Object(i["q"])()&&10===document.documentMode}function Tt(t=Object(i["l"])()){return xt(t)||wt(t)||St(t)||_t(t)||/windows phone/i.test(t)||bt(t)}function kt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=mt(Object(i["l"])());break;case"Worker":n=`${mt(Object(i["l"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nt(this),this.idTokenSubscription=new Nt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await pt.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await it(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i["k"])(t):null;return e&&S(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&S(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;S(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function jt(t){return Object(i["k"])(t)}class Nt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i["g"])(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Dt(t,e,n){const i=jt(t);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Pt(e),{host:o,port:a}=Lt(e),c=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$t()}function Pt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lt(t){const e=Pt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Rt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Rt(e)}}}function Rt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $t(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return x("not implemented")}_getIdTokenResponse(t){return x("not implemented")}_linkToIdToken(t,e){return x("not implemented")}_getReauthenticationResolver(t){return x("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return F(t,"POST","/v1/accounts:resetPassword",M(t,e))}async function Bt(t,e){return F(t,"POST","/v1/accounts:update",e)}async function Vt(t,e){return F(t,"POST","/v1/accounts:update",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return V(t,"POST","/v1/accounts:signInWithPassword",M(t,e))}async function Ut(t,e){return F(t,"POST","/v1/accounts:sendOobCode",M(t,e))}async function qt(t,e){return Ut(t,e)}async function Ht(t,e){return Ut(t,e)}async function Wt(t,e){return Ut(t,e)}async function Kt(t,e){return Ut(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return V(t,"POST","/v1/accounts:signInWithEmailLink",M(t,e))}async function Yt(t,e){return V(t,"POST","/v1/accounts:signInWithEmailLink",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Mt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Qt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Qt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return zt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Bt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return V(t,"POST","/v1/accounts:signInWithIdp",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="http://localhost";class Zt extends Mt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Zt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}buildRequest(){const t={requestUri:Xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(i["x"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return F(t,"POST","/v1/accounts:sendVerificationCode",M(t,e))}async function ee(t,e){return V(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,e))}async function ne(t,e){const n=await V(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,e));if(n.temporaryProof)throw q(t,"account-exists-with-different-credential",n);return n}const ie={["USER_NOT_FOUND"]:"user-not-found"};async function re(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return V(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,n),ie)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Mt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return re(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new se({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=Object(i["y"])(Object(i["j"])(t))["link"],n=e?Object(i["y"])(Object(i["j"])(e))["deep_link_id"]:null,r=Object(i["y"])(Object(i["j"])(t))["deep_link_id"],s=r?Object(i["y"])(Object(i["j"])(r))["link"]:null;return s||r||n||e||t}class ce{constructor(t){var e,n,r,s,o,a;const c=Object(i["y"])(Object(i["j"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(r=c["mode"])&&void 0!==r?r:null);S(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Qt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return S(n,"argument-error"),Qt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class de extends he{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return S("providerId"in e&&"signInMethod"in e,"argument-error"),Zt._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return S(t.idToken||t.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return de.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return de.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=t;if(!n&&!i&&!e&&!r)return null;if(!o)return null;try{return new de(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return pe.credential(e,n)}catch(i){return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com",pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="http://localhost";class ve extends Mt{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i,pendingToken:r}=e;return n&&i&&r&&n===i?new ve(n,r):null}static _create(t,e){return new ve(t,e)}buildRequest(){return{requestUri:ge,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ye.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function be(t,e){return V(t,"POST","/v1/accounts:signUp",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.TWITTER_SIGN_IN_METHOD="twitter.com",ye.PROVIDER_ID="twitter.com";class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await lt._fromIdTokenResponse(t,n,i),s=_e(n),o=new we({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=_e(n);return new we({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function _e(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t){var e;const n=jt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new we({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await be(n,{returnSecureToken:!0}),r=await we._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends i["c"]{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,xe.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(r=t.tenantId)&&void 0!==r?r:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,i){return new xe(t,e,n,i)}}function Oe(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw xe._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return new Set(t.map(({providerId:t})=>t).filter(t=>!!t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e){const n=Object(i["k"])(t);await ke(!0,n,e);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Ie(r||[]);return n.providerData=n.providerData.filter(t=>s.has(t.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Te(t,e,n=!1){const i=await Z(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return we._forOperation(t,"link",i)}async function ke(t,e,n){await it(e);const i=Ie(e.providerData),r=!1===t?"provider-already-linked":"no-such-provider";S(i.has(n)===t,e.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Z(t,Oe(i,r,e,t),n);S(s.idToken,i,"internal-error");const o=J(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(t.uid===a,i,"user-mismatch"),we._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(t,e,n=!1){const i="signIn",r=await Oe(t,i,e),s=await we._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function je(t,e){return Ae(jt(t),e)}async function Ne(t,e){const n=Object(i["k"])(t);return await ke(!1,n,e.providerId),Te(n,e)}async function De(t,e){return Ce(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e){return V(t,"POST","/v1/accounts:signInWithCustomToken",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e){const n=jt(t),i=await Pe(n,{token:e,returnSecureToken:!0}),r=await we._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?$e._fromServerResponse(t,e):v(t,"internal-error")}}class $e extends Re{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new $e(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e,n){var i;S((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(t,e,n){const r=Object(i["k"])(t),s={requestType:"PASSWORD_RESET",email:e};n&&Me(r,s,n),await Ht(r,s)}async function Be(t,e,n){await Ft(Object(i["k"])(t),{oobCode:e,newPassword:n})}async function Ve(t,e){await Vt(Object(i["k"])(t),{oobCode:e})}async function ze(t,e){const n=Object(i["k"])(t),r=await Ft(n,{oobCode:e}),s=r.requestType;switch(S(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Re._fromServerResponse(jt(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ue(t,e){const{data:n}=await ze(Object(i["k"])(t),e);return n.email}async function qe(t,e,n){const i=jt(t),r=await be(i,{returnSecureToken:!0,email:e,password:n}),s=await we._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function He(t,e,n){return je(Object(i["k"])(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e,n){const r=Object(i["k"])(t),s={requestType:"EMAIL_SIGNIN",email:e};S(n.handleCodeInApp,r,"argument-error"),n&&Me(r,s,n),await Wt(r,s)}function Ke(t,e){const n=ce.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Ge(t,e,n){const r=Object(i["k"])(t),s=ue.credentialWithLink(e,n||k());return S(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),je(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t,e){return F(t,"POST","/v1/accounts:createAuthUri",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t,e){const n=C()?k():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await Ye(Object(i["k"])(t),r);return s||[]}async function Je(t,e){const n=Object(i["k"])(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&Me(n.auth,s,e);const{email:o}=await qt(n.auth,s);o!==t.email&&await t.reload()}async function Xe(t,e,n){const r=Object(i["k"])(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Me(r.auth,o,n);const{email:a}=await Kt(r.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(t,e){return F(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=Object(i["k"])(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await Z(r,Ze(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function en(t,e){return rn(Object(i["k"])(t),e,null)}function nn(t,e){return rn(Object(i["k"])(t),null,e)}async function rn(t,e,n){const{auth:i}=t,r=await t.getIdToken(),s={idToken:r,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Z(t,Bt(i,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!i&&(null===t||void 0===t?void 0:t.idToken)){const i=null===(n=null===(e=J(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const t="anonymous"!==i&&"custom"!==i?i:null;return new on(s,t)}}if(!i)return null;switch(i){case"facebook.com":return new cn(s,r);case"github.com":return new un(s,r);case"google.com":return new ln(s,r);case"twitter.com":return new hn(s,r,t.screenName||null);case"custom":case"anonymous":return new on(s,null);default:return new on(s,i,r)}}class on{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class an extends on{constructor(t,e,n,i){super(t,e,n),this.username=i}}class cn extends on{constructor(t,e){super(t,"facebook.com",e)}}class un extends an{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class ln extends on{constructor(t,e){super(t,"google.com",e)}}class hn extends an{constructor(t,e,n){super(t,"twitter.com",e,n)}}function dn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:sn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new fn("enroll",t)}static _fromMfaPendingCredential(t){return new fn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return fn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return fn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=jt(t),i=(e.serverResponse.mfaInfo||[]).map(t=>Re._fromServerResponse(n,t));S(e.serverResponse.mfaPendingCredential,n,"internal-error");const r=fn._fromMfaPendingCredential(e.serverResponse.mfaPendingCredential);return new pn(r,i,async t=>{const i=await t._process(n,r);delete e.serverResponse.mfaInfo,delete e.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},e.serverResponse),{idToken:i.idToken,refreshToken:i.refreshToken});switch(e.operationType){case"signIn":const t=await we._fromIdTokenResponse(n,e.operationType,s);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return S(e.user,n,"internal-error"),we._forOperation(e.user,e.operationType,s);default:v(n,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function mn(t,e){var n;const r=Object(i["k"])(t),s=e;return S(e.operationType,r,"argument-error"),S(null===(n=s.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),pn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:start",M(t,e))}function vn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:finalize",M(t,e))}function yn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:withdraw",M(t,e))}class bn{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>Re._fromServerResponse(t.auth,e)))})}static _fromUser(t){return new bn(t)}async getSession(){return fn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,i=await this.getSession(),r=await Z(this.user,n._process(this.user.auth,i,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),i=await Z(this.user,yn(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:t})=>t!==e),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const wn=new WeakMap;function _n(t){const e=Object(i["k"])(t);return wn.has(e)||wn.set(e,bn._fromUser(e)),wn.get(e)}const Sn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){const t=Object(i["l"])();return vt(t)||xt(t)}const In=1e3,En=10;class Tn extends xn{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=On()&&kt(),this.fallbackToPolling=Tt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Et()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,En):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},In)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tn.type="LOCAL";const kn=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends xn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Cn.type="SESSION";const An=Cn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Nn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async t=>t(e.origin,r)),a=await jn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.receivers=[];class Pn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Dn("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function Rn(t){Ln().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return"undefined"!==typeof Ln()["WorkerGlobalScope"]&&"function"===typeof Ln()["importScripts"]}async function Mn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Fn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Bn(){return $n()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="firebaseLocalStorageDb",zn=1,Un="firebaseLocalStorage",qn="fbase_key";class Hn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Wn(t,e){return t.transaction([Un],e?"readwrite":"readonly").objectStore(Un)}function Kn(){const t=indexedDB.deleteDatabase(Vn);return new Hn(t).toPromise()}function Gn(){const t=indexedDB.open(Vn,zn);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Un,{keyPath:qn})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Un)?e(n):(n.close(),await Kn(),e(await Gn()))})})}async function Yn(t,e,n){const i=Wn(t,!0).put({[qn]:e,value:n});return new Hn(i).toPromise()}async function Qn(t,e){const n=Wn(t,!1).get(e),i=await new Hn(n).toPromise();return void 0===i?null:i.value}function Jn(t,e){const n=Wn(t,!0).delete(e);return new Hn(n).toPromise()}const Xn=800,Zn=3;class ti{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Gn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Zn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nn._getInstance(Bn()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Mn(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Fn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gn();return await Yn(t,Sn,"1"),await Jn(t,Sn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Qn(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Jn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Wn(t,!1).getAll();return new Hn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ti.type="LOCAL";const ei=ti;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,e){return F(t,"POST","/v2/accounts/mfaSignIn:start",M(t,e))}function ii(t,e){return F(t,"POST","/v2/accounts/mfaSignIn:finalize",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){return(await F(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function oi(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=y("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",si().appendChild(i)})}function ai(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=500,ui=6e4,li=1e12;class hi{constructor(t){this.auth=t,this.counter=li,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new di(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||li;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||li;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||li;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class di{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof t?document.getElementById(t):t;S(i,"argument-error",{appName:e}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=fi(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()},ui)},ci))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fi(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=ai("rcb"),mi=new D(3e4,6e4),gi="https://www.google.com/recaptcha/api.js?";class vi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ln().grecaptcha}load(t,e=""){return S(yi(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Ln().grecaptcha):new Promise((n,r)=>{const s=Ln().setTimeout(()=>{r(y(t,"network-request-failed"))},mi.get());Ln()[pi]=()=>{Ln().clearTimeout(s),delete Ln()[pi];const i=Ln().grecaptcha;if(!i)return void r(y(t,"internal-error"));const o=i.render;i.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(i)};const o=`${gi}?${Object(i["x"])({onload:pi,render:"explicit",hl:e})}`;oi(o).catch(()=>{clearTimeout(s),r(y(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Ln().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yi(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class bi{async load(t){return new hi(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="recaptcha",_i={theme:"light",type:"image"};class Si{constructor(t,e=Object.assign({},_i),n){this.parameters=e,this.type=wi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=jt(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bi:new vi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise(n=>{const i=t=>{t&&(this.tokenChangeListeners.delete(i),n(t))};this.tokenChangeListeners.add(i),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(t=>t(e)),"function"===typeof t)t(e);else if("string"===typeof t){const n=Ln()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){S(C()&&!$n(),this.auth,"internal-error"),await xi(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await ri(this.auth);S(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function xi(){let t=null;return new Promise(e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=se._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function Ii(t,e,n){const r=jt(t),s=await ki(r,e,Object(i["k"])(n));return new Oi(s,t=>je(r,t))}async function Ei(t,e,n){const r=Object(i["k"])(t);await ke(!1,r,"phone");const s=await ki(r.auth,e,Object(i["k"])(n));return new Oi(s,t=>Ne(r,t))}async function Ti(t,e,n){const r=Object(i["k"])(t),s=await ki(r.auth,e,Object(i["k"])(n));return new Oi(s,t=>De(r,t))}async function ki(t,e,n){var i;const r=await n.verify();try{let s;if(S("string"===typeof r,t,"argument-error"),S(n.type===wi,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){S("enroll"===e.type,t,"internal-error");const n=await gn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{S("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;S(n,t,"missing-multi-factor-info");const o=await ni(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}async function Ci(t,e){await Te(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.providerId=Ai.PROVIDER_ID,this.auth=jt(t)}verifyPhoneNumber(t,e){return ki(this.auth,t,Object(i["k"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ai.credentialFromTaggedObject(e)}static credentialFromError(t){return Ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ji(t,e){return e?E(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai.PROVIDER_ID="phone",Ai.PHONE_SIGN_IN_METHOD="phone";class Ni extends Mt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Di(t){return Ae(t.auth,new Ni(t),t.bypassAuthState)}function Pi(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Ce(n,new Ni(t),t.bypassAuthState)}async function Li(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Te(n,new Ni(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Di;case"linkViaPopup":case"linkViaRedirect":return Li;case"reauthViaPopup":case"reauthViaRedirect":return Pi;default:v(this.auth,"internal-error")}}resolve(t){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new D(2e3,1e4);async function Mi(t,e,n){const i=jt(t);w(t,e,le);const r=ji(i,n),s=new Vi(i,"signInViaPopup",e,r);return s.executeNotNull()}async function Fi(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=ji(r.auth,n),o=new Vi(r.auth,"reauthViaPopup",e,s,r);return o.executeNotNull()}async function Bi(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=ji(r.auth,n),o=new Vi(r.auth,"linkViaPopup",e,s,r);return o.executeNotNull()}class Vi extends Ri{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return S(t,this.auth,"internal-error"),t}async onExecution(){O(1===this.filter.length,"Popup operations only handle one event");const t=Dn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,$i.get())};t()}}Vi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi="pendingRedirect",Ui=new Map;class qi extends Ri{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Ui.get(this.auth._key());if(!t){try{const e=await Hi(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Ui.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hi(t,e){const n=Yi(e),i="true"===await Gi(t)._get(n);return await Gi(t)._remove(n),i}async function Wi(t,e){return Gi(t)._set(Yi(e),"true")}function Ki(){Ui.clear()}function Gi(t){return E(t._redirectPersistence)}function Yi(t){return ft(zi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e,n){return Ji(t,e,n)}async function Ji(t,e,n){const i=jt(t);w(t,e,le);const r=ji(i,n);return await Wi(r,i),r._openRedirect(i,e,"signInViaRedirect")}function Xi(t,e,n){return Zi(t,e,n)}async function Zi(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=ji(r.auth,n);await Wi(s,r.auth);const o=await rr(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",o)}function tr(t,e,n){return er(t,e,n)}async function er(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=ji(r.auth,n);await ke(!1,r,e.providerId),await Wi(s,r.auth);const o=await rr(r);return s._openRedirect(r.auth,e,"linkViaRedirect",o)}async function nr(t,e){return await jt(t)._initializationPromise,ir(t,e,!1)}async function ir(t,e,n=!1){const i=jt(t),r=ji(i,e),s=new qi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function rr(t){const e=Dn(t.uid+":::");return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=6e5;class or{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ur(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!cr(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(y(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sr&&this.cachedEventUids.clear(),this.cachedEventUids.has(ar(t))}saveEventToCache(t){this.cachedEventUids.add(ar(t)),this.lastProcessedEventTime=Date.now()}}function ar(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function cr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function ur(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e={}){return F(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dr=/^https?/;async function fr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lr(t);for(const i of e)try{if(pr(i))return}catch(n){}v(t,"unauthorized-domain")}function pr(t){const e=k(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!dr.test(n))return!1;if(hr.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new D(3e4,6e4);function gr(){const t=Ln().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function vr(t){return new Promise((e,n)=>{var i,r,s;function o(){gr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gr(),n(y(t,"network-request-failed"))},timeout:mr.get()})}if(null===(r=null===(i=Ln().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ln().gapi)||void 0===s?void 0:s.load)){const e=ai("iframefcb");return Ln()[e]=()=>{gapi.load?o():n(y(t,"network-request-failed"))},oi("https://apis.google.com/js/api.js?onload="+e)}o()}}).catch(t=>{throw yr=null,t})}let yr=null;function br(t){return yr=yr||vr(t),yr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new D(5e3,15e3),_r="__/auth/iframe",Sr="emulator/auth/iframe",xr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ir(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,Sr):`https://${t.config.authDomain}/${_r}`,s={apiKey:e.apiKey,appName:t.name,v:r["SDK_VERSION"]},o=Or.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["x"])(s).slice(1)}`}async function Er(t){const e=await br(t),n=Ln().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Ir(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xr,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=y(t,"network-request-failed"),s=Ln().setTimeout(()=>{i(r)},wr.get());function o(){Ln().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kr=500,Cr=600,Ar="_blank",jr="http://localhost";class Nr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Dr(t,e,n,r=kr,s=Cr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Tr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=Object(i["l"])().toLowerCase();n&&(c=yt(l)?Ar:n),gt(l)&&(e=e||jr,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(It(l)&&"_self"!==c)return Pr(e||"",c),new Nr(null);const d=window.open(e||"",c,h);S(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Nr(d)}function Pr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="__/auth/handler",Rr="emulator/auth/handler";function $r(t,e,n,s,o,a){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i["p"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Mr(t)}?${Object(i["x"])(u).slice(1)}`}function Mr({config:t}){return t.emulator?P(t,Rr):`https://${t.authDomain}/${Lr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="webStorageSupport";class Br{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=An,this._completeRedirectFn=ir}async _openPopup(t,e,n,i){var r;O(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=$r(t,e,n,k(),i);return Dr(t,s,Dn())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Rn($r(t,e,n,k(),i)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(O(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Er(t),n=new or(t);return e.register("authEvent",e=>{S(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Fr,{type:Fr},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Fr];void 0!==r&&e(!!r),v(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=fr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Tt()||vt()||xt()}}const Vr=Br;class zr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return x("unexpected MultiFactorSessionType")}}}class Ur extends zr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ur(t)}_finalizeEnroll(t,e,n){return vn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return ii(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qr{constructor(){}static assertion(t){return Ur._fromCredential(t)}}qr.FACTOR_ID="phone";var Hr="@firebase/auth",Wr="0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yr(t){Object(r["_registerComponent"])(new a["a"]("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(e=>{S(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),S(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},o=new At(e,i);return T(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",t=>{const e=jt(t.getProvider("auth").getImmediate());return(t=>new Kr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Hr,Wr,Gr(t)),Object(r["registerVersion"])(Hr,Wr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr("Browser");const Jr=2e3;async function Xr(t,e,n){var i;const{BuildInfo:r}=Qr();O(e.sessionId,"AuthEvent did not contain a session ID");const s=await is(e.sessionId),o={};return xt()?o["ibi"]=r.packageName:wt()?o["apn"]=r.packageName:v(t,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,$r(t,n,e.type,void 0,null!==(i=e.eventId)&&void 0!==i?i:void 0,o)}async function Zr(t){const{BuildInfo:e}=Qr(),n={};xt()?n.iosBundleId=e.packageName:wt()?n.androidPackageName=e.packageName:v(t,"operation-not-supported-in-this-environment"),await lr(t,n)}function ts(t){const{cordova:e}=Qr();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,Ot()?"_blank":"_system","location=yes"),n(r)})})}async function es(t,e,n){const{cordova:i}=Qr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var t;s();const e=null===(t=i.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(t,"redirect-cancelled-by-user"))},Jr))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),wt()&&document.addEventListener("visibilitychange",l,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{r()}}function ns(t){var e,n,i,r,s,o,a,c,u,l;const h=Qr();S("function"===typeof(null===(e=null===h||void 0===h?void 0:h.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function is(t){const e=rs(t),n=await crypto.subtle.digest("SHA-256",e),i=Array.from(new Uint8Array(n));return i.map(t=>t.toString(16).padStart(2,"0")).join("")}function rs(t){if(O(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=20;class os extends or{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function as(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:hs(),postBody:null,tenantId:t.tenantId,error:y(t,"no-auth-event")}}function cs(t,e){return ds()._set(fs(t),e)}async function us(t){const e=await ds()._get(fs(t));return e&&await ds()._remove(fs(t)),e}function ls(t,e){var n,i;const r=ms(e);if(r.includes("/__/auth/callback")){const e=gs(r),s=e["firebaseError"]?ps(decodeURIComponent(e["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?y(o):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function hs(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ss;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function ds(){return E(kn)}function fs(t){return ft("authEvent",t.config.apiKey,t.name)}function ps(t){try{return JSON.parse(t)}catch(e){return null}}function ms(t){const e=gs(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,i=gs(n)["link"],r=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=gs(r)["link"];return s||r||i||n||t}function gs(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=500;class ys{constructor(){this._redirectPersistence=An,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ir}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new os(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){v(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,i){ns(t);const r=await this._initialize(t);await r.initialized(),r.resetRedirect(),Ki(),await this._originValidation(t);const s=as(t,n,i);await cs(t,s);const o=await Xr(t,s,e),a=await ts(o);return es(t,r,a)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Zr(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Qr(),s=setTimeout(async()=>{await us(t),e.onEvent(ws())},vs),o=async n=>{clearTimeout(s);const i=await us(t);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ls(i,n["url"])),e.onEvent(r||ws())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=r.packageName.toLowerCase()+"://";Qr().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof a)try{a(t)}catch(e){console.error(e)}}}}const bs=ys;function ws(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){jt(t)._logFramework(e)}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return R})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return L})),n.d(e,"k",(function(){return B})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return A})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return x})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return m})),n.d(e,"u",(function(){return y})),n.d(e,"v",(function(){return S})),n.d(e,"w",(function(){return _})),n.d(e,"x",(function(){return D})),n.d(e,"y",(function(){return P}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,l=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==l){const t=c<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&l(n)&&(t[n]=u(t[n],e[n]));return t}function l(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function S(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?T(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new I(i,o,n);return a}}function T(t,e){return t.replace(k,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function j(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(N(n)&&N(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function P(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function L(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){const n=new $(t,e);return n.subscribe.bind(n)}class ${constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=M(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"20f6":function(t,e,n){},"21be":function(t,e,n){"use strict";var i=n("2909"),r=(n("99af"),n("caad"),n("2532"),n("2b0e")),s=n("80d2");e["a"]=r["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s["u"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(s["u"])(e)],r=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<r.length;o++)t.includes(r[o])||n.push(Object(s["u"])(r[o]));return Math.max.apply(Math,n)}}})},2266:function(t,e,n){var i=n("825a"),r=n("e95a"),s=n("07fa"),o=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,m,g,v,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),S=o(e,y,1+b+_),x=function(t){return h&&u(h,"normal",t),new l(!0,t)},O=function(t){return b?(i(t),_?S(t[0],t[1],x):S(t[0],t[1])):_?S(t,x):S(t)};if(w)h=t;else{if(d=c(t),!d)throw TypeError(String(t)+" is not iterable");if(r(d)){for(f=0,p=s(t);p>f;f++)if(m=O(t[f]),m&&m instanceof l)return m;return new l(!1)}h=a(t,d)}g=h.next;while(!(v=g.call(h)).done){try{m=O(v.value)}catch(I){u(h,"throw",I)}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},"23cb":function(t,e,n){var i=n("5926"),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},"23e7":function(t,e,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},2444:function(t,e,n){"use strict";(function(e){var i=n("c532"),r=n("c8af"),s=n("387f"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}function u(t,e,n){if(i.isString(t))try{return(e||JSON.parse)(t),i.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}var l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(t,e){return r(e,"Accept"),r(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)||e&&"application/json"===e["Content-Type"]?(a(e,"application/json"),u(t)):t}],transformResponse:[function(t){var e=this.transitional||l.transitional,n=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&i.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),i.forEach(["post","put","patch"],(function(t){l.headers[t]=i.merge(o)})),t.exports=l}).call(this,n("4362"))},"24b2":function(t,e,n){"use strict";n("a9e3");var i=n("80d2"),r=n("2b0e");e["a"]=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(i["h"])(this.height),n=Object(i["h"])(this.minHeight),r=Object(i["h"])(this.minWidth),s=Object(i["h"])(this.maxHeight),o=Object(i["h"])(this.maxWidth),a=Object(i["h"])(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("5a34"),s=n("1d80"),o=n("577e"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~o(s(this)).indexOf(o(r(t)),arguments.length>1?arguments[1]:void 0)}})},"256a":function(t,e,n){"use strict";n("5994")},"25a8":function(t,e,n){},"25f0":function(t,e,n){"use strict";var i=n("5e77").PROPER,r=n("6eeb"),s=n("825a"),o=n("577e"),a=n("d039"),c=n("ad6d"),u="toString",l=RegExp.prototype,h=l[u],d=a((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=i&&h.name!=u;(d||f)&&r(RegExp.prototype,u,(function(){var t=s(this),e=o(t.source),n=t.flags,i=o(void 0===n&&t instanceof RegExp&&!("flags"in l)?c.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"25f1":function(t,e,n){"use strict";n("5e3b")},2626:function(t,e,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=i(t),n=r.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"262e":function(t,e,n){"use strict";function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",(function(){return r}))},2679:function(t,e,n){"use strict";n("4551")},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return i}))},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||Object(o["a"])(t)||a()}},"297c":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e"),r=n("5530"),s=n("ade3"),o=(n("c7cd"),n("6ece"),n("0789")),a=n("90a2"),c=n("a9ad"),u=n("fe6c"),l=n("a452"),h=n("7560"),d=n("80d2"),f=n("58df"),p=Object(f["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),l["a"],h["a"]),m=p.extend({name:"v-progress-linear",directives:{intersect:a["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["h"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["h"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(d["h"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(d["h"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["c"]:o["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["h"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},onObserve:function(t,e,n){this.isVisible=n},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["h"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2a12":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=function(t){return(0,i.withParams)({type:"maxLength",max:t},(function(e){return!(0,i.req)(e)||(0,i.len)(e)<=t}))};e.default=r},"2a62":function(t,e,n){var i=n("825a"),r=n("dc4a");t.exports=function(t,e,n){var s,o;i(t);try{if(s=r(t,"return"),!s){if("throw"===e)throw n;return n}s=s.call(t)}catch(a){o=!0,s=a}if("throw"===e)throw n;if(o)throw s;return i(s),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,x=_((function(t){return t.replace(S,(function(t,e){return e?e.toUpperCase():""}))})),O=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),I=/\B([A-Z])/g,E=_((function(t){return t.replace(I,"-$1").toLowerCase()}));function T(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var C=Function.prototype.bind?k:T;function A(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function j(t,e){for(var n in e)t[n]=e[n];return t}function N(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function D(t,e,n){}var P=function(t,e,n){return!1},L=function(t){return t};function R(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return R(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return R(t[n],e[n])}))}catch(u){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:D,parsePlatformTagName:L,mustUseProp:P,async:!0,_lifecycleHooks:V},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+U.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,Y="__proto__"in{},Q="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,it=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),rt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(Q)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(Oo){}var ct=function(){return void 0===G&&(G=!Q&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},ut=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=D,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function vt(t){gt.push(t),mt.target=t}function yt(){gt.pop(),mt.target=gt[gt.length-1]}var bt=function(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function St(t){return new bt(void 0,void 0,void 0,String(t))}function xt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ot=Array.prototype,It=Object.create(Ot),Et=["push","pop","shift","unshift","splice","sort","reverse"];Et.forEach((function(t){var e=Ot[t];H(It,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Tt=Object.getOwnPropertyNames(It),kt=!0;function Ct(t){kt=t}var At=function(t){this.value=t,this.dep=new mt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Y?jt(t,It):Nt(t,It,Tt),this.observeArray(t)):this.walk(t)};function jt(t,e){t.__proto__=e}function Nt(t,e,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];H(t,s,e[s])}}function Dt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:kt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,i,r){var s=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!r&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!c||(c?c.call(t,e):n=e,u=!r&&Dt(e),s.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Pt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Rt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var Mt=z.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,r,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],w(t,n)?i!==r&&l(i)&&l(r)&&Ft(i,r):Lt(t,n,r));return t}function Bt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Ft(i,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,i){var r=Object.create(t||null);return e?j(r,e):r}Mt.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},V.forEach((function(t){Mt[t]=Vt})),B.forEach((function(t){Mt[t+"s"]=Ut})),Mt.watch=function(t,e,n,i){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var s in j(r,t),e){var o=r[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},Mt.props=Mt.methods=Mt.inject=Mt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return j(r,t),e&&j(r,e),r},Mt.provide=Bt;var qt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=x(r),o[s]={type:null})}else if(l(n))for(var a in n)r=n[a],s=x(a),o[s]=l(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(l(n))for(var s in n){var o=n[s];i[s]=l(o)?j({from:s},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Wt(e,n),Kt(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Gt(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(i){var r=Mt[i]||qt;o[i]=r(t[i],e[i],n,i)}return o}function Yt(t,e,n,i){if("string"===typeof n){var r=t[e];if(w(r,n))return r[n];var s=x(n);if(w(r,s))return r[s];var o=O(s);if(w(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Qt(t,e,n,i){var r=e[t],s=!w(n,t),o=n[t],a=ee(Boolean,r.type);if(a>-1)if(s&&!w(r,"default"))o=!1;else if(""===o||o===E(t)){var c=ee(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Jt(i,r,t);var u=kt;Ct(!0),Dt(o),Ct(u)}return o}function Jt(t,e,n){if(w(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Zt(e.type)?i.call(t):i}}var Xt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Xt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){vt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(Oo){re(Oo,i,"errorCaptured hook")}}}re(t,e,n)}finally{yt()}}function ie(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(Oo){ne(Oo,i,r)}return s}function re(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(Oo){Oo!==t&&se(Oo,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!Q&&!J||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),it&&setTimeout(D)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Oo){ne(Oo,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new ht;function ve(t){ye(t,ge),ge.clear()}function ye(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r){n=t.length;while(n--)ye(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)ye(t[i[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function we(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return ie(i,null,arguments,e,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)ie(r[s],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,r,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=we(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(h=be(c),r(h.name,e[c],h.capture))}function Se(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(o.fns,c)}i(a)?o=we([c]):r(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=we([a,c]),o.merged=!0,t[e]=o}function xe(t,e,n){var s=e.options.props;if(!i(s)){var o={},a=t.attrs,c=t.props;if(r(a)||r(c))for(var u in s){var l=E(u);Oe(o,c,u,l,!0)||Oe(o,a,u,l,!1)}return o}}function Oe(t,e,n,i,s){if(r(e)){if(w(e,n))return t[n]=e[n],s||delete e[n],!0;if(w(e,i))return t[n]=e[i],s||delete e[i],!0}return!1}function Ie(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ee(t){return a(t)?[St(t)]:Array.isArray(t)?ke(t):void 0}function Te(t){return r(t)&&r(t.text)&&o(t.isComment)}function ke(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=ke(o,(e||"")+"_"+n),Te(o[0])&&Te(u)&&(l[c]=St(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Te(u)?l[c]=St(u.text+o):""!==o&&l.push(St(o)):Te(o)&&Te(u)?l[c]=St(u.text+o.text):(s(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=je(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Ct(!0))}function je(t,e){if(t){for(var n=Object.create(null),i=dt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ne(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(De)&&delete n[u];return n}function De(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Le(t,e,i){var r,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&a===i.$key&&!s&&!i.$hasNormal)return i;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Re(e,c,t[c]))}else r={};for(var u in e)u in r||(r[u]=$e(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),H(r,"$stable",o),H(r,"$key",a),H(r,"$hasNormal",s),r}function Re(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ee(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function $e(t,e){return function(){return t[e]}}function Me(t,e){var n,i,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,s=t.length;i<s;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=e(t[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=j(j({},i),n)),r=s(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Be(t){return Yt(this.$options,"filters",t,!0)||L}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,i,r){var s=z.keyCodes[e]||n;return r&&i&&!z.keyCodes[e]?Ve(r,i):s?Ve(s,t):i?E(i)!==e:void 0===t}function Ue(t,e,n,i,r){if(n)if(c(n)){var s;Array.isArray(n)&&(n=N(n));var o=function(o){if("class"===o||"style"===o||v(o))s=t;else{var a=t.attrs&&t.attrs.type;s=i||z.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(o),u=E(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],r)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function qe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(i,"__static__"+t,!1)),i}function He(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ke(t[i],e+"_"+i,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function Ye(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var s=t[r];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function Qe(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Xe(t){t._o=He,t._n=m,t._s=p,t._l=Me,t._t=Fe,t._q=R,t._i=$,t._m=qe,t._f=Be,t._k=ze,t._b=Ue,t._v=St,t._e=_t,t._u=Ye,t._g=Ge,t._d=Qe,t._p=Je}function Ze(t,e,i,r,o){var a,c=this,u=o.options;w(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=je(u.inject,r),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Ne(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var s=fn(a,t,e,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,i){return fn(a,t,e,n,i,h)}}function tn(t,e,i,s,o){var a=t.options,c={},u=a.props;if(r(u))for(var l in u)c[l]=Qt(l,u,e||n);else r(i.attrs)&&nn(c,i.attrs),r(i.props)&&nn(c,i.props);var h=new Ze(i,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,i,h.parent,a,h);if(Array.isArray(d)){for(var f=Ee(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=en(f[m],i,h.parent,a,h);return p}}function en(t,e,n,i,r){var s=xt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[x(n)]=e[n]}Xe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var i=t.componentInstance=an(t,jn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Rn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Bn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Mn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!i(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=xn(l,u),void 0===t))return Sn(l,e,n,o,a);e=e||{},Si(t),r(e.model)&&ln(t.options,e);var h=xe(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var i=sn[n],r=e[i],s=rn[i];r===s||r&&r._merged||(e[i]=r?un(s,r):s)}}function un(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[i],a=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var hn=1,dn=2;function fn(t,e,n,i,r,o){return(Array.isArray(n)||a(n))&&(r=i,i=n,n=void 0),s(o)&&(r=dn),pn(t,e,n,i,r)}function pn(t,e,n,i,s){if(r(n)&&r(n.__ob__))return _t();if(r(n)&&r(n.is)&&(e=n.is),!e)return _t();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===dn?i=Ee(i):s===hn&&(i=Ie(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),o=z.isReservedTag(e)?new bt(z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(c=Yt(t.$options,"components",e))?new bt(e,n,i,void 0,void 0,t):on(c,n,t,i,e)):o=on(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(a)&&mn(o,a),r(n)&&gn(n),o):_t()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];r(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function gn(t){c(t.style)&&ve(t.style),c(t.class)&&ve(t.class)}function vn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ne(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return fn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return fn(t,e,n,i,r,!0)};var s=i&&i.data;Pt(t,"$attrs",s&&s.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function wn(t){Xe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Le(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{bn=e,t=i.call(e._renderProxy,e.$createElement)}catch(Oo){ne(Oo,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=r,t}}function _n(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Sn(t,e,n,i,r){var s=_t();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function xn(t,e){if(s(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=bn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=M((function(n){t.resolved=_n(n,e),a?o.length=0:h(!0)})),p=M((function(e){r(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?i(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),r(m.error)&&(t.errorComp=_n(m.error,e)),r(m.loading)&&(t.loadingComp=_n(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function On(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||Pe(n)))return n}}function In(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function En(t,e){yn.$on(t,e)}function Tn(t,e){yn.$off(t,e)}function kn(t,e){var n=yn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function Cn(t,e,n){yn=t,_e(e,n||{},En,Tn,kn,t),yn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?A(n):n;for(var i=A(arguments,1),r='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)ie(n[s],e,i,e,r)}return e}}var jn=null;function Nn(t){var e=jn;return jn=t,function(){jn=e}}function Dn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=Nn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Bn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Bn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=_t),Bn(t,"beforeMount"),i=function(){t._update(t._render(),n)},new ii(t,i,D,{before:function(){t._isMounted&&!t._isDestroyed&&Bn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Bn(t,"mounted")),t}function Rn(t,e,i,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Qt(f,p,e,t)}Ct(!0),t.$options.propsData=e}i=i||n;var m=t.$options._parentListeners;t.$options._parentListeners=i,Cn(t,i,m),u&&(t.$slots=Ne(s,r.context),t.$forceUpdate())}function $n(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Mn(t,e){if(e){if(t._directInactive=!1,$n(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Bn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!$n(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Bn(t,"deactivated")}}function Bn(t,e){vt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,s=n.length;r<s;r++)ie(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Vn=[],zn=[],Un={},qn=!1,Hn=!1,Wn=0;function Kn(){Wn=Vn.length=zn.length=0,Un={},qn=Hn=!1}var Gn=0,Yn=Date.now;if(Q&&!tt){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Jn(){var t,e;for(Gn=Yn(),Hn=!0,Vn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<Vn.length;Wn++)t=Vn[Wn],t.before&&t.before(),e=t.id,Un[e]=null,t.run();var n=zn.slice(),i=Vn.slice();Kn(),ti(n),Xn(i),ut&&z.devtools&&ut.emit("flush")}function Xn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Bn(i,"updated")}}function Zn(t){t._inactive=!1,zn.push(t)}function ti(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Mn(t[e],!0)}function ei(t){var e=t.id;if(null==Un[e]){if(Un[e]=!0,Hn){var n=Vn.length-1;while(n>Wn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);qn||(qn=!0,me(Jn))}}var ni=0,ii=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ni,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};ii.prototype.get=function(){var t;vt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Oo){if(!this.user)throw Oo;ne(Oo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ve(t),yt(),this.cleanupDeps()}return t},ii.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ii.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ii.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ei(this)},ii.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ii.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ii.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ii.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:D,set:D};function si(t,e,n){ri.get=function(){return this[e][n]},ri.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ri)}function oi(t){t._watchers=[];var e=t.$options;e.props&&ai(t,e.props),e.methods&&mi(t,e.methods),e.data?ci(t):Dt(t._data={},!0),e.computed&&hi(t,e.computed),e.watch&&e.watch!==st&&gi(t,e.watch)}function ai(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],s=!t.$parent;s||Ct(!1);var o=function(s){r.push(s);var o=Qt(s,e,n,t);Pt(i,s,o),s in t||si(t,"_props",s)};for(var a in e)o(a);Ct(!0)}function ci(t){var e=t.$options.data;e=t._data="function"===typeof e?ui(e,t):e||{},l(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&w(i,s)||q(s)||si(t,"_data",s)}Dt(e,!0)}function ui(t,e){vt();try{return t.call(e,e)}catch(Oo){return ne(Oo,e,"data()"),{}}finally{yt()}}var li={lazy:!0};function hi(t,e){var n=t._computedWatchers=Object.create(null),i=ct();for(var r in e){var s=e[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ii(t,o||D,D,li)),r in t||di(t,r,s)}}function di(t,e,n){var i=!ct();"function"===typeof n?(ri.get=i?fi(e):pi(n),ri.set=D):(ri.get=n.get?i&&!1!==n.cache?fi(e):pi(n.get):D,ri.set=n.set||D),Object.defineProperty(t,e,ri)}function fi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pi(t){return function(){return t.call(this,this)}}function mi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:C(e[n],t)}function gi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)vi(t,n,i[r]);else vi(t,n,i)}}function vi(t,e,n,i){return l(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function yi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Rt,t.prototype.$watch=function(t,e,n){var i=this;if(l(e))return vi(i,t,e,n);n=n||{},n.user=!0;var r=new ii(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';vt(),ie(e,i,[r.value],i,s),yt()}return function(){r.teardown()}}}var bi=0;function wi(t){t.prototype._init=function(t){var e=this;e._uid=bi++,e._isVue=!0,t&&t._isComponent?_i(e,t):e.$options=Gt(Si(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Dn(e),In(e),vn(e),Bn(e,"beforeCreate"),Ae(e),oi(e),Ce(e),Bn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _i(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Si(t){var e=t.options;if(t.super){var n=Si(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=xi(t);r&&j(t.extendOptions,r),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function xi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Oi(t){this._init(t)}function Ii(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ei(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function Ti(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Gt(n.options,t),o["super"]=n,o.options.props&&ki(o),o.options.computed&&Ci(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,B.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=j({},o.options),r[i]=o,o}}function ki(t){var e=t.options.props;for(var n in e)si(t.prototype,"_props",n)}function Ci(t){var e=t.options.computed;for(var n in e)di(t.prototype,n,e[n])}function Ai(t){B.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ji(t){return t&&(t.Ctor.options.name||t.tag)}function Ni(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Di(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pi(n,s,i,r)}}}function Pi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}wi(Oi),yi(Oi),An(Oi),Pn(Oi),wn(Oi);var Li=[String,RegExp,Array],Ri={name:"keep-alive",abstract:!0,props:{include:Li,exclude:Li,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:ji(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Pi(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pi(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Di(t,(function(t){return Ni(e,t)}))})),this.$watch("exclude",(function(e){Di(t,(function(t){return!Ni(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=On(t),n=e&&e.componentOptions;if(n){var i=ji(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Ni(s,i))||o&&i&&Ni(o,i))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},$i={KeepAlive:Ri};function Mi(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:j,mergeOptions:Gt,defineReactive:Pt},t.set=Lt,t.delete=Rt,t.nextTick=me,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),B.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,j(t.options.components,$i),Ii(t),Ei(t),Ti(t),Ai(t)}Mi(Oi),Object.defineProperty(Oi.prototype,"$isServer",{get:ct}),Object.defineProperty(Oi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Oi,"FunctionalRenderContext",{value:Ze}),Oi.version="2.6.14";var Fi=g("style,class"),Bi=g("input,textarea,option,select,progress"),Vi=function(t,e,n){return"value"===n&&Bi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zi=g("contenteditable,draggable,spellcheck"),Ui=g("events,caret,typing,plaintext-only"),qi=function(t,e){return Yi(e)||"false"===e?"false":"contenteditable"===t&&Ui(e)?e:"true"},Hi=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Ki=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Gi=function(t){return Ki(t)?t.slice(6,t.length):""},Yi=function(t){return null==t||!1===t};function Qi(t){var e=t.data,n=t,i=t;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Ji(i.data,e));while(r(n=n.parent))n&&n.data&&(e=Ji(e,n.data));return Xi(e.staticClass,e.class)}function Ji(t,e){return{staticClass:Zi(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Xi(t,e){return r(t)||r(e)?Zi(t,tr(e)):""}function Zi(t,e){return t?e?t+" "+e:t:e||""}function tr(t){return Array.isArray(t)?er(t):c(t)?nr(t):"string"===typeof t?t:""}function er(t){for(var e,n="",i=0,s=t.length;i<s;i++)r(e=tr(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function nr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),sr=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(t){return rr(t)||sr(t)};function ar(t){return sr(t)?"svg":"math"===t?"math":void 0}var cr=Object.create(null);function ur(t){if(!Q)return!0;if(or(t))return!1;if(t=t.toLowerCase(),null!=cr[t])return cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cr[t]=/HTMLUnknownElement/.test(e.toString())}var lr=g("text,number,password,search,email,tel,url");function hr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function dr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(t,e){return document.createElementNS(ir[t],e)}function pr(t){return document.createTextNode(t)}function mr(t){return document.createComment(t)}function gr(t,e,n){t.insertBefore(e,n)}function vr(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function br(t){return t.parentNode}function wr(t){return t.nextSibling}function _r(t){return t.tagName}function Sr(t,e){t.textContent=e}function xr(t,e){t.setAttribute(e,"")}var Or=Object.freeze({createElement:dr,createElementNS:fr,createTextNode:pr,createComment:mr,insertBefore:gr,removeChild:vr,appendChild:yr,parentNode:br,nextSibling:wr,tagName:_r,setTextContent:Sr,setStyleScope:xr}),Ir={create:function(t,e){Er(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Er(t,!0),Er(e))},destroy:function(t){Er(t,!0)}};function Er(t,e){var n=t.data.ref;if(r(n)){var i=t.context,s=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Tr=new bt("",{},[]),kr=["create","activate","update","remove","destroy"];function Cr(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&Ar(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ar(t,e){if("input"!==t.tag)return!0;var n,i=r(n=t.data)&&r(n=n.attrs)&&n.type,s=r(n=e.data)&&r(n=n.attrs)&&n.type;return i===s||lr(i)&&lr(s)}function jr(t,e,n){var i,s,o={};for(i=e;i<=n;++i)s=t[i].key,r(s)&&(o[s]=i);return o}function Nr(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<kr.length;++e)for(o[kr[e]]=[],n=0;n<c.length;++n)r(c[n][kr[e]])&&o[kr[e]].push(c[n][kr[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function f(t,e,n,i,o,a,c){if(r(t.elm)&&r(a)&&(t=a[c]=xt(t)),t.isRootInsert=!o,!p(t,e,n,i)){var l=t.data,h=t.children,d=t.tag;r(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),S(t),b(t,h,e),r(l)&&_(t,e),y(n,t.elm,i)):s(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function p(t,e,n,i){var o=t.data;if(r(o)){var a=r(t.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(t,!1),r(t.componentInstance))return m(t,e),y(n,t.elm,i),s(a)&&v(t,e,n,i),!0}}function m(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),S(t)):(Er(t),e.push(t))}function v(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,r(s=a.data)&&r(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Tr,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){r(t)&&(r(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return r(t.tag)}function _(t,n){for(var i=0;i<o.create.length;++i)o.create[i](Tr,t);e=t.data.hook,r(e)&&(r(e.create)&&e.create(Tr,t),r(e.insert)&&n.push(t))}function S(t){var e;if(r(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}r(e=jn)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function x(t,e,n,i,r,s){for(;i<=r;++i)f(n[i],s,t,e,!1,n,i)}function O(t){var e,n,i=t.data;if(r(i))for(r(e=i.hook)&&r(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function I(t,e,n){for(;e<=n;++e){var i=t[e];r(i)&&(r(i.tag)?(E(i),O(i)):d(i.elm))}}function E(t,e){if(r(e)||r(t.data)){var n,i=o.remove.length+1;for(r(e)?e.listeners+=i:e=h(t.elm,i),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&E(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else d(t.elm)}function T(t,e,n,s,o){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)i(g)?g=e[++d]:i(v)?v=e[--m]:Cr(g,b)?(C(g,b,s,n,p),g=e[++d],b=n[++p]):Cr(v,w)?(C(v,w,s,n,y),v=e[--m],w=n[--y]):Cr(g,w)?(C(g,w,s,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):Cr(v,b)?(C(v,b,s,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(i(a)&&(a=jr(e,d,m)),c=r(b.key)?a[b.key]:k(b,e,d,m),i(c)?f(b,s,t,g.elm,!1,n,p):(l=e[c],Cr(l,b)?(C(l,b,s,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,s,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=i(n[y+1])?null:n[y+1].elm,x(t,h,n,p,y,s)):p>y&&I(e,d,m)}function k(t,e,n,i){for(var s=n;s<i;s++){var o=e[s];if(r(o)&&Cr(t,o))return s}}function C(t,e,n,a,c,l){if(t!==e){r(e.elm)&&r(a)&&(e=a[c]=xt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;r(f)&&r(d=f.hook)&&r(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(r(f)&&w(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);r(d=f.hook)&&r(d=d.update)&&d(t,e)}i(e.text)?r(p)&&r(m)?p!==m&&T(h,p,m,n,l):r(m)?(r(t.text)&&u.setTextContent(h,""),x(h,null,m,0,m.length-1,n)):r(p)?I(p,0,p.length-1):r(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),r(f)&&r(d=f.hook)&&r(d=d.postpatch)&&d(t,e)}}}function A(t,e,n){if(s(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var j=g("attrs,class,staticClass,staticStyle,key");function N(t,e,n,i){var o,a=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,s(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(o=c.hook)&&r(o=o.init)&&o(e,!0),r(o=e.componentInstance)))return m(e,n),!0;if(r(a)){if(r(u))if(t.hasChildNodes())if(r(o=c)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(r(c)){var f=!1;for(var p in c)if(!j(p)){f=!0,_(e,n);break}!f&&c["class"]&&ve(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,f(e,h);else{var d=r(t.nodeType);if(!d&&Cr(t,e))C(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),s(n)&&N(t,e,h))return A(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),r(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Tr,g);var _=g.data.hook.insert;if(_.merged)for(var S=1;S<_.fns.length;S++)_.fns[S]()}else Er(g);g=g.parent}}r(m)?I([t],0,0):r(t.tag)&&O(t)}}return A(e,h,c),e.elm}r(t)&&O(t)}}var Dr={create:Pr,update:Pr,destroy:function(t){Pr(t,Tr)}};function Pr(t,e){(t.data.directives||e.data.directives)&&Lr(t,e)}function Lr(t,e){var n,i,r,s=t===Tr,o=e===Tr,a=$r(t.data.directives,t.context),c=$r(e.data.directives,e.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Fr(r,"update",e,t),r.def&&r.def.componentUpdated&&l.push(r)):(Fr(r,"bind",e,t),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Fr(u[n],"inserted",e,t)};s?Se(e,"insert",h):h()}if(l.length&&Se(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Fr(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Fr(a[n],"unbind",t,t,o)}var Rr=Object.create(null);function $r(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Rr),r[Mr(i)]=i,i.def=Yt(e.$options,"directives",i.name,!0);return r}function Mr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fr(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(Oo){ne(Oo,n.context,"directive "+t.name+" "+e+" hook")}}var Br=[Ir,Dr];function Vr(t,e){var n=e.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in r(l.__ob__)&&(l=e.data.attrs=j({},l)),l)o=l[s],a=u[s],a!==o&&zr(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&zr(c,"value",l.value),u)i(l[s])&&(Ki(s)?c.removeAttributeNS(Wi,Gi(s)):zi(s)||c.removeAttribute(s))}}function zr(t,e,n,i){i||t.tagName.indexOf("-")>-1?Ur(t,e,n):Hi(e)?Yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zi(e)?t.setAttribute(e,qi(e,n)):Ki(e)?Yi(n)?t.removeAttributeNS(Wi,Gi(e)):t.setAttributeNS(Wi,e,n):Ur(t,e,n)}function Ur(t,e,n){if(Yi(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var qr={create:Vr,update:Vr};function Hr(t,e){var n=e.elm,s=e.data,o=t.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Qi(e),c=n._transitionClasses;r(c)&&(a=Zi(a,tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wr,Kr={create:Hr,update:Hr},Gr="__r",Yr="__c";function Qr(t){if(r(t[Gr])){var e=tt?"change":"input";t[e]=[].concat(t[Gr],t[e]||[]),delete t[Gr]}r(t[Yr])&&(t.change=[].concat(t[Yr],t.change||[]),delete t[Yr])}function Jr(t,e,n){var i=Wr;return function r(){var s=e.apply(null,arguments);null!==s&&ts(t,r,n,i)}}var Xr=ae&&!(rt&&Number(rt[1])<=53);function Zr(t,e,n,i){if(Xr){var r=Gn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Wr.addEventListener(t,e,ot?{capture:n,passive:i}:n)}function ts(t,e,n,i){(i||Wr).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Wr=e.elm,Qr(n),_e(n,r,Zr,ts,Jr,e.context),Wr=void 0}}var ns,is={create:es,update:es};function rs(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in r(c.__ob__)&&(c=e.data.domProps=j({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=i(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&sr(o.tagName)&&i(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Oo){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(Oo){}return n&&t.value!==e}function as(t,e){var n=t.value,i=t._vModifiers;if(r(i)){if(i.number)return m(n)!==m(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:rs,update:rs},us=_((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?j(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?N(t):"string"===typeof t?us(t):t}function ds(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=ls(r.data))&&j(i,n)}(n=ls(t.data))&&j(i,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&j(i,n);return i}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(ms.test(n))t.style.setProperty(E(e),n.replace(ms,""),"important");else{var i=ys(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},vs=["Webkit","Moz","ms"],ys=_((function(t){if(fs=fs||document.createElement("div").style,t=x(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<vs.length;n++){var i=vs[n]+e;if(i in fs)return i}}));function bs(t,e){var n=e.data,s=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(s.staticStyle)&&i(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?j({},d):d;var f=ds(e,!0);for(a in h)i(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Ss(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function xs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Os(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&j(e,Is(t.name||"v")),j(e,t),e}return"string"===typeof t?Is(t):void 0}}var Is=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Es=Q&&!et,Ts="transition",ks="animation",Cs="transition",As="transitionend",js="animation",Ns="animationend";Es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",As="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(js="WebkitAnimation",Ns="webkitAnimationEnd"));var Ds=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Ds((function(){Ds(t)}))}function Ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ss(t,e))}function Rs(t,e){t._transitionClasses&&y(t._transitionClasses,e),xs(t,e)}function $s(t,e,n){var i=Fs(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Ts?As:Ns,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Ms=/\b(transform|all)(,|$)/;function Fs(t,e){var n,i=window.getComputedStyle(t),r=(i[Cs+"Delay"]||"").split(", "),s=(i[Cs+"Duration"]||"").split(", "),o=Bs(r,s),a=(i[js+"Delay"]||"").split(", "),c=(i[js+"Duration"]||"").split(", "),u=Bs(a,c),l=0,h=0;e===Ts?o>0&&(n=Ts,l=o,h=s.length):e===ks?u>0&&(n=ks,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Ts:ks:null,h=n?n===Ts?s.length:c.length:0);var d=n===Ts&&Ms.test(i[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Bs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Vs(e)+Vs(t[n])})))}function Vs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zs(t,e){var n=t.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Os(t.data.transition);if(!i(s)&&!r(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,S=s.afterAppear,x=s.appearCancelled,O=s.duration,I=jn,E=jn.$vnode;while(E&&E.parent)I=E.context,E=E.parent;var T=!I._isMounted||!t.isRootInsert;if(!T||_||""===_){var k=T&&d?d:u,C=T&&p?p:h,A=T&&f?f:l,j=T&&w||g,N=T&&"function"===typeof _?_:v,D=T&&S||y,P=T&&x||b,L=m(c(O)?O.enter:O);0;var R=!1!==o&&!et,$=Hs(N),F=n._enterCb=M((function(){R&&(Rs(n,A),Rs(n,C)),F.cancelled?(R&&Rs(n,k),P&&P(n)):D&&D(n),n._enterCb=null}));t.data.show||Se(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),N&&N(n,F)})),j&&j(n),R&&(Ls(n,k),Ls(n,C),Ps((function(){Rs(n,k),F.cancelled||(Ls(n,A),$||(qs(L)?setTimeout(F,L):$s(n,a,F)))}))),t.data.show&&(e&&e(),N&&N(n,F)),R||$||F()}}}function Us(t,e){var n=t.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Os(t.data.transition);if(i(s)||1!==n.nodeType)return e();if(!r(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!et,w=Hs(f),_=m(c(y)?y.leave:y);0;var S=n._leaveCb=M((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Rs(n,l),Rs(n,h)),S.cancelled?(b&&Rs(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(x):x()}function x(){S.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ls(n,u),Ls(n,h),Ps((function(){Rs(n,u),S.cancelled||(Ls(n,l),w||(qs(_)?setTimeout(S,_):$s(n,a,S)))}))),f&&f(n,S),b||w||S())}}function qs(t){return"number"===typeof t&&!isNaN(t)}function Hs(t){if(i(t))return!1;var e=t.fns;return r(e)?Hs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ws(t,e){!0!==e.data.show&&zs(e)}var Ks=Q?{create:Ws,activate:Ws,remove:function(t,e){!0!==t.data.show?Us(t,e):e()}}:{},Gs=[qr,Kr,is,cs,ws,Ks],Ys=Gs.concat(Br),Qs=Nr({nodeOps:Or,modules:Ys});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ro(t,"input")}));var Js={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Se(n,"postpatch",(function(){Js.componentUpdated(t,e,n)})):Xs(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||lr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",io),t.addEventListener("change",io),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Xs(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,eo);if(r.some((function(t,e){return!R(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,r)})):e.value!==e.oldValue&&to(e.value,r);s&&ro(t,"change")}}}};function Xs(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=$(i,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(R(eo(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!R(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function io(t){t.target.composing&&(t.target.composing=!1,ro(t.target,"input"))}function ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var i=e.value;n=so(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,zs(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?zs(n,(function(){t.style.display=t.__vOriginalDisplay})):Us(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},ao={model:Js,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(On(e.children)):t}function lo(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var s in r)e[x(s)]=r[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Pe(t)},go=function(t){return"show"===t.name},vo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=uo(r);if(!s)return r;if(this._leaving)return ho(t,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=j({},c);if("out-in"===i)return this._leaving=!0,Se(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,r);if("in-out"===i){if(Pe(s))return u;var d,f=function(){d()};Se(c,"afterEnter",f),Se(c,"enterCancelled",f),Se(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=j({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=Nn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var u=[],l=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(_o),t.forEach(So),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;Ls(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(As,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(As,t),n._moveCb=null,Rs(n,e))})}})))},methods:{hasMove:function(t,e){if(!Es)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){xs(n,t)})),Ss(n,e),n.style.display="none",this.$el.appendChild(n);var i=Fs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _o(t){t.data.newPos=t.elm.getBoundingClientRect()}function So(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var xo={Transition:vo,TransitionGroup:bo};Oi.config.mustUseProp=Vi,Oi.config.isReservedTag=or,Oi.config.isReservedAttr=Fi,Oi.config.getTagNamespace=ar,Oi.config.isUnknownElement=ur,j(Oi.options.directives,ao),j(Oi.options.components,xo),Oi.prototype.__patch__=Q?Qs:D,Oi.prototype.$mount=function(t,e){return t=t&&Q?hr(t):void 0,Ln(this,t,e)},Q&&setTimeout((function(){z.devtools&&ut&&ut.emit("init",Oi)}),0),e["a"]=Oi}).call(this,n("c8ba"))},"2b19":function(t,e,n){var i=n("23e7"),r=n("129f");i({target:"Object",stat:!0},{is:r})},"2b40":function(t,e,n){},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),r=n("06cf").f,s=n("50c4"),o=n("577e"),a=n("5a34"),c=n("1d80"),u=n("ab13"),l=n("c430"),h="".startsWith,d=Math.min,f=u("startsWith"),p=!l&&!f&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(t){var e=o(c(this));a(t);var n=s(d(arguments.length>1?arguments[1]:void 0,e.length)),i=o(t);return h?h.call(e,i,n):e.slice(n,n+i.length)===i}})},"2caf":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("4ae1"),n("3410");function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var s=n("99de");function o(t){var e=r();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}},"2cf4":function(t,e,n){var i,r,s,o,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,v=a.process,y=a.MessageChannel,b=a.Dispatch,w=0,_={},S="onreadystatechange";try{i=a.location}catch(T){}var x=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},O=function(t){return function(){x(t)}},I=function(t){x(t.data)},E=function(t){a.postMessage(String(t),i.protocol+"//"+i.host)};m&&g||(m=function(t){var e=[],n=arguments.length,i=1;while(n>i)e.push(arguments[i++]);return _[++w]=function(){(c(t)?t:Function(t)).apply(void 0,e)},r(w),w},g=function(t){delete _[t]},p?r=function(t){v.nextTick(O(t))}:b&&b.now?r=function(t){b.now(O(t))}:y&&!f?(s=new y,o=s.port2,s.port1.onmessage=I,r=l(o.postMessage,o,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!u(E)?(r=E,a.addEventListener("message",I,!1)):r=S in d("script")?function(t){h.appendChild(d("script"))[S]=function(){h.removeChild(this),x(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:m,clear:g}},"2d00":function(t,e,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(i=l.split("."),r=i[0]<4?1:i[0]+i[1]):o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=i[1]))),t.exports=r&&+r},"2d83":function(t,e,n){"use strict";var i=n("387f");t.exports=function(t,e,n,r,s){var o=new Error(t);return i(o,e,n,r,s)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},r=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){r.emit("vuex:action",t,e)}),{prepend:!0}))}function o(t,e){return t.filter(e)[0]}function a(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=o(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=a(t[n],e)})),i}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function h(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,f);var p=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;m(t.concat(i),e.getChild(i),n.modules[i])}}p.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},p.prototype.update=function(t){m([],this.root,t)},p.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new d(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},p.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var g;var v=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&j(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var r=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var u=this._modules.root.state;S(this,u,[],this._modules.root),_(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:g.config.devtools;l&&s(this)},y={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;S(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};c(r,(function(e,n){s[n]=h(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:s}),g.config.silent=o,t.strict&&k(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),g.nextTick((function(){return i.$destroy()})))}function S(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=C(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){g.set(a,c,i.state)}))}var u=i.context=x(t,o,n);i.forEachMutation((function(e,n){var i=o+n;I(t,i,e,u)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;E(t,i,r,u)})),i.forEachGetter((function(e,n){var i=o+n;T(t,i,e,u)})),i.forEachChild((function(i,s){S(t,e,n.concat(s),i,r)}))}function x(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return O(t,e)}},state:{get:function(){return C(t.state,n)}}}),r}function O(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function I(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function E(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return l(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function T(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function k(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function C(t,e){return e.reduce((function(t,e){return t[e]}),t)}function A(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function j(t){g&&t===g||(g=t,n(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},v.prototype.commit=function(t,e,n){var i=this,r=A(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},v.prototype.dispatch=function(t,e){var n=this,i=A(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},v.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},v.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},v.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},v.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},v.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),S(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},v.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=C(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),w(this)},v.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},v.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},v.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(v.prototype,y);var N=F((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=B(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),D=F((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=B(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),P=F((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||B(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),L=F((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=B(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),R=function(t){return{mapState:N.bind(null,t),mapGetters:P.bind(null,t),mapMutations:D.bind(null,t),mapActions:L.bind(null,t)}};function $(t){return M(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function M(t){return Array.isArray(t)||u(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function B(t,e,n){var i=t._modulesNamespaceMap[n];return i}function V(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var c=t.logMutations;void 0===c&&(c=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=a(t.state);"undefined"!==typeof l&&(c&&t.subscribe((function(t,s){var o=a(s);if(n(t,h,o)){var c=q(),u=r(t),d="mutation "+t.type+c;z(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),U(l)}h=o})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var i=q(),r=o(t),a="action "+t.type+i;z(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",r),U(l)}})))}}function z(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function U(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function H(t,e){return new Array(e+1).join(t)}function W(t,e){return H("0",e-t.toString().length)+t}var K={Store:v,install:j,version:"3.6.2",mapState:N,mapMutations:D,mapGetters:P,mapActions:L,createNamespacedHelpers:R,createLogger:V};e["a"]=K}).call(this,n("c8ba"))},"30b5":function(t,e,n){"use strict";var i=n("c532");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(i.isURLSearchParams(e))s=e.toString();else{var o=[];i.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,(function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),o.push(r(e)+"="+r(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},3206:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var i=n("ade3"),r=(n("99af"),n("2b0e")),s=n("d9bd");function o(t,e){return function(){return Object(s["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,n){var s=e&&n?{register:o(e,n),unregister:o(e,n)}:null;return r["a"].extend({name:"registrable-inject",inject:Object(i["a"])({},t,{default:s})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].extend({name:"registrable-provide",provide:function(){return Object(i["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},"326d":function(t,e,n){"use strict";var i=n("e449");e["a"]=i["a"]},3360:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.withParams)({type:"and"},(function(){for(var t=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.length>0&&e.reduce((function(e,n){return e&&n.apply(t,i)}),!0)}))};e.default=r},3408:function(t,e,n){},3410:function(t,e,n){var i=n("23e7"),r=n("d039"),s=n("7b0b"),o=n("e163"),a=n("e177"),c=r((function(){o(1)}));i({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(t){return o(s(t))}})},"342f":function(t,e,n){var i=n("d066");t.exports=i("navigator","userAgent")||""},"35a1":function(t,e,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return r(t,a)||r(t,"@@iterator")||s[i(t)]}},"368e":function(t,e,n){},"37e8":function(t,e,n){var i=n("83ab"),r=n("9bf2"),s=n("825a"),o=n("df75");t.exports=i?Object.defineProperties:function(t,e){s(t);var n,i=o(e),a=i.length,c=0;while(a>c)r.f(t,n=i[c++],e[n]);return t}},3835:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done);o=!0)if(s.push(i.value),e&&s.length===e)break}catch(c){a=!0,r=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw r}}return s}}var s=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){return i(t)||r(t,e)||Object(s["a"])(t,e)||o()}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,i,r){return t.config=e,n&&(t.code=n),t.request=i,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},"38cb":function(t,e,n){"use strict";var i=n("53ca"),r=(n("a9e3"),n("fb6a"),n("a9ad")),s=n("7560"),o=n("3206"),a=n("80d2"),c=n("d9bd"),u=n("58df"),l=Object(u["a"])(r["a"],Object(o["a"])("form"),s["a"]);e["a"]=l.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(a["j"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var r=0;r<this.rules.length;r++){var s=this.rules[r],o="function"===typeof s?s(e):s;!1===o||"string"===typeof o?n.push(o||""):"boolean"!==typeof o&&Object(c["b"])("Rules should return a string or boolean, received '".concat(Object(i["a"])(o),"' instead"),this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},"38cf":function(t,e,n){var i=n("23e7"),r=n("1148");i({target:"String",proto:!0},{repeat:r})},3934:function(t,e,n){"use strict";var i=n("c532");t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var i=t;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=i.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"398e":function(t,e,n){},"3a54":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=(0,i.regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=r},"3ad0":function(t,e,n){},"3bbe":function(t,e,n){var i=n("1626");t.exports=function(t){if("object"===typeof t||i(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3c93":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:r(t),index:0})}),(function(){var t,e=u(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"3ea3":function(t,e,n){var i=n("23e7"),r=n("f748"),s=Math.abs,o=Math.pow;i({target:"Math",stat:!0},{cbrt:function(t){return r(t=+t)*o(s(t),1/3)}})},"3f8c":function(t,e){t.exports={}},"408a":function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},"428f":function(t,e,n){var i=n("da84");t.exports=i},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var i=n("d039"),r=n("c6b6"),s="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?s.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var i=n("da84");t.exports=function(t,e){var n=i.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},4551:function(t,e,n){},4583:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hollow-dots-spinner",style:t.spinnerStyle},t._l(t.dotsStyles,(function(t,e){return n("div",{key:e,staticClass:"dot",style:t})})),0)},r=[],s=(n("a9e3"),{name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:"".concat(this.dotSize,"px"),width:"".concat((this.dotSize+2*this.horizontalMargin)*this.dotsNum,"px")}},dotStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px"),margin:"0 ".concat(this.horizontalMargin,"px"),borderWidth:"".concat(this.dotSize/5,"px"),borderColor:this.color}},dotsStyles:function(){for(var t=[],e=.3,n=1e3,i=1;i<=this.dotsNum;i++){var r=Object.assign({animationDelay:"".concat(n*i*e,"ms")},this.dotStyle);t.push(r)}return t}}}),o=s,a=(n("2679"),n("2877")),c=Object(a["a"])(o,i,r,!1,null,"6a541738",null),u=c.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pixel-spinner",style:t.spinnerStyle},[n("div",{staticClass:"pixel-spinner-inner",style:t.spinnerInnerStyle})])},h=[],d=(n("99af"),{appendKeyframes:function(t,e){const n=document.createElement("style");n&&(n.setAttribute("id",t),n.innerHTML=`@keyframes ${t} {${e}}`,document.body.appendChild(n))},removeKeyframes:function(t){const e=document.getElementById(t);if(!e)return;const n=e.parentNode;n.removeChild(e)}}),f={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"pixel-spinner-animation-".concat(Date.now())}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerInnerStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName,width:"".concat(this.pixelSize,"px"),height:"".concat(this.pixelSize,"px"),backgroundColor:this.color,color:this.color,boxShadow:"\n                      ".concat(1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      0 ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px 0 0 0,\n                      ").concat(-1.5*this.pixelSize,"px 0 0 0,\n                      0 ").concat(-1.5*this.pixelSize,"px 0 0\n                    ")}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  ".concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }")}}},p=f,m=(n("8d4e"),Object(a["a"])(p,l,h,!1,null,"03e54454",null)),g=(m.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flower-spinner",style:t.spinnerStyle},[n("div",{staticClass:"dots-container",style:t.dotsContainerStyle},[n("div",{staticClass:"big-dot",style:t.biggerDotStyle},[n("div",{staticClass:"small-dot",style:t.smallerDotStyle})])])])}),v=[],y={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallDotName:"flower-spinner-small-dot-".concat(Date.now()),bigDotName:"flower-spinner-big-dot-".concat(Date.now())}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},dotsContainerStyle:function(){return{width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px")}},smallerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.smallDotName}},biggerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeDestroy:function(){d.removeKeyframes(this.smallDotName),d.removeKeyframes(this.bigDotName)},methods:{updateAnimation:function(){d.removeKeyframes(this.smallDotName),d.appendKeyframes(this.smallDotName,this.generateSmallDotKeyframes()),d.removeKeyframes(this.bigDotName),d.appendKeyframes(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")},generateBigDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")}}},b=y,w=(n("b991"),Object(a["a"])(b,g,v,!1,null,"4ab865cf",null)),_=(w.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intersecting-circles-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinnerBlock",style:t.spinnerBlockStyle},t._l(t.circleStyles,(function(t,e){return n("span",{key:e,staticClass:"circle",style:t})})),0)])}),S=[],x=(n("d81d"),{name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerBlockStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.circleSize,"px"),height:"".concat(this.circleSize,"px")}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this,e=[{top:0,left:0},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:0,top:"".concat(-.36*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:0,top:"".concat(.36*this.circleSize,"px")}];return e.map((function(e){return Object.assign(e,t.circleStyle)}))}}}),O=x,I=(n("7e26"),Object(a["a"])(O,_,S,!1,null,"72b5f8a9",null)),E=(I.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orbit-spinner",style:t.spinnerStyle},[n("div",{staticClass:"orbit one",style:t.orbitStyle}),n("div",{staticClass:"orbit two",style:t.orbitStyle}),n("div",{staticClass:"orbit three",style:t.orbitStyle})])}),T=[],k={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},orbitStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},C=k,A=(n("fe73"),Object(a["a"])(C,E,T,!1,null,"325a6afe",null)),j=(A.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fingerprint-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,e){return n("div",{key:e,staticClass:"spinner-ring",style:t})})),0)}),N=[],D={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ringsStyles:function(){for(var t=[],e=this.outerRingSize/this.ringsNum,n=e,i=1;i<=this.ringsNum;i++){var r=Object.assign({animationDelay:"".concat(50*i,"ms"),height:"".concat(e+(i-1)*n,"px"),width:"".concat(e+(i-1)*n,"px")},this.ringStyle);t.push(r)}return t}}},P=D,L=(n("bc66"),Object(a["a"])(P,j,N,!1,null,"f115833a",null)),R=(L.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trinity-rings-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle1",style:t.ring1Style}),n("div",{staticClass:"circle circle2",style:t.ring2Style}),n("div",{staticClass:"circle circle3",style:t.ring3Style})])}),$=[],M={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ring1Style:function(){return{height:"".concat(this.outerRingSize,"px"),width:"".concat(this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring2Style:function(){return{height:"".concat(.65*this.outerRingSize,"px"),width:"".concat(.65*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring3Style:function(){return{height:"".concat(.1*this.outerRingSize,"px"),width:"".concat(.1*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},F=M,B=(n("8e91"),Object(a["a"])(F,R,$,!1,null,"65918846",null)),V=(B.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fulfilling-square-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner",style:t.spinnerInnerStyle})])}),z=[],U={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},q=U,H=(n("4af8"),Object(a["a"])(q,V,z,!1,null,"96d5104c",null)),W=(H.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circles-to-rhombuses-spinner",style:t.spinnertStyle},t._l(t.circlesStyles,(function(t,e){return n("div",{key:e,staticClass:"circle",style:t})})),0)}),K=[],G={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:"".concat(this.circleSize,"px"),width:"".concat((this.circleSize+this.circleMarginLeft)*this.circlesNum,"px")}},circleStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),height:"".concat(this.circleSize,"px"),width:"".concat(this.circleSize,"px"),marginLeft:"".concat(this.circleMarginLeft,"px")}},circlesStyles:function(){for(var t=[],e=150,n=1;n<=this.circlesNum;n++){var i=Object.assign({animationDelay:"".concat(n*e,"ms")},this.circleStyle);1===n&&(i.marginLeft=0),t.push(i)}return t}}},Y=G,Q=(n("98ea"),Object(a["a"])(Y,W,K,!1,null,"91571d3e",null)),J=(Q.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"semipolar-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,e){return n("div",{key:e,staticClass:"ring",style:t})})),0)}),X=[],Z={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},ringStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],e=.1,n=.05*this.size,i=2*n,r=.2*this.size,s=0;s<this.ringsNum;s++){var o="".concat(this.size-r*s,"px"),a="".concat(i*s,"px"),c=Object.assign({animationDelay:"".concat(this.animationDuration*e*(this.ringsNum-s-1),"ms"),height:o,width:o,left:a,top:a,borderWidth:"".concat(n,"px")},this.ringStyle);t.push(c)}return t}}},tt=Z,et=(n("f530"),Object(a["a"])(tt,J,X,!1,null,"0f568b7c",null)),nt=(et.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breeding-rhombus-spinner",style:t.spinnerStyle},[t._l(t.rhombusesStyles,(function(t,e){return n("div",{key:e,staticClass:"rhombus",class:"child-"+(e+1),style:t})})),n("div",{staticClass:"rhombus big",style:t.bigRhombusStyle})],2)}),it=[],rt={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},rhombusStyle:function(){return{height:"".concat(this.size/7.5,"px"),width:"".concat(this.size/7.5,"px"),animationDuration:"".concat(this.animationDuration,"ms"),top:"".concat(this.size/2.3077,"px"),left:"".concat(this.size/2.3077,"px"),backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],e=.05*this.animationDuration,n=1;n<=this.rhombusesNum;n++)t.push(Object.assign({animationDelay:"".concat(e*(n+1),"ms")},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:"".concat(this.size/3,"px"),width:"".concat(this.size/3,"px"),animationDuration:"".concat(this.animationDuration),top:"".concat(this.size/3,"px"),left:"".concat(this.size/3,"px"),backgroundColor:this.color}}}},st=rt,ot=(n("caa2"),Object(a["a"])(st,nt,it,!1,null,"7c827517",null)),at=(ot.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swapping-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,e){return n("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})})),0)}),ct=[],ut={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],e=.5*this.animationDuration,n=1;n<=this.squaresNum;n++)t.push(Object.assign({animationDelay:"".concat(n%2===0?e:0,"ms")},this.squareStyle));return t}}},lt=ut,ht=(n("9102"),Object(a["a"])(lt,at,ct,!1,null,"b85b25de",null)),dt=(ht.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scaling-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,e){return n("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})})),0)}),ft=[],pt={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],e=1;e<=this.squaresNum;e++)t.push(Object.assign({},this.squareStyle));return t}}},mt=pt,gt=(n("e279"),Object(a["a"])(mt,dt,ft,!1,null,"43f67b6f",null)),vt=(gt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle",style:t.circleStyle}),n("div",{staticClass:"orbit",style:t.orbitStyle})])}),yt=[],bt={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},orbitStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,borderWidth:"".concat(.03*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circleStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,color:this.color,borderWidth:"".concat(.1*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}}}},wt=bt,_t=(n("9dc8"),Object(a["a"])(wt,vt,yt,!1,null,"44939cec",null)),St=(_t.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,(function(e,i){return n("div",{key:i,staticClass:"circle",style:e},[n("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[n("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])})),0)}),xt=[],Ot={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms")}},circleInnerContainerStyle:function(){return{borderWidth:"".concat(this.borderWidth,"px")}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:"".concat(this.borderWidth,"px")}},circlesStyles:function(){for(var t=[],e=.15*this.animationDuration,n=0;n<this.circlesNum;n++)t.push(Object.assign({padding:"".concat(2*this.borderWidth*n,"px"),animationDelay:"".concat(n===this.circlesNum-1?0:e,"ms")},this.circleStyle));return t}}},It=Ot,Et=(n("54f3"),Object(a["a"])(It,St,xt,!1,null,"7ca7cfc9",null)),Tt=(Et.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"self-building-square-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,e){return n("div",{key:e,staticClass:"square",class:{clear:e&&e%3===0},style:t})})),0)}),kt=[],Ct={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:"".concat(-this.initialTopPosition,"px"),height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(this.squareSize,"px"),width:"".concat(this.squareSize,"px"),top:"".concat(this.initialTopPosition,"px"),marginRight:"".concat(this.squareSize/3,"px"),marginTop:"".concat(this.squareSize/3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),background:this.color}},squaresStyles:function(){for(var t=[],e=[6,7,8,3,4,5,0,1,2],n=.05*this.animationDuration,i=0;i<this.squaresNum;i++)t.push(Object.assign({animationDelay:"".concat(n*e[i],"ms")},this.squareStyle));return t}}},At=Ct,jt=(n("8770"),Object(a["a"])(At,Tt,kt,!1,null,"2543d096",null)),Nt=(jt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spring-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spring-spinner-part top",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})]),n("div",{staticClass:"spring-spinner-part bottom",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})])])}),Dt=[],Pt={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"spring-spinner-animation-".concat(Date.now())}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},spinnerPartStyle:function(){return{height:"".concat(this.size/2,"px"),width:"".concat(this.size,"px")}},rotatorStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRightColor:this.color,borderTopColor:this.color,borderWidth:"".concat(this.size/7,"px"),animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n        0% {\n          border-width: ".concat(this.size/7,"px;\n        }\n        25% {\n          border-width: ").concat(this.size/23.33,"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size/7,"px;\n        }\n        75% {\n          border-width: ").concat(this.size/23.33,"px;\n         }\n        100% {\n         border-width: ").concat(this.size/7,"px;\n        }")}}},Lt=Pt,Rt=(n("e876"),Object(a["a"])(Lt,Nt,Dt,!1,null,"b316b56c",null)),$t=(Rt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"looping-rhombuses-spinner",style:t.spinnerStyle},t._l(t.rhombusesStyles,(function(t,e){return n("div",{staticClass:"rhombus",style:t,attrs:{ikey:e}})})),0)}),Mt=[],Ft={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(4*this.rhombusSize,"px")}},rhombusStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(this.rhombusSize,"px"),backgroundColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),left:"".concat(4*this.rhombusSize,"px")}},rhombusesStyles:function(){for(var t=[],e=-this.animationDuration/1.5,n=1;n<=this.rhombusesNum;n++){var i=Object.assign({animationDelay:"".concat(n*e,"ms")},this.rhombusStyle);t.push(i)}return t}}},Bt=Ft,Vt=(n("25f1"),Object(a["a"])(Bt,$t,Mt,!1,null,"0458ce94",null)),zt=(Vt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"half-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle-1",style:t.circle1Style}),n("div",{staticClass:"circle circle-2",style:t.circle2Style})])}),Ut=[],qt={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{borderWidth:"".concat(this.size/10,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circle1Style:function(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}},Ht=qt,Wt=(n("f084"),Object(a["a"])(Ht,zt,Ut,!1,null,"31ad46aa",null)),Kt=(Wt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner"},[n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v(" ● ")])])])}),Gt=[],Yt={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{color:this.color,fontSize:"".concat(.24*this.size,"px")}},lineStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderLeftWidth:"".concat(this.size/25,"px"),borderTopWidth:"".concat(this.size/25,"px"),borderLeftColor:this.color}}}},Qt=Yt,Jt=(n("4724"),Object(a["a"])(Qt,Kt,Gt,!1,null,"aec7c820",null));Jt.exports},"45b8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=(0,i.regex)("numeric",/^[0-9]*$/);e.default=r},"466d":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),s=n("50c4"),o=n("577e"),a=n("1d80"),c=n("dc4a"),u=n("8aa5"),l=n("14c3");i("match",(function(t,e,n){return[function(e){var n=a(this),i=void 0==e?void 0:c(e,t);return i?i.call(e,n):new RegExp(e)[t](o(n))},function(t){var i=r(this),a=o(t),c=n(e,i,a);if(c.done)return c.value;if(!i.global)return l(i,a);var h=i.unicode;i.lastIndex=0;var d,f=[],p=0;while(null!==(d=l(i,a))){var m=o(d[0]);f[p]=m,""===m&&(i.lastIndex=u(a,s(i.lastIndex),h)),p++}return 0===p?null:f}]}))},"467f":function(t,e,n){"use strict";var i=n("2d83");t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(i("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"46bc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=function(t){return(0,i.withParams)({type:"maxValue",max:t},(function(e){return!(0,i.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))};e.default=r},4724:function(t,e,n){"use strict";n("c2c2")},4804:function(t,e,n){},"480e":function(t,e,n){"use strict";n("7db0");var i=n("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},4840:function(t,e,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},"485a":function(t,e,n){var i=n("1626"),r=n("861d");t.exports=function(t,e){var n,s;if("string"===e&&i(n=t.toString)&&!r(s=n.call(t)))return s;if(i(n=t.valueOf)&&!r(s=n.call(t)))return s;if("string"!==e&&i(n=t.toString)&&!r(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var i=n("2d00"),r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"495d":function(t,e,n){},"498a":function(t,e,n){"use strict";var i=n("23e7"),r=n("58a8").trim,s=n("c8d2");i({target:"String",proto:!0,forced:s("trim")},{trim:function(){return r(this)}})},"4a7b":function(t,e,n){"use strict";var i=n("c532");t.exports=function(t,e){e=e||{};var n={};function r(t,e){return i.isPlainObject(t)&&i.isPlainObject(e)?i.merge(t,e):i.isPlainObject(e)?i.merge({},e):i.isArray(e)?e.slice():e}function s(n){return i.isUndefined(e[n])?i.isUndefined(t[n])?void 0:r(void 0,t[n]):r(t[n],e[n])}function o(t){if(!i.isUndefined(e[t]))return r(void 0,e[t])}function a(n){return i.isUndefined(e[n])?i.isUndefined(t[n])?void 0:r(void 0,t[n]):r(void 0,e[n])}function c(n){return n in e?r(t[n],e[n]):n in t?r(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return i.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,r=e(t);i.isUndefined(r)&&e!==c||(n[t]=r)})),n}},"4ad4":function(t,e,n){"use strict";var i=n("53ca"),r=(n("caad"),n("b64b"),n("b0c0"),n("16b7")),s=n("f2e7"),o=n("58df"),a=n("80d2"),c=n("d9bd"),u=Object(o["a"])(r["a"],s["a"]);e["a"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(a["t"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(a["s"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var i=this.internalActivator?this.$el:document;n="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var r=this.activatorNode[0].componentInstance;n=r&&r.$options.mixins&&r.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?r.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return Object(a["s"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4ae1":function(t,e,n){var i=n("23e7"),r=n("d066"),s=n("5087"),o=n("825a"),a=n("861d"),c=n("7c73"),u=n("0538"),l=n("d039"),h=r("Reflect","construct"),d=l((function(){function t(){}return!(h((function(){}),[],t)instanceof t)})),f=!l((function(){h((function(){}))})),p=d||f;i({target:"Reflect",stat:!0,forced:p,sham:p},{construct:function(t,e){s(t),o(e);var n=arguments.length<3?t:s(arguments[2]);if(f&&!d)return h(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(u.apply(t,i))}var r=n.prototype,l=c(a(r)?r:Object.prototype),p=Function.apply.call(t,l,e);return a(p)?p:l}})},"4af8":function(t,e,n){"use strict";n("5319f")},"4b85":function(t,e,n){},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("94ca"),o=n("7156"),a=n("9112"),c=n("9bf2").f,u=n("241c").f,l=n("44e7"),h=n("577e"),d=n("ad6d"),f=n("9f7f"),p=n("6eeb"),m=n("d039"),g=n("1a2d"),v=n("69f3").enforce,y=n("2626"),b=n("b622"),w=n("fce3"),_=n("107c"),S=b("match"),x=r.RegExp,O=x.prototype,I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,T=/a/g,k=new x(E)!==E,C=f.UNSUPPORTED_Y,A=i&&(!k||C||w||_||m((function(){return T[S]=!1,x(E)!=E||x(T)==T||"/a/i"!=x(E,"i")}))),j=function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)e=t.charAt(i),"\\"!==e?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++i);return r},N=function(t){for(var e,n=t.length,i=0,r="",s=[],o={},a=!1,c=!1,u=0,l="";i<=n;i++){if(e=t.charAt(i),"\\"===e)e+=t.charAt(++i);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:I.test(t.slice(i+1))&&(i+=2,c=!0),r+=e,u++;continue;case">"===e&&c:if(""===l||g(o,l))throw new SyntaxError("Invalid capture group name");o[l]=!0,s.push([l,u]),c=!1,l="";continue}c?l+=e:r+=e}return[r,s]};if(s("RegExp",A)){for(var D=function(t,e){var n,i,r,s,c,u,f=this instanceof D,p=l(t),m=void 0===e,g=[],y=t;if(!f&&p&&m&&t.constructor===D)return t;if((p||t instanceof D)&&(t=t.source,m&&(e="flags"in y?y.flags:d.call(y))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),y=t,w&&"dotAll"in E&&(i=!!e&&e.indexOf("s")>-1,i&&(e=e.replace(/s/g,""))),n=e,C&&"sticky"in E&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,""))),_&&(s=N(t),t=s[0],g=s[1]),c=o(x(t,e),f?this:O,D),(i||r||g.length)&&(u=v(c),i&&(u.dotAll=!0,u.raw=D(j(t),n)),r&&(u.sticky=!0),g.length&&(u.groups=g)),t!==y)try{a(c,"source",""===y?"(?:)":y)}catch(b){}return c},P=function(t){t in D||c(D,t,{configurable:!0,get:function(){return x[t]},set:function(e){x[t]=e}})},L=u(x),R=0;L.length>R;)P(L[R++]);O.constructor=D,D.prototype=O,p(r,"RegExp",D)}y("RegExp")},"4d64":function(t,e,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=i(e),u=s(c),l=r(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,s=n("1dde"),o=s("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),s=n("9bdd"),o=n("e95a"),a=n("68ee"),c=n("07fa"),u=n("8418"),l=n("9a1f"),h=n("35a1");t.exports=function(t){var e=r(t),n=a(this),d=arguments.length,f=d>1?arguments[1]:void 0,p=void 0!==f;p&&(f=i(f,d>2?arguments[2]:void 0,2));var m,g,v,y,b,w,_=h(e),S=0;if(!_||this==Array&&o(_))for(m=c(e),g=n?new this(m):Array(m);m>S;S++)w=p?f(e[S],S):e[S],u(g,S,w);else for(y=l(e,_),b=y.next,g=n?new this:[];!(v=b.call(y)).done;S++)w=p?s(y,f,[v.value,S],!0):v.value,u(g,S,w);return g.length=S,g}},"4e82":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ade3"),r=n("3206");function s(t,e,n){return Object(r["a"])(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(i["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},"4e827":function(t,e,n){"use strict";var i=n("23e7"),r=n("59ed"),s=n("7b0b"),o=n("07fa"),a=n("577e"),c=n("d039"),u=n("addb"),l=n("a640"),h=n("04d1"),d=n("d998"),f=n("2d00"),p=n("512c"),m=[],g=m.sort,v=c((function(){m.sort(void 0)})),y=c((function(){m.sort(null)})),b=l("sort"),w=!c((function(){if(f)return f<70;if(!(h&&h>3)){if(d)return!0;if(p)return p<603;var t,e,n,i,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)m.push({k:e+i,v:n})}for(m.sort((function(t,e){return e.v-t.v})),i=0;i<m.length;i++)e=m[i].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})),_=v||!y||!b||!w,S=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:a(e)>a(n)?1:-1}};i({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&r(t);var e=s(this);if(w)return void 0===t?g.call(e):g.call(e,t);var n,i,a=[],c=o(e);for(i=0;i<c;i++)i in e&&a.push(e[i]);a=u(a,S(t)),n=a.length,i=0;while(i<n)e[i]=a[i++];while(i<c)delete e[i++];return e}})},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"4f37":function(t,e,n){},"4f60":function(t,e,n){"use strict";var i=n("614a");n.d(e,"a",(function(){return i["a"]}));var r="firebase",s="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(r,s,"app-compat")},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function l(t){i.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},"4ff9":function(t,e,n){},5087:function(t,e,n){var i=n("68ee"),r=n("0d51");t.exports=function(t){if(i(t))return t;throw TypeError(r(t)+" is not a constructor")}},"50c4":function(t,e,n){var i=n("5926"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},"512c":function(t,e,n){var i=n("342f"),r=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},"51ae":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:,"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:()=>({observer:null,intersected:!1,loaded:!1}),computed:{srcImage(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load(){this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load"))},error(){this.$emit("error",this.$el)}},render(t){let e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted(){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.intersected=!0,this.observer.disconnect(),this.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el))},destroyed(){"IntersectionObserver"in window&&this.observer.disconnect()}}},5270:function(t,e,n){"use strict";var i=n("c532"),r=n("c401"),s=n("2e67"),o=n("2444"),a=n("7a77");function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=r.call(t,t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return c(t),e.data=r.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=r.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("d039"),s=n("825a"),o=n("1626"),a=n("5926"),c=n("50c4"),u=n("577e"),l=n("1d80"),h=n("8aa5"),d=n("dc4a"),f=n("0cb2"),p=n("14c3"),m=n("b622"),g=m("replace"),v=Math.max,y=Math.min,b=function(t){return void 0===t?t:String(t)},w=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),S=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var i=_?"$":"$0";return[function(t,n){var i=l(this),r=void 0==t?void 0:d(t,g);return r?r.call(t,i,n):e.call(u(i),t,n)},function(t,r){var l=s(this),d=u(t);if("string"===typeof r&&-1===r.indexOf(i)&&-1===r.indexOf("$<")){var m=n(e,l,d,r);if(m.done)return m.value}var g=o(r);g||(r=u(r));var w=l.global;if(w){var _=l.unicode;l.lastIndex=0}var S=[];while(1){var x=p(l,d);if(null===x)break;if(S.push(x),!w)break;var O=u(x[0]);""===O&&(l.lastIndex=h(d,c(l.lastIndex),_))}for(var I="",E=0,T=0;T<S.length;T++){x=S[T];for(var k=u(x[0]),C=v(y(a(x.index),d.length),0),A=[],j=1;j<x.length;j++)A.push(b(x[j]));var N=x.groups;if(g){var D=[k].concat(A,C,d);void 0!==N&&D.push(N);var P=u(r.apply(void 0,D))}else P=f(k,d,C,A,N,r);C>=E&&(I+=d.slice(E,C)+P,E=C+k.length)}return I+d.slice(E)}]}),!S||!w||_)},"5319f":function(t,e,n){},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}},"54f3":function(t,e,n){"use strict";n("ab22")},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var i=n("ade3");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"553a":function(t,e,n){"use strict";var i=n("5530"),r=(n("a9e3"),n("c7cd"),n("b5b6"),n("8dd9")),s=n("fe6c"),o=n("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var c=n("2b0e"),u=c["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),l=n("80d2");e["a"]=Object(o["a"])(r["a"],a("footer",["height","inset"]),u).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["h"])(t),left:Object(l["h"])(this.computedLeft),right:Object(l["h"])(this.computedRight),bottom:Object(l["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},5606:function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Y})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return R})),n.d(e,"_addComponent",(function(){return B})),n.d(e,"_addOrOverwriteComponent",(function(){return V})),n.d(e,"_apps",(function(){return M})),n.d(e,"_clearComponents",(function(){return H})),n.d(e,"_components",(function(){return F})),n.d(e,"_getProvider",(function(){return U})),n.d(e,"_registerComponent",(function(){return z})),n.d(e,"_removeServiceInstance",(function(){return q})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return J})),n.d(e,"getApps",(function(){return X})),n.d(e,"initializeApp",(function(){return Q})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var i=n("ffa6"),r=n("4fc1"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.4",l=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",S="@firebase/installations",x="@firebase/installations-compat",O="@firebase/messaging",I="@firebase/messaging-compat",E="@firebase/performance",T="@firebase/performance-compat",k="@firebase/remote-config",C="@firebase/remote-config-compat",A="@firebase/storage",j="@firebase/storage-compat",N="@firebase/firestore",D="@firebase/firestore-compat",P="firebase",L="9.1.3",R="[DEFAULT]",$={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[S]:"fire-iid",[x]:"fire-iid-compat",[O]:"fire-fcm",[I]:"fire-fcm-compat",[E]:"fire-perf",[T]:"fire-perf-compat",[k]:"fire-rc",[C]:"fire-rc-compat",[A]:"fire-gcs",[j]:"fire-gcs-compat",[N]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},M=new Map,F=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t,e){t.container.addOrOverwriteComponent(e)}function z(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of M.values())B(n,t);return!0}function U(t,e){return t.container.getProvider(e)}function q(t,e,n=R){U(t,e).clearInstance(n)}function H(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=L;function Q(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:R,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw K.create("bad-app-name",{appName:String(r)});const o=M.get(r);if(o){if(Object(s["h"])(t,o.options)&&Object(s["h"])(n,o.config))return o;throw K.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of F.values())a.addComponent(i);const c=new G(t,n,a);return M.set(r,c),c}function J(t=R){const e=M.get(t);if(!e)throw K.create("no-app",{appName:t});return e}function X(){return Array.from(M.values())}async function Z(t){const e=t.name;M.has(e)&&(M.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var r;let s=null!==(r=$[t])&&void 0!==r?r:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}z(new i["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw K.create("invalid-log-argument");Object(r["d"])(t,e)}function nt(t){Object(r["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){z(new i["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}it("")},5607:function(t,e,n){"use strict";n("d3b7"),n("25f0"),n("b0c0"),n("99af"),n("a9e3"),n("7435");var i=n("80d2"),r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t,e){t.style.opacity=e.toString()}function a(t){return"TouchEvent"===t.constructor.name}function c(t){return"KeyboardEvent"===t.constructor.name}var u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,r=0;if(!c(t)){var s=e.getBoundingClientRect(),o=a(t)?t.touches[t.touches.length-1]:t;i=o.clientX-s.left,r=o.clientY-s.top}var u=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,u=e.clientWidth/2,u=n.center?u:u+Math.sqrt(Math.pow(i-u,2)+Math.pow(r-u,2))/4):u=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var h="".concat((e.clientWidth-2*u)/2,"px"),d="".concat((e.clientHeight-2*u)/2,"px"),f=n.center?h:"".concat(i-u,"px"),p=n.center?d:"".concat(r-u,"px");return{radius:u,scale:l,x:f,y:p,centerX:h,centerY:d}},l={show:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=" ".concat(n.class));var a=u(t,e,n),c=a.radius,l=a.scale,h=a.x,d=a.y,f=a.centerX,p=a.centerY,m="".concat(2*c,"px");r.className="v-ripple__animation",r.style.width=m,r.style.height=m,e.appendChild(i);var g=window.getComputedStyle(e);g&&"static"===g.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,"translate(".concat(h,", ").concat(d,") scale3d(").concat(l,",").concat(l,",").concat(l,")")),o(r,0),r.dataset.activated=String(performance.now()),setTimeout((function(){r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,"translate(".concat(f,", ").concat(p,") scale3d(1,1,1)")),o(r,.25)}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var n=e[e.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),o(n,0),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}}}}};function h(t){return"undefined"===typeof t||!!t}function d(t){var e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||c(t),n._ripple.class&&(e.class=n._ripple.class),a(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=function(){l.show(t,n,e)},n._ripple.showTimer=window.setTimeout((function(){n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else l.show(t,n,e)}}function f(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){f(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var m=!1;function g(t){m||t.keyCode!==i["x"].enter&&t.keyCode!==i["x"].space||(m=!0,d(t))}function v(t){m=!1,f(t)}function y(t){!0===m&&(m=!1,f(t))}function b(t,e,n){var i=h(e.value);i||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;var r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",f,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",f),t.addEventListener("mousedown",d),t.addEventListener("mouseup",f),t.addEventListener("mouseleave",f),t.addEventListener("keydown",g),t.addEventListener("keyup",v),t.addEventListener("blur",y),t.addEventListener("dragstart",f,{passive:!0})):!i&&n&&w(t)}function w(t){t.removeEventListener("mousedown",d),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",f),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",f),t.removeEventListener("mouseup",f),t.removeEventListener("mouseleave",f),t.removeEventListener("keydown",g),t.removeEventListener("keyup",v),t.removeEventListener("dragstart",f),t.removeEventListener("blur",y)}function _(t,e,n){b(t,e,!1)}function S(t){delete t._ripple,w(t)}function x(t,e){if(e.value!==e.oldValue){var n=h(e.oldValue);b(t,e,n)}}var O={bind:_,unbind:S,update:x};e["a"]=O},5692:function(t,e,n){var i=n("c430"),r=n("c6cd");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56a4":function(t,e,n){"use strict";n("a9e3"),n("d3b7"),n("25f0");var i=n("9d26"),r=n("a9ad"),s=n("3206"),o=n("5607"),a=n("58df"),c=Object(a["a"])(r["a"],Object(s["a"])("stepper","v-stepper-step","v-stepper"));e["a"]=c.extend().extend({name:"v-stepper-step",directives:{ripple:o["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(i["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},"56ef":function(t,e,n){var i=n("d066"),r=n("241c"),s=n("7418"),o=n("825a");t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(o(t)),n=s.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var i=n("f5df");t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"587f":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("577e"),s=n("5899"),o="["+s+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=r(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e");function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i["a"].extend({mixins:e})}},5926:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?i:n)(e)}},5994:function(t,e,n){"use strict";(function(t){var e=n("614a"),i=n("1f5a"),r=n("ffa6"),s=n("1fd5"),o="@firebase/auth-compat",a="0.1.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(t=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(t=Object(s["l"])()){return/Edge\/\d+/.test(t)}function m(t=Object(s["l"])()){return f()||p(t)}function g(){try{const t=self.localStorage,e=i["r"]();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!m()||Object(s["r"])()}catch(t){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof t&&"WorkerGlobalScope"in t&&"importScripts"in t}function y(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(t=>{const e=setTimeout(()=>{t(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={LOCAL:"local",NONE:"none",SESSION:"session"},S=i["o"],x="persistence";function O(t,e){S(Object.values(_).includes(e),t,"invalid-persistence-type"),Object(s["u"])()?S(e!==_.SESSION,t,"unsupported-persistence-type"):Object(s["t"])()?S(e===_.NONE,t,"unsupported-persistence-type"):v()?S(e===_.NONE||e===_.LOCAL&&Object(s["r"])(),t,"unsupported-persistence-type"):S(e===_.NONE||g(),t,"unsupported-persistence-type")}async function I(t){await t._initializationPromise;const e=T(),n=i["u"](x,t.config.apiKey,t.name);(null===e||void 0===e?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function E(t,e){const n=T();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const r=i["u"](x,t,e),s=n.sessionStorage.getItem(r);switch(s){case _.NONE:return[i["K"]];case _.LOCAL:return[i["L"],i["z"]];case _.SESSION:return[i["z"]];default:return[]}}function T(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=i["o"];class C{constructor(){this.browserResolver=i["s"](i["y"]),this.cordovaResolver=i["s"](i["D"]),this.underlyingResolver=null,this._redirectPersistence=i["z"],this._completeRedirectFn=i["t"]}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,i)}async _openRedirect(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,i)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return k(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await w();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){return t.unwrap()}function j(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){return P(t)}function D(t,e){var n;const r=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new $(t,i["I"](t,e))}else if(r){const t=P(e),n=e;t&&(n.credential=t,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function P(t){const{_tokenResponse:e}=t instanceof s["c"]?t.customData:t;if(!e)return null;if(!(t instanceof s["c"])&&"temporaryProof"in e&&"phoneNumber"in e)return i["i"].credentialFromResult(t);const n=e.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["n"];break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return s||o||t||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:t,accessToken:s}):new i["h"](n).credential({idToken:t,accessToken:s,rawNonce:c}):null}return t instanceof s["c"]?r.credentialFromError(t):r.credentialFromResult(t)}function L(t,e){return e.catch(e=>{throw e instanceof s["c"]&&D(t,e),e}).then(t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:N(t),additionalUserInfo:i["H"](t),user:M.getOrCreate(n)}})}async function R(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>L(t,n.confirm(e))}}class ${constructor(t,e){this.resolver=e,this.auth=j(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return L(A(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this._delegate=t,this.multiFactor=i["R"](t)}static getOrCreate(t){return M.USER_MAP.has(t)||M.USER_MAP.set(t,new M(t)),M.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return L(this.auth,i["N"](this._delegate,t))}async linkWithPhoneNumber(t,e){return R(this.auth,i["O"](this._delegate,t,e))}async linkWithPopup(t){return L(this.auth,i["P"](this._delegate,t,C))}async linkWithRedirect(t){return await I(i["p"](this.auth)),i["Q"](this._delegate,t,C)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return L(this.auth,i["S"](this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return R(this.auth,i["T"](this._delegate,t,e))}reauthenticateWithPopup(t){return L(this.auth,i["U"](this._delegate,t,C))}async reauthenticateWithRedirect(t){return await I(i["p"](this.auth)),i["V"](this._delegate,t,C)}sendEmailVerification(t){return i["W"](this._delegate,t)}async unlink(t){return await i["hb"](this._delegate,t),this}updateEmail(t){return i["ib"](this._delegate,t)}updatePassword(t){return i["jb"](this._delegate,t)}updatePhoneNumber(t){return i["kb"](this._delegate,t)}updateProfile(t){return i["lb"](this._delegate,t)}verifyBeforeUpdateEmail(t,e){return i["mb"](this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}M.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=i["o"];class B{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;F(n,"invalid-api-key",{appName:t.name});let r=[i["K"]];if("undefined"!==typeof window){r=E(n,t.name);for(const t of[i["L"],i["x"],i["z"]])r.includes(t)||r.push(t)}F(n,"invalid-api-key",{appName:t.name});const s="undefined"!==typeof window?C:void 0;this._delegate=e.initialize({options:{persistence:r,popupRedirectResolver:s}}),this._delegate._updateErrorMap(i["F"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?M.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){i["C"](this._delegate,t,e)}applyActionCode(t){return i["w"](this._delegate,t)}checkActionCode(t){return i["A"](this._delegate,t)}confirmPasswordReset(t,e){return i["B"](this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return L(this._delegate,i["E"](this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return i["G"](this._delegate,t)}isSignInWithEmailLink(t){return i["M"](this._delegate,t)}async getRedirectResult(){F(y(),this._delegate,"operation-not-supported-in-this-environment");const t=await i["J"](this._delegate,C);return t?L(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){i["v"](this._delegate,t)}onAuthStateChanged(t,e,n){const{next:i,error:r,complete:s}=V(t,e,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(t,e,n){const{next:i,error:r,complete:s}=V(t,e,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(t,e){return i["Y"](this._delegate,t,e)}sendPasswordResetEmail(t,e){return i["X"](this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(O(this._delegate,t),t){case _.SESSION:e=i["z"];break;case _.LOCAL:const t=await i["s"](i["L"])._isAvailable();e=t?i["L"]:i["x"];break;case _.NONE:e=i["K"];break;default:return i["q"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return L(this._delegate,i["Z"](this._delegate))}signInWithCredential(t){return L(this._delegate,i["ab"](this._delegate,t))}signInWithCustomToken(t){return L(this._delegate,i["bb"](this._delegate,t))}signInWithEmailAndPassword(t,e){return L(this._delegate,i["cb"](this._delegate,t,e))}signInWithEmailLink(t,e){return L(this._delegate,i["db"](this._delegate,t,e))}signInWithPhoneNumber(t,e){return R(this._delegate,i["eb"](this._delegate,t,e))}async signInWithPopup(t){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,i["fb"](this._delegate,t,C))}async signInWithRedirect(t){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),await I(this._delegate),i["gb"](this._delegate,t,C)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return i["nb"](this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function V(t,e,n){let i=t;"function"!==typeof t&&({next:i,error:e,complete:n}=t);const r=i,s=t=>r(t&&M.getOrCreate(t));return{next:s,error:e,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B.Persistence=_;class z{constructor(){this.providerId="phone",this._delegate=new i["i"](A(e["a"].auth()))}static credential(t,e){return i["i"].credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=i["o"];class q{constructor(t,n,r=e["a"].app()){var s;U(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](t,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-compat";function W(t){t.INTERNAL.registerComponent(new r["a"](H,t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new B(e,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:q,TwitterAuthProvider:i["n"],Auth:B,AuthCredential:i["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(o,a)}W(e["a"])}).call(this,n("c8ba"))},"59ed":function(t,e,n){var i=n("1626"),r=n("0d51");t.exports=function(t){if(i(t))return t;throw TypeError(r(t)+" is not a function")}},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5cce":function(t,e){t.exports={version:"0.23.0"}},"5d15":function(t,e,n){},"5d23":function(t,e,n){"use strict";n.d(e,"a",(function(){return D})),n.d(e,"b",(function(){return P}));var i=n("80d2"),r=n("8860"),s=n("5530"),o=n("ade3"),a=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("db42"),n("9d26")),c=n("da13"),u=(n("498a"),n("2b0e")),l=u["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var n=e.data,i=e.children;return n.staticClass="v-list-item__icon ".concat(n.staticClass||"").trim(),t("div",n,i)}}),h=n("7e2b"),d=n("9d65"),f=n("a9ad"),p=n("f2e7"),m=n("3206"),g=n("5607"),v=n("0789"),y=n("58df"),b=Object(y["a"])(h["a"],d["a"],f["a"],Object(m["a"])("list"),p["a"]),w=b.extend().extend({name:"v-list-group",directives:{ripple:g["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(a["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(c["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(o["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(i["s"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(l,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,n=this._uid===t;n&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=n}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(v["a"],this.genItems())])}}),_=(n("899c"),n("a9e3"),n("4de4"),n("caad"),n("2532"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("a452")),S=n("7560"),x=n("d9bd"),O=Object(y["a"])(_["a"],S["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(s["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(x["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),I=(O.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),Object(y["a"])(O,f["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},O.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])(Object(s["a"])({},O.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})),E=n("1800"),T=(n("3408"),n("24b2")),k=n("a236"),C=Object(y["a"])(f["a"],T["a"],k["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(i["h"])(this.size),minWidth:Object(i["h"])(this.size),width:Object(i["h"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),A=C,j=A.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},A.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=A.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),N=Object(i["i"])("v-list-item__action-text","span"),D=Object(i["i"])("v-list-item__content","div"),P=Object(i["i"])("v-list-item__title","div"),L=Object(i["i"])("v-list-item__subtitle","div");r["a"],c["a"],E["a"]},"5d75":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,s=(0,i.regex)("email",r);e.default=s},"5db3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=function(t){return(0,i.withParams)({type:"minLength",min:t},(function(e){return!(0,i.req)(e)||(0,i.len)(e)>=t}))};e.default=r},"5e3b":function(t,e,n){},"5e77":function(t,e,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5f02":function(t,e,n){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"605d":function(t,e,n){var i=n("c6b6"),r=n("da84");t.exports="process"==i(r.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var i=n("83ab"),r=n("d039"),s=n("df75"),o=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||r((function(){if(i&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||s(l({},e)).join("")!=r}))?function(t,e){var n=c(t),r=arguments.length,l=1,h=o.f,d=a.f;while(r>l){var f,p=u(arguments[l++]),m=h?s(p).concat(h(p)):s(p),g=m.length,v=0;while(g>v)f=m[v++],i&&!d.call(p,f)||(n[f]=p[f])}return n}:l},"614a":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("1fd5"),r=n("ffa6"),s=n("5606"),o=n("4fc1");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(i["e"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["e"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function l(e){const r=e.name,a=r.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:r});return t[a]()};void 0!==e.serviceProps&&Object(i["i"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){Object(i["i"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i["g"],ErrorFactory:i["b"],deepExtend:i["i"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){Object(s["registerVersion"])(p,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(i["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"615b":function(t,e,n){},"61d2":function(t,e,n){},6235:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=(0,i.regex)("alpha",/^[a-zA-Z]*$/);e.default=r},"62ad":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),a=n("80d2"),c=["sm","md","lg","xl"],u=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(a["E"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(a["E"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(h)};function f(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var p=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,s=e.children,a=(e.parent,"");for(var c in n)a+=String(n[c]);var u=p.get(a);return u||function(){var t,e;for(e in u=[],d)d[e].forEach((function(t){var i=n[t],r=f(e,t,i);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(a,u)}(),t(n.tag,Object(o["a"])(r,{class:u}),s)}})},6417:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=function(t){return(0,i.withParams)({type:"not"},(function(e,n){return!(0,i.req)(e)||!t.call(this,e,n)}))};e.default=r},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},6547:function(t,e,n){var i=n("5926"),r=n("577e"),s=n("1d80"),o=function(t){return function(e,n){var o,a,c=r(s(e)),u=i(n),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),s=n("e2cc"),o=n("0366"),a=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),h=n("83ab"),d=n("f183").fastKey,f=n("69f3"),p=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){a(t,l,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=i&&c(i,t[u],{that:t,AS_ENTRIES:n})})),f=m(e),g=function(t,e,n){var i,r,s=f(t),o=v(t,e);return o?o.value=n:(s.last=o={index:r=d(e,!0),key:e,value:n,previous:i=s.last,next:void 0,removed:!1},s.first||(s.first=o),i&&(i.next=o),h?s.size++:t.size++,"F"!==r&&(s.index[r]=o)),t},v=function(t,e){var n,i=f(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return s(l.prototype,{clear:function(){var t=this,e=f(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,n=f(e),i=v(e,t);if(i){var r=i.next,s=i.previous;delete n.index[i.index],i.removed=!0,s&&(s.next=r),r&&(r.previous=s),n.first==i&&(n.first=r),n.last==i&&(n.last=s),h?n.size--:e.size--}return!!i},forEach:function(t){var e,n=f(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!v(this,t)}}),s(l.prototype,n?{get:function(t){var e=v(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),h&&i(l.prototype,"size",{get:function(){return f(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=m(e),s=m(i);u(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"68dd":function(t,e,n){},"68ee":function(t,e,n){var i=n("d039"),r=n("1626"),s=n("f5df"),o=n("d066"),a=n("8925"),c=[],u=o("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,d=!l.exec((function(){})),f=function(t){if(!r(t))return!1;try{return u(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!r(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(l,a(t))};t.exports=!u||i((function(){var t;return f(f.call)||!f(Object)||!f((function(){t=!0}))||t}))?p:f},"69f3":function(t,e,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("1a2d"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(t){return s(t)?r(t):i(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m),b=y.get,w=y.has,_=y.set;i=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,_.call(y,t,e),e},r=function(t){return b.call(y,t)||{}},s=function(t){return w.call(y,t)}}else{var S=d("state");f[S]=!0,i=function(t,e){if(l(t,S))throw new TypeError(p);return e.facade=t,u(t,S,e),e},r=function(t){return l(t,S)?t[S]:{}},s=function(t){return l(t,S)}}t.exports={set:i,get:r,has:s,enforce:g,getterFor:v}},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("94ca"),o=n("6eeb"),a=n("f183"),c=n("2266"),u=n("19aa"),l=n("1626"),h=n("861d"),d=n("d039"),f=n("1c7e"),p=n("d44e"),m=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),v=-1!==t.indexOf("Weak"),y=g?"set":"add",b=r[t],w=b&&b.prototype,_=b,S={},x=function(t){var e=w[t];o(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(v&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},O=s(t,!l(b)||!(v||w.forEach&&!d((function(){(new b).entries().next()}))));if(O)_=n.getConstructor(e,t,g,y),a.enable();else if(s(t,!0)){var I=new _,E=I[y](v?{}:-0,1)!=I,T=d((function(){I.has(1)})),k=f((function(t){new b(t)})),C=!v&&d((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));k||(_=e((function(e,n){u(e,_,t);var i=m(new b,e,_);return void 0!=n&&c(n,i[y],{that:i,AS_ENTRIES:g}),i})),_.prototype=w,w.constructor=_),(T||C)&&(x("delete"),x("has"),g&&x("get")),(C||E)&&x(y),v&&w.clear&&delete w.clear}return S[t]=_,i({global:!0,forced:_!=b},S),p(_,t),v||n.setStrong(_,t,g),_}},"6ece":function(t,e,n){},"6eeb":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),t!==i?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},"6f53":function(t,e,n){var i=n("83ab"),r=n("df75"),s=n("fc6a"),o=n("d1e7").f,a=function(t){return function(e){var n,a=s(e),c=r(a),u=c.length,l=0,h=[];while(u>l)n=c[l++],i&&!o.call(a,n)||h.push(t?[n,a[n]]:a[n]);return h}};t.exports={entries:a(!0),values:a(!1)}},7037:function(t,e,n){function i(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=i=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),i(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},7156:function(t,e,n){var i=n("1626"),r=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7435:function(t,e,n){},"746f":function(t,e,n){var i=n("428f"),r=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:s.f(t)})}},7496:function(t,e,n){"use strict";var i=n("5530"),r=(n("df86"),n("7560")),s=n("58df");e["a"]=Object(s["a"])(r["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n("5530"),r=n("2b0e"),s=r["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(t){var e=Object(i["a"])(Object(i["a"])({},t.props),t.injections),n=s.options.computed.isDark.call(e);return s.options.computed.themeClasses.call({isDark:n})}e["a"]=s},"75eb":function(t,e,n){"use strict";var i=n("ade3"),r=n("53ca"),s=(n("159b"),n("9d65")),o=n("80d2"),a=n("58df"),c=n("d9bd");function u(t){var e=Object(r["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(a["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(o["p"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},"772d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("78ef"),r=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,i.regex)("url",r);e.default=s},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var i=n("cc12"),r=i("span").classList,s=r&&r.constructor&&r.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"78ef":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return i.default}}),e.regex=e.ref=e.len=e.req=void 0;var i=r(n("8750"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var o=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===s(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=o;var a=function(t){return Array.isArray(t)?t.length:"object"===s(t)?Object.keys(t).length:String(t).length};e.len=a;var c=function(t,e,n){return"function"===typeof t?t.call(e,n):n[t]};e.ref=c;var u=function(t,e){return(0,i.default)({type:t},(function(t){return!o(t)||e.test(t)}))};e.regex=u},"7a77":function(t,e,n){"use strict";function i(t){this.message=t}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,t.exports=i},"7aac":function(t,e,n){"use strict";var i=n("c532");t.exports=i.isStandardBrowserEnv()?function(){return{write:function(t,e,n,r,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(t,e,n){var i=n("1d80");t.exports=function(t){return Object(i(t))}},"7bc6":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));n("5530"),n("3835"),n("ac1f"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("b0c0"),n("5319"),n("498a"),n("d3b7"),n("25f0"),n("38cf"),n("99af"),n("fb6a"),n("2ca0"),n("07ac");var i=n("d9bd");n("80d2"),n("8da5");function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){var e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null==t?t:t.constructor.name," instead"));var n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((function(t){return t+t})).join("")),6!==n.length&&Object(i["c"])("'".concat(t,"' is not a valid rgb color")),e=parseInt(n,16)}return e<0?(Object(i["c"])("Colors cannot be negative: '".concat(t,"'")),e=0):(e>16777215||isNaN(e))&&(Object(i["c"])("'".concat(t,"' is not a valid rgb color")),e=16777215),e}function o(t){var e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},"7c73":function(t,e,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&i?y(i):b():y(i);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=r(t),n=new g,g[f]=null,n[m]=t):n=w(),void 0===e?n:s(n,e)}},"7d8f":function(t,e,n){"use strict";n.d(e,"b",(function(){return T})),n.d(e,"a",(function(){return k}));var i={};n.r(i),n.d(i,"linear",(function(){return l})),n.d(i,"easeInQuad",(function(){return h})),n.d(i,"easeOutQuad",(function(){return d})),n.d(i,"easeInOutQuad",(function(){return f})),n.d(i,"easeInCubic",(function(){return p})),n.d(i,"easeOutCubic",(function(){return m})),n.d(i,"easeInOutCubic",(function(){return g})),n.d(i,"easeInQuart",(function(){return v})),n.d(i,"easeOutQuart",(function(){return y})),n.d(i,"easeInOutQuart",(function(){return b})),n.d(i,"easeInQuint",(function(){return w})),n.d(i,"easeOutQuint",(function(){return _})),n.d(i,"easeInOutQuint",(function(){return S}));var r=n("d4ec"),s=n("99de"),o=n("262e"),a=n("2caf"),c=n("5530"),u=(n("d3b7"),n("fff9")),l=function(t){return t},h=function(t){return Math.pow(t,2)},d=function(t){return t*(2-t)},f=function(t){return t<.5?2*Math.pow(t,2):(4-2*t)*t-1},p=function(t){return Math.pow(t,3)},m=function(t){return Math.pow(--t,3)+1},g=function(t){return t<.5?4*Math.pow(t,3):(t-1)*(2*t-2)*(2*t-2)+1},v=function(t){return Math.pow(t,4)},y=function(t){return 1-Math.pow(--t,4)},b=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},w=function(t){return Math.pow(t,5)},_=function(t){return 1+Math.pow(--t,5)},S=function(t){return t<.5?16*Math.pow(t,5):1+16*Math.pow(--t,5)};n("b0c0");function x(t){if("number"===typeof t)return t;var e=E(t);if(!e)throw"string"===typeof t?new Error('Target element "'.concat(t,'" not found.')):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(I(t)," instead."));var n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function O(t){var e=E(t);if(e)return e;throw"string"===typeof t?new Error('Container element "'.concat(t,'" not found.')):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(I(t)," instead."))}function I(t){return null==t?t:t.constructor.name}function E(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c["a"])({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},e),r=O(n.container);if(n.appOffset&&T.framework.application){var s=r.classList.contains("v-navigation-drawer"),o=r.classList.contains("v-navigation-drawer--clipped"),a=T.framework.application,u=a.bar,l=a.top;n.offset+=u,s&&!o||(n.offset+=l)}var h,d=performance.now();h="number"===typeof t?x(t)-n.offset:x(t)-x(r)-n.offset;var f=r.scrollTop;if(h===f)return Promise.resolve(h);var p="function"===typeof n.easing?n.easing:i[n.easing];if(!p)throw new TypeError('Easing function "'.concat(n.easing,'" not found.'));return new Promise((function(t){return requestAnimationFrame((function e(i){var s=i-d,o=Math.abs(n.duration?Math.min(s/n.duration,1):1);r.scrollTop=Math.floor(f+(h-f)*p(o));var a=r===document.body?document.documentElement.clientHeight:r.clientHeight,c=a+r.scrollTop>=r.scrollHeight;if(1===o||h>r.scrollTop&&c)return t(h);requestAnimationFrame(e)}))}))}T.framework={},T.init=function(){};var k=function(t){Object(o["a"])(n,t);var e=Object(a["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.call(this),Object(s["a"])(t,T)}return n}(u["a"]);k.property="goTo"},"7db0":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(t,e,n){"use strict";var i=n("23e7"),r=n("c430"),s=n("5e77"),o=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),m=n("ae93"),g=s.PROPER,v=s.CONFIGURABLE,y=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=f("iterator"),_="keys",S="values",x="entries",O=function(){return this};t.exports=function(t,e,n,s,f,m,I){a(n,e,s);var E,T,k,C=function(t){if(t===f&&P)return P;if(!b&&t in N)return N[t];switch(t){case _:return function(){return new n(this,t)};case S:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",j=!1,N=t.prototype,D=N[w]||N["@@iterator"]||f&&N[f],P=!b&&D||C(f),L="Array"==e&&N.entries||D;if(L&&(E=c(L.call(new t)),E!==Object.prototype&&E.next&&(r||c(E)===y||(u?u(E,y):o(E[w])||d(E,w,O)),l(E,A,!0,!0),r&&(p[A]=O))),g&&f==S&&D&&D.name!==S&&(!r&&v?h(N,"name",S):(j=!0,P=function(){return D.call(this)})),f)if(T={values:C(S),keys:m?P:C(_),entries:C(x)},I)for(k in T)(b||j||!(k in N))&&d(N,k,T[k]);else i({target:e,proto:!0,forced:b||j},T);return r&&!I||N[w]===P||d(N,w,P,{name:f}),p[e]=P,T}},"7e26":function(t,e,n){"use strict";n("587f")},"7e2b":function(t,e,n){"use strict";var i=n("2b0e");function r(t){return function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(var r in e)this.$set(this.$data[t],r,e[r])}}e["a"]=i["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},"7e85":function(t,e,n){"use strict";var i=n("5530"),r=(n("0481"),n("a9e3"),n("b0c0"),n("4de4"),n("8836"),n("10d2")),s=n("3206"),o=n("a452"),a=n("58df"),c=n("d9bd"),u=Object(a["a"])(r["a"],Object(s["b"])("stepper"),o["a"]);e["a"]=u.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(i["a"])({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},r["a"].options.computed.classes.call(this))},styles:function(){return Object(i["a"])({},r["a"].options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(c["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},"7f9a":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},"80d2":function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"o",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"p",(function(){return f})),n.d(e,"r",(function(){return p})),n.d(e,"u",(function(){return m})),n.d(e,"l",(function(){return v})),n.d(e,"n",(function(){return y})),n.d(e,"h",(function(){return b})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return S})),n.d(e,"B",(function(){return x})),n.d(e,"y",(function(){return O})),n.d(e,"c",(function(){return E})),n.d(e,"E",(function(){return T})),n.d(e,"v",(function(){return k})),n.d(e,"F",(function(){return C})),n.d(e,"D",(function(){return A})),n.d(e,"k",(function(){return j})),n.d(e,"C",(function(){return N})),n.d(e,"t",(function(){return D})),n.d(e,"q",(function(){return P})),n.d(e,"s",(function(){return L})),n.d(e,"f",(function(){return R})),n.d(e,"A",(function(){return $})),n.d(e,"e",(function(){return M})),n.d(e,"d",(function(){return F})),n.d(e,"z",(function(){return B})),n.d(e,"m",(function(){return V})),n.d(e,"g",(function(){return z}));var i=n("3835"),r=n("53ca"),s=(n("5530"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("b64b"),n("1276"),n("a630"),n("3ca3"),n("a9e3"),n("dca8"),n("2ca0"),n("fb6a"),n("4e827"),n("d81d"),n("d3b7"),n("25f0"),n("4de4"),n("b0c0"),n("38cf"),n("b680"),n("cb29"),n("2b0e"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return s["a"].extend({name:n||t.replace(/__/g,"-"),functional:!0,render:function(n,i){var r=i.data,s=i.children;return r.staticClass="".concat(t," ").concat(r.staticClass||"").trim(),n(e,r,s)}})}function a(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=function r(s){n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}var c=!1;try{if("undefined"!==typeof window){var u=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("testListener",u,u),window.removeEventListener("testListener",u,u)}}catch(U){console.warn(U)}function l(t,e,n,i){t.addEventListener(e,n,!!c&&i)}function h(t,e,n){var i=e.length-1;if(i<0)return void 0===t?n:t;for(var r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function d(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;var n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((function(n){return d(t[n],e[n])}))}function f(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),h(t,e.split("."),n)):n}function p(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return f(t,e,n);if(Array.isArray(e))return h(t,e,n);if("function"!==typeof e)return n;var i=e(t,n);return"undefined"===typeof i?n:i}function m(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;var e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||m(t.parentNode)}var g={"&":"&amp;","<":"&lt;",">":"&gt;"};function v(t){return t.replace(/[&<>]/g,(function(t){return g[t]||t}))}function y(t,e){for(var n={},i=0;i<e.length;i++){var r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==t||""===t?void 0:isNaN(+t)?String(t):"".concat(Number(t)).concat(e)}function w(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function _(t){return null!==t&&"object"===Object(r["a"])(t)}var S=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function x(t,e){var n=t.$vuetify.icons.component;if(e.startsWith("$")){var i="$vuetify.icons.values.".concat(e.split("$").pop().split(".").pop()),r=f(t,i,e);if("string"!==typeof r)return r;e=r}return null==n?e:{component:n,props:{icon:e}}}function O(t){return Object.keys(t)}var I=/-(\w)/g,E=function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))};function T(t){return t.charAt(0).toUpperCase()+t.slice(1)}function k(t,e,n){for(var i,r=e[0],s=[],o=0;o<t.length;o++){var a=t[o],c=f(a,r,null);i!==c&&(i=c,s.push({name:null!=c?c:"",items:[]})),s[s.length-1].items.push(a)}return s}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function A(t,e,n,r,s){if(null===e||!e.length)return t;var o=new Intl.Collator(r,{sensitivity:"accent",usage:"sort"});return t.sort((function(t,r){for(var a=0;a<e.length;a++){var c=e[a],u=f(t,c),l=f(r,c);if(n[a]){var h=[l,u];u=h[0],l=h[1]}if(s&&s[c]){var d=s[c](u,l);if(!d)continue;return d}if(null!==u||null!==l){if(u instanceof Date&&l instanceof Date)return u.getTime()-l.getTime();var p=[u,l].map((function(t){return(t||"").toString().toLocaleLowerCase()})),m=Object(i["a"])(p,2);if(u=m[0],l=m[1],u!==l)return isNaN(u)||isNaN(l)?o.compare(u,l):Number(u)-Number(l)}}return 0}))}function j(t,e,n){return null!=t&&null!=e&&"boolean"!==typeof t&&-1!==t.toString().toLocaleLowerCase().indexOf(e.toLocaleLowerCase())}function N(t,e){return e?(e=e.toString().toLowerCase(),""===e.trim()?t:t.filter((function(t){return Object.keys(t).some((function(n){return j(f(t,n),e,t)}))}))):t}function D(t,e,n){return t.$slots[e]&&t.$scopedSlots[e]&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots[e]?"normal":t.$scopedSlots[e]?"scoped":void 0}function P(t,e){return Object.keys(e).filter((function(e){return e.startsWith(t)})).reduce((function(n,i){return n[i.replace(t,"")]=e[i],n}),{})}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.$scopedSlots[e]?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots[e]||n&&!i?void 0:t.$slots[e]}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(e,Math.min(n,t))}function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=0;while(i<t.length)n.push(t.substr(i,e)),i+=e;return n}function F(t){return t?Object.keys(t).reduce((function(e,n){return e[E(n)]=t[n],e}),{}):{}}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e){var i=t[n],r=e[n];_(i)&&_(r)?t[n]=B(i,r):t[n]=r}return t}function V(t,e){return Array(t).fill(e)}function z(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},8154:function(t,e,n){},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),r=n("23cb"),s=n("07fa");t.exports=function(t){var e=i(this),n=s(e),o=arguments.length,a=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:r(c,n);while(u>a)e[a++]=t;return e}},"825a":function(t,e,n){var i=n("861d");t.exports=function(t){if(i(t))return t;throw TypeError(String(t)+" is not an object")}},8336:function(t,e,n){"use strict";var i=n("53ca"),r=n("3835"),s=n("5530"),o=(n("c7cd"),n("a9e3"),n("caad"),n("86cc"),n("10d2")),a=(n("99af"),n("8d4f"),n("90a2")),c=n("a9ad"),u=n("80d2"),l=c["a"].extend({name:"v-progress-circular",directives:{intersect:a["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(u["h"])(this.calculatedSize),width:Object(u["h"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=l,d=n("4e82"),f=n("f2e7"),p=n("c995"),m=n("fe6c"),g=n("1c87"),v=n("af2b"),y=n("58df"),b=n("d9bd"),w=Object(y["a"])(o["a"],g["a"],m["a"],v["a"],Object(d["a"])("btnToggle"),Object(f["b"])("inputValue"));e["a"]=w.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},g["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return p["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var n=Object(r["a"])(e,2),i=n[0],s=n[1];t.$attrs.hasOwnProperty(i)&&Object(b["a"])(i,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],n=this.generateRouteLink(),r=n.tag,s=n.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===r&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(Object(i["a"])(this.value))?this.value:JSON.stringify(this.value),t(r,this.disabled?s:o(this.color,s),e)}})},"83ab":function(t,e,n){var i=n("d039");t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(t,e,n){"use strict";var i=n("d925"),r=n("e683");t.exports=function(t,e){return t&&!i(e)?r(t,e):e}},8418:function(t,e,n){"use strict";var i=n("a04b"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,s(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),s=n("1d80"),o=n("129f"),a=n("577e"),c=n("dc4a"),u=n("14c3");i("search",(function(t,e,n){return[function(e){var n=s(this),i=void 0==e?void 0:c(e,t);return i?i.call(e,n):new RegExp(e)[t](a(n))},function(t){var i=r(this),s=a(t),c=n(e,i,s);if(c.done)return c.value;var l=i.lastIndex;o(l,0)||(i.lastIndex=0);var h=u(i,s);return o(i.lastIndex,l)||(i.lastIndex=l),null===h?-1:h.index}]}))},"848b":function(t,e,n){"use strict";var i=n("5cce").version,r={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){r[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var s={};function o(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var i=Object.keys(t),r=i.length;while(r-- >0){var s=i[r],o=e[s];if(o){var a=t[s],c=void 0===a||o(a,s,t);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}r.transitional=function(t,e,n){function r(t,e){return"[Axios v"+i+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,i,o){if(!1===t)throw new Error(r(i," has been removed"+(e?" in "+e:"")));return e&&!s[i]&&(s[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}},t.exports={assertOptions:o,validators:r}},"857a":function(t,e,n){var i=n("1d80"),r=n("577e"),s=/"/g;t.exports=function(t,e,n,o){var a=r(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+r(o).replace(s,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"861d":function(t,e,n){var i=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:i(t)}},8654:function(t,e,n){"use strict";var i=n("15fd"),r=n("2909"),s=n("5530"),o=(n("a9e3"),n("0481"),n("d3b7"),n("25f0"),n("caad"),n("2b19"),n("4ff9"),n("c37a")),a=(n("99af"),n("e9b1"),n("7560")),c=n("58df"),u=Object(c["a"])(a["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var n=e.props,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?"".concat(r," / ").concat(i):String(n.value),c=i&&r>i;return t("div",{staticClass:"v-counter",class:Object(s["a"])({"error--text":c},Object(a["b"])(e))},o)}}),l=u,h=n("ba87"),d=n("90a2"),f=n("d9bd"),p=n("2b0e");function m(t){return p["a"].extend({name:"intersectable",mounted:function(){d["a"].inserted(this.$el,{name:"intersect",value:this.onObserve})},destroyed:function(){d["a"].unbind(this.$el)},methods:{onObserve:function(e,n,i){if(i)for(var r=0,s=t.onVisible.length;r<s;r++){var o=this[t.onVisible[r]];"function"!==typeof o?Object(f["c"])(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}var g=n("297c"),v=n("38cb"),y=n("dc22"),b=n("5607"),w=n("dd89"),_=n("80d2"),S=["title"],x=Object(c["a"])(o["a"],m({onVisible:["onResize","tryAutofocus"]}),g["a"]),O=["color","file","time","date","datetime-local","week","month"];e["a"]=x.extend().extend({name:"v-text-field",directives:{resize:y["a"],ripple:b["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=v["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(r["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return o["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||O.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(f["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(f["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(f["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=o["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,n;if(!this.hasCounter)return null;var i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:r}))?t:this.$createElement(l,{props:r})},genControl:function(){return o["a"].options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(h["a"],t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(_["h"])(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,n=(e.title,Object(i["a"])(e,S));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(s["a"])(Object(s["a"])({},n),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=o["a"].options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=Object(w["a"])(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===_["x"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),o["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),o["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var t=Object(w["a"])(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},"86cc":function(t,e,n){},8750:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?n("cb69").withParams:n("0234").withParams,r=i;e.default=r},8770:function(t,e,n){"use strict";n("9589")},8836:function(t,e,n){},8860:function(t,e,n){"use strict";var i=n("b85c"),r=n("5530"),s=(n("0481"),n("c740"),n("a434"),n("3ad0"),n("8dd9"));e["a"]=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,n=Object(i["a"])(this.groups);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.toggle(t)}}catch(s){n.e(s)}finally{n.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(r["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},8925:function(t,e,n){var i=n("1626"),r=n("c6cd"),s=Function.toString;i(r.inspectSource)||(r.inspectSource=function(t){return s.call(t)}),t.exports=r.inspectSource},"899c":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"8adc":function(t,e,n){},"8b37":function(t,e,n){},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()},fff9:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("d4ec"),r=n("bee2"),s=function(){function t(){Object(i["a"])(this,t),this.framework={}}return Object(r["a"])(t,[{key:"init",value:function(t,e){}}]),t}()}}]);
//# sourceMappingURL=chunk-vendors.7b7f924c.js.map