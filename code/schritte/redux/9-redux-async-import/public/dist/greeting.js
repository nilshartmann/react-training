webpackJsonp([0],{65:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,l=n(0),f=n.n(l),s=n(4),p=n.n(s),b=n(1),v=n(2),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=(c=i=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",greeting:""},n}return u(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.greeting,a=!(n&&r);return f.a.createElement("div",null,f.a.createElement("input",{ref:function(t){return e.input=t},onChange:function(t){return e.updateModel(t)},name:"name",value:n,placeholder:"Name"}),f.a.createElement("input",{onChange:function(t){return e.updateModel(t)},name:"greeting",value:r,placeholder:"Greeting"}),f.a.createElement("button",{onClick:function(){return e.reset()}},"Clear"),f.a.createElement("button",{disabled:a,onClick:function(){return e.save()}},"Save"))}}]),g(t,[{key:"reset",value:function(){this.setState({name:"",greeting:""}),this.input&&this.input.focus()}},{key:"save",value:function(){var e=this.props.onSave,t=this.state;e({name:t.name,greeting:t.greeting})}},{key:"updateModel",value:function(e){this.setState(r({},e.target.name,e.target.value))}}]),t}(f.a.Component),i.propTypes={onSave:p.a.func.isRequired},c);t.default=Object(v.b)(null,function(e){return{onSave:function(t){return e(b.saveGreeting(t))}}})(h)}});
//# sourceMappingURL=greeting.js.map