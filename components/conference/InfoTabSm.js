
// External Imports
import React from 'react'

// Internal Imports
import SortableTabComponentSm from '../sortable/SortableTabComponentSm';

const InfoTabSm = ({ organizers, speakers, locations, schedules, sponsors }) => {

    return (
        <div className="tabs-wrapper tabs-wrapper-style-1">
            <div className="tabs-nav-wrap">
                <SortableTabComponentSm
                    organizers={organizers}
                    speakers={speakers}
                    locations={locations}
                    schedules={schedules}
                    sponsors={sponsors}
                />
            </div>
        </div>
    )
}

export default InfoTabSm