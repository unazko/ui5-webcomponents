import{x as r}from"./lit-element.57026f9a.js";import{l}from"./if-defined.08fba587.js";import{o as v}from"./unsafe-html.5df53a7b.js";import{D as k}from"./docs.c0974812.js";import{U as t,L as c}from"./ListItemType.3e96c801.js";import{L as J}from"./ListMode.deaf7bfe.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dd88aaa2.js";import"./iframe.22e03dd9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fd2d0cd6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const V={default:{control:{type:"text"}},header:{control:{type:"text"}},drop:{description:"Fired when an element is dropped inside the drag and drop overlay. <br><br> <b>Note:</b> The <code>drop</code> event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the <code>ui5-upload-collection</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"dataTransfer",type:"DataTransfer",description:"The <code>drop</code> event operation data."}]}},"item-delete":{description:"Fired when the delete button of any item is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The <code>ui5-upload-collection-item</code> which was deleted."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItems",type:"Array",description:"An array of the selected items."}]}}},W={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.7"};var D=Object.freeze,G=Object.defineProperty,s=(e,m)=>D(G(e,"raw",{value:D(m||e.slice())})),$,b,y,T,C;const U="ui5-upload-collection",he={title:"Fiori/UploadCollection",component:U,subcomponents:{UploadCollectionItem:"ui5-upload-collection-item"},parameters:{docs:{page:k({...W,component:U})}},argTypes:V},a=(e,m,z,A,f,g,h,R,K,q,P)=>`<ui5-upload-collection-item file-name="${e}" upload-state="${z}" ${g?`type="${g}"`:""} ${h?`progress="${h}"`:""} ${m?"file-name-clickable":""} ${R?"disable-delete-button=":""} ${K?"hide-delete-button":""} ${q?"hide-retry-button":""} ${P?"hide-terminate-button":""}>
    ${A}
    ${f||""}
</ui5-upload-collection-item>`,p=e=>r`
<ui5-upload-collection
    id="${l(e.id)}"
    mode="${l(e.mode)}"
    no-data-description="${l(e.noDataDescription)}"
    no-data-text="${l(e.noDataText)}"
    ?hide-drag-overlay="${l(e.hideDragOverlay)}"
    accessible-name="${l(e.accessibleName)}"
>
    ${v(e.header)}
    ${v(e.default)}
</ui5-upload-collection>`,u=e=>r($||($=s(["",`

<script>
    var uploadCollection = document.querySelector("ui5-upload-collection");
    uploadCollection.addEventListener("ui5-item-delete", e => {
        uploadCollection.removeChild(e.detail.item);
    });
<\/script>`])),e()),M=e=>r`<style>
    .header {
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .spacer {
        flex: 1 1 auto;
    }

    .header > * {
        margin: 0.25rem;
    }
</style>

${e()}`,j=e=>r(b||(b=s(["",`

<script>
    var uploadCollection = document.querySelector("ui5-upload-collection");
    var fileUploader = document.getElementById("fileUploader");
    var startUploading = document.getElementById("startUploading");

    fileUploader.addEventListener("change", e => {
        var files = e.detail.files;
        for (var i = 0; i < files.length; i++) {
            uploadCollection.appendChild(createUCI(files[i]));
        }
    });

    function createUCI(file) {
        var uci = document.createElement("ui5-upload-collection-item");
        var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

        uci.appendChild(createThumbnail(file.name));
        uci.appendChild(description);
        uci.file = file;
        uci.fileName = file.name;
        return uci;
    }

    function createThumbnail(fileName) {
        var icon = document.createElement("ui5-icon");
        icon.name = "document";
        icon.slot = "thumbnail";
        return icon;
    }

    startUploading.addEventListener("click", e => {
        uploadCollection.items
            .filter(item => item.uploadState === "Ready" && item.file)
            .forEach(item => {
                item.uploadState = "Uploading";

                fetch("/upload", {
                    method: "POST",
                    body: item.file
                }).then(res => {
                    item.uploadState = res.status === 200 ? "Complete" : "Error";
                });
            });
    });
<\/script>`])),e()),i=p.bind({});i.args={mode:J.Delete,id:"uploadCollection",accessibleName:"Uploaded (2)",header:`<div slot="header" class="header">
    <ui5-title>Uploaded (2)</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`,default:`${a("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${a("Notes.txt",!1,t.Complete,"Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};i.parameters={docs:{story:{iframeHeight:"500px"}}};i.decorators=[M,j,u];const Q=e=>r(y||(y=s(["",`

<script>
    var uploadCollection = document.querySelector("ui5-upload-collection");
    uploadCollection.addEventListener("rename", e => {
        alert("Rename event: " + e.target.fileName);
    });
<\/script>`])),e()),d=p.bind({});d.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments (2)</ui5-title>
</div>`,default:`${a("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Detail)}
${a("Notes.txt",!1,t.Complete,"Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Detail)}`};d.decorators=[Q,u];const X=e=>r(T||(T=s(["",`

<script>
    var uploadCollection = document.querySelector("ui5-upload-collection");
    uploadCollection.addEventListener("retry", e => {
        alert("Retry uploading: " + e.target.fileName);
    });
    uploadCollection.addEventListener("terminate", e => {
        alert("Terminate uploading of: " + e.target.fileName);
    });
<\/script>`])),e()),n=p.bind({});n.args={header:`<div class="header" slot="header">
    <ui5-title>Upload States</ui5-title>
</div>`,default:`
${a("LaptopHT-1000.jpg",!1,t.Complete,'uploadState="Complete"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${a("Laptop.jpg",!1,t.Uploading,'uploadState="Uploading"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Active,"37")}
${a("latest-reports.pdf",!1,t.Error,'uploadState="Error"','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Active,"59")}
${a("Notes.txt",!1,t.Ready,'uploadState="Ready" (default)','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};n.parameters={docs:{story:{iframeHeight:"400px"}}};n.decorators=[X,u];const Y=e=>r(C||(C=s(["",`

<script>
    var uploadCollection = document.querySelector("ui5-upload-collection");
    uploadCollection.addEventListener("drop", e => {
        e.preventDefault();

        var files = e.dataTransfer.files;
        // Take the files from the drop event and create <ui5-upload-collection-item> from them
        for (var i = 0; i < files.length; i++) {
            uploadCollection.appendChild(createUCI(files[i]));
        }
    });

    function createUCI(file) {
        var uci = document.createElement("ui5-upload-collection-item");
        var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

        uci.appendChild(createThumbnail(file.name));
        uci.appendChild(description);
        uci.file = file;
        uci.fileName = file.name;
        return uci;
    }

    function createThumbnail(fileName) {
        var icon = document.createElement("ui5-icon");
        icon.name = "document";
        icon.slot = "thumbnail";
        return icon;
    }
<\/script>`])),e()),o=p.bind({});o.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`};o.parameters={docs:{story:{iframeHeight:"500px"}}};o.decorators=[M,j,Y,u];var x,S,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(L=(S=i.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var H,E,N;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var B,w,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,_,F;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const ve=["WithHeader","RenamingFiles","VariousUploadStates","DragAndDrop"];export{o as DragAndDrop,d as RenamingFiles,n as VariousUploadStates,i as WithHeader,ve as __namedExportsOrder,he as default};
//# sourceMappingURL=UploadCollection.stories.8a1daa97.js.map
