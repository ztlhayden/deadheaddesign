(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,s=i(a("v06X")),n=i(a("XEEL")),l=i(a("uDP2")),d=i(a("j8BX")),o=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,i=m(t||a||[]);return i&&i.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,M=y&&window.IntersectionObserver,N=new WeakMap;function j(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),a&&o.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),N.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),N.set(e,t)),function(){a.unobserve(e),N.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+o+n+l+a+i+t+s+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=o.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,s=e.spreadProps,n=e.ariaHidden,l=o.default.createElement(C,(0,d.default)({ref:t,src:a},s,{ariaHidden:n}));return i.length>1?o.default.createElement("picture",null,r(i),l):l})),C=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},m,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var D=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&M&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,h=e.fluid,p=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,M=e.Tag,N=e.itemProp,w=e.loading,x=e.draggable,I=h||p;if(!I)return null;var D=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,d.default)({opacity:D?1:0,transition:T?"opacity "+y+"ms":"none"},l),z="boolean"==typeof b?"lightgray":b,A={transitionDelay:y+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},T&&A,l,f),R={title:t,alt:this.state.isVisible?"":a,style:k,className:g,itemProp:N},U=this.state.isHydrated?m(I):I[0];if(h)return o.default.createElement(M,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:U.maxWidth?U.maxWidth+"px":null,maxHeight:U.maxHeight?U.maxHeight+"px":null},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},o.default.createElement(M,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),z&&o.default.createElement(M,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&A)}),U.base64&&o.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:R,imageVariants:I,generateSources:O}),U.tracedSVG&&o.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:R,imageVariants:I,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,j(I),o.default.createElement(C,{alt:a,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,d.default)({alt:a,title:t,loading:w},U,{imageVariants:I}))}}));if(p){var H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},s);return"inherit"===s.display&&delete H.display,o.default.createElement(M,{className:(i||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},z&&o.default.createElement(M,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},T&&A)}),U.base64&&o.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:R,imageVariants:I,generateSources:O}),U.tracedSVG&&o.default.createElement(v,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:R,imageVariants:I,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,j(I),o.default.createElement(C,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,d.default)({alt:a,title:t,loading:w},U,{imageVariants:I}))}}))}return null},t}(o.default.Component);D.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function z(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}D.propTypes={resolutions:T,sizes:E,fixed:z(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:z(c.default.oneOfType([E,c.default.arrayOf(E)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var A=D;t.default=A},E6xs:function(e,t,a){"use strict";a.r(t);a("q1tI");var i=a("Sv8q"),r=a("Wbzz"),s=a("9eSz"),n=a.n(s),l=a("qKvR"),d=function(){var e=Object(r.d)("3212458613");return Object(l.a)("div",{className:"flex flex-wrap justify-center"},Object(l.a)("div",{className:"bg-bright_white max-w-xs w-full text-center rounded shadow-md"},Object(l.a)("a",{href:"https://haydenyoung.me"},Object(l.a)("h3",{className:"font-semibold text-lg mt-1 mb-5"},"Hayden's Resume Site"),Object(l.a)(n.a,{className:"center w-11/12 m-auto z-50",fluid:e.file.childImageSharp.fluid,alt:"Hayden's Resume Site"}))))};t.default=function(){return Object(l.a)(i.a,null,Object(l.a)("div",{className:"container m-auto"},Object(l.a)("h1",{className:"m-10 text-center text-3xl font-semibold"},"Porfolio"),Object(l.a)(d,null)))}},Sv8q:function(e,t,a){"use strict";a("q1tI");var i=a("Wbzz"),r=a("qKvR"),s=function(){return Object(r.a)("footer",{className:"container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800"},Object(r.a)("div",{className:"flex -mx-3"},Object(r.a)("div",{className:"flex-1 px-3"},Object(r.a)(i.a,{to:"/about/",className:"text-lg font-semibold hover:text-contrast_dark text-gray-800"},Object(r.a)("h2",null,"About Hayden")),Object(r.a)("p",{className:"mt-5"},"After 5 years in professional aviation I now offer web presence and branding services.")),Object(r.a)("div",{className:"flex-1 px-3"},Object(r.a)(i.a,{to:"/contact/",className:"text-lg font-semibold hover:text-contrast_dark text-gray-800"},Object(r.a)("h2",null,"Contact Info")),Object(r.a)("ul",{className:"mt-4 leading-loose"},Object(r.a)("li",null,Object(r.a)("a",{href:"mailto:haydenyounglex@hotmail.com"},"Email")),Object(r.a)("li",null,Object(r.a)("a",{href:"tel:+18596840445"},"(859) 684-0445")),Object(r.a)("li",null,Object(r.a)("a",{href:"https://haydenyoung.me"},"haydenyoung.me")))),Object(r.a)("div",{className:"flex-1 px-3"},Object(r.a)("h2",{className:"text-lg font-semibold"},"Social Media"),Object(r.a)("ul",{className:"mt-4 leading-loose"},Object(r.a)("li",null,Object(r.a)("a",{href:"https://www.linkedin.com/in/hayden-young-atp/"},"LinkedIn")),Object(r.a)("li",null,Object(r.a)("a",{href:"https://twitter.com/haydenry"},"Twitter")),Object(r.a)("li",null,Object(r.a)("a",{href:"https://github.com/ztlhayden"},"GitHub"))))))};var n=function(){return Object(r.a)("header",{className:"sticky top-0 bg-contrast_dark text-white shadow"},Object(r.a)("div",{className:"container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"},Object(r.a)("div",{className:"flex items-center text-2xl"},Object(r.a)("div",{className:"w-12 mr-4"},Object(r.a)(i.a,{to:"/"},Object(r.a)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwLjExIiBoZWlnaHQ9Ijg3NCIgdmlld0JveD0iMCAwIDEwMDAuMTEgODc0Ij4NCiAgPHRpdGxlPmRkX2ljb25fd2hpdGU8L3RpdGxlPg0KICA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4NCiAgICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPg0KICAgICAgPGc+DQogICAgICAgIDxnPg0KICAgICAgICAgIDxwYXRoIGQ9Ik03ODguNjYsNTI4LjIyYTU0LjA5LDU0LjA5LDAsMCwwLTE0Ljc5LS41NmMtNS40NC0xNy4yMy0yMC40NC0zMS00MC4xOC0zNC41NkE1My4xMyw1My4xMywwLDAsMCw2ODQuNTIsNTEwYy0yNS43Ni0xLjQ4LTQ5LjI0LDE1LjU5LTU0LjA5LDQwLjUzYTQ3LjcsNDcuNywwLDAsMC0uNzcsMTEuNTFoLTIuNzFhMzUsMzUsMCwwLDAtMzQuODksMzQuODl2MzMuMjJBMzUsMzUsMCwwLDAsNjI2Ljk1LDY2NUg3OTMuNzRhMTI2Ljc4LDEyNi43OCwwLDAsMCwyNC4zMi03NC42OFY1NDQuMjZBNTIuMDgsNTIuMDgsMCwwLDAsNzg4LjY2LDUyOC4yMloiIHN0eWxlPSJmaWxsOiAjZmZmIi8+DQogICAgICAgICAgPHBhdGggZD0iTTkxMS45NCw4NS40OVE4MjMuNzUsMCw2NjIuMzUsMEg0MjUuNjJWLjA2Yy0xLjM5LDAtMi43NS0uMDYtNC4xNS0uMDZIMTg0LjcyTDAsODc0SDUxMC41MVE2NjEuMTYsODc0LDc3Miw4MDkuNDR0MTY5LjQ4LTE4OHE1OC41OC0xMjMuNDQsNTguNTktMjkwLjg0UTEwMDAuMTEsMTcxLDkxMS45NCw4NS40OVpNMjczLjI3LDcyMUgyMTQuNjVMMzM1LjM5LDE1Mmg1OC4xNFpNODI1LjA2LDU0Ny4xOHY0Ni4xQTEyOC4wOSwxMjguMDksMCwwLDEsNjk3LjQ1LDcyMUg1NzMuOTJhMTI2Ljg1LDEyNi44NSwwLDAsMS0yMC41Mi0xLjgybC0uNTMsMGMtNTAuNTMtOC40OC05MS4xOC00Ni45MS0xMDMuMTItOTYuMjNoLS4xYTEyNi43OCwxMjYuNzgsMCwwLDEtMy41OS0yOS44NlYyNzkuNzJBMTI3Ljc5LDEyNy43OSwwLDAsMSw0OTkuNTUsMTc2bC4wOCwwYTEyNy41OSwxMjcuNTksMCwwLDEsMjYuNTgtMTQuN3YtLjA2QTEyNi4yOSwxMjYuMjksMCwwLDEsNTczLjY2LDE1Mkg2OTcuMjhjNzAuMjgsMCwxMjcuNzcsNTcuNSwxMjcuNzcsMTI3Ljc3WiIgc3R5bGU9ImZpbGw6ICNmZmYiLz4NCiAgICAgICAgPC9nPg0KICAgICAgICA8cGF0aCBkPSJNNDUyLjA2LDI4NlY0MzNoMzY3VjI4NmMwLTcwLjY3LTU1LjQ5LTEyOC0xMjMuOTQtMTI4SDU3NkM1MDcuNTUsMTU4LDQ1Mi4wNiwyMTUuMjksNDUyLjA2LDI4NlpNNzAyLjk0LDQxMEg1NjguMTZhOSw5LDAsMCwxLDAtMThINzAyLjk0YTksOSwwLDAsMSwwLDE4WiIgc3R5bGU9ImZpbGw6ICNmZmYiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K",atl:""}))),Object(r.a)(i.a,{to:"/",className:"text-white hover:text-contrast_dark_lighter"},"Deadhead.Design")),Object(r.a)("div",{className:"flex mt-4 sm:mt-0"},Object(r.a)(i.a,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/contact/"},"Contact"),Object(r.a)(i.a,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/#services"},"Services"),Object(r.a)(i.a,{className:"px-4 text-contrast_dark_lighter hover:text-white",to:"/portfolio/"},"Portfolio"))))};t.a=function(e){var t=e.children;return Object(r.a)("div",null,Object(r.a)(n,null),Object(r.a)("main",{className:"text-grey=-900"},t),Object(r.a)(s,null))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-ae8f37cf7c755c4b40c9.js.map