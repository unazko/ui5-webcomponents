import{x as s}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as t}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-174cd781.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-b9c99c0e.js";import"./iframe-6120bf6d.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-39da60b9.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const m={columnLayout:{control:{type:!1}},endColumnVisible:{control:{type:!1}},layout:{control:"select",options:["EndColumnFullScreen","MidColumnFullScreen","OneColumn","ThreeColumnsEndExpanded","ThreeColumnsMidExpanded","ThreeColumnsMidExpandedEndHidden","ThreeColumnsStartExpandedEndHidden","TwoColumnsMidExpanded","TwoColumnsStartExpanded"]},midColumnVisible:{control:{type:!1}},startColumnVisible:{control:{type:!1}},visibleColumns:{control:{type:!1}},endColumn:{control:{type:"text"}},midColumn:{control:{type:"text"}},startColumn:{control:{type:"text"}},"layout-change":{description:"Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.",table:{category:"events"},UI5CustomData:{parameters:[{name:"layout",type:"sap.ui.webc.fiori.types.FCLLayout",description:"The current layout"},{name:"columnLayout",type:"array",description:"The effective column layout, f.e [67%, 33%, 0]"},{name:"startColumnVisible",type:"boolean",description:"Indicates if the start column is currently visible"},{name:"midColumnVisible",type:"boolean",description:"Indicates if the middle column is currently visible"},{name:"endColumnVisible",type:"boolean",description:"Indicates if the end column is currently visible"},{name:"arrowsUsed",type:"boolean",description:"Indicates if the layout is changed via the arrows"},{name:"resize",type:"boolean",description:"Indicates if the layout is changed via resizing"}]}}},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var l=Object.freeze,f=Object.defineProperty,b=(e,u)=>l(f(e,"raw",{value:l(u||e.slice())})),o;const x="ui5-flexible-column-layout",B={title:"Fiori/Flexible Column Layout",component:"FlexibleColumnLayout",parameters:{docs:{page:d({...p,component:x})}},argTypes:m},g=e=>s(o||(o=b([` <style>
      .col {
        height: 100%;
      }
      .colHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.75rem;
        padding: 0.25rem 1rem 0.25rem 1rem;
        background: var(--sapList_Background);
        box-sizing: border-box;
      }
      .colSubHeader {
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      .productInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
      }
    </style>
    <ui5-flexible-column-layout
      id="fcl"
      style="height: 600px;"
      layout=`,`
      ?hide-arrows=`,`
      .accessibility-texts=`,`
      .accessibility-roles=`,`
    >
      `," ",`
      `,`
    </ui5-flexible-column-layout>

    <script>
      let midFullScreen = false;
      let endFullScreen = false;
      let avatars = [
        "camera",
        "laptop",
        "desktop-mobile",
        "responsive",
        "print",
        "iphone",
        "ipad",
      ];
      let avatarsBG = [
        "Accent1",
        "Accent2",
        "Accent3",
        "Accent4",
        "Accent5",
        "Accent6",
        "Accent7",
        "Accent8",
        "Accent9",
        "Accent10",
      ];
      let suppliers = [
        "Titanium",
        "Technocom",
        " Red Point Stores",
        " Very Best Screens",
        "Smartcards",
        "Alpha Printers",
        "Printer for All",
        "Oxynum",
        "Fasttech",
        "Ultrasonic United",
        "Speaker Experts",
        "Brainsoft",
      ];
      function updateProductInfo(item) {
        avatar.icon = avatars[getRandomInt(6)];
        avatar.backgroundColor = avatarsBG[getRandomInt(9) + 1];
        productRating.value = getRandomInt(4) + 1;
        col2title.textContent = item.textContent;
        lblName.innerHTML = "<b>" + item.textContent + "</b>";
        lblDesc.innerHTML = "<b>" + item.description + "</b>";
        lblSupplier.innerHTML = "<b>" + suppliers[getRandomInt(11)] + "</b>";
      }
      function updateDetailInfo(item) {
        col3title.textContent = item.textContent;
      }
      function nextLayout(target) {
        let layout = fcl.layout;
        if (target === "col1") {
          exitFullScreen();
          return "TwoColumnsMidExpanded";
        }
        if (target === "col2") {
          if (midFullScreen) {
            enterFullScreen();
            return "EndColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpanded";
        }
        if (target === "col2close") {
          if (midFullScreen) {
            enterFullScreen();
          } else {
            exitFullScreen();
          }
          return "OneColumn";
        }
        if (target === "col3close") {
          if (fcl.media === "phone") {
            endFullScreen = true;
          }
          if (endFullScreen) {
            enterFullScreen();
            return "MidColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpandedEndHidden";
        }
        if (target === "col2fullscreen") {
          if (!midFullScreen) {
            enterFullScreen();
            return "MidColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpandedEndHidden";
        }
        if (target === "col3fullscreen") {
          if (!endFullScreen) {
            enterFullScreen();
            return "EndColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsEndExpanded";
        }
      }
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      function enterFullScreen() {
        endFullScreen = true;
        midFullScreen = true;
        fullscreenMidColumn.icon = "exit-full-screen";
        fullscreenEndColumn.icon = "exit-full-screen";
      }
      function exitFullScreen() {
        endFullScreen = false;
        midFullScreen = false;
        fullscreenMidColumn.icon = "full-screen";
        fullscreenEndColumn.icon = "full-screen";
      }
      // Event handlers
      col1list.addEventListener("item-click", function (e) {
        updateProductInfo(e.detail.item);
        fcl.layout = nextLayout("col1");
      });
      col2list.addEventListener("item-click", function (e) {
        updateDetailInfo(e.detail.item);
        fcl.layout = nextLayout("col2");
      });
      closeMidColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col2close");
      });
      closeEndColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col3close");
      });
      fullscreenMidColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col2fullscreen");
      });
      fullscreenEndColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col3fullscreen");
      });
    <\/script>`])),i(e.layout),i(e.hideArrows),i(e.accessibilityTexts),i(e.accessibilityRoles),t(e.startColumn),t(e.midColumn),t(e.endColumn)),n=g.bind({});n.args={startColumn:`
      <div class="col" slot="startColumn">
        <ui5-shellbar
          primary-title="Smart Store, New Yorks"
          notifications-count="4"
          show-notifications=""
          show-product-switch=""
          show-co-pilot=""
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
            slot="logo"
          />
          <ui5-shellbar-item
            icon="disconnected"
            text="Disconnect"
          ></ui5-shellbar-item>
          <ui5-shellbar-item
            icon="incoming-call"
            text="Incoming Calls"
          ></ui5-shellbar-item>
        </ui5-shellbar>
        <br /><br />
        <ui5-list id="col1list" header-text="Products (13)" mode="SingleSelect">
          <ui5-li
            description="HT-2001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="47.00 EUR"
            >10 inch Portable DVD</ui5-li
          >
          <ui5-li
            description="HT-2001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="249.00 EUR"
            >7 inch WidescreenPortable DVD Player w MP3</ui5-li
          >
          <ui5-li
            description="HT-1251"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="947.00 EUR"
            >Astro Laptop 1516</ui5-li
          >
          <ui5-li
            description="HT-1251"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="647.00 EUR"
            >Astro Phone 6</ui5-li
          >
          <ui5-li
            description="HT-1252"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="27.99 EUR"
            >Audio/Video Cable Kit - 4m</ui5-li
          >
          <ui5-li
            description="HT-6001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="447.90 EUR"
            >Beam Breaker B-1</ui5-li
          >
          <ui5-li
            description="HT-6001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="647.50 EUR"
            >Beam Breaker B-2</ui5-li
          >
          <ui5-li
            description="HT-6001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="847.80 EUR"
            >Beam Breaker B-3</ui5-li
          >
          <ui5-li
            description="HT-2001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="1,250.00 EUR"
            >Beam Breaker B-4</ui5-li
          >
          <ui5-li
            description="HT-8001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="1,288.00 EUR"
            >Camcorder View</ui5-li
          >
          <ui5-li
            description="HT-2001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="996.00 EUR"
            >Benda Laptop 1408</ui5-li
          >
          <ui5-li
            description="HT-0003"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="147.00 EUR"
            >Cepat Tablet 10.5</ui5-li
          >
          <ui5-li
            description="HT-1001"
            icon="slim-arrow-right"
            icon-end=""
            additional-text="87.90 EUR"
            >Gladiator MX</ui5-li
          >
        </ui5-list>
      </div>`,midColumn:`
      <div class="col" slot="midColumn">
        <div class="colHeader">
          <ui5-title
            id="col2title"
            level="H2"
            style="min-width: 1px;"
          ></ui5-title>
          <div class="colSubHeader">
            <ui5-button design="Emphasized">Edit</ui5-button>
            <ui5-button design="Transparent" icon="add"></ui5-button>
            <ui5-button
              id="fullscreenMidColumn"
              design="Transparent"
              icon="full-screen"
            ></ui5-button>
            <ui5-button
              id="closeMidColumn"
              icon="decline"
              design="Transparent"
            ></ui5-button>
          </div>
        </div>
        <br />
        <section style="padding: 1rem 1rem;">
          <ui5-title level="H3">General Information</ui5-title>
          <br />
          <div
            style="display:flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap"
          >
            <div
              style="display:flex; flex-direction: row; align-items: center;"
            >
              <ui5-avatar
                id="avatar"
                icon="laptop"
                color-scheme="Accent5"
                size="XL"
                style="margin: 0 1rem; min-width: 7rem;"
              >
              </ui5-avatar>
              <div>
                <div class="productInfo">
                  <ui5-title level="H5">Product:</ui5-title>
                  <ui5-title level="H5" id="lblName"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                  <ui5-title level="H5">Description:</ui5-title>
                  <ui5-title level="H5" id="lblDesc"></ui5-title>
                </div>
                <br />
                <div class="productInfo">
                  <ui5-title level="H5">Supplier:</ui5-title>
                  <ui5-title level="H5" id="lblSupplier"
                    ><b>Titanium</b></ui5-title
                  >
                </div>
              </div>
            </div>
            <div class="productInfo" style="align-self: start">
              <ui5-title level="H5">Rating:</ui5-title>
              <ui5-rating-indicator
                id="productRating"
                accessible-name="Hello World"
                value="3.5"
              ></ui5-rating-indicator>
            </div>
            <span></span>
          </div>
          <br /><br /><br />
          <ui5-title level="H3">Suppliers</ui5-title>
          <br />
          <ui5-list id="col2list">
            <ui5-li icon="slim-arrow-right" icon-end="">Titanium</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Technocom</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">
              Red Point Stores</ui5-li
            >
            <ui5-li icon="slim-arrow-right" icon-end="">
              Very Best Screens</ui5-li
            >
            <ui5-li icon="slim-arrow-right" icon-end="">Smartcards</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Alpha Printers</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Printer for All</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Oxynum</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Fasttech</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end=""
              >Ultrasonic United</ui5-li
            >
            <ui5-li icon="slim-arrow-right" icon-end="">Speaker Experts</ui5-li>
            <ui5-li icon="slim-arrow-right" icon-end="">Brainsoft</ui5-li>
          </ui5-list>
        </section>
      </div>`,endColumn:`
      <div class="col" slot="endColumn">
        <div class="colHeader">
          <ui5-title id="col3title" style="min-width: 1px;"></ui5-title>
          <div class="colSubHeader">
            <ui5-button design="Emphasized">Edit</ui5-button>
            <ui5-button design="Transparent" icon="add"></ui5-button>
            <ui5-button
              id="fullscreenEndColumn"
              design="Transparent"
              icon="full-screen"
            ></ui5-button>
            <ui5-button
              id="closeEndColumn"
              icon="decline"
              design="Transparent"
            ></ui5-button>
          </div>
        </div>
        <br /><br />
        <ui5-tabcontainer id="tabContainer1" fixed="" collapsed="">
          <ui5-tab text="Products" additional-text="125"> </ui5-tab>
          <ui5-tab-separator></ui5-tab-separator>
          <ui5-tab
            icon="sap-icon://menu2"
            text="Laptops"
            design="Positive"
            additional-text="25"
          >
          </ui5-tab>
          <ui5-tab
            icon="sap-icon://menu"
            text="Monitors"
            selected=""
            design="Critical"
            additional-text="45"
          >
          </ui5-tab>
          <ui5-tab
            icon="sap-icon://menu2"
            text="Keyboards"
            design="Negative"
            additional-text="15"
          >
          </ui5-tab>
          <ui5-tab
            icon="sap-icon://menu2"
            disabled=""
            text="Disabled"
            design="Negative"
            additional-text="40"
          >
          </ui5-tab>
          <ui5-tab
            icon="sap-icon://menu2"
            text="Neutral"
            design="Neutral"
            additional-text="40"
          >
          </ui5-tab>
          <ui5-tab icon="sap-icon://menu2" text="Default" additional-text="40">
          </ui5-tab>
        </ui5-tabcontainer>
        <section
          style="padding: 1rem 1rem; background: var(--sapList_Background);"
        >
          <p>
            <ui5-title level="H5" wrapping-type="Normal"
              >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ui5-title>
          </p>
          <p>
            <ui5-title level="H5" wrapping-type="Normal"
              >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ui5-title>
          </p>
          <p>
            <ui5-title level="H5" wrapping-type="Normal"
              >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ui5-title>
          </p>
        </section>
      </div>`};n.parameters={docs:{story:{inline:!1,iframeHeight:600}}};var r,a,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\` <style>
      .col {
        height: 100%;
      }
      .colHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.75rem;
        padding: 0.25rem 1rem 0.25rem 1rem;
        background: var(--sapList_Background);
        box-sizing: border-box;
      }
      .colSubHeader {
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      .productInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
      }
    </style>
    <ui5-flexible-column-layout
      id="fcl"
      style="height: 600px;"
      layout=\${ifDefined(args.layout)}
      ?hide-arrows=\${ifDefined(args.hideArrows)}
      .accessibility-texts=\${ifDefined(args.accessibilityTexts)}
      .accessibility-roles=\${ifDefined(args.accessibilityRoles)}
    >
      \${unsafeHTML(args.startColumn)} \${unsafeHTML(args.midColumn)}
      \${unsafeHTML(args.endColumn)}
    </ui5-flexible-column-layout>

    <script>
      let midFullScreen = false;
      let endFullScreen = false;
      let avatars = [
        "camera",
        "laptop",
        "desktop-mobile",
        "responsive",
        "print",
        "iphone",
        "ipad",
      ];
      let avatarsBG = [
        "Accent1",
        "Accent2",
        "Accent3",
        "Accent4",
        "Accent5",
        "Accent6",
        "Accent7",
        "Accent8",
        "Accent9",
        "Accent10",
      ];
      let suppliers = [
        "Titanium",
        "Technocom",
        " Red Point Stores",
        " Very Best Screens",
        "Smartcards",
        "Alpha Printers",
        "Printer for All",
        "Oxynum",
        "Fasttech",
        "Ultrasonic United",
        "Speaker Experts",
        "Brainsoft",
      ];
      function updateProductInfo(item) {
        avatar.icon = avatars[getRandomInt(6)];
        avatar.backgroundColor = avatarsBG[getRandomInt(9) + 1];
        productRating.value = getRandomInt(4) + 1;
        col2title.textContent = item.textContent;
        lblName.innerHTML = "<b>" + item.textContent + "</b>";
        lblDesc.innerHTML = "<b>" + item.description + "</b>";
        lblSupplier.innerHTML = "<b>" + suppliers[getRandomInt(11)] + "</b>";
      }
      function updateDetailInfo(item) {
        col3title.textContent = item.textContent;
      }
      function nextLayout(target) {
        let layout = fcl.layout;
        if (target === "col1") {
          exitFullScreen();
          return "TwoColumnsMidExpanded";
        }
        if (target === "col2") {
          if (midFullScreen) {
            enterFullScreen();
            return "EndColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpanded";
        }
        if (target === "col2close") {
          if (midFullScreen) {
            enterFullScreen();
          } else {
            exitFullScreen();
          }
          return "OneColumn";
        }
        if (target === "col3close") {
          if (fcl.media === "phone") {
            endFullScreen = true;
          }
          if (endFullScreen) {
            enterFullScreen();
            return "MidColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpandedEndHidden";
        }
        if (target === "col2fullscreen") {
          if (!midFullScreen) {
            enterFullScreen();
            return "MidColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsMidExpandedEndHidden";
        }
        if (target === "col3fullscreen") {
          if (!endFullScreen) {
            enterFullScreen();
            return "EndColumnFullScreen";
          }
          exitFullScreen();
          return "ThreeColumnsEndExpanded";
        }
      }
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      function enterFullScreen() {
        endFullScreen = true;
        midFullScreen = true;
        fullscreenMidColumn.icon = "exit-full-screen";
        fullscreenEndColumn.icon = "exit-full-screen";
      }
      function exitFullScreen() {
        endFullScreen = false;
        midFullScreen = false;
        fullscreenMidColumn.icon = "full-screen";
        fullscreenEndColumn.icon = "full-screen";
      }
      // Event handlers
      col1list.addEventListener("item-click", function (e) {
        updateProductInfo(e.detail.item);
        fcl.layout = nextLayout("col1");
      });
      col2list.addEventListener("item-click", function (e) {
        updateDetailInfo(e.detail.item);
        fcl.layout = nextLayout("col2");
      });
      closeMidColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col2close");
      });
      closeEndColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col3close");
      });
      fullscreenMidColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col2fullscreen");
      });
      fullscreenEndColumn.addEventListener("click", function (e) {
        fcl.layout = nextLayout("col3fullscreen");
      });
    <\/script>\`;
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const P=["Basic"];export{n as Basic,P as __namedExportsOrder,B as default};
//# sourceMappingURL=FlexibleColumnLayout.stories-12fb48b7.js.map
