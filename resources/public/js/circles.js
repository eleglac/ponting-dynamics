if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function e$$0(z,V,h){function g(a,b){if(!V[a]){if(!z[a]){var c="function"==typeof require&&require;if(!b&&c)return c(a,!0);if(k)return k(a,!0);c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c;}c=V[a]={exports:{}};z[a][0].call(c.exports,function(d){var c=z[a][1][d];return g(c?c:d)},c,c.exports,e$$0,z,V,h)}return V[a].exports}for(var k="function"==typeof require&&require,n=0;n<h.length;n++)g(h[n]);return g})({1:[function(C,z,V){z={isDomPresent:!0,navigator:navigator,window:window,
document:document,ajax:function(h){var g=new XMLHttpRequest;g.open("GET",h,!1);g.overrideMimeType&&g.overrideMimeType("text/plain");g.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");g.send(null);if(200!==g.status&&0!==g.status)throw"XMLHttpRequest failed, status code "+g.status;return g.responseText}};window.Processing=C("./src/")(z)},{"./src/":28}],2:[function(C,z,V){z.exports={name:"processing-js",version:"1.4.16",author:"Processing.js",repository:{type:"git",url:"git@github.com/processing-js/processing-js.git"},
main:"processing.min.js",bugs:"https://github.com/processing-js/processing-js/issues",devDependencies:{argv:"~0.0.2",browserify:"^11.0.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",open:"0.0.3",grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"},scripts:{test:"node test",start:"browserify build.js -o processing.js && node minify"},license:"MIT"}},{}],3:[function(C,z,V){z.exports=function(h){if(h instanceof Array){var g=-1;this.hasNext=function(){return++g<h.length};
this.next=function(){return h[g]}}else{if(h.iterator instanceof Function)return h.iterator();throw"Unable to iterate: "+h;}}},{}],4:[function(C,z,V){z.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,
MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,
SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,
CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,
INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,
HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(C,z,V){z.exports=function(h){var g={BufferMax:200},k=h.createElement("style"),n=!1;k.textContent=".pjsconsole.hidden {\n  display: none!important;\n}";g.wrapper=h.createElement("div");k.textContent+="\n.pjsconsole {\n  opacity: .75;\n  display: block;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: 50px;\n  background-color: #aaa;\n}";
g.wrapper.classList.add("pjsconsole");g.dragger=h.createElement("div");k.textContent+="\n.pjsconsole .dragger {\n  display: block;\n  border: 3px black raised;\n  cursor: n-resize;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 5px;\n  background-color: #333;\n}";g.dragger.classList.add("dragger");g.closer=h.createElement("div");k.textContent+="\n.pjsconsole .closer {\n  opacity: .5;\n  display: block;\n  border: 3px black raised;\n  position: absolute;\n  top: 10px;\n  right: 30px;\n  height: 20px;\n  width: 20px;\n  background-color: #ddd;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  cursor: pointer\n}";
g.closer.classList.add("closer");g.closer.innerHTML="&#10006;";g.javaconsole=h.createElement("div");k.textContent+="\n.pjsconsole .console {\n  overflow-x: auto;\n  display: block;\n  position: absolute;\n  left: 10px;\n  right: 0px;\n  bottom: 5px;\n  top: 10px;\n  overflow-y: scroll;\n  height: 40px;\n}";g.javaconsole.setAttribute("class","console");g.wrapper.appendChild(g.dragger);g.wrapper.appendChild(g.javaconsole);g.wrapper.appendChild(g.closer);g.dragger.onmousedown=function(a){g.divheight=
g.wrapper.style.height;h.selection?h.selection.empty():window.getSelection().removeAllRanges();var b=a.screenY;window.onmousemove=function(a){g.wrapper.style.height=parseFloat(g.divheight)+(b-a.screenY)+"px";g.javaconsole.style.height=parseFloat(g.divheight)+(b-a.screenY)-10+"px"};window.onmouseup=function(a){h.selection?h.selection.empty():window.getSelection().removeAllRanges();g.wrapper.style.height=parseFloat(g.divheight)+(b-a.screenY)+"px";g.javaconsole.style.height=parseFloat(g.divheight)+(b-
a.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};g.BufferArray=[];g.print=g.log=function(){var a=Array.prototype.slice.call(arguments);t=a.map(function(b,c){return b+(c+1===a.length?"":" ")}).join("");g.BufferArray[g.BufferArray.length-1]?g.BufferArray[g.BufferArray.length-1]+=t+"":g.BufferArray.push(t);g.javaconsole.innerHTML=g.BufferArray.join("");g.showconsole()};g.println=function(){n||(h.body.appendChild(k),h.body.appendChild(g.wrapper),n=!0);var a=Array.prototype.slice.call(arguments);
a.push("<br>");g.print.apply(g,a);g.BufferArray.length>g.BufferMax?g.BufferArray.splice(0,1):g.javaconsole.scrollTop=g.javaconsole.scrollHeight};g.showconsole=function(){g.wrapper.classList.remove("hidden")};g.hideconsole=function(){g.wrapper.classList.add("hidden")};g.closer.onclick=function(){g.hideconsole()};g.hideconsole();return g}},{}],6:[function(C,z,V){z.exports=function(h){function g(){}function k(a,c,d){if(a.hasOwnProperty(c)&&"function"===typeof a[c]){var p=a[c];if("$overloads"in p)p.$defaultOverload=
d;else if("$overloads"in d||p.length!==d.length){var q;"$overloads"in d?(q=d.$overloads.slice(0),q[p.length]=p,p=d.$defaultOverload):(q=[],q[d.length]=d,q[p.length]=p);var T=function(){return(T.$overloads[arguments.length]||("$methodArgsIndex"in T&&arguments.length>T.$methodArgsIndex?T.$overloads[T.$methodArgsIndex]:null)||T.$defaultOverload).apply(this,arguments)};T.$overloads=q;"$methodArgsIndex"in d&&(T.$methodArgsIndex=d.$methodArgsIndex);T.$defaultOverload=p;T.name=c;a[c]=T}}else a[c]=d}function n(b,
c){function d(d){a.defineProperty(b,d,{get:function(){return c[d]},set:function(e){c[d]=e},enumerable:!0})}var p=[],q;for(q in c)"function"===typeof c[q]?k(b,q,c[q]):"$"===q.charAt(0)||q in b||p.push(q);for(;0<p.length;)d(p.shift());b.$super=c}g.prototype=h.PConstants;var a=new g;Object.keys(h).forEach(function(b){a[b]=h[b]});a.defineProperty=function(a,c,d){"defineProperty"in Object?Object.defineProperty(a,c,d):(d.hasOwnProperty("get")&&a.__defineGetter__(c,d.get),d.hasOwnProperty("set")&&a.__defineSetter__(c,
d.set))};a.extendClassChain=function(a){for(var c=[a],d=a.$upcast;d;d=d.$upcast)n(d,a),c.push(d),a=d;for(;0<c.length;)c.pop().$self=a};a.extendStaticMembers=function(a,c){n(a,c)};a.extendInterfaceMembers=function(a,c){n(a,c)};a.addMethod=function(a,c,d,p){var q=a[c];if(q||p){var T=d.length;if("$overloads"in q)q.$overloads[T]=d;else{var e=function(){return(e.$overloads[arguments.length]||("$methodArgsIndex"in e&&arguments.length>e.$methodArgsIndex?e.$overloads[e.$methodArgsIndex]:null)||e.$defaultOverload).apply(this,
arguments)},g=[];q&&(g[q.length]=q);g[T]=d;e.$overloads=g;e.$defaultOverload=q||d;p&&(e.$methodArgsIndex=T);e.name=c;a[c]=e}}else a[c]=d};a.createJavaArray=function(b,c){var d=null,p=null;if("string"===typeof b)if("boolean"===b)p=!1;else{var q;q="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);q&&(p=0)}if("number"===typeof c[0])if(q=0|c[0],1>=c.length){d=[];d.length=q;for(var T=0;T<q;++T)d[T]=p}else for(d=[],p=c.slice(1),T=0;T<q;++T)d.push(a.createJavaArray(b,
p));return d};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],7:[function(C,z,V){z.exports=function(h,g){var k=g.window,n=g.document,a=k.XMLHttpRequest,b=g.noop,c=g.isDOMPresent,d=g.version;h.version=d?d:"@DEV-VERSION@";h.lib={};h.registerLibrary=function(d,e){h.lib[d]=e;e.hasOwnProperty("init")&&e.init(defaultScope)};h.Sketch=function(d){this.attachFunction=d;this.options={pauseOnBlur:!1,
globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(d,a){if(!this.images[d]&&(c||(this.images[d]=null),a||(a=new Image,a.onload=function(d){return function(){d.pending--}}(this),this.pending++,a.src=d),this.images[d]=a,k.opera)){var b=n.createElement("div");b.appendChild(a);b.style.position="absolute";b.style.opacity=0;b.style.width="1px";b.style.height=
"1px";this.operaCache[d]||(n.body.appendChild(b),this.operaCache[d]=b)}}};this.sourceCode=void 0;this.attach=function(d){if("function"===typeof this.attachFunction)this.attachFunction(d);else if(this.sourceCode){var a=(new Function("return ("+this.sourceCode+");"))();a(d);this.attachFunction=a}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var d,a;a="((function(Sketch) {\n"+("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(d in this.options)if(this.options.hasOwnProperty(d)){var c=
this.options[d];a+="sketch.options."+d+" = "+("string"===typeof c?'"'+c+'"':""+c)+";\n"}for(d in this.imageCache)this.options.hasOwnProperty(d)&&(a+='sketch.imageCache.add("'+d+'");\n');return a+"return sketch;\n})(Processing.Sketch))"}};var p=h.loadSketchFromSources=function(d,e){function c(d,e){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var d;200!==b.status&&0!==b.status?d="Invalid XHR status "+b.status:""===b.responseText&&(d="withCredentials"in new a&&!1===(new a).withCredentials&&
"file:"===k.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");e(b.responseText,d)}};b.open("GET",d,!0);b.overrideMimeType&&b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}
function b(e,a){function k(c,b){p[e]=c;++u;b&&q.push(a+" ==> "+b);if(u===g){if(0===q.length)return new h(d,p.join("\n"));throw"Processing.js: Unable to load pjs sketch files: "+q.join("\n");}}if("#"===a.charAt(0)){var da=n.getElementById(a.substring(1));da?k(da.text||da.textContent):k("","Unable to load pjs sketch: element with id '"+a.substring(1)+"' was not found")}else c(a,k)}for(var p=[],q=[],g=e.length,u=0,ka=0;ka<g;++ka)b(ka,e[ka])},q=function(){n.removeEventListener("DOMContentLoaded",q,!1);
for(var d;0<h.instances.length;)for(d=h.instances.length-1;0<=d;d--)h.instances[d]&&h.instances[d].exit();var e=n.getElementsByTagName("canvas"),a;d=0;for(l=e.length;d<l;d++){var c=e[d].getAttribute("data-processing-sources");null===c&&(c=e[d].getAttribute("data-src"),null===c&&(c=e[d].getAttribute("datasrc")));if(c){a=c.split(/\s+/g);for(c=0;c<a.length;)a[c]?c++:a.splice(c,1);p(e[d],a)}}var b,e=n.getElementsByTagName("script"),c=[];for(d=e.length-1;0<=d;d--)c.push(e[d]);d=0;for(b=c.length;d<b;d++)if(a=
c[d],a.getAttribute&&(e=a.getAttribute("type"))&&("text/processing"===e.toLowerCase()||"application/processing"===e.toLowerCase())){var g=a.getAttribute("data-processing-target"),e=void 0;if(g)e=n.getElementById(g);else{for(g=a.nextSibling;g&&1!==g.nodeType;)g=g.nextSibling;g&&"canvas"===g.nodeName.toLowerCase()&&(e=g)}e&&(a.getAttribute("src")?(a=a.getAttribute("src").split(/\s+/),p(e,a)):(a=a.textContent||a.text,new h(e,a)))}};n.addEventListener("DOMContentLoaded",q,!1);h.reload=q;h.disableInit=
function(){n.removeEventListener("DOMContentLoaded",q,!1)};return h}},{}],8:[function(C,z,V){z.exports=function(h,g){return null===h||null===g?null===h&&null===g:"string"===typeof h||"object"!==typeof h?h===g:h.equals instanceof Function?h.equals(g):h===g}},{}],9:[function(C,z,V){z.exports=function(h,g){if("string"===typeof h){for(var k=0,n=0;n<h.length;++n)k=31*k+h.charCodeAt(n)&4294967295;return k}if("object"!==typeof h)return h&4294967295;if(h.hashCode instanceof Function)return h.hashCode();h.$id===
g&&(h.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return h.$id}},{}],10:[function(C,z,V){z.exports=function(h){function g(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};this.remove=function(){a.splice(b--,1)}}function k(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var d=0,p=b.length;d<p;++d)if(n(a,b[d]))return d;
return-1};this.lastIndexOf=function(a){for(var d=b.length-1;0<=d;--d)if(n(a,b[d]))return d;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,d){var p;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+
a+" greater or equal than "+b.length;for(p=new ObjectIterator(d);p.hasNext();)b.splice(a++,0,p.next())}else for(p=new ObjectIterator(a);p.hasNext();)b.push(p.next())};this.set=function(){if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=
0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var d,b,q,g=new k;g.addAll(this);this.clear();for(b=d=0;d<g.size();d++)q=g.get(d),a.contains(q)||this.add(b++,q);return this.size()<g.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new k(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new g(b)}}var n=h.virtEquals;return k}},{}],
11:[function(C,z,V){z.exports=function(h,g){var k=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof k?n:NaN;return h[this.code]===g?h[this.code]=this:h[this.code]};k.prototype.toString=function(){return String.fromCharCode(this.code)};k.prototype.valueOf=function(){return this.code};return k}({})},{}],12:[function(C,z,V){z.exports=function(h){function g(){function a(d){d=k(d)%e.length;return 0>d?e.length+d:d}function b(){if(!(h<=T*e.length)){for(var d=
[],b=0;b<e.length;++b)void 0!==e[b]&&(d=d.concat(e[b]));b=2*e.length;e=[];e.length=b;for(b=0;b<d.length;++b){var c=a(d[b].key),p=e[c];void 0===p&&(e[c]=p=[]);p.push(d[b])}}}function c(d,a){function b(){for(;!q;)if(++p,c>=e.length)q=!0;else if(void 0===e[c]||p>=e[c].length)p=-1,++c;else break}var c=0,p=-1,q=!1,g;this.hasNext=function(){return!q};this.next=function(){g=d(e[c][p]);b();return g};this.remove=function(){void 0!==g&&(a(g),--p,b())};b()}function d(d,a,e){this.clear=function(){da.clear()};
this.contains=function(d){return a(d)};this.containsAll=function(d){for(d=d.iterator();d.hasNext();)if(!this.contains(d.next()))return!1;return!0};this.isEmpty=function(){return da.isEmpty()};this.iterator=function(){return new c(d,e)};this.remove=function(d){return this.contains(d)?(e(d),!0):!1};this.removeAll=function(d){for(d=d.iterator();d.hasNext();){var a=d.next();this.contains(a)&&e(a)}return!0};this.retainAll=function(d){for(var a=this.iterator(),b=[];a.hasNext();){var c=a.next();d.contains(c)||
b.push(c)}for(d=0;d<b.length;++d)e(b[d]);return 0<b.length};this.size=function(){return da.size()};this.toArray=function(){for(var d=[],a=this.iterator();a.hasNext();)d.push(a.next());return d}}function p(d){this._isIn=function(a){return a===da&&void 0===d.removed};this.equals=function(a){return n(d.key,a.getKey())};this.getKey=function(){return d.key};this.getValue=function(){return d.value};this.hashCode=function(a){return k(d.key)};this.setValue=function(a){var e=d.value;d.value=a;return e}}if(1===
arguments.length&&arguments[0]instanceof g)return arguments[0].clone();var q=0<arguments.length?arguments[0]:16,T=1<arguments.length?arguments[1]:0.75,e=[];e.length=q;var h=0,da=this;this.clear=function(){h=0;e=[];e.length=q};this.clone=function(){var d=new g;d.putAll(this);return d};this.containsKey=function(d){var b=a(d),b=e[b];if(void 0===b)return!1;for(var c=0;c<b.length;++c)if(n(b[c].key,d))return!0;return!1};this.containsValue=function(d){for(var a=0;a<e.length;++a){var b=e[a];if(void 0!==b)for(var c=
0;c<b.length;++c)if(n(b[c].value,d))return!0}return!1};this.entrySet=function(){return new d(function(d){return new p(d)},function(d){return d instanceof p&&d._isIn(da)},function(d){return da.remove(d.getKey())})};this.get=function(d){var b=a(d),b=e[b];if(void 0===b)return null;for(var c=0;c<b.length;++c)if(n(b[c].key,d))return b[c].value;return null};this.isEmpty=function(){return 0===h};this.keySet=function(){return new d(function(d){return d.key},function(d){return da.containsKey(d)},function(d){return da.remove(d)})};
this.values=function(){return new d(function(d){return d.value},function(d){return da.containsValue(d)},function(d){return da.removeByValue(d)})};this.put=function(d,c){var p=a(d),q=e[p];if(void 0===q)return++h,e[p]=[{key:d,value:c}],b(),null;for(p=0;p<q.length;++p)if(n(q[p].key,d)){var g=q[p].value;q[p].value=c;return g}++h;q.push({key:d,value:c});b();return null};this.putAll=function(d){for(d=d.entrySet().iterator();d.hasNext();){var a=d.next();this.put(a.getKey(),a.getValue())}};this.remove=function(d){var b=
a(d),c=e[b];if(void 0===c)return null;for(var p=0;p<c.length;++p)if(n(c[p].key,d))return--h,d=c[p].value,c[p].removed=!0,1<c.length?c.splice(p,1):e[b]=void 0,d;return null};this.removeByValue=function(d){var a,b,c,p;for(a in e)if(e.hasOwnProperty(a))for(b=0,c=e[a].length;b<c;b++)if(p=e[a][b],p.value===d)return e[a].splice(b,1),!0;return!1};this.size=function(){return h}}var k=h.virtHashCode,n=h.virtEquals;return g}},{}],13:[function(C,z,V){z.exports=function(h,g){function k(b,c){b===g&&(b="");this.name=
b;c===g&&(c=0);this.size=c;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*c;var d=b.indexOf(" Italic Bold");-1!==d&&(b=b.substring(0,d));this.style="normal";d=b.indexOf(" Italic");-1!==d&&(b=b.substring(0,d),this.style="italic");this.weight="normal";d=b.indexOf(" Bold");-1!==d&&(b=b.substring(0,d),this.weight="bold");this.family="sans-serif";if(b!==g)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var d=
this.size/250,p=n.createElement("canvas");p.width=500;p.height=500;p.style.opacity=0;var q=this.getCSSDefinition("250px","normal"),T=p.getContext("2d");T.font=q;p.width=T.measureText("dbflkhyjqpg").width;T.font=q;q=n.createElement("div");q.style.position="absolute";q.style.opacity=0;q.style.fontFamily='"'+this.name+'"';q.style.fontSize="250px";q.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(q);var e=p.width,h=p.height,p=h/2;T.fillStyle="white";T.fillRect(0,0,e,h);T.fillStyle="black";
T.fillText("dbflkhyjqpg",0,p);for(var h=T.getImageData(0,0,e,h).data,k=0,H=4*e,E=h.length;++k<E&&255===h[k];)a();e=Math.round(k/H);for(k=E-1;0<--k&&255===h[k];)a();h=Math.round(k/H);this.ascent=d*(p-e);this.descent=d*(h-p);n.defaultView.getComputedStyle&&(p=n.defaultView.getComputedStyle(q,null).getPropertyValue("height"),p=d*p.replace("px",""),p>=2*this.size&&(this.leading=Math.round(p/2)));n.body.removeChild(q);d=this.caching?T:void 0;this.context2d=d;this.css=this.getCSSDefinition();this.context2d&&
(this.context2d.font=this.css)}var n=h.Browser.document,a=h.noop;k.prototype.caching=!0;k.prototype.getCSSDefinition=function(a,c){a===g&&(a=this.size+"px");c===g&&(c=this.leading+"px");return[this.style,"normal",this.weight,a+"/"+c,this.family].join(" ")};k.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};k.prototype.measureTextWidthFallback=function(a){var c=n.createElement("canvas").getContext("2d");c.font=this.css;return c.measureText(a).width};k.PFontCache={length:0};
k.get=function(a,c){c=(10*c+0.5|0)/10;var d=k.PFontCache,p=a+"/"+c;if(!d[p]){d[p]=new k(a,c);d.length++;if(50===d.length){k.prototype.measureTextWidth=k.prototype.measureTextWidthFallback;k.prototype.caching=!1;for(var q in d)"length"!==q&&(d[q].context2d=null);return new k(a,c)}if(400===d.length)return k.PFontCache={},k.get=k.getFallback,new k(a,c)}return d[p]};k.getFallback=function(a,c){return new k(a,c)};k.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};k.preloading=
{template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,
function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: -1000; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var c,
d,p=this.getElementWidth(this.template),q=0;q<this.fontList.length;q++){c=this.fontList[q];d=this.getElementWidth(c);if(4E3>this.timeAttempted&&d===p)return this.timeAttempted+=a,!0;n.body.removeChild(c);this.fontList.splice(q--,1);this.timeAttempted=0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var c="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[c]){var d=n.createElement("style");d.setAttribute("type",
"text/css");d.innerHTML="@font-face{\n  font-family: '"+c+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(d);this.addedList[c]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily='"'+c+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return k}},{}],14:[function(C,z,V){z.exports=function(h,g){var k=h.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof
n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,
0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var c,d;a instanceof PVector?(c=a.x,d=a.y,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2],
b[1]=this.elements[3]*c+this.elements[4]*d+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2],b.y=this.elements[3]*c+this.elements[4]*d+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,
0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=this.elements[0],c=this.elements[1],d=this.elements[2],p=this.elements[3],q=this.elements[4],g=this.elements[5];this.elements[0]=q/a;this.elements[3]=-p/a;this.elements[1]=-c/a;this.elements[4]=b/a;this.elements[2]=(c*g-q*d)/a;this.elements[5]=
(p*d-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],c=0,d=0;2>d;d++)for(var p=
0;3>p;p++,c++)b[c]+=this.elements[3*d+0]*a[p+0]+this.elements[3*d+1]*a[p+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*
a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],d=this.elements[1];this.elements[0]=b*c+a*d;this.elements[1]=-a*c+b*d;c=this.elements[3];d=this.elements[4];this.elements[3]=b*c+a*d;this.elements[4]=-a*c+b*d},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=
printMatrixHelper(this.elements),a=""+k.nfs(this.elements[0],a,4)+" "+k.nfs(this.elements[1],a,4)+" "+k.nfs(this.elements[2],a,4)+"\n"+k.nfs(this.elements[3],a,4)+" "+k.nfs(this.elements[4],a,4)+" "+k.nfs(this.elements[5],a,4)+"\n\n";k.println(a)}};return n}},{}],15:[function(C,z,V){z.exports=function(h,g){var k=h.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=
arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===g&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+
b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=
a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,d,p,q;a instanceof PVector?(c=a.x,d=a.y,p=a.z,q=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],p=a[2],q=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*p+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*p+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*
d+this.elements[10]*p+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*p+this.elements[3]*q,b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*p+this.elements[7]*q,b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*p+this.elements[11]*q,b[3]=this.elements[12]*c+this.elements[13]*d+this.elements[14]*p+this.elements[15]*q));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2]*p+this.elements[3],b.y=this.elements[4]*
c+this.elements[5]*d+this.elements[6]*p+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*d+this.elements[10]*p+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var p=0;4>p;p++,c++)b[c]+=this.elements[p+0]*a[4*d+0]+this.elements[p+
4]*a[4*d+1]+this.elements[p+8]*a[4*d+2]+this.elements[p+12]*a[4*d+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var p=0;4>p;p++,c++)b[c]+=this.elements[4*d+0]*a[p+0]+this.elements[4*d+1]*a[p+4]+this.elements[4*d+2]*a[p+8]+this.elements[4*
d+3]*a[p+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(c){var p=Math.cos(a);a=Math.sin(a);var q=1-p;this.apply(q*b*b+p,q*b*c-a*d,q*b*d+a*c,0,q*b*c+a*d,q*c*c+p,q*c*d-a*b,0,q*b*d-a*c,q*c*d+a*b,q*d*d+p,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===g&&(inverseCopy=new n);var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=
Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,
this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,d){return c?d?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*
d:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,c,d){return c?d?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*d:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,d){return d?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*d:this.elements[8]*
a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,d){return d?this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]*d:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],d=this.elements[1]*
this.elements[6]-this.elements[2]*this.elements[5],p=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],q=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],e=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],n=this.elements[9]*
this.elements[15]-this.elements[11]*this.elements[13],E=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],O=a*E-b*n+c*k+d*h-p*e+q*g;if(1E-9>=Math.abs(O))return!1;var u=[];u[0]=+this.elements[5]*E-this.elements[6]*n+this.elements[7]*k;u[4]=-this.elements[4]*E+this.elements[6]*h-this.elements[7]*e;u[8]=+this.elements[4]*n-this.elements[5]*h+this.elements[7]*g;u[12]=-this.elements[4]*k+this.elements[5]*e-this.elements[6]*g;u[1]=-this.elements[1]*E+this.elements[2]*n-this.elements[3]*
k;u[5]=+this.elements[0]*E-this.elements[2]*h+this.elements[3]*e;u[9]=-this.elements[0]*n+this.elements[1]*h-this.elements[3]*g;u[13]=+this.elements[0]*k-this.elements[1]*e+this.elements[2]*g;u[2]=+this.elements[13]*q-this.elements[14]*p+this.elements[15]*d;u[6]=-this.elements[12]*q+this.elements[14]*c-this.elements[15]*b;u[10]=+this.elements[12]*p-this.elements[13]*c+this.elements[15]*a;u[14]=-this.elements[12]*d+this.elements[13]*b-this.elements[14]*a;u[3]=-this.elements[9]*q+this.elements[10]*
p-this.elements[11]*d;u[7]=+this.elements[8]*q-this.elements[10]*c+this.elements[11]*b;u[11]=-this.elements[8]*p+this.elements[9]*c-this.elements[11]*a;u[15]=+this.elements[8]*d-this.elements[9]*b+this.elements[10]*a;a=1/O;u[0]*=a;u[1]*=a;u[2]*=a;u[3]*=a;u[4]*=a;u[5]*=a;u[6]*=a;u[7]*=a;u[8]*=a;u[9]*=a;u[10]*=a;u[11]*=a;u[12]*=a;u[13]*=a;u[14]*=a;u[15]*=a;this.elements=u.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=
printMatrixHelper(this.elements),a=""+k.nfs(this.elements[0],a,4)+" "+k.nfs(this.elements[1],a,4)+" "+k.nfs(this.elements[2],a,4)+" "+k.nfs(this.elements[3],a,4)+"\n"+k.nfs(this.elements[4],a,4)+" "+k.nfs(this.elements[5],a,4)+" "+k.nfs(this.elements[6],a,4)+" "+k.nfs(this.elements[7],a,4)+"\n"+k.nfs(this.elements[8],a,4)+" "+k.nfs(this.elements[9],a,4)+" "+k.nfs(this.elements[10],a,4)+" "+k.nfs(this.elements[11],a,4)+"\n"+k.nfs(this.elements[12],a,4)+" "+k.nfs(this.elements[13],a,4)+" "+k.nfs(this.elements[14],
a,4)+" "+k.nfs(this.elements[15],a,4)+"\n\n";k.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/
a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};return n}},{}],16:[function(C,z,V){z.exports=function(h){var g=h.PConstants,k=h.PMatrix2D,n=h.PMatrix3D;h=function(a){this.family=a||g.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=this.close=this.kind=this.matrix=this.image=null};h.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=
this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===
g.GROUP?this.drawGroup(a):this.family===g.PRIMITIVE?this.drawPrimitive(a):this.family===g.GEOMETRY?this.drawGeometry(a):this.family===g.PATH&&this.drawPath(a)},drawPath:function(a){var b,c;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=0,c=this.vertices.length;b<c;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,c=this.vertices.length;b<c;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var d=
0;if(2===this.vertices[0].length)for(b=0,c=this.vertexCodes.length;b<c;b++)this.vertexCodes[b]===g.VERTEX?(a.vertex(this.vertices[d][0],this.vertices[d][1],this.vertices[d].moveTo),a.breakShape=!1,d++):this.vertexCodes[b]===g.BEZIER_VERTEX?(a.bezierVertex(this.vertices[d+0][0],this.vertices[d+0][1],this.vertices[d+1][0],this.vertices[d+1][1],this.vertices[d+2][0],this.vertices[d+2][1]),d+=3):this.vertexCodes[b]===g.CURVE_VERTEX?(a.curveVertex(this.vertices[d][0],this.vertices[d][1]),d++):this.vertexCodes[b]===
g.BREAK&&(a.breakShape=!0);else for(b=0,c=this.vertexCodes.length;b<c;b++)this.vertexCodes[b]===g.VERTEX?(a.vertex(this.vertices[d][0],this.vertices[d][1],this.vertices[d][2]),!0===this.vertices[d].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[d].moveTo&&(vertArray[vertArray.length-1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===g.BEZIER_VERTEX?(a.bezierVertex(this.vertices[d+0][0],this.vertices[d+0][1],this.vertices[d+0][2],this.vertices[d+1][0],this.vertices[d+1][1],this.vertices[d+
1][2],this.vertices[d+2][0],this.vertices[d+2][1],this.vertices[d+2][2]),d+=3):this.vertexCodes[b]===g.CURVE_VERTEX?(a.curveVertex(this.vertices[d][0],this.vertices[d][1],this.vertices[d][2]),d++):this.vertexCodes[b]===g.BREAK&&(a.breakShape=!0)}a.endShape(this.close?g.CLOSE:g.OPEN)}},drawGeometry:function(a){var b,c;a.beginShape(this.kind);if(this.style)for(b=0,c=this.vertices.length;b<c;b++)a.vertex(this.vertices[b]);else for(b=0,c=this.vertices.length;b<c;b++){var d=this.vertices[b];0===d[2]?a.vertex(d[0],
d[1]):a.vertex(d[0],d[1],d[2])}a.endShape()},drawGroup:function(a){for(var b=0,c=this.children.length;b<c;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===g.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===g.LINE)4===this.params.length?a.line(this.params[0],this.params[1],this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===g.TRIANGLE)a.triangle(this.params[0],this.params[1],
this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===g.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===g.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(g.CORNER);a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(g.CORNER),a.rect(this.params[0],this.params[1],this.params[2],
this.params[3]),a.curRectMode=b;else this.kind===g.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(g.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===g.ARC?(b=curEllipseMode,a.ellipseMode(g.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]),curEllipseMode=b):this.kind===g.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===g.SPHERE&&
a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,c;if("number"===typeof a)return this.children[a];var d;
if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(c=this.nameTable.length;b<c||d;b++)if(this.nameTable[b].getName===a){d=this.nameTable[b];break}if(d)return d}b=0;for(c=this.children.length;b<c;b++)if(d=this.children[b].getChild(a))return d;return null},getChildCount:function(){return this.children.length},addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):
this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new k:new n:3===a&&this.matrix instanceof k&&(this.matrix=new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?
(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===
arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],
arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return h}},{}],17:[function(C,z,V){z.exports=function(h){var g=h.CommonFunctions,k=h.PConstants,n=h.PShape,a=h.XMLElement,b=h.colors,c=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=k.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=k.SQUARE,this.strokeJoin=k.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=
null,this.strokeOpacity=1,this.fill=!0,this.fillColor=k.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=k.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=k.SQUARE,
this.strokeJoin=k.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=k.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,
this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));
this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var d=this.element.getAttribute("transform");d&&(this.matrix=this.parseMatrix(d));d=this.element.getStringAttribute("viewBox");null!==d&&(d=d.split(" "),this.width=d[2],this.height=d[3]);var d=this.element.getStringAttribute("width"),c=this.element.getStringAttribute("height");if(null!==d)this.width=this.parseUnitSize(d),this.height=this.parseUnitSize(c);else if(0===this.width||
0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};c.prototype=new n;c.prototype.parseMatrix=function(){function d(d){var a=[];d.replace(/\((.*?)\)/,function(){return function(d,e){a=e.replace(/,+/g," ").split(/\s+/)}}());return a}return function(a){this.checkMatrix(2);var c=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(d){c.push(g.trim(d))});if(0===c.length)return null;
a=0;for(var b=c.length;a<b;a++){var e=d(c[a]);if(-1!==c[a].indexOf("matrix"))this.matrix.set(e[0],e[2],e[4],e[1],e[3],e[5]);else if(-1!==c[a].indexOf("translate"))this.matrix.translate(e[0],2===e.length?e[1]:0);else if(-1!==c[a].indexOf("scale"))this.matrix.scale(e[0],2===e.length?e[1]:e[0]);else if(-1!==c[a].indexOf("rotate")){var h=e[0];1===e.length?this.matrix.rotate(g.radians(h)):3===e.length&&(this.matrix.translate(e[1],e[2]),this.matrix.rotate(g.radians(e[0])),this.matrix.translate(-e[1],-e[2]))}else-1!==
c[a].indexOf("skewX")?this.matrix.skewX(parseFloat(e[0])):-1!==c[a].indexOf("skewY")?this.matrix.skewY(e[0]):-1!==c[a].indexOf("shearX")?this.matrix.shearX(e[0]):-1!==c[a].indexOf("shearY")&&this.matrix.shearY(e[0])}return this.matrix}}();c.prototype.parseChildren=function(d){d=d.getChildren();var a=new n,c,b;c=0;for(b=d.length;c<b;c++){var e=this.parseChild(d[c]);e&&a.addChild(e)}c=0;for(b=a.children.length;c<b;c++)this.children.push(a.children[c])};c.prototype.getName=function(){return this.name};
c.prototype.parseChild=function(d){var a=d.getName(),b;"g"===a?b=new c(this,d):"defs"===a?b=new c(this,d):"line"===a?(b=new c(this,d),b.parseLine()):"circle"===a?(b=new c(this,d),b.parseEllipse(!0)):"ellipse"===a?(b=new c(this,d),b.parseEllipse(!1)):"rect"===a?(b=new c(this,d),b.parseRect()):"polygon"===a?(b=new c(this,d),b.parsePoly(!0)):"polyline"===a?(b=new c(this,d),b.parsePoly(!1)):"path"===a?(b=new c(this,d),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):
"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};c.prototype.parsePath=function(){this.family=k.PATH;this.kind=0;var d=g.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==d)for(var d=d.split(""),a=0,c=
0,b=0,e=0,h=e=b=0,n=0,H=0,E=0,O=E=e=H=b=0,u=0,ka="",v=[],z=!1,C,R,y;O<d.length;)if(u=d[O].charCodeAt(0),65<=u&&90>=u||97<=u&&122>=u){y=O;O++;if(O<d.length)for(v=[],u=d[O].charCodeAt(0);!(65<=u&&90>=u||97<=u&&100>=u||102<=u&&122>=u)&&!1===z;)32===u?""!==ka&&(v.push(parseFloat(ka)),ka=""):45===u?101===d[O-1].charCodeAt(0)?ka+=d[O].toString():(""!==ka&&v.push(parseFloat(ka)),ka=d[O].toString()):ka+=d[O].toString(),O++,O===d.length?z=!0:u=d[O].charCodeAt(0);""!==ka&&(v.push(parseFloat(ka)),ka="");R=d[y];
u=R.charCodeAt(0);if(77===u){if(2<=v.length&&0===v.length%2&&(a=v[0],c=v[1],this.parsePathMoveto(a,c),2<v.length))for(y=2,u=v.length;y<u;y+=2)a=v[y],c=v[y+1],this.parsePathLineto(a,c)}else if(109===u){if(2<=v.length&&0===v.length%2&&(a+=v[0],c+=v[1],this.parsePathMoveto(a,c),2<v.length))for(y=2,u=v.length;y<u;y+=2)a+=v[y],c+=v[y+1],this.parsePathLineto(a,c)}else if(76===u){if(2<=v.length&&0===v.length%2)for(y=0,u=v.length;y<u;y+=2)a=v[y],c=v[y+1],this.parsePathLineto(a,c)}else if(108===u){if(2<=v.length&&
0===v.length%2)for(y=0,u=v.length;y<u;y+=2)a+=v[y],c+=v[y+1],this.parsePathLineto(a,c)}else if(72===u)for(y=0,u=v.length;y<u;y++)a=v[y],this.parsePathLineto(a,c);else if(104===u)for(y=0,u=v.length;y<u;y++)a+=v[y],this.parsePathLineto(a,c);else if(86===u)for(y=0,u=v.length;y<u;y++)c=v[y],this.parsePathLineto(a,c);else if(118===u)for(y=0,u=v.length;y<u;y++)c+=v[y],this.parsePathLineto(a,c);else if(67===u){if(6<=v.length&&0===v.length%6)for(y=0,u=v.length;y<u;y+=6)b=v[y],h=v[y+1],e=v[y+2],n=v[y+3],H=
v[y+4],E=v[y+5],this.parsePathCurveto(b,h,e,n,H,E),a=H,c=E}else if(99===u){if(6<=v.length&&0===v.length%6)for(y=0,u=v.length;y<u;y+=6)b=a+v[y],h=c+v[y+1],e=a+v[y+2],n=c+v[y+3],H=a+v[y+4],E=c+v[y+5],this.parsePathCurveto(b,h,e,n,H,E),a=H,c=E}else if(83===u){if(4<=v.length&&0===v.length%4)for(y=0,u=v.length;y<u;y+=4)"c"===C.toLowerCase()||"s"===C.toLowerCase()?(b=this.vertices[this.vertices.length-2][0],H=this.vertices[this.vertices.length-2][1],e=this.vertices[this.vertices.length-1][0],E=this.vertices[this.vertices.length-
1][1],b=e+(e-b),h=E+(E-H)):(b=this.vertices[this.vertices.length-1][0],h=this.vertices[this.vertices.length-1][1]),e=v[y],n=v[y+1],H=v[y+2],E=v[y+3],this.parsePathCurveto(b,h,e,n,H,E),a=H,c=E}else if(115===u){if(4<=v.length&&0===v.length%4)for(y=0,u=v.length;y<u;y+=4)"c"===C.toLowerCase()||"s"===C.toLowerCase()?(b=this.vertices[this.vertices.length-2][0],H=this.vertices[this.vertices.length-2][1],e=this.vertices[this.vertices.length-1][0],E=this.vertices[this.vertices.length-1][1],b=e+(e-b),h=E+(E-
H)):(b=this.vertices[this.vertices.length-1][0],h=this.vertices[this.vertices.length-1][1]),e=a+v[y],n=c+v[y+1],H=a+v[y+2],E=c+v[y+3],this.parsePathCurveto(b,h,e,n,H,E),a=H,c=E}else if(81===u){if(4<=v.length&&0===v.length%4)for(y=0,u=v.length;y<u;y+=4)b=v[y],e=v[y+1],H=v[y+2],E=v[y+3],this.parsePathQuadto(a,c,b,e,H,E),a=H,c=E}else if(113===u){if(4<=v.length&&0===v.length%4)for(y=0,u=v.length;y<u;y+=4)b=a+v[y],e=c+v[y+1],H=a+v[y+2],E=c+v[y+3],this.parsePathQuadto(a,c,b,e,H,E),a=H,c=E}else if(84===
u){if(2<=v.length&&0===v.length%2)for(y=0,u=v.length;y<u;y+=2)"q"===C.toLowerCase()||"t"===C.toLowerCase()?(b=this.vertices[this.vertices.length-2][0],H=this.vertices[this.vertices.length-2][1],e=this.vertices[this.vertices.length-1][0],E=this.vertices[this.vertices.length-1][1],b=e+(e-b),e=E+(E-H)):(b=a,e=c),H=v[y],E=v[y+1],this.parsePathQuadto(a,c,b,e,H,E),a=H,c=E}else if(116===u){if(2<=v.length&&0===v.length%2)for(y=0,u=v.length;y<u;y+=2)"q"===C.toLowerCase()||"t"===C.toLowerCase()?(b=this.vertices[this.vertices.length-
2][0],H=this.vertices[this.vertices.length-2][1],e=this.vertices[this.vertices.length-1][0],E=this.vertices[this.vertices.length-1][1],b=e+(e-b),e=E+(E-H)):(b=a,e=c),H=a+v[y],E=c+v[y+1],this.parsePathQuadto(a,c,b,e,H,E),a=H,c=E}else if(90===u||122===u)this.close=!0;C=R.toString()}else O++};c.prototype.parsePathQuadto=function(a,c,b,g,e,h){if(0<this.vertices.length)this.parsePathCode(k.BEZIER_VERTEX),this.parsePathVertex(a+2*(b-a)/3,c+2*(g-c)/3),this.parsePathVertex(e+2*(b-e)/3,h+2*(g-h)/3),this.parsePathVertex(e,
h);else throw"Path must start with M/m";};c.prototype.parsePathCurveto=function(a,c,b,g,e,h){if(0<this.vertices.length)this.parsePathCode(k.BEZIER_VERTEX),this.parsePathVertex(a,c),this.parsePathVertex(b,g),this.parsePathVertex(e,h);else throw"Path must start with M/m";};c.prototype.parsePathLineto=function(a,c){if(0<this.vertices.length)this.parsePathCode(k.VERTEX),this.parsePathVertex(a,c),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};c.prototype.parsePathMoveto=
function(a,c){0<this.vertices.length&&this.parsePathCode(k.BREAK);this.parsePathCode(k.VERTEX);this.parsePathVertex(a,c);this.vertices[this.vertices.length-1].moveTo=!0};c.prototype.parsePathVertex=function(a,c){var b=[];b[0]=a;b[1]=c;this.vertices.push(b)};c.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};c.prototype.parsePoly=function(a){this.family=k.PATH;this.close=a;a=g.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%
2)for(var c=0,b=a.length;c<b;c++){var h=[];h[0]=a[c];h[1]=a[++c];this.vertices.push(h)}else throw"Error parsing polygon points: odd number of coordinates provided";};c.prototype.parseRect=function(){this.kind=k.RECT;this.family=k.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";
};c.prototype.parseEllipse=function(a){this.kind=k.ELLIPSE;this.family=k.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var c;if(a){if(a=c=this.element.getFloatAttribute("r"),0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),c=this.element.getFloatAttribute("ry"),0>a||0>c)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";
this.params[0]-=a;this.params[1]-=c;this.params[2]=2*a;this.params[3]=2*c};c.prototype.parseLine=function(){this.kind=k.LINE;this.family=k.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};c.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&
this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var c=0,b=a.length;c<b;c++){var h=g.trim(a[c].split(":"));
"fill"===h[0]?this.setFill(h[1]):"fill-opacity"===h[0]?this.setFillOpacity(h[1]):"stroke"===h[0]?this.setStroke(h[1]):"stroke-width"===h[0]?this.setStrokeWeight(h[1]):"stroke-linecap"===h[0]?this.setStrokeCap(h[1]):"stroke-linejoin"===h[0]?this.setStrokeJoin(h[1]):"stroke-opacity"===h[0]?this.setStrokeOpacity(h[1]):"opacity"===h[0]&&this.setOpacity(h[1])}}};c.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};c.prototype.setFill=
function(a){var c=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=c|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=c|this.parseRGB(a)):0===a.indexOf("url(#")?this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=c|parseInt(b[a].substring(1),16)&16777215)};c.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&
16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};c.prototype.setStroke=function(a){var c=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=c|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=c|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=c|parseInt(b[a].substring(1),
16)&16777215)};c.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};c.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=k.MITER:"round"===a?this.strokeJoin=k.ROUND:"bevel"===a&&(this.strokeJoin=k.BEVEL)};c.prototype.setStrokeCap=function(a){"butt"===a?this.strokeCap=k.SQUARE:"round"===a?this.strokeCap=k.ROUND:"square"===a&&(this.strokeCap=k.PROJECT)};c.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<
24|this.strokeColor&16777215};c.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};c.prototype.parseUnitSize=function(a){var c=a.length-2;return 0>c?a:a.indexOf("pt")===c?1.25*parseFloat(a.substring(0,c)):a.indexOf("pc")===c?15*parseFloat(a.substring(0,c)):a.indexOf("mm")===c?3.543307*parseFloat(a.substring(0,c)):a.indexOf("cm")===c?35.43307*parseFloat(a.substring(0,c)):a.indexOf("in")===c?90*parseFloat(a.substring(0,c)):a.indexOf("px")===
c?parseFloat(a.substring(0,c)):parseFloat(a)};return c}},{}],18:[function(C,z,V){z.exports=function(h,g){function k(a,d,b){this.x=a||0;this.y=d||0;this.z=b||0}function n(a){return function(d,b){var g=d.get();g[a](b);return g}}var a=h.PConstants;k.fromAngle=function(a,d){if(d===g||null===d)d=new k;d.x=Math.cos(a);d.y=Math.sin(a);return d};k.random2D=function(c){return k.fromAngle(Math.random()*a.TWO_PI,c)};k.random3D=function(c){var d=Math.random()*a.TWO_PI,b=2*Math.random()-1,q=Math.sqrt(1-b*b),h=
q*Math.cos(d),d=q*Math.sin(d);c===g||null===c?c=new k(h,d,b):c.set(h,d,b);return c};k.dist=function(a,d){return a.dist(d)};k.dot=function(a,d){return a.dot(d)};k.cross=function(a,d){return a.cross(d)};k.sub=function(a,d){return new k(a.x-d.x,a.y-d.y,a.z-d.z)};k.angleBetween=function(a,d){return Math.acos(a.dot(d)/Math.sqrt(a.magSq()*d.magSq()))};k.lerp=function(a,d,b){a=new k(a.x,a.y,a.z);a.lerp(d,b);return a};k.prototype={set:function(a,d,b){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||
0,a.z||a[2]||0):(this.x=a,this.y=d,this.z=b)},get:function(){return new k(this.x,this.y,this.z)},mag:function(){var a=this.x,d=this.y,b=this.z;return Math.sqrt(a*a+d*d+b*b)},magSq:function(){var a=this.x,d=this.y,b=this.z;return a*a+d*d+b*b},setMag:function(a,d){if(d===g)d=a,this.normalize(),this.mult(d);else return a.normalize(),a.mult(d),a},add:function(a,d,b){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):2===arguments.length?(this.x+=a,this.y+=d):(this.x+=a,this.y+=d,this.z+=b)},sub:function(a,
d,b){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):2===arguments.length?(this.x-=a,this.y-=d):(this.x-=a,this.y-=d,this.z-=b)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var d=this.x,b=Math.cos(a);a=Math.sin(a);this.x=b*this.x-a*this.y;this.y=a*d+b*this.y},dist:function(a){var d=this.x-a.x,b=this.y-
a.y;a=this.z-a.z;return Math.sqrt(d*d+b*b+a*a)},dot:function(a,d,b){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*d+this.z*b},cross:function(a){var d=this.x,b=this.y,g=this.z;return new k(b*a.z-a.y*g,g*a.x-a.z*d,d*a.y-a.x*b)},lerp:function(a,d,b,g){var h,e;2===arguments.length?(g=d,h=a.x,e=a.y,b=a.z):(h=a,e=d);this.x+=(h-this.x)*g;this.y+=(e-this.y)*g;this.z+=(b-this.z)*g},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),
this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in k.prototype)k.prototype.hasOwnProperty(b)&&!k.hasOwnProperty(b)&&(k[b]=n(b));return k}},{}],19:[function(C,z,V){z.exports=function(){var h=function(g,h,n,a,b){this.fullName=g||"";this.name=h||"";this.namespace=n||"";this.value=a;this.type=b};h.prototype={getName:function(){return this.name},
getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(g){this.value=g}};return h}},{}],20:[function(C,z,V){z.exports=function(h,g){var k=h.Browser,n=k.ajax,a=k.window.DOMParser,b=h.XMLAttribute,c=function(a,b,c,h){this.attributes=[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";
a&&("string"===typeof a?b===g&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=c,this.lineNr=h):this.parse(b,!0))};c.prototype={parse:function(d,b){var c;try{b&&(d=n(d));c=(new a).parseFromString(d,"text/xml");var g=c.documentElement;if(g)this.parseChildrenRecursive(null,g);else throw"Error loading document";return this}catch(e){throw e;}},parseChildrenRecursive:function(a,g){var h,k,e,n;a?(h=new c(g.nodeName),h.parent=a):(this.fullName=g.localName,this.name=g.nodeName,
h=this);if(3===g.nodeType&&""!==g.textContent)return this.createPCDataElement(g.textContent);if(4===g.nodeType)return this.createCDataElement(g.textContent);if(g.attributes)for(e=0,n=g.attributes.length;e<n;e++)k=g.attributes[e],k=new b(k.getname,k.nodeName,k.namespaceURI,k.nodeValue,k.nodeType),h.attributes.push(k);if(g.childNodes)for(e=0,n=g.childNodes.length;e<n;e++)k=h.parseChildrenRecursive(h,g.childNodes[e]),null!==k&&h.children.push(k);return h},createElement:function(a,b,h,k){return h===g?
new c(a,b):new c(a,b,h,k)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var g=new c;g.type="TEXT";g.content=a;return g},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var c={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},g;for(g in c)Object.hasOwnProperty(c,g)||(a=a.replace(RegExp(g,"g"),c[g]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);
if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof c))return!1;var b,g;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var h,e;b=0;for(g=this.attributes.length;b<g;b++)if(h=this.attributes[b].getName(),e=this.attributes[b].getNamespace(),h=a.findAttribute(h,e),null===h||this.attributes[b].getValue()!==h.getValue()||this.attributes[b].getType()!==
h.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(g=this.children.length;b<g;b++)if(h=this.getChild(b),e=a.getChild(b),!h.equals(e))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?
a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===
arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},
hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var c=this.children[this.children.length-1];if(null===c.getLocalName()){c.setContent(c.getContent()+a.getContent());return}}a.parent=this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),
0);for(var b,c,g=0,e=this.getChildCount();g<e;g++)if(b=this.getChild(g),c=b.getName(),null!==c&&c===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),0);for(var a=[],b,c,g=0,e=this.getChildCount();g<e;g++)b=this.getChild(g),c=b.getName(),null!==c&&c===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},
getChildRecursive:function(a,b){if(b===a.length)return this;for(var c,g,e=a[b],h=0,k=this.getChildCount();h<k;h++)if(c=this.getChild(h),g=c.getName(),null!==g&&g===e)return c.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);for(var c=this.getChildren(a[b]),g=[],e=0;e<c.length;e++)g=g.concat(c[e].getChildrenRecursive(a,b+1));return g},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,c=this.children.length;b<
c;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var c=0,g=this.attributes.length;c<g;c++)if(this.attributes[c].getName()===a&&this.attributes[c].getNamespace()===this.namespace){this.attributes.splice(c,1);break}},removeChild:function(a){if(a)for(var b=0,c=this.children.length;b<c;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,
b){this.namespace=b||"";for(var c=0,g=this.attributes.length;c<g;c++)if(this.attributes[c].getName()===a&&this.attributes[c].getNamespace()===this.namespace)return this.attributes[c];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var c=arguments[0].substring(a+1);(a=this.findAttribute(c,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],c,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?
a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=
arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content||"";if("CDATA"===this.type)return this.cdata||"";var a=this.fullName,b="<"+a,c;for(c=0;c<this.attributes.length;c++)var g=this.attributes[c],
b=b+(" "+g.getName()+'="'+g.getValue()+'"');if(0===this.children.length)b=""===this.content||null===this.content||void 0===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(c=0;c<this.children.length;c++)b+=this.children[c].toString();b+="</"+a+">"}return b}};c.parse=function(a){var b=new c;b.parse(a);return b};return c}},{}],21:[function(C,z,V){z.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",
black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",
darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",
lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",
mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",
peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",
wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],22:[function(C,z,V){z.exports=function(h,g,k){return function(n,a){n.__contains=function(b,c){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==c&&"string"===typeof c&&-1<b.indexOf(c)};n.__replaceAll=function(b,c,d){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):b.replace(RegExp(c,"g"),d)};n.__replaceFirst=function(b,c,d){return"string"!==typeof b?b.replaceFirst.apply(b,
a(arguments)):b.replace(RegExp(c,""),d)};n.__replace=function(b,c,d){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(c instanceof RegExp)return b.replace(c,d);"string"!==typeof c&&(c=c.toString());if(""===c)return b;var g=b.indexOf(c);if(0>g)return b;var h=0,k="";do k+=b.substring(h,g)+d,h=g+c.length;while(0<=(g=b.indexOf(c,h)));return k+b.substring(h)};n.__equals=function(b,c){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):g(b,c)};n.__equalsIgnoreCase=function(b,
c){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===c.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var c=[],d=0,g=b.length;d<g;++d)c[d]=new Char(b.charAt(d));return c};n.__split=function(b,c,d){if("string"!==typeof b)return b.split.apply(b,a(arguments));var g=RegExp(c);if(d===k||1>d)return b.split(g);for(var h=[],n=b,e;-1!==(e=n.search(g))&&h.length<d-1;){var rd=g.exec(n).toString();h.push(n.substring(0,
e));n=n.substring(e+rd.length)}-1===e&&""===n||h.push(n);return h};n.__codePointAt=function(a,c){var d=a.charCodeAt(c),g;return 55296<=d&&56319>=d?(g=a.charCodeAt(c+1),1024*(d-55296)+(g-56320)+65536):d};n.__matches=function(a,c){return RegExp(c).test(a)};n.__startsWith=function(b,c,d){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));d=d||0;return 0>d||d>b.length?!1:""===c||c===b?!0:b.indexOf(c)===d};n.__endsWith=function(b,c){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));
var d=c?c.length:0;return""===c||c===b?!0:b.indexOf(c)===b.length-d};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):h(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],23:[function(C,z,V){z.exports=function(h,g){function k(a,b){var e=a||362436069,c=b||521288629,d=function(){e=36969*(e&65535)+(e>>>16)&4294967295;c=18E3*(c&65535)+(c>>>16)&4294967295;return((e&65535)<<16|c&65535)&4294967295};this.doubleGenerator=function(){var a=
d()/4294967296;return 0>a?1+a:a};this.intGenerator=d}function n(a){function b(a,e,c,d){a&=15;var g=8>a?e:c;e=4>a?c:12===a||14===a?e:d;return(0===(a&1)?g:-g)+(0===(a&2)?e:-e)}function e(a,b,e){b=0===(a&1)?b:e;return 0===(a&2)?-b:b}function c(a,b,e){return b+a*(e-b)}a=a!==g?new k(a,(a<<16)+(a>>16)):k.createRandomized();var d,h,n=new Uint8Array(512);for(d=0;256>d;++d)n[d]=d;for(d=0;256>d;++d){var p=n[h=a.intGenerator()&255];n[h]=n[d];n[d]=p}for(d=0;256>d;++d)n[d+256]=n[d];this.noise3d=function(a,e,d){var g=
Math.floor(a)&255,h=Math.floor(e)&255,k=Math.floor(d)&255;a-=Math.floor(a);e-=Math.floor(e);d-=Math.floor(d);var q=(3-2*a)*a*a,p=(3-2*e)*e*e,H=n[g]+h,da=n[H]+k,H=n[H+1]+k,h=n[g+1]+h,g=n[h]+k,k=n[h+1]+k;return c((3-2*d)*d*d,c(p,c(q,b(n[da],a,e,d),b(n[g],a-1,e,d)),c(q,b(n[H],a,e-1,d),b(n[k],a-1,e-1,d))),c(p,c(q,b(n[da+1],a,e,d-1),b(n[g+1],a-1,e,d-1)),c(q,b(n[H+1],a,e-1,d-1),b(n[k+1],a-1,e-1,d-1))))};this.noise2d=function(a,b){var d=Math.floor(a)&255,g=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);
var h=(3-2*a)*a*a,k=n[d]+g,d=n[d+1]+g;return c((3-2*b)*b*b,c(h,e(n[k],a,b),e(n[d],a-1,b)),c(h,e(n[k+1],a,b-1),e(n[d+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return c((3-2*a)*a*a,0===(n[b]&1)?-a:a,0===(n[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};h.abs=Math.abs;h.ceil=Math.ceil;h.exp=Math.exp;h.floor=Math.floor;h.log=Math.log;h.pow=Math.pow;h.round=Math.round;h.sqrt=Math.sqrt;h.acos=Math.acos;h.asin=Math.asin;h.atan=Math.atan;h.atan2=Math.atan2;
h.cos=Math.cos;h.sin=Math.sin;h.tan=Math.tan;h.constrain=function(a,b,e){return a>e?e:a<b?b:a};h.dist=function(){var a,b,e;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],e=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+e*e)};h.lerp=function(a,b,e){return(b-a)*e+a};h.mag=function(a,b,e){return e?Math.sqrt(a*a+b*b+e*e):Math.sqrt(a*a+b*b)};h.map=function(a,b,
e,c,d){return c+(d-c)*((a-b)/(e-b))};h.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],e=a.length,c=1;c<e;++c)b<a[c]&&(b=a[c]);return b};h.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";
for(var b=a[0],e=a.length,c=1;c<e;++c)b>a[c]&&(b=a[c]);return b};h.norm=function(a,b,e){return(a-b)/(e-b)};h.sq=function(a){return a*a};h.degrees=function(a){return 180*a/Math.PI};h.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],c=arguments[1];return a()*(c-b)+b};k.createRandomized=function(){var a=new Date;return new k(a/6E4&4294967295,a&4294967295)};h.randomSeed=function(b){a=(new k(b,(b<<16)+(b>>16))).doubleGenerator;this.haveNextNextGaussian=
!1};h.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,c,e;do b=2*a()-1,c=2*a()-1,e=b*b+c*c;while(1<=e||0===e);e=Math.sqrt(-2*Math.log(e)/e);this.nextNextGaussian=c*e;this.haveNextNextGaussian=!0;return b*e};var b=g,c=4,d=0.5,p=g;h.noise=function(a,h,e){b===g&&(b=new n(p));for(var k=b,da=1,H=1,E=0,O=0;O<c;++O){da*=d;switch(arguments.length){case 1:E+=da*(1+k.noise1d(H*a))/2;break;case 2:E+=da*(1+k.noise2d(H*a,H*h))/2;break;case 3:E+=
da*(1+k.noise3d(H*a,H*h,H*e))/2}H*=2}return E};h.noiseDetail=function(a,b){c=a;b!==g&&(d=b)};h.noiseSeed=function(a){p=a;b=g}}},{}],24:[function(C,z,V){z.exports=function(h){var g={trim:function(g){if(g instanceof Array){for(var h=[],a=0;a<g.length;a++)h.push(g[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return h}return g.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")},radians:function(g){return g/180*Math.PI},nfCoreScalar:function(g,n,a,b,c,d){n=0>g?a:n;a=0===c;c=c===h||
0>c?0:c;g=Math.abs(g);if(a)for(c=1,g*=10;1E-6<Math.abs(Math.round(g)-g)&&7>c;)++c,g*=10;else 0!==c&&(g*=Math.pow(10,c));a=2*g;Math.floor(g)===g?a=g:Math.floor(a)===a?(g=Math.floor(g),a=g+g%2):a=Math.round(g);g="";for(b+=c;0<b||0<a;)b--,g=""+a%10+g,a=Math.floor(a/10);if(d!==h)for(b=g.length-3-c;0<b;)g=g.substring(0,b)+d+g.substring(b),b-=3;return 0<c?n+g.substring(0,g.length-c)+"."+g.substring(g.length-c,g.length):n+g},nfCore:function(h,n,a,b,c,d){if(h instanceof Array){for(var p=[],q=0,T=h.length;q<
T;q++)p.push(g.nfCoreScalar(h[q],n,a,b,c,d));return p}return g.nfCoreScalar(h,n,a,b,c,d)},nf:function(h,n,a){return g.nfCore(h,"","-",n,a)},nfs:function(h,n,a){return g.nfCore(h," ","-",n,a)},nfp:function(h,n,a){return g.nfCore(h,"+","-",n,a)},nfc:function(h,n){return g.nfCore(h,"","-",0,n,",")},withCommonFunctions:function(h){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){h[n]=g[n]})}};return g}()},{}],25:[function(C,z,V){z.exports=function(h,g,k,n,a,b){function c(a,b){var c=a,d=0,
g=0;h.pmouseX=h.mouseX;h.pmouseY=h.mouseY;if(c.offsetParent){do d+=c.offsetLeft,g+=c.offsetTop;while(c=c.offsetParent)}c=a;do d-=c.scrollLeft||0,g-=c.scrollTop||0;while(c=c.parentNode);var k,p,q,z;n.defaultView&&n.defaultView.getComputedStyle&&(k=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,q=parseInt(n.defaultView.getComputedStyle(a,null).borderLeftWidth,10)||0,z=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,
10)||0);d=d+k+q;g=g+p+z;d+=window.pageXOffset;g+=window.pageYOffset;return{X:d,Y:g}}function d(a,b){var d=c(a,b);h.mouseX=b.pageX-d.X;h.mouseY=b.pageY-d.Y}function p(a){var b=c(a.changedTouches[0].target,a.changedTouches[0]),d;for(d=0;d<a.touches.length;d++){var g=a.touches[d];g.offsetX=g.pageX-b.X;g.offsetY=g.pageY-b.Y}for(d=0;d<a.targetTouches.length;d++)g=a.targetTouches[d],g.offsetX=g.pageX-b.X,g.offsetY=g.pageY-b.Y;for(d=0;d<a.changedTouches.length;d++)g=a.changedTouches[d],g.offsetX=g.pageX-
b.X,g.offsetY=g.pageY-b.Y;return a}k(g,"touchstart",function(c){g.setAttribute("style","-webkit-user-select: none");g.setAttribute("onclick","void(0)");g.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var e=0,n=eventHandlers.length;e<n;e++){var q=eventHandlers[e].type;"mouseout"!==q&&"mousemove"!==q&&"mousedown"!==q&&"mouseup"!==q&&"DOMMouseScroll"!==q&&"mousewheel"!==q&&"touchstart"!==q||detachEventHandler(eventHandlers[e])}h.touchStart!==b||h.touchMove!==b||h.touchEnd!==b||
h.touchCancel!==b?(k(g,"touchstart",function(a){h.touchStart!==b&&(a=p(a),h.touchStart(a))}),k(g,"touchmove",function(a){h.touchMove!==b&&(a.preventDefault(),a=p(a),h.touchMove(a))}),k(g,"touchend",function(a){h.touchEnd!==b&&(a=p(a),h.touchEnd(a))}),k(g,"touchcancel",function(a){h.touchCancel!==b&&(a=p(a),h.touchCancel(a))})):(k(g,"touchstart",function(b){d(g,b.touches[0]);h.__mousePressed=!0;h.mouseDragging=!1;h.mouseButton=a.LEFT;"function"===typeof h.mousePressed&&h.mousePressed()}),k(g,"touchmove",
function(a){a.preventDefault();d(g,a.touches[0]);"function"!==typeof h.mouseMoved||h.__mousePressed||h.mouseMoved();"function"===typeof h.mouseDragged&&h.__mousePressed&&(h.mouseDragged(),h.mouseDragging=!0)}),k(g,"touchend",function(a){h.__mousePressed=!1;"function"!==typeof h.mouseClicked||h.mouseDragging||h.mouseClicked();"function"===typeof h.mouseReleased&&h.mouseReleased()}));g.dispatchEvent(c)});(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};h.disableContextMenu=
function(){a&&(k(g,"contextmenu",b),a=!1)};h.enableContextMenu=function(){a||(detachEventHandler({elem:g,type:"contextmenu",fn:b}),a=!0)}})();k(g,"mousemove",function(a){d(g,a);"function"!==typeof h.mouseMoved||h.__mousePressed||h.mouseMoved();"function"===typeof h.mouseDragged&&h.__mousePressed&&(h.mouseDragged(),h.mouseDragging=!0)});k(g,"mouseout",function(a){"function"===typeof h.mouseOut&&h.mouseOut()});k(g,"mouseover",function(a){d(g,a);"function"===typeof h.mouseOver&&h.mouseOver()});g.onmousedown=
function(){g.focus();return!1};k(g,"mousedown",function(b){h.__mousePressed=!0;h.mouseDragging=!1;switch(b.which){case 1:h.mouseButton=a.LEFT;break;case 2:h.mouseButton=a.CENTER;break;case 3:h.mouseButton=a.RIGHT}"function"===typeof h.mousePressed&&h.mousePressed()});k(g,"mouseup",function(a){h.__mousePressed=!1;"function"!==typeof h.mouseClicked||h.mouseDragging||h.mouseClicked();"function"===typeof h.mouseReleased&&h.mouseReleased()});var q=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&
(b=-b)):a.detail&&(b=-a.detail/3);(h.mouseScroll=b)&&"function"===typeof h.mouseScrolled&&h.mouseScrolled()};k(n,"DOMMouseScroll",q);k(n,"mousewheel",q)}},{}],26:[function(C,z,V){z.exports=function(h,g){function k(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt parseXML peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
d&&Object.keys(d).forEach(function(b){a.push(b)});var b={},c,g;c=0;for(g=a.length;c<g;++c)b[a[c]]=null;for(var k in h.lib)if(h.lib.hasOwnProperty(k)&&h.lib[k].exports){var n=h.lib[k].exports;c=0;for(g=n.length;c<g;++c)b[n[c]]=null}return b}function n(a){function d(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function g(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,d=b.length;c<d;++c)a[b[c]]=null;return a}function n(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function p(a){return a.substring(2,a.length-1)}function u(a,b){var c=Q.length;Q.push(a);return'"'+b+c+'"'}function z(a){a=a.replace(va,function(a){return u(a,"E")});a=a.replace(qa,function(a){return u(a,"D")});return a=a.replace(mb,function(a){return u(a,"H")})}function v(a,b){return a.replace(Hb,function(a,c,d,f,e,g){return d!==b?a:u(a,
"G")})}function C(a){this.name=a}function T(a,b){this.params=a;this.methodArgsParam=b}function R(a){var b=g(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),d=0;d<b.length;++d){var f=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[d]);if(d===b.length-1&&0<=b[d].indexOf("...")){c=new C(f[1]);break}a.push(new C(f[1]))}return new T(a,c)}function y(a){function b(a,c,e,g){a=Q[g];f=!0;a=d(a.substring(1,a.length-1));return"__"+e+(""===a.middle?u("("+c.replace(/\.\s*$/,"")+
")","B"):u("("+c.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function c(a,b,d){f=!0;return"__instanceof"+u("("+b+", "+d+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return u(a,"F")});a=a.replace(mb,function(a){return u(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return Q[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+u(a,"A")+")";return"$p.createJavaArray"+u(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=Q[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(Q[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var c=d(b);return c.untrim("__int_cast("+c.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,d,f,e){return c?(a=Q[d],f?"pixels.setPixel"+u("("+a.substring(1,a.length-1)+","+e+")","B"):"pixels.getPixel"+u("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
u("()","B"):f?"pixels.set"+u("("+e+")","B"):"pixels.toArray"+u("()","B")});var f;do f=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(f);do f=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
c);while(f);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function V(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function sd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=na;var c="class"+ ++db;na=c;var d=b[1]+"$"+c,b=new V(d,ia(Q[b[2]],d,"","implements "+b[1]));b.classId=c;b.scopeId=a;ba[c]=b;na=a;return b}function pc(a,b,c){this.name=a;this.params=b;this.body=c}function Y(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new pc("function"!==a[1]?a[1]:null,R(Q[a[2]]),oa(Q[a[3]]))}function ca(a){this.members=a}function Z(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ra(a[b])}:{label:g(a[b].substring(0,c)),value:ra(g(a[b].substring(c+1)))}}return new ca(a)}function ea(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+ea(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+u(a.substring(1,
a.length-1),"I")+"}":"["+ea(a.substring(1,a.length-1))+"]";a=d(a);var b=y(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return ea(Q[b])});return a.untrim(b)}function wa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,d,f,e){return b?a:D({name:c,member:f,callSign:!!e})+(d===q?"":d)})}function xa(a,b){this.expr=a;this.transforms=b}function ac(a,b,c){this.name=a;this.value=b;this.isDefault=c}function eb(a,b){var c=a.indexOf("="),d,f;
0>c?(d=a,c=b,f=!0):(d=a.substring(0,c),c=ra(a.substring(c+1)),f=!1);return new ac(g(d.replace(/(\s*"C\d+")+/g,"")),c,f)}function Va(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function fb(a,b){this.definitions=a;this.varType=b}function Ib(a){this.expression=a}function gb(a){if(Jb.test(a)){var b=xb.exec(a);a=a.substring(b[0].length).split(",");for(var c=Va(b[2]),d=0;d<a.length;++d)a[d]=eb(a[d],c);return new fb(a,b[2])}return new Ib(ra(a))}function Kb(a,
b,c){this.initStatement=a;this.condition=b;this.step=c}function Lb(a,b){this.initStatement=a;this.container=b}function Aa(a,b){this.initStatement=a;this.container=b}function Da(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Lb(gb(g(a[0])),ra(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new Aa(gb(g(a[0])),ra(a[1]));a=a.substring(1,a.length-1).split(";");return new Kb(gb(g(a[0])),ra(a[1]),ra(a[2]))}function Wa(a){a.sort(function(a,
b){return b.weight-a.weight})}function Ma(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Mb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Nb(a){var b=va.exec(a);va.lastIndex=0;var c=0<=b[1].indexOf("static"),d=Q[p(b[6])];a=na;var f="class"+ ++db;na=f;b="interface"===b[2]?new Ma(b[3],hb(d,b[3],b[4]),c):new Mb(b[3],ia(d,b[3],b[4],b[5]),c);b.classId=f;b.scopeId=a;ba[f]=b;na=a;return b}function Ob(a,b,c,d){this.name=a;this.params=b;this.body=c;this.isStatic=
d}function ib(a){a=qa.exec(a);qa.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?Q[p(a[6])]:"{}";return new Ob(a[3],R(Q[p(a[4])]),oa(c),b)}function Pb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Xa(a){var b=xb.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var d=Va(b[2]),f=0;f<a.length;++f)a[f]=eb(a[f],d);return new Pb(a,b[2],c)}function Qb(a,b){this.params=a;this.body=b}function bc(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=
R(Q[a[1]]);return new Qb(b,oa(Q[a[2]]))}function Na(a,b,c,d,f,e){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=d;this.innerClasses=f;this.misc=e;a=0;for(b=d.length;a<b;++a)d[a].owner=this}function I(a,b,c,d,f,e,g,h,m){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=d;this.methods=f;this.fields=e;this.cstrs=g;this.innerClasses=h;this.misc=m;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function ob(a,b){this.name=a;this.body=b;b.owner=this}function pb(a,b){this.name=
a;this.body=b;b.owner=this}function Rb(a){var b=va.exec(a);va.lastIndex=0;var c=Q[p(b[6])];a=na;var d="class"+ ++db;na=d;b="interface"===b[2]?new ob(b[3],hb(c,b[3],b[4])):new pb(b[3],ia(c,b[3],b[4],b[5]));b.classId=d;b.scopeId=a;ba[d]=b;na=a;return b}function yb(a,b,c){this.name=a;this.params=b;this.body=c}function uc(a){a=qa.exec(a);qa.lastIndex=0;return new yb(a[3],R(Q[p(a[4])]),oa(Q[p(a[6])]))}function Sb(a,b){this.argument=a;this.misc=b}function cc(a,b){this.argument=a;this.misc=b}function X(a,
b,c){this.name=a;this.argument=b;this.misc=c}function Tb(a){this.expr=a}function zb(a){this.label=a}function f(a){for(var b=[],c=0,d=a.length;c<d;++c){var f=a[c];f instanceof fb?b=b.concat(f.getNames()):f instanceof Sb&&f.argument.initStatement instanceof fb?b=b.concat(f.argument.initStatement.getNames()):(f instanceof Ma||f instanceof Mb||f instanceof ob||f instanceof pb||f instanceof yb||f instanceof pc)&&b.push(f.name)}return h({},b)}function m(a){this.statements=a}function ha(a){this.statements=
a}var la=k(),W=[];a=a.replace(/\r\n?|\n\r/g,"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,d,f,e,g,h){return b||c?(b=W.length,W.push(a),"'"+b+"'"):d?(b=W.length,W.push(e),f+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var pa,Oa=function(a,
b,c,d){if(b||d)return a;pa=!0;return""};do pa=!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,Oa);while(pa);var Q=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],d=[],f=1;f<a.length;f+=2){var e=
a[f];if("["===e||"{"===e||"("===e)d.push(c),c=e;else if("]"===e||"}"===e||")"===e){var g="}"===e?"A":")"===e?"B":"C",h=b.length;b.push(c+e);c=d.pop()+'"'+g+(h+1)+'"'}c+=a[f+1]}b.unshift(c);return b}(a),D,ba={},na,db=0,ia,hb,oa,Ha,ra,va=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
qa=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Jb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Hb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,xb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,mb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;C.prototype.toString=function(){return this.name};
T.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};T.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};T.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};V.prototype.toString=
function(){return"new ("+this.body+")"};pc.prototype.toString=function(){var a=D,b=h({"this":null},this.params.getNames());D=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var d=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+d);D=a;return c};ca.prototype.toString=function(){var a=D;D=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,d=this.members.length;c<d;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";D=a;return b.substring(0,b.length-2)};xa.prototype.toString=function(){var a=this.transforms;return wa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ra=function(a){var b=[];a=ea(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(Y(Q[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(sd(Q[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(Z(Q[c]));return'"!'+(b.length-1)+'"'});
return new xa(a,b)};ac.prototype.toString=function(){return this.name+" = "+this.value};fb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};fb.prototype.toString=function(){return"var "+this.definitions.join(",")};Ib.prototype.toString=function(){return this.expression.toString()};Kb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Lb.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};Aa.iteratorId=0;Aa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+Aa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ma.prototype.toString=function(){return""+this.body};Mb.prototype.toString=function(){return""+this.body};Ob.prototype.toString=
function(){var a=h({},this.params.getNames()),b=D;D=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";D=b;return c};Pb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Pb.prototype.toString=function(){var a=D({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],d=0,f=this.definitions.length;d<f;++d){var e=
this.definitions[d],g=e.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+e.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Qb.prototype.toString=function(){var a=h({},this.params.getNames()),b=D;D=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),d=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(d)||(d="{\n$superCstr();\n"+d.substring(1));D=b;return c+d+"\n"};Na.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var d,f,e,g;d=0;for(e=this.fields.length;d<e;++d){var h=this.fields[d].getNames();f=0;for(g=h.length;f<g;++f)a[h[f]]=this.fields[d]}d=0;for(e=this.methodsNames.length;d<e;++d)b[this.methodsNames[d]]=!0;d=0;for(e=this.innerClasses.length;d<e;++d)a=this.innerClasses[d],c[a.name]=a};Na.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var d,f;if(this.owner.interfaces){var e=[],g;d=0;for(f=this.interfacesNames.length;d<f;++d)this.owner.interfaces[d]&&(g=D({name:this.interfacesNames[d]}),e.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+e.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Wa(this.innerClasses);d=0;for(f=this.innerClasses.length;d<f;++d)e=this.innerClasses[d],
e.isStatic&&(b+=a+"."+e.name+" = "+e+";\n");d=0;for(f=this.fields.length;d<f;++d)e=this.fields[d],e.isStatic&&(b+=a+"."+e.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};hb=function(a,b,c){a=a.substring(1,a.length-1);a=z(a);a=v(a,b);var f=[],e=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b&&e.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;c!==q&&(g=c.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));c=0;for(h=f.length;c<h;++c){var m=ib(Q[f[c]]);f[c]=m.name}c=0;for(h=a.length-1;c<h;++c)m=d(a[c]),a[c]=Xa(m.middle);m=a.pop();c=0;for(h=e.length;c<h;++c)e[c]=Nb(Q[e[c]]);return new Na(b,g,f,a,e,{tail:m})};I.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var d,f,e,g;d=0;for(e=this.fields.length;d<e;++d){var h=this.fields[d].getNames();f=0;for(g=h.length;f<g;++f)a[h[f]]=this.fields[d]}d=0;for(e=this.methods.length;d<e;++d)a=this.methods[d],
b[a.name]=a;d=0;for(e=this.innerClasses.length;d<e;++d)b=this.innerClasses[d],c[b.name]=b};I.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",d="",f="",e={},h={},m={};this.getMembers(e,h,m);var k=D;D=function(c){var d=c.name;return"this"===d?c.callSign||!c.member?a+".$self":a:e.hasOwnProperty(d)?e[d].isStatic?b+"."+d:a+"."+d:m.hasOwnProperty(d)?a+"."+d:h.hasOwnProperty(d)?h[d].isStatic?b+"."+d:a+".$self."+
d:k(c)};var n;this.baseClassName?(n=k({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+n+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),f+=b+".$base = "+n+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(d+="$p.extendStaticMembers("+b+", "+n+");\n");var p,q,u;if(this.owner.interfaces){q=[];n=0;for(p=this.interfacesNames.length;n<p;++n)this.owner.interfaces[n]&&(u=k({name:this.interfacesNames[n]}),
q.push(u),d+="$p.extendInterfaceMembers("+b+", "+u+");\n");f+=b+".$interfaces = ["+q.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Wa(this.innerClasses);n=0;for(p=this.innerClasses.length;n<p;++n)q=this.innerClasses[n],q.isStatic?(d+=b+"."+q.name+" = "+q+";\n",c+=a+"."+q.name+" = "+b+"."+q.name+";\n"):c+=a+"."+q.name+" = "+q+";\n";n=0;for(p=this.fields.length;n<p;++n){var y=this.fields[n];if(y.isStatic)for(d+=b+"."+y.definitions.join(";\n"+b+".")+";\n",q=0,u=y.definitions.length;q<
u;++q)var v=y.definitions[q].name,z=b+"."+v,c=c+("$p.defineProperty("+a+", '"+v+"', {get: function(){return "+z+"}, set: function(val){"+z+" = val}});\n");else c+=a+"."+y.definitions.join(";\n"+a+".")+";\n"}q={};n=0;for(p=this.methods.length;n<p;++n)u=this.methods[n],y=q[u.name],v=u.name+"$"+u.params.params.length,z=!!u.params.methodArgsParam,y?(++y,v+="_"+y):y=1,u.methodId=v,q[u.name]=y,u.isStatic?(d+=u,d+="$p.addMethod("+b+", '"+u.name+"', "+v+", "+z+");\n"):c+=u,c+="$p.addMethod("+a+", '"+u.name+
"', "+v+", "+z+");\n";c+=g(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";q=[];n=0;for(p=this.cstrs.length;n<p;++n)u=this.cstrs[n].params.params.length,q.push("if(arguments.length "+(this.cstrs[n].params.methodArgsParam?">=":"===")+" "+u+") { $constr_"+u+".apply("+a+", arguments); }");0<q.length&&(c+=q.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";D=k;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+d+f+
"return "+b+";\n})()"};ia=function(a,b,c,f){a=a.substring(1,a.length-1);a=z(a);a=v(a,b);var e=[],g=[],h=[],m=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?e.push(c):"E"===b?g.push(c):"H"===b?m.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var n,k;c!==q&&(n=c.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));f!==q&&(k=f.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(c=0;c<m.length;++c)m[c]=Y(Q[m[c]]);
for(c=0;c<e.length;++c)e[c]=ib(Q[e[c]]);for(c=0;c<a.length-1;++c)f=d(a[c]),a[c]=Xa(f.middle);f=a.pop();for(c=0;c<h.length;++c)h[c]=bc(Q[h[c]]);for(c=0;c<g.length;++c)g[c]=Nb(Q[g[c]]);return new I(b,n,k,m,e,a,h,g,{tail:f})};ob.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};pb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};yb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=D;D=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";D=b;return c};Sb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};cc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};X.prototype.toString=function(){var a=this.misc.prefix;this.argument!==q&&(a+=this.argument.toString());
return a};Tb.prototype.toString=function(){return"case "+this.expr+":"};zb.prototype.toString=function(){return this.label};Ha=function(a,b,c){var f=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),e=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,m,n;null!==(m=f.exec(a));){if(m[1]!==q)n=a.lastIndexOf('"B',f.lastIndex),h=a.substring(h,
n),"for"===m[1]?e.push(new Sb(Da(Q[m[2]]),{prefix:h})):"catch"===m[1]?e.push(new cc(R(Q[m[2]]),{prefix:h})):e.push(new X(m[1],ra(Q[m[2]]),{prefix:h}));else if(m[3]!==q)e.push(new X(m[3],q,{prefix:a.substring(h,f.lastIndex)}));else if(m[4]!==q){n=a.substring(h,f.lastIndex-m[4].length);if(0!==g(n).length)continue;e.push(n);h=m[4].charAt(1);m=m[5];"D"===h?e.push(b(Q[m])):"E"===h?e.push(c(Q[m])):"H"===h?e.push(Y(Q[m])):e.push(oa(Q[m]))}else if(m[6]!==q)e.push(new Tb(ra(g(m[7]))));else if(m[8]!==q){n=
a.substring(h,f.lastIndex-m[8].length);if(0!==g(n).length)continue;e.push(new zb(a.substring(h,f.lastIndex)))}else m=d(a.substring(h,f.lastIndex-1)),e.push(m.left),e.push(gb(m.middle)),e.push(m.right+";");h=f.lastIndex}b=d(a.substring(h));e.push(b.left);""!==b.middle&&(e.push(gb(b.middle)),e.push(";"+b.right));return e};m.prototype.toString=function(){var a=f(this.statements),b=D;n(a)||(D=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";D=b;return c};
oa=function(a){a=d(a.substring(1,a.length-1));return new m(Ha(a.middle))};ha.prototype.toString=function(){for(var a=[],d=[],e,g=0,h=this.statements.length;g<h;++g)e=this.statements[g],e instanceof pb||e instanceof ob?a.push(e):d.push(e);Wa(a);var m=f(this.statements);D=function(a){a=a.name;return m.hasOwnProperty(a)?a:la.hasOwnProperty(a)||c.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+d.join("")+"\n})";D=null;return a};
a=function(){var a=z(Q[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new ha(Ha(a,uc,Rb))}();(function(a){function b(a,d){for(var f=d.split("."),e=a.scope,g;e;){if(e.hasOwnProperty(f[0])){g=e[f[0]];break}e=e.scope}g===q&&(g=c[f[0]]);for(var e=1,h=f.length;e<h&&g;++e)g=g.inScope[f[e]];return g}var c={},d;for(d in ba)if(ba.hasOwnProperty(d)){a=ba[d];var f=a.scopeId,e=a.name;f?(f=ba[f],a.scope=f,f.inScope===q&&(f.inScope={}),f.inScope[e]=a):c[e]=a}for(d in ba)if(ba.hasOwnProperty(d)){a=ba[d];if(e=a.body.baseClassName)if(e=
b(a,e))a.base=e,e.derived||(e.derived=[]),e.derived.push(a);var e=a.body.interfacesNames,f=[],g,h;if(e&&0<e.length){g=0;for(h=e.length;g<h;++g){var m=b(a,e[g]);f.push(m);m&&(m.derived||(m.derived=[]),m.derived.push(a))}0<f.length&&(a.interfaces=f)}}})(a);(function(a){function b(a,d){var e=c[a];if(!e)return!1;var f=e.indexOf(d);if(0>f)return!1;e.splice(f,1);if(0<e.length)return!1;delete c[a];return!0}a=[];var c={},d,f,e;for(d in ba)if(ba.hasOwnProperty(d))if(e=ba[d],e.inScope||e.derived){var g=[];
if(e.inScope)for(f in e.inScope)e.inScope.hasOwnProperty(f)&&g.push(e.inScope[f]);e.derived&&(g=g.concat(e.derived));c[d]=g}else a.push(d),e.weight=0;for(;0<a.length;)if(d=a.shift(),e=ba[d],e.scopeId&&b(e.scopeId,e)&&(a.push(e.scopeId),ba[e.scopeId].weight=e.weight+1),e.base&&b(e.base.classId,e)&&(a.push(e.base.classId),e.base.weight=e.weight+1),e.interfaces)for(d=0,f=e.interfaces.length;d<f;++d)e.interfaces[d]&&b(e.interfaces[d].classId,e)&&(a.push(e.interfaces[d].classId),e.interfaces[d].weight=
e.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var d=b[c];return"/"===d.charAt(0)?d:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(d)?"(new $p.Character("+d+"))":d})}(a,W)}function a(a,b){var c=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(c&&2===c.length)for(var d=[],c=c.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,
function(){return function(a,b){d.push(b);return"{"+(d.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";"),g=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},h=0,n=c.length;h<n;h++){var k=c[h].split("=");if(k&&2===k.length){var p=g(k[0]),q=g(k[1]),k=[];if("preload"===p)for(k=q.split(","),p=0,q=k.length;p<q;p++){var z=g(k[p]);b.imageCache.add(z)}else if("font"===p)for(k=q.split(","),p=0,q=k.length;p<q;p++){var z=g(k[p]),C=/^\{(\d*?)\}$/.exec(z);PFont.preloading.add(C?
JSON.parse("{"+d[C[1]]+"}"):z)}else"pauseOnBlur"===p?b.options.pauseOnBlur="true"===q:"globalKeyEvents"===p?b.options.globalKeyEvents="true"===q:"param-"===p.substring(0,6)?b.params[p.substring(6)]=q:b.options[p]=q}}return a}var b=g.defaultScope,c=b.PConstants,d=g.aFunctions,p=g.Browser.document,q;h.compile=function(b){var c=new h.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};var z=C("../Helpers/PjsConsole");h.logger=new z(p);return h}},{"../Helpers/PjsConsole":5}],27:[function(C,z,V){z.exports=
function(h,g){function k(a,b){return a in p?p[a]:"function"===typeof p[b]?p[b]:function(a){if(a instanceof Array)return a;if("number"===typeof a){var b=[];b.length=a;return b}}}var n=h.defaultScope,a=h.extend,b=h.Browser,c=b.ajax,d=b.navigator,p=b.window,q=b.document,z=h.noop,e=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var C=p.HTMLCanvasElement,V=p.HTMLImageElement,H;try{H=p.localStorage}catch(E){H=
{}}q.head||(q.head=q.getElementsByTagName("head")[0]);var O=k("Float32Array","WebGLFloatArray"),u=k("Int32Array","WebGLIntArray"),ka=k("Uint16Array","WebGLUnsignedShortArray"),v=k("Uint8Array","WebGLUnsignedByteArray");if(9<=q.documentMode&&!q.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var wb=[],$b={},R=this.Processing=function(b,h,k){function E(a,M,b){a.addEventListener?a.addEventListener(M,b,!1):a.attachEvent("on"+
M,b);zb.push({elem:a,type:M,fn:b})}function Y(a,M,b,c){var d=Ja.locations[a];d===g&&(d=m.getUniformLocation(M,b),Ja.locations[a]=d);null!==d&&(4===c.length?m.uniform4fv(d,c):3===c.length?m.uniform3fv(d,c):2===c.length?m.uniform2fv(d,c):m.uniform1f(d,c))}function ca(a,M,b,c){var d=Ja.locations[a];d===g&&(d=m.getUniformLocation(M,b),Ja.locations[a]=d);null!==d&&(4===c.length?m.uniform4iv(d,c):3===c.length?m.uniform3iv(d,c):2===c.length?m.uniform2iv(d,c):m.uniform1i(d,c))}function Z(a,M,b,c,d){var e=
Ja.locations[a];e===g&&(e=m.getUniformLocation(M,b),Ja.locations[a]=e);-1!==e&&(16===d.length?m.uniformMatrix4fv(e,c,d):9===d.length?m.uniformMatrix3fv(e,c,d):m.uniformMatrix2fv(e,c,d))}function ea(a,M,b,c,d){var e=Ja.attributes[a];e===g&&(e=m.getAttribLocation(M,b),Ja.attributes[a]=e);-1!==e&&(m.bindBuffer(m.ARRAY_BUFFER,d),m.vertexAttribPointer(e,c,m.FLOAT,!1,0,0),m.enableVertexAttribArray(e))}function wa(a,M,b){var c=Ja.attributes[a];c===g&&(c=m.getAttribLocation(M,b),Ja.attributes[a]=c);-1!==
c&&m.disableVertexAttribArray(c)}function xa(a,M,b,c){Ya===e.HSB?(b=f.color.toRGB(a,M,b),a=b[0],M=b[1],b=b[2]):(a=Math.round(255*(a/Ba)),M=Math.round(255*(M/Ia)),b=Math.round(255*(b/Ca)));c=Math.round(255*(c/ma));a=0>a?0:a;M=0>M?0:M;b=0>b?0:b;c=0>c?0:c;return(255<c?255:c)<<24&e.ALPHA_MASK|(255<a?255:a)<<16&e.RED_MASK|(255<M?255:M)<<8&e.GREEN_MASK|(255<b?255:b)&e.BLUE_MASK}function ac(a){if(a<=Ba&&0<=a){if(Ya===e.RGB)return xa(a,a,a,ma);if(Ya===e.HSB)return xa(0,0,a/Ba*Ca,ma)}if(a)return 2147483647<
a&&(a-=4294967296),a}function eb(a){var M,b,c;M=((a&e.RED_MASK)>>>16)/255;b=((a&e.GREEN_MASK)>>>8)/255;c=(a&e.BLUE_MASK)/255;a=f.max(f.max(M,b),c);var d=f.min(f.min(M,b),c);if(d===a)return[0,0,a*Ca];M=(M===a?(b-c)/(a-d):b===a?2+(c-M)/(a-d):4+(M-b)/(a-d))/6;0>M?M+=1:1<M&&(M-=1);return[M*Ba,(a-d)/a*Ia,a*Ca]}function Va(){m.restore();Q=db=!0}function fb(){var a=(Date.now()-wc)/1E3;gc++;var M=gc/a;0.5<a&&(wc=Date.now(),gc=0,f.__frameRate=M);f.frameCount++}function Ib(a){a=parseInt("0x"+a,16);2147483647<
a&&(a-=4294967296);return a}function gb(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Kb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Lb(a,M){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===
typeof a)return parseInt(a,M||10)&4294967295;if(a instanceof Char)return a.code}function Aa(){W&&(Q&&(m.fillStyle=f.color.toString(Oa),Q=!1),m.fill())}function Da(){D&&(db&&(m.strokeStyle=f.color.toString(na),db=!1),m.stroke())}function Wa(){Aa();Da();m.closePath()}function Ma(a,M,b){var c=Rc.shift();c===g&&(c={},c.canvas=q.createElement("canvas"),c.context=c.canvas.getContext("2d"));Rc.push(c);var d=c.canvas,e=c.context;M=M||a.width;b=b||a.height;d.width=M;d.height=b;a?"data"in a?e.putImageData(a,
0,0):(e.clearRect(0,0,M,b),e.drawImage(a,0,0,M,b)):e.clearRect(0,0,M,b);return c}function Mb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&e.ALPHA_MASK|b[L]<<16&e.RED_MASK|b[L+1]<<8&e.GREEN_MASK|b[L+2]&e.BLUE_MASK}}(a),
setPixel:function(a){return function(L,b){var c=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[c+0]=(b&e.RED_MASK)>>>16;d[c+1]=(b&e.GREEN_MASK)>>>8;d[c+2]=b&e.BLUE_MASK;d[c+3]=(b&e.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,c=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<c;d++,f+=4)L.push(b[f+3]<<24&e.ALPHA_MASK|b[f]<<16&e.RED_MASK|b[f+1]<<8&
e.GREEN_MASK|b[f+2]&e.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,c,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";c=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=L[f],b=4*f,c[b+0]=(d&e.RED_MASK)>>>16,c[b+1]=(d&e.GREEN_MASK)>>>8,c[b+2]=d&e.BLUE_MASK,c[b+3]=(d&e.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Nb(a,b,c,d){var fc=new Ka(c,d,e.ARGB);fc.fromImageData(f.toImageData(a,b,c,d));return fc}function Ob(a,b,c,d,f){if(f.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";
var g=new Ka(c,d,e.ARGB),h=g.imageData.data,m=f.width,r=f.height;f=f.imageData.data;var k=Math.max(0,-b),n=Math.max(0,-a);d=Math.min(d,r-b);for(r=Math.min(c,m-a);k<d;++k)for(var p=4*((b+k)*m+(a+n)),q=4*(k*c+n),w=n;w<r;++w)h[q++]=f[p++],h[q++]=f[p++],h[q++]=f[p++],h[q++]=f[p++];g.__isDirty=!0;return g}function ib(){Ub&&(m=Sc,Ub=!1,f.updatePixels())}function Pb(){function a(L,b){L[b]=function(){ib();m[b].apply(m,arguments)}}function b(a,L){f.defineProperty(a,L,{get:function(){ib();return m[L]},set:function(a){ib();
m[L]=a}})}for(var c in m)"function"===typeof m[c]?a(this,c):b(this,c)}function Xa(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():f.nf(a,0,3):null===a||a===g?"":a.toString()}function Qb(a,b,c,d){var f;0>a.indexOf("\n")?(a=[a],f=1):(a=a.split(/\r?\n/g),f=a.length);var g=0;Za===e.TOP?g=$a+Pa:Za===e.CENTER?g=$a/2-(f-1)*Ea/2:Za===e.BOTTOM&&(g=-(Pa+(f-1)*Ea));for(var h=0;h<f;++h)la.text$line(a[h],b,c+g,d,qb),g+=Ea}function bc(a,b,c,d,f,g){if(0!==a.length&&(0!==d&&0!==f)&&!(Qa>
f)){for(var h=-1,m=0,r=0,k=[],n=0,p=a.length;n<p;n++){var q=a[n],w=" "===q,s=ga.measureTextWidth(q);if("\n"!==q&&r+s<=d)w&&(h=n),r+=s;else{if(h+1===m)if(0<n)h=n;else return;"\n"===q?(k.push({text:a.substring(m,n),width:r}),m=n+1):(k.push({text:a.substring(m,h+1),width:r}),m=h+1);r=0;n=m-1}}m<p&&k.push({text:a.substring(m),width:r});a=1;h=$a;qb===e.CENTER?a=d/2:qb===e.RIGHT&&(a=d);d=k.length;m=Math.min(d,Math.floor(f/Ea));Za===e.TOP?h=$a+Pa:Za===e.CENTER?h=f/2-Ea*(m/2-1):Za===e.BOTTOM&&(h=Pa+Ea);for(m=
0;m<d;m++){n=m*Ea;if(h+n>f-Pa)break;r=k[m];la.text$line(r.text,b+a,c+h+n,g,qb)}}}function Na(a){la="3D"===a?new J:"2D"===a?new B:new G;for(var b in G.prototype)G.prototype.hasOwnProperty(b)&&0>b.indexOf("$")&&(f[b]=la[b]);la.$init()}function I(a){return function(){Na("2D");return la[a].apply(this,arguments)}}function ob(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function pb(a){"function"===
typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Rb(){for(var a in kb)if(kb.hasOwnProperty(a)){f.__keyPressed=!0;return}f.__keyPressed=!1}function yb(a,b){kb[a]=b;rb=null;f.key=b;f.keyCode=a;f.keyPressed();f.keyCode=0;f.keyTyped();Rb()}function uc(a){var b=ob(a);if(b===e.DELETE)yb(b,new Char(127));else if(0>vd.indexOf(b))rb=b;else{var c=new Char(e.CODED);f.key=c;f.keyCode=b;kb[b]=c;f.keyPressed();rb=null;Rb();return pb(a)}}function Sb(a){if(null!==
rb){var b=rb,c;c=a.which||a.keyCode;var d=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(c){case 13:c=d?13:10;break;case 8:c=d?127:8}c=new Char(c);yb(b,c);return pb(a)}}function cc(a){a=ob(a);var b=kb[a];b!==g&&(f.key=b,f.keyCode=a,f.keyReleased(),delete kb[a],Rb())}if(!(this instanceof R))throw"called Processing constructor as if it were a function: missing 'new'.";var X={},Tb=b===g&&h===g,X=Tb?q.createElement("canvas"):"string"===typeof b?q.getElementById(b):b;if(!("getContext"in X))throw"called Processing constructor without passing canvas element reference or id.";
var zb=[],f=this;f.Char=f.Character=Char;a.withCommonFunctions(f);a.withMath(f);a.withProxyFunctions(f,function(a){return Array.prototype.slice.call(a,1)});a.withTouch(f,X,E,q,e);k&&Object.keys(k).forEach(function(a){f[a]=k[a]});f.externals={canvas:X,context:g,sketch:g,window:p};f.name="Processing.js Instance";f.use3DContext=!1;f.focused=!1;f.breakShape=!1;f.glyphTable={};f.pmouseX=0;f.pmouseY=0;f.mouseX=0;f.mouseY=0;f.mouseButton=0;f.mouseScroll=0;f.mouseClicked=g;f.mouseDragged=g;f.mouseMoved=g;
f.mousePressed=g;f.mouseReleased=g;f.mouseScrolled=g;f.mouseOver=g;f.mouseOut=g;f.touchStart=g;f.touchEnd=g;f.touchMove=g;f.touchCancel=g;f.key=g;f.keyCode=g;f.keyPressed=z;f.keyReleased=z;f.keyTyped=z;f.draw=g;f.setup=g;f.__mousePressed=!1;f.__keyPressed=!1;f.__frameRate=60;f.frameCount=0;f.width=100;f.height=100;var m,ha,la,W=!0,pa=[1,1,1,1],Oa=4294967295,Q=!0,D=!0,ba=[0,0,0,1],na=4278190080,db=!0,ia=1,hb=!1,oa=!1,Ha=!0,ra=0,va=e.CORNER,qa=e.CENTER,Jb=0,Hb=0,xb=0,mb=e.NORMAL_MODE_AUTO,qc=60,Pc=
1E3/qc,td=X.style.cursor,fa=e.POLYGON,rc=0,sc=20,Qc=!1,nb=-3355444,tc=20,ma=255,Ba=255,Ia=255,Ca=255,dc=0,ec=0,Ya=e.RGB,jb=null,vc=null,Tc=Date.now(),wc=Tc,gc=0,Fa,Vb,hc,Ab,Bb,xc,yc,Ja={attributes:{},locations:{}},A,N,sa,zc,Ac,Bc,ic,Cc,Wb,Dc,Uc,Ec,Vc,jc,Wc,Xc,Yc,Zc=0,$c=0,ad=e.IMAGE,ya=!1,Fc,Gc,Hc,qb=e.LEFT,Za=e.BASELINE,kc=e.MODEL,Cb="Arial",Qa=12,$a=9,Pa=2,Ea=14,ga=PFont.get(Cb,Qa),Sc,Ic=null,Ub=!1,bd,cd=1E3,kb=[],rb=null,vd=[e.SHIFT,e.CONTROL,e.ALT,e.CAPSLK,e.PGUP,e.PGDN,e.END,e.HOME,e.LEFT,e.UP,
e.RIGHT,e.DOWN,e.NUMLK,e.INSERT,e.F1,e.F2,e.F3,e.F4,e.F5,e.F6,e.F7,e.F8,e.F9,e.F10,e.F11,e.F12,e.META],S=0,lc=0,sb=0,Ra=[],Sa=[],Ta=[],Jc=new O(e.SINCOS_LENGTH),Kc=new O(e.SINCOS_LENGTH),U,tb,Ua,P,ja,Db,Eb,Xb,La,mc=!1,nc=60*(Math.PI/180),Lc=f.width/2,ub=f.height/2,vb=ub/Math.tan(nc/2),dd=vb/10,ed=10*vb,fd=f.width/f.height,s=[],za=[],ta=0,Fb=!1,Gb=!1,lb=!0,Yb=e.CORNER,gd=[],hd=new O([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),id=new O([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,
0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),wd=new O([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Mc=new O([0,0,0,0,1,0,1,1,0,1,0,0]),xd=new O([0,0,1,0,
0,1,0,0,1,0,0,1]),yd="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(d.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Nc=function(a,b,c){var d=a.createShader(a.VERTEX_SHADER);a.shaderSource(d,b);a.compileShader(d);if(!a.getShaderParameter(d,a.COMPILE_STATUS))throw a.getShaderInfoLog(d);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,c);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);c=a.createProgram();a.attachShader(c,d);a.attachShader(c,b);a.linkProgram(c);if(!a.getProgramParameter(c,a.LINK_STATUS))throw"Error linking shaders.";return c},jd=function(a,b,c,d,e){return{x:a,
y:b,w:c,h:d}},oc=jd,zd=function(a,b,c,d,e){return{x:a,y:b,w:e?c:c-a,h:e?d:d-b}},Ad=function(a,b,c,d,e){return{x:a-c/2,y:b-d/2,w:c,h:d}},aa=function(){},B=function(){},J=function(){},G=function(){};B.prototype=new aa;B.prototype.constructor=B;J.prototype=new aa;J.prototype.constructor=J;G.prototype=new aa;G.prototype.constructor=G;aa.prototype.a3DOnlyFunction=z;f.shape=function(a,b,c,d,g){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(f.pushMatrix(),Yb===e.CENTER?5===arguments.length?(f.translate(b-
d/2,c-g/2),f.scale(d/a.getWidth(),g/a.getHeight())):3===arguments.length?f.translate(b-a.getWidth()/2,-a.getHeight()/2):f.translate(-a.getWidth()/2,-a.getHeight()/2):Yb===e.CORNER?5===arguments.length?(f.translate(b,c),f.scale(d/a.getWidth(),g/a.getHeight())):3===arguments.length&&f.translate(b,c):Yb===e.CORNERS&&(5===arguments.length?(d-=b,g-=c,f.translate(b,c),f.scale(d/a.getWidth(),g/a.getHeight())):3===arguments.length&&f.translate(b,c)),a.draw(f),(1===arguments.length&&Yb===e.CENTER||1<arguments.length)&&
f.popMatrix())};f.shapeMode=function(a){Yb=a};f.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};f.loadXML=function(a){return new XML(f,a)};f.parseXML=function(a){var b=new XML;b.parse(a);return b};var kd=function(a){for(var b=0,c=0;c<a.length;c++)b=0!==c?Math.max(b,Math.abs(a[c])):Math.abs(a[c]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},ab=f.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof
ab?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};ab.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof ab?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new ab;a.set(this.elements);return a},reset:function(){this.set([1,
0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var c,d;a instanceof PVector?(c=a.x,d=a.y,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2],
b[1]=this.elements[3]*c+this.elements[4]*d+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2],b.y=this.elements[3]*c+this.elements[4]*d+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,
0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>e.MIN_INT){var b=this.elements[0],c=this.elements[1],d=this.elements[2],f=this.elements[3],g=this.elements[4],h=this.elements[5];this.elements[0]=g/a;this.elements[3]=-f/a;this.elements[1]=-c/a;this.elements[4]=b/a;this.elements[2]=(c*h-g*d)/a;this.elements[5]=(f*d-b*
h)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof ab?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],c=0,d=0;2>d;d++)for(var e=
0;3>e;e++,c++)b[c]+=this.elements[3*d+0]*a[e+0]+this.elements[3*d+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof ab?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*
a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],d=this.elements[1];this.elements[0]=b*c+a*d;this.elements[1]=-a*c+b*d;c=this.elements[3];d=this.elements[4];this.elements[3]=b*c+a*d;this.elements[4]=-a*c+b*d},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=
kd(this.elements),a=""+f.nfs(this.elements[0],a,4)+" "+f.nfs(this.elements[1],a,4)+" "+f.nfs(this.elements[2],a,4)+"\n"+f.nfs(this.elements[3],a,4)+" "+f.nfs(this.elements[4],a,4)+" "+f.nfs(this.elements[5],a,4)+"\n\n";f.println(a)}};var F=f.PMatrix3D=function(){this.reset()};F.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof F?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof
Array&&(this.elements=arguments[0].slice())},get:function(){var a=new F;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===g&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=
a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];
this.elements[14]=a},mult:function(a,b){var c,d,e,f;a instanceof PVector?(c=a.x,d=a.y,e=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],e=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]):4===b.length&&
(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3]*f,b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*d+this.elements[14]*e+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],
b.z=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof F?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var e=0;4>e;e++,c++)b[c]+=this.elements[e+0]*a[4*d+0]+this.elements[e+4]*a[4*d+1]+this.elements[e+8]*a[4*d+2]+this.elements[e+
12]*a[4*d+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof F?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var e=0;4>e;e++,c++)b[c]+=this.elements[4*d+0]*a[e+0]+this.elements[4*d+1]*a[e+4]+this.elements[4*d+2]*a[e+8]+this.elements[4*d+3]*a[e+12];this.elements=b.slice()},rotate:function(a,
b,c,d){if(4>arguments.length)this.rotateZ(a);else{var e=new PVector(b,c,d),g=e.mag();if(0!==g){1!=g&&(e.normalize(),b=e.x,c=e.y,d=e.z);var e=f.cos(a),g=f.sin(a),h=1-e;this.apply(h*b*b+e,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+e,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+e,0,0,0,0,1)}}},invApply:function(){Xb===g&&(Xb=new F);var a=arguments;Xb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Xb.invert())return!1;this.preApply(Xb);return!0},rotateX:function(a){var b=
f.cos(a);a=f.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=f.cos(a);a=f.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=
c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,d){return c?d?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*d:this.elements[0]*
a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,c,d){return c?d?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*d:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,d){return d?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*d:this.elements[8]*a+this.elements[9]*
b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,d){return d?this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]*d:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],d=this.elements[1]*this.elements[6]-
this.elements[2]*this.elements[5],e=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],m=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],n=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],k=this.elements[9]*this.elements[15]-
this.elements[11]*this.elements[13],p=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],q=a*p-b*k+c*n+d*m-e*h+f*g;if(1E-9>=Math.abs(q))return!1;var w=[];w[0]=+this.elements[5]*p-this.elements[6]*k+this.elements[7]*n;w[4]=-this.elements[4]*p+this.elements[6]*m-this.elements[7]*h;w[8]=+this.elements[4]*k-this.elements[5]*m+this.elements[7]*g;w[12]=-this.elements[4]*n+this.elements[5]*h-this.elements[6]*g;w[1]=-this.elements[1]*p+this.elements[2]*k-this.elements[3]*n;w[5]=+this.elements[0]*
p-this.elements[2]*m+this.elements[3]*h;w[9]=-this.elements[0]*k+this.elements[1]*m-this.elements[3]*g;w[13]=+this.elements[0]*n-this.elements[1]*h+this.elements[2]*g;w[2]=+this.elements[13]*f-this.elements[14]*e+this.elements[15]*d;w[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;w[10]=+this.elements[12]*e-this.elements[13]*c+this.elements[15]*a;w[14]=-this.elements[12]*d+this.elements[13]*b-this.elements[14]*a;w[3]=-this.elements[9]*f+this.elements[10]*e-this.elements[11]*d;w[7]=
+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;w[11]=-this.elements[8]*e+this.elements[9]*c-this.elements[11]*a;w[15]=+this.elements[8]*d-this.elements[9]*b+this.elements[10]*a;a=1/q;w[0]*=a;w[1]*=a;w[2]*=a;w[3]*=a;w[4]*=a;w[5]*=a;w[6]*=a;w[7]*=a;w[8]*=a;w[9]*=a;w[10]*=a;w[11]*=a;w[12]*=a;w[13]*=a;w[14]*=a;w[15]*=a;this.elements=w.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=kd(this.elements),
a=""+f.nfs(this.elements[0],a,4)+" "+f.nfs(this.elements[1],a,4)+" "+f.nfs(this.elements[2],a,4)+" "+f.nfs(this.elements[3],a,4)+"\n"+f.nfs(this.elements[4],a,4)+" "+f.nfs(this.elements[5],a,4)+" "+f.nfs(this.elements[6],a,4)+" "+f.nfs(this.elements[7],a,4)+"\n"+f.nfs(this.elements[8],a,4)+" "+f.nfs(this.elements[9],a,4)+" "+f.nfs(this.elements[10],a,4)+" "+f.nfs(this.elements[11],a,4)+"\n"+f.nfs(this.elements[12],a,4)+" "+f.nfs(this.elements[13],a,4)+" "+f.nfs(this.elements[14],a,4)+" "+f.nfs(this.elements[15],
a,4)+"\n\n";f.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,
0,0,1])}};var bb=f.PMatrixStack=function(){this.matrixStack=[]};bb.prototype.load=function(){var a=la.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};B.prototype.$newPMatrix=function(){return new ab};J.prototype.$newPMatrix=function(){return new F};bb.prototype.push=function(){this.matrixStack.push(this.peek())};bb.prototype.pop=function(){return this.matrixStack.pop()};bb.prototype.peek=function(){var a=la.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-
1]);return a};bb.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-1].apply(a)};f.split=function(a,b){return a.split(b)};f.splitTokens=function(a,b){if(b===g)return a.split(/\s+/g);var c=b.split(/()/g),d="",e=a.length,f,h,m=[];for(f=0;f<e;f++)h=a[f],-1<c.indexOf(h)?(""!==d&&m.push(d),d=""):d+=h;""!==d&&m.push(d);return m};f.append=function(a,b){a[a.length]=b;return a};f.concat=function(a,b){return a.concat(b)};f.sort=function(a,b){var c=[];if(0<a.length){for(var d=0<b?b:a.length,
e=0;e<d;e++)c.push(a[e]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-b});if(0<b)for(d=c.length;d<a.length;d++)c.push(a[d])}return c};f.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var d=0;d<b.length;c++,d++)a.splice(c,0,b[d]);else a.splice(c,0,b);return a};f.subset=function(a,b,c){return a.slice(b,c!==g?b+c:a.length)};f.join=function(a,b){return a.join(b)};f.shorten=function(a){for(var b=[],c=a.length,d=0;d<c;d++)b[d]=a[d];b.pop();return b};f.expand=
function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};f.arrayCopy=function(){var a,b=0,c,d=0,e;2===arguments.length?(a=arguments[0],c=arguments[1],e=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],e=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],d=arguments[3],e=arguments[4]);for(var f=b;f<e+b;f++,d++)if(c[d]!==g)c[d]=a[f];else throw"array index out of bounds exception";};f.reverse=function(a){return a.reverse()};f.mix=function(a,b,c){return a+
((b-a)*c>>8)};f.peg=function(a){return 0>a?0:255<a?255:a};f.modes=function(){function a(b,c,L,d,M,e,f,Dd,ud,h,fc){b=g(((b&4278190080)>>>24)+c,255)<<24;L+=(ud-L)*c>>8;d+=(h-d)*c>>8;c=M+((fc-M)*c>>8);return b|(0>L?0:255<L?255:L)<<16|(0>d?0:255<d?255:d)<<8|(0>c?0:255<c?255:c)}var b=e.ALPHA_MASK,c=e.RED_MASK,d=e.GREEN_MASK,f=e.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var e=(L&b)>>>24,h=a&c,m=a&d,x=a&f,n=L&c,k=L&d,p=L&f;return g(((a&b)>>>24)+e,255)<<24|
h+((n-h)*e>>8)&c|m+((k-m)*e>>8)&d|x+((p-x)*e>>8)&f},add:function(a,L){var e=(L&b)>>>24;return g(((a&b)>>>24)+e,255)<<24|g((a&c)+((L&c)>>8)*e,c)&c|g((a&d)+((L&d)>>8)*e,d)&d|g((a&f)+((L&f)*e>>8),f)},subtract:function(a,L){var e=(L&b)>>>24;return g(((a&b)>>>24)+e,255)<<24|h((a&c)-((L&c)>>8)*e,d)&c|h((a&d)-((L&d)>>8)*e,f)&d|h((a&f)-((L&f)*e>>8),0)},lightest:function(a,L){var e=(L&b)>>>24;return g(((a&b)>>>24)+e,255)<<24|h(a&c,((L&c)>>8)*e)&c|h(a&d,((L&d)>>8)*e)&d|h(a&f,(L&f)*e>>8)},darkest:function(a,
L){var e=(L&b)>>>24,h=a&c,m=a&d,x=a&f,n=g(a&c,((L&c)>>8)*e),k=g(a&d,((L&d)>>8)*e),p=g(a&f,(L&f)*e>>8);return g(((a&b)>>>24)+e,255)<<24|h+((n-h)*e>>8)&c|m+((k-m)*e>>8)&d|x+((p-x)*e>>8)&f},difference:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,h>$?h-$:$-h,m>n?m-n:n-m,x>k?x-k:k-x)},exclusion:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,h+$-(h*$>>7),m+n-(m*n>>7),x+k-(x*k>>
7))},multiply:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,h*$>>8,m*n>>8,x*k>>8)},screen:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,255-((255-h)*(255-$)>>8),255-((255-m)*(255-n)>>8),255-((255-x)*(255-k)>>8))},hard_light:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,128>$?h*$>>7:255-((255-h)*(255-$)>>7),128>
n?m*n>>7:255-((255-m)*(255-n)>>7),128>k?x*k>>7:255-((255-x)*(255-k)>>7))},soft_light:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,(h*$>>7)+(h*h>>8)-(h*h*$>>15),(m*n>>7)+(m*m>>8)-(m*m*n>>15),(x*k>>7)+(x*x>>8)-(x*x*k>>15))},overlay:function(e,g){var h=(e&c)>>16,m=(e&d)>>8,x=e&f,$=(g&c)>>16,n=(g&d)>>8,k=g&f;return a(e,(g&b)>>>24,h,m,x,$,n,k,128>h?h*$>>7:255-((255-h)*(255-$)>>7),128>m?m*n>>7:255-((255-m)*(255-n)>>7),128>x?x*k>>7:255-((255-
x)*(255-k)>>7))},dodge:function(e,g){var h=(g&b)>>>24,m=(e&c)>>16,x=(e&d)>>8,$=e&f,n=(g&c)>>16,k=(g&d)>>8,p=g&f,q=255;255!==n&&(q=(m<<8)/(255-n),q=0>q?0:255<q?255:q);var s=255;255!==k&&(s=(x<<8)/(255-k),s=0>s?0:255<s?255:s);var u=255;255!==p&&(u=($<<8)/(255-p),u=0>u?0:255<u?255:u);return a(e,h,m,x,$,n,k,p,q,s,u)},burn:function(e,g){var h=(g&b)>>>24,m=(e&c)>>16,x=(e&d)>>8,$=e&f,n=(g&c)>>16,k=(g&d)>>8,p=g&f,q=0;0!==n&&(q=(255-m<<8)/n,q=255-(0>q?0:255<q?255:q));var s=0;0!==k&&(s=(255-x<<8)/k,s=255-(0>
s?0:255<s?255:s));var u=0;0!==p&&(u=(255-$<<8)/p,u=255-(0>u?0:255<u?255:u));return a(e,h,m,x,$,n,k,p,q,s,u)}}}();f.color=function(a,b,c,d){return a!==g&&b!==g&&c!==g&&d!==g?xa(a,b,c,d):a!==g&&b!==g&&c!==g?xa(a,b,c,ma):a!==g&&b!==g?(a&e.ALPHA_MASK?(b=Math.round(255*(b/ma)),b=255<b?255:b,a=a-(a&e.ALPHA_MASK)+((0>b?0:b)<<24&e.ALPHA_MASK)):a=Ya===e.RGB?xa(a,a,a,b):Ya===e.HSB?xa(0,0,a/Ba*Ca,b):void 0,a):"number"===typeof a?ac(a):xa(Ba,Ia,Ca,ma)};f.color.toString=function(a){return"rgba("+((a&e.RED_MASK)>>>
16)+","+((a&e.GREEN_MASK)>>>8)+","+(a&e.BLUE_MASK)+","+((a&e.ALPHA_MASK)>>>24)/255+")"};f.color.toInt=function(a,b,c,d){return d<<24&e.ALPHA_MASK|a<<16&e.RED_MASK|b<<8&e.GREEN_MASK|c&e.BLUE_MASK};f.color.toArray=function(a){return[(a&e.RED_MASK)>>>16,(a&e.GREEN_MASK)>>>8,a&e.BLUE_MASK,(a&e.ALPHA_MASK)>>>24]};f.color.toGLArray=function(a){return[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255,((a&e.ALPHA_MASK)>>>24)/255]};f.color.toRGB=function(a,b,c){a=a>Ba?Ba:a;b=b>Ia?Ia:
b;c=c>Ca?Ca:c;a=360*(a/Ba);b=100*(b/Ia);c=100*(c/Ca);var d=Math.round(255*(c/100));if(0===b)return[d,d,d];a%=360;var e=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*e)/6E5));b=Math.round(255*(c*(6E3-b*(60-e))/6E5));switch(Math.floor(a/60)){case 0:return[d,b,f];case 1:return[g,d,f];case 2:return[f,d,b];case 3:return[f,g,d];case 4:return[b,f,d];case 5:return[d,f,g]}};f.brightness=function(a){return eb(a)[2]};f.saturation=function(a){return eb(a)[1]};f.hue=function(a){return eb(a)[0]};
f.red=function(a){return((a&e.RED_MASK)>>>16)/255*Ba};f.green=function(a){return((a&e.GREEN_MASK)>>>8)/255*Ia};f.blue=function(a){return(a&e.BLUE_MASK)/255*Ca};f.alpha=function(a){return((a&e.ALPHA_MASK)>>>24)/255*ma};f.lerpColor=function(a,b,c){var d,g,h,m,n,r;a=f.color(a);b=f.color(b);if(Ya===e.HSB)return h=eb(a),a=((a&e.ALPHA_MASK)>>>24)/ma,g=eb(b),b=((b&e.ALPHA_MASK)>>>24)/ma,r=f.lerp(h[0],g[0],c),d=f.lerp(h[1],g[1],c),h=f.lerp(h[2],g[2],c),h=f.color.toRGB(r,d,h),c=f.lerp(a,b,c)*ma+0.5|0,c<<24&
e.ALPHA_MASK|h[0]<<16&e.RED_MASK|h[1]<<8&e.GREEN_MASK|h[2]&e.BLUE_MASK;d=(a&e.RED_MASK)>>>16;g=(a&e.GREEN_MASK)>>>8;h=a&e.BLUE_MASK;a=((a&e.ALPHA_MASK)>>>24)/ma;m=(b&e.RED_MASK)>>>16;n=(b&e.GREEN_MASK)>>>8;r=b&e.BLUE_MASK;b=((b&e.ALPHA_MASK)>>>24)/ma;d=f.lerp(d,m,c)+0.5|0;g=f.lerp(g,n,c)+0.5|0;h=f.lerp(h,r,c)+0.5|0;c=f.lerp(a,b,c)*ma+0.5|0;return c<<24&e.ALPHA_MASK|d<<16&e.RED_MASK|g<<8&e.GREEN_MASK|h&e.BLUE_MASK};f.colorMode=function(){Ya=arguments[0];1<arguments.length&&(Ba=arguments[1],Ia=arguments[2]||
arguments[1],Ca=arguments[3]||arguments[1],ma=arguments[4]||arguments[1])};f.blendColor=function(a,b,c){if(c===e.REPLACE)return f.modes.replace(a,b);if(c===e.BLEND)return f.modes.blend(a,b);if(c===e.ADD)return f.modes.add(a,b);if(c===e.SUBTRACT)return f.modes.subtract(a,b);if(c===e.LIGHTEST)return f.modes.lightest(a,b);if(c===e.DARKEST)return f.modes.darkest(a,b);if(c===e.DIFFERENCE)return f.modes.difference(a,b);if(c===e.EXCLUSION)return f.modes.exclusion(a,b);if(c===e.MULTIPLY)return f.modes.multiply(a,
b);if(c===e.SCREEN)return f.modes.screen(a,b);if(c===e.HARD_LIGHT)return f.modes.hard_light(a,b);if(c===e.SOFT_LIGHT)return f.modes.soft_light(a,b);if(c===e.OVERLAY)return f.modes.overlay(a,b);if(c===e.DODGE)return f.modes.dodge(a,b);if(c===e.BURN)return f.modes.burn(a,b)};f.printMatrix=function(){P.print()};B.prototype.translate=function(a,b){P.translate(a,b);ja.invTranslate(a,b);m.translate(a,b)};J.prototype.translate=function(a,b,c){P.translate(a,b,c);ja.invTranslate(a,b,c)};B.prototype.scale=
function(a,b){P.scale(a,b);ja.invScale(a,b);m.scale(a,b||a)};J.prototype.scale=function(a,b,c){P.scale(a,b,c);ja.invScale(a,b,c)};B.prototype.transform=function(a){a=a.array();m.transform(a[0],a[3],a[1],a[4],a[2],a[5])};J.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};B.prototype.pushMatrix=function(){Db.load(P);Eb.load(ja);m.save()};J.prototype.pushMatrix=function(){Db.load(P);Eb.load(ja)};B.prototype.popMatrix=function(){P.set(Db.pop());ja.set(Eb.pop());
Va()};J.prototype.popMatrix=function(){P.set(Db.pop());ja.set(Eb.pop())};B.prototype.resetMatrix=function(){P.reset();ja.reset();m.setTransform(1,0,0,1,0,0)};J.prototype.resetMatrix=function(){P.reset();ja.reset()};aa.prototype.applyMatrix=function(){var a=arguments;P.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);ja.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};B.prototype.applyMatrix=function(){for(var a=
arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;aa.prototype.applyMatrix.apply(this,a)};f.rotateX=function(a){P.rotateX(a);ja.invRotateX(a)};B.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};J.prototype.rotateZ=function(a){P.rotateZ(a);ja.invRotateZ(a)};f.rotateY=function(a){P.rotateY(a);ja.invRotateY(a)};B.prototype.rotate=function(a){P.rotateZ(a);ja.invRotateZ(a);m.rotate(a)};J.prototype.rotate=function(a){4>arguments.length?f.rotateZ(a):
(P.rotate(a,arguments[1],arguments[2],arguments[3]),ja.rotate(-a,arguments[1],arguments[2],arguments[3]))};B.prototype.shearX=function(a){P.shearX(a);m.transform(1,0,a,1,0,0)};J.prototype.shearX=function(a){P.shearX(a)};B.prototype.shearY=function(a){P.shearY(a);m.transform(1,a,0,1,0,0)};J.prototype.shearY=function(a){P.shearY(a)};f.pushStyle=function(){m.save();f.pushMatrix();gd.push({doFill:W,currentFillColor:Oa,doStroke:D,currentStrokeColor:na,curTint:jb,curRectMode:va,curColorMode:Ya,colorModeX:Ba,
colorModeZ:Ca,colorModeY:Ia,colorModeA:ma,curTextFont:ga,horizontalTextAlignment:qb,verticalTextAlignment:Za,textMode:kc,curFontName:Cb,curTextSize:Qa,curTextAscent:$a,curTextDescent:Pa,curTextLeading:Ea})};f.popStyle=function(){var a=gd.pop();if(a)Va(),f.popMatrix(),W=a.doFill,Oa=a.currentFillColor,D=a.doStroke,na=a.currentStrokeColor,jb=a.curTint,va=a.curRectMode,Ya=a.curColorMode,Ba=a.colorModeX,Ca=a.colorModeZ,Ia=a.colorModeY,ma=a.colorModeA,ga=a.curTextFont,Cb=a.curFontName,Qa=a.curTextSize,
qb=a.horizontalTextAlignment,Za=a.verticalTextAlignment,kc=a.textMode,$a=a.curTextAscent,Pa=a.curTextDescent,Ea=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";};f.year=function(){return(new Date).getFullYear()};f.month=function(){return(new Date).getMonth()+1};f.day=function(){return(new Date).getDate()};f.hour=function(){return(new Date).getHours()};f.minute=function(){return(new Date).getMinutes()};f.second=function(){return(new Date).getSeconds()};f.millis=function(){return Date.now()-
Tc};B.prototype.redraw=function(){fb();m.lineWidth=ia;var a=f.pmouseX,b=f.pmouseY;f.pmouseX=dc;f.pmouseY=ec;m.save();f.draw();Va();dc=f.mouseX;ec=f.mouseY;f.pmouseX=a;f.pmouseY=b};J.prototype.redraw=function(){fb();var a=f.pmouseX,b=f.pmouseY;f.pmouseX=dc;f.pmouseY=ec;m.clear(m.DEPTH_BUFFER_BIT);Ja={attributes:{},locations:{}};f.noLights();f.lightFalloff(1,0,0);f.shininess(1);f.ambient(255,255,255);f.specular(0,0,0);f.emissive(0,0,0);f.camera();f.draw();dc=f.mouseX;ec=f.mouseY;f.pmouseX=a;f.pmouseY=
b};f.noLoop=function(){hb=Ha=!1;clearInterval(ra);ha.onPause()};f.loop=function(){hb||(wc=Date.now(),gc=0,ra=p.setInterval(function(){try{ha.onFrameStart(),f.redraw(),ha.onFrameEnd()}catch(a){throw p.clearInterval(ra),a;}},Pc),hb=Ha=!0,ha.onLoop())};f.frameRate=function(a){qc=a;Pc=1E3/qc;Ha&&(f.noLoop(),f.loop())};f.exit=function(){p.clearInterval(ra);var a=f.externals.canvas.id;wb.splice($b[a],1);delete $b[a];delete X.onmousedown;for(var b in R.lib)R.lib.hasOwnProperty(b)&&R.lib[b].hasOwnProperty("detach")&&
R.lib[b].detach(f);for(a=zb.length;a--;){var c=zb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+d,c)}ha.onExit()};f.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof f.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>
1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";X.style.cursor=a}else X.style.cursor=1===arguments.length?arguments[0]:td};f.noCursor=function(){X.style.cursor=e.NOCURSOR};f.link=function(a,b){b!==g?p.open(a,b):p.location=a};f.beginDraw=z;f.endDraw=z;B.prototype.toImageData=function(a,b,c,d){a=a!==g?a:0;b=b!==g?b:0;c=c!==g?c:f.width;d=d!==g?d:f.height;return m.getImageData(a,b,c,d)};J.prototype.toImageData=function(a,b,c,d){a=a!==g?a:0;b=b!==g?b:0;c=c!==g?c:f.width;d=d!==g?d:f.height;var e=q.createElement("canvas").getContext("2d").createImageData(c,
d),h=new v(4*c*d);m.readPixels(a,b,c,d,m.RGBA,m.UNSIGNED_BYTE,h);a=0;b=h.length;for(var x=e.data;a<b;a++)x[a]=h[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return e};f.status=function(a){p.status=a};f.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var d="";0<c;)d+=a>>>--c&1?"1":"0";return d};f.unbinary=function(a){for(var b=a.length-1,c=1,d=0;0<=b;){var e=a[b--];if("0"!==e&&"1"!==e)throw"the value passed into unbinary was not an 8 bit binary number";
"1"===e&&(d+=c);c<<=1}return d};f.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:8);var c=a,d=b,d=d===g||null===d?d=8:d;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<d;)c="0"+c;c.length>=d&&(c=c.substring(c.length-d,c.length));return c};f.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Ib(a[c]));return b}return Ib(a)};f.loadStrings=function(a){if(H[a])return H[a].split("\n");a=c(a);if("string"!==typeof a||""===a)return[];
a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};f.saveStrings=function(a,b){H[a]=b.join("\n")};f.loadBytes=function(a){a=c(a);for(var b=[],d=0;d<a.length;d++)b.push(a.charCodeAt(d));return b};f.matchAll=function(a,b){for(var c=[],d,e=RegExp(b,"g");null!==(d=e.exec(a));)c.push(d),0===d[0].length&&++e.lastIndex;return 0<c.length?c:null};f.match=function(a,b){return a.match(b)};f.println=function(){R.logger.println.apply(R.logger,arguments)};f.print=function(){R.logger.print.apply(R.logger,
arguments)};f.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+""};f.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(gb(a[c]));return b}return gb(a)};f.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};f.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));
if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";};f.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Kb(a[c]));return b}return Kb(a)};f.parseInt=function(a,b){if(a instanceof Array){for(var c=[],d=0;d<a.length;d++)"string"!==typeof a[d]||/^\s*[+\-]?\d+\s*$/.test(a[d])?c.push(Lb(a[d],b)):c.push(0);return c}return Lb(a,
b)};f.__int_cast=function(a){return 0|a};f.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var d=[];c;)c.$interfaces&&(d=d.concat(c.$interfaces)),c=c.$base;for(;0<d.length;){c=d.shift();if(c===b)return!0;c.$interfaces&&(d=d.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=
c.$base,c===b)return!0;return!1};aa.prototype.size=function(a,b,c){D&&f.stroke(0);W&&f.fill(255);c={fillStyle:m.fillStyle,strokeStyle:m.strokeStyle,lineCap:m.lineCap,lineJoin:m.lineJoin};0<X.style.length&&(X.style.removeProperty("width"),X.style.removeProperty("height"));X.width=f.width=a||100;X.height=f.height=b||100;for(var d in c)c.hasOwnProperty(d)&&(m[d]=c[d]);f.textFont(ga);f.background();cd=Math.max(1E3,0.05*a*b);f.externals.context=m;for(a=0;a<e.SINCOS_LENGTH;a++)Jc[a]=f.sin(0.5*a*(e.PI/180)),
Kc[a]=f.cos(0.5*a*(e.PI/180))};B.prototype.size=function(a,b,c){m===g&&(m=X.getContext("2d"),Db=new bb,Eb=new bb,P=new ab,ja=new ab);aa.prototype.size.apply(this,arguments)};J.prototype.size=function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{X.width=f.width=b||100;X.height=f.height=c||100;for(var e=X,g=["experimental-webgl","webgl","webkit-3d"],h,n=0,r=g.length;n<r&&!(h=e.getContext(g[n],{antialias:!1,preserveDrawingBuffer:!0}));n++);
m=h;Xc=m.createTexture();Yc=m.createTexture()}catch(k){R.debug(k)}if(!m)throw"WebGL context is not supported on this browser.";m.viewport(0,0,X.width,X.height);m.enable(m.DEPTH_TEST);m.enable(m.BLEND);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);N=Nc(m,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}",
"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");sa=Nc(m,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}",
"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");f.strokeWeight(1);A=Nc(m,yd,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");
m.useProgram(A);ca("usingTexture3d",A,"usingTexture",ya);f.lightFalloff(1,0,0);f.shininess(1);f.ambient(255,255,255);f.specular(0,0,0);f.emissive(0,0,0);zc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,zc);m.bufferData(m.ARRAY_BUFFER,hd,m.STATIC_DRAW);Ac=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,Ac);m.bufferData(m.ARRAY_BUFFER,wd,m.STATIC_DRAW);Bc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,Bc);m.bufferData(m.ARRAY_BUFFER,id,m.STATIC_DRAW);ic=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,ic);m.bufferData(m.ARRAY_BUFFER,
Mc,m.STATIC_DRAW);Cc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,Cc);m.bufferData(m.ARRAY_BUFFER,xd,m.STATIC_DRAW);Wb=m.createBuffer();Dc=m.createBuffer();Uc=m.createBuffer();Ec=m.createBuffer();Vc=m.createBuffer();Wc=m.createBuffer();jc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,jc);m.bufferData(m.ARRAY_BUFFER,new O([0,0,0]),m.STATIC_DRAW);Fc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,Fc);m.bufferData(m.ARRAY_BUFFER,new O([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),m.STATIC_DRAW);Gc=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,
Gc);m.bufferData(m.ARRAY_BUFFER,new O([0,0,1,0,1,1,0,1]),m.STATIC_DRAW);Hc=m.createBuffer();m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,Hc);m.bufferData(m.ELEMENT_ARRAY_BUFFER,new ka([0,1,2,2,3,0]),m.STATIC_DRAW);tb=new F;Ua=new F;P=new F;ja=new F;La=new F;f.camera();f.perspective();Db=new bb;Eb=new bb;Vb=new F;hc=new F;Ab=new F;Bb=new F;xc=new F;yc=new F;yc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);aa.prototype.size.apply(this,arguments)}}();B.prototype.ambientLight=aa.prototype.a3DOnlyFunction;J.prototype.ambientLight=
function(a,b,c,d,f,g){if(S===e.MAX_LIGHTS)throw"can only create "+e.MAX_LIGHTS+" lights";d=new PVector(d,f,g);f=new F;f.scale(1,-1,1);f.apply(P.array());f.mult(d,d);a=xa(a,b,c,0);a=[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255];m.useProgram(A);Y("uLights.color.3d."+S,A,"uLights"+S+".color",a);Y("uLights.position.3d."+S,A,"uLights"+S+".position",d.array());ca("uLights.type.3d."+S,A,"uLights"+S+".type",0);ca("uLightCount3d",A,"uLightCount",++S)};B.prototype.directionalLight=
aa.prototype.a3DOnlyFunction;J.prototype.directionalLight=function(a,b,c,d,f,g){if(S===e.MAX_LIGHTS)throw"can only create "+e.MAX_LIGHTS+" lights";m.useProgram(A);var h=new F;h.scale(1,-1,1);h.apply(P.array());h=h.array();d=[h[0]*d+h[4]*f+h[8]*g,h[1]*d+h[5]*f+h[9]*g,h[2]*d+h[6]*f+h[10]*g];a=xa(a,b,c,0);Y("uLights.color.3d."+S,A,"uLights"+S+".color",[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255]);Y("uLights.position.3d."+S,A,"uLights"+S+".position",d);ca("uLights.type.3d."+
S,A,"uLights"+S+".type",1);ca("uLightCount3d",A,"uLightCount",++S)};B.prototype.lightFalloff=aa.prototype.a3DOnlyFunction;J.prototype.lightFalloff=function(a,b,c){m.useProgram(A);Y("uFalloff3d",A,"uFalloff",[a,b,c])};B.prototype.lightSpecular=aa.prototype.a3DOnlyFunction;J.prototype.lightSpecular=function(a,b,c){a=xa(a,b,c,0);a=[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255];m.useProgram(A);Y("uSpecular3d",A,"uSpecular",a)};f.lights=function(){f.ambientLight(128,128,128);
f.directionalLight(128,128,128,0,0,-1);f.lightFalloff(1,0,0);f.lightSpecular(0,0,0)};B.prototype.pointLight=aa.prototype.a3DOnlyFunction;J.prototype.pointLight=function(a,b,c,d,f,g){if(S===e.MAX_LIGHTS)throw"can only create "+e.MAX_LIGHTS+" lights";d=new PVector(d,f,g);f=new F;f.scale(1,-1,1);f.apply(P.array());f.mult(d,d);a=xa(a,b,c,0);a=[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255];m.useProgram(A);Y("uLights.color.3d."+S,A,"uLights"+S+".color",a);Y("uLights.position.3d."+
S,A,"uLights"+S+".position",d.array());ca("uLights.type.3d."+S,A,"uLights"+S+".type",2);ca("uLightCount3d",A,"uLightCount",++S)};B.prototype.noLights=aa.prototype.a3DOnlyFunction;J.prototype.noLights=function(){S=0;m.useProgram(A);ca("uLightCount3d",A,"uLightCount",S)};B.prototype.spotLight=aa.prototype.a3DOnlyFunction;J.prototype.spotLight=function(a,b,c,d,f,g,h,n,r,k,p){if(S===e.MAX_LIGHTS)throw"can only create "+e.MAX_LIGHTS+" lights";m.useProgram(A);d=new PVector(d,f,g);f=new F;f.scale(1,-1,1);
f.apply(P.array());f.mult(d,d);f=f.array();h=[f[0]*h+f[4]*n+f[8]*r,f[1]*h+f[5]*n+f[9]*r,f[2]*h+f[6]*n+f[10]*r];a=xa(a,b,c,0);Y("uLights.color.3d."+S,A,"uLights"+S+".color",[((a&e.RED_MASK)>>>16)/255,((a&e.GREEN_MASK)>>>8)/255,(a&e.BLUE_MASK)/255]);Y("uLights.position.3d."+S,A,"uLights"+S+".position",d.array());Y("uLights.direction.3d."+S,A,"uLights"+S+".direction",h);Y("uLights.concentration.3d."+S,A,"uLights"+S+".concentration",p);Y("uLights.angle.3d."+S,A,"uLights"+S+".angle",k);ca("uLights.type.3d."+
S,A,"uLights"+S+".type",3);ca("uLightCount3d",A,"uLightCount",++S)};B.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};J.prototype.beginCamera=function(){if(mc)throw"You cannot call beginCamera() again before calling endCamera()";mc=!0;P=Ua;ja=tb};B.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};J.prototype.endCamera=function(){if(!mc)throw"You cannot call endCamera() before calling beginCamera()";P.set(tb);ja.set(Ua);mc=!1};f.camera=
function(a,b,c,d,e,h,m,n,r){a===g&&(Lc=f.width/2,ub=f.height/2,vb=ub/Math.tan(nc/2),a=Lc,b=ub,c=vb,d=Lc,e=ub,m=h=0,n=1,r=0);d=new PVector(a-d,b-e,c-h);var k=new PVector(m,n,r);d.normalize();r=PVector.cross(k,d);k=PVector.cross(d,r);r.normalize();k.normalize();m=r.x;n=r.y;r=r.z;e=k.x;h=k.y;var k=k.z,p=d.x,q=d.y;d=d.z;tb.set(m,n,r,0,e,h,k,0,p,q,d,0,0,0,0,1);tb.translate(-a,-b,-c);Ua.reset();Ua.invApply(m,n,r,0,e,h,k,0,p,q,d,0,0,0,0,1);Ua.translate(a,b,c);P.set(tb);ja.set(Ua)};f.perspective=function(a,
b,c,d){0===arguments.length&&(ub=X.height/2,vb=ub/Math.tan(nc/2),dd=vb/10,ed=10*vb,fd=f.width/f.height,a=nc,b=fd,c=dd,d=ed);var e,g;e=c*Math.tan(a/2);g=-e;f.frustum(g*b,e*b,g,e,c,d)};B.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";};J.prototype.frustum=function(a,b,c,d,e,f){La=new F;La.set(2*e/(b-a),0,(b+a)/(b-a),0,0,2*e/(d-c),(d+c)/(d-c),0,0,0,-(f+e)/(f-e),-(2*f*e)/(f-e),0,0,-1,0);a=new F;a.set(La);a.transpose();m.useProgram(N);Z("projection2d",N,"uProjection",
!1,a.array());m.useProgram(A);Z("projection3d",A,"uProjection",!1,a.array());m.useProgram(sa);Z("uProjectionUS",sa,"uProjection",!1,a.array())};f.ortho=function(a,b,c,d,e,g){0===arguments.length&&(a=0,b=f.width,c=0,d=f.height,e=-10,g=10);var h=2/(b-a),n=2/(d-c),r=-2/(g-e),k=-(b+a)/(b-a),p=-(d+c)/(d-c),q=-(g+e)/(g-e);La=new F;La.set(h,0,0,k,0,n,0,p,0,0,r,q,0,0,0,1);h=new F;h.set(La);h.transpose();m.useProgram(N);Z("projection2d",N,"uProjection",!1,h.array());m.useProgram(A);Z("projection3d",A,"uProjection",
!1,h.array());m.useProgram(sa);Z("uProjectionUS",sa,"uProjection",!1,h.array())};f.printProjection=function(){La.print()};f.printCamera=function(){tb.print()};B.prototype.box=aa.prototype.a3DOnlyFunction;J.prototype.box=function(a,b,c){b&&c||(b=c=a);var d=new F;d.scale(a,b,c);a=new F;a.scale(1,-1,1);a.apply(P.array());a.transpose();W&&(m.useProgram(A),Z("model3d",A,"uModel",!1,d.array()),Z("view3d",A,"uView",!1,a.array()),m.enable(m.POLYGON_OFFSET_FILL),m.polygonOffset(1,1),Y("color3d",A,"uColor",
pa),0<S?(b=new F,b.set(a),c=new F,c.set(d),b.mult(c),c=new F,c.set(b),c.invert(),c.transpose(),Z("uNormalTransform3d",A,"uNormalTransform",!1,c.array()),ea("aNormal3d",A,"aNormal",3,Ac)):wa("aNormal3d",A,"aNormal"),ea("aVertex3d",A,"aVertex",3,zc),wa("aColor3d",A,"aColor"),wa("aTexture3d",A,"aTexture"),m.drawArrays(m.TRIANGLES,0,hd.length/3),m.disable(m.POLYGON_OFFSET_FILL));0<ia&&D&&(m.useProgram(N),Z("uModel2d",N,"uModel",!1,d.array()),Z("uView2d",N,"uView",!1,a.array()),Y("uColor2d",N,"uColor",
ba),ca("uIsDrawingText2d",N,"uIsDrawingText",!1),ea("vertex2d",N,"aVertex",3,Bc),wa("aTextureCoord2d",N,"aTextureCoord"),m.drawArrays(m.LINES,0,id.length/3))};f.sphereDetail=function(a,b){var c;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==sb||b!==lc){var d=e.SINCOS_LENGTH/a,f=new O(a),g=new O(a);for(c=0;c<a;c++)f[c]=Kc[c*d%e.SINCOS_LENGTH|0],g[c]=Jc[c*d%e.SINCOS_LENGTH|0];c=a*(b-1)+2;d=0;Ra=new O(c);Sa=new O(c);Ta=new O(c);var h=0.5*e.SINCOS_LENGTH/b,n=h;for(c=1;c<b;c++){for(var r=
Jc[n%e.SINCOS_LENGTH|0],k=-Kc[n%e.SINCOS_LENGTH|0],p=0;p<a;p++)Ra[d]=f[p]*r,Sa[d]=k,Ta[d++]=g[p]*r;n+=h}sb=a;lc=b;U=[];for(f=0;f<sb;f++)U.push(0),U.push(-1),U.push(0),U.push(Ra[f]),U.push(Sa[f]),U.push(Ta[f]);U.push(0);U.push(-1);U.push(0);U.push(Ra[0]);U.push(Sa[0]);U.push(Ta[0]);h=0;for(f=2;f<lc;f++){g=c=h;d=h+=sb;for(n=0;n<sb;n++)U.push(Ra[g]),U.push(Sa[g]),U.push(Ta[g++]),U.push(Ra[d]),U.push(Sa[d]),U.push(Ta[d++]);g=c;d=h;U.push(Ra[g]);U.push(Sa[g]);U.push(Ta[g]);U.push(Ra[d]);U.push(Sa[d]);
U.push(Ta[d])}for(f=0;f<sb;f++)d=h+f,U.push(Ra[d]),U.push(Sa[d]),U.push(Ta[d]),U.push(0),U.push(1),U.push(0);U.push(Ra[h]);U.push(Sa[h]);U.push(Ta[h]);U.push(0);U.push(1);U.push(0);m.bindBuffer(m.ARRAY_BUFFER,Wb);m.bufferData(m.ARRAY_BUFFER,new O(U),m.STATIC_DRAW)}};B.prototype.sphere=aa.prototype.a3DOnlyFunction;J.prototype.sphere=function(a){(3>sb||2>lc)&&f.sphereDetail(30);var b=new F;b.scale(a,a,a);a=new F;a.scale(1,-1,1);a.apply(P.array());a.transpose();if(W){if(0<S){var c=new F;c.set(a);var d=
new F;d.set(b);c.mult(d);d=new F;d.set(c);d.invert();d.transpose();Z("uNormalTransform3d",A,"uNormalTransform",!1,d.array());ea("aNormal3d",A,"aNormal",3,Wb)}else wa("aNormal3d",A,"aNormal");m.useProgram(A);wa("aTexture3d",A,"aTexture");Z("uModel3d",A,"uModel",!1,b.array());Z("uView3d",A,"uView",!1,a.array());ea("aVertex3d",A,"aVertex",3,Wb);wa("aColor3d",A,"aColor");m.enable(m.POLYGON_OFFSET_FILL);m.polygonOffset(1,1);Y("uColor3d",A,"uColor",pa);m.drawArrays(m.TRIANGLE_STRIP,0,U.length/3);m.disable(m.POLYGON_OFFSET_FILL)}0<
ia&&D&&(m.useProgram(N),Z("uModel2d",N,"uModel",!1,b.array()),Z("uView2d",N,"uView",!1,a.array()),ea("aVertex2d",N,"aVertex",3,Wb),wa("aTextureCoord2d",N,"aTextureCoord"),Y("uColor2d",N,"uColor",ba),ca("uIsDrawingText",N,"uIsDrawingText",!1),m.drawArrays(m.LINE_STRIP,0,U.length/3))};f.modelX=function(a,b,c){var d=P.array(),e=Ua.array(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[0]*f+e[1]*g+e[2]*h+e[3]*b;e=e[12]*f+e[13]*
g+e[14]*h+e[15]*b;return 0!==e?a/e:a};f.modelY=function(a,b,c){var d=P.array(),e=Ua.array(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[4]*f+e[5]*g+e[6]*h+e[7]*b;e=e[12]*f+e[13]*g+e[14]*h+e[15]*b;return 0!==e?a/e:a};f.modelZ=function(a,b,c){var d=P.array(),e=Ua.array(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[8]*f+e[9]*g+e[10]*h+e[11]*b;e=e[12]*
f+e[13]*g+e[14]*h+e[15]*b;return 0!==e?a/e:a};B.prototype.ambient=aa.prototype.a3DOnlyFunction;J.prototype.ambient=function(a,b,c){m.useProgram(A);ca("uUsingMat3d",A,"uUsingMat",!0);a=f.color(a,b,c);Y("uMaterialAmbient3d",A,"uMaterialAmbient",f.color.toGLArray(a).slice(0,3))};B.prototype.emissive=aa.prototype.a3DOnlyFunction;J.prototype.emissive=function(a,b,c){m.useProgram(A);ca("uUsingMat3d",A,"uUsingMat",!0);a=f.color(a,b,c);Y("uMaterialEmissive3d",A,"uMaterialEmissive",f.color.toGLArray(a).slice(0,
3))};B.prototype.shininess=aa.prototype.a3DOnlyFunction;J.prototype.shininess=function(a){m.useProgram(A);ca("uUsingMat3d",A,"uUsingMat",!0);Y("uShininess3d",A,"uShininess",a)};B.prototype.specular=aa.prototype.a3DOnlyFunction;J.prototype.specular=function(a,b,c){m.useProgram(A);ca("uUsingMat3d",A,"uUsingMat",!0);a=f.color(a,b,c);Y("uMaterialSpecular3d",A,"uMaterialSpecular",f.color.toGLArray(a).slice(0,3))};f.screenX=function(a,b,c){var d=P.array();if(16===d.length){var e=d[0]*a+d[1]*b+d[2]*c+d[3],
g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=La.array();a=c[0]*e+c[1]*g+c[2]*h+c[3]*b;e=c[12]*e+c[13]*g+c[14]*h+c[15]*b;0!==e&&(a/=e);return f.width*(1+a)/2}return P.multX(a,b)};f.screenY=function(a,b,c){var d=P.array();if(16===d.length){var e=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=La.array();a=c[4]*e+c[5]*g+c[6]*h+c[7]*b;e=c[12]*e+c[13]*g+c[14]*h+c[15]*b;0!==e&&(a/=e);return f.height*
(1+a)/2}return P.multY(a,b)};f.screenZ=function(a,b,c){var d=P.array();if(16!==d.length)return 0;var e=La.array(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[8]*f+e[9]*g+e[10]*h+e[11]*b;e=e[12]*f+e[13]*g+e[14]*h+e[15]*b;0!==e&&(a/=e);return(a+1)/2};aa.prototype.fill=function(){var a=f.color.apply(this,arguments);a===Oa&&W||(W=!0,Oa=a)};B.prototype.fill=function(){aa.prototype.fill.apply(this,arguments);Q=!0};J.prototype.fill=
function(){aa.prototype.fill.apply(this,arguments);pa=f.color.toGLArray(Oa)};f.noFill=function(){W=!1};aa.prototype.stroke=function(){var a=f.color.apply(this,arguments);a===na&&D||(D=!0,na=a)};B.prototype.stroke=function(){aa.prototype.stroke.apply(this,arguments);db=!0};J.prototype.stroke=function(){aa.prototype.stroke.apply(this,arguments);ba=f.color.toGLArray(na)};f.noStroke=function(){D=!1};aa.prototype.strokeWeight=function(a){ia=a};B.prototype.strokeWeight=function(a){aa.prototype.strokeWeight.apply(this,
arguments);m.lineWidth=a};J.prototype.strokeWeight=function(a){aa.prototype.strokeWeight.apply(this,arguments);m.useProgram(N);Y("pointSize2d",N,"uPointSize",a);m.useProgram(sa);Y("pointSizeUnlitShape",sa,"uPointSize",a);m.lineWidth(a)};f.strokeCap=function(a){la.$ensureContext().lineCap=a};f.strokeJoin=function(a){la.$ensureContext().lineJoin=a};B.prototype.smooth=function(){oa=!0;var a=X.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode",
"bicubic","important");m.hasOwnProperty("mozImageSmoothingEnabled")&&(m.mozImageSmoothingEnabled=!0)};J.prototype.smooth=function(){oa=!0};B.prototype.noSmooth=function(){oa=!1;var a=X.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges","important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor",
"important");m.hasOwnProperty("mozImageSmoothingEnabled")&&(m.mozImageSmoothingEnabled=!1)};J.prototype.noSmooth=function(){oa=!1};B.prototype.point=function(a,b){D&&(oa||(a=Math.round(a),b=Math.round(b)),m.fillStyle=f.color.toString(na),Q=!0,1<ia?(m.beginPath(),m.arc(a,b,ia/2,0,e.TWO_PI,!1),m.fill()):m.fillRect(a,b,1,1))};J.prototype.point=function(a,b,c){var d=new F;d.translate(a,b,c||0);d.transpose();a=new F;a.scale(1,-1,1);a.apply(P.array());a.transpose();m.useProgram(N);Z("uModel2d",N,"uModel",
!1,d.array());Z("uView2d",N,"uView",!1,a.array());0<ia&&D&&(Y("uColor2d",N,"uColor",ba),ca("uIsDrawingText2d",N,"uIsDrawingText",!1),ca("uSmooth2d",N,"uSmooth",oa),ea("aVertex2d",N,"aVertex",3,jc),wa("aTextureCoord2d",N,"aTextureCoord"),m.drawArrays(m.POINTS,0,1))};f.beginShape=function(a){fa=a;s=[]};B.prototype.vertex=function(a,b,c){var d=[];lb&&(lb=!1);d.isVert=!0;d[0]=a;d[1]=b;d[2]=0;d[3]=0;d[4]=0;d[5]=Oa;d[6]=na;s.push(d);c&&(s[s.length-1].moveTo=c)};J.prototype.vertex=function(a,b,c,d,f){var h=
[];lb&&(lb=!1);h.isVert=!0;f===g&&ya&&(f=d,d=c,c=0);d!==g&&f!==g&&(ad===e.IMAGE&&(d/=Zc,f/=$c),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);h[0]=a;h[1]=b;h[2]=c||0;h[3]=d||0;h[4]=f||0;h[5]=pa[0];h[6]=pa[1];h[7]=pa[2];h[8]=pa[3];h[9]=ba[0];h[10]=ba[1];h[11]=ba[2];h[12]=ba[3];h[13]=Jb;h[14]=Hb;h[15]=xb;s.push(h)};var ld=function(a,b){var c=new F;c.scale(1,-1,1);c.apply(P.array());c.transpose();m.useProgram(sa);Z("uViewUS",sa,"uView",!1,c.array());ca("uSmoothUS",sa,"uSmooth",oa);ea("aVertexUS",sa,"aVertex",
3,jc);m.bufferData(m.ARRAY_BUFFER,new O(a),m.STREAM_DRAW);ea("aColorUS",sa,"aColor",4,Ec);m.bufferData(m.ARRAY_BUFFER,new O(b),m.STREAM_DRAW);m.drawArrays(m.POINTS,0,a.length/3)},Ga=function(a,b,c){b="LINES"===b?m.LINES:"LINE_LOOP"===b?m.LINE_LOOP:m.LINE_STRIP;var d=new F;d.scale(1,-1,1);d.apply(P.array());d.transpose();m.useProgram(sa);Z("uViewUS",sa,"uView",!1,d.array());ea("aVertexUS",sa,"aVertex",3,Dc);m.bufferData(m.ARRAY_BUFFER,new O(a),m.STREAM_DRAW);ea("aColorUS",sa,"aColor",4,Vc);m.bufferData(m.ARRAY_BUFFER,
new O(c),m.STREAM_DRAW);m.drawArrays(b,0,a.length/3)},cb=function(a,b,c,d){b="TRIANGLES"===b?m.TRIANGLES:"TRIANGLE_FAN"===b?m.TRIANGLE_FAN:m.TRIANGLE_STRIP;var e=new F;e.scale(1,-1,1);e.apply(P.array());e.transpose();m.useProgram(A);Z("model3d",A,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);Z("view3d",A,"uView",!1,e.array());m.enable(m.POLYGON_OFFSET_FILL);m.polygonOffset(1,1);Y("color3d",A,"uColor",[-1,0,0,0]);ea("vertex3d",A,"aVertex",3,Uc);m.bufferData(m.ARRAY_BUFFER,new O(a),m.STREAM_DRAW);
ya&&null!==jb&&vc(c);ea("aColor3d",A,"aColor",4,Ec);m.bufferData(m.ARRAY_BUFFER,new O(c),m.STREAM_DRAW);wa("aNormal3d",A,"aNormal");ya&&(ca("uUsingTexture3d",A,"uUsingTexture",ya),ea("aTexture3d",A,"aTexture",2,Wc),m.bufferData(m.ARRAY_BUFFER,new O(d),m.STREAM_DRAW));m.drawArrays(b,0,a.length/3);m.disable(m.POLYGON_OFFSET_FILL)};B.prototype.endShape=function(a){if(0!==s.length){(a=a===e.CLOSE)&&s.push(s[0]);var b=[],c=[],d=[],h=[],n;lb=!0;var x,k,r=s.length;for(x=0;x<r;x++)for(n=s[x],k=0;3>k;k++)b.push(n[k]);
for(x=0;x<r;x++)for(n=s[x],k=5;9>k;k++)c.push(n[k]);for(x=0;x<r;x++)for(n=s[x],k=9;13>k;k++)d.push(n[k]);for(x=0;x<r;x++)n=s[x],h.push(n[3]),h.push(n[4]);if(!Fb||fa!==e.POLYGON&&fa!==g)if(!Gb||fa!==e.POLYGON&&fa!==g)if(fa===e.POINTS)for(x=0;x<r;x++)n=s[x],D&&f.stroke(n[6]),f.point(n[0],n[1]);else if(fa===e.LINES)for(x=0;x+1<r;x+=2)n=s[x],D&&f.stroke(s[x+1][6]),f.line(n[0],n[1],s[x+1][0],s[x+1][1]);else if(fa===e.TRIANGLES)for(x=0;x+2<r;x+=3)n=s[x],m.beginPath(),m.moveTo(n[0],n[1]),m.lineTo(s[x+1][0],
s[x+1][1]),m.lineTo(s[x+2][0],s[x+2][1]),m.lineTo(n[0],n[1]),W&&(f.fill(s[x+2][5]),Aa()),D&&(f.stroke(s[x+2][6]),Da()),m.closePath();else if(fa===e.TRIANGLE_STRIP)for(x=0;x+1<r;x++)n=s[x],m.beginPath(),m.moveTo(s[x+1][0],s[x+1][1]),m.lineTo(n[0],n[1]),D&&f.stroke(s[x+1][6]),W&&f.fill(s[x+1][5]),x+2<r&&(m.lineTo(s[x+2][0],s[x+2][1]),D&&f.stroke(s[x+2][6]),W&&f.fill(s[x+2][5])),Wa();else if(fa===e.TRIANGLE_FAN){if(2<r)for(m.beginPath(),m.moveTo(s[0][0],s[0][1]),m.lineTo(s[1][0],s[1][1]),m.lineTo(s[2][0],
s[2][1]),W&&(f.fill(s[2][5]),Aa()),D&&(f.stroke(s[2][6]),Da()),m.closePath(),x=3;x<r;x++)n=s[x],m.beginPath(),m.moveTo(s[0][0],s[0][1]),m.lineTo(s[x-1][0],s[x-1][1]),m.lineTo(n[0],n[1]),W&&(f.fill(n[5]),Aa()),D&&(f.stroke(n[6]),Da()),m.closePath()}else if(fa===e.QUADS)for(x=0;x+3<r;x+=4){n=s[x];m.beginPath();m.moveTo(n[0],n[1]);for(k=1;4>k;k++)m.lineTo(s[x+k][0],s[x+k][1]);m.lineTo(n[0],n[1]);W&&(f.fill(s[x+3][5]),Aa());D&&(f.stroke(s[x+3][6]),Da());m.closePath()}else if(fa===e.QUAD_STRIP){if(3<r)for(x=
0;x+1<r;x+=2)n=s[x],m.beginPath(),x+3<r?(m.moveTo(s[x+2][0],s[x+2][1]),m.lineTo(n[0],n[1]),m.lineTo(s[x+1][0],s[x+1][1]),m.lineTo(s[x+3][0],s[x+3][1]),W&&f.fill(s[x+3][5]),D&&f.stroke(s[x+3][6])):(m.moveTo(n[0],n[1]),m.lineTo(s[x+1][0],s[x+1][1])),Wa()}else{m.beginPath();m.moveTo(s[0][0],s[0][1]);for(x=1;x<r;x++)n=s[x],n.isVert&&(n.moveTo?m.moveTo(n[0],n[1]):m.lineTo(n[0],n[1]));Wa()}else{m.beginPath();for(x=0;x<r;x++)n=s[x],s[x].isVert?s[x].moveTo?m.moveTo(n[0],n[1]):m.lineTo(n[0],n[1]):m.bezierCurveTo(s[x][0],
s[x][1],s[x][2],s[x][3],s[x][4],s[x][5]);Wa()}else if(3<r){b=[];c=1-rc;m.beginPath();m.moveTo(s[1][0],s[1][1]);for(x=1;x+2<r;x++)n=s[x],b[0]=[n[0],n[1]],b[1]=[n[0]+(c*s[x+1][0]-c*s[x-1][0])/6,n[1]+(c*s[x+1][1]-c*s[x-1][1])/6],b[2]=[s[x+1][0]+(c*s[x][0]-c*s[x+2][0])/6,s[x+1][1]+(c*s[x][1]-c*s[x+2][1])/6],b[3]=[s[x+1][0],s[x+1][1]],m.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Wa()}Gb=Fb=!1;za=[];ta=0;a&&s.pop()}};J.prototype.endShape=function(a){if(0!==s.length){var b=a===e.CLOSE;
a=[];var c=[],d=[],f=[],h=[],n;lb=!0;var k,r,p=s.length;for(k=0;k<p;k++)for(n=s[k],r=0;3>r;r++)c.push(n[r]);for(k=0;k<p;k++)for(n=s[k],r=5;9>r;r++)d.push(n[r]);for(k=0;k<p;k++)for(n=s[k],r=9;13>r;r++)f.push(n[r]);for(k=0;k<p;k++)n=s[k],h.push(n[3]),h.push(n[4]);if(b){c.push(s[0][0]);c.push(s[0][1]);c.push(s[0][2]);for(k=5;9>k;k++)d.push(s[0][k]);for(k=9;13>k;k++)f.push(s[0][k]);h.push(s[0][3]);h.push(s[0][4])}if(!Fb||fa!==e.POLYGON&&fa!==g)if(!Gb||fa!==e.POLYGON&&fa!==g){if(fa===e.POINTS){for(k=0;k<
p;k++)for(n=s[k],r=0;3>r;r++)a.push(n[r]);ld(a,f)}else if(fa===e.LINES){for(k=0;k<p;k++)for(n=s[k],r=0;3>r;r++)a.push(n[r]);for(k=0;k<p;k++)for(n=s[k],r=5;9>r;r++)d.push(n[r]);Ga(a,"LINES",f)}else if(fa===e.TRIANGLES){if(2<p)for(k=0;k+2<p;k+=3){c=[];h=[];a=[];d=[];f=[];for(r=0;3>r;r++)for(b=0;3>b;b++)a.push(s[k+r][b]),c.push(s[k+r][b]);for(r=0;3>r;r++)for(b=3;5>b;b++)h.push(s[k+r][b]);for(r=0;3>r;r++)for(b=5;9>b;b++)d.push(s[k+r][b]),f.push(s[k+r][b+4]);D&&Ga(a,"LINE_LOOP",f);(W||ya)&&cb(c,"TRIANGLES",
d,h)}}else if(fa===e.TRIANGLE_STRIP){if(2<p)for(k=0;k+2<p;k++){a=[];c=[];f=[];d=[];h=[];for(r=0;3>r;r++)for(b=0;3>b;b++)a.push(s[k+r][b]),c.push(s[k+r][b]);for(r=0;3>r;r++)for(b=3;5>b;b++)h.push(s[k+r][b]);for(r=0;3>r;r++)for(b=5;9>b;b++)f.push(s[k+r][b+4]),d.push(s[k+r][b]);(W||ya)&&cb(c,"TRIANGLE_STRIP",d,h);D&&Ga(a,"LINE_LOOP",f)}}else if(fa===e.TRIANGLE_FAN){if(2<p){for(k=0;3>k;k++)for(n=s[k],r=0;3>r;r++)a.push(n[r]);for(k=0;3>k;k++)for(n=s[k],r=9;13>r;r++)f.push(n[r]);D&&Ga(a,"LINE_LOOP",f);
for(k=2;k+1<p;k++){a=[];f=[];a.push(s[0][0]);a.push(s[0][1]);a.push(s[0][2]);f.push(s[0][9]);f.push(s[0][10]);f.push(s[0][11]);f.push(s[0][12]);for(r=0;2>r;r++)for(b=0;3>b;b++)a.push(s[k+r][b]);for(r=0;2>r;r++)for(b=9;13>b;b++)f.push(s[k+r][b]);D&&Ga(a,"LINE_STRIP",f)}(W||ya)&&cb(c,"TRIANGLE_FAN",d,h)}}else if(fa===e.QUADS)for(k=0;k+3<p;k+=4){a=[];for(r=0;4>r;r++)for(n=s[k+r],b=0;3>b;b++)a.push(n[b]);D&&Ga(a,"LINE_LOOP",f);if(W){c=[];d=[];h=[];for(r=0;3>r;r++)c.push(s[k][r]);for(r=5;9>r;r++)d.push(s[k][r]);
for(r=0;3>r;r++)c.push(s[k+1][r]);for(r=5;9>r;r++)d.push(s[k+1][r]);for(r=0;3>r;r++)c.push(s[k+3][r]);for(r=5;9>r;r++)d.push(s[k+3][r]);for(r=0;3>r;r++)c.push(s[k+2][r]);for(r=5;9>r;r++)d.push(s[k+2][r]);ya&&(h.push(s[k+0][3]),h.push(s[k+0][4]),h.push(s[k+1][3]),h.push(s[k+1][4]),h.push(s[k+3][3]),h.push(s[k+3][4]),h.push(s[k+2][3]),h.push(s[k+2][4]));cb(c,"TRIANGLE_STRIP",d,h)}}else if(fa===e.QUAD_STRIP){if(3<p){for(k=0;2>k;k++)for(n=s[k],r=0;3>r;r++)a.push(n[r]);for(k=0;2>k;k++)for(n=s[k],r=9;13>
r;r++)f.push(n[r]);Ga(a,"LINE_STRIP",f);4<p&&0<p%2&&(c.splice(c.length-3),s.pop());for(k=0;k+3<p;k+=2){a=[];f=[];for(r=0;3>r;r++)a.push(s[k+1][r]);for(r=0;3>r;r++)a.push(s[k+3][r]);for(r=0;3>r;r++)a.push(s[k+2][r]);for(r=0;3>r;r++)a.push(s[k+0][r]);for(r=9;13>r;r++)f.push(s[k+1][r]);for(r=9;13>r;r++)f.push(s[k+3][r]);for(r=9;13>r;r++)f.push(s[k+2][r]);for(r=9;13>r;r++)f.push(s[k+0][r]);D&&Ga(a,"LINE_STRIP",f)}(W||ya)&&cb(c,"TRIANGLE_LIST",d,h)}}else if(1===p){for(r=0;3>r;r++)a.push(s[0][r]);for(r=
9;13>r;r++)f.push(s[0][r]);ld(a,f)}else{for(k=0;k<p;k++){n=s[k];for(r=0;3>r;r++)a.push(n[r]);for(r=5;9>r;r++)f.push(n[r])}D&&b?Ga(a,"LINE_LOOP",f):D&&!b&&Ga(a,"LINE_STRIP",f);(W||ya)&&cb(c,"TRIANGLE_FAN",d,h)}ya=!1;m.useProgram(A);ca("usingTexture3d",A,"uUsingTexture",ya)}else a=c,a.splice(a.length-3),f.splice(f.length-4),D&&Ga(a,null,f),W&&cb(c,"TRIANGLES",d);else D&&Ga(c,null,f),W&&cb(c,null,d);Gb=Fb=!1;za=[];ta=0}};var md=function(a,b){var c=1/a,d=c*c,e=d*c;b.set(0,0,0,1,e,d,c,0,6*e,2*d,0,0,6*
e,0,0,0)},nd=function(){Ab||(Vb=new F,Ab=new F,Qc=!0);var a=rc;Vb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);md(sc,Ab);xc||(hc=new F);hc.set(Vb);hc.preApply(xc);Ab.apply(Vb)};B.prototype.bezierVertex=function(){Gb=!0;var a=[];if(lb)throw"vertex() must be used at least once before calling bezierVertex()";for(var b=0;b<arguments.length;b++)a[b]=arguments[b];s.push(a);s[s.length-1].isVert=!1};J.prototype.bezierVertex=function(){Gb=!0;if(lb)throw"vertex() must be used at least once before calling bezierVertex()";
if(9===arguments.length){Bb===g&&(Bb=new F);var a=s.length-1;md(tc,Bb);Bb.apply(yc);for(var b=Bb.array(),c=s[a][0],d=s[a][1],a=s[a][2],e=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],h=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],m=b[12]*c+b[13]*arguments[0]+b[14]*arguments[3]+b[15]*arguments[6],k=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],n=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],p=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+
b[15]*arguments[7],q=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],u=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],y=0;y<tc;y++)c+=e,e+=h,h+=m,d+=k,k+=n,n+=p,a+=q,q+=u,u+=b,f.vertex(c,d,a);f.vertex(arguments[6],arguments[7],arguments[8])}};f.texture=function(a){var b=la.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Xc),
b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),d=q.createElement("canvas"),e=d.getContext("2d"),f;if(a.width&0===a.width-1)d.width=a.width;else{for(f=1;f<a.width;)f*=2;d.width=f}if(a.height&0===a.height-1)d.height=a.height;else{for(f=1;f<a.height;)f*=2;d.height=f}e.drawImage(a.sourceImg,0,0,a.width,a.height,
0,0,d.width,d.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,d);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Zc=a.width;$c=a.height}ya=!0;b.useProgram(A);ca("usingTexture3d",A,"uUsingTexture",
ya)};f.textureMode=function(a){ad=a};B.prototype.curveVertex=function(a,b){Fb=!0;f.vertex(a,b)};J.prototype.curveVertex=function(a,b,c){Fb=!0;Qc||nd();var d=[];d[0]=a;d[1]=b;d[2]=c;za.push(d);ta++;if(3<ta){var e=za[ta-4][0],g=za[ta-4][1],h=za[ta-4][2],m=za[ta-3][0],k=za[ta-3][1],n=za[ta-3][2],p=za[ta-2][0],q=za[ta-2][1],s=za[ta-2][2],w=za[ta-1][0],u=za[ta-1][1],y=za[ta-1][2];a=m;b=k;c=n;var K=Ab.array(),d=K[4]*e+K[5]*m+K[6]*p+K[7]*w,v=K[8]*e+K[9]*m+K[10]*p+K[11]*w,e=K[12]*e+K[13]*m+K[14]*p+K[15]*
w,m=K[4]*g+K[5]*k+K[6]*q+K[7]*u,p=K[8]*g+K[9]*k+K[10]*q+K[11]*u,g=K[12]*g+K[13]*k+K[14]*q+K[15]*u,k=K[4]*h+K[5]*n+K[6]*s+K[7]*y,q=K[8]*h+K[9]*n+K[10]*s+K[11]*y,h=K[12]*h+K[13]*n+K[14]*s+K[15]*y;f.vertex(a,b,c);for(n=0;n<sc;n++)a+=d,d+=v,v+=e,b+=m,m+=p,p+=g,c+=k,k+=q,q+=h,f.vertex(a,b,c)}};B.prototype.curve=function(a,b,c,d,e,g,h,m){f.beginShape();f.curveVertex(a,b);f.curveVertex(c,d);f.curveVertex(e,g);f.curveVertex(h,m);f.endShape()};J.prototype.curve=function(a,b,c,d,e,h,m,k,n,p,q,s){s!==g?(f.beginShape(),
f.curveVertex(a,b,c),f.curveVertex(d,e,h),f.curveVertex(m,k,n),f.curveVertex(p,q,s)):(f.beginShape(),f.curveVertex(a,b),f.curveVertex(c,d),f.curveVertex(e,h),f.curveVertex(m,k));f.endShape()};f.curveTightness=function(a){rc=a};f.curveDetail=function(a){sc=a;nd()};f.rectMode=function(a){va=a};f.imageMode=function(a){switch(a){case e.CORNER:oc=jd;break;case e.CORNERS:oc=zd;break;case e.CENTER:oc=Ad;break;default:throw"Invalid imageMode";}};f.ellipseMode=function(a){qa=a};f.arc=function(a,b,c,d,g,h){if(!(0>=
c||h<g)){qa===e.CORNERS?(c-=a,d-=b):qa===e.RADIUS?(a-=c,b-=d,c*=2,d*=2):qa===e.CENTER&&(a-=c/2,b-=d/2);for(;0>g;)g+=e.TWO_PI,h+=e.TWO_PI;h-g>e.TWO_PI&&(g=0,h=e.TWO_PI);var m=c/2,k=d/2;a=function(a,b,c,d,f){return function(g,h,L,n,M){L=0;n=c;M=f+d;g.beginShape();for(h&&g.vertex(a-0.5,b-0.5);n<M;L++,n=L*d+c)g.vertex(a+Math.cos(n)*m|0,b+Math.sin(n)*k|0);g.endShape(h?e.CLOSE:void 0)}}(a+m+0.5,b+k+0.5,g,1/(m+k),h);W&&(b=D,D=!1,a(f,!0),D=b);D&&(b=W,W=!1,a(f),W=b)}};B.prototype.line=function(a,b,c,d){if(D)if(oa||
(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d)),a===c&&b===d)f.point(a,b);else{for(var e=g,h=g,k=!0,e=P.array(),n=[1,0,0,0,1,0],r=0;6>r&&k;r++)k=e[r]===n[r];k&&(a===c?(b>d&&(e=b,b=d,d=e),d++,1===ia%2&&m.translate(0.5,0)):b===d&&(a>c&&(e=a,a=c,c=e),c++,1===ia%2&&m.translate(0,0.5)),1===ia&&(h=m.lineCap,m.lineCap="butt"));m.beginPath();m.moveTo(a||0,b||0);m.lineTo(c||0,d||0);Da();k&&(a===c&&1===ia%2?m.translate(-0.5,0):b===d&&1===ia%2&&m.translate(0,-0.5),1===ia&&(m.lineCap=h))}};
J.prototype.line=function(a,b,c,d,e,h){if(e===g||h===g)h=0,e=d,d=c,c=0;a===d&&b===e&&c===h?f.point(a,b,c):(a=[a,b,c,d,e,h],b=new F,b.scale(1,-1,1),b.apply(P.array()),b.transpose(),0<ia&&D&&(m.useProgram(N),Z("uModel2d",N,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Z("uView2d",N,"uView",!1,b.array()),Y("uColor2d",N,"uColor",ba),ca("uIsDrawingText",N,"uIsDrawingText",!1),ea("aVertex2d",N,"aVertex",3,Dc),wa("aTextureCoord2d",N,"aTextureCoord"),m.bufferData(m.ARRAY_BUFFER,new O(a),m.STREAM_DRAW),m.drawArrays(m.LINES,
0,2)))};B.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";f.beginShape();f.vertex(arguments[0],arguments[1]);f.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]);f.endShape()};J.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";f.beginShape();f.vertex(arguments[0],arguments[1],arguments[2]);f.bezierVertex(arguments[3],arguments[4],arguments[5],
arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);f.endShape()};f.bezierDetail=function(a){tc=a};f.bezierPoint=function(a,b,c,d,e){return(1-e)*(1-e)*(1-e)*a+3*(1-e)*(1-e)*e*b+3*(1-e)*e*e*c+e*e*e*d};f.bezierTangent=function(a,b,c,d,e){return 3*e*e*(-a+3*b-3*c+d)+6*e*(a-2*b+c)+3*(-a+b)};f.curvePoint=function(a,b,c,d,e){return 0.5*(2*b+(-a+c)*e+(2*a-5*b+4*c-d)*e*e+(-a+3*b-3*c+d)*e*e*e)};f.curveTangent=function(a,b,c,d,e){return 0.5*(-a+c+2*(2*a-5*b+4*c-d)*e+3*(-a+3*b-3*
c+d)*e*e)};f.triangle=function(a,b,c,d,g,h){f.beginShape(e.TRIANGLES);f.vertex(a,b,0);f.vertex(c,d,0);f.vertex(g,h,0);f.endShape()};f.quad=function(a,b,c,d,g,h,m,k){f.beginShape(e.QUADS);f.vertex(a,b,0);f.vertex(c,d,0);f.vertex(g,h,0);f.vertex(m,k,0);f.endShape()};B.prototype.rect=function(a,b,c,d,f,h,k,n){if(c||d)if(va===e.CORNERS?(c-=a,d-=b):va===e.RADIUS?(c*=2,d*=2,a-=c/2,b-=d/2):va===e.CENTER&&(a-=c/2,b-=d/2),oa||(a=Math.round(a),b=Math.round(b),c=Math.round(c),d=Math.round(d)),f!==g){n===g&&
(n=k=h=f);var r=c/2,p=d/2;if(f>r||f>p)f=Math.min(r,p);if(h>r||h>p)h=Math.min(r,p);if(k>r||k>p)k=Math.min(r,p);if(n>r||n>p)n=Math.min(r,p);W&&!D||m.translate(0.5,0.5);m.beginPath();m.moveTo(a+f,b);m.lineTo(a+c-h,b);m.quadraticCurveTo(a+c,b,a+c,b+h);m.lineTo(a+c,b+d-k);m.quadraticCurveTo(a+c,b+d,a+c-k,b+d);m.lineTo(a+n,b+d);m.quadraticCurveTo(a,b+d,a,b+d-n);m.lineTo(a,b+f);m.quadraticCurveTo(a,b,a+f,b);W&&!D||m.translate(-0.5,-0.5);Aa();Da()}else D&&1===ia%2&&m.translate(0.5,0.5),m.beginPath(),m.rect(a,
b,c,d),Aa(),Da(),D&&1===ia%2&&m.translate(-0.5,-0.5)};J.prototype.rect=function(a,b,c,d,f,h,k,n){if(f!==g)throw"rect() with rounded corners is not supported in 3D mode";va===e.CORNERS?(c-=a,d-=b):va===e.RADIUS?(c*=2,d*=2,a-=c/2,b-=d/2):va===e.CENTER&&(a-=c/2,b-=d/2);f=new F;f.translate(a,b,0);f.scale(c,d,1);f.transpose();b=new F;b.scale(1,-1,1);b.apply(P.array());b.transpose();0<ia&&D&&(m.useProgram(N),Z("uModel2d",N,"uModel",!1,f.array()),Z("uView2d",N,"uView",!1,b.array()),Y("uColor2d",N,"uColor",
ba),ca("uIsDrawingText2d",N,"uIsDrawingText",!1),ea("aVertex2d",N,"aVertex",3,ic),wa("aTextureCoord2d",N,"aTextureCoord"),m.drawArrays(m.LINE_LOOP,0,Mc.length/3));W&&(m.useProgram(A),Z("uModel3d",A,"uModel",!1,f.array()),Z("uView3d",A,"uView",!1,b.array()),m.enable(m.POLYGON_OFFSET_FILL),m.polygonOffset(1,1),Y("color3d",A,"uColor",pa),0<S?(a=new F,a.set(b),b=new F,b.set(f),a.mult(b),b=new F,b.set(a),b.invert(),b.transpose(),Z("uNormalTransform3d",A,"uNormalTransform",!1,b.array()),ea("aNormal3d",
A,"aNormal",3,Cc)):wa("normal3d",A,"aNormal"),ea("vertex3d",A,"aVertex",3,ic),m.drawArrays(m.TRIANGLE_FAN,0,Mc.length/3),m.disable(m.POLYGON_OFFSET_FILL))};B.prototype.ellipse=function(a,b,c,d){a=a||0;b=b||0;if(!(0>=c&&0>=d))if(qa===e.RADIUS?(c*=2,d*=2):qa===e.CORNERS?(c-=a,d-=b,a+=c/2,b+=d/2):qa===e.CORNER&&(a+=c/2,b+=d/2),c===d)m.beginPath(),m.arc(a,b,c/2,0,e.TWO_PI,!1),Aa(),Da();else{c/=2;d/=2;var g=0.5522847498307933*c,h=0.5522847498307933*d;f.beginShape();f.vertex(a+c,b);f.bezierVertex(a+c,b-
h,a+g,b-d,a,b-d);f.bezierVertex(a-g,b-d,a-c,b-h,a-c,b);f.bezierVertex(a-c,b+h,a-g,b+d,a,b+d);f.bezierVertex(a+g,b+d,a+c,b+h,a+c,b);f.endShape()}};J.prototype.ellipse=function(a,b,c,d){a=a||0;b=b||0;if(!(0>=c&&0>=d)){qa===e.RADIUS?(c*=2,d*=2):qa===e.CORNERS?(c-=a,d-=b,a+=c/2,b+=d/2):qa===e.CORNER&&(a+=c/2,b+=d/2);c/=2;d/=2;var g=0.5522847498307933*c,h=0.5522847498307933*d;f.beginShape();f.vertex(a+c,b);f.bezierVertex(a+c,b-h,0,a+g,b-d,0,a,b-d,0);f.bezierVertex(a-g,b-d,0,a-c,b-h,0,a-c,b,0);f.bezierVertex(a-
c,b+h,0,a-g,b+d,0,a,b+d,0);f.bezierVertex(a+g,b+d,0,a+c,b+h,0,a+c,b,0);f.endShape();if(W){for(g=d=c=0;g<s.length;g++)c+=s[g][0],d+=s[g][1];c/=s.length;d/=s.length;g=[];a=[];b=[];g[0]=c;g[1]=d;g[2]=0;g[3]=0;g[4]=0;g[5]=pa[0];g[6]=pa[1];g[7]=pa[2];g[8]=pa[3];g[9]=ba[0];g[10]=ba[1];g[11]=ba[2];g[12]=ba[3];g[13]=Jb;g[14]=Hb;g[15]=xb;s.unshift(g);for(g=0;g<s.length;g++){for(c=0;3>c;c++)a.push(s[g][c]);for(c=5;9>c;c++)b.push(s[g][c])}cb(a,"TRIANGLE_FAN",b)}}};f.normal=function(a,b,c){if(3!==arguments.length||
"number"!==typeof a||"number"!==typeof b||"number"!==typeof c)throw"normal() requires three numeric arguments.";Jb=a;Hb=b;xb=c;0!==fa&&(mb===e.NORMAL_MODE_AUTO?mb=e.NORMAL_MODE_SHAPE:mb===e.NORMAL_MODE_SHAPE&&(mb=e.NORMAL_MODE_VERTEX))};f.save=function(a,b){return b!==g?p.open(b.toDataURL(),"_blank"):p.open(f.externals.canvas.toDataURL(),"_blank")};var Bd=0;f.saveFrame=function(a){a===g&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+Bd++;b.length<a.length;)b="0"+b;return b});f.save(a)};
var Cd=q.createElement("canvas").getContext("2d"),Rc=[g,g,g],Ka=function(a,b,c){this.__isDirty=!1;if(a instanceof V)this.fromHTMLImageData(a);else if(b||c){this.width=a||1;this.height=b||1;a=this.sourceImg=q.createElement("canvas");a.width=this.width;a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=c===e.ARGB||c===e.ALPHA?c:e.RGB;if(this.format===e.RGB)for(c=3,a=this.imageData.data,b=a.length;c<b;c+=4)a[c]=255;this.__isDirty=!0;this.updatePixels()}else this.height=
this.width=0,this.imageData=Cd.createImageData(1,1),this.format=e.ARGB;this.pixels=Mb(this)};Ka.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof C&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ma(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,
b,c,d){if(!arguments.length)return f.get(this);if(2===arguments.length)return f.get(a,b,this);if(4===arguments.length)return f.get(a,b,c,d,this)},set:function(a,b,c){f.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,e,g,h,m,k,n){9===arguments.length?f.blend(this,a,b,c,d,e,g,h,m,k,this):10===arguments.length&&f.blend(a,b,c,d,e,g,h,m,k,n,this);delete this.sourceImg},copy:function(a,b,c,d,g,h,m,k,n){8===arguments.length?f.blend(this,a,b,c,d,g,h,m,k,e.REPLACE,this):9===arguments.length&&f.blend(a,
b,c,d,g,h,m,k,n,e.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?f.filter(a,b,this):1===arguments.length&&f.filter(a,null,this);delete this.sourceImg},save:function(a){f.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ma(this.imageData).canvas,c=Ma(c,a,b).context.getImageData(0,
0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ka||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},
loadPixels:z,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ma(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ma(this.imageData).canvas.toDataURL()},fromImageData:function(a){var b=a.width,c=a.height,d=q.createElement("canvas"),f=d.getContext("2d");this.width=d.width=b;this.height=d.height=c;f.putImageData(a,0,0);this.format=e.ARGB;this.imageData=
a;this.sourceImg=d}};f.PImage=Ka;f.createImage=function(a,b,c){return new Ka(a,b,c)};f.loadImage=function(a,b,c){if(ha.imageCache.images[a])return b=new Ka(ha.imageCache.images[a]),b.loaded=!0,b;b=new Ka;var d=q.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};f.requestImage=f.loadImage;f.get=function(a,b,c,d,g){if(void 0!==g)return Ob(a,b,c,d,g);if(void 0!==d)return Nb(a,b,c,d);if(void 0!==c){if(c.isRemote)throw"Image is loaded remotely. Cannot get x,y.";
a=4*b*c.width+4*a;c=c.imageData.data;return c[a+3]<<24&e.ALPHA_MASK|c[a]<<16&e.RED_MASK|c[a+1]<<8&e.GREEN_MASK|c[a+2]&e.BLUE_MASK}return void 0!==b?(a>=f.width||0>a||0>b||b>=f.height?c=0:Ub?(a=4*((0|a)+f.width*(0|b)),c=f.imageData.data,c=c[a+3]<<24&e.ALPHA_MASK|c[a]<<16&e.RED_MASK|c[a+1]<<8&e.GREEN_MASK|c[a+2]&e.BLUE_MASK):(c=f.toImageData(0|a,0|b,1,1).data,c=c[3]<<24&e.ALPHA_MASK|c[0]<<16&e.RED_MASK|c[1]<<8&e.GREEN_MASK|c[2]&e.BLUE_MASK),c):void 0!==a?Ob(0,0,a.width,a.height,a):Nb(0,0,f.width,f.height)};
f.createGraphics=function(a,b,c){var d=new R;d.size(a,b,c);d.background(0,0);return d};f.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<f.width&&(0<=a&&0<=b&&b<f.height)&&(Ub||(f.loadPixels(),null===Ic&&(Sc=m,Ic=new Pb),Ub=!0,m=Ic,bd=0),f.pixels.setPixel((0|a)+f.width*(0|b),c),++bd>cd&&ib()):(c instanceof Ka||c.__isPImage)&&f.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var e=f.color.toArray(c),g=4*b*d.width+4*a,h=d.imageData.data;
h[g]=e[0];h[g+1]=e[1];h[g+2]=e[2];h[g+3]=e[3]}};f.imageData={};f.pixels={getLength:function(){return f.imageData.data.length?f.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=f.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=f.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=f.imageData.width*f.imageData.height,c=f.imageData.data,
d=0,e=0;d<b;d++,e+=4)a.push(c[e+3]<<24&4278190080|c[e+0]<<16&16711680|c[e+1]<<8&65280|c[e+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};f.loadPixels=function(){f.imageData=la.$ensureContext().getImageData(0,0,f.width,f.height)};f.updatePixels=function(){f.imageData&&la.$ensureContext().putImageData(f.imageData,0,0)};f.hint=function(a){var b=la.$ensureContext();a===e.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):
a===e.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===e.ENABLE_OPENGL_2X_SMOOTH||a===e.ENABLE_OPENGL_4X_SMOOTH?oa=!0:a===e.DISABLE_OPENGL_2X_SMOOTH&&(oa=!1)};var od=function(a,b,c,d){if(a instanceof Ka||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";if(a.width!==f.width||a.height!==f.height)throw"Background image must be the same dimensions as the canvas.";}else a=f.color(a,b,c,d);nb=a};B.prototype.background=function(a,b,c,d){a!==g&&od(a,b,
c,d);nb instanceof Ka||nb.__isPImage?(m.save(),m.setTransform(1,0,0,1,0,0),f.image(nb,0,0)):(m.save(),m.setTransform(1,0,0,1,0,0),f.alpha(nb)!==ma&&m.clearRect(0,0,f.width,f.height),m.fillStyle=f.color.toString(nb),m.fillRect(0,0,f.width,f.height),Q=!0);Va()};J.prototype.background=function(a,b,c,d){0<arguments.length&&od(a,b,c,d);var e=f.color.toGLArray(nb);m.clearColor(e[0],e[1],e[2],e[3]);m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT)};B.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);
if(0<a.width){var f=oc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===jb){var g=a.sourceImg;a.__isDirty&&a.updatePixels();m.drawImage(g,0,0,g.width,g.height,f.x,f.y,f.w,f.h)}else g=a.toImageData(),null!==jb&&(jb(g),a.__isDirty=!0),m.drawImage(Ma(g).canvas,0,0,a.width,a.height,f.x,f.y,f.w,f.h)}};J.prototype.image=function(a,b,c,d,e){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,e=e||a.height,f.beginShape(f.QUADS),f.texture(a),f.vertex(b,c,0,0,0),f.vertex(b,c+
e,0,0,e),f.vertex(b+d,c+e,0,d,e),f.vertex(b+d,c,0,d,0),f.endShape())};f.tint=function(a,b,c,d){a=f.color(a,b,c,d);var e=f.red(a)/Ba,g=f.green(a)/Ia,h=f.blue(a)/Ca,m=f.alpha(a)/ma;jb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=e,b[c++]*=g,b[c++]*=h,b[c++]*=m};vc=function(a){for(var b=0;b<a.length;)a[b++]=e,a[b++]=g,a[b++]=h,a[b++]=m}};f.noTint=function(){vc=jb=null};f.copy=function(a,b,c,d,h,m,k,n,r){r===g&&(r=n,n=k,k=m,m=h,h=d,d=c,c=b,b=a,a=f);f.blend(a,b,c,d,h,m,k,n,r,
e.REPLACE)};f.blend=function(a,b,c,d,e,h,m,k,n,p,q){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";p===g&&(p=n,n=k,k=m,m=h,h=e,e=d,d=c,c=b,b=a,a=f);d=b+d;e=c+e;k=h+k;n=m+n;var s=q||f;q!==g&&p!==g||f.loadPixels();a.loadPixels();a===f&&f.intersect(b,c,d,e,h,m,k,n)?f.blit_resize(f.get(b,c,d-b,e-c),0,0,d-b-1,e-c-1,s.imageData.data,s.width,s.height,h,m,k,n,p):f.blit_resize(a,b,c,d,e,s.imageData.data,s.width,s.height,h,m,k,n,p);q===g&&f.updatePixels()};var pd=function(a,b){var c=0,d=
b.pixels.getLength(),e=new u(d),f,g,h,m,k,n,p,q,s,y,v,K;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=m=b.pixels.getPixel(c),n=c-1,k=c+1,p=c-b.width,q=c+b.width,n<f&&(n=c),k>=g&&(k=c),0>p&&(p=0),q>=d&&(q=c),p=b.pixels.getPixel(p),n=b.pixels.getPixel(n),q=b.pixels.getPixel(q),k=b.pixels.getPixel(k),h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),y=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),s=77*(k>>16&255)+151*(k>>8&255)+28*(k&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),K=77*(q>>16&255)+151*(q>>8&255)+28*
(q&255),y<h&&(m=n,h=y),s<h&&(m=k,h=s),v<h&&(m=p,h=v),K<h&&(m=q),e[c++]=m;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=m=b.pixels.getPixel(c),n=c-1,k=c+1,p=c-b.width,q=c+b.width,n<f&&(n=c),k>=g&&(k=c),0>p&&(p=0),q>=d&&(q=c),p=b.pixels.getPixel(p),n=b.pixels.getPixel(n),q=b.pixels.getPixel(q),k=b.pixels.getPixel(k),h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),y=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),s=77*(k>>16&255)+151*(k>>8&255)+28*(k&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),K=77*(q>>16&255)+
151*(q>>8&255)+28*(q&255),y>h&&(m=n,h=y),s>h&&(m=k,h=s),v>h&&(m=p,h=v),K>h&&(m=q),e[c++]=m;b.pixels.set(e)};f.filter=function(a,b,c){var d,h,m,k;3===arguments.length?(c.loadPixels(),d=c):(f.loadPixels(),d=f);b===g&&(b=null);if(d.isRemote)throw"Image is loaded remotely. Cannot filter image.";var n=d.pixels.getLength();switch(a){case e.BLUR:var p=b||1,q=d,s,u,y,w,v,z,K,A,C;m=q.pixels.getLength();k=new O(m);n=new O(m);h=new O(m);m=new O(m);var D=0,E,H,G,p=f.floor(3.5*p),B,p=1>p?1:248>p?p:248;if(f.shared.blurRadius!==
p){f.shared.blurRadius=p;f.shared.blurKernelSize=1+(f.shared.blurRadius<<1);f.shared.blurKernel=new O(f.shared.blurKernelSize);var I=f.shared.blurKernel,J=f.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(p-1)*(p-1);for(B=1;B<p;B++)I[p+B]=I[p-B]=J;I[p]=p*p}p=q.height;B=q.width;I=f.shared.blurKernelSize;A=f.shared.blurRadius;var J=f.shared.blurKernel,F=q.imageData.data;for(H=0;H<p;H++){for(E=0;E<B;E++){y=u=s=w=q=0;z=E-A;if(0>z)v=-z,z=0;else{if(z>=B)break;v=0}for(G=v;G<I&&!(z>=B);G++)K=4*(z+D),v=J[G],
w+=v*F[K+3],s+=v*F[K],u+=v*F[K+1],y+=v*F[K+2],q+=v,z++;K=D+E;m[K]=w/q;k[K]=s/q;n[K]=u/q;h[K]=y/q}D+=B}D=0;A=-A;C=A*B;for(H=0;H<p;H++){for(E=0;E<B;E++){y=u=s=w=q=0;if(0>A)v=K=-A,z=E;else{if(A>=p)break;v=0;K=A;z=E+C}for(G=v;G<I&&!(K>=p);G++)v=J[G],w+=v*m[z],s+=v*k[z],u+=v*n[z],y+=v*h[z],q+=v,K++,z+=B;K=4*(E+D);F[K]=s/q;F[K+1]=u/q;F[K+2]=y/q;F[K+3]=w/q}D+=B;C+=B;A++}break;case e.GRAY:if(d.format===e.ALPHA){for(k=0;k<n;k++)h=255-d.pixels.getPixel(k),d.pixels.setPixel(k,4278190080|h<<16|h<<8|h);d.format=
e.RGB}else for(k=0;k<n;k++)h=d.pixels.getPixel(k),m=77*(h>>16&255)+151*(h>>8&255)+28*(h&255)>>8,d.pixels.setPixel(k,h&e.ALPHA_MASK|m<<16|m<<8|m);break;case e.INVERT:for(k=0;k<n;k++)d.pixels.setPixel(k,d.pixels.getPixel(k)^16777215);break;case e.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";h=f.floor(b);if(2>h||255<h)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";m=h-1;for(k=0;k<n;k++)D=d.pixels.getPixel(k)>>16&255,p=d.pixels.getPixel(k)>>
8&255,B=d.pixels.getPixel(k)&255,D=255*(D*h>>8)/m,p=255*(p*h>>8)/m,B=255*(B*h>>8)/m,d.pixels.setPixel(k,4278190080&d.pixels.getPixel(k)|D<<16|p<<8|B);break;case e.OPAQUE:for(k=0;k<n;k++)d.pixels.setPixel(k,d.pixels.getPixel(k)|4278190080);d.format=e.RGB;break;case e.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";h=f.floor(255*b);for(k=0;k<n;k++)m=f.max((d.pixels.getPixel(k)&e.RED_MASK)>>16,f.max((d.pixels.getPixel(k)&e.GREEN_MASK)>>8,d.pixels.getPixel(k)&
e.BLUE_MASK)),d.pixels.setPixel(k,d.pixels.getPixel(k)&e.ALPHA_MASK|(m<h?0:16777215));break;case e.ERODE:pd(!0,d);break;case e.DILATE:pd(!1,d)}d.updatePixels()};f.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null};f.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&
(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var ua={};ua[e.BLEND]=f.modes.blend;ua[e.ADD]=f.modes.add;ua[e.SUBTRACT]=f.modes.subtract;ua[e.LIGHTEST]=f.modes.lightest;ua[e.DARKEST]=f.modes.darkest;ua[e.REPLACE]=f.modes.replace;ua[e.DIFFERENCE]=f.modes.difference;ua[e.EXCLUSION]=f.modes.exclusion;ua[e.MULTIPLY]=f.modes.multiply;ua[e.SCREEN]=f.modes.screen;ua[e.OVERLAY]=f.modes.overlay;ua[e.HARD_LIGHT]=f.modes.hard_light;ua[e.SOFT_LIGHT]=f.modes.soft_light;ua[e.DODGE]=f.modes.dodge;
ua[e.BURN]=f.modes.burn;f.blit_resize=function(a,b,c,d,g,h,m,k,n,p,q,s,u){0>b&&(b=0);0>c&&(c=0);d>=a.width&&(d=a.width-1);g>=a.height&&(g=a.height-1);d-=b;g-=c;q-=n;s-=p;if(!(0>=q||0>=s||0>=d||0>=g||n>=m||p>=k||b>=a.width||c>=a.height)){d=Math.floor(d/q*e.PRECISIONF);g=Math.floor(g/s*e.PRECISIONF);var w=f.shared;w.srcXOffset=Math.floor(0>n?-n*d:b*e.PRECISIONF);w.srcYOffset=Math.floor(0>p?-p*g:c*e.PRECISIONF);0>n&&(q+=n,n=0);0>p&&(s+=p,p=0);q=Math.min(q,m-n);s=Math.min(s,k-p);b=p*m+n;var y;w.srcBuffer=
a.imageData.data;w.iw=a.width;w.iw1=a.width-1;w.ih1=a.height-1;c=ua[u];var v,z,A,D;n=e.ALPHA_MASK;p=e.RED_MASK;var B=e.GREEN_MASK,C=e.BLUE_MASK,E=e.PREC_MAXVAL,G=e.PRECISIONB,H=e.PREC_RED_SHIFT,I=e.PREC_ALPHA_SHIFT,F=w.srcBuffer,J=Math.min;for(u=0;u<s;u++){w.sX=w.srcXOffset;w.fracV=w.srcYOffset&E;w.ifV=E-w.fracV;w.v1=(w.srcYOffset>>G)*w.iw;w.v2=J((w.srcYOffset>>G)+1,w.ih1)*w.iw;for(a=0;a<q;a++)k=4*(b+a),y=h[k+3]<<24&n|h[k]<<16&p|h[k+1]<<8&B|h[k+2]&C,w.fracU=w.sX&E,w.ifU=E-w.fracU,w.ul=w.ifU*w.ifV>>
G,w.ll=w.ifU*w.fracV>>G,w.ur=w.fracU*w.ifV>>G,w.lr=w.fracU*w.fracV>>G,w.u1=w.sX>>G,w.u2=J(w.u1+1,w.iw1),v=4*(w.v1+w.u1),z=4*(w.v1+w.u2),A=4*(w.v2+w.u1),D=4*(w.v2+w.u2),w.cUL=F[v+3]<<24&n|F[v]<<16&p|F[v+1]<<8&B|F[v+2]&C,w.cUR=F[z+3]<<24&n|F[z]<<16&p|F[z+1]<<8&B|F[z+2]&C,w.cLL=F[A+3]<<24&n|F[A]<<16&p|F[A+1]<<8&B|F[A+2]&C,w.cLR=F[D+3]<<24&n|F[D]<<16&p|F[D+1]<<8&B|F[D+2]&C,w.r=w.ul*((w.cUL&p)>>16)+w.ll*((w.cLL&p)>>16)+w.ur*((w.cUR&p)>>16)+w.lr*((w.cLR&p)>>16)<<H&p,w.g=w.ul*(w.cUL&B)+w.ll*(w.cLL&B)+w.ur*
(w.cUR&B)+w.lr*(w.cLR&B)>>>G&B,w.b=w.ul*(w.cUL&C)+w.ll*(w.cLL&C)+w.ur*(w.cUR&C)+w.lr*(w.cLR&C)>>>G,w.a=w.ul*((w.cUL&n)>>>24)+w.ll*((w.cLL&n)>>>24)+w.ur*((w.cUR&n)>>>24)+w.lr*((w.cLR&n)>>>24)<<I&n,y=c(y,w.a|w.r|w.g|w.b),h[k]=(y&p)>>>16,h[k+1]=(y&B)>>>8,h[k+2]=y&C,h[k+3]=(y&n)>>>24,w.sX+=d;b+=m;w.srcYOffset+=g}}};f.loadFont=function(a,b){if(a===g)throw"font name required in loadFont.";if(-1===a.indexOf(".svg"))return b===g&&(b=ga.size),PFont.get(a,b);var c=f.loadGlyphs(a);return{name:a,css:"12px sans-serif",
glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,e=0;e<d;e++)try{c+=parseFloat(f.glyphLook(f.glyphTable[a],b[e]).horiz_adv_x)}catch(g){R.debug(g)}return c/f.glyphTable[a].units_per_em}}};f.createFont=function(a,b){return f.loadFont(a,b)};f.textFont=function(a,b){b!==g&&(a.glyph||(a=PFont.get(a.name,b)),Qa=b);ga=a;Cb=ga.name;$a=ga.ascent;Pa=ga.descent;Ea=ga.leading;la.$ensureContext().font=ga.css};
f.textSize=function(a){ga=PFont.get(Cb,a);Qa=a;$a=ga.ascent;Pa=ga.descent;Ea=ga.leading;la.$ensureContext().font=ga.css};f.textAscent=function(){return $a};f.textDescent=function(){return Pa};f.textLeading=function(a){Ea=a};f.textAlign=function(a,b){qb=a;Za=b||e.BASELINE};B.prototype.textWidth=function(a){a=Xa(a).split(/\r?\n/g);var b=0,c,d=a.length;m.font=ga.css;for(c=0;c<d;++c)b=Math.max(b,ga.measureTextWidth(a[c]));return b|0};J.prototype.textWidth=function(a){a=Xa(a).split(/\r?\n/g);var b=0,c,
d=a.length;Fa===g&&(Fa=q.createElement("canvas"));var e=Fa.getContext("2d");e.font=ga.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};f.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;
case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;
case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){R.debug(c)}};B.prototype.text$line=function(a,b,c,d,g){d=d=0;if(ga.glyph){d=f.glyphTable[Cb];m.save();m.translate(b,c+Qa);g!==e.RIGHT&&g!==e.CENTER||d.width(a);b=1/d.units_per_em*Qa;m.scale(b,b);b=0;
for(c=a.length;b<c;b++)try{f.glyphLook(d,a[b]).draw()}catch(h){R.debug(h)}Va()}else if(a&&"fillText"in m){Q&&(m.fillStyle=f.color.toString(Oa),Q=!1);if(g===e.RIGHT||g===e.CENTER)d=ga.measureTextWidth(a),d=g===e.RIGHT?-d:-d/2;m.fillText(a,b+d,c)}};J.prototype.text$line=function(a,b,c,d,f){Fa===g&&(Fa=q.createElement("canvas"));var h=m;m=Fa.getContext("2d");m.font=ga.css;var k=ga.measureTextWidth(a);Fa.width=k;Fa.height=Qa;m=Fa.getContext("2d");m.font=ga.css;m.textBaseline="top";B.prototype.text$line(a,
0,0,0,e.LEFT);a=Fa.width/Fa.height;m=h;m.bindTexture(m.TEXTURE_2D,Yc);m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,Fa);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.LINEAR);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.LINEAR);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);h=0;f===e.RIGHT?h=-k:f===e.CENTER&&(h=-k/2);f=new F;k=0.5*Qa;f.translate(b+h-k/2,c-k,d);f.scale(-a*k,-k,k);f.translate(-1,-1,
-1);f.transpose();b=new F;b.scale(1,-1,1);b.apply(P.array());b.transpose();m.useProgram(N);ea("aVertex2d",N,"aVertex",3,Fc);ea("aTextureCoord2d",N,"aTextureCoord",2,Gc);ca("uSampler2d",N,"uSampler",[0]);ca("uIsDrawingText2d",N,"uIsDrawingText",!0);Z("uModel2d",N,"uModel",!1,f.array());Z("uView2d",N,"uView",!1,b.array());Y("uColor2d",N,"uColor",pa);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,Hc);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0)};f.text=function(){kc!==e.SHAPE&&(3===arguments.length?Qb(Xa(arguments[0]),
arguments[1],arguments[2],0):4===arguments.length?Qb(Xa(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?bc(Xa(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&bc(Xa(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};f.textMode=function(a){kc=a};f.loadGlyphs=function(a){var b,c,d,e,h,k,n,r,s,u,y,v,w=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},z=
function(a){var f=w("[A-Za-z][0-9\\- ]+|Z",a);v="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";r=a=k=h=e=d=c=b=0;s="";u=f.length-1;for(var g=0;g<u;g++){var n=f[g][0];a=w("[0-9\\-]+",n);switch(n[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);v+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);v+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);v+="curContext.lineTo("+b+","+-c+");";break;
case "V":c=parseFloat(a[0][0]);v+="curContext.lineTo("+b+","+-c+");";break;case "T":h=parseFloat(a[0][0]);k=parseFloat(a[1][0]);"Q"===s||"T"===s?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(e-c,2)),r=Math.PI+Math.atan2(d-b,e-c),d=b+Math.sin(r)*a,e=c+Math.cos(r)*a):(d=b,e=c);v+="curContext.quadraticCurveTo("+d+","+-e+","+h+","+-k+");";b=h;c=k;break;case "Q":d=parseFloat(a[0][0]);e=parseFloat(a[1][0]);h=parseFloat(a[2][0]);k=parseFloat(a[3][0]);v+="curContext.quadraticCurveTo("+d+","+-e+","+h+","+-k+");";
b=h;c=k;break;case "Z":v+="curContext.closePath();"}s=n[0]}v+="afterPathDraw();";v+="curContext.translate("+y+",0);";v+="}}";return(new Function("beforePathDraw","afterPathDraw",v))(function(){m.save();return la.$ensureContext()},function(){Aa();Da();Va()})},A=function(b){var c=b.getElementsByTagName("font");f.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];f.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));f.glyphTable[a].ascent=
parseFloat(c.getAttribute("ascent"));f.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var e=b[d].getAttribute("unicode"),h=b[d].getAttribute("glyph-name");y=b[d].getAttribute("horiz-adv-x");null===y&&(y=f.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==g&&(v=z(n),f.glyphTable[a][h]={name:h,unicode:e,horiz_adv_x:y,draw:v.draw})}};f.glyphTable[a]={};(function(){var b;try{b=q.implementation.createDocument("","",null)}catch(c){R.debug(c.message);
return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){R.debug(d);try{var e=new p.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){R.debug(d)}}})(a);return f.glyphTable[a]};f.param=function(a){var b="data-processing-"+a;if(X.hasAttribute(b))return X.getAttribute(b);for(var b=0,c=X.childNodes.length;b<c;++b){var d=X.childNodes.item(b);if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return ha.params.hasOwnProperty(a)?
ha.params[a]:null};G.prototype.translate=I("translate");G.prototype.transform=I("transform");G.prototype.scale=I("scale");G.prototype.pushMatrix=I("pushMatrix");G.prototype.popMatrix=I("popMatrix");G.prototype.resetMatrix=I("resetMatrix");G.prototype.applyMatrix=I("applyMatrix");G.prototype.rotate=I("rotate");G.prototype.rotateZ=I("rotateZ");G.prototype.shearX=I("shearX");G.prototype.shearY=I("shearY");G.prototype.redraw=I("redraw");G.prototype.toImageData=I("toImageData");G.prototype.ambientLight=
I("ambientLight");G.prototype.directionalLight=I("directionalLight");G.prototype.lightFalloff=I("lightFalloff");G.prototype.lightSpecular=I("lightSpecular");G.prototype.pointLight=I("pointLight");G.prototype.noLights=I("noLights");G.prototype.spotLight=I("spotLight");G.prototype.beginCamera=I("beginCamera");G.prototype.endCamera=I("endCamera");G.prototype.frustum=I("frustum");G.prototype.box=I("box");G.prototype.sphere=I("sphere");G.prototype.ambient=I("ambient");G.prototype.emissive=I("emissive");
G.prototype.shininess=I("shininess");G.prototype.specular=I("specular");G.prototype.fill=I("fill");G.prototype.stroke=I("stroke");G.prototype.strokeWeight=I("strokeWeight");G.prototype.smooth=I("smooth");G.prototype.noSmooth=I("noSmooth");G.prototype.point=I("point");G.prototype.vertex=I("vertex");G.prototype.endShape=I("endShape");G.prototype.bezierVertex=I("bezierVertex");G.prototype.curveVertex=I("curveVertex");G.prototype.curve=I("curve");G.prototype.line=I("line");G.prototype.bezier=I("bezier");
G.prototype.rect=I("rect");G.prototype.ellipse=I("ellipse");G.prototype.background=I("background");G.prototype.image=I("image");G.prototype.textWidth=I("textWidth");G.prototype.text$line=I("text$line");G.prototype.$ensureContext=I("$ensureContext");G.prototype.$newPMatrix=I("$newPMatrix");G.prototype.size=function(a,b,c){Na(c===e.WEBGL?"3D":"2D");f.size(a,b,c)};G.prototype.$init=z;B.prototype.$init=function(){f.size(f.width,f.height);m.lineCap="round";f.noSmooth();f.disableContextMenu()};J.prototype.$init=
function(){f.use3DContext=!0;f.disableContextMenu()};aa.prototype.$ensureContext=function(){return m};X.getAttribute("tabindex")||X.setAttribute("tabindex",0);if(Tb)ha=new R.Sketch,Na(),f.size=function(a,b,c){c&&c===e.WEBGL?Na("3D"):Na("2D");f.size(a,b,c)};else{ha=h instanceof R.Sketch?h:"function"===typeof h?new R.Sketch(h):h?R.compile(h):new R.Sketch(function(){});f.externals.sketch=ha;Na();X.onfocus=function(){f.focused=!0};X.onblur=function(){f.focused=!1;ha.options.globalKeyEvents||(f.__keyPressed=
!1,kb=[],rb=null)};ha.options.pauseOnBlur&&(E(p,"focus",function(){Ha&&f.loop()}),E(p,"blur",function(){Ha&&hb&&(f.noLoop(),Ha=!0);f.__keyPressed=!1;kb=[];rb=null}));var Oc=ha.options.globalKeyEvents?p:X;E(Oc,"keydown",uc);E(Oc,"keypress",Sb);E(Oc,"keyup",cc);for(var Zb in R.lib)R.lib.hasOwnProperty(Zb)&&(R.lib[Zb].hasOwnProperty("attach")?R.lib[Zb].attach(f):R.lib[Zb]instanceof Function&&R.lib[Zb].call(this));var qd=function(a){if(ha.imageCache.pending||PFont.preloading.pending(100))p.setTimeout(function(){qd(a)},
100);else{if(p.opera){var b,c,d=ha.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&q.body.removeChild(c),delete d[b])}ha.attach(a,n);ha.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),ha.onSetup());ib();a.draw&&(Ha?a.loop():a.redraw())}};this.externals.canvas.id!==g&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+wb.length);$b[this.externals.canvas.id]=wb.length;wb.push(this);qd(f)}};R.debug=function(){return"console"in p?function(a){p.console.log("Processing.js: "+
a)}:z}();R.prototype=n;R.instances=wb;R.getInstanceById=function(a){return wb[$b[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),d=c.length,e,g;d--;)e=c[d],g=e.replace("()",""),a[g]=b(e)})(n);return R}},
{}],28:[function(C,z,V){var h={virtEquals:C("./Helpers/virtEquals"),virtHashCode:C("./Helpers/virtHashCode"),ObjectIterator:C("./Helpers/ObjectIterator"),PConstants:C("./Helpers/PConstants"),ArrayList:C("./Objects/ArrayList"),HashMap:C("./Objects/HashMap"),PVector:C("./Objects/PVector"),PFont:C("./Objects/PFont"),Char:C("./Objects/Char"),XMLAttribute:C("./Objects/XMLAttribute"),XMLElement:C("./Objects/XMLElement"),PMatrix2D:C("./Objects/PMatrix2D"),PMatrix3D:C("./Objects/PMatrix3D"),PShape:C("./Objects/PShape"),
colors:C("./Objects/webcolors"),PShapeSVG:C("./Objects/PShapeSVG"),CommonFunctions:C("./P5Functions/commonFunctions"),defaultScope:C("./Helpers/defaultScope"),Processing:C("./Processing"),setupParser:C("./Parser/Parser"),finalize:C("./Helpers/finalizeProcessing")};h.extend={withMath:C("./P5Functions/Math.js"),withProxyFunctions:C("./P5Functions/JavaProxyFunctions")(h.virtHashCode,h.virtEquals),withTouch:C("./P5Functions/touchmouse"),withCommonFunctions:h.CommonFunctions.withCommonFunctions};z.exports=
function(g,k){var n=function(){},a=h.virtEquals,b=h.virtHashCode,c=h.PConstants,d=h.CommonFunctions,p=h.ObjectIterator,q=h.Char,z=h.XMLAttribute(),e=h.ArrayList({virtHashCode:b,virtEquals:a}),a=h.HashMap({virtHashCode:b,virtEquals:a}),b=h.PVector({PConstants:c}),V=h.PFont({Browser:g,noop:n}),z=h.XMLElement({Browser:g,XMLAttribute:z}),da=h.PMatrix2D({p:d}),H=h.PMatrix3D({p:d}),da=h.PShape({PConstants:c,PMatrix2D:da,PMatrix3D:H}),d=h.PShapeSVG({CommonFunctions:d,PConstants:c,PShape:da,XMLElement:z,
colors:h.colors}),c=h.defaultScope({ArrayList:e,HashMap:a,PVector:b,PFont:V,PShapeSVG:d,ObjectIterator:p,PConstants:c,Char:q,XMLElement:z,XML:z}),p=h.Processing({defaultScope:c,Browser:g,extend:h.extend,noop:n}),p=h.setupParser(p,{Browser:g,aFunctions:k,defaultScope:c});return p=h.finalize(p,{version:C("../package.json").version,isDomPresent:g.isDomPresent,window:g.window,document:g.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,"./Helpers/defaultScope":6,
"./Helpers/finalizeProcessing":7,"./Helpers/virtEquals":8,"./Helpers/virtHashCode":9,"./Objects/ArrayList":10,"./Objects/Char":11,"./Objects/HashMap":12,"./Objects/PFont":13,"./Objects/PMatrix2D":14,"./Objects/PMatrix3D":15,"./Objects/PShape":16,"./Objects/PShapeSVG":17,"./Objects/PVector":18,"./Objects/XMLAttribute":19,"./Objects/XMLElement":20,"./Objects/webcolors":21,"./P5Functions/JavaProxyFunctions":22,"./P5Functions/Math.js":23,"./P5Functions/commonFunctions":24,"./P5Functions/touchmouse":25,
"./Parser/Parser":26,"./Processing":27}]},{},[1]);

;(function(){
var g, aa = this;
function q(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == q(a);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
var fa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ga(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function ia(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
;function ka(a, b) {
  this.Y = [];
  this.Wa = b;
  for (var c = !0, d = a.length - 1;0 <= d;d--) {
    var e = a[d] | 0;
    c && e == b || (this.Y[d] = e, c = !1);
  }
}
var la = {};
function ma(a) {
  if (-128 <= a && 128 > a) {
    var b = la[a];
    if (b) {
      return b;
    }
  }
  b = new ka([a | 0], 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (la[a] = b);
  return b;
}
function oa(a) {
  if (isNaN(a) || !isFinite(a)) {
    return pa;
  }
  if (0 > a) {
    return oa(-a).ha();
  }
  for (var b = [], c = 1, d = 0;a >= c;d++) {
    b[d] = a / c | 0, c *= qa;
  }
  return new ka(b, 0);
}
var qa = 4294967296, pa = ma(0), ra = ma(1), sa = ma(16777216);
g = ka.prototype;
g.Ac = function() {
  return 0 < this.Y.length ? this.Y[0] : this.Wa;
};
g.pb = function() {
  if (this.ma()) {
    return -this.ha().pb();
  }
  for (var a = 0, b = 1, c = 0;c < this.Y.length;c++) {
    var d = ta(this, c), a = a + (0 <= d ? d : qa + d) * b, b = b * qa
  }
  return a;
};
g.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.Ma()) {
    return "0";
  }
  if (this.ma()) {
    return "-" + this.ha().toString(a);
  }
  for (var b = oa(Math.pow(a, 6)), c = this, d = "";;) {
    var e = va(c, b), f = (c.Nb(e.multiply(b)).Ac() >>> 0).toString(a), c = e;
    if (c.Ma()) {
      return f + d;
    }
    for (;6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
function ta(a, b) {
  return 0 > b ? 0 : b < a.Y.length ? a.Y[b] : a.Wa;
}
g.Ma = function() {
  if (0 != this.Wa) {
    return !1;
  }
  for (var a = 0;a < this.Y.length;a++) {
    if (0 != this.Y[a]) {
      return !1;
    }
  }
  return !0;
};
g.ma = function() {
  return -1 == this.Wa;
};
g.sc = function(a) {
  return 0 < this.compare(a);
};
g.tc = function(a) {
  return 0 <= this.compare(a);
};
g.Vb = function() {
  return 0 > this.compare(sa);
};
g.Wb = function(a) {
  return 0 >= this.compare(a);
};
g.compare = function(a) {
  a = this.Nb(a);
  return a.ma() ? -1 : a.Ma() ? 0 : 1;
};
g.ha = function() {
  return this.wc().add(ra);
};
g.add = function(a) {
  for (var b = Math.max(this.Y.length, a.Y.length), c = [], d = 0, e = 0;e <= b;e++) {
    var f = d + (ta(this, e) & 65535) + (ta(a, e) & 65535), h = (f >>> 16) + (ta(this, e) >>> 16) + (ta(a, e) >>> 16), d = h >>> 16, f = f & 65535, h = h & 65535;
    c[e] = h << 16 | f;
  }
  return new ka(c, c[c.length - 1] & -2147483648 ? -1 : 0);
};
g.Nb = function(a) {
  return this.add(a.ha());
};
g.multiply = function(a) {
  if (this.Ma() || a.Ma()) {
    return pa;
  }
  if (this.ma()) {
    return a.ma() ? this.ha().multiply(a.ha()) : this.ha().multiply(a).ha();
  }
  if (a.ma()) {
    return this.multiply(a.ha()).ha();
  }
  if (this.Vb() && a.Vb()) {
    return oa(this.pb() * a.pb());
  }
  for (var b = this.Y.length + a.Y.length, c = [], d = 0;d < 2 * b;d++) {
    c[d] = 0;
  }
  for (d = 0;d < this.Y.length;d++) {
    for (var e = 0;e < a.Y.length;e++) {
      var f = ta(this, d) >>> 16, h = ta(this, d) & 65535, k = ta(a, e) >>> 16, l = ta(a, e) & 65535;
      c[2 * d + 2 * e] += h * l;
      wa(c, 2 * d + 2 * e);
      c[2 * d + 2 * e + 1] += f * l;
      wa(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 1] += h * k;
      wa(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 2] += f * k;
      wa(c, 2 * d + 2 * e + 2);
    }
  }
  for (d = 0;d < b;d++) {
    c[d] = c[2 * d + 1] << 16 | c[2 * d];
  }
  for (d = b;d < 2 * b;d++) {
    c[d] = 0;
  }
  return new ka(c, 0);
};
function wa(a, b) {
  for (;(a[b] & 65535) != a[b];) {
    a[b + 1] += a[b] >>> 16, a[b] &= 65535;
  }
}
function va(a, b) {
  if (b.Ma()) {
    throw Error("division by zero");
  }
  if (a.Ma()) {
    return pa;
  }
  if (a.ma()) {
    return b.ma() ? va(a.ha(), b.ha()) : va(a.ha(), b).ha();
  }
  if (b.ma()) {
    return va(a, b.ha()).ha();
  }
  if (30 < a.Y.length) {
    if (a.ma() || b.ma()) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var c = ra, d = b;d.Wb(a);) {
      c = c.shiftLeft(1), d = d.shiftLeft(1);
    }
    for (var e = c.cb(1), f = d.cb(1), h, d = d.cb(2), c = c.cb(2);!d.Ma();) {
      h = f.add(d), h.Wb(a) && (e = e.add(c), f = h), d = d.cb(1), c = c.cb(1);
    }
    return e;
  }
  c = pa;
  for (d = a;d.tc(b);) {
    e = Math.max(1, Math.floor(d.pb() / b.pb()));
    f = Math.ceil(Math.log(e) / Math.LN2);
    f = 48 >= f ? 1 : Math.pow(2, f - 48);
    h = oa(e);
    for (var k = h.multiply(b);k.ma() || k.sc(d);) {
      e -= f, h = oa(e), k = h.multiply(b);
    }
    h.Ma() && (h = ra);
    c = c.add(h);
    d = d.Nb(k);
  }
  return c;
}
g.wc = function() {
  for (var a = this.Y.length, b = [], c = 0;c < a;c++) {
    b[c] = ~this.Y[c];
  }
  return new ka(b, ~this.Wa);
};
g.shiftLeft = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.Y.length + b + (0 < a ? 1 : 0), d = [], e = 0;e < c;e++) {
    d[e] = 0 < a ? ta(this, e - b) << a | ta(this, e - b - 1) >>> 32 - a : ta(this, e - b);
  }
  return new ka(d, this.Wa);
};
g.cb = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.Y.length - b, d = [], e = 0;e < c;e++) {
    d[e] = 0 < a ? ta(this, e + b) >>> a | ta(this, e + b + 1) << 32 - a : ta(this, e + b);
  }
  return new ka(d, this.Wa);
};
function za(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = za.prototype;
g.Sa = "";
g.set = function(a) {
  this.Sa = "" + a;
};
g.append = function(a, b, c) {
  this.Sa += String(a);
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Sa += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Sa = "";
};
g.toString = function() {
  return this.Sa;
};
var Aa = Array.prototype.indexOf ? function(a, b, c) {
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
function Ba(a, b) {
  a.sort(b || Da);
}
function Fa(a, b) {
  for (var c = Array(a.length), d = 0;d < a.length;d++) {
    c[d] = {index:d, value:a[d]};
  }
  var e = b || Da;
  Ba(c, function(a, b) {
    return e(a.value, b.value) || a.index - b.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = c[d].value;
  }
}
function Da(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Ga(a) {
  Ga[" "](a);
  return a;
}
Ga[" "] = function() {
};
var Ha;
if ("undefined" === typeof Ia) {
  var Ia = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
if ("undefined" === typeof Ja) {
  var Ja = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  }
}
var Ka = null;
if ("undefined" === typeof Na) {
  var Na = null
}
function Oa() {
  return new Pa(null, 5, [Qa, !0, Ra, !0, Sa, !1, Ta, !1, Va, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Wa(a) {
  return null == a;
}
function Xa(a) {
  return a instanceof Array;
}
function Ya(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
}
function t(a, b) {
  return a[q(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function v(a, b) {
  var c = null == b ? null : b.constructor, c = r(r(c) ? c.Ub : c) ? c.wb : q(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Za(a) {
  var b = a.wb;
  return r(b) ? b : "" + w(a);
}
var $a = "undefined" !== typeof Symbol && "function" === q(Symbol) ? Symbol.iterator : "@@iterator";
function bb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function cb() {
}
function db() {
}
var eb = function eb(b) {
  if (null != b && null != b.T) {
    return b.T(b);
  }
  var c = eb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = eb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("ICounted.-count", b);
}, fb = function fb(b) {
  if (null != b && null != b.U) {
    return b.U(b);
  }
  var c = fb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = fb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IEmptyableCollection.-empty", b);
}, gb = function gb(b, c) {
  if (null != b && null != b.R) {
    return b.R(b, c);
  }
  var d = gb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = gb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("ICollection.-conj", b);
};
function hb() {
}
var z = function z(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return z.b(arguments[0], arguments[1]);
    case 3:
      return z.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
z.b = function(a, b) {
  if (null != a && null != a.P) {
    return a.P(a, b);
  }
  var c = z[q(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = z._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw v("IIndexed.-nth", a);
};
z.f = function(a, b, c) {
  if (null != a && null != a.ja) {
    return a.ja(a, b, c);
  }
  var d = z[q(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = z._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw v("IIndexed.-nth", a);
};
z.w = 3;
var ib = function ib(b) {
  if (null != b && null != b.W) {
    return b.W(b);
  }
  var c = ib[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ib._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("ISeq.-first", b);
}, jb = function jb(b) {
  if (null != b && null != b.fa) {
    return b.fa(b);
  }
  var c = jb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = jb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("ISeq.-rest", b);
};
function kb() {
}
function lb() {
}
var mb = function mb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return mb.b(arguments[0], arguments[1]);
    case 3:
      return mb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
mb.b = function(a, b) {
  if (null != a && null != a.M) {
    return a.M(a, b);
  }
  var c = mb[q(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = mb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw v("ILookup.-lookup", a);
};
mb.f = function(a, b, c) {
  if (null != a && null != a.I) {
    return a.I(a, b, c);
  }
  var d = mb[q(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = mb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw v("ILookup.-lookup", a);
};
mb.w = 3;
var nb = function nb(b, c) {
  if (null != b && null != b.Bb) {
    return b.Bb(b, c);
  }
  var d = nb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = nb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IAssociative.-contains-key?", b);
}, pb = function pb(b, c, d) {
  if (null != b && null != b.eb) {
    return b.eb(b, c, d);
  }
  var e = pb[q(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = pb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw v("IAssociative.-assoc", b);
};
function qb() {
}
var rb = function rb(b, c) {
  if (null != b && null != b.Fb) {
    return b.Fb(b, c);
  }
  var d = rb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = rb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IMap.-dissoc", b);
};
function sb() {
}
var tb = function tb(b) {
  if (null != b && null != b.Gb) {
    return b.Gb();
  }
  var c = tb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = tb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IMapEntry.-key", b);
}, ub = function ub(b) {
  if (null != b && null != b.Hb) {
    return b.Hb();
  }
  var c = ub[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ub._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IMapEntry.-val", b);
};
function vb() {
}
var wb = function wb(b, c) {
  if (null != b && null != b.Qb) {
    return b.Qb(0, c);
  }
  var d = wb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = wb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("ISet.-disjoin", b);
}, yb = function yb(b) {
  if (null != b && null != b.hb) {
    return b.hb(b);
  }
  var c = yb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = yb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IStack.-peek", b);
}, zb = function zb(b) {
  if (null != b && null != b.ib) {
    return b.ib(b);
  }
  var c = zb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = zb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IStack.-pop", b);
};
function Ab() {
}
var Bb = function Bb(b, c, d) {
  if (null != b && null != b.Ib) {
    return b.Ib(b, c, d);
  }
  var e = Bb[q(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Bb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw v("IVector.-assoc-n", b);
}, Cb = function Cb(b) {
  if (null != b && null != b.cc) {
    return b.state;
  }
  var c = Cb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Cb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IDeref.-deref", b);
};
function Db() {
}
var Eb = function Eb(b) {
  if (null != b && null != b.L) {
    return b.L(b);
  }
  var c = Eb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Eb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IMeta.-meta", b);
}, Fb = function Fb(b, c) {
  if (null != b && null != b.O) {
    return b.O(b, c);
  }
  var d = Fb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Fb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IWithMeta.-with-meta", b);
};
function Gb() {
}
var Hb = function Hb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Hb.b(arguments[0], arguments[1]);
    case 3:
      return Hb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
Hb.b = function(a, b) {
  if (null != a && null != a.Z) {
    return a.Z(a, b);
  }
  var c = Hb[q(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = Hb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw v("IReduce.-reduce", a);
};
Hb.f = function(a, b, c) {
  if (null != a && null != a.$) {
    return a.$(a, b, c);
  }
  var d = Hb[q(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = Hb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw v("IReduce.-reduce", a);
};
Hb.w = 3;
var Ib = function Ib(b, c) {
  if (null != b && null != b.s) {
    return b.s(b, c);
  }
  var d = Ib[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Ib._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IEquiv.-equiv", b);
}, Jb = function Jb(b) {
  if (null != b && null != b.K) {
    return b.K(b);
  }
  var c = Jb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Jb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IHash.-hash", b);
};
function Mb() {
}
var Nb = function Nb(b) {
  if (null != b && null != b.S) {
    return b.S(b);
  }
  var c = Nb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Nb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("ISeqable.-seq", b);
};
function Ob() {
}
function Pb() {
}
function Qb() {
}
var Rb = function Rb(b) {
  if (null != b && null != b.vb) {
    return b.vb(b);
  }
  var c = Rb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Rb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IReversible.-rseq", b);
}, Sb = function Sb(b, c) {
  if (null != b && null != b.Tb) {
    return b.Tb(0, c);
  }
  var d = Sb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Sb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IWriter.-write", b);
}, Tb = function Tb(b, c, d) {
  if (null != b && null != b.Sb) {
    return b.Sb(0, c, d);
  }
  var e = Tb[q(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Tb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw v("IWatchable.-notify-watches", b);
}, Ub = function Ub(b) {
  if (null != b && null != b.Za) {
    return b.Za(b);
  }
  var c = Ub[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Ub._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IEditableCollection.-as-transient", b);
}, Vb = function Vb(b, c) {
  if (null != b && null != b.Ta) {
    return b.Ta(b, c);
  }
  var d = Vb[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Vb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("ITransientCollection.-conj!", b);
}, Wb = function Wb(b) {
  if (null != b && null != b.$a) {
    return b.$a(b);
  }
  var c = Wb[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Wb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("ITransientCollection.-persistent!", b);
}, Xb = function Xb(b, c, d) {
  if (null != b && null != b.jb) {
    return b.jb(b, c, d);
  }
  var e = Xb[q(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Xb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw v("ITransientAssociative.-assoc!", b);
}, $b = function $b(b, c, d) {
  if (null != b && null != b.Rb) {
    return b.Rb(0, c, d);
  }
  var e = $b[q(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = $b._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw v("ITransientVector.-assoc-n!", b);
};
function ac() {
}
var bc = function bc(b, c) {
  if (null != b && null != b.Ya) {
    return b.Ya(b, c);
  }
  var d = bc[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = bc._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IComparable.-compare", b);
}, cc = function cc(b) {
  if (null != b && null != b.Ob) {
    return b.Ob();
  }
  var c = cc[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = cc._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IChunk.-drop-first", b);
}, dc = function dc(b) {
  if (null != b && null != b.Db) {
    return b.Db(b);
  }
  var c = dc[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = dc._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IChunkedSeq.-chunked-first", b);
}, ec = function ec(b) {
  if (null != b && null != b.Eb) {
    return b.Eb(b);
  }
  var c = ec[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ec._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IChunkedSeq.-chunked-rest", b);
}, fc = function fc(b) {
  if (null != b && null != b.Cb) {
    return b.Cb(b);
  }
  var c = fc[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = fc._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IChunkedNext.-chunked-next", b);
}, gc = function gc(b, c) {
  if (null != b && null != b.lc) {
    return b.lc(b, c);
  }
  var d = gc[q(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = gc._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw v("IReset.-reset!", b);
}, hc = function hc(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return hc.b(arguments[0], arguments[1]);
    case 3:
      return hc.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return hc.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return hc.G(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
hc.b = function(a, b) {
  if (null != a && null != a.nc) {
    return a.nc(a, b);
  }
  var c = hc[q(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = hc._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw v("ISwap.-swap!", a);
};
hc.f = function(a, b, c) {
  if (null != a && null != a.oc) {
    return a.oc(a, b, c);
  }
  var d = hc[q(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = hc._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw v("ISwap.-swap!", a);
};
hc.D = function(a, b, c, d) {
  if (null != a && null != a.pc) {
    return a.pc(a, b, c, d);
  }
  var e = hc[q(null == a ? null : a)];
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = hc._;
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw v("ISwap.-swap!", a);
};
hc.G = function(a, b, c, d, e) {
  if (null != a && null != a.qc) {
    return a.qc(a, b, c, d, e);
  }
  var f = hc[q(null == a ? null : a)];
  if (null != f) {
    return f.G ? f.G(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = hc._;
  if (null != f) {
    return f.G ? f.G(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw v("ISwap.-swap!", a);
};
hc.w = 5;
var ic = function ic(b) {
  if (null != b && null != b.sa) {
    return b.sa(b);
  }
  var c = ic[q(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ic._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw v("IIterable.-iterator", b);
};
function jc(a) {
  this.yc = a;
  this.l = 1073741824;
  this.A = 0;
}
jc.prototype.Tb = function(a, b) {
  return this.yc.append(b);
};
function kc(a) {
  var b = new za;
  a.N(null, new jc(b), Oa());
  return "" + w(b);
}
var lc = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function mc(a) {
  a = lc(a | 0, -862048943);
  return lc(a << 15 | a >>> -15, 461845907);
}
function nc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return lc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function oc(a, b) {
  var c = (a | 0) ^ b, c = lc(c ^ c >>> 16, -2048144789), c = lc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function pc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = nc(c, mc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ mc(a.charCodeAt(a.length - 1)) : b;
  return oc(b, lc(2, a.length));
}
var qc = {}, rc = 0;
function sc(a) {
  255 < rc && (qc = {}, rc = 0);
  if (null == a) {
    return 0;
  }
  var b = qc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = lc(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    qc[a] = b;
    rc += 1;
  }
  return a = b;
}
function tc(a) {
  if (null != a && (a.l & 4194304 || a.Fc)) {
    return a.K(null);
  }
  if ("number" === typeof a) {
    if (r(isFinite(a))) {
      return Math.floor(a) % 2147483647;
    }
    switch(a) {
      case Infinity:
        return 2146435072;
      case -Infinity:
        return -1048576;
      default:
        return 2146959360;
    }
  } else {
    return !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = sc(a), 0 !== a && (a = mc(a), a = nc(0, a), a = oc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : Jb(a), a;
  }
}
function uc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function vc(a, b) {
  if (a.va === b.va) {
    return 0;
  }
  var c = Ya(a.da);
  if (r(c ? b.da : c)) {
    return -1;
  }
  if (r(a.da)) {
    if (Ya(b.da)) {
      return 1;
    }
    c = Da(a.da, b.da);
    return 0 === c ? Da(a.name, b.name) : c;
  }
  return Da(a.name, b.name);
}
function xc(a, b, c, d, e) {
  this.da = a;
  this.name = b;
  this.va = c;
  this.Xa = d;
  this.ea = e;
  this.l = 2154168321;
  this.A = 4096;
}
g = xc.prototype;
g.toString = function() {
  return this.va;
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return b instanceof xc ? this.va === b.va : !1;
};
g.call = function() {
  function a(a, b, c) {
    return A.f ? A.f(b, this, c) : A.call(null, b, this, c);
  }
  function b(a, b) {
    return A.b ? A.b(b, this) : A.call(null, b, this);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return A.b ? A.b(a, this) : A.call(null, a, this);
};
g.b = function(a, b) {
  return A.f ? A.f(a, this, b) : A.call(null, a, this, b);
};
g.L = function() {
  return this.ea;
};
g.O = function(a, b) {
  return new xc(this.da, this.name, this.va, this.Xa, b);
};
g.K = function() {
  var a = this.Xa;
  return null != a ? a : this.Xa = a = uc(pc(this.name), sc(this.da));
};
g.N = function(a, b) {
  return Sb(b, this.va);
};
var yc = function yc(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return yc.a(arguments[0]);
    case 2:
      return yc.b(arguments[0], arguments[1]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
yc.a = function(a) {
  if (a instanceof xc) {
    return a;
  }
  var b = a.indexOf("/");
  return 1 > b ? yc.b(null, a) : yc.b(a.substring(0, b), a.substring(b + 1, a.length));
};
yc.b = function(a, b) {
  var c = null != a ? [w(a), w("/"), w(b)].join("") : b;
  return new xc(a, b, c, null, null);
};
yc.w = 2;
function B(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.l & 8388608 || a.mc)) {
    return a.S(null);
  }
  if (Xa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new D(a, 0, null);
  }
  if (t(Mb, a)) {
    return Nb(a);
  }
  throw Error([w(a), w(" is not ISeqable")].join(""));
}
function E(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.l & 64 || a.gb)) {
    return a.W(null);
  }
  a = B(a);
  return null == a ? null : ib(a);
}
function H(a) {
  return null != a ? null != a && (a.l & 64 || a.gb) ? a.fa(null) : (a = B(a)) ? jb(a) : I : I;
}
function J(a) {
  return null == a ? null : null != a && (a.l & 128 || a.ub) ? a.ba(null) : B(H(a));
}
var K = function K(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return K.a(arguments[0]);
    case 2:
      return K.b(arguments[0], arguments[1]);
    default:
      return K.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
K.a = function() {
  return !0;
};
K.b = function(a, b) {
  return null == a ? null == b : a === b || Ib(a, b);
};
K.j = function(a, b, c) {
  for (;;) {
    if (K.b(a, b)) {
      if (J(c)) {
        a = b, b = E(c), c = J(c);
      } else {
        return K.b(b, E(c));
      }
    } else {
      return !1;
    }
  }
};
K.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return K.j(b, a, c);
};
K.w = 2;
function zc(a) {
  this.B = a;
}
zc.prototype.next = function() {
  if (null != this.B) {
    var a = E(this.B);
    this.B = J(this.B);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function Ac(a) {
  return new zc(B(a));
}
function Bc(a, b) {
  var c = mc(a), c = nc(0, c);
  return oc(c, b);
}
function Cc(a) {
  var b = 0, c = 1;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = lc(31, c) + tc(E(a)) | 0, a = J(a);
    } else {
      return Bc(c, b);
    }
  }
}
var Dc = Bc(1, 0);
function Ec(a) {
  var b = 0, c = 0;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = c + tc(E(a)) | 0, a = J(a);
    } else {
      return Bc(c, b);
    }
  }
}
var Fc = Bc(0, 0);
db["null"] = !0;
eb["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.fb = !0;
Date.prototype.Ya = function(a, b) {
  if (b instanceof Date) {
    return Da(this.valueOf(), b.valueOf());
  }
  throw Error([w("Cannot compare "), w(this), w(" to "), w(b)].join(""));
};
Ib.number = function(a, b) {
  return a === b;
};
cb["function"] = !0;
Db["function"] = !0;
Eb["function"] = function() {
  return null;
};
Jb._ = function(a) {
  return a[da] || (a[da] = ++ea);
};
function Gc(a) {
  return a + 1;
}
function Hc(a) {
  return Cb(a);
}
function Ic(a, b) {
  var c = eb(a);
  if (0 === c) {
    return b.u ? b.u() : b.call(null);
  }
  for (var d = z.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = z.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Jc(a, b, c) {
  var d = eb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = z.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Kc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.u ? b.u() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Lc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Mc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.b ? b.b(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function Nc(a) {
  return null != a ? a.l & 2 || a.bc ? !0 : a.l ? !1 : t(db, a) : t(db, a);
}
function Oc(a) {
  return null != a ? a.l & 16 || a.Pb ? !0 : a.l ? !1 : t(hb, a) : t(hb, a);
}
function M(a, b, c) {
  var d = N.a ? N.a(a) : N.call(null, a);
  if (c >= d) {
    return -1;
  }
  !(0 < c) && 0 > c && (c += d, c = 0 > c ? 0 : c);
  for (;;) {
    if (c < d) {
      if (K.b(Pc ? Pc(a, c) : Qc.call(null, a, c), b)) {
        return c;
      }
      c += 1;
    } else {
      return -1;
    }
  }
}
function O(a, b, c) {
  var d = N.a ? N.a(a) : N.call(null, a);
  if (0 === d) {
    return -1;
  }
  0 < c ? (--d, c = d < c ? d : c) : c = 0 > c ? d + c : c;
  for (;;) {
    if (0 <= c) {
      if (K.b(Pc ? Pc(a, c) : Qc.call(null, a, c), b)) {
        return c;
      }
      --c;
    } else {
      return -1;
    }
  }
}
function Rc(a, b) {
  this.c = a;
  this.i = b;
}
Rc.prototype.ga = function() {
  return this.i < this.c.length;
};
Rc.prototype.next = function() {
  var a = this.c[this.i];
  this.i += 1;
  return a;
};
function D(a, b, c) {
  this.c = a;
  this.i = b;
  this.m = c;
  this.l = 166592766;
  this.A = 8192;
}
g = D.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N.a ? N.a(this) : N.call(null, this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.P = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
g.ja = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
g.sa = function() {
  return new Rc(this.c, this.i);
};
g.L = function() {
  return this.m;
};
g.ba = function() {
  return this.i + 1 < this.c.length ? new D(this.c, this.i + 1, null) : null;
};
g.T = function() {
  var a = this.c.length - this.i;
  return 0 > a ? 0 : a;
};
g.vb = function() {
  var a = eb(this);
  return 0 < a ? new Sc(this, a - 1, null) : null;
};
g.K = function() {
  return Cc(this);
};
g.s = function(a, b) {
  return Tc.b ? Tc.b(this, b) : Tc.call(null, this, b);
};
g.U = function() {
  return I;
};
g.Z = function(a, b) {
  return Mc(this.c, b, this.c[this.i], this.i + 1);
};
g.$ = function(a, b, c) {
  return Mc(this.c, b, c, this.i);
};
g.W = function() {
  return this.c[this.i];
};
g.fa = function() {
  return this.i + 1 < this.c.length ? new D(this.c, this.i + 1, null) : I;
};
g.S = function() {
  return this.i < this.c.length ? this : null;
};
g.O = function(a, b) {
  return new D(this.c, this.i, b);
};
g.R = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this);
};
D.prototype[$a] = function() {
  return Ac(this);
};
function Uc(a, b) {
  return b < a.length ? new D(a, b, null) : null;
}
function Vc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Uc(arguments[0], 0);
    case 2:
      return Uc(arguments[0], arguments[1]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Sc(a, b, c) {
  this.sb = a;
  this.i = b;
  this.m = c;
  this.l = 32374990;
  this.A = 8192;
}
g = Sc.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N.a ? N.a(this) : N.call(null, this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  return 0 < this.i ? new Sc(this.sb, this.i - 1, null) : null;
};
g.T = function() {
  return this.i + 1;
};
g.K = function() {
  return Cc(this);
};
g.s = function(a, b) {
  return Tc.b ? Tc.b(this, b) : Tc.call(null, this, b);
};
g.U = function() {
  var a = this.m;
  return Wc.b ? Wc.b(I, a) : Wc.call(null, I, a);
};
g.Z = function(a, b) {
  return Xc ? Xc(b, this) : Yc.call(null, b, this);
};
g.$ = function(a, b, c) {
  return Zc ? Zc(b, c, this) : Yc.call(null, b, c, this);
};
g.W = function() {
  return z.b(this.sb, this.i);
};
g.fa = function() {
  return 0 < this.i ? new Sc(this.sb, this.i - 1, null) : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Sc(this.sb, this.i, b);
};
g.R = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this);
};
Sc.prototype[$a] = function() {
  return Ac(this);
};
Ib._ = function(a, b) {
  return a === b;
};
var Q = function Q(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Q.u();
    case 1:
      return Q.a(arguments[0]);
    case 2:
      return Q.b(arguments[0], arguments[1]);
    default:
      return Q.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
Q.u = function() {
  return $c;
};
Q.a = function(a) {
  return a;
};
Q.b = function(a, b) {
  return null != a ? gb(a, b) : gb(I, b);
};
Q.j = function(a, b, c) {
  for (;;) {
    if (r(c)) {
      a = Q.b(a, b), b = E(c), c = J(c);
    } else {
      return Q.b(a, b);
    }
  }
};
Q.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return Q.j(b, a, c);
};
Q.w = 2;
function N(a) {
  if (null != a) {
    if (null != a && (a.l & 2 || a.bc)) {
      a = a.T(null);
    } else {
      if (Xa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (null != a && (a.l & 8388608 || a.mc)) {
            a: {
              a = B(a);
              for (var b = 0;;) {
                if (Nc(a)) {
                  a = b + eb(a);
                  break a;
                }
                a = J(a);
                b += 1;
              }
            }
          } else {
            a = eb(a);
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function ad(a, b, c) {
  for (;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return B(a) ? E(a) : c;
    }
    if (Oc(a)) {
      return z.f(a, b, c);
    }
    if (B(a)) {
      a = J(a), --b;
    } else {
      return c;
    }
  }
}
function Qc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Pc(arguments[0], arguments[1]);
    case 3:
      return R(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Pc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.l & 16 || a.Pb)) {
    return a.P(null, b);
  }
  if (Xa(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.l & 64 || a.gb)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (B(c)) {
            c = E(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Oc(c)) {
          c = z.b(c, d);
          break a;
        }
        if (B(c)) {
          c = J(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  if (t(hb, a)) {
    return z.b(a, b);
  }
  throw Error([w("nth not supported on this type "), w(Za(null == a ? null : a.constructor))].join(""));
}
function R(a, b, c) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return c;
  }
  if (null != a && (a.l & 16 || a.Pb)) {
    return a.ja(null, b, c);
  }
  if (Xa(a)) {
    return b < a.length ? a[b] : c;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : c;
  }
  if (null != a && (a.l & 64 || a.gb)) {
    return ad(a, b, c);
  }
  if (t(hb, a)) {
    return z.b(a, b);
  }
  throw Error([w("nth not supported on this type "), w(Za(null == a ? null : a.constructor))].join(""));
}
var A = function A(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return A.b(arguments[0], arguments[1]);
    case 3:
      return A.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
A.b = function(a, b) {
  return null == a ? null : null != a && (a.l & 256 || a.fc) ? a.M(null, b) : Xa(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : t(lb, a) ? mb.b(a, b) : null;
};
A.f = function(a, b, c) {
  return null != a ? null != a && (a.l & 256 || a.fc) ? a.I(null, b, c) : Xa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(lb, a) ? mb.f(a, b, c) : c : c;
};
A.w = 3;
var S = function S(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return S.f(arguments[0], arguments[1], arguments[2]);
    default:
      return S.j(arguments[0], arguments[1], arguments[2], new D(c.slice(3), 0, null));
  }
};
S.f = function(a, b, c) {
  return null != a ? pb(a, b, c) : bd([b], [c]);
};
S.j = function(a, b, c, d) {
  for (;;) {
    if (a = S.f(a, b, c), r(d)) {
      b = E(d), c = E(J(d)), d = J(J(d));
    } else {
      return a;
    }
  }
};
S.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  var d = J(c), c = E(d), d = J(d);
  return S.j(b, a, c, d);
};
S.w = 3;
function cd(a) {
  var b = ca(a);
  return b ? b : null != a ? a.ac ? !0 : a.Lc ? !1 : t(cb, a) : t(cb, a);
}
function dd(a, b) {
  this.g = a;
  this.m = b;
  this.l = 393217;
  this.A = 0;
}
g = dd.prototype;
g.L = function() {
  return this.m;
};
g.O = function(a, b) {
  return new dd(this.g, b);
};
g.ac = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G, ya) {
    a = this;
    return ed.tb ? ed.tb(a.g, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G, ya) : ed.call(null, a.g, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G, ya);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G) {
    a = this;
    return a.g.Ha ? a.g.Ha(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y, G);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y) {
    a = this;
    return a.g.Ga ? a.g.Ga(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T, Y);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T) {
    a = this;
    return a.g.Fa ? a.g.Fa(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L, T);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L) {
    a = this;
    return a.g.Ea ? a.g.Ea(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F, L);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F) {
    a = this;
    return a.g.Da ? a.g.Da(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C, F);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C) {
    a = this;
    return a.g.Ca ? a.g.Ca(b, c, d, e, f, h, k, l, m, n, p, x, u, y, C) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y, C);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, p, x, u, y) {
    a = this;
    return a.g.Ba ? a.g.Ba(b, c, d, e, f, h, k, l, m, n, p, x, u, y) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u, y);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, p, x, u) {
    a = this;
    return a.g.Aa ? a.g.Aa(b, c, d, e, f, h, k, l, m, n, p, x, u) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x, u);
  }
  function m(a, b, c, d, e, f, h, k, l, m, n, p, x) {
    a = this;
    return a.g.za ? a.g.za(b, c, d, e, f, h, k, l, m, n, p, x) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p, x);
  }
  function n(a, b, c, d, e, f, h, k, l, m, n, p) {
    a = this;
    return a.g.ya ? a.g.ya(b, c, d, e, f, h, k, l, m, n, p) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, h, k, l, m, n) {
    a = this;
    return a.g.xa ? a.g.xa(b, c, d, e, f, h, k, l, m, n) : a.g.call(null, b, c, d, e, f, h, k, l, m, n);
  }
  function u(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.g.Ka ? a.g.Ka(b, c, d, e, f, h, k, l, m) : a.g.call(null, b, c, d, e, f, h, k, l, m);
  }
  function x(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.g.Ja ? a.g.Ja(b, c, d, e, f, h, k, l) : a.g.call(null, b, c, d, e, f, h, k, l);
  }
  function y(a, b, c, d, e, f, h, k) {
    a = this;
    return a.g.Ia ? a.g.Ia(b, c, d, e, f, h, k) : a.g.call(null, b, c, d, e, f, h, k);
  }
  function C(a, b, c, d, e, f, h) {
    a = this;
    return a.g.la ? a.g.la(b, c, d, e, f, h) : a.g.call(null, b, c, d, e, f, h);
  }
  function F(a, b, c, d, e, f) {
    a = this;
    return a.g.G ? a.g.G(b, c, d, e, f) : a.g.call(null, b, c, d, e, f);
  }
  function L(a, b, c, d, e) {
    a = this;
    return a.g.D ? a.g.D(b, c, d, e) : a.g.call(null, b, c, d, e);
  }
  function T(a, b, c, d) {
    a = this;
    return a.g.f ? a.g.f(b, c, d) : a.g.call(null, b, c, d);
  }
  function Y(a, b, c) {
    a = this;
    return a.g.b ? a.g.b(b, c) : a.g.call(null, b, c);
  }
  function ya(a, b) {
    a = this;
    return a.g.a ? a.g.a(b) : a.g.call(null, b);
  }
  function Zb(a) {
    a = this;
    return a.g.u ? a.g.u() : a.g.call(null);
  }
  var G = null, G = function(G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd, fe, Ve, sg, Mh) {
    switch(arguments.length) {
      case 1:
        return Zb.call(this, G);
      case 2:
        return ya.call(this, G, ja);
      case 3:
        return Y.call(this, G, ja, na);
      case 4:
        return T.call(this, G, ja, na, ua);
      case 5:
        return L.call(this, G, ja, na, ua, xa);
      case 6:
        return F.call(this, G, ja, na, ua, xa, Ca);
      case 7:
        return C.call(this, G, ja, na, ua, xa, Ca, Ea);
      case 8:
        return y.call(this, G, ja, na, ua, xa, Ca, Ea, La);
      case 9:
        return x.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua);
      case 10:
        return u.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab);
      case 11:
        return p.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma);
      case 12:
        return n.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob);
      case 13:
        return m.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb);
      case 14:
        return l.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb);
      case 15:
        return k.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb);
      case 16:
        return h.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc);
      case 17:
        return f.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb);
      case 18:
        return e.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd);
      case 19:
        return d.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd, fe);
      case 20:
        return c.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd, fe, Ve);
      case 21:
        return b.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd, fe, Ve, sg);
      case 22:
        return a.call(this, G, ja, na, ua, xa, Ca, Ea, La, Ua, ab, Ma, ob, xb, Kb, Yb, wc, Lb, kd, fe, Ve, sg, Mh);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  G.a = Zb;
  G.b = ya;
  G.f = Y;
  G.D = T;
  G.G = L;
  G.la = F;
  G.Ia = C;
  G.Ja = y;
  G.Ka = x;
  G.xa = u;
  G.ya = p;
  G.za = n;
  G.Aa = m;
  G.Ba = l;
  G.Ca = k;
  G.Da = h;
  G.Ea = f;
  G.Fa = e;
  G.Ga = d;
  G.Ha = c;
  G.ec = b;
  G.tb = a;
  return G;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.u = function() {
  return this.g.u ? this.g.u() : this.g.call(null);
};
g.a = function(a) {
  return this.g.a ? this.g.a(a) : this.g.call(null, a);
};
g.b = function(a, b) {
  return this.g.b ? this.g.b(a, b) : this.g.call(null, a, b);
};
g.f = function(a, b, c) {
  return this.g.f ? this.g.f(a, b, c) : this.g.call(null, a, b, c);
};
g.D = function(a, b, c, d) {
  return this.g.D ? this.g.D(a, b, c, d) : this.g.call(null, a, b, c, d);
};
g.G = function(a, b, c, d, e) {
  return this.g.G ? this.g.G(a, b, c, d, e) : this.g.call(null, a, b, c, d, e);
};
g.la = function(a, b, c, d, e, f) {
  return this.g.la ? this.g.la(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f);
};
g.Ia = function(a, b, c, d, e, f, h) {
  return this.g.Ia ? this.g.Ia(a, b, c, d, e, f, h) : this.g.call(null, a, b, c, d, e, f, h);
};
g.Ja = function(a, b, c, d, e, f, h, k) {
  return this.g.Ja ? this.g.Ja(a, b, c, d, e, f, h, k) : this.g.call(null, a, b, c, d, e, f, h, k);
};
g.Ka = function(a, b, c, d, e, f, h, k, l) {
  return this.g.Ka ? this.g.Ka(a, b, c, d, e, f, h, k, l) : this.g.call(null, a, b, c, d, e, f, h, k, l);
};
g.xa = function(a, b, c, d, e, f, h, k, l, m) {
  return this.g.xa ? this.g.xa(a, b, c, d, e, f, h, k, l, m) : this.g.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.ya = function(a, b, c, d, e, f, h, k, l, m, n) {
  return this.g.ya ? this.g.ya(a, b, c, d, e, f, h, k, l, m, n) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n);
};
g.za = function(a, b, c, d, e, f, h, k, l, m, n, p) {
  return this.g.za ? this.g.za(a, b, c, d, e, f, h, k, l, m, n, p) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n, p, u) {
  return this.g.Aa ? this.g.Aa(a, b, c, d, e, f, h, k, l, m, n, p, u) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x) {
  return this.g.Ba ? this.g.Ba(a, b, c, d, e, f, h, k, l, m, n, p, u, x) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y) {
  return this.g.Ca ? this.g.Ca(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C) {
  return this.g.Da ? this.g.Da(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F) {
  return this.g.Ea ? this.g.Ea(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F);
};
g.Fa = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L) {
  return this.g.Fa ? this.g.Fa(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L);
};
g.Ga = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T) {
  return this.g.Ga ? this.g.Ga(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T);
};
g.Ha = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y) {
  return this.g.Ha ? this.g.Ha(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y);
};
g.ec = function(a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya) {
  return ed.tb ? ed.tb(this.g, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya) : ed.call(null, this.g, a, b, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya);
};
function Wc(a, b) {
  return ca(a) ? new dd(a, b) : null == a ? null : Fb(a, b);
}
function fd(a) {
  var b = null != a;
  return (b ? null != a ? a.l & 131072 || a.ic || (a.l ? 0 : t(Db, a)) : t(Db, a) : b) ? Eb(a) : null;
}
function gd(a) {
  return null == a ? null : zb(a);
}
var hd = function hd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return hd.a(arguments[0]);
    case 2:
      return hd.b(arguments[0], arguments[1]);
    default:
      return hd.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
hd.a = function(a) {
  return a;
};
hd.b = function(a, b) {
  return null == a ? null : wb(a, b);
};
hd.j = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = hd.b(a, b);
    if (r(c)) {
      b = E(c), c = J(c);
    } else {
      return a;
    }
  }
};
hd.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return hd.j(b, a, c);
};
hd.w = 2;
function id(a) {
  return null == a ? !1 : null != a ? a.l & 4096 || a.Jc ? !0 : a.l ? !1 : t(vb, a) : t(vb, a);
}
function jd(a) {
  return null != a ? a.l & 16777216 || a.Ic ? !0 : a.l ? !1 : t(Ob, a) : t(Ob, a);
}
function ld(a) {
  return null == a ? !1 : null != a ? a.l & 1024 || a.gc ? !0 : a.l ? !1 : t(qb, a) : t(qb, a);
}
function md(a) {
  return null != a ? a.l & 16384 || a.Kc ? !0 : a.l ? !1 : t(Ab, a) : t(Ab, a);
}
function nd(a) {
  return null != a ? a.A & 512 || a.Ec ? !0 : !1 : !1;
}
function od(a) {
  var b = [];
  ha(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function pd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var qd = {};
function rd(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
}
function sd(a, b) {
  return A.f(a, b, qd) === qd ? !1 : !0;
}
var td = function td(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return td.a(arguments[0]);
    case 2:
      return td.b(arguments[0], arguments[1]);
    default:
      return td.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
td.a = function() {
  return !0;
};
td.b = function(a, b) {
  return !K.b(a, b);
};
td.j = function(a, b, c) {
  if (K.b(a, b)) {
    return !1;
  }
  a = ud([a, b]);
  for (b = c;;) {
    var d = E(b);
    c = J(b);
    if (r(b)) {
      if (sd(a, d)) {
        return !1;
      }
      a = Q.b(a, d);
      b = c;
    } else {
      return !0;
    }
  }
};
td.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return td.j(b, a, c);
};
td.w = 2;
function vd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return Da(a, b);
    }
    throw Error([w("Cannot compare "), w(a), w(" to "), w(b)].join(""));
  }
  if (null != a ? a.A & 2048 || a.fb || (a.A ? 0 : t(ac, a)) : t(ac, a)) {
    return bc(a, b);
  }
  if ("string" !== typeof a && !Xa(a) && !0 !== a && !1 !== a || (null == a ? null : a.constructor) !== (null == b ? null : b.constructor)) {
    throw Error([w("Cannot compare "), w(a), w(" to "), w(b)].join(""));
  }
  return Da(a, b);
}
function wd(a, b) {
  var c = N(a), d = N(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = vd(Pc(a, d), Pc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function xd() {
  return K.b(vd, vd) ? vd : function(a, b) {
    var c = vd.b ? vd.b(a, b) : vd.call(null, a, b);
    return "number" === typeof c ? c : r(c) ? -1 : r(vd.b ? vd.b(b, a) : vd.call(null, b, a)) ? 1 : 0;
  };
}
function yd(a) {
  if (B(a)) {
    a = zd.a ? zd.a(a) : zd.call(null, a);
    var b = xd();
    Fa(a, b);
    return B(a);
  }
  return I;
}
function Yc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Xc(arguments[0], arguments[1]);
    case 3:
      return Zc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Xc(a, b) {
  var c = B(b);
  if (c) {
    var d = E(c), c = J(c);
    return Ad ? Ad(a, d, c) : Bd.call(null, a, d, c);
  }
  return a.u ? a.u() : a.call(null);
}
function Zc(a, b, c) {
  for (c = B(c);;) {
    if (c) {
      var d = E(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = J(c);
    } else {
      return b;
    }
  }
}
function Bd(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Cd(arguments[0], arguments[1]);
    case 3:
      return Ad(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Cd(a, b) {
  return null != b && (b.l & 524288 || b.kc) ? b.Z(null, a) : Xa(b) ? Kc(b, a) : "string" === typeof b ? Kc(b, a) : t(Gb, b) ? Hb.b(b, a) : Xc(a, b);
}
function Ad(a, b, c) {
  return null != c && (c.l & 524288 || c.kc) ? c.$(null, a, b) : Xa(c) ? Lc(c, a, b) : "string" === typeof c ? Lc(c, a, b) : t(Gb, c) ? Hb.f(c, a, b) : Zc(a, b, c);
}
function Dd(a) {
  return a;
}
function Ed(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = Ad(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var Fd = function Fd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Fd.u();
    case 1:
      return Fd.a(arguments[0]);
    case 2:
      return Fd.b(arguments[0], arguments[1]);
    default:
      return Fd.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
Fd.u = function() {
  return 0;
};
Fd.a = function(a) {
  return a;
};
Fd.b = function(a, b) {
  return a + b;
};
Fd.j = function(a, b, c) {
  return Ad(Fd, a + b, c);
};
Fd.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return Fd.j(b, a, c);
};
Fd.w = 2;
var Gd = function Gd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Gd.u();
    case 1:
      return Gd.a(arguments[0]);
    case 2:
      return Gd.b(arguments[0], arguments[1]);
    default:
      return Gd.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
Gd.u = function() {
  return 1;
};
Gd.a = function(a) {
  return a;
};
Gd.b = function(a, b) {
  return a * b;
};
Gd.j = function(a, b, c) {
  return Ad(Gd, a * b, c);
};
Gd.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return Gd.j(b, a, c);
};
Gd.w = 2;
function Hd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor(c) : Math.ceil(c);
}
function Id(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function w(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return w.u();
    case 1:
      return w.a(arguments[0]);
    default:
      return w.j(arguments[0], new D(c.slice(1), 0, null));
  }
};
w.u = function() {
  return "";
};
w.a = function(a) {
  return null == a ? "" : "" + a;
};
w.j = function(a, b) {
  for (var c = new za("" + w(a)), d = b;;) {
    if (r(d)) {
      c = c.append("" + w(E(d))), d = J(d);
    } else {
      return c.toString();
    }
  }
};
w.v = function(a) {
  var b = E(a);
  a = J(a);
  return w.j(b, a);
};
w.w = 1;
function Tc(a, b) {
  var c;
  if (jd(b)) {
    if (Nc(a) && Nc(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = B(a);
        for (var d = B(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && K.b(E(c), E(d))) {
            c = J(c), d = J(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return rd(c);
}
function Jd(a, b, c, d, e) {
  this.m = a;
  this.first = b;
  this.Na = c;
  this.count = d;
  this.o = e;
  this.l = 65937646;
  this.A = 8192;
}
g = Jd.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, this.count);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  return 1 === this.count ? null : this.Na;
};
g.T = function() {
  return this.count;
};
g.hb = function() {
  return this.first;
};
g.ib = function() {
  return jb(this);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Fb(I, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return 1 === this.count ? I : this.Na;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Jd(b, this.first, this.Na, this.count, this.o);
};
g.R = function(a, b) {
  return new Jd(this.m, b, this, this.count + 1, null);
};
Jd.prototype[$a] = function() {
  return Ac(this);
};
function Kd(a) {
  this.m = a;
  this.l = 65937614;
  this.A = 8192;
}
g = Kd.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  return null;
};
g.T = function() {
  return 0;
};
g.hb = function() {
  return null;
};
g.ib = function() {
  throw Error("Can't pop empty list");
};
g.K = function() {
  return Dc;
};
g.s = function(a, b) {
  return (null != b ? b.l & 33554432 || b.Gc || (b.l ? 0 : t(Pb, b)) : t(Pb, b)) || jd(b) ? null == B(b) : !1;
};
g.U = function() {
  return this;
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return null;
};
g.fa = function() {
  return I;
};
g.S = function() {
  return null;
};
g.O = function(a, b) {
  return new Kd(b);
};
g.R = function(a, b) {
  return new Jd(this.m, b, null, 1, null);
};
var I = new Kd(null);
Kd.prototype[$a] = function() {
  return Ac(this);
};
function Ld(a) {
  return (null != a ? a.l & 134217728 || a.Hc || (a.l ? 0 : t(Qb, a)) : t(Qb, a)) ? Rb(a) : Ad(Q, I, a);
}
function Md(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  a: {
    c = 0 < b.length ? new D(b.slice(0), 0, null) : null;
    if (c instanceof D && 0 === c.i) {
      b = c.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != c) {
            b.push(c.W(null)), c = c.ba(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var c = b.length, e = I;;) {
      if (0 < c) {
        d = c - 1, e = e.R(null, b[c - 1]), c = d;
      } else {
        break a;
      }
    }
  }
  return e;
}
function Nd(a, b, c, d) {
  this.m = a;
  this.first = b;
  this.Na = c;
  this.o = d;
  this.l = 65929452;
  this.A = 8192;
}
g = Nd.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  return null == this.Na ? null : B(this.Na);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return null == this.Na ? I : this.Na;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Nd(b, this.first, this.Na, this.o);
};
g.R = function(a, b) {
  return new Nd(null, b, this, null);
};
Nd.prototype[$a] = function() {
  return Ac(this);
};
function P(a, b) {
  var c = null == b;
  return (c ? c : null != b && (b.l & 64 || b.gb)) ? new Nd(null, a, b, null) : new Nd(null, a, B(b), null);
}
function Od(a, b) {
  if (a.ta === b.ta) {
    return 0;
  }
  var c = Ya(a.da);
  if (r(c ? b.da : c)) {
    return -1;
  }
  if (r(a.da)) {
    if (Ya(b.da)) {
      return 1;
    }
    c = Da(a.da, b.da);
    return 0 === c ? Da(a.name, b.name) : c;
  }
  return Da(a.name, b.name);
}
function U(a, b, c, d) {
  this.da = a;
  this.name = b;
  this.ta = c;
  this.Xa = d;
  this.l = 2153775105;
  this.A = 4096;
}
g = U.prototype;
g.toString = function() {
  return [w(":"), w(this.ta)].join("");
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return b instanceof U ? this.ta === b.ta : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.b(c, this);
      case 3:
        return A.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return A.b(c, this);
  };
  a.f = function(a, c, d) {
    return A.f(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return A.b(a, this);
};
g.b = function(a, b) {
  return A.f(a, this, b);
};
g.K = function() {
  var a = this.Xa;
  return null != a ? a : this.Xa = a = uc(pc(this.name), sc(this.da)) + 2654435769 | 0;
};
g.N = function(a, b) {
  return Sb(b, [w(":"), w(this.ta)].join(""));
};
var Pd = function Pd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Pd.a(arguments[0]);
    case 2:
      return Pd.b(arguments[0], arguments[1]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
Pd.a = function(a) {
  if (a instanceof U) {
    return a;
  }
  if (a instanceof xc) {
    var b;
    if (null != a && (a.A & 4096 || a.jc)) {
      b = a.da;
    } else {
      throw Error([w("Doesn't support namespace: "), w(a)].join(""));
    }
    return new U(b, Qd.a ? Qd.a(a) : Qd.call(null, a), a.va, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
};
Pd.b = function(a, b) {
  return new U(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
};
Pd.w = 2;
function V(a, b, c, d) {
  this.m = a;
  this.bb = b;
  this.B = c;
  this.o = d;
  this.l = 32374988;
  this.A = 1;
}
g = V.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
function Rd(a) {
  null != a.bb && (a.B = a.bb.u ? a.bb.u() : a.bb.call(null), a.bb = null);
  return a.B;
}
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  Nb(this);
  return null == this.B ? null : J(this.B);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  Nb(this);
  return null == this.B ? null : E(this.B);
};
g.fa = function() {
  Nb(this);
  return null != this.B ? H(this.B) : I;
};
g.S = function() {
  Rd(this);
  if (null == this.B) {
    return null;
  }
  for (var a = this.B;;) {
    if (a instanceof V) {
      a = Rd(a);
    } else {
      return this.B = a, B(this.B);
    }
  }
};
g.O = function(a, b) {
  return new V(b, this.bb, this.B, this.o);
};
g.R = function(a, b) {
  return P(b, this);
};
V.prototype[$a] = function() {
  return Ac(this);
};
function Sd(a, b) {
  this.zb = a;
  this.end = b;
  this.l = 2;
  this.A = 0;
}
Sd.prototype.add = function(a) {
  this.zb[this.end] = a;
  return this.end += 1;
};
Sd.prototype.J = function() {
  var a = new Td(this.zb, 0, this.end);
  this.zb = null;
  return a;
};
Sd.prototype.T = function() {
  return this.end;
};
function Ud(a) {
  return new Sd(Array(a), 0);
}
function Td(a, b, c) {
  this.c = a;
  this.X = b;
  this.end = c;
  this.l = 524306;
  this.A = 0;
}
g = Td.prototype;
g.T = function() {
  return this.end - this.X;
};
g.P = function(a, b) {
  return this.c[this.X + b];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.end - this.X ? this.c[this.X + b] : c;
};
g.Ob = function() {
  if (this.X === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Td(this.c, this.X + 1, this.end);
};
g.Z = function(a, b) {
  return Mc(this.c, b, this.c[this.X], this.X + 1);
};
g.$ = function(a, b, c) {
  return Mc(this.c, b, c, this.X);
};
function Vd(a, b, c, d) {
  this.J = a;
  this.ua = b;
  this.m = c;
  this.o = d;
  this.l = 31850732;
  this.A = 1536;
}
g = Vd.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  if (1 < eb(this.J)) {
    return new Vd(cc(this.J), this.ua, this.m, null);
  }
  var a = Nb(this.ua);
  return null == a ? null : a;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.W = function() {
  return z.b(this.J, 0);
};
g.fa = function() {
  return 1 < eb(this.J) ? new Vd(cc(this.J), this.ua, this.m, null) : null == this.ua ? I : this.ua;
};
g.S = function() {
  return this;
};
g.Db = function() {
  return this.J;
};
g.Eb = function() {
  return null == this.ua ? I : this.ua;
};
g.O = function(a, b) {
  return new Vd(this.J, this.ua, b, this.o);
};
g.R = function(a, b) {
  return P(b, this);
};
g.Cb = function() {
  return null == this.ua ? null : this.ua;
};
Vd.prototype[$a] = function() {
  return Ac(this);
};
function Wd(a, b) {
  return 0 === eb(a) ? b : new Vd(a, b, null, null);
}
function Xd(a, b) {
  a.add(b);
}
function zd(a) {
  for (var b = [];;) {
    if (B(a)) {
      b.push(E(a)), a = J(a);
    } else {
      return b;
    }
  }
}
function Yd(a, b) {
  if (Nc(b)) {
    return N(b);
  }
  for (var c = 0, d = B(b);;) {
    if (null != d && c < a) {
      c += 1, d = J(d);
    } else {
      return c;
    }
  }
}
var Zd = function Zd(b) {
  return null == b ? null : null == J(b) ? B(E(b)) : P(E(b), Zd(J(b)));
}, $d = function $d(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return $d.u();
    case 1:
      return $d.a(arguments[0]);
    case 2:
      return $d.b(arguments[0], arguments[1]);
    default:
      return $d.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
$d.u = function() {
  return new V(null, function() {
    return null;
  }, null, null);
};
$d.a = function(a) {
  return new V(null, function() {
    return a;
  }, null, null);
};
$d.b = function(a, b) {
  return new V(null, function() {
    var c = B(a);
    return c ? nd(c) ? Wd(dc(c), $d.b(ec(c), b)) : P(E(c), $d.b(H(c), b)) : b;
  }, null, null);
};
$d.j = function(a, b, c) {
  return function e(a, b) {
    return new V(null, function() {
      var c = B(a);
      return c ? nd(c) ? Wd(dc(c), e(ec(c), b)) : P(E(c), e(H(c), b)) : r(b) ? e(E(b), J(b)) : null;
    }, null, null);
  }($d.b(a, b), c);
};
$d.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return $d.j(b, a, c);
};
$d.w = 2;
var ae = function ae(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return ae.u();
    case 1:
      return ae.a(arguments[0]);
    case 2:
      return ae.b(arguments[0], arguments[1]);
    default:
      return ae.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
ae.u = function() {
  return Ub($c);
};
ae.a = function(a) {
  return a;
};
ae.b = function(a, b) {
  return Vb(a, b);
};
ae.j = function(a, b, c) {
  for (;;) {
    if (a = Vb(a, b), r(c)) {
      b = E(c), c = J(c);
    } else {
      return a;
    }
  }
};
ae.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return ae.j(b, a, c);
};
ae.w = 2;
function be(a, b, c) {
  var d = B(c);
  if (0 === b) {
    return a.u ? a.u() : a.call(null);
  }
  c = ib(d);
  var e = jb(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = ib(e), f = jb(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = ib(f), h = jb(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = ib(h), k = jb(h);
  if (4 === b) {
    return a.D ? a.D(c, d, e, f) : a.D ? a.D(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = ib(k), l = jb(k);
  if (5 === b) {
    return a.G ? a.G(c, d, e, f, h) : a.G ? a.G(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = ib(l), m = jb(l);
  if (6 === b) {
    return a.la ? a.la(c, d, e, f, h, k) : a.la ? a.la(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = ib(m), n = jb(m);
  if (7 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l) : a.Ia ? a.Ia(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = ib(n), p = jb(n);
  if (8 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, m) : a.Ja ? a.Ja(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = ib(p), u = jb(p);
  if (9 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, m, n) : a.Ka ? a.Ka(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var p = ib(u), x = jb(u);
  if (10 === b) {
    return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p) : a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
  }
  var u = ib(x), y = jb(x);
  if (11 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, u) : a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, u) : a.call(null, c, d, e, f, h, k, l, m, n, p, u);
  }
  var x = ib(y), C = jb(y);
  if (12 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, p, u, x) : a.za ? a.za(c, d, e, f, h, k, l, m, n, p, u, x) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x);
  }
  var y = ib(C), F = jb(C);
  if (13 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, u, x, y) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, u, x, y) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y);
  }
  var C = ib(F), L = jb(F);
  if (14 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, u, x, y, C) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, u, x, y, C) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C);
  }
  var F = ib(L), T = jb(L);
  if (15 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F);
  }
  var L = ib(T), Y = jb(T);
  if (16 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L);
  }
  var T = ib(Y), ya = jb(Y);
  if (17 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T);
  }
  var Y = ib(ya), Zb = jb(ya);
  if (18 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y);
  }
  ya = ib(Zb);
  Zb = jb(Zb);
  if (19 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya);
  }
  var G = ib(Zb);
  jb(Zb);
  if (20 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya, G) : a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya, G) : a.call(null, c, d, e, f, h, k, l, m, n, p, u, x, y, C, F, L, T, Y, ya, G);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function ed(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return ce(arguments[0], arguments[1]);
    case 3:
      return de(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ee(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ge(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return he(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new D(b.slice(5), 0, null));
  }
}
function ce(a, b) {
  var c = a.w;
  if (a.v) {
    var d = Yd(c + 1, b);
    return d <= c ? be(a, d, b) : a.v(b);
  }
  return a.apply(a, zd(b));
}
function de(a, b, c) {
  b = P(b, c);
  c = a.w;
  if (a.v) {
    var d = Yd(c + 1, b);
    return d <= c ? be(a, d, b) : a.v(b);
  }
  return a.apply(a, zd(b));
}
function ee(a, b, c, d) {
  b = P(b, P(c, d));
  c = a.w;
  return a.v ? (d = Yd(c + 1, b), d <= c ? be(a, d, b) : a.v(b)) : a.apply(a, zd(b));
}
function ge(a, b, c, d, e) {
  b = P(b, P(c, P(d, e)));
  c = a.w;
  return a.v ? (d = Yd(c + 1, b), d <= c ? be(a, d, b) : a.v(b)) : a.apply(a, zd(b));
}
function he(a, b, c, d, e, f) {
  b = P(b, P(c, P(d, P(e, Zd(f)))));
  c = a.w;
  return a.v ? (d = Yd(c + 1, b), d <= c ? be(a, d, b) : a.v(b)) : a.apply(a, zd(b));
}
var ie = function ie() {
  "undefined" === typeof Ha && (Ha = function(b, c) {
    this.vc = b;
    this.uc = c;
    this.l = 393216;
    this.A = 0;
  }, Ha.prototype.O = function(b, c) {
    return new Ha(this.vc, c);
  }, Ha.prototype.L = function() {
    return this.uc;
  }, Ha.prototype.ga = function() {
    return !1;
  }, Ha.prototype.next = function() {
    return Error("No such element");
  }, Ha.prototype.remove = function() {
    return Error("Unsupported operation");
  }, Ha.Mc = function() {
    return new W(null, 2, 5, X, [Wc(je, new Pa(null, 1, [ke, Md(le, Md($c))], null)), me], null);
  }, Ha.Ub = !0, Ha.wb = "cljs.core/t_cljs$core10268", Ha.rc = function(b) {
    return Sb(b, "cljs.core/t_cljs$core10268");
  });
  return new Ha(ie, ne);
};
function oe(a, b) {
  for (;;) {
    if (null == B(b)) {
      return !0;
    }
    var c;
    c = E(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (r(c)) {
      c = a;
      var d = J(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function pe(a, b) {
  for (;;) {
    if (B(b)) {
      var c;
      c = E(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (r(c)) {
        return c;
      }
      c = a;
      var d = J(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function qe(a) {
  return function() {
    function b(b, c) {
      return Ya(a.b ? a.b(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ya(a.a ? a.a(b) : a.call(null, b));
    }
    function d() {
      return Ya(a.u ? a.u() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
            h[f] = arguments[f + 2], ++f;
          }
          f = new D(h, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Ya(ee(a, b, d, e));
      }
      b.w = 2;
      b.v = function(a) {
        var b = E(a);
        a = J(a);
        var d = E(a);
        a = H(a);
        return c(b, d, a);
      };
      b.j = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, n = Array(arguments.length - 2);m < n.length;) {
              n[m] = arguments[m + 2], ++m;
            }
            m = new D(n, 0);
          }
          return f.j(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.w = 2;
    e.v = f.v;
    e.u = d;
    e.a = c;
    e.b = b;
    e.j = f.j;
    return e;
  }();
}
var re = function re(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return re.u();
    case 1:
      return re.a(arguments[0]);
    case 2:
      return re.b(arguments[0], arguments[1]);
    case 3:
      return re.f(arguments[0], arguments[1], arguments[2]);
    default:
      return re.j(arguments[0], arguments[1], arguments[2], new D(c.slice(3), 0, null));
  }
};
re.u = function() {
  return Dd;
};
re.a = function(a) {
  return a;
};
re.b = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.f ? b.f(c, d, e) : b.call(null, c, d, e);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.b ? b.b(c, d) : b.call(null, c, d);
      return a.a ? a.a(e) : a.call(null, e);
    }
    function e(c) {
      c = b.a ? b.a(c) : b.call(null, c);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function f() {
      var c = b.u ? b.u() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new D(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        c = ge(b, c, e, f, h);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.w = 3;
      c.v = function(a) {
        var b = E(a);
        a = J(a);
        var c = E(a);
        a = J(a);
        var e = E(a);
        a = H(a);
        return d(b, c, e, a);
      };
      c.j = d;
      return c;
    }(), h = function(a, b, h, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var u = null;
          if (3 < arguments.length) {
            for (var u = 0, x = Array(arguments.length - 3);u < x.length;) {
              x[u] = arguments[u + 3], ++u;
            }
            u = new D(x, 0);
          }
          return k.j(a, b, h, u);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.w = 3;
    h.v = k.v;
    h.u = f;
    h.a = e;
    h.b = d;
    h.f = c;
    h.j = k.j;
    return h;
  }();
};
re.f = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.f ? c.f(d, e, f) : c.call(null, d, e, f);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.b ? c.b(d, e) : c.call(null, d, e);
      f = b.a ? b.a(f) : b.call(null, f);
      return a.a ? a.a(f) : a.call(null, f);
    }
    function f(d) {
      d = c.a ? c.a(d) : c.call(null, d);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.u ? c.u() : c.call(null);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new D(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        d = ge(c, d, f, h, k);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      d.w = 3;
      d.v = function(a) {
        var b = E(a);
        a = J(a);
        var c = E(a);
        a = J(a);
        var d = E(a);
        a = H(a);
        return e(b, c, d, a);
      };
      d.j = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var x = null;
          if (3 < arguments.length) {
            for (var x = 0, y = Array(arguments.length - 3);x < y.length;) {
              y[x] = arguments[x + 3], ++x;
            }
            x = new D(y, 0);
          }
          return l.j(a, b, c, x);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.w = 3;
    k.v = l.v;
    k.u = h;
    k.a = f;
    k.b = e;
    k.f = d;
    k.j = l.j;
    return k;
  }();
};
re.j = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new D(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = ce(E(a), b);
        for (var d = J(a);;) {
          if (d) {
            b = E(d).call(null, b), d = J(d);
          } else {
            return b;
          }
        }
      }
      b.w = 0;
      b.v = function(a) {
        a = B(a);
        return c(a);
      };
      b.j = c;
      return b;
    }();
  }(Ld(P(a, P(b, P(c, d)))));
};
re.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  var d = J(c), c = E(d), d = J(d);
  return re.j(b, a, c, d);
};
re.w = 3;
function se(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Bc = c;
  this.$b = d;
  this.A = 16386;
  this.l = 6455296;
}
g = se.prototype;
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return this === b;
};
g.cc = function() {
  return this.state;
};
g.L = function() {
  return this.m;
};
g.Sb = function(a, b, c) {
  a = B(this.$b);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.P(null, f), k = R(h, 0, null), h = R(h, 1, null);
      h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = B(a)) {
        nd(a) ? (d = dc(a), a = ec(a), k = d, e = N(d), d = k) : (d = E(a), k = R(d, 0, null), h = R(d, 1, null), h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c), a = J(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.K = function() {
  return this[da] || (this[da] = ++ea);
};
function te(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return ue(arguments[0]);
    default:
      return c = arguments[0], b = new D(b.slice(1), 0, null), d = null != b && (b.l & 64 || b.gb) ? ce(ve, b) : b, b = A.b(d, Sa), d = A.b(d, we), new se(c, b, d, null);
  }
}
function ue(a) {
  return new se(a, null, null, null);
}
function xe(a, b) {
  if (a instanceof se) {
    var c = a.Bc;
    if (null != c && !r(c.a ? c.a(b) : c.call(null, b))) {
      throw Error("Validator rejected reference state");
    }
    c = a.state;
    a.state = b;
    null != a.$b && Tb(a, c, b);
    return b;
  }
  return gc(a, b);
}
var ye = function ye(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return ye.b(arguments[0], arguments[1]);
    case 3:
      return ye.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ye.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ye.j(arguments[0], arguments[1], arguments[2], arguments[3], new D(c.slice(4), 0, null));
  }
};
ye.b = function(a, b) {
  var c;
  a instanceof se ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = xe(a, c)) : c = hc.b(a, b);
  return c;
};
ye.f = function(a, b, c) {
  if (a instanceof se) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = xe(a, b);
  } else {
    a = hc.f(a, b, c);
  }
  return a;
};
ye.D = function(a, b, c, d) {
  if (a instanceof se) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = xe(a, b);
  } else {
    a = hc.D(a, b, c, d);
  }
  return a;
};
ye.j = function(a, b, c, d, e) {
  return a instanceof se ? xe(a, ge(b, a.state, c, d, e)) : hc.G(a, b, c, d, e);
};
ye.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  var d = J(c), c = E(d), e = J(d), d = E(e), e = J(e);
  return ye.j(b, a, c, d, e);
};
ye.w = 4;
var Z = function Z(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Z.a(arguments[0]);
    case 2:
      return Z.b(arguments[0], arguments[1]);
    case 3:
      return Z.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Z.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Z.j(arguments[0], arguments[1], arguments[2], arguments[3], new D(c.slice(4), 0, null));
  }
};
Z.a = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.a ? a.a(d) : a.call(null, d);
        return b.b ? b.b(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      function e() {
        return b.u ? b.u() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new D(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = de(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.w = 2;
        c.v = function(a) {
          var b = E(a);
          a = J(a);
          var c = E(a);
          a = H(a);
          return d(b, c, a);
        };
        c.j = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new D(p, 0);
            }
            return h.j(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.w = 2;
      f.v = h.v;
      f.u = e;
      f.a = d;
      f.b = c;
      f.j = h.j;
      return f;
    }();
  };
};
Z.b = function(a, b) {
  return new V(null, function() {
    var c = B(b);
    if (c) {
      if (nd(c)) {
        for (var d = dc(c), e = N(d), f = Ud(e), h = 0;;) {
          if (h < e) {
            Xd(f, function() {
              var b = z.b(d, h);
              return a.a ? a.a(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Wd(f.J(), Z.b(a, ec(c)));
      }
      return P(function() {
        var b = E(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Z.b(a, H(c)));
    }
    return null;
  }, null, null);
};
Z.f = function(a, b, c) {
  return new V(null, function() {
    var d = B(b), e = B(c);
    if (d && e) {
      var f = P, h;
      h = E(d);
      var k = E(e);
      h = a.b ? a.b(h, k) : a.call(null, h, k);
      d = f(h, Z.f(a, H(d), H(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Z.D = function(a, b, c, d) {
  return new V(null, function() {
    var e = B(b), f = B(c), h = B(d);
    if (e && f && h) {
      var k = P, l;
      l = E(e);
      var m = E(f), n = E(h);
      l = a.f ? a.f(l, m, n) : a.call(null, l, m, n);
      e = k(l, Z.D(a, H(e), H(f), H(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Z.j = function(a, b, c, d, e) {
  var f = function k(a) {
    return new V(null, function() {
      var b = Z.b(B, a);
      return oe(Dd, b) ? P(Z.b(E, b), k(Z.b(H, b))) : null;
    }, null, null);
  };
  return Z.b(function() {
    return function(b) {
      return ce(a, b);
    };
  }(f), f(Q.j(e, d, Vc([c, b], 0))));
};
Z.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  var d = J(c), c = E(d), e = J(d), d = E(e), e = J(e);
  return Z.j(b, a, c, d, e);
};
Z.w = 4;
function ze(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new V(null, function() {
    if (0 < a) {
      var c = B(b);
      return c ? P(E(c), ze(a - 1, H(c))) : null;
    }
    return null;
  }, null, null);
}
function Ae(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new V(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = B(b);
      if (0 < a && e) {
        var f = a - 1, e = H(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Be(a) {
  return new V(null, function() {
    return P(a, Be(a));
  }, null, null);
}
function Ce(a, b) {
  return ze(a, Be(b));
}
function De(a) {
  return new V(null, function() {
    return P(a.u ? a.u() : a.call(null), De(a));
  }, null, null);
}
var Ee = function Ee(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Ee.b(arguments[0], arguments[1]);
    default:
      return Ee.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
Ee.b = function(a, b) {
  return new V(null, function() {
    var c = B(a), d = B(b);
    return c && d ? P(E(c), P(E(d), Ee.b(H(c), H(d)))) : null;
  }, null, null);
};
Ee.j = function(a, b, c) {
  return new V(null, function() {
    var d = Z.b(B, Q.j(c, b, Vc([a], 0)));
    return oe(Dd, d) ? $d.b(Z.b(E, d), ce(Ee, Z.b(H, d))) : null;
  }, null, null);
};
Ee.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return Ee.j(b, a, c);
};
Ee.w = 2;
function Fe(a, b) {
  return new V(null, function() {
    var c = B(b);
    if (c) {
      if (nd(c)) {
        for (var d = dc(c), e = N(d), f = Ud(e), h = 0;;) {
          if (h < e) {
            var k;
            k = z.b(d, h);
            k = a.a ? a.a(k) : a.call(null, k);
            r(k) && (k = z.b(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Wd(f.J(), Fe(a, ec(c)));
      }
      d = E(c);
      c = H(c);
      return r(a.a ? a.a(d) : a.call(null, d)) ? P(d, Fe(a, c)) : Fe(a, c);
    }
    return null;
  }, null, null);
}
function Ge(a, b) {
  return Fe(qe(a), b);
}
function He(a) {
  return function c(a) {
    return new V(null, function() {
      var e = P, f;
      r(jd.a ? jd.a(a) : jd.call(null, a)) ? (f = Vc([B.a ? B.a(a) : B.call(null, a)], 0), f = ce($d, de(Z, c, f))) : f = null;
      return e(a, f);
    }, null, null);
  }(a);
}
function Ie(a) {
  return Fe(function(a) {
    return !jd(a);
  }, H(He(a)));
}
var Je = function Je(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Je.b(arguments[0], arguments[1]);
    case 3:
      return Je.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
Je.b = function(a, b) {
  return null != a ? null != a && (a.A & 4 || a.dc) ? Wc(Wb(Ad(Vb, Ub(a), b)), fd(a)) : Ad(gb, a, b) : Ad(Q, I, b);
};
Je.f = function(a, b, c) {
  return null != a && (a.A & 4 || a.dc) ? Wc(Wb(Ed(b, ae, Ub(a), c)), fd(a)) : Ed(b, Q, a, c);
};
Je.w = 3;
function Ke(a, b, c) {
  return new V(null, function() {
    var d = B(c);
    if (d) {
      var e = ze(a, d);
      return a === N(e) ? P(e, Ke(a, b, Ae(b, d))) : null;
    }
    return null;
  }, null, null);
}
var Le = function Le(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return Le.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Le.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Le.G(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Le.la(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Le.j(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new D(c.slice(6), 0, null));
  }
};
Le.f = function(a, b, c) {
  b = B(b);
  var d = E(b);
  return (b = J(b)) ? S.f(a, d, Le.f(A.b(a, d), b, c)) : S.f(a, d, function() {
    var b = A.b(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
Le.D = function(a, b, c, d) {
  b = B(b);
  var e = E(b);
  return (b = J(b)) ? S.f(a, e, Le.D(A.b(a, e), b, c, d)) : S.f(a, e, function() {
    var b = A.b(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
Le.G = function(a, b, c, d, e) {
  b = B(b);
  var f = E(b);
  return (b = J(b)) ? S.f(a, f, Le.G(A.b(a, f), b, c, d, e)) : S.f(a, f, function() {
    var b = A.b(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
Le.la = function(a, b, c, d, e, f) {
  b = B(b);
  var h = E(b);
  return (b = J(b)) ? S.f(a, h, Le.la(A.b(a, h), b, c, d, e, f)) : S.f(a, h, function() {
    var b = A.b(a, h);
    return c.D ? c.D(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Le.j = function(a, b, c, d, e, f, h) {
  var k = B(b);
  b = E(k);
  return (k = J(k)) ? S.f(a, b, he(Le, A.b(a, b), k, c, d, Vc([e, f, h], 0))) : S.f(a, b, he(c, A.b(a, b), d, e, f, Vc([h], 0)));
};
Le.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  var d = J(c), c = E(d), e = J(d), d = E(e), f = J(e), e = E(f), h = J(f), f = E(h), h = J(h);
  return Le.j(b, a, c, d, e, f, h);
};
Le.w = 6;
function Me(a, b) {
  this.F = a;
  this.c = b;
}
function Ne(a) {
  return new Me(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Oe(a) {
  return new Me(a.F, bb(a.c));
}
function Pe(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Qe(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ne(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Re = function Re(b, c, d, e) {
  var f = Oe(d), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Re(b, c - 5, d, e) : Qe(null, c - 5, e), f.c[h] = b);
  return f;
};
function Se(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Te(a, b) {
  if (b >= Pe(a)) {
    return a.aa;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Ue(a, b) {
  return 0 <= b && b < a.h ? Te(a, b) : Se(b, a.h);
}
var We = function We(b, c, d, e, f) {
  var h = Oe(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = We(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Xe = function Xe(b, c, d) {
  var e = b.h - 2 >>> c & 31;
  if (5 < c) {
    b = Xe(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Oe(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Oe(d);
  d.c[e] = null;
  return d;
};
function Ye(a, b, c, d, e, f) {
  this.i = a;
  this.qb = b;
  this.c = c;
  this.na = d;
  this.start = e;
  this.end = f;
}
Ye.prototype.ga = function() {
  return this.i < this.end;
};
Ye.prototype.next = function() {
  32 === this.i - this.qb && (this.c = Te(this.na, this.i), this.qb += 32);
  var a = this.c[this.i & 31];
  this.i += 1;
  return a;
};
function W(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.aa = e;
  this.o = f;
  this.l = 167668511;
  this.A = 8196;
}
g = W.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.P = function(a, b) {
  return Ue(this, b)[b & 31];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.h ? Te(this, b)[b & 31] : c;
};
g.Ib = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return Pe(this) <= b ? (a = bb(this.aa), a[b & 31] = c, new W(this.m, this.h, this.shift, this.root, a, null)) : new W(this.m, this.h, this.shift, We(this, this.shift, this.root, b, c), this.aa, null);
  }
  if (b === this.h) {
    return gb(this, c);
  }
  throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.h), w("]")].join(""));
};
g.sa = function() {
  var a = this.h;
  return new Ye(0, 0, 0 < N(this) ? Te(this, 0) : null, this, 0, a);
};
g.L = function() {
  return this.m;
};
g.T = function() {
  return this.h;
};
g.Gb = function() {
  return z.b(this, 0);
};
g.Hb = function() {
  return z.b(this, 1);
};
g.hb = function() {
  return 0 < this.h ? z.b(this, this.h - 1) : null;
};
g.ib = function() {
  if (0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.h) {
    return Fb($c, this.m);
  }
  if (1 < this.h - Pe(this)) {
    return new W(this.m, this.h - 1, this.shift, this.root, this.aa.slice(0, -1), null);
  }
  var a = Te(this, this.h - 2), b = Xe(this, this.shift, this.root), b = null == b ? X : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new W(this.m, c, this.shift - 5, b.c[0], a, null) : new W(this.m, c, this.shift, b, a, null);
};
g.vb = function() {
  return 0 < this.h ? new Sc(this, this.h - 1, null) : null;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  if (b instanceof W) {
    if (this.h === N(b)) {
      for (var c = ic(this), d = ic(b);;) {
        if (r(c.ga())) {
          var e = c.next(), f = d.next();
          if (!K.b(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Tc(this, b);
  }
};
g.Za = function() {
  return new Ze(this.h, this.shift, $e.a ? $e.a(this.root) : $e.call(null, this.root), af.a ? af.a(this.aa) : af.call(null, this.aa));
};
g.U = function() {
  return Wc($c, this.m);
};
g.Z = function(a, b) {
  return Ic(this, b);
};
g.$ = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = Te(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.b ? b.b(d, h) : b.call(null, d, h), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.eb = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.S = function() {
  if (0 === this.h) {
    return null;
  }
  if (32 >= this.h) {
    return new D(this.aa, 0, null);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return bf ? bf(this, a, 0, 0) : cf.call(null, this, a, 0, 0);
};
g.O = function(a, b) {
  return new W(b, this.h, this.shift, this.root, this.aa, this.o);
};
g.R = function(a, b) {
  if (32 > this.h - Pe(this)) {
    for (var c = this.aa.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.aa[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.m, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ne(null), d.c[0] = this.root, e = Qe(null, this.shift, new Me(null, this.aa)), d.c[1] = e) : d = Re(this, this.shift, this.root, new Me(null, this.aa));
  return new W(this.m, this.h + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.f = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.P(null, a);
};
g.b = function(a, b) {
  return this.ja(null, a, b);
};
var X = new Me(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), $c = new W(null, 0, 5, X, [], Dc);
function df(a) {
  var b = a.length;
  if (32 > b) {
    return new W(null, b, 5, X, a, null);
  }
  for (var c = 32, d = (new W(null, 32, 5, X, a.slice(0, 32), null)).Za(null);;) {
    if (c < b) {
      var e = c + 1, d = ae.b(d, a[c]), c = e
    } else {
      return Wb(d);
    }
  }
}
W.prototype[$a] = function() {
  return Ac(this);
};
function ef(a) {
  return Xa(a) ? df(a) : Wb(Ad(Vb, Ub($c), a));
}
var ff = function ff(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return ff.j(0 < c.length ? new D(c.slice(0), 0, null) : null);
};
ff.j = function(a) {
  return a instanceof D && 0 === a.i ? df(a.c) : ef(a);
};
ff.w = 0;
ff.v = function(a) {
  return ff.j(B(a));
};
function gf(a, b, c, d, e, f) {
  this.ka = a;
  this.node = b;
  this.i = c;
  this.X = d;
  this.m = e;
  this.o = f;
  this.l = 32375020;
  this.A = 1536;
}
g = gf.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.ba = function() {
  if (this.X + 1 < this.node.length) {
    var a;
    a = this.ka;
    var b = this.node, c = this.i, d = this.X + 1;
    a = bf ? bf(a, b, c, d) : cf.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return fc(this);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc($c, this.m);
};
g.Z = function(a, b) {
  var c;
  c = this.ka;
  var d = this.i + this.X, e = N(this.ka);
  c = hf ? hf(c, d, e) : jf.call(null, c, d, e);
  return Ic(c, b);
};
g.$ = function(a, b, c) {
  a = this.ka;
  var d = this.i + this.X, e = N(this.ka);
  a = hf ? hf(a, d, e) : jf.call(null, a, d, e);
  return Jc(a, b, c);
};
g.W = function() {
  return this.node[this.X];
};
g.fa = function() {
  if (this.X + 1 < this.node.length) {
    var a;
    a = this.ka;
    var b = this.node, c = this.i, d = this.X + 1;
    a = bf ? bf(a, b, c, d) : cf.call(null, a, b, c, d);
    return null == a ? I : a;
  }
  return ec(this);
};
g.S = function() {
  return this;
};
g.Db = function() {
  var a = this.node;
  return new Td(a, this.X, a.length);
};
g.Eb = function() {
  var a = this.i + this.node.length;
  if (a < eb(this.ka)) {
    var b = this.ka, c = Te(this.ka, a);
    return bf ? bf(b, c, a, 0) : cf.call(null, b, c, a, 0);
  }
  return I;
};
g.O = function(a, b) {
  return kf ? kf(this.ka, this.node, this.i, this.X, b) : cf.call(null, this.ka, this.node, this.i, this.X, b);
};
g.R = function(a, b) {
  return P(b, this);
};
g.Cb = function() {
  var a = this.i + this.node.length;
  if (a < eb(this.ka)) {
    var b = this.ka, c = Te(this.ka, a);
    return bf ? bf(b, c, a, 0) : cf.call(null, b, c, a, 0);
  }
  return null;
};
gf.prototype[$a] = function() {
  return Ac(this);
};
function cf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return b = arguments[0], c = arguments[1], d = arguments[2], new gf(b, Ue(b, c), c, d, null, null);
    case 4:
      return bf(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return kf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function bf(a, b, c, d) {
  return new gf(a, b, c, d, null, null);
}
function kf(a, b, c, d, e) {
  return new gf(a, b, c, d, e, null);
}
function lf(a, b, c, d, e) {
  this.m = a;
  this.na = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.l = 167666463;
  this.A = 8192;
}
g = lf.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.P = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Se(b, this.end - this.start) : z.b(this.na, this.start + b);
};
g.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.f(this.na, this.start + b, c);
};
g.Ib = function(a, b, c) {
  var d = this.start + b;
  a = this.m;
  c = S.f(this.na, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return mf.G ? mf.G(a, c, b, d, null) : mf.call(null, a, c, b, d, null);
};
g.L = function() {
  return this.m;
};
g.T = function() {
  return this.end - this.start;
};
g.hb = function() {
  return z.b(this.na, this.end - 1);
};
g.ib = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.m, b = this.na, c = this.start, d = this.end - 1;
  return mf.G ? mf.G(a, b, c, d, null) : mf.call(null, a, b, c, d, null);
};
g.vb = function() {
  return this.start !== this.end ? new Sc(this, this.end - this.start - 1, null) : null;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc($c, this.m);
};
g.Z = function(a, b) {
  return Ic(this, b);
};
g.$ = function(a, b, c) {
  return Jc(this, b, c);
};
g.eb = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.S = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(z.b(a.na, e), new V(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.O = function(a, b) {
  return mf.G ? mf.G(b, this.na, this.start, this.end, this.o) : mf.call(null, b, this.na, this.start, this.end, this.o);
};
g.R = function(a, b) {
  var c = this.m, d = Bb(this.na, this.end, b), e = this.start, f = this.end + 1;
  return mf.G ? mf.G(c, d, e, f, null) : mf.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.f = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.P(null, a);
};
g.b = function(a, b) {
  return this.ja(null, a, b);
};
lf.prototype[$a] = function() {
  return Ac(this);
};
function mf(a, b, c, d, e) {
  for (;;) {
    if (b instanceof lf) {
      c = b.start + c, d = b.start + d, b = b.na;
    } else {
      var f = N(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new lf(a, b, c, d, e);
    }
  }
}
function jf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return b = arguments[0], hf(b, arguments[1], N(b));
    case 3:
      return hf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function hf(a, b, c) {
  return mf(null, a, b, c, null);
}
function nf(a, b) {
  return a === b.F ? b : new Me(a, bb(b.c));
}
function $e(a) {
  return new Me({}, bb(a.c));
}
function af(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  pd(a, 0, b, 0, a.length);
  return b;
}
var of = function of(b, c, d, e) {
  d = nf(b.root.F, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? of(b, c - 5, h, e) : Qe(b.root.F, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Ze(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.aa = d;
  this.A = 88;
  this.l = 275;
}
g = Ze.prototype;
g.Ta = function(a, b) {
  if (this.root.F) {
    if (32 > this.h - Pe(this)) {
      this.aa[this.h & 31] = b;
    } else {
      var c = new Me(this.root.F, this.aa), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.aa = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Qe(this.root.F, this.shift, c);
        this.root = new Me(this.root.F, d);
        this.shift = e;
      } else {
        this.root = of(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.$a = function() {
  if (this.root.F) {
    this.root.F = null;
    var a = this.h - Pe(this), b = Array(a);
    pd(this.aa, 0, b, 0, a);
    return new W(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if ("number" === typeof b) {
    return $b(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Rb = function(a, b, c) {
  var d = this;
  if (d.root.F) {
    if (0 <= b && b < d.h) {
      return Pe(this) <= b ? d.aa[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = nf(d.root.F, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return Vb(this, c);
    }
    throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.h)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.T = function() {
  if (this.root.F) {
    return this.h;
  }
  throw Error("count after persistent!");
};
g.P = function(a, b) {
  if (this.root.F) {
    return Ue(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.h ? z.b(this, b) : c;
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return "number" === typeof b ? z.f(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.I(null, a, b);
};
function pf() {
  this.l = 2097152;
  this.A = 0;
}
pf.prototype.equiv = function(a) {
  return this.s(null, a);
};
pf.prototype.s = function() {
  return !1;
};
var qf = new pf;
function rf(a, b) {
  return rd(ld(b) ? N(a) === N(b) ? oe(function(a) {
    return K.b(A.f(b, E(a), qf), E(J(a)));
  }, a) : null : null);
}
function sf(a) {
  this.B = a;
}
sf.prototype.next = function() {
  if (null != this.B) {
    var a = E(this.B), b = R(a, 0, null), a = R(a, 1, null);
    this.B = J(this.B);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function tf(a) {
  this.B = a;
}
tf.prototype.next = function() {
  if (null != this.B) {
    var a = E(this.B);
    this.B = J(this.B);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function uf(a, b) {
  var c;
  if (b instanceof U) {
    a: {
      c = a.length;
      for (var d = b.ta, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        if (a[e] instanceof U && d === a[e].ta) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof xc) {
        a: {
          for (c = a.length, d = b.va, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            if (a[e] instanceof xc && d === a[e].va) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (K.b(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function vf(a, b, c) {
  this.c = a;
  this.i = b;
  this.ea = c;
  this.l = 32374990;
  this.A = 0;
}
g = vf.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.ea;
};
g.ba = function() {
  return this.i < this.c.length - 2 ? new vf(this.c, this.i + 2, this.ea) : null;
};
g.T = function() {
  return (this.c.length - this.i) / 2;
};
g.K = function() {
  return Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.ea);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return new W(null, 2, 5, X, [this.c[this.i], this.c[this.i + 1]], null);
};
g.fa = function() {
  return this.i < this.c.length - 2 ? new vf(this.c, this.i + 2, this.ea) : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new vf(this.c, this.i, b);
};
g.R = function(a, b) {
  return P(b, this);
};
vf.prototype[$a] = function() {
  return Ac(this);
};
function wf(a, b, c) {
  this.c = a;
  this.i = b;
  this.h = c;
}
wf.prototype.ga = function() {
  return this.i < this.h;
};
wf.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.c[this.i], this.c[this.i + 1]], null);
  this.i += 2;
  return a;
};
function Pa(a, b, c, d) {
  this.m = a;
  this.h = b;
  this.c = c;
  this.o = d;
  this.l = 16647951;
  this.A = 8196;
}
g = Pa.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Ac(xf.a ? xf.a(this) : xf.call(null, this));
};
g.entries = function() {
  return new sf(B(B(this)));
};
g.values = function() {
  return Ac(yf.a ? yf.a(this) : yf.call(null, this));
};
g.has = function(a) {
  return sd(this, a);
};
g.get = function(a, b) {
  return this.I(null, a, b);
};
g.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.P(null, e), h = R(f, 0, null), f = R(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = B(b)) {
        nd(b) ? (c = dc(b), b = ec(b), h = c, d = N(c), c = h) : (c = E(b), h = R(c, 0, null), f = R(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = J(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  a = uf(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
g.sa = function() {
  return new wf(this.c, 0, 2 * this.h);
};
g.L = function() {
  return this.m;
};
g.T = function() {
  return this.h;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ec(this);
};
g.s = function(a, b) {
  if (null != b && (b.l & 1024 || b.gc)) {
    var c = this.c.length;
    if (this.h === b.T(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.I(null, this.c[d], qd);
          if (e !== qd) {
            if (K.b(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return rf(this, b);
  }
};
g.Za = function() {
  return new zf({}, this.c.length, bb(this.c));
};
g.U = function() {
  return Fb(ne, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.Fb = function(a, b) {
  if (0 <= uf(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return fb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Pa(this.m, this.h - 1, d, null);
      }
      K.b(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.eb = function(a, b, c) {
  a = uf(this.c, b);
  if (-1 === a) {
    if (this.h < Af) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Pa(this.m, this.h + 1, e, null);
    }
    return Fb(pb(Je.b(Bf, this), b, c), this.m);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = bb(this.c);
  b[a + 1] = c;
  return new Pa(this.m, this.h, b, null);
};
g.Bb = function(a, b) {
  return -1 !== uf(this.c, b);
};
g.S = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new vf(a, 0, null) : null;
};
g.O = function(a, b) {
  return new Pa(b, this.h, this.c, this.o);
};
g.R = function(a, b) {
  if (md(b)) {
    return pb(this, z.b(b, 0), z.b(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (md(e)) {
      c = pb(c, z.b(e, 0), z.b(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.I(null, a, b);
};
var ne = new Pa(null, 0, [], Fc), Af = 8;
Pa.prototype[$a] = function() {
  return Ac(this);
};
function zf(a, b, c) {
  this.ab = a;
  this.Va = b;
  this.c = c;
  this.l = 258;
  this.A = 56;
}
g = zf.prototype;
g.T = function() {
  if (r(this.ab)) {
    return Hd(this.Va, 2);
  }
  throw Error("count after persistent!");
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  if (r(this.ab)) {
    return a = uf(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Ta = function(a, b) {
  if (r(this.ab)) {
    if (null != b ? b.l & 2048 || b.hc || (b.l ? 0 : t(sb, b)) : t(sb, b)) {
      return Xb(this, Cf.a ? Cf.a(b) : Cf.call(null, b), Df.a ? Df.a(b) : Df.call(null, b));
    }
    for (var c = B(b), d = this;;) {
      var e = E(c);
      if (r(e)) {
        c = J(c), d = Xb(d, Cf.a ? Cf.a(e) : Cf.call(null, e), Df.a ? Df.a(e) : Df.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.$a = function() {
  if (r(this.ab)) {
    return this.ab = !1, new Pa(null, Hd(this.Va, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if (r(this.ab)) {
    a = uf(this.c, b);
    if (-1 === a) {
      if (this.Va + 2 <= 2 * Af) {
        return this.Va += 2, this.c.push(b), this.c.push(c), this;
      }
      a = Ef.b ? Ef.b(this.Va, this.c) : Ef.call(null, this.Va, this.c);
      return Xb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ef(a, b) {
  for (var c = Ub(Bf), d = 0;;) {
    if (d < a) {
      c = Xb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ff() {
  this.wa = !1;
}
function Gf(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ta === b.ta ? !0 : K.b(a, b);
}
function Hf(a, b, c) {
  a = bb(a);
  a[b] = c;
  return a;
}
function If(a, b) {
  var c = Array(a.length - 2);
  pd(a, 0, c, 0, 2 * b);
  pd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Jf(a, b, c, d) {
  a = a.Ua(b);
  a.c[c] = d;
  return a;
}
function Kf(a, b, c, d) {
  this.c = a;
  this.i = b;
  this.nb = c;
  this.ra = d;
}
Kf.prototype.advance = function() {
  for (var a = this.c.length;;) {
    if (this.i < a) {
      var b = this.c[this.i], c = this.c[this.i + 1];
      null != b ? b = this.nb = new W(null, 2, 5, X, [b, c], null) : null != c ? (b = ic(c), b = b.ga() ? this.ra = b : !1) : b = !1;
      this.i += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
Kf.prototype.ga = function() {
  var a = null != this.nb;
  return a ? a : (a = null != this.ra) ? a : this.advance();
};
Kf.prototype.next = function() {
  if (null != this.nb) {
    var a = this.nb;
    this.nb = null;
    return a;
  }
  if (null != this.ra) {
    return a = this.ra.next(), this.ra.ga() || (this.ra = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
Kf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Lf(a, b, c) {
  this.F = a;
  this.H = b;
  this.c = c;
}
g = Lf.prototype;
g.Ua = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = Id(this.H), c = Array(0 > b ? 4 : 2 * (b + 1));
  pd(this.c, 0, c, 0, 2 * b);
  return new Lf(a, this.H, c);
};
g.lb = function() {
  return Mf ? Mf(this.c) : Nf.call(null, this.c);
};
g.Qa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.H & e)) {
    return d;
  }
  var f = Id(this.H & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Qa(a + 5, b, c, d) : Gf(c, e) ? f : d;
};
g.pa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Id(this.H & h - 1);
  if (0 === (this.H & h)) {
    var l = Id(this.H);
    if (2 * l < this.c.length) {
      a = this.Ua(a);
      b = a.c;
      f.wa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.H |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Of.pa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.H >>> d & 1) && (k[d] = null != this.c[e] ? Of.pa(a, b + 5, tc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Pf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    pd(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    pd(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.wa = !0;
    a = this.Ua(a);
    a.c = b;
    a.H |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.pa(a, b + 5, c, d, e, f), l === h ? this : Jf(this, a, 2 * k + 1, l);
  }
  if (Gf(d, l)) {
    return e === h ? this : Jf(this, a, 2 * k + 1, e);
  }
  f.wa = !0;
  f = b + 5;
  d = Qf ? Qf(a, f, l, h, c, d, e) : Rf.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ua(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.oa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Id(this.H & f - 1);
  if (0 === (this.H & f)) {
    var k = Id(this.H);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Of.oa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.H >>> c & 1) && (h[c] = null != this.c[d] ? Of.oa(a + 5, tc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Pf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    pd(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    pd(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.wa = !0;
    return new Lf(null, this.H | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.oa(a + 5, b, c, d, e), k === f ? this : new Lf(null, this.H, Hf(this.c, 2 * h + 1, k));
  }
  if (Gf(c, l)) {
    return d === f ? this : new Lf(null, this.H, Hf(this.c, 2 * h + 1, d));
  }
  e.wa = !0;
  e = this.H;
  k = this.c;
  a += 5;
  a = Sf ? Sf(a, l, f, b, c, d) : Rf.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = bb(k);
  d[c] = null;
  d[h] = a;
  return new Lf(null, e, d);
};
g.mb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.H & d)) {
    return this;
  }
  var e = Id(this.H & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.mb(a + 5, b, c), a === h ? this : null != a ? new Lf(null, this.H, Hf(this.c, 2 * e + 1, a)) : this.H === d ? null : new Lf(null, this.H ^ d, If(this.c, e))) : Gf(c, f) ? new Lf(null, this.H ^ d, If(this.c, e)) : this;
};
g.sa = function() {
  return new Kf(this.c, 0, null, null);
};
var Of = new Lf(null, 0, []);
function Tf(a, b, c) {
  this.c = a;
  this.i = b;
  this.ra = c;
}
Tf.prototype.ga = function() {
  for (var a = this.c.length;;) {
    if (null != this.ra && this.ra.ga()) {
      return !0;
    }
    if (this.i < a) {
      var b = this.c[this.i];
      this.i += 1;
      null != b && (this.ra = ic(b));
    } else {
      return !1;
    }
  }
};
Tf.prototype.next = function() {
  if (this.ga()) {
    return this.ra.next();
  }
  throw Error("No such element");
};
Tf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Pf(a, b, c) {
  this.F = a;
  this.h = b;
  this.c = c;
}
g = Pf.prototype;
g.Ua = function(a) {
  return a === this.F ? this : new Pf(a, this.h, bb(this.c));
};
g.lb = function() {
  return Uf ? Uf(this.c) : Vf.call(null, this.c);
};
g.Qa = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Qa(a + 5, b, c, d) : d;
};
g.pa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Jf(this, a, h, Of.pa(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.pa(a, b + 5, c, d, e, f);
  return b === k ? this : Jf(this, a, h, b);
};
g.oa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new Pf(null, this.h + 1, Hf(this.c, f, Of.oa(a + 5, b, c, d, e)));
  }
  a = h.oa(a + 5, b, c, d, e);
  return a === h ? this : new Pf(null, this.h, Hf(this.c, f, a));
};
g.mb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.mb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.h) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.h - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new Lf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Pf(null, this.h - 1, Hf(this.c, d, a));
        }
      } else {
        d = new Pf(null, this.h, Hf(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
g.sa = function() {
  return new Tf(this.c, 0, null);
};
function Wf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Gf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Xf(a, b, c, d) {
  this.F = a;
  this.La = b;
  this.h = c;
  this.c = d;
}
g = Xf.prototype;
g.Ua = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  pd(this.c, 0, b, 0, 2 * this.h);
  return new Xf(a, this.La, this.h, b);
};
g.lb = function() {
  return Mf ? Mf(this.c) : Nf.call(null, this.c);
};
g.Qa = function(a, b, c, d) {
  a = Wf(this.c, this.h, c);
  return 0 > a ? d : Gf(c, this.c[a]) ? this.c[a + 1] : d;
};
g.pa = function(a, b, c, d, e, f) {
  if (c === this.La) {
    b = Wf(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.Ua(a), a.c[b] = d, a.c[c] = e, f.wa = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      pd(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.wa = !0;
      d = this.h + 1;
      a === this.F ? (this.c = b, this.h = d, a = this) : a = new Xf(this.F, this.La, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Jf(this, a, b + 1, e);
  }
  return (new Lf(a, 1 << (this.La >>> b & 31), [null, this, null, null])).pa(a, b, c, d, e, f);
};
g.oa = function(a, b, c, d, e) {
  return b === this.La ? (a = Wf(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), pd(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.wa = !0, new Xf(null, this.La, this.h + 1, b)) : K.b(this.c[a], d) ? this : new Xf(null, this.La, this.h, Hf(this.c, a + 1, d))) : (new Lf(null, 1 << (this.La >>> a & 31), [null, this])).oa(a, b, c, d, e);
};
g.mb = function(a, b, c) {
  a = Wf(this.c, this.h, c);
  return -1 === a ? this : 1 === this.h ? null : new Xf(null, this.La, this.h - 1, If(this.c, Hd(a, 2)));
};
g.sa = function() {
  return new Kf(this.c, 0, null, null);
};
function Rf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 6:
      return Sf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Qf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Sf(a, b, c, d, e, f) {
  var h = tc(b);
  if (h === d) {
    return new Xf(null, h, 2, [b, c, e, f]);
  }
  var k = new Ff;
  return Of.oa(a, h, b, c, k).oa(a, d, e, f, k);
}
function Qf(a, b, c, d, e, f, h) {
  var k = tc(c);
  if (k === e) {
    return new Xf(null, k, 2, [c, d, f, h]);
  }
  var l = new Ff;
  return Of.pa(a, b, k, c, d, l).pa(a, b, e, f, h, l);
}
function Yf(a, b, c, d, e) {
  this.m = a;
  this.Ra = b;
  this.i = c;
  this.B = d;
  this.o = e;
  this.l = 32374860;
  this.A = 0;
}
g = Yf.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return null == this.B ? new W(null, 2, 5, X, [this.Ra[this.i], this.Ra[this.i + 1]], null) : E(this.B);
};
g.fa = function() {
  var a = this, b = null == a.B ? function() {
    var b = a.Ra, d = a.i + 2;
    return Zf ? Zf(b, d, null) : Nf.call(null, b, d, null);
  }() : function() {
    var b = a.Ra, d = a.i, e = J(a.B);
    return Zf ? Zf(b, d, e) : Nf.call(null, b, d, e);
  }();
  return null != b ? b : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Yf(b, this.Ra, this.i, this.B, this.o);
};
g.R = function(a, b) {
  return P(b, this);
};
Yf.prototype[$a] = function() {
  return Ac(this);
};
function Nf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Mf(arguments[0]);
    case 3:
      return Zf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Mf(a) {
  return Zf(a, 0, null);
}
function Zf(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Yf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (r(d) && (d = d.lb(), r(d))) {
          return new Yf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Yf(null, a, b, c, null);
  }
}
function $f(a, b, c, d, e) {
  this.m = a;
  this.Ra = b;
  this.i = c;
  this.B = d;
  this.o = e;
  this.l = 32374860;
  this.A = 0;
}
g = $f.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.m;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return E(this.B);
};
g.fa = function() {
  var a;
  a = this.Ra;
  var b = this.i, c = J(this.B);
  a = ag ? ag(null, a, b, c) : Vf.call(null, null, a, b, c);
  return null != a ? a : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new $f(b, this.Ra, this.i, this.B, this.o);
};
g.R = function(a, b) {
  return P(b, this);
};
$f.prototype[$a] = function() {
  return Ac(this);
};
function Vf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Uf(arguments[0]);
    case 4:
      return ag(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([w("Invalid arity: "), w(b.length)].join(""));;
  }
}
function Uf(a) {
  return ag(null, a, 0, null);
}
function ag(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (r(e) && (e = e.lb(), r(e))) {
          return new $f(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new $f(a, b, c, d, null);
  }
}
function bg(a, b, c) {
  this.ia = a;
  this.Yb = b;
  this.Mb = c;
}
bg.prototype.ga = function() {
  return this.Mb && this.Yb.ga();
};
bg.prototype.next = function() {
  if (this.Mb) {
    return this.Yb.next();
  }
  this.Mb = !0;
  return this.ia;
};
bg.prototype.remove = function() {
  return Error("Unsupported operation");
};
function cg(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.ca = d;
  this.ia = e;
  this.o = f;
  this.l = 16123663;
  this.A = 8196;
}
g = cg.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Ac(xf.a ? xf.a(this) : xf.call(null, this));
};
g.entries = function() {
  return new sf(B(B(this)));
};
g.values = function() {
  return Ac(yf.a ? yf.a(this) : yf.call(null, this));
};
g.has = function(a) {
  return sd(this, a);
};
g.get = function(a, b) {
  return this.I(null, a, b);
};
g.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.P(null, e), h = R(f, 0, null), f = R(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = B(b)) {
        nd(b) ? (c = dc(b), b = ec(b), h = c, d = N(c), c = h) : (c = E(b), h = R(c, 0, null), f = R(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = J(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : this.root.Qa(0, tc(b), b, c);
};
g.sa = function() {
  var a = this.root ? ic(this.root) : ie;
  return this.ca ? new bg(this.ia, a, !1) : a;
};
g.L = function() {
  return this.m;
};
g.T = function() {
  return this.h;
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ec(this);
};
g.s = function(a, b) {
  return rf(this, b);
};
g.Za = function() {
  return new dg({}, this.root, this.h, this.ca, this.ia);
};
g.U = function() {
  return Fb(Bf, this.m);
};
g.Fb = function(a, b) {
  if (null == b) {
    return this.ca ? new cg(this.m, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.mb(0, tc(b), b);
  return c === this.root ? this : new cg(this.m, this.h - 1, c, this.ca, this.ia, null);
};
g.eb = function(a, b, c) {
  if (null == b) {
    return this.ca && c === this.ia ? this : new cg(this.m, this.ca ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Ff;
  b = (null == this.root ? Of : this.root).oa(0, tc(b), b, c, a);
  return b === this.root ? this : new cg(this.m, a.wa ? this.h + 1 : this.h, b, this.ca, this.ia, null);
};
g.Bb = function(a, b) {
  return null == b ? this.ca : null == this.root ? !1 : this.root.Qa(0, tc(b), b, qd) !== qd;
};
g.S = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.lb() : null;
    return this.ca ? P(new W(null, 2, 5, X, [null, this.ia], null), a) : a;
  }
  return null;
};
g.O = function(a, b) {
  return new cg(b, this.h, this.root, this.ca, this.ia, this.o);
};
g.R = function(a, b) {
  if (md(b)) {
    return pb(this, z.b(b, 0), z.b(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (md(e)) {
      c = pb(c, z.b(e, 0), z.b(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.I(null, a, b);
};
var Bf = new cg(null, 0, null, !1, null, Fc);
function bd(a, b) {
  for (var c = a.length, d = 0, e = Ub(Bf);;) {
    if (d < c) {
      var f = d + 1, e = e.jb(null, a[d], b[d]), d = f
    } else {
      return Wb(e);
    }
  }
}
cg.prototype[$a] = function() {
  return Ac(this);
};
function dg(a, b, c, d, e) {
  this.F = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ia = e;
  this.l = 258;
  this.A = 56;
}
function eg(a, b, c) {
  if (a.F) {
    if (null == b) {
      a.ia !== c && (a.ia = c), a.ca || (a.count += 1, a.ca = !0);
    } else {
      var d = new Ff;
      b = (null == a.root ? Of : a.root).pa(a.F, 0, tc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.wa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = dg.prototype;
g.T = function() {
  if (this.F) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.M = function(a, b) {
  return null == b ? this.ca ? this.ia : null : null == this.root ? null : this.root.Qa(0, tc(b), b);
};
g.I = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : this.root.Qa(0, tc(b), b, c);
};
g.Ta = function(a, b) {
  var c;
  a: {
    if (this.F) {
      if (null != b ? b.l & 2048 || b.hc || (b.l ? 0 : t(sb, b)) : t(sb, b)) {
        c = eg(this, Cf.a ? Cf.a(b) : Cf.call(null, b), Df.a ? Df.a(b) : Df.call(null, b));
      } else {
        c = B(b);
        for (var d = this;;) {
          var e = E(c);
          if (r(e)) {
            c = J(c), d = eg(d, Cf.a ? Cf.a(e) : Cf.call(null, e), Df.a ? Df.a(e) : Df.call(null, e));
          } else {
            c = d;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return c;
};
g.$a = function() {
  var a;
  if (this.F) {
    this.F = null, a = new cg(null, this.count, this.root, this.ca, this.ia, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.jb = function(a, b, c) {
  return eg(this, b, c);
};
var ve = function ve(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return ve.j(0 < c.length ? new D(c.slice(0), 0, null) : null);
};
ve.j = function(a) {
  for (var b = B(a), c = Ub(Bf);;) {
    if (b) {
      a = J(J(b));
      var d = E(b), b = E(J(b)), c = Xb(c, d, b), b = a;
    } else {
      return Wb(c);
    }
  }
};
ve.w = 0;
ve.v = function(a) {
  return ve.j(B(a));
};
function fg(a, b) {
  this.C = a;
  this.ea = b;
  this.l = 32374988;
  this.A = 0;
}
g = fg.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.ea;
};
g.ba = function() {
  var a = (null != this.C ? this.C.l & 128 || this.C.ub || (this.C.l ? 0 : t(kb, this.C)) : t(kb, this.C)) ? this.C.ba(null) : J(this.C);
  return null == a ? null : new fg(a, this.ea);
};
g.K = function() {
  return Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.ea);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return this.C.W(null).Gb();
};
g.fa = function() {
  var a = (null != this.C ? this.C.l & 128 || this.C.ub || (this.C.l ? 0 : t(kb, this.C)) : t(kb, this.C)) ? this.C.ba(null) : J(this.C);
  return null != a ? new fg(a, this.ea) : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new fg(this.C, b);
};
g.R = function(a, b) {
  return P(b, this);
};
fg.prototype[$a] = function() {
  return Ac(this);
};
function xf(a) {
  return (a = B(a)) ? new fg(a, null) : null;
}
function Cf(a) {
  return tb(a);
}
function gg(a, b) {
  this.C = a;
  this.ea = b;
  this.l = 32374988;
  this.A = 0;
}
g = gg.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.L = function() {
  return this.ea;
};
g.ba = function() {
  var a = (null != this.C ? this.C.l & 128 || this.C.ub || (this.C.l ? 0 : t(kb, this.C)) : t(kb, this.C)) ? this.C.ba(null) : J(this.C);
  return null == a ? null : new gg(a, this.ea);
};
g.K = function() {
  return Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.ea);
};
g.Z = function(a, b) {
  return Xc(b, this);
};
g.$ = function(a, b, c) {
  return Zc(b, c, this);
};
g.W = function() {
  return this.C.W(null).Hb();
};
g.fa = function() {
  var a = (null != this.C ? this.C.l & 128 || this.C.ub || (this.C.l ? 0 : t(kb, this.C)) : t(kb, this.C)) ? this.C.ba(null) : J(this.C);
  return null != a ? new gg(a, this.ea) : I;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new gg(this.C, b);
};
g.R = function(a, b) {
  return P(b, this);
};
gg.prototype[$a] = function() {
  return Ac(this);
};
function yf(a) {
  return (a = B(a)) ? new gg(a, null) : null;
}
function Df(a) {
  return ub(a);
}
function hg(a) {
  return r(pe(Dd, a)) ? Cd(function(a, c) {
    return Q.b(r(a) ? a : ne, c);
  }, a) : null;
}
var ig = function ig(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return ig.j(arguments[0], 1 < c.length ? new D(c.slice(1), 0, null) : null);
};
ig.j = function(a, b) {
  return r(pe(Dd, b)) ? Cd(function(a) {
    return function(b, e) {
      return Ad(a, r(b) ? b : ne, B(e));
    };
  }(function(b, d) {
    var e = E(d), f = E(J(d));
    return sd(b, e) ? S.f(b, e, function() {
      var d = A.b(b, e);
      return a.b ? a.b(d, f) : a.call(null, d, f);
    }()) : S.f(b, e, f);
  }), b) : null;
};
ig.w = 1;
ig.v = function(a) {
  var b = E(a);
  a = J(a);
  return ig.j(b, a);
};
function jg(a) {
  this.Kb = a;
}
jg.prototype.ga = function() {
  return this.Kb.ga();
};
jg.prototype.next = function() {
  if (this.Kb.ga()) {
    return this.Kb.next().aa[0];
  }
  throw Error("No such element");
};
jg.prototype.remove = function() {
  return Error("Unsupported operation");
};
function kg(a, b, c) {
  this.m = a;
  this.Pa = b;
  this.o = c;
  this.l = 15077647;
  this.A = 8196;
}
g = kg.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Ac(B(this));
};
g.entries = function() {
  return new tf(B(B(this)));
};
g.values = function() {
  return Ac(B(this));
};
g.has = function(a) {
  return sd(this, a);
};
g.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.P(null, e), h = R(f, 0, null), f = R(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = B(b)) {
        nd(b) ? (c = dc(b), b = ec(b), h = c, d = N(c), c = h) : (c = E(b), h = R(c, 0, null), f = R(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = J(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return nb(this.Pa, b) ? b : c;
};
g.sa = function() {
  return new jg(ic(this.Pa));
};
g.L = function() {
  return this.m;
};
g.T = function() {
  return eb(this.Pa);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Ec(this);
};
g.s = function(a, b) {
  return id(b) && N(this) === N(b) && oe(function(a) {
    return function(b) {
      return sd(a, b);
    };
  }(this), b);
};
g.Za = function() {
  return new lg(Ub(this.Pa));
};
g.U = function() {
  return Wc(mg, this.m);
};
g.Qb = function(a, b) {
  return new kg(this.m, rb(this.Pa, b), null);
};
g.S = function() {
  return xf(this.Pa);
};
g.O = function(a, b) {
  return new kg(b, this.Pa, this.o);
};
g.R = function(a, b) {
  return new kg(this.m, S.f(this.Pa, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.I(null, a, b);
};
var mg = new kg(null, ne, Fc);
function ud(a) {
  var b = a.length;
  if (b <= Af) {
    for (var c = 0, d = Ub(ne);;) {
      if (c < b) {
        var e = c + 1, d = Xb(d, a[c], null), c = e
      } else {
        return new kg(null, Wb(d), null);
      }
    }
  } else {
    for (c = 0, d = Ub(mg);;) {
      if (c < b) {
        e = c + 1, d = Vb(d, a[c]), c = e;
      } else {
        return Wb(d);
      }
    }
  }
}
kg.prototype[$a] = function() {
  return Ac(this);
};
function lg(a) {
  this.Oa = a;
  this.A = 136;
  this.l = 259;
}
g = lg.prototype;
g.Ta = function(a, b) {
  this.Oa = Xb(this.Oa, b, null);
  return this;
};
g.$a = function() {
  return new kg(null, Wb(this.Oa), null);
};
g.T = function() {
  return N(this.Oa);
};
g.M = function(a, b) {
  return mb.f(this, b, null);
};
g.I = function(a, b, c) {
  return mb.f(this.Oa, b, qd) === qd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return mb.f(this.Oa, b, qd) === qd ? c : b;
  }
  function b(a, b) {
    return mb.f(this.Oa, b, qd) === qd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return mb.f(this.Oa, a, qd) === qd ? null : a;
};
g.b = function(a, b) {
  return mb.f(this.Oa, a, qd) === qd ? b : a;
};
function ng(a) {
  a = B(a);
  if (null == a) {
    return mg;
  }
  if (a instanceof D && 0 === a.i) {
    a = a.c;
    a: {
      for (var b = 0, c = Ub(mg);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Ta(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.$a(null);
  }
  for (d = Ub(mg);;) {
    if (null != a) {
      b = J(a), d = d.Ta(null, a.W(null)), a = b;
    } else {
      return Wb(d);
    }
  }
}
function og(a) {
  return function c(a, e) {
    return new V(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = R(e, 0, null);
          if (e = B(e)) {
            if (sd(d, l)) {
              l = H(e), e = d, a = l, d = e;
            } else {
              return P(l, c(H(e), Q.b(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, mg);
}
function Qd(a) {
  if (null != a && (a.A & 4096 || a.jc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function pg(a, b, c) {
  this.i = a;
  this.end = b;
  this.step = c;
}
pg.prototype.ga = function() {
  return 0 < this.step ? this.i < this.end : this.i > this.end;
};
pg.prototype.next = function() {
  var a = this.i;
  this.i += this.step;
  return a;
};
function qg(a, b, c, d, e) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = e;
  this.l = 32375006;
  this.A = 8192;
}
g = qg.prototype;
g.toString = function() {
  return kc(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return M(this, a, 0);
      case 2:
        return M(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return M(this, a, 0);
  };
  a.b = function(a, c) {
    return M(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return O(this, a, N(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return O(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return O(this, a, b);
  };
  return b;
}();
g.P = function(a, b) {
  if (b < eb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.ja = function(a, b, c) {
  return b < eb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.sa = function() {
  return new pg(this.start, this.end, this.step);
};
g.L = function() {
  return this.m;
};
g.ba = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new qg(this.m, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new qg(this.m, this.start + this.step, this.end, this.step, null) : null;
};
g.T = function() {
  return Ya(Nb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
g.K = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Cc(this);
};
g.s = function(a, b) {
  return Tc(this, b);
};
g.U = function() {
  return Wc(I, this.m);
};
g.Z = function(a, b) {
  return Ic(this, b);
};
g.$ = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      c = b.b ? b.b(c, a) : b.call(null, c, a), a += this.step;
    } else {
      return c;
    }
  }
};
g.W = function() {
  return null == Nb(this) ? null : this.start;
};
g.fa = function() {
  return null != Nb(this) ? new qg(this.m, this.start + this.step, this.end, this.step, null) : I;
};
g.S = function() {
  return 0 < this.step ? this.start < this.end ? this : null : 0 > this.step ? this.start > this.end ? this : null : this.start === this.end ? null : this;
};
g.O = function(a, b) {
  return new qg(b, this.start, this.end, this.step, this.o);
};
g.R = function(a, b) {
  return P(b, this);
};
qg.prototype[$a] = function() {
  return Ac(this);
};
function tg(a, b) {
  return new qg(null, a, b, 1, null);
}
function ug(a) {
  return Wb(Ad(function(a, c) {
    var d = A.f(a, c, 0) + 1;
    return Xb(a, c, d);
  }, Ub(ne), a));
}
function vg(a, b, c, d, e, f, h) {
  var k = Ka;
  Ka = null == Ka ? null : Ka - 1;
  try {
    if (null != Ka && 0 > Ka) {
      return Sb(a, "#");
    }
    Sb(a, c);
    if (0 === Va.a(f)) {
      B(h) && Sb(a, function() {
        var a = wg.a(f);
        return r(a) ? a : "...";
      }());
    } else {
      if (B(h)) {
        var l = E(h);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = J(h), n = Va.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          B(m) && 0 === n && (Sb(a, d), Sb(a, function() {
            var a = wg.a(f);
            return r(a) ? a : "...";
          }()));
          break;
        } else {
          Sb(a, d);
          var p = E(m);
          c = a;
          h = f;
          b.f ? b.f(p, c, h) : b.call(null, p, c, h);
          var u = J(m);
          c = n - 1;
          m = u;
          n = c;
        }
      }
    }
    return Sb(a, e);
  } finally {
    Ka = k;
  }
}
function xg(a, b) {
  for (var c = B(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.P(null, f);
      Sb(a, h);
      f += 1;
    } else {
      if (c = B(c)) {
        d = c, nd(d) ? (c = dc(d), e = ec(d), d = c, h = N(c), c = e, e = h) : (h = E(d), Sb(a, h), c = J(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var yg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function zg(a) {
  return [w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return yg[a];
  })), w('"')].join("");
}
function Ag(a, b) {
  var c = rd(A.b(a, Sa));
  return c ? (c = null != b ? b.l & 131072 || b.ic ? !0 : !1 : !1) ? null != fd(b) : c : c;
}
function Bg(a, b, c) {
  if (null == a) {
    return Sb(b, "nil");
  }
  if (Ag(c, a)) {
    Sb(b, "^");
    var d = fd(a);
    Cg.f ? Cg.f(d, b, c) : Cg.call(null, d, b, c);
    Sb(b, " ");
  }
  if (a.Ub) {
    return a.rc(b);
  }
  if (null != a && (a.l & 2147483648 || a.V)) {
    return a.N(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return Sb(b, "" + w(a));
  }
  if (null != a && a.constructor === Object) {
    return Sb(b, "#js "), d = Z.b(function(b) {
      return new W(null, 2, 5, X, [Pd.a(b), a[b]], null);
    }, od(a)), Dg.D ? Dg.D(d, Cg, b, c) : Dg.call(null, d, Cg, b, c);
  }
  if (Xa(a)) {
    return vg(b, Cg, "#js [", " ", "]", c, a);
  }
  if (ba(a)) {
    return r(Ra.a(c)) ? Sb(b, zg(a)) : Sb(b, a);
  }
  if (ca(a)) {
    var e = a.name;
    c = r(function() {
      var a = null == e;
      return a ? a : /^[\s\xa0]*$/.test(e);
    }()) ? "Function" : e;
    return xg(b, Vc(["#object[", c, ' "', "" + w(a), '"]'], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + w(a);;) {
        if (N(c) < b) {
          c = [w("0"), w(c)].join("");
        } else {
          return c;
        }
      }
    }, xg(b, Vc(['#inst "', "" + w(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (a instanceof RegExp) {
    return xg(b, Vc(['#"', a.source, '"'], 0));
  }
  if (r(a.constructor.wb)) {
    return xg(b, Vc(["#object[", a.constructor.wb.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  e = a.constructor.name;
  c = r(function() {
    var a = null == e;
    return a ? a : /^[\s\xa0]*$/.test(e);
  }()) ? "Object" : e;
  return xg(b, Vc(["#object[", c, " ", "" + w(a), "]"], 0));
}
function Cg(a, b, c) {
  var d = Eg.a(c);
  return r(d) ? (c = S.f(c, Fg, Bg), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : Bg(a, b, c);
}
function Gg(a) {
  var b = S.f(Oa(), Ra, !1);
  if (null == a || Ya(B(a))) {
    b = "";
  } else {
    var c = w, d = new za;
    a: {
      var e = new jc(d);
      Cg(E(a), e, b);
      a = B(J(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = f.P(null, k);
          Sb(e, " ");
          Cg(l, e, b);
          k += 1;
        } else {
          if (a = B(a)) {
            f = a, nd(f) ? (a = dc(f), h = ec(f), f = a, l = N(a), a = h, h = l) : (l = E(f), Sb(e, " "), Cg(l, e, b), a = J(f), f = null, h = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  Ia.a ? Ia.a(b) : Ia.call(null);
  r(!0) && (b = Oa(), Ia.a ? Ia.a("\n") : Ia.call(null), A.b(b, Qa));
}
function Dg(a, b, c, d) {
  return vg(c, function(a, c, d) {
    var k = tb(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    Sb(c, " ");
    a = ub(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, B(a));
}
D.prototype.V = !0;
D.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
V.prototype.V = !0;
V.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
Yf.prototype.V = !0;
Yf.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
vf.prototype.V = !0;
vf.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
gf.prototype.V = !0;
gf.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
Nd.prototype.V = !0;
Nd.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
Sc.prototype.V = !0;
Sc.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
cg.prototype.V = !0;
cg.prototype.N = function(a, b, c) {
  return Dg(this, Cg, b, c);
};
$f.prototype.V = !0;
$f.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
lf.prototype.V = !0;
lf.prototype.N = function(a, b, c) {
  return vg(b, Cg, "[", " ", "]", c, this);
};
kg.prototype.V = !0;
kg.prototype.N = function(a, b, c) {
  return vg(b, Cg, "#{", " ", "}", c, this);
};
Vd.prototype.V = !0;
Vd.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
se.prototype.V = !0;
se.prototype.N = function(a, b, c) {
  Sb(b, "#object [cljs.core.Atom ");
  Cg(new Pa(null, 1, [Hg, this.state], null), b, c);
  return Sb(b, "]");
};
gg.prototype.V = !0;
gg.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
W.prototype.V = !0;
W.prototype.N = function(a, b, c) {
  return vg(b, Cg, "[", " ", "]", c, this);
};
Kd.prototype.V = !0;
Kd.prototype.N = function(a, b) {
  return Sb(b, "()");
};
Pa.prototype.V = !0;
Pa.prototype.N = function(a, b, c) {
  return Dg(this, Cg, b, c);
};
qg.prototype.V = !0;
qg.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
fg.prototype.V = !0;
fg.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
Jd.prototype.V = !0;
Jd.prototype.N = function(a, b, c) {
  return vg(b, Cg, "(", " ", ")", c, this);
};
xc.prototype.fb = !0;
xc.prototype.Ya = function(a, b) {
  if (b instanceof xc) {
    return vc(this, b);
  }
  throw Error([w("Cannot compare "), w(this), w(" to "), w(b)].join(""));
};
U.prototype.fb = !0;
U.prototype.Ya = function(a, b) {
  if (b instanceof U) {
    return Od(this, b);
  }
  throw Error([w("Cannot compare "), w(this), w(" to "), w(b)].join(""));
};
lf.prototype.fb = !0;
lf.prototype.Ya = function(a, b) {
  if (md(b)) {
    return wd(this, b);
  }
  throw Error([w("Cannot compare "), w(this), w(" to "), w(b)].join(""));
};
W.prototype.fb = !0;
W.prototype.Ya = function(a, b) {
  if (md(b)) {
    return wd(this, b);
  }
  throw Error([w("Cannot compare "), w(this), w(" to "), w(b)].join(""));
};
var Ig = null;
function Jg(a) {
  return Math.floor(Math.random() * a);
}
;var Kg = new U(null, "y", "y", -1757859776), Lg = new U(null, "stationary?", "stationary?", -512828992), Mg = new U(null, "shift", "shift", 997140064), Ng = new U(null, "features", "features", -1146962336), Og = new U(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), Pg = new U(null, "down", "down", 1565245570), Qg = new U(null, "disable-depth-mask", "disable-depth-mask", 3298562), Rg = new U(null, "burn", "burn", -458179293), Sg = new U(null, "key-typed", "key-typed", 
-876037597), Tg = new U(null, "mouse-clicked", "mouse-clicked", -199339421), Ug = new U(null, "mouse-released", "mouse-released", -664480061), Vg = new U(null, "fn", "fn", -1175266204), Wg = new U(null, "f8", "f8", -2141475484), Sa = new U(null, "meta", "meta", 1499536964), Xg = new U(null, "screen", "screen", 1990059748), Yg = new U(null, "enable-depth-test", "enable-depth-test", 1519326084), Zg = new U(null, "mouse-exited", "mouse-exited", -483205244), $g = new U(null, "enable-depth-sort", "enable-depth-sort", 
-383089627), ah = new U(null, "f1", "f1", 1714532389), Ta = new U(null, "dup", "dup", 556298533), bh = new U(null, "java2d", "java2d", 166099237), ch = new U(null, "corner", "corner", 1296717125), dh = new U(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), eh = new U(null, "darkest", "darkest", 68197253), fh = new U(null, "f10", "f10", 627525541), gh = new U(null, "dodge", "dodge", -1556666427), hh = new U(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), ih = 
new U(null, "replace", "replace", -786587770), jh = new U(null, "alt", "alt", -3214426), kh = new U(null, "mouse-wheel", "mouse-wheel", 1811662439), we = new U(null, "validator", "validator", -1966190681), lh = new U(null, "disable-depth-test", "disable-depth-test", 284606407), mh = new U(null, "keyPressed", "keyPressed", 1791025256), nh = new U(null, "decor", "decor", -1730969431), oh = new U(null, "colliding?", "colliding?", 982736489), ph = new U(null, "enable-stroke-perspective", "enable-stroke-perspective", 
-259923319), qh = new U(null, "opengl", "opengl", -614998103), rh = new U(null, "mouse-moved", "mouse-moved", -1918152310), sh = new U(null, "safe-draw-fn", "safe-draw-fn", 1454900202), th = new U(null, "mouseOut", "mouseOut", -386669045), uh = new U(null, "f5", "f5", 1587057387), vh = new U(null, "settings", "settings", 1556144875), wh = new U(null, "command", "command", -894540724), xh = new U(null, "mouseScrolled", "mouseScrolled", 31878252), Hg = new U(null, "val", "val", 128701612), yh = new U(null, 
"behavior", "behavior", 1202392908), Fg = new U(null, "fallback-impl", "fallback-impl", -1501286995), Qa = new U(null, "flush-on-newline", "flush-on-newline", -151457939), zh = new U(null, "mouseDragged", "mouseDragged", 129975181), Ah = new U(null, "radius", "radius", -2073122258), Bh = new U(null, "d-x", "d-x", -605169425), Ch = new U(null, "up", "up", -269712113), Dh = new U(null, "renderer", "renderer", 336841071), Eh = new U(null, "size", "size", 1098693007), Fh = new U(null, "title", "title", 
636505583), Gh = new U(null, "center", "center", -748944368), Hh = new U(null, "setup", "setup", 1987730512), Ih = new U(null, "mouse-pressed", "mouse-pressed", 736955536), Jh = new U(null, "middleware", "middleware", 1462115504), Kh = new U(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), Ra = new U(null, "readably", "readably", 1129599760), Lh = new U(null, "d-y", "d-y", 629858064), Nh = new U(null, "global-key-events", "global-key-events", 335064944), wg = new U(null, "more-marker", 
"more-marker", -14717935), Oh = new U(null, "corners", "corners", -137817903), Ph = new U(null, "f11", "f11", -1417398799), Qh = new U(null, "host", "host", -1558485167), Rh = new U(null, "overlay", "overlay", -139131598), Sh = new U(null, "mouse-entered", "mouse-entered", 811350322), Th = new U(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), Uh = new U(null, "enable-stroke-pure", "enable-stroke-pure", 881345587), Vh = new U(null, "no-safe-draw", "no-safe-draw", -1157778157), Wh = 
new U(null, "f3", "f3", 1954829043), Xh = new U(null, "enable-depth-mask", "enable-depth-mask", 872785875), Yh = new U(null, "key-pressed", "key-pressed", -757100364), Zh = new U(null, "key-released", "key-released", 215919828), Va = new U(null, "print-length", "print-length", 1931866356), $h = new U(null, "f2", "f2", 396168596), ai = new U(null, "keyReleased", "keyReleased", 541714964), bi = new U(null, "id", "id", -1388402092), ci = new U(null, "control", "control", 1892578036), di = new U(null, 
"difference", "difference", 1916101396), ei = new U(null, "mouseClicked", "mouseClicked", 1764302965), fi = new U(null, "enable-optimized-stroke", "enable-optimized-stroke", 1537575253), gi = new U(null, "p2d", "p2d", -2106175755), hi = new U(null, "mouseReleased", "mouseReleased", 1116234838), ii = new U(null, "mousePressed", "mousePressed", 1776186454), ji = new U(null, "mouseMoved", "mouseMoved", -1936954058), ki = new U(null, "f12", "f12", 853352790), li = new U(null, "mouseOver", "mouseOver", 
-1334461930), mi = new U(null, "exclusion", "exclusion", 531897910), ni = new U(null, "disable-opengl-errors", "disable-opengl-errors", 506822839), oi = new U(null, "right", "right", -452581833), pi = new U(null, "host-id", "host-id", 742376279), qi = new U(null, "core", "core", -86019209), ri = new U(null, "hard-light", "hard-light", -37591145), si = new U(null, "keyTyped", "keyTyped", 1437329399), ti = new U(null, "no-start", "no-start", 1381488856), ui = new U(null, "multiply", "multiply", -1036907048), 
vi = new U(null, "lightest", "lightest", -2043115912), wi = new U(null, "f7", "f7", 356150168), xi = new U(null, "x", "x", 2099068185), yi = new U(null, "blend", "blend", 249565561), zi = new U(null, "disable-depth-sort", "disable-depth-sort", -1568352839), Ai = new U(null, "target", "target", 253001721), le = new xc(null, "quote", "quote", 1377916282, null), Bi = new U(null, "f9", "f9", 704633338), Ci = new U(null, "draw", "draw", 1358331674), ke = new U(null, "arglists", "arglists", 1661989754), 
je = new xc(null, "nil-iter", "nil-iter", 1101030523, null), Di = new U(null, "add", "add", 235287739), Ei = new U(null, "shell", "shell", 1402941019), Fi = new U(null, "soft-light", "soft-light", 513207899), Eg = new U(null, "alt-impl", "alt-impl", 670969595), Gi = new U(null, "subtract", "subtract", 2136988635), Hi = new U(null, "rad", "rad", -833983012), Ii = new U(null, "f6", "f6", 2103080604), Ji = new U(null, "f4", "f4", 990968764), me = new xc(null, "meta10269", "meta10269", -284731491, null), 
Ki = new U(null, "p3d", "p3d", -850380194), Li = new U(null, "mouse-dragged", "mouse-dragged", -1220073441), Mi = new U(null, "left", "left", -399115937), Ni = new U(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671);
var Oi = {};
function Pi(a) {
  return B(a) ? ce(td, a) : !0;
}
E(new W(null, 2, 5, X, [Oi.Cc, Fd], null));
E(new W(null, 2, 5, X, [Oi.Dc, Gd], null));
function Qi(a) {
  return new V(null, function() {
    var b = ef(P(null, function() {
      return function d(b) {
        return new V(null, function() {
          for (;;) {
            var f = B(b);
            if (f) {
              if (nd(f)) {
                var h = dc(f), k = N(h), l = Ud(k);
                a: {
                  for (var m = 0;;) {
                    if (m < k) {
                      var n = z.b(h, m);
                      l.add(n + a + -3);
                      m += 1;
                    } else {
                      h = !0;
                      break a;
                    }
                  }
                }
                return h ? Wd(l.J(), d(ec(f))) : Wd(l.J(), null);
              }
              l = E(f);
              return P(l + a + -3, d(H(f)));
            }
            return null;
          }
        }, null, null);
      }(tg(1, 3));
    }()));
    return function(a, b) {
      return function f(h, k) {
        return P(Rb(hf(h, 1, 3)), new V(null, function(a, b) {
          return function() {
            var a = b(h, k);
            return r(a) ? f(a.a ? a.a(0) : a.call(null, 0), a.a ? a.a(1) : a.call(null, 1)) : null;
          };
        }(a, b), null, null));
      };
    }(b, function() {
      return function(a, b) {
        if (2 < b) {
          return null;
        }
        var e = S.f(a, b, (a.a ? a.a(b) : a.call(null, b)) - 1);
        if ((e.a ? e.a(b) : e.call(null, b)) < b) {
          return new W(null, 2, 5, X, [e, b + 1], null);
        }
        for (var f = b;;) {
          if (K.b(f, 1)) {
            return new W(null, 2, 5, X, [e, f], null);
          }
          e = S.f(e, f - 1, (e.a ? e.a(f) : e.call(null, f)) - 1);
          --f;
        }
      };
    }(b))(b, 1);
  }, null, null);
}
function Ri(a, b, c, d) {
  for (;;) {
    if (b >= N(a)) {
      return null;
    }
    var e = 2 - d, f = a.a ? a.a(b) : a.call(null, b);
    if (e <= f) {
      return Q.b(c, new W(null, 3, 5, X, [b, e, 2], null));
    }
    c = Q.b(c, new W(null, 3, 5, X, [b, f, d + f], null));
    b += 1;
    d += f;
  }
}
function Si(a) {
  return function c(d) {
    return P(d, new V(null, function() {
      var e;
      a: {
        var f = null == d ? null : yb(d);
        e = R(f, 0, null);
        var h = R(f, 1, null), f = R(f, 2, null);
        if (e < N(a) - 1) {
          e = K.b(h, 1) ? Q.b(gd(d), new W(null, 3, 5, X, [e + 1, 1, f], null)) : Q.j(gd(d), new W(null, 3, 5, X, [e, h - 1, f - 1], null), Vc([new W(null, 3, 5, X, [e + 1, 1, f], null)], 0));
        } else {
          if (K.b(h, 2)) {
            e = null;
          } else {
            for (h = gd(d);;) {
              var k = null == h ? null : yb(h);
              e = R(k, 0, null);
              f = R(k, 1, null);
              k = R(k, 2, null);
              h = K.b(f, 1) ? gd(h) : Q.b(gd(h), new W(null, 3, 5, X, [e, f - 1, k - 1], null));
              if (2 - (k - 1) <= ce(Fd, hf(a, e + 1, N(a)))) {
                e = Ri(a, e + 1, h, k - 1);
                break a;
              }
              if (!B(h)) {
                e = null;
                break a;
              }
            }
          }
        }
      }
      return r(e) ? c(e) : null;
    }, null, null));
  }(Ri(a, 0, $c, 0));
}
function Ti(a) {
  var b = ug(a), c = ef(og(a)), d = tg(0, N(c));
  a = ef(function() {
    return function(a, b, c) {
      return function m(d) {
        return new V(null, function(a, b) {
          return function() {
            for (;;) {
              var c = B(d);
              if (c) {
                if (nd(c)) {
                  var e = dc(c), f = N(e), h = Ud(f);
                  return function() {
                    for (var c = 0;;) {
                      if (c < f) {
                        var d = z.b(e, c), k = h, d = b.a ? b.a(d) : b.call(null, d), d = a.a ? a.a(d) : a.call(null, d);
                        k.add(d);
                        c += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Wd(h.J(), m(ec(c))) : Wd(h.J(), null);
                }
                var k = E(c);
                return P(function() {
                  var c = b.a ? b.a(k) : b.call(null, k);
                  return a.a ? a.a(c) : a.call(null, c);
                }(), m(H(c)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(b, c, d)(d);
  }());
  var e = Si(a);
  return function(a, b, c, d, e) {
    return function p(u) {
      return new V(null, function(a, b, c, d, e) {
        return function() {
          for (;;) {
            var f = B(u);
            if (f) {
              var h = f;
              if (nd(h)) {
                var k = dc(h), l = N(k), m = Ud(l);
                return function() {
                  for (var p = 0;;) {
                    if (p < l) {
                      var u = z.b(k, p);
                      Xd(m, ce($d, function() {
                        return function(a, b, c, d, e, f, h, k, l, m, p, x) {
                          return function Lb(u) {
                            return new V(null, function(a, b, c, d, e, f, h, k, l) {
                              return function() {
                                for (;;) {
                                  var a = B(u);
                                  if (a) {
                                    if (nd(a)) {
                                      var b = dc(a), c = N(b), d = Ud(c);
                                      a: {
                                        for (var e = 0;;) {
                                          if (e < c) {
                                            var f = z.b(b, e), h = R(f, 0, null), k = R(f, 1, null);
                                            R(f, 2, null);
                                            f = Ce(k, l.a ? l.a(h) : l.call(null, h));
                                            d.add(f);
                                            e += 1;
                                          } else {
                                            b = !0;
                                            break a;
                                          }
                                        }
                                      }
                                      return b ? Wd(d.J(), Lb(ec(a))) : Wd(d.J(), null);
                                    }
                                    d = E(a);
                                    b = R(d, 0, null);
                                    c = R(d, 1, null);
                                    R(d, 2, null);
                                    return P(Ce(c, l.a ? l.a(b) : l.call(null, b)), Lb(H(a)));
                                  }
                                  return null;
                                }
                              };
                            }(a, b, c, d, e, f, h, k, l, m, p, x), null, null);
                          };
                        }(p, u, k, l, m, h, f, a, b, c, d, e)(u);
                      }()));
                      p += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? Wd(m.J(), p(ec(h))) : Wd(m.J(), null);
              }
              var rg = E(h);
              return P(ce($d, function() {
                return function(a, b, c, d, e, f, h, k) {
                  return function Ma(l) {
                    return new V(null, function(a, b, c, d, e) {
                      return function() {
                        for (;;) {
                          var a = B(l);
                          if (a) {
                            if (nd(a)) {
                              var b = dc(a), c = N(b), d = Ud(c);
                              a: {
                                for (var f = 0;;) {
                                  if (f < c) {
                                    var h = z.b(b, f), k = R(h, 0, null), m = R(h, 1, null);
                                    R(h, 2, null);
                                    h = Ce(m, e.a ? e.a(k) : e.call(null, k));
                                    d.add(h);
                                    f += 1;
                                  } else {
                                    b = !0;
                                    break a;
                                  }
                                }
                              }
                              return b ? Wd(d.J(), Ma(ec(a))) : Wd(d.J(), null);
                            }
                            d = E(a);
                            b = R(d, 0, null);
                            c = R(d, 1, null);
                            R(d, 2, null);
                            return P(Ce(c, e.a ? e.a(b) : e.call(null, b)), Ma(H(a)));
                          }
                          return null;
                        }
                      };
                    }(a, b, c, d, e, f, h, k), null, null);
                  };
                }(rg, h, f, a, b, c, d, e)(rg);
              }()), p(H(h)));
            }
            return null;
          }
        };
      }(a, b, c, d, e), null, null);
    };
  }(b, c, d, a, e)(e);
}
function Ui(a) {
  var b = ef(Ld(a)), c = N(a);
  return 2 > c ? null : K.b(2, 1) ? function(a, b) {
    return function h(c) {
      return new V(null, function() {
        return function() {
          for (;;) {
            var a = B(c);
            if (a) {
              if (nd(a)) {
                var b = dc(a), d = N(b), e = Ud(d);
                a: {
                  for (var u = 0;;) {
                    if (u < d) {
                      var x = z.b(b, u), x = gb(I, x);
                      e.add(x);
                      u += 1;
                    } else {
                      b = !0;
                      break a;
                    }
                  }
                }
                return b ? Wd(e.J(), h(ec(a))) : Wd(e.J(), null);
              }
              e = E(a);
              return P(gb(I, e), h(H(a)));
            }
            return null;
          }
        };
      }(a, b), null, null);
    };
  }(c, b)(og(a)) : r(Pi(a)) ? K.b(2, c) ? (a = B(a), gb(I, a)) : Z.b(function(a, b) {
    return function(a) {
      return Z.b(b, a);
    };
  }(c, b), Qi(c)) : Ti(a);
}
;var Vi = function Vi(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Vi.a(arguments[0]);
    case 2:
      return Vi.b(arguments[0], arguments[1]);
    default:
      return Vi.j(arguments[0], arguments[1], new D(c.slice(2), 0, null));
  }
};
Vi.a = function(a) {
  return a;
};
Vi.b = function(a, b) {
  return N(a) < N(b) ? Ad(function(a, d) {
    return sd(b, d) ? hd.b(a, d) : a;
  }, a, a) : Ad(hd, a, b);
};
Vi.j = function(a, b, c) {
  return Ad(Vi, a, Q.b(c, b));
};
Vi.v = function(a) {
  var b = E(a), c = J(a);
  a = E(c);
  c = J(c);
  return Vi.j(b, a, c);
};
Vi.w = 2;
function Wi(a) {
  if (B(a)) {
    var b = E(a), c = E(J(a));
    a = Hi.a(b) + Hi.a(c);
    var d = xi.a(c) - xi.a(b), b = Kg.a(c) - Kg.a(b);
    return Math.sqrt(d * d + b * b) <= a;
  }
  return !1;
}
function Xi(a) {
  var b = xi.a(a) - Hi.a(a), c = xi.a(a) + Hi.a(a), d = Kg.a(a) - Hi.a(a), e = Kg.a(a) + Hi.a(a), f = new W(null, 4, 5, X, [new W(null, 2, 5, X, [b, d], null), new W(null, 2, 5, X, [c, d], null), new W(null, 2, 5, X, [b, e], null), new W(null, 2, 5, X, [c, e], null)], null);
  return new W(null, 2, 5, X, [a, og(Z.b(function() {
    return function(a) {
      var b = R(a, 0, null);
      a = R(a, 1, null);
      return new W(null, 2, 5, X, [Hd(b, 40), Hd(a, 40)], null);
    };
  }(b, c, d, e, f), f))], null);
}
function Yi(a) {
  var b = R(a, 0, null), c = R(a, 1, null);
  return Ee.b(Z.b(function() {
    return function(a) {
      var b = R(a, 0, null);
      a = R(a, 1, null);
      return Pd.a([w(b), w("-"), w(a)].join(""));
    };
  }(a, b, c), c), Ce(N(c), b));
}
function Zi(a) {
  return yf(de(ig, re.f(ef, Ie, ff), Z.b(function(a) {
    var c = R(a, 0, null);
    a = R(a, 1, null);
    return bd([c], [new W(null, 1, 5, X, [a], null)]);
  }, a)));
}
function $i(a) {
  var b = Ui(a), c = Fe(Wi, b), d = og(Ie(c));
  a = Vi.b(ng(a), d);
  return $d.b(Z.b(function() {
    return function(a) {
      return S.f(a, oh, !0);
    };
  }(b, c, d, a), d), a);
}
function aj(a) {
  a = Z.b($i, a);
  var b = og(Ie(a)), c = Z.b(bi, b), d = Ke(2, 2, Ee.b(c, b));
  return yf(de(ig, function() {
    return function(a, b) {
      return S.f(b, oh, !0);
    };
  }(a, b, c, d), Z.b(function() {
    return function(a) {
      var b = R(a, 0, null);
      a = R(a, 1, null);
      return bd([b], [a]);
    };
  }(a, b, c, d), d)));
}
;var bj;
a: {
  var cj = aa.navigator;
  if (cj) {
    var dj = cj.userAgent;
    if (dj) {
      bj = dj;
      break a;
    }
  }
  bj = "";
}
function ej(a) {
  return -1 != bj.indexOf(a);
}
;var fj = ej("Opera"), gj = ej("Trident") || ej("MSIE"), hj = ej("Edge"), ij = ej("Gecko") && !(-1 != bj.toLowerCase().indexOf("webkit") && !ej("Edge")) && !(ej("Trident") || ej("MSIE")) && !ej("Edge"), jj = -1 != bj.toLowerCase().indexOf("webkit") && !ej("Edge");
jj && ej("Mobile");
ej("Macintosh");
ej("Windows");
ej("Linux") || ej("CrOS");
var kj = aa.navigator || null;
kj && (kj.appVersion || "").indexOf("X11");
ej("Android");
!ej("iPhone") || ej("iPod") || ej("iPad");
ej("iPad");
ej("iPod");
function lj() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var mj;
a: {
  var nj = "", oj = function() {
    var a = bj;
    if (ij) {
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    }
    if (hj) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (gj) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (jj) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (fj) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  oj && (nj = oj ? oj[1] : "");
  if (gj) {
    var pj = lj();
    if (null != pj && pj > parseFloat(nj)) {
      mj = String(pj);
      break a;
    }
  }
  mj = nj;
}
var qj = {};
function rj(a) {
  var b;
  if (!(b = qj[a])) {
    b = 0;
    for (var c = fa(String(mj)).split("."), d = fa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = ga(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ga(0 == n[2].length, 0 == p[2].length) || ga(n[2], p[2]);
      } while (0 == b);
    }
    b = qj[a] = 0 <= b;
  }
  return b;
}
var sj = aa.document, tj = sj && gj ? lj() || ("CSS1Compat" == sj.compatMode ? parseInt(mj, 10) : 5) : void 0;
!ij && !gj || gj && 9 <= Number(tj) || ij && rj("1.9.1");
gj && rj("9");
var uj = new Pa(null, 3, [nh, new W(null, 2, 5, X, ["2.0", "Try :features [:present] for similar effect"], null), Ai, new W(null, 2, 5, X, ["2.0", "Use :features [:keep-on-top] instead."], null), sh, new W(null, 2, 5, X, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function vj(a) {
  a = ng(a);
  r(a.a ? a.a(Vh) : a.call(null, Vh)) && Gg(Vc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return hd.b(a, Vh);
}
function wj(a) {
  var b = Le.f(a, new W(null, 1, 5, X, [Ng], null), vj);
  return Je.b(ne, Ge(Wa, function() {
    return function(a) {
      return function e(b) {
        return new V(null, function() {
          return function() {
            for (;;) {
              var a = B(b);
              if (a) {
                if (nd(a)) {
                  var c = dc(a), l = N(c), m = Ud(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = z.b(c, a), e = R(b, 0, null), f = R(b, 1, null), b = m;
                        var h = uj.a ? uj.a(e) : uj.call(null, e);
                        r(h) ? (f = R(h, 0, null), h = R(h, 1, null), Gg(Vc([e, "option was removed in Quil", f, ".", h], 0)), e = null) : e = new W(null, 2, 5, X, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Wd(m.J(), e(ec(a))) : Wd(m.J(), null);
                }
                var n = E(a), p = R(n, 0, null), u = R(n, 1, null);
                return P(function() {
                  var a = uj.a ? uj.a(p) : uj.call(null, p);
                  if (r(a)) {
                    var b = R(a, 0, null), a = R(a, 1, null);
                    Gg(Vc([p, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new W(null, 2, 5, X, [p, u], null);
                }(), e(H(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;var xj = !gj || 9 <= Number(tj), yj = gj && !rj("9");
!jj || rj("528");
ij && rj("1.9b") || gj && rj("8") || fj && rj("9.5") || jj && rj("528");
ij && !rj("8") || gj && rj("9");
function zj(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Lb = !1;
}
zj.prototype.stopPropagation = function() {
  this.Lb = !0;
};
zj.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Aj(a, b) {
  zj.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.kb = this.state = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
      if (ij) {
        var f;
        a: {
          try {
            Ga(e.nodeName);
            f = !0;
            break a;
          } catch (h) {
          }
          f = !1;
        }
        f || (e = null);
      }
    } else {
      "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    }
    this.relatedTarget = e;
    null === d ? (this.offsetX = jj || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = jj || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 
    0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.kb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = zj.prototype;
  Aj.Zb = zj.prototype;
  Aj.prototype = new a;
  Aj.prototype.constructor = Aj;
  Aj.qb = function(a, c, d) {
    for (var e = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      e[f - 2] = arguments[f];
    }
    return zj.prototype[c].apply(a, e);
  };
})();
Aj.prototype.stopPropagation = function() {
  Aj.Zb.stopPropagation.call(this);
  this.kb.stopPropagation ? this.kb.stopPropagation() : this.kb.cancelBubble = !0;
};
Aj.prototype.preventDefault = function() {
  Aj.Zb.preventDefault.call(this);
  var a = this.kb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, yj) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Bj = "closure_listenable_" + (1E6 * Math.random() | 0), Cj = 0;
function Dj(a, b, c, d, e) {
  this.listener = a;
  this.xb = null;
  this.src = b;
  this.type = c;
  this.rb = !!d;
  this.Jb = e;
  this.key = ++Cj;
  this.ob = this.Ab = !1;
}
function Ej(a) {
  a.ob = !0;
  a.listener = null;
  a.xb = null;
  a.src = null;
  a.Jb = null;
}
;function Fj(a) {
  this.src = a;
  this.qa = {};
  this.yb = 0;
}
Fj.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.qa[f];
  a || (a = this.qa[f] = [], this.yb++);
  var h = Gj(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.Ab = !1)) : (b = new Dj(b, this.src, f, !!d, e), b.Ab = c, a.push(b));
  return b;
};
Fj.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.qa)) {
    return !1;
  }
  var e = this.qa[a];
  b = Gj(e, b, c, d);
  return -1 < b ? (Ej(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.qa[a], this.yb--), !0) : !1;
};
Fj.prototype.hasListener = function(a, b) {
  var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
  return ia(this.qa, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].rb != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Gj(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.ob && f.listener == b && f.rb == !!c && f.Jb == d) {
      return e;
    }
  }
  return -1;
}
;var Hj = "closure_lm_" + (1E6 * Math.random() | 0), Ij = {}, Jj = 0;
function Kj() {
  var a = Lj, b = xj ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Mj(a, b, c, d, e) {
  if ("array" == q(b)) {
    for (var f = 0;f < b.length;f++) {
      Mj(a, b[f], c, d, e);
    }
  } else {
    if (c = Nj(c), a && a[Bj]) {
      a.Nc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = Oj(a);
      h || (a[Hj] = h = new Fj(a));
      c = h.add(b, c, !0, d, e);
      if (!c.xb) {
        d = Kj();
        c.xb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) {
          a.addEventListener(b.toString(), d, f);
        } else {
          if (a.attachEvent) {
            a.attachEvent(Pj(b.toString()), d);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
        Jj++;
      }
    }
  }
}
function Pj(a) {
  return a in Ij ? Ij[a] : Ij[a] = "on" + a;
}
function Qj(a, b, c, d) {
  var e = !0;
  if (a = Oj(a)) {
    if (b = a.qa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.rb == c && !f.ob && (f = Rj(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function Rj(a, b) {
  var c = a.listener, d = a.Jb || a.src;
  if (a.Ab && "number" != typeof a && a && !a.ob) {
    var e = a.src;
    if (e && e[Bj]) {
      e.Pc(a);
    } else {
      var f = a.type, h = a.xb;
      e.removeEventListener ? e.removeEventListener(f, h, a.rb) : e.detachEvent && e.detachEvent(Pj(f), h);
      Jj--;
      if (f = Oj(e)) {
        var h = a.type, k;
        if (k = h in f.qa) {
          k = f.qa[h];
          var l = Aa(k, a), m;
          (m = 0 <= l) && Array.prototype.splice.call(k, l, 1);
          k = m;
        }
        k && (Ej(a), 0 == f.qa[h].length && (delete f.qa[h], f.yb--));
        0 == f.yb && (f.src = null, e[Hj] = null);
      } else {
        Ej(a);
      }
    }
  }
  return c.call(d, b);
}
function Lj(a, b) {
  if (a.ob) {
    return !0;
  }
  if (!xj) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Aj(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (l) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;!c.Lb && 0 <= h;h--) {
        c.currentTarget = e[h];
        var k = Qj(e[h], f, !0, c), d = d && k;
      }
      for (h = 0;!c.Lb && h < e.length;h++) {
        c.currentTarget = e[h], k = Qj(e[h], f, !1, c), d = d && k;
      }
    }
    return d;
  }
  return Rj(a, new Aj(b, this));
}
function Oj(a) {
  a = a[Hj];
  return a instanceof Fj ? a : null;
}
var Sj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Nj(a) {
  if (ca(a)) {
    return a;
  }
  a[Sj] || (a[Sj] = function(b) {
    return a.handleEvent(b);
  });
  return a[Sj];
}
;function Tj(a, b) {
  if (r(A.b(b, a))) {
    return A.b(b, a);
  }
  if (r(pe(ud([a]), yf(b)))) {
    return a;
  }
  throw Error([w("Expecting a keyword, got: "), w(a), w(". Expected one of: "), w(ef(yd(xf(b))))].join(""));
}
;var Uj = null, Vj = new Pa(null, 4, [bh, Processing.prototype.PConstants.JAVA2D, gi, Processing.prototype.PConstants.P2D, Ki, Processing.prototype.PConstants.P3D, qh, Processing.prototype.PConstants.OPENGL], null), Wj = function Wj(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Wj.b(arguments[0], arguments[1]);
    case 3:
      return Wj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([w("Invalid arity: "), w(c.length)].join(""));;
  }
};
Wj.b = function(a, b) {
  return Uj.size(a | 0, b | 0);
};
Wj.f = function(a, b, c) {
  return Uj.size(a | 0, b | 0, Tj(c, Vj));
};
Wj.w = 3;
function Xj(a, b) {
  for (var c = B(bd([mh, th, xh, zh, Hh, ai, ei, hi, ii, ji, li, si, Ci], [Yh, Zg, kh, Li, Hh, Zh, Tg, Ug, Ih, rh, Sh, Sg, Ci])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.P(null, f), k = R(h, 0, null), l = R(h, 1, null), m = b.a ? b.a(l) : b.call(null, l);
      if (r(m)) {
        var n = m;
        a[Qd(k)] = function(b, c, d, e, f) {
          return function() {
            var b = Uj;
            Uj = a;
            try {
              return f.u ? f.u() : f.call(null);
            } finally {
              Uj = b;
            }
          };
        }(c, d, e, f, n, m, h, k, l);
      }
      f += 1;
    } else {
      if (m = B(c)) {
        h = m;
        if (nd(h)) {
          c = dc(h), f = ec(h), d = c, e = N(c), c = f;
        } else {
          var n = E(h), k = R(n, 0, null), l = R(n, 1, null), p = b.a ? b.a(l) : b.call(null, l);
          if (r(p)) {
            var u = p;
            a[Qd(k)] = function(b, c, d, e, f) {
              return function() {
                var b = Uj;
                Uj = a;
                try {
                  return f.u ? f.u() : f.call(null);
                } finally {
                  Uj = b;
                }
              };
            }(c, d, e, f, u, p, n, k, l, h, m);
          }
          c = J(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function Yj(a) {
  var b = hg(Vc([new Pa(null, 1, [Eh, new W(null, 2, 5, X, [500, 300], null)], null), function(b) {
    return b.a ? b.a(a) : b.call(null, a);
  }.call(null, ce(re, P(wj, Jh.b(a, $c))))], 0)), c = function() {
    var a = Eh.a(b);
    return r(a) ? a : new W(null, 2, 5, X, [200, 200], null);
  }(), d = Dh.a(b), e = ng(Ng.a(b)), f = function(a, b, c) {
    return function() {
      ce(Wj, $d.b(b, r(c) ? new W(null, 1, 5, X, [c], null) : $c));
      r(vh.a(a)) && vh.a(a).call(null);
      return r(Hh.a(a)) ? Hh.a(a).call(null) : null;
    };
  }(b, c, d, e), h = r(kh.a(b)) ? function(a) {
    return function() {
      return kh.a(a).call(null, -1 * Uj.mouseScroll);
    };
  }(b, c, d, e, f) : null, k = S.j(b, Hh, f, Vc([kh, h], 0)), c = new Processing.Sketch(function(a, b, c, d, e, f, h) {
    return function(a) {
      Xj(a, h);
      a.Oc = ue ? ue(null) : te.call(null, null);
      return a.zc = ue ? ue(60) : te.call(null, 60);
    };
  }(b, c, d, e, f, h, k));
  sd(e, Nh) && (c.options.globalKeyEvents = !0);
  return c;
}
function Zj(a) {
  a = a.xc;
  r(a) && a.exit();
}
var ak = function ak(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return ak.j(0 < c.length ? new D(c.slice(0), 0, null) : null);
};
ak.j = function(a) {
  var b = ce(ve, a);
  a = function() {
    var a = Qh.a(b), c = document;
    return ba(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = Dh.a(b);
    return r(a) ? a : gi;
  }();
  return r(a) ? (r(a.Xb) ? K.b(c, a.Xb) || console.warn("WARNING: Using different context on one canvas!") : a.Xb = c, Zj(a), a.xc = new Processing(a, Yj(b))) : console.error("ERROR: Cannot create sketch. :host is not specified.");
};
ak.w = 0;
ak.v = function(a) {
  return ak.j(B(a));
};
var bk = ue ? ue(I) : te.call(null, I);
function ck(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
function dk() {
  for (var a = 1 >= document.body.childNodes.length, b = B(Hc.a ? Hc.a(bk) : Hc.call(null, bk)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.P(null, e);
      r(a) && ck(pi.a(f));
      Vg.a(f).call(null);
      e += 1;
    } else {
      if (b = B(b)) {
        c = b, nd(c) ? (b = dc(c), e = ec(c), c = b, d = N(b), b = e) : (b = E(c), r(a) && ck(pi.a(b)), Vg.a(b).call(null), b = J(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return xe.b ? xe.b(bk, $c) : xe.call(null, bk, $c);
}
Mj(window, "load", dk);
function ek() {
  return r(null) ? null : Uj;
}
bd([Rg, Xg, eh, gh, ih, Rh, di, mi, ri, ui, vi, yi, Di, Fi, Gi], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
var fk = new Pa(null, 4, [Gh, Processing.prototype.PConstants.CENTER, Ah, Processing.prototype.PConstants.RADIUS, ch, Processing.prototype.PConstants.CORNER, Oh, Processing.prototype.PConstants.CORNERS], null);
bd([Og, Qg, Yg, $g, dh, hh, lh, ph, Kh, Th, Uh, Xh, fi, ni, zi, Ni], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, 
Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS]);
bd([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [fh, oi, wh, Wg, uh, $h, Pg, Ii, wi, Ph, ci, Ji, ah, ki, Mg, Bi, Ch, jh, Wh, Mi]);
var gk, hk = window.innerWidth, ik = window.innerHeight, jk = Math.floor(hk * ik / 8E3);
function kk(a) {
  return S.j(a, Bh, 7 * Math.random() - 3 * Math.random(), Vc([Lh, 7 * Math.random() - 3 * Math.random(), Lg, !1, oh, !1, Hi, function() {
    var b = Hi.a(a) + 1;
    return 20 > b ? b : 20;
  }()], 0));
}
function lk(a) {
  var b = Ei.a(a), c = R(b, 0, null), b = R(b, 1, null), d = qi.a(a), e = R(d, 0, null), f = R(d, 1, null), h = R(d, 2, null), k = R(d, 3, null), d = Hi.a(a), l = xi.a(a);
  a = Kg.a(a);
  ek().stroke(c, b);
  ek().strokeWeight(2);
  ek().fill(e, f, h, k);
  ek()["no-fill-quil"] = !1;
  c = Tj(Ah, fk);
  ek().ellipseMode(c | 0);
  return ek().ellipse(l, a, d, d);
}
function mk() {
  return ze(jk, De(function() {
    var a = Jg(hk), b = new W(null, 2, 5, X, [200, 255], null), c = new W(null, 4, 5, X, [Jg(255), Jg(255), Jg(255), 255], null), d = Jg(ik), e;
    e = new W(null, 3, 5, X, [kk, kk, kk], null);
    e = Pc(e, Jg(N(e)));
    var f;
    null == Ig && (Ig = ue ? ue(0) : te.call(null, 0));
    f = yc.a([w("G__"), w(ye.b(Ig, Gc))].join(""));
    return bd([Kg, Lg, oh, yh, Bh, Lh, bi, qi, xi, Ei, Hi], [d, !1, !1, e, 0, 0, f, c, a, b, 5]);
  }));
}
function nk(a) {
  var b;
  if (0 < Bh.a(a)) {
    b = Bh.a(a) + xi.a(a);
    var c = Uj.width;
    b -= c * Hd(b, c);
  } else {
    b = Bh.a(a) + xi.a(a), b = 0 < b ? b : Uj.width - b;
  }
  if (0 < Lh.a(a)) {
    var c = Lh.a(a) + Kg.a(a), d = Uj.height, c = c - d * Hd(c, d)
  } else {
    c = Lh.a(a) + Kg.a(a), c = 0 < c ? c : Uj.height - c;
  }
  return S.j(a, xi, b, Vc([Kg, c], 0));
}
function ok(a) {
  var b = nk(a);
  return K.b(a, b) ? S.f(b, Lg, !0) : S.j(b, Lg, !1, Vc([Hi, function() {
    var b = Hi.a(a) - 1;
    return 10 < b ? b : 10;
  }()], 0));
}
function pk(a) {
  a = Z.b(ok, aj(Zi(Ke(2, 2, Ie(Z.b(Yi, Z.b(Xi, a)))))));
  return Z.b(function() {
    return function(a) {
      var c;
      c = oh.a(a);
      c = r(c) ? c : Lg.a(a);
      return r(c) ? yh.a(a).call(null, a) : a;
    };
  }(a), a);
}
function qk() {
  ek().smooth();
  var a = Uj.zc;
  xe.b ? xe.b(a, 24) : xe.call(null, a, 24);
  Uj.frameRate(24);
  a = mk();
  gk = ue ? ue(a) : te.call(null, a);
}
function rk() {
  ek().background(32);
  for (var a = Z.b(lk, ye.b(gk, pk)), b = a;;) {
    if (B(b)) {
      b = J(b);
    } else {
      break;
    }
  }
  return a;
}
function sk() {
  return ak.j(Vc([Qh, "quil-circles", Eh, new W(null, 2, 5, X, [hk, ik], null), Fh, "An animation of circular antagonism.", Hh, cd(qk) ? function() {
    function a(a) {
      var d = null;
      if (0 < arguments.length) {
        for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
          e[d] = arguments[d + 0], ++d;
        }
        d = new D(e, 0);
      }
      return b.call(this, d);
    }
    function b(a) {
      return ce(qk, a);
    }
    a.w = 0;
    a.v = function(a) {
      a = B(a);
      return b(a);
    };
    a.j = b;
    return a;
  }() : qk, Ci, cd(rk) ? function() {
    function a(a) {
      var d = null;
      if (0 < arguments.length) {
        for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
          e[d] = arguments[d + 0], ++d;
        }
        d = new D(e, 0);
      }
      return b.call(this, d);
    }
    function b(a) {
      return ce(rk, a);
    }
    a.w = 0;
    a.v = function(a) {
      a = B(a);
      return b(a);
    };
    a.j = b;
    return a;
  }() : rk], 0));
}
var tk = ["ponting_dynamics", "circles", "circles"], uk = aa;
tk[0] in uk || !uk.execScript || uk.execScript("var " + tk[0]);
for (var vk;tk.length && (vk = tk.shift());) {
  tk.length || void 0 === sk ? uk = uk[vk] ? uk[vk] : uk[vk] = {} : uk[vk] = sk;
}
r(pe(function(a) {
  return K.b(ti, a);
}, null)) || (ye.f(bk, Q, new Pa(null, 2, [Vg, sk, pi, "quil-circles"], null)), K.b(document.readyState, "complete") && dk());

})();
