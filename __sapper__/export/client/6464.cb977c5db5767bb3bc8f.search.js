(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[6464],{8848:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var s=r(624),a=r(9122);const n=function(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return(0,a.Z)(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),(0,s.Z)(t,e,{leading:n,maxWait:e,trailing:o})}},4207:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var s=r(4178);function a(t){var e,r,a,n;if((0,s.S1)(this,t),this._state=(0,s.f0)({},t.data),this._intro=!0,this._slotted=t.slots||{},document.getElementById("svelte-15k921n-style")||((e=(0,s.az)("style")).id="svelte-15k921n-style",e.textContent=".free-text{margin:20px}.free-text p{margin:30px 0}.free-text{overflow-y:auto}@media(max-width: 240px){.free-text{margin:10px}.free-text p{margin:15px 0}}",(0,s.R3)(document.head,e)),this._fragment=(r=this,this._state,n=r._slotted.default,{c(){a=(0,s.az)("div"),this.h()},l(t){a=(0,s.d$)(t,"DIV",{class:!0},!1),(0,s.pI)(a).forEach(s.r2),this.h()},h(){a.className="free-text"},m(t,e){(0,s.$T)(t,a,e),n&&(0,s.R3)(a,n)},p:s.ZT,d(t){t&&(0,s.r2)(a),n&&(0,s.R_)(a,n)}}),t.target){var o=(0,s.pI)(t.target);t.hydrate?this._fragment.l(o):this._fragment.c(),o.forEach(s.r2),this._mount(t.target,t.anchor)}}(0,s.f0)(a.prototype,s.uS);const n=a},3512:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var s=r(4178),a=r(372);function n(){setTimeout((()=>{this.set({shown:!0})}),700)}function o(t){var e,r,o,i,h,c;if((0,s.S1)(this,t),this._state=(0,s.f0)({shown:!1},t.data),this._intro=!0,document.getElementById("svelte-10e8c6q-style")||((e=(0,s.az)("style")).id="svelte-10e8c6q-style",e.textContent=".loading-page.svelte-10e8c6q{position:absolute;top:0;left:0;right:0;height:150px;display:flex;align-items:center;justify-content:center;z-index:50;transition:opacity 0.25s linear}",(0,s.R3)(document.head,e)),this._fragment=(r=this,o=this._state,c=new a.Z({root:r.root,store:r.store}),{c(){i=(0,s.az)("div"),c._fragment.c(),this.h()},l(t){i=(0,s.d$)(t,"DIV",{class:!0},!1);var e=(0,s.pI)(i);c._fragment.l(e),e.forEach(s.r2),this.h()},h(){i.className=h="loading-page "+(o.shown?"":"hidden")+" svelte-10e8c6q"},m(t,e){(0,s.$T)(t,i,e),c._mount(i,null)},p(t,e){t.shown&&h!==(h="loading-page "+(e.shown?"":"hidden")+" svelte-10e8c6q")&&(i.className=h)},d(t){t&&(0,s.r2)(i),c.destroy()}}),this.root._oncreate.push((()=>{n.call(this),this.fire("update",{changed:(0,s.lZ)({},this._state),current:this._state})})),t.target){var l=(0,s.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(o.prototype,s.uS);const i=o},2334:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var s=r(4178),a=r(6994),n=r(6957);function o(t){var e,r,o,i,h,c;if((0,s.S1)(this,t),this._state=(0,s.f0)({},t.data),this._intro=!0,this._fragment=(e=this,r=this._state,o={index:r.index,length:r.length,timelineType:"search",timelineValue:"search",status:r.status},i=new n.Z({root:e.root,store:e.store,data:o}),h={href:"/statuses/"+r.status.id},c=new a.Z({root:e.root,store:e.store,slots:{default:(0,s.xJ)()},data:h}),{c(){i._fragment.c(),c._fragment.c()},l(t){i._fragment.l(t),c._fragment.l(t)},m(t,e){i._mount(c._slotted.default,null),c._mount(t,e)},p(t,e){var r={};t.index&&(r.index=e.index),t.length&&(r.length=e.length),t.status&&(r.status=e.status),i._set(r);var s={};t.status&&(s.href="/statuses/"+e.status.id),c._set(s)},d(t){i.destroy(),c.destroy(t)}}),t.target){var l=(0,s.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(o.prototype,s.uS);const i=o},862:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>A});var s=r(4178),a=r(2905),n=r(1382),o=r(4207),i=r(2936),h=r(8836),c=r(3512),l=r(6494),u=r(6172),d=r(7265);var f=r(986),g=r(6994);function m(t){var e,r,a,n,o,i;if((0,s.S1)(this,t),this._state=(0,s.f0)({},t.data),this._intro=!0,this._fragment=(e=this,r=this._state,n="#"+r.hashtag.name,o={href:"/tags/"+r.hashtag.name.toLowerCase()},i=new g.Z({root:e.root,store:e.store,slots:{default:(0,s.xJ)()},data:o}),{c(){a=(0,s.rw)(n),i._fragment.c()},l(t){a=(0,s.M4)(t,n),i._fragment.l(t)},m(t,e){(0,s.R3)(i._slotted.default,a),i._mount(t,e)},p(t,e){t.hashtag&&n!==(n="#"+e.hashtag.name)&&(0,s.a_)(a,n);var r={};t.hashtag&&(r.href="/tags/"+e.hashtag.name.toLowerCase()),i._set(r)},d(t){i.destroy(t)}}),t.target){var h=(0,s.pI)(t.target);t.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(m.prototype,s.uS);const p=m;var _=r(2334);function v(t,e,r){const s=Object.create(t);return s.status=e[r],s.index=r,s}function y(t,e,r){const s=Object.create(t);return s.account=e[r],s}function w(t,e,r){const s=Object.create(t);return s.hashtag=e[r],s}function $(t,e){var r={hashtag:e.hashtag},s=new p({root:t.root,store:t.store,data:r});return{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var r={};t.$searchResults&&(r.hashtag=e.hashtag),s._set(r)},d(t){s.destroy(t)}}}function R(t,e){var r={account:e.account},s=new f.Z({root:t.root,store:t.store,data:r});return{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var r={};t.$searchResults&&(r.account=e.account),s._set(r)},d(t){s.destroy(t)}}}function I(t,e){var r={status:e.status,index:e.index,length:e.$searchResults.statuses.length},s=new _.Z({root:t.root,store:t.store,data:r});return{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var r={};t.$searchResults&&(r.status=e.status),t.$searchResults&&(r.length=e.$searchResults.statuses.length),s._set(r)},d(t){s.destroy(t)}}}function x(t){var e;if((0,s.S1)(this,t),this.store=i.h,this._state=(0,s.f0)(this.store._init(["searchResults"]),t.data),this.store._add(this,["searchResults"]),this._intro=!0,this._handlers.destroy=[s.iT],document.getElementById("svelte-oks8qv-style")||((e=(0,s.az)("style")).id="svelte-oks8qv-style",e.textContent=".search-results.svelte-oks8qv{list-style:none;box-sizing:border-box;border:1px solid var(--main-border);border-radius:2px}",(0,s.R3)(document.head,e)),this._fragment=function(t,e){for(var r,a,n,o=e.$searchResults.hashtags,i=[],h=0;h<o.length;h+=1)i[h]=$(t,w(e,o,h));var c=e.$searchResults.accounts,l=[];for(h=0;h<c.length;h+=1)l[h]=R(t,y(e,c,h));var u=e.$searchResults.statuses,d=[];for(h=0;h<u.length;h+=1)d[h]=I(t,v(e,u,h));return{c(){r=(0,s.az)("ul");for(var t=0;t<i.length;t+=1)i[t].c();for(a=(0,s.rw)("\n  "),t=0;t<l.length;t+=1)l[t].c();for(n=(0,s.rw)("\n  "),t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){r=(0,s.d$)(t,"UL",{class:!0},!1);for(var e=(0,s.pI)(r),o=0;o<i.length;o+=1)i[o].l(e);for(a=(0,s.M4)(e,"\n  "),o=0;o<l.length;o+=1)l[o].l(e);for(n=(0,s.M4)(e,"\n  "),o=0;o<d.length;o+=1)d[o].l(e);e.forEach(s.r2),this.h()},h(){r.className="search-results svelte-oks8qv"},m(t,e){(0,s.$T)(t,r,e);for(var o=0;o<i.length;o+=1)i[o].m(r,null);for((0,s.R3)(r,a),o=0;o<l.length;o+=1)l[o].m(r,null);for((0,s.R3)(r,n),o=0;o<d.length;o+=1)d[o].m(r,null)},p(e,s){if(e.$searchResults){o=s.$searchResults.hashtags;for(var h=0;h<o.length;h+=1){const n=w(s,o,h);i[h]?i[h].p(e,n):(i[h]=$(t,n),i[h].c(),i[h].m(r,a))}for(;h<i.length;h+=1)i[h].d(1);i.length=o.length}if(e.$searchResults){for(c=s.$searchResults.accounts,h=0;h<c.length;h+=1){const a=y(s,c,h);l[h]?l[h].p(e,a):(l[h]=R(t,a),l[h].c(),l[h].m(r,n))}for(;h<l.length;h+=1)l[h].d(1);l.length=c.length}if(e.$searchResults){for(u=s.$searchResults.statuses,h=0;h<u.length;h+=1){const a=v(s,u,h);d[h]?d[h].p(e,a):(d[h]=I(t,a),d[h].c(),d[h].m(r,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=u.length}},d(t){t&&(0,s.r2)(r),(0,s.kw)(i,t),(0,s.kw)(l,t),(0,s.kw)(d,t)}}}(this,this._state),t.target){var r=(0,s.pI)(t.target);t.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(x.prototype,s.uS);const S=x;var E=r(2311),b=r(652),q=r(8089),z={onSubmit(t){t.preventDefault(),t.stopPropagation(),async function(){const{currentInstance:e,accessToken:r,queryInSearch:s}=i.h.get();i.h.set({searchLoading:!0});try{const t=await(0,u.y)(e,r,s),{queryInSearch:a}=i.h.get();a===s&&i.h.set({searchResultsForQuery:s,searchResults:t})}catch(t){l.A.say((0,d.A)(["Error during search: ",["error"]],{error:t.message||""})),console.error(t)}finally{i.h.set({searchLoading:!1})}}()},focusSearchInput(){(0,q.w)("the-search-input")}};function T(){(0,b.on)("focusSearchInput",this,(()=>this.focusSearchInput())),this.store.get().focusSearchInput&&(this.store.set({focusSearchInput:!1}),this.focusSearchInput())}function M(t,e){var r,a=new S({root:t.root,store:t.store});return{c(){r=(0,s.az)("div"),a._fragment.c(),this.h()},l(t){r=(0,s.d$)(t,"DIV",{class:!0},!1);var e=(0,s.pI)(r);a._fragment.l(e),e.forEach(s.r2),this.h()},h(){r.className="search-results-container svelte-1sidinq"},m(t,e){(0,s.$T)(t,r,e),a._mount(r,null)},d(t){t&&(0,s.r2)(r),a.destroy()}}}function Z(t,e){var r,a=new c.Z({root:t.root,store:t.store});return{c(){r=(0,s.az)("div"),a._fragment.c(),this.h()},l(t){r=(0,s.d$)(t,"DIV",{class:!0},!1);var e=(0,s.pI)(r);a._fragment.l(e),e.forEach(s.r2),this.h()},h(){r.className="search-results-container svelte-1sidinq"},m(t,e){(0,s.$T)(t,r,e),a._mount(r,null)},d(t){t&&(0,s.r2)(r),a.destroy()}}}function k(t){var e;if((0,s.S1)(this,t),this.store=i.h,this._state=(0,s.f0)(this.store._init(["queryInSearch","searchLoading","searchResults","searchResultsForQuery"]),t.data),this.store._add(this,["queryInSearch","searchLoading","searchResults","searchResultsForQuery"]),this._intro=!0,this._handlers.destroy=[s.iT],document.getElementById("svelte-1sidinq-style")||((e=(0,s.az)("style")).id="svelte-1sidinq-style",e.textContent=".search-input-form.svelte-1sidinq{display:grid;grid-template-columns:1fr min-content;grid-gap:10px}.search-input-wrapper.svelte-1sidinq{position:relative;display:flex;justify-content:center;align-items:center}.search-input.svelte-1sidinq{padding:10px 15px;border-radius:10px;flex:1;width:0;min-width:0}.search-button-svg{fill:var(--button-primary-text);width:18px;height:18px;flex:1}.search-results-container.svelte-1sidinq{position:relative;margin-top:20px}@media(min-width: 768px){.search-button.svelte-1sidinq{min-width:100px}}",(0,s.R3)(document.head,e)),this._fragment=function(t,e){var r,a,n,o,i,h,c,l,u,d,f=!1;function g(){f=!0,t.store.set({queryInSearch:h.value}),f=!1}var m=new E.Z({root:t.root,store:t.store,data:{className:"search-button-svg",href:"#fa-search"}});function p(e){t.onSubmit(e)}function _(t){return t.$searchLoading?Z:t.$searchResults&&t.$searchResultsForQuery===t.$queryInSearch?M:void 0}var v=_(e),y=v&&v(t,e);return{c(){r=(0,s.az)("form"),a=(0,s.az)("label"),n=(0,s.rw)("Search"),o=(0,s.rw)("\n  "),i=(0,s.az)("div"),h=(0,s.az)("input"),c=(0,s.rw)("\n  "),l=(0,s.az)("button"),m._fragment.c(),u=(0,s.rw)("\n"),y&&y.c(),d=(0,s.Yr)(),this.h()},l(t){r=(0,s.d$)(t,"FORM",{class:!0},!1);var e=(0,s.pI)(r);a=(0,s.d$)(e,"LABEL",{class:!0,for:!0},!1);var f=(0,s.pI)(a);n=(0,s.M4)(f,"Search"),f.forEach(s.r2),o=(0,s.M4)(e,"\n  "),i=(0,s.d$)(e,"DIV",{class:!0},!1);var g=(0,s.pI)(i);h=(0,s.d$)(g,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0,required:!0},!1),(0,s.pI)(h).forEach(s.r2),g.forEach(s.r2),c=(0,s.M4)(e,"\n  "),l=(0,s.d$)(e,"BUTTON",{type:!0,class:!0,"aria-label":!0,disabled:!0},!1);var p=(0,s.pI)(l);m._fragment.l(p),p.forEach(s.r2),e.forEach(s.r2),u=(0,s.M4)(t,"\n"),y&&y.l(t),d=(0,s.Yr)(),this.h()},h(){a.className="sr-only",a.htmlFor="the-search-input",(0,s.NH)(h,"input",g),h.id="the-search-input",(0,s.P$)(h,"type","search"),h.className="search-input svelte-1sidinq",h.placeholder="Search",h.required=!0,i.className="search-input-wrapper svelte-1sidinq",l.type="submit",l.className="primary search-button svelte-1sidinq",(0,s.P$)(l,"aria-label","Search"),l.disabled=e.$searchLoading,(0,s.NH)(r,"submit",p),r.className="search-input-form svelte-1sidinq"},m(t,f){(0,s.$T)(t,r,f),(0,s.R3)(r,a),(0,s.R3)(a,n),(0,s.R3)(r,o),(0,s.R3)(r,i),(0,s.R3)(i,h),h.value=e.$queryInSearch,(0,s.R3)(r,c),(0,s.R3)(r,l),m._mount(l,null),(0,s.$T)(t,u,f),y&&y.m(t,f),(0,s.$T)(t,d,f)},p(e,r){!f&&e.$queryInSearch&&(h.value=r.$queryInSearch),e.$searchLoading&&(l.disabled=r.$searchLoading),v!==(v=_(r))&&(y&&y.d(1),(y=v&&v(t,r))&&y.c(),y&&y.m(d.parentNode,d))},d(t){t&&(0,s.r2)(r),(0,s.ys)(h,"input",g),m.destroy(),(0,s.ys)(r,"submit",p),t&&(0,s.r2)(u),y&&y.d(t),t&&(0,s.r2)(d)}}}(this,this._state),this.root._oncreate.push((()=>{T.call(this),this.fire("update",{changed:(0,s.lZ)({},this._state),current:this._state})})),t.target){var r=(0,s.pI)(t.target);t.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(k.prototype,s.uS),(0,s.f0)(k.prototype,z);const L=k;function N(t,e){var r,a,n,i,c,l,u,d,f,g,m,p,_,v,y,w,$,R,I,x,S,E=new o.Z({root:t.root,store:t.store,slots:{default:(0,s.xJ)()}}),b=new h.Z({root:t.root,store:t.store,slots:{default:(0,s.xJ)()}});return{c(){r=(0,s.az)("h1"),a=(0,s.rw)("Search"),n=(0,s.rw)("\n\n    "),i=(0,s.az)("p"),c=(0,s.rw)("You can search once logged in to an instance."),E._fragment.c(),b._fragment.c(),l=(0,s.rw)("\n"),u=(0,s.az)("div"),d=(0,s.az)("a"),f=(0,s.rw)("Local"),g=(0,s.rw)("\n  "),m=(0,s.az)("a"),p=(0,s.rw)("Federated"),_=(0,s.rw)("\n  "),v=(0,s.az)("a"),y=(0,s.rw)("Favorites"),w=(0,s.rw)("\n  "),$=(0,s.az)("a"),R=(0,s.rw)("Direct messages"),I=(0,s.rw)("\n  "),x=(0,s.az)("a"),S=(0,s.rw)("Bookmarks"),this.h()},l(t){r=(0,s.d$)(t,"H1",{},!1);var e=(0,s.pI)(r);a=(0,s.M4)(e,"Search"),e.forEach(s.r2),n=(0,s.M4)(t,"\n\n    "),i=(0,s.d$)(t,"P",{},!1);var o=(0,s.pI)(i);c=(0,s.M4)(o,"You can search once logged in to an instance."),o.forEach(s.r2),E._fragment.l(t),b._fragment.l(t),l=(0,s.M4)(t,"\n"),u=(0,s.d$)(t,"DIV",{style:!0},!1);var h=(0,s.pI)(u);d=(0,s.d$)(h,"A",{href:!0},!1);var q=(0,s.pI)(d);f=(0,s.M4)(q,"Local"),q.forEach(s.r2),g=(0,s.M4)(h,"\n  "),m=(0,s.d$)(h,"A",{href:!0},!1);var z=(0,s.pI)(m);p=(0,s.M4)(z,"Federated"),z.forEach(s.r2),_=(0,s.M4)(h,"\n  "),v=(0,s.d$)(h,"A",{href:!0},!1);var T=(0,s.pI)(v);y=(0,s.M4)(T,"Favorites"),T.forEach(s.r2),w=(0,s.M4)(h,"\n  "),$=(0,s.d$)(h,"A",{href:!0},!1);var M=(0,s.pI)($);R=(0,s.M4)(M,"Direct messages"),M.forEach(s.r2),I=(0,s.M4)(h,"\n  "),x=(0,s.d$)(h,"A",{href:!0},!1);var Z=(0,s.pI)(x);S=(0,s.M4)(Z,"Bookmarks"),Z.forEach(s.r2),h.forEach(s.r2),this.h()},h(){d.href="/local",m.href="/federated",v.href="/favorites",$.href="/direct",x.href="/bookmarks",(0,s.A_)(u,"display","none")},m(t,e){(0,s.R3)(E._slotted.default,r),(0,s.R3)(r,a),(0,s.R3)(E._slotted.default,n),(0,s.R3)(E._slotted.default,i),(0,s.R3)(i,c),E._mount(b._slotted.default,null),b._mount(t,e),(0,s.$T)(t,l,e),(0,s.$T)(t,u,e),(0,s.R3)(u,d),(0,s.R3)(d,f),(0,s.R3)(u,g),(0,s.R3)(u,m),(0,s.R3)(m,p),(0,s.R3)(u,_),(0,s.R3)(u,v),(0,s.R3)(v,y),(0,s.R3)(u,w),(0,s.R3)(u,$),(0,s.R3)($,R),(0,s.R3)(u,I),(0,s.R3)(u,x),(0,s.R3)(x,S)},d(t){E.destroy(),b.destroy(t),t&&((0,s.r2)(l),(0,s.r2)(u))}}}function C(t,e){var r,a=new L({root:t.root,store:t.store});return{c(){r=(0,s.az)("div"),a._fragment.c(),this.h()},l(t){r=(0,s.d$)(t,"DIV",{class:!0},!1);var e=(0,s.pI)(r);a._fragment.l(e),e.forEach(s.r2),this.h()},h(){r.className="search-page svelte-1iybo1i"},m(t,e){(0,s.$T)(t,r,e),a._mount(r,null)},d(t){t&&(0,s.r2)(r),a.destroy()}}}function F(t){var e;if((0,s.S1)(this,t),this.store=i.h,this._state=(0,s.f0)(this.store._init(["isUserLoggedIn"]),t.data),this.store._add(this,["isUserLoggedIn"]),this._intro=!0,this._handlers.destroy=[s.iT],document.getElementById("svelte-1iybo1i-style")||((e=(0,s.az)("style")).id="svelte-1iybo1i-style",e.textContent=".search-page.svelte-1iybo1i{padding:20px 20px}@media(max-width: 767px){.search-page.svelte-1iybo1i{padding:20px 10px}}",(0,s.R3)(document.head,e)),this._fragment=function(t,e){var r;function a(t){return t.$isUserLoggedIn?C:N}var n=a(e),o=n(t,e);return{c(){o.c(),r=(0,s.Yr)()},l(t){o.l(t),r=(0,s.Yr)()},m(t,e){o.m(t,e),(0,s.$T)(t,r,e)},p(e,s){n!==(n=a(s))&&(o.d(1),(o=n(t,s)).c(),o.m(r.parentNode,r))},d(t){o.d(t),t&&(0,s.r2)(r)}}}(this,this._state),t.target){var r=(0,s.pI)(t.target);t.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(F.prototype,s.uS);const B=F;function D(t){var e,r,o,i,h,c;if((0,s.S1)(this,t),this._state=(0,s.f0)({pageComponent:B},t.data),this._intro=!0,this._fragment=(e=this,r=this._state,i=new a.Z({root:e.root,store:e.store,data:{name:"Search"}}),h={pageComponent:r.pageComponent,params:r.params},c=new n.Z({root:e.root,store:e.store,data:h}),{c(){i._fragment.c(),o=(0,s.rw)("\n\n  "),c._fragment.c()},l(t){i._fragment.l(t),o=(0,s.M4)(t,"\n\n  "),c._fragment.l(t)},m(t,e){i._mount(t,e),(0,s.$T)(t,o,e),c._mount(t,e)},p(t,e){var r={};t.pageComponent&&(r.pageComponent=e.pageComponent),t.params&&(r.params=e.params),c._set(r)},d(t){i.destroy(t),t&&(0,s.r2)(o),c.destroy(t)}}),t.target){var l=(0,s.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(s.r2),this._mount(t.target,t.anchor),(0,s.yl)(this)}}(0,s.f0)(D.prototype,s.uS);const A=D},6172:(t,e,r)=>{"use strict";r.d(e,{y:()=>o});var s=r(8273),a=r(1029);function n(t,e,r,n,o,i,h,c){const l=`${(0,a.E)(e)}/api/${t}/search?`+(0,s.pe)({q:n,resolve:o,limit:i,exclude_unreviewed:!!h});return(0,s.U2)(l,(0,a.I)(r),{timeout:s.EH,signal:c})}async function o(t,e,r,s=!0,o=5,i=!1,h=null){try{return await async function(t,e,r,s,a,o,i){return n("v2",t,e,r,s,a,o,i)}(t,e,r,s,o,i,h)}catch(c){if(c&&404===c.status)return async function(t,e,r,s,o,i,h){const c=await n("v1",t,e,r,s,o,i,h);return c.hashtags=c.hashtags&&c.hashtags.map((e=>({name:e,url:`${(0,a.E)(t)}/tags/${e.toLowerCase()}`,history:[]}))),c}(t,e,r,s,o,i,h);throw c}}},8089:(t,e,r)=>{"use strict";r.d(e,{w:()=>a});var s=r(2846);async function a(t){for(let r=0;r<5;r++){r>0&&await new Promise((t=>setTimeout(t,50))),await new Promise((t=>(0,s.F)(t)));const a=document.getElementById(t);if(a)try{return void a.focus({preventScroll:!0})}catch(e){console.error(e)}}}}}]);
//# sourceMappingURL=6464.cb977c5db5767bb3bc8f.search.js.map