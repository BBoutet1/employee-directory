(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),m=a.n(l),c=a(3),i=a(4),o=a(7),s=a(6);var d=function(e){return r.a.createElement("div",null,e.children)};a(13);var u=function(e){return r.a.createElement("main",null,r.a.createElement("div",{className:"m-3"},r.a.createElement("form",{className:"search d-inline-block input-group m-3"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:e.search,name:"search",onChange:e.handleInputChange,id:"search",type:"text",className:"form-control",placeholder:"Search"}))),r.a.createElement("div",{className:"filter d-inline-block input-group m-3"},r.a.createElement("div",{className:"d-inline-block input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Filter by...")),r.a.createElement("select",{value:e.filter,name:"filter",onChange:e.handleFilterChange,id:"filter",className:"custom-select d-inline-block"},r.a.createElement("option",{value:"firstName"},"First Name"),r.a.createElement("option",{value:"lastName"},"Last Name"),r.a.createElement("option",{value:"role"},"Role"),r.a.createElement("option",{value:"department"},"Department")))),r.a.createElement("div",{className:"m-3"},r.a.createElement("table",{className:"table mx-auto  mb-0  border"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("strong",null," ID"),r.a.createElement("i",{className:"fa fa-sort-down ml-3",id:"id",onClick:e.handleSortChange})),r.a.createElement("th",null," ",r.a.createElement("strong",null,"First Name"),r.a.createElement("i",{className:"fa fa-sort-down ml-2",id:"firstName",onClick:e.handleSortChange})),r.a.createElement("th",null,r.a.createElement("strong",null,"Last Name "),r.a.createElement("i",{className:"fa fa-sort-down ml-2",id:"lastName",onClick:e.handleSortChange})),r.a.createElement("th",null,r.a.createElement("strong",null,"Role"),r.a.createElement("i",{className:"fa fa-sort-down ml-2",id:"role",onClick:e.handleSortChange})),r.a.createElement("th",null,r.a.createElement("strong",null,"Department"),r.a.createElement("i",{className:"fa fa-sort-down ml-2",id:"department",onClick:e.handleSortChange})))),r.a.createElement("tbody",null,e.children))))};var h=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.role),r.a.createElement("td",null,e.department))},p=a(5);var f=function(e){return r.a.createElement("h1",{className:"navbar bg-info justify-content-center border-bottom"},e.children)},E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:p,filter:"firstName",search:"",sortBy:"id"},e.handleFilterChange=function(t){var a=t.target.value;e.setState({filter:a})},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a})},e.handleSortChange=function(t){var a=t.target.id;e.setState({sortBy:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement(f,null,"Employee directory"),r.a.createElement(u,{handleInputChange:this.handleInputChange,handleFilterChange:this.handleFilterChange,handleSortChange:this.handleSortChange},this.state.employees.sort((function(t,a){return t[e.state.sortBy]>a[e.state.sortBy]?1:-1})).filter((function(t){return t[e.state.filter].toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,firstName:e.firstName,lastName:e.lastName,role:e.role,department:e.department})}))))}}]),a}(n.Component);m.a.render(r.a.createElement(E,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"John","lastName":"Doe","role":"Operations Manager","department":"Production"},{"id":2,"firstName":"Paulo","lastName":"Mendes","role":"Machinist","department":"Production"},{"id":3,"firstName":"Franck","lastName":"Olu","role":"Assembler","department":"Production"},{"id":4,"firstName":"Marie","lastName":"Jeanne","role":"HR Manager","department":"Human Ressources"},{"id":5,"firstName":"Marc","lastName":"Dumas","role":"CEO","department":"Executive"},{"id":6,"firstName":"Pal","lastName":"Ghandi","role":"Receptionist","department":"Human Ressources"},{"id":7,"firstName":"Mary","lastName":"Jane","role":"CFO","department":"Finance"}]')},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7d9b136b.chunk.js.map