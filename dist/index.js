parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var global = arguments[3];
var n=arguments[3];function r(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function t(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function i(n,r){return a(n)||o(n,r)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(n,r){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],e=!0,i=!1,u=void 0;try{for(var o,a=n[Symbol.iterator]();!(e=(o=a.next()).done)&&(t.push(o.value),!r||t.length!==r);e=!0);}catch(c){i=!0,u=c}finally{try{e||null==a.return||a.return()}finally{if(i)throw u}}return t}}function a(n){if(Array.isArray(n))return n}function c(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,e)}return t}function f(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(t,!0).forEach(function(r){s(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(t).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function s(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function l(n){return v(n)||h(n)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function v(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}var g=function(n,r){return n.reduce(function(n,t){return n[n.length-1].length<r?[].concat(l(n.slice(0,-1)),[[].concat(l(n[n.length-1]),[t])]):[].concat(l(n),[[t]])},[[]])},b=function(n){return n.reduce(function(n,r){return r in n?n[r]+=1:n[r]=1,n},{})},P=function(n){return n.reduce(function(n,r){return n.find(function(n){return n===r})?n:[].concat(l(n),[r])},[])},d=function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return r===t?[r]:(e||(e=r<t?1:-1),r>t&&e>0?[]:r<t&&e<0?[]:[r].concat(l(n(r+e,t,e))))},w=d(0,63),k=/(?:(^0-0-0|^O-O-O)|(^0-0|^O-O)|(?:^([a-h])(?:([1-8])|(?:x([a-h][1-8])))(?:=?([NBRQ]))?)|(?:^([NBRQK])([a-h])?([1-8])?(x)?([a-h][1-8])))(?:(\+)|(#)|(\+\+))?$/,y=/^\s*\[\s*(.+?)\s+"(.+?)"\s*\]\s*$/,m="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",_="rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 1",q="rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",K="rnbqkbnr/ppp2ppp/4p3/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 3",R="rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3",O="r1bqnNnr/pppkpp1p/7R/3p4/8/8/PPPPPPP1/RNBQKBN1 b Q - 0 6",Q="r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",S="r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4",C="rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",A="rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",B="7k/7P/7K/8/8/8/8/8 w - - 0 1",F="R6k/6pp/8/8/3n4/8/8/7K b - - 0 1",N="R6k/6pp/8/8/3r4/8/8/7K b - - 0 1",M="R6k/6qp/5B2/8/8/8/8/7K b - - 0 1",j="8/6B1/6p1/R6k/7p/8/8/K5R1 b KQkq - 0 1",T="8/5BB1/6p1/R6k/7p/8/8/K5R1 b KQkq - 0 1",x=function(n){var r=n.split(/\s+/);return{fenString:r[0],turn:r[1],castling:r[2],enPassant:r[3],halfMoveClock:r[4],fullMoveNumber:r[5],fenArray:D(r[0])}},L=function(n){return delete n.fenArray,values(n).join(" ")},E=function(n){return n.replace(/\//g,"").replace(/[1-8]/g,function(n){return"0".repeat(parseInt(n))})},I=function(n){return n.replace(/(.{8})(?!$)/g,"$1/").replace(/0+/g,function(n){return n.length.toString()})},D=function(n){if(/^(.+\/){7}.+$/.test(n))n=E(n);else if(64!==n.length)return[];return n.split("").map(function(n,r,t){return t[56^r]})},$=D(x(m).fenString),U=function(n){return I(n.map(function(r,t){return n[56^t]}).join(""))},z=U($),W=function(n){return n>=0&&n<64?"".concat(String.fromCharCode(97+J(n))).concat(String.fromCharCode(49+H(n))):"-"},X=function(n){return/[a-h][1-8]/.test(n)?nn(n.charCodeAt(1)-49,n.charCodeAt(0)-97):-1},G=function(n){return isNaN(n)?X(n):parseInt(n)},H=function(n){return Math.floor(G(n)/8)},J=function(n){return G(n)%8},V=function(n){return String.fromCharCode(97+n)},Y=function(n){return n.charCodeAt(0)-97},Z=function(n){return{row:H(n),col:J(n)}},nn=function(n,r){return 8*n+r},rn=function(n){return/[pnbrqk]/.test(n)},tn=function(n){return/[PNBRQK]/.test(n)},en=function(n){return"0"===n},un=function(n){return"String"===n.constructor.name&&(n=X(n)),H(n)%2==0&&J(n)%2==0||H(n)%2!=0&&J(n)%2!=0},on=function(n){return!un(n)},an=function(n,r){return Math.abs(H(n)-H(r))},cn=function(n,r){return Math.abs(J(n)-J(r))},fn=function(n,r){return 0===an(n,r)},sn=function(n,r){return 0===cn(n,r)},ln=function(n,r){return cn(n,r)===an(n,r)},pn=function(n,r){return cn(n,r)===an(n,r)&&Math.abs(G(n)-G(r))%7==0&&63!==G(n)&&63!==G(r)},hn=function(n,r){return 2===cn(n,r)&&1===an(n,r)||1===cn(n,r)&&2===an(n,r)},vn=function(n,r){return cn(n,r)<2&&an(n,r)<2},gn=1,bn=8,Pn=9,dn=7,wn=function(n,r){var t;if(n===r)return[G(n)];if(sn(n,r))t=G(n)<G(r)?bn:-bn;else if(fn(n,r))t=G(n)<G(r)?gn:-gn;else if(pn(n,r))t=G(n)<G(r)?dn:-dn;else{if(!ln(n,r))return hn(n,r)?[G(n),G(r)]:[];t=G(n)<G(r)?Pn:-Pn}return d(G(n),G(r),t)},kn=function(n){return n.slice(1,-1)},yn=function(n,r,t){return rn(n)?H(r)>H(t):H(r)<H(t)},mn=function(n){return"Array"===n.constructor.name?n:"String"!==n.constructor.name?[]:/\s+/.test(n)?x(n).fenArray:D(n)},_n=function(n,r){return mn(n).findIndex(function(n){return n===(/[a-z]/.test(r)&&"w"!==r?"k":"K")})},qn=function(n,r){if(r.length<3)return!0;var t=mn(n),e=kn(r),i=!0,u=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){if("0"!==t[a.value])return!1}}catch(f){u=!0,o=f}finally{try{i||null==c.return||c.return()}finally{if(u)throw o}}return!0},Kn=function(n,r){return ln(n,r)&&n!==r},Rn=function(n,r){return(fn(n,r)||sn(n,r))&&n!==r},On=function(n,r){return(Kn(n,r)||Rn(n,r))&&n!==r},Qn=function(n,r){return an(G(n),G(r))<2&&cn(G(n),G(r))<2&&n!==r},Sn=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";if(t=t.toLowerCase(),!/[wb]/.test(t))return!1;var e="w"===t?"P":"p";return n=G(n),r=G(r),yn(e,n,r)?"P"===e?r===n+8?1:r===n+16&&1===H(n)?2:0:r===n-8?1:r===n-16&&6===H(n)?2:0:0},Cn=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),!!/[wb]/.test(t)&&(!!yn("w"===t?"P":"p",n,r)&&(1===cn(n,r)&&1===an(n,r)))},An=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),!!/[wb]/.test(t)&&(n=G(n),r=G(r),"w"===t?4===n&&(2===r||6===r):60===n&&(58===r||62===r))},Bn=function(n,r){var t=D(n),e=[],i=!0,u=!1,o=void 0;try{for(var a,c=w[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var f=a.value;t[f]===r&&(e=[].concat(l(e),[f]))}}catch(s){u=!0,o=s}finally{try{i||null==c.return||c.return()}finally{if(u)throw o}}return e},Fn=function(n){return Bn(n,"p")},Nn=function(n){return Bn(n,"n")},Mn=function(n){return Bn(n,"b")},jn=function(n){return Bn(n,"r")},Tn=function(n){return Bn(n,"q")},xn=function(n){return Bn(n,"k")},Ln=function(n){return Bn(n,"P")},En=function(n){return Bn(n,"N")},In=function(n){return Bn(n,"B")},Dn=function(n){return Bn(n,"R")},$n=function(n){return Bn(n,"Q")},Un=function(n){return Bn(n,"K")},zn=function(n){return[].concat(l(Ln(n)),l(En(n)),l(In(n)),l(Dn(n)),l($n(n)),l(Un(n)))},Wn=function(n){return[].concat(l(Fn(n)),l(Nn(n)),l(Mn(n)),l(jn(n)),l(Tn(n)),l(xn(n)))},Xn=function(n){return[].concat(l(En(n)),l(In(n)),l(Dn(n)),l($n(n)))},Gn=function(n){return[].concat(l(Nn(n)),l(Mn(n)),l(jn(n)),l(Tn(n)))},Hn=function(n){return Xn(n).map(function(r){return er(n,r)}).reduce(function(n,r){return n.concat(r)},[])},Jn=function(n){return Gn(n).map(function(r){return er(n,r)}).reduce(function(n,r){return n.concat(r)},[])},Vn=function(n){return Ln(n).map(function(r){return w.filter(function(t){return lr(n,r,t)})}).reduce(function(n,r){return n.concat(r)})},Yn=function(n){return Fn(n).map(function(r){return w.filter(function(t){return lr(n,r,t)})}).reduce(function(n,r){return n.concat(r)})},Zn=function(n,r){return rn(n)&&rn(r)||tn(n)&&tn(r)},nr=function(n,r){return rn(n)&&tn(r)||tn(n)&&rn(r)},rr=function(n,r){return mn(n)[G(r)]},tr=function(n,r){return r.map(function(r){var t={};return t[r]=rr(n,r),t}).reduce(function(n,r){return f({},n,{},r)},{})},er=function(n,r){var t=mn(n);r=G(r);var e,i=t[r];if(en(i))return[];switch(i.toLowerCase()){case"n":e=hn;break;case"b":e=Kn;break;case"r":e=Rn;break;case"q":e=On;break;case"k":e=Qn;break;default:return"p"===i?[r-7,r-9]:[r+7,r+9]}return w.filter(function(n){return e(r,n)}).filter(function(n){return qn(t,wn(r,n))})},ir=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w";return t=t.toLowerCase(),/[wb]/.test(t)?(r=G(r),("w"===t?zn(n):Wn(n)).filter(function(t){return er(n,t).some(function(n){return n===r})})):null},ur=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w",t="w"===r.toLowerCase()?"b":"w";return ir(n,_n(n,r.toLowerCase()),t)},or=function(n){return ur(n,x(n).turn).length>0},ar=function(n){return or(n)&&0===hr(n).length},cr=function(n){return!or(n)&&0===hr(n).length},fr=function(n){if(!or(n))return!1;var r=i("w"===x(n).turn?["w","b",_n(n,"w")]:["b","w",_n(n,"b")],3),t=r[0],e=(r[1],r[2]),u=pr(n);if(u.find(function(n){return n[0]===e})[1].length>0)return!1;var o=ur(n,t);if(o.length>1)return!0;var a=u.filter(function(n){return n[0]!==e}),c=wn(o[0],e).filter(function(n){return n!==e}),f=a.filter(function(n){return n[1].some(function(n){return c.find(function(r){return r===n})})});if(f.length>0){var s=!0,l=!1,p=void 0;try{for(var h,v=f[Symbol.iterator]();!(s=(h=v.next()).done);s=!0){var g=h.value,b=(g[0],g[1].filter(function(n){return c.find(function(r){return r===n})}),!0),P=!1,d=void 0;try{for(var w,k=g[1][Symbol.iterator]();!(b=(w=k.next()).done);b=!0){var y=w.value,m=gr(n,g[0],y,"Q");if(m&&vr(m).valid)return!1}}catch(_){P=!0,d=_}finally{try{b||null==k.return||k.return()}finally{if(P)throw d}}}}catch(_){l=!0,p=_}finally{try{s||null==v.return||v.return()}finally{if(l)throw p}}}return!0},sr=function(n,r,t,e){var i=x(n),u=i.castling,o=(i.turn,i.fenArray),a="k"===e?"b":"w",c="k"===e?"w":"b";if(Qn(r,t))return 0===ir(n,t,c).length;if(An(r,t,a)){if(!en(o[t]))return!1;var f;switch(t){case 6:if(!/K/.test(u))return!1;f=wn(4,6);break;case 2:if(!/Q/.test(u))return!1;f=wn(4,2);break;case 62:if(!/k/.test(u))return!1;f=wn(60,62);break;case 58:if(!/q/.test(u))return!1;f=wn(60,58);break;default:return!1}return f.map(function(r){return ir(n,r,c)}).some(function(n){return n.length>0}),!f.map(function(r){return ir(n,r,c)}).some(function(n){return n.length>0})}return!1},lr=function(n,r,t){if(wn(r,t).length<2)return!1;if(!qn(n,wn(r,t)))return!1;r=G(r),t=G(t);var e=W(t),i=x(n),u=i.fenArray,o=i.enPassant,a=u[r];if("0"===a)return!1;var c=u[t];if(Zn(a,c))return!1;switch(a){case"p":if(Sn(r,t,"b")&&!en(c))return!1;if(Cn(r,t,"b")&&!tn(c)&&e!==o)return!1;if(!Sn(r,t,"b")&&!Cn(r,t,"b"))return!1;break;case"P":if(Sn(r,t,"w")&&!en(c))return!1;if(Cn(r,t,"w")&&!rn(c)&&e!==o)return!1;if(!Sn(r,t,"w")&&!Cn(r,t,"w"))return!1;break;case"K":case"k":return sr(n,r,t,a);case"q":case"Q":if(!On(r,t))return!1;break;case"r":case"R":if(!Rn(r,t))return!1;break;case"b":case"B":if(!Kn(r,t))return!1;break;case"n":case"N":if(!hn(r,t))return!1;break;default:return!1}return!0},pr=function(n){var r=x(n),t=(r.fenArray,r.turn);r.castling,r.enPassant;return("w"===t?zn(n):Wn(n)).map(function(r){return[r,w.filter(function(t){return lr(n,r,t)})]})},hr=function(n){var r=[],t=!0,e=!1,i=void 0;try{for(var u,o=pr(n)[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var a=u.value,c=!0,f=!1,s=void 0;try{for(var p,h=a[1][Symbol.iterator]();!(c=(p=h.next()).done);c=!0){var v=p.value,g=gr(n,a[0],v,"Q");g&&vr(g).valid&&(r=[].concat(l(r),[{from:a[0],to:v}]))}}catch(b){f=!0,s=b}finally{try{c||null==h.return||h.return()}finally{if(f)throw s}}}}catch(b){e=!0,i=b}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}return r},vr=function(n){var r=x(n),t=r.fenArray,e=r.turn;return 1!==t.filter(function(n){return"k"===n}).length?{valid:!1,code:2,message:"There must be one and only one black king"}:1!==t.filter(function(n){return"K"===n}).length?{valid:!1,code:3,message:"There must be one and only one white king"}:ur(n,"w"===e?"b":"w").length>0?{valid:!1,code:1,message:"The ".concat("b"===e?"white":"black"," side is in check, while it's not its turn to move")}:{valid:!0,code:0,message:"OK"}},gr=function(n,r,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Q";if(!n||"String"!==n.constructor.name)return!1;if(!lr(n,r,t))return!1;var i=x(n),u=i.fenArray,o=i.turn,a=i.castling,c=i.enPassant,f=i.halfMoveClock,s=i.fullMoveNumber;r=G(r),t=G(t);var p=[u[r],u[t]],h=p[0],v=p[1],g=l(u);g[r]="0","P"===h&&7===H(t)?g[t]=e?e.toUpperCase():"Q":"p"===h&&0===H(t)?g[t]=e?e.toLowerCase():"q":g[t]=h,"P"===h&&W(t)===c?g[t-8]="0":"p"===h&&W(t)===c&&(g[t+8]="0"),"K"===h&&4===r&&6===t?(g[5]="R",g[7]="0"):"K"===h&&4===r&&2===t?(g[3]="R",g[0]="0"):"k"===h&&60===r&&62===t?(g[61]="r",g[63]="0"):"k"===h&&60===r&&58===t&&(g[59]="r",g[56]="0"),4===r&&(a=a.replace("K","").replace("Q","")),60===r&&(a=a.replace("k","").replace("q","")),7===r&&(a=a.replace("K","")),0===r&&(a=a.replace("Q","")),63===r&&(a=a.replace("k","")),56===r&&(a=a.replace("q","")),""===a&&(a="-"),o="w"===o?"b":"w",c="P"===h&&2===Sn(r,t,"w")?W(t-8):"p"===h&&2===Sn(r,t,"b")?W(t+8):"-",f="P"!==h&&"p"!==h&&"0"===v?parseInt(f)+1:"0",s="w"===o?parseInt(s)+1:s;var b=U(g);return"".concat(b," ").concat(o," ").concat(a," ").concat(c," ").concat(f," ").concat(s)},br=function(n){return n.replace(/[+#=x]/g,"")},Pr=function(n,r){var t,e,u,o,a=x(n);if("0-0"===(r=br(r))||"O-O"===r)return"w"===a.turn?{sqFrom:4,sqTo:6,promotion:null}:{sqFrom:60,sqTo:62,promotion:null};if("0-0-0"===r||"O-O-O"===r)return"w"===a.turn?{sqFrom:4,sqTo:2,promotion:null}:{sqFrom:60,sqTo:58,promotion:null};if(/[a-h]/.test(r[0])){var c=Y(r[0]);return e=/[1-8]/.test(r[1])?G(r.slice(0,2)):G(r.slice(1,3)),t=(o="w"===a.turn?Ln(n):Fn(n)).find(function(r){return J(r)===c&&lr(n,r,e)})||-1,u=/[QNRBqnrb]/.test(r[r.length-1])?r[r.length-1]:null,{sqFrom:t,sqTo:e,promotion:u}}if(tn(r[0])&&"P"!==r[0]){switch(u=null,r[0]){case"N":o="w"===a.turn?En(n):Nn(n);break;case"B":o="w"===a.turn?In(n):Mn(n);break;case"R":o="w"===a.turn?Dn(n):jn(n);break;case"Q":o="w"===a.turn?$n(n):Tn(n);break;case"K":o="w"===a.turn?Un(n):xn(n)}if(e=X(r.slice(r.length-2,r.length)),5===r.length)t=X(r.slice(1,3));else if(4===r.length){var f=r[1],s=i(/[1-8]/.test(f)?[H,parseInt(f)-1]:[J,Y(f)],2),l=s[0],p=s[1];t=o.find(function(r){return l(r)===p&&lr(n,r,e)})||-1}else{var h=o.filter(function(r){return lr(n,r,e)});switch(h.length){case 0:t=-1;break;case 1:t=h[0];break;default:var v=h.filter(function(r){var t=gr(n,r,e,null);return t&&vr(t).valid});t=1===v.length?v[0]:-1}}return{sqFrom:t,sqTo:e,promotion:u}}return{sqFrom:-1,sqTo:-1,promotion:null}},dr=function(n,r,t,e){var i=x(n),u=i.fenArray,o=i.turn,a=i.enPassant;i.castling;r=G(r),t=G(t);var c,f,s,l,p,h,v=[u[r],u[t]],g=v[0],b=v[1];if(en(g))return null;var P=gr(n,r,t,e);if(!P||!vr(P).valid)return null;if(h=ar(P)?"#":or(P)?"+":"","K"===g&&4===r){if(6===t)return"O-O".concat(h);if(2===t)return"O-O-O".concat(h)}if("k"===g&&60===r){if(62===t)return"O-O".concat(h);if(58===t)return"O-O-O".concat(h)}if(s=en(b)?/[Pp]/.test(g)&&G(a)===t?"x":"":"x",l=W(t),/[Pp]/.test(g))c=sn(r,t)?"":V(J(r)),f="",p=7===H(t)&&"P"===g||7===H(t)&&"P"===g?"=".concat(e?e.toUpperCase():"Q"):"";else{c=g.toUpperCase(),p="";var d=ir(n,t,o).filter(function(n){return u[n]===g&&n!==r});if(0===d.length)f="";else{var w=d.filter(function(r){var e=gr(n,r,t,null);return e&&vr(e).valid});f=w.length>1?W(r):1===w.length?sn(r,w[0])?(H(r)+1).toString():V(J(r)):""}}return"".concat(c).concat(f).concat(s).concat(l).concat(p).concat(h)},wr=function(n){return n.split(/\s+/).slice(0,4).join(" ")},kr=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;r(this,n),this.reset(t)}return e(n,[{key:"reset",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;this.__fens__=[n],this.__sans__=[""]}},{key:"ascii",value:function(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="   +".concat("---+".repeat(8),"\n");n=n||this.fens().length-1;var e=x(this.fens()[n]).fenArray,i=(r?d(0,7):d(7,0,-1)).map(function(n){return(n+1).toString()}),u=(r?d(7,0,-1):d(0,7)).map(function(n){return String.fromCharCode(n+97)}).reduce(function(n,r){return n+"  "+r+" "},"   ")+" \n",o=e.map(function(n,t,e){return e[t^(r?7:56)]}).map(function(n){return"0"===n?" ":n}),a=g(o,8).map(function(n,r){return n.reduce(function(n,r){return n+"| "+r+" "},""+" ".concat(i[r]," "))+"|\n"+t});return"".concat(t).concat(a.join("")).concat(u)}},{key:"move",value:function(){var n,r,t,e=x(this.fen);switch(arguments.length){case 0:return!1;case 1:var i=Pr(this.fen,arguments.length<=0?void 0:arguments[0]);n=i.sqFrom,r=i.sqTo,t=i.promotion;break;default:n=G(arguments.length<=0?void 0:arguments[0]),r=G(arguments.length<=1?void 0:arguments[1]),t=arguments.length<=2?void 0:arguments[2]}if(tn(e.fenArray[n])&&"b"===e.turn||rn(e.fenArray[n])&&"w"===e.turn)return!1;var u=gr(this.fen,n,r,t);if(!u)return!1;if(!vr(u).valid)return!1;var o=dr(this.fen,n,r,t),a=e.fenArray,c=e.turn,s=e.enPassant,p=[a[n],a[r]],h=p[0],v=p[1],g={san:o,piece:h,color:c,from:W(n),to:W(r)};en(v)||(g=f({},g,{captured:v}));var b=/[Pp]/.test(h)&&r===X(s),P=/[Pp]/.test(h)&&2===an(n,r),d="p"===h&&0===H(r)||"P"===h&&7===H(r);d&&(g=f({},g,{promotion:t?t.toUpperCase():"Q"}));var w="";return"K"===h&&4===n&&6===r||"k"===h&&60===n&&62===r?w+="k":("K"===h&&4===n&&2===r||"k"===h&&60===n&&58===r)&&(w+="q"),d?w+="p":P&&(w+="b"),w+=b?"e":g.captured?"c":"n",this.__sans__=[].concat(l(this.__sans__),[f({},g,{flags:w})]),this.__fens__=[].concat(l(this.__fens__),[u]),setTimeout(function(){},0),this}},{key:"history",value:function(n){return n&&n.verbose?this.__sans__.slice(1):this.__sans__.slice(1).map(function(n){return n.san})}},{key:"moves",value:function(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r?hr(this.fen).filter(function(n){return n.from===G(r)}).map(function(r){return dr(n.fen,r.from,r.to,"Q")}):hr(this.fen).map(function(r){return dr(n.fen,r.from,r.to,"Q")})}},{key:"in_threefold_repetition",value:function(){var n=wr(this.fen);return b(this.fens().map(wr))[n]>=3}},{key:"get",value:function(n){return x(this.fen).fenArray[G(n)]}},{key:"fens",value:function(){return this.__fens__}},{key:"undo",value:function(){return!(this.__fens__.length<2)&&(this.__fens__.splice(this.__fens__.length-1,this.__fens__.length),this.__sans__.splice(this.__sans__.length-1,this.__sans__.length),this)}},{key:"toString",value:function(){return this.fen}},{key:"isCheck",get:function(){return or(this.fen)}},{key:"isCheckMate",get:function(){return ar(this.fen)}},{key:"isStaleMate",get:function(){return cr(this.fen)}},{key:"fen",get:function(){return this.__fens__[this.__fens__.length-1]}}]),n}(),yr={groupArray:b,makeSet:P,range:d,sanRegExp:k,pgnTagLineRegExp:y,defaultFen:m,sicilianFen:_,scandinavianFen:q,oddFrenchFen:K,mateLocoFen:R,mateAyudadoFen:O,prePastorFen:Q,pastorFen:S,makeFenComparable:wr,fen2obj:x,obj2fen:L,expandFen:E,compressFen:I,fen2array:D,defaultFenArray:$,array2fenString:U,computedFenString:z,row:H,col:J,sq2rowcol:Z,rowcol2sq:nn,col2letter:V,letter2col:Y,sq2san:W,san2sq:X,isBlackFigure:rn,isWhiteFigure:tn,isEmptyFigure:en,isDarkSquare:un,isLightSquare:on,difRow:an,difCol:cn,isSameRow:fn,isSameCol:sn,isDiagonal:ln,isAntiDiagonal:pn,isKingReach:vn,path:wn,innerPath:kn,isForward:yn,kingSq:_n,isClearPath:qn,isPawnMove:Sn,isPawnAttack:Cn,isCastling:An,isKingMove:Qn,isBishopMove:Kn,isRookMove:Rn,isQueenMove:On,army:Bn,wBishops:In,wKings:Un,wKnights:En,wPawns:Ln,wQueens:$n,wRooks:Dn,bBishops:Mn,bKings:xn,bKnights:Nn,bPawns:Fn,bQueens:Tn,bRooks:jn,wArmy:zn,bArmy:Wn,wAttackers:Xn,bAttackers:Gn,wAttacks:Hn,bAttacks:Jn,wPMoves:Vn,bPMoves:Yn,isFriend:Zn,isFoe:nr,getFigure:rr,getFigures:tr,attacksFromSq:er,attacksOnSq:ir,checksTo:ur,isCheck:or,isCheckMate:ar,isStaleMate:cr,canKingMove:sr,canMove:lr,candidateMoves:pr,availableMoves:hr,validateFen:vr,tryMove:gr,stripSan:br,args2san:dr,san2args:Pr,Chess:kr},mr=yr;"undefined"!=typeof window&&(window.Chess=kr),void 0!==n&&(n.Chess=kr);try{if("undefined"!=typeof module)module.exports=kr;else var _r=kr}catch(qr){console.log("EXPORT (2) ERROR: ".concat(qr.message))}
},{}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map