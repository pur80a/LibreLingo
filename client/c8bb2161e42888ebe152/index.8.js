(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,c){"use strict";(function(e){var s=c(0),n=c(5),b=c(8);function i(e){let t,c=e[1](e[0])+"";return{c(){t=Object(s.cb)(c)},l(e){t=Object(s.q)(e,c)},m(e,c){Object(s.I)(e,t,c)},p(e,n){3&n&&c!==(c=e[1](e[0])+"")&&Object(s.X)(t,c)},i:s.N,o:s.N,d(e){e&&Object(s.z)(t)}}}function o(e){let t;const c=e[3].default,n=Object(s.w)(c,e,e[2],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,c){n&&n.m(e,c),t=!0},p(e,t){n&&n.p&&4&t&&Object(s.hb)(n,c,e,e[2],t,null,null)},i(e){t||(Object(s.eb)(n,e),t=!0)},o(e){Object(s.fb)(n,e),t=!1},d(e){n&&n.d(e)}}}function l(t){let c,n,l,r;const a=[o,i],j=[];return n=!1===Object(b.a)()&&"development"===e.env.WEBPACK_MODE?0:1,l=j[n]=a[n](t),{c(){c=Object(s.A)("span"),l.c(),this.h()},l(e){c=Object(s.o)(e,"SPAN",{"data-tkey":!0});var t=Object(s.m)(c);l.l(t),t.forEach(s.z),this.h()},h(){Object(s.i)(c,"data-tkey",t[0])},m(e,t){Object(s.I)(e,c,t),j[n].m(c,null),r=!0},p(e,[t]){l.p(e,t),(!r||1&t)&&Object(s.i)(c,"data-tkey",e[0])},i(e){r||(Object(s.eb)(l),r=!0)},o(e){Object(s.fb)(l),r=!1},d(e){e&&Object(s.z)(c),j[n].d()}}}function r(e,t,c){let b;Object(s.r)(e,n.b,e=>c(1,b=e));let{$$slots:i={},$$scope:o}=t,{key:l}=t;return e.$$set=e=>{"key"in e&&c(0,l=e.key),"$$scope"in e&&c(2,o=e.$$scope)},[l,b,o,i]}class a extends s.b{constructor(e){super(),Object(s.H)(this,e,r,l,s.V,{key:0})}}t.a=a}).call(this,c(20))},34:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c,n;const b=e[18].default,i=Object(s.w)(b,e,e[17],null);return{c(){t=Object(s.A)("a"),i&&i.c(),this.h()},l(e){t=Object(s.o)(e,"A",{style:!0,class:!0,href:!0,tabindex:!0,target:!0});var c=Object(s.m)(t);i&&i.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"style",e[14]),Object(s.i)(t,"class",c="button is-"+e[10]+" svelte-fcw7ds"),Object(s.i)(t,"href",e[0]),Object(s.i)(t,"tabindex",e[11]),Object(s.i)(t,"target",e[9]),Object(s.db)(t,"is-primary",e[1]),Object(s.db)(t,"is-light",e[2]),Object(s.db)(t,"is-info",e[3]),Object(s.db)(t,"is-inverted",e[4]),Object(s.db)(t,"is-outlined",e[5]),Object(s.db)(t,"is-hidden",e[6]),Object(s.db)(t,"is-loading",e[13]),Object(s.db)(t,"customColor",e[7]),Object(s.db)(t,"customTextColor",e[8]),Object(s.db)(t,"key",e[12])},m(e,c){Object(s.I)(e,t,c),i&&i.m(t,null),n=!0},p(e,[o]){i&&i.p&&131072&o&&Object(s.hb)(i,b,e,e[17],o,null,null),(!n||1024&o&&c!==(c="button is-"+e[10]+" svelte-fcw7ds"))&&Object(s.i)(t,"class",c),(!n||1&o)&&Object(s.i)(t,"href",e[0]),(!n||2048&o)&&Object(s.i)(t,"tabindex",e[11]),(!n||512&o)&&Object(s.i)(t,"target",e[9]),1026&o&&Object(s.db)(t,"is-primary",e[1]),1028&o&&Object(s.db)(t,"is-light",e[2]),1032&o&&Object(s.db)(t,"is-info",e[3]),1040&o&&Object(s.db)(t,"is-inverted",e[4]),1056&o&&Object(s.db)(t,"is-outlined",e[5]),1088&o&&Object(s.db)(t,"is-hidden",e[6]),9216&o&&Object(s.db)(t,"is-loading",e[13]),1152&o&&Object(s.db)(t,"customColor",e[7]),1280&o&&Object(s.db)(t,"customTextColor",e[8]),5120&o&&Object(s.db)(t,"key",e[12])},i(e){n||(Object(s.eb)(i,e),n=!0)},o(e){Object(s.fb)(i,e),n=!1},d(e){e&&Object(s.z)(t),i&&i.d(e)}}}function b(e,t,c){let{$$slots:s={},$$scope:n}=t,{href:b}=t,{primary:i=!1}=t,{light:o=!1}=t,{info:l=!1}=t,{inverted:r=!1}=t,{outlined:a=!1}=t,{hidden:j=!1}=t,{color:O=null}=t,{textColor:$=null}=t,{customColor:d=null!=O}=t,{customTextColor:f=null!=$}=t,{target:m="_self"}=t,{size:u="default"}=t,{tabindex:p=0}=t,{key:h=!1}=t,{loading:g=!1}=t,v=`\n    --color:${O};\n    --textColor:${$};\n  `;return e.$$set=e=>{"href"in e&&c(0,b=e.href),"primary"in e&&c(1,i=e.primary),"light"in e&&c(2,o=e.light),"info"in e&&c(3,l=e.info),"inverted"in e&&c(4,r=e.inverted),"outlined"in e&&c(5,a=e.outlined),"hidden"in e&&c(6,j=e.hidden),"color"in e&&c(15,O=e.color),"textColor"in e&&c(16,$=e.textColor),"customColor"in e&&c(7,d=e.customColor),"customTextColor"in e&&c(8,f=e.customTextColor),"target"in e&&c(9,m=e.target),"size"in e&&c(10,u=e.size),"tabindex"in e&&c(11,p=e.tabindex),"key"in e&&c(12,h=e.key),"loading"in e&&c(13,g=e.loading),"$$scope"in e&&c(17,n=e.$$scope)},[b,i,o,l,r,a,j,d,f,m,u,p,h,g,v,O,$,n,s]}class i extends s.b{constructor(e){var t;super(),document.getElementById("svelte-fcw7ds-style")||((t=Object(s.A)("style")).id="svelte-fcw7ds-style",t.textContent=".button.customColor.svelte-fcw7ds{background-color:var(--color)}.button.customTextColor.svelte-fcw7ds{color:var(--textColor)}.key.svelte-fcw7ds{font-family:monospace;border-radius:8px;text-transform:none;margin:1em;margin-left:0;margin-top:0}",Object(s.g)(document.head,t)),Object(s.H)(this,e,b,n,s.V,{href:0,primary:1,light:2,info:3,inverted:4,outlined:5,hidden:6,color:15,textColor:16,customColor:7,customTextColor:8,target:9,size:10,tabindex:11,key:12,loading:13})}}t.a=i},375:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(79);function b(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(c="images/agpl-logo.svg")&&Object(s.i)(t,"src","images/agpl-logo.svg"),Object(s.i)(t,"alt","Licensed under AGPL - Free as in Freedom"),Object(s.i)(t,"class","svelte-1hagzfr")},m(e,c){Object(s.I)(e,t,c)},p:s.N,i:s.N,o:s.N,d(e){e&&Object(s.z)(t)}}}class i extends s.b{constructor(e){var t;super(),document.getElementById("svelte-1hagzfr-style")||((t=Object(s.A)("style")).id="svelte-1hagzfr-style",t.textContent="img.svelte-1hagzfr{height:2.5em;mix-blend-mode:multiply;opacity:0.5}",Object(s.g)(document.head,t)),Object(s.H)(this,e,null,b,s.V,{})}}var o=i,l=c(34);function r(e){let t,c;const n=e[1].default,b=Object(s.w)(n,e,e[0],null);return{c(){t=Object(s.A)("div"),b&&b.c(),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var c=Object(s.m)(t);b&&b.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","box")},m(e,n){Object(s.I)(e,t,n),b&&b.m(t,null),c=!0},p(e,[t]){b&&b.p&&1&t&&Object(s.hb)(b,n,e,e[0],t,null,null)},i(e){c||(Object(s.eb)(b,e),c=!0)},o(e){Object(s.fb)(b,e),c=!1},d(e){e&&Object(s.z)(t),b&&b.d(e)}}}function a(e,t,c){let{$$slots:s={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&c(0,n=e.$$scope)},[n,s]}class j extends s.b{constructor(e){super(),Object(s.H)(this,e,a,r,s.V,{})}}var O=j,$=c(44),d=c(45),f=c(46),m=c(5),u=c(157);function p(e){let t,c,b;return c=new n.a({props:{shadow:!1,glow:!0}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var n=Object(s.m)(t);Object(s.n)(c.$$.fragment,n),n.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","mascot svelte-1ddipv7")},m(e,n){Object(s.I)(e,t,n),Object(s.M)(c,t,null),b=!0},p:s.N,i(e){b||(Object(s.eb)(c.$$.fragment,e),b=!0)},o(e){Object(s.fb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function h(e){let t;return{c(){t=Object(s.cb)("LibreLingo")},l(e){t=Object(s.q)(e,"LibreLingo")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function g(e){let t;return{c(){t=Object(s.cb)("an experiment to create a community driven language-learning\n                platform")},l(e){t=Object(s.q)(e,"an experiment to create a community driven language-learning\n                platform")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function v(e){let t;return{c(){t=Object(s.cb)("Start learning Spanish")},l(e){t=Object(s.q)(e,"Start learning Spanish")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function x(e){let t,c;return t=new u.a({props:{key:"index.start_spanish_course",$$slots:{default:[v]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function z(e){let t;return{c(){t=Object(s.cb)("Start learning German")},l(e){t=Object(s.q)(e,"Start learning German")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function k(e){let t,c;return t=new u.a({props:{key:"index.start_german_course",$$slots:{default:[z]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function y(e){let t;return{c(){t=Object(s.cb)("Start learning French")},l(e){t=Object(s.q)(e,"Start learning French")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function w(e){let t,c;return t=new u.a({props:{key:"index.start_french_course",$$slots:{default:[y]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function I(e){let t;return{c(){t=Object(s.cb)("Start learning Bangla")},l(e){t=Object(s.q)(e,"Start learning Bangla")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function A(e){let t,c;return t=new u.a({props:{key:"index.start_french_course",$$slots:{default:[I]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function C(e){let t;return{c(){t=Object(s.cb)("About LibreLingo")},l(e){t=Object(s.q)(e,"About LibreLingo")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function M(e){let t,c;return t=new u.a({props:{key:"index.about_librelingo",$$slots:{default:[C]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function E(e){let t;return{c(){t=Object(s.cb)("Development documentation")},l(e){t=Object(s.q)(e,"Development documentation")},m(e,c){Object(s.I)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function S(e){let t,c;return t=new u.a({props:{key:"index.development_docs",$$slots:{default:[E]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function D(e){let t,c,n,b,i,o,r,a,j,O,$,d,m,p,v,z,y,I,C,E;return t=new f.a({props:{$$slots:{default:[h]},$$scope:{ctx:e}}}),b=new u.a({props:{key:"index.subtitle",$$slots:{default:[g]},$$scope:{ctx:e}}}),r=new l.a({props:{primary:!0,href:"course/spanish-from-english",$$slots:{default:[x]},$$scope:{ctx:e}}}),j=new l.a({props:{primary:!0,hidden:!0,href:"course/german-from-english",$$slots:{default:[k]},$$scope:{ctx:e}}}),$=new l.a({props:{primary:!0,hidden:!0,href:"course/french-from-english",$$slots:{default:[w]},$$scope:{ctx:e}}}),m=new l.a({props:{primary:!0,hidden:!0,href:"course/bangla-from-english",$$slots:{default:[A]},$$scope:{ctx:e}}}),v=new l.a({props:{primary:!0,href:"about",$$slots:{default:[M]},$$scope:{ctx:e}}}),y=new l.a({props:{primary:!0,href:"https://librelingo.app/docs/",$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.ab)(),n=Object(s.A)("h2"),Object(s.t)(b.$$.fragment),i=Object(s.ab)(),o=Object(s.A)("div"),Object(s.t)(r.$$.fragment),a=Object(s.ab)(),Object(s.t)(j.$$.fragment),O=Object(s.ab)(),Object(s.t)($.$$.fragment),d=Object(s.ab)(),Object(s.t)(m.$$.fragment),p=Object(s.ab)(),Object(s.t)(v.$$.fragment),z=Object(s.ab)(),Object(s.t)(y.$$.fragment),I=Object(s.ab)(),C=Object(s.A)("a"),this.h()},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),n=Object(s.o)(e,"H2",{class:!0});var l=Object(s.m)(n);Object(s.n)(b.$$.fragment,l),l.forEach(s.z),i=Object(s.p)(e),o=Object(s.o)(e,"DIV",{class:!0});var f=Object(s.m)(o);Object(s.n)(r.$$.fragment,f),a=Object(s.p)(f),Object(s.n)(j.$$.fragment,f),O=Object(s.p)(f),Object(s.n)($.$$.fragment,f),d=Object(s.p)(f),Object(s.n)(m.$$.fragment,f),p=Object(s.p)(f),Object(s.n)(v.$$.fragment,f),z=Object(s.p)(f),Object(s.n)(y.$$.fragment,f),I=Object(s.p)(f),C=Object(s.o)(f,"A",{href:!0,class:!0}),Object(s.m)(C).forEach(s.z),f.forEach(s.z),this.h()},h(){Object(s.i)(n,"class","subtitle"),Object(s.i)(C,"href","/devtools"),Object(s.i)(C,"class","is-invisible"),Object(s.i)(o,"class","buttons")},m(e,l){Object(s.M)(t,e,l),Object(s.I)(e,c,l),Object(s.I)(e,n,l),Object(s.M)(b,n,null),Object(s.I)(e,i,l),Object(s.I)(e,o,l),Object(s.M)(r,o,null),Object(s.g)(o,a),Object(s.M)(j,o,null),Object(s.g)(o,O),Object(s.M)($,o,null),Object(s.g)(o,d),Object(s.M)(m,o,null),Object(s.g)(o,p),Object(s.M)(v,o,null),Object(s.g)(o,z),Object(s.M)(y,o,null),Object(s.g)(o,I),Object(s.g)(o,C),E=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n);const i={};2&c&&(i.$$scope={dirty:c,ctx:e}),r.$set(i);const o={};2&c&&(o.$$scope={dirty:c,ctx:e}),j.$set(o);const l={};2&c&&(l.$$scope={dirty:c,ctx:e}),$.$set(l);const a={};2&c&&(a.$$scope={dirty:c,ctx:e}),m.$set(a);const O={};2&c&&(O.$$scope={dirty:c,ctx:e}),v.$set(O);const d={};2&c&&(d.$$scope={dirty:c,ctx:e}),y.$set(d)},i(e){E||(Object(s.eb)(t.$$.fragment,e),Object(s.eb)(b.$$.fragment,e),Object(s.eb)(r.$$.fragment,e),Object(s.eb)(j.$$.fragment,e),Object(s.eb)($.$$.fragment,e),Object(s.eb)(m.$$.fragment,e),Object(s.eb)(v.$$.fragment,e),Object(s.eb)(y.$$.fragment,e),E=!0)},o(e){Object(s.fb)(t.$$.fragment,e),Object(s.fb)(b.$$.fragment,e),Object(s.fb)(r.$$.fragment,e),Object(s.fb)(j.$$.fragment,e),Object(s.fb)($.$$.fragment,e),Object(s.fb)(m.$$.fragment,e),Object(s.fb)(v.$$.fragment,e),Object(s.fb)(y.$$.fragment,e),E=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),e&&Object(s.z)(n),Object(s.x)(b),e&&Object(s.z)(i),e&&Object(s.z)(o),Object(s.x)(r),Object(s.x)(j),Object(s.x)($),Object(s.x)(m),Object(s.x)(v),Object(s.x)(y)}}}function T(e){let t,c;return t=new O({props:{$$slots:{default:[D]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,n){Object(s.M)(t,e,n),c=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.eb)(t.$$.fragment,e),c=!0)},o(e){Object(s.fb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function V(e){let t,c,n,b;return t=new $.a({props:{size:"1/4",$$slots:{default:[p]},$$scope:{ctx:e}}}),n=new $.a({props:{$$slots:{default:[T]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.ab)(),Object(s.t)(n.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(n.$$.fragment,e)},m(e,i){Object(s.M)(t,e,i),Object(s.I)(e,c,i),Object(s.M)(n,e,i),b=!0},p(e,c){const s={};2&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const b={};2&c&&(b.$$scope={dirty:c,ctx:e}),n.$set(b)},i(e){b||(Object(s.eb)(t.$$.fragment,e),Object(s.eb)(n.$$.fragment,e),b=!0)},o(e){Object(s.fb)(t.$$.fragment,e),Object(s.fb)(n.$$.fragment,e),b=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(n,e)}}}function q(e){let t,c,n,b,i,l,r,a,j,O,$,f;return document.title=t=e[0]("meta.title"),a=new d.a({props:{$$slots:{default:[V]},$$scope:{ctx:e}}}),$=new o({}),{c(){c=Object(s.A)("meta"),b=Object(s.ab)(),i=Object(s.A)("section"),l=Object(s.A)("div"),r=Object(s.A)("div"),Object(s.t)(a.$$.fragment),j=Object(s.ab)(),O=Object(s.A)("div"),Object(s.t)($.$$.fragment),this.h()},l(e){const t=Object(s.T)('[data-svelte="svelte-9e61gp"]',document.head);c=Object(s.o)(t,"META",{name:!0,content:!0}),t.forEach(s.z),b=Object(s.p)(e),i=Object(s.o)(e,"SECTION",{class:!0});var n=Object(s.m)(i);l=Object(s.o)(n,"DIV",{class:!0});var o=Object(s.m)(l);r=Object(s.o)(o,"DIV",{class:!0});var d=Object(s.m)(r);Object(s.n)(a.$$.fragment,d),d.forEach(s.z),o.forEach(s.z),n.forEach(s.z),j=Object(s.p)(e),O=Object(s.o)(e,"DIV",{class:!0});var f=Object(s.m)(O);Object(s.n)($.$$.fragment,f),f.forEach(s.z),this.h()},h(){Object(s.i)(c,"name","description"),Object(s.i)(c,"content",n=e[0]("index.meta.description")),Object(s.i)(r,"class","container"),Object(s.i)(l,"class","hero-body"),Object(s.i)(i,"class","hero is-bold is-fullheight svelte-1ddipv7"),Object(s.i)(O,"class","license svelte-1ddipv7")},m(e,t){Object(s.g)(document.head,c),Object(s.I)(e,b,t),Object(s.I)(e,i,t),Object(s.g)(i,l),Object(s.g)(l,r),Object(s.M)(a,r,null),Object(s.I)(e,j,t),Object(s.I)(e,O,t),Object(s.M)($,O,null),f=!0},p(e,[b]){(!f||1&b)&&t!==(t=e[0]("meta.title"))&&(document.title=t),(!f||1&b&&n!==(n=e[0]("index.meta.description")))&&Object(s.i)(c,"content",n);const i={};2&b&&(i.$$scope={dirty:b,ctx:e}),a.$set(i)},i(e){f||(Object(s.eb)(a.$$.fragment,e),Object(s.eb)($.$$.fragment,e),f=!0)},o(e){Object(s.fb)(a.$$.fragment,e),Object(s.fb)($.$$.fragment,e),f=!1},d(e){Object(s.z)(c),e&&Object(s.z)(b),e&&Object(s.z)(i),Object(s.x)(a),e&&Object(s.z)(j),e&&Object(s.z)(O),Object(s.x)($)}}}function _(e,t,c){let n;return Object(s.r)(e,m.a,e=>c(0,n=e)),[n]}class H extends s.b{constructor(e){var t;super(),document.getElementById("svelte-1ddipv7-style")||((t=Object(s.A)("style")).id="svelte-1ddipv7-style",t.textContent="@keyframes svelte-1ddipv7-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.hero.svelte-1ddipv7{background-color:#325f74}.license.svelte-1ddipv7{position:absolute;right:1em;bottom:1em}@media screen and (max-width: 768px){.mascot.svelte-1ddipv7{width:45%;margin:auto;margin-top:-3em}}",Object(s.g)(document.head,t)),Object(s.H)(this,e,_,q,s.V,{})}}t.default=H},44:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c;const n=e[4].default,b=Object(s.w)(n,e,e[3],null);return{c(){t=Object(s.A)("div"),b&&b.c(),this.h()},l(e){t=Object(s.o)(e,"DIV",{"data-size":!0,"data-size-desktop":!0,"data-size-tablet":!0,class:!0});var c=Object(s.m)(t);b&&b.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"data-size",e[0]),Object(s.i)(t,"data-size-desktop",e[1]),Object(s.i)(t,"data-size-tablet",e[2]),Object(s.i)(t,"class","column"),Object(s.db)(t,"is-one-third-desktop","1/3"===e[1]),Object(s.db)(t,"is-half-tablet","1/2"===e[2]),Object(s.db)(t,"is-one-third-tablet","1/3"===e[2]),Object(s.db)(t,"is-one-quarter","1/4"===e[0]),Object(s.db)(t,"is-one-third","1/3"===e[0]),Object(s.db)(t,"is-three-fifths","3/5"===e[0]),Object(s.db)(t,"is-1","1"===e[0])},m(e,n){Object(s.I)(e,t,n),b&&b.m(t,null),c=!0},p(e,[i]){b&&b.p&&8&i&&Object(s.hb)(b,n,e,e[3],i,null,null),(!c||1&i)&&Object(s.i)(t,"data-size",e[0]),(!c||2&i)&&Object(s.i)(t,"data-size-desktop",e[1]),(!c||4&i)&&Object(s.i)(t,"data-size-tablet",e[2]),2&i&&Object(s.db)(t,"is-one-third-desktop","1/3"===e[1]),4&i&&Object(s.db)(t,"is-half-tablet","1/2"===e[2]),4&i&&Object(s.db)(t,"is-one-third-tablet","1/3"===e[2]),1&i&&Object(s.db)(t,"is-one-quarter","1/4"===e[0]),1&i&&Object(s.db)(t,"is-one-third","1/3"===e[0]),1&i&&Object(s.db)(t,"is-three-fifths","3/5"===e[0]),1&i&&Object(s.db)(t,"is-1","1"===e[0])},i(e){c||(Object(s.eb)(b,e),c=!0)},o(e){Object(s.fb)(b,e),c=!1},d(e){e&&Object(s.z)(t),b&&b.d(e)}}}function b(e,t,c){let{$$slots:s={},$$scope:n}=t,{size:b=null}=t,{sizeDesktop:i=null}=t,{sizeTablet:o=null}=t;return e.$$set=e=>{"size"in e&&c(0,b=e.size),"sizeDesktop"in e&&c(1,i=e.sizeDesktop),"sizeTablet"in e&&c(2,o=e.sizeTablet),"$$scope"in e&&c(3,n=e.$$scope)},[b,i,o,n,s]}class i extends s.b{constructor(e){super(),Object(s.H)(this,e,b,n,s.V,{size:0,sizeDesktop:1,sizeTablet:2})}}t.a=i},45:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c;const n=e[3].default,b=Object(s.w)(n,e,e[2],null);return{c(){t=Object(s.A)("div"),b&&b.c(),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var c=Object(s.m)(t);b&&b.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","columns svelte-rt8gqk"),Object(s.db)(t,"is-multiline",e[0]),Object(s.db)(t,"is-reversed",e[1])},m(e,n){Object(s.I)(e,t,n),b&&b.m(t,null),c=!0},p(e,[c]){b&&b.p&&4&c&&Object(s.hb)(b,n,e,e[2],c,null,null),1&c&&Object(s.db)(t,"is-multiline",e[0]),2&c&&Object(s.db)(t,"is-reversed",e[1])},i(e){c||(Object(s.eb)(b,e),c=!0)},o(e){Object(s.fb)(b,e),c=!1},d(e){e&&Object(s.z)(t),b&&b.d(e)}}}function b(e,t,c){let{$$slots:s={},$$scope:n}=t,{multiline:b=!1}=t,{reversed:i=!1}=t;return e.$$set=e=>{"multiline"in e&&c(0,b=e.multiline),"reversed"in e&&c(1,i=e.reversed),"$$scope"in e&&c(2,n=e.$$scope)},[b,i,n,s]}class i extends s.b{constructor(e){var t;super(),document.getElementById("svelte-rt8gqk-style")||((t=Object(s.A)("style")).id="svelte-rt8gqk-style",t.textContent="@keyframes svelte-rt8gqk-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width: 768px){.is-reversed.svelte-rt8gqk{flex-direction:column-reverse;display:flex}}",Object(s.g)(document.head,t)),Object(s.H)(this,e,b,n,s.V,{multiline:0,reversed:1})}}t.a=i},46:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c,n;const b=e[9].default,i=Object(s.w)(b,e,e[8],null);return{c(){t=Object(s.A)("h1"),i&&i.c(),this.h()},l(e){t=Object(s.o)(e,"H1",{class:!0});var c=Object(s.m)(t);i&&i.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"class",c=Object(s.P)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?"has-text-weight-"+e[6]:""}\n  ${e[7]?"has-text-"+e[7]:""}`)+" svelte-k5ikha"),Object(s.db)(t,"title",!e[3]),Object(s.db)(t,"subtitle",e[3]),Object(s.db)(t,"is-spaced",e[4])},m(e,c){Object(s.I)(e,t,c),i&&i.m(t,null),n=!0},p(e,[o]){i&&i.p&&256&o&&Object(s.hb)(i,b,e,e[8],o,null,null),(!n||231&o&&c!==(c=Object(s.P)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?"has-text-weight-"+e[6]:""}\n  ${e[7]?"has-text-"+e[7]:""}`)+" svelte-k5ikha"))&&Object(s.i)(t,"class",c),239&o&&Object(s.db)(t,"title",!e[3]),239&o&&Object(s.db)(t,"subtitle",e[3]),247&o&&Object(s.db)(t,"is-spaced",e[4])},i(e){n||(Object(s.eb)(i,e),n=!0)},o(e){Object(s.fb)(i,e),n=!1},d(e){e&&Object(s.z)(t),i&&i.d(e)}}}function b(e,t,c){let{$$slots:s={},$$scope:n}=t,{sizeMobile:b=null}=t,{sizeTablet:i=null}=t,{sizeDesktop:o=null}=t,{isSubtitle:l=!1}=t,{isSpaced:r=!1}=t,{size:a=(l?5:3)}=t,{textWeight:j=null}=t,{align:O=null}=t;return e.$$set=e=>{"sizeMobile"in e&&c(0,b=e.sizeMobile),"sizeTablet"in e&&c(1,i=e.sizeTablet),"sizeDesktop"in e&&c(2,o=e.sizeDesktop),"isSubtitle"in e&&c(3,l=e.isSubtitle),"isSpaced"in e&&c(4,r=e.isSpaced),"size"in e&&c(5,a=e.size),"textWeight"in e&&c(6,j=e.textWeight),"align"in e&&c(7,O=e.align),"$$scope"in e&&c(8,n=e.$$scope)},[b,i,o,l,r,a,j,O,n,s]}class i extends s.b{constructor(e){var t;super(),document.getElementById("svelte-k5ikha-style")||((t=Object(s.A)("style")).id="svelte-k5ikha-style",t.textContent="@keyframes svelte-k5ikha-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.title.svelte-k5ikha:not(:last-child),.subtitle.svelte-k5ikha:not(:last-child){margin-bottom:1.5rem}.title.svelte-k5ikha,.subtitle.svelte-k5ikha{word-break:break-word}.title.svelte-k5ikha{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title.is-1.svelte-k5ikha{font-size:3rem}.title.is-2.svelte-k5ikha{font-size:2.5rem}.title.is-3.svelte-k5ikha{font-size:2rem}.title.is-4.svelte-k5ikha{font-size:1.5rem}.title.is-5.svelte-k5ikha{font-size:1.25rem}.title.is-6.svelte-k5ikha{font-size:1rem}.title.is-7.svelte-k5ikha{font-size:0.75rem}.subtitle.svelte-k5ikha{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle.is-1.svelte-k5ikha{font-size:3rem}.subtitle.is-2.svelte-k5ikha{font-size:2.5rem}.subtitle.is-3.svelte-k5ikha{font-size:2rem}.subtitle.is-4.svelte-k5ikha{font-size:1.5rem}.subtitle.is-5.svelte-k5ikha{font-size:1.25rem}.subtitle.is-6.svelte-k5ikha{font-size:1rem}.subtitle.is-7.svelte-k5ikha{font-size:0.75rem}",Object(s.g)(document.head,t)),Object(s.H)(this,e,b,n,s.V,{sizeMobile:0,sizeTablet:1,sizeDesktop:2,isSubtitle:3,isSpaced:4,size:5,textWeight:6,align:7})}}t.a=i},79:function(e,t,c){"use strict";var s=c(0);function n(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{"data-test":!0,src:!0,alt:!0,class:!0}),this.h()},h(){Object(s.i)(t,"data-test","mascot-jetpack"),t.src!==(c=e[1])&&Object(s.i)(t,"src",c),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","svelte-1ceej21"),Object(s.db)(t,"glow",e[0])},m(e,c){Object(s.I)(e,t,c)},p(e,[c]){1&c&&Object(s.db)(t,"glow",e[0])},i:s.N,o:s.N,d(e){e&&Object(s.z)(t)}}}function b(e,t,c){let{shadow:s=!0}=t,{glow:n=!1}=t,b=!0===s?"images/mascot-jetpack.svg":"images/mascot-jetpack-noshadow.svg";return e.$$set=e=>{"shadow"in e&&c(2,s=e.shadow),"glow"in e&&c(0,n=e.glow)},[n,b,s]}class i extends s.b{constructor(e){var t;super(),document.getElementById("svelte-1ceej21-style")||((t=Object(s.A)("style")).id="svelte-1ceej21-style",t.textContent=".glow.svelte-1ceej21{filter:drop-shadow(0 0 2em #ffffff1c)}",Object(s.g)(document.head,t)),Object(s.H)(this,e,b,n,s.V,{shadow:2,glow:0})}}t.a=i}}]);