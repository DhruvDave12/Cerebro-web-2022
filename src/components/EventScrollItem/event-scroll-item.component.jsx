import React from 'react'

import './event-scroll-item.styles.scss';

import { default as leftLine } from '../../assets/images/Events/slice-left-line.png';
import { default as rightLine } from '../../assets/images/Events/sliced-right-line.png';
import { default as selectedDot } from '../../assets/images/Events/selected-dot.svg';
import { default as sphere } from '../../assets/images/Events/sphere.svg';

export const EventScrollItem = ({ event, idx, currIdx, visible, loadPage }) => {
    return (

        <div className="item-container">
            {
                idx % 2 === 0 ? <div className="text-dot-container-even">
                    <div className="text">
                        <p className="text-up" style={idx+visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>
                    </div>
                    <div className="line-dot-container">
                        <img src={rightLine} alt="left-line" className='left-line' />
                        <img onClick={() => { loadPage(event, idx + visible) }} id={idx === 6 || (idx === 0 && visible !== 0) ? "disable-on" : ""} src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />
                        <img src={rightLine} alt="right-line" className='right-line' />
                    </div>

                </div> :
                    <div className="text-dot-container-odd">
                        <div className="temp-div">  

                        </div>
                        <div className="line-dot-container">
                            <img src={rightLine} alt="left-line" className='left-line' />
                            <img onClick={() => { loadPage(event, idx + visible) }} id={idx === 6 || (idx === 0 && visible !== 0) ? "disable-on" : ""} src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />
                            <img src={rightLine} alt="right-line" className='right-line' />
                        </div>
                        <div className="text">
                            <p className="text-down" style={idx+visible === currIdx ? { textShadow: "0px 0px 4.85399px #FEC600", color: "#FFFCC9" } : { color: "" }}>{event.title}</p>
                        </div>
                    </div>

                // idx % 2 === 0 ? 
                // <div className="text-dot-container-even">
                //     <img src={leftLine} alt="left-line" className='left-line'/>
                //     <div className="text-dot">
                //         <div className="text"> <p className='text-up'>{event.title}</p></div>
                //         <img onClick={() => { loadPage(event, idx + visible) }} id={idx === 6 || (idx === 0 && visible !== 0) ? "disable-on" : ""} src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />       
                //     </div>
                //     <img src={rightLine} alt="right-line" className='right-line'/>
                // </div>
                // :
                // <div className="text-dot-container-odd">
                //     <img src={leftLine} alt="left-line" className='left-line'/>
                //     <div className="text-dot">
                //         <img onClick={() => { loadPage(event, idx + visible) }} id={idx === 6 || (idx === 0 && visible !== 0) ? "disable-on" : ""} src={idx + visible === currIdx ? selectedDot : sphere} alt="small-sphere" className="sphere" />       
                //         <div className="text"> <p className='text-down'>{event.title}</p></div>
                //     </div>
                //     <img src={rightLine} alt="right-line" className='right-line'/>
                // </div>
            }

        </div>

    )
}
