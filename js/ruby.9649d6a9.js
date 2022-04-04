("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("jqQ4O",(function(e,t){var n,r,i,a;function o(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}n=e.exports,r="ruby",i=function(){return g},Object.defineProperty(n,r,{get:i,set:a,enumerable:!0,configurable:!0});var u,l=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],f=o(l),s=o(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),d=o(["end","until"]),c={"[":"]","{":"}","(":")"},p={"]":"[","}":"{",")":"("};function k(e,t,n){return n.tokenize.push(e),e(t,n)}function h(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(v),"comment";if(e.eatSpace())return null;var n,r,i,a=e.next();if("`"==a||"'"==a||'"'==a)return k(x(a,"string",'"'==a||"`"==a),e,t);if("/"==a)return function(e){for(var t,n=e.pos,r=0,i=!1,a=!1;null!=(t=e.next());)if(a)a=!1;else{if("[{(".indexOf(t)>-1)r++;else if("]})".indexOf(t)>-1){if(--r<0)break}else if("/"==t&&0==r){i=!0;break}a="\\"==t}return e.backUp(e.pos-n),i}(e)?k(x(a,"string.special",!0),e,t):"operator";if("%"==a){var o="string",l=!0;e.eat("s")?o="atom":e.eat(/[WQ]/)?o="string":e.eat(/[r]/)?o="string.special":e.eat(/[wxq]/)&&(o="string",l=!1);var f=e.eat(/[^\w\s=]/);return f?(c.propertyIsEnumerable(f)&&(f=c[f]),k(x(f,o,l,!0),e,t)):"operator"}if("#"==a)return e.skipToEnd(),"comment";if("<"==a&&(n=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return k((r=n[2],i=n[1],function(e,t){return i&&e.eatSpace(),e.match(r)?t.tokenize.pop():e.skipToEnd(),"string"}),e,t);if("0"==a)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(a))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==a){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==a)return e.eat("'")?k(x("'","atom",!1),e,t):e.eat('"')?k(x('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if("@"==a&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"propertyName";if("$"==a)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variableName.special";if(/[a-zA-Z_\xa1-\uffff]/.test(a))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"variable";if("|"!=a||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(a))return u=a,null;if("-"==a&&e.eat(">"))return"operator";if(/[=+\-\/*:\.^%<>~|]/.test(a)){var s=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=a||s||(u="."),"operator"}return null}return u="|",null}function m(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);n.tokenize[n.tokenize.length-1]=m(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=m(e+1));return h(t,n)}}function b(){var e=!1;return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,h(t,n))}}function x(e,t,n,r){return function(i,a){var o,u=!1;for("read-quoted-paused"===a.context.type&&(a.context=a.context.prev,i.eat("}"));null!=(o=i.next());){if(o==e&&(r||!u)){a.tokenize.pop();break}if(n&&"#"==o&&!u){if(i.eat("{")){"}"==e&&(a.context={prev:a.context,type:"read-quoted-paused"}),a.tokenize.push(m());break}if(/[@\$]/.test(i.peek())){a.tokenize.push(b());break}}u=!u&&"\\"==o}return t}}function v(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}var g={startState:function(e){return{tokenize:[h],indented:0,context:{type:"top",indented:-e},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){u=null,e.sol()&&(t.indented=e.indentation());var n,r=t.tokenize[t.tokenize.length-1](e,t),i=u;if("variable"==r){var a=e.current();"keyword"==(r="."==t.lastTok?"property":f.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(a)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable")&&(i=a,s.propertyIsEnumerable(a)?n="indent":d.propertyIsEnumerable(a)?n="dedent":"if"!=a&&"unless"!=a||e.column()!=e.indentation()?"do"==a&&t.context.indented<t.indented&&(n="indent"):n="indent")}return(u||r&&"comment"!=r)&&(t.lastTok=i),"|"==u&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(u)?t.context={prev:t.context,type:u||r,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(u))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==u||"operator"==r),r},indent:function(e,t,n){if(e.tokenize[e.tokenize.length-1]!=h)return null;var r=t&&t.charAt(0),i=e.context,a=i.type==p[r]||"keyword"==i.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(t);return i.indented+(a?0:n.unit)+(e.continuedLine?n.unit:0)},languageData:{indentOnInput:/^\s*(?:end|rescue|elsif|else|\})$/,commentTokens:{line:"#"},autocomplete:l}}}));
//# sourceMappingURL=ruby.9649d6a9.js.map