("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("lMWUC",(function(T,e){var O,E,I,N;function A(T){for(var e={},O=T.split(" "),E=0;E<O.length;++E)e[O[E]]=!0;return e}O=T.exports,E="pig",I=function(){return i},Object.defineProperty(O,E,{get:I,set:N,enumerable:!0,configurable:!0});var t="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",R="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",S="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",r=A(t),n=A(R),L=A(S),o=/[*+\-%<>=&?:\/!|]/;function U(T,e,O){return e.tokenize=O,O(T,e)}function a(T,e){for(var O,E=!1;O=T.next();){if("/"==O&&E){e.tokenize=C;break}E="*"==O}return"comment"}function C(T,e){var O,E=T.next();return'"'==E||"'"==E?U(T,e,(O=E,function(T,e){for(var E,I=!1,N=!1;null!=(E=T.next());){if(E==O&&!I){N=!0;break}I=!I&&"\\"==E}return!N&&I||(e.tokenize=C),"error"})):/[\[\]{}\(\),;\.]/.test(E)?null:/\d/.test(E)?(T.eatWhile(/[\w\.]/),"number"):"/"==E?T.eat("*")?U(T,e,a):(T.eatWhile(o),"operator"):"-"==E?T.eat("-")?(T.skipToEnd(),"comment"):(T.eatWhile(o),"operator"):o.test(E)?(T.eatWhile(o),"operator"):(T.eatWhile(/[\w\$_]/),n&&n.propertyIsEnumerable(T.current().toUpperCase())&&!T.eat(")")&&!T.eat(".")?"keyword":r&&r.propertyIsEnumerable(T.current().toUpperCase())?"builtin":L&&L.propertyIsEnumerable(T.current().toUpperCase())?"type":"variable")}const i={startState:function(){return{tokenize:C,startOfLine:!0}},token:function(T,e){return T.eatSpace()?null:e.tokenize(T,e)},languageData:{autocomplete:(t+S+R).split(" ")}}}));
//# sourceMappingURL=pig.632c3411.js.map