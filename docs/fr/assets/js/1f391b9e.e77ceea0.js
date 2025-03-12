(self.webpackChunkfabpsa_au=self.webpackChunkfabpsa_au||[]).push([[61],{4786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>bt});var s=n(6540),a=n(8215),o=n(1769),c=n(204),i=n(1941),r=n(8453),l=n(7143),d=n(9136),u=n(8532),m=n(3115);function h(){const{prism:e}=(0,m.p)(),{colorMode:t}=(0,u.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var f=n(8426),p=n.n(f);const x=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(j);function N(e,t){const n=e.map((e=>{const{start:n,end:s}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&g.test(o)){const e=o.match(g).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],t);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],t);case"html":return N(["js","jsBlock","html"],t);case"python":case"py":case"bash":return N(["bash"],t);case"markdown":case"md":return N(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return N(["tex"],t);case"lua":case"haskell":return N(["lua"],t);case"sql":return N(["lua","jsBlock"],t);case"wasm":return N(["wasm"],t);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],t);case"vbnet":return N(["vbnet","rem"],t);case"batch":return N(["rem"],t);case"basic":return N(["rem","f90"],t);case"fsharp":return N(["js","ml"],t);case"ocaml":case"sml":return N(["ml"],t);case"fortran":return N(["f90"],t);case"cobol":return N(["cobol"],t);default:return N(v,t)}}(s,a),i=n.split("\n"),r=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const A="codeBlockContainer_Ckt0";var k=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(h());return(0,k.jsx)(t,{...n,style:s,className:(0,a.A)(n.className,A,c.G.common.codeBlock)})}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){let{children:t,className:n}=e;return(0,k.jsx)(C,{as:"pre",tabIndex:0,className:(0,a.A)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var L=n(6849);const _={attributes:!0,characterData:!0,childList:!0,subtree:!0};function E(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=_);const a=(0,L._q)(t),o=(0,L.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var T=n(8181);const H="codeLine_lJS_",S="codeLineNumber_Tfdd",U="codeLineContent_feaV";function M(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,a.A)(n,s&&H)}),r=t.map(((e,t)=>(0,k.jsx)("span",{...c({token:e})},t)));return(0,k.jsxs)("span",{...i,children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:S}),(0,k.jsx)("span",{className:U,children:r})]}):r,(0,k.jsx)("br",{})]})}var I=n(539);function z(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function R(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function O(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),c(!0),i.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":o?(0,I.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",n,V.copyButton,o&&V.copyButtonCopied),onClick:r,children:(0,k.jsxs)("span",{className:V.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(z,{className:V.copyButtonIcon}),(0,k.jsx)(R,{className:V.copyButtonSuccessIcon})]})})}function P(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $="wordWrapButtonIcon_Bwma",D="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,I.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,a.A)("clean-btn",t,s&&D),"aria-label":o,title:o,children:(0,k.jsx)(P,{className:$,"aria-hidden":"true"})})}function W(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:i,language:r}=e;const{prism:{defaultLanguage:l,magicComments:d}}=(0,m.p)(),u=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??l),f=h(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return E(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(x)?.groups.title??""}(o)||c,{lineClassNames:j,code:b}=y(t,{metastring:o,language:u,magicComments:d}),v=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,k.jsxs)(C,{as:"div",className:(0,a.A)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`),children:[g&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:g}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(T.f4,{theme:f,code:b,language:u??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,a.A)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,a.A)(B.codeBlockLines,v&&B.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,k.jsx)(M,{line:e,getLineProps:o,getTokenProps:c,classNames:j[t],showLineNumbers:v},t)))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,k.jsx)(G,{className:B.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,k.jsx)(O,{className:B.codeButton,code:b})]})]})]})}function q(e){let{children:t,...n}=e;const a=(0,d.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?W:w;return(0,k.jsx)(c,{...n,children:o},String(a))}function F(e){return(0,k.jsx)("code",{...e})}var Z=n(6289);var J=n(5066),Y=n(5246),K=n(8672);const Q="details_lb9f",X="isBrowser_bmU9",ee="collapsibleContent_i85q";function te(e){return!!e&&("SUMMARY"===e.tagName||te(e.parentElement))}function ne(e,t){return!!e&&(e===t||ne(e.parentElement,t))}function se(e){let{summary:t,children:n,...a}=e;(0,Y.A)().collectAnchor(a.id);const o=(0,d.A)(),c=(0,s.useRef)(null),{collapsed:i,setCollapsed:r}=(0,K.u)({initialState:!a.open}),[l,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...a,ref:c,open:l,"data-collapsed":i,className:(0,J.A)(Q,o&&X,a.className),onMouseDown:e=>{te(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;te(t)&&ne(t,c.current)&&(e.preventDefault(),i?(r(!1),u(!0)):r(!0))},children:[m,(0,k.jsx)(K.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),u(!e)},children:(0,k.jsx)("div",{className:ee,children:n})})]})}const ae="details_b_Ee";function oe(e){let{...t}=e;return(0,k.jsx)(se,{...t,className:(0,a.A)("alert alert--info",ae,t.className)})}function ce(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(oe,{...e,summary:n,children:a})}var ie=n(9303);function re(e){return(0,k.jsx)(ie.A,{...e})}const le="containsTaskList_mC6p";function de(e){if(void 0!==e)return(0,a.A)(e,e?.includes("contains-task-list")&&le)}const ue="img_ev3q";function me(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,k.jsx)(k.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const he="admonition_xJq3",fe="admonitionHeading_Gvgb",pe="admonitionIcon_Rf37",xe="admonitionContent_BuS1";function ge(e){let{type:t,className:n,children:s}=e;return(0,k.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(t),he,n),children:s})}function je(e){let{icon:t,title:n}=e;return(0,k.jsxs)("div",{className:fe,children:[(0,k.jsx)("span",{className:pe,children:t}),n]})}function be(e){let{children:t}=e;return t?(0,k.jsx)("div",{className:xe,children:t}):null}function ve(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,k.jsxs)(ge,{type:t,className:o,children:[s||n?(0,k.jsx)(je,{title:s,icon:n}):null,(0,k.jsx)(be,{children:a})]})}function Ne(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const ye={icon:(0,k.jsx)(Ne,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Ae(e){return(0,k.jsx)(ve,{...ye,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function ke(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Ce={icon:(0,k.jsx)(ke,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Be(e){return(0,k.jsx)(ve,{...Ce,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function we(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Le={icon:(0,k.jsx)(we,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function _e(e){return(0,k.jsx)(ve,{...Le,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function Ee(e){return(0,k.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Te={icon:(0,k.jsx)(Ee,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function He(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Se={icon:(0,k.jsx)(He,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Ue={icon:(0,k.jsx)(Ee,{}),title:(0,k.jsx)(I.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Me={...{note:Ae,tip:Be,info:_e,warning:function(e){return(0,k.jsx)(ve,{...Te,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,k.jsx)(ve,{...Se,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,k.jsx)(Ae,{title:"secondary",...e}),important:e=>(0,k.jsx)(_e,{title:"important",...e}),success:e=>(0,k.jsx)(Be,{title:"success",...e}),caution:function(e){return(0,k.jsx)(ve,{...Ue,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function Ie(e){const t=me(e),n=(s=t.type,Me[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Me.info));var s;return(0,k.jsx)(n,{...t})}var ze=n(205);const Re={Head:l.A,details:ce,Details:ce,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,k.jsx)(F,{...e}):(0,k.jsx)(q,{...e})},a:function(e){return(0,k.jsx)(Z.A,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:de(e.className)})},li:function(e){return(0,Y.A)().collectAnchor(e.id),(0,k.jsx)("li",{...e})},img:function(e){return(0,k.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,a.A)(t,ue))});var t},h1:e=>(0,k.jsx)(re,{as:"h1",...e}),h2:e=>(0,k.jsx)(re,{as:"h2",...e}),h3:e=>(0,k.jsx)(re,{as:"h3",...e}),h4:e=>(0,k.jsx)(re,{as:"h4",...e}),h5:e=>(0,k.jsx)(re,{as:"h5",...e}),h6:e=>(0,k.jsx)(re,{as:"h6",...e}),admonition:Ie,mermaid:ze.A};function Ve(e){let{children:t}=e;return(0,k.jsx)(r.x,{components:Re,children:t})}function Oe(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function Pe(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=Pe({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function $e(e){const t=e.getBoundingClientRect();return t.top===t.bottom?$e(e.parentNode):t}function De(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>$e(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}($e(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Ge(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,m.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function We(e){const t=(0,s.useRef)(void 0),n=Ge();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),r=De(i,{anchorTopOffset:n.current}),l=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function qe(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,k.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,k.jsxs)("li",{children:[(0,k.jsx)(Z.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,k.jsx)(qe,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Fe=s.memo(qe);function Ze(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:i,...r}=e;const l=(0,m.p)(),d=c??l.tableOfContents.minHeadingLevel,u=i??l.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>Pe({toc:Oe(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return We((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u}}),[a,o,d,u])),(0,k.jsx)(Fe,{toc:h,className:n,linkClassName:a,...r})}const Je={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Ye="table-of-contents__link toc-highlight",Ke="table-of-contents__link--active";function Qe(e){let{className:t,...n}=e;return(0,k.jsx)("div",{className:(0,a.A)(Je.tableOfContents,"thin-scrollbar",t),children:(0,k.jsx)(Ze,{...n,linkClassName:Ye,linkActiveClassName:Ke})})}function Xe(){return(0,k.jsx)(I.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function et(){return(0,k.jsx)(I.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function tt(){return(0,k.jsx)(l.A,{children:(0,k.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function nt(){return(0,k.jsx)(I.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function st(){return(0,k.jsx)(I.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function at(e){let{className:t}=e;return(0,k.jsx)(Ie,{type:"caution",title:(0,k.jsx)(nt,{}),className:(0,a.A)(t,c.G.common.draftBanner),children:(0,k.jsx)(st,{})})}function ot(e){let{className:t}=e;return(0,k.jsx)(Ie,{type:"caution",title:(0,k.jsx)(Xe,{}),className:(0,a.A)(t,c.G.common.unlistedBanner),children:(0,k.jsx)(et,{})})}function ct(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(tt,{}),(0,k.jsx)(ot,{...e})]})}function it(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,k.jsxs)(k.Fragment,{children:[(n||s.unlisted)&&(0,k.jsx)(ct,{}),s.draft&&(0,k.jsx)(at,{})]})}const rt={iconEdit:"iconEdit_Z9Sw"};function lt(e){let{className:t,...n}=e;return(0,k.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(rt.iconEdit,t),"aria-hidden":"true",...n,children:(0,k.jsx)("g",{children:(0,k.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function dt(e){let{editUrl:t}=e;return(0,k.jsxs)(Z.A,{to:t,className:c.G.common.editThisPage,children:[(0,k.jsx)(lt,{}),(0,k.jsx)(I.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var ut=n(797);function mt(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,ut.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,ut.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function ht(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=mt({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,k.jsx)(I.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,k.jsx)("b",{children:(0,k.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function ft(e){let{lastUpdatedBy:t}=e;return(0,k.jsx)(I.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,k.jsx)("b",{children:t})},children:" by {user}"})}function pt(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,k.jsxs)("span",{className:c.G.common.lastUpdated,children:[(0,k.jsx)(I.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,k.jsx)(ht,{lastUpdatedAt:t}):"",byUser:n?(0,k.jsx)(ft,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const xt={lastUpdated:"lastUpdated_JAkA"};function gt(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:o}=e;return(0,k.jsxs)("div",{className:(0,a.A)("row",t),children:[(0,k.jsx)("div",{className:"col",children:n&&(0,k.jsx)(dt,{editUrl:n})}),(0,k.jsx)("div",{className:(0,a.A)("col",xt.lastUpdated),children:(s||o)&&(0,k.jsx)(pt,{lastUpdatedAt:s,lastUpdatedBy:o})})]})}const jt={mdxPageWrapper:"mdxPageWrapper_j9I6"};function bt(e){const{content:t}=e,{metadata:n,assets:s}=t,{title:r,editUrl:l,description:d,frontMatter:u,lastUpdatedBy:m,lastUpdatedAt:h}=n,{keywords:f,wrapperClassName:p,hide_table_of_contents:x}=u,g=s.image??u.image,j=!!(l||h||m);return(0,k.jsx)(o.e3,{className:(0,a.A)(p??c.G.wrapper.mdxPages,c.G.page.mdxPage),children:(0,k.jsxs)(i.A,{children:[(0,k.jsx)(o.be,{title:r,description:d,keywords:f,image:g}),(0,k.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,k.jsxs)("div",{className:(0,a.A)("row",jt.mdxPageWrapper),children:[(0,k.jsxs)("div",{className:(0,a.A)("col",!x&&"col--8"),children:[(0,k.jsx)(it,{metadata:n}),(0,k.jsx)("article",{children:(0,k.jsx)(Ve,{children:(0,k.jsx)(t,{})})}),j&&(0,k.jsx)(gt,{className:(0,a.A)("margin-top--sm",c.G.pages.pageFooterEditMetaRow),editUrl:l,lastUpdatedAt:h,lastUpdatedBy:m})]}),!x&&t.toc.length>0&&(0,k.jsx)("div",{className:"col col--2",children:(0,k.jsx)(Qe,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})})]})})]})})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>i});var s=n(6540);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);