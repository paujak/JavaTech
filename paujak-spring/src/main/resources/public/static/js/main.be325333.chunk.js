(this["webpackJsonppaujak-react"]=this["webpackJsonppaujak-react"]||[]).push([[0],{38:function(e,t,a){e.exports=a(69)},43:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(33),r=a.n(l),s=(a(43),a(44),a(14)),i=a.n(s),o=a(18),m=a(8),u=a(9),d=a(11),p=a(10),v=(a(46),function(e){var t=e.id,a=e.title,n=e.imageSrc,l=e.tipas;return c.a.createElement("div",{className:"col-3 my-2"},c.a.createElement("div",{className:"card text-center"},c.a.createElement("img",{src:n,className:"card-img-top img-fluid",alt:a}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t),c.a.createElement("p",{className:"card-text"},l," "),c.a.createElement("button",{className:"btn btn-primary",onClick:e.onClick.bind(void 0,t)},"Daugiau"))))}),h=function(e){return e.list.map((function(t,a){return c.a.createElement(v,{key:a,id:t.pavadinimas,imageUrl:t.imageSrc,title:t.pavadinimas,tipas:t.tipas,aprasymas:t.aprasymas,veliava:t.arKeltiVeliava,onClick:e.details})}))},E=a(7),b=a.n(E),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).details=function(e){n.props.history.push("/sventes/".concat(e))},n.state={sventes:[]},n.svente={},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="My photo e-shop | Products",function(){var t=Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat("/paujak-spring","/api/sventes/"));case 2:a=t.sent,e.setState({sventes:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){return this.state.sventes.length>0?c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"row my-5"},c.a.createElement(h,{list:this.state.sventes,details:this.details}))):c.a.createElement("div",{className:"d-flex justify-content-center my-5"},c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(c.a.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))},N=a(1),y=a(12),C=a(36),k=function(e){var t=Object(n.useState)(!0),a=Object(C.a)(t,2),l=a[0],r=a[1],s=function(){return r(!l)};return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement(y.b,{className:"navbar-brand",to:"/",onClick:l?null:s},"\u0160ven\u010di\u0173 registras"),c.a.createElement("div",{className:"".concat(l?"collapse":""," navbar-collapse"),id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(y.b,{className:"nav-link",to:"/",onClick:l?null:s},"Prad\u017eia")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(y.b,{className:"nav-link",to:"/sventes",onClick:l?null:s},"Visos \u0161vent\u0117s")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(y.b,{className:"nav-link",to:"/admin",onClick:l?null:s},"\u0160ven\u010di\u0173 administravimas")))),c.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":!l,"aria-label":"Toggle navigation",onClick:s},c.a.createElement("span",{className:"navbar-toggler-icon"}))),c.a.createElement("div",null,e.children))},j=a(37);var x=function(e){var t=this;return c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"row mt-5"},c.a.createElement("table",{className:"table table-sm col-10 mx-auto"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"ID"),c.a.createElement("th",{scope:"col"},"Title"),c.a.createElement("th",{scope:"col"},"Price"),c.a.createElement("th",{scope:"col"},"Quantity"),c.a.createElement("th",{scope:"col"})),e.products.map((function(a){return c.a.createElement("tr",{key:a.id},c.a.createElement("td",{className:"align-middle"},a.id),c.a.createElement("td",{className:"align-middle"},a.title),c.a.createElement("td",{className:"align-middle"},a.price),c.a.createElement("td",{className:"align-middle"},a.quantity),c.a.createElement("td",{className:"align-middle text-right"},c.a.createElement("button",{className:"btn btn-primary btn-sm py-1 mx-1",onClick:e.edit.bind(t,a.id)},"Edit"),c.a.createElement("button",{className:"btn btn-danger btn-sm py-1 mx-1 ",onClick:e.delete.bind(t,a.id)},"Delete")))}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto"},c.a.createElement("button",{className:"btn btn-primary",onClick:e.add},"Add new product"))))},O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).delete=function(t){b.a.delete("".concat("/paujak-spring","/api/sventes/").concat(t)).then((function(a){return e.setState({products:Object(j.a)(e.state.products.filter((function(e){return e.id!==t})))})}))},e.edit=function(t){e.props.history.push("/admin/".concat(t))},e.add=function(){e.props.history.push("/admin/new")},e.state={products:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="My photo e-shop | Administration Panel",function(){var t=Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat("/paujak-spring","/api/products/"));case 2:a=t.sent,e.setState({products:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){return this.state.products.length>0?c.a.createElement("div",null,c.a.createElement("div",{className:"h2 col-10 mx-auto mt-2"},"Administration Panel"),c.a.createElement(x,{products:this.state.products,delete:this.delete,edit:this.edit,add:this.add})):c.a.createElement("div",null,c.a.createElement("div",{className:"h2 col-10 mx-auto mt-2"},"Administration Panel"),c.a.createElement("div",{className:"d-flex justify-content-center my-5"},c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),a}(n.Component),S=a(35),w=a(16),I=function(e){var t=e.onChange,a=e.onSubmit,n=e.item,l=e.onCancel;return c.a.createElement("form",{onSubmit:a,className:"my-5 col-10 mx-auto"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"title"},"Product title"),c.a.createElement("input",{type:"text",name:"title",value:n.title,onChange:t,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"imageUrl"},"Image URL"),c.a.createElement("input",{type:"url",value:n.imageUrl,name:"imageUrl",onChange:t,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("input",{type:"text",name:"description",value:n.description,onChange:t,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"price"},"Price"),c.a.createElement("input",{type:"number",name:"price",step:"0.01",value:n.price,onChange:t,className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"quantity"},"Quantity"),c.a.createElement("input",{type:"number",name:"quantity",value:n.quantity,onChange:t,className:"form-control"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary mx-2",onClick:a},"Save"),c.a.createElement("button",{type:"cancel",className:"btn btn-secondary mx-2",onClick:l},"Cancel"))},P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this)).urlId="",n.state={id:"",title:"",imageUrl:"",description:"",price:"",quantity:""},n.handleChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.handleSave=function(e){e.preventDefault(),b.a.post("".concat("/paujak-spring","/api/products/post"),n.state).then((function(){n.props.history.push("/admin")}))},n.handleUpdate=function(e){e.preventDefault(),b.a.put("".concat("/paujak-spring","/api/products/").concat(n.state.id),n.state).then((function(){n.props.history.push("/admin")}))},n.handleCancel=function(e){e.preventDefault(),n.props.history.push("/admin/")},n.urlId=e.match.params.id,"new"===n.urlId?document.title="My photo e-shop | New Product":(document.title="My photo e-shop | Edit Product (ID:".concat(n.urlId,")"),b.a.get("".concat("/paujak-spring","/api/products/").concat(n.urlId)).then((function(e){return n.setState(e.data)}))),n.handleChange=n.handleChange.bind(Object(w.a)(n)),n.handleSave=n.handleSave.bind(Object(w.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return"new"===this.urlId?c.a.createElement("div",null,c.a.createElement("div",{className:"h2 col-10 mx-auto mt-2"},"Insert new product"),c.a.createElement(I,{onSubmit:this.handleSave,onChange:this.handleChange,item:this.state,onCancel:this.handleCancel})):c.a.createElement("div",null,c.a.createElement("div",{className:"h2 col-10 mx-auto mt-2"},"Edit product"),c.a.createElement(I,{onSubmit:this.handleUpdate,onChange:this.handleChange,item:this.state,onCancel:this.handleCancel}))}}]),a}(n.Component);var D=function(e){var t=e.item,a=t.title,n=t.imageUrl,l=t.description,r=t.price,s=t.quantity;return c.a.createElement("main",{className:"container col-8"},c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"h2"},a))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:n,className:"img-fluid border",alt:a})),c.a.createElement("div",{className:"col-6"},c.a.createElement("p",null,l),c.a.createElement("div",{className:"d-flex align-items-end my-2"},c.a.createElement("strong",null,"Price: ",r," | Items left: ",s)),c.a.createElement("button",{type:"button",className:"btn btn-primary d-flex align-item-end",onClick:e.onClose},"Close"))))},F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this)).urlId="",n.state={pavadinimas:"",aprasymas:"",imageSrc:"",tipas:"",arKeltiVeliava:""},n.loaded=!1,n.onClose=function(){n.props.history.push("/sventes/")},n.urlId=e.match.params.id,document.title="\u0160ven\u010di\u0173 registras | ".concat(n.urlId,")"),b.a.get("".concat("/paujak-spring","/api/sventes/").concat(n.urlId)).then((function(e){n.loaded=!0,n.setState(e.data)})),n}return Object(u.a)(a,[{key:"render",value:function(){return this.loaded?c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"row my-5"},c.a.createElement(D,{item:this.state,onClose:this.onClose}))):c.a.createElement("div",{className:"d-flex justify-content-center my-5"},c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),U=function(e){return c.a.createElement("div",null,"Route did not match ",c.a.createElement("br",null),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.history.push("/")}},"Go Home"))};document.title="Svenciu registro programa",r.a.render(c.a.createElement(y.a,{basename:"/paujak-spring"},c.a.createElement(k,null,c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",component:g}),c.a.createElement(N.a,{exact:!0,path:"/sventes/",component:g}),c.a.createElement(N.a,{exact:!0,path:"/sventes/:name",component:F}),c.a.createElement(N.a,{exact:!0,path:"/admin/",component:O}),c.a.createElement(N.a,{exact:!0,path:"/admin/:name",component:P}),c.a.createElement(N.a,{path:"*",component:U}),c.a.createElement(N.a,{component:U})))),document.getElementById("root")),f()}},[[38,1,2]]]);
//# sourceMappingURL=main.be325333.chunk.js.map