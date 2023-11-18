import React from "react";
import style from './main.module.css';
import { CgChevronDown, CgSearch } from "react-icons/cg";
import img from '../img/main.png';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <h3 className={style.tm}>TRAVEL MAP</h3>
                <div className={style.navTrip}>
                    <h3>All</h3>
                </div>
                <div className={style.navTrip}>
                    <h3>국내 여행</h3>
                    <CgChevronDown className={style.icon} />
                </div>
                <div className={style.navTrip}>
                    <h3>해외 여행</h3>
                    <CgChevronDown className={style.icon} />
                </div>
                <div className={style.leftNav}>
                    <div className={style.serachC}>
                        <CgSearch className={style.icon} />
                        <h3>Search</h3>
                    </div>
                    <Link to="/sign">
                    <button className={style.loginB}>login</button>
                </Link>
                </div>
            </div>
            <img src={img} className={style.mainimg} />
            <div className={style.buttonList}>
                    <button>기록하기</button>
                <button>See how it Works</button>
            </div>
        </div>
    );
};

export default Main;