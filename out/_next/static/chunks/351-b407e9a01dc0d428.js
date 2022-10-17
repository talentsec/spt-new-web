"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{6627:function(t,e,n){n.d(e,{Z:function(){return X}});var i,o=n(7462),r=n(4942),a=n(5671),l=n(3144),s=n(7326),c=n(2531),f=n(3568),u=n(4184),h=n.n(u),p=n(845),d=n(4019),v=n(7294),g=n(1002),$=n(8555),m=n(8423),k=n(3124),x=n(4902),y=n(5164);function C(){return function(t,e,n){var i=n.value,o=!1;return{configurable:!0,get:function(){if(o||this===t.prototype||this.hasOwnProperty(e))return i;var n,r,a,l=(n=i.bind(this),(a=function(){if(null==r){for(var t,e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];r=(0,y.Z)((t=i,function(){r=null,n.apply(void 0,(0,x.Z)(t))}))}}).cancel=function(){y.Z.cancel(r),r=null},a);return o=!0,Object.defineProperty(this,e,{value:l,configurable:!0,writable:!0}),o=!1,l}}}}function Z(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function E(t,e,n){if(void 0!==n&&e.top>t.top-n)return n+e.top}function T(t,e,n){if(void 0!==n&&e.bottom<t.bottom+n)return n+(window.innerHeight-e.bottom)}var N=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],P=[];function L(t,e){if(t){var n=P.find(function(e){return e.target===t});n?n.affixList.push(e):(n={target:t,affixList:[e],eventHandlers:{}},P.push(n),N.forEach(function(e){n.eventHandlers[e]=(0,d.Z)(t,e,function(){n.affixList.forEach(function(t){t.lazyUpdatePosition()})})}))}}function _(t){var e=P.find(function(e){var n=e.affixList.some(function(e){return e===t});return n&&(e.affixList=e.affixList.filter(function(e){return e!==t})),n});e&&0===e.affixList.length&&(P=P.filter(function(t){return t!==e}),N.forEach(function(t){var n=e.eventHandlers[t];n&&n.remove&&n.remove()}))}var w=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if(("undefined"==typeof Reflect?"undefined":(0,g.Z)(Reflect))==="object"&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};function S(){return"undefined"!=typeof window?window:null}(D=i||(i={}))[D.None=0]="None",D[D.Prepare=1]="Prepare";var b=function(t){(0,c.Z)(n,t);var e=(0,f.Z)(n);function n(){var t;return(0,a.Z)(this,n),t=e.apply(this,arguments),t.state={status:i.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props,n=e.offsetBottom,i=e.offsetTop;return void 0===n&&void 0===i?0:i},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.measure=function(){var e=t.state,n=e.status,o=e.lastAffix,r=t.props.onChange,a=t.getTargetFunc();if(n===i.Prepare&&t.fixedNode&&t.placeholderNode&&a){var l=t.getOffsetTop(),s=t.getOffsetBottom(),c=a();if(c){var f={status:i.None},u=Z(c),h=Z(t.placeholderNode),p=E(h,u,l),d=T(h,u,s);void 0!==p?(f.affixStyle={position:"fixed",top:p,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}):void 0!==d&&(f.affixStyle={position:"fixed",bottom:d,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}),f.lastAffix=!!f.affixStyle,r&&o!==f.lastAffix&&r(f.lastAffix),t.setState(f)}}},t.prepareMeasure=function(){t.setState({status:i.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t}return(0,l.Z)(n,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,e=this.props.target;return void 0!==e?e:t||S}},{key:"componentDidMount",value:function(){var t=this,e=this.getTargetFunc();e&&(this.timeout=setTimeout(function(){L(e(),t),t.updatePosition()}))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,n=this.getTargetFunc(),i=(null==n?void 0:n())||null;e!==i&&(_(this),i&&(L(i,this),this.updatePosition()),this.setState({prevTarget:i})),(t.offsetTop!==this.props.offsetTop||t.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),_(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),e=this.state.affixStyle;if(t&&e){var n=this.getOffsetTop(),i=this.getOffsetBottom(),o=t();if(o&&this.placeholderNode){var r=Z(o),a=Z(this.placeholderNode),l=E(a,r,n),s=T(a,r,i);if(void 0!==l&&e.top===l||void 0!==s&&e.bottom===s)return}}this.prepareMeasure()}},{key:"render",value:function(){var t=this,e=this.state,n=e.affixStyle,i=e.placeholderStyle,a=this.props,l=a.affixPrefixCls,s=a.children,c=h()((0,r.Z)({},l,!!n)),f=(0,m.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return v.createElement($.Z,{onResize:function(){t.updatePosition()}},v.createElement("div",(0,o.Z)({},f,{ref:this.savePlaceholderNode}),n&&v.createElement("div",{style:i,"aria-hidden":"true"}),v.createElement("div",{className:c,ref:this.saveFixedNode,style:n},v.createElement($.Z,{onResize:function(){t.updatePosition()}},s))))}}]),n}(v.Component);b.contextType=k.E_,w([C()],b.prototype,"updatePosition",null),w([C()],b.prototype,"lazyUpdatePosition",null);var A,B=v.forwardRef(function(t,e){var n=t.prefixCls,i=(0,v.useContext(k.E_).getPrefixCls)("affix",n),r=(0,o.Z)((0,o.Z)({},t),{affixPrefixCls:i});return v.createElement(b,(0,o.Z)({},r,{ref:e}))});function O(t){return null!=t&&t===t.window}function R(t,e){if("undefined"==typeof window)return 0;var n,i,o=e?"scrollTop":"scrollLeft",r=0;return O(t)?r=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?r=t.documentElement[o]:t instanceof HTMLElement?r=t[o]:t&&(r=t[o]),t&&!O(t)&&"number"!=typeof r&&(r=null===(i=(null!==(n=t.ownerDocument)&&void 0!==n?n:t).documentElement)||void 0===i?void 0:i[o]),r}var D,I=v.createContext(null);function U(){return window}function z(t,e){if(!t.getClientRects().length)return 0;var n=t.getBoundingClientRect();return n.width||n.height?e===window?(e=t.ownerDocument.documentElement,n.top-e.clientTop):n.top-e.getBoundingClientRect().top:(0,n.top)}var F=/#([\S ]+)$/,M=function(t){(0,c.Z)(n,t);var e=(0,f.Z)(n);function n(){var t;return(0,a.Z)(this,n),t=e.apply(this,arguments),t.state={activeLink:null},t.wrapperRef=v.createRef(),t.links=[],t.registerLink=function(e){t.links.includes(e)||t.links.push(e)},t.unregisterLink=function(e){var n=t.links.indexOf(e);-1!==n&&t.links.splice(n,1)},t.getContainer=function(){var e,n=t.context.getTargetContainer;return(t.props.getContainer||n||U)()},t.handleScrollTo=function(e){var n=t.props,i=n.offsetTop,o=n.targetOffset;t.setCurrentActiveLink(e);var r=t.getContainer(),a=R(r,!0),l=F.exec(e);if(l){var s=document.getElementById(l[1]);if(s){var c=z(s,r),f=a+c;f-=void 0!==o?o:i||0,t.animating=!0,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getContainer,i=e.callback,o=e.duration,r=void 0===o?450:o,a=(void 0===n?function(){return window}:n)(),l=R(a,!0),s=Date.now(),c=function e(){var n,o,c,f,u,h=Date.now()-s,p=(n=h>r?r:h,o=l,c=t,f=r,u=c-o,(n/=f/2)<1?u/2*n*n*n+o:u/2*((n-=2)*n*n+2)+o);O(a)?a.scrollTo(window.pageXOffset,p):a instanceof HTMLDocument||"HTMLDocument"===a.constructor.name?a.documentElement.scrollTop=p:a.scrollTop=p,h<r?(0,y.Z)(e):"function"==typeof i&&i()};(0,y.Z)(c)}(f,{callback:function(){t.animating=!1},getContainer:t.getContainer})}}},t.saveInkNode=function(e){t.inkNode=e},t.setCurrentActiveLink=function(e){var n=t.state.activeLink,i=t.props,o=i.onChange,r=i.getCurrentAnchor;n!==e&&(t.setState({activeLink:"function"==typeof r?r(e):e}),null==o||o(e))},t.handleScroll=function(){if(!t.animating){var e=t.props,n=e.offsetTop,i=e.bounds,o=e.targetOffset,r=t.getCurrentAnchor(void 0!==o?o:n||0,i);t.setCurrentActiveLink(r)}},t.updateInk=function(){var e=(0,s.Z)(t),n=e.prefixCls,i=e.wrapperRef.current,o=null==i?void 0:i.getElementsByClassName("".concat(n,"-link-title-active"))[0];o&&(t.inkNode.style.top="".concat(o.offsetTop+o.clientHeight/2-4.5,"px"))},t.getMemoizedContextValue=(0,p.Z)(function(e,n){return{registerLink:t.registerLink,unregisterLink:t.unregisterLink,scrollTo:t.handleScrollTo,activeLink:e,onClick:n}}),t}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=(0,d.Z)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=(0,d.Z)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=[],i=this.getContainer();return(this.links.forEach(function(o){var r=F.exec(o.toString());if(r){var a=document.getElementById(r[1]);if(a){var l=z(a,i);l<t+e&&n.push({link:o,top:l})}}}),n.length)?n.reduce(function(t,e){return e.top>t.top?e:t}).link:""}},{key:"render",value:function(){var t=this.context.direction,e=this.props,n=e.anchorPrefixCls,i=e.className,a=e.style,l=e.offsetTop,s=e.affix,c=e.showInkInFixed,f=e.children,u=e.onClick,p=this.state.activeLink;this.prefixCls=n;var d=h()("".concat(n,"-ink-ball"),{visible:p}),g=h()("".concat(n,"-wrapper"),(0,r.Z)({},"".concat(n,"-rtl"),"rtl"===t),void 0===i?"":i),$=h()(n,(0,r.Z)({},"".concat(n,"-fixed"),!s&&!c)),m=(0,o.Z)({maxHeight:l?"calc(100vh - ".concat(l,"px)"):"100vh"},a),k=v.createElement("div",{ref:this.wrapperRef,className:g,style:m},v.createElement("div",{className:$},v.createElement("div",{className:"".concat(n,"-ink")},v.createElement("span",{className:d,ref:this.saveInkNode})),f)),x=this.getMemoizedContextValue(p,u);return v.createElement(I.Provider,{value:x},s?v.createElement(B,{offsetTop:l,target:this.getContainer},k):k)}}]),n}(v.Component);M.defaultProps={affix:!0,showInkInFixed:!1},M.contextType=k.E_;var H=v.forwardRef(function(t,e){var n=t.prefixCls,i=(0,v.useContext(k.E_).getPrefixCls)("anchor",n),r=(0,o.Z)((0,o.Z)({},t),{anchorPrefixCls:i});return v.createElement(M,(0,o.Z)({},r,{ref:e}))}),W=function(t){(0,c.Z)(n,t);var e=(0,f.Z)(n);function n(){var t;return(0,a.Z)(this,n),t=e.apply(this,arguments),t.handleClick=function(e){var n=t.context,i=n.scrollTo,o=n.onClick,r=t.props,a=r.href,l=r.title;null==o||o(e,{title:l,href:a}),i(a)},t.renderAnchorLink=function(e){var n=e.getPrefixCls,i=t.props,o=i.prefixCls,a=i.href,l=i.title,s=i.children,c=i.className,f=i.target,u=n("anchor",o),p=t.context.activeLink===a,d=h()("".concat(u,"-link"),(0,r.Z)({},"".concat(u,"-link-active"),p),c),g=h()("".concat(u,"-link-title"),(0,r.Z)({},"".concat(u,"-link-title-active"),p));return v.createElement("div",{className:d},v.createElement("a",{className:g,href:a,title:"string"==typeof l?l:"",target:f,onClick:t.handleClick},l),s)},t}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var e=t.href,n=this.props.href;e!==n&&(this.context.unregisterLink(e),this.context.registerLink(n))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return v.createElement(k.C,null,this.renderAnchorLink)}}]),n}(v.Component);W.defaultProps={href:"#"},W.contextType=I;var V=H;V.Link=W;var X=V},845:function(t,e,n){n.d(e,{Z:function(){return a}});var i=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function o(t,e){return!!(t===e||i(t)&&i(e))}function r(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!o(t[n],e[n]))return!1;return!0}function a(t,e){void 0===e&&(e=r);var n=null;function i(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;var r=t.apply(this,i);return n={lastResult:r,lastArgs:i,lastThis:this},r}return i.clear=function(){n=null},i}}}]);