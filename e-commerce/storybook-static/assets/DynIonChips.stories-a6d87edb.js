import{j as o,a as D}from"./jsx-runtime-9a6f6fa0.js";import{k as b,l as w,m as x,c as H,b as N,s as R}from"./index-441b9941.js";import{c as q}from"./index-2e4736b8.js";import{i as V}from"./index-e2b72ed9.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./iframe-aeb6579b.js";import"../sb-preview/runtime.mjs";const d=({onRemoveChipHandler:a,activatedChipHandler:I,chipValues:s,activatedChipId:l,color:f})=>o(b,{className:"dyn-chips-wrapper ion-display-flex ion-flex-direction-row",lines:"none",children:s==null?void 0:s.map((e,_)=>o(w,{children:D(x,{color:f||"secondary",className:q("chip",{active:l!==-1&&(e==null?void 0:e.id)===l}),onClick:i=>{i.stopPropagation(),I(e)},children:[o(H,{children:e!=null&&e.name?e.name:`Detail ${e.id}`}),o(N,{className:"chip-remove",icon:V,onClick:i=>{i.stopPropagation(),a(e==null?void 0:e.id)}})]})},_))});try{d.displayName="DynIonChips",d.__docgenInfo={description:"",displayName:"DynIonChips",props:{onRemoveChipHandler:{defaultValue:null,description:"",name:"onRemoveChipHandler",required:!0,type:{name:"(id: string | number) => void"}},activatedChipHandler:{defaultValue:null,description:"",name:"activatedChipHandler",required:!0,type:{name:"(chip: Record<string, any>) => void"}},chipValues:{defaultValue:null,description:"",name:"chipValues",required:!0,type:{name:"IonChipModel[]"}},activatedChipId:{defaultValue:null,description:"",name:"activatedChipId",required:!0,type:{name:"string | number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}R();const j=[{id:1,name:"Chip 1",value:{data:"foo"}},{id:2,name:"Chip 2",value:{data:"bar"}},{id:3,name:"Chip 3",value:{data:"baz"}}],E={title:"Chips/DynIonChips",component:d,args:{chipValues:j,onRemoveChipHandler:a=>console.log(`Removing chip with ID ${a}`),activatedChipHandler:a=>console.log("Activating chip",a)},tags:["autodocs"]},r={args:{activatedChipId:-1}},n={args:{activatedChipId:1}},t={args:{activatedChipId:-1,color:"tertiary"}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: -1
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,C,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: 1
  }
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var y,h,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: -1,
    color: "tertiary"
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const M=["Default","Activated","CustomColor"];export{n as Activated,t as CustomColor,r as Default,M as __namedExportsOrder,E as default};
//# sourceMappingURL=DynIonChips.stories-a6d87edb.js.map
