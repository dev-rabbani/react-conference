
// External Imports
import React from 'react';

// Internal Imports
import { dayWiseData } from '../../lib/dayWiseData';
import { getDayName } from '../../lib/getDayName';
import InfoCard from '../card/InfoCard';

const EventScheduleTable = ({ eventTableData }) => {

    // take arr as parameter and return  - filter interval data with title value
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

    //  main data
    const mainDataWithTitle = dataWithIntervalsWithTitle(eventTableData);
    const flatData = mainDataWithTitle.flat(Infinity)


    // modify needed structure [{id, filterIntervals, day, dayName, dayName}]
    const cloneMainData = [...flatData];
    const modifyMainData = cloneMainData.map(({ id, day, filterIntervals }) => {
        return { id, filterIntervals, day, dayName: getDayName(day) };
    });

    // daywise data get
    const tueDayData = dayWiseData(modifyMainData, 'tue')
    const wedDayData = dayWiseData(modifyMainData, 'wed')
    const thuDayData = dayWiseData(modifyMainData, 'thu')
    const friDayData = dayWiseData(modifyMainData, 'fri')
    const satDayData = dayWiseData(modifyMainData, 'sat')
    const sunDayData = dayWiseData(modifyMainData, 'sun')
    const monDayData = dayWiseData(modifyMainData, 'mon')

    // schIntervals
    const schIntervals = modifyMainData.map(({ filterIntervals }) => {
        const beginEnd = filterIntervals.map(({ begin, end }) => {
            return { begin, end }
        })

        return { beginEnd };
    });

    // schIntervals flated version
    const flatSchIntervals = schIntervals.flat(Infinity);

    // beginTimes collection
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

    // remove duplicate and sort (a - b algorithm)
    const beginIds = beginTimeNum.map(o => o.id)
    const filteredTimesWithSort = beginTimeNum.filter(({ id }, index) => !beginIds.includes(id, index + 1)).sort((a, b) => a.id - b.id)


    // table head static data [{ id, label, value}]
    const tableHeadLabels = [
        { id: 1, label: 'Time', value: 'time' },
        { id: 2, label: 'Tue', value: 'tue' },
        { id: 3, label: 'Wed', value: 'wed' },
        { id: 4, label: 'Thu', value: 'thu' },
        { id: 5, label: 'Fri', value: 'fri' },
        { id: 6, label: 'Sat', value: 'sat' },
        { id: 7, label: 'Sun', value: 'sun' },
        { id: 8, label: 'Mon', value: 'mon' },
    ];


    // get timeWiseData function stuff {id, day, dayName,filterIntervals }
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

    return (
        <>

            <div className="re-table-wrapper">
                <div className="re-table-responsive">
                    <table className="table xl:table-fixed">
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
                            {filteredTimesWithSort.map((time, ind) => <tr key={ind}>

                                <td className='item time-td'>
                                    {time.begin}
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(tueDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(wedDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(thuDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(friDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(satDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(sunDayData, time.begin)} time={time} />
                                </td>
                                <td className='item'>
                                    <InfoCard data={timeWiseData(monDayData, time.begin)} time={time} />
                                </td>

                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EventScheduleTable


