(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={button:"ListContacts_button__2Gtd9",item:"ListContacts_item__QtIfL",list:"ListContacts_list__3vBKB"}},21:function(t,e,n){t.exports={input:"Filter_input__1Q26w",label:"Filter_label__1wys8"}},22:function(t,e,n){t.exports={title:"App_title__LGEpP",contacts:"App_contacts__1dEFF"}},32:function(t,e,n){t.exports={container:"Container_container__hwQas"}},62:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(14),u=n.n(c),o=n(7),i=n(3),s=n(2),l=n(33),b=n(6),f=Object(i.b)("contacts/changeFilter"),j=n(4),d=n.n(j),p=n(8),O=n(11),m=n.n(O);function h(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m.a.default.baseURL="http://localhost:3000";var C,g,k,N=Object(i.c)("contact/fetchContacts",Object(p.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),F=Object(i.c)("contacts/addContacts",function(){var t=Object(p.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(i.c)("contacts/deleteContacts",function(){var t=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(i.d)([],(C={},Object(s.a)(C,N.fulfilled,(function(t,e){return e.payload})),Object(s.a)(C,F.fulfilled,(function(t,e){var n=e.payload;return t.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?(alert("".concat(n.name," is already in contacts")),t):[n].concat(Object(l.a)(t))})),Object(s.a)(C,L.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),B=Object(i.d)(!1,(g={},Object(s.a)(g,N.pending,(function(){return!0})),Object(s.a)(g,N.fulfilled,(function(){return!1})),Object(s.a)(g,N.rejected,(function(){return!1})),Object(s.a)(g,L.fulfilled,(function(){return!1})),Object(s.a)(g,L.pending,(function(){return!0})),Object(s.a)(g,L.rejected,(function(){return!1})),Object(s.a)(g,F.fulfilled,(function(){return!1})),Object(s.a)(g,F.pending,(function(){return!0})),Object(s.a)(g,F.rejected,(function(){return!1})),g)),z=Object(i.d)(null,(k={},Object(s.a)(k,N.rejected,(function(t,e){return e.payload})),Object(s.a)(k,N.pending,(function(){return null})),Object(s.a)(k,F.pending,(function(){return null})),Object(s.a)(k,F.rejected,(function(t,e){return e.payload})),Object(s.a)(k,L.pending,(function(){return null})),Object(s.a)(k,L.rejected,(function(t,e){return e.payload})),k)),E=Object(i.d)("",Object(s.a)({},f,(function(t,e){return e.payload}))),J=Object(b.b)({entities:A,isLoading:B,error:z,filter:E}),S=Object(i.a)({reducer:{contacts:J},devTools:!1,middleware:function(t){return t({serializableCheck:!1})}}),Z=n(32),D=n.n(Z),I=n(1);function M(t){var e=t.children;return Object(I.jsx)("div",{className:D.a.container,children:e})}var P=n(23),Q=n(64),q=n(9),G=n.n(q);var H=function(){var t=Object(o.b)(),e=Object(r.useState)(""),n=Object(P.a)(e,2),a=n[0],c=n[1],u=Object(r.useState)(""),i=Object(P.a)(u,2),s=i[0],l=i[1],b=Object(Q.a)(),f=Object(Q.a)(),j=function(t){var e=t.target,n=e.name,r=e.value,a=void 0===r?"":r;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}};return Object(I.jsxs)("form",{className:G.a.form,onSubmit:function(e){e.preventDefault(),function(e,n){t(F({name:e,number:n}))}(a,s),c(""),l("")},children:[Object(I.jsxs)("label",{className:G.a.label,children:["Name",Object(I.jsx)("input",{className:G.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:b,onChange:j,value:a,placeholder:"Annie Copeland"})]}),Object(I.jsxs)("label",{className:G.a.label,children:["Number",Object(I.jsx)("input",{className:G.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:f,onChange:j,value:s,placeholder:"227-91-26"})]}),Object(I.jsx)("button",{className:G.a.button,type:"submit",children:"Add contact"})]})},K=n(15),R=function(t){return t.contacts.filter},T=Object(K.a)([function(t){return t.contacts.entities},R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),U=n(17),V=n.n(U),W=function(){var t=Object(o.c)(T),e=Object(o.b)();return Object(r.useEffect)((function(){e(N())}),[e]),Object(I.jsx)("ul",{className:V.a.list,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(I.jsxs)("li",{className:V.a.item,children:[r," : ",a,Object(I.jsx)("button",{className:V.a.button,type:"button",onClick:function(){return function(t){return e(L(t))}(n)},children:"Delete"})]},n)}))})},$=n(21),X=n.n($),Y=function(){var t=Object(o.c)(R),e=Object(o.b)();return Object(I.jsxs)("label",{className:X.a.label,children:["Find contacts by name",Object(I.jsx)("input",{className:X.a.input,type:"text",value:t,onChange:function(t){return e(f(t.target.value))},onBlur:function(){return e(f(""))}})]})},tt=n(22),et=n.n(tt);function nt(){return Object(I.jsxs)(M,{children:[Object(I.jsx)("h1",{className:et.a.title,children:"Phonebook"}),Object(I.jsx)(H,{}),Object(I.jsx)("h2",{className:et.a.contacts,children:"Contacts"}),Object(I.jsx)(Y,{}),Object(I.jsx)(W,{})]})}u.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(o.a,{store:S,children:Object(I.jsx)(nt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={input:"Form_input__BkV3M",form:"Form_form__EJ3Id",button:"Form_button__OWHPF",label:"Form_label__wDZ1t"}}},[[62,1,2]]]);
//# sourceMappingURL=main.241063ff.chunk.js.map