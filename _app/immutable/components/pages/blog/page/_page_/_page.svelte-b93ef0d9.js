import{S as F,i as G,s as I,k as E,a as w,e as D,T as J,l as v,h as _,c as B,n as g,E as P,b as h,f as S,t as q,q as b,m as A,r as k,B as H,w as M,x as O,y as T,u as L,z}from"../../../../../chunks/index-7847b002.js";import{a as j,P as K}from"../../../../../chunks/Pagination-c6638fb8.js";import{p as C,b as N}from"../../../../../chunks/config-6c8eda3a.js";function Q(r){let o,l,m,n,i,u,a,$;return{c(){o=E("h1"),l=b("Oops!"),m=w(),n=E("p"),i=b("Sorry, no posts to show here."),u=w(),a=E("a"),$=b("Back to blog"),this.h()},l(e){o=v(e,"H1",{});var c=A(o);l=k(c,"Oops!"),c.forEach(_),m=B(e),n=v(e,"P",{});var s=A(n);i=k(s,"Sorry, no posts to show here."),s.forEach(_),u=B(e),a=v(e,"A",{href:!0});var f=A(a);$=k(f,"Back to blog"),f.forEach(_),this.h()},h(){g(a,"href","/blog")},m(e,c){h(e,o,c),P(o,l),h(e,m,c),h(e,n,c),P(n,i),h(e,u,c),h(e,a,c),P(a,$)},p:H,i:H,o:H,d(e){e&&_(o),e&&_(m),e&&_(n),e&&_(u),e&&_(a)}}}function R(r){let o,l,m,n,i,u,a,$,e,c,s,f,d,y;return e=new j({props:{currentPage:r[2],totalPosts:r[3]}}),s=new K({props:{posts:r[4]}}),d=new j({props:{currentPage:r[2],totalPosts:r[3]}}),{c(){o=E("h1"),l=b("Posts "),m=b(r[1]),n=b("\u2013"),i=b(r[0]),u=b(" of "),a=b(r[3]),$=w(),M(e.$$.fragment),c=w(),M(s.$$.fragment),f=w(),M(d.$$.fragment)},l(t){o=v(t,"H1",{});var p=A(o);l=k(p,"Posts "),m=k(p,r[1]),n=k(p,"\u2013"),i=k(p,r[0]),u=k(p," of "),a=k(p,r[3]),p.forEach(_),$=B(t),O(e.$$.fragment,t),c=B(t),O(s.$$.fragment,t),f=B(t),O(d.$$.fragment,t)},m(t,p){h(t,o,p),P(o,l),P(o,m),P(o,n),P(o,i),P(o,u),P(o,a),h(t,$,p),T(e,t,p),h(t,c,p),T(s,t,p),h(t,f,p),T(d,t,p),y=!0},p(t,p){(!y||p&2)&&L(m,t[1]),(!y||p&1)&&L(i,t[0])},i(t){y||(S(e.$$.fragment,t),S(s.$$.fragment,t),S(d.$$.fragment,t),y=!0)},o(t){q(e.$$.fragment,t),q(s.$$.fragment,t),q(d.$$.fragment,t),y=!1},d(t){t&&_(o),t&&_($),z(e,t),t&&_(c),z(s,t),t&&_(f),z(d,t)}}}function U(r){let o,l,m,n,i,u,a;document.title=o="Blog - page "+r[2];const $=[R,Q],e=[];function c(s,f){return s[4].length?0:1}return n=c(r),i=e[n]=$[n](r),{c(){l=E("meta"),m=w(),i.c(),u=D(),this.h()},l(s){const f=J("svelte-19tq2vo",document.head);l=v(f,"META",{"data-key":!0,name:!0,content:!0}),f.forEach(_),m=B(s),i.l(s),u=D(),this.h()},h(){g(l,"data-key","description"),g(l,"name","description"),g(l,"content",N)},m(s,f){P(document.head,l),h(s,m,f),e[n].m(s,f),h(s,u,f),a=!0},p(s,[f]){(!a||f&4)&&o!==(o="Blog - page "+s[2])&&(document.title=o),i.p(s,f)},i(s){a||(S(i),a=!0)},o(s){q(i),a=!1},d(s){_(l),s&&_(m),e[n].d(s),s&&_(u)}}}function V(r,o,l){let m,n,{data:i}=o;const{page:u,totalPosts:a,posts:$}=i;return r.$$set=e=>{"data"in e&&l(5,i=e.data)},l(1,m=u*C-(C-1)||1),l(0,n=Math.min(u*C,a)),[n,m,u,a,$,i]}class Z extends F{constructor(o){super(),G(this,o,V,U,I,{data:5})}}export{Z as default};
