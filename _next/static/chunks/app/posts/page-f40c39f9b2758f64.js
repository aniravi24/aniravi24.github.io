(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530,755],{471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/peppercustomeremail.a91da4d2.png",height:352,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX29vb9/f3d116fAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhJREFUeJxjYGAEAwYGBkZGMBvEQKYZGQEB2QAbIZpaSgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},961:(e,t,r)=>{Promise.resolve().then(r.bind(r,7634)),Promise.resolve().then(r.bind(r,1933)),Promise.resolve().then(r.t.bind(r,2317,23)),Promise.resolve().then(r.t.bind(r,6434,23)),Promise.resolve().then(r.bind(r,4242)),Promise.resolve().then(r.bind(r,1201)),Promise.resolve().then(r.bind(r,8769)),Promise.resolve().then(r.bind(r,6507)),Promise.resolve().then(r.bind(r,4809)),Promise.resolve().then(r.bind(r,7042)),Promise.resolve().then(r.bind(r,96)),Promise.resolve().then(r.bind(r,9403)),Promise.resolve().then(r.bind(r,471))},4242:(e,t,r)=>{"use strict";r.d(t,{Comments:()=>c});var n=r(2432),s=r(3672),a=r(7634),o=r(9262),l=r(9118),i=r(364);let c=e=>{let t,r,c,d,m;let u=(0,s.c)(10),{appId:h,host:A}=e,p=void 0===A?"https://cusdis.com":A,v=(0,o.usePathname)(),{resolvedTheme:f}=(0,a.D)(),b=(0,l.q)();return(u[0]!==f?(t=()=>{try{window.CUSDIS&&window.CUSDIS.setTheme(f)}catch(e){console.error(e)}},r=[f],u[0]=f,u[1]=t,u[2]=r):(t=u[1],r=u[2]),(0,i.useEffect)(t,r),h)?b?(u[3]===Symbol.for("react.memo_cache_sentinel")?(c={marginTop:"4rem"},u[3]=c):c=u[3],u[4]===Symbol.for("react.memo_cache_sentinel")?(d=(0,n.jsx)("script",{async:!0,src:"https://cusdis.com/js/cusdis.es.js"}),u[4]=d):d=u[4],u[5]!==h||u[6]!==p||u[7]!==v||u[8]!==f?(m=(0,n.jsx)("div",{style:c,id:"cusdis_thread","data-host":p,"data-app-id":h,"data-page-id":v,"data-page-url":v,"data-page-title":document.title,"data-theme":f,children:d}),u[5]=h,u[6]=p,u[7]=v,u[8]=f,u[9]=m):m=u[9],m):null:(console.warn("[nextra/cusdis] `appId` is required"),null)}},6507:(e,t,r)=>{"use strict";r.d(t,{ThemeSwitch:()=>d});var n=r(2432),s=r(3672),a=r(7634),o=r(1897),l=r(9118);let i=e=>{let t,r;let a=(0,s.c)(3);return a[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)("path",{strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}),a[0]=t):t=a[0],a[1]!==e?(r=(0,n.jsx)("svg",{fill:"currentColor",viewBox:"2 2 20 20",stroke:"currentColor",...e,children:t}),a[1]=e,a[2]=r):r=a[2],r},c=e=>{let t,r;let a=(0,s.c)(3);return a[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)("path",{strokeLinecap:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}),a[0]=t):t=a[0],a[1]!==e?(r=(0,n.jsx)("svg",{fill:"currentColor",viewBox:"2 2 20 20",stroke:"currentColor",...e,children:t}),a[1]=e,a[2]=r):r=a[2],r};function d(){let e,t,r;let d=(0,s.c)(8),{setTheme:m,resolvedTheme:u}=(0,a.D)(),h=(0,l.q)(),A="dark"===u;d[0]!==A||d[1]!==m?(e=()=>{m(A?"light":"dark")},d[0]=A,d[1]=m,d[2]=e):e=d[2];let p=e,v=h&&A?i:c;return d[3]!==v?(t=(0,n.jsx)(v,{height:"14"}),d[3]=v,d[4]=t):t=d[4],d[5]!==t||d[6]!==p?(r=(0,n.jsx)(o.$,{"aria-label":"Toggle Dark Mode",className:"x:p-2",onClick:p,children:t}),d[5]=t,d[6]=p,d[7]=r):r=d[7],r}},7634:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,ThemeProvider:()=>m});var n=r(364),s=(e,t,r,n,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function d(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;r?(i.classList.remove(...n),i.classList.add(t)):i.setAttribute(e,t)}),r=t,l&&c.includes(r)&&(i.style.colorScheme=r)}if(n)d(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(n)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=n.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=n.useContext(i))?e:c},m=e=>n.useContext(i)?n.createElement(n.Fragment,null,e.children):n.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=s?"system":"light",attribute:h="data-theme",value:b,children:g,nonce:y,scriptProps:w}=e,[E,S]=n.useState(()=>p(c,m)),[k,C]=n.useState(()=>p(c)),x=b?Object.values(b):d,T=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=f());let n=b?b[t]:t,o=r?v(y):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...x),n&&i.classList.add(n)):e.startsWith("data-")&&(n?i.setAttribute(e,n):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;i.style.colorScheme=r}null==o||o()},[y]),P=n.useCallback(e=>{let t="function"==typeof e?e(E):e;S(t);try{localStorage.setItem(c,t)}catch(e){}},[E]),_=n.useCallback(e=>{C(f(e)),"system"===E&&s&&!t&&T("system")},[E,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?S(e.newValue):P(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),n.useEffect(()=>{T(null!=t?t:E)},[t,E]);let L=n.useMemo(()=>({theme:E,setTheme:P,forcedTheme:t,resolvedTheme:"system"===E?k:E,themes:s?[...d,"system"]:d,systemTheme:s?k:void 0}),[E,P,t,k,s,d]);return n.createElement(i.Provider,{value:L},n.createElement(A,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:m,value:b,themes:d,nonce:y,scriptProps:w}),g)},A=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:d,nonce:m,scriptProps:u}=e,h=JSON.stringify([a,r,i,t,d,c,o,l]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),p=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},f=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},8769:(e,t,r)=>{"use strict";r.d(t,{NavbarLink:()=>i});var n=r(2432),s=r(3672),a=r(1933),o=r(9262);let l=r(9266).env.NEXTRA_DEFAULT_LOCALE,i=e=>{let t;let r=(0,s.c)(3),i=function(){let e;let t=(0,s.c)(2),r=(0,o.usePathname)();return t[0]!==r?(e=(l?"/"+r.split("/").slice(2).join("/"):r).replace(/\.html$/,"").replace(/\/index(\/|$)/,"$1").replace(/\/$/,"")||"/",t[0]=r,t[1]=e):e=t[1],e}(),c=e.href===i||void 0;return r[0]!==e||r[1]!==c?(t=(0,n.jsx)(a.Link,{className:"x:aria-[current]:no-underline x:aria-[current]:opacity-60","aria-current":c,...e}),r[0]=e,r[1]=c,r[2]=t):t=r[2],t}},9118:(e,t,r)=>{"use strict";r.d(t,{q:()=>s});var n=r(364);function s(){let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(!0)},[]),e}}},e=>{var t=t=>e(e.s=t);e.O(0,[77,22,575,358],()=>t(961)),_N_E=e.O()}]);