import{Aa as ae,Ga as le,Ka as D,M as te,U as ne,V as re,c as F,ca as oe,da as ie,f as Q,fa as R,g as I,ia as c,j as J,ka as f,l as X,la as p,ma as se,mb as de,mc as U,pa as ce,qb as k,rc as w,s as ee,va as ue}from"./chunk-XWIE6NT6.js";import{a as m,b as x}from"./chunk-YEG3NED5.js";function M(e,t){let r=!t?.manualCleanup;r&&!t?.injector&&ae(M);let n=r?t?.injector?.get(D)??p(D):null,o;t?.requireSync?o=k({kind:0}):o=k({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>o.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;o.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),w(()=>{let s=o();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new ie(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var P={};function Wt(e,t){if(P[e]=(P[e]||0)+1,typeof t=="function")return _(e,(...n)=>x(m({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return _(e,()=>({type:e}));case"props":return _(e,n=>x(m({},n),{type:e}));default:throw new Error("Unexpected config.")}}function Yt(){return{_as:"props",_p:void 0}}function _(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var Ie="@ngrx/store/init",g=(()=>{let t=class t extends I{constructor(){super({type:Ie})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),Pe=[g],we=new c("@ngrx/store Internal Root Guard"),fe=new c("@ngrx/store Internal Initial State"),q=new c("@ngrx/store Initial State"),je=new c("@ngrx/store Reducer Factory"),pe=new c("@ngrx/store Internal Reducer Factory Provider"),Ae=new c("@ngrx/store Initial Reducers"),N=new c("@ngrx/store Internal Initial Reducers"),Qt=new c("@ngrx/store Store Features"),ye=new c("@ngrx/store Internal Store Reducers"),Jt=new c("@ngrx/store Internal Feature Reducers"),Xt=new c("@ngrx/store Internal Feature Configs"),en=new c("@ngrx/store Internal Store Features"),tn=new c("@ngrx/store Internal Feature Reducers Token"),nn=new c("@ngrx/store Feature Reducers"),he=new c("@ngrx/store User Provided Meta Reducers"),j=new c("@ngrx/store Meta Reducers"),me=new c("@ngrx/store Internal Resolved Meta Reducers"),Re=new c("@ngrx/store User Runtime Checks Config"),ge=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),Ce=new c("@ngrx/store Check if Action types are unique"),ve=new c("@ngrx/store Root Store Provider"),rn=new c("@ngrx/store Feature State Provider");function ze(e,t={}){let r=Object.keys(e),n={};for(let i=0;i<r.length;i++){let s=r[i];typeof e[s]=="function"&&(n[s]=e[s])}let o=Object.keys(n);return function(s,d){s=s===void 0?t:s;let l=!1,y={};for(let u=0;u<o.length;u++){let h=o[u],T=n[h],W=s[h],Y=T(W,d);y[h]=Y,l=l||Y!==W}return l?y:s}}function Ve(e,t){return Object.keys(e).filter(r=>r!==t).reduce((r,n)=>Object.assign(r,{[n]:e[n]}),{})}function Oe(...e){return function(t){if(e.length===0)return t;let r=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),r(t))}}function Te(e,t){return Array.isArray(t)&&t.length>0&&(e=Oe.apply(null,[...t,e])),(r,n)=>{let o=e(r);return(i,s)=>(i=i===void 0?n:i,o(i,s))}}function $e(e){let t=Array.isArray(e)&&e.length>0?Oe(...e):r=>r;return(r,n)=>(r=t(r),(o,i)=>(o=o===void 0?n:o,r(o,i)))}var S=class extends F{},A=class extends g{},Le="@ngrx/store/update-reducers",z=(()=>{let t=class t extends I{get currentReducers(){return this.reducers}constructor(n,o,i,s){super(s(i,o)),this.dispatcher=n,this.initialState=o,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let o=n.reduce((i,{reducers:s,reducerFactory:d,metaReducers:l,initialState:y,key:u})=>{let h=typeof s=="function"?$e(l)(s,y):Te(d,l)(s,y);return i[u]=h,i},{});this.addReducers(o)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(o=>o.key))}addReducer(n,o){this.addReducers({[n]:o})}addReducers(n){this.reducers=m(m({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(o=>{this.reducers=Ve(this.reducers,o)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Le,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(o){return new(o||t)(f(A),f(q),f(Ae),f(je))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),qe=[z,{provide:S,useExisting:z},{provide:A,useExisting:g}],K=(()=>{let t=class t extends Q{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=le(t)))(i||t)}})(),t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),Ke=[K],C=class extends F{},Ee=(()=>{let t=class t extends I{constructor(n,o,i,s){super(s);let l=n.pipe(X(J)).pipe(oe(o)),y={state:s},u=l.pipe(re(Ge,y));this.stateSubscription=u.subscribe(({state:h,action:T})=>{this.next(h),i.next(T)}),this.state=M(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=Ie,t.\u0275fac=function(o){return new(o||t)(f(g),f(S),f(K),f(q))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})();function Ge(e={state:void 0},[t,r]){let{state:n}=e;return{state:r(n,t),action:t}}var Be=[Ee,{provide:C,useExisting:Ee}],G=(()=>{let t=class t extends F{constructor(n,o,i){super(),this.actionsObserver=o,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...o){return He.call(null,n,...o)(this)}selectSignal(n,o){return w(()=>n(this.state()),o)}lift(n){let o=new t(this,this.actionsObserver,this.reducerManager);return o.operator=n,o}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,o){this.reducerManager.addReducer(n,o)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(o){return new(o||t)(f(C),f(g),f(z))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),Ze=[G];function He(e,t,...r){return function(o){let i;if(typeof e=="string"){let s=[t,...r].filter(Boolean);i=o.pipe(ne(e,...s))}else if(typeof e=="function")i=o.pipe(ee(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(te())}}var B="https://ngrx.io/guide/store/configuration/runtime-checks";function Se(e){return e===void 0}function be(e){return e===null}function De(e){return Array.isArray(e)}function We(e){return typeof e=="string"}function Ye(e){return typeof e=="boolean"}function Qe(e){return typeof e=="number"}function ke(e){return typeof e=="object"&&e!==null}function Je(e){return ke(e)&&!De(e)}function Xe(e){if(!Je(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function V(e){return typeof e=="function"}function et(e){return V(e)&&e.hasOwnProperty("\u0275cmp")}function tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var nt=!1;function rt(){return nt}function xe(e,t){return e===t}function ot(e,t,r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!0;return!1}function Ue(e,t=xe,r=xe){let n=null,o=null,i;function s(){n=null,o=null}function d(u=void 0){i={result:u}}function l(){i=void 0}function y(){if(i!==void 0)return i.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!ot(arguments,n,t))return o;let u=e.apply(null,arguments);return n=arguments,r(o,u)?o:(o=u,u)}return{memoized:y,reset:s,setResult:d,clearResult:l}}function a(...e){return st(Ue)(...e)}function it(e,t,r,n){if(r===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let o=t.map(i=>i(e,r));return n.memoized.apply(null,[...o,r])}function st(e,t={stateFn:it}){return function(...r){let n=r;if(Array.isArray(n[0])){let[u,...h]=n;n=[...u,...h]}else n.length===1&&ct(n[0])&&(n=ut(n[0]));let o=n.slice(0,n.length-1),i=n[n.length-1],s=o.filter(u=>u.release&&typeof u.release=="function"),d=e(function(...u){return i.apply(null,u)}),l=Ue(function(u,h){return t.stateFn.apply(null,[u,o,h,d])});function y(){l.reset(),d.reset(),s.forEach(u=>u.release())}return Object.assign(l.memoized,{release:y,projector:d.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function O(e){return a(t=>{let r=t[e];return!rt()&&U()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),r},t=>t)}function ct(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function ut(e){let t=Object.values(e),r=Object.keys(e),n=(...o)=>r.reduce((i,s,d)=>x(m({},i),{[s]:o[d]}),{});return[...t,n]}function at(e){return e instanceof c?p(e):e}function lt(e){return typeof e=="function"?e():e}function dt(e,t){return e.concat(t)}function ft(){if(p(G,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function pt(e,t){return function(r,n){let o=t.action(n)?$(n):n,i=e(r,o);return t.state()?$(i):i}}function $(e){Object.freeze(e);let t=V(e);return Object.getOwnPropertyNames(e).forEach(r=>{if(!r.startsWith("\u0275")&&tt(e,r)&&(!t||r!=="caller"&&r!=="callee"&&r!=="arguments")){let n=e[r];(ke(n)||V(n))&&!Object.isFrozen(n)&&$(n)}}),e}function yt(e,t){return function(r,n){if(t.action(n)){let i=L(n);Fe(i,"action")}let o=e(r,n);if(t.state()){let i=L(o);Fe(i,"state")}return o}}function L(e,t=[]){return(Se(e)||be(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;let i=e[o];return et(i)?n:Se(i)||be(i)||Qe(i)||Ye(i)||We(i)||De(i)?!1:Xe(i)?L(i,[...t,o]):{path:[...t,o],value:i}},!1)}function Fe(e,t){if(e===!1)return;let r=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${r}". ${B}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=r,n}function ht(e,t){return function(r,n){if(t.action(n)&&!de.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${B}#strictactionwithinngzone`);return e(r,n)}}function mt(e){return U()?m({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Rt({strictActionSerializability:e,strictStateSerializability:t}){return r=>e||t?yt(r,{action:n=>e&&!Z(n),state:()=>t}):r}function gt({strictActionImmutability:e,strictStateImmutability:t}){return r=>e||t?pt(r,{action:n=>e&&!Z(n),state:()=>t}):r}function Z(e){return e.type.startsWith("@ngrx")}function vt({strictActionWithinNgZone:e}){return t=>e?ht(t,{action:r=>e&&!Z(r)}):t}function Et(e){return[{provide:ge,useValue:e},{provide:Re,useFactory:bt,deps:[ge]},{provide:E,deps:[Re],useFactory:mt},{provide:j,multi:!0,deps:[E],useFactory:gt},{provide:j,multi:!0,deps:[E],useFactory:Rt},{provide:j,multi:!0,deps:[E],useFactory:vt}]}function St(){return[{provide:Ce,multi:!0,deps:[E],useFactory:xt}]}function bt(e){return e}function xt(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(P).filter(([,r])=>r>1).map(([r])=>r);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(r=>`"${r}"`).join(", ")}. ${B}#strictactiontypeuniqueness`)}function Ft(e={},t={}){return[{provide:we,useFactory:ft},{provide:fe,useValue:t.initialState},{provide:q,useFactory:lt,deps:[fe]},{provide:N,useValue:e},{provide:ye,useExisting:e instanceof c?e:N},{provide:Ae,deps:[N,[new se(ye)]],useFactory:at},{provide:he,useValue:t.metaReducers?t.metaReducers:[]},{provide:me,deps:[j,he],useFactory:dt},{provide:pe,useValue:t.reducerFactory?t.reducerFactory:ze},{provide:je,deps:[pe,me],useFactory:Te},Pe,qe,Ke,Be,Ze,Et(t.runtimeChecks),St()]}function It(){p(g),p(S),p(K),p(G),p(we,{optional:!0}),p(Ce,{optional:!0})}var wt=[{provide:ve,useFactory:It},{provide:ce,multi:!0,useFactory(){return()=>p(ve)}}];function on(e,t){return ue([...Ft(e,t),wt])}function sn(...e){let t=e.pop(),r=e.map(n=>n.type);return{reducer:t,types:r}}function cn(e,...t){let r=new Map;for(let n of t)for(let o of n.types){let i=r.get(o);if(i){let s=(d,l)=>n.reducer(i(d,l),l);r.set(o,s)}else r.set(o,n.reducer)}return function(n=e,o){let i=r.get(o.type);return i?i(n,o):n}}var jt="language",Me=O(jt),H=a(Me,e=>e.language),dn=a(Me,e=>e.translation);var _e=[".",",",")","(","-","0","1","2","3","3","4","5","6","7","8","9"];var At="library",b=O(At),Ct=a(b,e=>e.selected),v=a(b,Ct,(e,t)=>e.articles[t]),Rn=a(v,e=>e?.title),gn=a(v,e=>e?.description),vn=a(v,e=>e?.splitContent),En=a(v,e=>e?.splitContent),Sn=a(v,e=>e?.guesses),bn=a(v,e=>e?.unmasked),xn=a(b,e=>e.loading),Fn=a(b,H,(e,t)=>Object.values(e.articles).filter(r=>r.lang===t).map(r=>[r.id,r.title])),Ne=a(b,H,(e,t)=>Object.values(e.articles).filter(r=>r.lang===t)),Ot=a(Ne,e=>Array.from(new Set(e.map(t=>t.guesses).flat()))),Tt=a(Ne,e=>Array.from(new Set(e.map(t=>t.splitContent).flat().filter(t=>!_e.includes(t))))),In=a(Ot,Tt,(e,t)=>t.filter(r=>!e.map(n=>n.toLowerCase()).includes(r.toLowerCase())));export{M as a,Wt as b,Yt as c,Ie as d,g as e,q as f,ve as g,rn as h,S as i,A as j,Le as k,K as l,C as m,G as n,He as o,on as p,sn as q,cn as r,jt as s,H as t,dn as u,_e as v,At as w,b as x,Ct as y,v as z,En as A,Sn as B,xn as C,Ne as D};
