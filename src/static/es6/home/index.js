/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "es6/" + chunkId + ".js?" + "2f462827ef45e6679f44" + "";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _homeHeader = __webpack_require__(2);

	var _homeHeader2 = _interopRequireDefault(_homeHeader);

	var _indexInfo = __webpack_require__(9);

	var _indexInfo2 = _interopRequireDefault(_indexInfo);

	var _loading = __webpack_require__(16);

	var _loading2 = _interopRequireDefault(_loading);

	var _vTap = __webpack_require__(25);

	var _vTap2 = _interopRequireDefault(_vTap);

	var _ajaxurl = __webpack_require__(26);

	var _ajaxurl2 = _interopRequireDefault(_ajaxurl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_ajaxurl2.default, '---我是测试环境变量配置用'); // 配置了别名,可简写可不简写, 对于懒人的我喜欢ide的补全,所以不简写

	Vue.use(_vTap2.default);
	var V = new Vue({
		el: 'body',
		methods: {
			sayHi: function sayHi() {
				__webpack_require__.e/* nsure */(1, function () {
					var say = __webpack_require__(27).say;
					say('hi');
				});
			},
			tap: function tap() {
				console.log('hahah');
			}
		},
		components: {
			IndexInfo: _indexInfo2.default, Loading: _loading2.default, myHead: _homeHeader2.default
		}
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home/home-header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home-header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home-header.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home-header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<h1>
	// 		我是home业务模块下的公共头部,修改我home业务模块下的js都会编译
	// 	</h1>
	// </template>
	// <style>
	//
	// </style>
	// <script>
	// 这个是home业务模块下的通用组件
	// 修改了这个组件,home下的js都会编译一次
	exports.default = {
		ready: function ready() {
			console.log('home-header,测试所有home业务模块下的js都会被编译');
		}
	};
	// </script>

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<h1>\n\t我是home业务模块下的公共头部,修改我home业务模块下的js都会编译\n</h1>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home/index-info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index-info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-info.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-info.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#kodo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nimg {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%; }\n\n#bg h3 {\n  background: url(" + __webpack_require__(12) + ");\n  color: #fff; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/holmes.jpg?39e4bbb59b";

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// 	<div>
	// 		<h1>我是用户信息</h1>
	// 		<figure>
	// 			<img src="../../assets/images/home/logo.jpg" alt="头像">
	// 		</figure>
	// 		<div id="bg">
	// 			<h3>这里是测试背景图片</h3>
	// 			<p></p>
	// 		</div>
	//
	// 		<div id="kodo">
	// 			我是组件里引入的sass,并且是display:flex
	// 		</div>
	//
	// 	</div>
	// </template>
	// <style rel="stylesheet/scss" lang="sass">
	// 	@import "../../sass/home/index-info";
	// 	img {
	// 		width:70px;
	// 		height:70px;
	// 		border-radius: 50%;
	// 	}
	//     #bg h3 {
	// 		background: url("../../assets/images/holmes.jpg");
	// 		color: #fff;
	// 	}
	// </style>
	// <script>
	// home业务模块下  只有index页面 用的组件
	exports.default = {
	    ready: function ready() {
	        console.log('修改这里测试实时编译');
	    }
	};
	// </script>

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div>\n\t<h1>我是用户信息</h1>\n\t<figure>\n\t\t<img src=\"" + __webpack_require__(15) + "\" alt=\"头像\">\n\t</figure>\n\t<div id=\"bg\">\n\t\t<h3>这里是测试背景图片</h3>\n\t\t<p></p>\n\t</div>\n\n\t<div id=\"kodo\">\n\t\t我是组件里引入的sass,并且是display:flex\n\t</div>\n\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.jpg?82ceb5918f";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/common/loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-77f42ef0&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-77f42ef0&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "i[_v-77f42ef0] {\n  font-size: 20px;\n  color: #abcedf; }\n\n@font-face {\n  font-family: 'iconfont';\n  src: url(" + __webpack_require__(19) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(19) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(20) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\"), url(" + __webpack_require__(22) + "#iconfont) format(\"svg\");\n  /* iOS 4.1- */ }\n\n.iconfont[_v-77f42ef0] {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.ebec254.eot";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-woff;base64,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"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.b441fce.ttf";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTIwNzMxIGF0IE1vbiBBdWcgMTUgMTE6MDU6MjYgMjAxNgogQnkgYWRtaW4KPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJpY29uZm9udCIgaG9yaXotYWR2LXg9IjM3NCIgPgogIDxmb250LWZhY2UgCiAgICBmb250LWZhbWlseT0iaWNvbmZvbnQiCiAgICBmb250LXdlaWdodD0iNTAwIgogICAgZm9udC1zdHJldGNoPSJub3JtYWwiCiAgICB1bml0cy1wZXItZW09IjEwMjQiCiAgICBwYW5vc2UtMT0iMiAwIDYgMyAwIDAgMCAwIDAgMCIKICAgIGFzY2VudD0iODk2IgogICAgZGVzY2VudD0iLTEyOCIKICAgIHgtaGVpZ2h0PSI3OTIiCiAgICBiYm94PSIzNCAtMTQ3IDk1NiA3OTIiCiAgICB1bmRlcmxpbmUtdGhpY2tuZXNzPSI1MCIKICAgIHVuZGVybGluZS1wb3NpdGlvbj0iLTEwMCIKICAgIHVuaWNvZGUtcmFuZ2U9IlUrMDA3OC1FNjg0IgogIC8+CjxtaXNzaW5nLWdseXBoIApkPSJNMzQgMHY2ODJoMjcydi02ODJoLTI3MnpNNjggMzRoMjA0djYxNGgtMjA0di02MTR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5ub3RkZWYiIApkPSJNMzQgMHY2ODJoMjcydi02ODJoLTI3MnpNNjggMzRoMjA0djYxNGgtMjA0di02MTR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5udWxsIiBob3Jpei1hZHYteD0iMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im5vbm1hcmtpbmdyZXR1cm4iIGhvcml6LWFkdi14PSIzNDEiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ4IiB1bmljb2RlPSJ4IiBob3Jpei1hZHYteD0iMTAwMSIgCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTY4NCIgdW5pY29kZT0iJiN4ZTY4NDsiIGhvcml6LWFkdi14PSIxMDI0IiAKZD0iTTg5MSA1NjJoLTE4NnExNyAzMCAxNyA2NnEwIDQ4IC0zMSA4My41dC04NiAzNS41cS01MyAwIC04OSAtMzdxLTE4IC0xOCAtMzEgLTQ2cS0xMiAyNyAtMzAgNDZxLTM2IDM3IC04OSAzN3EtNTUgMCAtODggLTM4cS0yOSAtMzMgLTI5IC04MXEwIC0zNiAxOCAtNjZoLTE3NXEtMTEgMCAtMTkuNSAtOC41dC04LjUgLTIwLjV2LTI1OXEwIC0xMSA4LjUgLTE5LjV0MTkuNSAtOC41aDM4di0zNjVxMCAtMTIgOC41IC0yMHQxOS41IC04aDY2OApxMTEgMCAxOS41IDh0OC41IDIwdjM2NWgzN3ExMiAwIDIwIDguNXQ4IDE5LjV2MjU5cTAgMTIgLTggMjAuNXQtMjAgOC41ek01NTUgNjcwcTIwIDIwIDUwIDIwcTMxIDAgNDYgLTE4LjV0MTUgLTQzLjVxMCAtMjggLTE1IC00NnEtMTcgLTIwIC00NiAtMjBsLTg5IDFxOCA3NCAzOSAxMDd6TTMwNSA2MjhxMCAyNiAxNSA0NHExNiAxOCA0NiAxOHQ0OSAtMjBxMzEgLTMyIDM4IC0xMDhoLTg3cS0zMiAwIC00Ni41IDIxdC0xNC41IDQ1ek0xMjAgNTA1CmgyNjd2LTIwMmgtMjY3djIwMnpNMTg2IDI0NmgyMDF2LTMzNmgtMjAxdjMzNnpNNDQzIC05MHY1OTVoOTh2LTU5NWgtOTh6TTc5OCAtOTBoLTIwMXYzMzZoMjAxdi0zMzZ6TTg2NCAzMDNoLTI2N3YyMDJoMjY3di0yMDJ6IiAvPgogIDwvZm9udD4KPC9kZWZzPjwvc3ZnPgo="

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div id="loading">
	// 		<!--修改这里试试,所有js都会编译,因为他是common全局公用的-->
	// 		<h4>loading组件 正在加载中,请稍等...</h4>
	// 		<!-- 测试字体文件 -->
	// 		<i class="iconfont">&#xe684;&#xe684;&#xe684;</i>
	// 	</div>
	// </template>
	// <style scoped rel="stylesheet/scss" lang="sass">
	// 	i {
	// 		font-size:20px;
	// 		color: #abcedf;
	// 	}
	// 	@font-face {font-family: 'iconfont';
	// 		src: url('../../assets/fonts/iconfont.eot'); /* IE9*/
	// 		src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	// 		url('../../assets/fonts/iconfont.woff') format('woff'), /* chrome、firefox */
	// 		url('../../assets/fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	// 		url('../../assets/fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
	// 	}
	// 	.iconfont{
	// 		font-family:"iconfont" !important;
	// 		font-size:16px;font-style:normal;
	// 		-webkit-font-smoothing: antialiased;
	// 		-webkit-text-stroke-width: 0.2px;
	// 		-moz-osx-font-smoothing: grayscale;}
	// </style>
	// <script>
	// common是所有业务模块下的通用组件
	// 修改common下的组件,所有业务模块的入口js都会编译
	exports.default = {
	    ready: function ready() {
	        console.log('loading,测试所有入口js都会被编译');
	    }
	};
	// </script>

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"loading\" _v-77f42ef0=\"\">\n\t\t<!--修改这里试试,所有js都会编译,因为他是common全局公用的-->\n\t\t<h4 _v-77f42ef0=\"\">loading组件 正在加载中,请稍等...</h4>\n\t\t<!-- 测试字体文件 -->\n\t\t<i class=\"iconfont\" _v-77f42ef0=\"\"></i>\n\t</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 二哲 on 15/12/6.
	 */
	/*
	 * 不带参数指令
	 * v-tap=handler
	 * or
	 * 带参数指令
	 * v-tap=handler($index,el,$event)
	 *
	 * !!!新增!!!
	 * 把tapObj对象注册在原生event对象上
	 * 	event.tapObj拥有6个值
	 * 	pageX,pageY,clientX,clientY,distanceX,distanceY
	 * 后面2个分别的手指可能移动的位置(以后可用于拓展手势)
	 *
	 * */
	;(function() {
		var vueTap = {};
		vueTap.install = function(Vue) {
			Vue.directive('tap', {
				isFn : true,
				acceptStatement : true,
				bind : function() {
					//bind callback
				},
				update : function(fn) {
					var self = this;
					self.tapObj = {};
					
					if(typeof fn !== 'function') {
						return console.error('The param of directive "v-tap" must be a function!');
					}
					self.handler = function(e) { //This directive.handler
						e.tapObj = self.tapObj;
						fn.call(self,e);
					};
					if(self.isPC()) {
						self.el.addEventListener('click',function(e) {
							e.preventDefault();
							fn.call(self,e);
						},false);
					} else {
						this.el.addEventListener('touchstart',function(e) {
							
							if(self.modifiers.stop)
								e.stopPropagation();
							if(self.modifiers.prevent)
								e.preventDefault();
							self.touchstart(e,self);
						},false);
						this.el.addEventListener('touchend',function(e) {
							e.preventDefault();
							if(self.el.href && !self.modifiers.prevent) {
								return window.location = self.el.href;
							}
							return self.touchend(e,self,fn);
						},false);
					}
				},
				unbind : function() {},
				isTap : function() {
					var self   = this;
					if(self.el.disabled){
						return false;
					}
					var tapObj = this.tapObj;
					return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
				},
				isPC : function() {
					var uaInfo = navigator.userAgent;
					var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
					var flag = true;
					for (var i = 0; i < agents.length; i++) {
						if (uaInfo.indexOf(agents[i]) > 0) { flag = false; break; }
					}
					return flag;
				},
				touchstart : function(e,self) {
					var touches = e.touches[0];
					var tapObj = self.tapObj;
					tapObj.pageX = touches.pageX;
					tapObj.pageY = touches.pageY;
					tapObj.clientX = touches.clientX;
					tapObj.clientY = touches.clientY;
					self.time = +new Date();
				},
				touchend : function(e,self) {
					var touches = e.changedTouches[0];
					var tapObj = self.tapObj;
					self.time = +new Date() - self.time;
					tapObj.distanceX = tapObj.pageX - touches.pageX;
					tapObj.distanceY = tapObj.pageY - touches.pageY;
					
					if (!self.isTap(tapObj)) return;
					setTimeout(function() {
						self.handler(e);
					},150)
				}
			});
		};
		
		if (true) {
			module.exports = vueTap;
		} else if (typeof define == "function" && define.amd) {
			define([], function(){ return vueTap })
		} else if (window.Vue) {
			window.vueTap = vueTap;
			Vue.use(vueTap);
		}
		
	})();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var server1 = 'https://production.server.com';
	var server2 = 'https://dev.server.com';

	var useServer = null;
	if (false) {
		useServer = server1;
	} else if (true) {
		useServer = server2;
	}
	exports.default = useServer;

/***/ }
/******/ ]);