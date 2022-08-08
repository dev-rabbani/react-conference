
// External Imports
import React from 'react';

// Internal Imports
import { dayWiseData, dayWiseIntervals } from '../../lib/dayWiseData';
import { getDayName } from '../../lib/getDayName';
import EventInfo from '../card/EventInfo';

const EventScheduleTable = ({ eventTableData }) => {

    // TODO: lib er modde jabe
    const dataWithIntervalsWithTitle = (arr) => {
        const result = arr.map((singleEvent) => {
            const { id, schedules } = singleEvent
            const filterIntervalData = schedules.filter((schedule) => {
                return schedule.intervals.filter(Boolean)
            })
            const filterInterValDataWithTitle = filterIntervalData.map((item) => {
                const { day, intervals } = item;

                if (intervals.length) {
                    const filterIntervals = intervals.filter((v) => v.title)
                    return {
                        id,
                        day,
                        filterIntervals
                    }
                }
            })
            const data = filterInterValDataWithTitle.filter((item) => item?.filterIntervals?.length)
            return data
        })

        return result
    }

    const mainDataWithTitle = dataWithIntervalsWithTitle(eventTableData);

    const flatData = mainDataWithTitle.flat(Infinity)


    const cloneMainData = [...flatData];
    const modifyMainData = cloneMainData.map(({ id, day, filterIntervals }) => {
        return { id, filterIntervals, day, dayName: getDayName(day) };
    });

    const tueDayData = dayWiseData(modifyMainData, 'tue')
    const wedDayData = dayWiseData(modifyMainData, 'wed')
    const thuDayData = dayWiseData(modifyMainData, 'thu')
    const friDayData = dayWiseData(modifyMainData, 'fri')
    const satDayData = dayWiseData(modifyMainData, 'sat')
    const sunDayData = dayWiseData(modifyMainData, 'sun')

    console.log({ tueDayData });
    console.log({ wedDayData });
    console.log({ thuDayData });
    console.log({ friDayData });
    console.log({ satDayData });
    console.log({ sunDayData });

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
                                    {tueDayData && tueDayData?.length && (
                                        <>
                                            {tueDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {wedDayData && wedDayData?.length && (
                                        <>
                                            {wedDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {thuDayData && thuDayData?.length && (
                                        <>
                                            {thuDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {friDayData && friDayData?.length && (
                                        <>
                                            {friDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {satDayData && satDayData?.length && (
                                        <>
                                            {satDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {sunDayData && sunDayData?.length && (
                                        <>
                                            {sunDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
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


