!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var u,a,c=0,s=[];c<t.length;c++)a=t[c],o[a]&&s.push(o[a][0]),o[a]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);for(n&&n(t,r,i);s.length;)s.shift()()};var r={},o={1:0};t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(c);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var u=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+""+({0:"greeting"}[e]||e)+".js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,u.appendChild(a),i},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t.oe=function(e){throw console.error(e),e},t(t.s=7)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_GREETINGS",function(){return o}),n.d(t,"ADD_GREETING",function(){return i}),n.d(t,"SET_FILTER",function(){return u}),n.d(t,"SET_MODE",function(){return a}),n.d(t,"MODE_MASTER",function(){return c}),n.d(t,"MODE_DETAIL",function(){return s}),n.d(t,"loadGreetings",function(){return p}),n.d(t,"saveGreeting",function(){return f}),n.d(t,"setFilter",function(){return l}),n.d(t,"setMode",function(){return d});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="SET_GREETINGS",i="ADD_GREETING",u="SET_FILTER",a="SET_MODE",c="MODE_MASTER",s="MODE_DETAIL",p=function(e){return fetch("http://localhost:7000/greetings").then(function(e){return e.json()}).then(function(t){return e({type:o,greetings:t})}).catch(function(e){return console.error("LOADING GREETINGS FAILED:",e)})},f=function(e){return function(t){fetch("http://localhost:7000/greetings",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(201===e.status)return e.json();throw new Error("Invalid status code: "+e.status)}).then(function(n){var o=n.id,u=r({},e,{id:o});return t({type:i,greeting:u}),t(d(c)),u})}},l=function(e){return{type:u,filter:e}},d=function(e){return{type:a,mode:e}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],u=n||t+"Subscription",a=function(e){function n(i,u){r(this,n);var a=o(this,e.call(this,i,u));return a[t]=i.store,a}return i(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[u]=null,e},n.prototype.render=function(){return k.Children.only(this.props.children)},n}(k.Component);return a.propTypes={store:W.isRequired,children:U.a.element.isRequired},a.childContextTypes=(e={},e[t]=W.isRequired,e[u]=F,e),a}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(){var e=[],t=[];return{clear:function(){t=z,e=z},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==z&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(){}function h(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}function y(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.getDisplayName,i=void 0===o?function(e){return"ConnectAdvanced("+e+")"}:o,u=r.methodName,a=void 0===u?"connectAdvanced":u,c=r.renderCountProp,y=void 0===c?void 0:c,b=r.shouldHandleStateChanges,v=void 0===b||b,m=r.storeKey,g=void 0===m?"store":m,O=r.withRef,w=void 0!==O&&O,E=l(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),P=g+"Subscription",S=X++,j=(t={},t[g]=W,t[P]=F,t),T=(n={},n[P]=F,n);return function(t){K()("function"==typeof t,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",r=i(n),o=Q({},E,{getDisplayName:i,methodName:a,renderCountProp:y,shouldHandleStateChanges:v,storeKey:g,withRef:w,displayName:r,wrappedComponentName:n,WrappedComponent:t}),u=function(n){function i(e,t){s(this,i);var o=p(this,n.call(this,e,t));return o.version=S,o.state={},o.renderCount=0,o.store=e[g]||t[g],o.propsMode=Boolean(e[g]),o.setWrappedInstance=o.setWrappedInstance.bind(o),K()(o.store,'Could not find "'+g+'" in either the context or props of "'+r+'". Either wrap the root component in a <Provider>, or explicitly pass "'+g+'" as a prop to "'+r+'".'),o.initSelector(),o.initSubscription(),o}return f(i,n),i.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[P]=t||this.context[P],e},i.prototype.componentDidMount=function(){v&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},i.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},i.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},i.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=d,this.store=null,this.selector.run=d,this.selector.shouldComponentUpdate=!1},i.prototype.getWrappedInstance=function(){return K()(w,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+a+"() call."),this.wrappedInstance},i.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},i.prototype.initSelector=function(){var t=e(this.store.dispatch,o);this.selector=h(t,this.store),this.selector.run(this.props)},i.prototype.initSubscription=function(){if(v){var e=(this.propsMode?this.props:this.context)[P];this.subscription=new Y(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},i.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(Z)):this.notifyNestedSubs()},i.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},i.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},i.prototype.addExtraProps=function(e){if(!(w||y||this.propsMode&&this.subscription))return e;var t=Q({},e);return w&&(t.ref=this.setWrappedInstance),y&&(t[y]=this.renderCount++),this.propsMode&&this.subscription&&(t[P]=this.subscription),t},i.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(k.createElement)(t,this.addExtraProps(e.props))},i}(k.Component);return u.WrappedComponent=t,u.displayName=r,u.childContextTypes=T,u.contextTypes=j,u.propTypes=j,H()(u,t)}}function b(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function v(e,t){if(b(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!$.call(t,n[o])||!b(e[n[o]],t[n[o]]))return!1;return!0}function m(e){return function(t,n){function r(){return o}var o=e(t,n);return r.dependsOnOwnProps=!1,r}}function g(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function O(e,t){return function(t,n){var r=(n.displayName,function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)});return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=g(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=g(o),o=r(t,n)),o},r}}function w(e){return"function"==typeof e?O(e,"mapDispatchToProps"):void 0}function E(e){return e?void 0:m(function(e){return{dispatch:e}})}function P(e){return e&&"object"==typeof e?m(function(t){return Object(ee.bindActionCreators)(e,t)}):void 0}function S(e){return"function"==typeof e?O(e,"mapStateToProps"):void 0}function j(e){return e?void 0:m(function(){return{}})}function T(e,t,n){return re({},n,e,t)}function C(e){return function(t,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,u=void 0;return function(t,n,a){var c=e(t,n,a);return i?r&&o(c,u)||(u=c):(i=!0,u=c),u}}}function _(e){return"function"==typeof e?C(e):void 0}function N(e){return e?void 0:function(){return T}}function x(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function M(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function D(e,t,n,r,o){function i(o,i){return h=o,y=i,b=e(h,y),v=t(r,y),m=n(b,v,y),d=!0,m}function u(){return b=e(h,y),t.dependsOnOwnProps&&(v=t(r,y)),m=n(b,v,y)}function a(){return e.dependsOnOwnProps&&(b=e(h,y)),t.dependsOnOwnProps&&(v=t(r,y)),m=n(b,v,y)}function c(){var t=e(h,y),r=!l(t,b);return b=t,r&&(m=n(b,v,y)),m}function s(e,t){var n=!f(t,y),r=!p(e,h);return h=e,y=t,n&&r?u():n?a():r?c():m}var p=o.areStatesEqual,f=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1,h=void 0,y=void 0,b=void 0,v=void 0,m=void 0;return function(e,t){return d?s(e,t):i(e,t)}}function R(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=x(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(e,i),a=r(e,i),c=o(e,i);return(i.pure?D:M)(u,a,c,e,i)}function I(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function A(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function G(e,t){return e===t}var k=n(0),q=n(4),U=n.n(q),F=U.a.shape({trySubscribe:U.a.func.isRequired,tryUnsubscribe:U.a.func.isRequired,notifyNestedSubs:U.a.func.isRequired,isSubscribed:U.a.func.isRequired}),W=U.a.shape({subscribe:U.a.func.isRequired,dispatch:U.a.func.isRequired,getState:U.a.func.isRequired}),L=u(),B=n(9),H=n.n(B),J=n(10),K=n.n(J),z=null,V={notify:function(){}},Y=function(){function e(t,n,r){a(this,e),this.store=t,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=V}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=c())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=V)},e}(),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=0,Z={},$=Object.prototype.hasOwnProperty,ee=n(3),te=(n(5),[w,E,P]),ne=[S,j],re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe=[_,N],ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?y:t,r=e.mapStateToPropsFactories,o=void 0===r?ne:r,i=e.mapDispatchToPropsFactories,u=void 0===i?te:i,a=e.mergePropsFactories,c=void 0===a?oe:a,s=e.selectorFactory,p=void 0===s?R:s;return function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.pure,s=void 0===a||a,f=i.areStatesEqual,l=void 0===f?G:f,d=i.areOwnPropsEqual,h=void 0===d?v:d,y=i.areStatePropsEqual,b=void 0===y?v:y,m=i.areMergedPropsEqual,g=void 0===m?v:m,O=I(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),w=A(e,o,"mapStateToProps"),E=A(t,u,"mapDispatchToProps"),P=A(r,c,"mergeProps");return n(p,ie({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:w,initMapDispatchToProps:E,initMergeProps:P,pure:s,areStatesEqual:l,areOwnPropsEqual:h,areStatePropsEqual:b,areMergedPropsEqual:g},O))}}();n.d(t,"a",function(){return L}),n.d(t,!1,function(){return u}),n.d(t,!1,function(){return y}),n.d(t,"b",function(){return ue})},function(e,t,n){"use strict";function r(e,t,n){function o(){v===b&&(v=b.slice())}function i(){return y}function u(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return o(),v.push(e),function(){if(t){t=!1,o();var n=v.indexOf(e);v.splice(n,1)}}}function a(e){if(!Object(f.a)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,y=l(y,e)}finally{m=!1}for(var t=b=v,n=0;n<t.length;n++){(0,t[n])()}return e}function c(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,a({type:h.INIT})}function s(){var e,t=u;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[d.a]=function(){return this},e}var p;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,y=t,b=[],v=b,m=!1;return a({type:h.INIT}),p={dispatch:a,subscribe:u,getState:i,replaceReducer:c},p[d.a]=s,p}function o(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function i(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:h.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+h.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var u=t[r];"function"==typeof e[u]&&(n[u]=e[u])}var a=Object.keys(n),c=void 0;try{i(n)}catch(e){c=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(c)throw c;for(var r=!1,i={},u=0;u<a.length;u++){var s=a[u],p=n[s],f=e[s],l=p(f,t);if(void 0===l){var d=o(s,t);throw new Error(d)}i[s]=l,r=r||l!==f}return r?i:e}}function a(e,t){return function(){return t(e.apply(void 0,arguments))}}function c(e,t){if("function"==typeof e)return a(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],u=e[i];"function"==typeof u&&(r[i]=a(u,t))}return r}function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var i=e(n,r,o),u=i.dispatch,a=[],c={getState:i.getState,dispatch:function(e){return u(e)}};return a=t.map(function(e){return e(c)}),u=s.apply(void 0,a)(i.dispatch),y({},i,{dispatch:u})}}}Object.defineProperty(t,"__esModule",{value:!0});var f=n(5),l=n(12),d=n.n(l),h={INIT:"@@redux/INIT"},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.d(t,"createStore",function(){return r}),n.d(t,"combineReducers",function(){return u}),n.d(t,"bindActionCreators",function(){return c}),n.d(t,"applyMiddleware",function(){return p}),n.d(t,"compose",function(){return s})},function(e,t){e.exports=PropTypes},function(e,t,n){"use strict";function r(e){var t=b.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var o=v.call(e);return r&&(t?e[m]=n:delete e[m]),o}function o(e){return w.call(e)}function i(e){return null==e?void 0===e?S:P:j&&j in Object(e)?g(e):E(e)}function u(e,t){return function(n){return e(t(n))}}function a(e){return null!=e&&"object"==typeof e}function c(e){if(!x(e)||T(e)!=M)return!1;var t=N(e);if(null===t)return!0;var n=A.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&I.call(n)==G}var s=n(11),p="object"==typeof self&&self&&self.Object===Object&&self,f=s.a||p||Function("return this")(),l=f,d=l.Symbol,h=d,y=Object.prototype,b=y.hasOwnProperty,v=y.toString,m=h?h.toStringTag:void 0,g=r,O=Object.prototype,w=O.toString,E=o,P="[object Null]",S="[object Undefined]",j=h?h.toStringTag:void 0,T=i,C=u,_=C(Object.getPrototypeOf,Object),N=_,x=a,M="[object Object]",D=Function.prototype,R=Object.prototype,I=D.toString,A=R.hasOwnProperty,G=I.call(Object);t.a=c},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var p=n(0),f=n.n(p),l=n(8),d=n.n(l),h=n(2),y=n(3),b=n(16),v=n.n(b),m=n(17),g=n(1),O=function(e,t){return t?e.filter(function(e){return e.name===t}):e},w=function(e){var t=e.reduce(function(e,t){var n=t.name;return e[n]?e[n]=e[n]+1:e[n]=1,e},{});return Object.entries(t).map(function(e){return{label:e[0],value:e[1]}})},E=function(e){var t=e.greeting,n=e.onRowClicked;return f.a.createElement("tr",{onClick:function(){return n(t)}},f.a.createElement("td",null,t.name),f.a.createElement("td",null,t.greeting))},P=function(e){var t=e.filter,n=e.setFilter;return t?f.a.createElement("div",{className:"FilterPanel"},"(Shown are greetings for ",f.a.createElement("b",null,t),". ",f.a.createElement("a",{onClick:function(){return n(null)}},"Reset Filter"),")"):f.a.createElement("div",{className:"FilterPanel"},"(All greetings are shown. Click a row to filter)")},S=function(e){var t=e.greetings,n=e.setMode,r=e.filter,o=e.setFilter,i=t.map(function(e){return f.a.createElement(E,{key:e.id,greeting:e,onRowClicked:function(e){return o(e.name)}})});return f.a.createElement("div",null,f.a.createElement("table",{className:"SelectableTable"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Name"),f.a.createElement("th",null,"Greeting"))),f.a.createElement("tbody",null,i)),f.a.createElement(P,{filter:r,setFilter:o}),f.a.createElement("button",{onClick:function(){return n(g.MODE_DETAIL)}},"Add"))};S.displayName="GreetingMaster";var j=Object(h.b)(function(e){return{greetings:O(e.greetings,e.filter),filter:e.filter}},g)(S),T=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),C=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),T(t,[{key:"loadGreetingDetail",value:function(){var e=this;n.e(0).then(n.bind(null,20)).then(function(t){e.GreetingDetail=t.default,e.forceUpdate()})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.loadGreetingDetail()},1e3)}},{key:"render",value:function(){return this.GreetingDetail?f.a.createElement(this.GreetingDetail,this.props):f.a.createElement("span",null,"Loading...")}}]),t}(f.a.Component),_=function(e){return e.mode===g.MODE_MASTER?f.a.createElement(j,null):f.a.createElement(C,null)};_.displayName="Greeting";var N=Object(h.b)(function(e){return{mode:e.mode}})(_),x=function(e){var t=e.greetingCount,n=e.filteredGreetingsCount;return f.a.createElement("div",{className:"Counter"},"Showing ",n," of ",t," Greetings")};x.displayName="Counter";var M,D,R=Object(h.b)(function(e){return{greetingCount:e.greetings.length,filteredGreetingsCount:O(e.greetings,e.filter).length}})(x),I=n(4),A=n.n(I),G=n(18),k=n.n(G),q=n(19),U=n.n(q),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=(D=M=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),F(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillReceiveProps",value:function(e){var t=e.data;this._d3selection&&this._d3selection.datum(t).call(this._nvd3chart)}},{key:"componentWillUnmount",value:function(){this._d3selection.remove()}},{key:"componentDidMount",value:function(){var e=this;U.a.addGraph(function(){var t=U.a.models.pieChart().x(function(e){return e.label}).y(function(e){return e.value}).showLabels(!0);t.legend.updateState(!1);var n=e.props,r=n.data,o=n.onSegmentSelected;return e._d3selection=k.a.select(e._chart),e._d3selection.datum(r).call(t),e._nvd3chart=t,o&&t.pie.dispatch.on("elementClick",function(e){return o(e.data.label)}),t})}},{key:"render",value:function(){var e=this,t={height:"500px",width:"600px"};return f.a.createElement("svg",{style:t,className:"with-3d-shadow with-transitions",ref:function(t){return e._chart=t}})}}]),t}(f.a.Component),M.propTypes={data:A.a.array.isRequired,onSegmentSelected:A.a.func},D),L=Object(h.b)(function(e){return{data:w(e.greetings)}},function(e){return{onSegmentSelected:function(t){return e(g.setFilter(t))}}})(W),B=function(){return f.a.createElement("div",{className:"Main"},f.a.createElement("div",{className:"Title"},f.a.createElement("h1",null,"Greeting App"),f.a.createElement(R,null)),f.a.createElement("div",{className:"Left"},f.a.createElement(N,null)),f.a.createElement("div",{className:"Right"},f.a.createElement(L,null)))};B.displayName="Layout";var H=B,J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case g.SET_GREETINGS:return t.greetings;case g.ADD_GREETING:return[].concat(s(e),[t.greeting]);default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case g.SET_FILTER:var n=t.filter;return e===n?null:n;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.MODE_MASTER,t=arguments[1];switch(t.type){case g.SET_MODE:return t.mode;default:return e}},V=Object(y.combineReducers)({greetings:J,filter:K,mode:z}),Y=Object(y.createStore)(V,Object(m.composeWithDevTools)(Object(y.applyMiddleware)(v.a)));Y.dispatch(g.loadGreetings);var Q=document.getElementById("mount");d.a.render(f.a.createElement(h.a,{store:Y},f.a.createElement(H,null)),Q)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,u=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=s&&s(Object);e.exports=function e(t,n,f){if("string"!=typeof n){if(p){var l=s(n);l&&l!==p&&e(t,l,f)}var d=u(n);a&&(d=d.concat(a(n)));for(var h=0;h<d.length;++h){var y=d[h];if(!(r[y]||o[y]||f&&f[y])){var b=c(n,y);try{i(t,y,b)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,u,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,u,a],p=0;c=new Error(t.replace(/%s/g,function(){return s[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=r},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(t,n(6))},function(e,t,n){e.exports=n(13)},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(15),u=function(e){return e&&e.__esModule?e:{default:e}}(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=(0,u.default)(o);t.default=a}).call(t,n(6),n(14)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}t.__esModule=!0;var o=r();o.withExtraArgument=r,t.default=o},function(e,t,n){"use strict";var r=n(3).compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},function(e,t){e.exports=d3},function(e,t){e.exports=nv}]);
//# sourceMappingURL=main.js.map