(function(t){function e(e){for(var s,r,o=e[0],n=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var n=a[o];0!==l[n]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},l={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"22de":function(t,e,a){"use strict";a("8319")},"2b84":function(t,e,a){},"38c8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=a("2877"),o={},n=Object(r["a"])(o,l,i,!1,null,null,null),c=n.exports,m=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",{staticStyle:{height:"100vh",border:"1px solid #eee"}},[a("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[a("el-menu",{attrs:{router:"","unique-opened":"","default-active":t.$route.path}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),t._v("内容管理")]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("物品")]),a("el-menu-item",{attrs:{index:"/items/create"}},[t._v("新建物品")]),a("el-menu-item",{attrs:{index:"/items/list"}},[t._v("物品列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("英雄")]),a("el-menu-item",{attrs:{index:"/heroes/create"}},[t._v("新建英雄")]),a("el-menu-item",{attrs:{index:"/heroes/list"}},[t._v("英雄列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("文章")]),a("el-menu-item",{attrs:{index:"/articles/create"}},[t._v("新建文章")]),a("el-menu-item",{attrs:{index:"/articles/list"}},[t._v("文章列表")])],2)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),t._v("运营管理")]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("广告")]),a("el-menu-item",{attrs:{index:"/ads/create"}},[t._v("新建广告位")]),a("el-menu-item",{attrs:{index:"/ads/list"}},[t._v("广告位列表")])],2)],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),t._v("系统设置")]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("管理员")]),a("el-menu-item",{attrs:{index:"/admin_users/create"}},[t._v("新建管理员")]),a("el-menu-item",{attrs:{index:"/admin_users/list"}},[t._v("管理员列表")])],2),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("分类")]),a("el-menu-item",{attrs:{index:"/categroies/create"}},[t._v("新建分类")]),a("el-menu-item",{attrs:{index:"/categories/list"}},[t._v("分类列表")])],2)],2)],1)],1),a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("查看")]),a("el-dropdown-item",[t._v("新增")]),a("el-dropdown-item",[t._v("删除")])],1)],1),a("span",[t._v("王小虎")])],1),a("el-main",[a("router-view",{key:t.$route.path})],1)],1)],1)],1)},d=[],p={data(){const t={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(t)}}},h=p,f=(a("22de"),Object(r["a"])(h,u,d,!1,null,null,null)),b=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[a("el-form",{nativeOn:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"parmary","native-type":"submint"}},[t._v("登录")])],1)],1)],1)],1)},y=[],_={data(){return{model:{username:"",password:""}}},methods:{async login(){const t=await this.$http.post("login",this.model);localStorage.token=t.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"})}}},g=_,w=(a("d6db"),Object(r["a"])(g,v,y,!1,null,null,null)),x=w.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"分类"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"上级分类"}},[a("el-select",{model:{value:t.model.parent,callback:function(e){t.$set(t.model,"parent",e)},expression:"model.parent"}},t._l(t.parentOption,(function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"名称","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},k=[],S={components:{},props:{id:{}},data(){return{model:{},parentOption:[]}},watch:{},computed:{},methods:{async save(){let t;this.id?t=await this.$http.put("rest/categories/"+this.id,this.model):(t=await this.$http.post("rest/categories",this.model),console.log(this.model)),console.log(t.data.name),this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/categories/"+this.id);this.model=t.data},async fetchparentOption(){const t=await this.$http.get("rest/categories");this.parentOption=t.data}},created(){this.fetchparentOption(),this.id&&this.fetch()},mounted(){}},O=S,C=Object(r["a"])(O,$,k,!1,null,"be7a7784",null),j=C.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("分类列表")]),a("el-table",{attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),a("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/categories/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},T=[],E={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/categories");this.items=t.data},async remove(t){this.$confirm(`是否要删除该分类 "${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/categories/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},D=E,B=Object(r["a"])(D,z,T,!1,null,null,null),H=B.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("物品列表")]),a("el-table",{attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),a("el-table-column",{attrs:{prop:"icon",label:"物品图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.icon}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/items/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},I=[],A={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/items");this.items=t.data},async remove(t){this.$confirm(`是否要删除该分类 "${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/items/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},U=A,L=Object(r["a"])(U,P,I,!1,null,null,null),R=L.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"物品"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"名称","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"图标","label-width":"120px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.myHeaders,action:t.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":t.afteruolode}},[t.model.icon?a("img",{staticClass:"avatar",attrs:{src:t.model.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},q=[],V=localStorage.getItem("token"),J={components:{},props:{id:{}},data(){return{model:{},myHeaders:{Authorization:V}}},watch:{},computed:{},methods:{async save(){let t;t=this.id?await this.$http.put("rest/items/"+this.id,this.model):await this.$http.post("rest/items",this.model),console.log(t.data.name),this.$router.push("/items/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/items/"+this.id);this.model=t.data},afteruolode(t){this.$set(this.model,"icon",t.url)}},created(){this.id&&this.fetch()},mounted(){}},N=J,F=(a("b72d"),Object(r["a"])(N,M,q,!1,null,null,null)),G=F.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(e){t.hero=e},expression:"hero"}},t._l(t.heroes,(function(t){return a("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.save}},[t._v(" 搜索")]),a("h1",[t._v("英雄列表")]),a("el-table",{attrs:{data:t.model}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),a("el-table-column",{attrs:{prop:"title",label:"称号"}}),a("el-table-column",{attrs:{prop:"avatar",label:"英雄头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.avatar}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/heroes/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},Q=[],W={data(){return{model:[],hero:[],heroes:[]}},methods:{async fetch(){const t=await this.$http.get("rest/heroes");this.model=t.data},async fetchHeroes(){const t=await this.$http.get("rest/heroes");this.heroes=t.data},async save(){console.log(this.hero),await this.$router.push("/heroes/edit/"+this.hero)},async remove(t){this.$confirm(`是否要删除该分类 "${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/heroes/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch(),this.fetchHeroes()}},X=W,Y=Object(r["a"])(X,K,Q,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"英雄"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-tabs",{attrs:{type:"border-card",value:"basic"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[a("el-form-item",{attrs:{label:"名称","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"称号","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),a("el-form-item",{attrs:{label:"头像","label-width":"120px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.myHeaders,action:t.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":t.afteruolode}},[t.model.avatar?a("img",{staticClass:"avatar",attrs:{src:t.model.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"背景图","label-width":"120px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.myHeaders,action:t.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":t.afteruolode1}},[t.model.banner?a("img",{staticClass:"avatar",attrs:{src:t.model.banner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"职业"}},[a("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"难度","label-width":"120px"}},[a("el-rate",{staticStyle:{width:"240px","margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.difficult,callback:function(e){t.$set(t.model.scores,"difficult",e)},expression:"model.scores.difficult"}})],1),a("el-form-item",{attrs:{label:"技能","label-width":"120px"}},[a("el-rate",{staticStyle:{width:"240px","margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.skills,callback:function(e){t.$set(t.model.scores,"skills",e)},expression:"model.scores.skills"}})],1),a("el-form-item",{attrs:{label:"攻击","label-width":"120px"}},[a("el-rate",{staticStyle:{width:"240px","margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.attack,callback:function(e){t.$set(t.model.scores,"attack",e)},expression:"model.scores.attack"}})],1),a("el-form-item",{attrs:{label:"生存","label-width":"120px"}},[a("el-rate",{staticStyle:{width:"240px","margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.survive,callback:function(e){t.$set(t.model.scores,"survive",e)},expression:"model.scores.survive"}})],1),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:t.model.items1,callback:function(e){t.$set(t.model,"items1",e)},expression:"model.items1"}},t._l(t.items,(function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:t.model.items2,callback:function(e){t.$set(t.model,"items2",e)},expression:"model.items2"}},t._l(t.items,(function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.model.usegeTips,callback:function(e){t.$set(t.model,"usegeTips",e)},expression:"model.usegeTips"}})],1),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.model.battleTips,callback:function(e){t.$set(t.model,"battleTips",e)},expression:"model.battleTips"}})],1),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.model.teamTips,callback:function(e){t.$set(t.model,"teamTips",e)},expression:"model.teamTips"}})],1)],1),a("el-tab-pane",{attrs:{label:"技能信息",name:"skills"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.skills.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加技能")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.skills,(function(e,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.myHeaders,action:t.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(a){return t.$set(e,"icon",a.url)}}},[e.icon?a("img",{staticClass:"avatar",attrs:{src:e.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1),a("el-form-item",{attrs:{label:"提示"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.tips,callback:function(a){t.$set(e,"tips",a)},expression:"item.tips"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.skills.splice(s,1)}}},[t._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.partners.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners,(function(e,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:e.hero,callback:function(a){t.$set(e,"hero",a)},expression:"item.hero"}},t._l(t.heroes,(function(t){return a("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners.splice(s,1)}}},[t._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"被克制英雄",name:"partners1"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.partners1.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners1,(function(e,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:e.hero,callback:function(a){t.$set(e,"hero",a)},expression:"item.hero"}},t._l(t.heroes,(function(t){return a("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners1.splice(s,1)}}},[t._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"克制英雄",name:"partners2"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.partners2.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners2,(function(e,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:e.hero,callback:function(a){t.$set(e,"hero",a)},expression:"item.hero"}},t._l(t.heroes,(function(t){return a("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners2.splice(s,1)}}},[t._v("删除")])],1)],1)})),1)],1)],1),a("el-form-item",[a("el-button",{staticStyle:{"margin-left":"40%"},attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},et=[],at=localStorage.getItem("token"),st={components:{},props:{id:{}},data(){return{model:{name:"",avatar:"",scores:{difficult:0},skills:[],partners:[],heroes:[]},categories:{},items:{},myHeaders:{Authorization:at}}},watch:{},computed:{},methods:{async save(){let t;t=this.id?await this.$http.put("rest/heroes/"+this.id,this.model):await this.$http.post("rest/heroes",this.model),console.log(t.data.name),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/heroes/"+this.id);this.model=Object.assign({},this.model,t.data),console.log(this.myHeaders)},async fetchcategories(){const t=await this.$http.get("rest/categories");this.categories=t.data},async fetchHeroes(){const t=await this.$http.get("rest/heroes");this.heroes=t.data},async fetchitems(){const t=await this.$http.get("rest/items");this.items=t.data},afteruolode(t){this.$set(this.model,"avatar",t.url)},afteruolode1(t){this.$set(this.model,"banner",t.url)}},created(){this.fetchcategories(),this.fetchitems(),this.id&&this.fetch(),this.fetchHeroes()},mounted(){}},lt=st,it=(a("9de8"),Object(r["a"])(lt,tt,et,!1,null,null,null)),rt=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("文章列表")]),a("el-table",{attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"title",label:"文章标题"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/articles/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},nt=[],ct={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/articles");this.items=t.data},async remove(t){this.$confirm(`是否要删除该文章 "${t.title}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/articles/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},mt=ct,ut=Object(r["a"])(mt,ot,nt,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"文章"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"所属分类"}},[a("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return a("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"标题","label-width":"120px"}},[a("el-input",{staticStyle:{width:"500px"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),a("el-form-item",{attrs:{label:"详情","label-width":"120px"}},[a("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.model.body,callback:function(e){t.$set(t.model,"body",e)},expression:"model.body"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},ht=[],ft=a("5873"),bt={components:{VueEditor:ft["a"]},props:{id:{}},data(){return{model:{},categories:[]}},watch:{},computed:{},methods:{async handleImageAdded(t,e,a,s){const l=new FormData;l.append("file",t);const i=await this.$http.post("upload",l);e.insertEmbed(a,"image",i.data.url),s()},async save(){let t;t=this.id?await this.$http.put("rest/articles/"+this.id,this.model):await this.$http.post("rest/articles",this.model),console.log(t.data.name),this.$router.push("/articles/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/articles/"+this.id);this.model=t.data},async fetchCategories(){const t=await this.$http.get("rest/categories");this.categories=t.data}},created(){this.fetchCategories(),this.id&&this.fetch()},mounted(){}},vt=bt,yt=Object(r["a"])(vt,pt,ht,!1,null,"2347296f",null),_t=yt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("分类列表")]),a("el-table",{attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/ads/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},wt=[],xt={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/ads");this.items=t.data},async remove(t){this.$confirm(`是否要删除 "${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/ads/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},$t=xt,kt=Object(r["a"])($t,gt,wt,!1,null,null,null),St=kt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"广告位"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"名称","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"广告"}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.items.push({})}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加广告")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.items,(function(e,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"跳转链接"}},[a("el-input",{model:{value:e.url,callback:function(a){t.$set(e,"url",a)},expression:"item.url"}})],1),a("el-form-item",{staticStyle:{"margin-top":"2rem"},attrs:{label:"图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.myHeaders,action:t.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(a){return t.$set(e,"image",a.url)}}},[e.image?a("img",{staticClass:"avatar",attrs:{src:e.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.items.splice(s,1)}}},[t._v("删除")])],1)],1)})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},Ct=[],jt=localStorage.getItem("token"),zt={components:{},props:{id:{}},data(){return{model:{items:[]},myHeaders:{Authorization:jt}}},watch:{},computed:{},methods:{async save(){let t;t=this.id?await this.$http.put("rest/ads/"+this.id,this.model):await this.$http.post("rest/ads",this.model),console.log(t.data.name),this.$router.push("/ads/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/ads/"+this.id);this.model=Object.assign({},this.mode1,t.data)}},created(){this.id&&this.fetch()},mounted(){}},Tt=zt,Et=Object(r["a"])(Tt,Ot,Ct,!1,null,"812367cc",null),Dt=Et.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("分类列表")]),a("el-table",{attrs:{data:t.items}},[a("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),a("el-table-column",{attrs:{prop:"username",label:"管理名称"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/admin_users/edit/"+e.row._id)}}},[t._v("编辑")])]}}])})],1)],1)},Ht=[],Pt={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/admin_users");this.items=t.data},async remove(t){this.$confirm(`是否要删除该分类 "${t.name}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/admin_users/"+t._id),this.$message({type:"success",message:"删除成功!"}),this.fetch()})}},created(){this.fetch()}},It=Pt,At=Object(r["a"])(It,Bt,Ht,!1,null,null,null),Ut=At.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v(t._s(t.id?"编辑":"新增")+"管理员"+t._s(t.id))]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"名称","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}})],1),a("el-form-item",{attrs:{label:"密码","label-width":"120px"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{type:"password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},Rt=[],Mt={components:{},props:{id:{}},data(){return{model:{},parentOption:[]}},watch:{},computed:{},methods:{async save(){let t;t=this.id?await this.$http.put("rest/admin_users/"+this.id,this.model):await this.$http.post("rest/admin_users",this.model),console.log(t.data.name),this.$router.push("/admin_users/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/admin_users/"+this.id);this.model=t.data}},created(){this.id&&this.fetch()},mounted(){}},qt=Mt,Vt=Object(r["a"])(qt,Lt,Rt,!1,null,"e5db4d60",null),Jt=Vt.exports;s["default"].use(m["a"]);const Nt=[{path:"/login",name:"login",component:x,meta:{isPublic:!0}},{path:"/",name:"main",component:b,children:[{path:"categroies/create",component:j},{path:"/categories/edit/:id",component:j,props:!0},{path:"categories/list",component:H},{path:"items/list",component:R},{path:"items/create",component:G},{path:"items/edit/:id",component:G,props:!0},{path:"heroes/list",component:Z},{path:"heroes/create",component:rt},{path:"heroes/edit/:id",component:rt,props:!0},{path:"articles/list",component:dt},{path:"articles/create",component:_t},{path:"articles/edit/:id",component:_t,props:!0},{path:"ads/list",component:St},{path:"ads/create",component:Dt},{path:"ads/edit/:id",component:Dt,props:!0},{path:"admin_users/list",component:Ut},{path:"admin_users/create",component:Jt},{path:"admin_users/edit/:id",component:Jt,props:!0}]}],Ft=new m["a"]({routes:Nt});Ft.beforeEach((t,e,a)=>{if(!t.meta.isPublic&&!localStorage.token)return console.log("neet login"),a("/login");a()});var Gt=Ft,Kt=a("5c96"),Qt=a.n(Kt);a("0fae");s["default"].use(Qt.a);a("38c8");var Wt=a("bc3a"),Xt=a.n(Wt);const Yt=Xt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Yt.interceptors.request.use((function(t){return localStorage.token&&(t.headers.Authorization="Bearer "+localStorage.token),t}),(function(t){return Promise.reject(t)})),Yt.interceptors.response.use(t=>t,t=>(t.response.data.message&&(s["default"].prototype.$message({type:"error",message:t.response.data.message}),401===t.response.status&&Gt.push("/login"),401===t.request.status&&Gt.push("/login")),Promise.reject(t)));var Zt=Yt;s["default"].config.productionTip=!1,s["default"].prototype.$http=Zt,new s["default"]({router:Gt,render:t=>t(c)}).$mount("#app")},8319:function(t,e,a){},"9de8":function(t,e,a){"use strict";a("d8ad")},b72d:function(t,e,a){"use strict";a("2b84")},d6db:function(t,e,a){"use strict";a("e67a")},d8ad:function(t,e,a){},e67a:function(t,e,a){}});
//# sourceMappingURL=app.dbce42cb.js.map