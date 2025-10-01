import React from 'react';
import style from './index.module.css';
import classNames from 'classnames/bind';
const cls = classNames.bind(style);

export default function A01CssModule() {
    // return <div className={style['bg-pink'] + " " + style['float-left'] + " " + style['wid-half']}>CSS Module</div>;
    return <div className={cls('bg-pink', 'float-left', 'wid-half')}>CSS Module</div>;
}

