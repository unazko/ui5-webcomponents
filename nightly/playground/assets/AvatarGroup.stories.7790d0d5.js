import{x as n}from"./lit-element.3a4d34a1.js";import{l as s}from"./if-defined.d89d00ab.js";import{o as v}from"./unsafe-html.3b27b0e6.js";import{A as _}from"./AvatarGroupType.3fe1e7d5.js";import{D as z}from"./docs.51924474.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.be39b920.js";import"./iframe.ef306bc9.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.0dbfee3b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const A={colorScheme:{control:{type:!1}},hiddenItems:{control:{type:!1}},type:{control:"select",options:["Group","Individual"]},default:{control:{type:"text"}},overflowButton:{control:{type:"text"}},click:{description:"Fired when the component is activated either with a click/tap or by using the Enter or Space key.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the clicked item."},{name:"overflowButtonClicked",type:"boolean",description:"indicates if the overflow button is clicked"}]}}},w={package:"@ui5/webcomponents",since:"1.0.0-rc.11"};var l=Object.freeze,x=Object.defineProperty,G=(a,r)=>l(x(a,"raw",{value:l(r||a.slice())})),p;let i=0;const P=()=>(i++,n(p||(p=G(['<div class="group-',`">
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider min="1" max="100" value="60"></ui5-slider>
        <ui5-avatar-group type="Group">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".group-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                function onAvatarGroupClick(targetRef) {
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    let html = "";
                    avatarGroup.items.forEach((avatar, index) => {
                        const avatarColor = avatarGroup.colorScheme[index];
                        html += \`<div class="avatar-slot" style="padding: 5px">
        <ui5-avatar interactive icon="\${avatar.icon}" initials="\${avatar.initials}" color-scheme="\${avatarColor}">\`;
                        if (avatar.image.length > 0) {
                            html += \`<img src="\${avatar.image[0].src}">\`;
                        }
                        html += \`</ui5-avatar></div>\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    onAvatarGroupClick(event.detail.targetRef);
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `],['<div class="group-',`">
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider min="1" max="100" value="60"></ui5-slider>
        <ui5-avatar-group type="Group">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".group-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                function onAvatarGroupClick(targetRef) {
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    let html = "";
                    avatarGroup.items.forEach((avatar, index) => {
                        const avatarColor = avatarGroup.colorScheme[index];
                        html += \\\`<div class="avatar-slot" style="padding: 5px">
        <ui5-avatar interactive icon="\\\${avatar.icon}" initials="\\\${avatar.initials}" color-scheme="\\\${avatarColor}">\\\`;
                        if (avatar.image.length > 0) {
                            html += \\\`<img src="\\\${avatar.image[0].src}">\\\`;
                        }
                        html += \\\`</ui5-avatar></div>\\\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    onAvatarGroupClick(event.detail.targetRef);
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `])),i,i));var u=Object.freeze,S=Object.defineProperty,$=(a,r)=>u(S(a,"raw",{value:u(r||a.slice())})),c;let o=0;const I=()=>(o++,n(c||(c=$(['<div class="individual-',`">
        <ui5-popover
            header-text="Person Card"
            class="personPopover"
            style="width: 300px"
            placement-type="Bottom"
            prevent-focus-restore=""
        >
            <div class="avatar-slot" style="display: inline-block;">
                <ui5-avatar id="popAvatar"></ui5-avatar>
            </div>
            <div class="title-slot" style="display: inline-block;">
                <ui5-title level="H5">John Doe</ui5-title>
                <ui5-title level="H5">Software Developer</ui5-title>
            </div>
        </ui5-popover>
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider
            id="sliderIndividual"
            min="1"
            max="100"
            value="60"
        ></ui5-slider>
        <ui5-avatar-group type="Individual">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".individual-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                const personPopover = section.querySelector(".personPopover");
                const popAvatar = personPopover.querySelector("ui5-avatar");
                function onAvatarClicked(avatarRef) {
                    const avatarIndex = avatarGroup.items.indexOf(avatarRef);
                    popAvatar.colorScheme =
                        avatarGroup.colorScheme[avatarIndex];
                    popAvatar.initials = avatarRef.initials;
                    while (popAvatar.firstChild) {
                        popAvatar.removeChild(popAvatar.firstChild);
                    }
                    for (let i = 0; i < avatarRef.image.length; i++) {
                        popAvatar.appendChild(avatarRef.image[i].cloneNode());
                    }
                    popAvatar.icon = avatarRef.icon;
                    personPopover.showAt(avatarRef);
                }
                function onButtonClicked(targetRef) {
                    const hiddenItems = avatarGroup.hiddenItems;
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    const firstHiddenIndex =
                        avatarGroup.items.length - hiddenItems.length;
                    let html = "";
                    hiddenItems.forEach((avatar, index) => {
                        const color =
                            avatarGroup.colorScheme[firstHiddenIndex + index];
                        html += \`<div class="avatar-slot" style="padding: 5px">
                <ui5-avatar interactive icon="\${avatar.icon}" initials="\${avatar.initials}" color-scheme="\${color}">\`;
                        if (avatar.image.length > 0) {
                            html += \`<img src="\${avatar.image[0].src}">\`;
                        }
                        html += \`</ui5-avatar></div>\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    if (event.detail.overflowButtonClicked) {
                        onButtonClicked(event.detail.targetRef);
                    } else {
                        onAvatarClicked(event.detail.targetRef);
                    }
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `],['<div class="individual-',`">
        <ui5-popover
            header-text="Person Card"
            class="personPopover"
            style="width: 300px"
            placement-type="Bottom"
            prevent-focus-restore=""
        >
            <div class="avatar-slot" style="display: inline-block;">
                <ui5-avatar id="popAvatar"></ui5-avatar>
            </div>
            <div class="title-slot" style="display: inline-block;">
                <ui5-title level="H5">John Doe</ui5-title>
                <ui5-title level="H5">Software Developer</ui5-title>
            </div>
        </ui5-popover>
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider
            id="sliderIndividual"
            min="1"
            max="100"
            value="60"
        ></ui5-slider>
        <ui5-avatar-group type="Individual">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".individual-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                const personPopover = section.querySelector(".personPopover");
                const popAvatar = personPopover.querySelector("ui5-avatar");
                function onAvatarClicked(avatarRef) {
                    const avatarIndex = avatarGroup.items.indexOf(avatarRef);
                    popAvatar.colorScheme =
                        avatarGroup.colorScheme[avatarIndex];
                    popAvatar.initials = avatarRef.initials;
                    while (popAvatar.firstChild) {
                        popAvatar.removeChild(popAvatar.firstChild);
                    }
                    for (let i = 0; i < avatarRef.image.length; i++) {
                        popAvatar.appendChild(avatarRef.image[i].cloneNode());
                    }
                    popAvatar.icon = avatarRef.icon;
                    personPopover.showAt(avatarRef);
                }
                function onButtonClicked(targetRef) {
                    const hiddenItems = avatarGroup.hiddenItems;
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    const firstHiddenIndex =
                        avatarGroup.items.length - hiddenItems.length;
                    let html = "";
                    hiddenItems.forEach((avatar, index) => {
                        const color =
                            avatarGroup.colorScheme[firstHiddenIndex + index];
                        html += \\\`<div class="avatar-slot" style="padding: 5px">
                <ui5-avatar interactive icon="\\\${avatar.icon}" initials="\\\${avatar.initials}" color-scheme="\\\${color}">\\\`;
                        if (avatar.image.length > 0) {
                            html += \\\`<img src="\\\${avatar.image[0].src}">\\\`;
                        }
                        html += \\\`</ui5-avatar></div>\\\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    if (event.detail.overflowButtonClicked) {
                        onButtonClicked(event.detail.targetRef);
                    } else {
                        onAvatarClicked(event.detail.targetRef);
                    }
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `])),o,o)),C=()=>n` <ui5-avatar-group type="Individual">
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="S" initials="JD"></ui5-avatar>
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>
    <br />
    <ui5-avatar-group type="Individual">
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="M" initials="JD"></ui5-avatar>
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>
    <br />
    <ui5-avatar-group type="Group">
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="L" initials="JD"></ui5-avatar>
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>`,D="ui5-avatar-group",K={title:"Main/AvatarGroup",component:"AvatarGroup",argTypes:A,parameters:{docs:{page:z({...w,component:D})}}},M=a=>n`<ui5-avatar-group
    .type="${s(a.type)}"
    .aria-haspopup="${s(a.ariaHaspopup)}"
  >
    ${v(a.default)}
    ${v(a.overflowButton)}
  </ui5-avatar-group> `,e=M.bind({});e.args={default:`
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`};const t=M.bind({});t.args={type:_.Individual,default:`
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`};const Q=I.bind({}),V=P.bind({}),X=C.bind({});var m,d,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-avatar-group\n    .type="${ifDefined(args.type)}"\n    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.overflowButton)}\n  </ui5-avatar-group> `',...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,h,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-avatar-group\n    .type="${ifDefined(args.type)}"\n    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.overflowButton)}\n  </ui5-avatar-group> `',...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Y=["TypeGroup","TypeIndividual","TypeIndividualWithPopover","TypeGroupWithPopover","Sizes"];export{X as Sizes,e as TypeGroup,V as TypeGroupWithPopover,t as TypeIndividual,Q as TypeIndividualWithPopover,Y as __namedExportsOrder,K as default};
//# sourceMappingURL=AvatarGroup.stories.7790d0d5.js.map
