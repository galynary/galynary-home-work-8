!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function m(e,t,n){var i,o,u,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(w,t),s?h(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function S(e){return f=void 0,m&&i?h(e):(i=o=void 0,a)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(w,t),h(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},T.flush=function(){return void 0===f?a:S(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const h="selectedFilters",j=document.querySelector(".feedback-form");!function(){let e=localStorage.getItem(h);e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{j.elements[e].value=t})))}(),j.addEventListener("submit",(function(e){e.preventDefault();new FormData(j).forEach(((e,t)=>console.log(e,t))),e.currentTarget.reset(),localStorage.removeItem(h)})),j.addEventListener("input",e(t)((function(e){let t=localStorage.getItem(h);t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(t))}),500))}();
//# sourceMappingURL=03-feedback.bdb9058d.js.map
