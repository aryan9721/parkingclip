"use strict";(self.webpackChunkParkingClip=self.webpackChunkParkingClip||[]).push([[393],{59393:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var i=t(29439),n=t(72791),s=t(61399),o=(t(66772),t(82957),t(71323),t(2982)),l=t(31243),c=t(80184),r=function(){var e=JSON.parse(localStorage.getItem("userdata")),a=(0,n.useState)([]),t=(0,i.Z)(a,2),r=t[0],d=t[1];(0,n.useEffect)((function(){u()}),[]);var u=function(){l.Z.get(o.Z+"api/businesses/"+e.userId).then((function(e){d(e.data.data.locations)}))};console.log(r);var h={columns:[{label:"Location Name",field:"name"},{label:"Location Address",field:"address",width:150},{label:"GPS Co-ordinate of the location",field:"gpsCords",width:270},{label:"Type of location",field:"locationType",width:200},{label:" Vehicles Allowed and their capacity",field:"vehicleDetails",width:100}],rows:r&&r.map((function(e){return{name:e.name,address:e.address,gpsCords:e.gpsCords,locationType:e.locationType,vehicleDetails:e.vehicleDetails&&e.vehicleDetails.map((function(e){return"".concat(e.type,": ").concat(e.capacity)})).join(", ")}}))};return(0,c.jsx)("div",{className:"home",children:(0,c.jsx)("div",{className:"homeContainer",children:(0,c.jsxs)("div",{className:"VRbody",children:[(0,c.jsx)("h3",{children:"Locations Registered"}),(0,c.jsx)(s.g0K,{noBottomColumns:!0,style:{lineHeight:"normal",whiteSpace:"pre",justifyContent:"center"},striped:!0,bordered:!0,small:!0,data:h})]})})})}},2982:function(e,a){a.Z="/server/parking-management-service/"}}]);
//# sourceMappingURL=393.68e316cb.chunk.js.map