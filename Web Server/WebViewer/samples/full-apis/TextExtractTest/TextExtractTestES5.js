function _asyncToGenerator(e){return function(){var c=e.apply(this,arguments);return new Promise(function(a,s){return function t(e,n){try{var r=c[e](n),o=r.value}catch(e){return void s(e)}if(!r.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}!function(e){"use strict";var f,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.toStringTag||"@@toStringTag",r="object"==typeof module,a=e.regeneratorRuntime;if(a)r&&(module.exports=a);else{(a=e.regeneratorRuntime=r?module.exports:{}).wrap=c;var x="suspendedStart",g="suspendedYield",p="executing",h="completed",y={},s=l.prototype=v.prototype;u.prototype=s.constructor=l,l.constructor=u,l[n]=u.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,n in e||(e[n]="GeneratorFunction")),e.prototype=Object.create(s),e},a.awrap=function(e){return new b(e)},m(w.prototype),a.async=function(e,t,n,r){var o=new w(c(e,t,n,r));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},m(s),s[o]=function(){return this},s[n]="Generator",s.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=f)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?this.next=o.finallyLoc:this.complete(a),y},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},y}}}function c(e,t,n,r){var s,c,i,u,o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),l=new P(r||[]);return a._invoke=(s=e,c=n,i=l,u=x,function(e,t){if(u===p)throw new Error("Generator is already running");if(u===h){if("throw"===e)throw t;return L()}for(;;){var n=i.delegate;if(n){if("return"===e||"throw"===e&&n.iterator[e]===f){i.delegate=null;var r=n.iterator.return;if(r){var o=d(r,n.iterator,t);if("throw"===o.type){e="throw",t=o.arg;continue}}if("return"===e)continue}var o=d(n.iterator[e],n.iterator,t);if("throw"===o.type){i.delegate=null,e="throw",t=o.arg;continue}e="next",t=f;var a=o.arg;if(!a.done)return u=g,a;i[n.resultName]=a.value,i.next=n.nextLoc,i.delegate=null}if("next"===e)i.sent=i._sent=t;else if("throw"===e){if(u===x)throw u=h,t;i.dispatchException(t)&&(e="next",t=f)}else"return"===e&&i.abrupt("return",t);u=p;var o=d(s,c,i);if("normal"===o.type){u=i.done?h:g;var a={value:o.arg,done:i.done};if(o.arg!==y)return a;i.delegate&&"next"===e&&(t=f)}else"throw"===o.type&&(u=h,e="throw",t=o.arg)}}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function v(){}function u(){}function l(){}function m(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function b(e){this.arg=e}function w(c){function i(e,t,n,r){var o=d(c[e],c,t);if("throw"!==o.type){var a=o.arg,s=a.value;return s instanceof b?Promise.resolve(s.arg).then(function(e){i("next",e,n,r)},function(e){i("throw",e,n,r)}):Promise.resolve(s).then(function(e){a.value=e,n(a)},r)}r(o.arg)}var t;"object"==typeof process&&process.domain&&(i=process.domain.bind(i)),this._invoke=function(n,r){function e(){return new Promise(function(e,t){i(n,r,e,t)})}return t=t?t.then(e,e):e()}}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=f,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(e){"use strict";window.runTextExtractTest=_asyncToGenerator(regeneratorRuntime.mark(function e(){var S,c,R,B,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:S=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=r=n=void 0;case 1:return e.next=3,t.next();case 3:if(e.t0=n=e.sent,null!==e.t0)return e.next=7,n.getType();e.next=31;break;case 7:e.t1=e.sent,e.next=e.t1===PDFNet.Element.Type.e_text_begin?10:e.t1===PDFNet.Element.Type.e_text_end?12:e.t1===PDFNet.Element.Type.e_text?14:e.t1===PDFNet.Element.Type.e_text_new_line?23:e.t1===PDFNet.Element.Type.e_form?24:29;break;case 10:return console.log("--\x3e Text Block Begin"),e.abrupt("break",29);case 12:return console.log("--\x3e Text Block End"),e.abrupt("break",29);case 14:return e.next=16,n.getBBox();case 16:return r=e.sent,console.log("--\x3e BBox: "+r.x1+", "+r.y1+", "+r.x2+", "+r.y2+"\n"),e.next=20,n.getTextString();case 20:return o=e.sent,console.log(o),e.abrupt("break",29);case 23:return e.abrupt("break",29);case 24:return t.formBegin(),e.next=27,S(t);case 27:return t.end(),e.abrupt("break",29);case 29:e.next=1;break;case 31:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}(),c=function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,r){var o,a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=o=void 0;case 1:return e.next=3,t.next();case 3:if(e.t0=o=e.sent,null!==e.t0)return s=void 0,e.next=8,o.getType();e.next=31;break;case 8:e.t1=e.sent,e.next=e.t1===PDFNet.Element.Type.e_text?11:e.t1===PDFNet.Element.Type.e_text_new_line?22:e.t1===PDFNet.Element.Type.e_form?23:29;break;case 11:return e.next=13,o.getBBox();case 13:return s=e.sent,e.next=16,s.intersectRect(s,n);case 16:if(e.sent)return e.next=19,o.getTextString();e.next=21;break;case 19:a=e.sent,r+=a+"\n";case 21:case 22:return e.abrupt("break",29);case 23:return t.formBegin(),e.next=26,c(t,n,r);case 26:return r+=e.sent,t.end(),e.abrupt("break",29);case 29:e.next=1;break;case 31:return e.abrupt("return",r);case 32:case"end":return e.stop()}},e,void 0)}));return function(e,t,n){return r.apply(this,arguments)}}(),R=function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o="",r.beginOnPage(t),e.next=4,c(r,n,o);case 4:return o+=e.sent,r.end(),e.abrupt("return",o);case 7:case"end":return e.stop()}},e,void 0)}));return function(e,t,n){return r.apply(this,arguments)}}(),B=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a,s,c,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getColor();case 2:return n=e.sent,e.next=5,n.get(0);case 5:return r=e.sent,e.next=8,n.get(1);case 8:return o=e.sent,e.next=11,n.get(2);case 11:return a=e.sent,e.next=14,t.getFontName();case 14:return s=e.sent,e.next=17,t.getFontSize();case 17:return c=e.sent,e.next=20,t.isSerif();case 20:if(!e.sent){e.next=24;break}e.t0=" sans-serif; ",e.next=25;break;case 24:e.t0=" ";case 25:return i=e.t0,u='style="font-family:'+s+";font-size:"+c+";"+i+"color: #"+r.toString(16)+", "+o.toString(16)+", "+a.toString(16)+')"',e.abrupt("return",u);case 28:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}(),t=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,a,s,c,i,u,l,f,x,g,p,h,y,d,v,m,b,w,k,F,P,N,L,D,_,E,T;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Beginning Test"),0,e.next=4,PDFNet.initialize();case 4:return t="../TestFiles/",c=!(s=!(a=o=r=!(n="newsletter.pdf"))),i=null,e.prev=12,e.next=15,PDFNet.startDeallocateStack();case 15:return e.next=17,PDFNet.PDFDoc.createFromURL(t+n);case 17:return(i=e.sent).initSecurityHandler(),i.lock(),e.next=22,i.getPage(1);case 22:if("0"===(u=e.sent).id)return console.log("Page not found."),e.abrupt("return",1);e.next=26;break;case 26:return e.next=28,PDFNet.TextExtractor.create();case 28:return l=e.sent,f=new PDFNet.Rect(0,0,612,794),l.begin(u,f),e.next=33,l.getNumLines();case 33:if(e.sent,p=g=x=void 0,r)return e.next=38,l.getWordCount();e.next=46;break;case 38:return h=e.sent,console.log("Word Count: "+h),e.next=42,l.getAsText();case 42:x=e.sent,console.log("- GetAsText  -------------------------------"),console.log(x),console.log("-----------------------------------------");case 46:if(o)return e.next=49,l.getAsXML(PDFNet.TextExtractor.XMLOutputFlags.e_words_as_elements|PDFNet.TextExtractor.XMLOutputFlags.e_output_bbox|PDFNet.TextExtractor.XMLOutputFlags.e_output_style_info);e.next=52;break;case 49:x=e.sent,console.log("- GetAsXML  --------------------------"+x),console.log("-----------------------------------------------------------");case 52:if(a)return e.next=55,l.getFirstLine();e.next=80;break;case 55:g=e.sent;case 56:return e.next=58,g.isValid();case 58:if(e.sent)return e.next=61,g.getFirstWord();e.next=79;break;case 61:p=e.sent;case 62:return e.next=64,p.isValid();case 64:if(e.sent)return e.next=67,p.getString();e.next=74;break;case 67:x=e.sent,console.log(x);case 69:return e.next=71,p.getNextWord();case 71:p=e.sent,e.next=62;break;case 74:return e.next=76,g.getNextLine();case 76:g=e.sent,e.next=56;break;case 79:console.log("-----------------------------------------------------------");case 80:if(s)return d=y=void 0,m=v=-1,e.next=87,PDFNet.ElementBuilder.create();e.next=185;break;case 87:return e.sent,e.next=90,PDFNet.ElementWriter.create();case 90:return e.sent,e.next=93,l.getFirstLine();case 93:g=e.sent;case 94:return e.next=96,g.isValid();case 96:if(e.sent)return e.next=99,g.getNumWords();e.next=184;break;case 99:if(e.t0=e.sent,0===e.t0)return e.abrupt("continue",179);e.next=102;break;case 102:return e.next=104,g.getFlowID();case 104:if(e.t1=e.sent,e.t2=v,e.t1!==e.t2)return-1!==v&&(-1!==m&&(m=-1,console.log("</Para>")),console.log("</Flow>")),e.next=110,g.getFlowID();e.next=112;break;case 110:v=e.sent,console.log('<Flow id="'+v+'">');case 112:return e.next=114,g.getParagraphID();case 114:if(e.t3=e.sent,e.t4=m,e.t3!==e.t4)return-1!==m&&console.log("</Para>"),e.next=120,g.getParagraphID();e.next=122;break;case 120:m=e.sent,console.log('<Para id="'+m+'">');case 122:return e.next=124,g.getBBox();case 124:return y=e.sent,e.next=127,g.getStyle();case 127:return b=e.sent,w='<Line box="'+y.x1+", "+y.y1+", "+y.x2+", "+y.y1+'">',e.next=131,B(b);case 131:return w+=e.sent,e.next=134,g.getCurrentNum();case 134:return k=e.sent,w+=' cur_num="'+k+'">',console.log(w),F="",e.next=140,g.getFirstWord();case 140:p=e.sent;case 141:return e.next=143,p.isValid();case 143:if(e.sent)return e.next=146,p.getBBox();e.next=178;break;case 146:return d=e.sent,e.next=149,p.getCurrentNum();case 149:return P=e.sent,F+='<Word box="'+d.x1+", "+d.y1+", "+d.x2+", "+d.y2+'" cur_num="'+P+'"',e.next=153,p.getStringLen();case 153:if(0===e.sent)return e.abrupt("continue",173);e.next=156;break;case 156:return e.next=158,p.getStyle();case 158:return N=e.sent,e.next=161,N.compare(b);case 161:if(e.sent){e.next=167;break}return e.t5=console,e.next=165,B(N);case 165:e.t6=e.sent,e.t5.log.call(e.t5,e.t6);case 167:return e.next=169,p.getString();case 169:e.t7=e.sent,e.t8=">"+e.t7,F+=e.t8+"</Word>",console.log(F);case 173:return e.next=175,p.getNextWord();case 175:p=e.sent,e.next=141;break;case 178:console.log("</Line>");case 179:return e.next=181,g.getNextLine();case 181:g=e.sent,e.next=94;break;case 184:-1!==v&&(-1!==m&&(m=-1,console.log("</Para>")),console.log("</Flow>\n"));case 185:return console.log("done"),e.next=188,PDFNet.endDeallocateStack();case 188:e.next=195;break;case 190:e.prev=190,e.t9=e.catch(12),console.log(e.t9),console.log(e.t9.stack),1;case 195:if(c)return 0,e.prev=197,e.next=200,PDFNet.startDeallocateStack();e.next=272;break;case 200:return e.next=202,PDFNet.PDFDoc.createFromURL(t+n);case 202:return(i=e.sent).initSecurityHandler(),i.lock(),e.next=207,PDFNet.ElementReader.create();case 207:return L=e.sent,e.next=210,i.getPageIterator(1);case 210:D=e.sent;case 212:return e.next=214,D.hasNext();case 214:if(e.sent)return e.next=217,D.current();e.next=225;break;case 217:return _=e.sent,L.beginOnPage(_),e.next=221,S(L);case 221:L.end();case 222:D.next(),e.next=212;break;case 225:return console.log("----------------------------------------------------"),console.log("Extract text based on the selection rectangle."),console.log("----------------------------------------------------"),e.next=230,i.getPageIterator();case 230:return e.next=232,e.sent.current();case 232:return E=e.sent,e.t10=R,e.t11=E,e.next=237,PDFNet.Rect.init(27,392,563,534);case 237:return e.t12=e.sent,e.t13=L,e.next=241,(0,e.t10)(e.t11,e.t12,e.t13);case 241:return T=e.sent,console.log("Field 1: "+T),e.t14=R,e.t15=E,e.next=247,PDFNet.Rect.init(28,551,106,623);case 247:return e.t16=e.sent,e.t17=L,e.next=251,(0,e.t14)(e.t15,e.t16,e.t17);case 251:return T=e.sent,console.log("Field 2: "+T),e.t18=R,e.t19=E,e.next=257,PDFNet.Rect.init(208,550,387,621);case 257:return e.t20=e.sent,e.t21=L,e.next=261,(0,e.t18)(e.t19,e.t20,e.t21);case 261:return T=e.sent,console.log("Field 3: "+T),console.log("Done"),e.next=266,PDFNet.endDeallocateStack();case 266:e.next=272;break;case 268:e.prev=268,e.t22=e.catch(197),console.log(e.t22.stack),1;case 272:case"end":return e.stop()}},e,void 0,[[12,190],[197,268]])}));return function(){return e.apply(this,arguments)}}(),PDFNet.runWithCleanup(t,window.sampleL);case 6:case"end":return e.stop()}},e,void 0)}))}();