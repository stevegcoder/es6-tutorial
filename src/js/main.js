import '../css/styles.scss';
import plusimage from '../images/plus.svg';
import austriaimage from '../images/Hallstatt-4.jpg';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PhotoGallery } from './photogallery';

let photoGalleryImages = [{
    url: 'https://filestore.community.support.microsoft.com/api/images/08e70e6f-deb4-4003-9848-96fc8248ab78',
    caption: 'Hallstatt, Austria'
}, {
    url: 'http://www.travellushes.com/wp-content/uploads/2016/07/hallstatt6.jpg',
    caption: 'Another image of Hallstatt'
}, {
    url: 'invalidurl',
    caption: 'Invalid Url'
}, {
    url: 'https://ap.rdcpix.com/727043908/29bfda1daf4b0b2354218bd59273dc9cl-m0xd-w1020_h770_q80.jpg',
    caption: 'Beachfront home with very long description that can span over one line and may mess up styling but only if the css styles are not handled correctly'
}]

ReactDOM.render(<PhotoGallery images={photoGalleryImages}/>, document.getElementById('root'));