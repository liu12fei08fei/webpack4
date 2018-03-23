import React from 'react';
import ReactDOM from 'react-dom';

import main from './main.css';
import car from './img/car.png';
import height from './img/height.jpg';

import 'font-awesome/css/font-awesome.css';

import './css/main.scss';

ReactDOM.render(
    <div>
        <img src={car} alt="图片" />
        <span className="fa fa-car">Hello React!</span>
        <div className={main.font}>font</div>
        <div className={main.red}>red</div>
        <div className={main.blue}>blue</div>
        <div className='ot'>pink</div>
        <img src={height} alt="图片" />
    </div>,
    document.getElementById('root')
)