import{x as e}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{D as g}from"./docs-65fd78d9.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-2a6467c7.js";import"./index-6397ff69.js";import"./iframe-e61154d2.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-09d86f83.js";import"./client-fb0f3103.js";const y={type:{control:"select",options:["Group","Individual"]},hiddenItems:{control:{type:!1}},colorScheme:{control:{type:!1}},default:{control:{type:"text"},table:{type:{summary:"Array<IAvatar>"}}},overflowButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}},click:{description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"targetRef",_ui5privacy:"public",description:"The DOM ref of the clicked item."},{type:{text:"boolean"},name:"overflowButtonClicked",_ui5privacy:"public",description:"indicates if the overflow button is clicked"}]}}},h={package:"@ui5/webcomponents",since:"1.0.0-rc.11"};var v=Object.freeze,f=Object.defineProperty,M=(a,n)=>v(f(a,"raw",{value:v(n||a.slice())})),l;let r=0;const _=()=>(r++,e(l||(l=M(['<div class="group-',`">
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
    </div> `])),r,r));var p=Object.freeze,z=Object.defineProperty,A=(a,n)=>p(z(a,"raw",{value:p(n||a.slice())})),u;let i=0;const w=()=>(i++,e(u||(u=A(['<div class="individual-',`">
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
    </div> `])),i,i)),x=()=>e` (ui5-avatar-group type="Individual"; ui5-avatar size="S"):
<ui5-avatar-group type="Individual">
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

(ui5-avatar-group type="Individual"; ui5-avatar size="M"):
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

(ui5-avatar-group type="Group"; ui5-avatar size="L"):
<ui5-avatar-group>
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
</ui5-avatar-group>

<br />

(ui5-avatar-group type="Group"; ui5-avatar size="XL"):
<ui5-avatar-group>
<ui5-avatar size="XL">
    <img
        src="../assets/images/avatars/man_avatar_1.png"
        alt="Man Avatar 1"
    />
</ui5-avatar>
<ui5-avatar size="XL" initials="JD"></ui5-avatar>
<ui5-avatar size="XL">
    <img
        src="../assets/images/avatars/woman_avatar_5.png"
        alt="Woman Avatar 5"
    />
</ui5-avatar>
<ui5-avatar size="XL">
    <img
        src="../assets/images/avatars/man_avatar_3.png"
        alt="Man Avatar 3"
    />
</ui5-avatar>
</ui5-avatar-group>`,S="ui5-avatar-group",O={title:"Main/AvatarGroup",component:"AvatarGroup",argTypes:y,parameters:{docs:{page:g({...h,component:S})}}},P=a=>e`<ui5-avatar-group
    .type="${o(a.type)}"
    .aria-haspopup="${o(a.ariaHaspopup)}"
  >
    ${s(a.default)}
    ${s(a.overflowButton)}
  </ui5-avatar-group> `,t=P.bind({});t.storyName="Basic";t.args={default:`
    <ui5-avatar-group>
      <ui5-avatar size="S">
          <img src="../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1" />
      </ui5-avatar>
      <ui5-avatar size="S" initials="JD"></ui5-avatar>
      <ui5-avatar size="S">
          <img src="../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5" />
      </ui5-avatar>
      <ui5-avatar size="S">
          <img src="../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3" />
      </ui5-avatar>
    </ui5-avatar-group>`};const X=x.bind({}),j=w.bind({}),N=_.bind({});var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-avatar-group\n    .type="${ifDefined(args.type)}"\n    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.overflowButton)}\n  </ui5-avatar-group> `',...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const F=["Basic","TypesAndSizes","TypeIndividualWithPopover","TypeGroupWithPopover"];export{t as Basic,N as TypeGroupWithPopover,j as TypeIndividualWithPopover,X as TypesAndSizes,F as __namedExportsOrder,O as default};
