import{a9 as e,_ as a,y as t,r as l,aj as i,a as n,G as o,H as s,d as r,P as u,b as c,F as p,ag as d,R as f,K as v,ak as m,al as y,am as h,ab as g,aa as b}from"./index.3e972bdf.js";import{i as _}from"./mars-util.11faac96.js";import{u as C}from"./use-lifecycle.fdbeda11.js";const w=e.exports.Cesium;let N,x,T,q=null;function O(){T.getAddress({location:N.getCenter(),success:e=>{q=e}})}function k(e){return T.autoTip({text:e,city:null==q?void 0:q.city,location:N.getCenter()})}function S(e,a){return T.queryText({text:e,count:6,page:a-1,city:null==q?void 0:q.city})}function P(a){E(),a.forEach((a=>{const t=Number(a.lng),l=Number(a.lat);if(isNaN(t)||isNaN(l))return;a.lng=t,a.lat=l;const i=new e.exports.graphic.PointEntity({position:w.Cartesian3.fromDegrees(t,l),style:{pixelSize:10,color:"#3388ff",outline:!0,outlineColor:"#ffffff",outlineWidth:2,scaleByDistance:new w.NearFarScalar(1e3,1,1e6,.1),clampToGround:!0,visibleDepth:!1,label:{text:a.name,font_size:20,color:"rgb(240,255,255)",outline:!0,outlineWidth:2,outlineColor:w.Color.BLACK,horizontalOrigin:w.HorizontalOrigin.CENTER,verticalOrigin:w.VerticalOrigin.BOTTOM,pixelOffsetY:-10,distanceDisplayCondition:new w.DistanceDisplayCondition(0,2e5),clampToGround:!0,visibleDepth:!1}},attr:a});x.addGraphic(i),a._graphic=i})),a.length>1&&x.flyTo()}function D(a){const t=a.split(",");if(2!==t.length)return;const l=Number(t[0]),i=Number(t[1]);if(isNaN(l)||isNaN(i))return;const n=new e.exports.graphic.PointEntity({position:w.Cartesian3.fromDegrees(l,i),style:{color:"#3388ff",pixelSize:10,outline:!0,outlineColor:"#ffffff",outlineWidth:2,scaleByDistance:new w.NearFarScalar(1e3,1,1e6,.1),clampToGround:!0,visibleDepth:!1}});x.addGraphic(n),n.bindPopup(`<div class="mars3d-template-titile">坐标定位</div>\n              <div class="mars3d-template-content" >\n                <div><label>经度</label> ${l}</div>\n                <div><label>纬度</label>${i}</div>\n              </div>`),n.openHighlight(),n.flyTo({radius:1e3,scale:1.5,complete:()=>{n.openPopup()}})}function G(e,a){N.flyToGraphic(e,{...a,complete:()=>x.openPopup(e)})}function E(){x.closePopup(),x.clear()}var I=Object.freeze(Object.defineProperty({__proto__:null,onMounted:function(a){N=a,T=new e.exports.query.GaodePOI({}),x=new e.exports.layer.GraphicLayer({name:"POI查询",pid:99}),x.bindPopup((function(e){var a;const t=null==(a=e.graphic)?void 0:a.attr;if(!t)return;let l=`<div class="mars3d-template-titile"><a href="https://www.amap.com/detail/${t.id}"  target="_black" style="color: #ffffff; ">${t.name}</a></div><div class="mars3d-template-content" >`;if(""!==t.tel&&(l+="<div><label>电话:</label>"+t.tel+"</div>"),t.address&&(l+="<div><label>地址:</label>"+t.address+"</div>"),t.type){const e=t.type;""!==e&&(l+="<div><label>类别:</label>"+e+"</div>")}return l+="</div>",l})),N.addLayer(x),N.on(e.exports.EventType.cameraChanged,O)},onUnmounted:function(){N.removeLayer(x),N.off(e.exports.EventType.cameraChanged,O),x.remove(),T=null,q=null,N=null},queryData:k,querySiteList:S,showPOIArr:P,centerAtLonLat:D,flyToGraphic:G,clearLayers:E},Symbol.toStringTag,{value:"Module"}));const z={class:"query-poi"},L={class:"query-poi__search"},j={key:0,class:"search-list"},B=["onClick"],A={key:1,class:"query-site"},F=["onClick"],$={class:"query-site__context"},H=["title"],J={class:"query-site-sub f-toe"},M=["href"],W={class:"query-site__page"},K={class:"query-site-allcount"};var R=a(t({__name:"index",setup(e){C(I);const a="mars3d_queryGaodePOI",t=l(!1),w=l(""),N=l([]),x=l(!1),T=l([]),q=l(0);let O;const R=()=>{O=setTimeout((()=>{x.value=!1,clearTimeout(O),O=null}),500)},U=()=>{if(w.value)return;const e=JSON.parse(localStorage.getItem(a));e&&(N.value=(e||[]).map((e=>({value:e}))),x.value=!0),O&&clearTimeout(O),t.value=!1},V=async e=>{w.value=e,y(),function(e){try{const t=JSON.parse(localStorage.getItem(a))||[];t.includes(e)||t.unshift(e),localStorage.setItem(a,JSON.stringify(t.slice(0,10)))}catch(t){throw new Error(t)}}(e),console.log("开始搜索",e),await Y(e,1),h(),t.value=!0,x.value=!1};async function Y(e,a){const t=await S(e,a);return(!t.list||t.list.length<=0)&&g("暂无数据"),Number(t.allcount),T.value=t.list||[],q.value=Number(t.allcount)||0,P(t.list||[]),t}return(e,a)=>{const l=i("mars-input"),y=i("mars-icon"),h=i("mars-button"),g=i("a-pagination"),C=i("a-empty"),O=i("mars-pannel");return n(),o(O,{customClass:"query-poi-pannel",top:"100",left:"10"},{default:s((()=>[r("div",z,[r("div",L,[u(l,{placeholder:"搜索 地点",value:w.value,"onUpdate:value":a[0]||(a[0]=e=>w.value=e),class:"input",onBlur:R,onFocus:U,allowClear:"",onInput:a[1]||(a[1]=e=>(async e=>{if(""===e)return U(),void E();if(_(e))return void D(e);t.value=!1;const a=await k(e),l=[];a.list.forEach((e=>{l.every((a=>a.value!==e.name))&&l.push({value:e.name})})),N.value=l,x.value=!0})(w.value))},null,8,["value"]),u(h,{class:"button"},{default:s((()=>[u(y,{icon:"search",width:"20",color:"#fff",onClick:a[2]||(a[2]=e=>V(w.value))})])),_:1})]),x.value?(n(),c("ul",j,[(n(!0),c(p,null,d(N.value,((e,a)=>(n(),c("li",{key:a,class:"search-list__item",onClick:a=>V(e.value)},f(e.value),9,B)))),128))])):v("",!0),t.value?(n(),c("div",A,[T.value&&T.value.length?(n(),c(p,{key:0},[r("ul",null,[(n(!0),c(p,null,d(T.value,((e,a)=>(n(),c("li",{key:a,class:"query-site__item",onClick:m((a=>function(e){const a=e._graphic;if(null===a)return b(e.name+" 无经纬度坐标信息！");G(a,{radius:2e3})}(e)),["stop"])},[r("div",$,[r("p",{class:"query-site-text f-toe",title:e.name},f(a+1)+"、"+f(e.name),9,H),r("p",J,f(e.type),1)]),r("a",{href:"//www.amap.com/detail/"+e.id,target:"_blank",class:"query-site__more"},"更多>>",8,M)],8,F)))),128))]),r("div",W,[r("p",K,"共"+f(q.value)+"条结果",1),u(g,{onChange:a[3]||(a[3]=e=>Y(w.value,e)),size:"small",total:q.value,pageSize:6,simple:!0},null,8,["total"])])],64)):(n(),o(C,{key:1,class:"f-push-10-t"}))])):v("",!0)])])),_:1})}}}),[["__scopeId","data-v-61ee5920"]]);export{R as default};
