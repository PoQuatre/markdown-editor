!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d;e.register("he4vQ",(function(c,n){var o,r,t,O;o=c.exports,r="wast",t=function(){return p},Object.defineProperty(o,r,{get:t,set:O,enumerable:!0,configurable:!0});var a=e("5gnvt"),i=e("hneOf"),s=e("1bcST"),Q=e("33Vcp"),d={__proto__:null,anyref:34,dataref:34,eqref:34,externref:34,i31ref:34,funcref:34,i8:34,i16:34,i32:34,i64:34,f32:34,f64:34},P=s.LRParser.deserialize({version:13,states:"!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",stateData:"!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",goto:"xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",nodeNames:"⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",maxTerm:17,nodeProps:[[Q.NodeProp.openedBy,4,"("],[Q.NodeProp.closedBy,5,")"],[Q.NodeProp.group,-6,6,7,8,9,10,11,"Expression"]],skippedNodes:[0,1,2],repeatNodeCount:1,tokenData:"/Q~R^XY}YZ}]^}pq}rs!Stu!qxy&Vyz'S{|'X}!O'X!Q!R'b!R![)_!]!^,{#T#o-^~!SO_~~!VTOr!Srs!fs#O!S#O#P!k#P~!S~!kOZ~~!nPO~!S~!tiqr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~$hiV~qr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~&[PT~!]!^&_~&bRO!]&_!]!^&k!^~&_~&nTOy&_yz&}z!]&_!]!^&k!^~&_~'SOQ~~'XOS~~'[Q!Q!R'b!R![)_~'gUY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j#l#m)y~(ORY~!Q![(X!g!h(j#X#Y(j~(^SY~!Q![(X!g!h(j#R#S)X#X#Y(j~(mR{|(v}!O(v!Q![(|~(yP!Q![(|~)RQY~!Q![(|#R#S(v~)[P!Q![(X~)dTY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j~)vP!Q![)_~)|R!Q![*V!c!i*V#T#Z*V~*[VY~!O!P*q!Q![*V!c!i*V!r!s+n#R#S)y#T#Z*V#d#e+n~*vTY~!Q![+V!c!i+V!r!s+n#T#Z+V#d#e+n~+[UY~!Q![+V!c!i+V!r!s+n#R#S,o#T#Z+V#d#e+n~+qT{|,Q}!O,Q!Q![,^!c!i,^#T#Z,^~,TR!Q![,^!c!i,^#T#Z,^~,cSY~!Q![,^!c!i,^#R#S,Q#T#Z,^~,rR!Q![+V!c!i+V#T#Z+V~-OP!]!^-R~-WQP~OY-RZ~-R~-ciX~qr-^st-^tu-^uv-^vw-^wx-^z{-^{|-^}!O-^!O!P-^!P!Q-^!Q![-^![!]-^!^!_-^!_!`-^!`!a-^!a!b-^!b!c-^!c!}-^#Q#R-^#R#S-^#S#T-^#T#o-^#p#q-^#r#s-^",tokenizers:[0],topRules:{Module:[0,3]},specialized:[{term:9,get:function(e){return d[e]||-1}}],tokenPrec:0}),$=a.LRLanguage.define({parser:P.configure({props:[a.indentNodeProp.add({App:a.delimitedIndent({closing:")",align:!1})}),a.foldNodeProp.add({App:a.foldInside,BlockComment:function(e){return{from:e.from+2,to:e.to-2}}}),i.styleTags({Keyword:i.tags.keyword,Type:i.tags.typeName,Number:i.tags.number,String:i.tags.string,Identifier:i.tags.variableName,LineComment:i.tags.lineComment,BlockComment:i.tags.blockComment,"( )":i.tags.paren})]}),languageData:{commentTokens:{line:";;",block:{open:"(;",close:";)"}},closeBrackets:{brackets:["(",'"']}}});function p(){return new a.LanguageSupport($)}}))}();
//# sourceMappingURL=dist.ce0e29e7.js.map