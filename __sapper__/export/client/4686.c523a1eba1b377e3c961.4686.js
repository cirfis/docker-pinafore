(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[4686],{4686:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>k});var i=s(4178),n=s(8490);function r(){(0,n.M)((()=>{this.set({shown:!0})}))}function o(t){var e;if((0,i.S1)(this,t),this._state=(0,i.f0)({shown:!1},t.data),this._intro=!0,document.getElementById("svelte-2xxbmp-style")||((e=(0,i.az)("style")).id="svelte-2xxbmp-style",e.textContent=".list-item.svelte-2xxbmp{opacity:0;pointer-events:none;transition:opacity 0.2s linear;contain:content}.list-item.shown.svelte-2xxbmp{opacity:1;pointer-events:auto}",(0,i.R3)(document.head,e)),this._fragment=function(t,e){var s,n,r,o=e.component;function a(e){var s={virtualProps:e.props,virtualIndex:e.index,virtualLength:e.length,virtualKey:e.key};return{root:t.root,store:t.store,data:s}}if(o)var h=new o(a(e));return{c(){s=(0,i.az)("div"),h&&h._fragment.c(),this.h()},l(t){s=(0,i.d$)(t,"DIV",{class:!0,id:!0},!1);var e=(0,i.pI)(s);h&&h._fragment.l(e),e.forEach(i.r2),this.h()},h(){s.className=n="list-item "+(e.shown&&"shown")+" svelte-2xxbmp",s.id=r=`list-item-${e.key}`},m(t,e){(0,i.$T)(t,s,e),h&&h._mount(s,null)},p(t,e){var i={};t.props&&(i.virtualProps=e.props),t.index&&(i.virtualIndex=e.index),t.length&&(i.virtualLength=e.length),t.key&&(i.virtualKey=e.key),o!==(o=e.component)?(h&&h.destroy(),o?((h=new o(a(e)))._fragment.c(),h._mount(s,null)):h=null):o&&h._set(i),t.shown&&n!==(n="list-item "+(e.shown&&"shown")+" svelte-2xxbmp")&&(s.className=n),t.key&&r!==(r=`list-item-${e.key}`)&&(s.id=r)},d(t){t&&(0,i.r2)(s),h&&h.destroy()}}}(this,this._state),this.root._oncreate.push((()=>{r.call(this),this.fire("update",{changed:(0,i.lZ)({},this._state),current:this._state})})),t.target){var s=(0,i.pI)(t.target);t.hydrate?this._fragment.l(s):this._fragment.c(),s.forEach(i.r2),this._mount(t.target,t.anchor),(0,i.yl)(this)}}(0,i.f0)(o.prototype,i.uS);const a=o;var h=s(7569);async function l(){const{makeProps:t,key:e}=this.get();if(t){const s=await t(e);(0,h.B)("ListLazyItem set props"),this.set({props:s}),this.fire("initialized"),(0,h.s)("ListLazyItem set props")}}function c(t,e){var s={component:e.component,props:e.props,key:e.key,index:e.index,length:e.length},i=new a({root:t.root,store:t.store,data:s});return i.on("initialized",(function(e){t.fire("initialized",e)})),{c(){i._fragment.c()},l(t){i._fragment.l(t)},m(t,e){i._mount(t,e)},p(t,e){var s={};t.component&&(s.component=e.component),t.props&&(s.props=e.props),t.key&&(s.key=e.key),t.index&&(s.index=e.index),t.length&&(s.length=e.length),i._set(s)},d(t){i.destroy(t)}}}function m(t){var e,s,n,r;if((0,i.S1)(this,t),this._state=(0,i.f0)({props:void 0},t.data),this._intro=!0,this._fragment=(e=this,s=this._state,r=s.props&&c(e,s),{c(){r&&r.c(),n=(0,i.Yr)()},l(t){r&&r.l(t),n=(0,i.Yr)()},m(t,e){r&&r.m(t,e),(0,i.$T)(t,n,e)},p(t,s){s.props?r?r.p(t,s):((r=c(e,s)).c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&(0,i.r2)(n)}}),this.root._oncreate.push((()=>{l.call(this),this.fire("update",{changed:(0,i.lZ)({},this._state),current:this._state})})),t.target){var o=(0,i.pI)(t.target);t.hydrate?this._fragment.l(o):this._fragment.c(),o.forEach(i.r2),this._mount(t.target,t.anchor),(0,i.yl)(this)}}(0,i.f0)(m.prototype,i.uS);const p=m;var u=s(8450),d=s(7400);class f extends u.b{constructor(t){super(t,d.d)}}const g=new f;g.computeForRealm("intersectionStates",{}),window.__listStore=g;var _=s(1638);var y={observe:s(1372).N7,itemInitialized(){let{initializedCount:t,length:e}=this.get();t++,this.set({initializedCount:t}),t===e&&this.initialize()},initialize(){const{scrollToItem:t}=this.get();if(t){const e=document.getElementById(`list-item-${t}`);requestAnimationFrame((()=>{(0,h.B)("scrollToElement");const t=document.getElementById("main-nav").getBoundingClientRect().height;e.scrollIntoView(!0),(0,_.JX)().scrollTop-=t,(0,h.s)("scrollToElement"),this.fire("initialized")}))}else this.fire("initialized")}};function v(){const{realm:t}=this.get();this.store.setCurrentRealm(t)}function b(){this.store.setCurrentRealm(null)}function x(t,e,s){const i=Object.create(t);return i.item=e[s],i.i=s,i}function I(t,e,s){var n,r={component:s.component,index:s.i,length:s.length,makeProps:s.makeProps,key:s.item},o=new p({root:t.root,store:t.store,data:r});return o.on("initialized",(function(e){t.itemInitialized()})),{key:e,first:null,c(){n=(0,i.Yr)(),o._fragment.c(),this.h()},l(t){n=(0,i.Yr)(),o._fragment.l(t),this.h()},h(){this.first=n},m(t,e){(0,i.$T)(t,n,e),o._mount(t,e)},p(t,e){var s={};t.component&&(s.component=e.component),t.safeItems&&(s.index=e.i),t.length&&(s.length=e.length),t.makeProps&&(s.makeProps=e.makeProps),t.safeItems&&(s.key=e.item),o._set(s)},d(t){t&&(0,i.r2)(n),o.destroy(t)}}}function z(t){var e;if((0,i.S1)(this,t),this.store=g,this._state=(0,i.f0)({initializedCount:0},t.data),this._recompute({items:1,safeItems:1},this._state),this._intro=!0,this._handlers.destroy=[b],document.getElementById("svelte-1w5b73z-style")||((e=(0,i.az)("style")).id="svelte-1w5b73z-style",e.textContent=".the-list.svelte-1w5b73z{position:relative}",(0,i.R3)(document.head,e)),this._fragment=function(t,e){var s,n=[],r=(0,i.L7)(),o=e.safeItems;const a=t=>t.item;for(var h=0;h<o.length;h+=1){let s=x(e,o,h),i=a(s);n[h]=r[i]=I(t,i,s)}function l(e){t.fire("initialized",e)}return{c(){for(s=(0,i.az)("div"),h=0;h<n.length;h+=1)n[h].c();this.h()},l(t){s=(0,i.d$)(t,"DIV",{class:!0},!1);var e=(0,i.pI)(s);for(h=0;h<n.length;h+=1)n[h].l(e);e.forEach(i.r2),this.h()},h(){(0,i.NH)(s,"initialized",l),s.className="the-list svelte-1w5b73z"},m(t,e){for((0,i.$T)(t,s,e),h=0;h<n.length;h+=1)n[h].m(s,null)},p(e,o){const h=o.safeItems;n=(0,i.$q)(n,t,e,a,1,o,h,r,s,i.pp,I,"m",null,x)},d(t){for(t&&(0,i.r2)(s),h=0;h<n.length;h+=1)n[h].d();(0,i.ys)(s,"initialized",l)}}}(this,this._state),this.root._oncreate.push((()=>{v.call(this),this.fire("update",{changed:(0,i.lZ)({},this._state),current:this._state})})),t.target){var s=(0,i.pI)(t.target);t.hydrate?this._fragment.l(s):this._fragment.c(),s.forEach(i.r2),this._mount(t.target,t.anchor),(0,i.yl)(this)}}(0,i.f0)(z.prototype,i.uS),(0,i.f0)(z.prototype,y),z.prototype._recompute=function(t,e){t.items&&this._differs(e.safeItems,e.safeItems=function({items:t}){return t||[]}(e))&&(t.safeItems=!0),t.safeItems&&this._differs(e.length,e.length=function({safeItems:t}){return t.length}(e))&&(t.length=!0)};const k=z},8450:(t,e,s)=>{"use strict";s.d(e,{b:()=>a});var i=s(9684),n=s(4986),r=s(7569),o=s(3236);class a extends i.y{constructor(t,e){super(t),this.set({realms:new n.c({maxSize:e})}),this._batches={}}setCurrentRealm(t){this.set({currentRealm:t})}setForRealm(t){const{currentRealm:e,realms:s}=this.get();s.set(e,Object.assign(s.get(e)||{},t)),this.set({realms:s})}computeForRealm(t,e){this.compute(t,["realms","currentRealm"],((s,i)=>{const n=s.get(i);return n&&n[t]||e}))}batchUpdateForRealm(t,e,s){const{currentRealm:i}=this.get();let n=this._batches[i];n||(n=this._batches[i]={});let a=n[t];a||(a=n[t]={}),a[e]=s,(0,o.b)((()=>{const e=this._batches[i]&&this._batches[i][t];if(!e)return;const s=Object.keys(e);if(!s.length)return;(0,r.B)("batchUpdate");const n=this.get()[t];for(const t of s)n[t]=e[t];delete this._batches[i][t];const{realms:o}=this.get();o.set(i,Object.assign(o.get(i)||{},{[t]:n})),this.set({realms:o}),(0,r.s)("batchUpdate")}))}}}}]);
//# sourceMappingURL=4686.c523a1eba1b377e3c961.4686.js.map