(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"6q/U":function(t,e,n){!function(t){"use strict";var e="this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as".split(" "),n="try catch finally do else for if switch while".split(" "),i="true false null".split(" "),r="void bool num int double dynamic var String".split(" ");function o(t){for(var e={},n=0;n<t.length;++n)e[t[n]]=!0;return e}function a(t){(t.interpolationStack||(t.interpolationStack=[])).push(t.tokenize)}function u(t){return(t.interpolationStack||(t.interpolationStack=[])).pop()}function c(t){return t.interpolationStack?t.interpolationStack.length:0}function l(t,e,n,i){var r=!1;if(e.eat(t)){if(!e.eat(t))return"string";r=!0}function o(e,n){for(var o=!1;!e.eol();){if(!i&&!o&&"$"==e.peek())return a(n),n.tokenize=f,"string";var u=e.next();if(u==t&&!o&&(!r||e.match(t+t))){n.tokenize=null;break}o=!i&&!o&&"\\"==u}return"string"}return n.tokenize=o,o(e,n)}function f(t,e){return t.eat("$"),t.eat("{")?e.tokenize=null:e.tokenize=s,null}function s(t,e){return t.eatWhile(/[\w_]/),e.tokenize=u(e),"variable"}function k(t){return function(e,n){for(var i;i=e.next();){if("*"==i&&e.eat("/")){if(1==t){n.tokenize=null;break}return n.tokenize=k(t-1),n.tokenize(e,n)}if("/"==i&&e.eat("*"))return n.tokenize=k(t+1),n.tokenize(e,n)}return"comment"}}t.defineMIME("application/dart",{name:"clike",keywords:o(e),blockKeywords:o(n),builtin:o(r),atoms:o(i),hooks:{"@":function(t){return t.eatWhile(/[\w\$_\.]/),"meta"},"'":function(t,e){return l("'",t,e,!1)},'"':function(t,e){return l('"',t,e,!1)},r:function(t,e){var n=t.peek();return("'"==n||'"'==n)&&l(t.next(),t,e,!0)},"}":function(t,e){return c(e)>0&&(e.tokenize=u(e),null)},"/":function(t,e){return!!t.eat("*")&&(e.tokenize=k(1),e.tokenize(t,e))},token:function(t,e,n){if("variable"==n&&RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$","g").test(t.current()))return"variable-2"}}}),t.registerHelper("hintWords","application/dart",e.concat(i).concat(r)),t.defineMode("dart",(function(e){return t.getMode(e,"application/dart")}),"clike")}(n("VrN/"),n("S6bl"))}}]);
//# sourceMappingURL=57.a706133eb09e48ae30f2.js.map