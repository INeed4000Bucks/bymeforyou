(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const p={},J=(e,n)=>e===n,C={equals:J};let Y=G;const w=1,E=2,j={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,f=null,u=null,y=null,P=0;function Z(e,n){const t=f,s=h,l=e.length===0,i=l?j:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=l?e:()=>e(()=>D(()=>T(i)));h=i,f=null;try{return S(r,!0)}finally{f=t,h=s}}function F(e,n){n=n?Object.assign({},C,n):C;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),H(t,l));return[I.bind(t),s]}function O(e,n,t){const s=R(e,n,!1,w);$(s)}function k(e,n,t){t=t?Object.assign({},C,t):C;const s=R(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,$(s),I.bind(s)}function D(e){if(f===null)return e();const n=f;f=null;try{return e()}finally{f=n}}function I(){const e=x;if(this.sources&&(this.state||e))if(this.state===w||e)$(this);else{const n=u;u=null,S(()=>v(this),!1),u=n}if(f){const n=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(n)):(f.sources=[this],f.sourceSlots=[n]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function H(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&S(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=x&&x.running;r&&x.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?u.push(i):y.push(i),i.observers&&K(i)),r||(i.state=w)}if(u.length>1e6)throw u=[],new Error},!1)),n}function $(e){if(!e.fn)return;T(e);const n=h,t=f,s=P;f=h=e,z(e,e.value,s),f=t,h=n}function z(e,n,t){let s;try{s=e.fn(n)}catch(l){e.pure&&(e.state=w,e.owned&&e.owned.forEach(T),e.owned=null),Q(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?H(e,s):e.value=s,e.updatedAt=t)}function R(e,n,t,s=w,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==j&&(h.owned?h.owned.push(i):h.owned=[i]),i}function V(e){const n=x;if(e.state===0||n)return;if(e.state===E||n)return v(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w||n)$(e);else if(e.state===E||n){const l=u;u=null,S(()=>v(e,t[0]),!1),u=l}}function S(e,n){if(u)return e();let t=!1;n||(u=[]),y?t=!0:y=[],P++;try{const s=e();return ee(t),s}catch(s){t||(y=null),u=null,Q(s)}}function ee(e){if(u&&(G(u),u=null),e)return;const n=y;y=null,n.length&&S(()=>Y(n),!1)}function G(e){for(let n=0;n<e.length;n++)V(e[n])}function v(e,n){const t=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===w||t?l!==n&&V(l):(l.state===E||t)&&v(l,n))}}function K(e){const n=x;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=E,s.pure?u.push(s):y.push(s),s.observers&&K(s))}}function T(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),r=t.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)T(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function te(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Q(e){throw e=te(e),e}function L(e,n){return D(()=>e(n||{}))}function ne(e,n,t){let s=t.length,l=n.length,i=s,r=0,o=0,c=n[l-1].nextSibling,a=null;for(;r<l||o<i;){if(n[r]===t[o]){r++,o++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===r){const d=i<s?o?t[o-1].nextSibling:t[i-o]:c;for(;o<i;)e.insertBefore(t[o++],d)}else if(i===o)for(;r<l;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[i-1]&&t[o]===n[l-1]){const d=n[--l].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--i],d),n[l]=t[i]}else{if(!a){a=new Map;let g=o;for(;g<i;)a.set(t[g],g++)}const d=a.get(n[r]);if(d!=null)if(o<d&&d<i){let g=r,_=1,q;for(;++g<l&&g<i&&!((q=a.get(n[g]))==null||q!==d+_);)_++;if(_>d-o){const X=n[r];for(;o<d;)e.insertBefore(t[o++],X)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const M="_$DX_DELEGATE";function se(e,n,t,s={}){let l;return Z(i=>{l=i,n===document?e():m(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function N(e,n,t){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return t&&(l=l.firstChild),l}function W(e,n=window.document){const t=n[M]||(n[M]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,le))}}function m(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return A(e,n,s,t);O(l=>A(e,n(),l,t),s)}function le(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let l=s.nextSibling;s.remove(),s=l}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function A(e,n,t,s,l){for(p.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(p.context)return t;if(i==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=b(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(p.context)return t;t=b(e,t,s)}else{if(i==="function")return O(()=>{let o=n();for(;typeof o=="function";)o=o();t=A(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(B(o,n,t,l))return O(()=>t=A(e,o,t,s,!0)),()=>t;if(p.context){if(!o.length)return t;for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o}if(o.length===0){if(t=b(e,t,s),r)return t}else c?t.length===0?U(e,o,s):ne(e,t,o):(t&&b(e),U(e,o));t=o}else if(n instanceof Node){if(p.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=b(e,t,s,n);b(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function B(e,n,t,s){let l=!1;for(let i=0,r=n.length;i<r;i++){let o=n[i],c=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=B(e,o,c)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=B(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||l}else e.push(o),l=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return l}function U(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function b(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(l!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(l,o):e.insertBefore(l,t):c&&o.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}const ie=N('<div class="flex bg-stripes-pink bg-7 rounded-xl"><button class="p-5 bg-fuchsia-500 shadow-lg rounded-xl mx-auto min-w-[115px] h-[68px] text-xl"></button></div>');function oe(){const[e,n]=F(0);return(()=>{const t=ie.cloneNode(!0),s=t.firstChild;return s.$$click=()=>{n(e()+1),ae(e()),console.log(e())},m(s,(()=>{const l=k(()=>e()===0);return()=>l()?"Hit Me":e()})()),t})()}W(["click"]);const re=N('<input type="text" class="mt-5 bg-fadedpink rounded-lg border-fuchsia-500 h-[64px] w-full text-3xl text-slate-100">'),fe=N('<h1 class="text-slate-100 text-3xl text-center mt-5"></h1>');function ue(){const[e,n]=F("");return[(()=>{const t=re.cloneNode(!0);return t.$$input=s=>n(s.currentTarget.value),t})(),(()=>{const t=fe.cloneNode(!0);return m(t,e),t})()]}W(["input"]);const ce=N('<div class="max-w-[769px] mx-auto"><header><div class="flex justify-between"><p class="font-extrabold text-4xl pt-3 pb-5 text-slate-100">By <code>Tyun</code>.</p><p class="font-extrabold text-4xl pt-3 pb-5 text-slate-100">For <code>you</code>.</p></div></header><p class="text-white text-2xl text-center">-</p></div>');function ae(e){return e/3==Math.floor(e/3)?(console.log(!0),!0):(console.log(!1),!1)}function he(){return(()=>{const e=ce.cloneNode(!0),n=e.firstChild;return n.firstChild,m(n,L(oe,{}),null),m(n,L(ue,{}),null),e})()}const de=document.getElementById("root");se(()=>L(he,{}),de);
