("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("bUOVf",(function(n,r){var e,t,u,o;function i(n,r){return n.skipToEnd(),r.cur=s,"error"}function c(n,r){return n.match(/^HTTP\/\d\.\d/)?(r.cur=f,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(r.cur=d,"keyword"):i(n,r)}function f(n,r){var e=n.match(/^\d+/);if(!e)return i(n,r);r.cur=a;var t=Number(e[0]);return t>=100&&t<400?"atom":"error"}function a(n,r){return n.skipToEnd(),r.cur=s,null}function d(n,r){return n.eatWhile(/\S/),r.cur=l,"string.special"}function l(n,r){return n.match(/^HTTP\/\d\.\d$/)?(r.cur=s,"keyword"):i(n,r)}function s(n){return n.sol()&&!n.eat(/[ \t]/)?n.match(/^.*?:/)?"atom":(n.skipToEnd(),"error"):(n.skipToEnd(),"string")}function p(n){return n.skipToEnd(),null}e=n.exports,t="http",u=function(){return k},Object.defineProperty(e,t,{get:u,set:o,enumerable:!0,configurable:!0});const k={token:function(n,r){var e=r.cur;return e!=s&&e!=p&&n.eatSpace()?null:e(n,r)},blankLine:function(n){n.cur=p},startState:function(){return{cur:c}}}}));
//# sourceMappingURL=http.5fa27b32.js.map