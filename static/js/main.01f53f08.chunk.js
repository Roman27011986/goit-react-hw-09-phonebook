(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(e,t,a){e.exports={list:"ContactList_list__1Zwxh",cardWrapper:"ContactList_cardWrapper__5Rtet",card:"ContactList_card__YiS2p",cardFront:"ContactList_cardFront__1RDB9",cardBack:"ContactList_cardBack__2-K9u",cube:"ContactList_cube__1-LJ3",face:"ContactList_face__GdnQP",cubeTop:"ContactList_cubeTop__mo3xa",cubeLeft:"ContactList_cubeLeft__2aTW1",cubeRight:"ContactList_cubeRight__d4ENT",details:"ContactList_details__2YMUs",btnRemove:"ContactList_btnRemove__DzOVK"}},,function(e,t,a){e.exports={group:"GetName_group__n9zlp",formItem:"GetName_formItem__3rM8s",formLabel:"GetName_formLabel__1jF7V",bar:"GetName_bar__kmUcJ"}},function(e,t,a){e.exports={group:"GetNumber_group__2BnzE",formItem:"GetNumber_formItem__33dlZ",formLabel:"GetNumber_formLabel__3bImS",bar:"GetNumber_bar__6Nb4J"}},function(e,t,a){e.exports={group:"Filter_group__1O868",formItem:"Filter_formItem__1Rxkh",formLabel:"Filter_formLabel__33_U1",bar:"Filter_bar__17X1i"}},,,,,,function(e,t,a){e.exports={form:"Form_form__1dYcd",btn:"Form_btn__3ocfN"}},,,function(e,t,a){e.exports={container:"Container_container__3JstN"}},,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(12),s=a.n(c),o=(a(20),a(21),a(15)),i=a(6),l=a(7),u=a(9),b=a(8),d=a(25),m=a(13),h=a(3),j=a.n(h),f=a(0),_=function(e){var t=e.handleChange,a=e.value;return Object(f.jsxs)("div",{className:j.a.group,children:[Object(f.jsx)("input",{className:j.a.formItem,id:"name",placeholder:"Jacob Mercer",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,name:"name",value:a,onChange:t}),Object(f.jsx)("span",{className:j.a.bar}),Object(f.jsx)("label",{className:j.a.formLabel,htmlFor:"name",children:"Name"})]})},p=a(4),x=a.n(p),O=function(e){var t=e.handleChange,a=e.value;return Object(f.jsxs)("div",{className:x.a.group,children:[Object(f.jsx)("input",{id:"number",className:x.a.formItem,value:a,placeholder:"0970521180",onChange:t,type:"tel",required:!0,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",name:"number"}),Object(f.jsx)("span",{className:x.a.bar}),Object(f.jsx)("label",{htmlFor:"number",className:x.a.formLabel,children:"Number"})]})},v=a(11),g=a.n(v),N=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(m.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:g.a.form,action:"",onSubmit:this.handleSubmit,children:[Object(f.jsx)(_,{handleChange:this.handleChange,value:this.state.name}),Object(f.jsx)(O,{handleChange:this.handleChange,value:this.state.number}),Object(f.jsx)("button",{className:g.a.btn,type:"submit",disabled:!this.state.name||!this.state.number,children:"Add contact"})]})}}]),a}(r.a.Component),C=a(1),L=a.n(C),y=a.p+"static/media/memphis-colorful.70d889ff.png",F=function(e){var t=e.contacts,a=e.deleteTodo;return Object(f.jsx)("ul",{className:L.a.list,children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(f.jsxs)("li",{id:L.a.cardWrapper,children:[Object(f.jsx)("div",{id:L.a.cardFront,className:L.a.card,style:{backgroundImage:y},children:Object(f.jsxs)("div",{id:L.a.cube,children:[Object(f.jsxs)("div",{className:L.a.face||L.a.cubeTop,children:[" ",Object(f.jsx)("p",{children:n})]}),Object(f.jsx)("div",{className:L.a.face||L.a.cubeLeft,children:Object(f.jsx)("p",{children:n})}),Object(f.jsx)("div",{className:L.a.face||L.a.cubeRight,children:Object(f.jsx)("p",{children:n})})]})}),Object(f.jsxs)("div",{id:L.a.cardBack,className:L.a.card,children:[Object(f.jsx)("div",{className:L.a.details,children:Object(f.jsx)("h3",{children:r})}),Object(f.jsx)("button",{className:L.a.btnRemove,type:"button",onClick:function(){return a(t)}})]})]},t)}))})},S=a(14),T=a.n(S),k=function(e){var t=e.children;return Object(f.jsx)("div",{className:T.a.container,children:t})},I=a(5),A=a.n(I),w=function(e){var t=e.value,a=e.onChange;return Object(f.jsxs)("div",{className:A.a.group,children:[Object(f.jsx)("input",{id:"filter",className:A.a.formItem,type:"text",required:!0,value:t,onChange:a}),Object(f.jsx)("span",{className:A.a.bar}),Object(f.jsx)("label",{htmlFor:"filter",className:A.a.formLabel,children:"Filter"})]})},G=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.formSubmitHandler=function(t){var a=t.name,n=t.number;e.state.contacts.find((function(e){return e.name===a}))?alert("".concat(a," is already in contacts")):e.addTodo(a,n)},e.addTodo=function(t,a){var n={id:Object(d.a)(),name:t,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[n].concat(Object(o.a)(t))}}))},e.deleteTodo=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodo=function(){var t=e.state,a=t.filter,n=t.contacts,r=a.toLocaleLowerCase();return n.filter((function(e){return e.name.toLocaleLowerCase().includes(r)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.getVisibleTodo();return Object(f.jsxs)(k,{children:[Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Phonebook"}),Object(f.jsx)(N,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),Object(f.jsx)(w,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(F,{contacts:e,deleteTodo:this.deleteTodo})]})}}]),a}(r.a.Component);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.01f53f08.chunk.js.map