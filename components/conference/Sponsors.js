// External Imports
import React from 'react';

// Internal Imports
import Sponsor from '../card/Sponsor'

const Sponsors = ({ sponsors }) => {
    return (
        <>
            {sponsors && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {sponsors.map((sponsor, index) => (
                        <div key={index}>
                            <Sponsor sponsor={sponsor} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Sponsors