import '../css/styles.scss';
import plusimage from '../images/plus.svg';
import austriaimage from '../images/Hallstatt-4.jpg';

// var calculateMonthlyPayment = function (principal, years, rate) {
//     if (rate) {
//         var monthlyRate = rate / 100 / 12;
//     }
//     var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
//     return monthlyPayment;
// };

// document.getElementById('calcBtn').addEventListener('click', function () {
//     var principal = document.getElementById("principal").value;
//     var years = document.getElementById("years").value;
//     var rate = document.getElementById("rate").value;
//     var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
//     document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
// });

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PhotoGallery } from './photogallery';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <div>
            Hello from react es6
        </div>
        <img src={plusimage} width="16px"/>
        <img src={austriaimage} />
      </div>
    );
  }
}

let photoGalleryImages = [{
    url: 'https://filestore.community.support.microsoft.com/api/images/08e70e6f-deb4-4003-9848-96fc8248ab78',
    caption: 'Hallstatt, Austria'
}, {
    url: 'http://www.travellushes.com/wp-content/uploads/2016/07/hallstatt6.jpg',
    caption: 'Another image of Hallstatt'
}]
ReactDOM.render(<PhotoGallery images={photoGalleryImages}/>, document.getElementById('root'));