"use strict";(self.webpackChunkParkingClip=self.webpackChunkParkingClip||[]).push([[108],{21108:function(e,a,s){s.r(a),s.d(a,{default:function(){return r}});var i=s(29439),l=s(72791),t=s(31243),d=s(2982),n=s(80184),r=function(){var e=JSON.parse(localStorage.getItem("userdata")),a=(0,l.useState)([]),s=(0,i.Z)(a,2),r=s[0],c=s[1];(0,l.useEffect)((function(){u()}),[]);var u=function(){console.log(e),t.Z.get(d.Z+"api/attendants/"+e.userId).then((function(e){console.log(e.data.data),c(e.data.data)}))};return(0,n.jsx)("div",{className:"home",children:(0,n.jsx)("div",{className:"homeContainer",children:(0,n.jsx)("div",{className:"body",children:(0,n.jsxs)("div",{className:"formContainer",children:[(0,n.jsx)("h3",{children:"Your Profile"}),r?(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{style:{width:"100%"},className:"formInput",children:[(0,n.jsx)("label",{children:"First Name"}),(0,n.jsx)("input",{required:!0,disabled:!0,value:r.firstName,type:Text})]}),(0,n.jsxs)("div",{style:{width:"100%"},className:"formInput",children:[(0,n.jsx)("label",{children:"Middle Name"}),(0,n.jsx)("input",{required:!0,disabled:!0,value:r.middleName,type:Text})]}),(0,n.jsxs)("div",{style:{width:"100%"},className:"formInput",children:[(0,n.jsx)("label",{children:"Last Name"}),(0,n.jsx)("input",{required:!0,disabled:!0,value:r.lastName,type:Text})]}),(0,n.jsxs)("div",{style:{width:"100%"},className:"formInput",children:[(0,n.jsx)("label",{children:"Contact No"}),(0,n.jsx)("input",{disabled:!0,value:r.mobileNo,style:{padding:"8px",border:"1px solid gray",borderRadius:"5px",height:"auto"},type:"number"})]}),(0,n.jsxs)("div",{style:{width:"100%"},className:"formInput",children:[(0,n.jsx)("label",{children:"Location"}),(0,n.jsx)("input",{required:!0,disabled:!0,value:r.location,type:Text})]})]}):null]})})})})}},2982:function(e,a){a.Z="/server/parking-management-service/"}}]);
//# sourceMappingURL=108.bdb08b8b.chunk.js.map