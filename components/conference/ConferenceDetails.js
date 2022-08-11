/* eslint-disable @next/next/no-img-element */

// External Imports
import { useEffect } from 'react';

// Internal Imports
import SectionHeading from "../utils/SectionHeading";
import Speakers from './Speakers';
import Organizers from './Organizers';
import Locations from './Locations';
import Sponsors from './Sponsors';
import Schedules from './Schedules';

const ConferenceDetails = ({ conference }) => {

    const { name, slogan, organizers, speakers, locations, schedules, sponsors } = conference;

    useEffect(() => {

        // tabs-wrapper
        const tabWrappers = document.querySelectorAll('.tabs-wrapper');
        if (tabWrappers.length) {

            // for scoped
            tabWrappers.forEach((tabWrapper) => {
                const tabLabels = tabWrapper.querySelectorAll(".tab-nav .tab-nav-item");
                const tabPanes = tabWrapper.querySelectorAll(".tab-pane-wrapper .tab-pane");

                if (tabLabels.length) {
                    tabLabels.forEach(item => {
                        item.addEventListener('click', function () {

                            // menu item 
                            tabLabels.forEach(lableItem => {
                                lableItem.classList.remove('active');
                            })

                            // tab pane item 
                            tabPanes.forEach(paneItem => {
                                paneItem.classList.remove('active');
                            })
                            // matching by data-tab-id and pass active class
                            const valueMatchingTab = this.getAttribute('data-tab-id');
                            const getMatchingTab = tabWrapper.querySelectorAll(`[data-tab-id="${valueMatchingTab}"]`)
                            getMatchingTab.forEach(ele => ele.classList.add('active'))

                        })
                    })
                }
            })
        }
    }, [])

    return (
        <div className="md:pt-[125px] md:pb-[100px] p-[60px_0_40px]">
            <div className="container">
                <div className="relative -mx-4">
                    <div className="w-full px-4">
                        <SectionHeading
                            title={name}
                            description={slogan}
                        />
                    </div>
                </div>
                <div className="relative -mx-4">
                    <div className="w-full px-4">
                        <div className="tabs-wrapper tabs-wrapper-style-1 dir-horizontal">

                            <div className="tabs-nav-wrap">
                                <ul className="tab-nav">
                                    <li className="tab-nav-item" data-tab-id="0">
                                        <span className="tabs-icon">
                                            <img src="/images/icons/icon-4.svg" alt="icon-4" />
                                        </span>
                                        <span className="tabs-text">Organizers</span>
                                    </li>
                                    <li className="tab-nav-item active" data-tab-id="1">
                                        <span className="tabs-icon">
                                            <img src="/images/icons/icon-4.svg" alt="icon-4" />
                                        </span>
                                        <span className="tabs-text">Speakers</span>
                                    </li>
                                    <li className="tab-nav-item" data-tab-id="2">
                                        <span className="tabs-icon">
                                            <img src="/images/icons/icon-4.svg" alt="icon-4" />
                                        </span>
                                        <span className="tabs-text">Locations</span>
                                    </li>
                                    <li className="tab-nav-item" data-tab-id="3">
                                        <span className="tabs-icon">
                                            <img src="/images/icons/icon-4.svg" alt="icon-4" />
                                        </span>
                                        <span className="tabs-text">Schedules</span>
                                    </li>
                                    <li className="tab-nav-item" data-tab-id="4">
                                        <span className="tabs-icon">
                                            <img src="/images/icons/icon-4.svg" alt="icon-4" />
                                        </span>
                                        <span className="tabs-text">Sponsors</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-pane-wrapper">
                                <div data-tab-id="0" className="tab-pane  animated fadeInUp">
                                    <div className="tab-pane-inner">
                                        <div className="widget">
                                            {organizers.length ? (<Organizers organizers={organizers} />) : (
                                                <h3 className='text-[22px] text-title'>No Data Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-id="1" className="tab-pane active animated fadeInUp">
                                    <div className="tab-pane-inner">
                                        <div className="widget">
                                            {speakers.length ? (<Speakers speakers={speakers} />) : (
                                                <h3 className='text-[22px] text-title'>No Data Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-id="2" className="tab-pane animated fadeInUp">
                                    <div className="tab-pane-inner">
                                        <div className="widget">
                                            {locations.length ? (<Locations locations={locations} />) : (
                                                <h3 className='text-[22px] text-title'>No Data Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-id="3" className="tab-pane animated fadeInUp">
                                    <div className="tab-pane-inner">
                                        <div className="widget">
                                            {schedules.length ? (<Schedules schedules={schedules} />) : (
                                                <h3 className='text-[22px] text-title'>No Data Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-id="4" className="tab-pane animated fadeInUp">
                                    <div className="tab-pane-inner">
                                        <div className="widget">
                                            {sponsors.length ? (<Sponsors sponsors={sponsors} />) : (
                                                <h3 className='text-[22px] text-title'>No Data Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceDetails