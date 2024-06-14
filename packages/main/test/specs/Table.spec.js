import { assert } from "chai";

const ROLE_COLUMN_HEADER = "columnheader";

describe("Table - Popin Mode", async () => {
	before(async () => {
		await browser.url(`test/pages/TablePopin.html`);
	});

	it("no pop-in with 'optimal' table width", async () => {
		let table = await browser.$("#table0");
		assert.ok(table.isExisting(), "Table exists");

		assert.strictEqual(await table.getSize("width"), 850, "Table is 850px wide");

		const headerRow = await table.$("ui5-table-header-row");
		const headerCells = await headerRow.$$("ui5-table-header-cell");
		assert.equal(headerCells.length, 4, "4 columns exist");

		for (const [index, headerCell] of headerCells.entries()) {
			assert.strictEqual(await headerCell.getAttribute("role"), ROLE_COLUMN_HEADER, "Correct role is applied");
			assert.ok(await headerRow.shadow$(`slot[name=default-${index + 1}]`).isExisting(), `Header cell ${index + 1} has been rendered`);
		}
	});

	it("test with one by one popping in", async() => {
		let table = await browser.$("#table0");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const headerCells = await headerRow.$$("ui5-table-header-cell");

		const testWidths = [
			{width: 850, poppedIn: []},
			{width: 700, poppedIn: ["colD"]},
			{width: 500, poppedIn: ["colD", "colC"]},
			{width: 300, poppedIn: ["colD", "colC", "colB"]},
			{width: 150, poppedIn: ["colD", "colC", "colB"]}
		];

		for (const testWidth of testWidths) {
			await table.setProperty("style", `width: ${testWidth.width}px`);
			assert.strictEqual(await table.getSize("width"), testWidth.width, `Table is ${testWidth.width} wide`);

			for (const headerCell of headerCells) {
				const headerRole = await headerCell.getAttribute("role");
				const headerId = await headerCell.getAttribute("id");
				const slotName = await headerCell.getAttribute("slot");

				let expectRole = true;
				if (testWidth.poppedIn.includes(headerId)) {
					expectRole = false;
				}

				assert.strictEqual(headerRole === ROLE_COLUMN_HEADER, expectRole, `Cell has role (width: ${testWidth.width}): (${expectRole})`)
				assert.strictEqual(await headerRow.shadow$(`slot[name=${slotName}]`).isExisting(), expectRole, `Header cell ${slotName} has been rendered (width: ${testWidth.width}): ${expectRole}`);
			}
		}
	});

	it("test with one by one popping out", async () => {
		let table = await browser.$("#table0");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const headerCells = await headerRow.$$("ui5-table-header-cell");

		const testWidths = [
			{width: 150, poppedIn: ["colD", "colC", "colB"]},
			{width: 300, poppedIn: ["colD", "colC", "colB"]},
			{width: 500, poppedIn: ["colD", "colC"]},
			{width: 700, poppedIn: ["colD"]},
			{width: 850, poppedIn: []},
		];

		for (const testWidth of testWidths) {
			await table.setProperty("style", `width: ${testWidth.width}px`);
			assert.strictEqual(await table.getSize("width"), testWidth.width, `Table is ${testWidth.width} wide`);

			for (const headerCell of headerCells) {
				const headerRole = await headerCell.getAttribute("role");
				const headerId = await headerCell.getAttribute("id");
				const slotName = await headerCell.getAttribute("slot");

				let expectRole = true;
				if (testWidth.poppedIn.includes(headerId)) {
					expectRole = false;
				}

				assert.strictEqual(headerRole === ROLE_COLUMN_HEADER, expectRole, `Cell has role (width: ${testWidth.width}): (${expectRole})`)
				assert.strictEqual(await headerRow.shadow$(`slot[name=${slotName}]`).isExisting(), expectRole, `Header cell ${slotName} has been rendered (width: ${testWidth.width}): ${expectRole}`);
			}
		}
	});

	it("test with random widths", async () => {
		let table = await browser.$("#table0");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const headerCells = await headerRow.$$("ui5-table-header-cell");

		const expectedStates = [
			{width: 500, poppedIn: ["colD", "colC", "colB"]},
			{width: 700, poppedIn: ["colD", "colC"]},
			{width: 850, poppedIn: ["colD"]},
			{width: Infinity, poppedIn: []}
		];

		const runs = 10;
		for (let i = 0; i < runs; i++) {
			const randomWidth = Math.floor(Math.random() * 1000) + 1;
			await table.setProperty("style", `width: ${randomWidth}px`);

			const tableSize = await table.getSize("width");
			assert.strictEqual(tableSize, randomWidth, `Table is ${randomWidth} wide`);

			const expectedState = expectedStates.find(state => tableSize < state.width);
			for (const headerCell of headerCells) {
				const headerRole = await headerCell.getAttribute("role");
				const headerId = await headerCell.getAttribute("id");
				const slotName = await headerCell.getAttribute("slot");

				let expectRole = true;
				if (expectedState.poppedIn.includes(headerId)) {
					expectRole = false;
				}

				assert.strictEqual(headerRole === ROLE_COLUMN_HEADER, expectRole, `Cell ${headerId} has role (width: ${tableSize}): (${expectRole})`)
				assert.strictEqual(await headerRow.shadow$(`slot[name=${slotName}]`).isExisting(), expectRole, `Header cell ${slotName} has been rendered (width: ${tableSize}): ${expectRole}`);
			}
		}
	});
});

