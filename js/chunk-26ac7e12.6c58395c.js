(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ac7e12"],{"61dc":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"生成私钥",visible:t.visible,width:"600px",center:"","close-on-click-modal":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.ruleForm,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"私钥金额",prop:"totalPriceB"}},[e("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入金额"},model:{value:t.form.totalPriceB,callback:function(e){t.$set(t.form,"totalPriceB",e)},expression:"form.totalPriceB"}})],1),e("el-form-item",{attrs:{label:"截止时间",prop:"expireTime"}},[e("el-date-picker",{staticStyle:{width:"400px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择截止时间"},model:{value:t.form.expireTime,callback:function(e){t.$set(t.form,"expireTime",e)},expression:"form.expireTime"}})],1),e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleReset}},[t._v("重置")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确定")])],1)],1),e("PrivateKeyInfo",{ref:"privateKeyInfoForm"})],1)},o=[],i=n("98c9"),a=n("d006"),c={name:"AddPrivateForm",components:{PrivateKeyInfo:a["a"]},data:function(){return{visible:!1,form:{merchantKeyId:"",totalPriceB:"",expireTime:"",remark:""},ruleForm:{totalPriceB:[{required:!0,message:"请输入",trigger:"blur"}],expireTime:[{required:!0,message:"请选择",trigger:"change"}],remark:[{required:!0,message:"请输入",trigger:"blur"}]}}},watch:{visible:function(t){var e=this;t&&this.$nextTick((function(){e.handleReset()}))}},methods:{handleSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return!1;Object(i["b"])(t.form).then((function(e){200===e.code?(t.$message.success("添加成功"),t.visible=!1,t.$emit("submit"),t.$refs.privateKeyInfoForm.visible=!0,t.$refs.privateKeyInfoForm.privateInfo.privateKey=e.msg):t.$message.error(e.msg||"添加失败")}))}))},handleReset:function(){this.$refs.ruleForm.resetFields()}}},l=c,u=n("2877"),s=Object(u["a"])(l,r,o,!1,null,null,null);e["a"]=s.exports},"98c9":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return f}));var r=n("4020");function o(t){return Object(r["a"])({url:"/api/key/keyList",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/api/key/addKey",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/api/key/delKey?id="+t,method:"put"})}function c(t){return Object(r["a"])({url:"/api/key/addPrivateKey",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/api/key/getPrivateKeyList",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/api/key/delPrivateKey?id="+t,method:"put"})}function s(t){return Object(r["a"])({url:"/api/key/getPrivateKeyPrice",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/api/key/renewPrivateKey",method:"post",data:t})}},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return K}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),c=n(817),l=n.n(c);function u(t){try{return document.execCommand(t)}catch(e){return!1}}var s=function(t){var e=l()(t);return u("cut"),e},f=s;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t,e){var n=d(t);e.container.appendChild(n);var r=l()(n);return u("copy"),n.remove(),r},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=p(t.value,e):(n=l()(t),u("copy")),n},y=m;function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==h(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?y(i,{container:r}):o?"cut"===n?f(o):y(o,{container:r}):void 0},b=v;function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&k(t.prototype,e),n&&k(t,n),t}function S(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function A(t){var e=_();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?I(t):e}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function F(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var $=function(t){S(n,t);var e=A(n);function n(t,r){var o;return x(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return w(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===g(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=b({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return F("action",t)}},{key:"defaultTarget",value:function(t){var e=F("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return F("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return y(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),K=$},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return l(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function l(t,e,n){return o(document.body,t,e,n)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},d006:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"生成私钥信息",visible:t.visible,width:"800px",center:"","close-on-click-modal":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"ruleForm",attrs:{model:t.privateInfo,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"私钥key",prop:"privateKey"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入私钥key",readonly:""},model:{value:t.privateInfo.privateKey,callback:function(e){t.$set(t.privateInfo,"privateKey",e)},expression:"privateInfo.privateKey"}},[e("el-button",{staticClass:"copy-privateKey",attrs:{slot:"append","data-clipboard-action":"copy","data-clipboard-text":t.privateInfo.privateKey},on:{click:function(e){return t.copyLink("privateKey")}},slot:"append"},[t._v("复制")])],1)],1),e("el-form-item",{attrs:{label:"API地址",prop:"url"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入API地址",readonly:""},model:{value:t.privateInfo.url,callback:function(e){t.$set(t.privateInfo,"url",e)},expression:"privateInfo.url"}},[e("el-button",{staticClass:"copy-url",attrs:{slot:"append","data-clipboard-action":"copy","data-clipboard-text":t.privateInfo.url},on:{click:function(e){return t.copyLink("url")}},slot:"append"},[t._v("复制")])],1)],1)],1),e("el-alert",{attrs:{title:"使用时更换openai的API为上面API地址",type:"warning",closable:!1,"show-icon":""}})],1)},o=[],i=n("b311"),a=n.n(i),c={name:"PrivateKeyInfo",data:function(){return{visible:!1,privateInfo:{url:"https://api.aizw.io",privateKey:""}}},methods:{copyLink:function(t){var e=this,n=new a.a(".copy-"+t);n.on("success",(function(){e.$message.success("复制成功"),n.destroy()})),n.on("error",(function(){e.$message.error("复制失败"),n.destroy()}))}}},l=c,u=n("2877"),s=Object(u["a"])(l,r,o,!1,null,null,null);e["a"]=s.exports},d888:function(t,e,n){"use strict";n("ffe6")},f37e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(e){return t.openAddKey()}}},[t._v("\n      添加4.0官方APikey\n    ")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,maxHeight:t.maxHeight+"px"}},[e("el-table-column",{attrs:{prop:"content",width:"450",label:"4.0官方APIkey",align:"center"}}),e("el-table-column",{attrs:{prop:"remark",width:"200",label:"备注",align:"center"}}),e("el-table-column",{attrs:{prop:"createTime",width:"160",label:"添加时间",align:"center"}}),e("el-table-column",{attrs:{prop:"model",label:"类型",align:"center"}}),e("el-table-column",{attrs:{prop:"totalPrice",label:"总额度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        $"+t._s(parseFloat(e.row.totalPrice/100).toFixed(2))+"\n      ")]}}])}),e("el-table-column",{attrs:{prop:"usePrice",label:"已用额度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        $"+t._s(parseFloat(e.row.usePrice/100).toFixed(2))+"\n      ")]}}])}),e("el-table-column",{attrs:{prop:"residuePrice",label:"剩余额度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        $"+t._s(parseFloat(e.row.residuePrice/100).toFixed(2))+"\n      ")]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleCreate(n.row)}}},[t._v("生成私钥")]),e("el-divider",{attrs:{direction:"vertical"}}),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDel(n.row)}}},[t._v("删除")]),e("el-divider",{attrs:{direction:"vertical"}}),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleView(n.row)}}},[t._v("详情")])]}}])})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticStyle:{"margin-top":"10px","text-align":"right"}},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, sizes",total:t.total,"current-page":t.pageIndex},on:{"current-change":t.pageChange,"size-change":t.sizeChange}})],1),e("AddKeyForm",{ref:"addKeyForm",on:{submit:function(e){return t.getList()}}}),e("AddPrivateForm",{ref:"addPrivateForm"})],1)},o=[],i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"添加官方APIkey",visible:t.visible,width:"800px",center:"","close-on-click-modal":!1},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.ruleForm,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"官方APIkey",prop:"content"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入官方APIkey"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleReset}},[t._v("重置")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleAddKey}},[t._v("确定")])],1)],1)},a=[],c=n("98c9"),l=n("d006"),u={name:"AddKeyForm",components:{PrivateKeyInfo:l["a"]},data:function(){return{visible:!1,form:{content:"",remark:""},ruleForm:{content:[{required:!0,message:"请输入",trigger:"blur"}],remark:[{required:!0,message:"请输入",trigger:"blur"}]}}},watch:{visible:function(t){var e=this;t&&this.$nextTick((function(){e.handleReset()}))}},methods:{handleAddKey:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return!1;Object(c["a"])(t.form).then((function(e){200===e.code?(t.$message.success("添加成功"),t.visible=!1,t.$emit("submit")):t.$message.error(e.msg||"添加失败")}))}))},handleReset:function(){this.$refs.ruleForm.resetFields()}}},s=u,f=n("2877"),d=Object(f["a"])(s,i,a,!1,null,null,null),p=d.exports,m=n("61dc"),y={name:"RentApi",components:{AddKeyForm:p,AddPrivateForm:m["a"]},data:function(){return{pageIndex:1,pageSize:10,total:0,tableData:[],loading:!1,maxHeight:500}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,e={pageIndex:this.pageIndex,pageSize:this.pageSize};this.loading=!0,Object(c["g"])(e).then((function(e){t.tableData=e.data.records,t.total=e.data.total,t.calcTableHeight(),t.loading=!1}))},calcTableHeight:function(){var t=this.$el,e=document.body.clientHeight,n=t.getBoundingClientRect(),r=n.top,o=e-r-120;this.maxHeight=o,console.log("maxHeight",this.maxHeight)},openAddKey:function(){this.$refs.addKeyForm.visible=!0},handleCreate:function(t){this.$refs.addPrivateForm.visible=!0,this.$refs.addPrivateForm.form.merchantKeyId=t.id},handleView:function(t){this.$emit("change",t.id)},handleDel:function(t){var e=this;this.$confirm("此操作将永久删除该key, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["c"])(t.id).then((function(t){200===t.code?(e.getList(),e.$message.success("删除成功")):e.$message.error(t.msg||"删除失败")}))})).catch((function(){e.$message.info("已取消删除")}))},pageChange:function(t){this.pageIndex=t,this.getList()},sizeChange:function(t){this.pageIndex=1,this.pageSize=t,this.getList()}}},h=y,v=(n("d888"),Object(f["a"])(h,r,o,!1,null,null,null));e["default"]=v.exports},ffe6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-26ac7e12.6c58395c.js.map