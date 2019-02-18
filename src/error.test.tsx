import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Error, {Props as ErrorProps} from './error';

Enzyme.configure({ adapter: new Adapter() });

describe("Error active", () => {
    let wrapper = null;
    let onClickMock = null;
    beforeEach(() => {
        onClickMock = jest.fn();
        wrapper = shallow(
            <Error 
                active={true} 
                onClick={onClickMock}/>
        );
    });

    it ('has className open-error', () => {
        expect(
            wrapper.containsMatchingElement(
                <div className='open-error'/>
            )).
            toBe(true);
    });

    it ('redirects onClick to props', () => {
        expect(onClickMock.mock.calls.length).toBe(0);
        wrapper.simulate('click');
        expect(onClickMock.mock.calls.length).toBe(1);
    });
})

describe("Error inactive", () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(
            <Error active={false} />
        );
    });

    it ('has className error', () => {
        expect(
            wrapper.containsMatchingElement(
                <div className='error'/>
            )).
            toBe(true);
    });
    
    it ('has maxHeight', () => {
        expect(
            wrapper.containsMatchingElement(
                <div style={{maxHeight: "40px"}}/>
            )).
            toBe(true);
    });    
})
