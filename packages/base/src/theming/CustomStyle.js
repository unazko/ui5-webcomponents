import { reRenderAllUI5Elements } from "../Render.js";
import getSharedResource from "../getSharedResource.js";
import EventProvider from "../EventProvider.js";

const eventProvider = getSharedResource("CustomStyle.eventProvider", new EventProvider());
const CUSTOM_CSS_CHANGE = "CustomCSSChange";

const attachCustomCSSChange = listener => {
	eventProvider.attachEvent(CUSTOM_CSS_CHANGE, listener);
};

const detachCustomCSSChange = listener => {
	eventProvider.detachEvent(CUSTOM_CSS_CHANGE, listener);
};

const fireCustomCSSChange = tag => {
	return eventProvider.fireEvent(CUSTOM_CSS_CHANGE, tag);
};

const customCSSFor = getSharedResource("CustomStyle.customCSSFor", {});

// Listen to the eventProvider, in case other copies of this CustomStyle module fire this
// event, and this copy would therefore need to reRender the ui5 webcomponents; but
// don't reRender if it was this copy that fired the event to begin with.
let skipRerender;
attachCustomCSSChange(tag => {
	if (!skipRerender) {
		reRenderAllUI5Elements({ tag });
	}
});

const addCustomCSS = (tag, css) => {
	if (!customCSSFor[tag]) {
		customCSSFor[tag] = [];
	}
	customCSSFor[tag].push(css);

	skipRerender = true;
	try {
		// The event is fired and the attached event listeners are all called synchronously
		// The skipRerender flag will be used to avoid calling reRenderAllUI5Elements twice when it is this copy
		// of CustomStyle.js which is firing the `CustomCSSChange` event.
		fireCustomCSSChange(tag);
	} finally {
		skipRerender = false;
	}

	return reRenderAllUI5Elements({ tag });
};

const getCustomCSS = tag => {
	return customCSSFor[tag] ? customCSSFor[tag].join("") : "";
};

export {
	addCustomCSS,
	getCustomCSS,
	attachCustomCSSChange,
	detachCustomCSSChange,
};
