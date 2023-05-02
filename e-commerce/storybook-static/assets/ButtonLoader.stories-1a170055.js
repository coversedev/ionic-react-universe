import{j as e,a as I}from"./jsx-runtime-9a6f6fa0.js";import{I as A,a as j,s as R}from"./index-441b9941.js";import{c as d}from"./index-2e4736b8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./iframe-aeb6579b.js";import"../sb-preview/runtime.mjs";const t=({classNamesVal:i=[],type:L="button",disabled:q=!1,onClick:N,loading:a=!1,children:_,loadingText:B="Loading...",raised:S=!1,animation:l="glow",color:x="primary",id:T="button-loader-dynamic"})=>e("div",{className:d("button-loader-wrapper",{"animation-glow":l==="glow","animation-spinner":l==="spinner"}),children:I(A,{id:T,color:x,fill:S?"solid":"clear",className:d(...i),type:L,disabled:q,onClick:N,children:[a?e(j,{className:"btn-spinner",name:"crescent"}):null,a?e("div",{className:"btn-glow"}):null,a?null:e("span",{className:"loader-children",children:_}),a?e("span",{children:B}):null]})});try{t.displayName="ButtonLoader",t.__docgenInfo={description:"",displayName:"ButtonLoader",props:{classNamesVal:{defaultValue:{value:"[]"},description:"",name:"classNamesVal",required:!1,type:{name:"string[]"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e: any) => any"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}},raised:{defaultValue:{value:"false"},description:"",name:"raised",required:!1,type:{name:"boolean"}},animation:{defaultValue:{value:"glow"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"glow"'},{value:'"spinner"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"string"}},id:{defaultValue:{value:"button-loader-dynamic"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}R();const F={title:"Buttons/ButtonLoader",component:t,args:{children:"Button"},tags:["autodocs"]},n={args:{raised:!0}},r={args:{disabled:!0}},o={args:{loading:!0,animation:"glow"}},s={args:{loading:!0,animation:"spinner"}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    raised: true
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    disabled: true
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    loading: true,
    animation: "glow"
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,h,V;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    loading: true,
    animation: "spinner"
  }
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};const H=["Raised","Disabled","LoadingGlowAnimation","LoadingSpinnerAnimation"];export{r as Disabled,o as LoadingGlowAnimation,s as LoadingSpinnerAnimation,n as Raised,H as __namedExportsOrder,F as default};
//# sourceMappingURL=ButtonLoader.stories-1a170055.js.map
