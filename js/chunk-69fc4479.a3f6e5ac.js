(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69fc4479"],{"2e90":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("filter-in"),r("m-table")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"minput"},[r("a-form",{attrs:{form:t.form,layout:"inline"}},[r("a-form-item",{attrs:{label:"搜索关键字"}},[r("a-input",{attrs:{placeholder:"input"},model:{value:t.form.searchWord,callback:function(e){t.$set(t.form,"searchWord",e)},expression:"form.searchWord"}})],1),r("a-form-item",{attrs:{label:"商品类目"}},[r("a-select",{staticStyle:{width:"100px"},attrs:{placeholder:"Select a option and change input text above"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(this.$store.state.category,(function(e){return r("a-select-option",{key:e._id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-item",{attrs:{"wrapper-col":{span:8,offset:12}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:t.handler}},[t._v(" 搜索 ")])],1)],1)],1)},i=[];function c(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function s(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done);i=!0)if(o.push(n.value),e&&o.length===e)break}catch(s){c=!0,a=s}finally{try{i||null==r["return"]||r["return"]()}finally{if(c)throw a}}return o}}r("fb6a"),r("b0c0"),r("a630");function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return c(t)||s(t,e)||d(t,e)||l()}r("d81d"),r("159b");var p=r("bb36"),h={getCategorylist:function(t){return p["a"].get("/category/all",{params:t})},getCategoryAdd:function(t){p["a"].get("/category/add",{params:t})},putCateGoryEdie:function(t){p["a"].put(" /category/edit",{params:t})},deleteCateGoryList:function(t){p["a"].delete("/category/".concat(t))}},y=r("4c79"),m={data:function(){return{form:{searchWord:void 0,category:void 0}}},methods:{handler:function(){var t=this;y["a"].getProductsList(this.form).then((function(e){var r=e.data.map((function(e){var r,n=e._id,a=e.id,o=e.title,i=e.desc,c=e.category,s=e.price,u=e.price_off,d=f(e.tags,1),l=d[0],p=e.inventory,h=e.status,y=1===h?"上架":"下架";return t.$store.state.category.forEach((function(t){return t.id===c&&(r=t.name),0})),{key:n,id:a,title:o,desc:i,category:r,price:s,priceOff:u,tags:l,inventory:p,status:y}}));t.$store.dispatch("authorityList",r)}))}},mounted:function(){var t=this;h.getCategorylist().then((function(e){t.$store.dispatch("category",e.data)}))}},v=m,b=(r("4b57"),r("2877")),g=Object(b["a"])(v,o,i,!1,null,null,null),S=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-button",{staticClass:"bt",on:{click:t.rthand}},[t._v(" 添加商品 ")]),r("a-table",{attrs:{columns:t.columns,"data-source":t.$store.state.authorityList},scopedSlots:t._u([{key:"operation",fn:function(e,n){return[t.dataSource.length?r("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(n.id)}}},[r("a-button",{attrs:{size:"small"}},[t._v("删除")])],1):t._e(),r("a-popconfirm",{attrs:{title:"Sure to edit?"},on:{confirm:t.edit}},[r("a-button",{attrs:{size:"small"}},[t._v("编辑")])],1)]}}])})],1)},A=[];function x(t){if(Array.isArray(t))return u(t)}function $(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function I(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(t){return x(t)||$(t)||d(t)||I()}r("a15b"),r("7db0"),r("4de4"),r("99af");var k=[{title:"id",dataIndex:"id",scopedSlots:{customRender:"id"}},{title:"标题",dataIndex:"title",width:"10%"},{title:"描述",dataIndex:"desc",width:"10%"},{title:"类目",dataIndex:"category"},{title:"预售价格",dataIndex:"price"},{title:"折扣价格",dataIndex:"priceOff"},{title:"标签",dataIndex:"tags",width:"8%"},{title:"限制购买数量",dataIndex:"inventory"},{title:"上架状态",dataIndex:"status",ellipsis:!0},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},width:"15%"}],L={data:function(){return{columns:k,count:this.$store.state.authorityList.length,dataSource:this.$store.state.authorityList}},created:function(){var t=this;y["a"].getProductsList().then((function(e){var r=e.data.map((function(e){var r,n=e._id,a=e.id,o=e.title,i=e.desc,c=e.category,s=e.price,u=e.price_off,d=e.tags,l=e.inventory,f=e.status,p=1===f?"上架":"下架",h=d.join("，");return t.$store.state.category.forEach((function(t){return t.id===c&&(r=t.name),0})),{key:n,id:a,title:o,desc:i,category:r,price:s,priceOff:u,tags:h,inventory:l,status:p}}));t.$store.dispatch("authorityList",r),t.dataSource=r}))},methods:{edit:function(){this.$router.push("add")},onCellChange:function(t,e,r){var n=_(this.dataSource),a=n.find((function(e){return e.key===t}));a&&(a[e]=r,this.dataSource=n)},onDelete:function(t){var e=this;y["a"].deleteProductsId(t).then((function(t){t.data.ok&&e.$message.success("删除成功")})),this.$store.state.authorityList=this.$store.state.authorityList.filter((function(e){return e.id!==t}))},rthand:function(){this.$router.push("add")},handleAdd:function(){var t=this.count,e=this.dataSource,r={key:t,name:"Edward King ".concat(t),age:32,address:"London, Park Lane no. ".concat(t)};this.dataSource=[].concat(_(e),[r]),this.count=t+1}}},j=L,C=(r("fe94"),Object(b["a"])(j,w,A,!1,null,null,null)),E=C.exports,O={components:{FilterIn:S,mTable:E}},P=O,W=Object(b["a"])(P,n,a,!1,null,null,null);e["default"]=W.exports},"4b57":function(t,e,r){"use strict";r("dd5f")},"4c79":function(t,e,r){"use strict";var n=r("bb36");e["a"]={getProductsList:function(t){return n["a"].get("/products/all",{params:t})},postProductsAdd:function(t){return n["a"].post("/products/add",t)},putProductsEdit:function(t){return n["a"].put("/products/edit",{params:t})},getProductsId:function(t){return n["a"].get("/products/".concat(t))},deleteProductsId:function(t){return n["a"].delete("/products/".concat(t))},uploadImages:function(t){return n["a"].post("/upload/images",t)}}},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,d,l,f,p,h=a(t),y="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,g=u(h),S=0;if(b&&(v=n(v,m>2?arguments[2]:void 0,2)),void 0==g||y==Array&&i(g))for(e=c(h.length),r=new y(e);e>S;S++)p=b?v(h[S],S):h[S],s(r,S,p);else for(l=g.call(h),f=l.next,r=new y;!(d=f.call(l)).done;S++)p=b?o(l,v,[d.value,S],!0):d.value,s(r,S,p);return r.length=S,r}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){throw a(t),i}}},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),i=r("a640"),c=[].join,s=a!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},ad8b:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dd5f:function(t,e,r){},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(f,d);var p=f.prototype=d.prototype;p.constructor=f;var h=p.toString,y="Symbol(test)"==String(d("test")),m=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(i(l,t))return"";var r=y?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),d=r("b622"),l=r("1dde"),f=l("slice"),p=d("species"),h=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,n,d,l=s(this),f=c(l.length),m=i(t,f),v=i(void 0===e?f:e,f);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(l,m,v);for(n=new(void 0===r?Array:r)(y(v-m,0)),d=0;m<v;m++,d++)m in l&&u(n,d,l[m]);return n.length=d,n}})},fe94:function(t,e,r){"use strict";r("ad8b")}}]);
//# sourceMappingURL=chunk-69fc4479.a3f6e5ac.js.map