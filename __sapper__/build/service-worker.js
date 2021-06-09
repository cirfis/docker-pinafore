(()=>{"use strict";function t(t,e,s){const a={method:t,headers:Object.assign(e||{},{Accept:"application/json"})};return s&&s.signal&&(a.signal=s.signal),a}async function e(t,e,s){let a;return a=s&&s.timeout?await function(t,e,s){return new Promise(((a,n)=>{fetch(t,e).then(a,n),setTimeout((()=>n(new Error(`Timed out after ${s/1e3} seconds`))),s)}))}(t,e,s.timeout):await fetch(t,e),async function(t){if(t.status>=300){const e=new Error("Request failed: "+t.status);throw e.status=t.status,e}const e=await t.json();if(t.status>=200&&t.status<300)return{json:e,headers:t.headers};if(e&&e.error)throw new Error(t.status+": "+e.error);throw new Error("Request failed: "+t.status)}(a)}async function s(s,a,n,c,i){const o=t(s,c,i);return n&&(n instanceof FormData?o.body=n:(o.body=JSON.stringify(n),o.headers["Content-Type"]="application/json")),e(a,o,i)}async function a(t,e,a,n){return(await s("POST",t,e,a,n)).json}const n={addEventListener:function(t,e){0},removeEventListener:function(t,e){0}};class c{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbName=t,this._storeName=e,this._init()}_withIDBStore(t,e){return this._init(),this._dbp.then((s=>new Promise(((a,n)=>{const c=s.transaction(this.storeName,t);c.oncomplete=()=>a(),c.onabort=c.onerror=()=>n(c.error),e(c.objectStore(this.storeName))}))))}_init(){this._dbp||(this._dbp=new Promise(((t,e)=>{const s=indexedDB.open(this._dbName,1);s.onerror=()=>e(s.error),s.onsuccess=()=>t(s.result),s.onupgradeneeded=()=>{s.result.createObjectStore(this._storeName)}})))}_close(){return this._init(),this._dbp.then((t=>{t.close(),this._dbp=void 0}))}}let i;function o(){return i||(i=new c),i}function r(){return o()._close()}n.addEventListener("statechange",(async t=>{"frozen"===t.newState&&await r()}));function l(t){return e="web-share-data",s=t,o()._withIDBStore("readwrite",(t=>{t.put(s,e)}));var e,s}const d="assets_1622462385378",f="webpack_assets_1622462385378",b=[{regex:/tesseract-core\.wasm/,cache:f},{regex:/traineddata\.gz/,cache:d},{regex:/\$polyfill\$/,cache:f}],u=["/service-worker-index.html","apple-icon.png","emoji-en-US.json","eng.traineddata.gz","favicon-alert.png","favicon.png","icon-144-maskable.png","icon-144.png","icon-150.png","icon-192-maskable.png","icon-192.png","icon-44.png","icon-48-maskable.png","icon-48.png","icon-50.png","icon-512-maskable.png","icon-512.png","icon-72-maskable.png","icon-72.png","icon-96-maskable.png","icon-96.png","icon-push-badge.png","icon-push-fa-retweet.png","icon-push-fa-star.png","icon-shortcut-fa-bell.png","icon-shortcut-fa-pencil.png","icons.svg","inline-script.js.map","manifest.json","screenshot-540-720-1.png","screenshot-540-720-2.png","screenshot-540-720-3.png","theme-cobalt.css","theme-dark-grayscale.css","theme-gecko.css","theme-grayscale.css","theme-hacker.css","theme-hotpants.css","theme-majesty.css","theme-mastodon.css","theme-oaken.css","theme-ozark.css","theme-pitchblack.css","theme-punk.css","theme-riot.css","theme-scarlet.css","theme-seafoam.css","theme-sorcery.css"].map((t=>t.startsWith("/")?t:`/${t}`)).filter((t=>!t.endsWith(".map"))).filter((t=>"/robots.txt"!==t)).filter((t=>!t.includes("traineddata.gz"))).filter((t=>!t.endsWith(".webapp"))).filter((t=>!/emoji-.*?\.json$/.test(t))).filter((t=>!/screenshot-.*?\.png/.test(t))),p=["client/tesseract-asset.e4db7f953ac7bcf9f67bd39031e42241.tesseract-core.wasm.js","client/5332.a3fe347fe625a95a6524.$polyfill$-internationalization.js","client/6957.852051eb6cb52b90b0fd.6957.js","client/6905.82397d87349f028a6021.6905.js","client/tesseract-asset.6ae4421cc24575c3996815e8a7e47a34.worker.min.js","client/179.130f8bc78300706a72b4.main.js","client/7699.a4dfa901d92bce5dff7e.7699.js","client/4137.83ba56a14a3651074311.4137.js","client/3319.d6f5929942377884c6d1.3319.js","client/7434.d4a7d54d4129399f54d9.settings_instances_$instanceName.js","client/8945.def5c83760fc4c7541a1.8945.js","client/7779.5eaa22f9d3125f0f0730.7779.js","client/3038.dd1918c280be2c6a0580.3038.js","client/4551.6b0c69ea2bd617a548c7.4551.js","client/5451.8f4d451a806f4d0e27cf.5451.js","client/9587.a5ad35d6455b419b1bf0.community.js","client/5466.24898de194a78906cf79.5466.js","client/6464.cb977c5db5767bb3bc8f.search.js","client/3976.be641f853bbbfe924bb5.settings_general.js","client/5343.7f3b3998fa0edae4356d.5343.js","client/166.8812d8059a483fc4ddd1.166.js","client/8322.f10cd03ab93c60570ee8.8322.js","client/3754.c0ddeb6989229311949e.settings_instances_add.js","client/4549.fec8accc67911bdc5d6c.settings_wellness.js","client/7396.cf9d44abdc47a5eae425.7396.js","client/7608.a430a14703e20b958612.7608.js","client/3313.02d4d50bfd1da27b3764.3313.js","client/4826.5fc073f1d3f03208f591.index.js","client/801.9f1450cec44d9b52b6ea.801.js","client/8651.c6cc5a6cbc2b64195631.settings_instances.js","client/6074.e5e25211bdd25e5e1dd1.6074.js","client/4990.4725b2c0f00923db9b33.pinned.js","client/398.ecadc9e31803e5519c2e.398.js","client/9525.3fed73a63a3d119c7f6d.9525.js","client/3256.f32564d26818e6b5c01b.3256.js","client/1630.44aebc5427d632e42823.1630.js","client/4686.c523a1eba1b377e3c961.4686.js","client/2346.d8eb8d9daf9db465a9eb.settings_hotkeys.js","client/blurhash.f87cb077f8cbb103ff28.blurhash.js","client/986.2ff4f2eae3e68357e706.986.js","client/2837.f90dd0bfcdad83284063.2837.js","client/2943.d92a2651b5d516a69f9d.2943.js","client/2392.b4bfcc38e4d5457fc604.2392.js","client/7901.1cebcf92efc3c866e2cd.7901.js","client/3042.39b6499506ac97e887d8.3042.js","client/3660.483c9b5eabbf8a9516b8.blocked.js","client/1617.44d184585654c572f17b.muted.js","client/1909.bd7b1fc97265aabf63d7.notifications.js","client/5107.68cbaf5c01f4727e834c.5107.js","client/5925.6622f34ec4dff2a7433c.5925.js","client/5980.fe7c7e1bccf8d924d337.notifications_mentions.js","client/9029.4919a340c91e3c02b528.9029.js","client/9774.decd804cc7b837fdef5d.9774.js","client/4770.c6d9e537f8f238c3e86a.4770.js","client/9379.d90dfcc85a5dadcc8b70.9379.js","client/5571.5cf850c47a0f464ddb0d.settings.js","client/1216.61478511dbcff6119bf2.requests.js","client/4332.c06442e819752ea41bec.4332.js","client/881.aca89ff63871f0842162.lists_$listId.js","client/9263.ed091bdd8ef8ff64c6c4.9263.js","client/2468.1892725134d938e1f2f4.2468.js","client/4736.f7c73cfd1a6bfdcf09cc.4736.js","client/9921.bdee2c0c3259adc35d3d.9921.js","client/2845.4845bce66f852fffa712.2845.js","client/1225.852cc6b4bf205df49da9.settings_about.js","client/1240.6c76469401d82dfbff46.direct.js","client/392.b3139378561aa6a0a1b9.federated.js","client/2615.261e8a47d71a2a50fab5.bookmarks.js","client/205.7e6457d90d9146abbcbe.favorites.js","client/9446.d3d3a4e0599013c6ee77.local.js","client/8311.ea31cdb09d1e6ceaa849.8311.js","client/733.15dd712fdfa834f78a41.tags_$tagName.js","client/671.ebd3aa87c34710b1c621.671.js","client/2523.b3473c1a098719e0bd39.2523.js","client/5853.cb272a8f7bd231228323.$polyfill$-focus-visible.js","client/4178.72251d836065aebacd83.4178.js","client/4016.e929e019c209de25e449.statuses_$statusId.js","client/9431.e2448f942c338351c8f2.9431.js","client/8742.bf0e65646d750d75cd4f.statuses_$statusId_favorites.js","client/3365.485cc20766e1d6de8570.statuses_$statusId_reblogs.js","client/2889.f6853676b0962a5b721f.accounts_$accountId_followers.js","client/4827.4586562496ce6c1f20f6.accounts_$accountId_follows.js","client/1257.8a90bc15118fa0270806.1257.js","client/3881.3542df980a9a2f3c8c50.3881.js","client/3362.7231eeeaec2008c5ebab.3362.js","client/9430.f956ff33c9b264b041d8.9430.js","client/6608.eb2af3e52110eac08e31.6608.js","client/792.5473627e7f4122be232f.792.js","client/8504.a479f781fa2d1903e547.8504.js","client/7500.0ea822c5bce47faf5a3b.7500.js","client/9668.03f6a07cc0d955e9b74b.$polyfill$-requestidlecallback.js","client/1597.905d8fc8488ca4e48c5e.1597.js","client/1194.3a8b0c38a7c0186f0fad.1194.js","client/6354.465afa4d3b596d3e56d1.6354.js","client/8688.1de5ed3f0917f224c32c.accounts_$accountId_with_replies.js","client/3864.3a264f29b4e476241a62.accounts_$accountId_media.js","client/8967.6feb0667722ed5e54935.8967.js","client/2270.30f92f4b7ce02a18c8f0.accounts_$accountId.js","client/1089.ef1ee06720868feb4e61.1089.js","client/636.31a7b792dbd0da5e0b20.636.js","client/1632.507812ab6feed4aab49d.1632.js","client/3551.7c268cceda3bce2555bd.3551.js","client/6077.a89ed4d60a0978a22768.6077.js"].filter((t=>!t.endsWith(".map"))).filter((t=>!t.includes("tesseract-core.wasm"))).filter((t=>!t.includes("LICENSE"))).filter((t=>!t.includes("$polyfill$"))),h=[{pattern:/^\/?$/},{pattern:/^\/notifications\/?$/},{pattern:/^\/notifications\/mentions\/?$/},{pattern:/^\/bookmarks\/?$/},{pattern:/^\/community\/?$/},{pattern:/^\/favorites\/?$/},{pattern:/^\/federated\/?$/},{pattern:/^\/accounts\/([^\/]+?)\/?$/},{pattern:/^\/accounts\/([^\/]+?)\/with_replies\/?$/},{pattern:/^\/accounts\/([^\/]+?)\/followers\/?$/},{pattern:/^\/accounts\/([^\/]+?)\/follows\/?$/},{pattern:/^\/accounts\/([^\/]+?)\/media\/?$/},{pattern:/^\/requests\/?$/},{pattern:/^\/settings\/?$/},{pattern:/^\/settings\/instances\/?$/},{pattern:/^\/settings\/instances\/add\/?$/},{pattern:/^\/settings\/instances\/([^\/]+?)\/?$/},{pattern:/^\/settings\/wellness\/?$/},{pattern:/^\/settings\/general\/?$/},{pattern:/^\/settings\/hotkeys\/?$/},{pattern:/^\/settings\/about\/?$/},{pattern:/^\/statuses\/([^\/]+?)\/?$/},{pattern:/^\/statuses\/([^\/]+?)\/favorites\/?$/},{pattern:/^\/statuses\/([^\/]+?)\/reblogs\/?$/},{pattern:/^\/blocked\/?$/},{pattern:/^\/direct\/?$/},{pattern:/^\/pinned\/?$/},{pattern:/^\/search\/?$/},{pattern:/^\/lists\/([^\/]+?)\/?$/},{pattern:/^\/local\/?$/},{pattern:/^\/muted\/?$/},{pattern:/^\/tags\/([^\/]+?)\/?$/}];self.addEventListener("install",(t=>{t.waitUntil((async()=>{await Promise.all([caches.open(f).then((t=>t.addAll(p))),caches.open(d).then((t=>t.addAll(u)))]),self.skipWaiting()})())})),self.addEventListener("activate",(t=>{t.waitUntil((async()=>{const t=await caches.keys();for(const s of t)s===d||s.startsWith("webpack_assets_")||await caches.delete(s);const e=t.filter((t=>t.startsWith("webpack_assets_"))).sort(((t,e)=>{const s=parseInt(t.substring(15),10);return parseInt(e.substring(15),10)<s?-1:1})).slice(2);for(const s of e)await caches.delete(s);await self.clients.claim()})())})),self.addEventListener("fetch",(t=>{const e=t.request,s=new URL(e.url);s.protocol.startsWith("http")&&t.respondWith((async()=>{if(s.origin===self.origin){if("POST"===e.method&&"/share"===s.pathname){const t=await e.formData(),s=t.get("title"),a=t.get("text"),n=t.get("url"),c=t.get("file");return await l({title:s,text:a,url:n,file:c}),await r(),Response.redirect("/?pwa=true&compose=true",303)}const t=await caches.match(e);if(t)return t;for(const{regex:a,cache:n}of b)if(a.test(s.pathname)){const t=await fetch(e);if(t&&t.status>=200&&t.status<300){const s=t.clone();caches.open(n).then((t=>t.put(e,s)))}return t}if(h.find((t=>t.pattern.test(s.pathname)))){const t=await caches.match("/service-worker-index.html");if(t)return t}}return fetch(e)})())})),self.addEventListener("push",(s=>{s.waitUntil((async()=>{const a=s.data.json(),{origin:n}=s.target;try{const s=await async function(s,a,n){return(await e(s,t("GET",a,n),n)).json}(`${n}/api/v1/notifications/${a.notification_id}`,{Authorization:`Bearer ${a.access_token}`},{timeout:2e3});await async function(t,e){const{icon:s,body:a}=t,n=e.id,{origin:c}=self.location,i="/icon-push-badge.png";switch(e.type){case"follow":await self.registration.showNotification(t.title,{badge:i,icon:s,body:a,tag:n,data:{url:`${c}/accounts/${e.account.id}`}});break;case"reblog":case"favourite":case"poll":await self.registration.showNotification(t.title,{badge:i,icon:s,body:a,tag:n,data:{url:`${c}/statuses/${e.status.id}`}});break;case"mention":{const o=[["public","unlisted"].includes(e.status.visibility)&&{action:"reblog",icon:"/icon-push-fa-retweet.png",title:"Boost"},{action:"favourite",icon:"/icon-push-fa-star.png",title:"Favorite"}].filter(Boolean);await self.registration.showNotification(t.title,{badge:i,icon:s,body:a,tag:n,data:{instance:new URL(t.icon).origin,status_id:e.status.id,access_token:t.access_token,url:`${c}/statuses/${e.status.id}`},actions:o});break}}}(a,s)}catch(c){await async function(t){await self.registration.showNotification(t.title,{icon:t.icon,body:t.body,data:{url:`${self.origin}/notifications`}})}(a)}})())}));const j=(t,e)=>{const s=(t=>{const e={};for(const s in t)"function"!=typeof t[s]&&null!==t[s]&&(e[s]=t[s]);return e})(t);return s.actions=s.actions.filter((t=>t.action!==e)),self.registration.showNotification(s.title,s)};self.addEventListener("notificationclick",(t=>{t.waitUntil((async()=>{switch(t.action){case"reblog":{const e=`${t.notification.data.instance}/api/v1/statuses/${t.notification.data.status_id}/reblog`;await a(e,null,{Authorization:`Bearer ${t.notification.data.access_token}`}),await j(t.notification,"reblog");break}case"favourite":{const e=`${t.notification.data.instance}/api/v1/statuses/${t.notification.data.status_id}/favourite`;await a(e,null,{Authorization:`Bearer ${t.notification.data.access_token}`}),await j(t.notification,"favourite");break}default:await self.clients.openWindow(t.notification.data.url),await t.notification.close()}})())})),self.addEventListener("message",(t=>{switch(t.data){case"skip-waiting":self.skipWaiting()}}))})();
//# sourceMappingURL=service-worker.js.map