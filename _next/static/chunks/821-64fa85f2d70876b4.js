(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3814:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(9671)},9549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(2430),n=r(1778),o=r(2676),s=n._(r(5271)),l=i._(r(967)),u=i._(r(6644)),a=r(2730),c=r(8918),f=r(1617);r(7746);let d=r(5485),p=i._(r(7429)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:u,decoding:a,className:c,style:f,fetchPriority:d,placeholder:p,loading:g,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:S,onError:C,...E}=e;return(0,o.jsx)("img",{...E,...m(d),loading:g,width:u,height:l,decoding:a,"data-nimg":b?"fill":"1",className:c,style:f,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,p,y,w,x,v,j))},[r,p,y,w,x,C,v,j,t]),onLoad:e=>{h(e.currentTarget,p,y,w,x,v,j)},onError:e=>{_(!0),"empty"!==p&&x(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(d.RouterContext),i=(0,s.useContext)(f.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:u}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let m=(0,s.useRef)(u);(0,s.useEffect)(()=>{m.current=u},[u]);let[y,w]=(0,s.useState)(!1),[x,_]=(0,s.useState)(!1),{props:j,meta:S}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:y,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(7746);let i=r(7853),n=r(8918);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,u,a,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:g,className:h,quality:m,width:v,height:b,fill:y=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:S="empty",blurDataURL:C,fetchPriority:E,decoding:P="async",layout:z,objectFit:T,objectPosition:M,lazyBoundary:O,lazyRoot:R,...I}=e,{imgConf:k,showAltText:L,blurComplete:A,defaultLoader:N}=t,D=k||n.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=I.loader||N;delete I.loader,delete I.srcSet;let G="__next_img_default"in F;if(G){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!f&&(f=t)}let B="",W=s(v),U=s(b);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,a=e.blurHeight,C=C||e.blurDataURL,B=e.src,!y){if(W||U){if(W&&!U){let t=W/e.width;U=Math.round(e.height*t)}else if(!W&&U){let t=U/e.height;W=Math.round(e.width*t)}}else W=e.width,U=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,V=!1),l.unoptimized&&(d=!0),G&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(d=!0),p&&(E="high");let q=s(m),J=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:M}:{},L?{}:{color:"transparent"},w),Y=A||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:U,blurWidth:u,blurHeight:a,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+S+'")',$=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:a}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),c=u.length-1;return{sizes:s||"w"!==a?s:"100vw",srcSet:u.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===a?e:i+1)+a).join(", "),src:l({config:t,src:r,quality:o,width:u[c]})}}({config:l,src:c,unoptimized:d,width:W,quality:q,sizes:f,loader:F});return{props:{...I,loading:V?"lazy":g,fetchPriority:E,width:W,height:U,decoding:P,className:h,style:{...J,...$},sizes:H.sizes,srcSet:H.srcSet,src:x||H.src},meta:{unoptimized:d,priority:p,placeholder:S,fill:y}}}},7853:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=i?40*i:t,u=n?40*n:r,a=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let i=r(2430),n=r(2730),o=r(9549),s=i._(r(7429));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=o.Image},7429:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9671:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],a=!1,c=-1;function f(){a&&i&&(a=!1,i.length?u=i.concat(u):c=-1,u.length&&d())}function d(){if(!a){var e=l(f);a=!0;for(var t=u.length;t;){for(i=u,u=[];++c<t;)i&&i[c].run();c=-1,t=u.length}i=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||a||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,i),s=!1}finally{s&&delete r[e]}return o.exports}i.ab="//";var n=i(229);e.exports=n}()},2492:function(e,t,r){e.exports=r(5639)},1426:function(e,t,r){"use strict";r.d(t,{a:function(){return u}});var i=r(5635),n=r(2492),o=r.n(n),s=r(5271);let l={img:e=>(0,s.createElement)("object"==typeof e.src?o():"img",e)},u=e=>(0,i.a)({...l,...e})},2821:function(e,t,r){"use strict";r.d(t,{c:function(){return d}});var i=r(2676);let n=Symbol.for("__nextra_internal__");var o=r(8746),s=r(5271),l=r(3814);let u=()=>{let e=(0,o.useRouter)();return(0,s.useMemo)(()=>{let t=l.env.NEXTRA_DEFAULT_LOCALE;return{...e,defaultLocale:t,...t&&{locale:e.asPath.split("/")[1]}}},[e])},a=(0,s.createContext)({}),c=a.Provider;a.displayName="SSG";var f=r(1426);function d(e,t,r,i){let o=globalThis[n];return o.route=t,o.pageMap=r.pageMap,o.context[t]={Content:e,pageOpts:r,useTOC:i},p}function p({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let o=globalThis[n],{Layout:s,themeConfig:l}=o,{route:a,locale:f}=u(),d=o.context[a];if(!d)throw Error(`No content found for the "${a}" route. Please report it as a bug.`);let{pageOpts:p,useTOC:h,Content:m}=d;if(a.startsWith("/["))p.pageMap=e;else for(let{route:t,children:r}of e){let e=t.split("/").slice(f?2:1);(function e(t,[r,...i]){for(let n of t)if("children"in n&&r===n.name)return i.length?e(n.children,i):n})(p.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;p={...p,title:e,frontMatter:r}}return(0,i.jsx)(s,{themeConfig:l,pageOpts:p,pageProps:r,children:(0,i.jsx)(c,{value:r,children:(0,i.jsx)(g,{useTOC:h,children:(0,i.jsx)(m,{...r})})})})}function g({children:e,useTOC:t}){let{wrapper:r}=(0,f.a)();return(0,i.jsx)(h,{useTOC:t,wrapper:r,children:e})}function h({children:e,useTOC:t,wrapper:r,...n}){let o=t(n);return r?(0,i.jsx)(r,{toc:o,children:e}):e}}}]);