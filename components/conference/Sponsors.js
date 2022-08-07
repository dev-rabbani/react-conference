// External Imports
import React from 'react';

// Internal Imports
import Sponsor from '../card/Sponsor'

const Sponsors = ({ sponsors }) => {
    return (
        <>
            {sponsors && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {sponsors.map((sponsor) => (
                        <div key={sponsor?.name}>
                            <Sponsor sponsor={sponsor} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Sponsors