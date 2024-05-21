document.addEventListener("DOMContentLoaded",function(z){var I=document.getElementById("menu-btn"),r=!1,m=document.getElementById("side-nav"),s=document.getElementById("main-content"),x=window["sap-ui-webcomponents-bundle"].configuration,u="ui5-content-density-compact",v=x.getTheme(),g="sap_horizon_hcb",f="sap_fiori_3",p="sap_fiori_3_dark",l=document.getElementById("btnRTL"),C=document.getElementById("btnCompact"),y=document.getElementById("btnTheme"),E=document.getElementById("btnLightDark");function b(e){e?A():w()}function A(){m.style.width="14rem",s.style.marginLeft="14rem"}function w(){m.style.width="0",s.style.marginLeft="0"}function B(e,t,n){var d=window.location.href,o=".html?sap-ui-theme="+n+"&sap-ui-rtl="+!!t;return d.slice(0,d.indexOf(".html"))+o}y.pressed=v===g,E.pressed=v===p,l.addEventListener("click",function(e){e.target.pressed?document.body.setAttribute("dir","rtl"):document.body.removeAttribute("dir"),window["sap-ui-webcomponents-bundle"].applyDirection()},!1),C.addEventListener("click",function(e){if(document.body.className.includes(u))return document.body.className="";document.body.className+=u},!1),y.addEventListener("click",function(e){var t=e.target.pressed?g:f;window.location.href=B(e.target.pressed,l.pressed,t)},!1),E.addEventListener("click",function(e){var t=e.target.pressed?p:f;window.location.href=B(e.target.pressed,l.pressed,t)},!1),I.addEventListener("click",function(e){b(e.detail.pressed)});var c=document.getElementById("hello-popover"),k=document.getElementById("openPopoverButton"),D=document.getElementById("closePopoverButton");k.addEventListener("click",function(){c.opener=k,c.open=!0}),D.addEventListener("click",function(){c.open=!1});var L=document.getElementById("hello-dialog"),h=document.getElementById("hello-dialog2"),_=document.getElementById("openDialogButton"),O=document.getElementById("openDialogStretched"),S=document.getElementById("closeDialogButton"),T=document.getElementById("closeDialogStretched");_.addEventListener("click",function(){L.open=!0}),O.addEventListener("click",function(){h.open=!0}),S.addEventListener("click",function(){L.open=!1}),T.addEventListener("click",function(){h.open=!1});var i=document.getElementById("myList"),N=document.getElementById("button1"),R=[{id:"ar",name:"Argentina"},{id:"bg",name:"Bulgaria"},{id:"ch",name:"China"}],M=function(){for(;i.firstChild;)i.removeChild(i.firstChild)},U=function(t){var n;t.forEach(function(d){n=document.createElement("ui5-li"),n.id=d.id,n.textContent=d.name,i.appendChild(n)})},F=function(){r&&(r=!1,M(),U(R))};i.addEventListener("itemDelete",function(e){var t=e.detail.item;i.items.forEach(function(n){n===t&&i.removeChild(n)}),r=!0}),N.addEventListener("click",F);var P=[{key:"Afg",text:"Anna"},{key:"Arg",text:"Anelia"},{key:"Alex",text:"Ally"},{key:"Arm",text:"Boris"},{key:"Alg",text:"Borg"},{key:"And",text:"Cindy"},{key:"Ang",text:"Sara"},{key:"Ast",text:"Sally"},{key:"Aus",text:"Daniel"},{key:"Aze",text:"Don"},{key:"Aruba",text:"Ema"},{key:"Antigua",text:"Fred"},{key:"Bel",text:"John"},{key:"Bel",text:"Jonathan"},{key:"Bg",text:"Zack"},{key:"Bra",text:"Zara"},{key:"Bra",text:"Wolly"},{key:"Bra",text:"Will"},{key:"Bra",text:"Quentin"}],a=document.getElementById("user");a.addEventListener("input",function(e){var t=e.target.value,n=[];t&&(n=P.filter(function(d){return d.text.toUpperCase().indexOf(t.toUpperCase())===0})),[].slice.call(a.children).forEach(function(d){d.id!=="user-icon"&&a.removeChild(d)}),n.forEach(function(d){var o=document.createElement("ui5-li");o.type="Active",o.id=d.key,o.textContent=d.text,a.appendChild(o)})}),document.getElementById("tree").addEventListener("itemClick",function(e){console.log("Item clicked: ",e.detail.item)}),document.getElementById("tree").addEventListener("itemToggle",function(e){console.log("Item toggled: ",e.detail.item)}),document.getElementById("tree").addEventListener("itemDelete",function(e){console.log("Item delete button pressed: ",e.detail.item);var t=e.detail.item;t.parentElement.removeChild(t)}),document.getElementById("tree").addEventListener("selectionChange",function(e){console.log("Selection changed from: ",e.detail.previouslySelectedItems,"to: ",e.detail.selectedItems)}),document.getElementById("modeSelect").addEventListener("change",function(e){var t=e.detail.selectedOption.textContent,n=document.getElementById("tree");n.mode=t}),document.getElementById("expandAll").addEventListener("click",function(e){Array.prototype.slice.call(document.getElementsByTagName("ui5-tree"));var t=document.getElementById("tree");t.walk(function(n){n.expanded=!0})}),document.getElementById("collapseAll").addEventListener("click",function(e){var t=document.getElementById("tree");t.walk(function(n){n.expanded=!1})}),document.getElementById("expandLevel1").addEventListener("click",function(e){var t=document.getElementById("tree");t.walk(function(n,d){n.expanded=d===1})}),document.getElementById("expandLevel2").addEventListener("click",function(e){var t=document.getElementById("tree");t.walk(function(n,d){n.expanded=d<=2})})});