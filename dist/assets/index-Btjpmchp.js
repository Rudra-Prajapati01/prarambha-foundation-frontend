var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,j=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function M(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+M(t)):e.value!==``+M(t)&&(e.value=``+M(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,M(n)):qt(e,o,M(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+M(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+M(n),t=t==null?n:``+M(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+M(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+M(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+M(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=M(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,`passive`,{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=m({},En,{view:0,detail:0}),kn=Tn(On),N,An,jn,Mn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(N=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=N=0,jn=e),N)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=Tn(Mn),Pn=Tn(m({},Mn,{dataTransfer:0})),Fn=Tn(m({},On,{relatedTarget:0})),In=Tn(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=Tn(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=Tn(m({},En,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=Tn(m({},On,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=Tn(m({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=Tn(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=Tn(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=Tn(m({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=Tn(m({},En,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=hn&&`CompositionEvent`in window,Qn=null;hn&&`documentMode`in document&&(Qn=document.documentMode);var $n=hn&&`TextEvent`in window&&!Qn,er=hn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=xn(),bn=yn=vn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Vt(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(hn){var _r;if(hn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,cn(e)),pn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=hn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ht(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};hn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),kt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,P=0;function ii(){for(var e=ri,t=P=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,P|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=fi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=fi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=fi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ci=[],wi=0,F=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Ci[wi++]=Ti,Ci[wi++]=F,F=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-We(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===F;)F=Ci[--wi],Ci[wi]=null,Ti=Ci[--wi],Ci[wi]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=de(null),Ji=null,Yi=null;function Xi(e,t,n){A(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,fe(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=O.S;O.S=function(e,t){eu=j(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=de(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?A(ba,ba.current):A(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case D:return t=Aa(t),f(e,t,n)}if(se(t)||ie(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Aa(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Aa(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Aa(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function R(){if(Ya){var e=ha;if(e!==null)throw e}}function Xa(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=de(null),eo=de(0);function to(e,t){e=Ul,A(eo,e),A($a,t),Ul=e|t.baseLanes}function no(){A(eo,Ul),A($a,$a.current)}function ro(){Ul=eo.current,fe($a),fe(eo)}var io=de(null),ao=null;function oo(e){var t=e.alternate;A(uo,uo.current&1),A(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){A(uo,uo.current),A(io,e),ao===null&&(ao=e)}function z(e){e.tag===22?(A(uo,uo.current),A(io,e),ao===null&&(ao=e)):co(e)}function co(){A(uo,uo.current),A(io,io.current)}function lo(e){fe(io),ao===e&&(ao=null),fe(uo)}var uo=de(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?zs:Bs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){O.H=Rs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ta(e)&&(rc=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Vs,o=t(n,r)}while(go);return o}function Eo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=ka(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?zs:Bs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((po&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(rc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,U(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=q.formState;if(n!==null){a:{var r=B;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ms.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Ps.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,U(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function U(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return jo().memoizedState}function ss(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=U(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=U(t,a,n,r):(B.flags|=e,i.memoizedState=U(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=jo().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||po&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Dr(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Dr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ps(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,va(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ce,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ra(Qf)}function Os(){return jo().memoizedState}function ks(){return jo().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return ai(e,t,i,0),q===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===B||t!==null&&t===B}function Is(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Rs={readContext:ra,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};Rs.useEffectEvent=H;var zs={readContext:ra,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ms.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Ss.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Uo.bind(null,r,o,e),[e]),r.flags|=2048,U(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=q.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=As.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ra,use:Po,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Lo,useRef:os,useState:function(){return Lo(Io)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Os,useHostTransitionStatus:Ds,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ra,use:Po,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:zo,useRef:os,useState:function(){return zo(Io)},useDebugValue:_s,useDeferredValue:function(e,t){var n=jo();return V===null?bs(n,e,t):xs(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:Os,useHostTransitionStatus:Ds,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ti(e)}function Js(e){console.error(e)}function Ys(e){ti(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ga(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=io.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=Qs(e.stateNode,r,a),Ja(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?no():to(t,a),z(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),no(),co(t)):(Sa(t,a.cachePool),to(t,a),co(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),no(),z(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ba(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(so(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=dc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!rc?(Oo(e,t,i),kc(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!rc?(Oo(e,t,a),kc(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(na(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),R(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),R(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ha||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),R();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ha||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Wi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Ca()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(uo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?oo(t):co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(oo(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ba(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(uo,o),ic(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function jc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(uo,uo.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),R(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),Ki(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Sc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=q,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Xa(t,null,null,n),R()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=pe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=pe.current,Ui(t))Vi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Zi(t.type),W(t),null;case 19:if(fe(uo),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return A(uo,uo.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&j()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return W(t),null}else 2*j()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=j(),e.sibling=null,n=uo.current,A(uo,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return lo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(uo),null;case 4:return ve(),null;case 10:return Zi(t.type),null;case 22:case 23:return lo(t),ro(),e!==null&&fe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Bc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:fe(uo);break;case 10:Zi(t.type);break;case 22:case 23:lo(t),ro(),e!==null&&fe(ba);break;case 24:Zi(la)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=j()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?ut():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||L){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-j(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},jl(t,a,d);var m=(a&62914560)===a?$l-j():(a&4194048)===a?eu-j():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Yi=Ji=null,ko(e),Pa=null,Fa=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=mi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ii(),n}function Cu(e,t){B=null,O.H=Rs,t===wa||t===Ea?(t=Ma(),X=3):t===Ta?(t=Ma(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,Si(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(Y&4194048)===Y?ao===null:(Y&62914560)===Y||Y&536870912?e===ao:!1}function Tu(){var e=O.H;return O.H=Rs,e===null?Rs:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&io.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,ii()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=j()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Oa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,ii(),Wl):0}function ju(){for(;J!==null&&!je();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:ko(t);default:Bc(n,t),t=J=hi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Yi=Ji=null,ko(t),Pa=null,Fa=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,Si(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,Si(n,e.current)),J=null;return}t.flags&32768?(L||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=P,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=Qs(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=$s(2),r=Ka(t,n,2),r!==null&&(ec(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>j()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=si(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=j(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,j()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ke(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=In;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=j()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return ae(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||D(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function se(e,t,n=`/`){return O(e,t,n,!1)}function O(e,t,n,r,i){let a=we((typeof t==`string`?ie(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Ce(a);for(let e=0;s==null&&e<o.length;++e)s=be(o[e],c,r);return s}function k(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e){let t=le(e);return de(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=j([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,A=3,pe=2,me=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=pe),n.filter(e=>!_e(e)).reduce((e,t)=>e+(fe.test(t)?A:t===``?me:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:j([a,u.pathname]),pathnameBase:Pe(j([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=j([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ee(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=Me(n),a=n.startsWith(`/`)?De(n.substring(1),`/`):De(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function De(e,t){let n=Ne(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Oe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ke(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ae(e){let t=ke(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function je(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Oe(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Oe(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Oe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ee(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Me=e=>e.replace(/\/\/+/g,`/`),j=e=>Me(e.join(`/`)),Ne=e=>e.replace(/\/+$/,``),Pe=e=>Ne(e).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return j(e.map(e=>e.route.path).filter(Boolean))||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!Te.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=we(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var Ue=[`GET`,...He];new Set(Ue);var We=S.createContext(null);We.displayName=`DataRouter`;var Ge=S.createContext(null);Ge.displayName=`DataRouterState`;var Ke=S.createContext(!1);function qe(){return S.useContext(Ke)}var Je=S.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=S.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=S.createContext(null);Xe.displayName=`Await`;var Ze=S.createContext(null);Ze.displayName=`Navigation`;var Qe=S.createContext(null);Qe.displayName=`Location`;var $e=S.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=S.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){T(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(Ze),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:j([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return S.useContext(Qe)!=null}function ct(){return T(st(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){S.useContext(Ze).static||S.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=S.useContext($e);return e?Nt():ft()}function ft(){T(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(We),{basename:t,navigator:n}=S.useContext(Ze),{matches:r}=S.useContext($e),{pathname:i}=ct(),a=JSON.stringify(Ae(r)),o=S.useRef(!1);return ut(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(E(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=je(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:j([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}S.createContext(null);function pt(){let{matches:e}=S.useContext($e);return e[e.length-1]?.params??{}}function mt(e,{relative:t}={}){let{matches:n}=S.useContext($e),{pathname:r}=ct(),i=JSON.stringify(Ae(n));return S.useMemo(()=>je(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){T(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(Ze),{matches:i}=S.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ft(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?ie(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):se(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:j([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:j([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=Mt(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var vt=S.createElement(_t,null),yt=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement($e.Provider,{value:this.props.routeContext},S.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(xt,{error:e},t):t}};yt.contextType=Ke;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=S.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=S.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement($e.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Ft(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=S.useContext(We);return T(t,wt(e)),t}function Et(e){let t=S.useContext(Ge);return T(t,wt(e)),t}function Dt(e){let t=S.useContext($e);return T(t,wt(e)),t}function Ot(e){let t=Dt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function kt(){return Ot(`useRouteId`)}function At(){return Et(`useNavigation`).navigation}function jt(){let{matches:e,loaderData:t}=Et(`useMatches`);return S.useMemo(()=>e.map(e=>k(e,t)),[e,t])}function Mt(){let e=S.useContext(et),t=Et(`useRouteError`),n=Ot(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Nt(){let{router:e}=Tt(`useNavigate`),t=Ot(`useNavigate`),n=S.useRef(!1);return ut(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{E(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Pt={};function Ft(e,t,n){!t&&!Pt[e]&&(Pt[e]=!0,E(!1,n))}S.memo(It);function It({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return gt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Lt({to:e,replace:t,state:n,relative:r}){T(st(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=S.useContext(Ze);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=S.useContext($e),{pathname:o}=ct(),s=dt(),c=je(e,Ae(a),o,r===`path`),l=JSON.stringify(c);return S.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function M(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=we(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(Ze.Provider,{value:c},S.createElement(Qe.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return ht(Bt(e),t)}S.Component;function Bt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===M,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&we(i.pathname,t)===`/`?i.pathname=`${Ne(t)}/_root.${r}`:i.pathname=`${Ne(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=S.useContext(We);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=S.useContext(Ge);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=S.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=S.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=S.useContext(_n),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=qe(),{router:r}=hn(),i=S.useMemo(()=>se(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?S.createElement(Cn,{page:e,matches:i,...t}):S.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=ct(),{future:i}=vn(),{basename:a}=hn(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=S.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.15.0`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function On({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=S.useState({action:n.action,location:n.location}),o=S.useCallback(e=>{r===!1?a(e):S.startTransition(()=>a(e))},[r]);return S.useLayoutEffect(()=>n.listen(o),[n,o]),S.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(Ze),v=typeof l==`string`&&kn.test(l),y=Ve(l,h);l=y.to;let b=ot(l,{relative:r}),x=ct(),C=null;if(o){let e=je(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:j([h,e.pathname])),C=g.createHref(e)}let[w,ee,T]=yn(n,p),E=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||E(t)}let te=!(y.isExternal||i),ne=S.createElement(`a`,{...p,...T,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:Tn(m,ee),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?S.createElement(S.Fragment,null,ne,S.createElement(xn,{page:b})):ne});N.displayName=`Link`;var An=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=ct(),f=S.useContext(Ge),{navigator:p,basename:m}=S.useContext(Ze),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=we(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(C):i;return S.createElement(N,{...c,"aria-current":w,className:ee,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(C):s)});An.displayName=`NavLink`;var jn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(Ze),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&kn.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});jn.displayName=`Form`;function Mn({getKey:e,storageKey:t,...n}){let r=S.useContext(_n),{basename:i}=S.useContext(Ze),a=ct(),o=jt();Wn({getKey:e,storageKey:t});let s=S.useMemo(()=>{if(!r||!e)return null;let t=Un(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return S.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Vn))}, ${nn(JSON.stringify(s))})`}})}Mn.displayName=`ScrollRestoration`;function Nn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pn(e){let t=S.useContext(We);return T(t,Nn(e)),t}function Fn(e){let t=S.useContext(Ge);return T(t,Nn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=mt(e,{relative:o});return S.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Pn(`useSubmit`),{basename:t}=S.useContext(Ze),n=kt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||Rn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=S.useContext(Ze),r=S.useContext($e);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:j([n,a.pathname])),re(a)}var Vn=`react-router-scroll-positions`,Hn={};function Un(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Wn({getKey:e,storageKey:t}={}){let{router:n}=Pn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Fn(`useScrollRestoration`),{basename:a}=S.useContext(Ze),o=ct(),s=jt(),c=At();S.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Gn(S.useCallback(()=>{if(c.state===`idle`){let t=Un(o,s,a,e);Hn[t]=window.scrollY}try{sessionStorage.setItem(t||Vn,JSON.stringify(Hn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(S.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Vn);e&&(Hn=JSON.parse(e))}catch{}},[t]),S.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Hn,()=>window.scrollY,e?(t,n)=>Un(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),S.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Gn(e,t){let{capture:n}=t||{};S.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Kn(e,{relative:t}={}){let n=S.useContext(Je);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Pn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}function qn(e,t){return function(){return e.apply(t,arguments)}}var{toString:Jn}=Object.prototype,{getPrototypeOf:Yn}=Object,{iterator:Xn,toStringTag:Zn}=Symbol,Qn=(e=>t=>{let n=Jn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=e=>(e=e.toLowerCase(),t=>Qn(t)===e),er=e=>t=>typeof t===e,{isArray:tr}=Array,nr=er(`undefined`);function rr(e){return e!==null&&!nr(e)&&e.constructor!==null&&!nr(e.constructor)&&sr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ir=$n(`ArrayBuffer`);function ar(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ir(e.buffer),t}var or=er(`string`),sr=er(`function`),cr=er(`number`),lr=e=>typeof e==`object`&&!!e,ur=e=>e===!0||e===!1,dr=e=>{if(Qn(e)!==`object`)return!1;let t=Yn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Zn in e)&&!(Xn in e)},fr=e=>{if(!lr(e)||rr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},pr=$n(`Date`),mr=$n(`File`),hr=e=>!!(e&&e.uri!==void 0),gr=e=>e&&e.getParts!==void 0,_r=$n(`Blob`),vr=$n(`FileList`),yr=e=>lr(e)&&sr(e.pipe);function br(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var xr=br(),Sr=xr.FormData===void 0?void 0:xr.FormData,Cr=e=>{if(!e)return!1;if(Sr&&e instanceof Sr)return!0;let t=Yn(e);if(!t||t===Object.prototype||!sr(e.append))return!1;let n=Qn(e);return n===`formdata`||n===`object`&&sr(e.toString)&&e.toString()===`[object FormData]`},wr=$n(`URLSearchParams`),[Tr,Er,Dr,Or]=[`ReadableStream`,`Request`,`Response`,`Headers`].map($n),kr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Ar(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),tr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(rr(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function jr(e,t){if(rr(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Mr=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Nr=e=>!nr(e)&&e!==Mr;function Pr(...e){let{caseless:t,skipUndefined:n}=Nr(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&jr(r,i)||i,o=Kr(r,a)?r[a]:void 0;dr(o)&&dr(e)?r[a]=Pr(o,e):dr(e)?r[a]=Pr({},e):tr(e)?r[a]=e.slice():(!n||!nr(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++)e[t]&&Ar(e[t],i);return r}var Fr=(e,t,n,{allOwnKeys:r}={})=>(Ar(t,(t,r)=>{n&&sr(t)?Object.defineProperty(e,r,{__proto__:null,value:qn(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Ir=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Rr=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Yn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Br=e=>{if(!e)return null;if(tr(e))return e;let t=e.length;if(!cr(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Vr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Yn(Uint8Array)),Hr=(e,t)=>{let n=(e&&e[Xn]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Ur=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wr=$n(`HTMLFormElement`),Gr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Kr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qr=$n(`RegExp`),Jr=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Ar(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Yr=e=>{Jr(e,(t,n)=>{if(sr(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(sr(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Xr=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return tr(e)?r(e):r(String(e).split(t)),n},Zr=()=>{},Qr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function $r(e){return!!(e&&sr(e.append)&&e[Zn]===`FormData`&&e[Xn])}var ei=e=>{let t=new WeakSet,n=e=>{if(lr(e)){if(t.has(e))return;if(rr(e))return e;if(!(`toJSON`in e)){t.add(e);let r=tr(e)?[]:{};return Ar(e,(e,t)=>{let i=n(e);!nr(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},ti=$n(`AsyncFunction`),ni=e=>e&&(lr(e)||sr(e))&&sr(e.then)&&sr(e.catch),ri=((e,t)=>e?setImmediate:t?((e,t)=>(Mr.addEventListener(`message`,({source:n,data:r})=>{n===Mr&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Mr.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,sr(Mr.postMessage)),P={isArray:tr,isArrayBuffer:ir,isBuffer:rr,isFormData:Cr,isArrayBufferView:ar,isString:or,isNumber:cr,isBoolean:ur,isObject:lr,isPlainObject:dr,isEmptyObject:fr,isReadableStream:Tr,isRequest:Er,isResponse:Dr,isHeaders:Or,isUndefined:nr,isDate:pr,isFile:mr,isReactNativeBlob:hr,isReactNative:gr,isBlob:_r,isRegExp:qr,isFunction:sr,isStream:yr,isURLSearchParams:wr,isTypedArray:Vr,isFileList:vr,forEach:Ar,merge:Pr,extend:Fr,trim:kr,stripBOM:Ir,inherits:Lr,toFlatObject:Rr,kindOf:Qn,kindOfTest:$n,endsWith:zr,toArray:Br,forEachEntry:Hr,matchAll:Ur,isHTMLForm:Wr,hasOwnProperty:Kr,hasOwnProp:Kr,reduceDescriptors:Jr,freezeMethods:Yr,toObjectSet:Xr,toCamelCase:Gr,noop:Zr,toFiniteNumber:Qr,findKey:jr,global:Mr,isContextDefined:Nr,isSpecCompliantForm:$r,toJSONObject:ei,isAsyncFn:ti,isThenable:ni,setImmediate:ri,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(Mr):typeof process<`u`&&process.nextTick||ri,isIterable:e=>e!=null&&sr(e[Xn])},ii=P.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),ai=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&ii[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function oi(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var si=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),ci=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function li(e,t){return P.isArray(e)?e.map(e=>li(e,t)):oi(String(e).replace(t,``))}var ui=e=>li(e,si),di=e=>li(e,ci);function fi(e){let t=Object.create(null);return P.forEach(e.toJSON(),(e,n)=>{t[n]=di(e)}),t}var pi=Symbol(`internals`);function mi(e){return e&&String(e).trim().toLowerCase()}function hi(e){return e===!1||e==null?e:P.isArray(e)?e.map(hi):ui(String(e))}function gi(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var _i=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vi(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function yi(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function bi(e,t){let n=P.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var xi=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=mi(t);if(!i)throw Error(`header name must be a non-empty string`);let a=P.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=hi(e))}let a=(e,t)=>P.forEach(e,(e,n)=>i(e,n,t));if(P.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(P.isString(e)&&(e=e.trim())&&!_i(e))a(ai(e),t);else if(P.isObject(e)&&P.isIterable(e)){let n={},r,i;for(let t of e){if(!P.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?P.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=mi(e),e){let n=P.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return gi(e);if(P.isFunction(t))return t.call(this,e,n);if(P.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=mi(e),e){let n=P.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||vi(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=mi(e),e){let i=P.findKey(n,e);i&&(!t||vi(n,n[i],i,t))&&(delete n[i],r=!0)}}return P.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||vi(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return P.forEach(this,(r,i)=>{let a=P.findKey(n,i);if(a){t[a]=hi(r),delete t[i];return}let o=e?yi(i):String(i).trim();o!==i&&delete t[i],t[o]=hi(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return P.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&P.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[pi]=this[pi]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=mi(e);t[r]||(bi(n,e),t[r]=!0)}return P.isArray(e)?e.forEach(r):r(e),this}};xi.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),P.reduceDescriptors(xi.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),P.freezeMethods(xi);var Si=`[REDACTED ****]`;function Ci(e){if(P.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(P.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function wi(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||P.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof xi&&(e=e.toJSON()),r.push(e);let t;if(P.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);P.isUndefined(r)||(t[n]=r)});else{if(!P.isPlainObject(e)&&Ci(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Si:i(a);P.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var F=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&P.hasOwnProp(e,`redact`)?e.redact:void 0,n=P.isArray(t)&&t.length>0?wi(e,t):P.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};F.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,F.ERR_BAD_OPTION=`ERR_BAD_OPTION`,F.ECONNABORTED=`ECONNABORTED`,F.ETIMEDOUT=`ETIMEDOUT`,F.ECONNREFUSED=`ECONNREFUSED`,F.ERR_NETWORK=`ERR_NETWORK`,F.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,F.ERR_DEPRECATED=`ERR_DEPRECATED`,F.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,F.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,F.ERR_CANCELED=`ERR_CANCELED`,F.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,F.ERR_INVALID_URL=`ERR_INVALID_URL`,F.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Ti(e){return P.isPlainObject(e)||P.isArray(e)}function Ei(e){return P.endsWith(e,`[]`)?e.slice(0,-2):e}function Di(e,t,n){return e?e.concat(t).map(function(e,t){return e=Ei(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Oi(e){return P.isArray(e)&&!e.some(Ti)}var ki=P.toFlatObject(P,{},null,function(e){return/^is[A-Z]/.test(e)});function Ai(e,t,n){if(!P.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!P.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||d,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw TypeError(`visitor must be a function`);function u(e){if(e===null)return``;if(P.isDate(e))return e.toISOString();if(P.isBoolean(e))return e.toString();if(!l&&P.isBlob(e))throw new F(`Blob is not supported. Use a Buffer instead.`);return P.isArrayBuffer(e)||P.isTypedArray(e)?l&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function d(e,n,i){let s=e;if(P.isReactNative(t)&&P.isReactNativeBlob(e))return t.append(Di(i,n,a),u(e)),!1;if(e&&!i&&typeof e==`object`){if(P.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(P.isArray(e)&&Oi(e)||(P.isFileList(e)||P.endsWith(n,`[]`))&&(s=P.toArray(e)))return n=Ei(n),s.forEach(function(e,r){!(P.isUndefined(e)||e===null)&&t.append(o===!0?Di([n],r,a):o===null?n:n+`[]`,u(e))}),!1}return Ti(e)?!0:(t.append(Di(i,n,a),u(e)),!1)}let f=[],p=Object.assign(ki,{defaultVisitor:d,convertValue:u,isVisitable:Ti});function m(e,n,r=0){if(!P.isUndefined(e)){if(r>c)throw new F(`Object is too deeply nested (`+r+` levels). Max depth: `+c,F.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));f.push(e),P.forEach(e,function(e,a){(!(P.isUndefined(e)||e===null)&&i.call(t,e,P.isString(a)?a.trim():a,n,p))===!0&&m(e,n?n.concat(a):[a],r+1)}),f.pop()}}if(!P.isObject(e))throw TypeError(`data must be an object`);return m(e),t}function ji(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Mi(e,t){this._pairs=[],e&&Ai(e,this,t)}var Ni=Mi.prototype;Ni.append=function(e,t){this._pairs.push([e,t])},Ni.toString=function(e){let t=e?function(t){return e.call(this,t,ji)}:ji;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Pi(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Fi(e,t,n){if(!t)return e;let r=n&&n.encode||Pi,i=P.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):P.isURLSearchParams(t)?t.toString():new Mi(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Ii=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){P.forEach(this.handlers,function(t){t!==null&&e(t)})}},I={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},L={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Mi,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Li=s({hasBrowserEnv:()=>Ri,hasStandardBrowserEnv:()=>Bi,hasStandardBrowserWebWorkerEnv:()=>Vi,navigator:()=>zi,origin:()=>Hi}),Ri=typeof window<`u`&&typeof document<`u`,zi=typeof navigator==`object`&&navigator||void 0,Bi=Ri&&(!zi||[`ReactNative`,`NativeScript`,`NS`].indexOf(zi.product)<0),Vi=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Hi=Ri&&window.location.href||`http://localhost`,Ui={...Li,...L};function Wi(e,t){return Ai(e,new Ui.classes.URLSearchParams,{visitor:function(e,t,n,r){return Ui.isNode&&P.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function Gi(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function Ki(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function qi(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&P.isArray(r)?r.length:a,s?(P.hasOwnProp(r,a)?r[a]=P.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!P.hasOwnProp(r,a)||!P.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&P.isArray(r[a])&&(r[a]=Ki(r[a])),!o)}if(P.isFormData(e)&&P.isFunction(e.entries)){let n={};return P.forEachEntry(e,(e,r)=>{t(Gi(e),r,n,0)}),n}return null}var Ji=(e,t)=>e!=null&&P.hasOwnProp(e,t)?e[t]:void 0;function Yi(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Xi={transitional:I,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=P.isObject(e);if(i&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return r?JSON.stringify(qi(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e)||P.isReadableStream(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Ji(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return Wi(e,t).toString();if((a=P.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Ji(this,`env`),r=n&&n.FormData;return Ai(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),Yi(e)):e}],transformResponse:[function(e){let t=Ji(this,`transitional`)||Xi.transitional,n=t&&t.forcedJSONParsing,r=Ji(this,`responseType`),i=r===`json`;if(P.isResponse(e)||P.isReadableStream(e))return e;if(e&&P.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Ji(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?F.from(e,F.ERR_BAD_RESPONSE,this,null,Ji(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ui.classes.FormData,Blob:Ui.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{Xi.headers[e]={}});function Zi(e,t){let n=this||Xi,r=t||n,i=xi.from(r.headers),a=r.data;return P.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Qi(e){return!!(e&&e.__CANCEL__)}var $i=class extends F{constructor(e,t,n){super(e??`canceled`,F.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function ea(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F(`Request failed with status code `+n.status,n.status>=400&&n.status<500?F.ERR_BAD_REQUEST:F.ERR_BAD_RESPONSE,n.config,n.request,n))}function ta(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function na(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function ra(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var ia=(e,t,n=3)=>{let r=0,i=na(50,250);return ra(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},aa=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},oa=e=>(...t)=>P.asap(()=>e(...t)),sa=Ui.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ui.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ui.origin),Ui.navigator&&/(msie|trident)/i.test(Ui.navigator.userAgent)):()=>!0,ca=Ui.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];P.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),P.isString(r)&&s.push(`path=${r}`),P.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),P.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)return decodeURIComponent(r.slice(i+1))}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function la(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function ua(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function da(e,t,n){let r=!la(t);return e&&(r||n===!1)?ua(e,t):t}var fa=e=>e instanceof xi?{...e}:e;function pa(e,t){t||={};let n=Object.create(null);Object.defineProperty(n,`hasOwnProperty`,{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge.call({caseless:r},e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function i(e,t,n,i){if(!P.isUndefined(t))return r(e,t,n,i);if(!P.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!P.isUndefined(t))return r(void 0,t)}function o(e,t){if(!P.isUndefined(t))return r(void 0,t);if(!P.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(P.hasOwnProp(t,a))return r(n,i);if(P.hasOwnProp(e,a))return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(fa(e),fa(t),n,!0)};return P.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=P.hasOwnProp(c,r)?c[r]:i,o=a(P.hasOwnProp(e,r)?e[r]:void 0,P.hasOwnProp(t,r)?t[r]:void 0,r);P.isUndefined(o)&&a!==s||(n[r]=o)}),n}var ma=[`content-type`,`content-length`];function ha(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t).forEach(([t,n])=>{ma.includes(t.toLowerCase())&&e.set(t,n)})}var ga=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),_a=e=>{let t=pa({},e),n=e=>P.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=xi.from(s),t.url=Fi(da(l,d,u),e.params,e.paramsSerializer),c&&s.set(`Authorization`,`Basic `+btoa((c.username||``)+`:`+(c.password?ga(c.password):``))),P.isFormData(r)&&(Ui.hasStandardBrowserEnv||Ui.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):P.isFunction(r.getHeaders)&&ha(s,r.getHeaders(),n(`formDataHeaderPolicy`))),Ui.hasStandardBrowserEnv&&(P.isFunction(i)&&(i=i(t)),i===!0||i==null&&sa(t.url))){let e=a&&o&&ca.read(o);e&&s.set(a,e)}return t},va=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=_a(e),i=r.data,a=xi.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=xi.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());ea(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new F(`Request aborted`,F.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new F(t&&t.message?t.message:`Network Error`,F.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||I;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new F(t,i.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&P.forEach(fi(a),function(e,t){h.setRequestHeader(t,e)}),P.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=ia(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=ia(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new $i(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=ta(r.url);if(_&&!Ui.protocols.includes(_)){n(new F(`Unsupported protocol `+_+`:`,F.ERR_BAD_REQUEST,e));return}h.send(i||null)})},ya=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof F?t:new $i(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new F(`timeout of ${t}ms exceeded`,F.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>P.asap(o),s},ba=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},xa=async function*(e,t){for await(let n of Sa(e))yield*ba(n,t)},Sa=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ca=(e,t,n,r)=>{let i=xa(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};function wa(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)&&(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}if(typeof Buffer<`u`&&typeof Buffer.byteLength==`function`)return Buffer.byteLength(r,`utf8`);let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Ta=`1.16.1`,Ea=64*1024,{isFunction:Da}=P,Oa=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ka=e=>{let t=P.global!==void 0&&P.global!==null?P.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=P.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Da(i):typeof fetch==`function`,c=Da(a),l=Da(o);if(!s)return!1;let u=s&&Da(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Oa(()=>{let e=!1,t=new a(Ui.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Oa(()=>P.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new F(`Response type '${e}' is not supported`,F.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new a(Ui.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e+=``),P.isString(e))return(await d(e)).byteLength},g=async(e,t)=>P.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:u,timeout:d,onDownloadProgress:h,onUploadProgress:_,responseType:v,headers:y,withCredentials:b=`same-origin`,fetchOptions:x,maxContentLength:S,maxBodyLength:C}=_a(e),w=P.isNumber(S)&&S>-1,ee=P.isNumber(C)&&C>-1,T=i||fetch;v=v?(v+``).toLowerCase():`text`;let E=ya([l,u&&u.toAbortSignal()],d),D=null,te=E&&E.unsubscribe&&(()=>{E.unsubscribe()}),ne;try{if(w&&typeof t==`string`&&t.startsWith(`data:`)&&wa(t)>S)throw new F(`maxContentLength size of `+S+` exceeded`,F.ERR_BAD_RESPONSE,e,D);if(ee&&n!==`get`&&n!==`head`){let t=await g(y,s);if(typeof t==`number`&&isFinite(t)&&t>C)throw new F(`Request body larger than maxBodyLength limit`,F.ERR_BAD_REQUEST,e,D)}if(_&&f&&n!==`get`&&n!==`head`&&(ne=await g(y,s))!==0){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(P.isFormData(s)&&(n=e.headers.get(`content-type`))&&y.setContentType(n),e.body){let[t,n]=aa(ne,ia(oa(_)));s=Ca(e.body,Ea,t,n)}}P.isString(b)||(b=b?`include`:`omit`);let i=c&&`credentials`in a.prototype;if(P.isFormData(s)){let e=y.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&y.delete(`content-type`)}y.set(`User-Agent`,`axios/`+Ta,!1);let l={...x,signal:E,method:n.toUpperCase(),headers:fi(y.normalize()),body:s,duplex:`half`,credentials:i?b:void 0};D=c&&new a(t,l);let u=await(c?T(D,x):T(t,l));if(w){let t=P.toFiniteNumber(u.headers.get(`content-length`));if(t!=null&&t>S)throw new F(`maxContentLength size of `+S+` exceeded`,F.ERR_BAD_RESPONSE,e,D)}let d=p&&(v===`stream`||v===`response`);if(p&&u.body&&(h||w||d&&te)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=u[e]});let n=P.toFiniteNumber(u.headers.get(`content-length`)),[r,i]=h&&aa(n,ia(oa(h),!0))||[],a=0;u=new o(Ca(u.body,Ea,t=>{if(w&&(a=t,a>S))throw new F(`maxContentLength size of `+S+` exceeded`,F.ERR_BAD_RESPONSE,e,D);r&&r(t)},()=>{i&&i(),te&&te()}),t)}v||=`text`;let re=await m[P.findKey(m,v)||`text`](u,e);if(w&&!p&&!d){let t;if(re!=null&&(typeof re.byteLength==`number`?t=re.byteLength:typeof re.size==`number`?t=re.size:typeof re==`string`&&(t=typeof r==`function`?new r().encode(re).byteLength:re.length)),typeof t==`number`&&t>S)throw new F(`maxContentLength size of `+S+` exceeded`,F.ERR_BAD_RESPONSE,e,D)}return!d&&te&&te(),await new Promise((t,n)=>{ea(t,n,{data:re,headers:xi.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:D})})}catch(t){if(te&&te(),E&&E.aborted&&E.reason instanceof F){let n=E.reason;throw n.config=e,D&&(n.request=D),t!==n&&(n.cause=t),n}throw t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new F(`Network Error`,F.ERR_NETWORK,e,D,t&&t.response),{cause:t.cause||t}):F.from(t,t&&t.code,e,D,t&&t.response)}}},Aa=new Map,ja=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Aa;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:ka(t)),l=c;return c};ja();var Ma={http:null,xhr:va,fetch:{get:ja}};P.forEach(Ma,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{__proto__:null,value:t})}catch{}Object.defineProperty(e,`adapterName`,{__proto__:null,value:t})}});var Na=e=>`- ${e}`,Pa=e=>P.isFunction(e)||e===null||e===!1;function Fa(e,t){e=P.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Pa(r)&&(i=Ma[(n=String(r)).toLowerCase()],i===void 0))throw new F(`Unknown adapter '${n}'`);if(i&&(P.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new F(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Na).join(`
`):` `+Na(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var Ia={getAdapter:Fa,adapters:Ma};function La(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $i(null,e)}function Ra(e){return La(e),e.headers=xi.from(e.headers),e.data=Zi.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Ia.getAdapter(e.adapter||Xi.adapter,e)(e).then(function(t){La(e),e.response=t;try{t.data=Zi.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=xi.from(t.headers),t},function(t){if(!Qi(t)&&(La(e),t&&t.response)){e.response=t.response;try{t.response.data=Zi.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=xi.from(t.response.headers)}return Promise.reject(t)})}var za={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{za[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Ba={};za.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ta+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new F(r(i,` has been removed`+(t?` in `+t:``)),F.ERR_DEPRECATED);return t&&!Ba[i]&&(Ba[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},za.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Va(e,t,n){if(typeof e!=`object`)throw new F(`options must be an object`,F.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new F(`option `+a+` must be `+n,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F(`Unknown option `+a,F.ERR_BAD_OPTION)}}var Ha={assertOptions:Va,validators:za},Ua=Ha.validators,Wa=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ii,response:new Ii}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=pa(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ha.assertOptions(n,{silentJSONParsing:Ua.transitional(Ua.boolean),forcedJSONParsing:Ua.transitional(Ua.boolean),clarifyTimeoutError:Ua.transitional(Ua.boolean),legacyInterceptorReqResOrdering:Ua.transitional(Ua.boolean)},!1),r!=null&&(P.isFunction(r)?t.paramsSerializer={serialize:r}:Ha.assertOptions(r,{encode:Ua.function,serialize:Ua.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ha.assertOptions(t,{baseUrl:Ua.spelling(`baseURL`),withXsrfToken:Ua.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&P.merge(i.common,i[t.method]);i&&P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=xi.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||I;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Ra.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ra.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=pa(this.defaults,e),Fi(da(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};P.forEach([`delete`,`get`,`head`,`options`],function(e){Wa.prototype[e]=function(t,n){return this.request(pa(n||{},{method:e,url:t,data:(n||{}).data}))}}),P.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(pa(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Wa.prototype[e]=t(),e!==`query`&&(Wa.prototype[e+`Form`]=t(!0))});var Ga=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new $i(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Ka(e){return function(t){return e.apply(null,t)}}function qa(e){return P.isObject(e)&&e.isAxiosError===!0}var Ja={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ja).forEach(([e,t])=>{Ja[t]=e});function Ya(e){let t=new Wa(e),n=qn(Wa.prototype.request,t);return P.extend(n,Wa.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Ya(pa(e,t))},n}var R=Ya(Xi);R.Axios=Wa,R.CanceledError=$i,R.CancelToken=Ga,R.isCancel=Qi,R.VERSION=Ta,R.toFormData=Ai,R.AxiosError=F,R.Cancel=R.CanceledError,R.all=function(e){return Promise.all(e)},R.spread=Ka,R.isAxiosError=qa,R.mergeConfig=pa,R.AxiosHeaders=xi,R.formToJSON=e=>qi(P.isHTMLForm(e)?new FormData(e):e),R.getAdapter=Ia.getAdapter,R.HttpStatusCode=Ja,R.default=R;var Xa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Za=S.createContext&&S.createContext(Xa),Qa=[`attr`,`size`,`title`];function $a(e,t){if(e==null)return{};var n,r,i=eo(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function eo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(null,arguments)}function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?no(Object(n),!0).forEach(function(t){io(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function io(e,t,n){return(t=ao(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ao(e){var t=oo(e,`string`);return typeof t==`symbol`?t:t+``}function oo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function so(e){return e&&e.map((e,t)=>S.createElement(e.tag,ro({key:t},e.attr),so(e.child)))}function z(e){return t=>S.createElement(co,to({attr:ro({},e.attr)},t),so(e.child))}function co(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=$a(e,Qa),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),S.createElement(`svg`,to({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:ro(ro({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&S.createElement(`title`,null,i),e.children)};return Za===void 0?t(Xa):S.createElement(Za.Consumer,null,e=>t(e))}var lo=l(_(),1);function uo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function fo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function po(e){return z({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function B(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function V(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function mo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z`},child:[]}]})(e)}function ho(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z`},child:[]}]})(e)}function go(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z`},child:[]}]})(e)}function _o(e){return z({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function vo(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z`},child:[]}]})(e)}function yo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z`},child:[]}]})(e)}function bo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function xo(e){return z({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z`},child:[]}]})(e)}function H(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function So(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function Co(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z`},child:[]}]})(e)}function wo(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function To(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function Eo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z`},child:[]}]})(e)}function Do(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z`},child:[]}]})(e)}function Oo(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z`},child:[]}]})(e)}function ko(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function Ao(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function jo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z`},child:[]}]})(e)}function Mo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z`},child:[]}]})(e)}function No(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z`},child:[]}]})(e)}function Po(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z`},child:[]}]})(e)}function Fo(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M204.8 230.4c-10.6-14.1-30.7-17-44.8-6.4-14.1 10.6-17 30.7-6.4 44.8l38.1 50.8c4.8 6.4 4.1 15.3-1.5 20.9l-12.8 12.8c-6.7 6.7-17.6 6.2-23.6-1.1L64 244.4V96c0-17.7-14.3-32-32-32S0 78.3 0 96v218.4c0 10.9 3.7 21.5 10.5 30l104.1 134.3c5 6.5 8.4 13.9 10.4 21.7 1.8 6.9 8.1 11.6 15.3 11.6H272c8.8 0 16-7.2 16-16V384c0-27.7-9-54.6-25.6-76.8l-57.6-76.8zM608 64c-17.7 0-32 14.3-32 32v148.4l-89.8 107.8c-6 7.2-17 7.7-23.6 1.1l-12.8-12.8c-5.6-5.6-6.3-14.5-1.5-20.9l38.1-50.8c10.6-14.1 7.7-34.2-6.4-44.8-14.1-10.6-34.2-7.7-44.8 6.4l-57.6 76.8C361 329.4 352 356.3 352 384v112c0 8.8 7.2 16 16 16h131.7c7.1 0 13.5-4.7 15.3-11.6 2-7.8 5.4-15.2 10.4-21.7l104.1-134.3c6.8-8.5 10.5-19.1 10.5-30V96c0-17.7-14.3-32-32-32z`},child:[]}]})(e)}function Io(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z`},child:[]}]})(e)}function Lo(e){return z({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z`},child:[]}]})(e)}function Ro(e){return z({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function zo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z`},child:[]}]})(e)}function Bo(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z`},child:[]}]})(e)}function Vo(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z`},child:[]}]})(e)}function Ho(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function Uo(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function Wo(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z`},child:[]}]})(e)}function Go(e){return z({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function Ko(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z`},child:[]}]})(e)}function qo(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function Jo(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function Yo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function Xo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z`},child:[]}]})(e)}function Zo(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z`},child:[]}]})(e)}function Qo(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z`},child:[]}]})(e)}function $o(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function es(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z`},child:[]}]})(e)}function ts(e){return z({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z`},child:[]}]})(e)}function ns(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z`},child:[]}]})(e)}function rs(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z`},child:[]}]})(e)}function is(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z`},child:[]}]})(e)}var as=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),U=o(((e,t)=>{t.exports=as()}))();function os({pageData:e}){let[t,n]=(0,S.useState)(!1),[r,i]=(0,S.useState)(null),a=e?.footer||{},o=a?.logo||``;(0,S.useEffect)(()=>(t?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`,()=>{document.body.style.overflow=`auto`}),[t]);let s=[{name:`Home`,path:`/`},{name:`Who We Are`,dropdown:[{name:`About Us`,path:`/about`},{name:`Our Chairperson`,path:`/chairperson`}]},{name:`What We Do`,dropdown:[{name:`EARLY SCREENING & IDENTIFICATION`,path:`/programs/early-intervention`},{name:`SPECIAL EDUCATION & INCLUSIVE LEARNING`,path:`/programs/therapy-support`},{name:`GUIDANCE & THERAPY SUPPORT`,path:`/programs/inclusive-education`},{name:`FAMILY, SCHOOL & COMMUNITY PARTNERSHIP`,path:`/programs/community-support`}]},{name:`Our association`,path:`/our-centre`},{name:`Gallery`,path:`/gallery`},{name:`Blog`,path:`/stories`},{name:`Contact`,path:`/contact`}];return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`\r
          hidden\r
          lg:flex\r
          items-center\r
          justify-between\r
          bg-[#0B1B4D]\r
          text-white\r
          px-10\r
          xl:px-16\r
          py-3\r
          text-sm\r
        `,children:[(0,U.jsx)(`p`,{className:`font-medium tracking-wide`,children:`Discovering Ability Before Disability`}),(0,U.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,U.jsx)(`p`,{children:a.email||`foundationprarambha@gmail.com`}),(0,U.jsx)(`p`,{children:a.phone||`+91 940 911 8461`})]})]}),(0,U.jsxs)(`nav`,{className:`\r
          sticky\r
          top-0\r
          z-50\r
          bg-white\r
          border-b\r
          border-gray-100\r
          shadow-sm\r
        `,children:[(0,U.jsx)(`div`,{className:`\r
            w-full\r
            px-4\r
            sm:px-6\r
            lg:px-10\r
            xl:px-16\r
          `,children:(0,U.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-between\r
              h-[78px]\r
            `,children:[(0,U.jsx)(N,{to:`/`,children:o&&(0,U.jsx)(`img`,{src:o,alt:`Prarambha Foundation Logo`,loading:`eager`,onError:e=>{e.target.style.display=`none`},className:`\r
                      w-[180px]\r
                      lg:w-[210px]\r
                      h-[120px]\r
                      object-contain\r
                    `})}),(0,U.jsx)(`ul`,{className:`\r
                hidden\r
                lg:flex\r
                items-center\r
                gap-8\r
              `,children:Array.isArray(s)&&s.map((e,t)=>(0,U.jsx)(`li`,{className:`relative group`,children:e.dropdown?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`button`,{type:`button`,className:`\r
                              flex\r
                              items-center\r
                              gap-2\r
                              text-[#1F2937]\r
                              font-semibold\r
                              hover:text-[#E63946]\r
                              transition-all\r
                              duration-300\r
                            `,children:[e.name,(0,U.jsx)(Ko,{className:`\r
                                text-[12px]\r
                                group-hover:rotate-180\r
                                transition-all\r
                                duration-300\r
                              `})]}),(0,U.jsx)(`div`,{className:`\r
                              absolute\r
                              left-0\r
                              top-[50px]\r
                              w-[280px]\r
                              bg-white\r
                              rounded-2xl\r
                              shadow-xl\r
                              border\r
                              border-gray-100\r
                              opacity-0\r
                              invisible\r
                              translate-y-3\r
                              group-hover:opacity-100\r
                              group-hover:visible\r
                              group-hover:translate-y-0\r
                              transition-all\r
                              duration-300\r
                              overflow-hidden\r
                              z-50\r
                            `,children:Array.isArray(e.dropdown)&&e.dropdown.map((e,t)=>(0,U.jsx)(N,{to:e.path,className:`\r
                                      block\r
                                      px-6\r
                                      py-4\r
                                      text-sm\r
                                      font-medium\r
                                      text-[#1F2937]\r
                                      hover:bg-[#FFF5F5]\r
                                      hover:text-[#E63946]\r
                                      border-b\r
                                      border-gray-100\r
                                      transition-all\r
                                      duration-300\r
                                    `,children:e.name},t))})]}):(0,U.jsx)(N,{to:e.path,className:`\r
                            text-[#1F2937]\r
                            font-semibold\r
                            hover:text-[#E63946]\r
                            transition-all\r
                            duration-300\r
                          `,children:e.name})},t))}),(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsxs)(N,{to:`/contact`,className:`\r
                  hidden\r
                  md:flex\r
                  items-center\r
                  gap-2\r
                  bg-[#EF4444]\r
                  hover:bg-[#DC2626]\r
                  text-white\r
                  px-6\r
                  py-3\r
                  rounded-full\r
                  font-semibold\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,U.jsx)(No,{}),`Support Us`]}),(0,U.jsx)(`button`,{type:`button`,"aria-label":t?`Close Menu`:`Open Menu`,onClick:()=>n(!t),className:`\r
                  lg:hidden\r
                  w-12\r
                  h-12\r
                  rounded-xl\r
                  bg-gray-100\r
                  flex\r
                  items-center\r
                  justify-center\r
                `,children:t?(0,U.jsx)(_o,{className:`text-2xl`}):(0,U.jsx)($o,{className:`text-2xl`})})]})]})}),(0,U.jsxs)(`div`,{className:`
            lg:hidden
            fixed
            top-0
            right-0
            h-screen
            w-[85%]
            max-w-[420px]
            bg-white
            shadow-2xl
            z-[999]
            transition-all
            duration-300
            overflow-y-auto
            ${t?`translate-x-0`:`translate-x-full`}
          `,children:[(0,U.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-between\r
              p-5\r
              border-b\r
              border-gray-100\r
              min-h-[110px]\r
            `,children:[o&&(0,U.jsx)(`img`,{src:o,alt:`Prarambha Foundation Logo`,loading:`eager`,onError:e=>{e.target.style.display=`none`},className:`\r
                    w-[150px]\r
                    h-[75px]\r
                    object-contain\r
                  `}),(0,U.jsx)(`button`,{type:`button`,"aria-label":`Close Menu`,onClick:()=>n(!1),className:`\r
                w-12\r
                h-12\r
                flex\r
                items-center\r
                justify-center\r
                rounded-xl\r
                hover:bg-gray-100\r
                transition-all\r
              `,children:(0,U.jsx)(_o,{className:`\r
                  text-3xl\r
                  text-[#1F2937]\r
                `})})]}),(0,U.jsxs)(`div`,{className:`p-5 pb-10`,children:[Array.isArray(s)&&s.map((e,t)=>(0,U.jsx)(`div`,{className:`mb-2`,children:e.dropdown?(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`button`,{type:`button`,onClick:()=>i(r===t?null:t),className:`\r
                            w-full\r
                            flex\r
                            items-center\r
                            justify-between\r
                            py-4\r
                            px-4\r
                            rounded-xl\r
                            font-semibold\r
                            text-[#1F2937]\r
                            hover:bg-gray-100\r
                            hover:text-[#E63946]\r
                            transition-all\r
                            duration-300\r
                          `,children:[(0,U.jsx)(`span`,{children:e.name}),(0,U.jsx)(Ko,{className:`
                              text-sm
                              transition-transform
                              duration-300
                              ${r===t?`rotate-180 text-[#E63946]`:``}
                            `})]}),(0,U.jsx)(`div`,{className:`
                            overflow-hidden
                            transition-all
                            duration-300
                            ${r===t?`max-h-[600px] opacity-100 mt-1`:`max-h-0 opacity-0`}
                          `,children:(0,U.jsx)(`div`,{className:`ml-3 border-l-2 border-[#E63946]/20`,children:Array.isArray(e.dropdown)&&e.dropdown.map((e,t)=>(0,U.jsx)(N,{to:e.path,onClick:()=>{n(!1),i(null)},className:`\r
                                      block\r
                                      py-3\r
                                      px-5\r
                                      text-sm\r
                                      font-medium\r
                                      text-[#4B5563]\r
                                      hover:text-[#E63946]\r
                                      hover:bg-[#FFF5F5]\r
                                      rounded-r-xl\r
                                      transition-all\r
                                      duration-300\r
                                    `,children:e.name},t))})})]}):(0,U.jsx)(N,{to:e.path,onClick:()=>{n(!1),i(null)},className:`\r
                          flex\r
                          items-center\r
                          justify-between\r
                          py-4\r
                          px-4\r
                          rounded-xl\r
                          font-semibold\r
                          text-[#1F2937]\r
                          hover:bg-gray-100\r
                          hover:text-[#E63946]\r
                          transition-all\r
                          duration-300\r
                        `,children:e.name})},t)),(0,U.jsxs)(N,{to:`/support-us`,onClick:()=>{n(!1),i(null)},className:`\r
                mt-6\r
                flex\r
                items-center\r
                justify-center\r
                gap-2\r
                w-full\r
                bg-[#EF4444]\r
                hover:bg-[#DC2626]\r
                text-white\r
                px-6\r
                py-4\r
                rounded-full\r
                font-semibold\r
                shadow-md\r
                transition-all\r
                duration-300\r
              `,children:[(0,U.jsx)(No,{}),`Support Us`]})]})]})]})]})}var ss=`/assets/hero2-DRjz4pIU.png`;function cs({pageData:e}){let t=e?.hero||{},n=t.title||`Discovering Ability Before Disability`,r=t.tag||`Early Intervention • Inclusive Education`,i=t.subtitle||``,a=t.description||``,o=t.buttonText||`Support Us`,s=t.secondaryButtonText||`Learn More`,c=t.buttonLink||`/contact`,l=t.secondaryButtonLink||`/about`,u=n.split(` `),d=u.slice(0,2).join(` `),f=u.slice(2).join(` `),p=t.image||`/assets/hero2-DRjz4pIU.png`;return(0,U.jsxs)(`div`,{className:`font-sans antialiased bg-white overflow-x-hidden`,children:[(0,U.jsxs)(`section`,{className:`lg:hidden bg-[#FFF7E8]`,children:[(0,U.jsxs)(`div`,{className:`px-5 pt-7 pb-0`,children:[(0,U.jsx)(`p`,{className:`text-red-500 font-bold tracking-widest uppercase text-[11px] mb-4`,children:r}),(0,U.jsx)(`h1`,{className:`text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-[#0B1B4D] mb-0`,children:d}),(0,U.jsx)(`h1`,{className:`text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-red-500 mb-4`,children:f}),i&&(0,U.jsx)(`p`,{className:`text-[#0B1B4D] font-bold text-[15px] sm:text-base mb-3`,children:i}),(0,U.jsx)(`p`,{className:`text-gray-600 text-sm sm:text-base leading-relaxed mb-7 max-w-sm`,children:a}),(0,U.jsxs)(`div`,{className:`flex flex-col gap-3 mb-8`,children:[(0,U.jsxs)(`a`,{href:c,className:`\r
                w-full flex items-center justify-center gap-3\r
                bg-red-500 hover:bg-red-600 active:bg-red-700\r
                text-white font-semibold\r
                py-[14px] px-6 rounded-full\r
                shadow-md transition text-[15px]\r
              `,children:[(0,U.jsx)(No,{}),o]}),(0,U.jsxs)(`a`,{href:l,className:`\r
                w-full flex items-center justify-center gap-3\r
                border-2 border-[#0B1B4D]\r
                text-[#0B1B4D]\r
                hover:bg-[#0B1B4D]\r
                hover:text-white\r
                font-semibold py-[14px] px-6 rounded-full\r
                transition bg-white text-[15px]\r
              `,children:[(0,U.jsx)(B,{}),s]})]})]}),(0,U.jsxs)(`div`,{className:`relative w-full overflow-hidden flex justify-center items-end`,style:{background:`linear-gradient(135deg, #FFD600 0%, #FFC107 100%)`,borderRadius:`40px 40px 0 0`,minHeight:`280px`},children:[(0,U.jsx)(`svg`,{className:`absolute top-6 right-[20%] w-9 h-9 opacity-90`,viewBox:`0 0 40 40`,fill:`none`,children:(0,U.jsx)(`path`,{d:`M20 35s-15-9-15-20A9 9 0 0120 8a9 9 0 0115 7c0 11-15 20-15 20z`,stroke:`white`,strokeWidth:`2.5`,fill:`none`})}),(0,U.jsx)(`svg`,{className:`absolute top-4 right-4 w-12 h-12 opacity-90`,viewBox:`0 0 100 100`,fill:`none`,children:(0,U.jsx)(`circle`,{cx:`50`,cy:`50`,r:`16`,stroke:`white`,strokeWidth:`4`})}),(0,U.jsx)(`img`,{src:p,alt:`Children`,onError:e=>{e.target.src=ss},className:`\r
              relative z-10\r
              w-[90%]\r
              max-w-[360px]\r
              sm:max-w-[440px]\r
              h-[280px]\r
              object-contain\r
              object-bottom\r
            `,style:{marginBottom:`-4px`}})]})]}),(0,U.jsxs)(`section`,{className:`relative bg-[#FFF7E8] overflow-hidden min-h-[550px] hidden lg:block pb-12`,children:[(0,U.jsx)(`div`,{className:`absolute top-0 right-0 w-[55%] h-full overflow-hidden`,style:{borderBottomLeftRadius:`50% 80%`,borderTopLeftRadius:`20% 40%`,background:`linear-gradient(135deg, #FFD600 0%, #FFC107 100%)`},children:(0,U.jsx)(`img`,{src:p,alt:`Children`,onError:e=>{e.target.src=ss},className:`absolute inset-0 w-full h-full object-contain object-bottom pb-8`,style:{zIndex:1}})}),(0,U.jsx)(`div`,{className:`relative max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24 z-10`,children:(0,U.jsxs)(`div`,{className:`max-w-2xl text-left`,children:[(0,U.jsx)(`p`,{className:`text-red-500 font-semibold tracking-wide uppercase mb-3 text-sm`,children:r}),(0,U.jsx)(`h1`,{className:`text-[52px] xl:text-[62px] font-extrabold leading-[1.05] text-[#0B1B4D]`,children:d}),(0,U.jsx)(`h1`,{className:`text-[52px] xl:text-[62px] font-extrabold leading-[1.05] text-red-500 mb-5`,children:f}),i&&(0,U.jsx)(`p`,{className:`text-[#0B1B4D] font-bold text-lg xl:text-xl mb-3`,children:i}),(0,U.jsx)(`p`,{className:`text-gray-700 text-base xl:text-lg leading-relaxed mb-8 max-w-xl`,children:a}),(0,U.jsxs)(`div`,{className:`flex flex-row items-center gap-4`,children:[(0,U.jsxs)(`a`,{href:c,className:`\r
                  flex items-center justify-center gap-2.5\r
                  bg-red-500 hover:bg-red-600\r
                  text-white font-semibold\r
                  px-7 py-3.5 rounded-full\r
                  shadow-md transition text-base\r
                `,children:[(0,U.jsx)(No,{}),o]}),(0,U.jsxs)(`a`,{href:l,className:`\r
                  flex items-center justify-center gap-2.5\r
                  border-2 border-[#0B1B4D]\r
                  text-[#0B1B4D] hover:bg-[#0B1B4D] hover:text-white\r
                  font-semibold px-7 py-3.5\r
                  rounded-full transition bg-white text-base\r
                `,children:[(0,U.jsx)(B,{}),s]})]})]})}),(0,U.jsx)(`div`,{className:`absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none`,children:(0,U.jsx)(`svg`,{viewBox:`0 0 1440 100`,className:`w-full h-[80px] xl:h-[100px] block`,preserveAspectRatio:`none`,children:(0,U.jsx)(`path`,{fill:`#ffffff`,d:`M0,40 C320,100 420,100 740,40 C1060,-20 1120,-10 1440,30 L1440,100 L0,100 Z`})})})]})]})}function ls(){let e=dt(),[t,n]=(0,S.useState)([]),r=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/1200x800?text=Story+Image`;(0,S.useEffect)(()=>{(async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/stories`);n(Array.isArray(e)?e:[])}catch(e){console.log(e),n([])}})()},[]);let i=Array.isArray(t)?t.find(e=>e.type===`large`):null,a=Array.isArray(t)?t.find(e=>e.type===`tall`):null,o=Array.isArray(t)?t.filter(e=>e.type===`small`):[];return(0,U.jsx)(`section`,{className:`\r
        bg-[#F8FAFC]\r
        py-14\r
        lg:py-20\r
        overflow-hidden\r
      `,children:(0,U.jsxs)(`div`,{className:`\r
          max-w-7xl\r
          mx-auto\r
          px-4\r
          sm:px-6\r
          lg:px-8\r
        `,children:[(0,U.jsxs)(`div`,{className:`mb-8 lg:mb-10`,children:[(0,U.jsx)(`p`,{className:`\r
              text-[#E63946]\r
              uppercase\r
              tracking-[4px]\r
              text-xs\r
              font-bold\r
              mb-3\r
            `,children:`Real Stories`}),(0,U.jsx)(`h2`,{className:`\r
              text-[34px]\r
              sm:text-[42px]\r
              lg:text-5xl\r
              font-extrabold\r
              text-[#0B1B4D]\r
              leading-tight\r
              mb-4\r
            `,children:`Impact Stories`}),(0,U.jsx)(`div`,{className:`\r
              w-24\r
              h-1\r
              bg-[#E63946]\r
              rounded-full\r
            `})]}),(0,U.jsx)(`div`,{className:`\r
            flex\r
            flex-col\r
            gap-5\r
            lg:hidden\r
          `,children:Array.isArray(t)&&t.map(t=>(0,U.jsxs)(`div`,{className:`\r
                    relative\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    h-[340px]\r
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]\r
                    group\r
                  `,children:[(0,U.jsx)(`img`,{src:r(t.image),alt:t.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/800x600?text=Story+Image`},className:`\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      group-hover:scale-105\r
                      transition-all\r
                      duration-700\r
                    `}),(0,U.jsx)(`div`,{className:`\r
                      absolute\r
                      inset-0\r
                      bg-gradient-to-t\r
                      from-black/80\r
                      via-black/30\r
                      to-transparent\r
                    `}),(0,U.jsx)(`div`,{className:`\r
                      absolute\r
                      top-4\r
                      right-4\r
                      bg-[#E63946]\r
                      text-white\r
                      px-4\r
                      py-2\r
                      text-[11px]\r
                      font-bold\r
                      rounded-full\r
                    `,children:t.category}),(0,U.jsxs)(`div`,{className:`\r
                      absolute\r
                      bottom-0\r
                      left-0\r
                      right-0\r
                      p-5\r
                      text-white\r
                    `,children:[(0,U.jsx)(`h3`,{className:`\r
                        text-[26px]\r
                        font-extrabold\r
                        leading-tight\r
                        mb-3\r
                      `,children:t.title}),(0,U.jsx)(`p`,{className:`\r
                        text-sm\r
                        leading-relaxed\r
                        text-gray-200\r
                        mb-5\r
                        line-clamp-3\r
                      `,children:t.desc}),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>e(`/stories/${t._id}`),className:`\r
                        flex\r
                        items-center\r
                        gap-3\r
                        bg-white/15\r
                        backdrop-blur-md\r
                        hover:bg-white/25\r
                        border\r
                        border-white/20\r
                        text-white\r
                        px-5\r
                        py-3\r
                        rounded-full\r
                        text-sm\r
                        font-semibold\r
                        transition-all\r
                        duration-300\r
                      `,children:[`Read More`,(0,U.jsx)(ns,{className:`text-xs`})]})]})]},t._id))}),(0,U.jsxs)(`div`,{className:`\r
            hidden\r
            lg:grid\r
            lg:grid-cols-3\r
            gap-5\r
          `,children:[(0,U.jsxs)(`div`,{className:`\r
              lg:col-span-2\r
              flex\r
              flex-col\r
              gap-5\r
            `,children:[i&&(0,U.jsxs)(`div`,{className:`\r
                  relative\r
                  rounded-[34px]\r
                  overflow-hidden\r
                  h-[450px]\r
                  group\r
                `,children:[(0,U.jsx)(`img`,{src:r(i.image),alt:i.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x800?text=Story+Image`},className:`\r
                    w-full\r
                    h-full\r
                    object-cover\r
                    group-hover:scale-105\r
                    transition-all\r
                    duration-700\r
                  `}),(0,U.jsx)(`div`,{className:`absolute inset-0 bg-black/35`}),(0,U.jsx)(`div`,{className:`\r
                    absolute\r
                    top-5\r
                    right-5\r
                    bg-[#E63946]\r
                    text-white\r
                    px-5\r
                    py-2\r
                    text-sm\r
                    font-bold\r
                    rounded-full\r
                  `,children:i.category}),(0,U.jsxs)(`div`,{className:`\r
                    absolute\r
                    bottom-10\r
                    left-10\r
                    max-w-xl\r
                    text-white\r
                  `,children:[(0,U.jsx)(`h3`,{className:`\r
                      text-4xl\r
                      font-bold\r
                      mb-4\r
                      leading-tight\r
                    `,children:i.title}),(0,U.jsx)(`p`,{className:`\r
                      text-lg\r
                      text-gray-100\r
                      leading-relaxed\r
                      mb-6\r
                      line-clamp-3\r
                    `,children:i.desc}),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>e(`/stories/${i._id}`),className:`\r
                      bg-[#E63946]\r
                      hover:bg-red-600\r
                      text-white\r
                      px-6\r
                      py-3\r
                      rounded-full\r
                      font-semibold\r
                      flex\r
                      items-center\r
                      gap-3\r
                      transition-all\r
                      duration-300\r
                    `,children:[`Read More`,(0,U.jsx)(ns,{})]})]})]}),(0,U.jsx)(`div`,{className:`grid grid-cols-2 gap-5`,children:Array.isArray(o)&&o.map(t=>(0,U.jsxs)(`div`,{className:`\r
                        relative\r
                        rounded-[32px]\r
                        overflow-hidden\r
                        h-[330px]\r
                        group\r
                      `,children:[(0,U.jsx)(`img`,{src:r(t.image),alt:t.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/800x600?text=Story+Image`},className:`\r
                          w-full\r
                          h-full\r
                          object-cover\r
                          group-hover:scale-105\r
                          transition-all\r
                          duration-700\r
                        `}),(0,U.jsx)(`div`,{className:`absolute inset-0 bg-black/35`}),(0,U.jsx)(`div`,{className:`\r
                          absolute\r
                          top-5\r
                          right-5\r
                          bg-[#E63946]\r
                          text-white\r
                          px-5\r
                          py-2\r
                          text-sm\r
                          font-bold\r
                          rounded-full\r
                        `,children:t.category}),(0,U.jsxs)(`div`,{className:`\r
                          absolute\r
                          bottom-7\r
                          left-7\r
                          right-7\r
                          text-white\r
                        `,children:[(0,U.jsx)(`h3`,{className:`\r
                            text-2xl\r
                            font-bold\r
                            mb-4\r
                            leading-snug\r
                          `,children:t.title}),(0,U.jsx)(`button`,{type:`button`,onClick:()=>e(`/stories/${t._id}`),className:`\r
                            bg-white/20\r
                            backdrop-blur-md\r
                            hover:bg-white/30\r
                            text-white\r
                            px-5\r
                            py-2\r
                            rounded-full\r
                            text-sm\r
                            font-semibold\r
                            transition-all\r
                            duration-300\r
                          `,children:`Read More`})]})]},t._id))})]}),a&&(0,U.jsxs)(`div`,{className:`\r
                relative\r
                rounded-[34px]\r
                overflow-hidden\r
                min-h-[785px]\r
                group\r
              `,children:[(0,U.jsx)(`img`,{src:r(a.image),alt:a.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x800?text=Story+Image`},className:`\r
                  w-full\r
                  h-full\r
                  object-cover\r
                  group-hover:scale-105\r
                  transition-all\r
                  duration-700\r
                `}),(0,U.jsx)(`div`,{className:`absolute inset-0 bg-black/35`}),(0,U.jsx)(`div`,{className:`\r
                  absolute\r
                  top-5\r
                  right-5\r
                  bg-[#E63946]\r
                  text-white\r
                  px-5\r
                  py-2\r
                  text-sm\r
                  font-bold\r
                  rounded-full\r
                `,children:a.category}),(0,U.jsxs)(`div`,{className:`\r
                  absolute\r
                  bottom-10\r
                  left-8\r
                  right-8\r
                  text-white\r
                `,children:[(0,U.jsx)(`h3`,{className:`\r
                    text-5xl\r
                    font-black\r
                    leading-tight\r
                    mb-5\r
                  `,children:a.title}),(0,U.jsx)(`p`,{className:`\r
                    text-lg\r
                    leading-relaxed\r
                    text-gray-100\r
                    mb-7\r
                  `,children:a.desc}),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>e(`/stories/${a._id}`),className:`\r
                    bg-[#E63946]\r
                    hover:bg-red-600\r
                    text-white\r
                    px-6\r
                    py-3\r
                    rounded-full\r
                    font-semibold\r
                    flex\r
                    items-center\r
                    gap-3\r
                    transition-all\r
                    duration-300\r
                  `,children:[`Read More`,(0,U.jsx)(ns,{})]})]})]})]})]})})}function us({pageData:e}){let t=e?.footer||{},n=t?.logo||``;return(0,U.jsx)(`footer`,{className:`bg-[#FFF7E8] pt-20 pb-6 border-t border-gray-200`,children:(0,U.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,U.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-4\r
            gap-12\r
            pb-10\r
            border-b\r
            border-gray-200\r
          `,children:[(0,U.jsxs)(`div`,{children:[n&&(0,U.jsx)(`img`,{src:n,alt:`Prarambha Foundation`,loading:`eager`,onError:e=>{e.target.style.display=`none`},className:`\r
                    w-[240px]\r
                    lg:w-[260px]\r
                    h-[110px]\r
                    object-contain\r
                    mb-5\r
                  `}),(0,U.jsx)(`p`,{className:`\r
                text-gray-600\r
                leading-relaxed\r
                text-sm\r
              `,children:t.description||`Supporting children through inclusive education and therapy support.`}),(0,U.jsxs)(`div`,{className:`flex items-center gap-3 mt-6`,children:[(0,U.jsx)(`a`,{href:t?.facebook||`https://www.facebook.com/p/Prarambha-Foundation-61586256287748/`,target:`_blank`,rel:`noreferrer`,"aria-label":`Facebook`,className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  bg-[#F3F4F6]\r
                  hover:bg-[#E63946]\r
                  hover:text-white\r
                  transition-all\r
                  duration-300\r
                  flex\r
                  items-center\r
                  justify-center\r
                  cursor-pointer\r
                  text-[#1F2937]\r
                `,children:(0,U.jsx)(po,{})}),(0,U.jsx)(`a`,{href:t?.instagram||`https://www.instagram.com/prarambhafoundation/`,target:`_blank`,rel:`noreferrer`,"aria-label":`Instagram`,className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  bg-[#F3F4F6]\r
                  hover:bg-[#E63946]\r
                  hover:text-white\r
                  transition-all\r
                  duration-300\r
                  flex\r
                  items-center\r
                  justify-center\r
                  cursor-pointer\r
                  text-[#1F2937]\r
                `,children:(0,U.jsx)(fo,{})}),(0,U.jsx)(`a`,{href:t?.youtube||`https://youtube.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`YouTube`,className:`\r
                  w-10\r
                  h-10\r
                  rounded-full\r
                  bg-[#F3F4F6]\r
                  hover:bg-[#E63946]\r
                  hover:text-white\r
                  transition-all\r
                  duration-300\r
                  flex\r
                  items-center\r
                  justify-center\r
                  cursor-pointer\r
                  text-[#1F2937]\r
                `,children:(0,U.jsx)(uo,{})})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                text-xl\r
                font-bold\r
                mb-5\r
                text-[#1F2937]\r
              `,children:`Quick Links`}),(0,U.jsxs)(`ul`,{className:`\r
                space-y-3\r
                text-gray-600\r
                text-sm\r
              `,children:[(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Home`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/about`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`About Us`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/gallery`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Gallery`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/stories`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Blog`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/contact`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Contact`})})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                text-xl\r
                font-bold\r
                mb-5\r
                text-[#1F2937]\r
              `,children:`Our Programs`}),(0,U.jsxs)(`ul`,{className:`\r
                space-y-3\r
                text-gray-600\r
                text-sm\r
              `,children:[(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/programs/early-intervention`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Early Intervention`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/programs/therapy-support`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Therapy Support`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/programs/inclusive-education`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Inclusive Education`})}),(0,U.jsx)(`li`,{children:(0,U.jsx)(N,{to:`/programs/community-support`,className:`\r
                    hover:text-[#E63946]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Community Support`})})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                text-xl\r
                font-bold\r
                mb-5\r
                text-[#1F2937]\r
              `,children:`Contact Us`}),(0,U.jsxs)(`div`,{className:`\r
                space-y-4\r
                text-gray-600\r
                text-sm\r
              `,children:[(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(Do,{className:`text-[#E63946] text-xl flex-shrink-0 mt-1`}),(0,U.jsx)(`p`,{className:`flex-1`,children:t.phone||`+91 9979070998, 9409118461`})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(Uo,{className:`text-[#E63946] text-xl flex-shrink-0 mt-1`}),(0,U.jsx)(`p`,{className:`flex-1`,children:t.email||`foundationprarambha@gmail.com`})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(Ao,{className:`text-[#E63946] text-xl flex-shrink-0 mt-1`}),(0,U.jsx)(`p`,{className:`flex-1`,children:t.address||``})]})]}),(0,U.jsxs)(N,{to:`/contact`,className:`\r
                mt-6\r
                inline-flex\r
                items-center\r
                gap-2\r
                bg-[#E63946]\r
                hover:bg-red-600\r
                text-white\r
                px-6\r
                py-3\r
                rounded-full\r
                font-semibold\r
                transition-all\r
                duration-300\r
                shadow-lg\r
              `,children:[(0,U.jsx)(No,{}),`Support Us`]})]})]})})})}function ds({pageData:e}){let t=e?.programs||[],n=e=>e?e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:``,r={image1:e?.programImage1,image2:e?.programImage2,image3:e?.programImage3};return(0,U.jsx)(`section`,{className:`bg-white py-14 lg:py-24 overflow-hidden`,children:(0,U.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,U.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-2\r
            gap-12\r
            lg:gap-20\r
            items-center\r
          `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                text-[#E63946]\r
                font-bold\r
                uppercase\r
                tracking-[4px]\r
                text-xs\r
                mb-4\r
              `,children:`Our Core Programs`}),(0,U.jsxs)(`h2`,{className:`\r
    text-[36px]\r
    sm:text-[44px]\r
    lg:text-5xl\r
    font-extrabold\r
    text-[#0B1B4D]\r
    leading-[1.1]\r
    mb-6\r
  `,children:[`Supporting Every Child`,` `,(0,U.jsx)(`span`,{className:`text-[#E63946] whitespace-nowrap`,children:`With Education, Therapy & Skills`})]}),(0,U.jsx)(`p`,{className:`\r
                text-gray-600\r
                text-[15px]\r
                lg:text-lg\r
                leading-relaxed\r
                mb-10\r
                max-w-2xl\r
              `,children:`Our programs focus on early intervention, therapy, inclusive education, sensory development, and family support to help children grow with confidence, independence, and dignity.`}),(0,U.jsx)(`div`,{className:`space-y-5 lg:space-y-7`,children:t.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                    bg-[#F8FAFC]\r
                    rounded-[24px]\r
                    p-5\r
                    lg:p-7\r
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]\r
                    border\r
                    border-gray-100\r
                    transition\r
                    hover:-translate-y-1\r
                  `,style:{borderLeft:`5px solid ${e.color}`},children:[(0,U.jsx)(`h3`,{className:`\r
                      text-[18px]\r
                      lg:text-xl\r
                      font-bold\r
                      text-[#0B1B4D]\r
                      mb-4\r
                      leading-snug\r
                    `,children:e.title}),(0,U.jsx)(`ul`,{className:`space-y-2.5`,children:(e.points||[]).map((t,n)=>(0,U.jsxs)(`li`,{className:`\r
                            text-gray-600\r
                            text-sm\r
                            lg:text-base\r
                            flex items-start gap-2\r
                            leading-relaxed\r
                          `,children:[(0,U.jsx)(`span`,{className:`\r
                              mt-[8px]\r
                              w-1.5\r
                              h-1.5\r
                              rounded-full\r
                              flex-shrink-0\r
                            `,style:{background:e.color}}),t]},n))}),(0,U.jsx)(`a`,{href:`/about`,className:`\r
                            mt-5\r
                            inline-flex\r
                            items-center\r
                            gap-2\r
                            text-sm\r
                            font-semibold\r
                            transition\r
                            hover:translate-x-1\r
                            relative\r
                            z-50\r
                            cursor-pointer\r
                          `,style:{color:e.color,pointerEvents:`auto`},children:`Read More →`})]},t))})]}),(0,U.jsxs)(`div`,{className:`\r
              relative\r
              mt-12\r
              lg:mt-0\r
              flex items-center justify-center\r
            `,children:[(0,U.jsxs)(`div`,{className:`\r
                flex\r
                flex-col\r
                gap-6\r
                lg:hidden\r
                w-full\r
                items-center\r
              `,children:[r.image1&&(0,U.jsx)(`img`,{src:n(r.image1),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                    w-[220px]\r
                    rounded-[28px]\r
                    shadow-2xl\r
                    rotate-[-4deg]\r
                  `}),r.image2&&(0,U.jsx)(`img`,{src:n(r.image2),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                    w-[280px]\r
                    rounded-[30px]\r
                    shadow-2xl\r
                    rotate-[3deg]\r
                    -mt-2\r
                  `}),r.image3&&(0,U.jsx)(`img`,{src:n(r.image3),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                    w-[230px]\r
                    rounded-[28px]\r
                    shadow-2xl\r
                    rotate-[-3deg]\r
                  `})]}),(0,U.jsxs)(`div`,{className:`\r
                hidden\r
                lg:block\r
                relative\r
                h-[620px]\r
                w-full\r
              `,children:[r.image1&&(0,U.jsx)(`div`,{className:`\r
                    absolute\r
                    top-40\r
                    left-12\r
                    w-[240px]\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    shadow-2xl\r
                    rotate-[-6deg]\r
                    hover:rotate-0\r
                    transition\r
                    duration-500\r
                    z-10\r
                  `,children:(0,U.jsx)(`img`,{src:n(r.image1),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                      w-full\r
                      h-[200px]\r
                      object-cover\r
                    `})}),r.image2&&(0,U.jsx)(`div`,{className:`\r
                    absolute\r
                    top-[280px]\r
                    right-1\r
                    w-[300px]\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    shadow-2xl\r
                    rotate-[4deg]\r
                    hover:rotate-0\r
                    transition\r
                    duration-500\r
                    z-20\r
                  `,children:(0,U.jsx)(`img`,{src:n(r.image2),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                      w-full\r
                      h-[300px]\r
                      object-cover\r
                    `})}),r.image3&&(0,U.jsx)(`div`,{className:`\r
                    absolute\r
                    bottom-[-80px]\r
                    left-28\r
                    w-[260px]\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    shadow-2xl\r
                    rotate-[-4deg]\r
                    hover:rotate-0\r
                    transition\r
                    duration-500\r
                    z-10\r
                  `,children:(0,U.jsx)(`img`,{src:n(r.image3),alt:`Program`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/600x600?text=Program+Image`},className:`\r
                      w-full\r
                      h-[220px]\r
                      object-cover\r
                    `})})]})]})]})})})}function fs({pageData:e}){let t=e?.stats||[],n={smile:(0,U.jsx)(xo,{}),users:(0,U.jsx)(B,{}),graduation:(0,U.jsx)(Lo,{}),handshake:(0,U.jsx)(Po,{}),heart:(0,U.jsx)(No,{}),star:(0,U.jsx)(bo,{}),globe:(0,U.jsx)(Ro,{}),book:(0,U.jsx)(Qo,{}),child:(0,U.jsx)(Wo,{}),school:(0,U.jsx)(wo,{})};return(0,U.jsx)(`section`,{className:`py-12 lg:py-24 bg-[#F4FBFF] overflow-hidden`,children:(0,U.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,U.jsx)(`div`,{className:`grid grid-cols-2 gap-4 lg:hidden`,children:t.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                bg-white\r
                rounded-[24px]\r
                shadow-md\r
                border border-[#EAF6FF]\r
                py-8\r
                px-4\r
                text-center\r
              `,children:[(0,U.jsx)(`div`,{className:`\r
                  w-16\r
                  h-16\r
                  mx-auto\r
                  rounded-full\r
                  bg-[#EAF6FF]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-[#38BDF8]\r
                  text-3xl\r
                  mb-4\r
                `,children:n[e.icon]||(0,U.jsx)(xo,{})}),(0,U.jsx)(`h2`,{className:`\r
                  text-[32px]\r
                  font-extrabold\r
                  text-[#F7C600]\r
                  leading-none\r
                  mb-3\r
                `,children:e.number}),(0,U.jsx)(`p`,{className:`\r
                  text-[#1F2937]\r
                  text-sm\r
                  leading-relaxed\r
                  font-medium\r
                `,children:e.label})]},t))}),(0,U.jsx)(`div`,{className:`hidden lg:grid grid-cols-4 gap-6`,children:t.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                bg-white\r
                rounded-[28px]\r
                shadow-lg\r
                py-14\r
                px-8\r
                text-center\r
                hover:-translate-y-2\r
                transition\r
                duration-300\r
                border border-[#EAF6FF]\r
              `,children:[(0,U.jsx)(`div`,{className:`\r
                  w-20\r
                  h-20\r
                  mx-auto\r
                  rounded-full\r
                  bg-[#EAF6FF]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-[#38BDF8]\r
                  text-4xl\r
                  mb-6\r
                `,children:n[e.icon]||(0,U.jsx)(xo,{})}),(0,U.jsx)(`h2`,{className:`\r
                  text-5xl\r
                  font-extrabold\r
                  text-[#F7C600]\r
                  mb-4\r
                `,children:e.number}),(0,U.jsx)(`p`,{className:`\r
                  text-[#1F2937]\r
                  text-lg\r
                  font-medium\r
                  leading-relaxed\r
                `,children:e.label})]},t))})]})})}function ps(){return(0,U.jsx)(`section`,{className:`w-full bg-white py-16 lg:py-24 relative z-30`,children:(0,U.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,U.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto mb-16`,children:[(0,U.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-6`,children:`Why Early Identification Matters`}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-gray-600 font-medium leading-relaxed`,children:`The first 14 years of a child's life are the foundation for learning, communication, behaviour, and overall development. Early support helps children reach their full potential.`}),(0,U.jsx)(`div`,{className:`w-24 h-1.5 bg-[#E63946] mx-auto mt-6 rounded-full`})]}),(0,U.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-10`,children:[(0,U.jsxs)(`div`,{className:`bg-[#F9FAFB] rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300`,children:[(0,U.jsx)(`h3`,{className:`text-2xl font-bold text-[#E63946] mb-8 pb-4 border-b border-gray-200`,children:`Early Years (0–8 Years)`}),(0,U.jsxs)(`div`,{className:`space-y-8 flex-grow`,children:[(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(es,{className:`text-2xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`0–3 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-pink-500 mt-1`,children:`•`}),` Brain develops rapidly.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-pink-500 mt-1`,children:`•`}),` Early years build speech, bonding, communication, and basic behaviour.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-pink-500 mt-1`,children:`•`}),` Delays are easier to identify and support.`]})]})]})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(Eo,{className:`text-2xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`3–6 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-blue-500 mt-1`,children:`•`}),` Language, thinking, attention, and learning skills grow quickly.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-blue-500 mt-1`,children:`•`}),` Children prepare for school readiness.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-blue-500 mt-1`,children:`•`}),` Early intervention improves long-term outcomes.`]})]})]})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(wo,{className:`text-xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`6–8 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-green-600 mt-1`,children:`•`}),` Reading, writing, understanding, and social interaction become stronger.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-green-600 mt-1`,children:`•`}),` Learning difficulties become more visible.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-green-600 mt-1`,children:`•`}),` Early support builds confidence and academic success.`]})]})]})]})]}),(0,U.jsx)(`div`,{className:`mt-8 pt-6 border-t border-gray-200`,children:(0,U.jsx)(`p`,{className:`text-center font-bold text-[#0B1B4D] text-lg bg-yellow-100 py-3 rounded-xl shadow-sm`,children:`Early Identification = Better Development`})})]}),(0,U.jsxs)(`div`,{className:`bg-[#F9FAFB] rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300`,children:[(0,U.jsx)(`h3`,{className:`text-2xl font-bold text-[#E63946] mb-8 pb-4 border-b border-gray-200`,children:`Middle Childhood & Early Teens (9–14 Years)`}),(0,U.jsxs)(`div`,{className:`space-y-8 flex-grow`,children:[(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(Oo,{className:`text-xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`9–11 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-purple-600 mt-1`,children:`•`}),` Academic skills become more advanced.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-purple-600 mt-1`,children:`•`}),` Learning, behaviour, and attention challenges become easier to identify.`]})]})]})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(Zo,{className:`text-xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`11–13 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-teal-600 mt-1`,children:`•`}),` Emotional regulation, confidence, and self-awareness become important.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-teal-600 mt-1`,children:`•`}),` ADHD, Autism, Learning Disabilities, and Anxiety may become more noticeable.`]})]})]})]}),(0,U.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,U.jsx)(`div`,{className:`w-12 h-12 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`,children:(0,U.jsx)(mo,{className:`text-xl`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`text-lg font-bold text-[#0B1B4D] mb-2`,children:`13–14 Years`}),(0,U.jsxs)(`ul`,{className:`space-y-2`,children:[(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-orange-500 mt-1`,children:`•`}),` Preparation for higher education and independence begins.`]}),(0,U.jsxs)(`li`,{className:`flex items-start gap-2 text-gray-600`,children:[(0,U.jsx)(`span`,{className:`text-orange-500 mt-1`,children:`•`}),` Timely intervention improves confidence, life skills, and future readiness.`]})]})]})]})]}),(0,U.jsx)(`div`,{className:`mt-8 pt-6 border-t border-gray-200`,children:(0,U.jsx)(`p`,{className:`text-center font-bold text-[#0B1B4D] text-lg bg-yellow-100 py-3 rounded-xl shadow-sm`,children:`Support Today = Stronger Tomorrow`})})]})]})]})})}function ms(){let[e,t]=(0,S.useState)(null);(0,S.useEffect)(()=>{n()},[]);let n=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/pages/home`);t(e)}catch(e){console.log(e)}};return e?(0,U.jsxs)(`div`,{className:`\r
        w-full\r
        overflow-x-hidden\r
        bg-white\r
      `,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(cs,{pageData:e}),(0,U.jsx)(ps,{}),(0,U.jsx)(ds,{pageData:e}),(0,U.jsx)(fs,{pageData:e}),(0,U.jsx)(ls,{pageData:e}),(0,U.jsx)(us,{pageData:e})]}):(0,U.jsx)(`div`,{className:`\r
          min-h-screen\r
          flex\r
          items-center\r
          justify-center\r
          bg-white\r
        `,children:(0,U.jsxs)(`div`,{className:`text-center`,children:[(0,U.jsx)(`div`,{className:`\r
              w-16\r
              h-16\r
              border-4\r
              border-[#E63946]\r
              border-t-transparent\r
              rounded-full\r
              animate-spin\r
              mx-auto\r
              mb-5\r
            `}),(0,U.jsx)(`h2`,{className:`\r
              text-3xl\r
              font-extrabold\r
              text-[#1F2937]\r
            `,children:`Loading...`})]})})}function hs({data:e}){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .about-hero {
          background: #fffbe8;
          padding: 80px 40px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 420px;
        }

        .hero-text {
          flex: 1;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: #E63946;
          color: #fff;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 18px;
          font-weight: 700;
        }

        .hero-title {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .hero-cta {
          display: inline-block;
          background: #E63946;
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .hero-cta:hover {
          background: #cf2e3c;
          transform: translateY(-2px);
        }

        .hero-img-wrap {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-img-wrap img {
          width: 340px;
          height: 420px;
          object-fit: cover;
          border-radius: 24px 24px 0 0;
          position: relative;
          z-index: 1;
          transition: 0.4s ease;
        }

        .hero-img-wrap img:hover {
          transform: scale(1.03);
        }

        .hero-blob {
          position: absolute;
          right: -40px;
          bottom: 0;
          width: 380px;
          height: 380px;
          background: #F4A020;
          border-radius: 60%;
        }

        .dots-decor {
          position: absolute;
          right: 60px;
          top: 40px;
          display: grid;
          grid-template-columns: repeat(5, 8px);
          gap: 8px;
        }

        .dots-decor span {
          width: 8px;
          height: 8px;
          background: #2A9BD430;
          border-radius: 50%;
        }

        @media (max-width: 900px) {

          .about-hero {
            flex-direction: column;
            padding: 40px 20px;
            text-align: center;
          }

          .hero-img-wrap img,
          .hero-blob {
            display: none;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-desc {
            font-size: 15px;
          }
        }
      `}),(0,U.jsx)(`div`,{style:{background:`#fffbe8`},children:(0,U.jsxs)(`div`,{className:`about-hero`,children:[(0,U.jsxs)(`div`,{className:`hero-text`,children:[(0,U.jsx)(`div`,{className:`hero-badge`,children:e?.subtitle||`About Us`}),(0,U.jsx)(`h1`,{className:`hero-title`,children:e?.title||`Empowering Every Child With Inclusion`}),(0,U.jsx)(`p`,{className:`hero-desc`,children:e?.description||`We believe every child deserves equal opportunities, quality support, and a caring environment to grow with confidence and dignity.`}),(0,U.jsx)(`a`,{href:`#mission`,className:`hero-cta`,children:e?.buttonText||`Learn More`})]}),(0,U.jsxs)(`div`,{className:`hero-img-wrap`,children:[(0,U.jsx)(`div`,{className:`hero-blob`}),(0,U.jsx)(`div`,{className:`dots-decor`,children:Array.from({length:25}).map((e,t)=>(0,U.jsx)(`span`,{},t))}),(0,U.jsx)(`img`,{src:e?.image?e.image.startsWith(`http`)?e.image:`https://lightgrey-squid-753475.hostingersite.com${e.image}`:`https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80`,alt:`about hero`,onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80`},loading:`lazy`})]})]})})]})}function gs({data:e}){let t=e?.image?e.image.startsWith(`http`)?e.image:`https://lightgrey-squid-753475.hostingersite.com${e.image}`:`https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80`;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .mission-section {
          background: #fff;
          padding: 70px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .mission-img-wrap {
          flex: 1;
          position: relative;
        }

        .mission-img-wrap img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transition: 0.4s ease;
        }

        .mission-img-wrap img:hover {
          transform: scale(1.02);
        }

        .mission-badge-float {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #F4A020;
          color: #fff;
          font-weight: 800;
          padding: 14px 20px;
          border-radius: 16px;
          text-align: center;
          line-height: 1.4;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .mission-badge-float strong {
          font-size: 24px;
          display: block;
        }

        .mission-content {
          flex: 1;
        }

        .section-tag {
          font-weight: 800;
          font-size: 13px;
          color: #E63946;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1.25;
          margin-bottom: 18px;
        }

        .section-title span {
          color: #E63946;
        }

        .section-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.9;
          margin-bottom: 24px;
        }

        .mission-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mission-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #444;
          font-weight: 500;
        }

        .mission-list li::before {
          content: '✓';
          width: 26px;
          height: 26px;
          background: #E63946;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {

          .mission-section {
            flex-direction: column;
            padding: 40px 20px;
          }

          .mission-img-wrap img {
            height: 350px;
          }

          .mission-badge-float {
            left: 10px;
            bottom: 10px;
          }
        }
      `}),(0,U.jsxs)(`section`,{id:`mission`,className:`mission-section`,children:[(0,U.jsxs)(`div`,{className:`mission-img-wrap`,children:[(0,U.jsx)(`img`,{src:t,alt:`mission`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80`}}),(0,U.jsxs)(`div`,{className:`mission-badge-float`,children:[(0,U.jsx)(`strong`,{children:`14+`}),`Years of Impact`]})]}),(0,U.jsxs)(`div`,{className:`mission-content`,children:[(0,U.jsx)(`p`,{className:`section-tag`,children:e?.heading||`Our Mission`}),(0,U.jsx)(`h2`,{className:`section-title`,children:e?.title||`A Journey of Love & Purpose`}),(0,U.jsx)(`p`,{className:`section-desc`,children:e?.content}),(0,U.jsxs)(`ul`,{className:`mission-list`,children:[(0,U.jsx)(`li`,{children:`EARLY SCREENING & IDENTIFICATION`}),(0,U.jsx)(`li`,{children:`PARENT GUIDANCE & COUNSELLING`}),(0,U.jsx)(`li`,{children:`SPECIAL EDUCATION`}),(0,U.jsx)(`li`,{children:`GUIDANCE ON THERAPY SUPPORT`})]})]})]})]})}function _s({data:e}){let t=e?.image?e.image.startsWith(`http`)?e.image:`https://lightgrey-squid-753475.hostingersite.com${e.image}`:`https://i.pravatar.cc/500?img=47`;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .chair-section {
          background: #fff;
          padding: 80px 40px;
        }

        .chair-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .chair-img-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .chair-img-wrap img {
          width: 320px;
          height: 400px;
          object-fit: cover;
          border-radius: 24px;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          transition: 0.4s ease;
        }

        .chair-img-wrap img:hover {
          transform: scale(1.03);
        }

        .chair-blob {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 320px;
          height: 400px;
          background: #E6394618;
          border-radius: 24px;
          z-index: 1;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #1a1a2e;
          margin-bottom: 20px;
        }

        .section-title span {
          color: #E63946;
        }

        .chair-quote {
          font-size: 20px;
          line-height: 1.7;
          font-style: italic;
          color: #333;
          border-left: 5px solid #E63946;
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .section-desc {
          color: #666;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .chair-name {
          font-size: 22px;
          font-weight: 900;
          color: #1a1a2e;
        }

        .chair-role {
          color: #E63946;
          font-weight: 600;
          margin-top: 4px;
        }

        @media (max-width: 900px) {

          .chair-inner {
            flex-direction: column;
            text-align: center;
          }

          .chair-quote {
            border-left: none;
            border-top: 5px solid #E63946;
            padding-left: 0;
            padding-top: 20px;
          }

          .chair-img-wrap img,
          .chair-blob {
            width: 280px;
            height: 340px;
          }
        }

        @media (max-width: 600px) {

          .chair-section {
            padding: 60px 20px;
          }
        }
      `}),(0,U.jsx)(`section`,{className:`chair-section`,children:(0,U.jsxs)(`div`,{className:`chair-inner`,children:[(0,U.jsxs)(`div`,{className:`chair-img-wrap`,children:[(0,U.jsx)(`div`,{className:`chair-blob`}),(0,U.jsx)(`img`,{src:t,alt:`Chairperson`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/500?img=47`}})]}),(0,U.jsxs)(`div`,{className:`chair-content`,children:[(0,U.jsx)(`p`,{className:`section-tag`,children:e?.heading||`Message from the Chairperson`}),(0,U.jsx)(`h2`,{className:`section-title`,children:e?.title||(0,U.jsxs)(U.Fragment,{children:[`Leading with `,(0,U.jsx)(`span`,{children:`Heart`})]})}),(0,U.jsx)(`blockquote`,{className:`chair-quote`,children:e?.quote||`Every child deserves dignity, opportunity, and unconditional support.`}),(0,U.jsx)(`p`,{className:`section-desc`,children:e?.description||`Our mission is to build a compassionate and inclusive future where every child can grow, learn, and shine with confidence.`}),(0,U.jsx)(`div`,{className:`chair-name`,children:e?.name||`Chairperson Name`}),(0,U.jsx)(`div`,{className:`chair-role`,children:e?.role||`Founder & Chairperson`})]})]})})]})}function vs({name:e,role:t,image:n,color:r}){let i=n?n.startsWith(`http`)?n:`https://lightgrey-squid-753475.hostingersite.com${n}`:`https://i.pravatar.cc/300`;return(0,U.jsxs)(`div`,{className:`team-card`,children:[(0,U.jsx)(`div`,{className:`team-avatar`,style:{borderColor:r||`#E63946`},children:(0,U.jsx)(`img`,{src:i,alt:e,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/300`}})}),(0,U.jsx)(`h3`,{className:`team-name`,children:e}),(0,U.jsx)(`p`,{className:`team-role`,style:{color:r||`#E63946`},children:t})]})}function ys({data:e}){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .team-section {
          background: #fff;
          padding: 80px 40px;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1.2;
        }

        .section-title span {
          color: #E63946;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-card {
          background: #fafafa;
          border-radius: 24px;
          padding: 30px 20px;
          text-align: center;
          transition: 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .team-avatar {
          width: 110px;
          height: 110px;
          margin: 0 auto 20px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #E63946;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .team-avatar img:hover {
          transform: scale(1.08);
        }

        .team-name {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .team-role {
          font-size: 15px;
          font-weight: 600;
        }

        @media (max-width: 992px) {

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {

          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-section {
            padding: 60px 20px;
          }
        }

      `}),(0,U.jsx)(`section`,{className:`team-section`,children:(0,U.jsxs)(`div`,{className:`team-container`,children:[(0,U.jsxs)(`div`,{className:`section-header`,children:[(0,U.jsx)(`p`,{className:`section-tag`,children:`The People Behind the Mission`}),(0,U.jsxs)(`h2`,{className:`section-title`,children:[`Meet Our `,(0,U.jsx)(`span`,{children:`Team`})]})]}),(0,U.jsx)(`div`,{className:`team-grid`,children:e?.map((e,t)=>(0,U.jsx)(vs,{...e},t))})]})})]})}function bs({data:e}){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .cta-section {
          background: linear-gradient(
            135deg,
            #E63946,
            #F4A020
          );
          padding: 90px 20px;
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .cta-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          color: #fff;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          backdrop-filter: blur(6px);
        }

        .cta-title {
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .cta-desc {
          max-width: 750px;
          margin: 0 auto 35px;
          color: rgba(255,255,255,0.92);
          font-size: 17px;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          background: #fff;
          color: #E63946;
          padding: 16px 34px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition: 0.3s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .cta-btn-primary:hover {
          transform: translateY(-4px);
        }

        .cta-btn-outline {
          border: 2px solid #fff;
          color: #fff;
          padding: 16px 34px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition: 0.3s ease;
        }

        .cta-btn-outline:hover {
          background: #fff;
          color: #E63946;
        }

        .cta-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }

        .circle-one {
          width: 260px;
          height: 260px;
          top: -100px;
          left: -100px;
        }

        .circle-two {
          width: 320px;
          height: 320px;
          bottom: -150px;
          right: -120px;
        }
      `}),(0,U.jsxs)(`section`,{className:`cta-section`,children:[(0,U.jsx)(`div`,{className:`cta-circle circle-one`}),(0,U.jsx)(`div`,{className:`cta-circle circle-two`}),(0,U.jsxs)(`div`,{className:`cta-container`,children:[(0,U.jsx)(`div`,{className:`cta-tag`,children:`💛 Make a Difference Today`}),(0,U.jsx)(`h2`,{className:`cta-title`,children:e?.title}),(0,U.jsx)(`p`,{className:`cta-desc`,children:e?.description}),(0,U.jsxs)(`div`,{className:`cta-buttons`,children:[(0,U.jsx)(`a`,{href:`/support-us`,className:`cta-btn-primary`,children:e?.button1||`Donate Now 💛`}),(0,U.jsx)(`a`,{href:`/contact`,className:`cta-btn-outline`,children:e?.button2||`Become a Volunteer`})]})]})]})]})}var xs=(0,S.createContext)();function Ss({children:e}){let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0);(0,S.useEffect)(()=>{a()},[]);let a=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/pages/home`);n(e)}catch(e){console.log(e)}finally{i(!1)}};return(0,U.jsx)(xs.Provider,{value:{pageData:t,setPageData:n,loading:r},children:e})}var Cs=()=>(0,S.useContext)(xs);function ws(){let{pageData:e}=Cs(),[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0);return(0,S.useEffect)(()=>{(async()=>{try{n(await(await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/pages/about`)).json())}catch(e){console.log(e)}finally{i(!1)}})()},[]),r?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,justifyContent:`center`,alignItems:`center`,background:`#fff`},children:(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{width:`70px`,height:`70px`,border:`5px solid #E63946`,borderTop:`5px solid transparent`,borderRadius:`50%`,margin:`0 auto 20px`,animation:`spin 1s linear infinite`}}),(0,U.jsx)(`h2`,{style:{fontSize:`32px`,fontWeight:`900`,color:`#0B1B4D`},children:`Loading...`})]})}),(0,U.jsx)(`style`,{children:`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(hs,{data:t?.hero}),(0,U.jsx)(gs,{data:t?.mission}),(0,U.jsx)(_s,{data:t?.chairperson}),(0,U.jsx)(ys,{data:t?.team}),(0,U.jsx)(bs,{data:t?.cta}),(0,U.jsx)(us,{pageData:e})]})}function Ts({className:e=``}){return(0,U.jsxs)(`svg`,{viewBox:`0 0 120 120`,className:e,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,U.jsx)(`circle`,{cx:`60`,cy:`60`,r:`56`,stroke:`currentColor`,strokeWidth:`1.5`,strokeDasharray:`2 7`,strokeLinecap:`round`}),(0,U.jsx)(`circle`,{cx:`60`,cy:`60`,r:`40`,stroke:`currentColor`,strokeWidth:`1.5`,opacity:`0.5`}),(0,U.jsx)(`circle`,{cx:`60`,cy:`60`,r:`4`,fill:`currentColor`})]})}function Es(){let{pageData:e}=Cs(),[t,n]=(0,S.useState)(`preschool`);return(0,U.jsxs)(`div`,{className:`font-[Jakarta] antialiased bg-[#FBF6EE] overflow-x-hidden min-h-screen flex flex-col text-[#22304F]`,children:[(0,U.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .font-body, .font-\\[Jakarta\\] { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
        @keyframes seal-spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .seal-spin { animation: seal-spin 40s linear infinite; }
      `}),(0,U.jsx)(os,{pageData:e}),(0,U.jsxs)(`main`,{className:`flex-grow w-full`,children:[(0,U.jsxs)(`div`,{className:`relative bg-[#22304F] py-14 text-center text-white overflow-hidden`,children:[(0,U.jsx)(Ts,{className:`seal-spin absolute -right-8 -top-10 w-40 h-40 text-white/10`}),(0,U.jsx)(Ts,{className:`seal-spin absolute -left-10 -bottom-14 w-44 h-44 text-white/10`,style:{animationDirection:`reverse`}}),(0,U.jsx)(`p`,{className:`uppercase tracking-[0.3em] text-xs font-semibold text-[#E8A33D] mb-3`,children:`Prarambha Foundation`}),(0,U.jsx)(`h1`,{className:`font-display text-3xl sm:text-5xl font-semibold tracking-tight`,children:`Our Association`}),(0,U.jsx)(`p`,{className:`mt-4 text-lg text-white/70 max-w-2xl mx-auto px-4`,children:`Collaborating with institutions and government departments to create inclusive learning environments.`})]}),(0,U.jsx)(`section`,{className:`bg-[#FBF6EE]/95 backdrop-blur border-b border-[#22304F]/10 sticky top-0 z-20`,children:(0,U.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,U.jsxs)(`div`,{className:`flex justify-center sm:justify-start gap-8 py-4`,children:[(0,U.jsxs)(`button`,{onClick:()=>n(`preschool`),className:`relative flex items-center gap-2 pb-2 font-semibold text-sm sm:text-base tracking-wide transition-colors duration-300 ${t===`preschool`?`text-[#22304F]`:`text-[#22304F]/40 hover:text-[#22304F]/70`}`,children:[(0,U.jsx)(wo,{className:t===`preschool`?`text-[#E15B4D]`:``}),`My Childhood Pre School`,t===`preschool`&&(0,U.jsx)(`span`,{className:`absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#E15B4D]`})]}),(0,U.jsxs)(`button`,{onClick:()=>n(`icds-amc`),className:`relative flex items-center gap-2 pb-2 font-semibold text-sm sm:text-base tracking-wide transition-colors duration-300 ${t===`icds-amc`?`text-[#22304F]`:`text-[#22304F]/40 hover:text-[#22304F]/70`}`,children:[(0,U.jsx)(Xo,{className:t===`icds-amc`?`text-[#E15B4D]`:``}),`ICDS Department & AMC`,t===`icds-amc`&&(0,U.jsx)(`span`,{className:`absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#E15B4D]`})]})]})})}),t===`preschool`&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20`,children:[(0,U.jsxs)(`div`,{className:`w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left`,children:[(0,U.jsxs)(`h1`,{className:`font-display text-[34px] sm:text-[46px] lg:text-[54px] font-semibold text-[#22304F] leading-[1.15] mb-6 tracking-tight`,children:[`Prarambha Foundation `,(0,U.jsx)(`br`,{className:`hidden lg:block`}),(0,U.jsx)(`span`,{className:`text-[#E15B4D] italic`,children:`&`}),` My Childhood Pre School`]}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-[#5C6B85] leading-relaxed mb-8 max-w-2xl`,children:`Empowering Every Child Through Inclusive Education and Early Intervention.`}),(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsx)(`div`,{className:`w-16 h-[3px] bg-[#E8A33D] rounded-full`}),(0,U.jsx)(`div`,{className:`w-4 h-[3px] bg-[#E15B4D] rounded-full`})]})]}),(0,U.jsx)(`div`,{className:`w-full lg:w-1/2`,children:(0,U.jsxs)(`div`,{className:`relative`,children:[(0,U.jsx)(`div`,{className:`absolute inset-0 bg-[#E8A33D]/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10`}),(0,U.jsx)(`img`,{src:`/assets/MyChildhood%20PreSchool-CwBmH5oQ.jpeg`,alt:`My Childhood Pre School`,className:`w-full h-auto object-cover rounded-[2rem] shadow-xl border border-white`})]})})]}),(0,U.jsxs)(`section`,{className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center`,children:[(0,U.jsx)(`p`,{className:`font-display text-xl sm:text-2xl text-[#22304F] leading-relaxed mb-6 font-medium`,children:`Prarambha Foundation proudly collaborates with My Childhood Pre School, a progressive early childhood education institution committed to nurturing every child's unique potential.`}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-[#5C6B85] leading-relaxed`,children:`Through this partnership, we work towards creating an inclusive and supportive learning environment for children with developmental, learning, and behavioral challenges. At our Akhbarnagar, Nava Vadaj, Ahmedabad Centre, we currently support more than 30 children through individualized educational and developmental programs designed to meet each child's specific needs.`})]}),(0,U.jsx)(`section`,{className:`bg-white py-16 lg:py-24 mt-8 border-y border-[#22304F]/5`,children:(0,U.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,U.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,U.jsx)(`p`,{className:`uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-3`,children:`What We Offer`}),(0,U.jsx)(`h2`,{className:`font-display text-3xl sm:text-4xl font-semibold text-[#22304F]`,children:`Our Key Areas of Support`})]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,children:[`Individualized Learning Plans (ILP)`,`Early Intervention Programs`,`Special Education Support`,`School Readiness Programs`,`Developmental Screening & Assessment`,`Behavioural and Social Skills Development`,`Parent Guidance & Counselling`,`Inclusive Classroom Support`].map((e,t)=>(0,U.jsxs)(`div`,{className:`bg-[#FBF6EE] p-6 rounded-2xl border border-[#22304F]/5 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-[#E8A33D]/60 hover:-translate-y-1`,children:[(0,U.jsx)(Jo,{className:`text-[#E8A33D] text-2xl flex-shrink-0`}),(0,U.jsx)(`span`,{className:`text-[#22304F] font-medium leading-snug`,children:e})]},t))})]})}),(0,U.jsx)(`section`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24`,children:(0,U.jsxs)(`div`,{className:`relative bg-[#22304F] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center overflow-hidden`,children:[(0,U.jsx)(Ts,{className:`absolute -right-12 -bottom-12 w-56 h-56 text-white/5`}),(0,U.jsx)(`div`,{className:`w-16 h-16 bg-[#E8A33D] rounded-full flex items-center justify-center shadow-lg mb-8`,children:(0,U.jsx)(Io,{className:`text-[#22304F] text-2xl`})}),(0,U.jsx)(`h2`,{className:`font-display text-3xl sm:text-4xl font-semibold text-white mb-6`,children:`Day Care & Learning Support`}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-white/75 leading-relaxed max-w-4xl`,children:`In addition to educational interventions, Prarambha Foundation also provides a structured Day Care and Development Support Program for children requiring additional attention, supervision, and developmental guidance. The program focuses on enhancing communication, social interaction, daily living skills, learning readiness, and overall child development in a safe and nurturing environment.`})]})}),(0,U.jsxs)(`section`,{className:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20`,children:[(0,U.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,U.jsx)(`h2`,{className:`font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-4`,children:`Children We Support`}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-[#5C6B85]`,children:`Our programs are designed for children with:`})]}),(0,U.jsx)(`div`,{className:`flex flex-wrap justify-center gap-3 max-w-4xl mx-auto`,children:[`Developmental Delays`,`Autism Spectrum Disorder (ASD)`,`ADHD`,`Speech & Language Delays`,`Specific Learning Disabilities`,`Intellectual Disabilities`,`Down Syndrome`,`Cerebral Palsy`,`Behavioural and Social Development Challenges`,`School Readiness Concerns`].map((e,t)=>(0,U.jsxs)(`div`,{className:`flex items-center gap-2 bg-white border border-[#22304F]/10 rounded-full px-5 py-3 hover:border-[#E15B4D]/40 hover:bg-[#FBF6EE] transition-colors duration-200`,children:[(0,U.jsx)(Go,{className:`text-[#E15B4D] text-xs flex-shrink-0`}),(0,U.jsx)(`span`,{className:`text-base sm:text-lg text-[#22304F]/80 font-medium`,children:e})]},t))})]}),(0,U.jsx)(`section`,{className:`bg-white py-16 lg:py-24 border-t border-[#22304F]/5`,children:(0,U.jsxs)(`div`,{className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,children:[(0,U.jsx)(`h2`,{className:`font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-8`,children:`About My Childhood Pre School`}),(0,U.jsxs)(`div`,{className:`bg-[#FBF6EE] p-8 rounded-3xl border border-[#22304F]/5`,children:[(0,U.jsxs)(`p`,{className:`text-xl text-[#22304F] leading-relaxed mb-4 font-medium`,children:[(0,U.jsx)(`span`,{className:`font-display font-semibold text-[#E15B4D]`,children:`My Childhood Pre School`}),` `,`is dedicated to providing quality early childhood education through child-centered learning, experiential activities, and holistic development.`]}),(0,U.jsx)(`p`,{className:`text-lg text-[#5C6B85] leading-relaxed`,children:`The school believes in fostering curiosity, creativity, confidence, and strong foundational skills during the most important years of a child's life.`})]})]})}),(0,U.jsxs)(`section`,{className:`relative bg-[#22304F] py-16 lg:py-20 mt-auto overflow-hidden`,children:[(0,U.jsx)(Ts,{className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] text-white/5`}),(0,U.jsxs)(`div`,{className:`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,children:[(0,U.jsx)(`div`,{className:`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8`,children:(0,U.jsx)(No,{className:`text-[#E15B4D] text-2xl`})}),(0,U.jsxs)(`p`,{className:`font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto`,children:[`Together,`,` `,(0,U.jsx)(`span`,{className:`text-[#E8A33D] font-semibold`,children:`Prarambha Foundation`}),` `,`and`,` `,(0,U.jsx)(`span`,{className:`text-[#E8A33D] font-semibold`,children:`My Childhood Pre School`}),` `,`are committed to ensuring that every child—regardless of ability—receives the opportunity to learn, grow, participate, and thrive in an inclusive educational environment.`]})]})]})]}),t===`icds-amc`&&(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20`,children:[(0,U.jsxs)(`div`,{className:`w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left`,children:[(0,U.jsx)(`p`,{className:`uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-4`,children:`Government Partnership`}),(0,U.jsx)(`h1`,{className:`font-display text-[32px] sm:text-[44px] lg:text-[50px] font-semibold text-[#22304F] leading-[1.15] mb-6 tracking-tight`,children:`ICDS Department & AMC`}),(0,U.jsx)(`p`,{className:`text-xl sm:text-2xl text-[#E15B4D] font-semibold max-w-2xl mb-8`,children:`Working Together to Strengthen Early Childhood Development and Inclusive Education`}),(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-[#5C6B85] leading-relaxed max-w-2xl mb-8`,children:`Prarambha Foundation believes that meaningful and sustainable change is possible through collaboration with government departments, educational institutions, healthcare professionals, and community organizations.`}),(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsx)(`div`,{className:`w-16 h-[3px] bg-[#E8A33D] rounded-full`}),(0,U.jsx)(`div`,{className:`w-4 h-[3px] bg-[#E15B4D] rounded-full`})]})]}),(0,U.jsx)(`div`,{className:`w-full lg:w-1/2`,children:(0,U.jsxs)(`div`,{className:`relative`,children:[(0,U.jsx)(`div`,{className:`absolute inset-0 bg-[#E8A33D]/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10`}),(0,U.jsx)(`img`,{src:`/assets/icds%20logo-DrkEjR9Q.jpeg`,alt:`ICDS Department & AMC`,className:`w-full h-auto object-contain rounded-[2rem] shadow-xl border border-white bg-white`})]})})]}),(0,U.jsx)(`section`,{className:`bg-white py-12 lg:py-16 border-y border-[#22304F]/5`,children:(0,U.jsx)(`div`,{className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,children:(0,U.jsx)(`p`,{className:`text-lg sm:text-xl text-[#22304F]/80 leading-relaxed font-medium`,children:`As part of our commitment to improving child development and inclusive education, we actively work alongside government systems to support early identification, developmental screening, parent awareness, and educational interventions.`})})}),(0,U.jsx)(`section`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24`,children:(0,U.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8`,children:[(0,U.jsx)(`div`,{className:`bg-white border border-[#22304F]/10 rounded-3xl p-8 hover:border-[#E8A33D]/50 transition-colors flex flex-col justify-between`,children:(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{className:`w-14 h-14 bg-[#FBF6EE] rounded-2xl flex items-center justify-center mb-6`,children:(0,U.jsx)(Xo,{className:`text-[#E15B4D] text-xl`})}),(0,U.jsx)(`h2`,{className:`font-display text-2xl font-semibold text-[#22304F] mb-4`,children:`Integrated Child Development Services (ICDS)`}),(0,U.jsx)(`p`,{className:`text-[#5C6B85] leading-relaxed mb-4`,children:`Prarambha Foundation is associated with the Integrated Child Development Services (ICDS) under the Department of Women & Child Development, Government of Gujarat, in supporting child development awareness, developmental screening initiatives, parent education, and capacity-building programmes through Anganwadi Centres.`}),(0,U.jsx)(`p`,{className:`text-[#5C6B85] leading-relaxed`,children:`Our collaborative efforts focus on promoting early identification of developmental concerns, school readiness, and timely intervention during the critical early years of a child's life.`})]})}),(0,U.jsx)(`div`,{className:`bg-white border border-[#22304F]/10 rounded-3xl p-8 hover:border-[#E8A33D]/50 transition-colors flex flex-col justify-between`,children:(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{className:`w-14 h-14 bg-[#FBF6EE] rounded-2xl flex items-center justify-center mb-6`,children:(0,U.jsx)(Fo,{className:`text-[#E15B4D] text-xl`})}),(0,U.jsx)(`h2`,{className:`font-display text-2xl font-semibold text-[#22304F] mb-4`,children:`Ahmedabad Municipal Corporation (AMC)`}),(0,U.jsx)(`p`,{className:`text-[#5C6B85] leading-relaxed mb-4`,children:`Prarambha Foundation has collaborated with the Ahmedabad Municipal Corporation (AMC) for child development awareness programmes and developmental screening initiatives aimed at supporting early identification and promoting inclusive education within the community.`}),(0,U.jsx)(`p`,{className:`text-[#5C6B85] leading-relaxed`,children:`These initiatives help connect families with appropriate educational and developmental support services while encouraging awareness among parents, caregivers, and educators.`})]})})]})}),(0,U.jsx)(`section`,{className:`bg-white py-16 lg:py-24 border-t border-[#22304F]/5`,children:(0,U.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,U.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,U.jsx)(`p`,{className:`uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-3`,children:`How We Work`}),(0,U.jsx)(`h2`,{className:`font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-4`,children:`Our Collaborative Approach`}),(0,U.jsx)(`p`,{className:`text-lg text-[#5C6B85]`,children:`Through these collaborative initiatives, Prarambha Foundation works towards:`})]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,children:[`Early Identification of Developmental Concerns`,`Developmental Screening & School Readiness`,`Parent Awareness & Counselling`,`Inclusive Education Support`,`Teacher Capacity Building`,`Community Outreach Programmes`,`Referral Guidance`,`Child Development Awareness Campaigns`].map((e,t)=>(0,U.jsxs)(`div`,{className:`bg-[#FBF6EE] p-6 rounded-2xl border border-[#22304F]/5 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-[#E8A33D]/60 hover:-translate-y-1`,children:[(0,U.jsx)(Jo,{className:`text-[#E8A33D] text-2xl flex-shrink-0`}),(0,U.jsx)(`span`,{className:`text-[#22304F] font-medium leading-snug`,children:e})]},t))})]})}),(0,U.jsxs)(`section`,{className:`relative bg-[#22304F] py-16 lg:py-20 overflow-hidden`,children:[(0,U.jsx)(Ts,{className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] text-white/5`}),(0,U.jsxs)(`div`,{className:`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center`,children:[(0,U.jsx)(`div`,{className:`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8`,children:(0,U.jsx)(No,{className:`text-[#E15B4D] text-2xl`})}),(0,U.jsx)(`p`,{className:`font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto`,children:`We remain committed to strengthening government systems through technical expertise, community participation, and multidisciplinary collaboration to ensure that every child receives the opportunity to learn, grow, and thrive.`})]})]})]})]}),(0,U.jsx)(us,{pageData:e})]})}function Ds(){return(0,U.jsx)(`div`,{children:(0,U.jsx)(`h1`,{children:`About Page`})})}function Os(){let{pageData:e}=Cs(),[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(`All`),[a,o]=(0,S.useState)(null),[s,c]=(0,S.useState)(null),[l,u]=(0,S.useState)(!0),[d,f]=(0,S.useState)(!1);(0,S.useEffect)(()=>{(async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/gallery`);n(e)}catch(e){console.log(e)}finally{u(!1)}})()},[]);let p=[`All`,`Therapy Sessions`,`Inclusive Learning`,`Parent Support`,`Community Events`,`Creative Activities`,`Growth Moments`],m=r===`All`?t:t.filter(e=>e.category===r),h=e=>{c(m.findIndex(t=>t._id===e._id)),o(e),f(!1),document.body.style.overflow=`hidden`},g=()=>{o(null),c(null),document.body.style.overflow=``},_=(0,S.useCallback)(e=>{e&&e.stopPropagation&&e.stopPropagation();let t=(s-1+m.length)%m.length;c(t),o(m[t]),f(!1)},[s,m]),v=(0,S.useCallback)(e=>{e&&e.stopPropagation&&e.stopPropagation();let t=(s+1)%m.length;c(t),o(m[t]),f(!1)},[s,m]);(0,S.useEffect)(()=>{if(!a)return;let e=e=>{e.key===`Escape`&&g(),e.key===`ArrowLeft`&&_(null),e.key===`ArrowRight`&&v(null)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[a,_,v]);let y=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/1200x700?text=Gallery+Image`;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

          :root {
            --red:    #E63946;
            --yellow: #F4A020;
            --blue:   #2A9BD4;
            --ink:    #111827;
            --muted:  #6B7280;
            --pale:   #FFFDFB;
            --border: #F0EDE8;
            --r:      28px;
          }

          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          .gp { font-family: 'DM Sans', sans-serif; background: var(--pale); min-height: 100vh; overflow-x: hidden; color: var(--ink); }

          /* ── HERO ── */
          .gp-hero {
            position: relative;
            background: linear-gradient(150deg, #FFF5F0 0%, #FFFDFB 55%, #EEF8FF 100%);
            padding: 96px 40px 0;
            overflow: hidden;
          }

          .gp-noise {
            position: absolute; inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
            pointer-events: none;
          }

          .gp-blob { position: absolute; border-radius: 50%; filter: blur(72px); pointer-events: none; }
          .gp-b1 { width:420px;height:420px;background:#FFE3E6;opacity:.45;top:-100px;left:-80px; }
          .gp-b2 { width:360px;height:360px;background:#FFF3CC;opacity:.5;bottom:-60px;right:-80px; }
          .gp-b3 { width:240px;height:240px;background:#D6EFFF;opacity:.4;top:45%;left:58%; }

          .gp-hero-inner {
            position: relative; z-index: 2;
            max-width: 960px; margin: 0 auto; text-align: center;
          }

          .gp-badge {
            display: inline-flex; align-items: center; gap: 10px;
            background: rgba(255,255,255,.88); backdrop-filter: blur(10px);
            border: 1px solid rgba(230,57,70,.14);
            padding: 10px 22px; border-radius: 50px; margin-bottom: 28px;
            font-weight: 600; font-size: 13px; color: var(--ink);
            box-shadow: 0 4px 18px rgba(0,0,0,.07);
          }

          .gp-pulse {
            width: 8px; height: 8px; border-radius: 50%;
            background: var(--red);
            animation: pulse 1.6s ease-in-out infinite;
          }

          @keyframes pulse {
            0%,100%{transform:scale(1);opacity:1}
            50%{transform:scale(1.55);opacity:.55}
          }

          .gp-title {
            font-family: 'Fraunces', serif;
            font-size: clamp(36px, 7vw, 68px);
            font-weight: 900;
            line-height: 1.08;
            color: var(--ink);
            margin-bottom: 22px;
            letter-spacing: -1.5px;
          }

          .gp-title em { font-style: italic; color: var(--red); }

          .gp-desc {
            font-size: clamp(14px, 1.7vw, 17px);
            color: var(--muted);
            line-height: 1.9;
            max-width: 680px;
            margin: 0 auto 44px;
          }

          .gp-stats {
            display: inline-flex;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,.09);
            border: 1px solid var(--border);
            overflow: hidden;
            margin-bottom: 64px;
          }

          .gp-stat {
            padding: 22px 36px;
            text-align: center;
            border-right: 1px solid var(--border);
          }

          .gp-stat:last-child { border-right: none; }

          .gp-stat-n {
            display: block;
            font-family: 'Fraunces', serif;
            font-size: 30px; font-weight: 900;
            line-height: 1; margin-bottom: 5px;
          }

          .gp-stat-l {
            font-size: 11px; font-weight: 600;
            color: #9CA3AF; text-transform: uppercase;
            letter-spacing: 1px;
          }

          .gp-wave { display: block; width: 100%; line-height: 0; margin-top: -1px; }

          /* ── FILTER ── */
          .gp-filter {
            background: rgba(255,255,255,.94);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            padding: 15px 40px;
            position: sticky; top: 0; z-index: 50;
            box-shadow: 0 2px 14px rgba(0,0,0,.05);
          }

          .gp-filter-inner {
            max-width: 1200px; margin: 0 auto;
            display: flex; gap: 8px;
            overflow-x: auto; scrollbar-width: none; padding-bottom: 2px;
          }

          .gp-filter-inner::-webkit-scrollbar { display: none; }

          .gp-fbtn {
            white-space: nowrap;
            padding: 9px 20px; border-radius: 50px;
            border: 1.5px solid transparent;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px;
            cursor: pointer; transition: all .22s; flex-shrink: 0;
          }

          .gp-fbtn.on  { background: var(--red); color: #fff; box-shadow: 0 4px 14px rgba(230,57,70,.3); }
          .gp-fbtn.off { background: #F3F4F6; color: #374151; }
          .gp-fbtn.off:hover { background: #FFE9EB; color: var(--red); border-color: rgba(230,57,70,.22); }

          /* ── MAIN ── */
          .gp-main { padding: 56px 40px 80px; }
          .gp-inner { max-width: 1200px; margin: 0 auto; }

          /* Quote */
          .gp-quote {
            position: relative;
            background: #fff;
            border-radius: 32px;
            padding: 52px 60px;
            text-align: center;
            box-shadow: 0 6px 26px rgba(0,0,0,.06);
            border: 1px solid var(--border);
            margin-bottom: 56px;
            overflow: hidden;
          }

          .gp-quote::before {
            content: "\\201C";
            font-family: 'Fraunces', serif;
            font-size: 220px; font-weight: 900;
            color: #FFF0F2;
            position: absolute; top: -35px; left: 18px;
            line-height: 1; pointer-events: none;
          }

          .gp-quote-t {
            font-family: 'Fraunces', serif;
            font-size: clamp(19px, 2.6vw, 28px);
            font-weight: 700; color: var(--ink);
            line-height: 1.5; position: relative; z-index: 1;
            margin-bottom: 14px;
          }

          .gp-quote-t span { color: var(--red); font-style: italic; }
          .gp-quote-a { font-size: 13px; font-weight: 600; color: #9CA3AF; position: relative; z-index: 1; }

          /* Section label */
          .gp-lbl {
            display: flex; align-items: center; gap: 16px; margin-bottom: 36px;
          }

          .gp-lbl-t {
            font-weight: 800; font-size: 12px;
            color: var(--red); text-transform: uppercase;
            letter-spacing: 2.5px; white-space: nowrap;
          }

          .gp-lbl-l {
            flex: 1; height: 1.5px;
            background: linear-gradient(to right, rgba(230,57,70,.4), transparent);
          }

          /* ── MASONRY ── */
          .gp-grid { columns: 1; column-gap: 22px; }
          @media(min-width:640px)  { .gp-grid { columns: 2; } }
          @media(min-width:1024px) { .gp-grid { columns: 3; } }

          /* ── CARD ── */
          .gp-card {
            break-inside: avoid;
            display: inline-block;
            width: 100%; margin-bottom: 22px;
            background: #fff;
            border-radius: var(--r);
            overflow: hidden;
            cursor: pointer;
            border: 1px solid var(--border);
            box-shadow: 0 2px 10px rgba(0,0,0,.05);
            transition: transform .35s cubic-bezier(.22,.68,0,1.2), box-shadow .35s;
          }

          .gp-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 54px rgba(0,0,0,.13); }

          .gp-c-img { position: relative; overflow: hidden; }

          .gp-c-img img {
            width: 100%; height: 280px; object-fit: cover; display: block;
            transition: transform .6s cubic-bezier(.22,.68,0,1.2);
          }

          .gp-card:hover .gp-c-img img { transform: scale(1.1); }

          .gp-c-ov {
            position: absolute; inset: 0;
            background: linear-gradient(160deg, rgba(230,57,70,0) 0%, rgba(17,24,39,.62) 100%);
            opacity: 0; transition: opacity .35s;
            display: flex; align-items: flex-end;
            justify-content: space-between; padding: 18px 20px;
          }

          .gp-card:hover .gp-c-ov { opacity: 1; }

          .gp-c-num {
            font-family: 'Fraunces', serif;
            font-size: 12px; color: rgba(255,255,255,.7); font-weight: 700;
          }

          .gp-c-zoom {
            width: 44px; height: 44px; background: #fff;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 17px;
            box-shadow: 0 4px 12px rgba(0,0,0,.2);
            transition: transform .2s;
          }

          .gp-card:hover .gp-c-zoom { transform: scale(1.12); }

          .gp-c-body { padding: 19px 20px 22px; }

          .gp-pill {
            display: inline-flex; align-items: center; gap: 6px;
            background: #FFF1F2; color: var(--red);
            padding: 5px 13px; border-radius: 50px;
            font-size: 11px; font-weight: 800;
            text-transform: uppercase; letter-spacing: .8px;
            margin-bottom: 11px;
          }

          .gp-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--red); flex-shrink: 0; }

          .gp-c-title {
            font-family: 'Fraunces', serif;
            font-size: 20px; font-weight: 700;
            color: var(--ink); line-height: 1.35;
            margin-bottom: 9px; transition: color .2s;
          }

          .gp-card:hover .gp-c-title { color: var(--red); }

          .gp-c-cap {
            font-size: 14px; color: var(--muted); line-height: 1.75;
            display: -webkit-box; -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; overflow: hidden;
            margin-bottom: 16px;
          }

          .gp-c-btn {
            background: var(--red); color: #fff; border: none;
            padding: 10px 18px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(230,57,70,.25);
            transition: transform .2s, box-shadow .2s;
          }

          .gp-c-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(230,57,70,.35); }

          /* ── SKELETON ── */
          .gp-skel-grid { columns: 1; column-gap: 22px; }
          @media(min-width:640px)  { .gp-skel-grid { columns: 2; } }
          @media(min-width:1024px) { .gp-skel-grid { columns: 3; } }

          .gp-skel {
            break-inside: avoid; display: inline-block;
            width: 100%; margin-bottom: 22px;
            background: #fff; border-radius: var(--r);
            overflow: hidden; border: 1px solid var(--border);
          }

          .gp-shim {
            background: linear-gradient(90deg, #F3F4F6 25%, #E9EAEC 50%, #F3F4F6 75%);
            background-size: 400% 100%;
            animation: shim 1.5s infinite;
          }

          @keyframes shim { 0%{background-position:100% 0} 100%{background-position:-100% 0} }

          .gp-skel-b { padding: 18px; }
          .gp-skel-l { border-radius: 6px; margin-bottom: 9px; }

          /* ── EMPTY ── */
          .gp-empty { text-align: center; padding: 80px 20px; color: #9CA3AF; }
          .gp-empty-ico { font-size: 52px; margin-bottom: 14px; }
          .gp-empty-t { font-family:'Fraunces',serif; font-size:22px; font-weight:700; color:var(--ink); margin-bottom:8px; }

          /* ── CTA ── */
          .gp-cta {
            background: var(--yellow); padding: 64px 40px; text-align: center; position: relative; overflow: hidden;
          }

          .gp-cta::before { content:''; position:absolute; top:-80px;right:-80px; width:300px;height:300px; background:rgba(255,255,255,.12); border-radius:50%; }
          .gp-cta::after  { content:''; position:absolute; bottom:-60px;left:-60px; width:220px;height:220px; background:rgba(255,255,255,.10); border-radius:50%; }

          .gp-cta-t {
            font-family: 'Fraunces', serif;
            font-size: clamp(26px,4vw,40px); font-weight:900; color:#fff;
            margin-bottom:12px; position:relative; z-index:1;
          }

          .gp-cta-d { color:rgba(255,255,255,.9); font-size:16px; margin-bottom:28px; position:relative; z-index:1; }

          .gp-cta-btn {
            background:#fff; color:var(--red); border:none;
            padding:15px 36px; border-radius:50px;
            font-family:'DM Sans',sans-serif; font-weight:800; font-size:15px;
            cursor:pointer; box-shadow:0 6px 22px rgba(0,0,0,.14);
            transition:transform .2s,box-shadow .2s; position:relative; z-index:1;
          }

          .gp-cta-btn:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,.2); }

          /* ══════════════════════════════
              LIGHTBOX
          ══════════════════════════════ */

          .lb-ov {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(6,6,10,.95);
            display: flex; align-items: center; justify-content: center;
            padding: 16px;
            animation: lbFade .2s ease;
          }

          @keyframes lbFade { from{opacity:0} to{opacity:1} }

          /* X button */
          .lb-x {
            position: absolute; top: 18px; right: 18px;
            width: 44px; height: 44px;
            background: rgba(255,255,255,.10);
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 50%; color: #fff; font-size: 16px;
            cursor: pointer; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            transition: background .2s, transform .25s;
          }

          .lb-x:hover { background: var(--red); transform: rotate(90deg); }

          /* Arrows */
          .lb-arr {
            position: absolute; top: 50%; transform: translateY(-50%);
            width: 50px; height: 50px;
            background: rgba(255,255,255,.09);
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 50%; color: #fff; font-size: 22px;
            cursor: pointer; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            transition: background .2s, transform .2s;
          }

          .lb-arr:hover { background: rgba(255,255,255,.2); transform: translateY(-50%) scale(1.1); }
          .lb-prev { left: 16px; }
          .lb-next { right: 16px; }

          /* Counter pill */
          .lb-cnt {
            position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%);
            background: rgba(255,255,255,.11);
            border: 1px solid rgba(255,255,255,.14);
            color: rgba(255,255,255,.7);
            font-size: 12px; font-weight: 700; letter-spacing: 2px;
            padding: 6px 18px; border-radius: 50px; z-index: 10;
            white-space: nowrap;
          }

          /* Modal */
  .lb-modal {
    display: flex;
    width: 100%;
    max-width: 1180px;
    height: 88vh;
    background: #fff;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
  }

          @keyframes lbScale { from{transform:scale(.92);opacity:0} to{transform:scale(1);opacity:1} }

.lb-img-side {
  flex: 1.15;
  height: 100%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 14px;
}

.lb-img-side img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 18px;
  transition: opacity .3s ease;
}

          .lb-img-side img.lb-loading { opacity: 0; }
          .lb-img-side img.lb-loaded  { opacity: 1; }

          .lb-spinner-wrap {
            position: absolute; inset: 0;
            display: flex; align-items: center; justify-content: center;
            pointer-events: none;
          }

          .lb-ring {
            width: 38px; height: 38px;
            border: 3px solid rgba(255,255,255,.14);
            border-top-color: var(--red);
            border-radius: 50%;
            animation: spin .7s linear infinite;
          }

          @keyframes spin { to{transform:rotate(360deg)} }

          /* Mobile nav in image */
          .lb-img-nav-m {
            display: none;
            position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
            gap: 10px; z-index: 5;
          }

          .lb-arr-m {
            width: 42px; height: 42px;
            background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.2);
            border-radius: 50%; color: #fff; font-size: 18px;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
          }

          /* Info side */
          .lb-info-side {
            width: 360px; flex-shrink: 0;
            padding: 36px 30px;
            overflow-y: auto;
            display: flex; flex-direction: column;
            border-left: 1px solid var(--border);
          }

          .lb-info-side::-webkit-scrollbar { width: 3px; }
          .lb-info-side::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

          .lb-i-pill {
            display: inline-flex; align-items: center; gap: 7px;
            background: #FFF1F2; color: var(--red);
            padding: 6px 14px; border-radius: 50px;
            font-size: 11px; font-weight: 800;
            text-transform: uppercase; letter-spacing: 1px;
            margin-bottom: 16px; align-self: flex-start;
          }

          .lb-i-title {
            font-family: 'Fraunces', serif;
            font-size: clamp(21px, 2.2vw, 28px);
            font-weight: 700; color: var(--ink);
            line-height: 1.25; margin-bottom: 12px;
          }

          .lb-i-bar {
            width: 36px; height: 3px;
            background: var(--red); border-radius: 3px;
            margin-bottom: 16px;
          }

          .lb-i-cap {
            font-size: 14.5px; color: var(--muted);
            line-height: 1.85; margin-bottom: 22px; flex: 1;
          }

          .lb-i-qblock {
            background: #FFF7F5;
            border-left: 4px solid var(--red);
            border-radius: 0 14px 14px 0;
            padding: 16px 18px; margin-bottom: 26px;
          }

          .lb-i-qblock p {
            font-family: 'Fraunces', serif;
            font-size: 14px; font-style: italic;
            color: var(--ink); line-height: 1.7;
          }

          .lb-i-btns { display: flex; gap: 10px; flex-wrap: wrap; }

          .lb-i-btn-p {
            flex: 1;
            background: var(--red); color: #fff; border: none;
            padding: 12px 18px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px; cursor: pointer;
            box-shadow: 0 4px 12px rgba(230,57,70,.28);
            transition: transform .2s, box-shadow .2s;
            display: flex; align-items: center; justify-content: center; gap: 6px;
          }

          .lb-i-btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(230,57,70,.38); }

          .lb-i-btn-g {
            background: #F3F4F6; color: var(--ink); border: none;
            padding: 12px 16px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px; cursor: pointer;
            transition: background .2s;
            display: flex; align-items: center; justify-content: center; gap: 6px;
          }

          .lb-i-btn-g:hover { background: #E5E7EB; }

          /* Dot nav */
          .lb-dots {
            display: flex; gap: 6px; justify-content: center; margin-top: 18px;
          }

          .lb-dot-i {
            height: 6px; border-radius: 3px;
            background: #E5E7EB; cursor: pointer;
            transition: all .22s; width: 6px;
          }

          .lb-dot-i.on { background: var(--red); width: 18px; }

          /* Swipe hint */
          .lb-hint {
            font-size: 11px; color: rgba(255,255,255,.35);
            text-align: center; margin-top: 12px;
            letter-spacing: 1px;
            display: none;
          }

          /* ── RESPONSIVE ── */
          @media(max-width:860px) {
            .lb-modal { flex-direction: column; max-height: 92vh; }
            .lb-img-side { 
  flex: none; 
  height: 58vw; 
  min-height: 260px; 
  max-height: 420px; 
}
            .lb-info-side { width: 100%; border-left: none; border-top: 1px solid var(--border); padding: 22px 18px; }
            .lb-arr { display: none; }
            .lb-img-nav-m { display: flex; }
            .lb-hint { display: block; }
          }

          @media(max-width:640px) {
            .gp-hero  { padding: 68px 18px 0; }
            .gp-main  { padding: 36px 16px 60px; }
            .gp-filter{ padding: 12px 16px; }
            .gp-quote { padding: 34px 22px; }
            .gp-stats { flex-direction: column; }
            .gp-stat  { border-right:none; border-bottom:1px solid var(--border); }
            .gp-stat:last-child { border-bottom:none; }
            .lb-x     { top:10px; right:10px; }
            .lb-cnt   { bottom:8px; }
          }
        `}),(0,U.jsxs)(`div`,{className:`gp`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsxs)(`section`,{className:`gp-hero`,children:[(0,U.jsx)(`div`,{className:`gp-noise`}),(0,U.jsx)(`div`,{className:`gp-blob gp-b1`}),(0,U.jsx)(`div`,{className:`gp-blob gp-b2`}),(0,U.jsx)(`div`,{className:`gp-blob gp-b3`}),(0,U.jsxs)(`div`,{className:`gp-hero-inner`,children:[(0,U.jsxs)(`div`,{className:`gp-badge`,children:[(0,U.jsx)(`div`,{className:`gp-pulse`}),`Real Stories • Real Smiles • Real Growth`]}),(0,U.jsxs)(`h1`,{className:`gp-title`,children:[`Moments of `,(0,U.jsx)(`em`,{children:`Growth,`}),(0,U.jsx)(`br`,{}),`Inclusion & `,(0,U.jsx)(`em`,{children:`Hope`})]}),(0,U.jsx)(`p`,{className:`gp-desc`,children:`Every smile, every step, and every small achievement tells a story of courage, care, and possibility. These moments reflect the heart of Prarambha Foundation and the beautiful journeys of our children.`}),(0,U.jsxs)(`div`,{className:`gp-stats`,children:[(0,U.jsxs)(`div`,{className:`gp-stat`,children:[(0,U.jsx)(`span`,{className:`gp-stat-n`,style:{color:`var(--red)`},children:`500+`}),(0,U.jsx)(`span`,{className:`gp-stat-l`,children:`Children`})]}),(0,U.jsxs)(`div`,{className:`gp-stat`,children:[(0,U.jsx)(`span`,{className:`gp-stat-n`,style:{color:`var(--yellow)`},children:t.length||`—`}),(0,U.jsx)(`span`,{className:`gp-stat-l`,children:`Gallery Items`})]}),(0,U.jsxs)(`div`,{className:`gp-stat`,children:[(0,U.jsx)(`span`,{className:`gp-stat-n`,style:{color:`var(--blue)`},children:`7`}),(0,U.jsx)(`span`,{className:`gp-stat-l`,children:`Categories`})]})]})]})]}),(0,U.jsx)(`svg`,{className:`gp-wave`,viewBox:`0 0 1440 48`,xmlns:`http://www.w3.org/2000/svg`,children:(0,U.jsx)(`path`,{d:`M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z`,fill:`#FFFDFB`})}),(0,U.jsx)(`div`,{className:`gp-filter`,children:(0,U.jsx)(`div`,{className:`gp-filter-inner`,children:p.map((e,t)=>(0,U.jsx)(`button`,{onClick:()=>i(e),className:`gp-fbtn ${r===e?`on`:`off`}`,children:e},t))})}),(0,U.jsx)(`section`,{className:`gp-main`,children:(0,U.jsxs)(`div`,{className:`gp-inner`,children:[(0,U.jsxs)(`div`,{className:`gp-quote`,children:[(0,U.jsxs)(`p`,{className:`gp-quote-t`,children:[`"Every child deserves a place where they are`,` `,(0,U.jsx)(`span`,{children:`understood before being judged.`}),`"`]}),(0,U.jsx)(`p`,{className:`gp-quote-a`,children:`— Prarambha Foundation`})]}),(0,U.jsxs)(`div`,{className:`gp-lbl`,children:[(0,U.jsx)(`span`,{className:`gp-lbl-t`,children:r===`All`?`All Moments (${t.length})`:`${r} (${m.length})`}),(0,U.jsx)(`div`,{className:`gp-lbl-l`})]}),l&&(0,U.jsx)(`div`,{className:`gp-skel-grid`,children:[280,360,300,340,260,320].map((e,t)=>(0,U.jsxs)(`div`,{className:`gp-skel`,children:[(0,U.jsx)(`div`,{className:`gp-shim`,style:{height:e}}),(0,U.jsxs)(`div`,{className:`gp-skel-b`,children:[(0,U.jsx)(`div`,{className:`gp-skel-l gp-shim`,style:{height:15,width:`38%`,marginBottom:12}}),(0,U.jsx)(`div`,{className:`gp-skel-l gp-shim`,style:{height:20,width:`80%`}}),(0,U.jsx)(`div`,{className:`gp-skel-l gp-shim`,style:{height:20,width:`58%`}}),(0,U.jsx)(`div`,{className:`gp-skel-l gp-shim`,style:{height:13,width:`68%`,marginTop:8}})]})]},t))}),!l&&m.length===0&&(0,U.jsxs)(`div`,{className:`gp-empty`,children:[(0,U.jsx)(`div`,{className:`gp-empty-ico`,children:`📷`}),(0,U.jsx)(`div`,{className:`gp-empty-t`,children:`No photos in this category yet`}),(0,U.jsx)(`p`,{children:`More moments are being added — check back soon!`})]}),!l&&m.length>0&&(0,U.jsx)(`div`,{className:`gp-grid`,children:m.map((e,t)=>(0,U.jsxs)(`div`,{className:`gp-card`,onClick:()=>h(e),children:[(0,U.jsxs)(`div`,{className:`gp-c-img`,children:[(0,U.jsx)(`img`,{src:y(e.image),alt:e.title,onError:e=>{e.target.src=`https://via.placeholder.com/1200x700?text=Gallery+Image`}}),(0,U.jsxs)(`div`,{className:`gp-c-ov`,children:[(0,U.jsxs)(`span`,{className:`gp-c-num`,children:[t+1,` / `,m.length]}),(0,U.jsx)(`div`,{className:`gp-c-zoom`,children:`🔍`})]})]}),(0,U.jsxs)(`div`,{className:`gp-c-body`,children:[(0,U.jsxs)(`div`,{className:`gp-pill`,children:[(0,U.jsx)(`div`,{className:`gp-dot`}),e.category]}),(0,U.jsx)(`h3`,{className:`gp-c-title`,children:e.title}),(0,U.jsx)(`p`,{className:`gp-c-cap`,children:e.caption}),(0,U.jsx)(`button`,{className:`gp-c-btn`,children:`View Story →`})]})]},e._id))})]})}),a&&(0,U.jsxs)(`div`,{className:`lb-ov`,onClick:g,children:[(0,U.jsx)(`button`,{className:`lb-x`,onClick:g,children:`✕`}),m.length>1&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`button`,{className:`lb-arr lb-prev`,onClick:_,children:`‹`}),(0,U.jsx)(`button`,{className:`lb-arr lb-next`,onClick:v,children:`›`})]}),m.length>1&&(0,U.jsxs)(`div`,{className:`lb-cnt`,children:[s+1,` \xA0/\xA0 `,m.length]}),(0,U.jsxs)(`div`,{className:`lb-modal`,onClick:e=>e.stopPropagation(),children:[(0,U.jsxs)(`div`,{className:`lb-img-side`,children:[!d&&(0,U.jsx)(`div`,{className:`lb-spinner-wrap`,children:(0,U.jsx)(`div`,{className:`lb-ring`})}),(0,U.jsx)(`img`,{src:y(a.image),alt:a.title,className:d?`lb-loaded`:`lb-loading`,onLoad:()=>f(!0),onError:e=>{e.target.src=`https://via.placeholder.com/1200x700?text=Gallery+Image`}},a._id),m.length>1&&(0,U.jsxs)(`div`,{className:`lb-img-nav-m`,children:[(0,U.jsx)(`button`,{className:`lb-arr-m`,onClick:_,children:`‹`}),(0,U.jsx)(`button`,{className:`lb-arr-m`,onClick:v,children:`›`})]})]}),(0,U.jsxs)(`div`,{className:`lb-info-side`,children:[(0,U.jsxs)(`div`,{className:`lb-i-pill`,children:[(0,U.jsx)(`div`,{className:`gp-dot`}),a.category]}),(0,U.jsx)(`h2`,{className:`lb-i-title`,children:a.title}),(0,U.jsx)(`div`,{className:`lb-i-bar`}),(0,U.jsx)(`p`,{className:`lb-i-cap`,children:a.caption}),(0,U.jsx)(`div`,{className:`lb-i-qblock`,children:(0,U.jsx)(`p`,{children:`"Every child learns differently, and every smile is a step toward confidence and belonging."`})}),(0,U.jsxs)(`div`,{className:`lb-i-btns`,children:[(0,U.jsx)(`button`,{className:`lb-i-btn-p`,onClick:g,children:`✕ Close Story`}),(0,U.jsx)(`button`,{className:`lb-i-btn-g`,onClick:async()=>{try{navigator.share?await navigator.share({title:a.title,text:a.caption,url:window.location.href}):(await navigator.clipboard.writeText(window.location.href),alert(`Link copied 😄`))}catch(e){console.log(e)}},children:`❤️ Share`})]}),m.length>1&&(0,U.jsx)(`div`,{className:`lb-dots`,children:m.slice(Math.max(0,s-3),Math.min(m.length,s+4)).map((e,t)=>{let n=Math.max(0,s-3)+t;return(0,U.jsx)(`div`,{className:`lb-dot-i ${n===s?`on`:``}`,onClick:()=>{c(n),o(m[n]),f(!1)}},n)})})]})]}),(0,U.jsx)(`div`,{className:`lb-hint`,children:`TAP ARROWS TO NAVIGATE \xA0•\xA0 ESC TO CLOSE`})]}),(0,U.jsx)(us,{pageData:e})]})]})}function ks(){let{pageData:e}=Cs(),t=e?.footer||{},[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)({name:``,email:``,subject:``,message:``});(0,S.useEffect)(()=>{(async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/pages/contact`);r(e)}catch(e){console.log(e)}})()},[]);let c=e=>{let{name:t,value:n}=e.target;s(e=>({...e,[t]:n}))};return(0,U.jsxs)(`div`,{className:`\r
        bg-[#FFFDFB]\r
        min-h-screen\r
        overflow-hidden\r
      `,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsxs)(`section`,{className:`\r
          relative\r
          py-24\r
          px-4\r
          sm:px-6\r
          lg:px-8\r
          overflow-hidden\r
          bg-gradient-to-br\r
          from-[#FFF7F2]\r
          via-[#FFFDFB]\r
          to-[#F7FAFF]\r
        `,children:[(0,U.jsx)(`div`,{className:`\r
            absolute\r
            top-0\r
            right-0\r
            w-[700px]\r
            h-[700px]\r
            bg-[#FFD400]\r
            rounded-bl-[250px]\r
            opacity-95\r
          `}),(0,U.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-120px]\r
            left-[-120px]\r
            w-[350px]\r
            h-[350px]\r
            bg-[#FFE9EC]\r
            rounded-full\r
          `}),(0,U.jsx)(`div`,{className:`\r
            max-w-7xl\r
            mx-auto\r
            relative\r
            z-10\r
          `,children:(0,U.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-2\r
              gap-20\r
              items-center\r
            `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                  text-[#F44336]\r
                  font-bold\r
                  uppercase\r
                  tracking-[3px]\r
                  mb-5\r
                `,children:n?.heroTag||`Contact Us`}),(0,U.jsx)(`h1`,{className:`\r
                  text-5xl\r
                  md:text-7xl\r
                  font-black\r
                  leading-tight\r
                  text-[#071952]\r
                  mb-8\r
                `,children:n?.heroTitle||`Let’s Build Inclusive Futures Together`}),(0,U.jsx)(`p`,{className:`\r
                  text-lg\r
                  leading-[2]\r
                  text-gray-700\r
                  max-w-2xl\r
                  mb-10\r
                `,children:n?.heroDescription||`We’re here to support children, families, educators, and communities through inclusive education, therapy, and early intervention. Reach out to us anytime.`}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-5\r
                    bg-white\r
                    p-5\r
                    rounded-3xl\r
                    shadow-sm\r
                  `,children:[(0,U.jsx)(`div`,{className:`\r
                      w-16\r
                      h-16\r
                      rounded-2xl\r
                      bg-[#FFE9EC]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[#F44336]\r
                      text-2xl\r
                    `,children:(0,U.jsx)(Uo,{})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                        text-xl\r
                        font-bold\r
                        text-[#071952]\r
                      `,children:`Email Address`}),(0,U.jsx)(`p`,{className:`text-gray-600`,children:t.email||`foundationprarambha@gmail.com`})]})]}),(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-5\r
                    bg-white\r
                    p-5\r
                    rounded-3xl\r
                    shadow-sm\r
                  `,children:[(0,U.jsx)(`div`,{className:`\r
                      w-16\r
                      h-16\r
                      rounded-2xl\r
                      bg-[#FFF3D6]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[#FF9800]\r
                      text-2xl\r
                    `,children:(0,U.jsx)(Do,{})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                        text-xl\r
                        font-bold\r
                        text-[#071952]\r
                      `,children:`Phone Number`}),(0,U.jsx)(`p`,{className:`text-gray-600`,children:t.phone||`+91 940 911 8461`})]})]}),(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-5\r
                    bg-white\r
                    p-5\r
                    rounded-3xl\r
                    shadow-sm\r
                  `,children:[(0,U.jsx)(`div`,{className:`\r
                      w-16\r
                      h-16\r
                      rounded-2xl\r
                      bg-[#E7F7EC]\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[#22C55E]\r
                      text-2xl\r
                    `,children:(0,U.jsx)(Ao,{})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`\r
                        text-xl\r
                        font-bold\r
                        text-[#071952]\r
                      `,children:`Location`}),(0,U.jsx)(`p`,{className:`text-gray-600`,children:t.address||`Ahmedabad, Gujarat, India`})]})]})]})]}),(0,U.jsxs)(`div`,{className:`\r
                bg-white\r
                p-8\r
                md:p-12\r
                rounded-[40px]\r
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]\r
                relative\r
                overflow-hidden\r
              `,children:[(0,U.jsx)(`div`,{className:`\r
                  absolute\r
                  top-0\r
                  right-0\r
                  w-52\r
                  h-52\r
                  bg-[#FFE9EC]\r
                  rounded-full\r
                  blur-3xl\r
                `}),(0,U.jsxs)(`div`,{className:`relative z-10`,children:[(0,U.jsx)(`h2`,{className:`\r
                    text-4xl\r
                    font-black\r
                    text-[#071952]\r
                    mb-4\r
                  `,children:`Send Us a Message`}),(0,U.jsx)(`p`,{className:`\r
                    text-gray-600\r
                    mb-10\r
                    leading-[1.9]\r
                  `,children:`Have questions or want to collaborate? Fill out the form below.`}),(0,U.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!i){a(!0);try{let e=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/messages`,o,{timeout:6e4,headers:{"Content-Type":`application/json`}});console.log(`[CONTACT] Message submitted successfully:`,e.data),s({name:``,email:``,subject:``,message:``}),alert(`Message Sent Successfully 😄`)}catch(e){console.error(`[CONTACT] Submit error:`,e),e.code===`ECONNABORTED`?alert(`Server is starting up. Please wait a moment and try again.`):e.response?.data?.message?alert(e.response.data.message):alert(`Something went wrong. Please try again.`)}finally{a(!1)}}},className:`space-y-6`,children:[(0,U.jsxs)(`div`,{className:`\r
                      grid\r
                      md:grid-cols-2\r
                      gap-6\r
                    `,children:[(0,U.jsx)(`input`,{type:`text`,name:`name`,value:o.name,onChange:c,placeholder:`Your Name`,required:!0,disabled:i,className:`\r
                        h-[65px]\r
                        px-6\r
                        rounded-2xl\r
                        border\r
                        border-gray-200\r
                        outline-none\r
                        disabled:opacity-60\r
                      `}),(0,U.jsx)(`input`,{type:`email`,name:`email`,value:o.email,onChange:c,placeholder:`Your Email`,required:!0,disabled:i,className:`\r
                        h-[65px]\r
                        px-6\r
                        rounded-2xl\r
                        border\r
                        border-gray-200\r
                        outline-none\r
                        disabled:opacity-60\r
                      `})]}),(0,U.jsx)(`input`,{type:`text`,name:`subject`,value:o.subject,onChange:c,placeholder:`Subject`,required:!0,disabled:i,className:`\r
                      w-full\r
                      h-[65px]\r
                      px-6\r
                      rounded-2xl\r
                      border\r
                      border-gray-200\r
                      outline-none\r
                      disabled:opacity-60\r
                    `}),(0,U.jsx)(`textarea`,{rows:`6`,name:`message`,value:o.message,onChange:c,placeholder:`Write your message...`,required:!0,disabled:i,className:`\r
                      w-full\r
                      p-6\r
                      rounded-2xl\r
                      border\r
                      border-gray-200\r
                      outline-none\r
                      resize-none\r
                      disabled:opacity-60\r
                    `}),(0,U.jsxs)(`button`,{type:`submit`,disabled:i,className:`\r
                      bg-[#F44336]\r
                      hover:bg-red-600\r
                      disabled:opacity-70\r
                      disabled:cursor-not-allowed\r
                      text-white\r
                      px-10\r
                      py-5\r
                      rounded-full\r
                      font-bold\r
                      flex\r
                      items-center\r
                      gap-4\r
                      transition-all\r
                      duration-300\r
                      hover:scale-105\r
                      disabled:hover:scale-100\r
                      shadow-lg\r
                    `,children:[i?`Sending...`:`Send Message`,(0,U.jsx)(ko,{})]})]})]})]})]})})]}),(0,U.jsx)(us,{pageData:e})]})}var As=`/assets/logo-CFIgy6ou.png`;function js(){let e=dt(),[t,n]=(0,S.useState)({email:``,password:``}),[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)(``),s=e=>{n({...t,[e.target.name]:e.target.value})};return(0,U.jsxs)(`div`,{className:`\r
        min-h-screen\r
        bg-[#FFF7E8]\r
        flex\r
        items-center\r
        justify-center\r
        px-4\r
        py-10\r
        relative\r
        overflow-hidden\r
      `,children:[(0,U.jsx)(`div`,{className:`\r
          absolute\r
          top-[-120px]\r
          right-[-120px]\r
          w-[350px]\r
          h-[350px]\r
          bg-[#F7C600]\r
          rounded-full\r
          opacity-80\r
        `}),(0,U.jsx)(`div`,{className:`\r
          absolute\r
          bottom-[-120px]\r
          left-[-120px]\r
          w-[300px]\r
          h-[300px]\r
          bg-[#38BDF8]\r
          rounded-full\r
          opacity-20\r
        `}),(0,U.jsxs)(`div`,{className:`\r
          relative\r
          z-10\r
          w-full\r
          max-w-md\r
          bg-white\r
          rounded-[32px]\r
          shadow-[0_15px_60px_rgba(0,0,0,0.08)]\r
          p-8\r
          sm:p-10\r
        `,children:[(0,U.jsx)(`div`,{className:`flex justify-center mb-6`,children:(0,U.jsx)(`img`,{src:As,alt:`Prarambha Foundation`,className:`w-44 object-contain`})}),(0,U.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,U.jsx)(`p`,{className:`\r
              text-[#E63946]\r
              font-bold\r
              uppercase\r
              tracking-[4px]\r
              text-xs\r
              mb-3\r
            `,children:`Admin Panel`}),(0,U.jsx)(`h1`,{className:`\r
              text-3xl\r
              sm:text-4xl\r
              font-extrabold\r
              text-[#1F2937]\r
              leading-tight\r
              mb-3\r
            `,children:`Welcome Back`}),(0,U.jsx)(`p`,{className:`\r
              text-gray-500\r
              text-sm\r
              leading-relaxed\r
            `,children:`Sign in to manage Prarambha Foundation CMS`})]}),a&&(0,U.jsx)(`div`,{className:`\r
              bg-red-100\r
              text-red-600\r
              px-4\r
              py-3\r
              rounded-2xl\r
              text-sm\r
              mb-5\r
              font-medium\r
            `,children:a}),(0,U.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),i(!0),o(``);try{let{data:n}=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/admin/login`,t);localStorage.setItem(`adminInfo`,JSON.stringify(n)),e(`/admin/dashboard`)}catch(e){o(e.response?.data?.message||`Login failed`)}finally{i(!1)}},className:`space-y-5`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                text-sm\r
                font-semibold\r
                text-[#1F2937]\r
                mb-2\r
              `,children:`Email Address`}),(0,U.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                bg-[#F3F4F6]\r
                rounded-2xl\r
                px-4\r
                h-[58px]\r
              `,children:[(0,U.jsx)(Uo,{className:`\r
                  text-gray-400\r
                  mr-3\r
                `}),(0,U.jsx)(`input`,{type:`email`,name:`email`,placeholder:`admin@prarambha.com`,value:t.email,onChange:s,required:!0,className:`\r
                  w-full\r
                  bg-transparent\r
                  outline-none\r
                  text-[#1F2937]\r
                  placeholder:text-gray-400\r
                `})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                text-sm\r
                font-semibold\r
                text-[#1F2937]\r
                mb-2\r
              `,children:`Password`}),(0,U.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                bg-[#F3F4F6]\r
                rounded-2xl\r
                px-4\r
                h-[58px]\r
              `,children:[(0,U.jsx)(jo,{className:`\r
                  text-gray-400\r
                  mr-3\r
                `}),(0,U.jsx)(`input`,{type:`password`,name:`password`,placeholder:`Enter password`,value:t.password,onChange:s,required:!0,className:`\r
                  w-full\r
                  bg-transparent\r
                  outline-none\r
                  text-[#1F2937]\r
                  placeholder:text-gray-400\r
                `})]})]}),(0,U.jsx)(`button`,{type:`submit`,disabled:r,className:`\r
              w-full\r
              h-[58px]\r
              bg-[#E63946]\r
              hover:bg-[#d62839]\r
              text-white\r
              rounded-2xl\r
              font-semibold\r
              text-lg\r
              shadow-lg\r
              hover:scale-[1.02]\r
              active:scale-[0.98]\r
              transition-all\r
              duration-300\r
              flex\r
              items-center\r
              justify-center\r
              gap-3\r
            `,children:r?`Signing In...`:(0,U.jsxs)(U.Fragment,{children:[`Login`,(0,U.jsx)(ns,{})]})})]}),(0,U.jsx)(`div`,{className:`\r
            mt-8\r
            text-center\r
            text-sm\r
            text-gray-400\r
            leading-relaxed\r
          `,children:`Prarambha Foundation CMS Panel`})]})]})}function Ms(){let e=dt();return(0,U.jsxs)(`div`,{className:`\r
        w-[280px]\r
        min-h-screen\r
        bg-white\r
        border-r\r
        border-gray-200\r
        flex\r
        flex-col\r
        px-6\r
        py-8\r
      `,children:[(0,U.jsxs)(`div`,{className:`mb-10`,children:[(0,U.jsx)(`h1`,{className:`\r
            text-2xl\r
            font-extrabold\r
            text-[#1F2937]\r
          `,children:`Prarambha CMS`}),(0,U.jsx)(`p`,{className:`\r
            text-sm\r
            text-gray-500\r
            mt-1\r
          `,children:`Admin Dashboard`})]}),(0,U.jsx)(`div`,{className:`flex flex-col gap-3`,children:[{title:`Dashboard`,icon:(0,U.jsx)(yo,{}),path:`/admin/dashboard`},{title:`Manage Pages`,icon:(0,U.jsx)(Vo,{}),path:`/admin/pages`},{title:`Gallery`,icon:(0,U.jsx)(Mo,{}),path:`/admin/gallery`},{title:`Stories`,icon:(0,U.jsx)(Vo,{}),path:`/admin/stories`},{title:`Messages`,icon:(0,U.jsx)(Uo,{}),path:`/admin/messages`}].map((e,t)=>(0,U.jsxs)(N,{to:e.path,className:`\r
                  flex\r
                  items-center\r
                  gap-4\r
                  px-5\r
                  py-4\r
                  rounded-2xl\r
                  text-[#1F2937]\r
                  font-semibold\r
                  hover:bg-[#FFF7E8]\r
                  hover:text-[#E63946]\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,U.jsx)(`span`,{className:`text-lg`,children:e.icon}),e.title]},t))}),(0,U.jsxs)(`button`,{onClick:()=>{localStorage.removeItem(`adminInfo`),e(`/admin`)},className:`\r
          mt-auto\r
          flex\r
          items-center\r
          gap-4\r
          px-5\r
          py-4\r
          rounded-2xl\r
          bg-[#E63946]\r
          hover:bg-[#d62839]\r
          text-white\r
          font-semibold\r
          transition-all\r
        `,children:[(0,U.jsx)(H,{}),`Logout`]})]})}function Ns(){let e=JSON.parse(localStorage.getItem(`adminInfo`));return(0,U.jsxs)(`div`,{className:`\r
        h-[90px]\r
        bg-white\r
        border-b\r
        border-gray-200\r
        flex\r
        items-center\r
        justify-between\r
        px-8\r
      `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`\r
            text-3xl\r
            font-extrabold\r
            text-[#1F2937]\r
          `,children:`Dashboard`}),(0,U.jsxs)(`p`,{className:`\r
            text-gray-500\r
            mt-1\r
          `,children:[`Welcome back, `,e?.name]})]}),(0,U.jsx)(`div`,{className:`\r
          w-12\r
          h-12\r
          rounded-full\r
          bg-[#F7C600]\r
          flex\r
          items-center\r
          justify-center\r
          text-[#1F2937]\r
          font-bold\r
          text-lg\r
        `,children:`A`})]})}function Ps({children:e}){return(0,U.jsxs)(`div`,{className:`\r
        flex\r
        bg-[#F3F4F6]\r
        min-h-screen\r
        overflow-hidden\r
      `,children:[(0,U.jsx)(Ms,{}),(0,U.jsxs)(`div`,{className:`\r
          flex-1\r
          flex\r
          flex-col\r
          overflow-hidden\r
        `,children:[(0,U.jsx)(Ns,{}),(0,U.jsx)(`main`,{className:`\r
            flex-1\r
            overflow-y-auto\r
            p-4\r
            md:p-8\r
          `,children:(0,U.jsx)(`div`,{className:`max-w-[1600px]`,children:e})})]})]})}function Fs(){let e=[{title:`Impact Stories`,value:`12`},{title:`Gallery Images`,value:`48`},{title:`Messages`,value:`09`}];return(0,U.jsxs)(Ps,{children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h1`,{className:`\r
            text-4xl\r
            font-extrabold\r
            text-[#111827]\r
            mb-2\r
          `,children:`Dashboard`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Welcome to the Prarambha Foundation CMS.`})]}),(0,U.jsx)(`div`,{className:`\r
          grid\r
          grid-cols-1\r
          sm:grid-cols-2\r
          xl:grid-cols-4\r
          gap-6\r
        `,children:Array.isArray(e)&&e.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                  bg-white\r
                  rounded-[28px]\r
                  p-8\r
                  shadow-sm\r
                  hover:shadow-xl\r
                  hover:-translate-y-1\r
                  transition-all\r
                  duration-300\r
                `,children:[(0,U.jsx)(`div`,{className:`\r
                    w-14\r
                    h-2\r
                    rounded-full\r
                    bg-[#E63946]\r
                    mb-5\r
                  `}),(0,U.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    font-medium\r
                    mb-4\r
                  `,children:e.title}),(0,U.jsx)(`h2`,{className:`\r
                    text-5xl\r
                    font-extrabold\r
                    text-[#E63946]\r
                  `,children:e.value})]},t))})]})}function Is({pageData:e,setPageData:t,uploadImage:n,uploading:r}){let i=e=>{let{name:n,value:r}=e.target;t(e=>({...e,hero:{...e.hero,[n]:r}}))},a=e.hero?.image?e.hero.image.startsWith(`http`)?e.hero.image:`https://lightgrey-squid-753475.hostingersite.com${e.hero.image}`:`https://via.placeholder.com/1200x700?text=Hero+Image`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-8\r
        shadow-sm\r
      `,children:[(0,U.jsx)(`h2`,{className:`\r
          text-3xl\r
          font-bold\r
          text-[#1F2937]\r
          mb-8\r
        `,children:`Hero Section`}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-2\r
              font-semibold\r
              text-gray-700\r
            `,children:`Hero Title`}),(0,U.jsx)(`textarea`,{rows:`3`,name:`title`,placeholder:`Discovering Ability Before Disability Defines`,value:e.hero?.title||``,onChange:i,className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-2\r
              font-semibold\r
              text-gray-700\r
            `,children:`Hero Subtitle`}),(0,U.jsx)(`textarea`,{rows:`3`,name:`subtitle`,placeholder:`Inclusive Early Childhood & Special Education Initiative`,value:e.hero?.subtitle||``,onChange:i,className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-2\r
              font-semibold\r
              text-gray-700\r
            `,children:`Hero Description`}),(0,U.jsx)(`textarea`,{rows:`6`,name:`description`,placeholder:`Write hero description...`,value:e.hero?.description||``,onChange:i,className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{className:`\r
            grid\r
            md:grid-cols-2\r
            gap-5\r
          `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                mb-2\r
                font-semibold\r
                text-gray-700\r
              `,children:`Primary Button Text`}),(0,U.jsx)(`input`,{type:`text`,name:`buttonText`,placeholder:`Donate Now`,value:e.hero?.buttonText||``,onChange:i,className:`\r
                w-full\r
                h-[60px]\r
                px-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                mb-2\r
                font-semibold\r
                text-gray-700\r
              `,children:`Secondary Button Text`}),(0,U.jsx)(`input`,{type:`text`,name:`secondaryButtonText`,placeholder:`Learn More`,value:e.hero?.secondaryButtonText||``,onChange:i,className:`\r
                w-full\r
                h-[60px]\r
                px-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-gray-700\r
            `,children:`Hero Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:n,className:`\r
              w-full\r
              p-4\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
            `})]}),r&&(0,U.jsx)(`p`,{className:`\r
              text-[#E63946]\r
              font-medium\r
            `,children:`Uploading image...`}),e.hero?.image&&(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                mb-3\r
                font-semibold\r
                text-gray-700\r
              `,children:`Image Preview`}),(0,U.jsx)(`img`,{src:a,loading:`lazy`,alt:`Hero`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x700?text=Hero+Image`},className:`\r
                w-full\r
                h-[350px]\r
                object-cover\r
                rounded-[30px]\r
                shadow-lg\r
              `})]})]})]})}function Ls(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!1);(0,S.useEffect)(()=>{i()},[]);let i=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/stories`);t(e)}catch(e){console.log(e)}},a=async()=>{try{let{data:e}=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/stories`,{title:`New Story`,category:`Therapy`,image:``,desc:`Write story here...`,type:`small`});t(t=>[...t,e])}catch(e){console.log(e)}},o=async e=>{try{await R.delete(`https://lightgrey-squid-753475.hostingersite.com/api/stories/${e}`),t(t=>t.filter(t=>t._id!==e))}catch(e){console.log(e)}},s=(n,r,i)=>{let a=[...e];a[n][r]=i,t(a)},c=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/800x600?text=Story+Image`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-8\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          justify-between\r
          mb-8\r
        `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`\r
              text-3xl\r
              font-bold\r
            `,children:`Impact Stories`}),(0,U.jsx)(`p`,{className:`text-gray-500 mt-2`,children:`Manage NGO success stories.`})]}),(0,U.jsx)(`button`,{onClick:a,className:`\r
            bg-[#E63946]\r
            hover:bg-[#d62839]\r
            text-white\r
            px-6\r
            py-3\r
            rounded-2xl\r
            font-semibold\r
            transition-all\r
          `,children:`+ Add Story`})]}),e.length===0&&(0,U.jsxs)(`div`,{className:`\r
            bg-[#F9FAFB]\r
            border\r
            border-dashed\r
            border-gray-300\r
            rounded-[30px]\r
            p-12\r
            text-center\r
          `,children:[(0,U.jsx)(`h3`,{className:`\r
              text-2xl\r
              font-bold\r
              mb-3\r
            `,children:`No Stories Found`}),(0,U.jsx)(`p`,{className:`\r
              text-gray-500\r
              mb-6\r
            `,children:`Start by adding your first impact story.`}),(0,U.jsx)(`button`,{onClick:a,className:`\r
              bg-black\r
              text-white\r
              px-6\r
              py-3\r
              rounded-2xl\r
              font-semibold\r
            `,children:`Add First Story`})]}),(0,U.jsx)(`div`,{className:`space-y-8`,children:e.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
              border\r
              border-gray-200\r
              rounded-[30px]\r
              p-6\r
            `,children:[(0,U.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                justify-between\r
                mb-6\r
              `,children:[(0,U.jsxs)(`h3`,{className:`\r
                  text-2xl\r
                  font-bold\r
                `,children:[`Story `,t+1]}),(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsx)(`button`,{onClick:async()=>{try{r(!0),await R.put(`https://lightgrey-squid-753475.hostingersite.com/api/stories/${e._id}`,e),alert(`Story Saved ✅`)}catch(e){console.log(e)}finally{r(!1)}},className:`\r
                    bg-green-100\r
                    text-green-700\r
                    px-4\r
                    py-2\r
                    rounded-xl\r
                    font-semibold\r
                  `,children:`Save`}),(0,U.jsx)(`button`,{onClick:()=>o(e._id),className:`\r
                    bg-red-100\r
                    text-red-600\r
                    px-4\r
                    py-2\r
                    rounded-xl\r
                    font-semibold\r
                  `,children:`Delete`})]})]}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Story Title`,value:e.title||``,onChange:e=>s(t,`title`,e.target.value),className:`\r
                w-full\r
                h-[55px]\r
                px-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
                mb-4\r
              `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Category`,value:e.category||``,onChange:e=>s(t,`category`,e.target.value),className:`\r
                w-full\r
                h-[55px]\r
                px-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
                mb-4\r
              `}),(0,U.jsx)(`textarea`,{rows:`4`,placeholder:`Description`,value:e.desc||``,onChange:e=>s(t,`desc`,e.target.value),className:`\r
                w-full\r
                p-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
                resize-none\r
                mb-4\r
              `}),(0,U.jsxs)(`div`,{className:`mb-4`,children:[(0,U.jsx)(`p`,{className:`\r
                  font-semibold\r
                  mb-3\r
                  text-[#111827]\r
                `,children:`Upload Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async e=>{let n=e.target.files[0];if(!n)return;let i=new FormData;i.append(`image`,n);try{r(!0);let{data:e}=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,i);s(t,`image`,e.image)}catch(e){console.log(e)}finally{r(!1)}},className:`\r
                  w-full\r
                  bg-[#F3F4F6]\r
                  p-4\r
                  rounded-2xl\r
                  cursor-pointer\r
                `}),n&&(0,U.jsx)(`p`,{className:`mt-3 text-gray-500`,children:`Uploading image...`}),e.image&&(0,U.jsx)(`img`,{src:c(e.image),alt:e.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/800x600?text=Story+Image`},className:`\r
                    w-full\r
                    h-[220px]\r
                    object-cover\r
                    rounded-2xl\r
                    mt-4\r
                    shadow-md\r
                  `})]}),(0,U.jsxs)(`select`,{value:e.type||``,onChange:e=>s(t,`type`,e.target.value),className:`\r
                w-full\r
                h-[55px]\r
                px-5\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,children:[(0,U.jsx)(`option`,{value:`large`,children:`Large`}),(0,U.jsx)(`option`,{value:`tall`,children:`Tall`}),(0,U.jsx)(`option`,{value:`small`,children:`Small`})]})]},e._id))})]})}function Rs({pageData:e,setPageData:t}){let n=e?.programs||[],r=()=>{let e={title:``,color:`#E63946`,points:[``]};t(t=>({...t,programs:[...t.programs||[],e]}))},i=e=>{let r=n.filter((t,n)=>n!==e);t(e=>({...e,programs:r}))},a=(e,r,i)=>{let a=[...n];a[e][r]=i,t(e=>({...e,programs:a}))},o=(e,r,i)=>{let a=[...n];a[e].points[r]=i,t(e=>({...e,programs:a}))},s=e=>{let r=[...n];r[e].points.push(``),t(e=>({...e,programs:r}))},c=(e,r)=>{let i=[...n];i[e].points=i[e].points.filter((e,t)=>t!==r),t(e=>({...e,programs:i}))},l=async(n,r)=>{let i=n.target.files[0];if(!i)return;let a=new FormData;a.append(`image`,i);try{let n=await(await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,{method:`POST`,body:a})).json(),i={...e,[r]:n.image};t(i),await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/pages/home`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)})}catch(e){console.log(e)}},u=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/600x400?text=Program+Image`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-8\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          justify-between\r
          mb-8\r
        `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`\r
              text-3xl\r
              font-bold\r
              text-[#1F2937]\r
            `,children:`Programs Section`}),(0,U.jsx)(`p`,{className:`text-gray-500 mt-2`,children:`Manage programs and gallery images.`})]}),(0,U.jsx)(`button`,{onClick:r,className:`\r
            bg-[#E63946]\r
            hover:bg-[#d62839]\r
            text-white\r
            px-6\r
            py-3\r
            rounded-2xl\r
            font-semibold\r
            transition\r
          `,children:`+ Add Program`})]}),(0,U.jsx)(`div`,{className:`space-y-8`,children:n.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                border\r
                border-gray-200\r
                rounded-[30px]\r
                p-6\r
              `,children:[(0,U.jsxs)(`div`,{className:`\r
                  flex\r
                  items-center\r
                  justify-between\r
                  mb-5\r
                `,children:[(0,U.jsxs)(`h3`,{className:`\r
                    text-2xl\r
                    font-bold\r
                  `,children:[`Program `,t+1]}),(0,U.jsx)(`button`,{onClick:()=>i(t),className:`\r
                    bg-red-100\r
                    text-red-600\r
                    px-4\r
                    py-2\r
                    rounded-xl\r
                    font-semibold\r
                  `,children:`Delete`})]}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Program Title`,value:e.title||``,onChange:e=>a(t,`title`,e.target.value),className:`\r
                  w-full\r
                  h-[60px]\r
                  px-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  outline-none\r
                  mb-5\r
                `}),(0,U.jsxs)(`div`,{className:`mb-6`,children:[(0,U.jsx)(`p`,{className:`\r
                    font-semibold\r
                    mb-3\r
                  `,children:`Program Color`}),(0,U.jsx)(`input`,{type:`color`,value:e.color||`#E63946`,onChange:e=>a(t,`color`,e.target.value),className:`\r
                    w-[90px]\r
                    h-[55px]\r
                    rounded-xl\r
                    border-0\r
                    cursor-pointer\r
                  `})]}),(0,U.jsx)(`div`,{className:`space-y-4`,children:(e.points||[]).map((e,n)=>(0,U.jsxs)(`div`,{className:`\r
                        flex\r
                        gap-3\r
                      `,children:[(0,U.jsx)(`input`,{type:`text`,placeholder:`Point ${n+1}`,value:e,onChange:e=>o(t,n,e.target.value),className:`\r
                          flex-1\r
                          h-[55px]\r
                          px-5\r
                          rounded-2xl\r
                          bg-[#F9FAFB]\r
                          outline-none\r
                        `}),(0,U.jsx)(`button`,{onClick:()=>c(t,n),className:`\r
                          bg-red-100\r
                          text-red-600\r
                          px-4\r
                          rounded-xl\r
                          font-bold\r
                        `,children:`✕`})]},n))}),(0,U.jsx)(`button`,{onClick:()=>s(t),className:`\r
                  mt-5\r
                  bg-black\r
                  text-white\r
                  px-5\r
                  py-3\r
                  rounded-2xl\r
                  font-semibold\r
                `,children:`+ Add Point`})]},t))}),(0,U.jsxs)(`div`,{className:`\r
          mt-10\r
          border\r
          border-gray-200\r
          rounded-[30px]\r
          p-6\r
        `,children:[(0,U.jsx)(`h3`,{className:`\r
            text-2xl\r
            font-bold\r
            mb-6\r
          `,children:`Programs Gallery Images`}),(0,U.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-5`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                mb-3\r
                font-semibold\r
              `,children:`Image 1`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>l(e,`programImage1`),className:`\r
                w-full\r
                bg-[#F3F4F6]\r
                p-4\r
                rounded-2xl\r
                cursor-pointer\r
              `}),e.programImage1&&(0,U.jsx)(`img`,{src:u(e.programImage1),alt:`Program`,className:`\r
                  w-full\r
                  h-[180px]\r
                  object-cover\r
                  rounded-2xl\r
                  mt-3\r
                  shadow-md\r
                `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                mb-3\r
                font-semibold\r
              `,children:`Image 2`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>l(e,`programImage2`),className:`\r
                w-full\r
                bg-[#F3F4F6]\r
                p-4\r
                rounded-2xl\r
                cursor-pointer\r
              `}),e.programImage2&&(0,U.jsx)(`img`,{src:u(e.programImage2),alt:`Program`,className:`\r
                  w-full\r
                  h-[180px]\r
                  object-cover\r
                  rounded-2xl\r
                  mt-3\r
                  shadow-md\r
                `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                block\r
                mb-3\r
                font-semibold\r
              `,children:`Image 3`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>l(e,`programImage3`),className:`\r
                w-full\r
                bg-[#F3F4F6]\r
                p-4\r
                rounded-2xl\r
                cursor-pointer\r
              `}),e.programImage3&&(0,U.jsx)(`img`,{src:u(e.programImage3),alt:`Program`,className:`\r
                  w-full\r
                  h-[180px]\r
                  object-cover\r
                  rounded-2xl\r
                  mt-3\r
                  shadow-md\r
                `})]})]})]})]})}function zs({pageData:e,setPageData:t}){let n=e?.stats||[],r=[`smile`,`users`,`graduation`,`handshake`,`heart`,`star`,`globe`,`book`,`child`,`school`],i=()=>{let e={number:``,label:``,icon:`smile`};t(t=>({...t,stats:[...t.stats||[],e]}))},a=e=>{let r=n.filter((t,n)=>n!==e);t(e=>({...e,stats:r}))},o=(e,r,i)=>{let a=[...n];a[e][r]=i,t(e=>({...e,stats:a}))};return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-8\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          justify-between\r
          mb-8\r
        `,children:[(0,U.jsx)(`h2`,{className:`\r
            text-3xl\r
            font-bold\r
          `,children:`Stats Section`}),(0,U.jsx)(`button`,{onClick:i,className:`\r
            bg-[#E63946]\r
            text-white\r
            px-6\r
            py-3\r
            rounded-2xl\r
            font-semibold\r
          `,children:`+ Add Stat`})]}),(0,U.jsx)(`div`,{className:`space-y-6`,children:n.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                border\r
                border-gray-200\r
                rounded-[30px]\r
                p-6\r
              `,children:[(0,U.jsxs)(`div`,{className:`\r
                  flex\r
                  items-center\r
                  justify-between\r
                  mb-5\r
                `,children:[(0,U.jsxs)(`h3`,{className:`\r
                    text-2xl\r
                    font-bold\r
                  `,children:[`Stat `,t+1]}),(0,U.jsx)(`button`,{onClick:()=>a(t),className:`\r
                    bg-red-100\r
                    text-red-600\r
                    px-4\r
                    py-2\r
                    rounded-xl\r
                  `,children:`Delete`})]}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Number`,value:e.number||``,onChange:e=>o(t,`number`,e.target.value),className:`\r
                  w-full\r
                  h-[60px]\r
                  px-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  outline-none\r
                  mb-4\r
                `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Label`,value:e.label||``,onChange:e=>o(t,`label`,e.target.value),className:`\r
                  w-full\r
                  h-[60px]\r
                  px-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  outline-none\r
                  mb-4\r
                `}),(0,U.jsx)(`select`,{value:e.icon||`smile`,onChange:e=>o(t,`icon`,e.target.value),className:`\r
                  w-full\r
                  h-[60px]\r
                  px-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  outline-none\r
                `,children:r.map(e=>(0,U.jsx)(`option`,{value:e,children:e},e))})]},t))})]})}function Bs({pageData:e,setPageData:t}){let n=e?.footer||{},[r,i]=(0,S.useState)(!1),a=e=>{let{name:n,value:r}=e.target;t(e=>({...e,footer:{...e.footer||{},[n]:r}}))};return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-8\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h2`,{className:`\r
            text-3xl\r
            font-bold\r
            text-[#1F2937]\r
            mb-3\r
          `,children:`Footer Section`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Edit footer information, logo, contact details, and social links.`})]}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Website Logo`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async e=>{let n=e.target.files[0];if(n)try{let e=new FormData;e.append(`logo`,n);let r=await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/logo/footer-logo`,{method:`POST`,body:e});if(console.log(r),!r.ok){let e=await r.text();throw console.log(e),Error(`Upload failed`)}let i=await r.json();console.log(i),t(e=>({...e,footer:{...e.footer||{},logo:i?.logo||``}})),alert(`Logo uploaded successfully`)}catch(e){console.log(e),alert(`Logo upload failed`)}},className:`\r
              w-full\r
              p-4\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
            `}),n.logo&&(0,U.jsx)(`img`,{src:n.logo?.startsWith(`http`)?n.logo:`https://lightgrey-squid-753475.hostingersite.com${n.logo}`,alt:`logo preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`/logo.png`},className:`\r
                          mt-4\r
                          w-40\r
                          h-auto\r
                          object-contain\r
                        `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Footer Description`}),(0,U.jsx)(`textarea`,{rows:`5`,name:`description`,placeholder:`Footer Description`,value:n.description||``,onChange:a,className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Phone Number`}),(0,U.jsx)(`input`,{type:`text`,name:`phone`,placeholder:`Phone Number`,value:n.phone||``,onChange:a,className:`\r
              w-full\r
              h-[60px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Email Address`}),(0,U.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Email Address`,value:n.email||``,onChange:a,className:`\r
              w-full\r
              h-[60px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Address`}),(0,U.jsx)(`textarea`,{rows:`4`,name:`address`,placeholder:`Address`,value:n.address||``,onChange:a,className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Facebook Link`}),(0,U.jsx)(`input`,{type:`text`,name:`facebook`,placeholder:`Facebook URL`,value:n.facebook||``,onChange:a,className:`\r
              w-full\r
              h-[60px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`Instagram Link`}),(0,U.jsx)(`input`,{type:`text`,name:`instagram`,placeholder:`Instagram URL`,value:n.instagram||``,onChange:a,className:`\r
              w-full\r
              h-[60px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              mb-3\r
              text-[#111827]\r
            `,children:`YouTube Link`}),(0,U.jsx)(`input`,{type:`text`,name:`youtube`,placeholder:`YouTube URL`,value:n.youtube||``,onChange:a,className:`\r
              w-full\r
              h-[60px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `})]})]}),(0,U.jsx)(`button`,{onClick:async()=>{try{i(!0);let e=await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/pages/footer`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({footer:n})}),r=await e.json();if(console.log(`SAVE RESPONSE:`,r),!e.ok){alert(r.message||`Failed to save footer`);return}t(r),alert(`Footer updated successfully`)}catch(e){console.log(e),alert(`Save failed`)}finally{i(!1)}},disabled:r,className:`\r
          mt-8\r
          bg-[#E63946]\r
          hover:bg-red-600\r
          text-white\r
          px-8\r
          py-4\r
          rounded-2xl\r
          font-semibold\r
          transition\r
          disabled:opacity-50\r
        `,children:r?`Saving...`:`Save Footer`}),(0,U.jsxs)(`div`,{className:`\r
          mt-10\r
          bg-[#F8FAFC]\r
          border\r
          border-gray-200\r
          rounded-[30px]\r
          p-8\r
        `,children:[(0,U.jsx)(`h3`,{className:`\r
            text-2xl\r
            font-bold\r
            mb-6\r
            text-[#111827]\r
          `,children:`Live Preview`}),n.logo&&(0,U.jsx)(`img`,{src:n.logo?.startsWith(`http`)?n.logo:`https://lightgrey-squid-753475.hostingersite.com${n.logo}`,alt:`preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`/logo.png`},className:`\r
                        w-40\r
                        object-contain\r
                        mb-6\r
                      `})]})]})}function Vs({pageData:e,setPageData:t,uploadImage:n,uploading:r}){let i=e?.hero?.image?e.hero.image.startsWith(`http`)?e.hero.image:`https://lightgrey-squid-753475.hostingersite.com${e.hero.image}`:`https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-10\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h2`,{className:`\r
            text-4xl\r
            font-bold\r
            mb-2\r
            text-[#111827]\r
          `,children:`About Hero Section`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Manage hero section content and image.`})]}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Hero Title`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Title`,value:e?.hero?.title||``,onChange:n=>t({...e,hero:{...e.hero,title:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Hero Subtitle`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Subtitle`,value:e?.hero?.subtitle||``,onChange:n=>t({...e,hero:{...e.hero,subtitle:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Description`}),(0,U.jsx)(`textarea`,{placeholder:`Description`,value:e?.hero?.description||``,onChange:n=>t({...e,hero:{...e.hero,description:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              h-[180px]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Button Text`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Button Text`,value:e?.hero?.buttonText||``,onChange:n=>t({...e,hero:{...e.hero,buttonText:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Upload Hero Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>n(e,`hero`),className:`\r
              w-full\r
              bg-[#F3F4F6]\r
              p-4\r
              rounded-2xl\r
              cursor-pointer\r
            `}),r&&(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Uploading image...`}),e?.hero?.image&&(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                  mb-3\r
                  font-semibold\r
                  text-gray-700\r
                `,children:`Image Preview`}),(0,U.jsx)(`img`,{src:i,alt:`Hero`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80`},className:`\r
                  w-full\r
                  h-[320px]\r
                  object-cover\r
                  rounded-[30px]\r
                  shadow-lg\r
                `})]})]})]})]})}function Hs({pageData:e,setPageData:t,uploadImage:n,uploading:r}){let i=e?.mission?.image?e.mission.image.startsWith(`http`)?e.mission.image:`https://lightgrey-squid-753475.hostingersite.com${e.mission.image}`:`https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-10\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h2`,{className:`\r
            text-4xl\r
            font-bold\r
            mb-2\r
            text-[#111827]\r
          `,children:`About Mission Section`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Manage the mission section content.`})]}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Heading`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Heading`,value:e?.mission?.heading||``,onChange:n=>t({...e,mission:{...e?.mission||{},heading:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Title`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Title`,value:e?.mission?.title||``,onChange:n=>t({...e,mission:{...e?.mission||{},title:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Description`}),(0,U.jsx)(`textarea`,{placeholder:`Content`,value:e?.mission?.content||``,onChange:n=>t({...e,mission:{...e?.mission||{},content:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              h-[220px]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Upload Mission Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>n(e,`mission`),className:`\r
              w-full\r
              bg-[#F3F4F6]\r
              p-4\r
              rounded-2xl\r
              cursor-pointer\r
            `}),r&&(0,U.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Uploading image...`}),e?.mission?.image&&(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                  mb-3\r
                  font-semibold\r
                  text-gray-700\r
                `,children:`Image Preview`}),(0,U.jsx)(`img`,{src:i,alt:`Mission`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80`},className:`\r
                  w-[220px]\r
                  h-[220px]\r
                  object-cover\r
                  rounded-2xl\r
                  shadow-lg\r
                `})]})]})]})]})}function Us({pageData:e,setPageData:t,uploadImage:n,uploading:r}){let i=e?.chairperson?.image?e.chairperson.image.startsWith(`http`)?e.chairperson.image:`https://lightgrey-squid-753475.hostingersite.com${e.chairperson.image}`:`https://i.pravatar.cc/500?img=47`;return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-10\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h2`,{className:`\r
            text-4xl\r
            font-bold\r
            mb-2\r
            text-[#111827]\r
          `,children:`Chairperson Section`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Manage chairperson information and image.`})]}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Section Heading`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Message from the Chairperson`,value:e?.chairperson?.heading||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},heading:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Section Title`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Leading with Heart`,value:e?.chairperson?.title||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},title:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Chairperson Name`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Name`,value:e?.chairperson?.name||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},name:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Role`}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Founder & Chairperson`,value:e?.chairperson?.role||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},role:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              outline-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Quote`}),(0,U.jsx)(`textarea`,{placeholder:`Quote`,value:e?.chairperson?.quote||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},quote:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              h-[140px]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              mb-3\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Description`}),(0,U.jsx)(`textarea`,{placeholder:`Description`,value:e?.chairperson?.description||``,onChange:n=>t({...e,chairperson:{...e?.chairperson||{},description:n.target.value}}),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-gray-100\r
              h-[220px]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`label`,{className:`\r
              block\r
              font-semibold\r
              text-[#111827]\r
            `,children:`Upload Chairperson Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>n(e,`chairperson`),className:`\r
              w-full\r
              bg-[#F3F4F6]\r
              p-4\r
              rounded-2xl\r
              cursor-pointer\r
            `}),r&&(0,U.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Uploading image...`}),e?.chairperson?.image&&(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`\r
                  mb-3\r
                  font-semibold\r
                  text-gray-700\r
                `,children:`Image Preview`}),(0,U.jsx)(`img`,{src:i,alt:`Chairperson`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/500?img=47`},className:`\r
                  w-[220px]\r
                  h-[220px]\r
                  object-cover\r
                  rounded-2xl\r
                  shadow-lg\r
                `})]})]})]})]})}function Ws({pageData:e,setPageData:t}){let n=()=>{t({...e,team:[...e.team||[],{name:``,role:``,image:``,color:`#E63946`}]})},r=n=>{let r=[...e.team];r.splice(n,1),t({...e,team:r})},i=(n,r,i)=>{let a=[...e.team];a[n][r]=i,t({...e,team:a})};return(0,U.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[30px]\r
        p-10\r
        shadow-sm\r
      `,children:[(0,U.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          justify-between\r
          mb-10\r
        `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`\r
              text-4xl\r
              font-bold\r
              text-[#111827]\r
              mb-2\r
            `,children:`Team Members`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Manage your NGO team members.`})]}),(0,U.jsx)(`button`,{onClick:n,className:`\r
            bg-[#E63946]\r
            hover:bg-[#d62839]\r
            text-white\r
            px-6\r
            py-3\r
            rounded-2xl\r
            font-bold\r
            transition\r
          `,children:`+ Add Member`})]}),(0,U.jsx)(`div`,{className:`space-y-8`,children:(e?.team||[]).map((e,t)=>{let n=e.image?e.image.startsWith(`http`)?e.image:`https://lightgrey-squid-753475.hostingersite.com${e.image}`:`https://i.pravatar.cc/150`;return(0,U.jsxs)(`div`,{className:`\r
                  border\r
                  border-gray-200\r
                  rounded-[30px]\r
                  p-8\r
                  space-y-5\r
                `,children:[(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    justify-between\r
                  `,children:[(0,U.jsxs)(`h3`,{className:`\r
                      text-2xl\r
                      font-bold\r
                    `,children:[`Member `,t+1]}),(0,U.jsx)(`button`,{onClick:()=>r(t),className:`\r
                      bg-red-100\r
                      text-red-600\r
                      px-4\r
                      py-2\r
                      rounded-xl\r
                      font-semibold\r
                    `,children:`Remove`})]}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Name`,value:e.name,onChange:e=>i(t,`name`,e.target.value),className:`\r
                    w-full\r
                    p-5\r
                    rounded-2xl\r
                    bg-gray-100\r
                    outline-none\r
                  `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Role`,value:e.role,onChange:e=>i(t,`role`,e.target.value),className:`\r
                    w-full\r
                    p-5\r
                    rounded-2xl\r
                    bg-gray-100\r
                    outline-none\r
                  `}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`label`,{className:`\r
                      block\r
                      font-semibold\r
                      text-[#111827]\r
                    `,children:`Upload Team Image`}),(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async e=>{let n=e.target.files[0];if(!n)return;let r=new FormData;r.append(`image`,n);try{let e=await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,{method:`POST`,body:r});if(!e.ok){console.log(`Upload failed`);return}i(t,`image`,(await e.json()).image)}catch(e){console.log(e)}},className:`\r
                      w-full\r
                      bg-[#F3F4F6]\r
                      p-4\r
                      rounded-2xl\r
                      cursor-pointer\r
                    `}),e.image&&(0,U.jsx)(`img`,{src:n,alt:`preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/150`},className:`\r
                        w-[120px]\r
                        h-[120px]\r
                        rounded-2xl\r
                        object-cover\r
                        shadow-md\r
                      `})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`\r
                      block\r
                      mb-3\r
                      font-semibold\r
                      text-[#111827]\r
                    `,children:`Accent Color`}),(0,U.jsx)(`input`,{type:`color`,value:e.color,onChange:e=>i(t,`color`,e.target.value),className:`\r
                      w-[100px]\r
                      h-[60px]\r
                      rounded-xl\r
                      border-0\r
                      cursor-pointer\r
                    `})]}),(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-5\r
                    mt-6\r
                    bg-gray-50\r
                    p-5\r
                    rounded-2xl\r
                  `,children:[(0,U.jsx)(`img`,{src:n,alt:`preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/150`},className:`\r
                      w-[80px]\r
                      h-[80px]\r
                      rounded-full\r
                      object-cover\r
                      border-4\r
                    `,style:{borderColor:e.color}}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{className:`\r
                        text-xl\r
                        font-bold\r
                      `,children:e.name||`Member Name`}),(0,U.jsx)(`p`,{style:{color:e.color},className:`\r
                        font-semibold\r
                      `,children:e.role||`Role`})]})]})]},t)})})]})}function Gs({pageData:e,setPageData:t}){return(0,U.jsxs)(`div`,{className:`bg-white rounded-[30px] p-10`,children:[(0,U.jsx)(`h2`,{className:`text-4xl font-bold mb-8`,children:`CTA Section`}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsx)(`input`,{type:`text`,placeholder:`Title`,value:e?.cta?.title||``,onChange:n=>t({...e,cta:{...e?.cta||{},title:n.target.value}}),className:`\r
            w-full\r
            p-5\r
            rounded-2xl\r
            bg-gray-100\r
            outline-none\r
          `}),(0,U.jsx)(`textarea`,{placeholder:`Description`,value:e?.cta?.description||``,onChange:n=>t({...e,cta:{...e?.cta||{},description:n.target.value}}),className:`\r
            w-full\r
            p-5\r
            rounded-2xl\r
            bg-gray-100\r
            h-[220px]\r
            outline-none\r
          `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Button 1 Text`,value:e?.cta?.button1||``,onChange:n=>t({...e,cta:{...e?.cta||{},button1:n.target.value}}),className:`\r
            w-full\r
            p-5\r
            rounded-2xl\r
            bg-gray-100\r
            outline-none\r
          `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Button 2 Text`,value:e?.cta?.button2||``,onChange:n=>t({...e,cta:{...e?.cta||{},button2:n.target.value}}),className:`\r
            w-full\r
            p-5\r
            rounded-2xl\r
            bg-gray-100\r
            outline-none\r
          `}),(0,U.jsxs)(`div`,{className:`\r
            mt-8\r
            bg-gradient-to-r\r
            from-[#E63946]\r
            to-[#F4A020]\r
            rounded-[30px]\r
            p-10\r
            text-white\r
          `,children:[(0,U.jsx)(`h3`,{className:`text-4xl font-bold mb-5`,children:e?.cta?.title||`CTA Title`}),(0,U.jsx)(`p`,{className:`text-lg leading-8 opacity-90 mb-8`,children:e?.cta?.description||`CTA Description`}),(0,U.jsxs)(`div`,{className:`flex gap-4 flex-wrap`,children:[(0,U.jsx)(`button`,{className:`\r
                bg-white\r
                text-[#E63946]\r
                px-6\r
                py-3\r
                rounded-2xl\r
                font-bold\r
              `,children:e?.cta?.button1||`Button 1`}),(0,U.jsx)(`button`,{className:`\r
                border-2\r
                border-white\r
                px-6\r
                py-3\r
                rounded-2xl\r
                font-bold\r
              `,children:e?.cta?.button2||`Button 2`})]})]})]})]})}function Ks(){let e=[`home`,`about`],t={home:[`hero`,`story`,`programs`,`stats`,`footer`],about:[`hero`,`mission`,`chairperson`,`team`,`cta`]},[n,r]=(0,S.useState)(`home`),[i,a]=(0,S.useState)(`hero`),[o,s]=(0,S.useState)(`home`),[c,l]=(0,S.useState)({hero:{title:``,subtitle:``,description:``,buttonText:``,image:``},story:{heading:``,title:``,description:``,image:``},mission:{heading:``,title:``,content:``,image:``},philosophy:{title:``,description:``},chairperson:{name:``,role:``,quote:``,description:``,image:``},cta:{title:``,description:``,button1:``,button2:``},values:[],impact:[],impactStories:[],programs:[],stats:[],team:[],footer:{description:``,phone:``,email:``,address:``,logo:``}}),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(!1),[m,h]=(0,S.useState)(``);(0,S.useEffect)(()=>{g()},[n]);let g=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/pages/${n}`);e&&l(e)}catch(e){console.log(e)}},_=async()=>{try{d(!0),h(``),await R.put(`https://lightgrey-squid-753475.hostingersite.com/api/pages/${n}`,c),h(`Page updated successfully!`),setTimeout(()=>{h(``)},3e3)}catch(e){console.log(e)}finally{d(!1)}},v=async(e,t=`hero`)=>{let n=e.target.files[0];if(!n)return;let r=new FormData;r.append(`image`,n);try{p(!0);let{data:e}=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,r,{headers:{"Content-Type":`multipart/form-data`}});l(n=>({...n,[t]:{...n[t],image:e.image}}))}catch(e){console.log(e)}finally{p(!1)}},y=e=>{s(o===e?``:e),r(e),a(t[e][0])};return(0,U.jsx)(Ps,{children:(0,U.jsxs)(`div`,{className:`\r
        flex\r
        gap-8\r
        w-full\r
        overflow-hidden\r
      `,children:[(0,U.jsxs)(`div`,{className:`\r
          w-[280px]\r
          min-w-[280px]\r
          bg-white\r
          rounded-[30px]\r
          p-6\r
          shadow-sm\r
          h-fit\r
          sticky\r
          top-6\r
          overflow-y-auto\r
          max-h-[95vh]\r
        `,children:[(0,U.jsx)(`h2`,{className:`\r
            text-3xl\r
            font-bold\r
            mb-8\r
            text-[#111827]\r
          `,children:`Website Pages`}),(0,U.jsx)(`div`,{className:`space-y-4`,children:e.map(e=>(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`button`,{onClick:()=>y(e),className:`
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  capitalize
                  font-bold
                  text-lg
                  transition-all

                  ${n===e?`bg-[#E63946] text-white`:`bg-[#F3F4F6] text-[#111827]`}
                `,children:[e,(0,U.jsx)(`span`,{children:o===e?`−`:`+`})]}),o===e&&(0,U.jsx)(`div`,{className:`\r
                    mt-3\r
                    ml-4\r
                    space-y-3\r
                    border-l-2\r
                    border-gray-200\r
                    pl-4\r
                  `,children:t[e].map(e=>(0,U.jsx)(`button`,{onClick:()=>a(e),className:`
                          w-full
                          text-left
                          px-4
                          py-3
                          rounded-xl
                          capitalize
                          font-medium
                          transition-all

                          ${i===e?`bg-black text-white`:`bg-[#F9FAFB] text-[#111827] hover:bg-[#ECEFF3]`}
                        `,children:e},e))})]},e))}),(0,U.jsx)(`button`,{onClick:_,disabled:u,className:`\r
            w-full\r
            mt-10\r
            bg-[#E63946]\r
            hover:bg-[#d62839]\r
            text-white\r
            py-4\r
            rounded-2xl\r
            font-bold\r
            text-lg\r
          `,children:u?`Saving...`:`Save Changes`}),m&&(0,U.jsx)(`div`,{className:`\r
              mt-5\r
              bg-green-100\r
              text-green-700\r
              px-5\r
              py-4\r
              rounded-2xl\r
              font-semibold\r
            `,children:m})]}),(0,U.jsx)(`div`,{className:`\r
          flex-1\r
          overflow-y-auto\r
          overflow-x-hidden\r
          pr-2\r
        `,children:(0,U.jsxs)(`div`,{className:`\r
            w-full\r
            max-w-[1400px]\r
            mx-auto\r
          `,children:[n===`home`&&i===`hero`&&(0,U.jsx)(Is,{pageData:c,setPageData:l,uploadImage:v,uploading:f}),n===`home`&&i===`story`&&(0,U.jsx)(Ls,{pageData:c,setPageData:l}),n===`home`&&i===`programs`&&(0,U.jsx)(Rs,{pageData:c,setPageData:l}),n===`home`&&i===`stats`&&(0,U.jsx)(zs,{pageData:c,setPageData:l}),n===`home`&&i===`footer`&&(0,U.jsx)(Bs,{pageData:c,setPageData:l}),n===`about`&&i===`hero`&&(0,U.jsx)(Vs,{pageData:c,setPageData:l,uploadImage:v,uploading:f}),n===`about`&&i===`mission`&&(0,U.jsx)(Hs,{pageData:c,setPageData:l,uploadImage:v,uploading:f}),n===`about`&&i===`chairperson`&&(0,U.jsx)(Us,{pageData:c,setPageData:l,uploadImage:v,uploading:f}),n===`about`&&i===`team`&&(0,U.jsx)(Ws,{pageData:c,setPageData:l}),n===`about`&&i===`cta`&&(0,U.jsx)(Gs,{pageData:c,setPageData:l})]})})]})})}function qs({children:e}){let t=null;try{t=JSON.parse(localStorage.getItem(`adminInfo`))}catch{console.log(`Invalid adminInfo`),localStorage.removeItem(`adminInfo`)}return t?e:(0,U.jsx)(Lt,{to:`/admin`,replace:!0})}function Js(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)({title:``,caption:``,category:`Therapy Sessions`,image:``}),u=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/1200x700?text=Gallery+Image`,d=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/gallery`);t(e)}catch(e){console.log(e)}};(0,S.useEffect)(()=>{d()},[]);let f=e=>{let{name:t,value:n}=e.target;l(e=>({...e,[t]:n}))},p=async e=>{let t=e.target.files[0];if(!t)return;let n=new FormData;n.append(`image`,t);try{a(!0);let e=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,n);if(!e.data?.image){console.log(`Upload failed`);return}l(t=>({...t,image:e.data.image}))}catch(e){console.log(e)}finally{a(!1)}},m=async e=>{e.preventDefault();try{r(!0),o?await R.put(`https://lightgrey-squid-753475.hostingersite.com/api/gallery/${o}`,c):await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/gallery`,c),l({title:``,caption:``,category:`Therapy Sessions`,image:``}),s(null),d()}catch(e){console.log(e)}finally{r(!1)}},h=e=>{s(e._id),l({title:e.title,caption:e.caption,category:e.category,image:e.image}),window.scrollTo({top:0,behavior:`smooth`})},g=async e=>{if(window.confirm(`Delete this gallery item?`))try{await R.delete(`https://lightgrey-squid-753475.hostingersite.com/api/gallery/${e}`),d()}catch(e){console.log(e)}};return(0,U.jsx)(Ps,{children:(0,U.jsxs)(`div`,{className:`\r
          max-w-7xl\r
          mx-auto\r
          px-4\r
          py-10\r
        `,children:[(0,U.jsxs)(`div`,{className:`mb-10`,children:[(0,U.jsx)(`h1`,{className:`\r
              text-5xl\r
              font-black\r
              text-[#1F2937]\r
              mb-4\r
            `,children:`Emotional Gallery CMS`}),(0,U.jsx)(`p`,{className:`\r
              text-lg\r
              text-gray-500\r
              max-w-3xl\r
              leading-relaxed\r
            `,children:`Upload meaningful moments that reflect growth, inclusion, therapy, learning, and emotional connection.`})]}),(0,U.jsx)(`div`,{className:`\r
            bg-white\r
            rounded-[35px]\r
            p-8\r
            shadow-sm\r
            border\r
            border-gray-100\r
            mb-12\r
          `,children:(0,U.jsxs)(`form`,{onSubmit:m,className:`\r
              space-y-6\r
            `,children:[(0,U.jsx)(`input`,{type:`text`,name:`title`,placeholder:`Story Title`,value:c.title,onChange:f,className:`\r
                w-full\r
                h-[65px]\r
                px-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,required:!0}),(0,U.jsx)(`textarea`,{rows:`5`,name:`caption`,placeholder:`Emotional caption or short impact story`,value:c.caption,onChange:f,className:`\r
                w-full\r
                p-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
                resize-none\r
              `,required:!0}),(0,U.jsxs)(`select`,{name:`category`,value:c.category,onChange:f,className:`\r
                w-full\r
                h-[65px]\r
                px-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,children:[(0,U.jsx)(`option`,{children:`Therapy Sessions`}),(0,U.jsx)(`option`,{children:`Inclusive Learning`}),(0,U.jsx)(`option`,{children:`Parent Support`}),(0,U.jsx)(`option`,{children:`Community Events`}),(0,U.jsx)(`option`,{children:`Creative Activities`}),(0,U.jsx)(`option`,{children:`Growth Moments`})]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:p,className:`\r
                  w-full\r
                  p-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  cursor-pointer\r
                `}),i&&(0,U.jsx)(`p`,{className:`\r
                    text-[#E63946]\r
                    font-semibold\r
                  `,children:`Uploading image...`}),c.image&&(0,U.jsx)(`img`,{src:u(c.image),alt:`Preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x700?text=Gallery+Image`},className:`\r
                    w-full\r
                    h-[320px]\r
                    object-contain\r
                    bg-black\r
                    rounded-[30px]\r
                  `})]}),(0,U.jsx)(`button`,{type:`submit`,disabled:n,className:`\r
                w-full\r
                bg-[#E63946]\r
                hover:bg-[#d62839]\r
                text-white\r
                py-5\r
                rounded-2xl\r
                font-bold\r
                text-lg\r
                transition-all\r
                disabled:opacity-50\r
                disabled:cursor-not-allowed\r
              `,children:n?`Saving...`:o?`Update Story`:`Add Gallery Story`})]})}),(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-between\r
              mb-8\r
            `,children:[(0,U.jsx)(`h2`,{className:`\r
                text-4xl\r
                font-black\r
                text-[#1F2937]\r
              `,children:`Uploaded Stories`}),(0,U.jsxs)(`div`,{className:`\r
                bg-[#FFF4F4]\r
                text-[#E63946]\r
                px-5\r
                py-3\r
                rounded-full\r
                font-bold\r
              `,children:[e.length,` `,`Stories`]})]}),(0,U.jsx)(`div`,{className:`\r
              grid\r
              md:grid-cols-2\r
              xl:grid-cols-3\r
              gap-8\r
            `,children:Array.isArray(e)&&e.map(e=>(0,U.jsxs)(`div`,{className:`\r
                    bg-white\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    shadow-sm\r
                    border\r
                    border-gray-100\r
                    hover:shadow-xl\r
                    transition-all\r
                  `,children:[(0,U.jsx)(`img`,{src:u(e.image),alt:e.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x700?text=Gallery+Image`},className:`\r
                      w-full\r
                      h-[260px]\r
                      object-cover\r
                    `}),(0,U.jsxs)(`div`,{className:`p-6`,children:[(0,U.jsx)(`div`,{className:`\r
                        inline-block\r
                        bg-[#FFF4F4]\r
                        text-[#E63946]\r
                        text-sm\r
                        font-bold\r
                        px-4\r
                        py-2\r
                        rounded-full\r
                        mb-4\r
                      `,children:e.category}),(0,U.jsx)(`h3`,{className:`\r
                        text-2xl\r
                        font-black\r
                        text-[#1F2937]\r
                        mb-3\r
                        leading-snug\r
                      `,children:e.title}),(0,U.jsx)(`p`,{className:`\r
                        text-gray-600\r
                        leading-relaxed\r
                        mb-6\r
                      `,children:e.caption}),(0,U.jsxs)(`div`,{className:`\r
                        flex\r
                        gap-3\r
                      `,children:[(0,U.jsx)(`button`,{onClick:()=>h(e),className:`\r
                          flex-1\r
                          bg-[#E63946]\r
                          hover:bg-[#d62839]\r
                          text-white\r
                          py-4\r
                          rounded-2xl\r
                          font-bold\r
                          transition-all\r
                        `,children:`Edit Story`}),(0,U.jsx)(`button`,{onClick:()=>g(e._id),className:`\r
                          flex-1\r
                          bg-black\r
                          hover:bg-[#111827]\r
                          text-white\r
                          py-4\r
                          rounded-2xl\r
                          font-bold\r
                          transition-all\r
                        `,children:`Delete`})]})]})]},e._id))})]})]})})}function Ys(){let{id:e}=pt(),[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{(async()=>{try{let{data:t}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/stories/${e}`);n(t)}catch(e){console.log(e)}})()},[e]),t?(0,U.jsxs)(`section`,{className:`bg-[#F8FAFC] min-h-screen`,children:[(0,U.jsxs)(`div`,{className:`\r
          relative\r
          w-full\r
          bg-black\r
          overflow-hidden\r
        `,children:[(0,U.jsx)(`img`,{src:t.image||`https://via.placeholder.com/1200x800?text=Story+Image`,alt:t.title,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x800?text=Story+Image`},className:`\r
                            w-full\r
                            max-h-screen\r
                            object-contain\r
                            mx-auto\r
                        `}),(0,U.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            bg-gradient-to-t\r
            from-black/70\r
            via-black/20\r
            to-transparent\r
          `}),(0,U.jsxs)(`div`,{className:`\r
            absolute\r
            top-0\r
            left-0\r
            w-full\r
            flex\r
            items-center\r
            justify-between\r
            px-6\r
            py-6\r
            z-20\r
          `,children:[(0,U.jsxs)(N,{to:`/stories`,className:`\r
              flex\r
              items-center\r
              gap-3\r
              bg-white/20\r
              backdrop-blur-md\r
              text-white\r
              px-5\r
              py-3\r
              rounded-full\r
              font-semibold\r
              hover:bg-white/30\r
              transition-all\r
            `,children:[(0,U.jsx)(rs,{}),`Back Stories`]}),(0,U.jsx)(`button`,{className:`\r
    w-14\r
    h-14\r
    rounded-full\r
    bg-white/20\r
    backdrop-blur-md\r
    text-white\r
    flex\r
    items-center\r
    justify-center\r
    text-xl\r
    hover:bg-white/30\r
    transition-all\r
  `,onClick:async()=>{try{navigator.share?await navigator.share({title:t.title,text:t.desc,url:window.location.href}):(await navigator.clipboard.writeText(window.location.href),alert(`Story link copied 😄`))}catch(e){console.log(e)}},children:(0,U.jsx)(Co,{})})]}),(0,U.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            w-full\r
            z-10\r
            px-6\r
            pb-12\r
          `,children:(0,U.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,U.jsx)(`div`,{className:`\r
                inline-block\r
                bg-[#E63946]\r
                text-white\r
                px-5\r
                py-2\r
                rounded-full\r
                text-sm\r
                font-bold\r
                tracking-wide\r
                mb-6\r
                shadow-lg\r
              `,children:t.category}),(0,U.jsx)(`h1`,{className:`\r
                text-4xl\r
                md:text-6xl\r
                font-black\r
                text-white\r
                leading-tight\r
                max-w-4xl\r
                drop-shadow-xl\r
              `,children:t.title})]})})]}),(0,U.jsxs)(`div`,{className:`\r
          max-w-6xl\r
          mx-auto\r
          px-6\r
          py-20\r
          grid\r
          lg:grid-cols-[2fr_1fr]\r
          gap-14\r
        `,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-[35px]\r
              p-10\r
              shadow-xl\r
              border\r
              border-gray-100\r
            `,children:[(0,U.jsxs)(`div`,{className:`mb-10`,children:[(0,U.jsx)(`p`,{className:`\r
                  text-[#E63946]\r
                  uppercase\r
                  tracking-[4px]\r
                  font-bold\r
                  text-sm\r
                  mb-4\r
                `,children:`Real Impact Story`}),(0,U.jsx)(`h2`,{className:`\r
                  text-4xl\r
                  font-black\r
                  text-[#0B1B4D]\r
                  leading-tight\r
                `,children:`A Journey of Hope, Growth & Inclusion`})]}),(0,U.jsx)(`div`,{className:`\r
                text-[19px]\r
                leading-[2.1]\r
                text-gray-700\r
                space-y-6\r
              `,children:(0,U.jsx)(`p`,{children:t.desc})})]}),(0,U.jsxs)(`div`,{className:`\r
              mt-10\r
              bg-gradient-to-r\r
              from-[#E63946]\r
              to-[#ff6b75]\r
              text-white\r
              rounded-[35px]\r
              p-10\r
              shadow-2xl\r
              relative\r
              overflow-hidden\r
            `,children:[(0,U.jsx)(To,{className:`\r
                text-7xl\r
                absolute\r
                top-6\r
                right-6\r
                text-white/10\r
              `}),(0,U.jsx)(`p`,{className:`\r
                text-3xl\r
                font-bold\r
                leading-[1.7]\r
                relative\r
                z-10\r
              `,children:`“Every child deserves love, dignity, support, and the opportunity to grow.”`}),(0,U.jsxs)(`div`,{className:`\r
                mt-8\r
                flex\r
                items-center\r
                gap-3\r
                text-white/90\r
                font-semibold\r
              `,children:[(0,U.jsx)(No,{}),`Prarambha Foundation`]})]})]}),(0,U.jsx)(`div`,{children:(0,U.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-[35px]\r
              p-8\r
              shadow-xl\r
              sticky\r
              top-10\r
              border\r
              border-gray-100\r
            `,children:[(0,U.jsx)(`h3`,{className:`\r
                text-2xl\r
                font-black\r
                text-[#0B1B4D]\r
                mb-8\r
              `,children:`Story Impact`}),(0,U.jsxs)(`div`,{className:`space-y-6`,children:[(0,U.jsxs)(`div`,{className:`\r
                  bg-[#FFF5F5]\r
                  rounded-2xl\r
                  p-5\r
                `,children:[(0,U.jsx)(`p`,{className:`\r
                    text-sm\r
                    font-bold\r
                    text-[#E63946]\r
                    uppercase\r
                    mb-2\r
                  `,children:`Category`}),(0,U.jsx)(`h4`,{className:`\r
                    text-xl\r
                    font-bold\r
                    text-[#0B1B4D]\r
                  `,children:t.category})]}),(0,U.jsxs)(`div`,{className:`\r
                  bg-[#F8FAFC]\r
                  rounded-2xl\r
                  p-5\r
                `,children:[(0,U.jsx)(`p`,{className:`\r
                    text-sm\r
                    font-bold\r
                    text-[#E63946]\r
                    uppercase\r
                    mb-2\r
                  `,children:`Mission`}),(0,U.jsx)(`h4`,{className:`\r
                    text-lg\r
                    font-semibold\r
                    text-[#0B1B4D]\r
                    leading-relaxed\r
                  `,children:`Discovering Ability Before Disability`})]}),(0,U.jsxs)(`div`,{className:`\r
                  bg-[#F8FAFC]\r
                  rounded-2xl\r
                  p-5\r
                `,children:[(0,U.jsx)(`p`,{className:`\r
                    text-sm\r
                    font-bold\r
                    text-[#E63946]\r
                    uppercase\r
                    mb-2\r
                  `,children:`Focus`}),(0,U.jsx)(`h4`,{className:`\r
                    text-lg\r
                    font-semibold\r
                    text-[#0B1B4D]\r
                    leading-relaxed\r
                  `,children:`Child Development, Inclusion & Growth`})]})]}),(0,U.jsx)(`button`,{className:`\r
                w-full\r
                mt-10\r
                bg-[#E63946]\r
                hover:bg-[#d62839]\r
                text-white\r
                py-4\r
                rounded-2xl\r
                font-bold\r
                text-lg\r
                transition-all\r
                duration-300\r
                shadow-lg\r
              `,children:`Support Our Mission`})]})})]})]}):(0,U.jsx)(`div`,{className:`\r
          min-h-screen\r
          flex\r
          items-center\r
          justify-center\r
          bg-[#F8FAFC]\r
        `,children:(0,U.jsxs)(`div`,{className:`text-center`,children:[(0,U.jsx)(`div`,{className:`\r
              w-16\r
              h-16\r
              border-4\r
              border-[#E63946]\r
              border-t-transparent\r
              rounded-full\r
              animate-spin\r
              mx-auto\r
              mb-6\r
            `}),(0,U.jsx)(`h2`,{className:`\r
              text-2xl\r
              font-bold\r
              text-[#0B1B4D]\r
            `,children:`Loading Story...`})]})})}function Xs(){let{pageData:e}=Cs(),t=dt(),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)(!0),[o,s]=(0,S.useState)(`All`),[c,l]=(0,S.useState)(``);(0,S.useEffect)(()=>{(async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/stories`);r(e)}catch(e){console.log(e)}finally{a(!1)}})()},[]);let u=[`All`,`Therapy`,`Inclusive Education`,`Parent Support`,`Child Development`,`Community`],d=n.filter(e=>{let t=o===`All`?!0:e.category===o,n=e.title?.toLowerCase().includes(c.toLowerCase());return t&&n}),f=n[0],p=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/800x600?text=Story+Image`,m=e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/800x600?text=Story+Image`};return(0,U.jsxs)(`div`,{className:`bg-[#FFFDFB] min-h-screen`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`\r
                    relative\r
                    overflow-hidden\r
                    py-24\r
                    px-4\r
                    sm:px-6\r
                    lg:px-8\r
                    bg-gradient-to-br\r
                    from-[#FFF5F5]\r
                    via-[#FFFDFB]\r
                    to-[#F8FAFC]\r
                `,children:(0,U.jsxs)(`div`,{className:`max-w-6xl mx-auto text-center`,children:[(0,U.jsxs)(`div`,{className:`\r
                            inline-flex\r
                            items-center\r
                            gap-3\r
                            bg-white\r
                            shadow-md\r
                            px-6\r
                            py-3\r
                            rounded-full\r
                            mb-8\r
                        `,children:[(0,U.jsx)(`div`,{className:`\r
                                w-3\r
                                h-3\r
                                rounded-full\r
                                bg-[#E63946]\r
                            `}),(0,U.jsx)(`span`,{className:`\r
                                text-sm\r
                                font-bold\r
                                tracking-wider\r
                                text-[#E63946]\r
                            `,children:`REAL STORIES • REAL GROWTH`})]}),(0,U.jsxs)(`h1`,{className:`\r
                            text-4xl\r
                            sm:text-5xl\r
                            md:text-7xl\r
                            font-black\r
                            text-[#0B1B4D]\r
                            leading-tight\r
                            mb-8\r
                        `,children:[`Real Journeys of`,(0,U.jsxs)(`span`,{className:`text-[#E63946]`,children:[` `,`Growth & Hope`]})]}),(0,U.jsx)(`p`,{className:`\r
                            max-w-3xl\r
                            mx-auto\r
                            text-base\r
                            md:text-xl\r
                            text-gray-600\r
                            leading-[2]\r
                        `,children:`Every child carries a unique story of courage, resilience, and possibility. These journeys reflect the heart of Prarambha Foundation and the transformative power of inclusive care.`})]})}),f&&(0,U.jsx)(`section`,{className:`px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-24`,children:(0,U.jsxs)(`div`,{className:`\r
                            max-w-7xl\r
                            mx-auto\r
                            bg-white\r
                            rounded-[40px]\r
                            overflow-hidden\r
                            shadow-[0_15px_50px_rgba(0,0,0,0.08)]\r
                            grid\r
                            lg:grid-cols-2\r
                        `,children:[(0,U.jsx)(`div`,{className:`h-full`,children:(0,U.jsx)(`img`,{src:p(f.image),alt:f.title,loading:`lazy`,onError:m,className:`\r
                                        w-full\r
                                        h-[350px]\r
                                        lg:h-[500px]\r
                                        object-cover\r
                                    `})}),(0,U.jsxs)(`div`,{className:`p-8 lg:p-14 flex flex-col justify-center`,children:[(0,U.jsx)(`div`,{className:`\r
                                    inline-block\r
                                    bg-[#FFF1F2]\r
                                    text-[#E63946]\r
                                    px-5\r
                                    py-2\r
                                    rounded-full\r
                                    text-sm\r
                                    font-bold\r
                                    mb-6\r
                                    w-fit\r
                                `,children:`Featured Story`}),(0,U.jsx)(`h2`,{className:`\r
                                    text-3xl\r
                                    md:text-5xl\r
                                    font-black\r
                                    text-[#0B1B4D]\r
                                    leading-tight\r
                                    mb-6\r
                                `,children:f.title}),(0,U.jsx)(`p`,{className:`\r
                                    text-gray-600\r
                                    leading-[2]\r
                                    text-base\r
                                    md:text-lg\r
                                    mb-8\r
                                `,children:f.desc}),(0,U.jsxs)(`button`,{onClick:()=>t(`/stories/${f._id}`),className:`\r
                                    bg-[#E63946]\r
                                    hover:bg-red-600\r
                                    text-white\r
                                    px-8\r
                                    py-4\r
                                    rounded-full\r
                                    font-bold\r
                                    flex\r
                                    items-center\r
                                    gap-3\r
                                    w-fit\r
                                    transition\r
                                `,children:[`Read Full Story`,(0,U.jsx)(ns,{})]})]})]})}),(0,U.jsx)(`section`,{className:`px-4 sm:px-6 lg:px-8 mb-14`,children:(0,U.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,U.jsx)(`div`,{className:`mb-8`,children:(0,U.jsx)(`input`,{type:`text`,placeholder:`Search stories...`,value:c,onChange:e=>l(e.target.value),className:`\r
                                w-full\r
                                h-[65px]\r
                                rounded-2xl\r
                                bg-white\r
                                px-6\r
                                shadow-sm\r
                                border\r
                                border-gray-100\r
                                outline-none\r
                                focus:ring-2\r
                                focus:ring-[#E63946]\r
                            `})}),(0,U.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:u.map((e,t)=>(0,U.jsx)(`button`,{onClick:()=>s(e),className:`
                                    px-6
                                    py-3
                                    rounded-full
                                    font-bold
                                    transition-all
                                    duration-300

                                    ${o===e?`bg-[#E63946] text-white shadow-lg`:`bg-white text-[#0B1B4D] hover:bg-[#FFF1F2]`}
                                `,children:e},t))})]})}),(0,U.jsx)(`section`,{className:`px-4 sm:px-6 lg:px-8 pb-24`,children:(0,U.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:i?(0,U.jsx)(`div`,{className:`\r
                                min-h-[300px]\r
                                flex\r
                                items-center\r
                                justify-center\r
                                text-2xl\r
                                font-bold\r
                                text-[#0B1B4D]\r
                            `,children:`Loading Stories...`}):d.length===0?(0,U.jsxs)(`div`,{className:`\r
                                text-center\r
                                py-20\r
                            `,children:[(0,U.jsx)(`h2`,{className:`\r
                                    text-3xl\r
                                    font-black\r
                                    text-[#0B1B4D]\r
                                    mb-4\r
                                `,children:`No Stories Found`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Try another search or category.`})]}):(0,U.jsx)(`div`,{className:`\r
                                grid\r
                                grid-cols-1\r
                                md:grid-cols-2\r
                                xl:grid-cols-3\r
                                gap-8\r
                            `,children:d.map((e,n)=>(0,U.jsxs)(`div`,{className:`\r
                                        group\r
                                        bg-white\r
                                        rounded-[35px]\r
                                        overflow-hidden\r
                                        shadow-md\r
                                        border\r
                                        border-gray-100\r
                                        hover:-translate-y-3\r
                                        hover:shadow-2xl\r
                                        transition-all\r
                                        duration-500\r
                                    `,children:[(0,U.jsx)(`div`,{className:`overflow-hidden`,children:(0,U.jsx)(`img`,{src:p(e.image),alt:e.title,loading:`lazy`,onError:m,className:`\r
                                                        w-full\r
                                                        h-[320px]\r
                                                        object-cover\r
                                                        transition-transform\r
                                                        duration-700\r
                                                        group-hover:scale-110\r
                                                    `})}),(0,U.jsxs)(`div`,{className:`p-7`,children:[(0,U.jsx)(`div`,{className:`\r
                                                inline-block\r
                                                bg-[#FFF4F4]\r
                                                text-[#E63946]\r
                                                px-4\r
                                                py-2\r
                                                rounded-full\r
                                                text-sm\r
                                                font-bold\r
                                                mb-5\r
                                            `,children:e.category}),(0,U.jsx)(`h3`,{className:`\r
                                                text-2xl\r
                                                font-black\r
                                                text-[#0B1B4D]\r
                                                leading-snug\r
                                                mb-4\r
                                                line-clamp-2\r
                                            `,children:e.title}),(0,U.jsx)(`p`,{className:`\r
                                                text-gray-600\r
                                                leading-[1.9]\r
                                                mb-7\r
                                                line-clamp-4\r
                                            `,children:e.desc}),(0,U.jsxs)(`button`,{onClick:()=>t(`/stories/${e._id}`),className:`\r
                                                bg-[#E63946]\r
                                                hover:bg-red-600\r
                                                text-white\r
                                                px-6\r
                                                py-3\r
                                                rounded-full\r
                                                font-semibold\r
                                                flex\r
                                                items-center\r
                                                gap-3\r
                                                transition\r
                                            `,children:[`Read More`,(0,U.jsx)(ns,{})]})]})]},n))})})}),(0,U.jsx)(us,{pageData:e})]})}var Zs=`/assets/QR%20Code-D2kaGnIq.jpeg`;function Qs(){let{pageData:e}=Cs(),[t,n]=(0,S.useState)(``),r=(e,t)=>{navigator.clipboard.writeText(e),n(`${t} copied successfully!`),setTimeout(()=>n(``),3e3)};return(0,U.jsxs)(`div`,{className:`font-sans antialiased bg-[#FCFAF5] min-h-screen flex flex-col`,children:[(0,U.jsx)(os,{pageData:e}),t&&(0,U.jsxs)(`div`,{className:`fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#0B1B4D]/95 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3`,children:[(0,U.jsx)(qo,{className:`text-green-400`}),(0,U.jsx)(`span`,{className:`font-medium text-sm whitespace-nowrap`,children:t})]}),(0,U.jsxs)(`main`,{className:`flex-grow max-w-[1200px] mx-auto px-4 w-full pt-8 pb-16`,children:[(0,U.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,U.jsx)(`h1`,{className:`text-[32px] sm:text-[48px] font-extrabold text-[#0B1B4D] mb-4`,children:`Support Prarambha Foundation`}),(0,U.jsx)(`p`,{className:`text-gray-500 text-lg max-w-2xl mx-auto`,children:`Your contribution helps children build a brighter future.`})]}),(0,U.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16`,children:[(0,U.jsxs)(`div`,{className:`lg:col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center`,children:[(0,U.jsx)(`div`,{className:`p-4 bg-[#FAFAFA] rounded-[24px] mb-6 border-4 border-[#F3E8D5] w-full flex justify-center`,children:(0,U.jsx)(`img`,{src:Zs,alt:`QR`,className:`w-[350px] max-w-full mix-blend-multiply`})}),(0,U.jsx)(`h3`,{className:`text-xl font-bold text-[#0B1B4D] uppercase tracking-widest`,children:`Scan to Donate`})]}),(0,U.jsxs)(`div`,{className:`lg:col-span-7 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-center`,children:[(0,U.jsx)(`h3`,{className:`text-xl font-bold text-[#E63946] mb-6`,children:`Bank Details`}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-gray-50 rounded-xl`,children:[(0,U.jsx)(Xo,{className:`text-[#0B1B4D]`}),` `,(0,U.jsx)(`p`,{className:`font-bold text-[#0B1B4D]`,children:`PRARAMBHA FOUNDATION`})]}),(0,U.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-gray-50 rounded-xl`,children:[(0,U.jsx)(ho,{className:`text-[#0B1B4D]`}),` `,(0,U.jsx)(`p`,{className:`font-bold text-[#0B1B4D] text-sm`,children:`AU SMALL FINANCE BANK`})]}),(0,U.jsxs)(`div`,{className:`flex items-center gap-4 p-3 bg-gray-50 rounded-xl`,children:[(0,U.jsx)(Ao,{className:`text-[#0B1B4D]`}),` `,(0,U.jsx)(`p`,{className:`font-bold text-[#0B1B4D] text-sm`,children:`ASHRAM ROAD`})]})]}),(0,U.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,U.jsxs)(`div`,{className:`bg-gray-50 p-4 rounded-xl flex items-center justify-between`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`text-[10px] uppercase font-bold text-gray-400`,children:`Account Number`}),(0,U.jsx)(`p`,{className:`font-bold text-[#0B1B4D] whitespace-nowrap`,children:`4681 3681 4681 3681`})]}),(0,U.jsx)(`button`,{onClick:()=>r(`4681 3681 4681 3681`,`Account Number`),className:`p-2 bg-white rounded-lg shadow-sm`,children:(0,U.jsx)(is,{})})]}),(0,U.jsxs)(`div`,{className:`bg-gray-50 p-4 rounded-xl flex items-center justify-between`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`text-[10px] uppercase font-bold text-gray-400`,children:`IFSC Code`}),(0,U.jsx)(`p`,{className:`font-bold text-[#0B1B4D] whitespace-nowrap`,children:`AUBL0002153`})]}),(0,U.jsx)(`button`,{onClick:()=>r(`AUBL0002153`,`IFSC Code`),className:`p-2 bg-white rounded-lg shadow-sm`,children:(0,U.jsx)(is,{})})]})]})]})]})]}),(0,U.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16`,children:[{title:`LEGAL REGISTRATION`,icon:(0,U.jsx)(So,{className:`text-[#0B1B4D] text-3xl mb-4 opacity-20`}),items:[`Section 8 Company Registration (MCA)`,`Certificate of Incorporation`,`PAN Card`,`TAN`]},{title:`NGO RECOGNITION`,icon:(0,U.jsx)(ts,{className:`text-[#E63946] text-3xl mb-4 opacity-20`}),items:[`NGO Darpan Registration (NITI Aayog)`,`CSR Ready (Eligible to receive CSR funding)`]},{title:`TAX & COMPLIANCE`,icon:(0,U.jsx)(Bo,{className:`text-[#E63946] text-3xl mb-4 opacity-20`}),items:[`12A Registration`,`80G Registration`,`Income Tax Compliance`]},{title:`FINANCIAL & ADMINISTRATIVE`,icon:(0,U.jsx)(zo,{className:`text-[#0B1B4D] text-3xl mb-4 opacity-20`}),items:[`Dedicated Bank Account`,`Donation Receipt System`]}].map((e,t)=>(0,U.jsxs)(`div`,{className:`bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative pt-12`,children:[(0,U.jsx)(`div`,{className:`absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0B1B4D] text-white px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap`,children:e.title}),(0,U.jsx)(`ul`,{className:`space-y-3`,children:e.items.map((e,t)=>(0,U.jsxs)(`li`,{className:`flex gap-3 text-sm font-medium text-gray-600`,children:[(0,U.jsx)(Jo,{className:`text-green-500 mt-1`}),` `,e]},t))})]},t))}),(0,U.jsxs)(`div`,{className:`text-center p-10 bg-white rounded-[32px] shadow-sm border border-gray-100`,children:[(0,U.jsx)(No,{className:`text-[#E63946] text-3xl mx-auto mb-4 animate-pulse`}),(0,U.jsx)(`p`,{className:`text-[#0B1B4D] font-semibold text-lg italic`,children:`"Thank you for supporting Prarambha Foundation."`})]})]}),(0,U.jsx)(us,{pageData:e})]})}function $s(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)({title:``,desc:``,category:`Inclusive Education`,image:``,type:`small`}),u=e=>e?typeof e==`string`&&e.startsWith(`http`)?e:`https://lightgrey-squid-753475.hostingersite.com${e}`:`https://via.placeholder.com/1200x700?text=Story+Image`,d=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/stories`);t(e)}catch(e){console.log(e)}};(0,S.useEffect)(()=>{d()},[]);let f=e=>{let{name:t,value:n}=e.target;l(e=>({...e,[t]:n}))},p=async e=>{let t=e.target.files[0];if(!t)return;let n=new FormData;n.append(`image`,t);try{a(!0);let e=await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/upload`,n,{headers:{"Content-Type":`multipart/form-data`}});if(!e.data?.image){console.log(`Upload failed`);return}l(t=>({...t,image:e.data.image}))}catch(e){console.log(e)}finally{a(!1)}},m=async e=>{e.preventDefault();try{r(!0),o?await R.put(`https://lightgrey-squid-753475.hostingersite.com/api/stories/${o}`,c):await R.post(`https://lightgrey-squid-753475.hostingersite.com/api/stories`,c),l({title:``,desc:``,category:`Inclusive Education`,image:``,type:`small`}),s(null),d()}catch(e){console.log(e)}finally{r(!1)}},h=e=>{s(e._id),l({title:e.title,desc:e.desc,category:e.category,image:e.image,type:e.type}),window.scrollTo({top:0,behavior:`smooth`})},g=async e=>{if(window.confirm(`Delete this story?`))try{await R.delete(`https://lightgrey-squid-753475.hostingersite.com/api/stories/${e}`),d()}catch(e){console.log(e)}};return(0,U.jsx)(Ps,{children:(0,U.jsxs)(`div`,{className:`\r
          max-w-7xl\r
          mx-auto\r
          px-4\r
          py-10\r
        `,children:[(0,U.jsxs)(`div`,{className:`mb-10`,children:[(0,U.jsx)(`h1`,{className:`\r
              text-5xl\r
              font-black\r
              text-[#1F2937]\r
              mb-4\r
            `,children:`Emotional Stories CMS`}),(0,U.jsx)(`p`,{className:`\r
              text-lg\r
              text-gray-500\r
              max-w-3xl\r
              leading-relaxed\r
            `,children:`Manage impactful NGO stories, emotional journeys, inclusive learning moments, and child development experiences.`})]}),(0,U.jsx)(`div`,{className:`\r
            bg-white\r
            rounded-[35px]\r
            p-8\r
            shadow-sm\r
            border\r
            border-gray-100\r
            mb-12\r
          `,children:(0,U.jsxs)(`form`,{onSubmit:m,className:`\r
              space-y-6\r
            `,children:[(0,U.jsx)(`input`,{type:`text`,name:`title`,placeholder:`Story Title`,value:c.title,onChange:f,className:`\r
                w-full\r
                h-[65px]\r
                px-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,required:!0}),(0,U.jsx)(`textarea`,{rows:`5`,name:`desc`,placeholder:`Emotional impact story`,value:c.desc,onChange:f,className:`\r
                w-full\r
                p-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
                resize-none\r
              `,required:!0}),(0,U.jsxs)(`select`,{name:`category`,value:c.category,onChange:f,className:`\r
                w-full\r
                h-[65px]\r
                px-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,children:[(0,U.jsx)(`option`,{children:`Inclusive Education`}),(0,U.jsx)(`option`,{children:`Child Development`}),(0,U.jsx)(`option`,{children:`Therapy Support`}),(0,U.jsx)(`option`,{children:`Parent Support`}),(0,U.jsx)(`option`,{children:`Community Events`})]}),(0,U.jsxs)(`select`,{name:`type`,value:c.type,onChange:f,className:`\r
                w-full\r
                h-[65px]\r
                px-6\r
                rounded-2xl\r
                bg-[#F3F4F6]\r
                outline-none\r
              `,children:[(0,U.jsx)(`option`,{value:`large`,children:`Large Card`}),(0,U.jsx)(`option`,{value:`small`,children:`Small Card`}),(0,U.jsx)(`option`,{value:`tall`,children:`Tall Card`})]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:p,className:`\r
                  w-full\r
                  p-5\r
                  rounded-2xl\r
                  bg-[#F3F4F6]\r
                  cursor-pointer\r
                `}),i&&(0,U.jsx)(`p`,{className:`\r
                    text-[#E63946]\r
                    font-semibold\r
                  `,children:`Uploading image...`}),c.image&&(0,U.jsx)(`img`,{src:u(c.image),alt:`Preview`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x700?text=Story+Image`},className:`\r
                    w-full\r
                    h-[320px]\r
                    object-cover\r
                    rounded-[30px]\r
                  `})]}),(0,U.jsx)(`button`,{type:`submit`,disabled:n,className:`\r
                w-full\r
                bg-[#E63946]\r
                hover:bg-[#d62839]\r
                text-white\r
                py-5\r
                rounded-2xl\r
                font-bold\r
                text-lg\r
                transition-all\r
                disabled:opacity-50\r
                disabled:cursor-not-allowed\r
              `,children:n?`Saving...`:o?`Update Story`:`Add Story`})]})}),(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-between\r
              mb-8\r
            `,children:[(0,U.jsx)(`h2`,{className:`\r
                text-4xl\r
                font-black\r
                text-[#1F2937]\r
              `,children:`Uploaded Stories`}),(0,U.jsxs)(`div`,{className:`\r
                bg-[#FFF4F4]\r
                text-[#E63946]\r
                px-5\r
                py-3\r
                rounded-full\r
                font-bold\r
              `,children:[e.length,` `,`Stories`]})]}),(0,U.jsx)(`div`,{className:`\r
              grid\r
              md:grid-cols-2\r
              xl:grid-cols-3\r
              gap-8\r
            `,children:Array.isArray(e)&&e.map(e=>(0,U.jsxs)(`div`,{className:`\r
                    bg-white\r
                    rounded-[30px]\r
                    overflow-hidden\r
                    shadow-sm\r
                    border\r
                    border-gray-100\r
                    hover:shadow-xl\r
                    transition-all\r
                  `,children:[(0,U.jsx)(`img`,{src:u(e.image),alt:e.title,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://via.placeholder.com/1200x700?text=Story+Image`},className:`\r
                      w-full\r
                      h-[260px]\r
                      object-cover\r
                    `}),(0,U.jsxs)(`div`,{className:`p-6`,children:[(0,U.jsx)(`div`,{className:`\r
                        inline-block\r
                        bg-[#FFF4F4]\r
                        text-[#E63946]\r
                        text-sm\r
                        font-bold\r
                        px-4\r
                        py-2\r
                        rounded-full\r
                        mb-4\r
                      `,children:e.category}),(0,U.jsx)(`h3`,{className:`\r
                        text-2xl\r
                        font-black\r
                        text-[#1F2937]\r
                        mb-3\r
                        leading-snug\r
                      `,children:e.title}),(0,U.jsx)(`p`,{className:`\r
                        text-gray-600\r
                        leading-relaxed\r
                        mb-6\r
                        line-clamp-3\r
                      `,children:e.desc}),(0,U.jsxs)(`div`,{className:`\r
                        bg-[#F3F4F6]\r
                        text-[#111827]\r
                        text-sm\r
                        font-semibold\r
                        px-4\r
                        py-2\r
                        rounded-full\r
                        inline-block\r
                        mb-6\r
                      `,children:[e.type,` `,`card`]}),(0,U.jsxs)(`div`,{className:`\r
                        flex\r
                        gap-3\r
                      `,children:[(0,U.jsx)(`button`,{onClick:()=>h(e),className:`\r
                          flex-1\r
                          bg-[#E63946]\r
                          hover:bg-[#d62839]\r
                          text-white\r
                          py-4\r
                          rounded-2xl\r
                          font-bold\r
                          transition-all\r
                        `,children:`Edit`}),(0,U.jsx)(`button`,{onClick:()=>g(e._id),className:`\r
                          flex-1\r
                          bg-black\r
                          hover:bg-[#111827]\r
                          text-white\r
                          py-4\r
                          rounded-2xl\r
                          font-bold\r
                          transition-all\r
                        `,children:`Delete`})]})]})]},e._id))})]})]})})}function ec(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{(async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/messages`);t(e)}catch(e){console.log(`Fetch messages error:`,e)}finally{r(!1)}})()},[]),(0,U.jsxs)(Ps,{children:[i&&(0,U.jsxs)(`div`,{className:`fixed top-24 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce text-white ${o===`success`?`bg-green-500`:`bg-red-500`}`,children:[o===`success`?(0,U.jsx)(qo,{}):(0,U.jsx)(Ho,{}),(0,U.jsx)(`span`,{className:`font-semibold`,children:i})]}),c&&(0,U.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`,children:(0,U.jsxs)(`div`,{className:`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl`,children:[(0,U.jsx)(`h3`,{className:`text-2xl font-bold text-[#0F172A] mb-4`,children:`Delete Message?`}),(0,U.jsx)(`p`,{className:`text-gray-600 mb-8`,children:`Are you sure you want to permanently delete this contact message?`}),(0,U.jsxs)(`div`,{className:`flex justify-end gap-4`,children:[(0,U.jsx)(`button`,{onClick:()=>{l(!1),d(null)},className:`px-6 py-2.5 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors`,disabled:f,children:`Cancel`}),(0,U.jsx)(`button`,{onClick:async()=>{if(u){p(!0);try{await R.delete(`https://lightgrey-squid-753475.hostingersite.com/api/messages/${u}`),t(e=>e.filter(e=>e._id!==u)),s(`success`),a(`Message deleted successfully.`)}catch(e){console.log(`Delete message error:`,e),s(`error`),a(`Failed to delete message. Please try again.`)}finally{p(!1),l(!1),d(null),setTimeout(()=>a(``),3e3)}}},className:`px-6 py-2.5 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors flex items-center gap-2`,disabled:f,children:f?`Deleting...`:`Delete`})]})]})}),(0,U.jsxs)(`div`,{className:`p-8 bg-[#F8FAFC] min-h-screen`,children:[(0,U.jsxs)(`div`,{className:`mb-10`,children:[(0,U.jsx)(`h1`,{className:`\r
              text-4xl\r
              font-black\r
              text-[#0F172A]\r
              mb-3\r
            `,children:`Contact Messages`}),(0,U.jsx)(`p`,{className:`\r
              text-gray-500\r
              text-lg\r
            `,children:`View all inquiries sent from the website.`})]}),n?(0,U.jsx)(`div`,{className:`\r
              flex\r
              items-center\r
              justify-center\r
              h-[400px]\r
            `,children:(0,U.jsx)(`div`,{className:`\r
                text-2xl\r
                font-bold\r
                text-[#E63946]\r
              `,children:`Loading Messages...`})}):e.length===0?(0,U.jsxs)(`div`,{className:`\r
              bg-white\r
              rounded-[30px]\r
              p-20\r
              text-center\r
              shadow-sm\r
            `,children:[(0,U.jsx)(`div`,{className:`\r
                w-24\r
                h-24\r
                mx-auto\r
                rounded-full\r
                bg-[#FFECEC]\r
                flex\r
                items-center\r
                justify-center\r
                text-[#E63946]\r
                text-4xl\r
                mb-6\r
              `,children:(0,U.jsx)(Uo,{})}),(0,U.jsx)(`h2`,{className:`\r
                text-3xl\r
                font-black\r
                text-[#0F172A]\r
                mb-4\r
              `,children:`No Messages Yet`}),(0,U.jsx)(`p`,{className:`\r
                text-gray-500\r
                text-lg\r
              `,children:`Website contact messages will appear here.`})]}):(0,U.jsx)(`div`,{className:`\r
              grid\r
              grid-cols-1\r
              xl:grid-cols-2\r
              gap-8\r
            `,children:e.map(e=>(0,U.jsxs)(`div`,{className:`\r
                  bg-white\r
                  rounded-[32px]\r
                  p-8\r
                  shadow-sm\r
                  hover:shadow-xl\r
                  transition-all\r
                  duration-300\r
                  border\r
                  border-gray-100\r
                `,children:[(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    justify-between\r
                    items-start\r
                    mb-8\r
                  `,children:[(0,U.jsxs)(`div`,{className:`\r
                      flex\r
                      items-center\r
                      gap-4\r
                    `,children:[(0,U.jsx)(`div`,{className:`\r
                        w-16\r
                        h-16\r
                        rounded-2xl\r
                        bg-[#FFECEC]\r
                        flex\r
                        items-center\r
                        justify-center\r
                        text-[#E63946]\r
                        text-2xl\r
                      `,children:(0,U.jsx)(V,{})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`\r
                          text-2xl\r
                          font-black\r
                          text-[#0F172A]\r
                        `,children:e.name}),(0,U.jsx)(`p`,{className:`\r
                          text-gray-500\r
                          mt-1\r
                        `,children:e.email})]})]}),(0,U.jsx)(`button`,{onClick:()=>{d(e._id),l(!0)},disabled:f&&u===e._id,className:`\r
                      p-3\r
                      text-red-500\r
                      bg-red-50\r
                      hover:bg-red-500\r
                      hover:text-white\r
                      rounded-xl\r
                      transition-colors\r
                      border\r
                      border-red-100\r
                    `,title:`Delete Message`,children:(0,U.jsx)(go,{className:`text-lg`})})]}),(0,U.jsxs)(`div`,{className:`mb-6`,children:[(0,U.jsxs)(`div`,{className:`\r
                      flex\r
                      items-center\r
                      gap-3\r
                      mb-3\r
                    `,children:[(0,U.jsx)(vo,{className:`text-[#2563EB]`}),(0,U.jsx)(`h3`,{className:`\r
                        text-lg\r
                        font-bold\r
                        text-[#0F172A]\r
                      `,children:`Subject`})]}),(0,U.jsx)(`div`,{className:`\r
                      bg-[#F8FAFC]\r
                      p-5\r
                      rounded-2xl\r
                      text-gray-700\r
                    `,children:e.subject})]}),(0,U.jsxs)(`div`,{className:`mb-6`,children:[(0,U.jsxs)(`div`,{className:`\r
                      flex\r
                      items-center\r
                      gap-3\r
                      mb-3\r
                    `,children:[(0,U.jsx)(Uo,{className:`text-[#E63946]`}),(0,U.jsx)(`h3`,{className:`\r
                        text-lg\r
                        font-bold\r
                        text-[#0F172A]\r
                      `,children:`Message`})]}),(0,U.jsx)(`div`,{className:`\r
                      bg-[#F8FAFC]\r
                      p-6\r
                      rounded-2xl\r
                      text-gray-700\r
                      leading-[2]\r
                    `,children:e.message})]}),(0,U.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-3\r
                    text-gray-500\r
                    text-sm\r
                    pt-5\r
                    border-t\r
                  `,children:[(0,U.jsx)(Yo,{}),new Date(e.createdAt).toLocaleString()]})]},e._id))})]})]})}function tc(){let[e,t]=(0,S.useState)({donate:{heroTitle:``,heroSubtitle:``,heroDescription:``,cards:[{title:``,amount:``,desc:``,buttonText:``,icon:``},{title:``,amount:``,desc:``,buttonText:``,icon:``},{title:``,amount:``,desc:``,buttonText:``,icon:``}]}});(0,S.useEffect)(()=>{n()},[]);let n=async()=>{try{let{data:e}=await R.get(`https://lightgrey-squid-753475.hostingersite.com/api/pages/donate`);e?.donate&&t(e)}catch(e){console.log(e)}},r=async()=>{try{await R.put(`https://lightgrey-squid-753475.hostingersite.com/api/pages/donate`,e),alert(`Donate Page Updated ✅`)}catch(e){console.log(e),alert(`Update Failed ❌`)}},i=(e,n)=>{t(t=>({...t,donate:{...t.donate,[e]:n}}))},a=(n,r,i)=>{let a=[...e.donate.cards];a[n]={...a[n],[r]:i},t(e=>({...e,donate:{...e.donate,cards:a}}))};return(0,U.jsx)(Ps,{children:(0,U.jsxs)(`div`,{className:`\r
          bg-white\r
          rounded-[30px]\r
          p-8\r
          shadow-sm\r
        `,children:[(0,U.jsxs)(`div`,{className:`mb-8`,children:[(0,U.jsx)(`h2`,{className:`\r
              text-3xl\r
              font-bold\r
              text-[#111827]\r
              mb-2\r
            `,children:`Donate CMS`}),(0,U.jsx)(`p`,{className:`text-gray-500`,children:`Manage donation page content.`})]}),(0,U.jsxs)(`div`,{className:`space-y-5 mb-12`,children:[(0,U.jsx)(`input`,{type:`text`,placeholder:`Hero Title`,value:e.donate.heroTitle,onChange:e=>i(`heroTitle`,e.target.value),className:`\r
              w-full\r
              h-[58px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Hero Subtitle`,value:e.donate.heroSubtitle,onChange:e=>i(`heroSubtitle`,e.target.value),className:`\r
              w-full\r
              h-[58px]\r
              px-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
            `}),(0,U.jsx)(`textarea`,{rows:`4`,placeholder:`Hero Description`,value:e.donate.heroDescription,onChange:e=>i(`heroDescription`,e.target.value),className:`\r
              w-full\r
              p-5\r
              rounded-2xl\r
              bg-[#F3F4F6]\r
              outline-none\r
              resize-none\r
            `})]}),(0,U.jsx)(`div`,{className:`space-y-8`,children:e.donate.cards.map((e,t)=>(0,U.jsxs)(`div`,{className:`\r
                    border\r
                    border-gray-200\r
                    rounded-[28px]\r
                    p-6\r
                  `,children:[(0,U.jsxs)(`h3`,{className:`\r
                      text-2xl\r
                      font-bold\r
                      mb-6\r
                    `,children:[`Donation Card `,t+1]}),(0,U.jsxs)(`div`,{className:`space-y-4`,children:[(0,U.jsx)(`input`,{type:`text`,placeholder:`Card Title`,value:e.title,onChange:e=>a(t,`title`,e.target.value),className:`\r
                        w-full\r
                        h-[55px]\r
                        px-5\r
                        rounded-2xl\r
                        bg-[#F3F4F6]\r
                        outline-none\r
                      `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Amount`,value:e.amount,onChange:e=>a(t,`amount`,e.target.value),className:`\r
                        w-full\r
                        h-[55px]\r
                        px-5\r
                        rounded-2xl\r
                        bg-[#F3F4F6]\r
                        outline-none\r
                      `}),(0,U.jsx)(`textarea`,{rows:`3`,placeholder:`Description`,value:e.desc,onChange:e=>a(t,`desc`,e.target.value),className:`\r
                        w-full\r
                        p-5\r
                        rounded-2xl\r
                        bg-[#F3F4F6]\r
                        outline-none\r
                        resize-none\r
                      `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Button Text`,value:e.buttonText,onChange:e=>a(t,`buttonText`,e.target.value),className:`\r
                        w-full\r
                        h-[55px]\r
                        px-5\r
                        rounded-2xl\r
                        bg-[#F3F4F6]\r
                        outline-none\r
                      `}),(0,U.jsx)(`input`,{type:`text`,placeholder:`Emoji Icon`,value:e.icon,onChange:e=>a(t,`icon`,e.target.value),className:`\r
                        w-full\r
                        h-[55px]\r
                        px-5\r
                        rounded-2xl\r
                        bg-[#F3F4F6]\r
                        outline-none\r
                      `})]})]},t))}),(0,U.jsx)(`button`,{onClick:r,className:`\r
            mt-10\r
            w-full\r
            h-[60px]\r
            rounded-2xl\r
            bg-[#E63946]\r
            hover:bg-[#d62839]\r
            text-white\r
            font-bold\r
            text-lg\r
            transition-all\r
          `,children:`Save Donate Page`})]})})}function nc(){let{pageData:e}=Cs(),[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0);(0,S.useEffect)(()=>{(async()=>{try{n((await(await fetch(`https://lightgrey-squid-753475.hostingersite.com/api/pages/about`)).json())?.chairperson)}catch(e){console.log(e)}finally{i(!1)}})()},[]);let a=t?.image?typeof t.image==`string`&&t.image.startsWith(`http`)?t.image:`https://lightgrey-squid-753475.hostingersite.com${t.image}`:`https://i.pravatar.cc/500?img=47`;return r?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,justifyContent:`center`,alignItems:`center`,background:`#fff`},children:(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{width:`70px`,height:`70px`,border:`5px solid #E63946`,borderTop:`5px solid transparent`,borderRadius:`50%`,margin:`0 auto 20px`,animation:`spin 1s linear infinite`}}),(0,U.jsx)(`h2`,{style:{fontSize:`32px`,fontWeight:`900`,color:`#0B1B4D`},children:`Loading...`})]})}),(0,U.jsx)(`style`,{children:`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .chair-page {
          background: #fff;
          min-height: 100vh;
        }

        .chair-section {
          padding: 100px 20px;
        }

        .chair-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .chair-img-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .chair-img {
          width: 420px;
          height: 520px;
          object-fit: cover;
          border-radius: 30px;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: 0.4s ease;
        }

        .chair-img:hover {
          transform: scale(1.03);
        }

        .chair-blob {
          position: absolute;
          top: -25px;
          left: -25px;
          width: 420px;
          height: 520px;
          background: #E6394615;
          border-radius: 30px;
          z-index: 1;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          color: #0B1B4D;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .section-title span {
          color: #E63946;
        }

        .chair-quote {
          font-size: 24px;
          line-height: 1.8;
          font-style: italic;
          color: #333;
          border-left: 5px solid #E63946;
          padding-left: 24px;
          margin-bottom: 35px;
        }

        .section-desc {
          color: #555;
          line-height: 2;
          font-size: 17px;
          margin-bottom: 30px;
        }

        .chair-name {
          font-size: 30px;
          font-weight: 900;
          color: #0B1B4D;
        }

        .chair-role {
          color: #E63946;
          font-weight: 700;
          margin-top: 8px;
          font-size: 18px;
        }

        @media (max-width: 1000px) {

          .chair-inner {
            flex-direction: column;
            text-align: center;
          }

          .chair-quote {
            border-left: none;
            border-top: 5px solid #E63946;
            padding-left: 0;
            padding-top: 24px;
          }

          .chair-img,
          .chair-blob {
            width: 320px;
            height: 420px;
          }
        }

        @media (max-width: 600px) {

          .chair-section {
            padding: 70px 20px;
          }

          .chair-img,
          .chair-blob {
            width: 100%;
            max-width: 300px;
            height: 380px;
          }

          .section-title {
            font-size: 42px;
          }

          .chair-quote {
            font-size: 20px;
          }
        }

      `}),(0,U.jsxs)(`div`,{className:`chair-page`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`chair-section`,children:(0,U.jsxs)(`div`,{className:`chair-inner`,children:[(0,U.jsxs)(`div`,{className:`chair-img-wrap`,children:[(0,U.jsx)(`div`,{className:`chair-blob`}),(0,U.jsx)(`img`,{className:`chair-img`,src:a,alt:`Chairperson`,loading:`lazy`,onError:e=>{e.target.onerror=null,e.target.src=`https://i.pravatar.cc/500?img=47`}})]}),(0,U.jsxs)(`div`,{className:`chair-content`,children:[(0,U.jsx)(`p`,{className:`section-tag`,children:t?.heading||`Message from the Chairperson`}),(0,U.jsx)(`h1`,{className:`section-title`,children:t?.title||(0,U.jsxs)(U.Fragment,{children:[`Leading with `,(0,U.jsx)(`span`,{children:`Heart`})]})}),(0,U.jsx)(`blockquote`,{className:`chair-quote`,children:t?.quote||`Every child deserves equal opportunities, compassion, and support.`}),(0,U.jsx)(`p`,{className:`section-desc`,children:t?.description||`We are dedicated to building an inclusive environment where children can thrive with dignity, confidence, and care.`}),(0,U.jsx)(`div`,{className:`chair-name`,children:t?.name||`Chairperson Name`}),(0,U.jsx)(`div`,{className:`chair-role`,children:t?.role||`Founder & Chairperson`})]})]})}),(0,U.jsx)(us,{pageData:e})]})]})}function rc(){let{pageData:e}=Cs();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .ei-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .ei-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #fff6d6, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .ei-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 50%;
        }

        .ei-hero-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          color: #E63946;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 40px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        /* APPROACH SECTION (NEW) */
        .approach-section {
          padding: 80px 20px;
          background: #FAFAFA;
          border-top: 1px solid #f1f1f1;
          border-bottom: 1px solid #f1f1f1;
        }

        .approach-inner {
          max-width: 1200px;
          margin: auto;
        }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .approach-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          border-left: 5px solid #E63946;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.3s;
        }

        .approach-card:hover {
          transform: translateY(-5px);
        }

        .approach-icon {
          font-size: 36px;
          flex-shrink: 0;
        }

        .approach-text {
          font-size: 17px;
          color: #0B1B4D;
          font-weight: 700;
          line-height: 1.4;
        }

        /* SERVICES */
        .services-section {
          padding: 100px 20px;
        }

        .services-inner {
          max-width: 1200px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 70px;
        }

        .section-title span {
          color: #E63946;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: #FFE5E7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 24px;
        }

        .service-title {
          font-size: 24px;
          font-weight: 800;
          color: #0B1B4D;
          line-height: 1.5;
        }

        .service-desc {
          color: #666;
          line-height: 1.8;
          margin-top: 14px;
          font-size: 15px;
        }

        /* CTA */
        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 20px;
        }

        .cta-title span {
          color: #E63946;
        }

        .cta-desc {
          max-width: 800px;
          margin: auto;
          line-height: 1.9;
          color: #555;
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        @media(max-width:768px) {
          .ei-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 46px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .service-title {
            font-size: 22px;
          }
          .approach-card {
            padding: 20px;
          }
        }

      `}),(0,U.jsxs)(`div`,{className:`ei-page`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`ei-hero`,children:(0,U.jsxs)(`div`,{className:`ei-hero-inner`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`hero-tag`,children:`Early Childhood Support`}),(0,U.jsxs)(`h1`,{className:`hero-title`,children:[`Early `,(0,U.jsx)(`span`,{children:`Intervention`})]}),(0,U.jsx)(`p`,{className:`hero-desc`,children:`Early support can change the entire future of a child. At Prarambha Foundation, we help children with autism, ADHD, speech delays, learning difficulties, and developmental challenges through structured, child-centered intervention programs.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`hero-btn`,children:`Get Support`})]}),(0,U.jsx)(`div`,{className:`hero-image`,children:(0,U.jsx)(`img`,{src:`https://res.cloudinary.com/dvg5yktms/image/upload/v1779106706/prarambha-foundation/iwrcgpssqpg8vbwttw9s.jpg`,alt:`Early Intervention`,loading:`lazy`})})]})}),(0,U.jsx)(`section`,{className:`approach-section`,children:(0,U.jsx)(`div`,{className:`approach-inner`,children:(0,U.jsxs)(`div`,{className:`approach-grid`,children:[(0,U.jsxs)(`div`,{className:`approach-card`,children:[(0,U.jsx)(`div`,{className:`approach-icon`,children:`🔍`}),(0,U.jsx)(`div`,{className:`approach-text`,children:`Identify developmental concerns at an early stage`})]}),(0,U.jsxs)(`div`,{className:`approach-card`,children:[(0,U.jsx)(`div`,{className:`approach-icon`,children:`📋`}),(0,U.jsx)(`div`,{className:`approach-text`,children:`Simple screening & observation-based approach`})]}),(0,U.jsxs)(`div`,{className:`approach-card`,children:[(0,U.jsx)(`div`,{className:`approach-icon`,children:`⏱️`}),(0,U.jsx)(`div`,{className:`approach-text`,children:`Helps parents take timely action`})]})]})})}),(0,U.jsx)(`section`,{className:`services-section`,children:(0,U.jsxs)(`div`,{className:`services-inner`,children:[(0,U.jsxs)(`h2`,{className:`section-title`,children:[`Our Core `,(0,U.jsx)(`span`,{children:`Programs`})]}),(0,U.jsx)(`div`,{className:`services-grid`,children:[{title:`Autism & ADHD Support`,icon:`🧠`,desc:`Structured intervention programs focused on communication, behavior, attention, and emotional development.`},{title:`Developmental Delay Support`,icon:`🌱`,desc:`Helping children improve motor skills, social interaction, learning ability, and developmental milestones.`},{title:`Speech & Communication Development`,icon:`🗣️`,desc:`Supporting expressive language, listening skills, communication confidence, and speech clarity.`},{title:`School Readiness & ILP`,icon:`🏫`,desc:`Preparing children for inclusive classrooms through individualised learning plans and readiness programs.`}].map((e,t)=>(0,U.jsxs)(`div`,{className:`service-card`,children:[(0,U.jsx)(`div`,{className:`service-icon`,children:e.icon}),(0,U.jsx)(`div`,{className:`service-title`,children:e.title}),(0,U.jsx)(`p`,{className:`service-desc`,children:e.desc})]},t))})]})}),(0,U.jsxs)(`section`,{className:`cta-section`,children:[(0,U.jsxs)(`h2`,{className:`cta-title`,children:[`Every Child Deserves An `,(0,U.jsx)(`span`,{children:`Opportunity`})]}),(0,U.jsx)(`p`,{className:`cta-desc`,children:`Early identification and timely intervention can transform a child’s development journey. Let’s work together to create a brighter future.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`cta-btn`,children:`Connect With Us`})]}),(0,U.jsx)(us,{pageData:e})]})]})}function ic(){let{pageData:e}=Cs();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .special-ed-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .special-ed-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #e9f6ff, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .special-ed-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 420px;
          height: 420px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 50%;
        }

        .special-ed-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          color: #E63946;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        /* SPECIAL EDUCATION SECTION */
        .core-strength-section {
          padding: 100px 20px;
          background: #FAFAFA;
        }

        .core-strength-inner {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .core-strength-title {
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 16px;
        }

        .core-strength-title span {
          color: #E63946;
        }

        .ilp-subtitle {
          font-size: 24px;
          font-weight: 800;
          color: #0B1B4D;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .ilp-desc {
          color: #555;
          font-size: 20px;
          max-width: 800px;
          margin: 0 auto 60px;
          line-height: 1.6;
          font-weight: 500;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .focus-card {
          background: white;
          padding: 50px 30px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border-bottom: 5px solid #E63946;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          transition: transform 0.4s;
        }

        .focus-card:hover {
          transform: translateY(-8px);
        }

        .focus-icon {
          font-size: 48px;
          background: #e9f6ff;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #0B1B4D;
        }

        .focus-text {
          font-size: 24px;
          color: #0B1B4D;
          font-weight: 800;
        }

        /* CTA */
        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 20px;
        }

        .cta-title span {
          color: #E63946;
        }

        .cta-desc {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        @media(max-width:768px) {
          .special-ed-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 46px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .core-strength-title {
            font-size: 32px;
          }
          .focus-card {
            padding: 40px 20px;
          }
        }

      `}),(0,U.jsxs)(`div`,{className:`special-ed-page`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`special-ed-hero`,children:(0,U.jsxs)(`div`,{className:`special-ed-inner`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`hero-tag`,children:`Core Strength`}),(0,U.jsxs)(`h1`,{className:`hero-title`,children:[`Special `,(0,U.jsx)(`span`,{children:`Education`})]}),(0,U.jsx)(`p`,{className:`hero-desc`,children:`We believe every child has the potential to learn and grow. Through our Individualised Learning Plans (ILP), we provide structured, step-by-step support tailored exactly to each child's pace and ability.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`hero-btn`,children:`Get Support`})]}),(0,U.jsx)(`div`,{className:`hero-image`,children:(0,U.jsx)(`img`,{src:`https://res.cloudinary.com/dvg5yktms/image/upload/v1779097864/prarambha-foundation/f3xsjddxbifnfmyrycnl.jpg`,alt:`Special Education`,loading:`lazy`})})]})}),(0,U.jsx)(`section`,{className:`core-strength-section`,children:(0,U.jsxs)(`div`,{className:`core-strength-inner`,children:[(0,U.jsxs)(`h2`,{className:`core-strength-title`,children:[`Special Education `,(0,U.jsx)(`span`,{children:`(Core Strength)`})]}),(0,U.jsx)(`h3`,{className:`ilp-subtitle`,children:`Individualised Learning Plans (ILP)`}),(0,U.jsx)(`p`,{className:`ilp-desc`,children:`Structured support based on each child’s pace & ability.`}),(0,U.jsxs)(`div`,{className:`focus-grid`,children:[(0,U.jsxs)(`div`,{className:`focus-card`,children:[(0,U.jsx)(`div`,{className:`focus-icon`,children:`🗣️`}),(0,U.jsx)(`div`,{className:`focus-text`,children:`Communication`})]}),(0,U.jsxs)(`div`,{className:`focus-card`,children:[(0,U.jsx)(`div`,{className:`focus-icon`,children:`🤝`}),(0,U.jsx)(`div`,{className:`focus-text`,children:`Behavior`})]}),(0,U.jsxs)(`div`,{className:`focus-card`,children:[(0,U.jsx)(`div`,{className:`focus-icon`,children:`🎒`}),(0,U.jsx)(`div`,{className:`focus-text`,children:`Learning Readiness`})]})]})]})}),(0,U.jsxs)(`section`,{className:`cta-section`,children:[(0,U.jsxs)(`h2`,{className:`cta-title`,children:[`Empowering `,(0,U.jsx)(`span`,{children:`Every Child`})]}),(0,U.jsx)(`p`,{className:`cta-desc`,children:`With the right individualised support, guidance, and family involvement, children can build independence, confidence, and meaningful life skills.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`cta-btn`,children:`Connect With Us`})]}),(0,U.jsx)(us,{pageData:e})]})]})}function ac(){let{pageData:e}=Cs();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .guidance-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .guidance-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #f0f8ff, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .guidance-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 420px;
          height: 420px;
          background: rgba(58, 134, 255, 0.08);
          border-radius: 50%;
        }

        .guidance-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          color: #E63946;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.2;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        /* CONTENT SECTION */
        .content-section {
          padding: 100px 20px;
          background: #FAFAFA;
        }
        
        .content-inner {
          max-width: 1000px;
          margin: auto;
        }

        .content-block {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border-left: 6px solid #E63946;
          transition: transform 0.3s ease;
        }

        .content-block:hover {
          transform: translateY(-5px);
        }

        .content-block:nth-child(2) {
          border-left-color: #3A86FF;
        }

        .content-block:nth-child(3) {
          border-left-color: #FFBE0B;
        }

        .content-block h2 {
          font-size: 26px;
          color: #0B1B4D;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .content-block p, .content-block ul {
          color: #555;
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .content-block ul {
          padding-left: 20px;
          margin-top: 15px;
        }

        .content-block ul li {
          margin-bottom: 12px;
        }
        
        .content-block ul li strong {
          color: #0B1B4D;
          font-size: 19px;
        }

        /* CTA */
        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 20px;
        }

        .cta-title span {
          color: #E63946;
        }

        .cta-desc {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        @media(max-width:768px) {
          .guidance-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .content-block {
            padding: 25px;
          }
          .content-block h2 {
            font-size: 22px;
          }
        }

      `}),(0,U.jsxs)(`div`,{className:`guidance-page`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`guidance-hero`,children:(0,U.jsxs)(`div`,{className:`guidance-inner`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`hero-tag`,children:`Professional Support & Care`}),(0,U.jsxs)(`h1`,{className:`hero-title`,children:[`GUIDANCE ON `,(0,U.jsx)(`span`,{children:`THERAPY SUPPORT`})]}),(0,U.jsx)(`p`,{className:`hero-desc`,children:`Understanding your child's developmental needs is the first step towards their growth. Explore when therapy is required, the different types of therapies available, and how we connect you with the right professionals.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`hero-btn`,children:`Consult With Us`})]}),(0,U.jsx)(`div`,{className:`hero-image`,children:(0,U.jsx)(`img`,{src:`https://res.cloudinary.com/dvg5yktms/image/upload/v1779097864/prarambha-foundation/f3xsjddxbifnfmyrycnl.jpg`,alt:`Guidance on Therapy Support`,loading:`lazy`})})]})}),(0,U.jsx)(`section`,{className:`content-section`,children:(0,U.jsxs)(`div`,{className:`content-inner`,children:[(0,U.jsxs)(`div`,{className:`content-block`,children:[(0,U.jsx)(`h2`,{children:`When therapy is needed`}),(0,U.jsx)(`p`,{children:`Therapy becomes essential when a child exhibits delays in achieving standard developmental milestones. This includes facing persistent challenges with emotional regulation, struggling with daily life activities, or experiencing noticeable difficulties in communication, learning, and social interactions with peers. Early identification and intervention provide the best foundation for improvement.`})]}),(0,U.jsxs)(`div`,{className:`content-block`,children:[(0,U.jsx)(`h2`,{children:`Types of therapy explained (Speech, OT, Behavioural)`}),(0,U.jsxs)(`ul`,{children:[(0,U.jsxs)(`li`,{children:[(0,U.jsx)(`strong`,{children:`Speech Therapy:`}),` Designed to help children improve their articulation, vocabulary, and overall expressive and receptive language skills, giving them the confidence to communicate their thoughts clearly.`]}),(0,U.jsxs)(`li`,{children:[(0,U.jsx)(`strong`,{children:`OT (Occupational Therapy):`}),` Focuses on developing both fine and gross motor skills, improving sensory processing, and building the functional independence required for everyday tasks like writing, eating, and dressing.`]}),(0,U.jsxs)(`li`,{children:[(0,U.jsx)(`strong`,{children:`Behavioural Therapy:`}),` Aids children in understanding and managing their emotions, reinforcing positive behaviors, reducing challenging actions, and building healthy, constructive social habits.`]})]})]}),(0,U.jsxs)(`div`,{className:`content-block`,children:[(0,U.jsx)(`h2`,{children:`Referral to appropriate professionals (if needed)`}),(0,U.jsx)(`p`,{children:`We believe in providing the most accurate and holistic care for every child. If a child requires specialized medical diagnosis, clinical evaluation, or advanced therapeutic intervention that falls outside our primary scope, we guide families step-by-step and directly refer them to trusted, certified pediatric professionals and specialists.`})]})]})}),(0,U.jsxs)(`section`,{className:`cta-section`,children:[(0,U.jsxs)(`h2`,{className:`cta-title`,children:[`Take the `,(0,U.jsx)(`span`,{children:`Right Step`})]}),(0,U.jsx)(`p`,{className:`cta-desc`,children:`Professional guidance can make a world of difference in a child's developmental journey. Reach out to us today to understand the best support system for your child.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`cta-btn`,children:`Get In Touch`})]}),(0,U.jsx)(us,{pageData:e})]})]})}function oc(){let{pageData:e}=Cs();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .guidance-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .guidance-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #eefdf4, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .guidance-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 50%;
        }

        .guidance-inner {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          color: #E63946;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.1;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        /* SUPPORT SECTION */
        .support-section {
          padding: 100px 20px;
        }

        .support-container {
          max-width: 1250px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 70px;
        }

        .section-title span {
          color: #E63946;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .support-card {
          background: white;
          border-radius: 28px;
          padding: 40px 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #eee;
          transition: 0.4s;
          display: flex;
          flex-direction: column;
        }

        .support-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12);
        }

        .support-icon {
          width: 75px;
          height: 75px;
          border-radius: 22px;
          background: #FFE5E7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin-bottom: 24px;
        }

        .support-title {
          font-size: 24px;
          font-weight: 800;
          color: #0B1B4D;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .support-desc {
          color: #666;
          line-height: 1.9;
          font-size: 16px;
        }

        /* CTA */
        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 20px;
        }

        .cta-title span {
          color: #E63946;
        }

        .cta-desc {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        /* MOBILE */
        @media(max-width:768px) {
          .guidance-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .support-title {
            font-size: 22px;
          }
        }

      `}),(0,U.jsxs)(`div`,{className:`guidance-page`,children:[(0,U.jsx)(os,{pageData:e}),(0,U.jsx)(`section`,{className:`guidance-hero`,children:(0,U.jsxs)(`div`,{className:`guidance-inner`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`hero-tag`,children:`Family Empowerment`}),(0,U.jsxs)(`h1`,{className:`hero-title`,children:[`PARENT GUIDANCE & `,(0,U.jsx)(`span`,{children:`COUNSELLING`})]}),(0,U.jsx)(`p`,{className:`hero-desc`,children:`Parents are a child's first and most important teachers. We provide you with the knowledge, strategies, and emotional support needed to confidently nurture your child's development, handle daily challenges, and create a thriving home environment.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`hero-btn`,children:`Get Support`})]}),(0,U.jsx)(`div`,{className:`hero-image`,children:(0,U.jsx)(`img`,{src:`https://res.cloudinary.com/dvg5yktms/image/upload/v1779106661/prarambha-foundation/q7yijmcjwuujquaklc15.jpg`,alt:`Parent Guidance and Counselling`,loading:`lazy`})})]})}),(0,U.jsx)(`section`,{className:`support-section`,children:(0,U.jsxs)(`div`,{className:`support-container`,children:[(0,U.jsxs)(`h2`,{className:`section-title`,children:[`Our Guidance `,(0,U.jsx)(`span`,{children:`Focus`})]}),(0,U.jsx)(`div`,{className:`support-grid`,children:[{title:`Practical Home Strategies`,icon:`🏠`,desc:`Actionable, easy-to-implement techniques and activities designed to support your child's learning and development directly at home.`},{title:`Daily Routine & Behavior Guidance`,icon:`📅`,desc:`Helping families establish structured daily schedules and positive behavior management techniques for a balanced, peaceful environment.`},{title:`Awareness About Child Development`,icon:`🌱`,desc:`Educating parents on key developmental milestones, helping them understand their child's unique pace, strengths, and abilities.`},{title:`Continuous Support For Parents`,icon:`💙`,desc:`Providing ongoing emotional support, dedicated counseling, and a safe space for parents to share experiences and grow together.`}].map((e,t)=>(0,U.jsxs)(`div`,{className:`support-card`,children:[(0,U.jsx)(`div`,{className:`support-icon`,children:e.icon}),(0,U.jsx)(`div`,{className:`support-title`,children:e.title}),(0,U.jsx)(`div`,{className:`support-desc`,children:e.desc})]},t))})]})}),(0,U.jsxs)(`section`,{className:`cta-section`,children:[(0,U.jsxs)(`h2`,{className:`cta-title`,children:[`You Are Not `,(0,U.jsx)(`span`,{children:`Alone`})]}),(0,U.jsx)(`p`,{className:`cta-desc`,children:`Navigating a child's developmental journey can be challenging, but you don't have to do it by yourself. Connect with our counselors to get the continuous support and practical guidance your family deserves.`}),(0,U.jsx)(`a`,{href:`/contact`,className:`cta-btn`,children:`Connect With A Counselor`})]}),(0,U.jsx)(us,{pageData:e})]})]})}function sc(){return(0,S.useEffect)(()=>{let e=document.querySelector(`link[rel*='icon']`);e||(e=document.createElement(`link`),e.rel=`icon`,document.head.appendChild(e)),e.href=`/logo.png`},[]),(0,U.jsx)(`div`,{className:`overflow-x-hidden w-full`,children:(0,U.jsx)(Dn,{children:(0,U.jsxs)(zt,{children:[(0,U.jsx)(M,{path:`/`,element:(0,U.jsx)(ms,{})}),(0,U.jsx)(M,{path:`/about`,element:(0,U.jsx)(ws,{})}),(0,U.jsx)(M,{path:`/our-centre`,element:(0,U.jsx)(Es,{})}),(0,U.jsx)(M,{path:`/services`,element:(0,U.jsx)(Ds,{})}),(0,U.jsx)(M,{path:`/gallery`,element:(0,U.jsx)(Os,{})}),(0,U.jsx)(M,{path:`/contact`,element:(0,U.jsx)(ks,{})}),(0,U.jsx)(M,{path:`/support-us`,element:(0,U.jsx)(Qs,{})}),(0,U.jsx)(M,{path:`/chairperson`,element:(0,U.jsx)(nc,{})}),(0,U.jsx)(M,{path:`/programs/early-intervention`,element:(0,U.jsx)(rc,{})}),(0,U.jsx)(M,{path:`/programs/therapy-support`,element:(0,U.jsx)(ic,{})}),(0,U.jsx)(M,{path:`/programs/inclusive-education`,element:(0,U.jsx)(ac,{})}),(0,U.jsx)(M,{path:`/programs/community-support`,element:(0,U.jsx)(oc,{})}),(0,U.jsx)(M,{path:`/stories`,element:(0,U.jsx)(Xs,{})}),(0,U.jsx)(M,{path:`/stories/:id`,element:(0,U.jsx)(Ys,{})}),(0,U.jsx)(M,{path:`/admin`,element:(0,U.jsx)(js,{})}),(0,U.jsx)(M,{path:`/admin/dashboard`,element:(0,U.jsx)(qs,{children:(0,U.jsx)(Fs,{})})}),(0,U.jsx)(M,{path:`/admin/pages`,element:(0,U.jsx)(qs,{children:(0,U.jsx)(Ks,{})})}),(0,U.jsx)(M,{path:`/admin/gallery`,element:(0,U.jsx)(qs,{children:(0,U.jsx)(Js,{})})}),(0,U.jsx)(M,{path:`/admin/stories`,element:(0,U.jsx)(qs,{children:(0,U.jsx)($s,{})})}),(0,U.jsx)(M,{path:`/admin/messages`,element:(0,U.jsx)(qs,{children:(0,U.jsx)(ec,{})})}),(0,U.jsx)(M,{path:`/admin/donate`,element:(0,U.jsx)(qs,{children:(0,U.jsx)(tc,{})})})]})})})}lo.createRoot(document.getElementById(`root`)).render((0,U.jsx)(S.StrictMode,{children:(0,U.jsx)(Ss,{children:(0,U.jsx)(sc,{})})}));