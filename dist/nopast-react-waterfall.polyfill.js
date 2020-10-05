!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],t):"object"==typeof exports?exports["nopast-react-waterfall.polyfill"]=t(require("react"),require("prop-types"),require("react-dom")):e["nopast-react-waterfall.polyfill"]=t(e.React,e.PropTypes,e.ReactDom)}(window,function(n,r,i){return function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist",i(i.s=15)}([function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=n(0),c=r(o),a=r(n(2)),u=r(n(3)),s=r(n(7));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n,r;return(0,s.default)(e)((r=n=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={calculatedStyle:{},children:[]},t.waterFall=null,t.waterFallOnChange=t.waterFallOnChange.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),i(n,[{key:"componentDidMount",value:function(){this.initWaterFall()}},{key:"componentWillReceiveProps",value:function(e){var t=this.getStyle(e.children);this.waterFall.resetOptions(e.options).resetChildrenSize({width:t[0].width,height:t.map(function(e){return e.height})}).init()}},{key:"getStyle",value:function(e){return o.Children.map(e,function(e){return e.props.style||{}})}},{key:"waterFallOnChange",value:function(e){this.setState({calculatedStyle:e})}},{key:"initWaterFall",value:function(){var e=this.props,t=e.options,n=e.children,r=this.getStyle(n);this.waterFall||(this.waterFall=new u.default({container:this.refs.reactWaterFall,childrenSize:{width:r[0].width,height:r.map(function(e){return e.height})},options:l({spaceBetween:5},t),onChange:this.waterFallOnChange}))}},{key:"childRender",value:function(e){var t=e.child,n=e.childStyle;return(0,o.cloneElement)(t,{style:n})}},{key:"render",value:function(){var a=this,e=this.props,t=e.style,n=e.className,r=e.children,u=this.state.calculatedStyle;return c.default.createElement("div",{style:l({},t,u.container),className:n,ref:"reactWaterFall"},u.children&&0<r.length?o.Children.map(r,function(e,t){var n=u.children,r=n.publicStyle,i=n.eachChild,o=e.props.style||{};return c.default.createElement(a.childRender,{child:e,childStyle:l({},o,r,i[t])})}):r)}}]),n}(),n.propTypes={options:a.default.object,className:a.default.string,style:a.default.object,children:a.default.node},n.defaultProps={style:{},options:{}},t=r))||t},e.exports=t.default},function(e,t){e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=i(n(4)),c=i(n(5)),s=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function a(e){var t=e.container,n=e.childrenSize,r=e.options,i=void 0===r?{}:r,o=e.onChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.container=t,this.childrenSize=n,this.options=u({spaceBetween:10,dynamic:!0,permutation:""},i,{animation:u({duration:500,type:"linear"},i.animation)}),this.onChange=o,this.init()}return r(a,[{key:"init",value:function(){var e=this.getColumn();this.refresh(this.permutation(e))}},{key:"resetOptions",value:function(e){return this.options=u({spaceBetween:10,dynamic:!0,permutation:""},e,{animation:u({duration:500,type:"linear"},e.animation)}),this}},{key:"resetChildrenSize",value:function(e){return this.childrenSize=e,this}},{key:"getColumn",value:function(){var e=this.container.offsetWidth,t=this.childrenSize.width,n=0;0<this.options.spaceBetween&&(n=this.options.spaceBetween);var r=t+n;return{count:Math.floor(e/r),extraSpace:e%r}}},{key:"permutation",value:function(e){var t=this.options,n=t.spaceBetween;n=0<n?n:0;var r=t.dynamic?(0,l.default)({childrenSize:this.childrenSize,column:e,spaceBetween:n}):this.childrenSize,i=r.width,o=r.height;return e.count<1&&(e.count=1,e.extraSpace=0),{permutations:"min-height"===this.options.permutation?(0,c.default)({column:e,spaceBetween:n,width:i,height:o}):(0,s.default)({column:e,spaceBetween:n,width:i,height:o}),childrenSizeDynamic:{width:i,height:o}}}},{key:"refresh",value:function(e){var t=e.permutations,n=e.childrenSizeDynamic,r=this.options,i=r.dynamic,o=r.animation,a={container:{position:"relative",height:t.parentHeight},children:{eachChild:[],publicStyle:{position:"absolute"}}};0<o.duration&&(a.children.publicStyle.transition="transform "+o.duration+"ms "+o.type);for(var u=0;u<this.childrenSize.height.length;u++){var l={};i&&(l.width=n.width,l.height=n.height[u]),l.transform="translate3d("+t.children[u].x+"px, "+t.children[u].y+"px, 0)",a.children.eachChild.push(l)}return this.onChange(a),a}}]),a}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.childrenSize,n=e.column,r=e.spaceBetween;r=0<r?r:0;var i=t.width,o=t.height,a=1<=n.count?i+(n.extraSpace+r)/n.count:n.extraSpace;return{width:a,height:o.map(function(e){return e/i*a})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.column,n=e.spaceBetween,r=e.width,i=e.height,o={parentHeight:0,children:[]},a=r+n,u=[],l=0;l<t.count;l++)u.push([]);if(1<t.count){for(var c=i.map(function(e,t){return{id:t,value:e}}).sort(function(e,t){return t.value-e.value}),s=function(e){var t=c[e],n=u.map(function(e){for(var t=0,n=0;n<e.length;n++){t+=e[n].value}return t}),r=Math.min.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n)),i=n.findIndex(function(e){return e===r});u[i].push(t)},f=0;f<c.length;f++)s(f);for(var h=u.filter(function(e){return 0<e.length}).map(function(e){return e.sort(function(e,t){return e.id-t.id})}).sort(function(e,t){return e[0].id-t[0].id}),p=0;p<h.length;p++){for(var d=h[p],y=0,v=0;v<d.length;v++){var m=d[v];o.children[m.id]={x:p*a,y:y},y+=m.value+n}var b=y-n;b>o.parentHeight&&(o.parentHeight=b)}}else for(var g=0;g<i.length;g++){var w=i[g]+n,O=o.parentHeight;o.children.push({x:0,y:O});var S=O+w;S>o.parentHeight&&(o.parentHeight=S)}return o},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.column,r=e.spaceBetween,n=e.width,i=e.height,o={parentHeight:0,children:[]},a=[],u=0;u<i.length;u++){var l=i[u],c=n+r;if(1<t.count)u<t.count?(o.children.push({x:u*c,y:0}),a.push(l)):function(){var t=Math.min.apply(Math,a),e=a.findIndex(function(e){return e===t}),n=t+r;o.children.push({x:e*c,y:n}),a[e]=n+l}();else{var s=l+r,f=0<a.length?a[0]:0;o.children.push({x:0,y:f}),a[0]=f+s}}return o.parentHeight=Math.max.apply(Math,a),o},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},l=n(8);t.default=function(r){return function(t){return function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={containerWidth:0},t.containerSizeObserver=null,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.PureComponent),o(n,[{key:"componentDidMount",value:function(){var t=this,e=(0,l.findDOMNode)(this.refs.WrappedComponent);if(e){var n=window.ResizeObserver||r;n?(this.containerSizeObserver=new n(function(e){t.setState({containerWidth:e[0].contentRect.width})}),this.containerSizeObserver.observe(e)):console.error("You may need a polyfill to handle this component.")}}},{key:"componentWillUnmount",value:function(){this.containerSizeObserver&&this.containerSizeObserver.disconnect(),this.containerSizeObserver=null}},{key:"render",value:function(){var e=this.state.containerWidth;return u.default.createElement(t,i({},this.props,{contianerWidth:e,ref:"WrappedComponent"}))}}]),n}()}},e.exports=t.default},function(e,t){e.exports=i},,,,,,,function(e,t,n){e.exports=n(16)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(1),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default,e.exports=t.default}])});