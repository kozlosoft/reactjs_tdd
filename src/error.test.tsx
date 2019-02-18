import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Error, {Props as ErrorProps} from './error';

Enzyme.configure({ adapter: new Adapter() });

describe("Error", () => {
    // todo vars here

    it ('has className open-error if active', () => {
        const wrapper = shallow(
            <Error active={true} />
        );
        expect(
            wrapper.containsMatchingElement(
                <div className='open-error'/>
            )).
            toBe(true);
    });
})
