(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{m3Yc:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("f3/d");var n=a("2A+t"),r=a("q1tI"),i=a.n(r);a("qKvR");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=function(e){var t,a;function r(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={fullName:"",email:"",numberOfPeople:"",message:"",isError:!1,isLoading:!1},t.formCellStyle={textAlign:"center",margin:2,padding:2,"& input":{mx:2}},t.handleInputChange=function(e){var a,n=e.target,r=n.value,i=n.name;t.setState(((a={})[i]=r,a))},t.handleSubmit=function(e){e.preventDefault(),t.setState({isLoading:!0}),""!==t.state.fullName&&""!==t.state.email&&""!==t.state.numberOfPeople?fetch("https://api.apispreadsheets.com/data/3xKShONVKje8u0Rr/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({data:{fullName:t.state.fullName,email:t.state.email,numberOfPeople:t.state.numberOfPeople}})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return t.setState({message:"Obrigado! Estamos muito felizes de ter vocês com a gente nesse dia especial!",isError:!1,isLoading:!1}),e})).catch((function(e){t.setState({message:"Ocorreu um erro. Por favor recarregue a página e tente novamente mais tarde. Se o problema persistir, você também pode fazer a confirmação através do número de telefone (32) 99962-5556 e falar com a Cláudia do Carimonial",isError:!0,isLoading:!1})})):t.setState({message:"Por favor, preencha todos os espaços",isError:!0,isLoading:!1})},t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return Object(n.c)("div",{sx:{color:"black",margin:0,padding:0,display:"grid",height:"100%",backgroundColor:"white"}},Object(n.c)("img",{alt:"Ana and Kirill",src:"/images/anakirill.jpg",sx:{maxWidth:"100%",width:600,maxHeight:"100vh",margin:"auto",padding:0}}),Object(n.c)("img",{alt:"dog",src:"/images/vida-pt.jpg",sx:{maxWidth:"100%",width:500,maxHeight:"100vh",margin:"auto",padding:0}}),Object(n.c)("span",{sx:{maxWidth:"100%",textAlign:"center",color:"black",fontSize:18,margin:"auto",padding:0}},"RSVP aqui:"),Object(n.c)("form",{onSubmit:this.handleSubmit,sx:{margin:"auto",width:"100%",padding:0}},Object(n.c)("div",{sx:this.formCellStyle},Object(n.c)("label",null,"Nome completo",Object(n.c)("input",{type:"text",name:"fullName",value:this.state.fullName,onChange:this.handleInputChange}))),Object(n.c)("div",{sx:this.formCellStyle},Object(n.c)("label",null,"Email",Object(n.c)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleInputChange}))),Object(n.c)("div",{sx:this.formCellStyle},Object(n.c)("label",null,"Número de pessoas",Object(n.c)("input",{type:"text",name:"numberOfPeople",value:this.state.numberOfPeople,onChange:this.handleInputChange}))),Object(n.c)("div",{sx:s({},this.formCellStyle,{textAlign:"center"})},Object(n.c)("button",{type:"submit"},this.state.isLoading?Object(n.c)("img",{src:"/images/loading.gif",sx:{width:20,height:20},alt:"loading"}):"Enviar"," ")),Object(n.c)("div",{sx:s({},this.formCellStyle,{color:this.state.isError?"red":"green",fontWeight:600})},Object(n.c)("span",null,this.state.message))),Object(n.c)("div",{sx:{textAlign:"center",fontSize:16,marginBottom:32}},Object(n.c)("a",{sx:{color:"black",textDecoration:"underline"},href:"/documents/Sugestões Pousadas Tiradentes.pdf",alt:"Onde ficar em Tiradentes (PDF)",download:!0},"Onde ficar em Tiradentes (PDF)")))},r}(i.a.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-aninha-pt-js-5bff9f2229c6ed05317d.js.map