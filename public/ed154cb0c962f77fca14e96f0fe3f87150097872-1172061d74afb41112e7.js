(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function T(){s=t(l.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!i(t,this.props)},c.componentWillMount=function(){l.push(this),T()},c.componentDidUpdate=function(){T()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),T()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(f,"canUseDOM",u),f}}},Gytx:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<a.length;u++){var s=a[u];if(!c(s))return!1;var l=t[s],T=e[s];if(!1===(o=n?n.call(r,l,T,s):void 0)||void 0===o&&l!==T)return!1}return!0}},Sv8q:function(t,e,n){"use strict";n("q1tI");var r=n("Wbzz"),o=n("qKvR"),a=function(){return Object(o.a)("footer",{className:"container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800"},Object(o.a)("div",{className:"flex -mx-3"},Object(o.a)("div",{className:"flex-1 px-3"},Object(o.a)(r.Link,{to:"/about/",className:"text-lg font-semibold hover:text-contrast_dark text-gray-800"},Object(o.a)("h2",null,"About Hayden")),Object(o.a)("p",{className:"mt-5"},"After 5 years in professional aviation I now offer web presence and branding services.")),Object(o.a)("div",{className:"flex-1 px-3"},Object(o.a)(r.Link,{to:"/contact/",className:"text-lg font-semibold hover:text-contrast_dark text-gray-800"},Object(o.a)("h2",null,"Contact Info")),Object(o.a)("ul",{className:"mt-4 leading-loose"},Object(o.a)("li",null,Object(o.a)("a",{href:"mailto:haydenyounglex@hotmail.com"},"Email")),Object(o.a)("li",null,Object(o.a)("a",{href:"tel:+18596840445"},"(859) 684-0445")),Object(o.a)("li",null,Object(o.a)("a",{href:"https://haydenyoung.me"},"haydenyoung.me")))),Object(o.a)("div",{className:"flex-1 px-3"},Object(o.a)("h2",{className:"text-lg font-semibold"},"Social Media"),Object(o.a)("ul",{className:"mt-4 leading-loose"},Object(o.a)("li",null,Object(o.a)("a",{href:"https://www.linkedin.com/in/hayden-young-atp/"},"LinkedIn")),Object(o.a)("li",null,Object(o.a)("a",{href:"https://twitter.com/haydenry"},"Twitter")),Object(o.a)("li",null,Object(o.a)("a",{href:"https://github.com/ztlhayden"},"GitHub"))))))};var i=function(){return Object(o.a)("header",{className:"sticky top-0 bg-contrast_dark text-white shadow"},Object(o.a)("div",{className:"container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"},Object(o.a)("div",{className:"flex items-center text-2xl"},Object(o.a)("div",{className:"w-12 mr-4"},Object(o.a)(r.Link,{to:"/"},Object(o.a)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwLjExIiBoZWlnaHQ9Ijg3NCIgdmlld0JveD0iMCAwIDEwMDAuMTEgODc0Ij4NCiAgPHRpdGxlPmRkX2ljb25fd2hpdGU8L3RpdGxlPg0KICA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4NCiAgICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPg0KICAgICAgPGc+DQogICAgICAgIDxnPg0KICAgICAgICAgIDxwYXRoIGQ9Ik03ODguNjYsNTI4LjIyYTU0LjA5LDU0LjA5LDAsMCwwLTE0Ljc5LS41NmMtNS40NC0xNy4yMy0yMC40NC0zMS00MC4xOC0zNC41NkE1My4xMyw1My4xMywwLDAsMCw2ODQuNTIsNTEwYy0yNS43Ni0xLjQ4LTQ5LjI0LDE1LjU5LTU0LjA5LDQwLjUzYTQ3LjcsNDcuNywwLDAsMC0uNzcsMTEuNTFoLTIuNzFhMzUsMzUsMCwwLDAtMzQuODksMzQuODl2MzMuMjJBMzUsMzUsMCwwLDAsNjI2Ljk1LDY2NUg3OTMuNzRhMTI2Ljc4LDEyNi43OCwwLDAsMCwyNC4zMi03NC42OFY1NDQuMjZBNTIuMDgsNTIuMDgsMCwwLDAsNzg4LjY2LDUyOC4yMloiIHN0eWxlPSJmaWxsOiAjZmZmIi8+DQogICAgICAgICAgPHBhdGggZD0iTTkxMS45NCw4NS40OVE4MjMuNzUsMCw2NjIuMzUsMEg0MjUuNjJWLjA2Yy0xLjM5LDAtMi43NS0uMDYtNC4xNS0uMDZIMTg0LjcyTDAsODc0SDUxMC41MVE2NjEuMTYsODc0LDc3Miw4MDkuNDR0MTY5LjQ4LTE4OHE1OC41OC0xMjMuNDQsNTguNTktMjkwLjg0UTEwMDAuMTEsMTcxLDkxMS45NCw4NS40OVpNMjczLjI3LDcyMUgyMTQuNjVMMzM1LjM5LDE1Mmg1OC4xNFpNODI1LjA2LDU0Ny4xOHY0Ni4xQTEyOC4wOSwxMjguMDksMCwwLDEsNjk3LjQ1LDcyMUg1NzMuOTJhMTI2Ljg1LDEyNi44NSwwLDAsMS0yMC41Mi0xLjgybC0uNTMsMGMtNTAuNTMtOC40OC05MS4xOC00Ni45MS0xMDMuMTItOTYuMjNoLS4xYTEyNi43OCwxMjYuNzgsMCwwLDEtMy41OS0yOS44NlYyNzkuNzJBMTI3Ljc5LDEyNy43OSwwLDAsMSw0OTkuNTUsMTc2bC4wOCwwYTEyNy41OSwxMjcuNTksMCwwLDEsMjYuNTgtMTQuN3YtLjA2QTEyNi4yOSwxMjYuMjksMCwwLDEsNTczLjY2LDE1Mkg2OTcuMjhjNzAuMjgsMCwxMjcuNzcsNTcuNSwxMjcuNzcsMTI3Ljc3WiIgc3R5bGU9ImZpbGw6ICNmZmYiLz4NCiAgICAgICAgPC9nPg0KICAgICAgICA8cGF0aCBkPSJNNDUyLjA2LDI4NlY0MzNoMzY3VjI4NmMwLTcwLjY3LTU1LjQ5LTEyOC0xMjMuOTQtMTI4SDU3NkM1MDcuNTUsMTU4LDQ1Mi4wNiwyMTUuMjksNDUyLjA2LDI4NlpNNzAyLjk0LDQxMEg1NjguMTZhOSw5LDAsMCwxLDAtMThINzAyLjk0YTksOSwwLDAsMSwwLDE4WiIgc3R5bGU9ImZpbGw6ICNmZmYiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K",alt:"Logo"}))),Object(o.a)(r.Link,{to:"/",className:"text-white hover:text-contrast_dark_lighter"},"Deadhead.Design")),Object(o.a)("div",{className:"flex mt-4 sm:mt-0"},Object(o.a)(r.Link,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/contact/"},"Contact"),Object(o.a)(r.Link,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/#services"},"Services"),Object(o.a)(r.Link,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/portfolio/"},"Portfolio"))))};e.a=function(t){var e=t.children;return Object(o.a)("div",null,Object(o.a)(i,null),Object(o.a)("main",{className:"text-grey=-900"},e),Object(o.a)(a,null))}},TJpk:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=T(n("q1tI")),i=T(n("17x9")),c=T(n("8+s/")),u=T(n("bmMU")),s=n("v1p5"),l=n("hFT/");function T(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d,A,M,y=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),h=(d=y,M=A=function(t){function e(){return E(this,e),p(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=c,e.titleAttributes=r({},i),e));case l.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=f(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),a.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(a.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var t=d.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},M);h.renderStatic=h.rewind,e.Helmet=h,e.default=h},bmMU:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,l=r(e),T=r(n);if(l&&T){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=T)return!1;var f=e instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return e.getTime()==n.getTime();var p=e instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return e.toString()==n.toString();var A=o(e);if((u=A.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,A[c]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=A[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce((function(t,e){return t[r[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},hYuR:function(t,e,n){"use strict";n("q1tI");var r=n("TJpk"),o=n("Wbzz"),a=n("qKvR");function i(t){var e,n=t.description,i=t.lang,c=t.meta,u=t.title,s=Object(o.useStaticQuery)("63159454").site,l=n||s.siteMetadata.description,T=null===(e=s.siteMetadata)||void 0===e?void 0:e.title;return Object(a.a)(r.Helmet,{htmlAttributes:{lang:i},title:u,titleTemplate:T?"%s | "+T:null,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(c)})}i.defaultProps={lang:"en",meta:[],description:""},e.a=i},v1p5:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=u(n("q1tI")),i=u(n("YVoz")),c=n("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var s,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(t){var e=A(t,c.TAG_NAMES.TITLE),n=A(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return A(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},p=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},d=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&N("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],s=u.toLowerCase();-1===e.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(r),u=0;u<a.length;u++){var s=a[u],l=(0,i.default)({},o[s],r[s]);o[s]=l}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},M=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){M(t)}),0)}),y=function(t){return clearTimeout(t)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||M:t.requestAnimationFrame||M,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:t.cancelAnimationFrame||y,N=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,b=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,T=t.styleTags,f=t.title,E=t.titleAttributes;L(c.TAG_NAMES.BODY,r),L(c.TAG_NAMES.HTML,o),g(f,E);var p={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,a),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,u),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,T)},d={},A={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(A[t]=p[t].oldTags)})),e&&e(),s(t,d,A)},O=function(t){return Array.isArray(t)?t.join(""):t},g=function(t,e){void 0!==t&&document.title!==t&&(document.title=O(t)),L(c.TAG_NAMES.TITLE,e)},L=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),u=0;u<i.length;u++){var s=i[u],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var T=a.indexOf(s);-1!==T&&a.splice(T,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},C=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},j=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=I(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=C(n),a=O(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(a,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(e)},toString:function(){return C(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),a.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){S&&m(S),t.defer?S=h((function(){b(t,(function(){S=null}))})):(b(t),S=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,s=t.scriptTags,l=t.styleTags,T=t.title,f=void 0===T?"":T,E=t.titleAttributes;return{base:j(c.TAG_NAMES.BASE,e,r),bodyAttributes:j(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(c.ATTRIBUTE_NAMES.HTML,o,r),link:j(c.TAG_NAMES.LINK,a,r),meta:j(c.TAG_NAMES.META,i,r),noscript:j(c.TAG_NAMES.NOSCRIPT,u,r),script:j(c.TAG_NAMES.SCRIPT,s,r),style:j(c.TAG_NAMES.STYLE,l,r),title:j(c.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},e.reducePropsToState=function(t){return{baseTag:p([c.TAG_PROPERTIES.HREF],t),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,t),defer:A(t,c.HELMET_PROPS.DEFER),encode:A(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,t),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:T(t),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=h,e.warn=N}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=ed154cb0c962f77fca14e96f0fe3f87150097872-1172061d74afb41112e7.js.map