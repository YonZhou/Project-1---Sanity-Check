function _asyncToGenerator(e){return function(){var s=e.apply(this,arguments);return new Promise(function(o,c){return function t(e,r){try{var n=s[e](r),a=n.value}catch(e){return void c(e)}if(!n.done)return Promise.resolve(a).then(function(e){t("next",e)},function(e){t("throw",e)});o(a)}("next")})}}!function(e){"use strict";var f,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},a=t.iterator||"@@iterator",r=t.toStringTag||"@@toStringTag",n="object"==typeof module,o=e.regeneratorRuntime;if(o)n&&(module.exports=o);else{(o=e.regeneratorRuntime=n?module.exports:{}).wrap=s;var p="suspendedStart",x="suspendedYield",h="executing",g="completed",m={},c=l.prototype=d.prototype;u.prototype=c.constructor=l,l.constructor=u,l[r]=u.displayName="GeneratorFunction",o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(c),e},o.awrap=function(e){return new F(e)},v(P.prototype),o.async=function(e,t,r,n){var a=new P(s(e,t,r,n));return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},v(c),c[a]=function(){return this},c[r]="Generator",c.toString=function(){return"[object Generator]"},o.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=b,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=f)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var a=this.tryEntries[t],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?this.next=a.finallyLoc:this.complete(o),m},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:b(e),resultName:t,nextLoc:r},m}}}function s(e,t,r,n){var c,s,i,u,a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),l=new N(n||[]);return o._invoke=(c=e,s=r,i=l,u=p,function(e,t){if(u===h)throw new Error("Generator is already running");if(u===g){if("throw"===e)throw t;return S()}for(;;){var r=i.delegate;if(r){if("return"===e||"throw"===e&&r.iterator[e]===f){i.delegate=null;var n=r.iterator.return;if(n){var a=y(n,r.iterator,t);if("throw"===a.type){e="throw",t=a.arg;continue}}if("return"===e)continue}var a=y(r.iterator[e],r.iterator,t);if("throw"===a.type){i.delegate=null,e="throw",t=a.arg;continue}e="next",t=f;var o=a.arg;if(!o.done)return u=x,o;i[r.resultName]=o.value,i.next=r.nextLoc,i.delegate=null}if("next"===e)i.sent=i._sent=t;else if("throw"===e){if(u===p)throw u=g,t;i.dispatchException(t)&&(e="next",t=f)}else"return"===e&&i.abrupt("return",t);u=h;var a=y(c,s,i);if("normal"===a.type){u=i.done?g:x;var o={value:a.arg,done:i.done};if(a.arg!==m)return o;i.delegate&&"next"===e&&(t=f)}else"throw"===a.type&&(u=g,e="throw",t=a.arg)}}),o}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function d(){}function u(){}function l(){}function v(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function F(e){this.arg=e}function P(s){function i(e,t,r,n){var a=y(s[e],s,t);if("throw"!==a.type){var o=a.arg,c=o.value;return c instanceof F?Promise.resolve(c.arg).then(function(e){i("next",e,r,n)},function(e){i("throw",e,r,n)}):Promise.resolve(c).then(function(e){o.value=e,r(o)},n)}n(a.arg)}var t;"object"==typeof process&&process.domain&&(i=process.domain.bind(i)),this._invoke=function(r,n){function e(){return new Promise(function(e,t){i(r,n,e,t)})}return t=t?t.then(e,e):e()}}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function b(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=f,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(e){"use strict";window.runPDFLayersTest=function(){var r,n,a,o,e,S=(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,PDFNet.startDeallocateStack();case 2:return e.next=4,PDFNet.OCG.create(t,r);case 4:return n=e.sent,e.next=7,t.getOCGConfig();case 7:if(null==(a=e.sent))return e.next=11,PDFNet.OCGConfig.create(t,!0);e.next=13;break;case 11:(a=e.sent).setName("Default");case 13:return e.next=15,a.getOrder();case 15:if(null==(o=e.sent))return e.next=19,t.createIndirectArray();e.next=21;break;case 19:o=e.sent,a.setOrder(o);case 21:return e.next=23,n.getSDFObj();case 23:return c=e.sent,o.pushBack(c),e.next=27,PDFNet.endDeallocateStack();case 27:return e.abrupt("return",n);case 28:case"end":return e.stop()}},e,void 0)})),function(e,t){return r.apply(this,arguments)}),k=(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a,o,c,s,i,u,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,PDFNet.startDeallocateStack();case 2:return e.next=4,PDFNet.ElementWriter.create();case 4:return(n=e.sent).begin(t),a=new PDFNet.Obj("0"),e.next=9,PDFNet.Image.createFromURL(t,"../TestFiles/peppers.jpg",a);case 9:return o=e.sent,e.next=12,PDFNet.ElementBuilder.create();case 12:return c=e.sent,e.next=15,o.getImageWidth();case 15:return s=e.sent,e.next=18,o.getImageHeight();case 18:return i=e.sent,u=new PDFNet.Matrix2D(s/2,-145,20,i/2,200,150),e.next=22,c.createImageFromMatrix(o,u);case 22:return l=e.sent,n.writePlacedElement(l),e.next=26,l.getGState();case 26:return e.sent.setTransform(200,0,0,300,50,450),n.writePlacedElement(l),e.t0=n,e.next=32,c.createImageScaled(o,300,600,200,-150);case 32:return e.t1=e.sent,e.t0.writePlacedElement.call(e.t0,e.t1),e.next=36,n.end();case 36:return(f=e.sent).putName("Subtype","Form"),f.put("OC",r),f.putRect("BBox",0,0,1e3,1e3),e.next=42,PDFNet.endDeallocateStack();case 42:return e.abrupt("return",f);case 43:case"end":return e.stop()}},e,void 0)})),function(e,t){return n.apply(this,arguments)}),O=(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a,o,c,s,i,u,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,PDFNet.startDeallocateStack();case 2:return e.next=4,PDFNet.ElementWriter.create();case 4:return(n=e.sent).begin(t),e.next=8,PDFNet.ElementBuilder.create();case 8:return(a=e.sent).pathBegin(),a.moveTo(306,396),a.curveTo(681,771,399.75,864.75,306,771),a.curveTo(212.25,864.75,-69,771,306,396),a.closePath(),e.next=16,a.pathEnd();case 16:return(o=e.sent).setPathFill(!0),e.next=20,o.getGState();case 20:return c=e.sent,e.next=23,PDFNet.ColorSpace.createDeviceCMYK();case 23:return s=e.sent,c.setFillColorSpace(s),e.next=27,PDFNet.ColorPt.init(1,0,0,0);case 27:return i=e.sent,c.setFillColorWithColorPt(i),o.setPathStroke(!0),e.next=32,PDFNet.ColorSpace.createDeviceRGB();case 32:return u=e.sent,c.setStrokeColorSpace(u),e.next=36,PDFNet.ColorPt.init(1,0,0);case 36:return l=e.sent,c.setStrokeColorWithColorPt(l),c.setLineWidth(20),c.setTransform(.5,0,0,.5,280,300),n.writeElement(o),e.next=43,n.end();case 43:return(f=e.sent).putName("Subtype","Form"),f.put("OC",r),f.putRect("BBox",0,0,1e3,1e3),e.next=49,PDFNet.endDeallocateStack();case 49:return e.abrupt("return",f);case 50:case"end":return e.stop()}},e,void 0)})),function(e,t){return a.apply(this,arguments)}),C=(o=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a,o,c,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,PDFNet.startDeallocateStack();case 2:return e.next=4,PDFNet.ElementWriter.create();case 4:return(n=e.sent).begin(t),e.next=8,PDFNet.ElementBuilder.create();case 8:return a=e.sent,e.next=11,PDFNet.Font.create(t,PDFNet.Font.StandardType1Font.e_times_roman);case 11:return o=e.sent,e.next=14,a.createTextBeginWithFont(o,120);case 14:return c=e.sent,n.writeElement(c),e.next=18,a.createNewTextRun("A text layer!");case 18:return c=e.sent,e.next=21,PDFNet.Matrix2D.createRotationMatrix(-.785375);case 21:return s=e.sent,e.next=24,s.concat(1,0,0,1,180,100);case 24:return e.next=26,c.setTextMatrix(s);case 26:return e.next=28,n.writeElement(c);case 28:return e.t0=n,e.next=31,a.createTextEnd();case 31:return e.t1=e.sent,e.next=34,e.t0.writeElement.call(e.t0,e.t1);case 34:return e.next=36,n.end();case 36:return(i=e.sent).putName("Subtype","Form"),i.put("OC",r),i.putRect("BBox",0,0,1e3,1e3),e.next=42,PDFNet.endDeallocateStack();case 42:return e.abrupt("return",i);case 43:case"end":return e.stop()}},e,void 0)})),function(e,t){return o.apply(this,arguments)}),t=(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,o,c,s,i,u,l,f,p,x,h,g,m,y,d,v,F,P,w,D,N,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Beginning Test"),0,t=null,e.prev=3,e.next=6,PDFNet.PDFDoc.create();case 6:return(t=e.sent).initSecurityHandler(),t.lock(),console.log("PDFNet and PDF document initialized and locked"),e.next=12,S(t,"Image Layer");case 12:return r=e.sent,e.next=15,S(t,"Text Layer");case 15:return n=e.sent,e.next=18,S(t,"Vector Layer");case 18:return a=e.sent,e.next=21,t.pageCreate();case 21:return o=e.sent,e.next=24,PDFNet.ElementBuilder.create();case 24:return c=e.sent,e.next=27,PDFNet.ElementWriter.create();case 27:return(s=e.sent).beginOnPage(o),e.t0=k,e.t1=t,e.next=33,r.getSDFObj();case 33:return e.t2=e.sent,e.next=36,(0,e.t0)(e.t1,e.t2);case 36:return i=e.sent,e.next=39,c.createFormFromStream(i);case 39:return u=e.sent,s.writeElement(u),e.t3=O,e.t4=t,e.next=45,a.getSDFObj();case 45:return e.t5=e.sent,e.next=48,(0,e.t3)(e.t4,e.t5);case 48:return l=e.sent,e.next=51,c.createFormFromStream(l);case 51:u=e.sent,s.writeElement(u),e.next=87;break;case 58:return e.t7=e.sent,e.t6.pushBack.call(e.t6,e.t7),e.t8=f,e.next=63,a.getSDFObj();case 63:return e.t9=e.sent,e.t8.pushBack.call(e.t8,e.t9),e.t10=f,e.next=68,n.getSDFObj();case 68:return e.t11=e.sent,e.t10.PushBack.call(e.t10,e.t11),e.next=72,PDFNet.OCMD.create(t,f,PDFNet.OCMD.VisibilityPolicyType.e_AllOn);case 72:return p=e.sent,e.t12=c,e.t13=C,e.t14=t,e.next=78,p.getSDFObj();case 78:return e.t15=e.sent,e.next=81,(0,e.t13)(e.t14,e.t15);case 81:return e.t16=e.sent,e.next=84,e.t12.createFormFromStream.call(e.t12,e.t16);case 84:u=e.sent,e.next=99;break;case 87:return e.t17=c,e.t18=C,e.t19=t,e.next=92,n.getSDFObj();case 92:return e.t20=e.sent,e.next=95,(0,e.t18)(e.t19,e.t20);case 95:return e.t21=e.sent,e.next=98,e.t17.createFormFromStream.call(e.t17,e.t21);case 98:u=e.sent;case 99:return s.writeElement(u),e.t22=c,e.next=103,o.getPageWidth();case 103:return e.t23=e.sent,e.next=106,o.getPageHeight();case 106:return e.t24=e.sent,e.next=109,e.t22.createRect.call(e.t22,0,0,e.t23,e.t24);case 109:return(u=e.sent).setPathFill(!1),u.setPathStroke(!0),e.next=114,u.getGState();case 114:return e.sent.setLineWidth(40),s.writeElement(u),s.end(),t.pagePushBack(o),e.next=121,t.getViewPrefs();case 121:return e.sent.setPageMode(PDFNet.PDFDocViewPrefs.PageMode.e_UseOC),e.next=125,t.saveMemoryBuffer(PDFNet.SDFDoc.SaveOptions.e_linearized);case 125:x=e.sent,saveBufferAsPDFDoc(x,"pdf_layers.pdf"),console.log("done example 1"),e.next=134;break;case 130:e.prev=130,e.t25=e.catch(3),console.log(e.t25.stack),1;case 134:return e.prev=134,e.next=137,t.hasOC();case 137:if(e.sent){e.next=141;break}console.log("The document does not contain 'Optional Content'"),e.next=197;break;case 141:return e.next=143,t.getOCGConfig();case 143:return h=e.sent,e.next=146,PDFNet.OCGContext.createFromConfig(h);case 146:return g=e.sent,e.next=149,PDFNet.PDFDraw.create();case 149:return(m=e.sent).setImageSize(1e3,1e3),m.setOCGContext(g),e.next=154,t.getPage(1);case 154:return y=e.sent,e.next=157,m.exportStream(y);case 157:return d=e.sent,saveBufferAsPNG(d,"pdf_layers_default.png"),g.setNonOCDrawing(!1),e.next=162,t.getOCGs();case 162:if(null!==(v=e.sent))return F=void 0,e.next=167,v.size();e.next=191;break;case 167:P=e.sent,F=0;case 169:if(F<P)return e.t26=PDFNet.OCG,e.next=173,v.getAt(F);e.next=191;break;case 173:return e.t27=e.sent,e.next=176,e.t26.createFromObj.call(e.t26,e.t27);case 176:return w=e.sent,g.resetStates(!1),g.setState(w,!0),D="pdf_layers_",e.next=182,w.getName();case 182:return D+=e.sent,D+=".png",e.next=186,m.exportStream(y);case 186:N=e.sent,saveBufferAsPNG(N,D);case 188:++F,e.next=169;break;case 191:return g.setNonOCDrawing(!0),g.setOCDrawMode(PDFNet.OCGContext.OCDrawMode.e_NoOC),e.next=195,m.exportStream(y);case 195:b=e.sent,saveBufferAsPNG(b,"pdf_layers_non_oc.png");case 197:console.log("done"),e.next=204;break;case 200:e.prev=200,e.t28=e.catch(134),console.log(e.t28.stack),1;case 204:case"end":return e.stop()}},e,void 0,[[3,130],[134,200]])})),function(){return e.apply(this,arguments)});PDFNet.runWithCleanup(t,window.sampleL)}}();