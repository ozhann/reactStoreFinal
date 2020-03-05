(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(75)},45:function(e,t,a){},46:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(45),a(14)),s=a(2),i=a(3),u=a(5),m=a(4),p=a(6),d=a(7),h=a(15),g=(a(46),a(8)),E=a.n(g),f=function(e){return e.user?r.a.createElement("nav",{className:"navbar"},r.a.createElement(d.b,{to:"/"},"Home"),r.a.createElement(d.b,{onClick:function(){E.a.delete("/api/auth/logout").then((function(){e.setUser(null)}))},to:"/"},"Logout")):r.a.createElement("nav",null,r.a.createElement("header",{className:"header"},r.a.createElement(d.b,{to:"/",className:"logo"},"Woofi"),r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",for:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/products"},"SHOP")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/about"},"ABOUT US")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/shoppingcart"},"CART")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/signup"},"LOGIN")))))},b=a(17),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",message:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),E.a.post("/api/auth/signup",{email:a.state.email,password:a.state.password}).then((function(e){a.props.history.push("/")})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{tpye:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Sign up")),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",message:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),E.a.post("/api/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){a.props.history.push("/"),console.log(e),a.props.setUser(e.data)})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Login")),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),C=function(e){return console.log(e.products),e.products?e.products.filter((function(t){return t.title.toLowerCase().includes(e.search)})).map((function(t){var a=t.images[0];return console.log(a),r.a.createElement("div",{className:"product-card",key:t._id},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{src:a,alt:t.title})),r.a.createElement("div",{className:"product-info"},r.a.createElement(d.b,{to:"/products/".concat(t._id),style:{textDecoration:"none"}},t.title),r.a.createElement("h5",null,t.price,"\u20ac"),r.a.createElement("button",{onClick:function(){return e.addToCart(t)}},"Add to cart")))})):r.a.createElement("div",null)},O=function(e){return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search for products...",value:e.search,onChange:function(t){e.updateSearchText(t.target.value)}}))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],searchedProducts:[],searchText:""},a.getData=function(){E.a.get("/api/products").then((function(e){console.log("test",e.data.message),a.setState({products:e.data.products})}))},a.sortByExpensive=function(){var e=Object(o.a)(a.state.products).sort((function(e,t){return t.price-e.price}));a.setState({products:e})},a.sortByCheaper=function(){var e=Object(o.a)(a.state.products).sort((function(e,t){return e.price-t.price}));a.setState({products:e})},a.updateSearchText=function(e){a.setState({searchText:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"search-bar-container"},r.a.createElement("div",{className:"search-for-products"},r.a.createElement("h3",null,"Search for products"),r.a.createElement(O,{updateSearchText:this.updateSearchText,search:this.state.searchText})),r.a.createElement("button",{onClick:this.sortByExpensive},"Sort by expensive"),r.a.createElement("button",{onClick:this.sortByCheaper},"Sort by cheaper")),r.a.createElement("div",{className:"products"},r.a.createElement(C,{products:this.state.products,addToCart:this.props.addToCart,search:this.state.searchText})))}}]),t}(n.Component),j=a(38),N=(a(74),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={product:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.productId;console.log(t),E.a.get("/api/products/".concat(t)).then((function(t){console.log("resolved",t.data),e.setState({product:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.product;return t?r.a.createElement("div",null,r.a.createElement("div",{className:"product-details-page"},r.a.createElement("div",{className:"product-gallery"},r.a.createElement(j.Carousel,{styles:!0,showStatus:!1,className:"car-styles"},r.a.createElement("div",null,r.a.createElement("img",{src:t.product.images[0]})),r.a.createElement("div",null,r.a.createElement("img",{src:t.product.images[1]})),r.a.createElement("div",null,r.a.createElement("img",{src:t.product.images[2]})))),r.a.createElement("div",{className:"product-description"},r.a.createElement("h2",null,t.product.title),r.a.createElement("h2",null,t.product.price," Euro"),r.a.createElement("p",null,t.product.descriptionFull),r.a.createElement("button",{className:"detail-buuton",onClick:function(){return e.props.addToCart(t.product)}},"Add to Cart")))):r.a.createElement("div",null,"Loading")}}]),t}(n.Component)),w=function(e){return r.a.createElement("footer",{className:"footerback"},r.a.createElement("div",{className:"columns-footer"},r.a.createElement("h2",{className:"woofer"},"Woofi"),r.a.createElement("div",{className:"four-columns"},r.a.createElement("div",{className:"first-column"},r.a.createElement("h2",null,"Subscriptions"),r.a.createElement("h5",null,"Newsletter"),r.a.createElement("h5",null,"Get the App"),r.a.createElement("h5",null,"Woofi Podcast"),r.a.createElement("h2",null,"About us"),r.a.createElement("h5",null,"The team"),r.a.createElement("h5",null,"Jobs")),r.a.createElement("div",{className:"second-column"},r.a.createElement("h2",null,"Press"),r.a.createElement("h5",null,"Media kit"),r.a.createElement("h5",null,"Retail enquiries"),r.a.createElement("h2",null,"Need help?"),r.a.createElement("h5",null,"Chat"),r.a.createElement("h5",null,"Questions and Answers")),r.a.createElement("div",{className:"third-column"},r.a.createElement("h2",null,"Follow Us"),r.a.createElement("div",{className:"icons-social"},r.a.createElement("img",{src:"../images/iconfinder_Rounded_Facebook_svg_5282541.png",alt:"icon"}),r.a.createElement("img",{src:"../images/iconfinder_Rounded_Instagram_svg_5282544.png",alt:"icon"}),r.a.createElement("img",{src:"../images/iconfinder_Rounded_Pinterest2_svg_5282545.png",alt:"icon"}))),r.a.createElement("div",{className:"fourth-column"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("h5",null,"friend@woofi.com"),r.a.createElement("h5",null,"+49 177 777 777"))),r.a.createElement("p",{className:"copyr"},"\xa9 2020 ",r.a.createElement("strong",null,"Woofi")," - Dog Store")))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[]},a.getData=function(){E.a.get("/api/products").then((function(e){console.log("test",e.data.message),a.setState({products:e.data.products})}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{products:this.state.products,addToCart:this.props.addToCart,search:this.state.searchText}))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"welcome-section"},r.a.createElement("div",{className:"starter-dog"},r.a.createElement("img",{src:"../images/starter.png",alt:"logo"})),r.a.createElement("div",{className:"slogan-section"},r.a.createElement("h1",null,"We take good care of your best friend."),r.a.createElement("h3",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum qui necessitatibus omnis, harum impedit nam minima, dicta quas beatae, alias sit quo molestiae perferendis cumque eum magni aliquid cupiditate."),r.a.createElement(d.b,{to:"/products"},r.a.createElement("button",null,"Check out the products")))),r.a.createElement("section",{className:"bestsellers"},r.a.createElement(k,null)))}}]),t}(r.a.Component),_=a(39),A=a.n(_),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onToken=function(e,t){a.props.history.push("/")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{amount:this.props.price,billingAddress:!0,shippingAddress:!0,description:"woof woof",currency:"EUR",image:"",locale:"auto",name:"Woofi Ltd.",stripeKey:"pk_test_ViicSjlSHJc9hdIoq2J8feHg00H2cAKMLf",token:this.onToken,zipCode:!0,label:"Pay with credit card",panelLabel:"Pay {{amount}}"})}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={shoppingCart:JSON.parse(localStorage.getItem("shoppingCart"))},a.removeItem=function(e){var t=JSON.parse(localStorage.getItem("shoppingCart")),n=t.filter((function(t,a){return console.log(t._id,e.details._id),t._id!==e.details._id}));localStorage.removeItem("shoppingCart",JSON.stringify(t)),localStorage.setItem("shoppingCart",JSON.stringify(n)),a.setState({shoppingCart:JSON.parse(localStorage.getItem("shoppingCart"))})},a.reduceQty=function(e){console.log("item",e);e.counter},a.increaseQty=function(e){},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("shoppingCart"));console.log(t),console.log(this.state.shoppingCart);var a=this.state.shoppingCart.reduce((function(e,t,a,n){var r=n.filter((function(e){return e._id===t._id}));return e.find((function(e){return e.details._id==t._id}))?e:[].concat(Object(o.a)(e),[{counter:r.length,details:t}])}),[]);console.log(a);var n=a.reduce((function(e,t){return console.log(t),e+t.details.price*t.counter}),0);return console.log({total:n}),r.a.createElement("div",null,r.a.createElement("h1",null,"Shopping Cart"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Name "),r.a.createElement("th",null,"Quantity "),r.a.createElement("th",null,"Price "),r.a.createElement("th",null,"Total ")),r.a.createElement("tbody",null,t.length>0?a.map((function(t,n){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"image-cart",src:t.details.images[0]})),r.a.createElement("td",null,t.details.title,r.a.createElement("br",null),r.a.createElement("button",{className:"remove-button",onClick:function(){return e.removeItem(t)}},"remove")," "),r.a.createElement("td",null,a[n].counter),r.a.createElement("td",null,"\u20ac",t.details.price),r.a.createElement("td",null,"\u20ac",t.details.price*a[n].counter))})):"Your cart is empty")),r.a.createElement("div",null,r.a.createElement("h1",null,"Total"),r.a.createElement("h1",null,"\u20ac",n),r.a.createElement("p",null,"Free Delivery"),r.a.createElement(I,{history:this.props.history,price:100*n})))}}]),t}(n.Component),J=JSON.parse(window.localStorage.getItem("shoppingCart"));console.log(J),null===J&&(console.log("sup people?"),localStorage.setItem("shoppingCart",JSON.stringify([])));var F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,shoppingCart:[]},a.setUser=function(e){a.setState({user:e})},a.addToCart=function(e){console.log("added to cart,",e),a.setState({shoppingCart:[].concat(Object(o.a)(a.state.shoppingCart),[e])},(function(){localStorage.setItem("shoppingCart",JSON.stringify(a.state.shoppingCart))}))},a.removeFromCart=function(e){console.log("removed",e),a.setState({shoppingCart:[].concat(Object(o.a)(a.state.shoppingCart),[e])},(function(){localStorage.removeItem("shoppingCart",JSON.stringify(a.state.shoppingCart))}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("shoppingCart"));return console.log(t),r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{setUser:this.setUser,user:this.state.user}),"\u200b",r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/signup",render:function(t){return r.a.createElement(v,{history:t.history,setUser:e.setUser})}}),r.a.createElement(h.a,{path:"/login",render:function(t){return r.a.createElement(y,{history:t.history,setUser:e.setUser})}}),r.a.createElement(h.a,{exact:!0,path:"/products",render:function(t){return r.a.createElement(S,Object.assign({},t,{user:e.state.user,addToCart:e.addToCart}))}}),"\u200b",r.a.createElement(h.a,{exact:!0,path:"/products/:productId",render:function(t){return r.a.createElement(N,Object.assign({},t,{user:e.state.user,addToCart:e.addToCart,className:"product-details-container"}))}}),r.a.createElement(h.a,{exact:!0,path:"/shoppingcart",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.user,shoppingCart:e.state.shoppingCart}))}}),"\u200b",r.a.createElement(T,null)),r.a.createElement(w,{className:"footer"})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));E.a.get("/api/auth/loggedin").then((function(e){c.a.render(r.a.createElement(d.a,null,r.a.createElement(F,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.d58d2048.chunk.js.map