!function(e){function t(t){for(var n,r,i=t[0],l=t[1],u=0,c=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0};n.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=function(e){return n.p+""+({}[e]||e)+".chunk."+{2:"80fac"}[e]+".js"}(e);var a=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/google-docs-batch-invite/",n.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=l;n(n.s="mdyV")}({"/44/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={clientId:"771607978696-9p75ppslrr713sdarv59kvidlaoi7tc4.apps.googleusercontent.com",appId:"771607978696",developerKey:"AIzaSyAkGbtRkdo8zFJtrde5qs87EVd-Fy8ZVTM"}},OhSV:function(e,t,n){"use strict";function r(e,t){A.options.__h&&A.options.__h(P,e,D||t),D=0;var n=P.__H||(P.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){var t=P.context[e.__c],n=r(E++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(P)),t.props.value):e.__}function i(){for(var e;e=T.shift();)if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(u),e.__H.__h=[]}catch(t){e.__H.__h=[],A.options.__e(t,e.__v)}}function l(e){var t=P,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),P=t}function u(e){var t=P;e.__c=e.__(),P=t}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t,n){if(3===e.nodeType){var r="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==c.options.trim){var o=0===t||t===n.length-1;if((!(r=r.match(/^[\s\n]+$/g)&&"all"!==c.options.trim?" ":r.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===c.options.trim||o?"":" "))||" "===r)&&n.length>1&&o)return null}return r}if(1!==e.nodeType)return null;var i=String(e.nodeName).toLowerCase();if("script"===i&&!c.options.allowScripts)return null;var l,u,a=c.h(i,function(e){var t=e&&e.length;if(!t)return null;for(var n={},r=0;r<t;r++){var o=e[r],i=o.name,l=o.value;"on"===i.substring(0,2)&&c.options.allowEvents&&(l=new Function(l)),n[i]=l}return n}(e.attributes),(u=(l=e.childNodes)&&Array.prototype.map.call(l,c).filter(W))&&u.length?u:null);return c.visitor&&c.visitor(a),a}function s(e){var t=(e.type||"").toLowerCase(),n=s.map;n&&n.hasOwnProperty(t)?(e.type=n[t],e.props=Object.keys(e.props||{}).reduce((function(t,n){var r;return t[(r=n,r.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=e.props[n],t}),{})):e.type=t.replace(/[^a-z0-9-]/i,"")}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e){return null!=e}function h(e,t){for(var n in t)e[n]=t[n];return e}function _(e,t){var n=h({},e);for(var r in t)t.hasOwnProperty(r)&&(n[r]=e[r]&&t[r]&&"object"===p(e[r])&&"object"===p(t[r])?_(e[r],t[r]):e[r]||t[r]);return n}function v(e){var t=e.scope,n=e.mark,r=e.definition,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["scope","mark","definition"]),l=i,u=h({},o(G).intl||{});return t&&(u.scope=t),r&&(u.dictionary=_(u.dictionary||{},r)),(n||"undefined"!=typeof location&&String(location).match($))&&(u.mark=!0),Object(A.h)(G.Provider,{value:{intl:u}},l.children)}function m(e,t){function n(n){return Object(A.h)(v,t||{},Object(A.h)(e,n))}return arguments.length<2?(t=e,function(e){return m(e,t)}):(n.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},n)}function y(e,t,n,r){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,b.bind(null,t||J,n,r))}function b(e,t,n,r,o){for(var i=o.split("."),l=e,u=0;u<i.length;u++){if(null==(l=l[i[u]]))return"";if(l&&l.type===k)return g(l.props.id,t,n,l.props.fields,l.props.plural,l.props.fallback)}return"string"==typeof l&&l.match(/\{\{/)&&(l=y(l,e)),l}function g(e,t,n,r,o,i){t&&(e=t+"."+e);var l=n&&H(n,e);return(o||0===o)&&l&&"object"===p(l)&&(l=l.splice?l[o]||l[0]:0===o&&d(l.none||l.zero)?l.none||l.zero:1===o&&d(l.one||l.singular)?l.one||l.singular:l.some||l.many||l.plural||l.other||l),l&&y(l,r,t,n)||i||null}function O(e){var t=e.value,n=e.id,r=o(G).intl;if(r&&r.mark){var i="dictionary"+(r&&r.scope?"."+r.scope:"")+"."+n;return Object(A.h)("mark",{style:{background:t?H(r,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:n},t)}return t}function k(e){var t=e.id,n=e.children,r=e.plural,i=e.fields,l=o(G).intl,u=g(t,l&&l.scope,l&&l.dictionary,i,r,n);return Object(A.h)(O,{id:t,value:u})}function j(e,t,n){var r={};for(var o in t=t||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var t={},n=0;n<e.length;n++){var r=e[n].trim();r&&(t[r.split(".").pop()]=r)}return t}return e}(e))if(e.hasOwnProperty(o)&&e[o]){var i=e[o];n||"string"!=typeof i?i.type===k&&(i=h({fallback:i.props.children},i.props),r[o]=g(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):r[o]=g(i,t.scope,t.dictionary)}return r}function w(e){var t=e.children,n=o(G).intl;return t&&t.length?t.map((function(e){return Object(A.cloneElement)(e,j(e.props,n,!0))})):t&&Object(A.cloneElement)(t,j(t.props,n,!0))}function S(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}function C(e){var t=e.html,n=e.id,r=S(e,["html","id"]);return Object(A.h)(O,{id:n,value:t?"string"==typeof t?Object(A.h)(q,f({},{type:"html",trim:!1},r,{markup:t})):Object(A.h)("span",null,t):t})}n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return g}));var E,P,x,A=n("hosL"),D=0,T=[],I=A.options.__b,L=A.options.__r,N=A.options.diffed,U=A.options.__c,V=A.options.unmount;A.options.__b=function(e){P=null,I&&I(e)},A.options.__r=function(e){L&&L(e),E=0;var t=(P=e.__c).__H;t&&(t.__h.forEach(l),t.__h.forEach(u),t.__h=[])},A.options.diffed=function(e){N&&N(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==T.push(t)&&x===A.options.requestAnimationFrame||((x=A.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),F&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);F&&(t=requestAnimationFrame(n))})(i)),P=null},A.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],A.options.__e(n,e.__v)}})),U&&U(e,t)},A.options.unmount=function(e){V&&V(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{l(e)}catch(e){t=e}})),t&&A.options.__e(t,n.__v))};var M,R,F="function"==typeof requestAnimationFrame,H=function(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},z={},W=function(e){return e},B={},q=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.setReviver=function(e){R=e},t.prototype.shouldComponentUpdate=function(e){var t=this.props;return e.wrap!==t.wrap||e.type!==t.type||e.markup!==t.markup},t.prototype.setComponents=function(e){if(this.map={},e)for(var t in e)if(e.hasOwnProperty(t)){var n=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=e[t]}},t.prototype.render=function(e){var t=e.wrap;void 0===t&&(t=!0);var n,r=e.type,o=e.markup,i=e.components,l=e.reviver,u=e.onError,f=e["allow-scripts"],p=e["allow-events"],d=e.trim,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),_=l||this.reviver||this.constructor.prototype.reviver||R||A.h;this.setComponents(i);var v={allowScripts:f,allowEvents:p,trim:d};try{n=function(e,t,n,r,o){var i=function(e,t){var n,r,o,i,l="html"===t?"text/html":"application/xml";"html"===t?(i="body",o="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(i="xml",o='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{n=(new DOMParser).parseFromString(o,l)}catch(e){r=e}if(n||"html"!==t||((n=M||(M=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),n.write(o),n.close()),n){var u=n.getElementsByTagName(i)[0],a=u.firstChild;return e&&!a&&(u.error="Document parse failed."),a&&"parsererror"===String(a.nodeName).toLowerCase()&&(a.removeChild(a.firstChild),a.removeChild(a.lastChild),u.error=a.textContent||a.nodeValue||r||"Unknown error",u.removeChild(a)),u}}(e,t);if(i&&i.error)throw new Error(i.error);var l=i&&i.body||i;s.map=r||B;var u=l&&function(e,t,n,r){return c.visitor=t,c.h=n,c.options=r||z,c(e)}(l,s,n,o);return s.map=null,u&&u.props&&u.props.children||null}(o,r,_,this.map,v)}catch(e){u?u({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===t)return n||null;var m=h.hasOwnProperty("className")?"className":"class",y=h[m];return y?y.splice?y.splice(0,0,"markup"):"string"==typeof y?h[m]+=" markup":"object"==a(y)&&(y.markup=!0):h[m]="markup",_("div",h,n||null)},t}(A.Component),G=Object(A.createContext)({intl:{}}),$=/[?&#]intl=show/,J={};m.intl=m,m.IntlContext=G,m.IntlProvider=v,m.Text=k,m.MarkupText=function(e){var t=e.id,n=e.fields,r=e.plural,o=e.children,i=S(e,["id","fields","plural","children"]);return Object(A.h)(w,null,Object(A.h)(C,f({},{html:Object(A.h)(k,{id:t,fields:n,plural:r,children:o}),id:t},i)))},m.Localizer=w,m.withText=function(e){return function(t){function n(n){var r=o(G).intl,i=j("function"==typeof e?e(n,{intl:r}):e,r);return Object(A.h)(t,h(h({},n),i))}return n.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},n}},m.useText=function(e){var t=o(G).intl;return j("function"==typeof e?e({intl:t}):e,t)},m.translate=g},"T+V2":function(e,t,n){function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}var o={"./ja.json":["IJWC",2]};r.keys=function(){return Object.keys(o)},r.id="T+V2",e.exports=r},dmYQ:function(e,t,n){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t,n,r,o,i,l){try{var u=e[i](l),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){function l(e){i(a,r,o,l,u,"next",e)}function u(e){i(a,r,o,l,u,"throw",e)}var a=e.apply(t,n);l(void 0)}))}}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return O}));var m=n("hosL"),y=n("OhSV"),b=n("/44/"),g=n("gIhm"),O=function(t){function r(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(h(e=_.call.apply(_,[this].concat(n))),"state",{isGapiLoaded:!1,tokenClient:null,accessToken:null,users:"",sendNotificationEmail:!0,role:g.b.reader,selectedDocument:null,selectedDocumentPermissions:null,result:null,batchLoading:!1,language:"",i18n:{}}),e}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(r,t);var i,a,c,d,_=p(r);return i=r,a=[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("role")){var t=localStorage.getItem("role");this.setState({users:localStorage.getItem("users")||this.state.users,role:Object(g.d)(t)?t:this.state.role,sendNotificationEmail:"false"!==localStorage.getItem("sendNotificationEmail")})}var n,r=u(navigator.languages);try{for(r.s();!(n=r.n()).done;){var o=n.value.split("-")[0];if(Object(g.c)(o)){this.switchLanguage(o);break}}}catch(e){r.e(e)}finally{r.f()}this.loadExternalScript("https://apis.google.com/js/api.js",(function(){gapi.load("client:picker",l((function*(){yield gapi.client.init({}),yield gapi.client.load("drive","v3"),e.setState({isGapiLoaded:!0})})))})),this.loadExternalScript("https://accounts.google.com/gsi/client",(function(){e.setState({tokenClient:google.accounts.oauth2.initTokenClient({client_id:b.a.clientId,scope:"https://www.googleapis.com/auth/drive.file",prompt:"",callback:function(t){e.setState({accessToken:t.access_token},(function(){return e.choose()}))}})})}))}},{key:"componentDidUpdate",value:function(){var e=this;["users","role","sendNotificationEmail"].forEach((function(t){localStorage.setItem(t,String(e.state[t]))}))}},{key:"loadExternalScript",value:function(e,t){var n=document.createElement("script");n.src=e,n.onload=t,document.body.appendChild(n)}},{key:"authorizeAndChoose",value:function(){this.state.tokenClient&&this.state.tokenClient.requestAccessToken()}},{key:"choose",value:function(){var e=this;this.state.accessToken&&(new google.picker.PickerBuilder).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setAppId(b.a.appId).setOAuthToken(this.state.accessToken).addView(new google.picker.DocsView).addView((new google.picker.DocsView).setEnableDrives(!0)).setDeveloperKey(b.a.developerKey).setCallback(function(){var t=l((function*(t){if(t.action===google.picker.Action.PICKED){var n=t.docs[0];try{var r=yield gapi.client.drive.permissions.list({fileId:n.id,supportsAllDrives:!0,fields:"*"});e.setState({selectedDocument:n,selectedDocumentPermissions:r.result,result:null})}catch(e){alert(e.result.error.message),console.error(e)}}}));return function(e){return t.apply(this,arguments)}}()).build().setVisible(!0)}},{key:"batchInvite",value:function(){var e=this;if(this.state.selectedDocument&&this.validatedUsers.isValid){var t=Object(y.d)(this.state.sendNotificationEmail?"batchInvite.confirm.withEmail":"batchInvite.confirm.withoutEmail","",this.state.i18n,{count:this.validatedUsers.users.length,role:this.state.role},void 0,"Are you sure you want to invite ".concat(this.validatedUsers.users.length," users as ").concat(this.state.role," ").concat(this.state.sendNotificationEmail?"with":"without"," sending notification email?"));if(confirm(t)){this.setState({batchLoading:!0});var n,r=gapi.client.newBatch(),o=u(this.validatedUsers.users);try{for(o.s();!(n=o.n()).done;){var i=n.value;r.add(gapi.client.drive.permissions.create({fileId:this.state.selectedDocument.id,sendNotificationEmail:this.state.sendNotificationEmail,supportsAllDrives:!0,fields:"*",resource:{role:this.state.role,type:"user",emailAddress:i}}),{id:i})}}catch(e){o.e(e)}finally{o.f()}r.then((function(t){e.setState({result:t.result,batchLoading:!1})}))}}}},{key:"switchLanguage",value:(d=l((function*(e){if(Object(g.c)(e))if(e){var t=yield n("T+V2")("./".concat(e,".json"));t.hasOwnProperty=function(){return!0},this.setState({language:e,i18n:t})}else this.setState({language:e,i18n:{}})})),function(e){return d.apply(this,arguments)})},{key:"validatedUsers",get:function(){var e=this.state.users.split("\n").map((function(e){return e.trim()})).filter((function(e){return e}));if(0===e.length)return{isValid:!1,reason:Object(y.d)("validation.empty","",this.state.i18n,{},void 0,"Please specify at least one user.")};var t=e.find((function(e){return!e.includes("@")}));return t?{isValid:!1,reason:Object(y.d)("validation.invalid","",this.state.i18n,{invalidUser:t},void 0,t+" is an invalid email address")}:{isValid:!0,users:e}}},{key:"renderLoading",value:function(){return Object(m.h)("div",null,Object(m.h)("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"}),Object(m.h)(y.c,{id:"loading"},"Loading Google API..."))}},{key:"renderAuthorize",value:function(){var e=this;return Object(m.h)("button",{onClick:function(){return e.authorizeAndChoose()}},Object(m.h)(y.c,{id:"authorizeAndChooseADocument"},"Authorize and choose a document"))}},{key:"renderChoose",value:function(){var e=this;return Object(m.h)("button",{onClick:function(){return e.choose()}},Object(m.h)(y.c,{id:"chooseADocument"},"Choose a document"))}},{key:"renderBatchInvite",value:function(){var t,n=this;if(this.state.selectedDocument&&this.state.selectedDocumentPermissions)return Object(m.h)(e,null,this.renderChoose(),Object(m.h)("div",{class:"selected-document"},Object(m.h)("h2",null,Object(m.h)("img",{src:this.state.selectedDocument.iconUrl}),Object(m.h)("a",{href:this.state.selectedDocument.url,target:"_blank"},this.state.selectedDocument.name)),Object(m.h)(y.c,{id:"batchInvite.lastEdited"},"Last edited"),":"," ",new Date(this.state.selectedDocument.lastEditedUtc).toLocaleString(this.state.language||void 0,{dateStyle:"full",timeStyle:"full"})),Object(m.h)("div",{class:"current-permissions"},Object(m.h)("h3",null,Object(m.h)(y.c,{id:"batchInvite.currentPermissions"},"Current permissions")),Object(m.h)("ul",null,null===(t=this.state.selectedDocumentPermissions.permissions)||void 0===t?void 0:t.map((function(e){return Object(m.h)("li",null,e.role,":",e.deleted?"[DELETED] ":"",Object(m.h)("img",{src:e.photoLink}),e.displayName||"(NO NAME)","  <",e.emailAddress||"(NO ADDRESS)",">")})))),Object(m.h)(y.b,null,Object(m.h)("textarea",{value:this.state.users,onInput:function(e){return n.setState({users:e.target.value})},placeholder:Object(m.h)(y.c,{id:"batchInvite.enterOneEmailPerLine"},"Enter one email address per line")})),Object(m.h)("div",{class:"validation-result"},this.validatedUsers.isValid?" ":this.validatedUsers.reason),Object(m.h)("div",{class:"wrapper-roles"},Object.values(g.b).map((function(e){return Object(m.h)("label",null,Object(m.h)("input",{type:"radio",checked:n.state.role===e,onClick:function(){return n.setState({role:e})}}),Object(m.h)("span",null,e))}))),Object(m.h)("div",{class:"wrapper-send-notification-email"},Object(m.h)("label",null,Object(m.h)("input",{type:"checkbox",checked:this.state.sendNotificationEmail,onClick:function(){return n.setState({sendNotificationEmail:!n.state.sendNotificationEmail})}}),Object(m.h)(y.c,{id:"batchInvite.notifyPeople"},"Notify people (Send Notification Email)"))),Object(m.h)("button",{onClick:function(){return n.batchInvite()},disabled:!this.validatedUsers.isValid||this.state.batchLoading},Object(m.h)(y.c,{id:"batchInvite.batchInvite"},"Batch invite")),this.state.batchLoading&&Object(m.h)("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif",class:"loading"}))}},{key:"renderResult",value:function(){var t=this;if(this.state.result){var n=Object.values(this.state.result).flatMap((function(e){var n=e.result;return!("error"in n)&&n.role!==t.state.role&&n.role?[n]:[]}));return Object(m.h)(e,null,Object(m.h)("ul",null,Object.entries(this.state.result).map((function(e){var t=o(e,2),n=t[0],r=t[1];return Object(m.h)("li",{class:"error"in r.result?"error":""},Object(m.h)("details",null,Object(m.h)("summary",null,n,": ",r.status," ",r.statusText,"error"in r.result&&" ["+r.result.error.message+"]"),Object(m.h)("pre",null,JSON.stringify(r.result,null,4))))}))),n.length>0&&Object(m.h)("div",{class:"not-reflected"},Object(m.h)(y.c,{id:"notReflected1",fields:{role:this.state.role,count:n.length}},"Although you invited people as ",this.state.role,", ",n.length," people have different roles."," "),Object(m.h)("a",{href:"https://developers.google.com/drive/api/v3/manage-sharing#:~:text=Permissions%20can%20be%20granted,the%20file%20or%20folder.",target:"_blank"},Object(m.h)(y.c,{id:"notReflected2"},"This can be because they already had a more permissive role.")),Object(m.h)("ul",null,n.map((function(e){var t=e.displayName,n=e.emailAddress,r=e.role;return Object(m.h)("li",null,r,": ",t," <",n,">")})))),this.renderChoose())}}},{key:"render",value:function(){var e=this;return Object(m.h)(y.a,{definition:this.state.i18n},Object(m.h)("main",null,Object(m.h)("select",{value:this.state.language,onChange:function(t){return e.switchLanguage(t.target.value)}},g.a.map((function(e){var t=e.id,n=e.name;return Object(m.h)("option",{value:t},n)}))),Object(m.h)("h1",null,"Google Docs Batch Invite"),Object(m.h)("p",null,Object(m.h)(y.c,{id:"appDescription"},"Share your Google Docs (and any files on Google Drive) with multiple users at once.")),Object(m.h)("p",null,"© 2022 Yusuke Kido [",Object(m.h)("a",{href:"https://github.com/kissge/google-docs-batch-invite"},"Source on GitHub"),"]"),this.state.tokenClient&&this.state.isGapiLoaded?this.state.accessToken?this.state.selectedDocument?this.state.result?this.renderResult():this.renderBatchInvite():this.renderChoose():this.renderAuthorize():this.renderLoading()))}}],a&&s(i.prototype,a),c&&s(i,c),Object.defineProperty(i,"prototype",{writable:!1}),r}(m.Component)}).call(this,n("hosL").Fragment)},gIhm:function(e,t,n){"use strict";function r(e){return null!=e&&e in i}function o(e){return l.some((function(t){return t.id===e}))}var i;n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),function(e){e.reader="reader",e.commenter="commenter",e.writer="writer",e.fileOrganizer="fileOrganizer",e.organizer="organizer",e.owner="owner"}(i||(i={}));var l=[{id:"",name:"English"},{id:"ja",name:"日本語"}]},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=I.vnode&&I.vnode(i),i}function u(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function p(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!d.__r++||M!==I.debounceRendering)&&((M=I.debounceRendering)||V)(d)}function d(){for(var e;d.__r=U.length;)e=U.sort((function(e,t){return e.__v.__b-t.__v.__b})),U=[],e.some((function(e){var t,n,o,i,l,u;e.__d&&(l=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,k(u,i,o,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?s(i):l,i.__h),j(n,i),i.__e!=l&&f(i)))}))}function h(e,t,n,r,o,i,u,c,f,p){var d,h,v,y,b,g,O,j=r&&r.__k||H,w=j.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?l(null,y,null,null,y):Array.isArray(y)?l(a,{children:y},null,null,null):y.__b>0?l(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=j[d])||v&&y.key==v.key&&y.type===v.type)j[d]=void 0;else for(h=0;h<w;h++){if((v=j[h])&&y.key==v.key&&y.type===v.type){j[h]=void 0;break}v=null}k(e,y,v=v||F,o,i,u,c,f,p),b=y.__e,(h=y.ref)&&v.ref!=h&&(O||(O=[]),v.ref&&O.push(v.ref,null,y),O.push(h,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=f=_(y,f,e):f=m(e,y,v,j,b,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}for(n.__e=g,d=w;d--;)null!=j[d]&&("function"==typeof n.type&&null!=j[d].__e&&j[d].__e==n.__d&&(n.__d=s(r,d+1)),C(j[d],j[d]));if(O)for(d=0;d<O.length;d++)S(O[d],O[++d],O[++d])}function _(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?_(r,t,n):m(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i){var l,u,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||z.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:g,i):e.removeEventListener(t,i?O:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](I.event?I.event(e):e)}function O(e){this.l[e.type+!0](I.event?I.event(e):e)}function k(e,t,n,o,i,l,u,s,f){var p,d,_,v,m,y,b,g,O,k,j,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,s=t.__e=n.__e,t.__h=null,l=[s]),(p=I.__b)&&p(t);try{e:if("function"==typeof S){if(g=t.props,O=(p=S.contextType)&&o[p.__c],k=p?O?O.props.value:p.__:o,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?t.__c=d=new S(g,k):(t.__c=d=new c(g,k),d.constructor=S,d.render=E),O&&O.sub(d),d.props=g,d.state||(d.state={}),d.context=k,d.__n=o,_=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,S.getDerivedStateFromProps(g,d.__s))),v=d.props,m=d.state,_)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,k)||t.__v===n.__v){d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,y)}))}d.context=k,d.props=g,d.state=d.__s,(p=I.__r)&&p(t),d.__d=!1,d.__v=t,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),_||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,m)),j=null!=p&&p.type===a&&null==p.key?p.props.children:p,h(e,Array.isArray(j)?j:[j],t,n,o,i,l,u,s,f),d.base=t.__e,t.__h=null,d.__h.length&&u.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=w(n.__e,t,n,o,i,l,u,f);(p=I.diffed)&&p(t)}catch(e){t.__v=null,(f||null!=l)&&(t.__e=s,t.__h=!!f,l[l.indexOf(s)]=null),I.__e(e,t,n)}}function j(e,t){I.__c&&I.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){I.__e(e,t.__v)}}))}function w(e,t,n,r,i,l,u,a){var c,f,p,d=n.props,_=t.props,v=t.type,m=0;if("svg"===v&&(i=!0),null!=l)for(;m<l.length;m++)if((c=l[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[m]=null;break}if(null==e){if(null===v)return document.createTextNode(_);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,_.is&&_),l=null,a=!1}if(null===v)d===_||a&&e.data===_||(e.data=_);else{if(l=l&&T.call(e.childNodes),f=(d=n.props||F).dangerouslySetInnerHTML,p=_.dangerouslySetInnerHTML,!a){if(null!=l)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,_,d,i,a),p)t.__k=[];else if(m=t.props.children,h(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==v,l,u,l?l[0]:n.__k&&s(n,0),a),null!=l)for(m=l.length;m--;)null!=l[m]&&o(l[m]);a||("value"in _&&void 0!==(m=_.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==d.value)&&b(e,"value",m,d.value,!1),"checked"in _&&void 0!==(m=_.checked)&&m!==e.checked&&b(e,"checked",m,d.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){I.__e(e,n)}}function C(e,t,n){var r,i;if(I.unmount&&I.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){I.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&C(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function E(e,t,n){return this.constructor(e,n)}function P(e,t,n){var r,o,l;I.__&&I.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],k(t,e=(!r&&n||t).__k=i(a,null,[e]),o||F,F,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),j(l,e)}function x(e,t){P(e,t,x)}function A(e,t,n){var o,i,u,a=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:a[u]=t[u];return arguments.length>2&&(a.children=arguments.length>3?T.call(arguments,2):n),l(e.type,a,o||e.key,i||e.ref,null)}function D(e,t){var n={__c:t="__cC"+R++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return x})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return D})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return I}));var T,I,L,N,U,V,M,R,F={},H=[],z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=H.slice,I={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},L=0,N=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=a,U=[],V="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d.__r=0,R=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.h,i=r.render,l=r.hydrate,u=function(e){return e&&e.default?e.default:e},a=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw.js"),"function"==typeof u(n("qVkA"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(n("qVkA")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var s={preRenderData:t},f=t.url?a(t.url):"";(l&&f===a(location.pathname)?l:i)(o(e,{CLI_DATA:s}),document.body,c)}()}},qVkA:function(e,t,n){"use strict";n.r(t);var r=n("dmYQ");t.default=r.a}});
//# sourceMappingURL=bundle.68e0a.js.map