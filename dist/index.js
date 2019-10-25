parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EHrm":[function(require,module,exports) {
module.exports={name:"chess-functions",version:"0.12.0",author:"Domingo E. Savoretti <esavoretti@gmail.com>",main:"dist/index.js",files:["dist/"],keywords:["chess","chess-rules","move-validator","chess.js","pgn-reader"],license:"MIT",scripts:{build:"parcel build src/index.js && cp src/index.html dist/index.html",watch:"parcel watch index.html",clean:"rm -r ./dist/"}};
},{}],"Focm":[function(require,module,exports) {
var global = arguments[3];
var n,e=arguments[3];function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function u(n,e){return c(n)||a(n,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,i=!1,u=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(c){i=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}return t}}function c(n){if(Array.isArray(n))return n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(t,!0).forEach(function(e){l(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function h(n){return v(n)||g(n)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function v(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}var _=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return"".concat(e.repeat(t-n.length)).concat(n)},d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return"".concat(n).concat(e.repeat(t-n.length))},y=function(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))},k=function(n,e){return n.reduce(function(n,t){return n[n.length-1].length<e?[].concat(h(n.slice(0,-1)),[[].concat(h(n[n.length-1]),[t])]):[].concat(h(n),[[t]])},[[]])},b=function(n){return n.reduce(function(n,e){return e in n?n[e]+=1:n[e]=1,n},{})},w=function(n){return n.reduce(function(n,e){return n.find(function(n){return n===e})?n:[].concat(h(n),[e])},[])},m=function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e===t?[e]:(r||(r=e<t?1:-1),e>t&&r>0?[]:e<t&&r<0?[]:[e].concat(h(n(e+r,t,r))))},P=m(0,63),R=/(?:(^0-0-0|^O-O-O)|(^0-0|^O-O)|(?:^([a-h])(?:([1-8])|(?:x([a-h][1-8])))(?:=?([NBRQ]))?)|(?:^([NBRQK])([a-h])?([1-8])?(x)?([a-h][1-8])))(?:(\+)|(#)|(\+\+))?$/,S=/^\s*\[\s*(.+?)\s+"(.+?)"\s*\]\s*$/,q="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",N="rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 1",A="rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",C="rnbqkbnr/ppp2ppp/4p3/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3",K="rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3",B="r1bqnNnr/pppkpp1p/7R/3p4/8/8/PPPPPPP1/RNBQKBN1 b Q - 0 6",O="r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",Q="r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4",M="rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",F="rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",T="7k/7P/7K/8/8/8/8/8 w - - 0 1",j="R6k/6pp/8/8/3n4/8/8/7K b - - 0 1",E="R6k/6pp/8/8/3r4/8/8/7K b - - 0 1",I="R6k/6qp/5B2/8/8/8/8/7K b - - 0 1",x="8/6B1/6p1/R6k/7p/8/8/K5R1 b KQkq - 0 1",L="8/5BB1/6p1/R6k/7p/8/8/K5R1 b KQkq - 0 1",D=function(n){var e=n.split(/\s+/);return{fenString:e[0],turn:e[1],castling:e[2],enPassant:e[3],halfMoveClock:e[4],fullMoveNumber:e[5],fenArray:G(e[0])}},U=function(n){return delete n.fenArray,values(n).join(" ")},W=function(n){return n.replace(/\//g,"").replace(/[1-8]/g,function(n){return"0".repeat(parseInt(n))})},$=function(n){return n.replace(/(.{8})(?!$)/g,"$1/").replace(/0+/g,function(n){return n.length.toString()})},G=function(n){if(/^(.+\/){7}.+$/.test(n))n=W(n);else if(64!==n.length)return[];return n.split("").map(function(n,e,t){return t[56^e]})},V=G(D(q).fenString),z=function(n){return $(n.map(function(e,t){return n[56^t]}).join(""))},H=z(V),X=function(n){return n>=0&&n<64?"".concat(String.fromCharCode(97+nn(n))).concat(String.fromCharCode(49+Z(n))):"-"},Y=function(n){return/[a-h][1-8]/.test(n)?un(n.charCodeAt(1)-49,n.charCodeAt(0)-97):-1},J=function(n){return isNaN(n)?Y(n):parseInt(n)},Z=function(n){return Math.floor(J(n)/8)},nn=function(n){return J(n)%8},en=function(n){return String.fromCharCode(97+n)},tn=function(n){return n.charCodeAt(0)-97},rn=function(n){return{row:Z(n),col:nn(n)}},un=function(n,e){return 8*n+e},on=function(n){return/[pnbrqk]/.test(n)},an=function(n){return/[PNBRQK]/.test(n)},cn=function(n){return"0"===n},sn=function(n){return"String"===n.constructor.name&&(n=Y(n)),Z(n)%2==0&&nn(n)%2==0||Z(n)%2!=0&&nn(n)%2!=0},fn=function(n){return!sn(n)},ln=function(n,e){return Math.abs(Z(n)-Z(e))},hn=function(n,e){return Math.abs(nn(n)-nn(e))},pn=function(n,e){return 0===ln(n,e)},gn=function(n,e){return 0===hn(n,e)},vn=function(n,e){return hn(n,e)===ln(n,e)},_n=function(n,e){return hn(n,e)===ln(n,e)&&Math.abs(J(n)-J(e))%7==0&&63!==J(n)&&63!==J(e)},dn=function(n,e){return 2===hn(n,e)&&1===ln(n,e)||1===hn(n,e)&&2===ln(n,e)},yn=function(n,e){return hn(n,e)<2&&ln(n,e)<2},kn=1,bn=8,wn=9,mn=7,Pn=function(n,e){var t;if(n===e)return[J(n)];if(gn(n,e))t=J(n)<J(e)?bn:-bn;else if(pn(n,e))t=J(n)<J(e)?kn:-kn;else if(_n(n,e))t=J(n)<J(e)?mn:-mn;else{if(!vn(n,e))return dn(n,e)?[J(n),J(e)]:[];t=J(n)<J(e)?wn:-wn}return m(J(n),J(e),t)},Rn=function(n){return n.slice(1,-1)},Sn=function(n,e,t){return on(n)?Z(e)>Z(t):Z(e)<Z(t)},qn=function(n){return"Array"===n.constructor.name?n:"String"!==n.constructor.name?[]:/\s+/.test(n)?D(n).fenArray:G(n)},Nn=function(n,e){return qn(n).findIndex(function(n){return n===(/[a-z]/.test(e)&&"w"!==e?"k":"K")})},An=function(n,e){if(e.length<3)return!0;var t=qn(n),r=Rn(e),i=!0,u=!1,o=void 0;try{for(var a,c=r[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){if("0"!==t[a.value])return!1}}catch(s){u=!0,o=s}finally{try{i||null==c.return||c.return()}finally{if(u)throw o}}return!0},Cn=function(n,e){return vn(n,e)&&n!==e},Kn=function(n,e){return(pn(n,e)||gn(n,e))&&n!==e},Bn=function(n,e){return(Cn(n,e)||Kn(n,e))&&n!==e},On=function(n,e){return ln(J(n),J(e))<2&&hn(J(n),J(e))<2&&n!==e},Qn=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";if(t=t.toLowerCase(),!/[wb]/.test(t))return!1;var r="w"===t?"P":"p";return n=J(n),e=J(e),Sn(r,n,e)?"P"===r?e===n+8?1:e===n+16&&1===Z(n)?2:0:e===n-8?1:e===n-16&&6===Z(n)?2:0:0},Mn=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),!!/[wb]/.test(t)&&(!!Sn("w"===t?"P":"p",n,e)&&(1===hn(n,e)&&1===ln(n,e)))},Fn=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),!!/[wb]/.test(t)&&(n=J(n),e=J(e),"w"===t?4===n&&(2===e||6===e):60===n&&(58===e||62===e))},Tn=function(n,e){var t=G(n),r=[],i=!0,u=!1,o=void 0;try{for(var a,c=P[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var s=a.value;t[s]===e&&(r=[].concat(h(r),[s]))}}catch(f){u=!0,o=f}finally{try{i||null==c.return||c.return()}finally{if(u)throw o}}return r},jn=function(n){return Tn(n,"p")},En=function(n){return Tn(n,"n")},In=function(n){return Tn(n,"b")},xn=function(n){return Tn(n,"b").filter(function(n){return fn(n)})},Ln=function(n){return Tn(n,"b").filter(function(n){return sn(n)})},Dn=function(n){return Tn(n,"r")},Un=function(n){return Tn(n,"q")},Wn=function(n){return Tn(n,"k")},$n=function(n){return Tn(n,"P")},Gn=function(n){return Tn(n,"N")},Vn=function(n){return Tn(n,"B")},zn=function(n){return Tn(n,"B").filter(function(n){return fn(n)})},Hn=function(n){return Tn(n,"B").filter(function(n){return sn(n)})},Xn=function(n){return Tn(n,"R")},Yn=function(n){return Tn(n,"Q")},Jn=function(n){return Tn(n,"K")},Zn=function(n){return[].concat(h($n(n)),h(Gn(n)),h(Vn(n)),h(Xn(n)),h(Yn(n)),h(Jn(n)))},ne=function(n){return[].concat(h(jn(n)),h(En(n)),h(In(n)),h(Dn(n)),h(Un(n)),h(Wn(n)))},ee=function(n){return[].concat(h(Gn(n)),h(Vn(n)),h(Xn(n)),h(Yn(n)))},te=function(n){return[].concat(h(En(n)),h(In(n)),h(Dn(n)),h(Un(n)))},re=function(n){return ee(n).map(function(e){return le(n,e)}).reduce(function(n,e){return n.concat(e)},[])},ie=function(n){return te(n).map(function(e){return le(n,e)}).reduce(function(n,e){return n.concat(e)},[])},ue=function(n){return $n(n).map(function(e){return P.filter(function(t){return ke(n,e,t)})}).reduce(function(n,e){return n.concat(e)})},oe=function(n){return jn(n).map(function(e){return P.filter(function(t){return ke(n,e,t)})}).reduce(function(n,e){return n.concat(e)})},ae=function(n,e){return on(n)&&on(e)||an(n)&&an(e)},ce=function(n,e){return on(n)&&an(e)||an(n)&&on(e)},se=function(n,e){return qn(n)[J(e)]},fe=function(n,e){return e.map(function(e){var t={};return t[e]=se(n,e),t}).reduce(function(n,e){return f({},n,{},e)},{})},le=function(n,e){var t=qn(n);e=J(e);var r,i=t[e];if(cn(i))return[];switch(i.toLowerCase()){case"n":r=dn;break;case"b":r=Cn;break;case"r":r=Kn;break;case"q":r=Bn;break;case"k":r=On;break;default:return"p"===i?0===nn(e)?[e-7]:7===nn(e)?[e-9]:[e-7,e-9]:"P"===i?0===nn(e)?[e+9]:7===nn(e)?[e+7]:[e+7,e+9]:[]}return P.filter(function(n){return r(e,n)}).filter(function(n){return An(t,Pn(e,n))})},he=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),/[wb]/.test(t)?(e=J(e),("w"===t?Zn(n):ne(n)).filter(function(t){return le(n,t).some(function(n){return n===e})})):null},pe=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w",t="w"===e.toLowerCase()?"b":"w";return he(n,Nn(n,e.toLowerCase()),t)},ge=function(n){return pe(n,D(n).turn).length>0},ve=function(n){return ge(n)&&0===we(n).length},_e=function(n){return!ge(n)&&0===we(n).length},de=function(n){if(!ge(n))return!1;var e=u("w"===D(n).turn?["w","b",Nn(n,"w")]:["b","w",Nn(n,"b")],3),t=e[0],r=(e[1],e[2]),i=be(n);if(i.find(function(n){return n[0]===r})[1].length>0)return!1;var o=pe(n,t);if(o.length>1)return!0;var a=i.filter(function(n){return n[0]!==r}),c=Pn(o[0],r).filter(function(n){return n!==r}),s=a.filter(function(n){return n[1].some(function(n){return c.find(function(e){return e===n})})});if(s.length>0){var f=!0,l=!1,h=void 0;try{for(var p,g=s[Symbol.iterator]();!(f=(p=g.next()).done);f=!0){var v=p.value,_=(v[0],v[1].filter(function(n){return c.find(function(e){return e===n})}),!0),d=!1,y=void 0;try{for(var k,b=v[1][Symbol.iterator]();!(_=(k=b.next()).done);_=!0){var w=k.value,m=Pe(n,v[0],w,"Q");if(m&&me(m).valid)return!1}}catch(P){d=!0,y=P}finally{try{_||null==b.return||b.return()}finally{if(d)throw y}}}}catch(P){l=!0,h=P}finally{try{f||null==g.return||g.return()}finally{if(l)throw h}}}return!0},ye=function(n,e,t,r){"k"===r||"b"===r?r="k":"K"!==r&&"w"!==r||(r="K"),e=J(e),t=J(t);var i=D(n),u=i.castling,o=(i.turn,i.fenArray),a="k"===r?"b":"w",c="k"===r?"w":"b";if(On(e,t))return 0===he(n,t,c).length;if(Fn(e,t,a)){if(!cn(o[t]))return!1;var s;switch(t){case 6:if(!/K/.test(u))return!1;s=Pn(4,6);break;case 2:if(!/Q/.test(u))return!1;s=Pn(4,2);break;case 62:if(!/k/.test(u))return!1;s=Pn(60,62);break;case 58:if(!/q/.test(u))return!1;s=Pn(60,58);break;default:return!1}return s.map(function(e){return he(n,e,c)}).some(function(n){return n.length>0}),!s.map(function(e){return he(n,e,c)}).some(function(n){return n.length>0})}return!1},ke=function(n,e,t){if(Pn(e,t).length<2)return!1;if(!An(n,Pn(e,t)))return!1;e=J(e),t=J(t);var r=X(t),i=D(n),u=i.fenArray,o=i.enPassant,a=u[e];if("0"===a)return!1;var c=u[t];if(ae(a,c))return!1;switch(a){case"p":if(Qn(e,t,"b")&&!cn(c))return!1;if(Mn(e,t,"b")&&!an(c)&&r!==o)return!1;if(!Qn(e,t,"b")&&!Mn(e,t,"b"))return!1;break;case"P":if(Qn(e,t,"w")&&!cn(c))return!1;if(Mn(e,t,"w")&&!on(c)&&r!==o)return!1;if(!Qn(e,t,"w")&&!Mn(e,t,"w"))return!1;break;case"K":case"k":return ye(n,e,t,a);case"q":case"Q":if(!Bn(e,t))return!1;break;case"r":case"R":if(!Kn(e,t))return!1;break;case"b":case"B":if(!Cn(e,t))return!1;break;case"n":case"N":if(!dn(e,t))return!1;break;default:return!1}return!0},be=function(n){var e=D(n),t=(e.fenArray,e.turn);e.castling,e.enPassant;return("w"===t?Zn(n):ne(n)).map(function(e){return[e,P.filter(function(t){return ke(n,e,t)})]})},we=function(n){var e=[],t=!0,r=!1,i=void 0;try{for(var u,o=be(n)[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var a=u.value,c=!0,s=!1,f=void 0;try{for(var l,p=a[1][Symbol.iterator]();!(c=(l=p.next()).done);c=!0){var g=l.value,v=Pe(n,a[0],g,"Q");v&&me(v).valid&&(e=[].concat(h(e),[{from:a[0],to:g}]))}}catch(_){s=!0,f=_}finally{try{c||null==p.return||p.return()}finally{if(s)throw f}}}}catch(_){r=!0,i=_}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}return e},me=function(n){var e=D(n),t=e.fenArray,r=e.turn;return 1!==t.filter(function(n){return"k"===n}).length?{valid:!1,code:2,message:"There must be one and only one black king"}:1!==t.filter(function(n){return"K"===n}).length?{valid:!1,code:3,message:"There must be one and only one white king"}:pe(n,"w"===r?"b":"w").length>0?{valid:!1,code:1,message:"The ".concat("b"===r?"white":"black"," side is in check, while it's not its turn to move")}:{valid:!0,code:0,message:"OK"}},Pe=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Q";if(!n||"String"!==n.constructor.name)return!1;if(!ke(n,e,t))return!1;var i=D(n),u=i.fenArray,o=i.turn,a=i.castling,c=i.enPassant,s=i.halfMoveClock,f=i.fullMoveNumber;e=J(e),t=J(t);var l=[u[e],u[t]],p=l[0],g=l[1],v=h(u);v[e]="0","P"===p&&7===Z(t)?v[t]=r?r.toUpperCase():"Q":"p"===p&&0===Z(t)?v[t]=r?r.toLowerCase():"q":v[t]=p,"P"===p&&X(t)===c?v[t-8]="0":"p"===p&&X(t)===c&&(v[t+8]="0"),"K"===p&&4===e&&6===t?(v[5]="R",v[7]="0"):"K"===p&&4===e&&2===t?(v[3]="R",v[0]="0"):"k"===p&&60===e&&62===t?(v[61]="r",v[63]="0"):"k"===p&&60===e&&58===t&&(v[59]="r",v[56]="0"),4===e&&(a=a.replace("K","").replace("Q","")),60===e&&(a=a.replace("k","").replace("q","")),7===e&&(a=a.replace("K","")),0===e&&(a=a.replace("Q","")),63===e&&(a=a.replace("k","")),56===e&&(a=a.replace("q","")),""===a&&(a="-"),o="w"===o?"b":"w",c="P"===p&&2===Qn(e,t,"w")?X(t-8):"p"===p&&2===Qn(e,t,"b")?X(t+8):"-",s="P"!==p&&"p"!==p&&"0"===g?parseInt(s)+1:"0",f="w"===o?parseInt(f)+1:f;var _=z(v);return"".concat(_," ").concat(o," ").concat(a," ").concat(c," ").concat(s," ").concat(f)},Re=function(n){return n.replace(/[+#=x]/g,"")},Se=function(n,e){var t,r,i,o,a=D(n);if("0-0"===(e=Re(e))||"O-O"===e)return"w"===a.turn?{sqFrom:4,sqTo:6,promotion:null}:{sqFrom:60,sqTo:62,promotion:null};if("0-0-0"===e||"O-O-O"===e)return"w"===a.turn?{sqFrom:4,sqTo:2,promotion:null}:{sqFrom:60,sqTo:58,promotion:null};if(/[a-h]/.test(e[0])){var c=tn(e[0]);return r=/[1-8]/.test(e[1])?J(e.slice(0,2)):J(e.slice(1,3)),void 0===(t=(o="w"===a.turn?$n(n):jn(n)).find(function(e){return nn(e)===c&&ke(n,e,r)}))&&(t=-1),i=/[QNRBqnrb]/.test(e[e.length-1])?e[e.length-1]:null,{sqFrom:t,sqTo:r,promotion:i}}if(an(e[0])&&"P"!==e[0]){switch(i=null,e[0]){case"N":o="w"===a.turn?Gn(n):En(n);break;case"B":o="w"===a.turn?Vn(n):In(n);break;case"R":o="w"===a.turn?Xn(n):Dn(n);break;case"Q":o="w"===a.turn?Yn(n):Un(n);break;case"K":o="w"===a.turn?Jn(n):Wn(n)}if(r=Y(e.slice(e.length-2,e.length)),5===e.length)t=Y(e.slice(1,3));else if(4===e.length){var s=e[1],f=u(/[1-8]/.test(s)?[Z,parseInt(s)-1]:[nn,tn(s)],2),l=f[0],h=f[1];void 0===(t=o.find(function(e){return l(e)===h&&ke(n,e,r)}))&&(t=-1)}else{var p=o.filter(function(e){return ke(n,e,r)});switch(p.length){case 0:t=-1;break;case 1:t=p[0];break;default:var g=p.filter(function(e){var t=Pe(n,e,r,null);return t&&me(t).valid});t=1===g.length?g[0]:-1}}return{sqFrom:t,sqTo:r,promotion:i}}return{sqFrom:-1,sqTo:-1,promotion:null}},qe=function(n,e,t,r){var i=D(n),u=i.fenArray,o=i.turn,a=i.enPassant;i.castling;e=J(e),t=J(t);var c,s,f,l,h,p,g=[u[e],u[t]],v=g[0],_=g[1];if(cn(v))return null;var d=Pe(n,e,t,r);if(!d||!me(d).valid)return null;if(p=ve(d)?"#":ge(d)?"+":"","K"===v&&4===e){if(6===t)return"O-O".concat(p);if(2===t)return"O-O-O".concat(p)}if("k"===v&&60===e){if(62===t)return"O-O".concat(p);if(58===t)return"O-O-O".concat(p)}if(f=cn(_)?/[Pp]/.test(v)&&J(a)===t?"x":"":"x",l=X(t),/[Pp]/.test(v))c=gn(e,t)?"":en(nn(e)),s="",h=7===Z(t)&&"P"===v||7===Z(t)&&"P"===v?"=".concat(r?r.toUpperCase():"Q"):"";else{c=v.toUpperCase(),h="";var y=he(n,t,o).filter(function(n){return u[n]===v&&n!==e});if(0===y.length)s="";else{var k=y.filter(function(e){var r=Pe(n,e,t,null);return r&&me(r).valid});s=k.length>1?X(e):1===k.length?gn(e,k[0])?(Z(e)+1).toString():en(nn(e)):""}}return"".concat(c).concat(s).concat(f).concat(l).concat(h).concat(p)},Ne=function(n){return n.split(/\s+/).slice(0,4).join(" ")},Ae=function(n){var e=D(n);return e.fenArray=m(0,63).fill("0"),e.fenString=z(e.fenArray),U(e)},Ce=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w";if(!/^[wb]$/i.test(e))return null;var t=u("w"===e.toLowerCase()?[$n(n),Gn(n),Hn(n),zn(n),Xn(n),Yn(n),jn(n),En(n),Ln(n),xn(n),Dn(n),Un(n)]:[jn(n),En(n),Ln(n),xn(n),Dn(n),Un(n),$n(n),Gn(n),Hn(n),zn(n),Xn(n),Yn(n)],12),r=t[0],i=t[1],o=t[2],a=t[3],c=t[4],s=t[5],f=t[6],l=t[7],h=t[8],p=t[9],g=t[10];t[11];if(r.length||c.length||s.length)return!1;if(o.length&&a.length)return!1;if((o.length||a.length)&&i.length)return!1;if(i.length>1)return!1;if(o.length){if(f.length||l.length||p.length)return!1}else if(a.length){if(f.length||l.length||h.length)return!1}else if(i.length&&(f.length||l.length||h.length||p.length||g.length))return!1;return!0},Ke=function(n){return"".concat(n.getFullYear(),".").concat(_(n.getMonth()+1),".").concat(_(n.getDate()))},Be=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return t(this,n),this.reset(e)}return i(n,[{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=me(e);if(!t.valid)throw new Error(t.message);return this.__fens__=[e],this.__sans__=[""],this.__headers__={Event:"Internet Game",Site:"The Cloud, INTERNET",Date:Ke(new Date),Round:"?",White:"White Player",Black:"Black Player",Result:n.getResultString(this)},e!==q&&this.headers("FEN",e,"SetUp","1"),this}},{key:"load",value:function(e){return me(e).valid?(this.__fens__=[e],this.__sans__=[""],this.headers("Result",n.getResultString(this),"FEN",e,"SetUp","1"),delete this.__headers__.PlyCount,this):null}},{key:"mini_ascii",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\n";return n=n||this.fens().length-1,k(D(this.fens()[n]).fenArray.map(function(n,t,r){return r[t^(e?7:56)]}).map(function(n){return"0"===n?".":n}),8).map(function(n){return n.join(" ")}).join(t)}},{key:"ascii",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\n",r="   +".concat("---+".repeat(8)).concat(t);n=n||this.fens().length-1;var i=D(this.fens()[n]).fenArray,u=(e?m(0,7):m(7,0,-1)).map(function(n){return(n+1).toString()}),o=(e?m(7,0,-1):m(0,7)).map(function(n){return String.fromCharCode(n+97)}).reduce(function(n,e){return n+"  "+e+" "},"   ")+" ".concat(t),a=i.map(function(n,t,r){return r[t^(e?7:56)]}).map(function(n){return"0"===n?" ":n}),c=k(a,8).map(function(n,e){return n.reduce(function(n,e){return n+"| "+e+" "},""+" ".concat(u[e]," "))+"|".concat(t)+""+r});return"".concat(r).concat(c.join("")).concat(o)}},{key:"console_view",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=n||this.fens().length-1,console.log(this.ascii(n,e))}},{key:"clear",value:function(){return this.__fens__=[].concat(h(this.__fens__.slice(0,-1)),[Ae(this.__fens__[this.__fens__.length-1])]),this}},{key:"san_with_number",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n<1||n>this.__sans__.length-1)return"";var t,r=D(this.fens()[n-1]),i=r.turn,u=r.fullMoveNumber;t="w"===i?"".concat(u,". "):e?"".concat(u,". ... "):"";var o=this.history()[n-1];return"".concat(t).concat(o)}},{key:"numbered_history",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.history().map(function(t,r){return n.san_with_number(r+1,e)})}},{key:"pgn_moves",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return k(this.numbered_history(),e).map(function(n){return n.join(" ")}).join(n)+" "+this.headers("Result")+n}},{key:"pgn_headers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n",r=n.sevenTags(),i=r.map(function(n){return"[".concat(n,' "').concat(e.headers(n),'"]')}),u=[],o=function(n){void 0===r.find(function(e){return e===n})&&(u=[].concat(h(u),[n]))};for(var a in this.headers())o(a);var c=u.map(function(n){return"[".concat(n,' "').concat(e.headers(n),'"]')}).sort();return i.join(t)+t+c.join(t)+t+t}},{key:"pgn",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(this.pgn_headers(n)).concat(this.pgn_moves(n,e))}},{key:"load_pgn",value:function(e){var t,r=function(n){return R.test(n)},i=function(e){return!!n.results().find(function(n){return n===e})},u=["SCANNING","LABEL","VALUE","TOKEN","COMMENT","VARIANT"],o="SCANNING",a=o,c="",s="",f="",l="",h=null,p=0;e=(t=e,t.replace(/\d+\.\s*(\.\.\.)?\s*/g,"")).replace(/\r/g,"\n");var g=new n;do{switch(l=e[p++],o){case u[0]:if("["===l)o="LABEL";else if("{"===l)prev_state=o,o="COMMENT";else if("("===l)a=o,o="VARIANT";else{if(l.match(/[\s\]]/))continue;a=o,o="TOKEN",f=l}continue;case u[1]:'"'===l?o="VALUE":c+=l;continue;case u[2]:if(/[\"\]]/.test(l)){if(g.headers(y(c.trim()),s),"fen"===c.toLowerCase()){if(!g.load(s))return!1;g.headers("SetUp","1")}"result"===c.toLowerCase()&&(h=s),c="",s="",o="SCANNING"}else s+=l;continue;case u[3]:if("{"===l)a=o,o="COMMENT";else if("("===l)a=o,o="VARIANT";else if(l.match(/[\s\[]/)){if(i(f)&&g.headers("Result",f),i(f)||"["===l)return i(f)?g.headers("Result",f):h&&g.headers("Result",h),this.__headers__=g.__headers__,this.__fens__=g.__fens__,this.__sans__=g.__sans__,!0;if(r(f)){if(!g.move(f))return console.log("".concat(f," move failed to load.")),!1;f="",a="TOKEN",o="SCANNING"}}else f+=l;continue;case u[4]:"}"===l&&(o=a);continue;case u[5]:")"===l&&(o=a);continue;default:continue}}while(p<e.length);return h&&g.headers("Result",h),this.__headers__=g.__headers__,this.__fens__=g.__fens__,this.__sans__=g.__sans__,!0}},{key:"move",value:function(){for(var e,t,r,i=D(this.fen),u=arguments.length,o=new Array(u),a=0;a<u;a++)o[a]=arguments[a];switch(o.length){case 0:return!1;case 1:if(R.test(o[0])){var c=Se(this.fen,o[0]);e=c.sqFrom,t=c.sqTo,r=c.promotion}else if(/[a-h][1-8]-?[a-h][1-8][QRNBqrnb]?/.test(o[0])){r=o[0][o[0].length-1].match(/QRNB/i)?o[0][o[0].length-1].toUpperCase():null;var s=o[0].replace(/-/g,"");e=J(s.slice(0,2)),t=J(s.slice(2,4))}break;default:e=J(o[0]),t=J(o[1]),r=o[2]}if(an(i.fenArray[e])&&"b"===i.turn||on(i.fenArray[e])&&"w"===i.turn)return!1;var l=Pe(this.fen,e,t,r);if(!l)return!1;if(!me(l).valid)return!1;var p=qe(this.fen,e,t,r),g=i.fenArray,v=i.turn,_=i.enPassant,d=[g[e],g[t]],y=d[0],k=d[1],b={san:p,piece:y,color:v,from:X(e),to:X(t)};cn(k)||(b=f({},b,{captured:k}));var w=/[Pp]/.test(y)&&t===Y(_),m=/[Pp]/.test(y)&&2===ln(e,t),P="p"===y&&0===Z(t)||"P"===y&&7===Z(t);P&&(b=f({},b,{promotion:r?r.toUpperCase():"Q"}));var S="";return"K"===y&&4===e&&6===t||"k"===y&&60===e&&62===t?S+="k":("K"===y&&4===e&&2===t||"k"===y&&60===e&&58===t)&&(S+="q"),P?S+="p":m&&(S+="b"),S+=w?"e":b.captured?"c":"n",this.__sans__=[].concat(h(this.__sans__),[f({},b,{flags:S})]),this.__fens__=[].concat(h(this.__fens__),[l]),this.headers("PlyCount",this.history().length.toString(),"Result",n.getResultString(this)),this}},{key:"history",value:function(n){return n&&n.verbose?this.__sans__.slice(1):this.__sans__.slice(1).map(function(n){return n.san})}},{key:"moves",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?we(this.fen).filter(function(n){return n.from===J(e)}).map(function(e){return qe(n.fen,e.from,e.to,"Q")}):we(this.fen).map(function(e){return qe(n.fen,e.from,e.to,"Q")})}},{key:"headers",value:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(!e.length)return this.__headers__;if(1===e.length)return this.__headers__[y(e[0])]||"Header not set";for(var r=e.length%2==0?e:e.slice(0,-1),i=0;i<r.length;i+=2)this.__headers__[y(r[i])]=r[i+1];return this.__headers__}},{key:"in_check",value:function(){return this.isCheck}},{key:"in_checkmate",value:function(){return this.isCheckMate}},{key:"in_stalemate",value:function(){return this.isStaleMate}},{key:"get",value:function(n){return D(this.fen).fenArray[J(n)]}},{key:"put",value:function(n,e){if(!/[0pnbrqkPNBRQK]/.test(e))return null;n=J(n);var t=D(this.fen);t.fenArray[n]=e,t.fenString=z(t.fenArray);var r=U(t);return this.__fens__=[].concat(h(this.__fens__.slice(0,-1)),[r]),this}},{key:"remove",value:function(n){var e=this.get(n);return this.put(n,"0"),e}},{key:"fens",value:function(){return this.__fens__}},{key:"undo",value:function(){return!(this.__fens__.length<2)&&(this.__fens__.splice(this.__fens__.length-1,this.__fens__.length),this.__sans__.splice(this.__sans__.length-1,this.__sans__.length),this.headers("PlyCount",this.history().length.toString(),"Result",n.getResultString(this)),this)}},{key:"toString",value:function(){return this.fen}},{key:"version",get:function(){if("undefined"!=typeof require){var n=require("../package.json").version;return n||"0.12.0"}return"0.12.0"}},{key:"turn",get:function(){return D(this.fen).turn}},{key:"in_fifty_moves_rule",get:function(){return parseInt(D(this.fen).halfMoveClock)>=100}},{key:"in_threefold_repetition",get:function(){var n=Ne(this.fen);return b(this.fens().map(Ne))[n]>=3}},{key:"insufficient_material",get:function(){return Ce(this.fen,"w")&&Ce(this.fen,"b")}},{key:"in_draw",get:function(){return this.in_fifty_moves_rule||this.in_threefold_repetition||this.insufficient_material||this.isStaleMate}},{key:"isCheck",get:function(){return ge(this.fen)}},{key:"isCheckMate",get:function(){return ve(this.fen)}},{key:"isStaleMate",get:function(){return _e(this.fen)}},{key:"fen",get:function(){return this.__fens__[this.__fens__.length-1]}},{key:"position",get:function(){return D(this.fen).fenArray}},{key:"game_over",get:function(){return this.in_draw||this.isCheckMate}}],[{key:"defaultFen",value:function(){return q}},{key:"sevenTags",value:function(){return["Event","Site","Date","Round","White","Black","Result"]}},{key:"results",value:function(){return["*","1-0","0-1","1/2-1/2"]}},{key:"result_names",value:function(){return["undefined","white","black","draw"]}},{key:"getUndefinedString",value:function(){return n.results()[n.result_names().findIndex(function(n){return"undefined"===n})]}},{key:"getWhiteWinString",value:function(){return n.results()[n.result_names().findIndex(function(n){return"white"===n})]}},{key:"getBlackWinString",value:function(){return n.results()[n.result_names().findIndex(function(n){return"black"===n})]}},{key:"getDrawString",value:function(){return n.results()[n.result_names().findIndex(function(n){return"draw"===n})]}},{key:"getResultString",value:function(e){return e.game_over?e.in_draw?n.getDrawString():e.isCheckMate?"w"===e.turn?n.getBlackWinString():n.getWhiteWinString():n.getUndefinedString():n.getUndefinedString()}},{key:"validate_fen",value:function(n){return me(n)}},{key:"square_color",value:function(n){return fn(J(n))?"light":"dark"}}]),n}(),Oe=(l(n={lpad:_,rpad:d,capitalize:y,groupArray:b,makeSet:w,range:m,sanRegExp:R,pgnTagLineRegExp:S,defaultFen:q,sicilianFen:N,scandinavianFen:A,oddFrenchFen:C,mateLocoFen:K,mateAyudadoFen:B,prePastorFen:O,pastorFen:Q,pgnDate:Ke,makeFenComparable:Ne,fen2obj:D,obj2fen:U,expandFen:W,compressFen:$,fen2array:G,defaultFenArray:V,array2fenString:z,computedFenString:H,row:Z,col:nn,sq2rowcol:rn,rowcol2sq:un,col2letter:en,letter2col:tn,sq2san:X,san2sq:Y,isBlackFigure:on,isWhiteFigure:an,isEmptyFigure:cn,isDarkSquare:sn,isLightSquare:fn,difRow:ln,difCol:hn,isSameRow:pn,isSameCol:gn,isDiagonal:vn,isAntiDiagonal:_n,isKingReach:yn,path:Pn,innerPath:Rn,isForward:Sn,kingSq:Nn,isClearPath:An,isPawnMove:Qn,isPawnAttack:Mn,isCastling:Fn,isKingMove:On,isBishopMove:Cn,isRookMove:Kn,isQueenMove:Bn,army:Tn,wBishops:Vn,wBishopsD:Hn},"wBishopsD",Hn),l(n,"wKings",Jn),l(n,"wKnights",Gn),l(n,"wPawns",$n),l(n,"wQueens",Yn),l(n,"wRooks",Xn),l(n,"bBishops",In),l(n,"bBishopsD",Ln),l(n,"bBishopsL",xn),l(n,"bKings",Wn),l(n,"bKnights",En),l(n,"bPawns",jn),l(n,"bQueens",Un),l(n,"bRooks",Dn),l(n,"wArmy",Zn),l(n,"bArmy",ne),l(n,"wAttackers",ee),l(n,"bAttackers",te),l(n,"wAttacks",re),l(n,"bAttacks",ie),l(n,"wPMoves",ue),l(n,"bPMoves",oe),l(n,"isFriend",ae),l(n,"isFoe",ce),l(n,"getFigure",se),l(n,"getFigures",fe),l(n,"attacksFromSq",le),l(n,"attacksOnSq",he),l(n,"checksTo",pe),l(n,"isCheck",ge),l(n,"isCheckMate",ve),l(n,"isStaleMate",_e),l(n,"canKingMove",ye),l(n,"canMove",ke),l(n,"candidateMoves",be),l(n,"availableMoves",we),l(n,"validateFen",me),l(n,"tryMove",Pe),l(n,"stripSan",Re),l(n,"args2san",qe),l(n,"san2args",Se),l(n,"clear",Ae),l(n,"insuficientMaterial",Ce),l(n,"Chess",Be),n),Qe=Oe;"undefined"!=typeof window&&(window.Chess=Be),void 0!==e&&(e.Chess=Be);try{if("undefined"!=typeof module)module.exports=Be;else var Me=Be}catch(Fe){console.log("EXPORT (2) ERROR: ".concat(Fe.message))}
},{"../package.json":"EHrm"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map