import{u as f,c as d}from"./App-ff4ff5eb.js";import{r as p,j as $}from"./index-94fca464.js";import{c as L,m as b,a as k,b as G,B as j}from"./Nav-e2a94351.js";const v=p.forwardRef(({bsPrefix:e,active:c,disabled:r,eventKey:l,className:i,variant:a,action:n,as:m,...t},s)=>{e=f(e,"list-group-item");const[o,I]=L({key:b(l,t.href),active:c,...t}),N=k(u=>{if(r){u.preventDefault(),u.stopPropagation();return}o.onClick(u)});r&&t.tabIndex===void 0&&(t.tabIndex=-1,t["aria-disabled"]=!0);const h=m||(n?t.href?"a":"button":"div");return $.jsx(h,{ref:s,...t,...o,onClick:N,className:d(i,e,I.isActive&&"active",r&&"disabled",a&&`${e}-${a}`,n&&`${e}-action`)})});v.displayName="ListGroupItem";const y=v,x=p.forwardRef((e,c)=>{const{className:r,bsPrefix:l,variant:i,horizontal:a,numbered:n,as:m="div",...t}=G(e,{activeKey:"onSelect"}),s=f(l,"list-group");let o;return a&&(o=a===!0?"horizontal":`horizontal-${a}`),$.jsx(j,{ref:c,...t,as:m,className:d(r,s,i&&`${s}-${i}`,o&&`${s}-${o}`,n&&`${s}-numbered`)})});x.displayName="ListGroup";const B=Object.assign(x,{Item:y});export{B as L};
