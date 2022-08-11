// External Imports
import React from 'react';

// Internal Imports
import Organizer from '../card/Organizer';

const Organizers = ({ organizers }) => {
    return (
        <>
            {organizers && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {organizers.map((organizer, index) => (
                        <div key={index}>
                            <Organizer organizer={organizer} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Organizers