(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{35:function(e,t,c){"use strict";(function(e){var n=c(47),a=c(37),s=c(36),b=c(8);let o,i,r;const j=t=>{const a=new(void 0!==e.env.JEST_WORKER_ID?c(28):c(28).default)(t).setMaxListeners(n.a.database.maxNumberOfListeners);return a.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;c(30).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),a};if(!0===Object(b.a)()){const e=c(30).default,t=c(28).default;i=new t(`${n.a.database.remote}/${s.a.get("loginDb")}`,{skip_setup:!0,live:!0}),o=j(n.a.database.local),window._DB=o,s.a.get("loginDb")===Object(a.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),s.a.get("loginDb")&&n.a.features.authEnabled?fetch(n.a.database.remote+"/_session",{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),b())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{s.a.set("loginDb",Object(a.a)("---fakeUser"),{expires:n.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,c)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const b=await(await fetch(n.a.database.remote+"/_session",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c})})).json();if(b.error){if("unauthorized"===b.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),s.a.set("loginDb",Object(a.a)(t),{expires:n.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{r&&(await r.cancel(),await fetch(n.a.database.remote+"/_session",{method:"delete"}))}finally{s.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await o.destroy(),window.location.reload(!1)}};const b=()=>{r=o.sync(i).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(o=j(n.a.database.local),o.__reset=async()=>{const e=await o.allDocs();await Promise.all(e.rows.map((function(e){return o.remove(e.id,e.value.rev)})))}),t.a=o}).call(this,c(20))},37:function(e,t,c){"use strict";t.a=e=>"userdb-"+(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)},439:function(e,t,c){"use strict";c.r(t);var n=c(0),a=(c(35),c(47)),s=c(33),b=c(57),o=c(96),i=c(5),r=c(8);function j(e){let t,c,a=e[3].license+"";return{c(){t=Object(n.C)("p"),c=Object(n.fb)(a),this.h()},l(e){t=Object(n.p)(e,"P",{class:!0});var s=Object(n.n)(t);c=Object(n.s)(s,a),s.forEach(n.B),this.h()},h(){Object(n.j)(t,"class","help is-danger")},m(e,a){Object(n.K)(e,t,a),Object(n.g)(t,c)},p(e,t){8&t&&a!==(a=e[3].license+"")&&Object(n.Z)(c,a)},d(e){e&&Object(n.B)(t)}}}function O(e){let t,c,a=e[3]._form+"";return{c(){t=Object(n.C)("p"),c=Object(n.fb)(a),this.h()},l(e){t=Object(n.p)(e,"P",{class:!0});var s=Object(n.n)(t);c=Object(n.s)(s,a),s.forEach(n.B),this.h()},h(){Object(n.j)(t,"class","help is-danger")},m(e,a){Object(n.K)(e,t,a),Object(n.g)(t,c)},p(e,t){8&t&&a!==(a=e[3]._form+"")&&Object(n.Z)(c,a)},d(e){e&&Object(n.B)(t)}}}function l(e){let t;return{c(){t=Object(n.fb)("Sign up")},l(e){t=Object(n.s)(e,"Sign up")},m(e,c){Object(n.K)(e,t,c)},d(e){e&&Object(n.B)(t)}}}function u(e){let t,c,a,i,r,u,d,f,p,h,g,m,v,w,$,y,_,E,B,C,k,S,x,P,D,L,I,T,U,K,z,A,J,N,R,M,V,G,W,Z;function H(t){e[9](t)}i=new s.a({});let X={name:"Username",icon:"user",id:"username",formStatus:e[3]};function Y(t){e[10](t)}void 0!==e[0]&&(X.value=e[0]),m=new o.a({props:X}),n.l.push(()=>Object(n.k)(m,"value",H));let F={name:"Email",icon:"envelope",id:"email",formStatus:e[3]};function q(t){e[11](t)}void 0!==e[1]&&(F.value=e[1]),$=new o.a({props:F}),n.l.push(()=>Object(n.k)($,"value",Y));let Q={name:"Password",icon:"lock",id:"password",type:"password",formStatus:e[3]};function ee(t){e[12](t)}void 0!==e[2]&&(Q.value=e[2]),E=new o.a({props:Q}),n.l.push(()=>Object(n.k)(E,"value",q));let te={name:"Repeat password",icon:"lock",id:"password_confirmation",type:"password",formStatus:e[3]};void 0!==e[5]&&(te.value=e[5]),k=new o.a({props:te}),n.l.push(()=>Object(n.k)(k,"value",ee));let ce=null!=e[3].license&&j(e),ne=null!=e[3]._form&&O(e);return V=new b.a({props:{loading:e[4],asHref:"/sign-up-success",submit:!0,$$slots:{default:[l]},$$scope:{ctx:e}}}),V.$on("click",(function(){Object(n.L)(e[7])&&e[7].apply(this,arguments)})),{c(){t=Object(n.C)("meta"),a=Object(n.cb)(),Object(n.v)(i.$$.fragment),r=Object(n.cb)(),u=Object(n.C)("section"),d=Object(n.C)("div"),f=Object(n.C)("form"),p=Object(n.C)("h2"),h=Object(n.fb)("Sign up"),g=Object(n.cb)(),Object(n.v)(m.$$.fragment),w=Object(n.cb)(),Object(n.v)($.$$.fragment),_=Object(n.cb)(),Object(n.v)(E.$$.fragment),C=Object(n.cb)(),Object(n.v)(k.$$.fragment),x=Object(n.cb)(),P=Object(n.C)("div"),D=Object(n.C)("div"),L=Object(n.C)("label"),I=Object(n.C)("input"),T=Object(n.fb)("\n            I agree to the\n            "),U=Object(n.C)("a"),K=Object(n.fb)("Terms and Conditions"),z=Object(n.fb)("\n            and the\n            "),A=Object(n.C)("a"),J=Object(n.fb)("GNU Affero General Public License"),N=Object(n.cb)(),ce&&ce.c(),R=Object(n.cb)(),ne&&ne.c(),M=Object(n.cb)(),Object(n.v)(V.$$.fragment),this.h()},l(e){const c=Object(n.V)('[data-svelte="svelte-14x6y23"]',document.head);t=Object(n.p)(c,"META",{name:!0,content:!0}),c.forEach(n.B),a=Object(n.r)(e),Object(n.o)(i.$$.fragment,e),r=Object(n.r)(e),u=Object(n.p)(e,"SECTION",{class:!0});var s=Object(n.n)(u);d=Object(n.p)(s,"DIV",{class:!0});var b=Object(n.n)(d);f=Object(n.p)(b,"FORM",{});var o=Object(n.n)(f);p=Object(n.p)(o,"H2",{class:!0});var j=Object(n.n)(p);h=Object(n.s)(j,"Sign up"),j.forEach(n.B),g=Object(n.r)(o),Object(n.o)(m.$$.fragment,o),w=Object(n.r)(o),Object(n.o)($.$$.fragment,o),_=Object(n.r)(o),Object(n.o)(E.$$.fragment,o),C=Object(n.r)(o),Object(n.o)(k.$$.fragment,o),x=Object(n.r)(o),P=Object(n.p)(o,"DIV",{class:!0});var O=Object(n.n)(P);D=Object(n.p)(O,"DIV",{class:!0});var l=Object(n.n)(D);L=Object(n.p)(l,"LABEL",{class:!0});var v=Object(n.n)(L);I=Object(n.p)(v,"INPUT",{type:!0,name:!0,id:!0}),T=Object(n.s)(v,"\n            I agree to the\n            "),U=Object(n.p)(v,"A",{href:!0});var y=Object(n.n)(U);K=Object(n.s)(y,"Terms and Conditions"),y.forEach(n.B),z=Object(n.s)(v,"\n            and the\n            "),A=Object(n.p)(v,"A",{href:!0});var B=Object(n.n)(A);J=Object(n.s)(B,"GNU Affero General Public License"),B.forEach(n.B),v.forEach(n.B),l.forEach(n.B),N=Object(n.r)(O),ce&&ce.l(O),O.forEach(n.B),R=Object(n.r)(o),ne&&ne.l(o),M=Object(n.r)(o),Object(n.o)(V.$$.fragment,o),o.forEach(n.B),b.forEach(n.B),s.forEach(n.B),this.h()},h(){document.title="Sign up - LibreLingo",Object(n.j)(t,"name","description"),Object(n.j)(t,"content",c=e[8]("sign-up.meta.description")),Object(n.j)(p,"class","is-size-2"),Object(n.j)(I,"type","checkbox"),Object(n.j)(I,"name","license"),Object(n.j)(I,"id","license"),Object(n.j)(U,"href","/tos"),Object(n.j)(A,"href","/license"),Object(n.j)(L,"class","checkbox"),Object(n.j)(D,"class","control"),Object(n.j)(P,"class","field"),Object(n.j)(d,"class","container"),Object(n.j)(u,"class","section")},m(c,s){Object(n.g)(document.head,t),Object(n.K)(c,a,s),Object(n.O)(i,c,s),Object(n.K)(c,r,s),Object(n.K)(c,u,s),Object(n.g)(u,d),Object(n.g)(d,f),Object(n.g)(f,p),Object(n.g)(p,h),Object(n.g)(f,g),Object(n.O)(m,f,null),Object(n.g)(f,w),Object(n.O)($,f,null),Object(n.g)(f,_),Object(n.O)(E,f,null),Object(n.g)(f,C),Object(n.O)(k,f,null),Object(n.g)(f,x),Object(n.g)(f,P),Object(n.g)(P,D),Object(n.g)(D,L),Object(n.g)(L,I),I.checked=e[6],Object(n.g)(L,T),Object(n.g)(L,U),Object(n.g)(U,K),Object(n.g)(L,z),Object(n.g)(L,A),Object(n.g)(A,J),Object(n.g)(P,N),ce&&ce.m(P,null),Object(n.g)(f,R),ne&&ne.m(f,null),Object(n.g)(f,M),Object(n.O)(V,f,null),G=!0,W||(Z=[Object(n.M)(I,"change",e[13]),Object(n.M)(f,"submit",Object(n.U)((function(){Object(n.L)(e[7])&&e[7].apply(this,arguments)})))],W=!0)},p(a,[s]){e=a,(!G||256&s&&c!==(c=e[8]("sign-up.meta.description")))&&Object(n.j)(t,"content",c);const b={};8&s&&(b.formStatus=e[3]),!v&&1&s&&(v=!0,b.value=e[0],Object(n.d)(()=>v=!1)),m.$set(b);const o={};8&s&&(o.formStatus=e[3]),!y&&2&s&&(y=!0,o.value=e[1],Object(n.d)(()=>y=!1)),$.$set(o);const i={};8&s&&(i.formStatus=e[3]),!B&&4&s&&(B=!0,i.value=e[2],Object(n.d)(()=>B=!1)),E.$set(i);const r={};8&s&&(r.formStatus=e[3]),!S&&32&s&&(S=!0,r.value=e[5],Object(n.d)(()=>S=!1)),k.$set(r),64&s&&(I.checked=e[6]),null!=e[3].license?ce?ce.p(e,s):(ce=j(e),ce.c(),ce.m(P,null)):ce&&(ce.d(1),ce=null),null!=e[3]._form?ne?ne.p(e,s):(ne=O(e),ne.c(),ne.m(f,M)):ne&&(ne.d(1),ne=null);const l={};16&s&&(l.loading=e[4]),1048576&s&&(l.$$scope={dirty:s,ctx:e}),V.$set(l)},i(e){G||(Object(n.hb)(i.$$.fragment,e),Object(n.hb)(m.$$.fragment,e),Object(n.hb)($.$$.fragment,e),Object(n.hb)(E.$$.fragment,e),Object(n.hb)(k.$$.fragment,e),Object(n.hb)(V.$$.fragment,e),G=!0)},o(e){Object(n.ib)(i.$$.fragment,e),Object(n.ib)(m.$$.fragment,e),Object(n.ib)($.$$.fragment,e),Object(n.ib)(E.$$.fragment,e),Object(n.ib)(k.$$.fragment,e),Object(n.ib)(V.$$.fragment,e),G=!1},d(e){Object(n.B)(t),e&&Object(n.B)(a),Object(n.z)(i,e),e&&Object(n.B)(r),e&&Object(n.B)(u),Object(n.z)(m),Object(n.z)($),Object(n.z)(E),Object(n.z)(k),ce&&ce.d(),ne&&ne.d(),Object(n.z)(V),W=!1,Object(n.W)(Z)}}}const d=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;function f(e,t,c){let s;Object(n.t)(e,i.a,e=>c(8,s=e));var b=this&&this.__awaiter||function(e,t,c,n){return new(c||(c=Promise))((function(a,s){function b(e){try{i(n.next(e))}catch(e){s(e)}}function o(e){try{i(n.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof c?t:new c((function(e){e(t)}))).then(b,o)}i((n=n.apply(e,t||[])).next())}))};let o=!1,j="",O="",l="",u="",f=!1,p={};let h;return e.$$.update=()=>{15&e.$$.dirty&&c(7,h=()=>b(void 0,void 0,void 0,(function*(){var e;c(4,o=!0),c(3,p={}),j?j.length<4&&c(3,p=Object.assign(Object.assign({},p),{username:"Please choose a username that has at least 4 characters"})):c(3,p=Object.assign(Object.assign({},p),{username:"Please choose a username"})),O?d.test(O)||c(3,p=Object.assign(Object.assign({},p),{email:"This does not look like a valid email address"})):c(3,p=Object.assign(Object.assign({},p),{email:"Please tell us your email address"})),l?l.length<6?c(3,p=Object.assign(Object.assign({},p),{password:"Your password is too short. Please choose a password that's at least 5 characters long."})):u?l===u||c(3,p=Object.assign(Object.assign({},p),{password_confirmation:"The passwords don't match"})):c(3,p=Object.assign(Object.assign({},p),{password_confirmation:"Please verify your chosen password by repeating it"})):c(3,p=Object.assign(Object.assign({},p),{password:"Please choose a password"})),f?j.length<4&&c(3,p=Object.assign(Object.assign({},p),{username:"Please choose a username that has at least 4 characters"})):c(3,p=Object.assign(Object.assign({},p),{license:"You have to accept the agreements."})),(()=>{var e,t;(null===(e=window)||void 0===e?void 0:e._test_fake_signup)&&(null===(t=window)||void 0===t?void 0:t._test_user_already_exists)&&c(3,p=Object.assign(Object.assign({},p),{_form:"User already exists. Please choose another username."}))})();const t=0===Object.keys(p).length;!0===Object(r.a)()&&((null===(e=window)||void 0===e?void 0:e._test_fake_signup)?setTimeout((function(){!0===t?(c(4,o=!1),window.location.href="/sign-up-success"):c(4,o=!1)}),500):t?fetch(a.a.database.signUpEndpoint,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:j,email:O,password:l})}).then(e=>e.json()).then(({success:e,error:t})=>{e?(c(4,o=!1),window.location.href="/sign-up-success"):(c(4,o=!1),"invalid-payload"===t.code?c(3,p=t.details):c(3,p={_form:"Server error"}))}):c(4,o=!1))})))},[j,O,l,p,o,u,f,h,s,function(e){j=e,c(0,j)},function(e){O=e,c(1,O)},function(e){l=e,c(2,l)},function(e){u=e,c(5,u)},function(){f=this.checked,c(6,f)}]}class p extends n.b{constructor(e){super(),Object(n.J)(this,e,f,u,n.X,{})}}t.default=p},64:function(e,t){},96:function(e,t,c){"use strict";var n=c(0),a=c(39);function s(e){let t,c,a;return{c(){t=Object(n.C)("input"),this.h()},l(e){t=Object(n.p)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.j)(t,"class","input"),Object(n.j)(t,"type","text"),Object(n.j)(t,"name",e[2]),Object(n.j)(t,"id",e[2]),Object(n.gb)(t,"is-danger",null!=e[5])},m(s,b){Object(n.K)(s,t,b),Object(n.ab)(t,e[0]),c||(a=Object(n.M)(t,"input",e[7]),c=!0)},p(e,c){4&c&&Object(n.j)(t,"name",e[2]),4&c&&Object(n.j)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.ab)(t,e[0]),32&c&&Object(n.gb)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.B)(t),c=!1,a()}}}function b(e){let t,c,a;return{c(){t=Object(n.C)("input"),this.h()},l(e){t=Object(n.p)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.j)(t,"class","input"),Object(n.j)(t,"type","password"),Object(n.j)(t,"name",e[2]),Object(n.j)(t,"id",e[2]),Object(n.gb)(t,"is-danger",null!=e[5])},m(s,b){Object(n.K)(s,t,b),Object(n.ab)(t,e[0]),c||(a=Object(n.M)(t,"input",e[8]),c=!0)},p(e,c){4&c&&Object(n.j)(t,"name",e[2]),4&c&&Object(n.j)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.ab)(t,e[0]),32&c&&Object(n.gb)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.B)(t),c=!1,a()}}}function o(e){let t,c;return{c(){t=Object(n.C)("p"),c=Object(n.fb)(e[5]),this.h()},l(a){t=Object(n.p)(a,"P",{class:!0});var s=Object(n.n)(t);c=Object(n.s)(s,e[5]),s.forEach(n.B),this.h()},h(){Object(n.j)(t,"class","help is-danger")},m(e,a){Object(n.K)(e,t,a),Object(n.g)(t,c)},p(e,t){32&t&&Object(n.Z)(c,e[5])},d(e){e&&Object(n.B)(t)}}}function i(e){let t,c,i,r,j,O,l,u,d,f,p="text"===e[4]&&s(e),h="password"===e[4]&&b(e);u=new a.a({props:{size:"small",icon:e[3],left:!0}});let g=null!=e[5]&&o(e);return{c(){t=Object(n.C)("div"),c=Object(n.C)("label"),i=Object(n.fb)(e[1]),r=Object(n.cb)(),j=Object(n.C)("div"),p&&p.c(),O=Object(n.cb)(),h&&h.c(),l=Object(n.cb)(),Object(n.v)(u.$$.fragment),d=Object(n.cb)(),g&&g.c(),this.h()},l(a){t=Object(n.p)(a,"DIV",{class:!0});var s=Object(n.n)(t);c=Object(n.p)(s,"LABEL",{class:!0,for:!0});var b=Object(n.n)(c);i=Object(n.s)(b,e[1]),b.forEach(n.B),r=Object(n.r)(s),j=Object(n.p)(s,"DIV",{class:!0});var o=Object(n.n)(j);p&&p.l(o),O=Object(n.r)(o),h&&h.l(o),l=Object(n.r)(o),Object(n.o)(u.$$.fragment,o),o.forEach(n.B),d=Object(n.r)(s),g&&g.l(s),s.forEach(n.B),this.h()},h(){Object(n.j)(c,"class","label"),Object(n.j)(c,"for",e[2]),Object(n.j)(j,"class","control has-icons-left"),Object(n.j)(t,"class","field")},m(e,a){Object(n.K)(e,t,a),Object(n.g)(t,c),Object(n.g)(c,i),Object(n.g)(t,r),Object(n.g)(t,j),p&&p.m(j,null),Object(n.g)(j,O),h&&h.m(j,null),Object(n.g)(j,l),Object(n.O)(u,j,null),Object(n.g)(t,d),g&&g.m(t,null),f=!0},p(e,[a]){(!f||2&a)&&Object(n.Z)(i,e[1]),(!f||4&a)&&Object(n.j)(c,"for",e[2]),"text"===e[4]?p?p.p(e,a):(p=s(e),p.c(),p.m(j,O)):p&&(p.d(1),p=null),"password"===e[4]?h?h.p(e,a):(h=b(e),h.c(),h.m(j,l)):h&&(h.d(1),h=null);const r={};8&a&&(r.icon=e[3]),u.$set(r),null!=e[5]?g?g.p(e,a):(g=o(e),g.c(),g.m(t,null)):g&&(g.d(1),g=null)},i(e){f||(Object(n.hb)(u.$$.fragment,e),f=!0)},o(e){Object(n.ib)(u.$$.fragment,e),f=!1},d(e){e&&Object(n.B)(t),p&&p.d(),h&&h.d(),Object(n.z)(u),g&&g.d()}}}function r(e,t,c){let{name:n}=t,{id:a}=t,{icon:s}=t,{type:b="text"}=t,{value:o}=t,{formStatus:i={}}=t,r=null;return e.$$set=e=>{"name"in e&&c(1,n=e.name),"id"in e&&c(2,a=e.id),"icon"in e&&c(3,s=e.icon),"type"in e&&c(4,b=e.type),"value"in e&&c(0,o=e.value),"formStatus"in e&&c(6,i=e.formStatus)},e.$$.update=()=>{68&e.$$.dirty&&c(5,r=i[a])},[o,n,a,s,b,r,i,function(){o=this.value,c(0,o)},function(){o=this.value,c(0,o)}]}class j extends n.b{constructor(e){super(),Object(n.J)(this,e,r,i,n.X,{name:1,id:2,icon:3,type:4,value:0,formStatus:6})}}t.a=j}}]);