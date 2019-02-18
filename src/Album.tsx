import React, { Component } from 'react';
import './Album.css';
import Rating from './Rating';

export interface Album {
    title: string;
    artists: Array<string>;
    coverUrl: string,
    rating: Rating,
    reviews: Array<string>
}

export interface Props {
    album: Album,
}

const App: React.SFC<Props> = (props) => {
    return (
        <div>
            <h1>{props.album.title}</h1>
            <h2>{props.album.artists.join(' - ')}</h2>
            <img src={props.album.coverUrl} />
        </div>
    );
}

export default App;
