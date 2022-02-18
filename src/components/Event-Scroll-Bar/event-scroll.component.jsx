import React from "react";

import { default as sphere } from '../../assets/images/Events/sphere.svg';
import { default as line } from '../../assets/images/Events/line.svg';
import { default as selectedDot } from '../../assets/images/Events/selected-dot.svg';
import { default as button } from '../../assets/images/Events/button.svg';

import './event-scroll.styles.scss';

const EventScrollBar = ({ visible, loadless6, loadMore6, currIdx, events, loadPage }) => {

    return (
        <>
            <div className="button-cover1">
                <img onClick={loadless6} alt="nav-button-left" className={visible === 0 ? "button1 disable" : "button1"} src={button} />
            </div>


            





            <div className="button-cover2">
                <img onClick={loadMore6} src={button} alt="nav-button-right" className={visible === 15 ? "button2 disable" : "button2"} />
            </div>

        </>
    )
}

export default EventScrollBar;