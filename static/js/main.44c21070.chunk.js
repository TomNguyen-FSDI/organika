(this.webpackJsonporganika=this.webpackJsonporganika||[]).push([[0],{22:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(23),r=a.n(i),s=(a(30),a(31),a(3)),o=a(4),l=a(7),u=a(6),j=a(12),m=a(0),b=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{backgroundColor:"rgb(22,94,106)"},children:Object(m.jsx)("div",{className:"navbar-expand-sm navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsxs)(j.b,{className:"nav-link",to:"/home",children:["Home ",Object(m.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{className:"nav-link",to:"/catalog",children:"Catalog"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"})})]})})})}}]),a}(n.Component),d=(a(38),a(39),a(20)),p=a(25),h=[{id:"5f40a6baac77a903d8f682c6",price:12.32,stock:13,title:"Cabbage",image:"img-1.jpg",discount:5,category:"Vegetable"},{id:"5f40a6ba41d9e5044ced586c",price:22.71,stock:21,title:"Strawberry",image:"product-6.jpg",discount:10,category:"Fruit"},{id:"5f40a6baa9e6e22fa1d5fac4",price:32,stock:20,title:"Bell pepper",image:"img-14.jpg",discount:0,category:"Vegetable"},{id:"5f40a6baf0f068a497921d29",price:6.99,stock:10,title:"Carrot",image:"img-4.jpg",discount:0,category:"Vegetable"},{id:"5f40a866337a3bb00793da52",price:16.39,stock:34,title:"Banana",image:"img-5.jpg",discount:4,category:"Fruit"},{id:"5f40a866ea0a04e6891b7084",price:14,stock:14,title:"Orange",image:"product-10.jpg",discount:0,category:"Fruit"},{id:"5f40a866ea0a04e6891212333",price:12,stock:11,title:"Egg",image:"img-15.jpg",discount:12,minimum:6,category:"Dairy & Eggs"},{id:"5f40a866ea0a04e68911231328",price:19.1,stock:11,title:"Orange Juice",image:"product-15.jpg",discount:12,category:"Beverages"}],g=function(){function t(){Object(s.a)(this,t)}return Object(o.a)(t,[{key:"getProducts",value:function(){return h}}]),t}(),f=(a(40),a(22),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={quantity:t.props.quantityMinimum,name:"Tom",minimumIsTrue:!1},t.alertMinimum=function(){if(t.state.minimumIsTrue)return Object(m.jsx)("label",{className:"alert-minimum",children:"minimum quantity"})},t.decreaseQuantity=function(){if(t.state.quantity<=t.props.quantityMinimum)t.setState({minimumIsTrue:!0});else{t.setState({minimumIsTrue:!1});var e=t.state.quantity-1;t.setState((function(t){return{quantity:t.quantity-1}})),t.props.onValueChange(e)}},t.increaseQuantity=function(){var e=t.state.quantity;e++,t.setState({quantity:e}),t.props.onValueChange(e),t.setState({minimumIsTrue:!1})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"",children:[this.alertMinimum(),Object(m.jsx)("button",{className:"btn btn-sm btn-primary btn-q",onClick:this.decreaseQuantity,children:"-"}),Object(m.jsx)("label",{children:this.state.quantity}),Object(m.jsx)("button",{className:"btn-q btn btn-sm btn-primary",onClick:this.increaseQuantity,children:"+"})]})}}]),a}(n.Component)),O=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).calculateTotal=function(){return(t.props.price*t.props.amount).toFixed(2)},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{className:"total",children:["Total: $",this.calculateTotal()]})})}}]),a}(n.Component),y=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={quantity:t.props.item.minimum||1},t.handleGetQuantity=function(e){t.setState({quantity:e})},t.handleAddToCart=function(){t.props.getImg(t.props.item.image),t.props.getPrice(t.props.item.price),t.props.getProduct(t.props.item.title),t.props.getQuantity(t.state.quantity),t.props.onCartChange(!0,t.props.item)},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)("img",{className:"product-image",src:"/images/products/"+this.props.item.image,alt:"product"}),Object(m.jsx)("label",{className:"product-title",children:this.props.item.title}),Object(m.jsxs)("p",{className:"unit_price",children:["Unit Price: $",this.props.item.price.toFixed(2)]}),Object(m.jsx)(f,{onValueChange:this.handleGetQuantity,quantityMinimum:this.props.item.minimum||1}),Object(m.jsx)(O,{price:this.props.item.price,amount:this.state.quantity,getTotal:this.props.getTotal}),Object(m.jsx)("div",{children:Object(m.jsxs)("button",{className:"btn-addE btn-add",onClick:this.handleAddToCart,children:[Object(m.jsx)("i",{className:"fas fa-shopping-cart"})," add to cart"]})})]})}}]),a}(n.Component),v=(a(41),a(42),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)("div",{className:this.props.cName,children:"2021 All rights reserved by Tom Nguyen"})})}}]),a}(n.Component)),x=(a(43),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={},t.handleHowMany=function(){return Object(m.jsx)("label",{className:"cart-sub-quantity",children:t.props.cartQuantity})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"cart-sub-container",children:[Object(m.jsx)("img",{src:"/images/products/"+this.props.cartImg,alt:"CartProduct"}),this.handleHowMany()]})})}}]),a}(n.Component)),C=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={catalog:[],isCart:!1,cartPrice:0,cartTitle:"",cartImg:"",cartId:0,cart:[],addToCart:!1,displayCart:"none",subTotal:0},t.onChangeSubtotal=function(){var e,a=0,n=Object(p.a)(t.state.cart);try{for(n.s();!(e=n.n()).done;){var c=e.value;a+=c.price*c.stock}}catch(i){n.e(i)}finally{n.f()}return a.toFixed(2)},t.displayCart=function(){t.state.isCart&&t.state.addToCart&&t.addToCart()},t.addToCart=function(){for(var e=0;e<t.state.cart.length;e++)if(t.state.cart[e].title===t.state.cartTitle){var a=Object(d.a)(t.state.cart),n=a[e];return n.stock=t.state.cartQuantity,a[e]=n,t.setState({cart:a}),void t.setState({addToCart:!1})}t.setState({cart:[].concat(Object(d.a)(t.state.cart),[{id:t.state.cartId,price:t.state.cartPrice,stock:t.state.cartQuantity,title:t.state.cartTitle,image:t.state.cartImg}])}),t.setState((function(t){return{cartId:t.cartId+1}})),t.setState({addToCart:!1})},t.getPrice=function(e){t.setState({cartPrice:e})},t.getProduct=function(e){t.setState({cartTitle:e})},t.debug=function(){console.log("getTitle "+t.state.cartTitle),console.log("getPrice: "+t.state.cartPrice),console.log("getQuantity: "+t.state.cartQuantity),console.log("getImg: "+t.state.cartImg)},t.getQuantity=function(e){t.setState({cartQuantity:e})},t.getImg=function(e){t.setState({cartImg:e})},t.handleCart=function(e,a){t.setState({isCart:e}),t.setState({addToCart:e}),t.displayCart(a)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"container-fluid content",children:[Object(m.jsxs)("div",{className:"catalog-page container",children:[Object(m.jsxs)("h3",{className:"cat-title",children:["We have ",this.state.catalog.length," amazing products"]}),this.state.catalog.map((function(e){return Object(m.jsx)(y,{item:e,onCartChange:t.handleCart,getPrice:t.getPrice,getProduct:t.getProduct,getQuantity:t.getQuantity,getImg:t.getImg},e.id)})),Object(m.jsx)(v,{cName:"footer-cr"})]}),this.displayCart(),this.state.isCart?Object(m.jsxs)("div",{className:"checkout-cart-container",children:[Object(m.jsx)("label",{className:"cart-subtotal-title",children:"Subtotal:"}),Object(m.jsxs)("p",{className:"cart-subtotal",children:["$ ",this.onChangeSubtotal()]}),this.state.cart.map((function(t){return Object(m.jsx)(x,{cartImg:t.image,cartTitle:t.title,cartPrice:t.price,cartQuantity:t.stock},t.id)}))]}):""]})})}},{key:"componentDidMount",value:function(){var t=(new g).getProducts();this.setState({catalog:t})}}]),a}(n.Component),N=(a(44),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"homepage",style:{backgroundImage:"url(/images/homepage.jpg)"},children:[Object(m.jsxs)("h1",{children:["Welcome to ",Object(m.jsx)("span",{className:"homepage-welcome",children:"Organika"})]}),Object(m.jsx)(v,{cName:"footer-cr-absolute"})]})}}]),a}(n.Component)),k=a(2),T=(a(45),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={infoVisible:!1},t.getNameInfo=function(){return t.state.infoVisible?Object(m.jsx)("p",{className:"display-4",children:"Tom Nguyen"}):Object(m.jsx)("p",{className:"display-4",children:"The Developer"})},t.getDetailInfo=function(){return t.state.infoVisible?Object(m.jsx)("p",{className:"lead",children:"Hi, I'm Tom. Please contact me by using the information below."}):Object(m.jsx)("p",{className:"lead",children:"This is an FSDI Project using React."})},t.getPersonalInfo=function(){return t.state.infoVisible?Object(m.jsxs)("div",{className:"about-profile",children:[Object(m.jsx)("img",{src:"/images/profile picture.jpg",alt:"profile.jpg"}),Object(m.jsx)("p",{className:"",children:"Email: Tommie_89@yahoo.com"}),Object(m.jsx)("p",{children:"Phone: (123) 456-7890"})]}):Object(m.jsx)("label",{children:"Click the button to see more info"})},t.handleButtonClick=function(){t.setState({infoVisible:!t.state.infoVisible})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"jumbotron",children:[this.getNameInfo(),this.getDetailInfo(),Object(m.jsx)("hr",{className:"my-4"}),this.getPersonalInfo(),Object(m.jsx)("p",{className:"lead",children:Object(m.jsx)("button",{className:"btn btn-primary btn-lg",onClick:this.handleButtonClick,children:"More about me"})})]}),Object(m.jsx)(v,{cName:"footer-cr-absolute"})]})}}]),a}(n.Component));var I=function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{}),Object(m.jsxs)(k.c,{children:[Object(m.jsx)(k.a,{path:"/",exact:!0,component:N}),Object(m.jsx)(k.a,{path:"/home",exact:!0,component:N}),Object(m.jsx)(k.a,{path:"/catalog",exact:!0,component:C}),Object(m.jsx)(k.a,{path:"/about",exact:!0,component:T})]})]})})},S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.44c21070.chunk.js.map