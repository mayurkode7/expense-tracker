(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=n(0),o=function(){return Object(i.jsx)("h2",{children:"Expense Tracker +"})},j=n(3),u=n(8),l=n(4),b="DELETE_TRANSACTION",d="ADD_TRANSACTION",x=function(e,t){switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case d:return Object(l.a)(Object(l.a)({},e),{},{transactions:[].concat(Object(u.a)(e.transactions),[t.payload])});default:return e}},O={transactions:[]},h=Object(c.createContext)(O),m=function(e){var t=e.children,n=Object(c.useReducer)(x,O),r=Object(j.a)(n,2),s=r[0],a=r[1];return Object(i.jsx)(h.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){a({type:b,payload:e})},addTransaction:function(e){a({type:d,payload:e})}},children:t})},f=function(){var e=Object(c.useContext)(h).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)("section",{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsx)("h1",{children:e})]})},p=function(){var e=Object(c.useContext)(h).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})),n=t.length>0?t.reduce((function(e,t){return e+t})).toFixed(2):0,r=e.filter((function(e){return e<0})),s=r.length>0?r.reduce((function(e,t){return Math.abs(e+=t)})).toFixed(2):0;return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{className:"money plus",children:n})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{className:"money minus",children:s})]})]})},v=function(e){var t=Object(c.useContext)(h).deleteTransaction,n=e.transaction,r=n.text,s=n.amount,a=n.id,o=s>0?"+":"-";return Object(i.jsxs)("li",{className:s<0?"minus":"plus",children:[r," ",Object(i.jsxs)("span",{children:[" ",Object(i.jsx)("span",{children:o}),"$",Math.abs(s)]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){return t(a)},children:"x"})]})},N=function(){var e=Object(c.useContext)(h).transactions;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:e.map((function(e){return Object(i.jsx)(v,{transaction:e},e.id)}))})]})},y=n(17),T=function(){var e=Object(c.useContext)(h).addTransaction,t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(0),o=Object(j.a)(a,2),u=o[0],l=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:Object(y.a)(),text:r,amount:parseInt(u),time:(new Date).getTime()};e(n)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative: expense, positive: income)"]}),Object(i.jsx)("input",{type:"number",value:u,onChange:function(e){return l(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};n(14);var C=function(){return Object(i.jsxs)(m,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(f,{}),Object(i.jsx)(p,{}),Object(i.jsx)(N,{}),Object(i.jsx)(T,{})]})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cdffbeb0.chunk.js.map