(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e92e9338"],{2710:function(e,t,a){"use strict";var o=a("ccc6"),n=a.n(o);n.a},"36b5":function(e,t,a){},"63e2":function(e,t,a){"use strict";var o=a("36b5"),n=a.n(o);n.a},ccc6:function(e,t,a){},f593:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("div",{staticClass:"c-wrapper"},[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1)]),a("TheFooter")],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){e.show=t}}},[a("CSidebarBrand",{attrs:{imgFull:{width:118,height:46,alt:"Logo",src:"img/brand/coreui-base-white.svg"},imgMinimized:{width:118,height:46,alt:"Logo",src:"img/brand/coreui-signet-white.svg"},wrappedInLink:{href:"https://coreui.io/",target:"_blank"}}}),a("CRenderFunction",{attrs:{flat:"","content-to-render":e.nav}}),a("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){e.minimize=!e.minimize}}})],1)},i=[],r=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs",icon:"cil-puzzle"},{name:"Cards",to:"/base/cards",icon:"cil-puzzle"},{name:"Carousels",to:"/base/carousels",icon:"cil-puzzle"},{name:"Collapses",to:"/base/collapses",icon:"cil-puzzle"},{name:"Forms",to:"/base/forms",icon:"cil-puzzle"},{name:"Jumbotrons",to:"/base/jumbotrons",icon:"cil-puzzle"},{name:"List Groups",to:"/base/list-groups",icon:"cil-puzzle"},{name:"Navs",to:"/base/navs",icon:"cil-puzzle"},{name:"Navbars",to:"/base/navbars",icon:"cil-puzzle"},{name:"Paginations",to:"/base/paginations",icon:"cil-puzzle"},{name:"Popovers",to:"/base/popovers",icon:"cil-puzzle"},{name:"Progress Bars",to:"/base/progress-bars",icon:"cil-puzzle"},{name:"Switches",to:"/base/switches",icon:"cil-puzzle"},{name:"Tables",to:"/base/tables",icon:"cil-puzzle"},{name:"Tabs",to:"/base/tabs",icon:"cil-puzzle"},{name:"Tooltips",to:"/base/tooltips",icon:"cil-puzzle"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons",icon:"cil-cursor"},{name:"Button Dropdowns",to:"/buttons/dropdowns",icon:"cil-cursor"},{name:"Button Groups",to:"/buttons/button-groups",icon:"cil-cursor"},{name:"Brand Buttons",to:"/buttons/brand-buttons",icon:"cil-cursor"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",icon:"cil-star",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands",icon:"cil-star"},{name:"Flags",to:"/icons/flags",icon:"cil-star"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts",icon:"cil-bell"},{name:"Badges",to:"/notifications/badges",icon:"cil-bell"},{name:"Modals",to:"/notifications/modals",icon:"cil-bell"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login",icon:"cil-star"},{name:"Register",to:"/pages/register",icon:"cil-star"},{name:"Error 404",to:"/pages/404",icon:"cil-star"},{name:"Error 500",to:"/pages/500",icon:"cil-star"}]},{_name:"CSidebarNavItem",name:"Download CoreUI",href:"http://coreui.io/vue/",icon:{name:"cil-cloud-download",class:"text-white"},_class:"bg-success text-white",target:"_blank"},{_name:"CSidebarNavItem",name:"Try CoreUI PRO",href:"http://coreui.io/pro/vue/",icon:{name:"cil-layers",class:"text-white"},_class:"bg-danger text-white",target:"_blank"}]}],c={name:"TheSidebar",data:function(){return{minimize:!1,nav:r,show:"responsive"}},mounted:function(){var e=this;this.$root.$on("toggle-sidebar",(function(){var t=!0===e.show||"responsive"===e.show;e.show=!t&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var t="responsive"===e.show||!1===e.show;e.show=!!t||"responsive"}))}},l=c,m=a("2877"),d=Object(m["a"])(l,s,i,!1,null,null,null),u=d.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar-mobile",arg:"toggle-sidebar-mobile"}],staticClass:"ml-3 d-lg-none",attrs:{"in-header":""}}),a("CToggler",{directives:[{name:"c-emit-root-event",rawName:"v-c-emit-root-event:toggle-sidebar",arg:"toggle-sidebar"}],staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""}}),a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{src:"img/brand/coreui-base.svg",width:"97",height:"46",alt:"CoreUI Logo"}}),a("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/dashboard"}},[e._v(" Dashboard ")])],1),a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[e._v(" Users ")])],1),a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",[e._v(" Settings ")])],1)],1),a("CHeaderNav",{staticClass:"mr-4"},[a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-bell"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-list"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-envelope-open"}})],1)],1),a("TheHeaderDropdownAccnt")],1),a("CSubheader",{staticClass:"px-3"},[a("CBreadcrumbRouter",{staticClass:"border-0"})],1)],1)},p=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[a("CHeaderNavLink",[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])]},proxy:!0}])},[a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Account")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-bell"}}),e._v(" Updates "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"info"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-envelope-open"}}),e._v(" Messages "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"success"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-task"}}),e._v(" Tasks "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"danger"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-comment-square"}}),e._v(" Comments "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"warning"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Settings")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-user"}}),e._v(" Profile ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-settings"}}),e._v(" Settings ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-dollar"}}),e._v(" Payments "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"secondary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-file"}}),e._v(" Projects "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"primary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownDivider"),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-shield-alt"}}),e._v(" Lock Account ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Logout ")],1)],1)},v=[],g={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}}},h=g,_=(a("2710"),Object(m["a"])(h,b,v,!1,null,"4c9bcc7e",null)),w=_.exports,f={name:"TheHeader",components:{TheHeaderDropdownAccnt:w}},I=f,z=Object(m["a"])(I,C,p,!1,null,null,null),N=z.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",[a("div",[a("a",{attrs:{href:"https://coreui.io",target:"_blank"}},[e._v("CoreUI")]),a("span",{staticClass:"ml-1"},[e._v("© 2019 creativeLabs.")])]),a("div",{staticClass:"ml-auto"},[a("span",{staticClass:"mr-1"},[e._v("Powered by")]),a("a",{attrs:{href:"https://coreui.io/vue",target:"_blank"}},[e._v("CoreUI for Vue")])])])},D=[],x={name:"TheFooter"},H=x,T=Object(m["a"])(H,S,D,!1,null,null,null),k=T.exports,B={name:"TheContainer",components:{TheSidebar:u,TheHeader:N,TheFooter:k}},L=B,y=(a("63e2"),Object(m["a"])(L,o,n,!1,null,"a1338ab2",null));t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-e92e9338.ec8e19e8.js.map