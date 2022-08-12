
// External Imports
import React, { useEffect } from 'react'
import SortableTabComponent from '../sortable/SortableTabComponent';

// Internal Imports
import Locations from './Locations';
import Organizers from './Organizers';
import Schedules from './Schedules';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

const InfoTab = ({ organizers, speakers, locations, schedules, sponsors }) => {

    // useEffect stuff
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
        <div className="tabs-wrapper tabs-wrapper-style-1">
            <div className="tabs-nav-wrap">
                <SortableTabComponent />
            </div>

            <div className="tab-pane-wrapper">
                <div data-tab-id="1" className="tab-pane  animated fadeInUp">
                    <div className="tab-pane-inner">
                        {organizers?.length ? (<Organizers organizers={organizers} />) : (
                            <h3 className='text-[22px] text-title'>No Data Found</h3>
                        )}
                    </div>
                </div>
                <div data-tab-id="2" className="tab-pane active animated fadeInUp">
                    <div className="tab-pane-inner">
                        {speakers?.length ? (<Speakers speakers={speakers} />) : (
                            <h3 className='text-[22px] text-title'>No Data Found</h3>
                        )}
                    </div>
                </div>
                <div data-tab-id="3" className="tab-pane animated fadeInUp">
                    <div className="tab-pane-inner">
                        {locations?.length ? (<Locations locations={locations} />) : (
                            <h3 className='text-[22px] text-title'>No Data Found</h3>
                        )}
                    </div>
                </div>
                <div data-tab-id="4" className="tab-pane animated fadeInUp">
                    <div className="tab-pane-inner">
                        {schedules?.length ? (<Schedules schedules={schedules} />) : (
                            <h3 className='text-[22px] text-title'>No Data Found</h3>
                        )}
                    </div>
                </div>
                <div data-tab-id="5" className="tab-pane animated fadeInUp">
                    <div className="tab-pane-inner">
                        {sponsors?.length ? (<Sponsors sponsors={sponsors} />) : (
                            <h3 className='text-[22px] text-title'>No Data Found</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoTab