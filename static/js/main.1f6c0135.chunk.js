(this["webpackJsonptable-with-filters"]=this["webpackJsonptable-with-filters"]||[]).push([[0],{1:function(e,t,a){e.exports={appContainer:"common_appContainer__3dVaQ",filterTypesContainer:"common_filterTypesContainer__385yT",table:"common_table__UovdM",finishedInStock:"common_finishedInStock__1-ZoQ",filterInput:"common_filterInput__3ql4F",name:"common_name__1Exmx",price:"common_price__1Hc7Q",checkbox:"common_checkbox__QaehJ"}},11:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),l=a(5),i=a(3),s=a(2),m={products:[{category:"sports stuff",price:100,stocked:!0,name:"swimming trunks"},{category:"sports stuff",price:300,stocked:!0,name:"dumbbells"},{category:"sports stuff",price:85,stocked:!1,name:"bike"},{category:"sports stuff",price:45,stocked:!0,name:"baseball bat"},{category:"sports stuff",price:74,stocked:!1,name:"kimono"},{category:"sports stuff",price:132,stocked:!1,name:"shorts"},{category:"home electronics",price:148,stocked:!0,name:"ipod touch"},{category:"home electronics",price:416,stocked:!1,name:"ihone 5"},{category:"home electronics",price:199.9,stocked:!0,name:"nexus 7"},{category:"home electronics",price:96,stocked:!0,name:"samsung"},{category:"home electronics",price:116,stocked:!0,name:"sony z2"},{category:"video games",price:30,stocked:!0,name:"gta 3"},{category:"video games",price:50,stocked:!0,name:"counter strike"},{category:"video games",price:150,stocked:!1,name:"pubg"},{category:"video games",price:150,stocked:!0,name:"mortal kombat"}],filterName:"",filterPrice:1e3,filterCategory:"",inStockOnly:!1};console.log();var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IN_STOCK_ONLY":return Object(s.a)(Object(s.a)({},e),{},{inStockOnly:t.inStockOnly});case"FILTER_BY_NAME":return Object(s.a)(Object(s.a)({},e),{},{filterName:t.name});case"FILTER_BY_PRICE":return Object(s.a)(Object(s.a)({},e),{},{filterPrice:t.price});case"FILTER_BY_CATEGORY":return Object(s.a)(Object(s.a)({},e),{},{filterCategory:t.category});default:return e}},p=Object(i.b)({tableReducer:u}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,d=Object(i.c)(p,f()),y=(a(22),a(23),function(e){var t=e.category;return n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},t))}),h=a(1),E=a.n(h),g=function(e){var t=e.product,a=t.stocked?t.name:n.a.createElement("span",{className:E.a.finishedInStock},t.name);return n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,"$ ",t.price))},_=function(e){var t=e.rows;return n.a.createElement("div",{className:E.a.table},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:E.a.name},"Name"),n.a.createElement("th",{className:E.a.price},"Price"))),n.a.createElement("tbody",null,t)))},k=function(e){var t=e.filter,a=e.handleFilterChange,r=e.searchType,c=e.placeholder;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"Search by ",r),n.a.createElement("br",null),n.a.createElement("input",{type:"text",placeholder:c,value:t,onChange:a,className:E.a.filterInput}))},b=function(e){var t=e.inStockOnly,a=e.handleInStockChange;return n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",checked:t,onChange:a,className:E.a.checkbox}),"Show only available products")},O=function(e){var t=e.filterName,a=e.filterPrice,r=e.filterCategory,c=e.inStockOnly,o=e.onNameFilter,l=e.onPriceFilter,i=e.onCategoryFilter,s=e.onInStockOnly,m=e.clearAllFilters;return n.a.createElement("div",{className:E.a.filterTypesContainer},n.a.createElement(k,{placeholder:"Search",searchType:"name",filter:t,handleFilterChange:function(e){return o(e)}}),n.a.createElement("br",null),n.a.createElement(k,{placeholder:"Less or equal to",searchType:"price",filter:a,handleFilterChange:function(e){return l(e)}}),n.a.createElement("br",null),n.a.createElement(k,{placeholder:"Search",searchType:"category",filter:r,handleFilterChange:function(e){return i(e)}}),n.a.createElement("br",null),n.a.createElement(b,{inStockOnly:c,handleInStockChange:function(e){return s(e)}}),n.a.createElement("br",null),n.a.createElement("button",{onClick:m}," Clear all filters"))},v=function(e){var t=e.dispatch,a=e.products,r=e.filterName,c=e.filterPrice,o=e.filterCategory,l=e.inStockOnly,i=[],s=null;return a.forEach((function(e){-1!==e.name.indexOf(r)&&-1!==e.category.indexOf(o)&&(e.price>c||l&&!e.stocked||(e.category!==s&&i.push(n.a.createElement(y,{category:e.category,key:e.category})),i.push(n.a.createElement(g,{product:e,key:e.name})),s=e.category))})),n.a.createElement("div",{className:E.a.appContainer},n.a.createElement(_,{rows:i}),n.a.createElement(O,{onNameFilter:function(e){var a=e.target.value;t({type:"FILTER_BY_NAME",name:a})},filterName:r,onPriceFilter:function(e){var a=e.target.value;t({type:"FILTER_BY_PRICE",price:a})},filterPrice:c,onCategoryFilter:function(e){var a=e.target.value;t({type:"FILTER_BY_CATEGORY",category:a})},filterCategory:o,onInStockOnly:function(e){var a=e.target.checked;t({type:"IN_STOCK_ONLY",inStockOnly:a})},inStockOnly:l,clearAllFilters:function(){t({type:"FILTER_BY_NAME",name:""}),t({type:"FILTER_BY_PRICE",price:1e3}),t({type:"FILTER_BY_CATEGORY",category:""}),t({type:"IN_STOCK_ONLY",inStockOnly:!1})}}))},C=Object(l.b)((function(e){return{products:e.tableReducer.products,filterName:e.tableReducer.filterName,filterPrice:e.tableReducer.filterPrice,filterCategory:e.tableReducer.filterCategory,inStockOnly:e.tableReducer.inStockOnly}}))((function(e){return n.a.createElement(v,e)}));var S=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:d},n.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1f6c0135.chunk.js.map