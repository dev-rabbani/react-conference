// External Imports
import React from 'react';

// Internal Imports
import Schedule from '../card/Schedule'

const Schedules = ({ schedules }) => {
    return (
        <>
            {schedules && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {schedules.map((schedule, index) => (
                        <div key={index}>
                            <Schedule schedule={schedule} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Schedules