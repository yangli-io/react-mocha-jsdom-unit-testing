import React from 'react';
import { findDOMNode } from 'react-dom';
import HideAndShow from './HideAndShow';
import TestUtils from 'react-addons-test-utils';

describe('HideAndShow', () => {
	it('should show child components when hide=false', () => {
		const renderedComponent = TestUtils.renderIntoDocument(
			<HideAndShow hide={false}>
				<p>This should show</p>
			</HideAndShow>);

		const findParagraph = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
		expect(findParagraph.textContent).to.equal('This should show');
	});

	it('should not show child components when hide=true', () => {
		const renderedComponent = TestUtils.renderIntoDocument(
			<HideAndShow hide={true}>
				<p>This should show</p>
			</HideAndShow>);

		expect(findDOMNode(renderedComponent)).to.equal(null);
	});
});