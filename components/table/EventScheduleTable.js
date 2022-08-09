
// External Imports
import React from 'react';

// Internal Imports
import { dayWiseData, dayWiseIntervals } from '../../lib/dayWiseData';
import { getDayName } from '../../lib/getDayName';
import EventInfo from '../card/EventInfo';
import Info from '../card/Info';

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
    const monDayData = dayWiseData(modifyMainData, 'mon')

    // console.log({ monDayData });

    // console.log({ tueDayData });
    // console.log({ wedDayData });
    // console.log({ thuDayData });
    // console.log({ friDayData });
    // console.log({ satDayData });
    // console.log({ sunDayData });
    // console.log({ monDayData });

    // const cloneWedData = [...wedDayData];
    // const wedIntervals = cloneWedData.map(({ filterIntervals }) => {

    //     const beginEnd = filterIntervals.map(({ begin, end }) => {
    //         return { begin, end }
    //     })

    //     return { beginEnd };
    // });

    // const flatWedIntervals = wedIntervals.flat(Infinity);
    // const flatWedIntervals = wedIntervals.flat(Infinity);

    // console.log(wedIntervals)
    // console.log(flatWedIntervals)

    // const wedBeginTime = [];

    // flatWedIntervals.map((item, ind) => {
    //     item.beginEnd.map((v, i) => {
    //         wedBeginTime.push(v.begin)
    //     })
    // })

    // const newArr = wedBeginTime.map((item) => {
    //     return Number(item.split(':')[0])
    // })

    // console.log(newArr);

    // const max = Math.max(...newArr);
    // const min = Math.min(...newArr);
    // console.log(max)
    // console.log(min)
    // console.log(modifyMainData);

    const schIntervals = modifyMainData.map(({ filterIntervals }) => {

        const beginEnd = filterIntervals.map(({ begin, end }) => {
            return { begin, end }
        })

        return { beginEnd };
    });

    // const flatWedIntervals = wedIntervals.flat(Infinity);
    const flatSchIntervals = schIntervals.flat(Infinity);
    // console.log(flatSchIntervals);

    const beginTimes = [];

    flatSchIntervals.map((v1) => {
        v1.beginEnd.map((v2) => {
            beginTimes.push(v2.begin)
        })
    })

    const beginTimeNum = beginTimes.map((v1) => {
        const id = Number(v1.split(':')[0]);
        return { id, begin: v1 }
    })

    const beginIds = beginTimeNum.map(o => o.id)
    const filteredTimesWithSort = beginTimeNum.filter(({ id }, index) => !beginIds.includes(id, index + 1)).sort((a, b) => a.id - b.id)

    console.log(filteredTimesWithSort);

    // const beginTimeDataCollection = [...new Set(beginTimes)];
    // console.log(beginTimeNum);

    // const minTime = beginTimeDataCollection[0];
    // const maxTime = beginTimeDataCollection[beginTimeDataCollection.length - 1];
    // const minTime = Math.min(...beginTimeDataCollection);
    // const maxTime = Math.max(...beginTimeDataCollection);
    // console.log(minTime)
    // console.log(maxTime)

    // console.log(beginTimeDataCollection.sort((a, b) => a - b));
    // console.log(minTime);
    // console.log(maxTime);
    // console.log(beginTimeDataCollection)

    const tableHeadLabels = [
        // { id: 1, label: 'Time', value: 'time' },
        { id: 2, label: 'Tue', value: 'tue' },
        { id: 3, label: 'Wed', value: 'wed' },
        { id: 4, label: 'Thu', value: 'thu' },
        { id: 5, label: 'Fri', value: 'fri' },
        { id: 6, label: 'Sat', value: 'sat' },
        { id: 7, label: 'Sun', value: 'sun' },
        { id: 8, label: 'Mon', value: 'mon' },
    ];
    const dayNameWiseDataCollection = [tueDayData, wedDayData, thuDayData, friDayData, satDayData, sunDayData, monDayData];
    const dayNames = ['tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon'];


    // console.log(wedDayData)

    const timeWiseData = (arr, time) => {
        const cloneArr = [...arr];
        return cloneArr.map(({ id, day, dayName, filterIntervals }) => {
            const matchedDataFilter = filterIntervals.filter((item) => item.begin == time)
            const matchedData = (matchedDataFilter && matchedDataFilter.length > 0) && matchedDataFilter;
            if (matchedData) {
                return { id, day, dayName, matchedData };
            }
            return null
        }).filter(Boolean)
    }
    // const testData = timeWiseData(wedDayData, '10:00').filter(Boolean)
    // console.log(testData.filter(Boolean));
    // const data10am = wedDayData





    return (
        <>
            {/* {flatWedIntervals.map((item, ind) => (
                <div key={ind}>
                    {item.beginEnd.map((v, i) => (
                        <div key={i}>
                            <p>Begin: {v.begin}</p>
                            <p>End: {v.end}</p>
                        </div>
                    ))}
                </div>
            ))} */}

            <div className="re-table-wrapper">
                <div className="re-table-responsive">
                    <table className="table table-fixed">
                        <thead>
                            {tableHeadLabels && tableHeadLabels.length > 0 && <tr>
                                {tableHeadLabels.map((item) => (
                                    <td scope='col' className='item' key={item?.id}>
                                        {item?.label}
                                    </td>
                                ))}
                            </tr>}

                        </thead>
                        <tbody>
                            {filteredTimesWithSort.map((v, i) => <tr key={i}>
                                {dayNames && (
                                    <>
                                        {dayNames.map((item, index) => (
                                            <td className='item' key={index}>
                                                {/* {v.begin} */}
                                                {/* <Info data={testFunc("hellow Dunia")} /> */}
                                                <Info data={timeWiseData(wedDayData, '10:00')} />
                                            </td>
                                        ))}
                                    </>
                                )}
                            </tr>)}

                            {/* <tr>
                                <td className="item">

                                </td>
                                <td className="item">
                                    {tueDayData && tueDayData?.length > 0 && (
                                        <>
                                            {tueDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {wedDayData && wedDayData?.length > 0 && (
                                        <>
                                            {wedDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {thuDayData && thuDayData?.length > 0 && (
                                        <>
                                            {thuDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {friDayData && friDayData?.length > 0 && (
                                        <>
                                            {friDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {satDayData && satDayData?.length > 0 && (
                                        <>
                                            {satDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {sunDayData && sunDayData?.length > 0 && (
                                        <>
                                            {sunDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                                <td className="item">
                                    {monDayData && monDayData?.length > 0 && (
                                        <>
                                            {monDayData.map((eventInfo, index) => (
                                                <EventInfo eventInfo={eventInfo} key={index} />
                                            ))}
                                        </>
                                    )}
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EventScheduleTable


