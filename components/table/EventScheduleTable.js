
// External Imports
import React from 'react';

// Internal Imports
import { dayWiseData } from '../../lib/dayWiseData';
import EventInfo from '../card/EventInfo';

const EventScheduleTable = ({ eventTableData }) => {

    const tueDayData = dayWiseData(eventTableData, 'tue')
    const wedDayData = dayWiseData(eventTableData, 'wed')
    const thuDayData = dayWiseData(eventTableData, 'thu')
    const friDayData = dayWiseData(eventTableData, 'fri')
    const satDayData = dayWiseData(eventTableData, 'sat')
    const sunDayData = dayWiseData(eventTableData, 'sun')

    return (
        <>
            <div className="re-table-wrapper">
                <div className="re-table-responsive">
                    <table className="table table-fixed">
                        <thead>
                            <tr>
                                <th scope="col" className="item">
                                    Tue
                                </th>
                                <th scope="col" className="item">
                                    Wed
                                </th>
                                <th scope="col" className="item">
                                    Thu
                                </th>
                                <th scope="col" className="item">
                                    Fri
                                </th>
                                <th scope="col" className="item">
                                    Sat
                                </th>
                                <th scope="col" className="item">
                                    Sun
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="item">
                                    {tueDayData && <div className='grid gap-2 grid-cols-1'>
                                        {tueDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                                <td className="item">
                                    {wedDayData && <div className='grid gap-2 grid-cols-1'>
                                        {wedDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                                <td className="item">
                                    {thuDayData && <div className='grid gap-2 grid-cols-1'>
                                        {thuDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                                <td className="item">
                                    {friDayData && <div className='grid gap-2 grid-cols-1'>
                                        {friDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                                <td className="item">
                                    {satDayData && <div className='grid gap-2 grid-cols-1'>
                                        {satDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                                <td className="item">
                                    {sunDayData && <div className='grid gap-2 grid-cols-1'>
                                        {sunDayData.map((eventInfo) => (
                                            <div className="item" key={eventInfo?.id}>
                                                <EventInfo eventInfo={eventInfo} />
                                            </div>
                                        ))}
                                    </div>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EventScheduleTable


