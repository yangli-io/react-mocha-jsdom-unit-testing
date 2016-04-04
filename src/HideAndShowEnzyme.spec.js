import React from 'react';
import { findDOMNode } from 'react-dom';
import HideAndShow from './HideAndShow';
import { mount } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

describe('HideAndShowEnzyme', () => {
	it('should show child components when hide=false', () => {
		const renderedComponent = mount(
			<HideAndShow hide={false}>
				<p>This should show</p>
			</HideAndShow>);
		
		const findParagraph = renderedComponent.find('p');
		expect(findParagraph.text()).to.equal('This should show');
	});

	it('should not show child components when hide=true', () => {
		const renderedComponent = mount(
			<HideAndShow hide={true}>
				<p>This should show</p>
			</HideAndShow>);

		expect(renderedComponent.html()).to.equal(null);
	});
});