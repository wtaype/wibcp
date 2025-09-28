(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))m(w);new MutationObserver(w=>{for(const C of w)if(C.type==="childList")for(const I of C.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&m(I)}).observe(document,{childList:!0,subtree:!0});function p(w){const C={};return w.integrity&&(C.integrity=w.integrity),w.referrerPolicy&&(C.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?C.credentials="include":w.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function m(w){if(w.ep)return;w.ep=!0;const C=p(w);fetch(w.href,C)}})();function Wn(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var yt={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Fn=yt.exports,Ni;function _n(){return Ni||(Ni=1,(function(c){(function(l,p){c.exports=l.document?p(l,!0):function(m){if(!m.document)throw new Error("jQuery requires a window with a document");return p(m)}})(typeof window<"u"?window:Fn,function(l,p){var m=[],w=Object.getPrototypeOf,C=m.slice,I=m.flat?function(e){return m.flat.call(e)}:function(e){return m.concat.apply([],e)},W=m.push,J=m.indexOf,we={},bt=we.toString,ie=we.hasOwnProperty,Le=ie.toString,$i=Le.call(Object),j={},z=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},Re=function(t){return t!=null&&t===t.window},O=l.document,Pi={type:!0,src:!0,nonce:!0,noModule:!0};function Ft(e,t,i){i=i||O;var n,o,s=i.createElement("script");if(s.text=e,t)for(n in Pi)o=t[n]||t.getAttribute&&t.getAttribute(n),o&&s.setAttribute(n,o);i.head.appendChild(s).parentNode.removeChild(s)}function Oe(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?we[bt.call(e)]||"object":typeof e}var _t="3.7.1",Ui=/HTML$/i,r=function(e,t){return new r.fn.init(e,t)};r.fn=r.prototype={jquery:_t,constructor:r,length:0,toArray:function(){return C.call(this)},get:function(e){return e==null?C.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=r.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return r.each(this,e)},map:function(e){return this.pushStack(r.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(C.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(r.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(r.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,i=+e+(e<0?t:0);return this.pushStack(i>=0&&i<t?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:W,sort:m.sort,splice:m.splice},r.extend=r.fn.extend=function(){var e,t,i,n,o,s,a=arguments[0]||{},f=1,d=arguments.length,g=!1;for(typeof a=="boolean"&&(g=a,a=arguments[f]||{},f++),typeof a!="object"&&!z(a)&&(a={}),f===d&&(a=this,f--);f<d;f++)if((e=arguments[f])!=null)for(t in e)n=e[t],!(t==="__proto__"||a===n)&&(g&&n&&(r.isPlainObject(n)||(o=Array.isArray(n)))?(i=a[t],o&&!Array.isArray(i)?s=[]:!o&&!r.isPlainObject(i)?s={}:s=i,o=!1,a[t]=r.extend(g,s,n)):n!==void 0&&(a[t]=n));return a},r.extend({expando:"jQuery"+(_t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,i;return!e||bt.call(e)!=="[object Object]"?!1:(t=w(e),t?(i=ie.call(t,"constructor")&&t.constructor,typeof i=="function"&&Le.call(i)===$i):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,i){Ft(e,{nonce:t&&t.nonce},i)},each:function(e,t){var i,n=0;if(vt(e))for(i=e.length;n<i&&t.call(e[n],n,e[n])!==!1;n++);else for(n in e)if(t.call(e[n],n,e[n])===!1)break;return e},text:function(e){var t,i="",n=0,o=e.nodeType;if(!o)for(;t=e[n++];)i+=r.text(t);return o===1||o===11?e.textContent:o===9?e.documentElement.textContent:o===3||o===4?e.nodeValue:i},makeArray:function(e,t){var i=t||[];return e!=null&&(vt(Object(e))?r.merge(i,typeof e=="string"?[e]:e):W.call(i,e)),i},inArray:function(e,t,i){return t==null?-1:J.call(t,e,i)},isXMLDoc:function(e){var t=e&&e.namespaceURI,i=e&&(e.ownerDocument||e).documentElement;return!Ui.test(t||i&&i.nodeName||"HTML")},merge:function(e,t){for(var i=+t.length,n=0,o=e.length;n<i;n++)e[o++]=t[n];return e.length=o,e},grep:function(e,t,i){for(var n,o=[],s=0,a=e.length,f=!i;s<a;s++)n=!t(e[s],s),n!==f&&o.push(e[s]);return o},map:function(e,t,i){var n,o,s=0,a=[];if(vt(e))for(n=e.length;s<n;s++)o=t(e[s],s,i),o!=null&&a.push(o);else for(s in e)o=t(e[s],s,i),o!=null&&a.push(o);return I(a)},guid:1,support:j}),typeof Symbol=="function"&&(r.fn[Symbol.iterator]=m[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){we["[object "+t+"]"]=t.toLowerCase()});function vt(e){var t=!!e&&"length"in e&&e.length,i=Oe(e);return z(e)||Re(e)?!1:i==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function Y(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var Ri=m.pop,Oi=m.sort,ji=m.splice,X="[\\x20\\t\\r\\n\\f]",Xe=new RegExp("^"+X+"+|((?:^|[^\\\\])(?:\\\\.)*)"+X+"+$","g");r.contains=function(e,t){var i=t&&t.parentNode;return e===i||!!(i&&i.nodeType===1&&(e.contains?e.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))};var zi=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Hi(e,t){return t?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}r.escapeSelector=function(e){return(e+"").replace(zi,Hi)};var xe=O,wt=W;(function(){var e,t,i,n,o,s=wt,a,f,d,g,x,k=r.expando,b=0,D=0,U=pt(),_=pt(),H=pt(),ee=pt(),Z=function(u,h){return u===h&&(o=!0),0},ge="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",me="(?:\\\\[\\da-fA-F]{1,6}"+X+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+X+"*("+me+")(?:"+X+"*([*^$|!~]?=)"+X+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+me+"))|)"+X+"*\\]",Pe=":("+me+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+F+")*)|.*)\\)|)",q=new RegExp(X+"+","g"),Q=new RegExp("^"+X+"*,"+X+"*"),nt=new RegExp("^"+X+"*([>+~]|"+X+")"+X+"*"),Ot=new RegExp(X+"|>"),ye=new RegExp(Pe),rt=new RegExp("^"+me+"$"),be={ID:new RegExp("^#("+me+")"),CLASS:new RegExp("^\\.("+me+")"),TAG:new RegExp("^("+me+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+Pe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+X+"*(even|odd|(([+-]|)(\\d*)n|)"+X+"*(?:([+-]|)"+X+"*(\\d+)|))"+X+"*\\)|)","i"),bool:new RegExp("^(?:"+ge+")$","i"),needsContext:new RegExp("^"+X+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+X+"*((?:-\\d)?\\d*)"+X+"*\\)|)(?=[^-]|$)","i")},De=/^(?:input|select|textarea|button)$/i,Ae=/^h\d$/i,ce=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,jt=/[+~]/,Te=new RegExp("\\\\[\\da-fA-F]{1,6}"+X+"?|\\\\([^\\r\\n\\f])","g"),ke=function(u,h){var y="0x"+u.slice(1)-65536;return h||(y<0?String.fromCharCode(y+65536):String.fromCharCode(y>>10|55296,y&1023|56320))},Rn=function(){Ie()},On=gt(function(u){return u.disabled===!0&&Y(u,"fieldset")},{dir:"parentNode",next:"legend"});function jn(){try{return a.activeElement}catch{}}try{s.apply(m=C.call(xe.childNodes),xe.childNodes),m[xe.childNodes.length].nodeType}catch{s={apply:function(h,y){wt.apply(h,C.call(y))},call:function(h){wt.apply(h,C.call(arguments,1))}}}function V(u,h,y,v){var T,A,E,M,L,B,P,R=h&&h.ownerDocument,G=h?h.nodeType:9;if(y=y||[],typeof u!="string"||!u||G!==1&&G!==9&&G!==11)return y;if(!v&&(Ie(h),h=h||a,d)){if(G!==11&&(L=ce.exec(u)))if(T=L[1]){if(G===9)if(E=h.getElementById(T)){if(E.id===T)return s.call(y,E),y}else return y;else if(R&&(E=R.getElementById(T))&&V.contains(h,E)&&E.id===T)return s.call(y,E),y}else{if(L[2])return s.apply(y,h.getElementsByTagName(u)),y;if((T=L[3])&&h.getElementsByClassName)return s.apply(y,h.getElementsByClassName(T)),y}if(!ee[u+" "]&&(!g||!g.test(u))){if(P=u,R=h,G===1&&(Ot.test(u)||nt.test(u))){for(R=jt.test(u)&&zt(h.parentNode)||h,(R!=h||!j.scope)&&((M=h.getAttribute("id"))?M=r.escapeSelector(M):h.setAttribute("id",M=k)),B=ot(u),A=B.length;A--;)B[A]=(M?"#"+M:":scope")+" "+ht(B[A]);P=B.join(",")}try{return s.apply(y,R.querySelectorAll(P)),y}catch{ee(u,!0)}finally{M===k&&h.removeAttribute("id")}}}return Mi(u.replace(Xe,"$1"),h,y,v)}function pt(){var u=[];function h(y,v){return u.push(y+" ")>t.cacheLength&&delete h[u.shift()],h[y+" "]=v}return h}function fe(u){return u[k]=!0,u}function qe(u){var h=a.createElement("fieldset");try{return!!u(h)}catch{return!1}finally{h.parentNode&&h.parentNode.removeChild(h),h=null}}function zn(u){return function(h){return Y(h,"input")&&h.type===u}}function Hn(u){return function(h){return(Y(h,"input")||Y(h,"button"))&&h.type===u}}function Ei(u){return function(h){return"form"in h?h.parentNode&&h.disabled===!1?"label"in h?"label"in h.parentNode?h.parentNode.disabled===u:h.disabled===u:h.isDisabled===u||h.isDisabled!==!u&&On(h)===u:h.disabled===u:"label"in h?h.disabled===u:!1}}function Ue(u){return fe(function(h){return h=+h,fe(function(y,v){for(var T,A=u([],y.length,h),E=A.length;E--;)y[T=A[E]]&&(y[T]=!(v[T]=y[T]))})})}function zt(u){return u&&typeof u.getElementsByTagName<"u"&&u}function Ie(u){var h,y=u?u.ownerDocument||u:xe;return y==a||y.nodeType!==9||!y.documentElement||(a=y,f=a.documentElement,d=!r.isXMLDoc(a),x=f.matches||f.webkitMatchesSelector||f.msMatchesSelector,f.msMatchesSelector&&xe!=a&&(h=a.defaultView)&&h.top!==h&&h.addEventListener("unload",Rn),j.getById=qe(function(v){return f.appendChild(v).id=r.expando,!a.getElementsByName||!a.getElementsByName(r.expando).length}),j.disconnectedMatch=qe(function(v){return x.call(v,"*")}),j.scope=qe(function(){return a.querySelectorAll(":scope")}),j.cssHas=qe(function(){try{return a.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),j.getById?(t.filter.ID=function(v){var T=v.replace(Te,ke);return function(A){return A.getAttribute("id")===T}},t.find.ID=function(v,T){if(typeof T.getElementById<"u"&&d){var A=T.getElementById(v);return A?[A]:[]}}):(t.filter.ID=function(v){var T=v.replace(Te,ke);return function(A){var E=typeof A.getAttributeNode<"u"&&A.getAttributeNode("id");return E&&E.value===T}},t.find.ID=function(v,T){if(typeof T.getElementById<"u"&&d){var A,E,M,L=T.getElementById(v);if(L){if(A=L.getAttributeNode("id"),A&&A.value===v)return[L];for(M=T.getElementsByName(v),E=0;L=M[E++];)if(A=L.getAttributeNode("id"),A&&A.value===v)return[L]}return[]}}),t.find.TAG=function(v,T){return typeof T.getElementsByTagName<"u"?T.getElementsByTagName(v):T.querySelectorAll(v)},t.find.CLASS=function(v,T){if(typeof T.getElementsByClassName<"u"&&d)return T.getElementsByClassName(v)},g=[],qe(function(v){var T;f.appendChild(v).innerHTML="<a id='"+k+"' href='' disabled='disabled'></a><select id='"+k+"-\r\\' disabled='disabled'><option selected=''></option></select>",v.querySelectorAll("[selected]").length||g.push("\\["+X+"*(?:value|"+ge+")"),v.querySelectorAll("[id~="+k+"-]").length||g.push("~="),v.querySelectorAll("a#"+k+"+*").length||g.push(".#.+[+~]"),v.querySelectorAll(":checked").length||g.push(":checked"),T=a.createElement("input"),T.setAttribute("type","hidden"),v.appendChild(T).setAttribute("name","D"),f.appendChild(v).disabled=!0,v.querySelectorAll(":disabled").length!==2&&g.push(":enabled",":disabled"),T=a.createElement("input"),T.setAttribute("name",""),v.appendChild(T),v.querySelectorAll("[name='']").length||g.push("\\["+X+"*name"+X+"*="+X+`*(?:''|"")`)}),j.cssHas||g.push(":has"),g=g.length&&new RegExp(g.join("|")),Z=function(v,T){if(v===T)return o=!0,0;var A=!v.compareDocumentPosition-!T.compareDocumentPosition;return A||(A=(v.ownerDocument||v)==(T.ownerDocument||T)?v.compareDocumentPosition(T):1,A&1||!j.sortDetached&&T.compareDocumentPosition(v)===A?v===a||v.ownerDocument==xe&&V.contains(xe,v)?-1:T===a||T.ownerDocument==xe&&V.contains(xe,T)?1:n?J.call(n,v)-J.call(n,T):0:A&4?-1:1)}),a}V.matches=function(u,h){return V(u,null,null,h)},V.matchesSelector=function(u,h){if(Ie(u),d&&!ee[h+" "]&&(!g||!g.test(h)))try{var y=x.call(u,h);if(y||j.disconnectedMatch||u.document&&u.document.nodeType!==11)return y}catch{ee(h,!0)}return V(h,a,null,[u]).length>0},V.contains=function(u,h){return(u.ownerDocument||u)!=a&&Ie(u),r.contains(u,h)},V.attr=function(u,h){(u.ownerDocument||u)!=a&&Ie(u);var y=t.attrHandle[h.toLowerCase()],v=y&&ie.call(t.attrHandle,h.toLowerCase())?y(u,h,!d):void 0;return v!==void 0?v:u.getAttribute(h)},V.error=function(u){throw new Error("Syntax error, unrecognized expression: "+u)},r.uniqueSort=function(u){var h,y=[],v=0,T=0;if(o=!j.sortStable,n=!j.sortStable&&C.call(u,0),Oi.call(u,Z),o){for(;h=u[T++];)h===u[T]&&(v=y.push(T));for(;v--;)ji.call(u,y[v],1)}return n=null,u},r.fn.uniqueSort=function(){return this.pushStack(r.uniqueSort(C.apply(this)))},t=r.expr={cacheLength:50,createPseudo:fe,match:be,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(u){return u[1]=u[1].replace(Te,ke),u[3]=(u[3]||u[4]||u[5]||"").replace(Te,ke),u[2]==="~="&&(u[3]=" "+u[3]+" "),u.slice(0,4)},CHILD:function(u){return u[1]=u[1].toLowerCase(),u[1].slice(0,3)==="nth"?(u[3]||V.error(u[0]),u[4]=+(u[4]?u[5]+(u[6]||1):2*(u[3]==="even"||u[3]==="odd")),u[5]=+(u[7]+u[8]||u[3]==="odd")):u[3]&&V.error(u[0]),u},PSEUDO:function(u){var h,y=!u[6]&&u[2];return be.CHILD.test(u[0])?null:(u[3]?u[2]=u[4]||u[5]||"":y&&ye.test(y)&&(h=ot(y,!0))&&(h=y.indexOf(")",y.length-h)-y.length)&&(u[0]=u[0].slice(0,h),u[2]=y.slice(0,h)),u.slice(0,3))}},filter:{TAG:function(u){var h=u.replace(Te,ke).toLowerCase();return u==="*"?function(){return!0}:function(y){return Y(y,h)}},CLASS:function(u){var h=U[u+" "];return h||(h=new RegExp("(^|"+X+")"+u+"("+X+"|$)"))&&U(u,function(y){return h.test(typeof y.className=="string"&&y.className||typeof y.getAttribute<"u"&&y.getAttribute("class")||"")})},ATTR:function(u,h,y){return function(v){var T=V.attr(v,u);return T==null?h==="!=":h?(T+="",h==="="?T===y:h==="!="?T!==y:h==="^="?y&&T.indexOf(y)===0:h==="*="?y&&T.indexOf(y)>-1:h==="$="?y&&T.slice(-y.length)===y:h==="~="?(" "+T.replace(q," ")+" ").indexOf(y)>-1:h==="|="?T===y||T.slice(0,y.length+1)===y+"-":!1):!0}},CHILD:function(u,h,y,v,T){var A=u.slice(0,3)!=="nth",E=u.slice(-4)!=="last",M=h==="of-type";return v===1&&T===0?function(L){return!!L.parentNode}:function(L,B,P){var R,G,$,K,ae,te=A!==E?"nextSibling":"previousSibling",ue=L.parentNode,ve=M&&L.nodeName.toLowerCase(),Ve=!P&&!M,ne=!1;if(ue){if(A){for(;te;){for($=L;$=$[te];)if(M?Y($,ve):$.nodeType===1)return!1;ae=te=u==="only"&&!ae&&"nextSibling"}return!0}if(ae=[E?ue.firstChild:ue.lastChild],E&&Ve){for(G=ue[k]||(ue[k]={}),R=G[u]||[],K=R[0]===b&&R[1],ne=K&&R[2],$=K&&ue.childNodes[K];$=++K&&$&&$[te]||(ne=K=0)||ae.pop();)if($.nodeType===1&&++ne&&$===L){G[u]=[b,K,ne];break}}else if(Ve&&(G=L[k]||(L[k]={}),R=G[u]||[],K=R[0]===b&&R[1],ne=K),ne===!1)for(;($=++K&&$&&$[te]||(ne=K=0)||ae.pop())&&!((M?Y($,ve):$.nodeType===1)&&++ne&&(Ve&&(G=$[k]||($[k]={}),G[u]=[b,ne]),$===L)););return ne-=T,ne===v||ne%v===0&&ne/v>=0}}},PSEUDO:function(u,h){var y,v=t.pseudos[u]||t.setFilters[u.toLowerCase()]||V.error("unsupported pseudo: "+u);return v[k]?v(h):v.length>1?(y=[u,u,"",h],t.setFilters.hasOwnProperty(u.toLowerCase())?fe(function(T,A){for(var E,M=v(T,h),L=M.length;L--;)E=J.call(T,M[L]),T[E]=!(A[E]=M[L])}):function(T){return v(T,0,y)}):v}},pseudos:{not:fe(function(u){var h=[],y=[],v=Wt(u.replace(Xe,"$1"));return v[k]?fe(function(T,A,E,M){for(var L,B=v(T,null,M,[]),P=T.length;P--;)(L=B[P])&&(T[P]=!(A[P]=L))}):function(T,A,E){return h[0]=T,v(h,null,E,y),h[0]=null,!y.pop()}}),has:fe(function(u){return function(h){return V(u,h).length>0}}),contains:fe(function(u){return u=u.replace(Te,ke),function(h){return(h.textContent||r.text(h)).indexOf(u)>-1}}),lang:fe(function(u){return rt.test(u||"")||V.error("unsupported lang: "+u),u=u.replace(Te,ke).toLowerCase(),function(h){var y;do if(y=d?h.lang:h.getAttribute("xml:lang")||h.getAttribute("lang"))return y=y.toLowerCase(),y===u||y.indexOf(u+"-")===0;while((h=h.parentNode)&&h.nodeType===1);return!1}}),target:function(u){var h=l.location&&l.location.hash;return h&&h.slice(1)===u.id},root:function(u){return u===f},focus:function(u){return u===jn()&&a.hasFocus()&&!!(u.type||u.href||~u.tabIndex)},enabled:Ei(!1),disabled:Ei(!0),checked:function(u){return Y(u,"input")&&!!u.checked||Y(u,"option")&&!!u.selected},selected:function(u){return u.parentNode&&u.parentNode.selectedIndex,u.selected===!0},empty:function(u){for(u=u.firstChild;u;u=u.nextSibling)if(u.nodeType<6)return!1;return!0},parent:function(u){return!t.pseudos.empty(u)},header:function(u){return Ae.test(u.nodeName)},input:function(u){return De.test(u.nodeName)},button:function(u){return Y(u,"input")&&u.type==="button"||Y(u,"button")},text:function(u){var h;return Y(u,"input")&&u.type==="text"&&((h=u.getAttribute("type"))==null||h.toLowerCase()==="text")},first:Ue(function(){return[0]}),last:Ue(function(u,h){return[h-1]}),eq:Ue(function(u,h,y){return[y<0?y+h:y]}),even:Ue(function(u,h){for(var y=0;y<h;y+=2)u.push(y);return u}),odd:Ue(function(u,h){for(var y=1;y<h;y+=2)u.push(y);return u}),lt:Ue(function(u,h,y){var v;for(y<0?v=y+h:y>h?v=h:v=y;--v>=0;)u.push(v);return u}),gt:Ue(function(u,h,y){for(var v=y<0?y+h:y;++v<h;)u.push(v);return u})}},t.pseudos.nth=t.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=zn(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=Hn(e);function Li(){}Li.prototype=t.filters=t.pseudos,t.setFilters=new Li;function ot(u,h){var y,v,T,A,E,M,L,B=_[u+" "];if(B)return h?0:B.slice(0);for(E=u,M=[],L=t.preFilter;E;){(!y||(v=Q.exec(E)))&&(v&&(E=E.slice(v[0].length)||E),M.push(T=[])),y=!1,(v=nt.exec(E))&&(y=v.shift(),T.push({value:y,type:v[0].replace(Xe," ")}),E=E.slice(y.length));for(A in t.filter)(v=be[A].exec(E))&&(!L[A]||(v=L[A](v)))&&(y=v.shift(),T.push({value:y,type:A,matches:v}),E=E.slice(y.length));if(!y)break}return h?E.length:E?V.error(u):_(u,M).slice(0)}function ht(u){for(var h=0,y=u.length,v="";h<y;h++)v+=u[h].value;return v}function gt(u,h,y){var v=h.dir,T=h.next,A=T||v,E=y&&A==="parentNode",M=D++;return h.first?function(L,B,P){for(;L=L[v];)if(L.nodeType===1||E)return u(L,B,P);return!1}:function(L,B,P){var R,G,$=[b,M];if(P){for(;L=L[v];)if((L.nodeType===1||E)&&u(L,B,P))return!0}else for(;L=L[v];)if(L.nodeType===1||E)if(G=L[k]||(L[k]={}),T&&Y(L,T))L=L[v]||L;else{if((R=G[A])&&R[0]===b&&R[1]===M)return $[2]=R[2];if(G[A]=$,$[2]=u(L,B,P))return!0}return!1}}function Ht(u){return u.length>1?function(h,y,v){for(var T=u.length;T--;)if(!u[T](h,y,v))return!1;return!0}:u[0]}function Bn(u,h,y){for(var v=0,T=h.length;v<T;v++)V(u,h[v],y);return y}function mt(u,h,y,v,T){for(var A,E=[],M=0,L=u.length,B=h!=null;M<L;M++)(A=u[M])&&(!y||y(A,v,T))&&(E.push(A),B&&h.push(M));return E}function Bt(u,h,y,v,T,A){return v&&!v[k]&&(v=Bt(v)),T&&!T[k]&&(T=Bt(T,A)),fe(function(E,M,L,B){var P,R,G,$,K=[],ae=[],te=M.length,ue=E||Bn(h||"*",L.nodeType?[L]:L,[]),ve=u&&(E||!h)?mt(ue,K,u,L,B):ue;if(y?($=T||(E?u:te||v)?[]:M,y(ve,$,L,B)):$=ve,v)for(P=mt($,ae),v(P,[],L,B),R=P.length;R--;)(G=P[R])&&($[ae[R]]=!(ve[ae[R]]=G));if(E){if(T||u){if(T){for(P=[],R=$.length;R--;)(G=$[R])&&P.push(ve[R]=G);T(null,$=[],P,B)}for(R=$.length;R--;)(G=$[R])&&(P=T?J.call(E,G):K[R])>-1&&(E[P]=!(M[P]=G))}}else $=mt($===M?$.splice(te,$.length):$),T?T(null,M,$,B):s.apply(M,$)})}function Gt(u){for(var h,y,v,T=u.length,A=t.relative[u[0].type],E=A||t.relative[" "],M=A?1:0,L=gt(function(R){return R===h},E,!0),B=gt(function(R){return J.call(h,R)>-1},E,!0),P=[function(R,G,$){var K=!A&&($||G!=i)||((h=G).nodeType?L(R,G,$):B(R,G,$));return h=null,K}];M<T;M++)if(y=t.relative[u[M].type])P=[gt(Ht(P),y)];else{if(y=t.filter[u[M].type].apply(null,u[M].matches),y[k]){for(v=++M;v<T&&!t.relative[u[v].type];v++);return Bt(M>1&&Ht(P),M>1&&ht(u.slice(0,M-1).concat({value:u[M-2].type===" "?"*":""})).replace(Xe,"$1"),y,M<v&&Gt(u.slice(M,v)),v<T&&Gt(u=u.slice(v)),v<T&&ht(u))}P.push(y)}return Ht(P)}function Gn(u,h){var y=h.length>0,v=u.length>0,T=function(A,E,M,L,B){var P,R,G,$=0,K="0",ae=A&&[],te=[],ue=i,ve=A||v&&t.find.TAG("*",B),Ve=b+=ue==null?1:Math.random()||.1,ne=ve.length;for(B&&(i=E==a||E||B);K!==ne&&(P=ve[K])!=null;K++){if(v&&P){for(R=0,!E&&P.ownerDocument!=a&&(Ie(P),M=!d);G=u[R++];)if(G(P,E||a,M)){s.call(L,P);break}B&&(b=Ve)}y&&((P=!G&&P)&&$--,A&&ae.push(P))}if($+=K,y&&K!==$){for(R=0;G=h[R++];)G(ae,te,E,M);if(A){if($>0)for(;K--;)ae[K]||te[K]||(te[K]=Ri.call(L));te=mt(te)}s.apply(L,te),B&&!A&&te.length>0&&$+h.length>1&&r.uniqueSort(L)}return B&&(b=Ve,i=ue),ae};return y?fe(T):T}function Wt(u,h){var y,v=[],T=[],A=H[u+" "];if(!A){for(h||(h=ot(u)),y=h.length;y--;)A=Gt(h[y]),A[k]?v.push(A):T.push(A);A=H(u,Gn(T,v)),A.selector=u}return A}function Mi(u,h,y,v){var T,A,E,M,L,B=typeof u=="function"&&u,P=!v&&ot(u=B.selector||u);if(y=y||[],P.length===1){if(A=P[0]=P[0].slice(0),A.length>2&&(E=A[0]).type==="ID"&&h.nodeType===9&&d&&t.relative[A[1].type]){if(h=(t.find.ID(E.matches[0].replace(Te,ke),h)||[])[0],h)B&&(h=h.parentNode);else return y;u=u.slice(A.shift().value.length)}for(T=be.needsContext.test(u)?0:A.length;T--&&(E=A[T],!t.relative[M=E.type]);)if((L=t.find[M])&&(v=L(E.matches[0].replace(Te,ke),jt.test(A[0].type)&&zt(h.parentNode)||h))){if(A.splice(T,1),u=v.length&&ht(A),!u)return s.apply(y,v),y;break}}return(B||Wt(u,P))(v,h,!d,y,!h||jt.test(u)&&zt(h.parentNode)||h),y}j.sortStable=k.split("").sort(Z).join("")===k,Ie(),j.sortDetached=qe(function(u){return u.compareDocumentPosition(a.createElement("fieldset"))&1}),r.find=V,r.expr[":"]=r.expr.pseudos,r.unique=r.uniqueSort,V.compile=Wt,V.select=Mi,V.setDocument=Ie,V.tokenize=ot,V.escape=r.escapeSelector,V.getText=r.text,V.isXML=r.isXMLDoc,V.selectors=r.expr,V.support=r.support,V.uniqueSort=r.uniqueSort})();var je=function(e,t,i){for(var n=[],o=i!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(o&&r(e).is(i))break;n.push(e)}return n},qt=function(e,t){for(var i=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&i.push(e);return i},Vt=r.expr.match.needsContext,Xt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function xt(e,t,i){return z(t)?r.grep(e,function(n,o){return!!t.call(n,o,n)!==i}):t.nodeType?r.grep(e,function(n){return n===t!==i}):typeof t!="string"?r.grep(e,function(n){return J.call(t,n)>-1!==i}):r.filter(t,e,i)}r.filter=function(e,t,i){var n=t[0];return i&&(e=":not("+e+")"),t.length===1&&n.nodeType===1?r.find.matchesSelector(n,e)?[n]:[]:r.find.matches(e,r.grep(t,function(o){return o.nodeType===1}))},r.fn.extend({find:function(e){var t,i,n=this.length,o=this;if(typeof e!="string")return this.pushStack(r(e).filter(function(){for(t=0;t<n;t++)if(r.contains(o[t],this))return!0}));for(i=this.pushStack([]),t=0;t<n;t++)r.find(e,o[t],i);return n>1?r.uniqueSort(i):i},filter:function(e){return this.pushStack(xt(this,e||[],!1))},not:function(e){return this.pushStack(xt(this,e||[],!0))},is:function(e){return!!xt(this,typeof e=="string"&&Vt.test(e)?r(e):e||[],!1).length}});var Kt,Bi=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Gi=r.fn.init=function(e,t,i){var n,o;if(!e)return this;if(i=i||Kt,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?n=[null,e,null]:n=Bi.exec(e),n&&(n[1]||!t))if(n[1]){if(t=t instanceof r?t[0]:t,r.merge(this,r.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:O,!0)),Xt.test(n[1])&&r.isPlainObject(t))for(n in t)z(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}else return o=O.getElementById(n[2]),o&&(this[0]=o,this.length=1),this;else return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(z(e))return i.ready!==void 0?i.ready(e):e(r)}return r.makeArray(e,this)};Gi.prototype=r.fn,Kt=r(O);var Wi=/^(?:parents|prev(?:Until|All))/,Fi={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(e){var t=r(e,this),i=t.length;return this.filter(function(){for(var n=0;n<i;n++)if(r.contains(this,t[n]))return!0})},closest:function(e,t){var i,n=0,o=this.length,s=[],a=typeof e!="string"&&r(e);if(!Vt.test(e)){for(;n<o;n++)for(i=this[n];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(a?a.index(i)>-1:i.nodeType===1&&r.find.matchesSelector(i,e))){s.push(i);break}}return this.pushStack(s.length>1?r.uniqueSort(s):s)},index:function(e){return e?typeof e=="string"?J.call(r(e),this[0]):J.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Yt(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}r.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return je(e,"parentNode")},parentsUntil:function(e,t,i){return je(e,"parentNode",i)},next:function(e){return Yt(e,"nextSibling")},prev:function(e){return Yt(e,"previousSibling")},nextAll:function(e){return je(e,"nextSibling")},prevAll:function(e){return je(e,"previousSibling")},nextUntil:function(e,t,i){return je(e,"nextSibling",i)},prevUntil:function(e,t,i){return je(e,"previousSibling",i)},siblings:function(e){return qt((e.parentNode||{}).firstChild,e)},children:function(e){return qt(e.firstChild)},contents:function(e){return e.contentDocument!=null&&w(e.contentDocument)?e.contentDocument:(Y(e,"template")&&(e=e.content||e),r.merge([],e.childNodes))}},function(e,t){r.fn[e]=function(i,n){var o=r.map(this,t,i);return e.slice(-5)!=="Until"&&(n=i),n&&typeof n=="string"&&(o=r.filter(n,o)),this.length>1&&(Fi[e]||r.uniqueSort(o),Wi.test(e)&&o.reverse()),this.pushStack(o)}});var pe=/[^\x20\t\r\n\f]+/g;function _i(e){var t={};return r.each(e.match(pe)||[],function(i,n){t[n]=!0}),t}r.Callbacks=function(e){e=typeof e=="string"?_i(e):r.extend({},e);var t,i,n,o,s=[],a=[],f=-1,d=function(){for(o=o||e.once,n=t=!0;a.length;f=-1)for(i=a.shift();++f<s.length;)s[f].apply(i[0],i[1])===!1&&e.stopOnFalse&&(f=s.length,i=!1);e.memory||(i=!1),t=!1,o&&(i?s=[]:s="")},g={add:function(){return s&&(i&&!t&&(f=s.length-1,a.push(i)),(function x(k){r.each(k,function(b,D){z(D)?(!e.unique||!g.has(D))&&s.push(D):D&&D.length&&Oe(D)!=="string"&&x(D)})})(arguments),i&&!t&&d()),this},remove:function(){return r.each(arguments,function(x,k){for(var b;(b=r.inArray(k,s,b))>-1;)s.splice(b,1),b<=f&&f--}),this},has:function(x){return x?r.inArray(x,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=i="",this},disabled:function(){return!s},lock:function(){return o=a=[],!i&&!t&&(s=i=""),this},locked:function(){return!!o},fireWith:function(x,k){return o||(k=k||[],k=[x,k.slice?k.slice():k],a.push(k),t||d()),this},fire:function(){return g.fireWith(this,arguments),this},fired:function(){return!!n}};return g};function ze(e){return e}function st(e){throw e}function Jt(e,t,i,n){var o;try{e&&z(o=e.promise)?o.call(e).done(t).fail(i):e&&z(o=e.then)?o.call(e,t,i):t.apply(void 0,[e].slice(n))}catch(s){i.apply(void 0,[s])}}r.extend({Deferred:function(e){var t=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],i="pending",n={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(s){return n.then(null,s)},pipe:function(){var s=arguments;return r.Deferred(function(a){r.each(t,function(f,d){var g=z(s[d[4]])&&s[d[4]];o[d[1]](function(){var x=g&&g.apply(this,arguments);x&&z(x.promise)?x.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[d[0]+"With"](this,g?[x]:arguments)})}),s=null}).promise()},then:function(s,a,f){var d=0;function g(x,k,b,D){return function(){var U=this,_=arguments,H=function(){var Z,ge;if(!(x<d)){if(Z=b.apply(U,_),Z===k.promise())throw new TypeError("Thenable self-resolution");ge=Z&&(typeof Z=="object"||typeof Z=="function")&&Z.then,z(ge)?D?ge.call(Z,g(d,k,ze,D),g(d,k,st,D)):(d++,ge.call(Z,g(d,k,ze,D),g(d,k,st,D),g(d,k,ze,k.notifyWith))):(b!==ze&&(U=void 0,_=[Z]),(D||k.resolveWith)(U,_))}},ee=D?H:function(){try{H()}catch(Z){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(Z,ee.error),x+1>=d&&(b!==st&&(U=void 0,_=[Z]),k.rejectWith(U,_))}};x?ee():(r.Deferred.getErrorHook?ee.error=r.Deferred.getErrorHook():r.Deferred.getStackHook&&(ee.error=r.Deferred.getStackHook()),l.setTimeout(ee))}}return r.Deferred(function(x){t[0][3].add(g(0,x,z(f)?f:ze,x.notifyWith)),t[1][3].add(g(0,x,z(s)?s:ze)),t[2][3].add(g(0,x,z(a)?a:st))}).promise()},promise:function(s){return s!=null?r.extend(s,n):n}},o={};return r.each(t,function(s,a){var f=a[2],d=a[5];n[a[1]]=f.add,d&&f.add(function(){i=d},t[3-s][2].disable,t[3-s][3].disable,t[0][2].lock,t[0][3].lock),f.add(a[3].fire),o[a[0]]=function(){return o[a[0]+"With"](this===o?void 0:this,arguments),this},o[a[0]+"With"]=f.fireWith}),n.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,i=t,n=Array(i),o=C.call(arguments),s=r.Deferred(),a=function(f){return function(d){n[f]=this,o[f]=arguments.length>1?C.call(arguments):d,--t||s.resolveWith(n,o)}};if(t<=1&&(Jt(e,s.done(a(i)).resolve,s.reject,!t),s.state()==="pending"||z(o[i]&&o[i].then)))return s.then();for(;i--;)Jt(o[i],a(i),s.reject);return s.promise()}});var qi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(e,t){l.console&&l.console.warn&&e&&qi.test(e.name)&&l.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},r.readyException=function(e){l.setTimeout(function(){throw e})};var St=r.Deferred();r.fn.ready=function(e){return St.then(e).catch(function(t){r.readyException(t)}),this},r.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--r.readyWait:r.isReady)||(r.isReady=!0,!(e!==!0&&--r.readyWait>0)&&St.resolveWith(O,[r]))}}),r.ready.then=St.then;function at(){O.removeEventListener("DOMContentLoaded",at),l.removeEventListener("load",at),r.ready()}O.readyState==="complete"||O.readyState!=="loading"&&!O.documentElement.doScroll?l.setTimeout(r.ready):(O.addEventListener("DOMContentLoaded",at),l.addEventListener("load",at));var Se=function(e,t,i,n,o,s,a){var f=0,d=e.length,g=i==null;if(Oe(i)==="object"){o=!0;for(f in i)Se(e,t,f,i[f],!0,s,a)}else if(n!==void 0&&(o=!0,z(n)||(a=!0),g&&(a?(t.call(e,n),t=null):(g=t,t=function(x,k,b){return g.call(r(x),b)})),t))for(;f<d;f++)t(e[f],i,a?n:n.call(e[f],f,t(e[f],i)));return o?e:g?t.call(e):d?t(e[0],i):s},Vi=/^-ms-/,Xi=/-([a-z])/g;function Ki(e,t){return t.toUpperCase()}function he(e){return e.replace(Vi,"ms-").replace(Xi,Ki)}var Ke=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Ye(){this.expando=r.expando+Ye.uid++}Ye.uid=1,Ye.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Ke(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,i){var n,o=this.cache(e);if(typeof t=="string")o[he(t)]=i;else for(n in t)o[he(n)]=t[n];return o},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][he(t)]},access:function(e,t,i){return t===void 0||t&&typeof t=="string"&&i===void 0?this.get(e,t):(this.set(e,t,i),i!==void 0?i:t)},remove:function(e,t){var i,n=e[this.expando];if(n!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(he):(t=he(t),t=t in n?[t]:t.match(pe)||[]),i=t.length;i--;)delete n[t[i]];(t===void 0||r.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!r.isEmptyObject(t)}};var N=new Ye,re=new Ye,Yi=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ji=/[A-Z]/g;function Qi(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Yi.test(e)?JSON.parse(e):e}function Qt(e,t,i){var n;if(i===void 0&&e.nodeType===1)if(n="data-"+t.replace(Ji,"-$&").toLowerCase(),i=e.getAttribute(n),typeof i=="string"){try{i=Qi(i)}catch{}re.set(e,t,i)}else i=void 0;return i}r.extend({hasData:function(e){return re.hasData(e)||N.hasData(e)},data:function(e,t,i){return re.access(e,t,i)},removeData:function(e,t){re.remove(e,t)},_data:function(e,t,i){return N.access(e,t,i)},_removeData:function(e,t){N.remove(e,t)}}),r.fn.extend({data:function(e,t){var i,n,o,s=this[0],a=s&&s.attributes;if(e===void 0){if(this.length&&(o=re.get(s),s.nodeType===1&&!N.get(s,"hasDataAttrs"))){for(i=a.length;i--;)a[i]&&(n=a[i].name,n.indexOf("data-")===0&&(n=he(n.slice(5)),Qt(s,n,o[n])));N.set(s,"hasDataAttrs",!0)}return o}return typeof e=="object"?this.each(function(){re.set(this,e)}):Se(this,function(f){var d;if(s&&f===void 0)return d=re.get(s,e),d!==void 0||(d=Qt(s,e),d!==void 0)?d:void 0;this.each(function(){re.set(this,e,f)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){re.remove(this,e)})}}),r.extend({queue:function(e,t,i){var n;if(e)return t=(t||"fx")+"queue",n=N.get(e,t),i&&(!n||Array.isArray(i)?n=N.access(e,t,r.makeArray(i)):n.push(i)),n||[]},dequeue:function(e,t){t=t||"fx";var i=r.queue(e,t),n=i.length,o=i.shift(),s=r._queueHooks(e,t),a=function(){r.dequeue(e,t)};o==="inprogress"&&(o=i.shift(),n--),o&&(t==="fx"&&i.unshift("inprogress"),delete s.stop,o.call(e,a,s)),!n&&s&&s.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return N.get(e,i)||N.access(e,i,{empty:r.Callbacks("once memory").add(function(){N.remove(e,[t+"queue",i])})})}}),r.fn.extend({queue:function(e,t){var i=2;return typeof e!="string"&&(t=e,e="fx",i--),arguments.length<i?r.queue(this[0],e):t===void 0?this:this.each(function(){var n=r.queue(this,e,t);r._queueHooks(this,e),e==="fx"&&n[0]!=="inprogress"&&r.dequeue(this,e)})},dequeue:function(e){return this.each(function(){r.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,n=1,o=r.Deferred(),s=this,a=this.length,f=function(){--n||o.resolveWith(s,[s])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";a--;)i=N.get(s[a],e+"queueHooks"),i&&i.empty&&(n++,i.empty.add(f));return f(),o.promise(t)}});var Zt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Je=new RegExp("^(?:([+-])=|)("+Zt+")([a-z%]*)$","i"),Ce=["Top","Right","Bottom","Left"],Me=O.documentElement,He=function(e){return r.contains(e.ownerDocument,e)},Zi={composed:!0};Me.getRootNode&&(He=function(e){return r.contains(e.ownerDocument,e)||e.getRootNode(Zi)===e.ownerDocument});var lt=function(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&He(e)&&r.css(e,"display")==="none"};function ei(e,t,i,n){var o,s,a=20,f=n?function(){return n.cur()}:function(){return r.css(e,t,"")},d=f(),g=i&&i[3]||(r.cssNumber[t]?"":"px"),x=e.nodeType&&(r.cssNumber[t]||g!=="px"&&+d)&&Je.exec(r.css(e,t));if(x&&x[3]!==g){for(d=d/2,g=g||x[3],x=+d||1;a--;)r.style(e,t,x+g),(1-s)*(1-(s=f()/d||.5))<=0&&(a=0),x=x/s;x=x*2,r.style(e,t,x+g),i=i||[]}return i&&(x=+x||+d||0,o=i[1]?x+(i[1]+1)*i[2]:+i[2],n&&(n.unit=g,n.start=x,n.end=o)),o}var ti={};function en(e){var t,i=e.ownerDocument,n=e.nodeName,o=ti[n];return o||(t=i.body.appendChild(i.createElement(n)),o=r.css(t,"display"),t.parentNode.removeChild(t),o==="none"&&(o="block"),ti[n]=o,o)}function Be(e,t){for(var i,n,o=[],s=0,a=e.length;s<a;s++)n=e[s],n.style&&(i=n.style.display,t?(i==="none"&&(o[s]=N.get(n,"display")||null,o[s]||(n.style.display="")),n.style.display===""&&lt(n)&&(o[s]=en(n))):i!=="none"&&(o[s]="none",N.set(n,"display",i)));for(s=0;s<a;s++)o[s]!=null&&(e[s].style.display=o[s]);return e}r.fn.extend({show:function(){return Be(this,!0)},hide:function(){return Be(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){lt(this)?r(this).show():r(this).hide()})}});var Qe=/^(?:checkbox|radio)$/i,ii=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ni=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=O.createDocumentFragment(),t=e.appendChild(O.createElement("div")),i=O.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),t.appendChild(i),j.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",j.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",j.option=!!t.lastChild})();var le={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};le.tbody=le.tfoot=le.colgroup=le.caption=le.thead,le.th=le.td,j.option||(le.optgroup=le.option=[1,"<select multiple='multiple'>","</select>"]);function oe(e,t){var i;return typeof e.getElementsByTagName<"u"?i=e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?i=e.querySelectorAll(t||"*"):i=[],t===void 0||t&&Y(e,t)?r.merge([e],i):i}function Ct(e,t){for(var i=0,n=e.length;i<n;i++)N.set(e[i],"globalEval",!t||N.get(t[i],"globalEval"))}var tn=/<|&#?\w+;/;function ri(e,t,i,n,o){for(var s,a,f,d,g,x,k=t.createDocumentFragment(),b=[],D=0,U=e.length;D<U;D++)if(s=e[D],s||s===0)if(Oe(s)==="object")r.merge(b,s.nodeType?[s]:s);else if(!tn.test(s))b.push(t.createTextNode(s));else{for(a=a||k.appendChild(t.createElement("div")),f=(ii.exec(s)||["",""])[1].toLowerCase(),d=le[f]||le._default,a.innerHTML=d[1]+r.htmlPrefilter(s)+d[2],x=d[0];x--;)a=a.lastChild;r.merge(b,a.childNodes),a=k.firstChild,a.textContent=""}for(k.textContent="",D=0;s=b[D++];){if(n&&r.inArray(s,n)>-1){o&&o.push(s);continue}if(g=He(s),a=oe(k.appendChild(s),"script"),g&&Ct(a),i)for(x=0;s=a[x++];)ni.test(s.type||"")&&i.push(s)}return k}var oi=/^([^.]*)(?:\.(.+)|)/;function Ge(){return!0}function We(){return!1}function Tt(e,t,i,n,o,s){var a,f;if(typeof t=="object"){typeof i!="string"&&(n=n||i,i=void 0);for(f in t)Tt(e,f,i,n,t[f],s);return e}if(n==null&&o==null?(o=i,n=i=void 0):o==null&&(typeof i=="string"?(o=n,n=void 0):(o=n,n=i,i=void 0)),o===!1)o=We;else if(!o)return e;return s===1&&(a=o,o=function(d){return r().off(d),a.apply(this,arguments)},o.guid=a.guid||(a.guid=r.guid++)),e.each(function(){r.event.add(this,t,o,n,i)})}r.event={global:{},add:function(e,t,i,n,o){var s,a,f,d,g,x,k,b,D,U,_,H=N.get(e);if(Ke(e))for(i.handler&&(s=i,i=s.handler,o=s.selector),o&&r.find.matchesSelector(Me,o),i.guid||(i.guid=r.guid++),(d=H.events)||(d=H.events=Object.create(null)),(a=H.handle)||(a=H.handle=function(ee){return typeof r<"u"&&r.event.triggered!==ee.type?r.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pe)||[""],g=t.length;g--;)f=oi.exec(t[g])||[],D=_=f[1],U=(f[2]||"").split(".").sort(),D&&(k=r.event.special[D]||{},D=(o?k.delegateType:k.bindType)||D,k=r.event.special[D]||{},x=r.extend({type:D,origType:_,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&r.expr.match.needsContext.test(o),namespace:U.join(".")},s),(b=d[D])||(b=d[D]=[],b.delegateCount=0,(!k.setup||k.setup.call(e,n,U,a)===!1)&&e.addEventListener&&e.addEventListener(D,a)),k.add&&(k.add.call(e,x),x.handler.guid||(x.handler.guid=i.guid)),o?b.splice(b.delegateCount++,0,x):b.push(x),r.event.global[D]=!0)},remove:function(e,t,i,n,o){var s,a,f,d,g,x,k,b,D,U,_,H=N.hasData(e)&&N.get(e);if(!(!H||!(d=H.events))){for(t=(t||"").match(pe)||[""],g=t.length;g--;){if(f=oi.exec(t[g])||[],D=_=f[1],U=(f[2]||"").split(".").sort(),!D){for(D in d)r.event.remove(e,D+t[g],i,n,!0);continue}for(k=r.event.special[D]||{},D=(n?k.delegateType:k.bindType)||D,b=d[D]||[],f=f[2]&&new RegExp("(^|\\.)"+U.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=b.length;s--;)x=b[s],(o||_===x.origType)&&(!i||i.guid===x.guid)&&(!f||f.test(x.namespace))&&(!n||n===x.selector||n==="**"&&x.selector)&&(b.splice(s,1),x.selector&&b.delegateCount--,k.remove&&k.remove.call(e,x));a&&!b.length&&((!k.teardown||k.teardown.call(e,U,H.handle)===!1)&&r.removeEvent(e,D,H.handle),delete d[D])}r.isEmptyObject(d)&&N.remove(e,"handle events")}},dispatch:function(e){var t,i,n,o,s,a,f=new Array(arguments.length),d=r.event.fix(e),g=(N.get(this,"events")||Object.create(null))[d.type]||[],x=r.event.special[d.type]||{};for(f[0]=d,t=1;t<arguments.length;t++)f[t]=arguments[t];if(d.delegateTarget=this,!(x.preDispatch&&x.preDispatch.call(this,d)===!1)){for(a=r.event.handlers.call(this,d,g),t=0;(o=a[t++])&&!d.isPropagationStopped();)for(d.currentTarget=o.elem,i=0;(s=o.handlers[i++])&&!d.isImmediatePropagationStopped();)(!d.rnamespace||s.namespace===!1||d.rnamespace.test(s.namespace))&&(d.handleObj=s,d.data=s.data,n=((r.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,f),n!==void 0&&(d.result=n)===!1&&(d.preventDefault(),d.stopPropagation()));return x.postDispatch&&x.postDispatch.call(this,d),d.result}},handlers:function(e,t){var i,n,o,s,a,f=[],d=t.delegateCount,g=e.target;if(d&&g.nodeType&&!(e.type==="click"&&e.button>=1)){for(;g!==this;g=g.parentNode||this)if(g.nodeType===1&&!(e.type==="click"&&g.disabled===!0)){for(s=[],a={},i=0;i<d;i++)n=t[i],o=n.selector+" ",a[o]===void 0&&(a[o]=n.needsContext?r(o,this).index(g)>-1:r.find(o,this,null,[g]).length),a[o]&&s.push(n);s.length&&f.push({elem:g,handlers:s})}}return g=this,d<t.length&&f.push({elem:g,handlers:t.slice(d)}),f},addProp:function(e,t){Object.defineProperty(r.Event.prototype,e,{enumerable:!0,configurable:!0,get:z(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(i){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:i})}})},fix:function(e){return e[r.expando]?e:new r.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Qe.test(t.type)&&t.click&&Y(t,"input")&&ct(t,"click",!0),!1},trigger:function(e){var t=this||e;return Qe.test(t.type)&&t.click&&Y(t,"input")&&ct(t,"click"),!0},_default:function(e){var t=e.target;return Qe.test(t.type)&&t.click&&Y(t,"input")&&N.get(t,"click")||Y(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function ct(e,t,i){if(!i){N.get(e,t)===void 0&&r.event.add(e,t,Ge);return}N.set(e,t,!1),r.event.add(e,t,{namespace:!1,handler:function(n){var o,s=N.get(this,t);if(n.isTrigger&1&&this[t]){if(s)(r.event.special[t]||{}).delegateType&&n.stopPropagation();else if(s=C.call(arguments),N.set(this,t,s),this[t](),o=N.get(this,t),N.set(this,t,!1),s!==o)return n.stopImmediatePropagation(),n.preventDefault(),o}else s&&(N.set(this,t,r.event.trigger(s[0],s.slice(1),this)),n.stopPropagation(),n.isImmediatePropagationStopped=Ge)}})}r.removeEvent=function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i)},r.Event=function(e,t){if(!(this instanceof r.Event))return new r.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Ge:We,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&r.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[r.expando]=!0},r.Event.prototype={constructor:r.Event,isDefaultPrevented:We,isPropagationStopped:We,isImmediatePropagationStopped:We,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ge,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ge,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ge,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},r.event.addProp),r.each({focus:"focusin",blur:"focusout"},function(e,t){function i(n){if(O.documentMode){var o=N.get(this,"handle"),s=r.event.fix(n);s.type=n.type==="focusin"?"focus":"blur",s.isSimulated=!0,o(n),s.target===s.currentTarget&&o(s)}else r.event.simulate(t,n.target,r.event.fix(n))}r.event.special[e]={setup:function(){var n;if(ct(this,e,!0),O.documentMode)n=N.get(this,t),n||this.addEventListener(t,i),N.set(this,t,(n||0)+1);else return!1},trigger:function(){return ct(this,e),!0},teardown:function(){var n;if(O.documentMode)n=N.get(this,t)-1,n?N.set(this,t,n):(this.removeEventListener(t,i),N.remove(this,t));else return!1},_default:function(n){return N.get(n.target,e)},delegateType:t},r.event.special[t]={setup:function(){var n=this.ownerDocument||this.document||this,o=O.documentMode?this:n,s=N.get(o,t);s||(O.documentMode?this.addEventListener(t,i):n.addEventListener(e,i,!0)),N.set(o,t,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,o=O.documentMode?this:n,s=N.get(o,t)-1;s?N.set(o,t,s):(O.documentMode?this.removeEventListener(t,i):n.removeEventListener(e,i,!0),N.remove(o,t))}}}),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){r.event.special[e]={delegateType:t,bindType:t,handle:function(i){var n,o=this,s=i.relatedTarget,a=i.handleObj;return(!s||s!==o&&!r.contains(o,s))&&(i.type=a.origType,n=a.handler.apply(this,arguments),i.type=t),n}}}),r.fn.extend({on:function(e,t,i,n){return Tt(this,e,t,i,n)},one:function(e,t,i,n){return Tt(this,e,t,i,n,1)},off:function(e,t,i){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,r(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if(typeof e=="object"){for(o in e)this.off(o,t,e[o]);return this}return(t===!1||typeof t=="function")&&(i=t,t=void 0),i===!1&&(i=We),this.each(function(){r.event.remove(this,e,i,t)})}});var nn=/<script|<style|<link/i,rn=/checked\s*(?:[^=]|=\s*.checked.)/i,on=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function si(e,t){return Y(e,"table")&&Y(t.nodeType!==11?t:t.firstChild,"tr")&&r(e).children("tbody")[0]||e}function sn(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function an(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function ai(e,t){var i,n,o,s,a,f,d;if(t.nodeType===1){if(N.hasData(e)&&(s=N.get(e),d=s.events,d)){N.remove(t,"handle events");for(o in d)for(i=0,n=d[o].length;i<n;i++)r.event.add(t,o,d[o][i])}re.hasData(e)&&(a=re.access(e),f=r.extend({},a),re.set(t,f))}}function ln(e,t){var i=t.nodeName.toLowerCase();i==="input"&&Qe.test(e.type)?t.checked=e.checked:(i==="input"||i==="textarea")&&(t.defaultValue=e.defaultValue)}function Fe(e,t,i,n){t=I(t);var o,s,a,f,d,g,x=0,k=e.length,b=k-1,D=t[0],U=z(D);if(U||k>1&&typeof D=="string"&&!j.checkClone&&rn.test(D))return e.each(function(_){var H=e.eq(_);U&&(t[0]=D.call(this,_,H.html())),Fe(H,t,i,n)});if(k&&(o=ri(t,e[0].ownerDocument,!1,e,n),s=o.firstChild,o.childNodes.length===1&&(o=s),s||n)){for(a=r.map(oe(o,"script"),sn),f=a.length;x<k;x++)d=o,x!==b&&(d=r.clone(d,!0,!0),f&&r.merge(a,oe(d,"script"))),i.call(e[x],d,x);if(f)for(g=a[a.length-1].ownerDocument,r.map(a,an),x=0;x<f;x++)d=a[x],ni.test(d.type||"")&&!N.access(d,"globalEval")&&r.contains(g,d)&&(d.src&&(d.type||"").toLowerCase()!=="module"?r._evalUrl&&!d.noModule&&r._evalUrl(d.src,{nonce:d.nonce||d.getAttribute("nonce")},g):Ft(d.textContent.replace(on,""),d,g))}return e}function li(e,t,i){for(var n,o=t?r.filter(t,e):e,s=0;(n=o[s])!=null;s++)!i&&n.nodeType===1&&r.cleanData(oe(n)),n.parentNode&&(i&&He(n)&&Ct(oe(n,"script")),n.parentNode.removeChild(n));return e}r.extend({htmlPrefilter:function(e){return e},clone:function(e,t,i){var n,o,s,a,f=e.cloneNode(!0),d=He(e);if(!j.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!r.isXMLDoc(e))for(a=oe(f),s=oe(e),n=0,o=s.length;n<o;n++)ln(s[n],a[n]);if(t)if(i)for(s=s||oe(e),a=a||oe(f),n=0,o=s.length;n<o;n++)ai(s[n],a[n]);else ai(e,f);return a=oe(f,"script"),a.length>0&&Ct(a,!d&&oe(e,"script")),f},cleanData:function(e){for(var t,i,n,o=r.event.special,s=0;(i=e[s])!==void 0;s++)if(Ke(i)){if(t=i[N.expando]){if(t.events)for(n in t.events)o[n]?r.event.remove(i,n):r.removeEvent(i,n,t.handle);i[N.expando]=void 0}i[re.expando]&&(i[re.expando]=void 0)}}}),r.fn.extend({detach:function(e){return li(this,e,!0)},remove:function(e){return li(this,e)},text:function(e){return Se(this,function(t){return t===void 0?r.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return Fe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=si(this,e);t.appendChild(e)}})},prepend:function(){return Fe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=si(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Fe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Fe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(r.cleanData(oe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return r.clone(this,e,t)})},html:function(e){return Se(this,function(t){var i=this[0]||{},n=0,o=this.length;if(t===void 0&&i.nodeType===1)return i.innerHTML;if(typeof t=="string"&&!nn.test(t)&&!le[(ii.exec(t)||["",""])[1].toLowerCase()]){t=r.htmlPrefilter(t);try{for(;n<o;n++)i=this[n]||{},i.nodeType===1&&(r.cleanData(oe(i,!1)),i.innerHTML=t);i=0}catch{}}i&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Fe(this,arguments,function(t){var i=this.parentNode;r.inArray(this,e)<0&&(r.cleanData(oe(this)),i&&i.replaceChild(t,this))},e)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){r.fn[e]=function(i){for(var n,o=[],s=r(i),a=s.length-1,f=0;f<=a;f++)n=f===a?this:this.clone(!0),r(s[f])[t](n),W.apply(o,n.get());return this.pushStack(o)}});var kt=new RegExp("^("+Zt+")(?!px)[a-z%]+$","i"),Dt=/^--/,ut=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=l),t.getComputedStyle(e)},ci=function(e,t,i){var n,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];n=i.call(e);for(o in t)e.style[o]=s[o];return n},cn=new RegExp(Ce.join("|"),"i");(function(){function e(){if(g){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",g.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Me.appendChild(d).appendChild(g);var x=l.getComputedStyle(g);i=x.top!=="1%",f=t(x.marginLeft)===12,g.style.right="60%",s=t(x.right)===36,n=t(x.width)===36,g.style.position="absolute",o=t(g.offsetWidth/3)===12,Me.removeChild(d),g=null}}function t(x){return Math.round(parseFloat(x))}var i,n,o,s,a,f,d=O.createElement("div"),g=O.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",j.clearCloneStyle=g.style.backgroundClip==="content-box",r.extend(j,{boxSizingReliable:function(){return e(),n},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),f},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var x,k,b,D;return a==null&&(x=O.createElement("table"),k=O.createElement("tr"),b=O.createElement("div"),x.style.cssText="position:absolute;left:-11111px;border-collapse:separate",k.style.cssText="box-sizing:content-box;border:1px solid",k.style.height="1px",b.style.height="9px",b.style.display="block",Me.appendChild(x).appendChild(k).appendChild(b),D=l.getComputedStyle(k),a=parseInt(D.height,10)+parseInt(D.borderTopWidth,10)+parseInt(D.borderBottomWidth,10)===k.offsetHeight,Me.removeChild(x)),a}}))})();function Ze(e,t,i){var n,o,s,a,f=Dt.test(t),d=e.style;return i=i||ut(e),i&&(a=i.getPropertyValue(t)||i[t],f&&a&&(a=a.replace(Xe,"$1")||void 0),a===""&&!He(e)&&(a=r.style(e,t)),!j.pixelBoxStyles()&&kt.test(a)&&cn.test(t)&&(n=d.width,o=d.minWidth,s=d.maxWidth,d.minWidth=d.maxWidth=d.width=a,a=i.width,d.width=n,d.minWidth=o,d.maxWidth=s)),a!==void 0?a+"":a}function ui(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var di=["Webkit","Moz","ms"],fi=O.createElement("div").style,pi={};function un(e){for(var t=e[0].toUpperCase()+e.slice(1),i=di.length;i--;)if(e=di[i]+t,e in fi)return e}function At(e){var t=r.cssProps[e]||pi[e];return t||(e in fi?e:pi[e]=un(e)||e)}var dn=/^(none|table(?!-c[ea]).+)/,fn={position:"absolute",visibility:"hidden",display:"block"},hi={letterSpacing:"0",fontWeight:"400"};function gi(e,t,i){var n=Je.exec(t);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):t}function It(e,t,i,n,o,s){var a=t==="width"?1:0,f=0,d=0,g=0;if(i===(n?"border":"content"))return 0;for(;a<4;a+=2)i==="margin"&&(g+=r.css(e,i+Ce[a],!0,o)),n?(i==="content"&&(d-=r.css(e,"padding"+Ce[a],!0,o)),i!=="margin"&&(d-=r.css(e,"border"+Ce[a]+"Width",!0,o))):(d+=r.css(e,"padding"+Ce[a],!0,o),i!=="padding"?d+=r.css(e,"border"+Ce[a]+"Width",!0,o):f+=r.css(e,"border"+Ce[a]+"Width",!0,o));return!n&&s>=0&&(d+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-d-f-.5))||0),d+g}function mi(e,t,i){var n=ut(e),o=!j.boxSizingReliable()||i,s=o&&r.css(e,"boxSizing",!1,n)==="border-box",a=s,f=Ze(e,t,n),d="offset"+t[0].toUpperCase()+t.slice(1);if(kt.test(f)){if(!i)return f;f="auto"}return(!j.boxSizingReliable()&&s||!j.reliableTrDimensions()&&Y(e,"tr")||f==="auto"||!parseFloat(f)&&r.css(e,"display",!1,n)==="inline")&&e.getClientRects().length&&(s=r.css(e,"boxSizing",!1,n)==="border-box",a=d in e,a&&(f=e[d])),f=parseFloat(f)||0,f+It(e,t,i||(s?"border":"content"),a,n,f)+"px"}r.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=Ze(e,"opacity");return i===""?"1":i}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,i,n){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var o,s,a,f=he(t),d=Dt.test(t),g=e.style;if(d||(t=At(f)),a=r.cssHooks[t]||r.cssHooks[f],i!==void 0){if(s=typeof i,s==="string"&&(o=Je.exec(i))&&o[1]&&(i=ei(e,t,o),s="number"),i==null||i!==i)return;s==="number"&&!d&&(i+=o&&o[3]||(r.cssNumber[f]?"":"px")),!j.clearCloneStyle&&i===""&&t.indexOf("background")===0&&(g[t]="inherit"),(!a||!("set"in a)||(i=a.set(e,i,n))!==void 0)&&(d?g.setProperty(t,i):g[t]=i)}else return a&&"get"in a&&(o=a.get(e,!1,n))!==void 0?o:g[t]}},css:function(e,t,i,n){var o,s,a,f=he(t),d=Dt.test(t);return d||(t=At(f)),a=r.cssHooks[t]||r.cssHooks[f],a&&"get"in a&&(o=a.get(e,!0,i)),o===void 0&&(o=Ze(e,t,n)),o==="normal"&&t in hi&&(o=hi[t]),i===""||i?(s=parseFloat(o),i===!0||isFinite(s)?s||0:o):o}}),r.each(["height","width"],function(e,t){r.cssHooks[t]={get:function(i,n,o){if(n)return dn.test(r.css(i,"display"))&&(!i.getClientRects().length||!i.getBoundingClientRect().width)?ci(i,fn,function(){return mi(i,t,o)}):mi(i,t,o)},set:function(i,n,o){var s,a=ut(i),f=!j.scrollboxSize()&&a.position==="absolute",d=f||o,g=d&&r.css(i,"boxSizing",!1,a)==="border-box",x=o?It(i,t,o,g,a):0;return g&&f&&(x-=Math.ceil(i["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(a[t])-It(i,t,"border",!1,a)-.5)),x&&(s=Je.exec(n))&&(s[3]||"px")!=="px"&&(i.style[t]=n,n=r.css(i,t)),gi(i,n,x)}}}),r.cssHooks.marginLeft=ui(j.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ze(e,"marginLeft"))||e.getBoundingClientRect().left-ci(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(e,t){r.cssHooks[e+t]={expand:function(i){for(var n=0,o={},s=typeof i=="string"?i.split(" "):[i];n<4;n++)o[e+Ce[n]+t]=s[n]||s[n-2]||s[0];return o}},e!=="margin"&&(r.cssHooks[e+t].set=gi)}),r.fn.extend({css:function(e,t){return Se(this,function(i,n,o){var s,a,f={},d=0;if(Array.isArray(n)){for(s=ut(i),a=n.length;d<a;d++)f[n[d]]=r.css(i,n[d],!1,s);return f}return o!==void 0?r.style(i,n,o):r.css(i,n)},e,t,arguments.length>1)}});function se(e,t,i,n,o){return new se.prototype.init(e,t,i,n,o)}r.Tween=se,se.prototype={constructor:se,init:function(e,t,i,n,o,s){this.elem=e,this.prop=i,this.easing=o||r.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=s||(r.cssNumber[i]?"":"px")},cur:function(){var e=se.propHooks[this.prop];return e&&e.get?e.get(this):se.propHooks._default.get(this)},run:function(e){var t,i=se.propHooks[this.prop];return this.options.duration?this.pos=t=r.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):se.propHooks._default.set(this),this}},se.prototype.init.prototype=se.prototype,se.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=r.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){r.fx.step[e.prop]?r.fx.step[e.prop](e):e.elem.nodeType===1&&(r.cssHooks[e.prop]||e.elem.style[At(e.prop)]!=null)?r.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},se.propHooks.scrollTop=se.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},r.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},r.fx=se.prototype.init,r.fx.step={};var _e,dt,pn=/^(?:toggle|show|hide)$/,hn=/queueHooks$/;function Et(){dt&&(O.hidden===!1&&l.requestAnimationFrame?l.requestAnimationFrame(Et):l.setTimeout(Et,r.fx.interval),r.fx.tick())}function yi(){return l.setTimeout(function(){_e=void 0}),_e=Date.now()}function ft(e,t){var i,n=0,o={height:e};for(t=t?1:0;n<4;n+=2-t)i=Ce[n],o["margin"+i]=o["padding"+i]=e;return t&&(o.opacity=o.width=e),o}function bi(e,t,i){for(var n,o=(de.tweeners[t]||[]).concat(de.tweeners["*"]),s=0,a=o.length;s<a;s++)if(n=o[s].call(i,t,e))return n}function gn(e,t,i){var n,o,s,a,f,d,g,x,k="width"in t||"height"in t,b=this,D={},U=e.style,_=e.nodeType&&lt(e),H=N.get(e,"fxshow");i.queue||(a=r._queueHooks(e,"fx"),a.unqueued==null&&(a.unqueued=0,f=a.empty.fire,a.empty.fire=function(){a.unqueued||f()}),a.unqueued++,b.always(function(){b.always(function(){a.unqueued--,r.queue(e,"fx").length||a.empty.fire()})}));for(n in t)if(o=t[n],pn.test(o)){if(delete t[n],s=s||o==="toggle",o===(_?"hide":"show"))if(o==="show"&&H&&H[n]!==void 0)_=!0;else continue;D[n]=H&&H[n]||r.style(e,n)}if(d=!r.isEmptyObject(t),!(!d&&r.isEmptyObject(D))){k&&e.nodeType===1&&(i.overflow=[U.overflow,U.overflowX,U.overflowY],g=H&&H.display,g==null&&(g=N.get(e,"display")),x=r.css(e,"display"),x==="none"&&(g?x=g:(Be([e],!0),g=e.style.display||g,x=r.css(e,"display"),Be([e]))),(x==="inline"||x==="inline-block"&&g!=null)&&r.css(e,"float")==="none"&&(d||(b.done(function(){U.display=g}),g==null&&(x=U.display,g=x==="none"?"":x)),U.display="inline-block")),i.overflow&&(U.overflow="hidden",b.always(function(){U.overflow=i.overflow[0],U.overflowX=i.overflow[1],U.overflowY=i.overflow[2]})),d=!1;for(n in D)d||(H?"hidden"in H&&(_=H.hidden):H=N.access(e,"fxshow",{display:g}),s&&(H.hidden=!_),_&&Be([e],!0),b.done(function(){_||Be([e]),N.remove(e,"fxshow");for(n in D)r.style(e,n,D[n])})),d=bi(_?H[n]:0,n,b),n in H||(H[n]=d.start,_&&(d.end=d.start,d.start=0))}}function mn(e,t){var i,n,o,s,a;for(i in e)if(n=he(i),o=t[n],s=e[i],Array.isArray(s)&&(o=s[1],s=e[i]=s[0]),i!==n&&(e[n]=s,delete e[i]),a=r.cssHooks[n],a&&"expand"in a){s=a.expand(s),delete e[n];for(i in s)i in e||(e[i]=s[i],t[i]=o)}else t[n]=o}function de(e,t,i){var n,o,s=0,a=de.prefilters.length,f=r.Deferred().always(function(){delete d.elem}),d=function(){if(o)return!1;for(var k=_e||yi(),b=Math.max(0,g.startTime+g.duration-k),D=b/g.duration||0,U=1-D,_=0,H=g.tweens.length;_<H;_++)g.tweens[_].run(U);return f.notifyWith(e,[g,U,b]),U<1&&H?b:(H||f.notifyWith(e,[g,1,0]),f.resolveWith(e,[g]),!1)},g=f.promise({elem:e,props:r.extend({},t),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},i),originalProperties:t,originalOptions:i,startTime:_e||yi(),duration:i.duration,tweens:[],createTween:function(k,b){var D=r.Tween(e,g.opts,k,b,g.opts.specialEasing[k]||g.opts.easing);return g.tweens.push(D),D},stop:function(k){var b=0,D=k?g.tweens.length:0;if(o)return this;for(o=!0;b<D;b++)g.tweens[b].run(1);return k?(f.notifyWith(e,[g,1,0]),f.resolveWith(e,[g,k])):f.rejectWith(e,[g,k]),this}}),x=g.props;for(mn(x,g.opts.specialEasing);s<a;s++)if(n=de.prefilters[s].call(g,e,x,g.opts),n)return z(n.stop)&&(r._queueHooks(g.elem,g.opts.queue).stop=n.stop.bind(n)),n;return r.map(x,bi,g),z(g.opts.start)&&g.opts.start.call(e,g),g.progress(g.opts.progress).done(g.opts.done,g.opts.complete).fail(g.opts.fail).always(g.opts.always),r.fx.timer(r.extend(d,{elem:e,anim:g,queue:g.opts.queue})),g}r.Animation=r.extend(de,{tweeners:{"*":[function(e,t){var i=this.createTween(e,t);return ei(i.elem,e,Je.exec(t),i),i}]},tweener:function(e,t){z(e)?(t=e,e=["*"]):e=e.match(pe);for(var i,n=0,o=e.length;n<o;n++)i=e[n],de.tweeners[i]=de.tweeners[i]||[],de.tweeners[i].unshift(t)},prefilters:[gn],prefilter:function(e,t){t?de.prefilters.unshift(e):de.prefilters.push(e)}}),r.speed=function(e,t,i){var n=e&&typeof e=="object"?r.extend({},e):{complete:i||!i&&t||z(e)&&e,duration:e,easing:i&&t||t&&!z(t)&&t};return r.fx.off?n.duration=0:typeof n.duration!="number"&&(n.duration in r.fx.speeds?n.duration=r.fx.speeds[n.duration]:n.duration=r.fx.speeds._default),(n.queue==null||n.queue===!0)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){z(n.old)&&n.old.call(this),n.queue&&r.dequeue(this,n.queue)},n},r.fn.extend({fadeTo:function(e,t,i,n){return this.filter(lt).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(e,t,i,n){var o=r.isEmptyObject(e),s=r.speed(t,i,n),a=function(){var f=de(this,r.extend({},e),s);(o||N.get(this,"finish"))&&f.stop(!0)};return a.finish=a,o||s.queue===!1?this.each(a):this.queue(s.queue,a)},stop:function(e,t,i){var n=function(o){var s=o.stop;delete o.stop,s(i)};return typeof e!="string"&&(i=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var o=!0,s=e!=null&&e+"queueHooks",a=r.timers,f=N.get(this);if(s)f[s]&&f[s].stop&&n(f[s]);else for(s in f)f[s]&&f[s].stop&&hn.test(s)&&n(f[s]);for(s=a.length;s--;)a[s].elem===this&&(e==null||a[s].queue===e)&&(a[s].anim.stop(i),o=!1,a.splice(s,1));(o||!i)&&r.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,i=N.get(this),n=i[e+"queue"],o=i[e+"queueHooks"],s=r.timers,a=n?n.length:0;for(i.finish=!0,r.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<a;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete i.finish})}}),r.each(["toggle","show","hide"],function(e,t){var i=r.fn[t];r.fn[t]=function(n,o,s){return n==null||typeof n=="boolean"?i.apply(this,arguments):this.animate(ft(t,!0),n,o,s)}}),r.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){r.fn[e]=function(i,n,o){return this.animate(t,i,n,o)}}),r.timers=[],r.fx.tick=function(){var e,t=0,i=r.timers;for(_e=Date.now();t<i.length;t++)e=i[t],!e()&&i[t]===e&&i.splice(t--,1);i.length||r.fx.stop(),_e=void 0},r.fx.timer=function(e){r.timers.push(e),r.fx.start()},r.fx.interval=13,r.fx.start=function(){dt||(dt=!0,Et())},r.fx.stop=function(){dt=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(e,t){return e=r.fx&&r.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(i,n){var o=l.setTimeout(i,e);n.stop=function(){l.clearTimeout(o)}})},(function(){var e=O.createElement("input"),t=O.createElement("select"),i=t.appendChild(O.createElement("option"));e.type="checkbox",j.checkOn=e.value!=="",j.optSelected=i.selected,e=O.createElement("input"),e.value="t",e.type="radio",j.radioValue=e.value==="t"})();var vi,et=r.expr.attrHandle;r.fn.extend({attr:function(e,t){return Se(this,r.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){r.removeAttr(this,e)})}}),r.extend({attr:function(e,t,i){var n,o,s=e.nodeType;if(!(s===3||s===8||s===2)){if(typeof e.getAttribute>"u")return r.prop(e,t,i);if((s!==1||!r.isXMLDoc(e))&&(o=r.attrHooks[t.toLowerCase()]||(r.expr.match.bool.test(t)?vi:void 0)),i!==void 0){if(i===null){r.removeAttr(e,t);return}return o&&"set"in o&&(n=o.set(e,i,t))!==void 0?n:(e.setAttribute(t,i+""),i)}return o&&"get"in o&&(n=o.get(e,t))!==null?n:(n=r.find.attr(e,t),n??void 0)}},attrHooks:{type:{set:function(e,t){if(!j.radioValue&&t==="radio"&&Y(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}},removeAttr:function(e,t){var i,n=0,o=t&&t.match(pe);if(o&&e.nodeType===1)for(;i=o[n++];)e.removeAttribute(i)}}),vi={set:function(e,t,i){return t===!1?r.removeAttr(e,i):e.setAttribute(i,i),i}},r.each(r.expr.match.bool.source.match(/\w+/g),function(e,t){var i=et[t]||r.find.attr;et[t]=function(n,o,s){var a,f,d=o.toLowerCase();return s||(f=et[d],et[d]=a,a=i(n,o,s)!=null?d:null,et[d]=f),a}});var yn=/^(?:input|select|textarea|button)$/i,bn=/^(?:a|area)$/i;r.fn.extend({prop:function(e,t){return Se(this,r.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[r.propFix[e]||e]})}}),r.extend({prop:function(e,t,i){var n,o,s=e.nodeType;if(!(s===3||s===8||s===2))return(s!==1||!r.isXMLDoc(e))&&(t=r.propFix[t]||t,o=r.propHooks[t]),i!==void 0?o&&"set"in o&&(n=o.set(e,i,t))!==void 0?n:e[t]=i:o&&"get"in o&&(n=o.get(e,t))!==null?n:e[t]},propHooks:{tabIndex:{get:function(e){var t=r.find.attr(e,"tabindex");return t?parseInt(t,10):yn.test(e.nodeName)||bn.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),j.optSelected||(r.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function Ne(e){var t=e.match(pe)||[];return t.join(" ")}function $e(e){return e.getAttribute&&e.getAttribute("class")||""}function Lt(e){return Array.isArray(e)?e:typeof e=="string"?e.match(pe)||[]:[]}r.fn.extend({addClass:function(e){var t,i,n,o,s,a;return z(e)?this.each(function(f){r(this).addClass(e.call(this,f,$e(this)))}):(t=Lt(e),t.length?this.each(function(){if(n=$e(this),i=this.nodeType===1&&" "+Ne(n)+" ",i){for(s=0;s<t.length;s++)o=t[s],i.indexOf(" "+o+" ")<0&&(i+=o+" ");a=Ne(i),n!==a&&this.setAttribute("class",a)}}):this)},removeClass:function(e){var t,i,n,o,s,a;return z(e)?this.each(function(f){r(this).removeClass(e.call(this,f,$e(this)))}):arguments.length?(t=Lt(e),t.length?this.each(function(){if(n=$e(this),i=this.nodeType===1&&" "+Ne(n)+" ",i){for(s=0;s<t.length;s++)for(o=t[s];i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");a=Ne(i),n!==a&&this.setAttribute("class",a)}}):this):this.attr("class","")},toggleClass:function(e,t){var i,n,o,s,a=typeof e,f=a==="string"||Array.isArray(e);return z(e)?this.each(function(d){r(this).toggleClass(e.call(this,d,$e(this),t),t)}):typeof t=="boolean"&&f?t?this.addClass(e):this.removeClass(e):(i=Lt(e),this.each(function(){if(f)for(s=r(this),o=0;o<i.length;o++)n=i[o],s.hasClass(n)?s.removeClass(n):s.addClass(n);else(e===void 0||a==="boolean")&&(n=$e(this),n&&N.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||e===!1?"":N.get(this,"__className__")||""))}))},hasClass:function(e){var t,i,n=0;for(t=" "+e+" ";i=this[n++];)if(i.nodeType===1&&(" "+Ne($e(i))+" ").indexOf(t)>-1)return!0;return!1}});var vn=/\r/g;r.fn.extend({val:function(e){var t,i,n,o=this[0];return arguments.length?(n=z(e),this.each(function(s){var a;this.nodeType===1&&(n?a=e.call(this,s,r(this).val()):a=e,a==null?a="":typeof a=="number"?a+="":Array.isArray(a)&&(a=r.map(a,function(f){return f==null?"":f+""})),t=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,a,"value")===void 0)&&(this.value=a))})):o?(t=r.valHooks[o.type]||r.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&(i=t.get(o,"value"))!==void 0?i:(i=o.value,typeof i=="string"?i.replace(vn,""):i??"")):void 0}}),r.extend({valHooks:{option:{get:function(e){var t=r.find.attr(e,"value");return t??Ne(r.text(e))}},select:{get:function(e){var t,i,n,o=e.options,s=e.selectedIndex,a=e.type==="select-one",f=a?null:[],d=a?s+1:o.length;for(s<0?n=d:n=a?s:0;n<d;n++)if(i=o[n],(i.selected||n===s)&&!i.disabled&&(!i.parentNode.disabled||!Y(i.parentNode,"optgroup"))){if(t=r(i).val(),a)return t;f.push(t)}return f},set:function(e,t){for(var i,n,o=e.options,s=r.makeArray(t),a=o.length;a--;)n=o[a],(n.selected=r.inArray(r.valHooks.option.get(n),s)>-1)&&(i=!0);return i||(e.selectedIndex=-1),s}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=r.inArray(r(e).val(),t)>-1}},j.checkOn||(r.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var tt=l.location,wi={guid:Date.now()},Mt=/\?/;r.parseXML=function(e){var t,i;if(!e||typeof e!="string")return null;try{t=new l.DOMParser().parseFromString(e,"text/xml")}catch{}return i=t&&t.getElementsByTagName("parsererror")[0],(!t||i)&&r.error("Invalid XML: "+(i?r.map(i.childNodes,function(n){return n.textContent}).join(`
`):e)),t};var xi=/^(?:focusinfocus|focusoutblur)$/,Si=function(e){e.stopPropagation()};r.extend(r.event,{trigger:function(e,t,i,n){var o,s,a,f,d,g,x,k,b=[i||O],D=ie.call(e,"type")?e.type:e,U=ie.call(e,"namespace")?e.namespace.split("."):[];if(s=k=a=i=i||O,!(i.nodeType===3||i.nodeType===8)&&!xi.test(D+r.event.triggered)&&(D.indexOf(".")>-1&&(U=D.split("."),D=U.shift(),U.sort()),d=D.indexOf(":")<0&&"on"+D,e=e[r.expando]?e:new r.Event(D,typeof e=="object"&&e),e.isTrigger=n?2:3,e.namespace=U.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+U.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=t==null?[e]:r.makeArray(t,[e]),x=r.event.special[D]||{},!(!n&&x.trigger&&x.trigger.apply(i,t)===!1))){if(!n&&!x.noBubble&&!Re(i)){for(f=x.delegateType||D,xi.test(f+D)||(s=s.parentNode);s;s=s.parentNode)b.push(s),a=s;a===(i.ownerDocument||O)&&b.push(a.defaultView||a.parentWindow||l)}for(o=0;(s=b[o++])&&!e.isPropagationStopped();)k=s,e.type=o>1?f:x.bindType||D,g=(N.get(s,"events")||Object.create(null))[e.type]&&N.get(s,"handle"),g&&g.apply(s,t),g=d&&s[d],g&&g.apply&&Ke(s)&&(e.result=g.apply(s,t),e.result===!1&&e.preventDefault());return e.type=D,!n&&!e.isDefaultPrevented()&&(!x._default||x._default.apply(b.pop(),t)===!1)&&Ke(i)&&d&&z(i[D])&&!Re(i)&&(a=i[d],a&&(i[d]=null),r.event.triggered=D,e.isPropagationStopped()&&k.addEventListener(D,Si),i[D](),e.isPropagationStopped()&&k.removeEventListener(D,Si),r.event.triggered=void 0,a&&(i[d]=a)),e.result}},simulate:function(e,t,i){var n=r.extend(new r.Event,i,{type:e,isSimulated:!0});r.event.trigger(n,null,t)}}),r.fn.extend({trigger:function(e,t){return this.each(function(){r.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];if(i)return r.event.trigger(e,t,i,!0)}});var wn=/\[\]$/,Ci=/\r?\n/g,xn=/^(?:submit|button|image|reset|file)$/i,Sn=/^(?:input|select|textarea|keygen)/i;function Nt(e,t,i,n){var o;if(Array.isArray(t))r.each(t,function(s,a){i||wn.test(e)?n(e,a):Nt(e+"["+(typeof a=="object"&&a!=null?s:"")+"]",a,i,n)});else if(!i&&Oe(t)==="object")for(o in t)Nt(e+"["+o+"]",t[o],i,n);else n(e,t)}r.param=function(e,t){var i,n=[],o=function(s,a){var f=z(a)?a():a;n[n.length]=encodeURIComponent(s)+"="+encodeURIComponent(f??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!r.isPlainObject(e))r.each(e,function(){o(this.name,this.value)});else for(i in e)Nt(i,e[i],t,o);return n.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=r.prop(this,"elements");return e?r.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!r(this).is(":disabled")&&Sn.test(this.nodeName)&&!xn.test(e)&&(this.checked||!Qe.test(e))}).map(function(e,t){var i=r(this).val();return i==null?null:Array.isArray(i)?r.map(i,function(n){return{name:t.name,value:n.replace(Ci,`\r
`)}}):{name:t.name,value:i.replace(Ci,`\r
`)}}).get()}});var Cn=/%20/g,Tn=/#.*$/,kn=/([?&])_=[^&]*/,Dn=/^(.*?):[ \t]*([^\r\n]*)$/mg,An=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,In=/^(?:GET|HEAD)$/,En=/^\/\//,Ti={},$t={},ki="*/".concat("*"),Pt=O.createElement("a");Pt.href=tt.href;function Di(e){return function(t,i){typeof t!="string"&&(i=t,t="*");var n,o=0,s=t.toLowerCase().match(pe)||[];if(z(i))for(;n=s[o++];)n[0]==="+"?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(i)):(e[n]=e[n]||[]).push(i)}}function Ai(e,t,i,n){var o={},s=e===$t;function a(f){var d;return o[f]=!0,r.each(e[f]||[],function(g,x){var k=x(t,i,n);if(typeof k=="string"&&!s&&!o[k])return t.dataTypes.unshift(k),a(k),!1;if(s)return!(d=k)}),d}return a(t.dataTypes[0])||!o["*"]&&a("*")}function Ut(e,t){var i,n,o=r.ajaxSettings.flatOptions||{};for(i in t)t[i]!==void 0&&((o[i]?e:n||(n={}))[i]=t[i]);return n&&r.extend(!0,e,n),e}function Ln(e,t,i){for(var n,o,s,a,f=e.contents,d=e.dataTypes;d[0]==="*";)d.shift(),n===void 0&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n){for(o in f)if(f[o]&&f[o].test(n)){d.unshift(o);break}}if(d[0]in i)s=d[0];else{for(o in i){if(!d[0]||e.converters[o+" "+d[0]]){s=o;break}a||(a=o)}s=s||a}if(s)return s!==d[0]&&d.unshift(s),i[s]}function Mn(e,t,i,n){var o,s,a,f,d,g={},x=e.dataTypes.slice();if(x[1])for(a in e.converters)g[a.toLowerCase()]=e.converters[a];for(s=x.shift();s;)if(e.responseFields[s]&&(i[e.responseFields[s]]=t),!d&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),d=s,s=x.shift(),s){if(s==="*")s=d;else if(d!=="*"&&d!==s){if(a=g[d+" "+s]||g["* "+s],!a){for(o in g)if(f=o.split(" "),f[1]===s&&(a=g[d+" "+f[0]]||g["* "+f[0]],a)){a===!0?a=g[o]:g[o]!==!0&&(s=f[0],x.unshift(f[1]));break}}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(k){return{state:"parsererror",error:a?k:"No conversion from "+d+" to "+s}}}}return{state:"success",data:t}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tt.href,type:"GET",isLocal:An.test(tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ki,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,r.ajaxSettings),t):Ut(r.ajaxSettings,e)},ajaxPrefilter:Di(Ti),ajaxTransport:Di($t),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var i,n,o,s,a,f,d,g,x,k,b=r.ajaxSetup({},t),D=b.context||b,U=b.context&&(D.nodeType||D.jquery)?r(D):r.event,_=r.Deferred(),H=r.Callbacks("once memory"),ee=b.statusCode||{},Z={},ge={},me="canceled",F={readyState:0,getResponseHeader:function(q){var Q;if(d){if(!s)for(s={};Q=Dn.exec(o);)s[Q[1].toLowerCase()+" "]=(s[Q[1].toLowerCase()+" "]||[]).concat(Q[2]);Q=s[q.toLowerCase()+" "]}return Q==null?null:Q.join(", ")},getAllResponseHeaders:function(){return d?o:null},setRequestHeader:function(q,Q){return d==null&&(q=ge[q.toLowerCase()]=ge[q.toLowerCase()]||q,Z[q]=Q),this},overrideMimeType:function(q){return d==null&&(b.mimeType=q),this},statusCode:function(q){var Q;if(q)if(d)F.always(q[F.status]);else for(Q in q)ee[Q]=[ee[Q],q[Q]];return this},abort:function(q){var Q=q||me;return i&&i.abort(Q),Pe(0,Q),this}};if(_.promise(F),b.url=((e||b.url||tt.href)+"").replace(En,tt.protocol+"//"),b.type=t.method||t.type||b.method||b.type,b.dataTypes=(b.dataType||"*").toLowerCase().match(pe)||[""],b.crossDomain==null){f=O.createElement("a");try{f.href=b.url,f.href=f.href,b.crossDomain=Pt.protocol+"//"+Pt.host!=f.protocol+"//"+f.host}catch{b.crossDomain=!0}}if(b.data&&b.processData&&typeof b.data!="string"&&(b.data=r.param(b.data,b.traditional)),Ai(Ti,b,t,F),d)return F;g=r.event&&b.global,g&&r.active++===0&&r.event.trigger("ajaxStart"),b.type=b.type.toUpperCase(),b.hasContent=!In.test(b.type),n=b.url.replace(Tn,""),b.hasContent?b.data&&b.processData&&(b.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(b.data=b.data.replace(Cn,"+")):(k=b.url.slice(n.length),b.data&&(b.processData||typeof b.data=="string")&&(n+=(Mt.test(n)?"&":"?")+b.data,delete b.data),b.cache===!1&&(n=n.replace(kn,"$1"),k=(Mt.test(n)?"&":"?")+"_="+wi.guid+++k),b.url=n+k),b.ifModified&&(r.lastModified[n]&&F.setRequestHeader("If-Modified-Since",r.lastModified[n]),r.etag[n]&&F.setRequestHeader("If-None-Match",r.etag[n])),(b.data&&b.hasContent&&b.contentType!==!1||t.contentType)&&F.setRequestHeader("Content-Type",b.contentType),F.setRequestHeader("Accept",b.dataTypes[0]&&b.accepts[b.dataTypes[0]]?b.accepts[b.dataTypes[0]]+(b.dataTypes[0]!=="*"?", "+ki+"; q=0.01":""):b.accepts["*"]);for(x in b.headers)F.setRequestHeader(x,b.headers[x]);if(b.beforeSend&&(b.beforeSend.call(D,F,b)===!1||d))return F.abort();if(me="abort",H.add(b.complete),F.done(b.success),F.fail(b.error),i=Ai($t,b,t,F),!i)Pe(-1,"No Transport");else{if(F.readyState=1,g&&U.trigger("ajaxSend",[F,b]),d)return F;b.async&&b.timeout>0&&(a=l.setTimeout(function(){F.abort("timeout")},b.timeout));try{d=!1,i.send(Z,Pe)}catch(q){if(d)throw q;Pe(-1,q)}}function Pe(q,Q,nt,Ot){var ye,rt,be,De,Ae,ce=Q;d||(d=!0,a&&l.clearTimeout(a),i=void 0,o=Ot||"",F.readyState=q>0?4:0,ye=q>=200&&q<300||q===304,nt&&(De=Ln(b,F,nt)),!ye&&r.inArray("script",b.dataTypes)>-1&&r.inArray("json",b.dataTypes)<0&&(b.converters["text script"]=function(){}),De=Mn(b,De,F,ye),ye?(b.ifModified&&(Ae=F.getResponseHeader("Last-Modified"),Ae&&(r.lastModified[n]=Ae),Ae=F.getResponseHeader("etag"),Ae&&(r.etag[n]=Ae)),q===204||b.type==="HEAD"?ce="nocontent":q===304?ce="notmodified":(ce=De.state,rt=De.data,be=De.error,ye=!be)):(be=ce,(q||!ce)&&(ce="error",q<0&&(q=0))),F.status=q,F.statusText=(Q||ce)+"",ye?_.resolveWith(D,[rt,ce,F]):_.rejectWith(D,[F,ce,be]),F.statusCode(ee),ee=void 0,g&&U.trigger(ye?"ajaxSuccess":"ajaxError",[F,b,ye?rt:be]),H.fireWith(D,[F,ce]),g&&(U.trigger("ajaxComplete",[F,b]),--r.active||r.event.trigger("ajaxStop")))}return F},getJSON:function(e,t,i){return r.get(e,t,i,"json")},getScript:function(e,t){return r.get(e,void 0,t,"script")}}),r.each(["get","post"],function(e,t){r[t]=function(i,n,o,s){return z(n)&&(s=s||o,o=n,n=void 0),r.ajax(r.extend({url:i,type:t,dataType:s,data:n,success:o},r.isPlainObject(i)&&i))}}),r.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),r._evalUrl=function(e,t,i){return r.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(n){r.globalEval(n,t,i)}})},r.fn.extend({wrapAll:function(e){var t;return this[0]&&(z(e)&&(e=e.call(this[0])),t=r(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var i=this;i.firstElementChild;)i=i.firstElementChild;return i}).append(this)),this},wrapInner:function(e){return z(e)?this.each(function(t){r(this).wrapInner(e.call(this,t))}):this.each(function(){var t=r(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=z(e);return this.each(function(i){r(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(e){return!r.expr.pseudos.visible(e)},r.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new l.XMLHttpRequest}catch{}};var Nn={0:200,1223:204},it=r.ajaxSettings.xhr();j.cors=!!it&&"withCredentials"in it,j.ajax=it=!!it,r.ajaxTransport(function(e){var t,i;if(j.cors||it&&!e.crossDomain)return{send:function(n,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),!e.crossDomain&&!n["X-Requested-With"]&&(n["X-Requested-With"]="XMLHttpRequest");for(s in n)a.setRequestHeader(s,n[s]);t=function(f){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,f==="abort"?a.abort():f==="error"?typeof a.status!="number"?o(0,"error"):o(a.status,a.statusText):o(Nn[a.status]||a.status,a.statusText,(a.responseType||"text")!=="text"||typeof a.responseText!="string"?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),a.onabort!==void 0?a.onabort=i:a.onreadystatechange=function(){a.readyState===4&&l.setTimeout(function(){t&&i()})},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(f){if(t)throw f}},abort:function(){t&&t()}}}),r.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return r.globalEval(e),e}}}),r.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),r.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,i;return{send:function(n,o){t=r("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",i=function(s){t.remove(),i=null,s&&o(s.type==="error"?404:200,s.type)}),O.head.appendChild(t[0])},abort:function(){i&&i()}}}});var Ii=[],Rt=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ii.pop()||r.expando+"_"+wi.guid++;return this[e]=!0,e}}),r.ajaxPrefilter("json jsonp",function(e,t,i){var n,o,s,a=e.jsonp!==!1&&(Rt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Rt.test(e.data)&&"data");if(a||e.dataTypes[0]==="jsonp")return n=e.jsonpCallback=z(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Rt,"$1"+n):e.jsonp!==!1&&(e.url+=(Mt.test(e.url)?"&":"?")+e.jsonp+"="+n),e.converters["script json"]=function(){return s||r.error(n+" was not called"),s[0]},e.dataTypes[0]="json",o=l[n],l[n]=function(){s=arguments},i.always(function(){o===void 0?r(l).removeProp(n):l[n]=o,e[n]&&(e.jsonpCallback=t.jsonpCallback,Ii.push(n)),s&&z(o)&&o(s[0]),s=o=void 0}),"script"}),j.createHTMLDocument=(function(){var e=O.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2})(),r.parseHTML=function(e,t,i){if(typeof e!="string")return[];typeof t=="boolean"&&(i=t,t=!1);var n,o,s;return t||(j.createHTMLDocument?(t=O.implementation.createHTMLDocument(""),n=t.createElement("base"),n.href=O.location.href,t.head.appendChild(n)):t=O),o=Xt.exec(e),s=!i&&[],o?[t.createElement(o[1])]:(o=ri([e],t,s),s&&s.length&&r(s).remove(),r.merge([],o.childNodes))},r.fn.load=function(e,t,i){var n,o,s,a=this,f=e.indexOf(" ");return f>-1&&(n=Ne(e.slice(f)),e=e.slice(0,f)),z(t)?(i=t,t=void 0):t&&typeof t=="object"&&(o="POST"),a.length>0&&r.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(d){s=arguments,a.html(n?r("<div>").append(r.parseHTML(d)).find(n):d)}).always(i&&function(d,g){a.each(function(){i.apply(this,s||[d.responseText,g,d])})}),this},r.expr.pseudos.animated=function(e){return r.grep(r.timers,function(t){return e===t.elem}).length},r.offset={setOffset:function(e,t,i){var n,o,s,a,f,d,g,x=r.css(e,"position"),k=r(e),b={};x==="static"&&(e.style.position="relative"),f=k.offset(),s=r.css(e,"top"),d=r.css(e,"left"),g=(x==="absolute"||x==="fixed")&&(s+d).indexOf("auto")>-1,g?(n=k.position(),a=n.top,o=n.left):(a=parseFloat(s)||0,o=parseFloat(d)||0),z(t)&&(t=t.call(e,i,r.extend({},f))),t.top!=null&&(b.top=t.top-f.top+a),t.left!=null&&(b.left=t.left-f.left+o),"using"in t?t.using.call(e,b):k.css(b)}},r.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(o){r.offset.setOffset(this,e,o)});var t,i,n=this[0];if(n)return n.getClientRects().length?(t=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:t.top+i.pageYOffset,left:t.left+i.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,i,n=this[0],o={top:0,left:0};if(r.css(n,"position")==="fixed")t=n.getBoundingClientRect();else{for(t=this.offset(),i=n.ownerDocument,e=n.offsetParent||i.documentElement;e&&(e===i.body||e===i.documentElement)&&r.css(e,"position")==="static";)e=e.parentNode;e&&e!==n&&e.nodeType===1&&(o=r(e).offset(),o.top+=r.css(e,"borderTopWidth",!0),o.left+=r.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-r.css(n,"marginTop",!0),left:t.left-o.left-r.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&r.css(e,"position")==="static";)e=e.offsetParent;return e||Me})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var i=t==="pageYOffset";r.fn[e]=function(n){return Se(this,function(o,s,a){var f;if(Re(o)?f=o:o.nodeType===9&&(f=o.defaultView),a===void 0)return f?f[t]:o[s];f?f.scrollTo(i?f.pageXOffset:a,i?a:f.pageYOffset):o[s]=a},e,n,arguments.length)}}),r.each(["top","left"],function(e,t){r.cssHooks[t]=ui(j.pixelPosition,function(i,n){if(n)return n=Ze(i,t),kt.test(n)?r(i).position()[t]+"px":n})}),r.each({Height:"height",Width:"width"},function(e,t){r.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,n){r.fn[n]=function(o,s){var a=arguments.length&&(i||typeof o!="boolean"),f=i||(o===!0||s===!0?"margin":"border");return Se(this,function(d,g,x){var k;return Re(d)?n.indexOf("outer")===0?d["inner"+e]:d.document.documentElement["client"+e]:d.nodeType===9?(k=d.documentElement,Math.max(d.body["scroll"+e],k["scroll"+e],d.body["offset"+e],k["offset"+e],k["client"+e])):x===void 0?r.css(d,g,f):r.style(d,g,x,f)},t,a?o:void 0,a)}})}),r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){r.fn[t]=function(i){return this.on(t,i)}}),r.fn.extend({bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,n){return this.on(t,e,i,n)},undelegate:function(e,t,i){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",i)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){r.fn[t]=function(i,n){return arguments.length>0?this.on(t,null,i,n):this.trigger(t)}});var $n=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;r.proxy=function(e,t){var i,n,o;if(typeof t=="string"&&(i=e[t],t=e,e=i),!!z(e))return n=C.call(arguments,2),o=function(){return e.apply(t||this,n.concat(C.call(arguments)))},o.guid=e.guid=e.guid||r.guid++,o},r.holdReady=function(e){e?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=Y,r.isFunction=z,r.isWindow=Re,r.camelCase=he,r.type=Oe,r.now=Date.now,r.isNumeric=function(e){var t=r.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},r.trim=function(e){return e==null?"":(e+"").replace($n,"$1")};var Pn=l.jQuery,Un=l.$;return r.noConflict=function(e){return l.$===r&&(l.$=Un),e&&l.jQuery===r&&(l.jQuery=Pn),r},typeof p>"u"&&(l.jQuery=l.$=r),r})})(yt)),yt.exports}var qn=_n();const S=Wn(qn);class Ee{constructor(){this.isRecognitionActive=!1,this.recognition=null,this.isTimerRunning=!1,this.currentTimer=null,this.remainingSeconds=60,this.startTime=null,this.progressCircle=null,this.browser=this.detectBrowser(),this.detectionEnabled=!1,this.originalTitle=document.title,this.titleUpdateInterval=null,this.startTriggers=["momento","un momento","espera un momento","un momento en la línea","dame un minuto en la línea","dame un minuto en la línea","me esperas un momento en la linea"],this.stopTriggers=["gracias","disculpe la demora","gracias por esperar","gracias por tiempo de espera","muchas gracias por el tiempo","Disculpa por la demora, gracias por la espera"],this.init()}init(){this.setupProgressCircle(),this.setupEventListeners(),this.initSpeechRecognition(),this.displayPhrases(),this.setupDynamicTitle(),this.showInitMessage()}detectBrowser(){const l=navigator.userAgent;return l.includes("Edg/")?"edge":l.includes("Chrome/")&&!l.includes("Edg")?"chrome":l.includes("Firefox/")?"firefox":l.includes("Safari/")&&!l.includes("Chrome")?"safari":"unknown"}setupProgressCircle(){this.progressCircle=S(".progress-ring-circle")[0];const l=2*Math.PI*80;this.progressCircle.style.strokeDasharray=l,this.progressCircle.style.strokeDashoffset=0}setupDynamicTitle(){this.titleUpdateInterval=setInterval(()=>{this.updateDynamicTitle()},1e3),document.addEventListener("visibilitychange",()=>{this.updateDynamicTitle()}),console.log("📱 Dynamic title system initialized")}updateDynamicTitle(){let l=this.originalTitle;this.isTimerRunning?(l=`⏱️ ${this.remainingSeconds}s - ${this.originalTitle}`,this.remainingSeconds<=10&&(l=`🔥 ${this.remainingSeconds}s - ${this.originalTitle}`)):!this.isRecognitionActive&&this.browser!=="chrome"?l=`🎤 Listo - ${this.originalTitle}`:this.isRecognitionActive?l=`🎤 Escuchando - ${this.originalTitle}`:this.browser==="chrome"&&(l=`Estas en Chrome! - ${this.originalTitle}`),document.title!==l&&(document.title=l)}setupEventListeners(){S("#startTimer").on("click",()=>this.startTimer()),S("#stopTimer").on("click",()=>this.stopTimer()),S("#resetTimer").on("click",()=>this.resetTimer()),S("#toggleDetection").on("click",()=>this.toggleDetection()),S("#clearAllData").on("click",()=>this.clearAllData()),S(document).on("keydown",l=>{if(!S(l.target).is("input, textarea")){switch(l.code){case"Space":l.preventDefault(),this.isTimerRunning?this.stopTimer():this.startTimer();break;case"KeyR":l.preventDefault(),this.resetTimer();break;case"KeyD":l.preventDefault(),this.toggleDetection();break;case"KeyG":l.preventDefault(),typeof this.openGenesysCloud=="function"&&this.openGenesysCloud();break}if(l.key>="1"&&l.key<="4"){const p=parseInt(l.key);S(`.image-box[data-slot="${p}"] .image-dropzone`).click()}}}),S(window).on("beforeunload",()=>{this.cleanupResources()})}cleanupResources(){typeof this.saveNotes=="function"&&this.saveNotes(),typeof this.saveGenesysUrl=="function"&&this.saveGenesysUrl(),typeof this.saveDetectionPreference=="function"&&this.saveDetectionPreference(),this.titleUpdateInterval&&clearInterval(this.titleUpdateInterval),document.title=this.originalTitle,this.isRecognitionActive&&this.recognition&&this.recognition.stop(),typeof this.cleanupAllBlobUrls=="function"&&this.cleanupAllBlobUrls()}initSpeechRecognition(){if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){console.warn("Speech Recognition not supported"),this.showMessage("🎤 Reconocimiento de voz no disponible","warning"),S("#toggleDetection").prop("disabled",!0).addClass("disabled"),this.updateDynamicTitle();return}const l=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new l,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.lang="es-ES",this.recognition.onstart=()=>{console.log("🎤 Speech recognition started"),S("#toggleDetection").addClass("active"),this.updateDetectionStatus("Escuchando..."),this.updateDynamicTitle()},this.recognition.onresult=p=>{const m=p.results[p.results.length-1][0].transcript.toLowerCase().trim();console.log("🎤 Speech detected:",m),this.processSpeechResult(m)},this.recognition.onerror=p=>{console.error("🎤 Speech error:",p.error),p.error==="not-allowed"?(this.showMessage("🚫 Permisos de micrófono denegados","error"),this.isRecognitionActive=!1,S("#toggleDetection").removeClass("active"),this.updateDetectionStatus("Sin permisos"),this.updateDynamicTitle()):p.error!=="no-speech"&&this.restartRecognition()},this.recognition.onend=()=>{this.isRecognitionActive?this.restartRecognition():(S("#toggleDetection").removeClass("active"),this.updateDetectionStatus("Inactivo"),this.updateDynamicTitle())}}showChromeWarningOnDetectionClick(){S("body").prepend(`
            <div class="smart-browser-warning glass-card" id="smartBrowserWarning">
                <div class="warning-content">
                    <div class="warning-icon">⚠️</div>
                    <h3>Te recomiendo Edge para esta función </h3>
                    <p><strong>En Chrome:</strong> puedes usar manualmente</p>
                    
                    <div class="recommendation">
                        <div class="browser-setup">
                            <div class="browser-item">
                                <i class="fab fa-chrome"></i>
                                <span>Chrome: Genesys Cloud (llamadas)</span>
                            </div>
                            <div class="browser-item recommended">
                                <i class="fab fa-edge"></i>
                                <span>Edge: WIBCP (contador + detección)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="warning-actions">
                        <button onclick="app.openInEdge()" class="btn-primary">
                            <i class="fab fa-edge"></i> Abrir en Edge
                        </button>
                        <button onclick="app.dismissWarning()" class="btn-secondary">
                            Entendido
                        </button>
                    </div>
                    
                    <div class="auto-dismiss-counter">
                        Se cerrará automáticamente en <span id="dismissCounter">10</span>s
                    </div>
                </div>
            </div>
        `);let p=10;const m=setInterval(()=>{p--,S("#dismissCounter").text(p),p<=0&&(clearInterval(m),this.dismissWarning())},1e3);console.log("⚠️ Smart Chrome warning shown (10s auto-dismiss)")}dismissWarning(){S("#smartBrowserWarning").fadeOut(400,()=>{S("#smartBrowserWarning").remove()})}openInEdge(){const p=`microsoft-edge:${window.location.href}`;window.location.href=p,setTimeout(()=>{this.showMessage("💡 Copia esta URL en Microsoft Edge para mejor experiencia","info")},1e3),this.dismissWarning()}toggleDetection(){if(this.browser==="chrome"&&window.innerWidth>960){this.showChromeWarningOnDetectionClick();return}if(!this.recognition){this.showMessage("🚫 Reconocimiento de voz no disponible","warning");return}if(this.isRecognitionActive=!this.isRecognitionActive,this.detectionEnabled=this.isRecognitionActive,this.isRecognitionActive)try{this.recognition.start(),this.showMessage("🎤 Detección automática activada","success")}catch(l){console.error("Failed to start recognition:",l),this.isRecognitionActive=!1,this.detectionEnabled=!1,this.showMessage("❌ Error al iniciar reconocimiento","error")}else this.recognition.stop(),S("#toggleDetection").removeClass("active"),this.updateDetectionStatus("Inactivo"),this.showMessage("🔇 Detección automática desactivada","info");this.updateDynamicTitle()}updateDetectionStatus(l){const m=S("#toggleDetection").find("span"),w=m.data("original")||m.text();m.data("original")||m.data("original",w),m.text(l==="Inactivo"?w:l)}restartRecognition(){this.isRecognitionActive&&this.recognition&&setTimeout(()=>{try{this.recognition.start()}catch(l){console.log("🎤 Recognition restart failed:",l.message)}},1500)}processSpeechResult(l){const p=this.normalizeText(l),m=this.startTriggers.some(C=>p.includes(this.normalizeText(C))),w=this.stopTriggers.some(C=>p.includes(this.normalizeText(C)));m&&!this.isTimerRunning?(console.log("✅ Start trigger detected:",l),this.startTimer(),this.showMessage(`🎯 "${l}" detectado`,"success")):w&&this.isTimerRunning&&(console.log("⏹️ Stop trigger detected:",l),this.stopTimer(),this.showMessage(`🎯 "${l}" detectado`,"success"))}normalizeText(l){return l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g,"").trim()}startTimer(){this.isTimerRunning||(this.isTimerRunning=!0,this.remainingSeconds=60,this.startTime=new Date,S("#timerStatus").text("Contando tiempo..."),this.currentTimer=setInterval(()=>{this.remainingSeconds--,this.updateTimerDisplay(),this.updateDynamicTitle(),this.remainingSeconds<=0&&this.finishTimer()},1e3),this.showMessage("⏱️ Timer iniciado","success"),this.updateDynamicTitle(),console.log("⏱️ Timer started:",this.startTime.toISOString()))}updateTimerDisplay(){S("#timerValue").text(this.remainingSeconds);const l=2*Math.PI*80,p=(60-this.remainingSeconds)/60,m=l*p;this.progressCircle.style.strokeDashoffset=m,this.remainingSeconds<=10?(S(".progress-ring-circle").addClass("warning"),S("#timerValue").css("color","var(--warning-color)")):(S(".progress-ring-circle").removeClass("warning"),S("#timerValue").css("color","var(--text-primary)"))}finishTimer(){this.stopTimer(),this.showMessage("⏰ ¡Tiempo completado!","warning"),S("body").addClass("timer-finished"),setTimeout(()=>S("body").removeClass("timer-finished"),3e3),document.title="🔥 ¡COMPLETADO! - "+this.originalTitle,setTimeout(()=>{this.updateDynamicTitle()},3e3),this.playNotificationSound()}playNotificationSound(){try{const l=new(window.AudioContext||window.webkitAudioContext),p=l.createOscillator(),m=l.createGain();p.connect(m),m.connect(l.destination),p.frequency.value=800,p.type="sine",m.gain.setValueAtTime(0,l.currentTime),m.gain.linearRampToValueAtTime(.1,l.currentTime+.01),m.gain.exponentialRampToValueAtTime(.01,l.currentTime+.5),p.start(l.currentTime),p.stop(l.currentTime+.5)}catch{console.log("🔊 Audio notification not supported")}}stopTimer(){if(!this.isTimerRunning)return;clearInterval(this.currentTimer),this.isTimerRunning=!1;const l=new Date,p=60-this.remainingSeconds;p>0&&typeof this.addToHistory=="function"&&(this.addToHistory(this.startTime,l,p),this.showMessage(`⏹️ Duración: ${this.formatDuration(p)}`,"info")),this.resetTimer(),this.updateDynamicTitle(),console.log("⏹️ Timer stopped:",p,"seconds")}resetTimer(){clearInterval(this.currentTimer),this.isTimerRunning=!1,this.remainingSeconds=60,this.startTime=null,S("#timerValue").text("60"),S("#timerStatus").text("Listo para iniciar"),this.progressCircle.style.strokeDashoffset=0,S(".progress-ring-circle").removeClass("warning"),S("#timerValue").css("color","var(--text-primary)"),this.updateDynamicTitle()}formatDuration(l){const p=Math.floor(l/60),m=l%60;return p>0?`${p}m ${m}s`:`${m}s`}displayPhrases(){const l=this.startTriggers.map(m=>`<span class="phrase-item default">${m}</span>`).join("");S("#startPhrasesList").html(l);const p=this.stopTriggers.map(m=>`<span class="phrase-item default">${m}</span>`).join("");S("#stopPhrasesList").html(p)}saveToLS(l,p){try{return localStorage.setItem(l,JSON.stringify(p)),!0}catch(m){return console.error("💾 Save error:",m),!1}}loadFromLS(l,p=null){try{const m=localStorage.getItem(l);return m?JSON.parse(m):p}catch(m){return console.error("💾 Load error:",m),p}}removeLS(l){try{return localStorage.removeItem(l),!0}catch(p){return console.error("💾 Remove error:",p),!1}}showMessage(l,p="info"){const w=S(`
            <div class="toast toast-${p}">
                <i class="${{success:"fas fa-check-circle",warning:"fas fa-exclamation-triangle",error:"fas fa-exclamation-circle",info:"fas fa-info-circle"}[p]}"></i>
                <span>${l}</span>
            </div>
        `);S("body").append(w),setTimeout(()=>w.addClass("show"),100),setTimeout(()=>{w.removeClass("show"),setTimeout(()=>w.remove(),300)},3500)}showInitMessage(){setTimeout(()=>{const l=this.browser==="chrome"?"Estas en Google Chrome":`Perfecto en ${this.browser.toUpperCase()}`;this.showMessage(`${l}`,"success")},2e3)}}S(document).ready(()=>{window.app=new Ee;const c=window.app.browser==="chrome"?"├─ ⚠️  Detección con advertencia (Chrome)":"├─ ⌨️  D: Toggle detección";console.log(`
🎯 WIBCP v2.2 - Smart Call Center Tool
├─ ⌨️  Espacio: Start/Stop timer
├─ ⌨️  R: Reset timer  
${c}
├─ ⌨️  G: Abrir Genesys Cloud
├─ ⌨️  1-4: Focus image slots
├─ 🌐 Browser: ${window.app.browser}
├─ 📱 Dynamic title: ENABLED
└─ 🧠 Smart warnings: ON-DEMAND
    `)});S("<style>").html(`
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 3000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .toast.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .toast-success { border-left: 4px solid var(--success-color); }
    .toast-warning { border-left: 4px solid var(--warning-color); }
    .toast-error { border-left: 4px solid var(--danger-color); }
    .toast-info { border-left: 4px solid var(--primary-color); }
    
    .toast span { color: var(--text-primary); }
    
    .timer-finished {
        animation: timerFinishPulse 3s ease-in-out;
    }
    
    @keyframes timerFinishPulse {
        0%, 100% { background: inherit; }
        25%, 75% { background: rgba(245, 158, 11, 0.1); }
        50% { background: rgba(245, 158, 11, 0.15); }
    }
    
    /* Smart Browser Warning Styles */
    .smart-browser-warning {
        position: fixed;
        top: 10vh;
        left: 30vw; 
        z-index: 5000;
        width: 90%;
        max-width: 600px;
        border-radius: 5vh;
    }
    
    .warning-content {
        text-align: center;
        padding: 2rem;
    }
    
    .warning-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .warning-content h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .recommendation {
        margin: 1.5rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }
    
    .browser-setup {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }
    
    .browser-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        font-size: 0.9rem;
    }
    
    .browser-item.recommended {
        background: rgba(16, 185, 129, 0.1);
        border: 2px solid rgba(16, 185, 129, 0.3);
    }
    
    .browser-item i {
        font-size: 2rem;
    }
    
    .warning-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin: 1.5rem 0;
    }
    
    .auto-dismiss-counter {
        margin-top: 1rem;
        padding: 0.75rem;
        background: rgba(245, 158, 11, 0.1);
        border-radius: 8px;
        color: var(--warning-color);
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(245, 158, 11, 0.2);
    }
    
    #dismissCounter {
        color: var(--danger-color);
        font-weight: 700;
    }
    
    @keyframes smartWarningSlideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .smart-browser-warning::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: hsl(0 100% 89% / 1);
        z-index: -1;
        border-radius: 5vh;
        animation: overlayFadeIn 0.3s ease-out;
    }
    
    @keyframes overlayFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .smart-browser-warning {
            width: 95%;
            margin: 1rem;
        }
        
        .browser-setup {
            flex-direction: column;
            gap: 1rem;
        }
        
        .warning-actions {
            flex-direction: column;
        }
        
        .warning-content {
            padding: 1.5rem;
        }
        
        .toast {
            bottom: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`).appendTo("head");console.log("🎯 WIBCP Core with Dynamic Title & Smart Warnings loaded! ⏱️🧠📱 by @wtaype");S.extend(Ee.prototype,{initHistorySystem(){this.loadDetectionPreference(),this.loadData()},loadDetectionPreference(){const c=this.loadFromLS("mibcp_detection_enabled",!1);this.detectionEnabled=c,c&&this.browser!=="chrome"&&setTimeout(()=>{this.isRecognitionActive||this.toggleDetection()},1500),console.log("🎤 Detection preference loaded:",c?"enabled":"disabled")},saveDetectionPreference(){this.saveToLS("mibcp_detection_enabled",this.detectionEnabled)},loadData(){this.renderHistory(),typeof this.loadNotes=="function"&&this.loadNotes(),typeof this.loadImages=="function"&&this.loadImages(),typeof this.loadGenesysUrl=="function"&&this.loadGenesysUrl()},addToHistory(c,l,p){const m={id:Date.now(),startAt:c.toISOString(),endAt:l.toISOString(),durationSeconds:p,browser:this.browser,detectionUsed:this.isRecognitionActive,timestamp:new Date().getTime()};let w=this.loadFromLS("mibcp_history",[]);w.unshift(m),w.length>5&&(w=w.slice(0,5)),this.saveToLS("mibcp_history",w),this.renderHistory(),console.log("📊 Added to history:",m),setTimeout(()=>{this.updateDynamicTitle()},100)},renderHistory(){const c=this.loadFromLS("mibcp_history",[]),l=S("#historyList");if(c.length===0){l.html(`
                <div class="empty-state">
                    <i class="fas fa-clock"></i>
                    <h4>No hay registros</h4>
                    <p>Los tiempos aparecerán aquí automáticamente</p>
                    ${this.browser==="chrome"?'<small style="color: var(--warning-color);">💡 Para detección automática, usa Edge</small>':"<small>Activa la detección de voz para registro automático</small>"}
                </div>
            `);return}const p=c.map((m,w)=>{const C=this.formatDuration(m.durationSeconds),I=new Date(m.startAt).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),W=new Date(m.endAt).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),J=m.detectionUsed?'<i class="fas fa-microphone detection-used" title="Detección automática usada"></i>':'<i class="fas fa-hand-paper detection-manual" title="Control manual"></i>';let we="duration-normal";return m.durationSeconds<=15?we="duration-short":m.durationSeconds>=45&&(we="duration-long"),`
                <div class="history-item ${we} fade-in-up" data-id="${m.id}" style="animation-delay: ${w*100}ms">
                    <div class="history-main">
                        <div class="history-duration">${C}</div>
                        <div class="history-times">
                            <span><i class="fas fa-play"></i> ${I}</span>
                            <span><i class="fas fa-stop"></i> ${W}</span>
                        </div>
                        <div class="history-meta">
                            ${J}
                            <span class="browser-badge ${m.browser||"unknown"}">${(m.browser||"N/A").toUpperCase()}</span>
                        </div>
                    </div>
                    <button class="history-delete" onclick="app.deleteHistoryItem(${m.id})" title="Eliminar registro">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `}).join("");l.html(p),this.renderSmartHistoryStats(c)},renderSmartHistoryStats(c){if(c.length===0)return;const l=c.reduce((W,J)=>W+J.durationSeconds,0),p=Math.round(l/c.length),m=Math.max(...c.map(W=>W.durationSeconds)),w=c.filter(W=>W.detectionUsed).length,C=w>0?Math.round(w/c.length*100):0;let I=S(".history-stats");I.length||(I=S('<div class="history-stats"></div>'),S("#historyList").before(I)),I.html(`
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${c.length}</div>
                    <div class="stat-label">Llamadas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${this.formatDuration(p)}</div>
                    <div class="stat-label">Promedio</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${this.formatDuration(m)}</div>
                    <div class="stat-label">Más largo</div>
                </div>
                <div class="stat-item smart-stat">
                    <div class="stat-value">${C}%</div>
                    <div class="stat-label">
                        <i class="fas fa-brain"></i> Smart
                    </div>
                </div>
            </div>
            <div class="stats-insights">
                ${this.generateSmartInsights(c)}
            </div>
        `)},generateSmartInsights(c){const l=[],p=c.filter(C=>C.detectionUsed).length,m=c.reduce((C,I)=>C+I.durationSeconds,0)/c.length,w=c.filter(C=>C.durationSeconds<=15).length;return p===0&&this.browser!=="chrome"&&l.push("🎤 Tip: Activa la detección automática para mayor eficiencia"),m>45&&l.push("⏱️ Tiempos de espera largos detectados"),w>=2&&l.push("⚡ Buena eficiencia en llamadas rápidas"),this.browser==="chrome"&&c.length>=2&&l.push("🌐 Considera Edge para detección automática"),l.length===0&&l.push("📊 Estadísticas normales de call center"),l.map(C=>`<span class="insight">${C}</span>`).join("")},deleteHistoryItem(c){let l=this.loadFromLS("mibcp_history",[]);const p=l.find(I=>I.id===c);if(!p)return;const m=p.detectionUsed?"(auto)":"(manual)",w=p.browser?`[${p.browser.toUpperCase()}]`:"";confirm(`¿Eliminar registro de ${this.formatDuration(p.durationSeconds)} ${m} ${w}?`)&&(l=l.filter(I=>I.id!==c),this.saveToLS("mibcp_history",l),this.renderHistory(),this.showMessage("🗑️ Registro eliminado","success"),setTimeout(()=>{this.updateDynamicTitle()},100))},clearAllData(){const c=this.loadFromLS("mibcp_history",[]),l=this.loadFromLS("mibcp_images",[]),p=this.loadFromLS("mibcp_notes",{text:""}),m=this.loadFromLS("mibcp_genesys_url",""),w=this.loadFromLS("mibcp_detection_enabled",!1),C=c.length,I=c.reduce((ie,Le)=>ie+Le.durationSeconds,0),W=c.filter(ie=>ie.detectionUsed).length,J=`⚠️ ELIMINAR TODOS LOS DATOS

📊 Resumen de datos a eliminar:
• ${C} registros del historial
• ${this.formatDuration(I)} tiempo total registrado
• ${W} llamadas con detección automática
• ${l.length} imágenes guardadas  
• Notas${p.text?" con contenido":" vacías"}
• URL de Genesys Cloud${m?" guardada":""}
• Preferencia de detección${w?" (activada)":" (desactivada)"}

¿Continuar con la eliminación completa?`;if(!(!confirm(J)||!confirm(`🔴 CONFIRMACIÓN FINAL

¿Estás COMPLETAMENTE seguro?

Se perderán todas las estadísticas y configuraciones.`)))try{const ie=[];["mibcp_history","mibcp_notes","mibcp_images","mibcp_genesys_url","mibcp_detection_enabled"].forEach(Le=>{this.removeLS(Le)&&ie.push(Le)}),this.renderHistory(),S("#notesArea").val(""),S("#genesysUrl").val("https://apps.mypurecloud.com"),typeof this.clearAllImages=="function"&&this.clearAllImages(),typeof this.updateNotesCounter=="function"&&this.updateNotesCounter(0,0,1),this.detectionEnabled=!1,this.isRecognitionActive&&this.toggleDetection(),this.updateDynamicTitle(),this.showMessage(`🧹 ${C} registros y ${ie.length} configuraciones eliminadas`,"success"),S("body").addClass("data-cleared"),setTimeout(()=>S("body").removeClass("data-cleared"),2e3),console.log("🧹 Complete data reset:",{recordsDeleted:C,timeCleared:this.formatDuration(I),keysCleared:ie.length,browser:this.browser})}catch(ie){console.error("Error clearing data:",ie),this.showMessage("❌ Error al eliminar algunos datos. Intenta nuevamente.","error")}},getHistoryAnalytics(){const c=this.loadFromLS("mibcp_history",[]);if(c.length===0)return null;const l=c.reduce((I,W)=>I+W.durationSeconds,0),p=l/c.length,m=c.filter(I=>I.detectionUsed).length,w=c.filter(I=>I.durationSeconds<=15).length,C=c.filter(I=>I.durationSeconds>=45).length;return{totalCalls:c.length,totalTime:l,avgTime:p,autoDetectedPercent:Math.round(m/c.length*100),efficiency:{short:w,long:C,normal:c.length-w-C},browserUsage:{chrome:c.filter(I=>I.browser==="chrome").length,edge:c.filter(I=>I.browser==="edge").length,other:c.filter(I=>!["chrome","edge"].includes(I.browser)).length},lastUsed:c[0]?.startAt||null}}});S(document).ready(()=>{window.app&&typeof window.app.initHistorySystem=="function"&&window.app.initHistorySystem()});S("<style>").html(`
    .empty-state {
        text-align: center;
        padding: 3rem 1.5rem;
        color: var(--text-secondary);
    }
    
    .empty-state i {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }
    
    .empty-state h4 {
        margin-bottom: 0.5rem;
        color: var(--text-primary);
        font-weight: 600;
    }
    
    .empty-state small {
        display: block;
        margin-top: 1rem;
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .history-stats {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.08);
        border-radius: var(--border-radius-sm);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .stat-value {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.25rem;
    }
    
    .stat-label {
        font-size: 0.75rem;
        color: var(--text-secondary);
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
    }
    
    .smart-stat .stat-value {
        color: var(--success-color);
    }
    
    .stats-insights {
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .insight {
        background: rgba(102, 126, 234, 0.1);
        color: var(--primary-color);
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: 500;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .history-item {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: var(--border-radius-sm);
        padding: 1.25rem;
        margin-bottom: 0.75rem;
        transition: var(--transition);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .history-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(4px);
    }
    
    /* Duration-based styling */
    .history-item.duration-short {
        border-left: 3px solid var(--success-color);
    }
    
    .history-item.duration-long {
        border-left: 3px solid var(--warning-color);
    }
    
    .history-item.duration-normal {
        border-left: 3px solid var(--primary-color);
    }
    
    .history-duration {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .duration-short .history-duration {
        color: var(--success-color);
    }
    
    .duration-long .history-duration {
        color: var(--warning-color);
    }
    
    .history-times {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }
    
    .history-times span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .history-meta {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.8rem;
    }
    
    .detection-used {
        color: var(--success-color);
    }
    
    .detection-manual {
        color: var(--text-secondary);
    }
    
    .browser-badge {
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .browser-badge.edge {
        background: rgba(0, 120, 215, 0.2);
        color: #0078d7;
        border: 1px solid rgba(0, 120, 215, 0.3);
    }
    
    .browser-badge.chrome {
        background: rgba(234, 67, 53, 0.2);
        color: #ea4335;
        border: 1px solid rgba(234, 67, 53, 0.3);
    }
    
    .browser-badge.firefox {
        background: rgba(255, 149, 0, 0.2);
        color: #ff9500;
        border: 1px solid rgba(255, 149, 0, 0.3);
    }
    
    .browser-badge.unknown {
        background: rgba(156, 163, 175, 0.2);
        color: #6b7280;
        border: 1px solid rgba(156, 163, 175, 0.3);
    }
    
    .history-delete {
        background: transparent;
        border: none;
        color: var(--danger-color);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: var(--transition);
    }
    
    .history-delete:hover {
        background: rgba(239, 68, 68, 0.1);
        transform: scale(1.1);
    }
    
    .data-cleared {
        animation: smartDataClearedEffect 2s ease-in-out;
    }
    
    @keyframes smartDataClearedEffect {
        0%, 100% { 
            opacity: 1; 
            filter: brightness(1) hue-rotate(0deg);
        }
        25% { 
            opacity: 0.8; 
            filter: brightness(1.1) hue-rotate(10deg);
        }
        50% { 
            opacity: 0.9; 
            filter: brightness(0.95) hue-rotate(-10deg);
        }
        75% { 
            opacity: 0.85; 
            filter: brightness(1.05) hue-rotate(5deg);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.5s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .stats-insights {
            margin-top: 1rem;
        }
        
        .insight {
            font-size: 0.7rem;
        }
        
        .history-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        
        .history-delete {
            align-self: flex-end;
        }
        
        .history-times {
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .history-meta {
            justify-content: space-between;
            width: 100%;
        }
    }
`).appendTo("head");console.log("📊 WIBCP Smart History with Advanced Analytics loaded! 📈🧠 by @wtaype");S.extend(Ee.prototype,{autosaveTimer:null,lastSavedLength:0,loadNotes(){const c=this.loadFromLS("mibcp_notes",{text:"",lastSavedAt:""});if(S("#notesArea").val(c.text||""),this.setupSmartNotesHandlers(),this.updateNotesCounter(),this.lastSavedLength=(c.text||"").length,c.lastSavedAt){const l=new Date(c.lastSavedAt),p=this.getTimeAgo(l);console.log("📝 Notes loaded from:",l.toLocaleString("es-ES"),`(${p})`),c.text&&new Date-l<1440*60*1e3&&setTimeout(()=>{console.log(`📝 Notas restauradas (${p})`)},1500)}},setupSmartNotesHandlers(){const c=S("#notesArea");c.on("input",()=>{this.showSaveStatus("saving"),this.scheduleAutosave(),this.updateNotesCounter(),this.checkNotesChanges()}),c.on("keydown",l=>{if((l.ctrlKey||l.metaKey)&&l.key==="s"&&(l.preventDefault(),this.saveNotes(),this.showMessage("💾 Notas guardadas manualmente","success")),l.key==="Tab"){l.preventDefault();const p=l.target.selectionStart,m=l.target.selectionEnd,w=l.target.value;if(l.shiftKey){const C=w.lastIndexOf(`
`,p-1)+1;w.substring(C,C+2)==="  "&&(l.target.value=w.substring(0,C)+w.substring(C+2),l.target.selectionStart=l.target.selectionEnd=p-2)}else l.target.value=w.substring(0,p)+"  "+w.substring(m),l.target.selectionStart=l.target.selectionEnd=p+2;this.scheduleAutosave()}}),c.on("blur",()=>{this.saveNotes()}),c.on("focus",()=>{S(".notes-section").addClass("focused"),this.browser==="chrome"&&this.showChromeNotesHint()}),c.on("blur",()=>{S(".notes-section").removeClass("focused")}),c.on("paste",l=>{setTimeout(()=>{this.scheduleAutosave(),this.updateNotesCounter(),this.checkNotesChanges()},0)})},checkNotesChanges(){const c=S("#notesArea").val().length;Math.abs(c-this.lastSavedLength)>50&&(this.updateDynamicTitle(),this.lastSavedLength=c)},showChromeNotesHint(){this.chromeNotesHintShown||setTimeout(()=>{this.showMessage("💡 Tip Chrome: Usa Ctrl+S para guardar manualmente","info"),this.chromeNotesHintShown=!0},2e3)},scheduleAutosave(){this.autosaveTimer&&clearTimeout(this.autosaveTimer);const c=this.browser==="chrome"?3e3:2e3;this.autosaveTimer=setTimeout(()=>{this.saveNotes()},c)},saveNotes(){const c=S("#notesArea").val(),l=new Date,p=c.trim()===""?0:c.trim().split(/\s+/).filter(I=>I.length>0).length,m=c.length,w=c.split(`
`).length,C={text:c,lastSavedAt:l.toISOString(),wordCount:p,charCount:m,lineCount:w,browser:this.browser,version:"2.2",autoSaved:!0,user:"wtaype"};this.saveToLS("mibcp_notes",C)?(this.showSaveStatus("saved"),this.updateNotesCounter(p,m,w),this.lastSavedLength=m,console.log("📝 Smart notes saved:",{words:p,chars:m,lines:w,browser:this.browser,time:l.toLocaleTimeString("es-ES")}),this.updateDynamicTitle()):this.showSaveStatus("error")},updateNotesCounter(c=null,l=null,p=null){if(c===null){const W=S("#notesArea").val();c=W.trim()===""?0:W.trim().split(/\s+/).filter(J=>J.length>0).length,l=W.length,p=W.split(`
`).length}let m=S(".notes-counter");m.length||(m=S('<div class="notes-counter"></div>'),S(".notes-container").append(m));const w=Math.max(1,Math.ceil(c/200)),C=c>50,I=this.calculateNotesComplexity(l,c,p);m.html(`
            <div class="counter-stats">
                <span title="Caracteres">
                    <i class="fas fa-keyboard"></i>
                    ${l.toLocaleString("es-ES")}
                </span>
                <span title="Palabras">
                    <i class="fas fa-font"></i>
                    ${c.toLocaleString("es-ES")}
                </span>
                <span title="Líneas">
                    <i class="fas fa-list-ol"></i>
                    ${p.toLocaleString("es-ES")}
                </span>
                ${C?`
                    <span title="Tiempo de lectura estimado" class="reading-time">
                        <i class="fas fa-clock"></i>
                        ~${w}min
                    </span>
                `:""}
            </div>
            ${I?`<div class="notes-complexity">${I}</div>`:""}
        `)},calculateNotesComplexity(c,l,p){if(l<10)return null;const m=l/p,w=c/l;let C="";return m>15?C+='<span class="complexity-item dense">📝 Denso</span>':m<5&&(C+='<span class="complexity-item structured">📋 Estructurado</span>'),w>7&&(C+='<span class="complexity-item technical">🔧 Técnico</span>'),p>30&&(C+='<span class="complexity-item extensive">📄 Extenso</span>'),C},getTimeAgo(c){const p=new Date-c,m=Math.floor(p/(1e3*60)),w=Math.floor(p/(1e3*60*60)),C=Math.floor(p/(1e3*60*60*24));return m<1?"hace un momento":m<60?`hace ${m} minuto${m>1?"s":""}`:w<24?`hace ${w} hora${w>1?"s":""}`:C<7?`hace ${C} día${C>1?"s":""}`:c.toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"})},showSaveStatus(c){const l=S("#saveStatus"),p=S(".save-indicator");switch(p.removeClass("show saving error"),c){case"saving":l.html('<i class="fas fa-circle-notch fa-spin"></i> Guardando...'),p.addClass("show saving");break;case"saved":const m=this.getBrowserIcon();l.html(`<i class="fas fa-check"></i> Guardado ${m}`),p.addClass("show"),setTimeout(()=>p.removeClass("show"),2500);break;case"error":l.html('<i class="fas fa-exclamation-triangle"></i> Error'),p.addClass("show error"),setTimeout(()=>p.removeClass("show"),3e3);break}},getBrowserIcon(){return{edge:'<i class="fab fa-edge" style="color: #0078d7;"></i>',chrome:'<i class="fab fa-chrome" style="color: #ea4335;"></i>',firefox:'<i class="fab fa-firefox" style="color: #ff9500;"></i>',safari:'<i class="fab fa-safari" style="color: #006cff;"></i>'}[this.browser]||'<i class="fas fa-browser"></i>'},exportNotes(){const c=this.loadFromLS("mibcp_notes",{text:""});if(!c.text){this.showMessage("❌ No hay notas para exportar","warning");return}const l=new Date,p=`MIBCP_Notas_wtaype_${l.toISOString().split("T")[0]}.txt`,m=`WIBCP - Notas del Call Center
Exportado: ${l.toLocaleString("es-ES")}
Usuario: wtaype
Navegador: ${this.browser.toUpperCase()}
Palabras: ${c.wordCount||"N/A"}
Caracteres: ${c.charCount||c.text.length}
Líneas: ${c.lineCount||c.text.split(`
`).length}
Fecha actual: 2025-09-28 15:32:02 (UTC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${c.text}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generado por WIBCP v2.2 Smart - by @wtaype
GitHub: https://github.com/wtaype
Fecha: ${l.toLocaleDateString("es-ES")} ${l.toLocaleTimeString("es-ES")}`,w=new Blob([m],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(w),I=document.createElement("a");I.href=C,I.download=p,I.click(),URL.revokeObjectURL(C),this.showMessage(`📁 Notas exportadas: ${p}`,"success"),console.log("📤 Notes exported:",{filename:p,size:c.text.length,words:c.wordCount,browser:this.browser,user:"wtaype"})},searchInNotes(c){const l=S("#notesArea").val();if(!c||!l)return[];const p=l.split(`
`),m=[];return p.forEach((w,C)=>{w.toLowerCase().includes(c.toLowerCase())&&m.push({line:C+1,text:w.trim(),context:p.slice(Math.max(0,C-1),C+2)})}),m},getNotesStats(){const c=this.loadFromLS("mibcp_notes",{text:""}),l=c.text||"";if(!l)return null;const p=l.trim().split(/\s+/).filter(I=>I.length>0),m=l.split(`
`),w=l.split(/[.!?]+/).filter(I=>I.trim().length>0),C=l.split(/\n\s*\n/).filter(I=>I.trim().length>0);return{characters:l.length,charactersNoSpaces:l.replace(/\s/g,"").length,words:p.length,lines:m.length,sentences:w.length,paragraphs:C.length,avgWordsPerSentence:w.length>0?Math.round(p.length/w.length):0,avgCharsPerWord:p.length>0?Math.round(l.length/p.length):0,readingTime:Math.max(1,Math.ceil(p.length/200)),complexity:this.calculateNotesComplexity(l.length,p.length,m.length),lastModified:c.lastSavedAt,browser:c.browser||this.browser,user:"wtaype"}}});S("<style>").html(`
    .notes-section.focused {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    }
    
    .notes-counter {
        position: absolute;
        bottom: 0.75rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        font-size: 0.75rem;
        transition: var(--transition);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .counter-stats {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-bottom: 0.25rem;
    }
    
    .counter-stats span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    .counter-stats i {
        font-size: 0.7rem;
        opacity: 0.8;
    }
    
    .reading-time {
        color: var(--primary-color) !important;
        font-weight: 600 !important;
    }
    
    .notes-complexity {
        display: flex;
        gap: 0.25rem;
        flex-wrap: wrap;
        margin-top: 0.25rem;
    }
    
    .complexity-item {
        background: rgba(102, 126, 234, 0.1);
        color: var(--primary-color);
        padding: 0.1rem 0.4rem;
        border-radius: 8px;
        font-size: 0.6rem;
        font-weight: 600;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .complexity-item.dense {
        background: rgba(245, 158, 11, 0.1);
        color: var(--warning-color);
        border-color: rgba(245, 158, 11, 0.2);
    }
    
    .complexity-item.structured {
        background: rgba(16, 185, 129, 0.1);
        color: var(--success-color);
        border-color: rgba(16, 185, 129, 0.2);
    }
    
    .complexity-item.technical {
        background: rgba(139, 92, 246, 0.1);
        color: #8b5cf6;
        border-color: rgba(139, 92, 246, 0.2);
    }
    
    .complexity-item.extensive {
        background: rgba(239, 68, 68, 0.1);
        color: var(--danger-color);
        border-color: rgba(239, 68, 68, 0.2);
    }
    
    .save-indicator {
        transition: var(--transition);
        border-radius: 8px;
    }
    
    .save-indicator.error {
        background: var(--danger-color);
        animation: errorPulseShake 0.6s ease-in-out;
    }
    
    @keyframes errorPulseShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-4px) scale(1.05); }
        75% { transform: translateX(4px) scale(1.05); }
    }
    
    #notesArea {
        transition: var(--transition);
        font-family: 'Inter', 'Consolas', monospace;
        line-height: 1.6;
        resize: vertical;
        min-height: 50vh;
        border: .5vh solid var(--primary-color);
    }
    
    #notesArea:focus {
        background: rgba(255, 255, 255, 0.15);
        border-color: var(--primary-color);
        outline: none;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        transform: translateY(-1px);
    }
    
    #notesArea::placeholder {
        color: var(--text-secondary);
        opacity: 0.7;
        font-style: italic;
    }
    
    /* Smart visual feedback for typing */
    .notes-section.typing #notesArea {
        border-left: 3px solid var(--primary-color);
    }
    
    .notes-section.saving .notes-counter {
        border-color: var(--warning-color);
        background: rgba(245, 158, 11, 0.05);
    }
    
    .notes-section.saved .notes-counter {
        border-color: var(--success-color);
        background: rgba(16, 185, 129, 0.05);
        animation: savedPulse 0.8s ease-out;
    }
    
    @keyframes savedPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    /* Export button integration */
    .notes-export {
        position: absolute;
        top: -0.5rem;
        right: 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.7rem;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        transition: var(--transition);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
    }
    
    .notes-section:hover .notes-export {
        opacity: 1;
    }
    
    .notes-export:hover {
        background: #5a67d8;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    /* Browser-specific enhancements */
    .notes-section.chrome-notes .notes-counter {
        border-color: rgba(234, 67, 53, 0.3);
        background: rgba(234, 67, 53, 0.05);
    }
    
    .notes-section.edge-notes .notes-counter {
        border-color: rgba(0, 120, 215, 0.3);
        background: rgba(0, 120, 215, 0.05);
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .notes-counter {
            position: static;
            margin-top: 0.75rem;
            align-self: flex-end;
        }
        
        .counter-stats {
            gap: 0.5rem;
            justify-content: center;
        }
        
        .notes-complexity {
            justify-content: center;
        }
        
        .notes-export {
            position: static;
            margin-top: 0.5rem;
            align-self: flex-end;
            opacity: 1;
        }
        
        #notesArea {
            font-size: 16px; /* Prevent zoom on iOS */
        }
    }
    
    /* Accessibility improvements */
    #notesArea:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    /* Print styles */
    @media print {
        .notes-counter,
        .save-indicator,
        .notes-export {
            display: none !important;
        }
        
        #notesArea {
            border: 1px solid #ccc;
            background: white;
            color: black;
            font-size: 12pt;
            line-height: 1.5;
        }
    }
`).appendTo("head");console.log("📝 WIBCP Smart Notes with Advanced Features loaded! 📄🧠 by @wtaype");S.extend(Ee.prototype,{imageBlobUrls:new Map,imageLoadingStates:new Map,setupImageHandlers(){console.log("🖼️ Setting up 4 smart image slots with Blob URLs"),S(".image-box").each((c,l)=>{const p=S(l),m=p.data("slot");p.find(".image-dropzone").on("click",()=>{p.find(".image-input")[0].click()}),p.find(".image-input").on("change",w=>{const C=w.target.files[0];C&&this.handleImageFile(C,m)}),p.on("dragover dragenter",w=>{w.preventDefault(),w.stopPropagation(),p.addClass("dragover"),S(".image-boxes").addClass("drag-active")}),p.on("dragleave dragend",w=>{w.preventDefault(),w.stopPropagation();const C=l.getBoundingClientRect(),I=w.originalEvent.clientX,W=w.originalEvent.clientY;(I<C.left||I>C.right||W<C.top||W>C.bottom)&&(p.removeClass("dragover"),S(".image-box.dragover").length||S(".image-boxes").removeClass("drag-active"))}),p.on("drop",w=>{w.preventDefault(),w.stopPropagation(),p.removeClass("dragover"),S(".image-boxes").removeClass("drag-active");const C=w.originalEvent.dataTransfer.files;C.length>0&&this.handleMultipleImageFiles(C,m)})}),S(document).on("paste",c=>{if(S(c.target).is("input, textarea"))return;const l=c.originalEvent.clipboardData.items;for(let p of l)if(p.type.indexOf("image")!==-1){c.preventDefault();const m=p.getAsFile(),w=this.findEmptyImageSlot();if(w)this.handleImageFile(m,w),this.showMessage(`📋 Imagen pegada en slot ${w}`,"success");else{const C=this.askForSlotReplacement();C?(this.handleImageFile(m,C),this.showMessage(`📋 Imagen reemplazada en slot ${C}`,"info")):this.showMessage("❌ No hay slots disponibles","warning")}break}}),S(window).on("beforeunload",()=>{this.cleanupAllBlobUrls()}),console.log("🖼️ Smart image handlers initialized with Blob URL management")},handleMultipleImageFiles(c,l){const p=Array.from(c).filter(C=>C.type.startsWith("image/"));if(p.length===0){this.showMessage("❌ No se encontraron imágenes válidas","warning");return}if(p.length===1){this.handleImageFile(p[0],l);return}const m=this.getAvailableSlots(),w=Math.min(p.length,m.length||4);if(m.length===0){this.showMessage("⚠️ Todos los slots ocupados. Solo se cargará la primera imagen.","warning"),this.handleImageFile(p[0],l||1);return}for(let C=0;C<w;C++){const I=p[C],W=m[C]||C+1;setTimeout(()=>{this.handleImageFile(I,W)},C*200)}this.showMessage(`📁 ${w} imágenes procesándose...`,"info"),p.length>w&&setTimeout(()=>{this.showMessage(`⚠️ Solo se procesaron ${w} de ${p.length} imágenes`,"warning")},1e3)},getAvailableSlots(){const c=[];for(let l=1;l<=4;l++)S(`.image-box[data-slot="${l}"]`).find(".image-preview").hasClass("show")||c.push(l);return c},askForSlotReplacement(){const c=prompt("Todos los slots están ocupados. ¿En qué slot quieres reemplazar la imagen? (1-4)"),l=parseInt(c);return l>=1&&l<=4?l:null},findEmptyImageSlot(){for(let c=1;c<=4;c++)if(!S(`.image-box[data-slot="${c}"]`).find(".image-preview").hasClass("show"))return c;return null},isValidImageFile(c){if(!["image/png","image/jpeg","image/jpg","image/webp","image/gif","image/svg+xml"].includes(c.type))return this.showMessage("❌ Tipo no válido. Use PNG, JPG, WEBP, GIF o SVG","error"),!1;if(c.size>8388608){const m=(c.size/1048576).toFixed(1);return this.showMessage(`❌ Archivo muy grande: ${m}MB. Máximo 8MB`,"error"),!1}return!0},handleImageFile(c,l){if(!this.isValidImageFile(c))return;const p=S(`.image-box[data-slot="${l}"]`);this.setImageLoadingState(l,!0),p.addClass("image-loading"),this.cleanupSlotBlobUrl(l);const m=new FileReader;m.onloadstart=()=>{this.updateLoadingProgress(l,10)},m.onprogress=w=>{if(w.lengthComputable){const C=Math.round(w.loaded/w.total*80);this.updateLoadingProgress(l,C)}},m.onload=w=>{this.updateLoadingProgress(l,90);const C=w.target.result,I=this.dataURLtoBlob(C),W=URL.createObjectURL(I);this.imageBlobUrls.set(l,W),this.displayImagePreview(l,W,C),setTimeout(()=>{this.saveImage(l,C,c.name),this.updateLoadingProgress(l,100),setTimeout(()=>{this.setImageLoadingState(l,!1),p.removeClass("image-loading"),this.clearLoadingProgress(l)},300)},400)},m.onerror=w=>{console.error("File reading error:",w),this.showMessage("❌ Error al leer el archivo","error"),this.setImageLoadingState(l,!1),p.removeClass("image-loading"),this.clearLoadingProgress(l)},m.readAsDataURL(c),console.log(`🖼️ Processing image for slot ${l}:`,{name:c.name,size:this.formatFileSize(c.size),type:c.type,user:"wtaype"})},setImageLoadingState(c,l){this.imageLoadingStates.set(c,l),l&&this.updateDynamicTitle()},updateLoadingProgress(c,l){const p=S(`.image-box[data-slot="${c}"]`);let m=p.find(".loading-progress");if(!m.length&&l<100&&(m=S(`
                <div class="loading-progress">
                    <div class="progress-bar"></div>
                    <div class="progress-text">0%</div>
                    <small class="progress-label">Procesando imagen...</small>
                </div>
            `),p.append(m)),m.length){const w=m.find(".progress-bar"),C=m.find(".progress-text");w.css("width",`${l}%`),C.text(`${Math.round(l)}%`),l>=100?m.find(".progress-label").text("¡Completado!"):l>=80&&m.find(".progress-label").text("Finalizando...")}},clearLoadingProgress(c){S(`.image-box[data-slot="${c}"]`).find(".loading-progress").fadeOut(200,function(){S(this).remove()})},dataURLtoBlob(c){const l=c.split(","),p=l[0].match(/:(.*?);/)[1],m=atob(l[1]);let w=m.length;const C=new Uint8Array(w);for(;w--;)C[w]=m.charCodeAt(w);return new Blob([C],{type:p})},displayImagePreview(c,l,p=null){const m=S(`.image-box[data-slot="${c}"]`),w=m.find(".image-preview"),C=m.find(".image-dropzone"),I=m.find(".image-link");w.html(`
            <div class="image-container">
                <img src="${l}" alt="Imagen ${c}" onload="this.classList.add('loaded')" 
                     onerror="this.classList.add('error')">
            </div>
        `),w.addClass("show"),C.hide(),I.attr("href",l).show(),w.css({opacity:0,transform:"scale(0.95)"}).animate({opacity:1},500,()=>{w.css({transform:"scale(1)"})}),console.log(`🖼️ Image displayed in slot ${c} with optimized Blob URL`)},saveImage(c,l,p=null){const m=S(`.image-box[data-slot="${c}"]`);if(!m.find(".image-preview").hasClass("show")&&!l){this.showMessage("❌ No hay imagen para guardar","warning");return}if(!l){this.showMessage("⚠️ No se puede guardar imagen temporal","warning");return}const C=new Date,I={slot:c,dataUrl:l,filename:p||`imagen_wtaype_${c}_${C.getTime()}`,savedAt:C.toISOString(),browser:this.browser,fileSize:l.length*.75,version:"2.2",user:"wtaype",uploadDate:"2025-09-28"};let W=this.loadFromLS("mibcp_images",[]);W=W.filter(J=>J.slot!==c),W.push(I),this.saveToLS("mibcp_images",W)&&(m.addClass("image-saved"),setTimeout(()=>m.removeClass("image-saved"),2e3),this.showMessage(`💾 Imagen guardada en slot ${c}`,"success"),console.log(`💾 Image saved in slot ${c}:`,{filename:I.filename,size:this.formatFileSize(I.fileSize),browser:this.browser,user:"wtaype"}))},formatFileSize(c){if(c===0)return"0 B";const l=1024,p=["B","KB","MB","GB"],m=Math.floor(Math.log(c)/Math.log(l));return parseFloat((c/Math.pow(l,m)).toFixed(1))+" "+p[m]},deleteImage(c){const l=S(`.image-box[data-slot="${c}"]`),p=l.find(".image-preview"),m=l.find(".image-dropzone"),w=l.find(".image-link");if(!p.hasClass("show")){this.showMessage("❌ No hay imagen para eliminar","warning");return}if(!confirm(`¿Eliminar imagen del slot ${c}?

Esta acción no se puede deshacer.`))return;this.cleanupSlotBlobUrl(c);let I=this.loadFromLS("mibcp_images",[]);const W=I.find(J=>J.slot===c);I=I.filter(J=>J.slot!==c),this.saveToLS("mibcp_images",I)&&(p.addClass("removing"),setTimeout(()=>{p.fadeOut(500,()=>{p.removeClass("show removing").empty(),m.fadeIn(500)})},150),w.hide().attr("href","#"),l.find(".image-input").val(""),this.showMessage(`🗑️ Imagen eliminada del slot ${c}`,"success"),console.log(`🗑️ Image deleted from slot ${c}:`,W?.filename))},loadImages(){const c=this.loadFromLS("mibcp_images",[]);let l=0;if(c.forEach(p=>{if(p.slot>=1&&p.slot<=4&&p.dataUrl)try{const m=this.dataURLtoBlob(p.dataUrl),w=URL.createObjectURL(m);this.imageBlobUrls.set(p.slot,w),this.displayImagePreview(p.slot,w,p.dataUrl),l++}catch(m){console.error(`Error loading image for slot ${p.slot}:`,m)}}),l>0){const p=c.reduce((m,w)=>m+(w.fileSize||0),0);console.log(`🖼️ Loaded ${l} images:`,{totalSize:this.formatFileSize(p),activeBlobUrls:this.imageBlobUrls.size,browser:this.browser,user:"wtaype"})}},clearAllImages(){for(let c=1;c<=4;c++){const l=S(`.image-box[data-slot="${c}"]`),p=l.find(".image-preview"),m=l.find(".image-dropzone"),w=l.find(".image-link");p.hasClass("show")&&(this.cleanupSlotBlobUrl(c),p.removeClass("show").empty(),m.show(),w.hide().attr("href","#"),l.find(".image-input").val(""))}console.log("🧹 All images cleared with complete blob URL cleanup")},cleanupSlotBlobUrl(c){const l=this.imageBlobUrls.get(c);l&&(URL.revokeObjectURL(l),this.imageBlobUrls.delete(c),console.log(`🧹 Blob URL cleaned for slot ${c}`))},cleanupAllBlobUrls(){this.imageBlobUrls.forEach((c,l)=>{URL.revokeObjectURL(c)}),this.imageBlobUrls.clear(),console.log("🧹 All blob URLs cleaned up on page unload")},getImageStats(){const c=this.loadFromLS("mibcp_images",[]),l=c.reduce((m,w)=>m+(w.fileSize||0),0),p=Array.from(this.imageLoadingStates.values()).filter(Boolean).length;return{count:c.length,totalSize:l,formattedSize:this.formatFileSize(l),slots:c.map(m=>m.slot).sort(),blobsActive:this.imageBlobUrls.size,currentlyLoading:p,averageSize:c.length>0?l/c.length:0,browser:this.browser,storageEfficiency:this.imageBlobUrls.size>0?"Optimized with Blob URLs":"Standard storage",user:"wtaype"}}});S("<style>").html(`
    .image-boxes.drag-active .image-box {
        border-color: var(--primary-color);
        background: rgba(102, 126, 234, 0.08);
        transform: scale(1.01);
    }
    
    .image-box.dragover {
        border-color: var(--success-color) !important;
        background: rgba(16, 185, 129, 0.15) !important;
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }
    
    .image-container {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-sm);
        overflow: hidden;
        position: relative;
        background: rgba(255, 255, 255, 0.05);
    }
    
    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
        opacity: 0;
    }
    
    .image-container img.loaded {
        opacity: 1;
    }
    
    .image-container img.error {
        opacity: 0.5;
        filter: grayscale(100%);
    }
    
    .image-container:hover img.loaded {
        transform: scale(1.05);
    }
    
    /* Enhanced Loading Progress */
    .image-loading {
        position: relative;
    }
    
    .loading-progress {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.85);
        border-radius: 12px;
        padding: 0.75rem;
        color: white;
        font-size: 0.8rem;
        z-index: 25;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .progress-bar {
        height: 6px;
        background: var(--primary-color);
        border-radius: 3px;
        width: 0%;
        transition: width 0.3s ease;
        margin-bottom: 0.5rem;
        position: relative;
        overflow: hidden;
    }
    
    .progress-bar::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: progressShimmer 1.5s infinite;
    }
    
    @keyframes progressShimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .progress-text {
        text-align: center;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--primary-color);
    }
    
    .progress-label {
        text-align: center;
        opacity: 0.8;
        font-size: 0.75rem;
    }
    
    /* Enhanced Save Animation */
    .image-saved {
        animation: smartImageSaved 2s ease-in-out;
    }
    
    @keyframes smartImageSaved {
        0%, 100% { 
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: none;
            transform: scale(1);
        }
        25% { 
            border-color: var(--success-color);
            box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
            transform: scale(1.02);
        }
        75% { 
            border-color: var(--success-color);
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
            transform: scale(1.01);
        }
    }
    
    /* Enhanced Remove Animation */
    .removing {
        animation: smartImageRemoving 0.6s ease-in-out forwards;
    }
    
    @keyframes smartImageRemoving {
        0% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
        }
        60% { 
            opacity: 0.3; 
            transform: scale(0.85) rotate(-3deg);
        }
        100% { 
            opacity: 0; 
            transform: scale(0.7) rotate(-5deg);
        }
    }
    
    /* Enhanced Button Styling */
    .btn-save,
    .btn-delete {
        padding: 0.65rem;
        border: none;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        flex: 1;
        min-width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
    
    .btn-save {
        background: linear-gradient(135deg, var(--success-color), #059669);
        color: white;
        box-shadow: 0 3px 10px rgba(16, 185, 129, 0.2);
    }
    
    .btn-save:hover {
        background: linear-gradient(135deg, #059669, #047857);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
    }
    
    .btn-delete {
        background: linear-gradient(135deg, var(--danger-color), #dc2626);
        color: white;
        box-shadow: 0 3px 10px rgba(239, 68, 68, 0.2);
    }
    
    .btn-delete:hover {
        background: linear-gradient(135deg, #dc2626, #b91c1c);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
    }
    
    /* Simple and Efficient Link Button */
    .image-link {
        background: linear-gradient(135deg, var(--primary-color), #5a67d8);
        color: white;
        text-decoration: none;
        padding: 0.65rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        flex: 1;
        min-width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
    }
    
    .image-link:hover {
        background: linear-gradient(135deg, #5a67d8, #4c51bf);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
        text-decoration: none;
        color: white;
    }
    
    /* Smart Blob URL optimization indicator */
    .image-preview.show::before {
        content: 'BLOB';
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(16, 185, 129, 0.8);
        color: white;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        opacity: 0;
        transition: var(--transition);
        z-index: 10;
        backdrop-filter: blur(5px);
    }
    
    .image-preview:hover::before {
        opacity: 0.9;
    }
    
    /* Loading state enhancements */
    .image-loading .image-dropzone {
        opacity: 0.5;
        pointer-events: none;
        position: relative;
    }
    
    .image-loading .image-dropzone::before {
        content: 'Procesando...';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 20;
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .loading-progress {
            left: 0.5rem;
            right: 0.5rem;
            bottom: 0.5rem;
            padding: 0.5rem;
        }
        
        .btn-save,
        .btn-delete,
        .image-link {
            padding: 0.5rem;
            font-size: 0.75rem;
            min-width: 44px;
        }
        
        .image-preview.show::before {
            font-size: 0.5rem;
            padding: 0.15rem 0.3rem;
        }
    }
`).appendTo("head");console.log("🖼️ WIBCP Smart Image System with Optimized Blob URLs loaded! 📸⚡ by @wtaype");S.extend(Ee.prototype,{genesysWindow:null,defaultGenesysUrl:"https://apps.mypurecloud.com",genesysUrlSaveTimer:null,genesysWindowCheckInterval:null,lastGenesysOpened:null,setupGenesysCloud(){console.log("☁️ Setting up smart Genesys Cloud integration by @wtaype"),this.setDefaultGenesysUrl(),S("#openGenesys").on("click",()=>this.openGenesysCloud()),S("#genesysUrl").on("keypress",c=>{c.which===13&&(c.preventDefault(),this.openGenesysCloud())}),S("#genesysUrl").on("input",()=>{this.validateUrlRealtime(),this.scheduleGenesysUrlSave()}),S("#genesysUrl").on("blur",()=>{this.validateAndFormatUrl(),this.saveGenesysUrl()}),S("#genesysUrl").on("paste",()=>{setTimeout(()=>{this.validateAndFormatUrl(),this.scheduleGenesysUrlSave()},0)}),S("#genesysUrl").on("focus",()=>{S(".genesys-section").addClass("focused"),this.browser==="chrome"&&this.showChromeGenesysHint()}),S("#genesysUrl").on("blur",()=>{S(".genesys-section").removeClass("focused")}),this.startSmartWindowStatusCheck(),this.setupBrowserSpecificFeatures(),console.log("☁️ Genesys Cloud integration initialized successfully")},setDefaultGenesysUrl(){this.loadFromLS("mibcp_genesys_url","")||(S("#genesysUrl").val(this.defaultGenesysUrl),this.saveGenesysUrl(),console.log("☁️ Default Genesys URL set:",this.defaultGenesysUrl))},setupBrowserSpecificFeatures(){const c=S("#genesysUrl"),l=S("#openGenesys");c.addClass(`genesys-input-${this.browser}`),l.addClass(`genesys-btn-${this.browser}`),this.browser==="edge"&&this.addOptimalBrowserIndicator()},addOptimalBrowserIndicator(){S(".genesys-info").append(`
            <span class="optimal-browser-badge">
                <i class="fab fa-edge"></i>
                <span>Óptimizado para ti</span>
            </span>
        `)},showChromeGenesysHint(){this.chromeGenesysHintShown||setTimeout(()=>{this.showMessage("💡 Tip @wtaype: Edge es mejor para WIBCP + Chrome para Genesys","info"),this.chromeGenesysHintShown=!0},1e3)},validateUrlRealtime(){const c=S("#genesysUrl"),l=c.val().trim();if(l.length>8)try{new URL(l.startsWith("http")?l:"https://"+l),c.removeClass("invalid-url").addClass("valid-url")}catch{c.removeClass("valid-url").addClass("invalid-url")}else c.removeClass("valid-url invalid-url")},scheduleGenesysUrlSave(){this.genesysUrlSaveTimer&&clearTimeout(this.genesysUrlSaveTimer),this.genesysUrlSaveTimer=setTimeout(()=>{this.saveGenesysUrl()},1500)},validateAndFormatUrl(){const c=S("#genesysUrl");let l=c.val().trim();if(!l){c.val(this.defaultGenesysUrl);return}l&&!l.match(/^https?:\/\//)&&(l="https://"+l),l=l.replace(/\/+$/,""),l=l.replace(/\s+/g,""),c.val(l);try{const p=new URL(l);this.isLikelyGenesysUrl(p.hostname)?(c.removeClass("invalid-url").addClass("valid-url"),this.showUrlValidationFeedback("valid")):(c.removeClass("invalid-url valid-url").addClass("warning-url"),this.showUrlValidationFeedback("warning"))}catch{c.removeClass("valid-url warning-url").addClass("invalid-url"),this.showUrlValidationFeedback("invalid")}},isLikelyGenesysUrl(c){return[/mypurecloud/i,/pure\.cloud/i,/genesys/i,/purecloud/i].some(p=>p.test(c))},showUrlValidationFeedback(c){const l={valid:"✅ URL válida de Genesys Cloud",warning:"⚠️ URL válida pero verifica que sea Genesys",invalid:"❌ URL no válida"};c==="invalid"&&this.showMessage(l[c],"warning")},openGenesysCloud(){const c=S("#genesysUrl").val().trim();if(!c){S("#genesysUrl").val(this.defaultGenesysUrl),this.showMessage("⚠️ Usando URL por defecto de Genesys Cloud","info");return}let l=c;try{l=new URL(l).toString()}catch{this.showMessage("❌ URL no válida","error"),S("#genesysUrl").focus().select();return}if(this.genesysWindow&&!this.genesysWindow.closed)try{this.genesysWindow.close(),this.showMessage("🔄 Ventana anterior cerrada","info")}catch{console.log("Could not close existing window")}const p=this.calculateOptimalWindowSize(),m=[`width=${p.width}`,`height=${p.height}`,`left=${p.left}`,`top=${p.top}`,"scrollbars=yes","resizable=yes","toolbar=no","menubar=no","location=yes","directories=no","status=yes"].join(",");try{if(this.updateGenesysButtonState("loading"),this.genesysWindow=window.open(l,"MIBCPGenesysCloud_wtaype",m),this.genesysWindow)this.handleGenesysWindowSuccess(l);else throw new Error("Window blocked or failed to open")}catch(w){console.error("Error opening Genesys Cloud:",w),this.handleGenesysWindowError(w)}},calculateOptimalWindowSize(){const c=screen.availWidth,l=screen.availHeight,p=Math.round(c),m=Math.round(l*.55),w=0,C=Math.round((l-m)/3);return{width:p,height:m,left:w,top:C}},handleGenesysWindowSuccess(c){this.lastGenesysOpened=new Date().toISOString(),this.saveGenesysUrl(),setTimeout(()=>{this.genesysWindow&&!this.genesysWindow.closed&&this.genesysWindow.focus()},500),this.updateGenesysButtonState("opened"),this.updateDynamicTitle();const l=new URL(c).hostname;this.showMessage(`☁️ Genesys Cloud abierto en nueva ventana: ${l}`,"success"),console.log("☁️ Genesys Cloud opened successfully by @wtaype:",{url:c,browser:this.browser,windowSize:this.calculateOptimalWindowSize(),timestamp:this.lastGenesysOpened,user:"wtaype"})},handleGenesysWindowError(c){this.updateGenesysButtonState("error");let l="❌ Error al abrir Genesys Cloud.",p="";c.message.includes("blocked")?p=" Revisa el bloqueador de pop-ups.":this.browser==="chrome"&&(p=" @wtaype: Considera usar Microsoft Edge."),this.showMessage(l+p,"error"),setTimeout(()=>{this.updateGenesysButtonState("closed"),this.updateDynamicTitle()},3e3)},updateGenesysButtonState(c){const l=S("#openGenesys"),p=l.find("i"),m=l.find("span");switch(l.removeClass("genesys-active genesys-loading genesys-error"),c){case"loading":l.addClass("genesys-loading"),p.removeClass().addClass("fas fa-circle-notch fa-spin"),m.text("Abriendo...");break;case"opened":l.addClass("genesys-active"),p.removeClass().addClass("fas fa-cloud"),m.text("Genesys Abierto");break;case"error":l.addClass("genesys-error"),p.removeClass().addClass("fas fa-exclamation-triangle"),m.text("Error");break;case"closed":default:p.removeClass().addClass("fas fa-external-link-alt"),m.text("Abrir Genesys Cloud");break}},startSmartWindowStatusCheck(){this.genesysWindowCheckInterval&&clearInterval(this.genesysWindowCheckInterval),this.genesysWindowCheckInterval=setInterval(()=>{this.genesysWindow&&this.genesysWindow.closed&&this.handleGenesysWindowClosed()},2e3)},handleGenesysWindowClosed(){this.updateGenesysButtonState("closed"),this.updateDynamicTitle(),console.log("☁️ Genesys Cloud window was closed by @wtaype"),this.genesysWindow=null,this.showMessage("☁️ Ventana de Genesys Cloud cerrada","info")},saveGenesysUrl(){const c=S("#genesysUrl").val().trim(),p={url:c,lastSaved:new Date().toISOString(),browser:this.browser,user:"wtaype",version:"2.2",lastOpened:this.lastGenesysOpened};this.saveToLS("mibcp_genesys_url",c)&&(this.saveToLS("mibcp_genesys_data",p),console.log("☁️ Genesys URL saved by @wtaype:",c))},loadGenesysUrl(){const c=this.loadFromLS("mibcp_genesys_url",this.defaultGenesysUrl),l=this.loadFromLS("mibcp_genesys_data",{});S("#genesysUrl").val(c),l.lastOpened&&(this.lastGenesysOpened=l.lastOpened),setTimeout(()=>{this.validateAndFormatUrl()},100),console.log("☁️ Genesys URL loaded by @wtaype:",c)},focusGenesysWindow(){if(this.genesysWindow&&!this.genesysWindow.closed)try{this.genesysWindow.focus(),this.showMessage("☁️ Genesys Cloud enfocado","info"),S("#openGenesys").addClass("genesys-focused"),setTimeout(()=>{S("#openGenesys").removeClass("genesys-focused")},1e3)}catch(c){console.log("Could not focus Genesys window:",c),this.showMessage("⚠️ No se pudo enfocar la ventana de Genesys","warning")}else this.showMessage("⚠️ Ventana de Genesys Cloud no está abierta","warning")},isGenesysOpen(){return this.genesysWindow&&!this.genesysWindow.closed},getGenesysStats(){const c=this.loadFromLS("mibcp_genesys_data",{});return{isWindowOpen:this.isGenesysOpen(),currentUrl:S("#genesysUrl").val(),isDefaultUrl:S("#genesysUrl").val()===this.defaultGenesysUrl,browser:this.browser,windowConfig:this.calculateOptimalWindowSize(),lastOpened:this.lastGenesysOpened,user:"wtaype",version:"2.2",github:"https://github.com/wtaype",savedData:c}},cleanupGenesysResources(){this.genesysWindowCheckInterval&&clearInterval(this.genesysWindowCheckInterval),this.genesysUrlSaveTimer&&clearTimeout(this.genesysUrlSaveTimer),console.log("☁️ Genesys resources cleaned up by @wtaype")}});S(document).on("keydown",c=>{(c.ctrlKey||c.metaKey)&&c.key==="g"&&!S(c.target).is("input, textarea")&&(c.preventDefault(),window.app&&typeof window.app.focusGenesysWindow=="function"&&window.app.focusGenesysWindow()),(c.ctrlKey||c.metaKey)&&c.shiftKey&&c.key==="G"&&(c.preventDefault(),window.app&&typeof window.app.openGenesysCloud=="function"&&window.app.openGenesysCloud())});S("<style>").html(`
    .genesys-section {
        margin-bottom: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: var(--transition);
    }
    
    .genesys-section.focused {
        border-color: var(--primary-color);
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.1);
        transform: translateY(-1px);
    }
    
    .genesys-section h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .genesys-section h3 i {
        color: var(--primary-color);
    }
    
    .genesys-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .genesys-input-group {
        display: flex;
        gap: 1rem;
        align-items: stretch;
    }
    
    .genesys-input {
        flex: 1;
        padding: 0.875rem 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-sm);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        font-family: 'Inter', monospace;
        font-size: 0.95rem;
        color: var(--text-primary);
        transition: var(--transition);
    }
    
    .genesys-input:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-1px);
    }
    
    .genesys-input::placeholder {
        color: var(--text-secondary);
        opacity: 0.8;
    }
    
    /* Smart URL validation states */
    .genesys-input.valid-url {
        border-color: var(--success-color);
        background: rgba(16, 185, 129, 0.05);
    }
    
    .genesys-input.warning-url {
        border-color: var(--warning-color);
        background: rgba(245, 158, 11, 0.05);
    }
    
    .genesys-input.invalid-url {
        border-color: var(--danger-color);
        background: rgba(239, 68, 68, 0.05);
        animation: invalidUrlShake 0.4s ease-in-out;
    }
    
    @keyframes invalidUrlShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }
    
    /* Browser-specific input styling */
    .genesys-input-edge {
        border-left: 3px solid #0078d7;
    }
    
    .genesys-input-chrome {
        border-left: 3px solid #ea4335;
    }
    
    .genesys-btn {
        padding: 0.875rem 2rem;
        white-space: nowrap;
        font-weight: 600;
        letter-spacing: 0.025em;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: var(--border-radius-sm);
        cursor: pointer;
    }
    
    /* Smart button states */
    .genesys-btn.genesys-loading {
        background: rgba(102, 126, 234, 0.8);
        color: white;
        pointer-events: none;
    }
    
    .genesys-btn.genesys-active {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
    }
    
    .genesys-btn.genesys-active:hover {
        background: linear-gradient(135deg, #059669, #047857);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px 0 rgba(16, 185, 129, 0.4);
    }
    
    .genesys-btn.genesys-error {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
    }
    
    .genesys-btn.genesys-focused {
        animation: focusedPulse 1s ease-in-out;
    }
    
    @keyframes focusedPulse {
        0%, 100% { 
            box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
        }
        50% { 
            box-shadow: 0 8px 25px 0 rgba(16, 185, 129, 0.6);
            transform: scale(1.02);
        }
    }
    
    /* Browser-specific button styling */
    .genesys-btn-edge {
        border-bottom: 3px solid #0078d7;
    }
    
    .genesys-btn-chrome {
        border-bottom: 3px solid #ea4335;
    }
    
    .genesys-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-secondary);
        font-size: 0.85rem;
        margin-left: 0.5rem;
    }
    
    .genesys-info i {
        color: var(--primary-color);
        opacity: 0.8;
    }
    
    .optimal-browser-badge {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: rgba(16, 185, 129, 0.1);
        color: var(--success-color);
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    /* Loading animation for button */
    .genesys-btn.genesys-loading::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: loadingShimmer 1.5s infinite;
    }
    
    @keyframes loadingShimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    /* Enhanced responsive design */
    @media (max-width: 768px) {
        .genesys-input-group {
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .genesys-btn {
            padding: 1rem;
            text-align: center;
            justify-content: center;
        }
        
        .genesys-input {
            padding: 1rem 1.25rem;
            font-size: 16px; /* Prevent zoom on iOS */
        }
        
        .genesys-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .optimal-browser-badge {
            align-self: flex-end;
        }
    }
`).appendTo("head");console.log("☁️ WIBCP Smart Genesys Cloud Integration loaded! 🌐🧠 by @wtaype");console.log("🔗 GitHub: https://github.com/wtaype");S.extend(Ee.prototype,{initializeApp(){console.log("🚀 Initializing WIBCP v2.2 Smart by @wtaype"),console.log("📅 Current Date: 2025-09-28 15:36:03 UTC"),console.log("👤 User: wtaype"),console.log("🔗 GitHub Profile: https://github.com/wtaype"),this.loadAllSystems(),this.setupImageSystem(),this.setupGenesysIntegration(),this.displaySystemInfo(),this.startPerformanceMonitoring()},loadAllSystems(){try{typeof this.loadDetectionPreference=="function"&&this.loadDetectionPreference(),this.loadData(),console.log("📊 All systems loaded successfully")}catch(c){console.error("❌ Error loading systems:",c),this.showMessage("⚠️ Algunos módulos no se cargaron correctamente","warning")}},setupImageSystem(){typeof this.setupImageHandlers=="function"&&(this.setupImageHandlers(),typeof this.loadImages=="function"&&(this.loadImages(),setTimeout(()=>{if(typeof this.getImageStats=="function"){const c=this.getImageStats();c&&c.count>0&&console.log("🖼️ Image System Stats by @wtaype:",c)}},2500)))},setupGenesysIntegration(){typeof this.setupGenesysCloud=="function"&&(this.setupGenesysCloud(),typeof this.loadGenesysUrl=="function"&&(this.loadGenesysUrl(),setTimeout(()=>{if(typeof this.getGenesysStats=="function"){const c=this.getGenesysStats();console.log("☁️ Genesys Integration Stats by @wtaype:",c)}},1e3)))},displaySystemInfo(){const c={version:"2.2 Smart",user:"wtaype",github:"https://github.com/wtaype",browser:this.browser,timestamp:"2025-09-28 15:36:03 UTC",features:{dynamicTitle:!0,smartDetection:this.browser!=="chrome",genesysIntegration:!0,blobOptimization:!0,smartAnalytics:!0},repositories:["https://github.com/wtaype/retodelmes","https://github.com/wtaype/aver","https://github.com/wtaype/cartadehawka","https://github.com/wtaype/tusfloresamor","https://github.com/wtaype/wiimage"]};console.log("🎯 WIBCP System Information:",c),setTimeout(()=>{console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    WIBCP v2.2 SMART - by @wtaype               ║
╠════════════════════════════════════════════════════════════════╣
║ 🎯 Call Center Tool Inteligente                               ║
║ 📱 Título Dinámico: ACTIVADO                              ║
║ 🎤 Detección Smart: ${c.features.smartDetection?"ACTIVADO":"DESACTIVADO (Chrome)"}                              ║
║ ☁️  Integración Genesys: ACTIVADO                          ║
║ 🖼️ Optimización Blob: ACTIVADO                           ║
║ 📊 Analytics Smart: ACTIVADO                             ║
╠════════════════════════════════════════════════════════════════╣
║ 👤 Usuario: wtaype                                            ║
║ 🌐 Navegador: ${this.browser.toUpperCase()}                                           ║
║ 📅 Fecha: 2025-09-28 15:36:03 UTC                            ║
║ 🔗 GitHub: https://github.com/wtaype                         ║
╚════════════════════════════════════════════════════════════════╝
            `)},3e3)},startPerformanceMonitoring(){setInterval(()=>{if(performance&&performance.memory){const c={used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024),limit:Math.round(performance.memory.jsHeapSizeLimit/1024/1024)};c.used>50&&console.log("📊 Memory Usage by @wtaype:",c,"MB")}},3e5)},generateFullReport(){return{timestamp:new Date().toISOString(),user:"wtaype",version:"2.2",browser:this.browser,history:typeof this.getHistoryAnalytics=="function"?this.getHistoryAnalytics():null,notes:typeof this.getNotesStats=="function"?this.getNotesStats():null,images:typeof this.getImageStats=="function"?this.getImageStats():null,genesys:typeof this.getGenesysStats=="function"?this.getGenesysStats():null,system:{timerRunning:this.isTimerRunning,detectionActive:this.isRecognitionActive,genesysOpen:typeof this.isGenesysOpen=="function"?this.isGenesysOpen():!1,title:document.title,uptime:Date.now()-(window.appStartTime||Date.now())}}},exportFullData(){const c=this.generateFullReport(),l=new Date,p=`MIBCP_FullReport_wtaype_${l.toISOString().split("T")[0]}.json`,m={...c,exportedBy:"wtaype",github:"https://github.com/wtaype",repositories:["retodelmes","aver","cartadehawka","tusfloresamor","wiimage"],metadata:{appVersion:"WIBCP v2.2 Smart",exportDate:l.toISOString(),utcTime:"2025-09-28 15:36:03",format:"JSON",compressed:!1}},w=new Blob([JSON.stringify(m,null,2)],{type:"application/json;charset=utf-8"}),C=URL.createObjectURL(w),I=document.createElement("a");return I.href=C,I.download=p,I.click(),URL.revokeObjectURL(C),this.showMessage(`📁 Reporte completo exportado: ${p}`,"success"),console.log("📤 Full data exported by @wtaype:",{filename:p,size:w.size,timestamp:l.toISOString()}),m},performHealthCheck(){const c={timestamp:new Date().toISOString(),user:"wtaype",overall:"healthy",checks:{localStorage:this.testLocalStorage(),speechRecognition:!!this.recognition,dynamicTitle:!!this.titleUpdateInterval,blobUrls:typeof this.imageBlobUrls<"u"&&this.imageBlobUrls instanceof Map,genesysIntegration:typeof this.genesysWindow<"u"},performance:{memory:performance.memory?{used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024)}:"not available",uptime:Date.now()-(window.appStartTime||Date.now())}},l=Object.values(c.checks).filter(p=>!p).length;return l>0&&(c.overall=l>2?"critical":"warning"),console.log("🏥 System Health Check by @wtaype:",c),c.overall!=="healthy"&&this.showMessage(`⚠️ Sistema: ${c.overall} (${l} fallas)`,"warning"),c},testLocalStorage(){try{const c="mibcp_test",l="test_by_wtaype";localStorage.setItem(c,l);const p=localStorage.getItem(c);return localStorage.removeItem(c),p===l}catch{return!1}}});S(document).ready(()=>{window.appStartTime=Date.now(),window.app||(window.app=new Ee),typeof window.app.initializeApp=="function"&&window.app.initializeApp(),setTimeout(()=>{typeof window.app.performHealthCheck=="function"&&window.app.performHealthCheck()},5e3);const c=window.app.browser==="chrome"?"├─ ⚠️  Detección con advertencia inteligente (Chrome)":"├─ ⌨️  D: Toggle detección automática";console.log(`
🎯 WIBCP v2.2 SMART - Complete Call Center Tool by @wtaype
├─ ⌨️  Espacio: Start/Stop timer
├─ ⌨️  R: Reset timer  
${c}
├─ ⌨️  G: Abrir Genesys Cloud
├─ ⌨️  Ctrl+G: Enfocar ventana Genesys
├─ ⌨️  Ctrl+Shift+G: Abrir Genesys (global)
├─ ⌨️  Ctrl+S: Guardar notas (en área de notas)
├─ ⌨️  1-4: Focus image slots
├─ 🌐 Browser: ${window.app.browser} (${window.app.browser==="edge"?"OPTIMAL":"OK"})
├─ 📱 Dynamic title: ENABLED
├─ 🧠 Smart warnings: ON-DEMAND
├─ ☁️  Genesys Cloud: INTEGRATED
├─ 🖼️ Blob optimization: ENABLED
├─ 📊 Smart analytics: ENABLED
├─ 👤 User: wtaype
├─ 📅 Date: 2025-09-28 15:36:03 UTC
└─ 🔗 GitHub: https://github.com/wtaype
    `),setTimeout(()=>{window.app.showMessage("🎉 WIBCP LISTO!","success")},4e3)});S(document).on("keydown",c=>{(c.ctrlKey||c.metaKey)&&c.altKey&&c.key==="h"&&(c.preventDefault(),window.app&&typeof window.app.performHealthCheck=="function"&&window.app.performHealthCheck()),(c.ctrlKey||c.metaKey)&&c.altKey&&c.key==="e"&&(c.preventDefault(),window.app&&typeof window.app.exportFullData=="function"&&window.app.exportFullData()),(c.ctrlKey||c.metaKey)&&c.altKey&&c.key==="i"&&(c.preventDefault(),window.app&&typeof window.app.displaySystemInfo=="function"&&window.app.displaySystemInfo())});S(window).on("beforeunload",()=>{if(console.log("👋 WIBCP v2.2 Smart shutting down gracefully by @wtaype"),window.app){typeof window.app.cleanupResources=="function"&&window.app.cleanupResources(),typeof window.app.cleanupGenesysResources=="function"&&window.app.cleanupGenesysResources();const c=Date.now()-(window.appStartTime||Date.now());console.log(`📊 Session Summary by @wtaype - Uptime: ${Math.round(c/1e3)}s`)}});S("<style>").html(`
    /* Enhanced system-wide animations */
    @keyframes appInitialized {
        0% { opacity: 0.8; transform: scale(0.98); }
        50% { opacity: 1; transform: scale(1.01); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    body.app-initialized {
        animation: appInitialized 1s ease-out;
    }
    
    /* Power user indicators */
    .power-user-active::after {
        content: '⚡ @wilder.taype';
        position: fixed;
        bottom: 5px;
        right: 5px;
        font-size: 0.7rem;
        color: var(--primary-color);
        opacity: 0.7;
        pointer-events: none;
        z-index: 9999;
    }
    
    /* System health indicators */
    .system-healthy {
        border-bottom: 2px solid var(--success-color);
    }
    
    .system-warning {
        border-bottom: 2px solid var(--warning-color);
    }
    
    .system-critical {
        border-bottom: 2px solid var(--danger-color);
        animation: criticalPulse 2s infinite;
    }
    
    @keyframes criticalPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    /* GitHub integration styles */
    .github-integration {
        position: fixed;
        bottom: 10px;
        left: 10px;
        font-size: 0.7rem;
        color: var(--text-secondary);
        opacity: 0.6;
        pointer-events: none;
        z-index: 1000;
    }
    
    .github-integration a {
        color: var(--primary-color);
        text-decoration: none;
        pointer-events: all;
    }
    
    .github-integration a:hover {
        text-decoration: underline;
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .github-integration,
        .power-user-active::after {
            display: none;
        }
    }
`).appendTo("head");S("body").append(`
    <div class="github-integration">
        🔗 <a href="https://github.com/wtaype" target="_blank">@wtaype</a> | WIBCP v2.2
    </div>
`);setTimeout(()=>{S("body").addClass("app-initialized power-user-active")},4500);console.log("🎉 WIBCP v2.2 Smart - Complete Initialization Module loaded! 🚀✨ by @wtaype");console.log("📅 Built: 2025-09-28 15:36:03 UTC");console.log("🔗 GitHub: https://github.com/wtaype");console.log("👤 User: wtaype");S.extend(Ee.prototype,{setupAboutModal(){S('footer a[href="#about"]').on("click",c=>{c.preventDefault(),this.showLightAboutModal()}),console.log("ℹ️ WIBCP About Modal initialized by @wtaype")},showLightAboutModal(){S("body").prepend(`
            <div class="light-about-modal" id="lightAboutModal">
                <div class="light-modal-content">
                    <div class="light-modal-header">
                        <div class="modal-icon">🎯</div>
                        <h3>Acerca de WIBCP</h3>
                        <button class="close-btn" onclick="app.dismissLightAboutModal()">×</button>
                    </div>
                    
                    <div class="light-modal-body">
                        <div class="about-section">
                            <h4>Acerca de WIBCP</h4>
                            <p>WIBCP (Smart Call Center Tool) es una herramienta inteligente diseñada para optimizar el trabajo diario en call centers, facilitando el control automático de tiempos de espera, detección por voz en español, gestión de imágenes con tecnología Blob, integración con Genesys Cloud y sistema de notas inteligentes. Fue desarrollado por mi <strong> <a class="ftx lkme" href="https://wtaype.github.io/" target="_blank">@wilder.taype</a> </strong>, creado con el fin de apoyar a mis compañeros brindando un apoyo más <em>rápido, inteligente y eficiente</em> en entornos profesionales.</p>
                        </div>
                        
                        <div class="features-section">
                            <h4>Características Principales</h4>
                            <div class="features-grid">
                                <div class="feature-item">🎤 Detección de voz automática</div>
                                <div class="feature-item">⏱️ Timer inteligente 60 segundos</div>
                                <div class="feature-item">☁️ Integración Genesys Cloud</div>
                                <div class="feature-item">🖼️ Gestión de imágenes Blob</div>
                                <div class="feature-item">📝 Notas con autosave</div>
                                <div class="feature-item">📱 Título dinámico en tiempo real</div>
                            </div>
                        </div>
                        
                        <div class="versions-section">
                            <h4>Versión Actual</h4>
                            <p><strong>WIBCP v2.2 Smart</strong> - Versión completa 2025 con todas las características inteligentes</p>
                        </div>
                        
                        <div class="privacy-section">
                            <h4>Política de Privacidad y Seguridad</h4>
                            <p class="privacy-text">Todos los datos ingresados se almacenan localmente en el dispositivo del usuario, garantizando la privacidad al no compartirse con terceros en ningún caso. Se recomienda proteger la información almacenada y utilizar "WIBCP" exclusivamente con fines profesionales en entornos de call center. La aplicación está implementada con funciones de seguridad que incluyen botones de reset y limpieza para eliminar los datos almacenados automáticamente, cleanup de Blob URLs, gestión inteligente de memoria y detección de navegador optimizada, asegurando que toda la información se mantenga segura y privada en todo momento.</p>
                        </div>
                        
                        <button class="understand-btn" onclick="app.dismissLightAboutModal()">ENTENDIDO</button>
                    </div>
                </div>
            </div>
        `),console.log("ℹ️ WIBCP Real Project Modal shown by @wtaype")},dismissLightAboutModal(){S("#lightAboutModal").fadeOut(300,()=>{S("#lightAboutModal").remove()}),console.log("ℹ️ WIBCP Modal dismissed by @wtaype")}});S(document).ready(()=>{window.app&&typeof window.app.setupAboutModal=="function"&&window.app.setupAboutModal()});S("<style>").html(`
    /* Light About Modal - Fixed Position */
    .light-about-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 6000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: lightModalFadeIn 0.3s ease-out;
    }
    
    .light-modal-content {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        width: 90%;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.1),
            0 10px 25px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        animation: lightModalSlideUp 0.4s ease-out;
    }
    
    .light-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 1.5rem 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .modal-icon {
        font-size: 1.8rem;
        margin-right: 0.75rem;
    }
    
    .light-modal-header h3 {
        color: #2d3748;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        flex: 1;
    }
    
    .close-btn {
        background: rgba(239, 68, 68, 0.1);
        color: #e53e3e;
        border: none;
        border-radius: 12px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .close-btn:hover {
        background: rgba(239, 68, 68, 0.2);
        transform: scale(1.1);
    }
    
    .light-modal-body {
        padding: 1.5rem;
    }
    
    .about-section,
    .features-section,
    .versions-section,
    .privacy-section {
        margin-bottom: 1.5rem;
    }
    
    .light-modal-body h4 {
        color: #2d3748;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.75rem 0;
        border-bottom: 2px solid rgba(102, 126, 234, 0.2);
        padding-bottom: 0.25rem;
    }
    
    .light-modal-body p {
        color: #4a5568;
        line-height: 1.5;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
    }
    
    .light-modal-body em {
        color: #3182ce;
        font-style: italic;
        font-weight: 600;
    }
    
    .light-modal-body strong {
        color: #2d3748;
        font-weight: 700;
    }
    
    /* Features Grid */
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.75rem;
        margin-top: 0.5rem;
    }
    
    .feature-item {
        background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(59, 130, 246, 0.1) 50%, 
            rgba(16, 185, 129, 0.1) 100%);
        color: #2d3748;
        padding: 0.75rem;
        border-radius: 10px;
        text-align: center;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(102, 126, 234, 0.2);
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
    }
    
    .feature-item:hover {
        background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.2) 0%, 
            rgba(59, 130, 246, 0.2) 50%, 
            rgba(16, 185, 129, 0.2) 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
    }
    
    .privacy-text {
        font-size: 0.85rem !important;
        color: #4a5568 !important;
        line-height: 1.5 !important;
        text-align: justify;
        margin-bottom: 0 !important;
    }
    
    .understand-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 0.875rem 1.5rem;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        margin-top: 1.5rem;
    }
    
    .understand-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        background: linear-gradient(135deg, #5a67d8 0%, #667eea 100%);
    }
    
    @keyframes lightModalFadeIn {
        from { 
            opacity: 0; 
            backdrop-filter: blur(0px);
        }
        to { 
            opacity: 1; 
            backdrop-filter: blur(20px);
        }
    }
    
    @keyframes lightModalSlideUp {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    /* Custom scrollbar */
    .light-modal-content::-webkit-scrollbar {
        width: 8px;
    }
    
    .light-modal-content::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    
    .light-modal-content::-webkit-scrollbar-thumb {
        background: rgba(102, 126, 234, 0.4);
        border-radius: 4px;
    }
    
    .light-modal-content::-webkit-scrollbar-thumb:hover {
        background: rgba(102, 126, 234, 0.6);
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
        .light-modal-content {
            width: 95%;
            margin: 1rem;
            max-height: 90vh;
        }
        
        .light-modal-header,
        .light-modal-body {
            padding: 1rem;
        }
        
        .features-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }
        
        .feature-item {
            font-size: 0.8rem;
            padding: 0.5rem;
        }
        
        .light-modal-body h4 {
            font-size: 0.95rem;
        }
        
        .light-modal-body p,
        .privacy-text {
            font-size: 0.85rem !important;
        }
    }
`).appendTo("head");S(".wty").text(new Date().getFullYear());console.log("🎯 WIBCP Real Project About Modal loaded! ✨ by @wtaype");console.log("📅 Updated: 2025-09-28 17:49:27 UTC");console.log("👤 User: wtaype");console.log("🚀 Project: WIBCP Smart Call Center Tool");
