const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ce();const T={},ue=(e,t)=>e===t,ae=Symbol("solid-track"),q={equals:ue};let he=ne;const C={},$=1,H=2,Z={owned:null,cleanups:null,context:null,owner:null};var d=null;let I=null,a=null,L=null,p=null,A=null,K=0;function j(e,t){const n=a,s=d,i=e.length===0,o=i?Z:{owned:null,cleanups:null,context:null,owner:t||s},f=i?e:()=>e(()=>V(o));d=o,a=null;try{return Q(f,!0)}finally{a=n,d=s}}function de(e,t){t=t?Object.assign({},q,t):q;const n={value:e,observers:null,observerSlots:null,pending:C,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==C?n.pending:n.value)),W(n,i));return[z.bind(n),s]}function M(e,t,n){const s=ee(e,t,!1,$);U(s)}function pe(e,t,n){n=n?Object.assign({},q,n):q;const s=ee(e,t,!0,0);return s.pending=C,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,U(s),z.bind(s)}function ge(e){if(L)return e();let t;const n=L=[];try{t=e()}finally{L=null}return Q(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==C){const o=i.pending;i.pending=C,W(i,o)}}},!1),t}function J(e){let t,n=a;return a=null,t=e(),a=n,t}function me(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function z(){const e=I;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===$||e?U(this):F(this),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function W(e,t,n){if(L)return e.pending===C&&L.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Q(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&I.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?p.push(o):A.push(o),o.observers&&se(o)),s||(o.state=$)}if(p.length>1e6)throw p=[],new Error},!1),t}function U(e){if(!e.fn)return;V(e);const t=d,n=a,s=K;a=d=e,be(e,e.value,s),a=n,d=t}function be(e,t,n){let s;try{s=e.fn(t)}catch(i){ie(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?W(e,s):e.value=s,e.updatedAt=n)}function ee(e,t,n,s=$,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==Z&&(d.owned?d.owned.push(o):d.owned=[o]),o}function te(e){const t=I;if(e.state===0||t)return;if(e.state===H||t)return F(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===$||t)U(e);else if(e.state===H||t){const i=p;p=null,F(e,n[0]),p=i}}function Q(e,t){if(p)return e();let n=!1;t||(p=[]),A?n=!0:A=[],K++;try{const s=e();return ye(n),s}catch(s){p||(A=null),ie(s)}}function ye(e){p&&(ne(p),p=null),!e&&(A.length?ge(()=>{he(A),A=null}):A=null)}function ne(e){for(let t=0;t<e.length;t++)te(e[t])}function F(e,t){const n=I;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===$||n?i!==t&&te(i):(i.state===H||n)&&F(i,t))}}function se(e){const t=I;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?p.push(s):A.push(s),s.observers&&se(s))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),f=n.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,n.observerSlots[s]=f)}}if(e.owned){for(t=0;t<e.owned.length;t++)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ie(e){throw e}const we=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function Ae(e,t,n={}){let s=[],i=[],o=[],f=0,l=t.length>1?[]:null;return me(()=>X(o)),()=>{let u=e()||[],c,r;return u[ae],J(()=>{let h=u.length,m,v,E,O,P,b,y,w,S;if(h===0)f!==0&&(X(o),o=[],s=[],i=[],f=0,l&&(l=[])),n.fallback&&(s=[we],i[0]=j(fe=>(o[0]=fe,n.fallback())),f=1);else if(f===0){for(i=new Array(h),r=0;r<h;r++)s[r]=u[r],i[r]=j(g);f=h}else{for(E=new Array(h),O=new Array(h),l&&(P=new Array(h)),b=0,y=Math.min(f,h);b<y&&s[b]===u[b];b++);for(y=f-1,w=h-1;y>=b&&w>=b&&s[y]===u[w];y--,w--)E[w]=i[y],O[w]=o[y],l&&(P[w]=l[y]);for(m=new Map,v=new Array(w+1),r=w;r>=b;r--)S=u[r],c=m.get(S),v[r]=c===void 0?-1:c,m.set(S,r);for(c=b;c<=y;c++)S=s[c],r=m.get(S),r!==void 0&&r!==-1?(E[r]=i[c],O[r]=o[c],l&&(P[r]=l[c]),r=v[r],m.set(S,r)):o[c]();for(r=b;r<h;r++)r in E?(i[r]=E[r],o[r]=O[r],l&&(l[r]=P[r],l[r](r))):i[r]=j(g);i=i.slice(0,f=h),s=u.slice(0)}return i});function g(h){if(o[r]=h,l){const[m,v]=de(r);return l[r]=v,t(u[r],m)}return t(u[r])}}}function k(e,t){return J(()=>e(t||{}))}function le(e){const t="fallback"in e&&{fallback:()=>e.fallback};return pe(Ae(()=>e.each,e.children,t||void 0))}function _e(e,t,n){let s=n.length,i=t.length,o=s,f=0,l=0,u=t[i-1].nextSibling,c=null;for(;f<i||l<o;){if(t[f]===n[l]){f++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===f){const r=o<s?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],r)}else if(o===l)for(;f<i;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[o-1]&&n[l]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[l++],t[f++].nextSibling),e.insertBefore(n[--o],r),t[i]=n[o]}else{if(!c){c=new Map;let g=l;for(;g<o;)c.set(n[g],g++)}const r=c.get(t[f]);if(r!=null)if(l<r&&r<o){let g=f,h=1,m;for(;++g<i&&g<o&&!((m=c.get(t[g]))==null||m!==r+h);)h++;if(h>r-l){const v=t[f];for(;l<r;)e.insertBefore(n[l++],v)}else e.replaceChild(n[l++],t[f++])}else f++;else t[f++].remove()}}}function ve(e,t,n){let s;return j(i=>{s=i,t===document?e():_(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function N(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function oe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function B(e,t){t==null?e.removeAttribute("class"):e.className=t}function _(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);M(i=>R(e,t(),i,n),s)}function R(e,t,n,s,i){for(T.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(T.context)return n;if(o==="number"&&(t=t.toString()),f){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=x(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(T.context)return n;n=x(e,n,s)}else{if(o==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=R(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(G(l,t,n,i))return M(()=>n=R(e,l,n,s,!0)),()=>n;if(T.context){for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=x(e,n,s),f)return n}else u?n.length===0?Y(e,l,s):_e(e,n,l):(n&&x(e),Y(e,l));n=l}else if(t instanceof Node){if(T.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=x(e,n,s,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function G(e,t,n,s){let i=!1;for(let o=0,f=t.length;o<f;o++){let l=t[o],u=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=G(e,l,u)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=G(e,Array.isArray(l)?l:[l],u)||i}else e.push(l),i=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function Y(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function x(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let f=t.length-1;f>=0;f--){const l=t[f];if(i!==l){const u=l.parentNode===e;!o&&!f?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const Se="/assets/logo.5eb55fd0.png",xe="_App_1pb60_1",Ce="_header_1pb60_9",$e="_title_1pb60_14",Ne="_link_1pb60_36",D={App:xe,header:Ce,title:$e,link:Ne,"logo-spin":"_logo-spin_1pb60_1"},Ee=[{name:"Minecraft Add-ons",description:"Lots of small-scale bedrock addons",href:"https://mcpedl.com/user/hatchibombotar/"},{name:"Hoax Shader",description:"Minecraft 1.16+ texture 'shaders'",href:"https://mcpedl.com/hoax-shader/"},{name:"Minicrafter Maker",description:"2D character creator",href:"https://hatchibombotar.com/minicrafter-maker/"},{name:"Regolith Filters",description:"Work on regolith filters (addon modifying scripts)",href:"https://github.com/Hatchibombotar/useful-regolith-filters"},{name:"Other Projects",description:"My other projects on Github",href:"https://github.com/Hatchibombotar/"}],Te=[{name:"JS/HTML/CSS",level:"Advanced"},{name:"SolidJS",level:"Intermediate"},{name:"Python",level:"Intermediate"},{name:"Minecraft Addons",level:"Expert"}],Le=N('<div><header><div><h1>Hatchibombotar</h1> <img alt="My Logo"></div><p>Developer</p></header><div><h2>Contact</h2><p>Discord - hatchibombotar#3794</p><p>Email - <a href="mailto:hatchibombotar.mc@gmail.com">hatchibombotar.mc@gmail.com</a></p></div></div>'),Me=N("<h2>Projects</h2>"),re=N("<p></p>"),ke=N("<p><a></a><a> - </a></p>"),Ie=N("<h2>Skills</h2>"),Oe=N("<p><a> - </a></p>");function Pe(){return(()=>{const e=Le.cloneNode(!0),t=e.firstChild,n=t.firstChild,s=n.firstChild,i=s.nextSibling,o=i.nextSibling,f=t.nextSibling;return oe(o,"src",Se),_(e,k(Be,{}),f),_(e,k(De,{}),f),M(l=>{const u=D.App,c=D.header,r=D.title,g=D.logo;return u!==l._v$&&B(e,l._v$=u),c!==l._v$2&&B(t,l._v$2=c),r!==l._v$3&&B(n,l._v$3=r),g!==l._v$4&&B(o,l._v$4=g),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}function Be(){return[Me.cloneNode(!0),(()=>{const e=re.cloneNode(!0);return _(e,k(le,{each:Ee,children:t=>(()=>{const n=ke.cloneNode(!0),s=n.firstChild;return s.nextSibling,_(s,()=>t.name),_(n,()=>t.description,null),M(()=>oe(s,"href",t.href)),n})()})),e})()]}function De(){return[Ie.cloneNode(!0),(()=>{const e=re.cloneNode(!0);return _(e,k(le,{each:Te,children:t=>(()=>{const n=Oe.cloneNode(!0),s=n.firstChild;return _(n,()=>t.name,s),_(n,()=>t.level,null),n})()})),e})()]}ve(()=>k(Pe,{}),document.getElementById("root"));
