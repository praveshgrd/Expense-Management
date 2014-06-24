/*
 AngularJS v1.0.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(A,e,w){'use strict';e.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(x,y){function k(a,f){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(f?null:/%20/g,"+")}function t(a,f){this.template=a+="#";this.defaults=f||{};var b=this.urlParams={};l(a.split(/\W/),function(d){d&&a.match(RegExp("[^\\\\]:"+d+"\\W"))&&(b[d]=!0)});this.template=a.replace(/\\:/g,":")}function u(a,f,b){function d(b,c){var a=
{},c=i({},f,c);l(c,function(o,c){var d;o.charAt&&o.charAt(0)=="@"?(d=o.substr(1),d=y(d)(b)):d=o;a[c]=d});return a}function h(a){v(a||{},this)}var e=new t(a),b=i({},z,b);l(b,function(g,c){var k=g.method=="POST"||g.method=="PUT"||g.method=="PATCH";h[c]=function(a,b,c,f){var s={},j,m=p,q=null;switch(arguments.length){case 4:q=f,m=c;case 3:case 2:if(r(b)){if(r(a)){m=a;q=b;break}m=b;q=c}else{s=a;j=b;m=c;break}case 1:r(a)?m=a:k?j=a:s=a;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
    arguments.length+" arguments.";}var n=this instanceof h?this:g.isArray?[]:new h(j);x({method:g.method,url:e.url(i({},d(j,g.params||{}),s)),data:j}).then(function(a){var b=a.data;if(b)g.isArray?(n.length=0,l(b,function(a){n.push(new h(a))})):v(b,n);(m||p)(n,a.headers)},q);return n};h.bind=function(c){return u(a,i({},f,c),b)};h.prototype["$"+c]=function(a,b,f){var g=d(this),e=p,j;switch(arguments.length){case 3:g=a;e=b;j=f;break;case 2:case 1:r(a)?(e=a,j=b):(g=a,e=b||p);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
    arguments.length+" arguments.";}h[c].call(this,g,k?this:w,e,j)}});return h}var z={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},p=e.noop,l=e.forEach,i=e.extend,v=e.copy,r=e.isFunction;t.prototype={url:function(a){var f=this,b=this.template,d,h,a=a||{};l(this.urlParams,function(g,c){d=a.hasOwnProperty(c)?a[c]:f.defaults[c];e.isDefined(d)&&d!==null?(h=k(d,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),
    b=b.replace(RegExp(":"+c+"(\\W)","g"),h+"$1")):b=b.replace(RegExp("/?:"+c+"(\\W)","g"),"$1")});var b=b.replace(/\/?#$/,""),i=[];l(a,function(a,b){f.urlParams[b]||i.push(k(b)+"="+k(a))});i.sort();b=b.replace(/\/*$/,"");return b+(i.length?"?"+i.join("&"):"")}};return u}])})(window,window.angular);