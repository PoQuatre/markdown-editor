("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree9b0.register("jRBfi",(function(e,n){var t,r,i,u;t=e.exports,r="ntriples",i=function(){return W},Object.defineProperty(t,r,{get:i,set:u,enumerable:!0,configurable:!0});var a=0,o=1,f=2,l=3,s=4,c=5,p=6,h=7,b=8,d=9,v=10,g=11,x=12;function y(e,n){var t,r=e.location;t=r==a&&"<"==n?o:r==a&&"_"==n?f:r==l&&"<"==n?s:r==c&&"<"==n?p:r==c&&"_"==n?h:r==c&&'"'==n?b:r==o&&">"==n||r==f&&" "==n?l:r==s&&">"==n?c:r==p&&">"==n||r==h&&" "==n||r==b&&'"'==n||r==d&&" "==n||r==v&&">"==n?g:r==b&&"@"==n?d:r==b&&"^"==n?v:" "!=n||r!=a&&r!=l&&r!=c&&r!=g?r==g&&"."==n?a:x:r,e.location=t}var W={startState:function(){return{location:a,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(e,n){var t=e.next();if("<"==t){y(n,t);var r="";return e.eatWhile((function(e){return"#"!=e&&">"!=e&&(r+=e,!0)})),n.uris.push(r),e.match("#",!1)||(e.next(),y(n,">")),"variable"}if("#"==t){var i="";return e.eatWhile((function(e){return">"!=e&&" "!=e&&(i+=e,!0)})),n.anchors.push(i),"url"}if(">"==t)return y(n,">"),"variable";if("_"==t){y(n,t);var u="";return e.eatWhile((function(e){return" "!=e&&(u+=e,!0)})),n.bnodes.push(u),e.next(),y(n," "),"builtin"}if('"'==t)return y(n,t),e.eatWhile((function(e){return'"'!=e})),e.next(),"@"!=e.peek()&&"^"!=e.peek()&&y(n,'"'),"string";if("@"==t){y(n,"@");var a="";return e.eatWhile((function(e){return" "!=e&&(a+=e,!0)})),n.langs.push(a),e.next(),y(n," "),"string.special"}if("^"==t){e.next(),y(n,"^");var o="";return e.eatWhile((function(e){return">"!=e&&(o+=e,!0)})),n.types.push(o),e.next(),y(n,">"),"variable"}" "==t&&y(n,t),"."==t&&y(n,t)}}}));
//# sourceMappingURL=ntriples.fd88b83a.js.map