// Tests for the fixed header, whether it is shown correctly and behaves as expected
describe("Table - Fixed Header", async () => {
	before(async () => {
		await browser.url(`test/pages/TableFixedHeader.html`);
	});

	// Test case, check whether the header is fixed when scrolling
	it("fixed header with wrapping container that has scrolling", async () => {
		const table = await browser.$("#table0");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const stickyProperty = await headerRow.getCSSProperty("position");
		const topProperty = await headerRow.getCSSProperty("top");

		assert.strictEqual(stickyProperty.value, "sticky", "Header CSS is sticky");
		assert.strictEqual(topProperty.value, "50px", "Header is 50px from the top");

		const lastRow = await browser.$("#row-21");
		await lastRow.scrollIntoView();

		const headerYPosition = await headerRow.getLocation("y");
		assert.isAbove(headerYPosition, 50, "Header is above the viewport and above the toolbar");
		assert.ok(headerRow.isDisplayedInViewport(), "Header is displayed in the viewport");
	});

	it("fixed header with table being scrollable", async () => {
		const table = await browser.$("#table1");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const stickyProperty = await headerRow.getCSSProperty("position");
		const topProperty = await headerRow.getCSSProperty("top");

		assert.strictEqual(stickyProperty.value, "sticky", "Header CSS is sticky");
		assert.strictEqual(topProperty.value, "0px", "Header is 0 from the top");

		const lastRow = await browser.$("#row-21-1");
		await lastRow.scrollIntoView();

		const headerYPosition = await headerRow.getLocation("y");
		assert.isAbove(headerYPosition, 300, "Header is above the viewport and above the toolbar");
		assert.ok(headerRow.isDisplayedInViewport(), "Header is displayed in the viewport");
	});

	it("fixed header with body being the scroll container", async() => {
		const table = await browser.$("#table2");
		assert.ok(table.isExisting(), "Table exists");

		const headerRow = await table.$("ui5-table-header-row");
		const stickyProperty = await headerRow.getCSSProperty("position");
		const topProperty = await headerRow.getCSSProperty("top");

		assert.strictEqual(stickyProperty.value, "sticky", "Header CSS is sticky");
		assert.strictEqual(topProperty.value, "50px", "Header is 50px from the top");

		const lastRow = await browser.$("#row-100-2");
		await lastRow.scrollIntoView();

		const headerYPosition = await headerRow.getLocation("y");
		assert.isAbove(headerYPosition, 50, "Header is above the viewport and above the toolbar");
		assert.ok(headerRow.isDisplayedInViewport(), "Header is displayed in the viewport");
	});
});