("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree9b0.register("hspBi",(function(e,n){var t,r,o,i;t=e.exports,r="fcl",o=function(){return m},Object.defineProperty(t,r,{get:o,set:i,enumerable:!0,configurable:!0});var a={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},u={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},l={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},f={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},c=/[+\-*&^%:=<>!|\/]/;function d(e,n){var t=e.next();if(/[\d\.]/.test(t))return"."==t?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==t?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==t||"("==t){if(e.eat("*"))return n.tokenize=s,s(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}if(c.test(t))return e.eatWhile(c),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current().toLowerCase();return a.propertyIsEnumerable(r)||u.propertyIsEnumerable(r)||l.propertyIsEnumerable(r)?"keyword":f.propertyIsEnumerable(r)?"atom":"variable"}function s(e,n){for(var t,r=!1;t=e.next();){if(("/"==t||")"==t)&&r){n.tokenize=d;break}r="*"==t}return"comment"}function p(e,n,t,r,o){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=o}var m={startState:function(e){return{tokenize:null,context:new p(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(null==t.align&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;var r=(n.tokenize||d)(e,n);if("comment"==r)return r;null==t.align&&(t.align=!0);var o=e.current().toLowerCase();return u.propertyIsEnumerable(o)?function(e,n,t){e.context=new p(e.indented,n,t,null,e.context)}(n,e.column(),"end_block"):l.propertyIsEnumerable(o)&&function(e){e.context.prev&&("end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev)}(n),n.startOfLine=!1,r},indent:function(e,n,t){if(e.tokenize!=d&&null!=e.tokenize)return 0;var r=e.context,o=l.propertyIsEnumerable(n);return r.align?r.column+(o?0:1):r.indented+(o?0:t.unit)},languageData:{commentTokens:{line:"//",block:{open:"(*",close:"*)"}}}}}));
//# sourceMappingURL=fcl.b5c7df37.js.map