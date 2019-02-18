import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Album, {Props as AlbumProps} from './Album';
import Rating from './Rating';

Enzyme.configure({ adapter: new Adapter() });

describe("Album", () => {
    const album  = {
        title: 'An Album',
        artists: ['Jane', 'Joe'],
        coverUrl: 'album.jpg',
        rating: Rating.NotRated,
        reviews: ['Great', 'Awesome']
    };

    it('displays the title', () => {
        const wrapper = shallow(<Album album={album}/>);
        // expect(wrapper.find('h1').text()).
        //     toEqual(album.title);
        expect(wrapper.contains(album.title)).
            toBe(true);
    });

    it ('displays the artists', () => {
        const wrapper = shallow(<Album album={album}/>);
        expect(wrapper.contains("Jane - Joe")).
            toBe(true);
    });

    it ('displays the album cover', () => {
        const wrapper = shallow(<Album album={album}/>);
        expect(
            wrapper.containsMatchingElement(
                <img src={album.coverUrl}/>
            )).
            toBe(true);
    });
})
