!function(e){function t(t){for(var n,r,i=t[0],l=t[1],s=0,c=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0};n.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+""+({}[e]||e)+".chunk."+{2:"80fac"}[e]+".esm.js"}(e);var a=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/google-docs-batch-invite/",n.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var a=l;n(n.s="mdyV")}({"/44/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={clientId:"771607978696-9p75ppslrr713sdarv59kvidlaoi7tc4.apps.googleusercontent.com",appId:"771607978696",developerKey:"AIzaSyAkGbtRkdo8zFJtrde5qs87EVd-Fy8ZVTM"}},OhSV:function(e,t,n){"use strict";function r(e,t){x.options.__h&&x.options.__h(E,e,P||t),P=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){var t=E.context[e.__c],n=r(C++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(E)),t.props.value):e.__}function i(){for(var e;e=D.shift();)if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(s),e.__H.__h=[]}catch(t){e.__H.__h=[],x.options.__e(t,e.__v)}}function l(e){var t=E,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),E=t}function s(e){var t=E;e.__c=e.__(),E=t}function a(e,t,n){if(3===e.nodeType){var r="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==a.options.trim){var o=0===t||t===n.length-1;if((!(r=r.match(/^[\s\n]+$/g)&&"all"!==a.options.trim?" ":r.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===a.options.trim||o?"":" "))||" "===r)&&n.length>1&&o)return null}return r}if(1!==e.nodeType)return null;var i=String(e.nodeName).toLowerCase();if("script"===i&&!a.options.allowScripts)return null;var l,s,c=a.h(i,function(e){var t=e&&e.length;if(!t)return null;for(var n={},r=0;r<t;r++){var o=e[r],i=o.name,l=o.value;"on"===i.substring(0,2)&&a.options.allowEvents&&(l=new Function(l)),n[i]=l}return n}(e.attributes),(s=(l=e.childNodes)&&Array.prototype.map.call(l,a).filter(z))&&s.length?s:null);return a.visitor&&a.visitor(c),c}function c(e){var t=(e.type||"").toLowerCase(),n=c.map;n&&n.hasOwnProperty(t)?(e.type=n[t],e.props=Object.keys(e.props||{}).reduce((function(t,n){var r;return t[(r=n,r.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=e.props[n],t}),{})):e.type=t.replace(/[^a-z0-9-]/i,"")}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e){return null!=e}function p(e,t){for(var n in t)e[n]=t[n];return e}function _(e,t){var n=p({},e);for(var r in t)t.hasOwnProperty(r)&&(n[r]=e[r]&&t[r]&&"object"==typeof e[r]&&"object"==typeof t[r]?_(e[r],t[r]):e[r]||t[r]);return n}function h(e){var t=e.scope,n=e.mark,r=e.definition,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["scope","mark","definition"]),l=i,s=p({},o($).intl||{});return t&&(s.scope=t),r&&(s.dictionary=_(s.dictionary||{},r)),(n||"undefined"!=typeof location&&String(location).match(q))&&(s.mark=!0),Object(x.h)($.Provider,{value:{intl:s}},l.children)}function f(e,t){function n(n){return Object(x.h)(h,t||{},Object(x.h)(e,n))}return arguments.length<2?(t=e,function(e){return f(e,t)}):(n.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},n)}function m(e,t,n,r){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,v.bind(null,t||B,n,r))}function v(e,t,n,r,o){for(var i=o.split("."),l=e,s=0;s<i.length;s++){if(null==(l=l[i[s]]))return"";if(l&&l.type===y)return g(l.props.id,t,n,l.props.fields,l.props.plural,l.props.fallback)}return"string"==typeof l&&l.match(/\{\{/)&&(l=m(l,e)),l}function g(e,t,n,r,o,i){t&&(e=t+"."+e);var l=n&&F(n,e);return(o||0===o)&&l&&"object"==typeof l&&(l=l.splice?l[o]||l[0]:0===o&&d(l.none||l.zero)?l.none||l.zero:1===o&&d(l.one||l.singular)?l.one||l.singular:l.some||l.many||l.plural||l.other||l),l&&m(l,r,t,n)||i||null}function b(e){var t=e.value,n=e.id,r=o($).intl;if(r&&r.mark){var i="dictionary"+(r&&r.scope?"."+r.scope:"")+"."+n;return Object(x.h)("mark",{style:{background:t?F(r,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:n},t)}return t}function y(e){var t=e.id,n=e.children,r=e.plural,i=e.fields,l=o($).intl,s=g(t,l&&l.scope,l&&l.dictionary,i,r,n);return Object(x.h)(b,{id:t,value:s})}function O(e,t,n){var r={};for(var o in t=t||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var t={},n=0;n<e.length;n++){var r=e[n].trim();r&&(t[r.split(".").pop()]=r)}return t}return e}(e))if(e.hasOwnProperty(o)&&e[o]){var i=e[o];n||"string"!=typeof i?i.type===y&&(i=p({fallback:i.props.children},i.props),r[o]=g(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):r[o]=g(i,t.scope,t.dictionary)}return r}function k(e){var t=e.children,n=o($).intl;return t&&t.length?t.map((function(e){return Object(x.cloneElement)(e,O(e.props,n,!0))})):t&&Object(x.cloneElement)(t,O(t.props,n,!0))}function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}function w(e){var t=e.html,n=e.id,r=j(e,["html","id"]);return Object(x.h)(b,{id:n,value:t?"string"==typeof t?Object(x.h)(W,u({},{type:"html",trim:!1},r,{markup:t})):Object(x.h)("span",null,t):t})}n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return g}));var C,E,S,x=n("hosL"),P=0,D=[],A=x.options.__b,T=x.options.__r,L=x.options.diffed,I=x.options.__c,N=x.options.unmount;x.options.__b=function(e){E=null,A&&A(e)},x.options.__r=function(e){T&&T(e),C=0;var t=(E=e.__c).__H;t&&(t.__h.forEach(l),t.__h.forEach(s),t.__h=[])},x.options.diffed=function(e){L&&L(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==D.push(t)&&S===x.options.requestAnimationFrame||((S=x.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),M&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);M&&(t=requestAnimationFrame(n))})(i)),E=null},x.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||s(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],x.options.__e(n,e.__v)}})),I&&I(e,t)},x.options.unmount=function(e){N&&N(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{l(e)}catch(e){t=e}})),t&&x.options.__e(t,n.__v))};var U,V,M="function"==typeof requestAnimationFrame,F=function(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},H={},z=function(e){return e},R={},W=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.setReviver=function(e){V=e},t.prototype.shouldComponentUpdate=function(e){var t=this.props;return e.wrap!==t.wrap||e.type!==t.type||e.markup!==t.markup},t.prototype.setComponents=function(e){if(this.map={},e)for(var t in e)if(e.hasOwnProperty(t)){var n=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=e[t]}},t.prototype.render=function(e){var t=e.wrap;void 0===t&&(t=!0);var n,r=e.type,o=e.markup,i=e.components,l=e.reviver,s=e.onError,u=e["allow-scripts"],d=e["allow-events"],p=e.trim,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),h=l||this.reviver||this.constructor.prototype.reviver||V||x.h;this.setComponents(i);var f={allowScripts:u,allowEvents:d,trim:p};try{n=function(e,t,n,r,o){var i=function(e,t){var n,r,o,i,l="html"===t?"text/html":"application/xml";"html"===t?(i="body",o="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(i="xml",o='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{n=(new DOMParser).parseFromString(o,l)}catch(e){r=e}if(n||"html"!==t||((n=U||(U=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),n.write(o),n.close()),n){var s=n.getElementsByTagName(i)[0],a=s.firstChild;return e&&!a&&(s.error="Document parse failed."),a&&"parsererror"===String(a.nodeName).toLowerCase()&&(a.removeChild(a.firstChild),a.removeChild(a.lastChild),s.error=a.textContent||a.nodeValue||r||"Unknown error",s.removeChild(a)),s}}(e,t);if(i&&i.error)throw new Error(i.error);var l=i&&i.body||i;c.map=r||R;var s=l&&function(e,t,n,r){return a.visitor=t,a.h=n,a.options=r||H,a(e)}(l,c,n,o);return c.map=null,s&&s.props&&s.props.children||null}(o,r,h,this.map,f)}catch(e){s?s({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===t)return n||null;var m=_.hasOwnProperty("className")?"className":"class",v=_[m];return v?v.splice?v.splice(0,0,"markup"):"string"==typeof v?_[m]+=" markup":"object"==typeof v&&(v.markup=!0):_[m]="markup",h("div",_,n||null)},t}(x.Component),$=Object(x.createContext)({intl:{}}),q=/[?&#]intl=show/,B={};f.intl=f,f.IntlContext=$,f.IntlProvider=h,f.Text=y,f.MarkupText=function(e){var t=e.id,n=e.fields,r=e.plural,o=e.children,i=j(e,["id","fields","plural","children"]);return Object(x.h)(k,null,Object(x.h)(w,u({},{html:Object(x.h)(y,{id:t,fields:n,plural:r,children:o}),id:t},i)))},f.Localizer=k,f.withText=function(e){return function(t){function n(n){var r=o($).intl,i=O("function"==typeof e?e(n,{intl:r}):e,r);return Object(x.h)(t,p(p({},n),i))}return n.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},n}},f.useText=function(e){var t=o($).intl;return O("function"==typeof e?e({intl:t}):e,t)},f.translate=g},"T+V2":function(e,t,n){function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}var o={"./ja.json":["IJWC",2]};r.keys=function(){return Object.keys(o)},r.id="T+V2",e.exports=r},dmYQ:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n("hosL"),o=n("OhSV"),i=n("/44/"),l=n("gIhm");class s extends r.Component{constructor(...e){var t,n,r;super(...e),r={isGapiLoaded:!1,tokenClient:null,accessToken:null,users:"",sendNotificationEmail:!0,role:l.b.reader,selectedDocument:null,selectedDocumentPermissions:null,result:null,batchLoading:!1,language:"",i18n:{}},(n="state")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentDidMount(){var e=this;if(localStorage.getItem("role")){const e=localStorage.getItem("role");this.setState({users:localStorage.getItem("users")||this.state.users,role:Object(l.d)(e)?e:this.state.role,sendNotificationEmail:"false"!==localStorage.getItem("sendNotificationEmail")})}for(const e of navigator.languages){const t=e.split("-")[0];if(Object(l.c)(t)){this.switchLanguage(t);break}}this.loadExternalScript("https://apis.google.com/js/api.js",(()=>{gapi.load("client:picker",(async function(){await gapi.client.init({}),await gapi.client.load("drive","v3"),e.setState({isGapiLoaded:!0})}))})),this.loadExternalScript("https://accounts.google.com/gsi/client",(()=>{this.setState({tokenClient:google.accounts.oauth2.initTokenClient({client_id:i.a.clientId,scope:"https://www.googleapis.com/auth/drive.file",prompt:"",callback:e=>{this.setState({accessToken:e.access_token},(()=>this.choose()))}})})}))}componentDidUpdate(){["users","role","sendNotificationEmail"].forEach((e=>{localStorage.setItem(e,String(this.state[e]))}))}loadExternalScript(e,t){const n=document.createElement("script");n.src=e,n.onload=t,document.body.appendChild(n)}authorizeAndChoose(){this.state.tokenClient&&this.state.tokenClient.requestAccessToken()}choose(){var e=this;this.state.accessToken&&(new google.picker.PickerBuilder).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setAppId(i.a.appId).setOAuthToken(this.state.accessToken).addView(new google.picker.DocsView).addView((new google.picker.DocsView).setEnableDrives(!0)).setDeveloperKey(i.a.developerKey).setCallback((async function(t){if(t.action===google.picker.Action.PICKED){const n=t.docs[0];try{const t=await gapi.client.drive.permissions.list({fileId:n.id,supportsAllDrives:!0,fields:"*"});e.setState({selectedDocument:n,selectedDocumentPermissions:t.result,result:null})}catch(e){alert(e.result.error.message),console.error(e)}}})).build().setVisible(!0)}batchInvite(){if(!this.state.selectedDocument||!this.validatedUsers.isValid)return;const e=Object(o.d)(this.state.sendNotificationEmail?"batchInvite.confirm.withEmail":"batchInvite.confirm.withoutEmail","",this.state.i18n,{count:this.validatedUsers.users.length,role:this.state.role},void 0,`Are you sure you want to invite ${this.validatedUsers.users.length} users as ${this.state.role} ${this.state.sendNotificationEmail?"with":"without"} sending notification email?`);if(!confirm(e))return;this.setState({batchLoading:!0});const t=gapi.client.newBatch();for(const e of this.validatedUsers.users)t.add(gapi.client.drive.permissions.create({fileId:this.state.selectedDocument.id,sendNotificationEmail:this.state.sendNotificationEmail,supportsAllDrives:!0,fields:"*",resource:{role:this.state.role,type:"user",emailAddress:e}}),{id:e});t.then((({result:e})=>{this.setState({result:e,batchLoading:!1})}))}async switchLanguage(e){if(Object(l.c)(e))if(e){const t=await n("T+V2")(`./${e}.json`);t.hasOwnProperty=()=>!0,this.setState({language:e,i18n:t})}else this.setState({language:e,i18n:{}})}get validatedUsers(){const e=this.state.users.split("\n").map((e=>e.trim())).filter((e=>e));if(0===e.length)return{isValid:!1,reason:Object(o.d)("validation.empty","",this.state.i18n,{},void 0,"Please specify at least one user.")};const t=e.find((e=>!e.includes("@")));return t?{isValid:!1,reason:Object(o.d)("validation.invalid","",this.state.i18n,{invalidUser:t},void 0,t+" is an invalid email address")}:{isValid:!0,users:e}}renderLoading(){return Object(r.h)("div",null,Object(r.h)("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"}),Object(r.h)(o.c,{id:"loading"},"Loading Google API..."))}renderAuthorize(){return Object(r.h)("button",{onClick:()=>this.authorizeAndChoose()},Object(r.h)(o.c,{id:"authorizeAndChooseADocument"},"Authorize and choose a document"))}renderChoose(){return Object(r.h)("button",{onClick:()=>this.choose()},Object(r.h)(o.c,{id:"chooseADocument"},"Choose a document"))}renderBatchInvite(){var t;if(this.state.selectedDocument&&this.state.selectedDocumentPermissions)return Object(r.h)(e,null,this.renderChoose(),Object(r.h)("div",{class:"selected-document"},Object(r.h)("h2",null,Object(r.h)("img",{src:this.state.selectedDocument.iconUrl}),Object(r.h)("a",{href:this.state.selectedDocument.url,target:"_blank"},this.state.selectedDocument.name)),Object(r.h)(o.c,{id:"batchInvite.lastEdited"},"Last edited"),":"," ",new Date(this.state.selectedDocument.lastEditedUtc).toLocaleString(this.state.language||void 0,{dateStyle:"full",timeStyle:"full"})),Object(r.h)("div",{class:"current-permissions"},Object(r.h)("h3",null,Object(r.h)(o.c,{id:"batchInvite.currentPermissions"},"Current permissions")),Object(r.h)("ul",null,null===(t=this.state.selectedDocumentPermissions.permissions)||void 0===t?void 0:t.map((e=>Object(r.h)("li",null,e.role,":",e.deleted?"[DELETED] ":"",Object(r.h)("img",{src:e.photoLink}),e.displayName||"(NO NAME)","  <",e.emailAddress||"(NO ADDRESS)",">"))))),Object(r.h)(o.b,null,Object(r.h)("textarea",{value:this.state.users,onInput:e=>this.setState({users:e.target.value}),placeholder:Object(r.h)(o.c,{id:"batchInvite.enterOneEmailPerLine"},"Enter one email address per line")})),Object(r.h)("div",{class:"validation-result"},this.validatedUsers.isValid?" ":this.validatedUsers.reason),Object(r.h)("div",{class:"wrapper-roles"},Object.values(l.b).map((e=>Object(r.h)("label",null,Object(r.h)("input",{type:"radio",checked:this.state.role===e,onClick:()=>this.setState({role:e})}),Object(r.h)("span",null,e))))),Object(r.h)("div",{class:"wrapper-send-notification-email"},Object(r.h)("label",null,Object(r.h)("input",{type:"checkbox",checked:this.state.sendNotificationEmail,onClick:()=>this.setState({sendNotificationEmail:!this.state.sendNotificationEmail})}),Object(r.h)(o.c,{id:"batchInvite.notifyPeople"},"Notify people (Send Notification Email)"))),Object(r.h)("button",{onClick:()=>this.batchInvite(),disabled:!this.validatedUsers.isValid||this.state.batchLoading},Object(r.h)(o.c,{id:"batchInvite.batchInvite"},"Batch invite")),this.state.batchLoading&&Object(r.h)("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif",class:"loading"}))}renderResult(){if(!this.state.result)return;const t=Object.values(this.state.result).flatMap((({result:e})=>!("error"in e)&&e.role!==this.state.role&&e.role?[e]:[]));return Object(r.h)(e,null,Object(r.h)("ul",null,Object.entries(this.state.result).map((([e,t])=>Object(r.h)("li",{class:"error"in t.result?"error":""},Object(r.h)("details",null,Object(r.h)("summary",null,e,": ",t.status," ",t.statusText,"error"in t.result&&" ["+t.result.error.message+"]"),Object(r.h)("pre",null,JSON.stringify(t.result,null,4))))))),t.length>0&&Object(r.h)("div",{class:"not-reflected"},Object(r.h)(o.c,{id:"notReflected1",fields:{role:this.state.role,count:t.length}},"Although you invited people as ",this.state.role,", ",t.length," people have different roles."," "),Object(r.h)("a",{href:"https://developers.google.com/drive/api/v3/manage-sharing#:~:text=Permissions%20can%20be%20granted,the%20file%20or%20folder.",target:"_blank"},Object(r.h)(o.c,{id:"notReflected2"},"This can be because they already had a more permissive role.")),Object(r.h)("ul",null,t.map((({displayName:e,emailAddress:t,role:n})=>Object(r.h)("li",null,n,": ",e," <",t,">"))))),this.renderChoose())}render(){return Object(r.h)(o.a,{definition:this.state.i18n},Object(r.h)("main",null,Object(r.h)("select",{value:this.state.language,onChange:e=>this.switchLanguage(e.target.value)},l.a.map((({id:e,name:t})=>Object(r.h)("option",{value:e},t)))),Object(r.h)("h1",null,"Google Docs Batch Invite"),Object(r.h)("p",null,Object(r.h)(o.c,{id:"appDescription"},"Share your Google Docs (and any files on Google Drive) with multiple users at once.")),Object(r.h)("p",null,"© 2022 Yusuke Kido [",Object(r.h)("a",{href:"https://github.com/kissge/google-docs-batch-invite"},"Source on GitHub"),"]"),this.state.tokenClient&&this.state.isGapiLoaded?this.state.accessToken?this.state.selectedDocument?this.state.result?this.renderResult():this.renderBatchInvite():this.renderChoose():this.renderAuthorize():this.renderLoading()))}}}).call(this,n("hosL").Fragment)},gIhm:function(e,t,n){"use strict";function r(e){return null!=e&&e in i}function o(e){return l.some((({id:t})=>t===e))}let i;n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),function(e){e.reader="reader",e.commenter="commenter",e.writer="writer",e.fileOrganizer="fileOrganizer",e.organizer="organizer",e.owner="owner"}(i||(i={}));const l=[{id:"",name:"English"},{id:"ja",name:"日本語"}]},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,s={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return l(e,s,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++I:o};return null==o&&null!=L.vnode&&L.vnode(i),i}function s(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function u(e,t){if(null==t)return e.__?u(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?u(e):null}function d(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return d(e)}}function p(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!_.__r++||M!==L.debounceRendering)&&((M=L.debounceRendering)||V)(_)}function _(){for(var e;_.__r=U.length;)e=U.sort((function(e,t){return e.__v.__b-t.__v.__b})),U=[],e.some((function(e){var t,n,o,i,l,s;e.__d&&(l=(i=(t=e).__v).__e,(s=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,k(s,i,o,t.__n,void 0!==s.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?u(i):l,i.__h),j(n,i),i.__e!=l&&d(i)))}))}function h(e,t,n,r,o,i,s,c,d,p){var _,h,m,g,b,y,O,j=r&&r.__k||z,w=j.length;for(n.__k=[],_=0;_<t.length;_++)if(null!=(g=n.__k[_]=null==(g=t[_])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?l(null,g,null,null,g):Array.isArray(g)?l(a,{children:g},null,null,null):g.__b>0?l(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=j[_])||m&&g.key==m.key&&g.type===m.type)j[_]=void 0;else for(h=0;h<w;h++){if((m=j[h])&&g.key==m.key&&g.type===m.type){j[h]=void 0;break}m=null}k(e,g,m=m||H,o,i,s,c,d,p),b=g.__e,(h=g.ref)&&m.ref!=h&&(O||(O=[]),m.ref&&O.push(m.ref,null,g),O.push(h,g.__c||b,g)),null!=b?(null==y&&(y=b),"function"==typeof g.type&&g.__k===m.__k?g.__d=d=f(g,d,e):d=v(e,g,m,j,b,d),"function"==typeof n.type&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=e&&(d=u(m))}for(n.__e=y,_=w;_--;)null!=j[_]&&("function"==typeof n.type&&null!=j[_].__e&&j[_].__e==n.__d&&(n.__d=u(r,_+1)),E(j[_],j[_]));if(O)for(_=0;_<O.length;_++)C(O[_],O[++_],O[++_])}function f(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?f(r,t,n):v(n,r,r,o,r.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function v(e,t,n,r,o,i){var l,s,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(s=i,a=0;(s=s.nextSibling)&&a<r.length;a+=2)if(s==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function g(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||R.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||g(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||g(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:y,i):e.removeEventListener(t,i?O:y,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function y(e){this.l[e.type+!1](L.event?L.event(e):e)}function O(e){this.l[e.type+!0](L.event?L.event(e):e)}function k(e,t,n,o,i,l,s,u,d){var p,_,f,m,v,g,b,y,O,k,j,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(d=n.__h,u=t.__e=n.__e,t.__h=null,l=[u]),(p=L.__b)&&p(t);try{e:if("function"==typeof C){if(y=t.props,O=(p=C.contextType)&&o[p.__c],k=p?O?O.props.value:p.__:o,n.__c?b=(_=t.__c=n.__c).__=_.__E:("prototype"in C&&C.prototype.render?t.__c=_=new C(y,k):(t.__c=_=new c(y,k),_.constructor=C,_.render=S),O&&O.sub(_),_.props=y,_.state||(_.state={}),_.context=k,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=C.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,C.getDerivedStateFromProps(y,_.__s))),m=_.props,v=_.state,f)null==C.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==C.getDerivedStateFromProps&&y!==m&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,k),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,k)||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),_.__h.length&&s.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,k),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(m,v,g)}))}_.context=k,_.props=y,_.state=_.__s,(p=L.__r)&&p(t),_.__d=!1,_.__v=t,_.__P=e,p=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(g=_.getSnapshotBeforeUpdate(m,v)),j=null!=p&&p.type===a&&null==p.key?p.props.children:p,h(e,Array.isArray(j)?j:[j],t,n,o,i,l,s,u,d),_.base=t.__e,t.__h=null,_.__h.length&&s.push(_),b&&(_.__E=_.__=null),_.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=w(n.__e,t,n,o,i,l,s,d);(p=L.diffed)&&p(t)}catch(e){t.__v=null,(d||null!=l)&&(t.__e=u,t.__h=!!d,l[l.indexOf(u)]=null),L.__e(e,t,n)}}function j(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function w(e,t,n,r,i,l,s,a){var c,d,p,_=n.props,f=t.props,m=t.type,v=0;if("svg"===m&&(i=!0),null!=l)for(;v<l.length;v++)if((c=l[v])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){e=c,l[v]=null;break}if(null==e){if(null===m)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),l=null,a=!1}if(null===m)_===f||a&&e.data===f||(e.data=f);else{if(l=l&&T.call(e.childNodes),d=(_=n.props||H).dangerouslySetInnerHTML,p=f.dangerouslySetInnerHTML,!a){if(null!=l)for(_={},v=0;v<e.attributes.length;v++)_[e.attributes[v].name]=e.attributes[v].value;(p||d)&&(p&&(d&&p.__html==d.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,f,_,i,a),p)t.__k=[];else if(v=t.props.children,h(e,Array.isArray(v)?v:[v],t,n,r,i&&"foreignObject"!==m,l,s,l?l[0]:n.__k&&u(n,0),a),null!=l)for(v=l.length;v--;)null!=l[v]&&o(l[v]);a||("value"in f&&void 0!==(v=f.value)&&(v!==e.value||"progress"===m&&!v||"option"===m&&v!==_.value)&&b(e,"value",v,_.value,!1),"checked"in f&&void 0!==(v=f.checked)&&v!==e.checked&&b(e,"checked",v,_.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function E(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&E(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function S(e,t,n){return this.constructor(e,n)}function x(e,t,n){var r,o,l;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],k(t,e=(!r&&n||t).__k=i(a,null,[e]),o||H,H,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),j(l,e)}function P(e,t){x(e,t,P)}function D(e,t,n){var o,i,s,a=r({},e.props);for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:a[s]=t[s];return arguments.length>2&&(a.children=arguments.length>3?T.call(arguments,2):n),l(e.type,a,o||e.key,i||e.ref,null)}function A(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return x})),n.d(t,"hydrate",(function(){return P})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return s})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return D})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return m})),n.d(t,"options",(function(){return L}));var T,L,I,N,U,V,M,F,H={},z=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=z.slice,L={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},I=0,N=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=a,U=[],V="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,F=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,s=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw-esm.js"),"function"==typeof s(n("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=s(n("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const u={preRenderData:r},d=r.url?a(r.url):"";(l&&d===a(location.pathname)?l:i)(o(t,{CLI_DATA:u}),document.body,e)};0,t()}},qVkA:function(e,t,n){"use strict";n.r(t);var r=n("dmYQ");t.default=r.a}});
//# sourceMappingURL=bundle.1d4bd.esm.js.map