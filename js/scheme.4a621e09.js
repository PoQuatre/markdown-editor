("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("79VmC",(function(e,t){var n,r,a,i;n=e.exports,r="scheme",a=function(){return C},Object.defineProperty(n,r,{get:a,set:i,enumerable:!0,configurable:!0});var s="comment",o="string",c="symbol",l="atom",d="number",u="bracket";function p(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var m=p("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),f=p("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");function h(e,t,n){this.indent=e,this.type=t,this.prev=n}function g(e,t,n){e.indentStack=new h(t,n,e.indentStack)}var x=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),b=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),v=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),y=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function k(e){return e.match(x)}function w(e){return e.match(b)}function E(e,t){return!0===t&&e.backUp(1),e.match(y)}function q(e){return e.match(v)}function S(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t.token&&!r){t.state.mode=!1;break}r=!r&&"\\"==n}}const C={startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,t){if(null==t.indentStack&&e.sol()&&(t.indentation=e.indentation()),e.eatSpace())return null;var n=null;switch(t.mode){case"string":S(e,{token:'"',state:t}),n=o;break;case"symbol":S(e,{token:"|",state:t}),n=c;break;case"comment":for(var r,a=!1;null!=(r=e.next());){if("#"==r&&a){t.mode=!1;break}a="|"==r}n=s;break;case"s-expr-comment":if(t.mode=!1,"("!=e.peek()&&"["!=e.peek()){e.eatWhile(/[^\s\(\)\[\]]/),n=s;break}t.sExprComment=0;default:var i=e.next();if('"'==i)t.mode="string",n=o;else if("'"==i)"("==e.peek()||"["==e.peek()?("number"!=typeof t.sExprQuote&&(t.sExprQuote=0),n=l):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n=l);else if("|"==i)t.mode="symbol",n=c;else if("#"==i)if(e.eat("|"))t.mode="comment",n=s;else if(e.eat(/[tf]/i))n=l;else if(e.eat(";"))t.mode="s-expr-comment",n=s;else{var p=null,h=!1,x=!0;e.eat(/[ei]/i)?h=!0:e.backUp(1),e.match(/^#b/i)?p=k:e.match(/^#o/i)?p=w:e.match(/^#x/i)?p=q:e.match(/^#d/i)?p=E:e.match(/^[-+0-9.]/,!1)?(x=!1,p=E):h||e.eat("#"),null!=p&&(x&&!h&&e.match(/^#[ei]/i),p(e)&&(n=d))}else if(/^[-+0-9.]/.test(i)&&E(e,!0))n=d;else if(";"==i)e.skipToEnd(),n=s;else if("("==i||"["==i){for(var b,v="",y=e.column();null!=(b=e.eat(/[^\s\(\[\;\)\]]/));)v+=b;v.length>0&&f.propertyIsEnumerable(v)?g(t,y+2,i):(e.eatSpace(),e.eol()||";"==e.peek()?g(t,y+1,i):g(t,y+e.current().length,i)),e.backUp(e.current().length-1),"number"==typeof t.sExprComment&&t.sExprComment++,"number"==typeof t.sExprQuote&&t.sExprQuote++,n=u}else")"==i||"]"==i?(n=u,null!=t.indentStack&&t.indentStack.type==(")"==i?"(":"[")&&(!function(e){e.indentStack=e.indentStack.prev}(t),"number"==typeof t.sExprComment&&0==--t.sExprComment&&(n=s,t.sExprComment=!1),"number"==typeof t.sExprQuote&&0==--t.sExprQuote&&(n=l,t.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n=m&&m.propertyIsEnumerable(e.current())?"builtin":"variable")}return"number"==typeof t.sExprComment?s:"number"==typeof t.sExprQuote?l:n},indent:function(e){return null==e.indentStack?e.indentation:e.indentStack.indent},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:";;"}}}}));
//# sourceMappingURL=scheme.4a621e09.js.map