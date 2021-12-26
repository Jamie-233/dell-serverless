import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footer}>
            <ul className={style.list}>
                <li className={style.item}>
                    <a className={style.link} href="/admin.html" target="_blank">Dashboard</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;