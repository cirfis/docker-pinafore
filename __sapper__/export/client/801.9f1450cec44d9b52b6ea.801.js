(this.webpackChunkpinafore=this.webpackChunkpinafore||[]).push([[801],{6616:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(4178);function n(e){var t;if((0,r.S1)(this,e),this._state=(0,r.f0)({},e.data),this._intro=!0,document.getElementById("svelte-1vy9y4z-style")||((t=(0,r.az)("style")).id="svelte-1vy9y4z-style",t.textContent=".generic-instance-settings{background:var(--form-bg);border:1px solid var(--main-border);border-radius:4px;display:block;padding:20px;line-height:2em}",(0,r.R3)(document.head,t)),this._fragment=(this._state,{c:r.ZT,l:r.ZT,m:r.ZT,p:r.ZT,d:r.ZT}),e.target){var a=(0,r.pI)(e.target);e.hydrate?this._fragment.l(a):this._fragment.c(),a.forEach(r.r2),this._mount(e.target,e.anchor)}}(0,r.f0)(n.prototype,r.uS);const s=n},801:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var r=a(4178),n=a(6616),s=a(9054),o=a(2936),c=a(4049),l=a(3734),i=a(7265);function h(e){return(0,i.A)([["label"]," ",["default","select",{true:["(default)"],other:[]}]],{label:e.label,default:e.name===l.t0})}var m={onThemeChange(){const{selectedTheme:e,instanceName:t}=this.get();(0,s.Lr)(t,e)}};async function d(){const{instanceName:e}=this.get(),{instanceThemes:t}=this.store.get();this.set({selectedTheme:t[e]||l.t0})}function u(e){const{component:t}=this._svelte;t.onThemeChange()}function f(e,t,a){const r=Object.create(e);return r.theme=t[a],r}function p(e,t,a){const r=Object.create(e);return r.themeGroup=t[a],r}function g(e,t){var a,n,s,o,c,l,i,m,d,f,p,g,k=h(t.theme);function v(){e.set({selectedTheme:n.__value})}return{c(){a=(0,r.az)("div"),n=(0,r.az)("input"),c=(0,r.rw)("\n        "),l=(0,r.az)("label"),i=(0,r.az)("div"),d=(0,r.rw)("\n          "),f=(0,r.az)("span"),p=(0,r.rw)(k),this.h()},l(e){a=(0,r.d$)(e,"DIV",{class:!0},!1);var t=(0,r.pI)(a);n=(0,r.d$)(t,"INPUT",{type:!0,id:!0,value:!0,checked:!0},!1),(0,r.pI)(n).forEach(r.r2),c=(0,r.M4)(t,"\n        "),l=(0,r.d$)(t,"LABEL",{class:!0,for:!0},!1);var s=(0,r.pI)(l);i=(0,r.d$)(s,"DIV",{class:!0,style:!0},!1),(0,r.pI)(i).forEach(r.r2),d=(0,r.M4)(s,"\n          "),f=(0,r.d$)(s,"SPAN",{class:!0},!1);var o=(0,r.pI)(f);p=(0,r.M4)(o,k),o.forEach(r.r2),s.forEach(r.r2),t.forEach(r.r2),this.h()},h(){n._svelte={component:e},e._bindingGroups[0].push(n),(0,r.NH)(n,"change",v),(0,r.NH)(n,"change",u),(0,r.P$)(n,"type","radio"),n.id=s="choice-theme-"+t.theme.name,n.__value=o=t.theme.name,n.value=n.__value,n.checked="$currentTheme === theme.name",i.className=m="theme-preview theme-preview-"+(t.themeGroup.dark?"dark":"light")+" svelte-yxwtkf",(0,r.A_)(i,"background-color",t.theme.color),f.className="theme-picker-label-span svelte-yxwtkf",l.className="theme-picker-label svelte-yxwtkf",l.htmlFor=g="choice-theme-"+t.theme.name,a.className="theme-picker svelte-yxwtkf"},m(e,s){(0,r.$T)(e,a,s),(0,r.R3)(a,n),n.checked=n.__value===t.selectedTheme,(0,r.R3)(a,c),(0,r.R3)(a,l),(0,r.R3)(l,i),(0,r.R3)(l,d),(0,r.R3)(l,f),(0,r.R3)(f,p)},p(e,t){e.selectedTheme&&(n.checked=n.__value===t.selectedTheme),e.themeGroups&&s!==(s="choice-theme-"+t.theme.name)&&(n.id=s),e.themeGroups&&o!==(o=t.theme.name)&&(n.__value=o),n.value=n.__value,e.themeGroups&&m!==(m="theme-preview theme-preview-"+(t.themeGroup.dark?"dark":"light")+" svelte-yxwtkf")&&(i.className=m),e.themeGroups&&(0,r.A_)(i,"background-color",t.theme.color),e.themeGroups&&k!==(k=h(t.theme))&&(0,r.a_)(p,k),e.themeGroups&&g!==(g="choice-theme-"+t.theme.name)&&(l.htmlFor=g)},d(t){t&&(0,r.r2)(a),e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(n),1),(0,r.ys)(n,"change",v),(0,r.ys)(n,"change",u)}}}function k(e,t){for(var a,n,s,o,c=t.themeGroup.dark?"Dark background":"Light background",l=t.themeGroup.themes,i=[],h=0;h<l.length;h+=1)i[h]=g(e,f(t,l,h));return{c(){a=(0,r.az)("div"),n=(0,r.az)("h3"),s=(0,r.rw)(c),o=(0,r.rw)("\n      ");for(var e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){a=(0,r.d$)(e,"DIV",{class:!0},!1);var t=(0,r.pI)(a);n=(0,r.d$)(t,"H3",{class:!0},!1);var l=(0,r.pI)(n);s=(0,r.M4)(l,c),l.forEach(r.r2),o=(0,r.M4)(t,"\n      ");for(var h=0;h<i.length;h+=1)i[h].l(t);t.forEach(r.r2),this.h()},h(){n.className="svelte-yxwtkf",a.className="theme-group svelte-yxwtkf"},m(e,t){(0,r.$T)(e,a,t),(0,r.R3)(a,n),(0,r.R3)(n,s),(0,r.R3)(a,o);for(var c=0;c<i.length;c+=1)i[c].m(a,null)},p(t,n){if(t.themeGroups&&c!==(c=n.themeGroup.dark?"Dark background":"Light background")&&(0,r.a_)(s,c),t.themeGroups||t.selectedTheme){l=n.themeGroup.themes;for(var o=0;o<l.length;o+=1){const r=f(n,l,o);i[o]?i[o].p(t,r):(i[o]=g(e,r),i[o].c(),i[o].m(a,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}},d(e){e&&(0,r.r2)(a),(0,r.kw)(i,e)}}}function v(e){var t;if((0,r.S1)(this,e),this.store=o.h,this._state=(0,r.f0)({themes:c.n,DEFAULT_THEME:l.t0,selectedTheme:l.t0},e.data),this._recompute({themes:1},this._state),this._bindingGroups=[[]],this._intro=!0,document.getElementById("svelte-yxwtkf-style")||((t=(0,r.az)("style")).id="svelte-yxwtkf-style",t.textContent=".theme-groups.svelte-yxwtkf{display:grid;grid-template-columns:1fr 1fr}.theme-group.svelte-yxwtkf{display:flex;flex-direction:column;align-items:flex-start;flex:1}.theme-picker.svelte-yxwtkf{display:flex;align-items:center}.theme-picker-label.svelte-yxwtkf{display:flex;align-items:center}.theme-picker-label-span.svelte-yxwtkf{margin:2px 10px 0}.theme-preview.svelte-yxwtkf{width:21px;height:21px;box-sizing:border-box;border-radius:2px;margin:0 2px 0 10px}.theme-preview-dark.svelte-yxwtkf{border:2px solid #000}.theme-preview-light.svelte-yxwtkf{border:2px solid #dadada}h3.svelte-yxwtkf{font-size:1.4em}@media(max-width: 479px){.theme-groups.svelte-yxwtkf{grid-template-columns:1fr}h3.svelte-yxwtkf{margin-top:0.5em}}@media(max-width: 240px){.theme-groups.svelte-yxwtkf{grid-row-gap:25px}}",(0,r.R3)(document.head,t)),this._fragment=function(e,t){for(var a,s,o,c=t.themeGroups,l=[],i=0;i<c.length;i+=1)l[i]=k(e,p(t,c,i));var h=new n.Z({root:e.root,store:e.store});return{c(){a=(0,r.az)("form"),s=(0,r.az)("div");for(var e=0;e<l.length;e+=1)l[e].c();o=(0,r.rw)("\n"),h._fragment.c(),this.h()},l(e){a=(0,r.d$)(e,"FORM",{class:!0,"aria-label":!0},!1);var t=(0,r.pI)(a);s=(0,r.d$)(t,"DIV",{class:!0},!1);for(var n=(0,r.pI)(s),c=0;c<l.length;c+=1)l[c].l(n);n.forEach(r.r2),t.forEach(r.r2),o=(0,r.M4)(e,"\n"),h._fragment.l(e),this.h()},h(){s.className="theme-groups svelte-yxwtkf",a.className="generic-instance-settings",(0,r.P$)(a,"aria-label","Choose a theme")},m(e,t){(0,r.$T)(e,a,t),(0,r.R3)(a,s);for(var n=0;n<l.length;n+=1)l[n].m(s,null);(0,r.$T)(e,o,t),h._mount(e,t)},p(t,a){if(t.themeGroups||t.selectedTheme){c=a.themeGroups;for(var r=0;r<c.length;r+=1){const n=p(a,c,r);l[r]?l[r].p(t,n):(l[r]=k(e,n),l[r].c(),l[r].m(s,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}},d(e){e&&(0,r.r2)(a),(0,r.kw)(l,e),e&&(0,r.r2)(o),h.destroy(e)}}}(this,this._state),this.root._oncreate.push((()=>{d.call(this),this.fire("update",{changed:(0,r.lZ)({},this._state),current:this._state})})),e.target){var a=(0,r.pI)(e.target);e.hydrate?this._fragment.l(a):this._fragment.c(),a.forEach(r.r2),this._mount(e.target,e.anchor),(0,r.yl)(this)}}(0,r.f0)(v.prototype,r.uS),(0,r.f0)(v.prototype,m),v.prototype._recompute=function(e,t){e.themes&&this._differs(t.themeGroups,t.themeGroups=function({themes:e}){return[{dark:!1,themes:e.filter((e=>!e.dark))},{dark:!0,themes:e.filter((e=>e.dark))}]}(t))&&(e.themeGroups=!0)};const y=v},9054:(e,t,a)=>{"use strict";a.d(t,{Lr:()=>d,jh:()=>f,rd:()=>u,Q:()=>g,Ac:()=>p});var r=a(4511),n=a(2936),s=a(3734),o=a(6494),c=a(8313),l=a(3242),i=a(1281),h=a(2909);var m=a(7265);function d(e,t){const{instanceThemes:a}=n.h.get();a[e]=t,n.h.set({instanceThemes:a}),n.h.save();const{currentInstance:r}=n.h.get();if(e===r){const{enableGrayscale:e}=n.h.get();(0,s.Xi)(t,e)}}function u(e){const{instanceThemes:t}=n.h.get();n.h.set({currentInstance:e,searchResults:null,queryInSearch:""}),n.h.save();const{enableGrayscale:a}=n.h.get();(0,s.Xi)(t[e],a)}async function f(e,t){t=t||(0,m.A)(["Logged out of ",["instance"]],{instance:e});const{composeData:r,currentInstance:l,customEmoji:i,instanceInfos:d,instanceLists:u,instanceThemes:f,loggedInInstances:p,loggedInInstancesInOrder:g,verifyCredentials:k}=n.h.get();g.splice(g.indexOf(e),1);const v=e===l?g[0]:l,y=[r,i,d,u,f,p,k];for(const a of y)delete a[e];n.h.set({composeData:r,currentInstance:v,customEmoji:i,instanceInfos:d,instanceLists:u,instanceThemes:f,loggedInInstances:p,loggedInInstancesInOrder:g,queryInSearch:"",searchResults:null,timelineInitialized:!1,timelinePreinitialized:!1,verifyCredentials:k}),n.h.clearTimelineDataForInstance(e),n.h.clearAutosuggestDataForInstance(e),n.h.save();const{virtualListStore:b}=await Promise.all([a.e(9921),a.e(1257),a.e(1089)]).then(a.bind(a,1257));b.clearRealmByPrefix(l+"/"),o.A.say(t);const{enableGrayscale:w}=n.h.get();(0,s.Xi)(f[v],w),h.F.clearDatabaseForInstance(e),(0,c.E9)("/settings/instances")}async function p(e){const{loggedInInstances:t}=n.h.get(),a=t[e].access_token;await(0,l.u)((()=>(0,r.Q)(e,a).catch(function(e){return async t=>{throw t.message.startsWith("401:")&&await f(e,(0,m.A)(["The access token was revoked, logged out of ",["instance"]],{instance:e})),t}}(e))),(()=>h.F.getInstanceVerifyCredentials(e)),(t=>h.F.setInstanceVerifyCredentials(e,t)),(t=>function(e,t){const{verifyCredentials:a}=n.h.get();a[e]=t,n.h.set({verifyCredentials:a})}(e,t)))}async function g(e){await(0,l.u)((()=>(0,i.s)(e)),(()=>h.F.getInstanceInfo(e)),(t=>h.F.setInstanceInfo(e,t)),(t=>{const{instanceInfos:a}=n.h.get();a[e]=t,n.h.set({instanceInfos:a})}))}},1281:(e,t,a)=>{"use strict";a.d(t,{s:()=>s});var r=a(8273),n=a(1029);function s(e){const t=`${(0,n.E)(e)}/api/v1/instance`;return(0,r.U2)(t,null,{timeout:r.EH})}},4511:(e,t,a)=>{"use strict";a.d(t,{Q:()=>s,D:()=>o});var r=a(8273),n=a(1029);function s(e,t){const a=`${(0,n.E)(e)}/api/v1/accounts/verify_credentials`;return(0,r.U2)(a,(0,n.I)(t),{timeout:r.EH})}function o(e,t,a){const s=`${(0,n.E)(e)}/api/v1/accounts/${a}`;return(0,r.U2)(s,(0,n.I)(t),{timeout:r.EH})}},2909:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});const r=new Proxy({},{get:function(e,t){return async function(...r){if(!e[t]){const r=await Promise.all([a.e(3881),a.e(166)]).then(a.bind(a,166));e[t]=r[t]}return e[t].apply(null,r)}}})},4049:(e,t,a)=>{"use strict";a.d(t,{n:()=>r});const r=[{name:"default",label:"Royal",dark:!1,color:"royalblue"},{name:"scarlet",label:"Scarlet",dark:!1,color:"#e04e41"},{name:"seafoam",label:"Seafoam",dark:!1,color:"#177380"},{name:"hotpants",label:"Hotpants",dark:!1,color:"hotpink"},{name:"oaken",label:"Oaken",dark:!1,color:"saddlebrown"},{name:"majesty",label:"Majesty",dark:!1,color:"blueviolet"},{name:"gecko",label:"Gecko",dark:!1,color:"#4ab92f"},{name:"grayscale",label:"Grayscale",dark:!1,color:"#999999"},{name:"ozark",label:"Ozark",dark:!0,color:"#5263af"},{name:"cobalt",label:"Cobalt",dark:!0,color:"#08439b"},{name:"sorcery",label:"Sorcery",dark:!0,color:"#ae91e8"},{name:"punk",label:"Punk",dark:!0,color:"#e04e41"},{name:"riot",label:"Riot",dark:!0,color:"hotpink"},{name:"hacker",label:"Hacker",dark:!0,color:"#4ab92f"},{name:"mastodon",label:"Mastodon",dark:!0,color:"#282C37"},{name:"pitchblack",label:"Pitch Black",dark:!0,color:"#000"},{name:"dark-grayscale",label:"Dark Grayscale",dark:!0,color:"#666"}]},3242:(e,t,a)=>{"use strict";async function r(e,t,a,r){const n=e();let s;try{s=await t()}catch(o){console.error("ignored DB error",o)}finally{s&&r(s);const e=n.then((e=>{a(e),r(e)}));s||await e}}async function n(e,t,a,r){let n;try{n=await t()}catch(s){console.error("ignored DB error",s)}if(n)r(n);else{const t=await e();a(t),r(t)}}a.d(t,{u:()=>r,o:()=>n})}}]);
//# sourceMappingURL=801.9f1450cec44d9b52b6ea.801.js.map